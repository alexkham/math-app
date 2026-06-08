const probabilityFormulaList = [
   

// /probability/formulas — Batch 5: Continuous Distributions + Transformations
// 22 entries across 5 categories
// 19 Covered, 0 Gap, 3 Missing (MGF entries — no site anchor)
// 1 backfill-flagged entity: continuous_uniform_distribution



  // ─── Continuous Uniform (4) ──────────────────────────────────────

  {
    // Backfill flag: entity 'continuous_uniform_distribution' not yet in registry.
    name: 'Continuous Uniform PDF',
    entity: 'continuous_uniform_distribution',
    category: 'Continuous Uniform',
    formula: `$$f_X(x) = \\frac{1}{b - a}, \\quad a \\leq x \\leq b$$`,
    link: { label: 'Probability Density Function and Support', url: '/probability/distributions/continuous/uniform#5' },
    fields: {
      explanation: `Constant density across the interval $[a, b]$, zero outside. Models a quantity that is equally likely to fall anywhere within the range.`,
      conditions: `$a < b$.`,
      related_formulas: `- [Continuous Uniform CDF](!/probability/formulas#continuous_uniform_cdf)
- [Discrete Uniform PMF](!/probability/formulas#discrete_uniform_pmf)
- [PDF Normalization](!/probability/formulas#pdf_normalization)`,
    },
  },

  {
    name: 'Continuous Uniform CDF',
    entity: 'continuous_uniform_distribution',
    category: 'Continuous Uniform',
    formula: `$$F_X(x) = \\frac{x - a}{b - a}, \\quad a \\leq x \\leq b$$`,
    link: { label: 'Cumulative Distribution Function', url: '/probability/distributions/continuous/uniform#6' },
    fields: {
      explanation: `Linear ramp from 0 at $x = a$ to 1 at $x = b$. The CDF grows uniformly because the density is constant over the support.`,
      related_formulas: `- [Continuous Uniform PDF](!/probability/formulas#continuous_uniform_pdf)
- [CDF from PDF](!/probability/formulas#cdf_from_pdf)`,
    },
  },

  {
    name: 'Continuous Uniform Mean',
    entity: 'continuous_uniform_distribution',
    category: 'Continuous Uniform',
    formula: `$$E[X] = \\frac{a + b}{2}$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/continuous/uniform#7' },
    fields: {
      explanation: `Midpoint of the interval — by symmetry of the uniform density about the center.`,
      related_formulas: `- [Continuous Uniform PDF](!/probability/formulas#continuous_uniform_pdf)
- [Discrete Uniform Mean](!/probability/formulas#discrete_uniform_mean)`,
    },
  },

  {
    name: 'Continuous Uniform Variance',
    entity: 'continuous_uniform_distribution',
    category: 'Continuous Uniform',
    formula: `$$\\operatorname{Var}(X) = \\frac{(b - a)^2}{12}$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/continuous/uniform#8' },
    fields: {
      explanation: `Variance grows with the square of the interval length. The factor $1/12$ is characteristic of the uniform distribution.`,
      related_formulas: `- [Continuous Uniform Mean](!/probability/formulas#continuous_uniform_mean)
- [Discrete Uniform Variance](!/probability/formulas#discrete_uniform_variance)`,
    },
  },

  // ─── Exponential (5) ─────────────────────────────────────────────

  {
    name: 'Exponential PDF',
    entity: 'exponential_distribution',
    category: 'Exponential',
    formula: `$$f_X(x) = \\lambda e^{-\\lambda x}, \\quad x \\geq 0$$`,
    link: { label: 'Probability Density Function and Support', url: '/probability/distributions/continuous/exponential#5' },
    fields: {
      explanation: `Density of waiting time until the next event in a Poisson process with rate $\\lambda$. Decays exponentially — long waits are increasingly unlikely.`,
      conditions: `$\\lambda > 0$.`,
      related_formulas: `- [Exponential CDF](!/probability/formulas#exponential_cdf)
- [Exponential Memoryless](!/probability/formulas#exponential_memoryless)
- [Geometric PMF](!/probability/formulas#geometric_pmf)`,
      related_definitions: `- [Exponential Distribution](!/probability/definitions#exponential_distribution)`,
    },
  },

  {
    name: 'Exponential CDF',
    entity: 'exponential_distribution',
    category: 'Exponential',
    formula: `$$F_X(x) = 1 - e^{-\\lambda x}, \\quad x \\geq 0$$`,
    link: { label: 'Cumulative Distribution Function', url: '/probability/distributions/continuous/exponential#6' },
    fields: {
      explanation: `Probability that the waiting time is at most $x$. Survival function $P(X > x) = e^{-\\lambda x}$ decays at rate $\\lambda$.`,
      derivation: `$F_X(x) = \\int_0^x \\lambda e^{-\\lambda t}\\,dt = 1 - e^{-\\lambda x}$.`,
      related_formulas: `- [Exponential PDF](!/probability/formulas#exponential_pdf)
- [Geometric CDF](!/probability/formulas#geometric_cdf)`,
    },
  },

  {
    name: 'Exponential Mean',
    entity: 'exponential_distribution',
    category: 'Exponential',
    formula: `$$E[X] = \\frac{1}{\\lambda}$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/continuous/exponential#7' },
    fields: {
      explanation: `Expected waiting time. Inverse of the rate — higher rate means shorter expected wait.`,
      related_formulas: `- [Exponential Variance](!/probability/formulas#exponential_variance)
- [Geometric Mean](!/probability/formulas#geometric_mean)`,
    },
  },

  {
    name: 'Exponential Variance',
    entity: 'exponential_distribution',
    category: 'Exponential',
    formula: `$$\\operatorname{Var}(X) = \\frac{1}{\\lambda^2}$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/continuous/exponential#8' },
    fields: {
      explanation: `Variance equals the squared mean. Standard deviation equals the mean — a signature of the exponential.`,
      related_formulas: `- [Exponential Mean](!/probability/formulas#exponential_mean)
- [Geometric Variance](!/probability/formulas#geometric_variance)`,
    },
  },

  {
    name: 'Exponential Memoryless',
    entity: 'exponential_distribution',
    category: 'Exponential',
    formula: `$$P(X > s + t \\mid X > s) = P(X > t)$$`,
    link: { label: 'Properties', url: '/probability/distributions/continuous/exponential#15' },
    fields: {
      explanation: `Memoryless property: given that no event has occurred by time $s$, the remaining wait has the same distribution as a fresh start. The exponential is the unique continuous distribution with this property.`,
      conditions: `$s, t \\geq 0$.`,
      related_formulas: `- [Exponential CDF](!/probability/formulas#exponential_cdf)
- [Geometric Memoryless](!/probability/formulas#geometric_memoryless)`,
      related_definitions: `- [Conditional Probability](!/probability/definitions#conditional_probability)`,
    },
  },

  // ─── Normal (7) ──────────────────────────────────────────────────

  {
    name: 'Normal PDF',
    entity: 'normal_distribution',
    category: 'Normal',
    formula: `$$f_X(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,\\exp\\!\\left(-\\frac{(x - \\mu)^2}{2\\sigma^2}\\right)$$`,
    link: { label: 'Probability Density Function and Support', url: '/probability/distributions/continuous/normal#5' },
    fields: {
      explanation: `Bell-shaped density centered at $\\mu$ with spread controlled by $\\sigma$. Symmetric about the mean and characterized entirely by its first two moments.`,
      conditions: `$\\mu \\in \\mathbb{R}$, $\\sigma > 0$.`,
      related_formulas: `- [Standard Normal PDF](!/probability/formulas#standard_normal_pdf)
- [Normal Mean](!/probability/formulas#normal_mean)
- [Normal Standardization](!/probability/formulas#normal_standardization)`,
      related_definitions: `- [Normal Distribution](!/probability/definitions#normal_distribution)`,
    },
  },

  {
    name: 'Standard Normal PDF',
    entity: 'normal_distribution',
    category: 'Normal',
    formula: `$$\\varphi(z) = \\frac{1}{\\sqrt{2\\pi}}\\,e^{-z^2/2}$$`,
    link: { label: 'Special Cases', url: '/probability/distributions/continuous/normal#14' },
    fields: {
      explanation: `The normal PDF with $\\mu = 0$ and $\\sigma = 1$. Tabulated extensively; any normal probability can be reduced to a standard normal probability via standardization.`,
      related_formulas: `- [Normal PDF](!/probability/formulas#normal_pdf)
- [Normal Standardization](!/probability/formulas#normal_standardization)`,
    },
  },

  {
    name: 'Normal Mean',
    entity: 'normal_distribution',
    category: 'Normal',
    formula: `$$E[X] = \\mu$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/continuous/normal#7' },
    fields: {
      explanation: `The parameter $\\mu$ is the mean by construction. Also the median and the mode by symmetry of the normal density.`,
      related_formulas: `- [Normal PDF](!/probability/formulas#normal_pdf)
- [Normal Variance](!/probability/formulas#normal_variance)`,
    },
  },

  {
    name: 'Normal Variance',
    entity: 'normal_distribution',
    category: 'Normal',
    formula: `$$\\operatorname{Var}(X) = \\sigma^2$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/continuous/normal#8' },
    fields: {
      explanation: `The squared scale parameter $\\sigma^2$ is the variance by construction. Standard deviation $\\sigma$ has the same units as $X$.`,
      related_formulas: `- [Normal Mean](!/probability/formulas#normal_mean)
- [Normal PDF](!/probability/formulas#normal_pdf)`,
    },
  },

  {
    name: 'Normal Standardization',
    entity: 'normal_distribution',
    category: 'Normal',
    formula: `$$Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$$`,
    link: { label: 'Properties', url: '/probability/distributions/continuous/normal#15' },
    fields: {
      explanation: `Subtracting the mean and dividing by the standard deviation transforms any normal into a standard normal. This is the key step for using $Z$-tables to compute normal probabilities.`,
      related_formulas: `- [Standard Normal PDF](!/probability/formulas#standard_normal_pdf)
- [Normal Linear Transform](!/probability/formulas#normal_linear_transform)`,
    },
  },

  {
    name: 'Sum of Independent Normals',
    entity: 'normal_distribution',
    category: 'Normal',
    formula: `$$X \\sim N(\\mu_X, \\sigma_X^2),\\; Y \\sim N(\\mu_Y, \\sigma_Y^2) \\implies X + Y \\sim N(\\mu_X + \\mu_Y,\\; \\sigma_X^2 + \\sigma_Y^2)$$`,
    link: { label: 'Properties', url: '/probability/distributions/continuous/normal#15' },
    fields: {
      explanation: `The normal family is closed under sums of independent variables. Means add and variances add. This stability under addition underlies the central limit theorem.`,
      conditions: `$X$ and $Y$ must be independent.`,
      related_formulas: `- [Normal Linear Transform](!/probability/formulas#normal_linear_transform)
- [Linearity of Expectation](!/probability/formulas#linearity_of_expectation)
- [Variance of Sum (Independent)](!/probability/formulas#variance_of_sum_independent)
- [Poisson Sum (Independent)](!/probability/formulas#poisson_sum_independent)`,
      related_definitions: `- [Independent Random Variables](!/probability/definitions#independent_random_variables)`,
    },
  },

  {
    name: 'Normal Linear Transform',
    entity: 'normal_distribution',
    category: 'Normal',
    formula: `$$X \\sim N(\\mu, \\sigma^2) \\implies aX + b \\sim N(a\\mu + b,\\; a^2\\sigma^2)$$`,
    link: { label: 'Properties', url: '/probability/distributions/continuous/normal#15' },
    fields: {
      explanation: `Affine transformations of a normal random variable remain normal. The mean shifts and scales linearly; the variance scales by $a^2$.`,
      conditions: `$a \\neq 0$.`,
      related_formulas: `- [Normal Standardization](!/probability/formulas#normal_standardization)
- [Sum of Independent Normals](!/probability/formulas#sum_of_independent_normals)
- [Variance of Linear Transform](!/probability/formulas#variance_of_linear_transform)`,
    },
  },

  // ─── Transformations (3) — shared anchor ─────────────────────────

  {
    name: 'PDF of Monotone Transformation',
    entity: 'pdf_of_transformed_variable',
    category: 'Transformations',
    formula: `$$f_Y(y) = f_X\\!\\left(g^{-1}(y)\\right) \\cdot \\left|\\frac{d}{dy} g^{-1}(y)\\right|$$`,
    link: { label: 'Transformations (Change of Variables)', url: '/probability/probability-function/pdf#11' },
    fields: {
      explanation: `Change-of-variables formula for $Y = g(X)$ when $g$ is monotone and differentiable. The derivative factor accounts for how $g$ stretches or compresses regions of the input.`,
      conditions: `$g$ must be strictly monotone and differentiable on the support of $X$.`,
      related_formulas: `- [PDF of Linear Transformation](!/probability/formulas#pdf_of_linear_transformation)
- [CDF Method for Transformations](!/probability/formulas#cdf_method_for_transformations)
- [PDF as CDF Derivative](!/probability/formulas#pdf_as_cdf_derivative)`,
      related_definitions: `- [Function of a Random Variable](!/probability/definitions#function_of_random_variable)`,
    },
  },

  {
    name: 'CDF Method for Transformations',
    entity: 'function_of_random_variable',
    category: 'Transformations',
    formula: `$$F_Y(y) = P(g(X) \\leq y)$$`,
    link: { label: 'Transformations (Change of Variables)', url: '/probability/probability-function/pdf#11' },
    fields: {
      explanation: `General method for finding the distribution of $Y = g(X)$. Express the event $\\{g(X) \\leq y\\}$ as an event in $X$, evaluate using the distribution of $X$, then differentiate to obtain $f_Y$ if needed.`,
      related_formulas: `- [PDF of Monotone Transformation](!/probability/formulas#pdf_of_monotone_transformation)
- [CDF Definition](!/probability/formulas#cdf_definition)`,
      related_definitions: `- [Function of a Random Variable](!/probability/definitions#function_of_random_variable)`,
    },
  },

  {
    name: 'PDF of Linear Transformation',
    entity: 'pdf_of_transformed_variable',
    category: 'Transformations',
    formula: `$$Y = aX + b \\implies f_Y(y) = \\frac{1}{|a|}\\,f_X\\!\\left(\\frac{y - b}{a}\\right)$$`,
    link: { label: 'Transformations (Change of Variables)', url: '/probability/probability-function/pdf#11' },
    fields: {
      explanation: `Special case of the change-of-variables formula for $g(x) = ax + b$. The factor $1/|a|$ rescales the density when the linear map stretches or compresses the input axis.`,
      conditions: `$a \\neq 0$.`,
      related_formulas: `- [PDF of Monotone Transformation](!/probability/formulas#pdf_of_monotone_transformation)
- [Normal Linear Transform](!/probability/formulas#normal_linear_transform)`,
    },
  },

  // ─── Moment Generating Function (3) — Missing ────────────────────

  {
    // TODO: Missing — site has no dedicated MGF section. Audit marker.
    name: 'MGF Definition',
    entity: 'moment_generating_function',
    category: 'Moment Generating Function',
    formula: `$$M_X(t) = E\\!\\left[e^{tX}\\right]$$`,
    link: { label: "Moment Generating Function", url: "/probability/expected-value#function" },
    fields: {
      explanation: `The moment generating function of $X$ is the expectation of $e^{tX}$ as a function of $t$, for those $t$ where the expectation exists. Encodes the distribution: if two random variables have MGFs that agree in a neighborhood of zero, their distributions agree.`,
      conditions: `Defined for $t$ in some open interval around zero. May not exist for distributions with heavy tails.`,
      related_formulas: `- [MGF Moments](!/probability/formulas#mgf_moments)
- [MGF of Sum (Independent)](!/probability/formulas#mgf_of_sum_independent)
- [LOTUS Discrete](!/probability/formulas#lotus_discrete)`,
      related_definitions: `- [Moment Generating Function](!/probability/definitions#moment_generating_function)`,
    },
  },

  {
    // TODO: Missing — site has no dedicated MGF section. Audit marker.
    name: 'MGF Moments',
    entity: 'moment_generating_function',
    category: 'Moment Generating Function',
    formula: `$$M_X^{(k)}(0) = E[X^k]$$`,
   link: { label: "MGF and Moments", url: "/probability/expected-value#function" },
    fields: {
      explanation: `The $k$-th derivative of the MGF at zero gives the $k$-th raw moment. Differentiating term-by-term in the Taylor series of $E[e^{tX}]$ extracts moments one at a time.`,
      derivation: `Differentiate $M_X(t) = E[e^{tX}]$ inside the expectation: $M_X^{(k)}(t) = E[X^k e^{tX}]$. Evaluate at $t=0$.`,
      related_formulas: `- [MGF Definition](!/probability/formulas#mgf_definition)
- [kth Moment](!/probability/formulas#kth_moment)`,
    },
  },

  {
    // TODO: Missing — site has no dedicated MGF section. Audit marker.
    name: 'MGF of Sum (Independent)',
    entity: 'moment_generating_function',
    category: 'Moment Generating Function',
    formula: `$$M_{X + Y}(t) = M_X(t) \\cdot M_Y(t)$$`,
    link: { label: "MGF of a Sum", url: "/probability/expected-value#function" },
    fields: {
      explanation: `MGF of a sum of independent random variables factors into the product of individual MGFs. This converts convolution of distributions into multiplication of functions, simplifying many sum-of-independent-variables calculations.`,
      conditions: `$X$ and $Y$ must be independent. Both MGFs must exist in a common neighborhood of zero.`,
      related_formulas: `- [MGF Definition](!/probability/formulas#mgf_definition)
- [Sum of Independent Normals](!/probability/formulas#sum_of_independent_normals)
- [Variance of Sum (Independent)](!/probability/formulas#variance_of_sum_independent)`,
      related_definitions: `- [Independent Random Variables](!/probability/definitions#independent_random_variables)`,
    },
  },



  // /probability/formulas — Batch 2: Random Variables & Distribution Functions
// 18 entries across 6 categories
// 18 Covered, 0 Gap, 0 Missing
// 1 backfill-flagged entity: indicator_random_variable



  // ─── Probability Mass Function (2) ──────────────────────────────

  {
    name: 'PMF Non-negativity',
    entity: 'probability_mass_function',
    category: 'Probability Mass Function',
    formula: `$$p_X(x) \\geq 0 \\quad \\text{for all } x$$`,
    link: { label: 'The Two Fundamental Axioms', url: '/probability/probability-function/pmf#3' },
    fields: {
      explanation: `The probability mass function assigns a non-negative number to each value the random variable can take. Probabilities are never negative.`,
      conditions: `$X$ is a discrete random variable.`,
      related_formulas: `- [PMF Normalization](!/probability/formulas#pmf_normalization)
- [CDF from PMF](!/probability/formulas#cdf_from_pmf)`,
      related_definitions: `- [Discrete Random Variable](!/probability/definitions#discrete_random_variable)`,
    },
  },

  {
    name: 'PMF Normalization',
    entity: 'probability_mass_function',
    category: 'Probability Mass Function',
    formula: `$$\\sum_{x} p_X(x) = 1$$`,
    link: { label: 'The Two Fundamental Axioms', url: '/probability/probability-function/pmf#3' },
    fields: {
      explanation: `Summing the probability mass function over all values $X$ can take gives one. Total probability is conserved across the support of the random variable.`,
      conditions: `Sum is over the support of $X$ — the set of values where $p_X(x) > 0$.`,
      related_formulas: `- [PMF Non-negativity](!/probability/formulas#pmf_non_negativity)
- [PDF Normalization](!/probability/formulas#pdf_normalization)`,
      related_definitions: `- [Discrete Random Variable](!/probability/definitions#discrete_random_variable)
- [Event](!/probability/definitions#event)`,
    },
  },

  // ─── Probability Density Function (2) ───────────────────────────

  {
    name: 'PDF Non-negativity',
    entity: 'probability_density_function',
    category: 'Probability Density Function',
    formula: `$$f_X(x) \\geq 0 \\quad \\text{for all } x$$`,
    link: { label: 'The Two Fundamental Axioms', url: '/probability/probability-function/pdf#5' },
    fields: {
      explanation: `The probability density function is non-negative everywhere. Density is not probability — it can exceed one — but it cannot dip below zero.`,
      conditions: `$X$ is a continuous random variable.`,
      related_formulas: `- [PDF Normalization](!/probability/formulas#pdf_normalization)
- [PDF as CDF Derivative](!/probability/formulas#pdf_as_cdf_derivative)`,
      related_definitions: `- [Continuous Random Variable](!/probability/definitions#continuous_random_variable)`,
    },
  },

  {
    name: 'PDF Normalization',
    entity: 'probability_density_function',
    category: 'Probability Density Function',
    formula: `$$\\int_{-\\infty}^{\\infty} f_X(x)\\,dx = 1$$`,
    link: { label: 'The Two Fundamental Axioms', url: '/probability/probability-function/pdf#5' },
    fields: {
      explanation: `Integrating the density over the entire real line gives one. The total area under the PDF curve equals total probability.`,
      related_formulas: `- [PDF Non-negativity](!/probability/formulas#pdf_non_negativity)
- [PMF Normalization](!/probability/formulas#pmf_normalization)
- [Probability of Interval Continuous](!/probability/formulas#probability_of_interval_continuous)`,
      related_definitions: `- [Continuous Random Variable](!/probability/definitions#continuous_random_variable)
- [Event](!/probability/definitions#event)`,
    },
  },

  // ─── Cumulative Distribution Function (4) ───────────────────────

  {
    name: 'CDF Definition',
    entity: 'cumulative_distribution_function',
    category: 'Cumulative Distribution Function',
    formula: `$$F_X(x) = P(X \\leq x)$$`,
    link: { label: 'Mathematical Definition', url: '/probability/cdf#mathematical' },
    fields: {
      explanation: `The cumulative distribution function tracks how much probability has accumulated up to and including the value $x$. Defined for any random variable, discrete or continuous.`,
      notation: `$F_X(x)$ — CDF of $X$ evaluated at $x$.`,
      related_formulas: `- [CDF Limits at Infinity](!/probability/formulas#cdf_limits_at_infinity)
- [CDF Monotonicity](!/probability/formulas#cdf_monotonicity)
- [Probability of Interval via CDF](!/probability/formulas#probability_of_interval_via_cdf)`,
      related_definitions: `- [Random Variable](!/probability/definitions#random_variable)`,
    },
  },

  {
    name: 'CDF Limits at Infinity',
    entity: 'cumulative_distribution_function',
    category: 'Cumulative Distribution Function',
    formula: `$$\\lim_{x \\to -\\infty} F_X(x) = 0, \\qquad \\lim_{x \\to +\\infty} F_X(x) = 1$$`,
    link: { label: 'Key Properties of the CDF', url: '/probability/cdf#properties' },
    fields: {
      explanation: `As the threshold drops to negative infinity, no probability has accumulated; as it climbs to positive infinity, all probability has accumulated.`,
      related_formulas: `- [CDF Definition](!/probability/formulas#cdf_definition)
- [CDF Monotonicity](!/probability/formulas#cdf_monotonicity)
- [CDF Right-continuity](!/probability/formulas#cdf_right_continuity)`,
    },
  },

  {
    name: 'CDF Monotonicity',
    entity: 'cumulative_distribution_function',
    category: 'Cumulative Distribution Function',
    formula: `$$x_1 \\leq x_2 \\implies F_X(x_1) \\leq F_X(x_2)$$`,
    link: { label: 'Key Properties of the CDF', url: '/probability/cdf#properties' },
    fields: {
      explanation: `The CDF is non-decreasing. Larger thresholds capture at least as much probability as smaller ones.`,
      derivation: `$\\{X \\leq x_1\\} \\subseteq \\{X \\leq x_2\\}$ when $x_1 \\leq x_2$, so by the monotonicity rule for events, $P(X \\leq x_1) \\leq P(X \\leq x_2)$.`,
      related_formulas: `- [CDF Definition](!/probability/formulas#cdf_definition)
- [CDF Limits at Infinity](!/probability/formulas#cdf_limits_at_infinity)`,
    },
  },

  {
    name: 'CDF Right-continuity',
    entity: 'cumulative_distribution_function',
    category: 'Cumulative Distribution Function',
    formula: `$$\\lim_{y \\to x^+} F_X(y) = F_X(x)$$`,
    link: { label: 'Key Properties of the CDF', url: '/probability/cdf#properties' },
    fields: {
      explanation: `The CDF is continuous from the right. At any point of discontinuity (a value with positive probability mass), the function jumps up and is evaluated at the top of the jump.`,
      related_formulas: `- [CDF Definition](!/probability/formulas#cdf_definition)
- [CDF Limits at Infinity](!/probability/formulas#cdf_limits_at_infinity)`,
    },
  },

  // ─── CDF Connections (3) ────────────────────────────────────────

  {
    name: 'CDF from PMF',
    entity: 'cumulative_distribution_function',
    category: 'CDF Connections',
    formula: `$$F_X(x) = \\sum_{k \\leq x} p_X(k)$$`,
    link: { label: 'Discrete Random Variables', url: '/probability/cdf#discrete' },
    fields: {
      explanation: `For a discrete random variable, the CDF at $x$ is the sum of probability masses at all values up to and including $x$. The result is a step function with jumps at each value in the support.`,
      related_formulas: `- [CDF Definition](!/probability/formulas#cdf_definition)
- [PMF Non-negativity](!/probability/formulas#pmf_non_negativity)`,
      related_definitions: `- [Discrete Random Variable](!/probability/definitions#discrete_random_variable)
- [Probability Mass Function](!/probability/definitions#probability_mass_function)`,
    },
  },

  {
    name: 'CDF from PDF',
    entity: 'cumulative_distribution_function',
    category: 'CDF Connections',
    formula: `$$F_X(x) = \\int_{-\\infty}^{x} f_X(t)\\,dt$$`,
    link: { label: 'Continuous Random Variables', url: '/probability/cdf#continuous' },
    fields: {
      explanation: `For a continuous random variable, the CDF at $x$ is the integral of the density from $-\\infty$ up to $x$. The CDF accumulates area under the density curve.`,
      related_formulas: `- [CDF Definition](!/probability/formulas#cdf_definition)
- [PDF as CDF Derivative](!/probability/formulas#pdf_as_cdf_derivative)`,
      related_definitions: `- [Continuous Random Variable](!/probability/definitions#continuous_random_variable)
- [Probability Density Function](!/probability/definitions#probability_density_function)`,
    },
  },

  {
    name: 'PDF as CDF Derivative',
    entity: 'probability_density_function',
    category: 'CDF Connections',
    formula: `$$f_X(x) = \\frac{d}{dx} F_X(x)$$`,
    link: { label: 'Continuous Random Variables', url: '/probability/cdf#continuous' },
    fields: {
      explanation: `Where the CDF is differentiable, the PDF is its derivative. Density measures the rate of probability accumulation.`,
      conditions: `$F_X$ must be differentiable at $x$. At points of non-differentiability, the PDF can be defined through other means or set arbitrarily.`,
      related_formulas: `- [CDF from PDF](!/probability/formulas#cdf_from_pdf)
- [PDF Normalization](!/probability/formulas#pdf_normalization)`,
      related_definitions: `- [Continuous Random Variable](!/probability/definitions#continuous_random_variable)`,
    },
  },

  // ─── Computing Probabilities (2) ────────────────────────────────

  {
    name: 'Probability of Interval Continuous',
    entity: 'probability_density_function',
    category: 'Computing Probabilities',
    formula: `$$P(a \\leq X \\leq b) = \\int_{a}^{b} f_X(x)\\,dx$$`,
    link: { label: 'Using the CDF to Compute Probabilities', url: '/probability/cdf#using' },
    fields: {
      explanation: `The probability that a continuous random variable falls in $[a, b]$ equals the area under the PDF over that interval. For continuous distributions the endpoints contribute zero probability, so $\\le$ and $<$ are interchangeable.`,
      related_formulas: `- [PDF Normalization](!/probability/formulas#pdf_normalization)
- [Probability of Interval via CDF](!/probability/formulas#probability_of_interval_via_cdf)`,
      related_definitions: `- [Continuous Random Variable](!/probability/definitions#continuous_random_variable)`,
    },
  },

  {
    name: 'Probability of Interval via CDF',
    entity: 'cumulative_distribution_function',
    category: 'Computing Probabilities',
    formula: `$$P(a < X \\leq b) = F_X(b) - F_X(a)$$`,
    link: { label: 'Using the CDF to Compute Probabilities', url: '/probability/cdf#using' },
    fields: {
      explanation: `The probability that $X$ lands in the half-open interval $(a, b]$ is the difference of CDF values at the endpoints. Works for any random variable, discrete or continuous.`,
      derivation: `$\\{X \\leq b\\} = \\{X \\leq a\\} \\cup \\{a < X \\leq b\\}$ as a disjoint union. Subtracting gives $P(a < X \\leq b) = P(X \\leq b) - P(X \\leq a)$.`,
      related_formulas: `- [CDF Definition](!/probability/formulas#cdf_definition)
- [Probability of Interval Continuous](!/probability/formulas#probability_of_interval_continuous)`,
      related_definitions: `- [Random Variable](!/probability/definitions#random_variable)`,
    },
  },

  // ─── Indicator Random Variables (5) ─────────────────────────────

  {
    // Backfill flag: entity 'indicator_random_variable' not yet in registry.
    name: 'Indicator Random Variable Definition',
    entity: 'indicator_random_variable',
    category: 'Indicator Random Variables',
    formula: `$$I_A(\\omega) = \\begin{cases} 1 & \\text{if } \\omega \\in A \\\\ 0 & \\text{if } \\omega \\notin A \\end{cases}$$`,
    link: { label: 'Definition of an Indicator Random Variable', url: '/probability/indicators#2' },
    fields: {
      explanation: `The indicator of an event $A$ is a random variable that equals one when $A$ occurs and zero otherwise. It converts qualitative event-occurrence into a numerical quantity that can be summed and averaged.`,
      notation: `$I_A$ — indicator of event $A$. Sometimes written $\\mathbf{1}_A$ or $\\chi_A$.`,
      related_formulas: `- [Expectation of Indicator](!/probability/formulas#expectation_of_indicator)
- [Variance of Indicator](!/probability/formulas#variance_of_indicator)
- [Indicator of Intersection](!/probability/formulas#indicator_of_intersection)`,
      related_definitions: `- [Event](!/probability/definitions#event)
- [Random Variable](!/probability/definitions#random_variable)`,
    },
  },

  {
    name: 'Expectation of Indicator',
    entity: 'indicator_random_variable',
    category: 'Indicator Random Variables',
    formula: `$$E[I_A] = P(A)$$`,
    link: { label: 'Expectation of an Indicator Random Variable', url: '/probability/indicators#4' },
    fields: {
      explanation: `The expected value of an indicator equals the probability of the event it indicates. This identity is the bridge between counting events and computing probabilities.`,
      derivation: `$E[I_A] = 1 \\cdot P(I_A = 1) + 0 \\cdot P(I_A = 0) = P(A)$.`,
      related_formulas: `- [Indicator Random Variable Definition](!/probability/formulas#indicator_random_variable_definition)
- [Variance of Indicator](!/probability/formulas#variance_of_indicator)`,
      related_definitions: `- [Event](!/probability/definitions#event)
- [Expected Value](!/probability/definitions#expected_value)`,
    },
  },

  {
    name: 'Variance of Indicator',
    entity: 'indicator_random_variable',
    category: 'Indicator Random Variables',
    formula: `$$\\operatorname{Var}(I_A) = P(A)\\bigl(1 - P(A)\\bigr)$$`,
    link: { label: 'Basic Properties of Indicator Random Variables', url: '/probability/indicators#3' },
    fields: {
      explanation: `An indicator random variable behaves exactly like a Bernoulli trial with success probability $P(A)$. Its variance has the familiar $p(1-p)$ form.`,
      derivation: `Since $I_A^2 = I_A$, $E[I_A^2] = E[I_A] = P(A)$. Then $\\operatorname{Var}(I_A) = E[I_A^2] - E[I_A]^2 = P(A) - P(A)^2 = P(A)(1 - P(A))$.`,
      related_formulas: `- [Expectation of Indicator](!/probability/formulas#expectation_of_indicator)
- [Indicator Random Variable Definition](!/probability/formulas#indicator_random_variable_definition)`,
      related_definitions: `- [Variance](!/probability/definitions#variance)`,
    },
  },

  {
    name: 'Indicator of Intersection',
    entity: 'indicator_random_variable',
    category: 'Indicator Random Variables',
    formula: `$$I_{A \\cap B} = I_A \\cdot I_B$$`,
    link: { label: 'Basic Properties of Indicator Random Variables', url: '/probability/indicators#3' },
    fields: {
      explanation: `The indicator of an intersection equals the product of indicators. Both factors must be one for the product to be one, matching the requirement that both events occur.`,
      related_formulas: `- [Indicator Random Variable Definition](!/probability/formulas#indicator_random_variable_definition)
- [Indicator of Complement](!/probability/formulas#indicator_of_complement)`,
      related_definitions: `- [Intersection of Sets](!/probability/definitions#intersection_of_sets)`,
    },
  },

  {
    name: 'Indicator of Complement',
    entity: 'indicator_random_variable',
    category: 'Indicator Random Variables',
    formula: `$$I_{A^c} = 1 - I_A$$`,
    link: { label: 'Basic Properties of Indicator Random Variables', url: '/probability/indicators#3' },
    fields: {
      explanation: `The indicator of the complement flips zero and one. When $A$ does not occur, the complement does, and vice versa.`,
      related_formulas: `- [Indicator Random Variable Definition](!/probability/formulas#indicator_random_variable_definition)
- [Indicator of Intersection](!/probability/formulas#indicator_of_intersection)`,
      related_definitions: `- [Complement of a Set](!/probability/definitions#complement_of_set)`,
    },
  },






  // /probability/formulas — Batch 3: Measures
// 23 entries across 5 categories
// 12 Covered, 11 Gap, 0 Missing
// 0 backfill-flagged entities (all in registry)



  // ─── Expected Value (6) ──────────────────────────────────────────

  {
    name: 'Expected Value (Discrete)',
    entity: 'expected_value',
    category: 'Expected Value',
    formula: `$$E[X] = \\sum_{x} x \\cdot p_X(x)$$`,
    link: { label: 'Expected Value for Discrete Random Variables', url: '/probability/expected-value#discrete' },
    fields: {
      explanation: `For a discrete random variable, the expected value is the sum of every possible value weighted by its probability mass. This is the long-run average over many independent realizations.`,
      conditions: `Sum is over the support of $X$. Requires $\\sum_x |x| p_X(x) < \\infty$ for the expectation to be defined.`,
      related_formulas: `- [Expected Value (Continuous)](!/probability/formulas#expected_value_continuous)
- [Linearity of Expectation](!/probability/formulas#linearity_of_expectation)
- [LOTUS Discrete](!/probability/formulas#lotus_discrete)`,
      related_definitions: `- [Discrete Random Variable](!/probability/definitions#discrete_random_variable)
- [Probability Mass Function](!/probability/definitions#probability_mass_function)`,
    },
  },

  {
    name: 'Expected Value (Continuous)',
    entity: 'expected_value',
    category: 'Expected Value',
    formula: `$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f_X(x)\\,dx$$`,
    link: { label: 'Expected Value for Continuous Random Variables', url: '/probability/expected-value#continuous' },
    fields: {
      explanation: `For a continuous random variable, the expected value is the integral of $x$ weighted by the density. The density takes the role of the probability mass in the discrete formula.`,
      conditions: `Requires $\\int_{-\\infty}^{\\infty} |x| f_X(x)\\,dx < \\infty$ for the expectation to be defined.`,
      related_formulas: `- [Expected Value (Discrete)](!/probability/formulas#expected_value_discrete)
- [Linearity of Expectation](!/probability/formulas#linearity_of_expectation)
- [LOTUS Continuous](!/probability/formulas#lotus_continuous)`,
      related_definitions: `- [Continuous Random Variable](!/probability/definitions#continuous_random_variable)
- [Probability Density Function](!/probability/definitions#probability_density_function)`,
    },
  },

  {
    name: 'Expected Value of Constant',
    entity: 'expected_value',
    category: 'Expected Value',
    formula: `$$E[c] = c$$`,
    link: { label: 'Properties of Expected Value', url: '/probability/expected-value#properties' },
    fields: {
      explanation: `The expected value of a constant random variable is the constant itself. A degenerate random variable that always equals $c$ has long-run average $c$.`,
      related_formulas: `- [Linearity of Expectation](!/probability/formulas#linearity_of_expectation)`,
    },
  },

  {
    name: 'Linearity of Expectation',
    entity: 'expected_value',
    category: 'Expected Value',
    formula: `$$E[aX + bY] = a\\,E[X] + b\\,E[Y]$$`,
    link: { label: 'Expected Value of a Sum', url: '/probability/expected-value#sum' },
    fields: {
      explanation: `Expectation distributes over linear combinations of random variables. Critically, this holds whether or not $X$ and $Y$ are independent — one of the most useful properties in probability.`,
      variants: `General form for $n$ random variables: $$E\\!\\left[\\sum_{i=1}^{n} a_i X_i\\right] = \\sum_{i=1}^{n} a_i\\,E[X_i]$$`,
      related_formulas: `- [Expected Value of Constant](!/probability/formulas#expected_value_of_constant)
- [Expected Value (Discrete)](!/probability/formulas#expected_value_discrete)
- [Expected Value (Continuous)](!/probability/formulas#expected_value_continuous)`,
      related_definitions: `- [Random Variable](!/probability/definitions#random_variable)`,
    },
  },

  {
    name: 'LOTUS Discrete',
    entity: 'expected_value',
    category: 'Expected Value',
    formula: `$$E[g(X)] = \\sum_{x} g(x)\\,p_X(x)$$`,
    link: { label: 'Expected Value of a Function', url: '/probability/expected-value#function' },
    fields: {
      explanation: `Law of the Unconscious Statistician for discrete random variables. To find the expectation of a function $g(X)$, weight values of $g(x)$ by the PMF — no need to first derive the distribution of $g(X)$.`,
      related_formulas: `- [LOTUS Continuous](!/probability/formulas#lotus_continuous)
- [Expected Value (Discrete)](!/probability/formulas#expected_value_discrete)`,
      related_definitions: `- [Discrete Random Variable](!/probability/definitions#discrete_random_variable)`,
    },
  },

  {
    name: 'LOTUS Continuous',
    entity: 'expected_value',
    category: 'Expected Value',
    formula: `$$E[g(X)] = \\int_{-\\infty}^{\\infty} g(x)\\,f_X(x)\\,dx$$`,
    link: { label: 'Expected Value of a Function', url: '/probability/expected-value#function' },
    fields: {
      explanation: `Law of the Unconscious Statistician for continuous random variables. The expectation of $g(X)$ integrates $g(x)$ against the density of $X$.`,
      related_formulas: `- [LOTUS Discrete](!/probability/formulas#lotus_discrete)
- [Expected Value (Continuous)](!/probability/formulas#expected_value_continuous)`,
      related_definitions: `- [Continuous Random Variable](!/probability/definitions#continuous_random_variable)`,
    },
  },

  // ─── Variance & Standard Deviation (5) ───────────────────────────

  {
    name: 'Variance Definition',
    entity: 'variance',
    category: 'Variance & Standard Deviation',
    formula: `$$\\operatorname{Var}(X) = E\\!\\left[(X - \\mu)^2\\right]$$`,
    link: { label: 'What is Variance', url: '/probability/variance#definition' },
    fields: {
      explanation: `The variance is the expected squared deviation from the mean $\\mu = E[X]$. It measures the spread of the distribution; small variance means values cluster tightly around the mean, large variance means they scatter widely.`,
      conditions: `Requires $E[X^2] < \\infty$.`,
      related_formulas: `- [Variance Computational Formula](!/probability/formulas#variance_computational_formula)
- [Standard Deviation Definition](!/probability/formulas#standard_deviation_definition)`,
      related_definitions: `- [Expected Value](!/probability/definitions#expected_value)`,
    },
  },

  {
    name: 'Variance Computational Formula',
    entity: 'variance',
    category: 'Variance & Standard Deviation',
    formula: `$$\\operatorname{Var}(X) = E[X^2] - (E[X])^2$$`,
    link: { label: 'Properties of Variance', url: '/probability/variance#properties' },
    fields: {
      explanation: `Algebraic equivalent of the variance definition that is usually easier to compute. Find $E[X]$ and $E[X^2]$ separately, then subtract.`,
      derivation: `Expand $E[(X-\\mu)^2] = E[X^2 - 2\\mu X + \\mu^2] = E[X^2] - 2\\mu E[X] + \\mu^2 = E[X^2] - \\mu^2$ since $E[X] = \\mu$.`,
      related_formulas: `- [Variance Definition](!/probability/formulas#variance_definition)
- [Variance of Linear Transform](!/probability/formulas#variance_of_linear_transform)`,
      related_definitions: `- [Expected Value](!/probability/definitions#expected_value)`,
    },
  },

  {
    name: 'Variance of Linear Transform',
    entity: 'variance',
    category: 'Variance & Standard Deviation',
    formula: `$$\\operatorname{Var}(aX + b) = a^2\\,\\operatorname{Var}(X)$$`,
    link: { label: 'Properties of Variance', url: '/probability/variance#properties' },
    fields: {
      explanation: `Adding a constant shifts the distribution but does not change spread. Multiplying by $a$ stretches the distribution and scales variance by $a^2$ — squaring is needed because variance has squared units.`,
      derivation: `$\\operatorname{Var}(aX+b) = E[(aX+b - (a\\mu+b))^2] = E[(a(X-\\mu))^2] = a^2 E[(X-\\mu)^2] = a^2\\operatorname{Var}(X)$.`,
      related_formulas: `- [Variance of Sum (Independent)](!/probability/formulas#variance_of_sum_independent)
- [Linearity of Expectation](!/probability/formulas#linearity_of_expectation)`,
    },
  },

  {
    name: 'Variance of Sum (Independent)',
    entity: 'variance',
    category: 'Variance & Standard Deviation',
    formula: `$$\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$$`,
    link: { label: 'Variance of a Sum', url: '/probability/variance#sum' },
    fields: {
      explanation: `Variances add for independent random variables. Unlike linearity of expectation, this requires independence — without it, the covariance term must be added.`,
      conditions: `$X$ and $Y$ must be independent. More generally, uncorrelated suffices.`,
      variants: `General (with covariance): $$\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)$$`,
      related_formulas: `- [Variance of Linear Transform](!/probability/formulas#variance_of_linear_transform)
- [Linearity of Expectation](!/probability/formulas#linearity_of_expectation)
- [Covariance Definition](!/probability/formulas#covariance_definition)`,
      related_definitions: `- [Independent Random Variables](!/probability/definitions#independent_random_variables)`,
    },
  },

  {
    name: 'Standard Deviation Definition',
    entity: 'standard_deviation',
    category: 'Variance & Standard Deviation',
    formula: `$$\\sigma_X = \\sqrt{\\operatorname{Var}(X)}$$`,
    link: { label: 'Variance vs Standard Deviation', url: '/probability/variance#sd' },
    fields: {
      explanation: `Standard deviation is the square root of variance. It has the same units as $X$ and is therefore easier to interpret than variance directly.`,
      related_formulas: `- [Variance Definition](!/probability/formulas#variance_definition)`,
      related_definitions: `- [Variance](!/probability/definitions#variance)`,
    },
  },

  // ─── Covariance & Correlation (6) ────────────────────────────────

  {
    name: 'Covariance Definition',
    entity: 'covariance',
    category: 'Covariance & Correlation',
    formula: `$$\\operatorname{Cov}(X, Y) = E\\!\\left[(X - \\mu_X)(Y - \\mu_Y)\\right]$$`,
    link: { label: 'What Covariance Describes', url: '/probability/covariance#2' },
    fields: {
      explanation: `Covariance measures how two random variables move together. Positive when both tend to be above (or below) their means simultaneously; negative when one tends to be above when the other is below.`,
      related_formulas: `- [Covariance Computational Formula](!/probability/formulas#covariance_computational_formula)
- [Covariance Self-Identity](!/probability/formulas#covariance_self_identity)`,
      related_definitions: `- [Expected Value](!/probability/definitions#expected_value)
- [Independent Random Variables](!/probability/definitions#independent_random_variables)`,
    },
  },

  {
    name: 'Covariance Computational Formula',
    entity: 'covariance',
    category: 'Covariance & Correlation',
    formula: `$$\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y]$$`,
    link: { label: 'Notation & Naming Conventions', url: '/probability/covariance#7' },
    fields: {
      explanation: `Algebraic alternative to the definition that is usually easier to compute. When $X$ and $Y$ are independent, $E[XY] = E[X]E[Y]$, so $\\operatorname{Cov}(X,Y) = 0$.`,
      derivation: `Expand $E[(X-\\mu_X)(Y-\\mu_Y)] = E[XY - \\mu_X Y - \\mu_Y X + \\mu_X \\mu_Y] = E[XY] - \\mu_X \\mu_Y$.`,
      related_formulas: `- [Covariance Definition](!/probability/formulas#covariance_definition)
- [Covariance Self-Identity](!/probability/formulas#covariance_self_identity)`,
      related_definitions: `- [Expected Value](!/probability/definitions#expected_value)`,
    },
  },

  {
    name: 'Covariance Self-Identity',
    entity: 'covariance',
    category: 'Covariance & Correlation',
    formula: `$$\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$$`,
    link: { label: 'Notation & Naming Conventions', url: '/probability/covariance#7' },
    fields: {
      explanation: `Covariance of a random variable with itself is its variance. The covariance generalizes variance to pairs of random variables.`,
      related_formulas: `- [Covariance Definition](!/probability/formulas#covariance_definition)
- [Variance Definition](!/probability/formulas#variance_definition)`,
      related_definitions: `- [Variance](!/probability/definitions#variance)`,
    },
  },

  {
    name: 'Covariance Bilinearity',
    entity: 'covariance',
    category: 'Covariance & Correlation',
    formula: `$$\\operatorname{Cov}(aX + b,\\; cY + d) = ac\\,\\operatorname{Cov}(X, Y)$$`,
    link: { label: 'Notation & Naming Conventions', url: '/probability/covariance#7' },
    fields: {
      explanation: `Covariance is linear in each argument separately. Constants pass through and constant shifts vanish.`,
      variants: `Sum form: $\\operatorname{Cov}(X + Y, Z) = \\operatorname{Cov}(X, Z) + \\operatorname{Cov}(Y, Z)$`,
      related_formulas: `- [Covariance Definition](!/probability/formulas#covariance_definition)`,
    },
  },

  {
    name: 'Correlation Coefficient Definition',
    entity: 'correlation_coefficient',
    category: 'Covariance & Correlation',
    formula: `$$\\rho_{XY} = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X\\,\\sigma_Y}$$`,
    link: { label: 'What Comes Next (Correlation)', url: '/probability/covariance#8' },
    fields: {
      explanation: `The correlation coefficient is covariance normalized by the product of standard deviations. The result is a unitless measure of linear association on the scale $[-1, 1]$.`,
      conditions: `Requires $\\sigma_X > 0$ and $\\sigma_Y > 0$.`,
      related_formulas: `- [Covariance Definition](!/probability/formulas#covariance_definition)
- [Correlation Bounds](!/probability/formulas#correlation_bounds)`,
      related_definitions: `- [Covariance](!/probability/definitions#covariance)
- [Standard Deviation](!/probability/definitions#standard_deviation)`,
    },
  },

  {
    name: 'Correlation Bounds',
    entity: 'correlation_coefficient',
    category: 'Covariance & Correlation',
    formula: `$$-1 \\leq \\rho_{XY} \\leq 1$$`,
    link: { label: 'What Comes Next (Correlation)', url: '/probability/covariance#8' },
    fields: {
      explanation: `Correlation is bounded between $-1$ and $1$. Equality $|\\rho_{XY}| = 1$ holds if and only if $Y$ is a linear function of $X$ with non-zero slope. The bound is a consequence of the Cauchy-Schwarz inequality applied to centered random variables.`,
      related_formulas: `- [Correlation Coefficient Definition](!/probability/formulas#correlation_coefficient_definition)`,
    },
  },

  // ─── Conditional Expectation & Variance (4) ──────────────────────

  {
    name: 'Conditional Expectation Definition',
    entity: 'conditional_expectation',
    category: 'Conditional Expectation & Variance',
    formula: `$$E[X \\mid Y = y] = \\sum_{x} x\\,p_{X \\mid Y}(x \\mid y) \\quad \\text{or} \\quad \\int x\\,f_{X \\mid Y}(x \\mid y)\\,dx$$`,
    link: { label: 'Expected Value of a Function', url: '/probability/expected-value#function' },
    fields: {
      explanation: `The conditional expectation of $X$ given $Y = y$ is the expected value computed under the conditional distribution. It updates the unconditional expectation by incorporating the information that $Y$ took the specific value $y$.`,
      conditions: `For discrete $Y$: requires $P(Y = y) > 0$. For continuous $Y$: defined where $f_Y(y) > 0$.`,
      variants: `As a random variable in $Y$: $E[X \\mid Y]$ is itself a function of $Y$.`,
      related_formulas: `- [Expected Value (Discrete)](!/probability/formulas#expected_value_discrete)
- [Expected Value (Continuous)](!/probability/formulas#expected_value_continuous)
- [Law of Iterated Expectation](!/probability/formulas#law_of_iterated_expectation)`,
      related_definitions: `- [Conditional Probability](!/probability/definitions#conditional_probability)`,
    },
  },

  {
    name: 'Law of Iterated Expectation',
    entity: 'conditional_expectation',
    category: 'Conditional Expectation & Variance',
    formula: `$$E\\!\\left[E[X \\mid Y]\\right] = E[X]$$`,
    link: { label: 'Properties of Expected Value', url: '/probability/expected-value#properties' },
    fields: {
      explanation: `Also known as the tower property. Averaging the conditional expectations over the distribution of $Y$ recovers the unconditional expectation. Conditioning, then averaging out, returns to the original.`,
      related_formulas: `- [Conditional Expectation Definition](!/probability/formulas#conditional_expectation_definition)
- [Linearity of Expectation](!/probability/formulas#linearity_of_expectation)`,
      related_definitions: `- [Expected Value](!/probability/definitions#expected_value)`,
    },
  },

  {
    name: 'Conditional Variance Definition',
    entity: 'conditional_variance',
    category: 'Conditional Expectation & Variance',
    formula: `$$\\operatorname{Var}(X \\mid Y = y) = E\\!\\left[(X - E[X \\mid Y = y])^2 \\;\\big|\\; Y = y\\right]$$`,
    link: { label: 'Properties of Variance', url: '/probability/variance#properties' },
    fields: {
      explanation: `The variance of $X$ computed under the conditional distribution given $Y = y$. Measures the residual spread of $X$ after conditioning on $Y$.`,
      related_formulas: `- [Variance Definition](!/probability/formulas#variance_definition)
- [Law of Total Variance](!/probability/formulas#law_of_total_variance)`,
      related_definitions: `- [Conditional Probability](!/probability/definitions#conditional_probability)`,
    },
  },

  {
    name: 'Law of Total Variance',
    entity: 'conditional_variance',
    category: 'Conditional Expectation & Variance',
    formula: `$$\\operatorname{Var}(X) = E\\!\\left[\\operatorname{Var}(X \\mid Y)\\right] + \\operatorname{Var}\\!\\left(E[X \\mid Y]\\right)$$`,
    link: { label: 'Variance of a Sum', url: '/probability/variance#sum' },
    fields: {
      explanation: `Total variance decomposes into within-group variance plus between-group variance. The expected conditional variance captures average residual spread after conditioning; the variance of the conditional mean captures how much $E[X \\mid Y]$ itself varies as $Y$ varies.`,
      related_formulas: `- [Conditional Variance Definition](!/probability/formulas#conditional_variance_definition)
- [Law of Iterated Expectation](!/probability/formulas#law_of_iterated_expectation)`,
      related_definitions: `- [Variance](!/probability/definitions#variance)
- [Expected Value](!/probability/definitions#expected_value)`,
    },
  },

  // ─── Moments (2) ─────────────────────────────────────────────────

  {
    name: 'kth Moment',
    entity: 'moment',
    category: 'Moments',
    formula: `$$E[X^k]$$`,
    link: { label: 'Expected Value of a Function', url: '/probability/expected-value#function' },
    fields: {
      explanation: `The $k$-th moment of $X$ about the origin. The first moment is the mean. Higher raw moments encode information about the shape and tail behavior of the distribution.`,
      conditions: `Requires $E[|X|^k] < \\infty$.`,
      related_formulas: `- [Expected Value (Discrete)](!/probability/formulas#expected_value_discrete)
- [Expected Value (Continuous)](!/probability/formulas#expected_value_continuous)
- [LOTUS Discrete](!/probability/formulas#lotus_discrete)
- [LOTUS Continuous](!/probability/formulas#lotus_continuous)`,
      related_definitions: `- [Expected Value](!/probability/definitions#expected_value)`,
    },
  },

  {
    name: 'kth Central Moment',
    entity: 'moment',
    category: 'Moments',
    formula: `$$E\\!\\left[(X - \\mu)^k\\right]$$`,
    link: { label: 'Properties of Variance', url: '/probability/variance#properties' },
    fields: {
      explanation: `The $k$-th central moment measures deviation from the mean. The second central moment is the variance; the third measures skewness; the fourth measures kurtosis (tail weight).`,
      related_formulas: `- [kth Moment](!/probability/formulas#kth_moment)
- [Variance Definition](!/probability/formulas#variance_definition)`,
      related_definitions: `- [Expected Value](!/probability/definitions#expected_value)
- [Variance](!/probability/definitions#variance)`,
    },
  },






  // /probability/formulas — Batch 1: Foundations & Set Operations
// 19 entries across 7 categories
// 17 Covered, 1 Missing (#12 classical_probability_formula), 1 with shared cluster anchor
// 3 backfill-flagged entities: bayes_theorem, total_probability, conditional_independence


  // ─── Probability Axioms (3) ──────────────────────────────────────

  {
    name: 'Non-negativity Axiom',
    entity: 'probability_measure',
    category: 'Probability Axioms',
    formula: `$$P(A) \\geq 0$$`,
    link: { label: 'Axiom 1 — Non-Negativity', url: '/probability/axioms#axiom1' },
    fields: {
      explanation: `The first Kolmogorov axiom: every event is assigned a non-negative probability. This rules out negative likelihoods and is one of three building blocks for any probability measure.`,
      conditions: `Holds for every event $A$ in the event space.`,
      related_formulas: `- [Normalization Axiom](!/probability/formulas#normalization_axiom)
- [Countable Additivity Axiom](!/probability/formulas#countable_additivity_axiom)
- [Probability Bounds](!/probability/formulas#probability_bounds)`,
      related_definitions: `- [Probability](!/probability/definitions#probability)
- [Event](!/probability/definitions#event)`,
    },
  },

  {
    name: 'Normalization Axiom',
    entity: 'probability_measure',
    category: 'Probability Axioms',
    formula: `$$P(\\Omega) = 1$$`,
    link: { label: 'Axiom 2 — Normalization', url: '/probability/axioms#axiom2' },
    fields: {
      explanation: `The second Kolmogorov axiom: the entire sample space has probability one. Something in the sample space must occur, so the total probability mass equals certainty.`,
      related_formulas: `- [Non-negativity Axiom](!/probability/formulas#non_negativity_axiom)
- [Countable Additivity Axiom](!/probability/formulas#countable_additivity_axiom)
- [Probability Bounds](!/probability/formulas#probability_bounds)`,
      related_definitions: `- [Sample Space](!/probability/definitions#sample_space)
- [Probability](!/probability/definitions#probability)`,
    },
  },

  {
    name: 'Countable Additivity Axiom',
    entity: 'probability_measure',
    category: 'Probability Axioms',
    formula: `$$P\\!\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)$$`,
    link: { label: 'Axiom 3 — Additivity for Disjoint Events', url: '/probability/axioms#axiom3' },
    fields: {
      explanation: `The third Kolmogorov axiom: probabilities of pairwise disjoint events add. For finitely many disjoint events the same identity holds with a finite sum.`,
      conditions: `Events $A_1, A_2, \\ldots$ must be pairwise disjoint: $A_i \\cap A_j = \\emptyset$ for $i \\neq j$.`,
      variants: `Finite case: $$P(A_1 \\cup A_2 \\cup \\cdots \\cup A_n) = P(A_1) + P(A_2) + \\cdots + P(A_n)$$ for disjoint $A_1, \\ldots, A_n$.`,
      related_formulas: `- [Non-negativity Axiom](!/probability/formulas#non_negativity_axiom)
- [Normalization Axiom](!/probability/formulas#normalization_axiom)
- [Addition Rule](!/probability/formulas#addition_rule)`,
      related_definitions: `- [Mutual Exclusiveness](!/probability/definitions#mutual_exclusiveness)
- [Disjoint Sets](!/probability/definitions#disjoint_sets)`,
    },
  },

  // ─── Basic Properties (5) ────────────────────────────────────────

  {
    name: 'Probability Bounds',
    entity: 'probability_measure',
    category: 'Basic Properties',
    formula: `$$0 \\leq P(A) \\leq 1$$`,
    link: { label: 'Consequences of the Axioms', url: '/probability/axioms#consequences' },
    fields: {
      explanation: `Every event has a probability between zero and one. The lower bound comes directly from non-negativity; the upper bound follows because $A \\subseteq \\Omega$ together with monotonicity and normalization forces $P(A) \\leq P(\\Omega) = 1$.`,
      derivation: `Lower bound: $P(A) \\geq 0$ by Axiom 1. Upper bound: $A \\subseteq \\Omega$, so by monotonicity $P(A) \\leq P(\\Omega)$, and by Axiom 2 $P(\\Omega) = 1$.`,
      related_formulas: `- [Non-negativity Axiom](!/probability/formulas#non_negativity_axiom)
- [Normalization Axiom](!/probability/formulas#normalization_axiom)
- [Monotonicity Rule](!/probability/formulas#monotonicity_rule)`,
      related_definitions: `- [Probability](!/probability/definitions#probability)`,
    },
  },

  {
    name: 'Probability of Empty Event',
    entity: 'event',
    category: 'Basic Properties',
    formula: `$$P(\\emptyset) = 0$$`,
    link: { label: 'Consequences of the Axioms', url: '/probability/axioms#consequences' },
    fields: {
      explanation: `The impossible event has zero probability. This is a direct consequence of the additivity axiom applied to a disjoint decomposition that includes the empty set.`,
      derivation: `Since $\\Omega = \\Omega \\cup \\emptyset$ with $\\Omega$ and $\\emptyset$ disjoint, additivity gives $P(\\Omega) = P(\\Omega) + P(\\emptyset)$, hence $P(\\emptyset) = 0$.`,
      related_formulas: `- [Complement Rule](!/probability/formulas#complement_rule)
- [Countable Additivity Axiom](!/probability/formulas#countable_additivity_axiom)`,
      related_definitions: `- [Null Set](!/probability/definitions#null_set)`,
    },
  },

  {
    name: 'Complement Rule',
    entity: 'event',
    category: 'Basic Properties',
    formula: `$$P(A^c) = 1 - P(A)$$`,
    link: { label: 'Additive Rules', url: '/probability/rules#additive' },
    fields: {
      explanation: `The probability that an event does not occur equals one minus the probability that it does. Often the easiest path to a probability is through its complement.`,
      derivation: `$A$ and $A^c$ are disjoint and their union is $\\Omega$. By additivity $P(A) + P(A^c) = P(\\Omega) = 1$, so $P(A^c) = 1 - P(A)$.`,
      related_formulas: `- [Probability of Empty Event](!/probability/formulas#probability_of_empty_event)
- [Addition Rule](!/probability/formulas#addition_rule)`,
      related_definitions: `- [Complement of a Set](!/probability/definitions#complement_of_set)`,
    },
  },

  {
    name: 'Monotonicity Rule',
    entity: 'event',
    category: 'Basic Properties',
    formula: `$$A \\subseteq B \\implies P(A) \\leq P(B)$$`,
    link: { label: 'Additive Rules', url: '/probability/rules#additive' },
    fields: {
      explanation: `If one event is contained in another, the smaller event cannot be more probable than the larger one.`,
      derivation: `Write $B = A \\cup (B \\setminus A)$ as a disjoint union. By additivity $P(B) = P(A) + P(B \\setminus A)$, and since $P(B \\setminus A) \\geq 0$, $P(B) \\geq P(A)$.`,
      related_formulas: `- [Difference Rule](!/probability/formulas#difference_rule)
- [Addition Rule](!/probability/formulas#addition_rule)`,
    },
  },

  {
    name: 'Difference Rule',
    entity: 'event',
    category: 'Basic Properties',
    formula: `$$P(A \\setminus B) = P(A) - P(A \\cap B)$$`,
    link: { label: 'Additive Rules', url: '/probability/rules#additive' },
    fields: {
      explanation: `The probability that $A$ occurs but $B$ does not equals the probability of $A$ minus the probability that both occur.`,
      derivation: `$A = (A \\cap B) \\cup (A \\setminus B)$ is a disjoint union, so $P(A) = P(A \\cap B) + P(A \\setminus B)$.`,
      related_formulas: `- [Complement Rule](!/probability/formulas#complement_rule)
- [Addition Rule](!/probability/formulas#addition_rule)`,
      related_definitions: `- [Intersection of Sets](!/probability/definitions#intersection_of_sets)`,
    },
  },

  // ─── Union & Inclusion-Exclusion (3) ─────────────────────────────

  {
    name: 'Addition Rule',
    entity: 'event',
    category: 'Union & Inclusion-Exclusion',
    formula: `$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$`,
    link: { label: 'Additive Rules', url: '/probability/rules#additive' },
    fields: {
      explanation: `The probability that at least one of two events occurs equals the sum of their individual probabilities minus the probability that both occur. Subtracting the intersection prevents double-counting outcomes that lie in both events.`,
      variants: `Disjoint case (when $A \\cap B = \\emptyset$): $$P(A \\cup B) = P(A) + P(B)$$`,
      derivation: `Decompose $A \\cup B$ into three disjoint pieces: $A \\setminus B$, $A \\cap B$, $B \\setminus A$. Additivity gives $P(A \\cup B) = P(A \\setminus B) + P(A \\cap B) + P(B \\setminus A)$. Substituting $P(A \\setminus B) = P(A) - P(A \\cap B)$ and $P(B \\setminus A) = P(B) - P(A \\cap B)$ yields the identity.`,
      related_formulas: `- [Inclusion-Exclusion Principle](!/probability/formulas#inclusion_exclusion_principle)
- [Complement Rule](!/probability/formulas#complement_rule)
- [Countable Additivity Axiom](!/probability/formulas#countable_additivity_axiom)`,
      related_definitions: `- [Union of Sets](!/probability/definitions#union_of_sets)
- [Mutual Exclusiveness](!/probability/definitions#mutual_exclusiveness)
- [Intersection of Sets](!/probability/definitions#intersection_of_sets)`,
    },
  },

  {
    name: 'Inclusion-Exclusion Principle',
    entity: 'event',
    category: 'Union & Inclusion-Exclusion',
    formula: `$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$$`,
    link: { label: 'Additive Rules', url: '/probability/rules#additive' },
    fields: {
      explanation: `The probability of a union of events is the sum of single-event probabilities, minus the pairwise intersections, plus the triple intersections, and so on with alternating signs. Generalizes the addition rule to any number of events.`,
      variants: `General $n$-event form: $$P\\!\\left(\\bigcup_{i=1}^{n} A_i\\right) = \\sum_{i} P(A_i) - \\sum_{i<j} P(A_i \\cap A_j) + \\sum_{i<j<k} P(A_i \\cap A_j \\cap A_k) - \\cdots + (-1)^{n+1} P(A_1 \\cap \\cdots \\cap A_n)$$`,
      related_formulas: `- [Addition Rule](!/probability/formulas#addition_rule)
- [Booles Inequality](!/probability/formulas#booles_inequality)`,
      related_definitions: `- [Union of Sets](!/probability/definitions#union_of_sets)
- [Intersection of Sets](!/probability/definitions#intersection_of_sets)`,
    },
  },

  {
    name: 'Booles Inequality',
    entity: 'event',
    category: 'Union & Inclusion-Exclusion',
    formula: `$$P\\!\\left(\\bigcup_{i=1}^{n} A_i\\right) \\leq \\sum_{i=1}^{n} P(A_i)$$`,
    link: { label: 'Additive Rules', url: '/probability/rules#additive' },
    fields: {
      explanation: `Also known as the union bound. The probability that at least one of several events occurs is at most the sum of their individual probabilities. Equality holds exactly when the events are pairwise disjoint.`,
      conditions: `Holds for any finite or countably infinite collection of events.`,
      related_formulas: `- [Addition Rule](!/probability/formulas#addition_rule)
- [Inclusion-Exclusion Principle](!/probability/formulas#inclusion_exclusion_principle)`,
      related_definitions: `- [Union of Sets](!/probability/definitions#union_of_sets)`,
    },
  },

  // ─── Classical Probability (1) ───────────────────────────────────

  {
    // TODO: Missing — site has no anchor for classical probability formula.
    // Intended target after content backfill: /probability/sample-space#properties
    name: 'Classical Probability Formula',
    entity: 'equally_likely_events',
    category: 'Classical Probability',
    formula: `$$P(A) = \\frac{|A|}{|\\Omega|}$$`,
    link: { label: "Classical Probability", url: "/probability/sample-space#properties" },
    fields: {
      explanation: `When the sample space is finite and every outcome is equally likely, the probability of an event reduces to counting: number of favorable outcomes divided by total outcomes.`,
      conditions: `Sample space $\\Omega$ must be finite with all outcomes equally likely.`,
      notation: `$|A|$ — number of outcomes in event $A$
$|\\Omega|$ — total number of outcomes in the sample space`,
      related_formulas: `- [Normalization Axiom](!/probability/formulas#normalization_axiom)`,
      related_definitions: `- [Sample Space](!/probability/definitions#sample_space)
- [Event](!/probability/definitions#event)
- [Equally Likely Events](!/probability/definitions#equally_likely_events)`,
    },
  },

  // ─── Conditional Probability (3) ─────────────────────────────────

  {
    name: 'Conditional Probability Definition',
    entity: 'conditional_probability',
    category: 'Conditional Probability',
    formula: `$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$`,
    link: { label: 'Conditional Probability Formula', url: '/probability/conditional-probability#formula' },
    fields: {
      explanation: `The probability of $A$ given that $B$ has occurred. Conditioning rescales the original probability measure to live entirely within $B$, with the joint probability $P(A \\cap B)$ as the numerator.`,
      conditions: `Defined only when $P(B) > 0$.`,
      notation: `$P(A \\mid B)$ — probability of $A$ given $B$. The vertical bar reads as "given".`,
      related_formulas: `- [Multiplication Rule](!/probability/formulas#multiplication_rule)
- [Bayes Theorem](!/probability/formulas#bayes_theorem)
- [Law of Total Probability](!/probability/formulas#law_of_total_probability)`,
      related_definitions: `- [Event](!/probability/definitions#event)`,
    },
  },

  {
    name: 'Multiplication Rule',
    entity: 'conditional_probability',
    category: 'Conditional Probability',
    formula: `$$P(A \\cap B) = P(A)\\,P(B \\mid A) = P(B)\\,P(A \\mid B)$$`,
    link: { label: 'Multiplicative Rules', url: '/probability/rules#multy' },
    fields: {
      explanation: `Algebraic rearrangement of the conditional probability definition. The probability that two events both occur is the probability of one times the conditional probability of the other given the first.`,
      derivation: `Multiplying both sides of $P(B \\mid A) = P(A \\cap B)/P(A)$ by $P(A)$ gives $P(A \\cap B) = P(A)\\,P(B \\mid A)$. The symmetric form follows by swapping $A$ and $B$.`,
      related_formulas: `- [Conditional Probability Definition](!/probability/formulas#conditional_probability_definition)
- [Chain Rule](!/probability/formulas#chain_rule)
- [Independence Formula](!/probability/formulas#independence_formula)`,
      related_definitions: `- [Event](!/probability/definitions#event)`,
    },
  },

  {
    name: 'Chain Rule',
    entity: 'conditional_probability',
    category: 'Conditional Probability',
    formula: `$$P(A_1 \\cap A_2 \\cap \\cdots \\cap A_n) = P(A_1)\\,P(A_2 \\mid A_1)\\,P(A_3 \\mid A_1 \\cap A_2) \\cdots P(A_n \\mid A_1 \\cap \\cdots \\cap A_{n-1})$$`,
    link: { label: 'Multiplicative Rules', url: '/probability/rules#multy' },
    fields: {
      explanation: `Generalizes the multiplication rule to any finite number of events. The joint probability factors into a product of conditional probabilities, each conditioned on the events preceding it in the chain.`,
      conditions: `Requires $P(A_1 \\cap \\cdots \\cap A_{k}) > 0$ for every $k < n$, so each conditional probability is defined.`,
      derivation: `Apply the multiplication rule iteratively: $P(A_1 \\cap A_2) = P(A_1)P(A_2 \\mid A_1)$, then $P(A_1 \\cap A_2 \\cap A_3) = P(A_1 \\cap A_2)\\,P(A_3 \\mid A_1 \\cap A_2)$, and so on.`,
      related_formulas: `- [Multiplication Rule](!/probability/formulas#multiplication_rule)
- [Law of Total Probability](!/probability/formulas#law_of_total_probability)`,
      related_definitions: `- [Event](!/probability/definitions#event)`,
    },
  },

  // ─── Independence (2) ────────────────────────────────────────────

  {
    name: 'Independence Formula',
    entity: 'independent_events',
    category: 'Independence',
    formula: `$$P(A \\cap B) = P(A)\\,P(B)$$`,
    link: { label: 'Independence Formula', url: '/probability/independence#formula' },
    fields: {
      explanation: `Two events are independent precisely when their joint probability factors into the product of their individual probabilities. Knowing that one occurred provides no information about the other.`,
      variants: `Equivalent conditional forms (when probabilities are positive):
$$P(A \\mid B) = P(A) \\quad\\text{and}\\quad P(B \\mid A) = P(B)$$`,
      conditions: `For the conditional forms, $P(A) > 0$ and $P(B) > 0$.`,
      related_formulas: `- [Multiplication Rule](!/probability/formulas#multiplication_rule)
- [Conditional Independence](!/probability/formulas#conditional_independence)`,
      related_definitions: `- [Mutual Exclusiveness](!/probability/definitions#mutual_exclusiveness)`,
    },
  },

  {
    // Backfill flag: entity 'conditional_independence' not yet in definitions registry.
    name: 'Conditional Independence',
    entity: 'conditional_independence',
    category: 'Independence',
    formula: `$$P(A \\cap B \\mid C) = P(A \\mid C)\\,P(B \\mid C)$$`,
    link: { label: 'Conditional Independence', url: '/probability/independence#conditional' },
    fields: {
      explanation: `Two events are conditionally independent given a third when the factorization of independence holds inside the conditional probability with respect to that third event. Conditional independence neither implies nor is implied by unconditional independence.`,
      conditions: `Requires $P(C) > 0$.`,
      variants: `Equivalent form: $P(A \\mid B \\cap C) = P(A \\mid C)$ when $P(B \\cap C) > 0$.`,
      related_formulas: `- [Independence Formula](!/probability/formulas#independence_formula)
- [Conditional Probability Definition](!/probability/formulas#conditional_probability_definition)`,
      related_definitions: `- [Independent Events](!/probability/definitions#independent_events)`,
    },
  },

  // ─── Total Probability & Bayes (2) ───────────────────────────────

  {
    // Backfill flag: entity 'total_probability' not yet in definitions registry.
    name: 'Law of Total Probability',
    entity: 'total_probability',
    category: 'Total Probability & Bayes',
    formula: `$$P(B) = \\sum_{i=1}^{n} P(B \\mid A_i)\\,P(A_i)$$`,
    link: { label: 'The Law of Total Probability', url: '/probability/total-probability#law' },
    fields: {
      explanation: `When the sample space is partitioned into mutually exclusive cases $A_1, \\ldots, A_n$, the unconditional probability of any event $B$ is the weighted average of its conditional probabilities, with the weights being the probabilities of the cases.`,
      conditions: `$\\{A_i\\}$ must form a partition of $\\Omega$: pairwise disjoint with $\\bigcup_i A_i = \\Omega$, and each $P(A_i) > 0$.`,
      derivation: `$B = \\bigcup_i (B \\cap A_i)$ is a disjoint union since the $A_i$ partition $\\Omega$. Additivity gives $P(B) = \\sum_i P(B \\cap A_i)$, and the multiplication rule rewrites each term as $P(B \\mid A_i)P(A_i)$.`,
      related_formulas: `- [Chain Rule](!/probability/formulas#chain_rule)
- [Bayes Theorem](!/probability/formulas#bayes_theorem)
- [Multiplication Rule](!/probability/formulas#multiplication_rule)`,
      related_definitions: `- [Conditional Probability](!/probability/definitions#conditional_probability)
- [Event](!/probability/definitions#event)`,
    },
  },

  {
    // Backfill flag: entity 'bayes_theorem' not yet in definitions registry.
    name: 'Bayes Theorem',
    entity: 'bayes_theorem',
    category: 'Total Probability & Bayes',
    formula: `$$P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B)}$$`,
    link: { label: 'Bayes Theorem Formula', url: '/probability/bayes-theorem#formula' },
    fields: {
      explanation: `Inverts the direction of conditioning. Given the conditional probability of $B$ given $A$, plus the prior probabilities of $A$ and $B$, recover the conditional probability of $A$ given $B$. Foundational for updating beliefs from evidence.`,
      conditions: `Requires $P(B) > 0$. The expanded form additionally requires $\\{A_i\\}$ to partition $\\Omega$ with $P(A_i) > 0$.`,
      variants: `Expanded form using the law of total probability for the denominator: $$P(A_k \\mid B) = \\frac{P(B \\mid A_k)\\,P(A_k)}{\\sum_{i} P(B \\mid A_i)\\,P(A_i)}$$`,
      derivation: `From the symmetric multiplication rule $P(A \\cap B) = P(B \\mid A)P(A) = P(A \\mid B)P(B)$, divide by $P(B)$.`,
      related_formulas: `- [Conditional Probability Definition](!/probability/formulas#conditional_probability_definition)
- [Law of Total Probability](!/probability/formulas#law_of_total_probability)
- [Multiplication Rule](!/probability/formulas#multiplication_rule)`,
      related_definitions: `- [Conditional Probability](!/probability/definitions#conditional_probability)
- [Independent Events](!/probability/definitions#independent_events)`,
    },
  },




  // /probability/formulas — Batch 4: Discrete Distributions
// 26 entries across 7 categories
// 24 Covered, 2 Gap (#12 Geometric Memoryless, #22 Poisson Sum)
// 0 backfill-flagged entities



  // ─── Bernoulli (3) ───────────────────────────────────────────────

  {
    name: 'Bernoulli PMF',
    entity: 'bernoulli_distribution',
    category: 'Bernoulli',
    formula: `$$P(X = k) = p^k(1-p)^{1-k}, \\quad k \\in \\{0, 1\\}$$`,
    link: { label: 'Bernoulli Trial', url: '/probability/distributions/discrete#bernoulli' },
    fields: {
      explanation: `The probability mass function of a Bernoulli random variable. The trial yields success ($k=1$) with probability $p$ and failure ($k=0$) with probability $1-p$.`,
      conditions: `$0 \\le p \\le 1$.`,
      related_formulas: `- [Bernoulli Mean](!/probability/formulas#bernoulli_mean)
- [Bernoulli Variance](!/probability/formulas#bernoulli_variance)
- [Binomial PMF](!/probability/formulas#binomial_pmf)`,
      related_definitions: `- [Bernoulli Experiment](!/probability/definitions#bernoulli_experiment)`,
    },
  },

  {
    name: 'Bernoulli Mean',
    entity: 'bernoulli_distribution',
    category: 'Bernoulli',
    formula: `$$E[X] = p$$`,
    link: { label: 'Bernoulli Trial', url: '/probability/distributions/discrete#bernoulli' },
    fields: {
      explanation: `The expected value of a Bernoulli trial equals the success probability. Since $X$ is the indicator of success, $E[X] = P(X=1) = p$.`,
      related_formulas: `- [Bernoulli PMF](!/probability/formulas#bernoulli_pmf)
- [Expectation of Indicator](!/probability/formulas#expectation_of_indicator)`,
      related_definitions: `- [Expected Value](!/probability/definitions#expected_value)`,
    },
  },

  {
    name: 'Bernoulli Variance',
    entity: 'bernoulli_distribution',
    category: 'Bernoulli',
    formula: `$$\\operatorname{Var}(X) = p(1-p)$$`,
    link: { label: 'Bernoulli Trial', url: '/probability/distributions/discrete#bernoulli' },
    fields: {
      explanation: `Variance of a Bernoulli trial. Maximized at $p = 1/2$ (most uncertain) and zero at $p = 0$ or $p = 1$ (deterministic).`,
      derivation: `$E[X^2] = p$ since $X \\in \\{0,1\\}$ implies $X^2 = X$. Thus $\\operatorname{Var}(X) = E[X^2] - E[X]^2 = p - p^2 = p(1-p)$.`,
      related_formulas: `- [Bernoulli Mean](!/probability/formulas#bernoulli_mean)
- [Variance of Indicator](!/probability/formulas#variance_of_indicator)`,
      related_definitions: `- [Variance](!/probability/definitions#variance)`,
    },
  },

  // ─── Binomial (4) ────────────────────────────────────────────────

  {
    name: 'Binomial PMF',
    entity: 'binomial_distribution',
    category: 'Binomial',
    formula: `$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, \\ldots, n$$`,
    link: { label: 'Probability Mass Function and Support', url: '/probability/distributions/discrete/binomial#4' },
    fields: {
      explanation: `Probability of exactly $k$ successes in $n$ independent Bernoulli trials with success probability $p$. The binomial coefficient $\\binom{n}{k}$ counts the arrangements of $k$ successes among $n$ trials.`,
      conditions: `$n$ a positive integer, $0 \\le p \\le 1$.`,
      related_formulas: `- [Bernoulli PMF](!/probability/formulas#bernoulli_pmf)
- [Binomial Mean](!/probability/formulas#binomial_mean)
- [Poisson PMF](!/probability/formulas#poisson_pmf)`,
      related_definitions: `- [Binomial Distribution](!/probability/definitions#binomial_distribution)
- [Sequence of Bernoulli Trials](!/probability/definitions#sequence_of_bernoulli_trials)`,
    },
  },

  {
    name: 'Binomial Mean',
    entity: 'binomial_distribution',
    category: 'Binomial',
    formula: `$$E[X] = np$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/discrete/binomial#6' },
    fields: {
      explanation: `Expected number of successes in $n$ trials. Follows immediately from linearity of expectation: $X = X_1 + \\cdots + X_n$ where each $X_i$ is Bernoulli with mean $p$.`,
      derivation: `By linearity, $E[X] = \\sum_{i=1}^{n} E[X_i] = np$.`,
      related_formulas: `- [Binomial PMF](!/probability/formulas#binomial_pmf)
- [Bernoulli Mean](!/probability/formulas#bernoulli_mean)
- [Linearity of Expectation](!/probability/formulas#linearity_of_expectation)`,
    },
  },

  {
    name: 'Binomial Variance',
    entity: 'binomial_distribution',
    category: 'Binomial',
    formula: `$$\\operatorname{Var}(X) = np(1-p)$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/discrete/binomial#7' },
    fields: {
      explanation: `Variance of the binomial. Each independent Bernoulli contributes $p(1-p)$ to the total variance.`,
      derivation: `$X = \\sum_i X_i$ with independent $X_i$, so $\\operatorname{Var}(X) = \\sum_i \\operatorname{Var}(X_i) = n \\cdot p(1-p)$.`,
      related_formulas: `- [Binomial Mean](!/probability/formulas#binomial_mean)
- [Bernoulli Variance](!/probability/formulas#bernoulli_variance)
- [Variance of Sum (Independent)](!/probability/formulas#variance_of_sum_independent)`,
    },
  },

  {
    name: 'Binomial Mode',
    entity: 'binomial_distribution',
    category: 'Binomial',
    formula: `$$\\text{Mode} = \\lfloor (n+1)p \\rfloor$$`,
    link: { label: 'Mode and Median', url: '/probability/distributions/discrete/binomial#8' },
    fields: {
      explanation: `The most likely number of successes. When $(n+1)p$ is an integer, both $(n+1)p - 1$ and $(n+1)p$ are modes (the distribution is bimodal at those values).`,
      related_formulas: `- [Binomial PMF](!/probability/formulas#binomial_pmf)
- [Binomial Mean](!/probability/formulas#binomial_mean)`,
    },
  },

  // ─── Geometric (5) ───────────────────────────────────────────────

  {
    name: 'Geometric PMF',
    entity: 'geometric_distribution',
    category: 'Geometric',
    formula: `$$P(X = k) = (1-p)^{k-1} p, \\quad k = 1, 2, 3, \\ldots$$`,
    link: { label: 'Probability Mass Function and Support', url: '/probability/distributions/discrete/geometric#4' },
    fields: {
      explanation: `Probability that the first success occurs on the $k$-th trial. Requires $k-1$ failures followed by one success.`,
      conditions: `$0 < p \\le 1$. This convention counts trials until first success; an alternative convention counts failures before first success and subtracts 1 from $k$.`,
      variants: `Failure-counting form: $P(Y = k) = (1-p)^k p$ for $k = 0, 1, 2, \\ldots$`,
      related_formulas: `- [Geometric CDF](!/probability/formulas#geometric_cdf)
- [Negative Binomial PMF](!/probability/formulas#negative_binomial_pmf)
- [Geometric Memoryless](!/probability/formulas#geometric_memoryless)`,
      related_definitions: `- [Geometric Distribution](!/probability/definitions#geometric_distribution)`,
    },
  },

  {
    name: 'Geometric CDF',
    entity: 'geometric_distribution',
    category: 'Geometric',
    formula: `$$F_X(k) = 1 - (1-p)^k, \\quad k = 1, 2, 3, \\ldots$$`,
    link: { label: 'Cumulative Distribution Function', url: '/probability/distributions/discrete/geometric#5' },
    fields: {
      explanation: `Probability of getting at least one success within the first $k$ trials. Equivalently, one minus the probability of all $k$ trials failing.`,
      derivation: `$P(X > k) = (1-p)^k$ (all $k$ trials fail). So $F_X(k) = P(X \\le k) = 1 - (1-p)^k$.`,
      related_formulas: `- [Geometric PMF](!/probability/formulas#geometric_pmf)
- [Geometric Memoryless](!/probability/formulas#geometric_memoryless)`,
    },
  },

  {
    name: 'Geometric Mean',
    entity: 'geometric_distribution',
    category: 'Geometric',
    formula: `$$E[X] = \\frac{1}{p}$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/discrete/geometric#6' },
    fields: {
      explanation: `Expected number of trials until first success. Smaller $p$ means longer expected wait, with $E[X] \\to \\infty$ as $p \\to 0$.`,
      related_formulas: `- [Geometric PMF](!/probability/formulas#geometric_pmf)
- [Geometric Variance](!/probability/formulas#geometric_variance)
- [Negative Binomial Mean](!/probability/formulas#negative_binomial_mean)`,
    },
  },

  {
    name: 'Geometric Variance',
    entity: 'geometric_distribution',
    category: 'Geometric',
    formula: `$$\\operatorname{Var}(X) = \\frac{1-p}{p^2}$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/discrete/geometric#7' },
    fields: {
      explanation: `Variance of waiting time. Like the mean, blows up as $p \\to 0$ — small success probabilities make waiting times both long on average and highly variable.`,
      related_formulas: `- [Geometric Mean](!/probability/formulas#geometric_mean)
- [Negative Binomial Variance](!/probability/formulas#negative_binomial_variance)`,
    },
  },

  {
    name: 'Geometric Memoryless',
    entity: 'geometric_distribution',
    category: 'Geometric',
    formula: `$$P(X > m + n \\mid X > m) = P(X > n)$$`,
    link: { label: 'The Probabilistic Experiment', url: '/probability/distributions/discrete/geometric#1' },
    fields: {
      explanation: `Memoryless property: given that the first success has not yet occurred after $m$ trials, the remaining wait has the same distribution as a fresh start. The geometric is the unique discrete distribution with this property.`,
      conditions: `$m, n \\ge 0$ integers.`,
      related_formulas: `- [Geometric CDF](!/probability/formulas#geometric_cdf)
- [Geometric PMF](!/probability/formulas#geometric_pmf)`,
      related_definitions: `- [Conditional Probability](!/probability/definitions#conditional_probability)`,
    },
  },

  // ─── Negative Binomial (3) ───────────────────────────────────────

  {
    name: 'Negative Binomial PMF',
    entity: 'negative_binomial_distribution',
    category: 'Negative Binomial',
    formula: `$$P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}, \\quad k = r, r+1, \\ldots$$`,
    link: { label: 'Probability Mass Function and Support', url: '/probability/distributions/discrete/negative-binomial#4' },
    fields: {
      explanation: `Probability that the $r$-th success occurs on the $k$-th trial. The $k$-th trial is the $r$-th success, so among the first $k-1$ trials there must be exactly $r-1$ successes.`,
      conditions: `$r$ a positive integer, $0 < p \\le 1$, $k \\ge r$.`,
      related_formulas: `- [Geometric PMF](!/probability/formulas#geometric_pmf)
- [Negative Binomial Mean](!/probability/formulas#negative_binomial_mean)
- [Binomial PMF](!/probability/formulas#binomial_pmf)`,
      related_definitions: `- [Negative Binomial Distribution](!/probability/definitions#negative_binomial_distribution)`,
    },
  },

  {
    name: 'Negative Binomial Mean',
    entity: 'negative_binomial_distribution',
    category: 'Negative Binomial',
    formula: `$$E[X] = \\frac{r}{p}$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/discrete/negative-binomial#6' },
    fields: {
      explanation: `Expected number of trials to achieve $r$ successes. Equals the geometric mean times $r$, since the negative binomial is a sum of $r$ independent geometric waiting times.`,
      related_formulas: `- [Geometric Mean](!/probability/formulas#geometric_mean)
- [Negative Binomial Variance](!/probability/formulas#negative_binomial_variance)`,
    },
  },

  {
    name: 'Negative Binomial Variance',
    entity: 'negative_binomial_distribution',
    category: 'Negative Binomial',
    formula: `$$\\operatorname{Var}(X) = \\frac{r(1-p)}{p^2}$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/discrete/negative-binomial#7' },
    fields: {
      explanation: `Variance scales linearly with $r$. As a sum of $r$ independent geometrics, variances add.`,
      related_formulas: `- [Geometric Variance](!/probability/formulas#geometric_variance)
- [Negative Binomial Mean](!/probability/formulas#negative_binomial_mean)
- [Variance of Sum (Independent)](!/probability/formulas#variance_of_sum_independent)`,
    },
  },

  // ─── Hypergeometric (3) ──────────────────────────────────────────

  {
    name: 'Hypergeometric PMF',
    entity: 'hypergeometric_distribution',
    category: 'Hypergeometric',
    formula: `$$P(X = k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$$`,
    link: { label: 'Probability Mass Function and Support', url: '/probability/distributions/discrete/hypergeometric#4' },
    fields: {
      explanation: `Probability of drawing exactly $k$ successes in $n$ draws without replacement from a population of $N$ containing $K$ successes. Choose $k$ successes from $K$ available and $n-k$ failures from $N-K$ available.`,
      conditions: `$N, K, n$ non-negative integers with $K \\le N$, $n \\le N$, $\\max(0, n+K-N) \\le k \\le \\min(K, n)$.`,
      related_formulas: `- [Binomial PMF](!/probability/formulas#binomial_pmf)
- [Hypergeometric Mean](!/probability/formulas#hypergeometric_mean)`,
      related_definitions: `- [Hypergeometric Distribution](!/probability/definitions#hypergeometric_distribution)`,
    },
  },

  {
    name: 'Hypergeometric Mean',
    entity: 'hypergeometric_distribution',
    category: 'Hypergeometric',
    formula: `$$E[X] = n \\cdot \\frac{K}{N}$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/discrete/hypergeometric#6' },
    fields: {
      explanation: `Same as binomial mean with $p = K/N$. Sampling without replacement gives the same expected number of successes as sampling with replacement.`,
      related_formulas: `- [Binomial Mean](!/probability/formulas#binomial_mean)
- [Hypergeometric Variance](!/probability/formulas#hypergeometric_variance)`,
    },
  },

  {
    name: 'Hypergeometric Variance',
    entity: 'hypergeometric_distribution',
    category: 'Hypergeometric',
    formula: `$$\\operatorname{Var}(X) = n \\cdot \\frac{K}{N} \\cdot \\frac{N - K}{N} \\cdot \\frac{N - n}{N - 1}$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/discrete/hypergeometric#7' },
    fields: {
      explanation: `The first three factors give the binomial variance with $p = K/N$. The fourth factor $(N-n)/(N-1)$ is the finite population correction, accounting for sampling without replacement.`,
      related_formulas: `- [Binomial Variance](!/probability/formulas#binomial_variance)
- [Hypergeometric Mean](!/probability/formulas#hypergeometric_mean)`,
    },
  },

  // ─── Poisson (4) ─────────────────────────────────────────────────

  {
    name: 'Poisson PMF',
    entity: 'poisson_distribution',
    category: 'Poisson',
    formula: `$$P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}, \\quad k = 0, 1, 2, \\ldots$$`,
    link: { label: 'Probability Mass Function and Support', url: '/probability/distributions/discrete/poisson#4' },
    fields: {
      explanation: `Probability of exactly $k$ events in a fixed interval, where events occur independently at constant average rate $\\lambda$.`,
      conditions: `$\\lambda > 0$.`,
      related_formulas: `- [Poisson Mean](!/probability/formulas#poisson_mean)
- [Poisson Variance](!/probability/formulas#poisson_variance)
- [Binomial PMF](!/probability/formulas#binomial_pmf)`,
      related_definitions: `- [Poisson Distribution](!/probability/definitions#poisson_distribution)`,
    },
  },

  {
    name: 'Poisson Mean',
    entity: 'poisson_distribution',
    category: 'Poisson',
    formula: `$$E[X] = \\lambda$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/discrete/poisson#6' },
    fields: {
      explanation: `The rate parameter $\\lambda$ is the expected number of events. This is the defining interpretation of $\\lambda$ in the Poisson model.`,
      related_formulas: `- [Poisson PMF](!/probability/formulas#poisson_pmf)
- [Poisson Variance](!/probability/formulas#poisson_variance)`,
    },
  },

  {
    name: 'Poisson Variance',
    entity: 'poisson_distribution',
    category: 'Poisson',
    formula: `$$\\operatorname{Var}(X) = \\lambda$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/discrete/poisson#7' },
    fields: {
      explanation: `Variance equals the mean for the Poisson — a distinguishing feature. If sample variance differs significantly from the sample mean, the Poisson model is suspect.`,
      related_formulas: `- [Poisson Mean](!/probability/formulas#poisson_mean)
- [Poisson PMF](!/probability/formulas#poisson_pmf)`,
    },
  },

  {
    name: 'Poisson Sum (Independent)',
    entity: 'poisson_distribution',
    category: 'Poisson',
    formula: `$$X \\sim \\text{Poisson}(\\lambda_X),\\; Y \\sim \\text{Poisson}(\\lambda_Y) \\implies X + Y \\sim \\text{Poisson}(\\lambda_X + \\lambda_Y)$$`,
    link: { label: 'Applications and Examples', url: '/probability/distributions/discrete/poisson#11' },
    fields: {
      explanation: `Independent Poissons sum to a Poisson with rate equal to the sum of rates. Combining two independent event streams produces a Poisson stream at the combined rate.`,
      conditions: `$X$ and $Y$ must be independent.`,
      related_formulas: `- [Poisson PMF](!/probability/formulas#poisson_pmf)
- [Poisson Mean](!/probability/formulas#poisson_mean)`,
      related_definitions: `- [Independent Random Variables](!/probability/definitions#independent_random_variables)`,
    },
  },

  // ─── Discrete Uniform (4) ────────────────────────────────────────

  {
    name: 'Discrete Uniform PMF',
    entity: 'uniform_distribution_discrete',
    category: 'Discrete Uniform',
    formula: `$$P(X = k) = \\frac{1}{b - a + 1}, \\quad k = a, a+1, \\ldots, b$$`,
    link: { label: 'Probability Mass Function and Support', url: '/probability/distributions/discrete/uniform#4' },
    fields: {
      explanation: `Each of the $b - a + 1$ integer values in $\\{a, a+1, \\ldots, b\\}$ has equal probability. The discrete uniform models any finite equally-likely-outcomes scenario such as rolling a fair die.`,
      conditions: `$a, b$ integers with $a \\le b$.`,
      related_formulas: `- [Discrete Uniform Mean](!/probability/formulas#discrete_uniform_mean)
- [Classical Probability Formula](!/probability/formulas#classical_probability_formula)`,
      related_definitions: `- [Discrete Uniform Distribution](!/probability/definitions#uniform_distribution_discrete)
- [Equally Likely Events](!/probability/definitions#equally_likely_events)`,
    },
  },

  {
    name: 'Discrete Uniform CDF',
    entity: 'uniform_distribution_discrete',
    category: 'Discrete Uniform',
    formula: `$$F_X(k) = \\frac{\\lfloor k \\rfloor - a + 1}{b - a + 1}, \\quad a \\le k \\le b$$`,
    link: { label: 'Cumulative Distribution Function', url: '/probability/distributions/discrete/uniform#5' },
    fields: {
      explanation: `Step function that climbs by $1/(b-a+1)$ at each integer in the support.`,
      related_formulas: `- [Discrete Uniform PMF](!/probability/formulas#discrete_uniform_pmf)`,
    },
  },

  {
    name: 'Discrete Uniform Mean',
    entity: 'uniform_distribution_discrete',
    category: 'Discrete Uniform',
    formula: `$$E[X] = \\frac{a + b}{2}$$`,
    link: { label: 'Expected Value (Mean)', url: '/probability/distributions/discrete/uniform#6' },
    fields: {
      explanation: `Midpoint of the range. By symmetry of the uniform distribution about the midpoint of its support.`,
      related_formulas: `- [Discrete Uniform PMF](!/probability/formulas#discrete_uniform_pmf)
- [Discrete Uniform Variance](!/probability/formulas#discrete_uniform_variance)`,
    },
  },

  {
    name: 'Discrete Uniform Variance',
    entity: 'uniform_distribution_discrete',
    category: 'Discrete Uniform',
    formula: `$$\\operatorname{Var}(X) = \\frac{(b - a + 1)^2 - 1}{12}$$`,
    link: { label: 'Variance and Standard Deviation', url: '/probability/distributions/discrete/uniform#7' },
    fields: {
      explanation: `Variance grows with the square of the range size. The form parallels the continuous uniform variance with the discrete count $(b-a+1)$ replacing the continuous length $(b-a)$.`,
      related_formulas: `- [Discrete Uniform Mean](!/probability/formulas#discrete_uniform_mean)`,
    },
  },



   
];

export default probabilityFormulaList;



 // {
    //     name: "Simple Probability",
    //     formula: "$P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of event A happening when all outcomes are equally likely, quantifying how likely a specific event is to occur.",
    //         "$P(A)$": "Probability of event A occurring.",
    //         "$A$": "Event whose probability is being calculated.",
    //         "Number of favorable outcomes": "Count of outcomes that qualify as event A occurring.",
    //         "Total number of possible outcomes": "Count of all possible outcomes in the sample space.",
    //         "Example": "Flipping a fair coin, probability of heads: $P(Heads) = \\frac{1}{2}$",
    //         "Use Cases": "Simple games of chance, basic statistical calculations."
    //     },
    //     category: "Basic Principles"
    // },
    // {
    //     name: "Probability Range of an Event",
    //     formula: ` $0 \\leq P(A) \\leq 1$ `,
    //     fields: {
    //         "Explanation": "The probability of any event is quantified on a scale from 0 to 1, inclusive. A probability of 0 indicates an event is impossible and will not occur under any circumstances. A probability of 1 indicates an event is certain to occur. Probabilities between 0 and 1 indicate the likelihood of the event's occurrence, with values closer to 1 suggesting a higher probability and values closer to 0 suggesting a lower probability.",
    //         "$A$":"Event ",
    //         "$P(A)$":"Prabability of $A$.",
    //         "Example": "0 - Rolling a 7 on a standard six-sided die; 1 - Drawing any card from a full deck of cards; Between 0 and 1 - Flipping a coin and it landing on heads, which has a probability of 0.5.",
    //         "Use Cases": "This fundamental concept is used in all fields involving probability calculations, including statistics, risk assessment, finance, science, and engineering."
    //     },
    //     category: "Basic Principles"
    // },
    
    // {
    //     name: "Complement Rule",
    //     formula: "$P(A') + P(A) = 1$",
    //     fields: {
    //         "Explanation": "States that the probability of an event occurring plus the probability of its complement (the event not occurring) equals one. This is because the event and its complement together encompass all possible outcomes.",
    //         "$P(A')$": "Probability of the complement of event A, which is the event not occurring.",
    //         "$P(A)$": "Probability of event A occurring.",
    //         "Example": "If there is a 30% chance it will rain tomorrow (P(A) = 0.30), then there is a 70% chance it will not rain (P(A') = 0.70).",
    //         "Formula Derivation": "Derived from the definition of probability space, where the total probability is 1. Thus, $P(A') = 1 - P(A)$.",
    //         "Use Cases": "Frequently used to simplify calculations where it is easier to calculate the chance of something not happening rather than it happening, such as in quality control or risk assessment scenarios."
    //     },
    //     category: "Basic Principles"
    // },
    // // {
    // //     name: "Addition Rule for Mutually Exclusive (Disjoint) Events",
    // //     formula: "$P(A \\cup B) = P(A) + P(B)$",
    // //     fields: {
    // //         "Explanation": "Calculates the probability of either of two mutually exclusive events occurring, summing their individual probabilities since they cannot happen simultaneously.",
    // //         "$P(A), P(B)$": "Probabilities of mutually exclusive events A and B occurring independently.",
    // //         "$A, B$": "Mutually exclusive events; cannot both occur at the same time.",
    // //         "Example": "Rolling a die, probability of rolling a 2 or a 5: $P(2 \\cup 5) = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$",
    // //         "Use Cases": "Scenarios where no two events can happen at the same time."
    // //     },
    // //     category: "Disjoint Events"
    // // },
    // // {
    // //     name: "Multiplication Rule for Independent Events",
    // //     formula: "$P(A \\cap B) = P(A) \\times P(B)$",
    // //     fields: {
    // //         "Explanation": "Calculates the probability of both events A and B occurring simultaneously, assuming the events do not influence each other.",
    // //         "$P(A), P(B)$": "Probabilities of independent events A and B occurring independently.",
    // //         "$A, B$": "Independent events; occurrence of one does not affect the occurrence of the other.",
    // //         "Example": "Flipping two coins, both being heads: $P(Heads \\cap Heads) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$",
    // //         "Use Cases": "Analyzing scenarios with multiple independent trials."
    // //     },
    // //     category: "Independent Events"
    // // },
   

    // {
    //     name: "Conditional Probability Basic Formula",
    //     formula: "$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$",
    //     fields: {
    //         "Explanation": "Measures the probability of event A occurring given that event B has already occurred, assessing how B influences A.",
    //         "$P(A \\cap B)$": "Probability of both events A and B happening together.",
    //         "$P(A), P(B)$": "Probabilities of A and B where B's occurrence affects the likelihood of A.",
    //         "Example": "Drawing two cards, probability second card is an ace given the first was an ace: $P(Ace_2 \\mid Ace_1) = \\frac{3}{51}$",
    //         "Use Cases": "Situations where prior information about one event affects the outcome of another."
    //     },
    //     category: "Conditional Probability"
    // },
    // {
    //     name: "Bayes' Theorem",
    //     formula: "$P(A \\mid B) = \\frac{P(B \\mid A) \\times P(A)}{P(B)}$",
    //     fields: {
    //         "Explanation": "Updates the probability of event A occurring based on the occurrence of event B, integrating prior belief (prior probability) with new evidence.",
    //         "$P(A), P(B), P(B \\mid A)$": "Initial or prior probability of A occurring, overall probability of B, and probability of B given A.",
    //         "$A, B$": "Events where B's occurrence provides evidence about A's likelihood.",
    //         "Example": "Disease with 1% prevalence, 99% sensitive test, probability of disease given a positive test: Calculated using Bayes' Theorem.",
    //         "Use Cases": "Medical testing, machine learning algorithms, updating predictions with new information."
    //     },
    //     category: "Advanced Probabilities"
    // },
    // {
    //     name: "Probability of Both Events Occurring (Multiplication Rule)",
    //     formula: "$P(A \\cap B) = P(A) \\times P(B)$",
    //     fields: {
    //         "Explanation": "Calculates the probability that both events A and B occur simultaneously. It assumes that A and B are independent, meaning the occurrence of A does not affect the occurrence of B, and vice versa.",
    //         "$P(A \\cap B)$": "Probability of both events A and B occurring together.",
    //         "$P(A)$, $P(B)$": "Probability of event A occurring independently, and probability of event B occurring independently.",
    //         "Example": "Flipping two fair coins, the probability of both being heads: $P(Heads \\cap Heads) = P(Heads) \\times P(Heads) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$",
    //         "Use Cases": "Used in scenarios involving multiple independent trials or events."
    //     },
    //     category: "Independent Events"
    // },
    // {
    //     name: "Probability of Either Event Occurring (Addition Rule)",
    //     formula: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
    //     fields: {
    //         "Explanation": "This rule calculates the probability that at least one of the events A or B occurs, adjusting for the overlap by subtracting the probability of both occurring together.",
    //         "$P(A \\cup B)$": "Probability of either event A or event B occurring.",
    //         "Adjusted Formula for Independence": "$P(A \\cup B) = P(A) + P(B) - P(A) \\times P(B)$",
    //         "Example": "For rolling a die, the probability of rolling a 2 or a 5: $P(2 \\cup 5) = P(2) + P(5) - P(2) \\times P(5) = \\frac{1}{6} + \\frac{1}{6} - \\frac{1}{6} \\times \\frac{1}{6} = \\frac{11}{36}$",
    //         "Use Cases": "Useful in evaluating the likelihood of multiple possible outcomes where events are independent."
    //     },
    //     category: "Independent Events"
    // },
    // {
    //     name: "Probability of At Least One Event Not Occurring",
    //     formula: "$P(\\neg A \\cap \\neg B) = P(\\neg A) \\times P(\\neg B)$",
    //     fields: {
    //         "Explanation": "Calculates the probability that neither event A nor event B occurs, using the complement rule for each event.",
    //         "$P(\\neg A \\cap \\neg B)$": "Probability of neither event A nor event B occurring.",
    //         "$P(\\neg A)$, $P(\\neg B)$": "Complements of probabilities of A and B occurring, respectively.",
    //         "Example": "If the probability of rain on any given day is 0.20, then the probability of no rain for two independent days is: $P(\\neg Rain1 \\cap \\neg Rain2) = (1 - 0.20) \\times (1 - 0.20) = 0.64$",
    //         "Use Cases": "Important in scenarios where the non-occurrence of multiple independent events is critical, such as in reliability engineering."
    //     },
    //     category: "Independent Events"
    // },
    // {
    //     name: "Probability of Exactly One Event Occurring",
    //     formula: "$P(\\text{exactly one of } A \\text{ or } B) = P(A \\cap \\neg B) + P(\\neg A \\cap B)$",
    //     fields: {
    //         "Explanation": "Determines the probability of exactly one of the two events occurring, not both.",
    //         "Detailed Formula": "For independent events: $P(\\text{exactly one of } A \\text{ or } B) = P(A) \\times (1 - P(B)) + (1 - P(A)) \\times P(B)$",
    //         "Example": "Using a deck of cards, the probability that one draws an ace or a king, but not both: $P(Ace \\cap \\neg King) + P(\\neg Ace \\cap King)$",
    //         "Use Cases": "Used in analytical models where exclusive outcomes are analyzed."
    //     },
    //     category: "Independent Events"
    // },
    // {
    //     name: "General Formula for Multiple Independent Events",
    //     formula: "$P(A \\cap B \\cap C) = P(A) \\times P(B) \\times P(C)$",
    //     fields: {
    //         "Explanation": "Extends the multiplication rule to any number of events, calculating the probability that all specified independent events occur.",
    //         "$P(A \\cap B \\cap C)$": "Probability of events A, B, and C all occurring together.",
    //         "$P(A)$, $P(B)$, $P(C)$": "Individual Probabilities of $A$,$B$ and $C$ .",
    //         "Example": "For three independent events each with a 50% chance of occurring, the probability of all occurring is: $0.5 \\times 0.5 \\times 0.5 = 0.125$",
    //         "Use Cases": "Applicable in complex systems where multiple independent events must be simultaneously considered, such as in network reliability."
    //     },
    //     category: "Independent Events"
    // },
    // {
    //     name: "Probability of Both Disjoint Events Occurring",
    //     formula: "$P(A \\cap B) = 0$",
    //     fields: {
    //         "Explanation": `Since disjoint events cannot occur simultaneously, the probability of both occurring at the same time is zero.
    //          This formula pretty much holds the essense of disjoint events definition : chance that both of them happen is equal to zero.  `,
    //         "$P(A \\cap B)$": "Probability of both disjoint events A and B occurring together.",
    //         "Example": "If event A is drawing a heart from a deck of cards and event B is drawing a spade, since one draw cannot be both a heart and a spade, $P(A \\cap B) = 0$.",
    //         "Use Cases": "Applicable in any scenario where two or more outcomes are mutually exclusive."
    //     },
    //     category: "Disjoint Events"
    // },
    // {
    //     name: "Probability of Either Disjoint Event Occurring (Addition Rule)",
    //     formula: "$P(A \\cup B) = P(A) + P(B)$",
    //     fields: {
    //         "Explanation": "The probability of either disjoint event occurring is the sum of their individual probabilities, because there is no overlap between them.",
    //         "$P(A \\cup B)$": "Probability of either disjoint event A or event B occurring.",
    //         "Example": "If event A is drawing a heart (25% chance) and event B is drawing a spade (25% chance) from a deck, $P(A \\cup B) = 25% + 25% = 50%$.",
    //         "Use Cases": "Useful in determining the likelihood of one of several exclusive events occurring."
    //     },
    //     category: "Disjoint Events"
    // },
    // {
    //     name: "Probability of Neither Disjoint Event Occurring",
    //     formula: "$P(\\neg A \\cap \\neg B) = P(\\neg A) \\times P(\\neg B)$",
    //     fields: {
    //         "Explanation": "Calculates the probability that neither disjoint event occurs, assuming each event’s non-occurrence is independent of the other.",
    //         "$P(\\neg A \\cap \\neg B)$": "Probability of neither disjoint event A nor event B occurring.",
    //         "Example": "If the probability of not drawing a heart is 75% and not drawing a spade is 75%, then $P(\\neg A \\cap \\neg B) = 75% \\times 75% = 56.25%$.",
    //         "Use Cases": "Important for risk assessment and contingency planning in mutually exclusive scenarios."
    //     },
    //     category: "Disjoint Events"
    // },
    // {
    //     name: "Conditional Probability for Disjoint Events",
    //     formula: "$P(A \\mid B) = 0$ and $P(B \\mid A) = 0$",
    //     fields: {
    //         "Explanation": "If one disjoint event occurs, the other cannot possibly happen, thus the conditional probability is zero.",
    //         "$P(A \\mid B)$ and $P(B \\mid A)$": "Probability of A given B and probability of B given A, respectively, for disjoint events.",
    //         "Example": "If event A has already occurred (e.g., a heart was drawn), the probability of event B (drawing a spade) occurring is 0.",
    //         "Use Cases": "Used in scenarios where the occurrence of one outcome precludes the occurrence of others."
    //     },
    //     category: "Disjoint Events"
    // },
    // {
    //     name: "Generalization to Multiple Disjoint Events",
    //     formula: "$P(A \\cup B \\cup C \\cup \\ldots) = P(A) + P(B) + P(C) + \\ldots$",
    //     fields: {
    //         "Explanation": "For multiple disjoint events, the probability of any event occurring is the sum of the probabilities of each event.",
    //         "Extended Formula": "General formula for the union of multiple disjoint events.",
    //         "Example": "The probability of drawing a heart, a spade, or a diamond from a deck of cards.",
    //         "Use Cases": "Useful in complex scenarios involving several mutually exclusive outcomes."
    //     },
    //     category: "Disjoint Events"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X = k) = \\binom{n}{k} p^{k} (1 - p)^{n - k}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of exactly $k$ successes in $n$ independent Bernoulli trials, each with success probability $p$.",
    //         "$P(X = k)$": "Probability of getting exactly $k$ successes.",
    //         "$\\binom{n}{k}$": "Binomial coefficient representing the number of ways to choose $k$ successes from $n$ trials.",
    //         "$n$": "Total number of trials.",
    //         "$k$": "Number of successful trials.",
    //         "$p$": "Probability of success on a single trial.",
    //         "$1 - p$": "Probability of failure on a single trial.",
    //         "Example": "If $n = 5$, $p = 0.6$, and $k = 3$, then $P(X = 3) = \\binom{5}{3} (0.6)^3 (0.4)^2 \\approx 0.3456$.",
    //         "Use Cases": "Used to find the likelihood of a specific number of successes in processes like quality control, clinical trials, and survey analysis."
    //     },
    //     category: "Binomial Distribution"
    // },
    // {
    //     name: "Cumulative Distribution Function (CDF)",
    //     formula: "$P(X \\leq k) = \\sum_{i=0}^{k} \\binom{n}{i} p^{i} (1 - p)^{n - i}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of obtaining at most $k$ successes in $n$ trials.",
    //         "$P(X \\leq k)$": "Probability of getting $k$ or fewer successes.",
    //         "$\\sum_{i=0}^{k}$": "Summation from $i = 0$ to $i = k$.",
    //         "Variables": "All other variables are as previously defined in the PMF.",
    //         "Example": "For $n = 5$, $p = 0.6$, and $k = 3$, $P(X \\leq 3)$ sums the probabilities for $k = 0$ to $k = 3$.",
    //         "Use Cases": "Assessing cumulative probabilities in risk assessment and reliability engineering."
    //     },
    //     category: "Binomial Distribution"
    // },
    // {
    //     name: "Mean (Expected Value)",
    //     formula: "$\\mu = E[X] = n p$",
    //     fields: {
    //         "Explanation": "Provides the average number of successes expected over $n$ trials.",
    //         "$\\mu$": "Mean or expected number of successes.",
    //         "$E[X]$": "Expected value of the random variable $X$.",
    //         "$n$": "Total number of trials.",
    //         "$p$": "Probability of success on a single trial.",
    //         "Example": "If $n = 10$ and $p = 0.5$, then $\\mu = 10 \\times 0.5 = 5$.",
    //         "Use Cases": "Predicting average outcomes in repeated experiments like manufacturing defects."
    //     },
    //     category: "Binomial Distribution"
    // },
    // {
    //     name: "Variance",
    //     formula: "$\\sigma^2 = \\operatorname{Var}(X) = n p (1 - p)$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the number of successes around the mean.",
    //         "$\\sigma^2$": "Variance of the random variable $X$.",
    //         "$\\operatorname{Var}(X)$": "Variance notation.",
    //         "$n$": "Total number of trials.",
    //         "$p$": "Probability of success on a single trial.",
    //         "$1 - p$": "Probability of failure on a single trial.",
    //         "Example": "For $n = 10$ and $p = 0.5$, $\\sigma^2 = 10 \\times 0.5 \\times 0.5 = 2.5$.",
    //         "Use Cases": "Assessing variability in outcomes for quality assurance and forecasting."
    //     },
    //     category: "Binomial Distribution"
    // },
    // {
    //     name: "Standard Deviation",
    //     formula: "$\\sigma = \\sqrt{n p (1 - p)}$",
    //     fields: {
    //         "Explanation": "Represents the average distance of the data from the mean.",
    //         "$\\sigma$": "Standard deviation of the random variable $X$.",
    //         "$n$, $p$, $1 - p$": "As previously defined.",
    //         "Example": "With $n = 10$ and $p = 0.5$, $\\sigma = \\sqrt{10 \\times 0.5 \\times 0.5} \\approx 1.5811$.",
    //         "Use Cases": "Used to understand the spread of binomial outcomes in fields like finance and epidemiology."
    //     },
    //     category: "Binomial Distribution"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X = k) = \\frac{e^{-\\lambda} \\lambda^{k}}{k!}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of observing exactly $k$ events in a fixed interval when events occur independently at a constant average rate $\\lambda$.",
    //         "$P(X = k)$": "Probability of exactly $k$ occurrences in the interval.",
    //         "$e^{-\\lambda}$": "The probability of zero occurrences.",
    //         "$\\lambda^{k}$": "Mean number of occurrences raised to the $k$-th power.",
    //         "$k!$": "Factorial of $k$, the number of occurrences.",
    //         "$\\lambda$": "Average rate of occurrence (mean number of events per interval).",
    //         "$k$": "Number of occurrences (non-negative integer).",
    //         "Example": "If $\\lambda = 4$ and $k = 2$, then $P(X = 2) = \\frac{e^{-4} \\times 4^{2}}{2!} \\approx 0.1465$.",
    //         "Use Cases": "Modeling the number of rare events over a fixed period, such as the number of incoming calls to a call center in an hour."
    //     },
    //     category: "Poisson Distribution"
    // },
    // {
    //     name: "Cumulative Distribution Function (CDF)",
    //     formula: "$P(X \\leq k) = e^{-\\lambda} \\sum_{i=0}^{k} \\frac{\\lambda^{i}}{i!}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of observing up to $k$ events in a fixed interval.",
    //         "$P(X \\leq k)$": "Probability of $k$ or fewer occurrences.",
    //         "$\\sum_{i=0}^{k}$": "Summation from $i = 0$ to $i = k$.",
    //         "$\\lambda$": "Average rate of occurrence.",
    //         "$i!$": "Factorial of $i$, each term in the sum.",
    //         "Example": "For $\\lambda = 3$ and $k = 2$, $P(X \\leq 2) = e^{-3} \\left( \\frac{3^{0}}{0!} + \\frac{3^{1}}{1!} + \\frac{3^{2}}{2!} \\right) \\approx 0.4232$.",
    //         "Use Cases": "Assessing cumulative probabilities, such as the probability of observing a certain number of defects in a batch."
    //     },
    //     category: "Poisson Distribution"
    // },
    // {
    //     name: "Mean (Expected Value)",
    //     formula: "$\\mu = E[X] = \\lambda$",
    //     fields: {
    //         "Explanation": "Represents the average number of events occurring in the given interval.",
    //         "$\\mu$": "Mean or expected value of the distribution.",
    //         "$E[X]$": "Expected value operator.",
    //         "$\\lambda$": "Average rate of occurrence.",
    //         "Example": "If $\\lambda = 5$, then $\\mu = 5$.",
    //         "Use Cases": "Predicting average outcomes in processes like arrival rates, such as customers entering a store per hour."
    //     },
    //     category: "Poisson Distribution"
    // },
    // {
    //     name: "Variance",
    //     formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\lambda$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the number of events around the mean.",
    //         "$\\sigma^2$": "Variance of the distribution.",
    //         "$\\operatorname{Var}(X)$": "Variance operator.",
    //         "$\\lambda$": "Average rate of occurrence.",
    //         "Example": "If $\\lambda = 5$, then $\\sigma^2 = 5$.",
    //         "Use Cases": "Assessing variability in event counts for planning and resource allocation."
    //     },
    //     category: "Poisson Distribution"
    // },
    // {
    //     name: "Standard Deviation",
    //     formula: "$\\sigma = \\sqrt{\\lambda}$",
    //     fields: {
    //         "Explanation": "Represents the average distance of the data from the mean.",
    //         "$\\sigma$": "Standard deviation of the distribution.",
    //         "$\\lambda$": "Average rate of occurrence.",
    //         "Example": "If $\\lambda = 5$, then $\\sigma = \\sqrt{5} \\approx 2.2361$.",
    //         "Use Cases": "Understanding the spread of Poisson-distributed outcomes in fields like telecommunications and biology."
    //     },
    //     category: "Poisson Distribution"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X = k) = (1 - p)^{k - 1} p$",
    //     fields: {
    //         "Explanation": "Calculates the probability that the first success occurs on the $k$-th trial.",
    //         "$P(X = k)$": "Probability that the first success occurs on trial $k$.",
    //         "$p$": "Probability of success on each trial.",
    //         "$1 - p$": "Probability of failure on each trial.",
    //         "$k$": "Trial number on which the first success occurs ($k = 1, 2, 3, \\dots$).",
    //         "Example": "If $p = 0.3$ and $k = 4$, then $P(X = 4) = (1 - 0.3)^{4 - 1} \\times 0.3 = (0.7)^{3} \\times 0.3 \\approx 0.1029$.",
    //         "Use Cases": "Used to model the number of trials needed to get the first success, such as in quality control testing or reliability analysis."
    //     },
    //     category: "Geometric Distribution"
    // },
    // {
    //     name: "Cumulative Distribution Function (CDF)",
    //     formula: "$P(X \\leq k) = 1 - (1 - p)^{k}$",
    //     fields: {
    //         "Explanation": "Calculates the probability that the first success occurs on or before the $k$-th trial.",
    //         "$P(X \\leq k)$": "Probability that the first success occurs on or before trial $k$.",
    //         "$p$": "Probability of success on each trial.",
    //         "$1 - p$": "Probability of failure on each trial.",
    //         "$k$": "Trial number ($k = 1, 2, 3, \\dots$).",
    //         "Example": "For $p = 0.3$ and $k = 4$, $P(X \\leq 4) = 1 - (1 - 0.3)^{4} = 1 - (0.7)^{4} \\approx 0.7599$.",
    //         "Use Cases": "Assessing the likelihood of achieving the first success within a certain number of trials."
    //     },
    //     category: "Geometric Distribution"
    // },
    // {
    //     name: "Mean (Expected Value)",
    //     formula: "$\\mu = E[X] = \\frac{1}{p}$",
    //     fields: {
    //         "Explanation": "Represents the average number of trials required to achieve the first success.",
    //         "$\\mu$": "Mean or expected value of the distribution.",
    //         "$p$": "Probability of success on each trial.",
    //         "Example": "If $p = 0.3$, then $\\mu = \\frac{1}{0.3} \\approx 3.3333$.",
    //         "Use Cases": "Predicting average trial counts in processes like quality inspections or repeated experiments."
    //     },
    //     category: "Geometric Distribution"
    // },
    // {
    //     name: "Variance",
    //     formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\frac{1 - p}{p^{2}}$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the number of trials around the mean.",
    //         "$\\sigma^2$": "Variance of the distribution.",
    //         "$p$": "Probability of success on each trial.",
    //         "$1 - p$": "Probability of failure on each trial.",
    //         "Example": "If $p = 0.3$, then $\\sigma^2 = \\frac{1 - 0.3}{(0.3)^{2}} = \\frac{0.7}{0.09} \\approx 7.7778$.",
    //         "Use Cases": "Assessing variability in the number of trials needed for the first success."
    //     },
    //     category: "Geometric Distribution"
    // },
    // {
    //     name: "Standard Deviation",
    //     formula: "$\\sigma = \\sqrt{\\frac{1 - p}{p^{2}}}$",
    //     fields: {
    //         "Explanation": "Represents the average distance of the number of trials from the mean.",
    //         "$\\sigma$": "Standard deviation of the distribution.",
    //         "$p$": "Probability of success on each trial.",
    //         "$1 - p$": "Probability of failure on each trial.",
    //         "Example": "If $p = 0.3$, then $\\sigma = \\sqrt{\\frac{1 - 0.3}{(0.3)^{2}}} \\approx \\sqrt{7.7778} \\approx 2.7889$.",
    //         "Use Cases": "Understanding the spread of trials needed to achieve the first success."
    //     },
    //     category: "Geometric Distribution"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X = k) = \\binom{k - 1}{r - 1} p^{r} (1 - p)^{k - r}$",
    //     fields: {
    //         "Explanation": "Calculates the probability that the $r$-th success occurs on the $k$-th trial.",
    //         "$P(X = k)$": "Probability that the $r$-th success occurs on trial $k$.",
    //         "$\\binom{k - 1}{r - 1}$": "Binomial coefficient representing the number of ways to arrange $r - 1$ successes in $k - 1$ trials.",
    //         "$p$": "Probability of success on each trial.",
    //         "$1 - p$": "Probability of failure on each trial.",
    //         "$k$": "Trial number on which the $r$-th success occurs ($k = r, r+1, r+2, \\dots$).",
    //         "$r$": "Number of successes to be achieved.",
    //         "Example": "If $p = 0.4$, $r = 3$, and $k = 7$, then $P(X = 7) = \\binom{6}{2} (0.4)^{3} (0.6)^{4} \\approx 0.0595$.",
    //         "Use Cases": "Used to model the number of trials needed to achieve a specified number of successes, such as in reliability testing or sequential analysis."
    //     },
    //     category: "Negative Binomial Distribution"
    // },
    // {
    //     name: "Cumulative Distribution Function (CDF)",
    //     formula: "$P(X \\leq k) = I_{p}(r, k - r + 1)$",
    //     fields: {
    //         "Explanation": "Calculates the probability that the $r$-th success occurs on or before the $k$-th trial using the regularized incomplete beta function.",
    //         "$P(X \\leq k)$": "Probability that the $r$-th success occurs on or before trial $k$.",
    //         "$I_{p}(a, b)$": "Regularized incomplete beta function.",
    //         "$p$": "Probability of success on each trial.",
    //         "$k$": "Trial number.",
    //         "$r$": "Number of successes.",
    //         "Example": "For $p = 0.4$, $r = 3$, and $k = 7$, $P(X \\leq 7)$ can be calculated using the cumulative sum of PMF values or the incomplete beta function.",
    //         "Use Cases": "Assessing the likelihood of achieving $r$ successes within a certain number of trials."
    //     },
    //     category: "Negative Binomial Distribution"
    // },
    // {
    //     name: "Mean (Expected Value)",
    //     formula: "$\\mu = E[X] = \\frac{r}{p}$",
    //     fields: {
    //         "Explanation": "Represents the average number of trials required to achieve $r$ successes.",
    //         "$\\mu$": "Mean or expected value of the distribution.",
    //         "$r$": "Number of successes.",
    //         "$p$": "Probability of success on each trial.",
    //         "Example": "If $r = 3$ and $p = 0.4$, then $\\mu = \\frac{3}{0.4} = 7.5$.",
    //         "Use Cases": "Predicting average trial counts in processes like quality control or repeated experiments until a certain number of successes are achieved."
    //     },
    //     category: "Negative Binomial Distribution"
    // },
    // {
    //     name: "Variance",
    //     formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\frac{r (1 - p)}{p^{2}}$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the number of trials around the mean.",
    //         "$\\sigma^2$": "Variance of the distribution.",
    //         "$r$": "Number of successes.",
    //         "$p$": "Probability of success on each trial.",
    //         "$1 - p$": "Probability of failure on each trial.",
    //         "Example": "If $r = 3$ and $p = 0.4$, then $\\sigma^2 = \\frac{3 \\times 0.6}{(0.4)^{2}} = 11.25$.",
    //         "Use Cases": "Assessing variability in the number of trials needed for achieving $r$ successes."
    //     },
    //     category: "Negative Binomial Distribution"
    // },
    // {
    //     name: "Standard Deviation",
    //     formula: "$\\sigma = \\sqrt{\\frac{r (1 - p)}{p^{2}}}$",
    //     fields: {
    //         "Explanation": "Represents the average distance of the number of trials from the mean.",
    //         "$\\sigma$": "Standard deviation of the distribution.",
    //         "$r$": "Number of successes.",
    //         "$p$": "Probability of success on each trial.",
    //         "$1 - p$": "Probability of failure on each trial.",
    //         "Example": "If $r = 3$ and $p = 0.4$, then $\\sigma = \\sqrt{11.25} \\approx 3.3541$.",
    //         "Use Cases": "Understanding the spread of trials needed to achieve $r$ successes."
    //     },
    //     category: "Negative Binomial Distribution"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X = k) = \\frac{\\binom{K}{k} \\binom{N - K}{n - k}}{\\binom{N}{n}}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of observing exactly $k$ successes in $n$ draws without replacement from a finite population.",
    //         "$P(X = k)$": "Probability of getting exactly $k$ successes.",
    //         "$\\binom{K}{k}$": "Number of ways to choose $k$ successes from $K$ total successes in the population.",
    //         "$\\binom{N - K}{n - k}$": "Number of ways to choose $n - k$ failures from $N - K$ total failures.",
    //         "$\\binom{N}{n}$": "Total number of ways to choose $n$ items from $N$ total items.",
    //         "$N$": "Total number of items in the population.",
    //         "$K$": "Total number of successes in the population.",
    //         "$n$": "Number of draws or trials.",
    //         "$k$": "Number of observed successes.",
    //         "Example": "If $N = 50$, $K = 10$, $n = 5$, and $k = 2$, then $P(X = 2) = \\frac{\\binom{10}{2} \\binom{40}{3}}{\\binom{50}{5}}$.",
    //         "Use Cases": "Used in scenarios involving sampling without replacement, such as quality control inspection or lotteries."
    //     },
    //     category: "Hypergeometric Distribution"
    // },
    // {
    //     name: "Mean (Expected Value)",
    //     formula: "$\\mu = E[X] = n \\left( \\frac{K}{N} \\right)$",
    //     fields: {
    //         "Explanation": "Represents the average number of successes expected in $n$ draws.",
    //         "$\\mu$": "Mean or expected value of the distribution.",
    //         "$n$": "Number of draws.",
    //         "$K$": "Total number of successes in the population.",
    //         "$N$": "Total number of items in the population.",
    //         "Example": "If $N = 50$, $K = 10$, and $n = 5$, then $\\mu = 5 \\left( \\frac{10}{50} \\right) = 1$.",
    //         "Use Cases": "Predicting the average number of successes in random sampling without replacement."
    //     },
    //     category: "Hypergeometric Distribution"
    // },
    // {
    //     name: "Variance",
    //     formula: "$\\sigma^2 = \\operatorname{Var}(X) = n \\left( \\frac{K}{N} \\right) \\left( \\frac{N - K}{N} \\right) \\left( \\frac{N - n}{N - 1} \\right)$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the number of successes around the mean.",
    //         "$\\sigma^2$": "Variance of the distribution.",
    //         "$n$": "Number of draws.",
    //         "$K$": "Total number of successes in the population.",
    //         "$N$": "Total number of items in the population.",
    //         "$N - K$": "Total number of failures in the population.",
    //         "$N - n$": "Number of items not drawn.",
    //         "$N - 1$": "Adjustment for finite population.",
    //         "Example": "If $N = 50$, $K = 10$, and $n = 5$, then $\\sigma^2 = 5 \\left( \\frac{10}{50} \\right) \\left( \\frac{40}{50} \\right) \\left( \\frac{45}{49} \\right) \\approx 0.9184$.",
    //         "Use Cases": "Assessing variability in outcomes when sampling without replacement."
    //     },
    //     category: "Hypergeometric Distribution"
    // },
    // {
    //     name: "Standard Deviation",
    //     formula: "$\\sigma = \\sqrt{n \\left( \\frac{K}{N} \\right) \\left( \\frac{N - K}{N} \\right) \\left( \\frac{N - n}{N - 1} \\right)}$",
    //     fields: {
    //         "Explanation": "Represents the average distance of the number of successes from the mean.",
    //         "$\\sigma$": "Standard deviation of the distribution.",
    //         "Variables": "All other variables are as previously defined.",
    //         "Example": "Using the previous variance example, $\\sigma = \\sqrt{0.9184} \\approx 0.9583$.",
    //         "Use Cases": "Understanding the spread of the number of successes in sampling without replacement."
    //     },
    //     category: "Hypergeometric Distribution"
    // },
    // {
    //     name: "Probability of At Least $k$ Successes",
    //     formula: "$P(X \\geq k) = 1 - \\sum_{i=0}^{k - 1} P(X = i)$",
    //     fields: {
    //         "Explanation": "Calculates the probability of observing at least $k$ successes in $n$ draws.",
    //         "$P(X \\geq k)$": "Probability of $k$ or more successes.",
    //         "$\\sum_{i=0}^{k - 1} P(X = i)$": "Sum of probabilities of observing fewer than $k$ successes.",
    //         "$P(X = i)$": "PMF evaluated at $i$ successes.",
    //         "Example": "To find $P(X \\geq 2)$, compute $1 - [P(X = 0) + P(X = 1)]$.",
    //         "Use Cases": "Assessing the likelihood of meeting or exceeding a certain number of successes."
    //     },
    //     category: "Hypergeometric Distribution"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X_1 = x_1, \\dots, X_k = x_k) = \\frac{n!}{x_1! x_2! \\dots x_k!} p_1^{x_1} p_2^{x_2} \\dots p_k^{x_k}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of obtaining a specific combination of counts $(x_1, x_2, \\dots, x_k)$ in $n$ independent trials, where each trial can result in one of $k$ possible outcomes.",
    //         "$P(X_1 = x_1, \\dots, X_k = x_k)$": "Probability of observing counts $x_1, x_2, \\dots, x_k$ for outcomes $1$ to $k$ respectively.",
    //         "$n$": "Total number of independent trials.",
    //         "$x_i$": "Number of times outcome $i$ occurs, where $\\sum_{i=1}^{k} x_i = n$.",
    //         "$p_i$": "Probability of outcome $i$ on a single trial, where $\\sum_{i=1}^{k} p_i = 1$.",
    //         "$n!$": "Factorial of $n$.",
    //         "$x_i!$": "Factorial of $x_i$.",
    //         "Example": "If $n = 5$, $k = 3$, $p_1 = 0.2$, $p_2 = 0.5$, $p_3 = 0.3$, and we observe counts $x_1 = 1$, $x_2 = 2$, $x_3 = 2$, then $P = \\frac{5!}{1! 2! 2!} (0.2)^1 (0.5)^2 (0.3)^2 \\approx 0.135$.",
    //         "Use Cases": "Used in experiments with more than two possible outcomes per trial, such as dice rolls, categorical data analysis, or genetic allele frequencies."
    //     },
    //     category: "Multinomial Distribution"
    // },
    // {
    //     name: "Mean (Expected Value) of Each Outcome",
    //     formula: "$E[X_i] = n p_i$",
    //     fields: {
    //         "Explanation": "Represents the average number of times outcome $i$ is expected to occur in $n$ trials.",
    //         "$E[X_i]$": "Expected value of the count for outcome $i$.",
    //         "$n$": "Total number of trials.",
    //         "$p_i$": "Probability of outcome $i$.",
    //         "Example": "For $n = 10$ and $p_2 = 0.4$, $E[X_2] = 10 \\times 0.4 = 4$.",
    //         "Use Cases": "Predicting average counts of each category in repeated experiments."
    //     },
    //     category: "Multinomial Distribution"
    // },
    // {
    //     name: "Variance of Each Outcome",
    //     formula: "$\\operatorname{Var}(X_i) = n p_i (1 - p_i)$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the count for outcome $i$ around its mean.",
    //         "$\\operatorname{Var}(X_i)$": "Variance of the count for outcome $i$.",
    //         "$n$": "Total number of trials.",
    //         "$p_i$": "Probability of outcome $i$.",
    //         "$1 - p_i$": "Probability of not observing outcome $i$.",
    //         "Example": "For $n = 10$ and $p_2 = 0.4$, $\\operatorname{Var}(X_2) = 10 \\times 0.4 \\times 0.6 = 2.4$.",
    //         "Use Cases": "Assessing variability in counts for each category."
    //     },
    //     category: "Multinomial Distribution"
    // },
    // {
    //     name: "Covariance Between Outcomes",
    //     formula: "$\\operatorname{Cov}(X_i, X_j) = -n p_i p_j$",
    //     fields: {
    //         "Explanation": "Measures the degree to which counts of outcomes $i$ and $j$ vary together.",
    //         "$\\operatorname{Cov}(X_i, X_j)$": "Covariance between counts of outcomes $i$ and $j$.",
    //         "$n$": "Total number of trials.",
    //         "$p_i$, $p_j$": "Probabilities of outcomes $i$ and $j$, respectively.",
    //         "Example": "For $n = 10$, $p_1 = 0.2$, $p_2 = 0.5$, $\\operatorname{Cov}(X_1, X_2) = -10 \\times 0.2 \\times 0.5 = -1$.",
    //         "Use Cases": "Understanding the negative dependence between category counts in multinomial experiments."
    //     },
    //     category: "Multinomial Distribution"
    // },
    // {
    //     name: "Correlation Coefficient Between Outcomes",
    //     formula: "$\\rho_{ij} = \\frac{\\operatorname{Cov}(X_i, X_j)}{\\sqrt{\\operatorname{Var}(X_i) \\operatorname{Var}(X_j)}} = \\frac{-p_i p_j}{\\sqrt{p_i (1 - p_i) p_j (1 - p_j)}}$",
    //     fields: {
    //         "Explanation": "Quantifies the linear relationship between counts of outcomes $i$ and $j$.",
    //         "$\\rho_{ij}$": "Correlation coefficient between counts of outcomes $i$ and $j$.",
    //         "$\\operatorname{Cov}(X_i, X_j)$": "Covariance between counts of outcomes $i$ and $j$.",
    //         "$\\operatorname{Var}(X_i)$, $\\operatorname{Var}(X_j)$": "Variances of counts of outcomes $i$ and $j$, respectively.",
    //         "$p_i$, $p_j$": "Probabilities of outcomes $i$ and $j$.",
    //         "Example": "Using previous values, $\\rho_{12} = \\frac{-0.2 \\times 0.5}{\\sqrt{0.2 \\times 0.8 \\times 0.5 \\times 0.5}} \\approx -0.577$.",
    //         "Use Cases": "Assessing the strength of the relationship between category counts."
    //     },
    //     category: "Multinomial Distribution"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X = k) = \\frac{1}{b - a + 1}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of the discrete random variable $X$ taking on a specific integer value $k$ within the range from $a$ to $b$, where all outcomes are equally likely.",
    //         "$P(X = k)$": "Probability that $X$ equals $k$.",
    //         "$a$": "Minimum integer value in the distribution's range.",
    //         "$b$": "Maximum integer value in the distribution's range.",
    //         "$k$": "An integer within the range $a \\leq k \\leq b$.",
    //         "$b - a + 1$": "Total number of possible integer values in the range.",
    //         "Example": "If $a = 1$ and $b = 6$ (like a fair die), then $P(X = 3) = \\frac{1}{6}$.",
    //         "Use Cases": "Modeling situations where a finite number of outcomes are equally likely, such as rolling a fair die or selecting a random card from a deck."
    //     },
    //     category: "Discrete Uniform Distribution"
    // },
    // {
    //     name: "Mean (Expected Value)",
    //     formula: "$\\mu = E[X] = \\frac{a + b}{2}$",
    //     fields: {
    //         "Explanation": "Represents the average value of the distribution, calculated as the midpoint of the range.",
    //         "$\\mu$": "Mean or expected value of the distribution.",
    //         "$a$": "Minimum integer value.",
    //         "$b$": "Maximum integer value.",
    //         "Example": "For $a = 1$ and $b = 6$, $\\mu = \\frac{1 + 6}{2} = 3.5$.",
    //         "Use Cases": "Determining the average expected outcome in uniformly random scenarios."
    //     },
    //     category: "Discrete Uniform Distribution"
    // },
    // {
    //     name: "Variance",
    //     formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\frac{(b - a + 1)^2 - 1}{12}$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the values around the mean.",
    //         "$\\sigma^2$": "Variance of the distribution.",
    //         "$a$": "Minimum integer value.",
    //         "$b$": "Maximum integer value.",
    //         "$b - a + 1$": "Total number of possible integer values.",
    //         "Example": "For $a = 1$ and $b = 6$, $\\sigma^2 = \\frac{(6 - 1 + 1)^2 - 1}{12} = \\frac{36 - 1}{12} = \\frac{35}{12} \\approx 2.9167$.",
    //         "Use Cases": "Assessing the spread of outcomes in uniformly random scenarios."
    //     },
    //     category: "Discrete Uniform Distribution"
    // },
    // {
    //     name: "Standard Deviation",
    //     formula: "$\\sigma = \\sqrt{\\frac{(b - a + 1)^2 - 1}{12}}$",
    //     fields: {
    //         "Explanation": "Represents the average distance of the values from the mean.",
    //         "$\\sigma$": "Standard deviation of the distribution.",
    //         "Variables": "All other variables are as previously defined.",
    //         "Example": "Using the previous variance example, $\\sigma = \\sqrt{2.9167} \\approx 1.7078$.",
    //         "Use Cases": "Understanding the spread of uniformly distributed discrete outcomes."
    //     },
    //     category: "Discrete Uniform Distribution"
    // },
    // {
    //     name: "Cumulative Distribution Function (CDF)",
    //     formula: "$P(X \\leq k) = \\frac{k - a + 1}{b - a + 1}$ for $k = a, a+1, \\dots, b$",
    //     fields: {
    //         "Explanation": "Calculates the probability that the random variable $X$ is less than or equal to a specific value $k$.",
    //         "$P(X \\leq k)$": "Cumulative probability up to and including $k$.",
    //         "$a$": "Minimum integer value.",
    //         "$b$": "Maximum integer value.",
    //         "$k$": "An integer within the range $a \\leq k \\leq b$.",
    //         "Example": "For $a = 1$, $b = 6$, and $k = 3$, $P(X \\leq 3) = \\frac{3 - 1 + 1}{6 - 1 + 1} = \\frac{3}{6} = 0.5$.",
    //         "Use Cases": "Determining cumulative probabilities in uniformly random discrete events."
    //     },
    //     category: "Discrete Uniform Distribution"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X = k) = \\frac{\\binom{k - 1}{r - 1} \\binom{N - k}{K - r}}{\\binom{N}{K}}$",
    //     fields: {
    //         "Explanation": "Calculates the probability that the $r$-th success occurs on the $k$-th trial when sampling without replacement from a finite population.",
    //         "$P(X = k)$": "Probability that the $r$-th success occurs on trial $k$.",
    //         "$\\binom{k - 1}{r - 1}$": "Number of ways to choose $r - 1$ successes in the first $k - 1$ trials.",
    //         "$\\binom{N - k}{K - r}$": "Number of ways to choose the remaining $K - r$ successes from the remaining $N - k$ items.",
    //         "$\\binom{N}{K}$": "Total number of ways to choose $K$ successes from $N$ items.",
    //         "$N$": "Total number of items in the population.",
    //         "$K$": "Total number of successes in the population.",
    //         "$k$": "Trial number on which the $r$-th success occurs ($k = r, r+1, \\dots, N - K + r$).",
    //         "$r$": "Number of successes to be achieved.",
    //         "Example": "If $N = 20$, $K = 5$, $r = 2$, and $k = 4$, then $P(X = 4) = \\frac{\\binom{3}{1} \\binom{16}{3}}{\\binom{20}{5}} \\approx 0.2381$.",
    //         "Use Cases": "Used to model the number of trials needed to achieve $r$ successes without replacement, such as in card games or quality inspections."
    //     },
    //     category: "Negative Hypergeometric Distribution"
    // },
    // {
    //     name: "Mean (Expected Value)",
    //     formula: "$\\mu = E[X] = \\frac{r(N + 1)}{K + 1}$",
    //     fields: {
    //         "Explanation": "Represents the average number of trials required to achieve $r$ successes when sampling without replacement.",
    //         "$\\mu$": "Mean or expected value of the distribution.",
    //         "$r$": "Number of successes to be achieved.",
    //         "$N$": "Total number of items in the population.",
    //         "$K$": "Total number of successes in the population.",
    //         "Example": "If $N = 20$, $K = 5$, and $r = 2$, then $\\mu = \\frac{2 \\times 21}{5 + 1} = 7$.",
    //         "Use Cases": "Predicting average trial counts in processes like drawing specific cards from a deck without replacement."
    //     },
    //     category: "Negative Hypergeometric Distribution"
    // },
    // {
    //     name: "Variance",
    //     formula: "$\\sigma^2 = \\frac{r (N + 1)(N - K)(N - r)}{(K + 1)^{2} (K + 2)}$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the number of trials around the mean.",
    //         "$\\sigma^2$": "Variance of the distribution.",
    //         "$r$": "Number of successes to be achieved.",
    //         "$N$": "Total number of items in the population.",
    //         "$K$": "Total number of successes in the population.",
    //         "$N - K$": "Number of failures in the population.",
    //         "$N - r$": "Number of items not yet drawn after achieving $r$ successes.",
    //         "Example": "If $N = 20$, $K = 5$, and $r = 2$, then $\\sigma^2 = \\frac{2 \\times 21 \\times 15 \\times 18}{(5 + 1)^{2} \\times 7} \\approx 5.7143$.",
    //         "Use Cases": "Assessing variability in the number of trials needed for achieving $r$ successes without replacement."
    //     },
    //     category: "Negative Hypergeometric Distribution"
    // },
    // {
    //     name: "Standard Deviation",
    //     formula: "$\\sigma = \\sqrt{\\frac{r (N + 1)(N - K)(N - r)}{(K + 1)^{2} (K + 2)}}$",
    //     fields: {
    //         "Explanation": "Represents the average distance of the number of trials from the mean.",
    //         "$\\sigma$": "Standard deviation of the distribution.",
    //         "Variables": "All other variables are as previously defined.",
    //         "Example": "Using the previous variance example, $\\sigma = \\sqrt{5.7143} \\approx 2.3917$.",
    //         "Use Cases": "Understanding the spread of trials needed to achieve $r$ successes without replacement."
    //     },
    //     category: "Negative Hypergeometric Distribution"
    // },
    // {
    //     name: "Cumulative Distribution Function (CDF)",
    //     formula: "$P(X \\leq k) = 1 - \\frac{\\binom{N - r}{k - r} \\binom{r - 1}{r - 1}}{\\binom{N}{k}}$",
    //     fields: {
    //         "Explanation": "Calculates the probability that the $r$-th success occurs on or before the $k$-th trial.",
    //         "$P(X \\leq k)$": "Probability that the $r$-th success occurs on or before trial $k$.",
    //         "$\\binom{N - r}{k - r}$": "Number of ways to choose $k - r$ failures from $N - r$ failures.",
    //         "$\\binom{N}{k}$": "Total number of ways to choose $k$ items from $N$ items.",
    //         "$k$": "Trial number.",
    //         "Example": "For $N = 20$, $K = 5$, $r = 2$, and $k = 7$, compute $P(X \\leq 7)$ accordingly.",
    //         "Use Cases": "Assessing the likelihood of achieving $r$ successes within a certain number of trials when sampling without replacement."
    //     },
    //     category: "Negative Hypergeometric Distribution"
    // },
    // {
    //     name: "Probability Mass Function (PMF)",
    //     formula: "$P(X = k) = -\\frac{1}{\\ln(1 - p)} \\frac{p^{k}}{k}$",
    //     fields: {
    //         "Explanation": "Calculates the probability of the discrete random variable $X$ taking on the value $k$, where $k$ represents the number of failures required to get the first success in a logarithmic series.",
    //         "$P(X = k)$": "Probability that $X$ equals $k$.",
    //         "$p$": "Parameter of the distribution, such that $0 < p < 1$.",
    //         "$k$": "A positive integer ($k = 1, 2, 3, \\dots$).",
    //         "$\\ln(1 - p)$": "Natural logarithm of $1 - p$, normalizing constant.",
    //         "Example": "If $p = 0.5$ and $k = 3$, then $P(X = 3) = -\\frac{1}{\\ln(1 - 0.5)} \\frac{(0.5)^{3}}{3} \\approx 0.0625$.",
    //         "Use Cases": "Modeling species abundance in ecology, or the number of times a rare event occurs."
    //     },
    //     category: "Logarithmic Distribution"
    // },
    // {
    //     name: "Mean (Expected Value)",
    //     formula: "$\\mu = E[X] = \\frac{-p}{(1 - p) \\ln(1 - p)}$",
    //     fields: {
    //         "Explanation": "Represents the average value of the distribution.",
    //         "$\\mu$": "Mean or expected value of the distribution.",
    //         "$p$": "Parameter of the distribution.",
    //         "$\\ln(1 - p)$": "Natural logarithm of $1 - p$.",
    //         "$1 - p$": "Complement of parameter $p$.",
    //         "Example": "If $p = 0.5$, then $\\mu = \\frac{-0.5}{(0.5)(-0.6931)} \\approx 1.4427$.",
    //         "Use Cases": "Determining the average number of occurrences in phenomena following a logarithmic distribution."
    //     },
    //     category: "Logarithmic Distribution"
    // },
    // {
    //     name: "Variance",
    //     formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\frac{-p (p + \\ln(1 - p))}{(1 - p)^{2} [\\ln(1 - p)]^{2}}$",
    //     fields: {
    //         "Explanation": "Measures the dispersion of the values around the mean.",
    //         "$\\sigma^2$": "Variance of the distribution.",
    //         "$p$": "Parameter of the distribution.",
    //         "$\\ln(1 - p)$": "Natural logarithm of $1 - p$.",
    //         "$1 - p$": "Complement of parameter $p$.",
    //         "Example": "If $p = 0.5$, calculate $\\sigma^2$ accordingly.",
    //         "Use Cases": "Assessing the spread of outcomes in logarithmically distributed data."
    //     },
    //     category: "Logarithmic Distribution"
    // },
    // {
    //     name: "Standard Deviation",
    //     formula: "$\\sigma = \\sqrt{\\operatorname{Var}(X)}$",
    //     fields: {
    //         "Explanation": "Represents the average distance of the values from the mean.",
    //         "$\\sigma$": "Standard deviation of the distribution.",
    //         "$\\operatorname{Var}(X)$": "Variance of the distribution.",
    //         "Example": "Calculate $\\sigma$ using the variance from the previous example.",
    //         "Use Cases": "Understanding the spread of logarithmically distributed discrete outcomes."
    //     },
    //     category: "Logarithmic Distribution"
    // },
    // {
    //     name: "Generating Function",
    //     formula: "$G_X(s) = \\frac{\\ln(1 - p s)}{\\ln(1 - p)}$",
    //     fields: {
    //         "Explanation": "Generates the probabilities of the distribution and can be used to find moments.",
    //         "$G_X(s)$": "Probability generating function of the distribution.",
    //         "$p$": "Parameter of the distribution.",
    //         "$s$": "Dummy variable used in generating functions.",
    //         "$\\ln(1 - p s)$": "Natural logarithm of $1 - p s$.",
    //         "$\\ln(1 - p)$": "Natural logarithm of $1 - p$.",
    //         "Example": "For $p = 0.5$, compute $G_X(s)$ accordingly.",
    //         "Use Cases": "Used in advanced probability to derive properties of the distribution."
    //     },
    //     category: "Logarithmic Distribution"
    // },

