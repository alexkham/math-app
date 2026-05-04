const functionsFormulasList = [

// ─── Function Arithmetic (6 entries) ─────────────────────────

{
  name: 'Sum of Functions',
  category: 'Function Arithmetic',
  formula: `$$(f + g)(x) = f(x) + g(x)$$`,
  link: { label: 'Sum of Functions', url: '/functions/arithmetic#2' },
  fields: {
    explanation: `Adds two functions pointwise: at each input, evaluate both functions and add the outputs. Addition is commutative and associative, mirroring number arithmetic.`,
    conditions: `$x$ must be in the domain of both $f$ and $g$.`,
    related_formulas: `- [Difference of Functions](!/functions/formulas#difference_of_functions)\n- [Domain of a Combined Function](!/functions/formulas#domain_of_a_combined_function)`,
    related_definitions: `- [Function](!/functions/definitions#function)\n- [Domain](!/functions/definitions#domain)`
  }
},

{
  name: 'Difference of Functions',
  category: 'Function Arithmetic',
  formula: `$$(f - g)(x) = f(x) - g(x)$$`,
  link: { label: 'Difference of Functions', url: '/functions/arithmetic#3' },
  fields: {
    explanation: `Subtracts $g$ from $f$ pointwise. Order matters: $(f - g)(x) = -(g - f)(x)$. Subtraction is neither commutative nor associative.`,
    conditions: `$x$ must be in the domain of both $f$ and $g$.`,
    related_formulas: `- [Sum of Functions](!/functions/formulas#sum_of_functions)\n- [Domain of a Combined Function](!/functions/formulas#domain_of_a_combined_function)`,
    related_definitions: `- [Function](!/functions/definitions#function)\n- [Domain](!/functions/definitions#domain)`
  }
},

{
  name: 'Product of Functions',
  category: 'Function Arithmetic',
  formula: `$$(fg)(x) = f(x) \\cdot g(x)$$`,
  link: { label: 'Product of Functions', url: '/functions/arithmetic#4' },
  fields: {
    explanation: `Multiplies two functions pointwise: at each input, evaluate both and multiply the outputs. Multiplication is commutative, associative, and distributes over addition.`,
    conditions: `$x$ must be in the domain of both $f$ and $g$.`,
    related_formulas: `- [Quotient of Functions](!/functions/formulas#quotient_of_functions)\n- [Domain of a Combined Function](!/functions/formulas#domain_of_a_combined_function)`,
    related_definitions: `- [Function](!/functions/definitions#function)\n- [Domain](!/functions/definitions#domain)`
  }
},

{
  name: 'Quotient of Functions',
  category: 'Function Arithmetic',
  formula: `$$\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}$$`,
  link: { label: 'Quotient of Functions', url: '/functions/arithmetic#5' },
  fields: {
    explanation: `Divides $f$ by $g$ pointwise. The denominator function $g$ must be nonzero at the input — values of $x$ where $g(x) = 0$ are excluded from the domain even if both $f$ and $g$ are defined there.`,
    conditions: `$x$ must be in the domain of both $f$ and $g$, with $g(x) \\neq 0$.`,
    related_formulas: `- [Product of Functions](!/functions/formulas#product_of_functions)\n- [Domain of a Quotient](!/functions/formulas#domain_of_a_quotient)`,
    related_definitions: `- [Function](!/functions/definitions#function)\n- [Domain](!/functions/definitions#domain)`
  }
},

{
  name: 'Domain of a Combined Function',
  category: 'Function Arithmetic',
  formula: `$$\\text{Dom}(f + g) = \\text{Dom}(f - g) = \\text{Dom}(fg) = \\text{Dom}(f) \\cap \\text{Dom}(g)$$`,
  link: { label: 'Domain of Combined Functions', url: '/functions/arithmetic#7' },
  fields: {
    explanation: `For sums, differences, and products, the domain is the intersection of the component domains. An input must be valid for both functions in order for the combined operation to produce an output.`,
    related_formulas: `- [Domain of a Quotient](!/functions/formulas#domain_of_a_quotient)\n- [Sum of Functions](!/functions/formulas#sum_of_functions)\n- [Product of Functions](!/functions/formulas#product_of_functions)`,
    related_definitions: `- [Domain](!/functions/definitions#domain)\n- [Function](!/functions/definitions#function)`
  }
},

{
  name: 'Domain of a Quotient',
  category: 'Function Arithmetic',
  formula: `$$\\text{Dom}\\!\\left(\\frac{f}{g}\\right) = \\bigl(\\text{Dom}(f) \\cap \\text{Dom}(g)\\bigr) \\setminus \\{x : g(x) = 0\\}$$`,
  link: { label: 'Additional Restrictions for Quotient', url: '/functions/arithmetic#8' },
  fields: {
    explanation: `The quotient inherits all restrictions from both functions plus one more: any input where $g$ equals zero is removed. Even if algebraic simplification appears to eliminate the restriction, the original domain exclusion remains — a hole, not a valid point.`,
    related_formulas: `- [Domain of a Combined Function](!/functions/formulas#domain_of_a_combined_function)\n- [Quotient of Functions](!/functions/formulas#quotient_of_functions)`,
    related_definitions: `- [Domain](!/functions/definitions#domain)\n- [Function](!/functions/definitions#function)`
  }
},


// ─── Composition (4 entries) ─────────────────────────────────

{
  name: 'Composition of Functions',
  category: 'Composition',
  formula: `$$(f \\circ g)(x) = f(g(x))$$`,
  link: { label: 'What is Function Composition', url: '/functions/composition#1' },
  fields: {
    explanation: [
      `Chains two functions in sequence: $g$ acts first on the input, then $f$ acts on $g$'s output. Read inside-out: $g$ is the inner function, $f$ is the outer function. Composition is generally not commutative — $f \\circ g$ and $g \\circ f$ are different functions.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: 'x', operation: 'apply g' },
          { value: 'g(x)', operation: 'apply f' },
          { value: 'f(g(x))', operation: '' }
        ],
        label: 'Composition f ∘ g'
      }
    ],
    notation: `The symbol $\\circ$ denotes composition. The function written on the right ($g$) acts first; the function on the left ($f$) acts second.`,
    related_formulas: `- [Domain of a Composition](!/functions/formulas#domain_of_a_composition)\n- [Composition Associativity](!/functions/formulas#composition_associativity)\n- [Inverse Composition Property](!/functions/formulas#inverse_composition_property)`,
    related_definitions: `- [Composition of Functions](!/functions/definitions#composition_of_functions)\n- [Function](!/functions/definitions#function)`
  }
},

{
  name: 'Domain of a Composition',
  category: 'Composition',
  formula: `$$\\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}$$`,
  link: { label: 'Domain of Composite Functions', url: '/functions/composition#5' },
  fields: {
    explanation: `An input $x$ is valid for $f \\circ g$ only if two conditions both hold: $x$ must be in the domain of the inner function $g$, and the output $g(x)$ must be a valid input for the outer function $f$. Either failure removes $x$ from the composite domain.`,
    related_formulas: `- [Composition of Functions](!/functions/formulas#composition_of_functions)\n- [Domain of a Combined Function](!/functions/formulas#domain_of_a_combined_function)`,
    related_definitions: `- [Composition of Functions](!/functions/definitions#composition_of_functions)\n- [Domain](!/functions/definitions#domain)`
  }
},

{
  name: 'Composition Associativity',
  category: 'Composition',
  formula: `$$(f \\circ g) \\circ h = f \\circ (g \\circ h)$$`,
  link: { label: 'Composing More Than Two Functions', url: '/functions/composition#7' },
  fields: {
    explanation: `Composition is associative: when chaining three or more functions, grouping does not affect the result. Both sides equal $f(g(h(x)))$. Order still matters — associativity does not imply commutativity.`,
    related_formulas: `- [Composition of Functions](!/functions/formulas#composition_of_functions)`,
    related_definitions: `- [Composition of Functions](!/functions/definitions#composition_of_functions)`
  }
},

{
  name: 'Inverse of a Composition',
  category: 'Composition',
  formula: `$$(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$$`,
  link: { label: '', url: '' },
  // TODO: target /functions/composition or /functions/inverse — formula not currently on site
  fields: {
    explanation: `The inverse of a composition reverses the order of the factors. To undo "first $g$, then $f$," apply the inverses in the opposite order: first undo $f$, then undo $g$. Like reversing a sequence of nested operations.`,
    derivation: [
      `Verify by composing with $f \\circ g$ and showing the result is the identity.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$(f \\circ g) \\circ (g^{-1} \\circ f^{-1})$', operation: 'apply associativity' },
          { expr: '$f \\circ (g \\circ g^{-1}) \\circ f^{-1}$', operation: 'inverse composition' },
          { expr: '$f \\circ I \\circ f^{-1}$', operation: 'identity drops out' },
          { expr: '$f \\circ f^{-1} = I$', tag: 'result' }
        ]
      }
    ],
    conditions: `Both $f$ and $g$ must be one-to-one (invertible), and the range of $g$ must lie in the domain of $f$.`,
    related_formulas: `- [Composition of Functions](!/functions/formulas#composition_of_functions)\n- [Inverse Function Definition](!/functions/formulas#inverse_function_definition)\n- [Inverse Composition Property](!/functions/formulas#inverse_composition_property)`,
    related_definitions: `- [Inverse Function](!/functions/definitions#inverse_function)\n- [Composition of Functions](!/functions/definitions#composition_of_functions)\n- [One-to-One Function](!/functions/definitions#one_to_one_function)`
  }
},

// ─── Inverse Functions (4 entries) ───────────────────────────

{
  name: 'Inverse Function Definition',
  category: 'Inverse Functions',
  formula: `$$f(a) = b \\iff f^{-1}(b) = a$$`,
  link: { label: 'What is an Inverse Function', url: '/functions/inverse#1' },
  fields: {
    explanation: [
      `The inverse function $f^{-1}$ reverses the input-output pairing of $f$. Whatever $f$ sends to $b$, the inverse sends back to its source. Exists only when $f$ is one-to-one.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: 'a', operation: 'apply f' },
          { value: 'b', operation: 'apply f⁻¹' },
          { value: 'a', operation: '' }
        ],
        label: 'f and f⁻¹ round trip'
      }
    ],
    notation: `The superscript $-1$ in $f^{-1}$ is a label, not an exponent. It does not denote the reciprocal $1/f(x)$.`,
    conditions: `$f$ must be one-to-one on its domain. If not, restrict the domain first.`,
    related_formulas: `- [Inverse Composition Property](!/functions/formulas#inverse_composition_property)\n- [Domain Range Swap of Inverse](!/functions/formulas#domain_range_swap_of_inverse)\n- [Inverse of an Inverse](!/functions/formulas#inverse_of_an_inverse)`,
    related_definitions: `- [Inverse Function](!/functions/definitions#inverse_function)\n- [One-to-One Function](!/functions/definitions#one_to_one_function)`
  }
},

{
  name: 'Inverse Composition Property',
  category: 'Inverse Functions',
  formula: `$$f(f^{-1}(x)) = x \\quad \\text{and} \\quad f^{-1}(f(x)) = x$$`,
  link: { label: 'Verifying Inverses via Composition', url: '/functions/inverse#6' },
  fields: {
    explanation: `Composing a function with its inverse — in either order — yields the identity. This is the operational definition of "inverse" and the standard verification: if both compositions reduce to $x$, the two functions are inverses.`,
    conditions: `First equation: $x$ in the domain of $f^{-1}$. Second equation: $x$ in the domain of $f$.`,
    related_formulas: `- [Inverse Function Definition](!/functions/formulas#inverse_function_definition)\n- [Composition of Functions](!/functions/formulas#composition_of_functions)\n- [Inverse of a Composition](!/functions/formulas#inverse_of_a_composition)`,
    related_definitions: `- [Inverse Function](!/functions/definitions#inverse_function)\n- [Composition of Functions](!/functions/definitions#composition_of_functions)`
  }
},

{
  name: 'Inverse of an Inverse',
  category: 'Inverse Functions',
  formula: `$$(f^{-1})^{-1} = f$$`,
  link: { label: '', url: '' },
  // TODO: target /functions/inverse — formula not currently displayed on site
  fields: {
    explanation: `Inverting an inverse returns the original function. The reverse of the reverse is the forward direction.`,
    conditions: `$f$ must be one-to-one (and therefore $f^{-1}$ exists).`,
    related_formulas: `- [Inverse Function Definition](!/functions/formulas#inverse_function_definition)`,
    related_definitions: `- [Inverse Function](!/functions/definitions#inverse_function)`
  }
},

{
  name: 'Domain Range Swap of Inverse',
  category: 'Inverse Functions',
  formula: `$$\\text{Dom}(f^{-1}) = \\text{Ran}(f) \\quad \\text{and} \\quad \\text{Ran}(f^{-1}) = \\text{Dom}(f)$$`,
  link: { label: 'Domain and Range Swap', url: '/functions/inverse#5' },
  fields: {
    explanation: `Inputs and outputs trade places. Every output of $f$ becomes an input of $f^{-1}$, and every input of $f$ becomes an output of $f^{-1}$. Graphically, this matches the reflection of the curve across the line $y = x$.`,
    related_formulas: `- [Inverse Function Definition](!/functions/formulas#inverse_function_definition)`,
    related_definitions: `- [Inverse Function](!/functions/definitions#inverse_function)\n- [Domain](!/functions/definitions#domain)\n- [Range](!/functions/definitions#range)`
  }
},


// ─── Symmetry (2 entries) ────────────────────────────────────

{
  name: 'Even Function Test',
  category: 'Symmetry',
  formula: `$$f(-x) = f(x) \\quad \\text{for all } x \\in \\text{Dom}(f)$$`,
  link: { label: 'Even and Odd Functions', url: '/functions/properties#1' },
  fields: {
    explanation: `An even function is unchanged when its input is negated. The graph is symmetric about the $y$-axis: the left half mirrors the right.`,
    conditions: `The domain must be symmetric about the origin — if $x$ is in the domain, so is $-x$.`,
    related_formulas: `- [Odd Function Test](!/functions/formulas#odd_function_test)\n- [Vertical Reflection](!/functions/formulas#vertical_reflection)`,
    related_definitions: `- [Even Function](!/functions/definitions#even_function)`
  }
},

{
  name: 'Odd Function Test',
  category: 'Symmetry',
  formula: `$$f(-x) = -f(x) \\quad \\text{for all } x \\in \\text{Dom}(f)$$`,
  link: { label: 'Even and Odd Functions', url: '/functions/properties#1' },
  fields: {
    explanation: `An odd function negates its output when its input is negated. The graph has rotational symmetry about the origin: rotating 180° about the origin produces the same curve. If $0$ is in the domain, then $f(0) = 0$.`,
    conditions: `The domain must be symmetric about the origin.`,
    related_formulas: `- [Even Function Test](!/functions/formulas#even_function_test)\n- [Horizontal Reflection](!/functions/formulas#horizontal_reflection)`,
    related_definitions: `- [Odd Function](!/functions/definitions#odd_function)`
  }
},


// ─── Transformations (7 entries) ─────────────────────────────

{
  name: 'General Transformation',
  category: 'Transformations',
  formula: `$$g(x) = a \\cdot f(b(x - h)) + k$$`,
  link: { label: 'Transformations Overview', url: '/functions/transformations#2' },
  fields: {
    explanation: [
      `The master transformation form. Four parameters control how the parent graph is reshaped: $h$ shifts horizontally, $k$ shifts vertically, $a$ scales/reflects vertically, $b$ scales/reflects horizontally. Inside-the-function operations affect $x$; outside-the-function operations affect $y$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: 'x', operation: 'shift: x − h' },
          { value: 'x − h', operation: 'scale: b(x − h)' },
          { value: 'b(x − h)', operation: 'apply f' },
          { value: 'f(b(x − h))', operation: 'scale & shift: a·... + k' },
          { value: 'g(x)', operation: '' }
        ],
        label: 'General Transformation'
      }
    ],
    notation: `$h$: horizontal shift (right if positive, left if negative — counterintuitive). $k$: vertical shift. $a$: vertical scale ($|a| > 1$ stretch, $0 < |a| < 1$ compress, $a < 0$ reflect). $b$: horizontal scale ($|b| > 1$ compress, $0 < |b| < 1$ stretch, $b < 0$ reflect).`,
    related_formulas: `- [Vertical Translation](!/functions/formulas#vertical_translation)\n- [Horizontal Translation](!/functions/formulas#horizontal_translation)\n- [Vertical Reflection](!/functions/formulas#vertical_reflection)\n- [Horizontal Reflection](!/functions/formulas#horizontal_reflection)\n- [Vertical Dilation](!/functions/formulas#vertical_dilation)\n- [Horizontal Dilation](!/functions/formulas#horizontal_dilation)`,
    related_definitions: `- [Transformation](!/functions/definitions#transformation)\n- [Parent Function](!/functions/definitions#parent_function)`
  }
},

{
  name: 'Vertical Translation',
  category: 'Transformations',
  formula: `$$g(x) = f(x) + k$$`,
  link: { label: 'Vertical Translations', url: '/functions/transformations#3' },
  fields: {
    explanation: `Shifts the graph up by $k$ units (or down if $k$ is negative). The shape is preserved; only the vertical position changes. Affects range, not domain.`,
    related_formulas: `- [Horizontal Translation](!/functions/formulas#horizontal_translation)\n- [General Transformation](!/functions/formulas#general_transformation)`,
    related_definitions: `- [Translation](!/functions/definitions#translation)\n- [Range](!/functions/definitions#range)`
  }
},

{
  name: 'Horizontal Translation',
  category: 'Transformations',
  formula: `$$g(x) = f(x - h)$$`,
  link: { label: 'Horizontal Translations', url: '/functions/transformations#4' },
  fields: {
    explanation: `Shifts the graph right by $h$ units (or left if $h$ is negative). The direction is counterintuitive: subtracting inside the argument moves the graph in the positive direction. Affects domain, not range.`,
    related_formulas: `- [Vertical Translation](!/functions/formulas#vertical_translation)\n- [General Transformation](!/functions/formulas#general_transformation)`,
    related_definitions: `- [Translation](!/functions/definitions#translation)\n- [Domain](!/functions/definitions#domain)`
  }
},

{
  name: 'Vertical Reflection',
  category: 'Transformations',
  formula: `$$g(x) = -f(x)$$`,
  link: { label: 'Vertical Reflections', url: '/functions/transformations#5' },
  fields: {
    explanation: `Flips the graph across the $x$-axis. Each output is negated: peaks become valleys, valleys become peaks. $x$-intercepts are fixed; range is negated.`,
    related_formulas: `- [Horizontal Reflection](!/functions/formulas#horizontal_reflection)\n- [General Transformation](!/functions/formulas#general_transformation)\n- [Odd Function Test](!/functions/formulas#odd_function_test)`,
    related_definitions: `- [Reflection](!/functions/definitions#reflection)`
  }
},

{
  name: 'Horizontal Reflection',
  category: 'Transformations',
  formula: `$$g(x) = f(-x)$$`,
  link: { label: 'Horizontal Reflections', url: '/functions/transformations#6' },
  fields: {
    explanation: `Flips the graph across the $y$-axis. Each input is negated before the function acts. $y$-intercept is fixed; domain is negated. An even function is unchanged by this reflection.`,
    related_formulas: `- [Vertical Reflection](!/functions/formulas#vertical_reflection)\n- [General Transformation](!/functions/formulas#general_transformation)\n- [Even Function Test](!/functions/formulas#even_function_test)`,
    related_definitions: `- [Reflection](!/functions/definitions#reflection)`
  }
},

{
  name: 'Vertical Dilation',
  category: 'Transformations',
  formula: `$$g(x) = a \\cdot f(x)$$`,
  link: { label: 'Vertical Stretch and Compression', url: '/functions/transformations#7' },
  fields: {
    explanation: `Scales the graph vertically. $|a| > 1$: stretches taller. $0 < |a| < 1$: compresses shorter. $a < 0$: also reflects across the $x$-axis. The $x$-intercepts are fixed; the $y$-intercept and range scale by $a$.`,
    related_formulas: `- [Horizontal Dilation](!/functions/formulas#horizontal_dilation)\n- [General Transformation](!/functions/formulas#general_transformation)\n- [Vertical Reflection](!/functions/formulas#vertical_reflection)`,
    related_definitions: `- [Dilation](!/functions/definitions#dilation)`
  }
},

{
  name: 'Horizontal Dilation',
  category: 'Transformations',
  formula: `$$g(x) = f(bx)$$`,
  link: { label: 'Horizontal Stretch and Compression', url: '/functions/transformations#8' },
  fields: {
    explanation: `Scales the graph horizontally. $|b| > 1$: compresses narrower (counterintuitive). $0 < |b| < 1$: stretches wider. $b < 0$: also reflects across the $y$-axis. The $y$-intercept is fixed; domain scales by $1/b$.`,
    related_formulas: `- [Vertical Dilation](!/functions/formulas#vertical_dilation)\n- [General Transformation](!/functions/formulas#general_transformation)\n- [Horizontal Reflection](!/functions/formulas#horizontal_reflection)`,
    related_definitions: `- [Dilation](!/functions/definitions#dilation)`
  }
},


// ─── Linear Function Forms (5 entries) ───────────────────────

{
  name: 'Slope Intercept Form',
  category: 'Linear Function Forms',
  formula: `$$f(x) = mx + b$$`,
  link: { label: 'Linear Functions', url: '/functions/families#4' },
  fields: {
    explanation: `The most common form of a linear function. The coefficient $m$ is the slope (rate of change); the constant $b$ is the $y$-intercept (output when input is zero).`,
    related_formulas: `- [Point Slope Form](!/functions/formulas#point_slope_form)\n- [Standard Form Linear](!/functions/formulas#standard_form_linear)\n- [Slope Formula](!/functions/formulas#slope_formula)`,
    related_definitions: `- [Linear Function](!/functions/definitions#linear_function)`
  }
},

{
  name: 'Point Slope Form',
  category: 'Linear Function Forms',
  formula: `$$y - y_1 = m(x - x_1)$$`,
  link: { label: '', url: '' },
  // TODO: target /functions/families — formula not currently displayed on site
  fields: {
    explanation: `Builds the equation of a line from a known slope $m$ and a known point $(x_1, y_1)$ on the line. Convenient when slope and a single point are given directly.`,
    related_formulas: `- [Slope Intercept Form](!/functions/formulas#slope_intercept_form)\n- [Standard Form Linear](!/functions/formulas#standard_form_linear)\n- [Slope Formula](!/functions/formulas#slope_formula)`,
    related_definitions: `- [Linear Function](!/functions/definitions#linear_function)`
  }
},

{
  name: 'Standard Form Linear',
  category: 'Linear Function Forms',
  formula: `$$Ax + By = C$$`,
  link: { label: '', url: '' },
  // TODO: target /functions/families — formula not currently displayed on site
  fields: {
    explanation: `An implicit form of a line, with $x$ and $y$ on the same side. Useful for systems of linear equations and for representing vertical lines, which slope-intercept form cannot capture.`,
    conditions: `$A$ and $B$ not both zero. Convention often requires $A \\geq 0$ and $A, B, C$ to have no common factor.`,
    related_formulas: `- [Slope Intercept Form](!/functions/formulas#slope_intercept_form)\n- [Point Slope Form](!/functions/formulas#point_slope_form)`,
    related_definitions: `- [Linear Function](!/functions/definitions#linear_function)`
  }
},

{
  name: 'Slope Formula',
  category: 'Linear Function Forms',
  formula: `$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$`,
  link: { label: '', url: '' },
  // TODO: target /functions/families — formula not currently displayed on site
  // 🆕 New entity candidate for definitions backfill: slope
  fields: {
    explanation: `Computes the slope of a line through two points $(x_1, y_1)$ and $(x_2, y_2)$. Rise divided by run — the change in output per unit change in input.`,
    conditions: `$x_1 \\neq x_2$. Vertical lines have undefined slope.`,
    related_formulas: `- [Slope Intercept Form](!/functions/formulas#slope_intercept_form)\n- [Point Slope Form](!/functions/formulas#point_slope_form)\n- [Perpendicular Slopes](!/functions/formulas#perpendicular_slopes)`,
    related_definitions: `- [Linear Function](!/functions/definitions#linear_function)`
  }
},

{
  name: 'Perpendicular Slopes',
  category: 'Linear Function Forms',
  formula: `$$m_1 \\cdot m_2 = -1$$`,
  link: { label: '', url: '' },
  // TODO: target /functions/families — formula not currently displayed on site
  fields: {
    explanation: `Two non-vertical lines are perpendicular if and only if the product of their slopes equals $-1$. Equivalently, each slope is the negative reciprocal of the other.`,
    conditions: `Both slopes must be nonzero. Special case: a horizontal line (slope $0$) is perpendicular to a vertical line (undefined slope).`,
    variants: `Negative reciprocal form:\n\n$$m_2 = -\\frac{1}{m_1}$$`,
    related_formulas: `- [Slope Formula](!/functions/formulas#slope_formula)\n- [Slope Intercept Form](!/functions/formulas#slope_intercept_form)`,
    related_definitions: `- [Linear Function](!/functions/definitions#linear_function)`
  }
},


// ─── Quadratic Function Forms (5 entries) ────────────────────

{
  name: 'Standard Form Quadratic',
  category: 'Quadratic Function Forms',
  formula: `$$f(x) = ax^2 + bx + c$$`,
  link: { label: 'Quadratic Functions', url: '/functions/families#5' },
  fields: {
    explanation: `The general polynomial form of a quadratic function. The coefficient $a$ controls opening direction (upward if $a > 0$, downward if $a < 0$) and width. The constant $c$ is the $y$-intercept.`,
    conditions: `$a \\neq 0$ (otherwise the function is linear, not quadratic).`,
    related_formulas: `- [Vertex Form Quadratic](!/functions/formulas#vertex_form_quadratic)\n- [Factored Form Quadratic](!/functions/formulas#factored_form_quadratic)\n- [Vertex from Coefficients](!/functions/formulas#vertex_from_coefficients)`,
    related_definitions: `- [Quadratic Function](!/functions/definitions#quadratic_function)`
  }
},

{
  name: 'Vertex Form Quadratic',
  category: 'Quadratic Function Forms',
  formula: `$$f(x) = a(x - h)^2 + k$$`,
  link: { label: 'Quadratic Functions', url: '/functions/families#5' },
  fields: {
    explanation: `Places the vertex of the parabola explicitly at $(h, k)$. Reading transformations directly from this form: horizontal shift by $h$, vertical shift by $k$, vertical scale by $a$. Convenient for graphing and for finding extrema.`,
    conditions: `$a \\neq 0$.`,
    related_formulas: `- [Standard Form Quadratic](!/functions/formulas#standard_form_quadratic)\n- [Vertex from Coefficients](!/functions/formulas#vertex_from_coefficients)\n- [General Transformation](!/functions/formulas#general_transformation)`,
    related_definitions: `- [Quadratic Function](!/functions/definitions#quadratic_function)`
  }
},

{
  name: 'Vertex from Coefficients',
  category: 'Quadratic Function Forms',
  formula: `$$h = -\\frac{b}{2a}, \\quad k = f(h)$$`,
  link: { label: 'Quadratic Functions', url: '/functions/families#5' },
  fields: {
    explanation: `Gives the vertex coordinates of a parabola from the standard form $ax^2 + bx + c$. The $x$-coordinate is $-b/(2a)$; the $y$-coordinate is the function evaluated at that $x$.`,
    derivation: [
      `Convert standard form to vertex form by completing the square.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$f(x) = ax^2 + bx + c$', operation: 'factor $a$ from $x^2$ and $x$ terms' },
          { expr: '$f(x) = a\\left(x^2 + \\frac{b}{a}x\\right) + c$', operation: 'complete the square inside' },
          { expr: '$f(x) = a\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a} + c$', operation: 'match vertex form $a(x-h)^2 + k$' },
          { expr: '$h = -\\frac{b}{2a}, \\quad k = f(h)$', tag: 'result' }
        ]
      }
    ],
    conditions: `$a \\neq 0$.`,
    related_formulas: `- [Vertex Form Quadratic](!/functions/formulas#vertex_form_quadratic)\n- [Standard Form Quadratic](!/functions/formulas#standard_form_quadratic)\n- [Axis of Symmetry](!/functions/formulas#axis_of_symmetry)`,
    related_definitions: `- [Quadratic Function](!/functions/definitions#quadratic_function)`
  }
},

{
  name: 'Axis of Symmetry',
  category: 'Quadratic Function Forms',
  formula: `$$x = -\\frac{b}{2a}$$`,
  link: { label: 'Quadratic Functions', url: '/functions/families#5' },
  // 🆕 New entity candidate for definitions backfill: axis_of_symmetry
  fields: {
    explanation: `The vertical line passing through the vertex, about which the parabola is mirror-symmetric. Same $x$-coordinate as the vertex.`,
    conditions: `$a \\neq 0$.`,
    related_formulas: `- [Vertex from Coefficients](!/functions/formulas#vertex_from_coefficients)\n- [Standard Form Quadratic](!/functions/formulas#standard_form_quadratic)`,
    related_definitions: `- [Quadratic Function](!/functions/definitions#quadratic_function)`
  }
},

{
  name: 'Factored Form Quadratic',
  category: 'Quadratic Function Forms',
  formula: `$$f(x) = a(x - r_1)(x - r_2)$$`,
  link: { label: '', url: '' },
  // TODO: target /functions/families — formula not currently displayed on site
  fields: {
    explanation: `Expresses a quadratic using its roots $r_1$ and $r_2$ directly. Reveals the $x$-intercepts at a glance. Available only when the quadratic has real roots.`,
    conditions: `$a \\neq 0$. Real roots required (discriminant $\\geq 0$). For a double root, $r_1 = r_2$.`,
    related_formulas: `- [Standard Form Quadratic](!/functions/formulas#standard_form_quadratic)\n- [Vertex Form Quadratic](!/functions/formulas#vertex_form_quadratic)`,
    related_definitions: `- [Quadratic Function](!/functions/definitions#quadratic_function)`
  }
},


// ─── Asymptotes of Rational Functions (3 entries) ────────────

{
  name: 'Vertical Asymptote Rational',
  category: 'Asymptotes',
  formula: `$$x = a \\quad \\text{where } Q(a) = 0 \\text{ and } P(a) \\neq 0$$`,
  link: { label: 'Rational Functions', url: '/functions/families#8' },
  fields: {
    explanation: `For a rational function $\\frac{P(x)}{Q(x)}$, vertical asymptotes occur at zeros of the denominator that are not also zeros of the numerator. At these points, the function blows up to $\\pm\\infty$. Common factors that cancel produce holes, not asymptotes.`,
    related_formulas: `- [Horizontal Asymptote Equal Degree](!/functions/formulas#horizontal_asymptote_equal_degree)\n- [Horizontal Asymptote Numerator Lower](!/functions/formulas#horizontal_asymptote_numerator_lower)`,
    related_definitions: `- [Asymptote](!/functions/definitions#asymptote)\n- [Domain](!/functions/definitions#domain)`
  }
},

{
  name: 'Horizontal Asymptote Equal Degree',
  category: 'Asymptotes',
  formula: `$$y = \\frac{a_n}{b_m} \\quad \\text{when } \\deg P = \\deg Q$$`,
  link: { label: 'Rational Functions', url: '/functions/families#8' },
  fields: {
    explanation: `When the numerator and denominator have the same degree, the rational function approaches the ratio of the leading coefficients as $x \\to \\pm\\infty$. The horizontal asymptote sits at this ratio.`,
    notation: `$a_n$ is the leading coefficient of the numerator $P(x)$; $b_m$ is the leading coefficient of the denominator $Q(x)$.`,
    related_formulas: `- [Horizontal Asymptote Numerator Lower](!/functions/formulas#horizontal_asymptote_numerator_lower)\n- [Vertical Asymptote Rational](!/functions/formulas#vertical_asymptote_rational)`,
    related_definitions: `- [Asymptote](!/functions/definitions#asymptote)`
  }
},

{
  name: 'Horizontal Asymptote Numerator Lower',
  category: 'Asymptotes',
  formula: `$$y = 0 \\quad \\text{when } \\deg P < \\deg Q$$`,
  link: { label: 'Rational Functions', url: '/functions/families#8' },
  fields: {
    explanation: `When the numerator has lower degree than the denominator, the rational function approaches zero as $x \\to \\pm\\infty$. The $x$-axis itself is the horizontal asymptote.`,
    related_formulas: `- [Horizontal Asymptote Equal Degree](!/functions/formulas#horizontal_asymptote_equal_degree)\n- [Vertical Asymptote Rational](!/functions/formulas#vertical_asymptote_rational)`,
    related_definitions: `- [Asymptote](!/functions/definitions#asymptote)`
  }
},


// ─── Rates of Change (2 entries) ─────────────────────────────

{
  name: 'Average Rate of Change',
  category: 'Rates of Change',
  formula: `$$\\frac{f(b) - f(a)}{b - a}$$`,
  link: { label: 'Average Rate of Change', url: '/functions/properties#17' },
  // 🆕 New entity candidate for definitions backfill: average_rate_of_change
  fields: {
    explanation: `Measures how much the output changes per unit of input over an interval $[a, b]$. Geometrically, the slope of the secant line through $(a, f(a))$ and $(b, f(b))$.`,
    conditions: `$a \\neq b$. Both $a$ and $b$ in the domain of $f$.`,
    related_formulas: `- [Difference Quotient](!/functions/formulas#difference_quotient)\n- [Slope Formula](!/functions/formulas#slope_formula)`,
    related_definitions: `- [Function](!/functions/definitions#function)`
  }
},

{
  name: 'Difference Quotient',
  category: 'Rates of Change',
  formula: `$$\\frac{f(x + h) - f(x)}{h}$$`,
  link: { label: '', url: '' },
  // TODO: target /functions/properties (or migrate to /calculus/formulas when ready)
  // 🆕 New entity candidate for definitions backfill: difference_quotient
  fields: {
    explanation: `The average rate of change of $f$ over an interval of width $h$ starting at $x$. Shrinking $h$ toward zero produces the instantaneous rate of change — the foundation of the derivative in calculus.`,
    conditions: `$h \\neq 0$. Both $x$ and $x + h$ in the domain of $f$.`,
    related_formulas: `- [Average Rate of Change](!/functions/formulas#average_rate_of_change)`,
    related_definitions: `- [Function](!/functions/definitions#function)`
  }
},

    ];

export default functionsFormulasList;