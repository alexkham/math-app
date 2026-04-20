const functionsTermsList = [

// ─── CORE CONCEPTS ──────────────────────────────────────────────────────

  {
    id: 'function',
    name: 'Function',
    category: 'Core Concepts',
    formula: `A rule that assigns exactly one output to each input. Formally, a function $f$ from set $A$ to set $B$ is a mapping $f: A \to B$ such that every element of $A$ is associated with precisely one element of $B$.`,
    link: { url: '/functions#1', text: 'What is a Function' },
    fields: {
      intuition: `A machine with one slot in and one slot out. Drop in a number, get back exactly one number — never two, never none. The same input always produces the same output.`,
      notation: `$f(x)$ denotes the output of $f$ at input $x$. The letter $f$ names the rule; $f(x)$ names the result. Parentheses indicate evaluation, not multiplication.`,
      'common errors': `Confusing $f(x)$ with $f \cdot x$. The notation $f(x)$ means "$f$ evaluated at $x$," not "$f$ times $x$." Also: assuming every equation defines a function — $x^2 + y^2 = 1$ defines a relation, not a function of $x$.`,
      'related concepts': `- [Relation](!/functions/definitions#relation)`,
    },
  },

  {
    id: 'relation',
    name: 'Relation',
    category: 'Core Concepts',
    formula: `Any set of ordered pairs — a collection of input-output associations with no restriction on how many outputs an input may have.`,
    link: { url: '/functions#2', text: 'Functions vs Relations' },
    fields: {
      intuition: `A relation is the broader category: any pairing of inputs with outputs, no rules about uniqueness. Every function is a relation, but a relation that assigns two outputs to one input is not a function.`,
      examples: `The set $\\{(1, 2), (1, 3), (2, 5)\\}$ is a relation but not a function — input $1$ maps to both $2$ and $3$. The equation $x^2 + y^2 = 1$ defines a relation (the unit circle) that fails the vertical line test.`,
      'related concepts': `- [Function](!/functions/definitions#function)`,
    },
  },

  {
    id: 'domain',
    name: 'Domain',
    category: 'Core Concepts',
    formula: `The set of all inputs for which a function produces a valid output: $\\text{Dom}(f) = \\{x \\mid f(x) \\text{ is defined}\\}$.`,
    link: { url: '/functions/domain#1', text: 'What is Domain' },
    fields: {
      intuition: `The complete collection of values you are allowed to feed into the function. Anything that causes division by zero, an even root of a negative number, or a logarithm of a non-positive number is excluded.`,
      notation: `Expressed in interval notation ($[0, \\infty)$), set-builder notation ($\\{x \\mid x \\geq 0\\}$), or inequality notation ($x \\geq 0$). Disconnected domains use union: $(-\\infty, -1) \\cup (1, \\infty)$.`,
      'special cases': `The natural domain is the largest set for which the formula works. A restricted domain is a deliberate limitation — for instance, restricting $f(x) = x^2$ to $[0, \\infty)$ to make it one-to-one.`,
      'related concepts': `- [Range](!/functions/definitions#range)
- [Inverse Function](!/functions/definitions#inverse_function)`,
    },
  },

  {
    id: 'range',
    name: 'Range',
    category: 'Core Concepts',
    formula: `The set of all output values a function actually produces as the input varies across the entire domain: $\\text{Ran}(f) = \\{f(x) \\mid x \in \text{Dom}(f)\\}$.`,
    link: { url: '/functions/range#1', text: 'What is Range' },
    fields: {
      intuition: `Everything the function can actually spit out. The domain is what goes in; the range is what comes out. Not every real number needs to appear — $f(x) = x^2$ never outputs a negative number.`,
      notation: `Same notations as domain: interval, set-builder, inequality. For $f(x) = x^2$, the range is $[0, \\infty)$.`,
      'common errors': `Confusing range with codomain. The codomain is where outputs are declared to live; the range is the subset actually achieved. For $f(x) = x^2$ from $\\mathbb{R}$ to $\\mathbb{R}$, the codomain is $\\mathbb{R}$ but the range is only $[0, \\infty)$.`,
      'related concepts': `- [Domain](!/functions/definitions#domain)
- [Inverse Function](!/functions/definitions#inverse_function)`,
    },
  },

  {
    id: 'independent_variable',
    name: 'Independent Variable',
    category: 'Core Concepts',
    formula: `The input variable of a function, whose value is chosen freely from the domain.`,
    link: { url: '/functions#7', text: 'Input, Output, and Variables' },
    fields: {
      intuition: `The quantity you control. You pick its value; the function responds with an output. In $y = f(x)$, the variable $x$ is independent — you decide what goes in.`,
      notation: `Conventionally $x$, but any letter serves: $t$ for time, $n$ for a counting index, $\\theta$ for an angle. The choice often reflects context.`,
      'related concepts': `- [Dependent Variable](!/functions/definitions#dependent_variable)`,
    },
  },

  {
    id: 'dependent_variable',
    name: 'Dependent Variable',
    category: 'Core Concepts',
    formula: `The output variable of a function, whose value is determined by the input through the function rule.`,
    link: { url: '/functions#7', text: 'Input, Output, and Variables' },
    fields: {
      intuition: `The quantity that responds. Its value depends entirely on what was fed in. In $y = f(x)$, the variable $y$ is dependent — it has no choice; it is whatever $f$ makes it.`,
      notation: `Conventionally $y$, or $f(x)$ to emphasize the function producing it. Context may use $s$ for position, $C$ for cost, $P$ for population.`,
      'related concepts': `- [Independent Variable](!/functions/definitions#independent_variable)
- [Range](!/functions/definitions#range)`,
    },
  },

  // ─── TYPES & CLASSIFICATION ─────────────────────────────────────────────

  {
    id: 'one_to_one_function',
    name: 'One-to-One Function',
    category: 'Types & Classification',
    formula: `A function where distinct inputs always produce distinct outputs: $f(a) = f(b) \implies a = b$.`,
    link: { url: '/functions/properties#3', text: 'One-to-One Functions' },
    fields: {
      intuition: `No sharing allowed among outputs. Every output traces back to exactly one input, so the process can be reversed. This is the requirement for an inverse function to exist.`,
      properties: `Passes the horizontal line test — every horizontal line intersects the graph at most once. Monotonic functions (strictly increasing or strictly decreasing) are always one-to-one.`,
      'common errors': `Confusing one-to-one with "onto." One-to-one means no output is repeated; onto means every possible output is achieved. They are independent properties.`,
      'related concepts': `- [Inverse Function](!/functions/definitions#inverse_function)
- [Increasing Function](!/functions/definitions#increasing_function)
- [Decreasing Function](!/functions/definitions#decreasing_function)`,
    },
  },

  {
    id: 'even_function',
    name: 'Even Function',
    category: 'Types & Classification',
    formula: `A function satisfying $f(-x) = f(x)$ for all $x$ in its domain.`,
    link: { url: '/functions/properties#1', text: 'Even and Odd Functions' },
    fields: {
      intuition: `Mirror symmetry about the $y$-axis. The left half of the graph is a perfect reflection of the right half. Replacing $x$ with $-x$ changes nothing.`,
      examples: `$f(x) = x^2$, $f(x) = |x|$, $f(x) = \\cos(x)$, $f(x) = x^4 + 1$.`,
      properties: `The domain must be symmetric about the origin. The graph of an even function is symmetric about the $y$-axis. Graphing the right half determines the left.`,
      'related concepts': `- [Odd Function](!/functions/definitions#odd_function)`,
    },
  },

  {
    id: 'odd_function',
    name: 'Odd Function',
    category: 'Types & Classification',
    formula: `A function satisfying $f(-x) = -f(x)$ for all $x$ in its domain.`,
    link: { url: '/functions/properties#1', text: 'Even and Odd Functions' },
    fields: {
      intuition: `Rotational symmetry about the origin. Rotating the graph $180°$ around $(0,0)$ produces the same curve. Replacing $x$ with $-x$ negates the output.`,
      examples: `$f(x) = x^3$, $f(x) = x$, $f(x) = \\sin(x)$, $f(x) = \\frac{1}{x}$.`,
      properties: `The domain must be symmetric about the origin. If $f$ is odd, then $f(0) = 0$ whenever $0$ is in the domain.`,
      'related concepts': `- [Even Function](!/functions/definitions#even_function)`,
    },
  },

  {
    id: 'increasing_function',
    name: 'Increasing Function',
    category: 'Types & Classification',
    formula: `A function is increasing on an interval if $a < b \\implies f(a) < f(b)$ for all $a, b$ in that interval.`,
    link: { url: '/functions/properties#6', text: 'Increasing and Decreasing' },
    fields: {
      intuition: `The graph rises from left to right. Larger inputs yield larger outputs — the function moves only upward as you scan rightward across the interval.`,
      properties: `An increasing function on an interval is one-to-one on that interval. A strictly increasing function on its entire domain has an inverse.`,
      'related concepts': `- [Decreasing Function](!/functions/definitions#decreasing_function)
- [One-to-One Function](!/functions/definitions#one_to_one_function)`,
    },
  },

  {
    id: 'decreasing_function',
    name: 'Decreasing Function',
    category: 'Types & Classification',
    formula: `A function is decreasing on an interval if $a < b \\implies f(a) > f(b)$ for all $a, b$ in that interval.`,
    link: { url: '/functions/properties#6', text: 'Increasing and Decreasing' },
    fields: {
      intuition: `The graph falls from left to right. Larger inputs yield smaller outputs — the function moves only downward as you scan rightward across the interval.`,
      properties: `A decreasing function on an interval is one-to-one on that interval. A strictly decreasing function on its entire domain has an inverse.`,
      'related concepts': `- [Increasing Function](!/functions/definitions#increasing_function)
- [One-to-One Function](!/functions/definitions#one_to_one_function)`,
    },
  },

  {
    id: 'piecewise_function',
    name: 'Piecewise Function',
    category: 'Types & Classification',
    formula: `A function defined by multiple formulas, each applying to a different subset of the domain.`,
    link: { url: '/functions/piecewise#1', text: 'What is a Piecewise Function' },
    fields: {
      intuition: `Different rules for different regions. The function checks where the input falls and applies the corresponding formula. Each input still gets exactly one output — only the rule producing it depends on location.`,
      notation: `Written with brace notation listing each formula alongside its condition. Conditions must be mutually exclusive and cover the intended domain.`,
      examples: `The absolute value function: $|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\ -x & \\text{if } x < 0 \\end{cases}$`,
      'related concepts': `- [Absolute Value Function](!/functions/definitions#absolute_value_function)
- [Constant Function](!/functions/definitions#constant_function)`,
    },
  },

  // ─── OPERATIONS & INVERSES ──────────────────────────────────────────────

  {
    id: 'composition_of_functions',
    name: 'Composition of Functions',
    category: 'Operations & Inverses',
    formula: `The composition of $f$ and $g$ is the function $(f \\circ g)(x) = f(g(x))$, where the output of $g$ becomes the input of $f$.`,
    link: { url: '/functions/composition#1', text: 'What is Function Composition' },
    fields: {
      intuition: `Chaining two machines in series. The first machine processes the input; its output feeds directly into the second machine. The final result depends on both machines working in sequence.`,
      notation: `$(f \\circ g)(x) = f(g(x))$. The symbol $\\circ$ denotes composition. The right-hand function $g$ acts first; the left-hand function $f$ acts second — read inside-out.`,
      properties: `Composition is not commutative: $f \\circ g \\neq g \\circ f$ in general. It is associative: $(f \\circ g) \\circ h = f \\circ (g \\circ h)$. The domain of $f \\circ g$ requires $x$ in the domain of $g$ and $g(x)$ in the domain of $f$.`,
      'related concepts': `- [Inverse Function](!/functions/definitions#inverse_function)`,
    },
  },

  {
    id: 'inverse_function',
    name: 'Inverse Function',
    category: 'Operations & Inverses',
    formula: `A function $f^{-1}$ that reverses $f$: if $f(a) = b$, then $f^{-1}(b) = a$. Equivalently, $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.`,
    link: { url: '/functions/inverse#1', text: 'What is an Inverse Function' },
    fields: {
      intuition: `The undo button. Whatever $f$ does, $f^{-1}$ reverses it. Doubling has halving as its inverse. Adding five has subtracting five. The round trip always returns to the starting point.`,
      notation: `$f^{-1}(x)$ denotes the inverse function — not the reciprocal $\\frac{1}{f(x)}$. The superscript $-1$ is a label, not an exponent.`,
      properties: `Exists only when $f$ is one-to-one. The graph of $f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$. The domain of $f$ becomes the range of $f^{-1}$ and vice versa.`,
      'related concepts': `- [One-to-One Function](!/functions/definitions#one_to_one_function)
- [Composition of Functions](!/functions/definitions#composition_of_functions)`,
    },
  },

  // ─── FUNCTION FAMILIES ──────────────────────────────────────────────────

  {
    id: 'parent_function',
    name: 'Parent Function',
    category: 'Function Families',
    formula: `The simplest function in a family — the baseline shape with no transformations applied.`,
    link: { url: '/functions/transformations#1', text: 'Parent Functions' },
    fields: {
      intuition: `The default template. Every other function in the family is a shifted, stretched, or reflected version of the parent. Knowing the parent means knowing the basic shape; transformations adjust position and scale.`,
      examples: `Linear: $f(x) = x$. Quadratic: $f(x) = x^2$. Cubic: $f(x) = x^3$. Absolute value: $f(x) = |x|$. Square root: $f(x) = \\sqrt{x}$. Exponential: $f(x) = e^x$.`,
      'related concepts': `- [Linear Function](!/functions/definitions#linear_function)
- [Quadratic Function](!/functions/definitions#quadratic_function)
- [Transformation](!/functions/definitions#transformation)`,
    },
  },

  {
    id: 'linear_function',
    name: 'Linear Function',
    category: 'Function Families',
    formula: `A function of the form $f(x) = mx + b$, where $m$ is the slope and $b$ is the $y$-intercept.`,
    link: { url: '/functions/families#4', text: 'Linear Functions' },
    fields: {
      intuition: `A straight line. The output changes at a constant rate — every unit increase in input produces exactly $m$ units of change in output. No curvature, no surprises.`,
      properties: `Domain and range are both $(-\\infty, \\infty)$ when $m \\neq 0$. Constant rate of change equals the slope $m$. One-to-one when $m \\neq 0$, with inverse $f^{-1}(x) = \\frac{x - b}{m}$. Parent function: $f(x) = x$.`,
      'related concepts': `- [Constant Function](!/functions/definitions#constant_function)
- [Quadratic Function](!/functions/definitions#quadratic_function)
- [Parent Function](!/functions/definitions#parent_function)`,
    },
  },

  {
    id: 'quadratic_function',
    name: 'Quadratic Function',
    category: 'Function Families',
    formula: `A function of the form $f(x) = ax^2 + bx + c$ with $a \neq 0$. The graph is a parabola.`,
    link: { url: '/functions/families#5', text: 'Quadratic Functions' },
    fields: {
      intuition: `A U-shaped curve (or inverted U). The function changes direction at the vertex — falling then rising, or rising then falling. The leading coefficient $a$ controls which way the parabola opens and how wide it is.`,
      properties: `Domain: all real numbers. Range: $[k, \\infty)$ when $a > 0$ or $(-\\infty, k]$ when $a < 0$, where $k$ is the vertex $y$-coordinate. Vertex at $x = -\\frac{b}{2a}$. Not one-to-one on the natural domain; one-to-one when restricted to one side of the vertex. Parent function: $f(x) = x^2$.`,
      'related concepts': `- [Linear Function](!/functions/definitions#linear_function)
- [Parent Function](!/functions/definitions#parent_function)`,
    },
  },

  {
    id: 'constant_function',
    name: 'Constant Function',
    category: 'Function Families',
    formula: `A function of the form $f(x) = c$ where $c$ is a fixed real number. Every input produces the same output.`,
    link: { url: '/functions/families#3', text: 'Constant Functions' },
    fields: {
      intuition: `A flat line. No matter what goes in, the same value comes out. The function ignores its input entirely.`,
      properties: `Domain: all real numbers. Range: $\\{c\\}$. Even symmetry. Neither increasing nor decreasing. Not one-to-one (unless the domain has a single point). A polynomial of degree $0$ when $c \\neq 0$.`,
      'related concepts': `- [Linear Function](!/functions/definitions#linear_function)
- [Piecewise Function](!/functions/definitions#piecewise_function)`,
    },
  },

  {
    id: 'absolute_value_function',
    name: 'Absolute Value Function',
    category: 'Function Families',
    formula: `The function $f(x) = |x|$, returning the distance of $x$ from zero: $|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\ -x & \\text{if } x < 0 \\end{cases}$.`,
    link: { url: '/functions/families#12', text: 'Absolute Value Function' },
    fields: {
      intuition: `Strips the sign. Positive inputs pass through unchanged; negative inputs become positive. The output is always the magnitude — how far from zero, regardless of direction.`,
      properties: `Domain: all real numbers. Range: $[0, \\infty)$. V-shaped graph with vertex at the origin. Even function: $|-x| = |x|$. Not one-to-one. Decreasing on $(-\\infty, 0)$, increasing on $(0, \\infty)$.`,
      'common errors': `Assuming $|x| = x$. This holds only when $x \\geq 0$. For negative $x$, $|x| = -x$ (which is positive, since $x$ is negative).`,
      'related concepts': `- [Piecewise Function](!/functions/definitions#piecewise_function)
- [Even Function](!/functions/definitions#even_function)`,
    },
  },

  // ─── GRAPH FEATURES ─────────────────────────────────────────────────────

  {
    id: 'zero_of_a_function',
    name: 'Zero of a Function',
    category: 'Graph Features',
    formula: `An input value $c$ where $f(c) = 0$. Also called a root of the function.`,
    link: { url: '/functions/properties#16', text: 'Zeros and Roots' },
    fields: {
      intuition: `Where the function's output hits zero — graphically, where the curve crosses or touches the $x$-axis. Finding zeros means solving $f(x) = 0$.`,
      properties: `A polynomial of degree $n$ has at most $n$ real zeros. The multiplicity of a zero determines graph behavior: odd multiplicity crosses the axis, even multiplicity bounces off it.`,
      examples: `$f(x) = x^2 - 5x + 6$ has zeros at $x = 2$ and $x = 3$, since $(x-2)(x-3) = 0$.`,
      'related concepts': `- [Local Maximum](!/functions/definitions#local_maximum)
- [Local Minimum](!/functions/definitions#local_minimum)`,
    },
  },

  {
    id: 'asymptote',
    name: 'Asymptote',
    category: 'Graph Features',
    formula: `A line that the graph of a function approaches but does not reach (or reaches only in the limit).`,
    link: { url: '/functions/properties#13', text: 'Asymptotes' },
    fields: {
      intuition: `A boundary the curve chases forever without arriving. The graph gets arbitrarily close to the line but never settles on it (or crosses it only finitely many times).`,
      'special cases': `Vertical asymptote $x = a$: output explodes to $\\pm\\infty$ as input approaches $a$. Horizontal asymptote $y = L$: output approaches $L$ as $x \\to \\pm\\infty$. Oblique asymptote $y = mx + b$: output approaches a slanted line at the extremes.`,
      'common errors': `Assuming the function can never cross a horizontal asymptote. It can — the asymptote describes limiting behavior, not a barrier. Vertical asymptotes, however, are never crossed because the function is undefined there.`,
      'related concepts': `- [Domain](!/functions/definitions#domain)`,
    },
  },

  {
    id: 'local_maximum',
    name: 'Local Maximum',
    category: 'Graph Features',
    formula: `A function value $f(c)$ such that $f(c) \\geq f(x)$ for all $x$ in some open interval containing $c$.`,
    link: { url: '/functions/properties#9', text: 'Local Extrema' },
    fields: {
      intuition: `A peak — the highest point in the immediate neighborhood. The curve rises to this point and then falls. Nearby outputs are all lower, though outputs farther away may be higher.`,
      properties: `Occurs at turning points where the function switches from increasing to decreasing. On a graph, appears as a hilltop. The absolute (global) maximum is the largest local maximum across the entire domain.`,
      'related concepts': `- [Local Minimum](!/functions/definitions#local_minimum)
- [Increasing Function](!/functions/definitions#increasing_function)
- [Decreasing Function](!/functions/definitions#decreasing_function)`,
    },
  },

  {
    id: 'local_minimum',
    name: 'Local Minimum',
    category: 'Graph Features',
    formula: `A function value $f(c)$ such that $f(c) \leq f(x)$ for all $x$ in some open interval containing $c$.`,
    link: { url: '/functions/properties#9', text: 'Local Extrema' },
    fields: {
      intuition: `A valley — the lowest point in the immediate neighborhood. The curve falls to this point and then rises. Nearby outputs are all higher, though outputs farther away may be lower.`,
      properties: `Occurs at turning points where the function switches from decreasing to increasing. On a graph, appears as a trough. The absolute (global) minimum is the smallest local minimum across the entire domain.`,
      'related concepts': `- [Local Maximum](!/functions/definitions#local_maximum)
- [Increasing Function](!/functions/definitions#increasing_function)
- [Decreasing Function](!/functions/definitions#decreasing_function)`,
    },
  },

  // ─── TRANSFORMATIONS ────────────────────────────────────────────────────

  {
    id: 'transformation',
    name: 'Transformation',
    category: 'Transformations',
    formula: `An operation that modifies the graph of a function by shifting, reflecting, stretching, or compressing it, producing a new function from an existing one.`,
    link: { url: '/functions/transformations#2', text: 'Transformations Overview' },
    fields: {
      intuition: `Reshaping a curve without rebuilding it from scratch. Start with a known parent function and adjust its position, orientation, and scale. The underlying shape is preserved — only where and how it appears changes.`,
      notation: `The general transformed function: $g(x) = a \\cdot f(b(x - h)) + k$, where $h$ shifts horizontally, $k$ shifts vertically, $a$ scales/reflects vertically, and $b$ scales/reflects horizontally.`,
      'related concepts': `- [Translation](!/functions/definitions#translation)
- [Reflection](!/functions/definitions#reflection)
- [Dilation](!/functions/definitions#dilation)
- [Parent Function](!/functions/definitions#parent_function)`,
    },
  },

  {
    id: 'translation',
    name: 'Translation',
    category: 'Transformations',
    formula: `A transformation that shifts the graph of a function horizontally, vertically, or both, without changing its shape, size, or orientation.`,
    link: { url: '/functions/transformations#3', text: 'Vertical Translations' },
    fields: {
      intuition: `Sliding the entire curve to a new position. Every point moves the same distance in the same direction. The shape is unchanged — only the location shifts.`,
      properties: `Vertical: $g(x) = f(x) + k$ shifts up ($k > 0$) or down ($k < 0$). Horizontal: $g(x) = f(x - h)$ shifts right ($h > 0$) or left ($h < 0$). Vertical translation changes range; horizontal translation changes domain. Neither changes the shape.`,
      'common errors': `The horizontal direction is counterintuitive: $f(x - 3)$ shifts right, not left. Subtracting inside the argument moves the graph in the positive direction.`,
      'related concepts': `- [Transformation](!/functions/definitions#transformation)
- [Reflection](!/functions/definitions#reflection)
- [Dilation](!/functions/definitions#dilation)`,
    },
  },

  {
    id: 'reflection',
    name: 'Reflection',
    category: 'Transformations',
    formula: `A transformation that flips the graph of a function across an axis, reversing its orientation in one direction.`,
    link: { url: '/functions/transformations#5', text: 'Vertical Reflections' },
    fields: {
      intuition: `A mirror image. Reflecting across the $x$-axis flips the graph upside down; reflecting across the $y$-axis swaps left and right.`,
      properties: `Vertical reflection: $g(x) = -f(x)$ flips across the $x$-axis. Peaks become valleys; the range negates. Horizontal reflection: $g(x) = f(-x)$ flips across the $y$-axis. The domain negates. $x$-intercepts are preserved under vertical reflection; $y$-intercept is preserved under horizontal reflection.`,
      'related concepts': `- [Transformation](!/functions/definitions#transformation)
- [Even Function](!/functions/definitions#even_function)
- [Odd Function](!/functions/definitions#odd_function)`,
    },
  },

  {
    id: 'dilation',
    name: 'Dilation',
    category: 'Transformations',
    formula: `A transformation that stretches or compresses the graph of a function, changing its scale without shifting or reflecting it.`,
    link: { url: '/functions/transformations#7', text: 'Vertical Stretch and Compression' },
    fields: {
      intuition: `Pulling the curve away from an axis (stretch) or pushing it toward an axis (compression). The shape narrows or widens, steepens or flattens, but the basic form remains recognizable.`,
      properties: `Vertical: $g(x) = a \\cdot f(x)$. $|a| > 1$ stretches (taller); $0 < |a| < 1$ compresses (shorter). Horizontal: $g(x) = f(bx)$. $|b| > 1$ compresses (narrower); $0 < |b| < 1$ stretches (wider). The horizontal direction is again counterintuitive.`,
      'common errors': `Expecting $f(2x)$ to stretch the graph horizontally. It compresses it — the function reaches its landmark values at half the $x$-distance. Multiplying inside makes the graph narrower, not wider.`,
      'related concepts': `- [Transformation](!/functions/definitions#transformation)
- [Translation](!/functions/definitions#translation)
- [Reflection](!/functions/definitions#reflection)`,
    },
  },




];

export default functionsTermsList;
