
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import Head from 'next/head';
// import '../../pages.css'
// import DataWrapper from '@/app/components/generic-table/DataWrapper';
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
// import IntroBar from '../../../app/components/page-components/IntroBar'
// import Sections from '../../../app/components/page-components/section/Sections'

// export default function MathSymbolsCalculusPage({ symbolsData, meta,menuItems,introBarData,
//       pitfallSections, }) {


//         const pitfallGenericSections = [
//   {
//     id: 'notation-confusions',
//     title: pitfallSections.obj1.title,
//     link: pitfallSections.obj1.link,
//     content: [pitfallSections.obj1.content],
//   },
//   {
//     id: 'algebraic-traps',
//     title: pitfallSections.obj2.title,
//     link: pitfallSections.obj2.link,
//     content: [pitfallSections.obj2.content],
//   },
//   {
//     id: 'integral-mistakes',
//     title: pitfallSections.obj3.title,
//     link: pitfallSections.obj3.link,
//     content: [pitfallSections.obj3.content],
//   },
// ];
//   return (
//     <>
//       <Head>
//         <title>{meta.title}</title>
//         <meta name="description" content={meta.description} />
//         <meta name="keywords" content={meta.keywords.join(', ')} />
//         <meta name="author" content={meta.author} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="canonical" href={meta.canonical} />
//       </Head>
//       {/* <GenericNavbar /> */}
//       <br />
//       <br />
//       <br />
//       <br />
//       <Breadcrumb />
//       <OperaSidebar
//         side="right"
//         // topOffset="65px"
//         sidebarWidth="45px"
//         panelWidth="300px"
//         iconColor="white"
//         panelBackgroundColor="#f2f2f2"
//       />
//       <h1 className="title" style={{ marginTop: '0px' }}>
//         {meta.pageHeading}
//       </h1>
//       <br/>
//       <br/>
//        <IntroBar introBar={introBarData} />
//       <br/>
//       {/* <VerticalButtonGroup 
//       items={menuItems}
//       width="130px"       
//     //   backgroundColor ='#0070f3'
//     //   color = 'white'
//       isSticky={true}
//       verticalOffset='200px'
//       /> */}
//       <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
      
//       <VerticalButtonGroup 
//       items={menuItems}
//       width="200px"       
//     //   backgroundColor ='#0070f3'
//     //   color = 'white'
//       isSticky={true}
//       verticalOffset='250px'
//       />
//       <div
//         className="title"
//         style={{
//           margin: 'auto',
//           width: '85%',
//         }}
//       >
        
//         <DataWrapper data={symbolsData} />
//       </div>
//       </div>
//       {/* <ScrollUpButton /> */}
//       <br/>
//       <br/>
//          <Sections sections={pitfallGenericSections} />
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//     </>
//   );
// }

// // Include data and metadata in getStaticProps
// export async function getStaticProps() {


//   const menuItems = [
//     {
//       title: "Linear Algebra",
//       // icon: <Home />,
//       link: "/math-symbols/linear-algebra"
//     },
//     {
//         title: "Mathematical Logic",
//         // icon: <Home />,
//         link: "/math-symbols/math-logic"
//       },
//       // {
//       //   title: "Calculus",
//       //   // icon: <Home />,
//       //   link: "/math-symbols/calculus"
//       // },
//       {
//         title: "Trigonometry",
//         // icon: <Home />,
//         link: "/math-symbols/trigonometry"
//       },
//       {
//         title: "Set Theory",
//         // icon: <Home />,
//         link: "/math-symbols/set-theory"
//       },

//       {
//         title: "Combinatorics",
//         // icon: <Home />,
//         link: "/math-symbols/combinatorics"
//       },
//       {
//         title: "Probability",
//         // icon: <Home />,
//         link: "/math-symbols/probability"
//       },
//        {
//           title: "Complex Numbers",
//           link: "/math-symbols/complex-numbers"  // Example without icon
//         },
//     // {
//     //   title: "Settings",
//     //   link: "/settings"  // Example without icon
//     // }
//   ];
  
 
//   const meta = {
//     title: 'Calculus Symbols | Calculus Symbols Chart',
//     description:
//       'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
//     keywords: [
//       'math symbols',
//       'mathematical symbols',
//       'LaTeX',
//       'LaTeX code',
//       'math symbols list',
//       'math symbols chart',
//        'calculus symbols',
//        'calculus math symbols'
//     ],
//     author: 'LearnMathClass',
//     canonical: 'https://www.learnmathclass.com/math-symbols/calculus',
//     pageHeading: 'Calculus Symbols',
//   };
//   // const symbolsData = {
//   //   "differentiation": [
//   //     {"symbol": "f'(x)", "latex_code": "f'(x)", "explanation": "First derivative of f(x)"},
//   //     {"symbol": "f''(x)", "latex_code": "f''(x)", "explanation": "Second derivative of f(x)"},
//   //     {"symbol": "df/dx", "latex_code": "\\frac{df}{dx}", "explanation": "Derivative of f with respect to x"},
//   //     {"symbol": "∂f/∂x", "latex_code": "\\frac{\\partial f}{\\partial x}", "explanation": "Partial derivative of f with respect to x"},
//   //     {"symbol": "Dⁿf(x)", "latex_code": "D^n f(x)", "explanation": "nth derivative of f(x)"},
//   //     {"symbol": "dy/dx", "latex_code": "\\frac{dy}{dx}", "explanation": "Rate of change of y with respect to x"},
//   //     {"symbol": "∇f", "latex_code": "\\nabla f", "explanation": "Gradient of a scalar field f"}
//   //   ],
//   //   "integration": [
//   //     {"symbol": "∫ f(x) dx", "latex_code": "\\int f(x)\\, dx", "explanation": "Indefinite integral of f(x)"},
//   //     {"symbol": "∫ₐᵇ f(x) dx", "latex_code": "\\int_a^b f(x)\\, dx", "explanation": "Definite integral of f(x) from a to b"},
//   //     {"symbol": "∬ f(x,y) dA", "latex_code": "\\iint f(x,y)\\, dA", "explanation": "Double integral over a region A"},
//   //     {"symbol": "∭ f(x,y,z) dV", "latex_code": "\\iiint f(x,y,z)\\, dV", "explanation": "Triple integral over a volume V"},
//   //     {"symbol": "∮ f(x) dx", "latex_code": "\\oint f(x)\\, dx", "explanation": "Line integral of f(x)"},
//   //     {"symbol": "∫ₓ f ds", "latex_code": "\\int_C f\\, ds", "explanation": "Integral along a curve C"}
//   //   ],
//   //   "limits": [
//   //     {"symbol": "limₓ→c f(x)", "latex_code": "\\lim_{x \\to c} f(x)", "explanation": "Limit of f(x) as x approaches c"},
//   //     {"symbol": "limₓ→∞ f(x)", "latex_code": "\\lim_{x \\to \\infty} f(x)", "explanation": "Limit of f(x) as x approaches infinity"},
//   //     {"symbol": "limₓ→c⁻ f(x)", "latex_code": "\\lim_{x \\to c^-} f(x)", "explanation": "Left-hand limit of f(x) as x approaches c"},
//   //     {"symbol": "limₓ→c⁺ f(x)", "latex_code": "\\lim_{x \\to c^+} f(x)", "explanation": "Right-hand limit of f(x) as x approaches c"}
//   //   ],
//   //   "series": [
//   //     {"symbol": "∑ₙ₌₁ⁿ₌∞ aₙ", "latex_code": "\\sum_{n=1}^\\infty a_n", "explanation": "Infinite series"},
//   //     {"symbol": "∑ₙ₌₀ⁿ₌N aₙ", "latex_code": "\\sum_{n=0}^N a_n", "explanation": "Finite series up to N terms"},
//   //     {"symbol": "Πₙ₌₁ⁿ₌∞ aₙ", "latex_code": "\\prod_{n=1}^\\infty a_n", "explanation": "Infinite product"},
//   //     {"symbol": "a₀ + ∑ₙ₌₁ⁿ₌∞ aₙxⁿ", "latex_code": "a_0 + \\sum_{n=1}^\\infty a_n x^n", "explanation": "Power series representation of a function"}
//   //   ],
//   //   "vector_calculus": [
//   //     {"symbol": "∇⋅F", "latex_code": "\\nabla \\cdot \\mathbf{F}", "explanation": "Divergence of a vector field F"},
//   //     {"symbol": "∇×F", "latex_code": "\\nabla \\times \\mathbf{F}", "explanation": "Curl of a vector field F"},
//   //     {"symbol": "∬ₛ F ⋅ dS", "latex_code": "\\iint_S \\mathbf{F} \\cdot \\mathbf{dS}", "explanation": "Flux of F through a surface S"},
//   //     {"symbol": "∮ₓ F ⋅ dr", "latex_code": "\\oint_C \\mathbf{F} \\cdot \\mathbf{dr}", "explanation": "Line integral of F along a curve C"}
//   //   ],
//   //   "other_notations": [
//   //     {"symbol": "|f(x)|", "latex_code": "|f(x)|", "explanation": "Absolute value of f(x)"},
//   //     {"symbol": "sgn(x)", "latex_code": "\\text{sgn}(x)", "explanation": "Sign function"},
//   //     {"symbol": "∞", "latex_code": "\\infty", "explanation": "Infinity"},
//   //     {"symbol": "dx", "latex_code": "dx", "explanation": "Infinitesimal change in x"},
//   //     {"symbol": "ε", "latex_code": "\\epsilon", "explanation": "Epsilon (small positive quantity in limits)"},
//   //     {"symbol": "δ", "latex_code": "\\delta", "explanation": "Delta (small positive quantity in limits)"}
//   //   ],
//   //   "advanced_integration": [
//   //     {"symbol": "∭ₓ f dV", "latex_code": "\\iiint_V f\\, dV", "explanation": "Triple integral over a volume V"},
//   //     {"symbol": "∯ₓ f dS", "latex_code": "\\iint_S f\\, dS", "explanation": "Surface integral over surface S"},
//   //     {"symbol": "∮ₓ f dx", "latex_code": "\\oint_C f\\, dx", "explanation": "Closed line integral"},
//   //     {"symbol": "∫ₐᵦ |f(x)| dx", "latex_code": "\\int_a^b |f(x)|\\, dx", "explanation": "Integral of absolute value of f(x)"},
//   //     {"symbol": "∫ f(x) δ(x − x₀) dx", "latex_code": "\\int f(x)\\, \\delta(x - x_0)\\, dx", "explanation": "Integral involving Dirac delta function"}
//   //   ],
//   //   "differential_operators": [
//   //     {"symbol": "∇²f", "latex_code": "\\nabla^2 f", "explanation": "Laplacian of f"},
//   //     {"symbol": "∂²f/∂x²", "latex_code": "\\frac{\\partial^2 f}{\\partial x^2}", "explanation": "Second partial derivative of f with respect to x"},
//   //     {"symbol": "∂²f/∂x∂y", "latex_code": "\\frac{\\partial^2 f}{\\partial x \\partial y}", "explanation": "Mixed second partial derivative"},
//   //     {"symbol": "d²y/dx²", "latex_code": "\\frac{d^2y}{dx^2}", "explanation": "Second ordinary derivative of y with respect to x"}
//   //   ],
//   //   "curvature_geometry": [
//   //     {"symbol": "κ", "latex_code": "\\kappa", "explanation": "Curvature of a curve"},
//   //     {"symbol": "τ", "latex_code": "\\tau", "explanation": "Torsion of a curve"},
//   //     {"symbol": "r(t)", "latex_code": "\\mathbf{r}(t)", "explanation": "Parametric curve"},
//   //     {"symbol": "T(t)", "latex_code": "\\mathbf{T}(t)", "explanation": "Unit tangent vector"},
//   //     {"symbol": "N(t)", "latex_code": "\\mathbf{N}(t)", "explanation": "Unit normal vector"},
//   //     {"symbol": "B(t)", "latex_code": "\\mathbf{B}(t)", "explanation": "Unit binormal vector"}
//   //   ],
//   //   "special_functions": [
//   //     {"symbol": "Γ(n)", "latex_code": "\\Gamma(n)", "explanation": "Gamma function"},
//   //     {"symbol": "ζ(s)", "latex_code": "\\zeta(s)", "explanation": "Riemann zeta function"},
//   //     {"symbol": "Li(x)", "latex_code": "\\text{Li}(x)", "explanation": "Logarithmic integral"},
//   //     {"symbol": "erf(x)", "latex_code": "\\text{erf}(x)", "explanation": "Error function"}
//   //   ],
//   //   "differential_equations": [
//   //     {"symbol": "dy/dx = f(x)", "latex_code": "\\frac{dy}{dx} = f(x)", "explanation": "Ordinary differential equation"},
//   //     {"symbol": "∂u/∂t = D∇²u", "latex_code": "\\frac{\\partial u}{\\partial t} = D\\nabla^2 u", "explanation": "Heat equation"},
//   //     {"symbol": "∂²u/∂t² = c²∇²u", "latex_code": "\\frac{\\partial^2 u}{\\partial t^2} = c^2\\nabla^2 u", "explanation": "Wave equation"},
//   //     {"symbol": "∇²φ = ρ", "latex_code": "\\nabla^2 \\phi = \\rho", "explanation": "Poisson's equation"}
//   //   ]
//   // };
  

//   const symbolsData = {
//     "differentiation": [
//       {"symbol": "f'(x)", "latex_code": "f'(x)", "explanation": "First derivative of f(x) — Lagrange notation, the most common for single-variable functions. See [notation conventions](!/calculus/derivatives/higher-order#1)"},
//       {"symbol": "f''(x)", "latex_code": "f''(x)", "explanation": "Second derivative of f(x) — measures [concavity](!/calculus/derivatives/graph-analysis#7) and the rate at which the slope itself changes"},
//       {"symbol": "df/dx", "latex_code": "\\frac{df}{dx}", "explanation": "Derivative of f with respect to x — [Leibniz notation](!/calculus/derivatives/differentials#7), emphasizes the variable of differentiation and behaves algebraically in the chain rule"},
//       {"symbol": "∂f/∂x", "latex_code": "\\frac{\\partial f}{\\partial x}", "explanation": "Partial derivative of f with respect to x — used when f depends on multiple variables, all others held constant. Uses the curled ∂ to distinguish from the ordinary d"},
//       {"symbol": "Dⁿf(x)", "latex_code": "D^n f(x)", "explanation": "n-th derivative of f(x) — operator notation, compact for [higher-order derivatives](!/calculus/derivatives/higher-order#1). Parenthetical superscript f⁽ⁿ⁾ is the Lagrange equivalent"},
//       {"symbol": "dy/dx", "latex_code": "\\frac{dy}{dx}", "explanation": "Rate of change of y with respect to x — Leibniz notation, interpretable as the ratio of [differentials](!/calculus/derivatives/differentials#2) dy and dx"},
//       {"symbol": "∇f", "latex_code": "\\nabla f", "explanation": "Gradient of a scalar field f — a [vector](!/linear-algebra/vectors) of all partial derivatives, points in the direction of steepest ascent"}
//     ],
//     "integration": [
//       {"symbol": "∫ f(x) dx", "latex_code": "\\int f(x)\\, dx", "explanation": "[Indefinite integral](!/calculus/integrals/indefinite#3) of f(x) — the family of antiderivatives, result always includes + C"},
//       {"symbol": "∫ₐᵇ f(x) dx", "latex_code": "\\int_a^b f(x)\\, dx", "explanation": "[Definite integral](!/calculus/integrals/definite#2) of f(x) from a to b — yields a number representing signed area under the curve"},
//       {"symbol": "∬ f(x,y) dA", "latex_code": "\\iint f(x,y)\\, dA", "explanation": "Double integral over a region A — extends integration to two variables, computes volume or accumulated quantity over a planar region"},
//       {"symbol": "∭ f(x,y,z) dV", "latex_code": "\\iiint f(x,y,z)\\, dV", "explanation": "Triple integral over a volume V — extends integration to three dimensions, computes mass, charge, or other quantities distributed in space"},
//       {"symbol": "∮ f(x) dx", "latex_code": "\\oint f(x)\\, dx", "explanation": "Line integral over a closed curve — the circle on the integral sign indicates the path returns to its starting point"},
//       {"symbol": "∫ₓ f ds", "latex_code": "\\int_C f\\, ds", "explanation": "Integral along a curve C — integrates with respect to arc length rather than a coordinate variable"}
//     ],
//     "limits": [
//       {"symbol": "limₓ→c f(x)", "latex_code": "\\lim_{x \\to c} f(x)", "explanation": "Limit of f(x) as x approaches c — the value f(x) tends toward, whether or not f(c) exists"},
//       {"symbol": "limₓ→∞ f(x)", "latex_code": "\\lim_{x \\to \\infty} f(x)", "explanation": "Limit of f(x) as x approaches infinity — describes end behavior, connected to horizontal asymptotes"},
//       {"symbol": "limₓ→c⁻ f(x)", "latex_code": "\\lim_{x \\to c^-} f(x)", "explanation": "Left-hand limit — the value f(x) approaches as x comes from values less than c"},
//       {"symbol": "limₓ→c⁺ f(x)", "latex_code": "\\lim_{x \\to c^+} f(x)", "explanation": "Right-hand limit — the value f(x) approaches as x comes from values greater than c"}
//     ],
//     "series": [
//       {"symbol": "∑ₙ₌₁ⁿ₌∞ aₙ", "latex_code": "\\sum_{n=1}^\\infty a_n", "explanation": "Infinite series — the sum of infinitely many terms, converges if the partial sums approach a finite limit"},
//       {"symbol": "∑ₙ₌₀ⁿ₌N aₙ", "latex_code": "\\sum_{n=0}^N a_n", "explanation": "Finite series — the sum of the first N + 1 terms, always produces a definite value"},
//       {"symbol": "Πₙ₌₁ⁿ₌∞ aₙ", "latex_code": "\\prod_{n=1}^\\infty a_n", "explanation": "Infinite product — the product of infinitely many factors, converges if the partial products approach a nonzero finite limit"},
//       {"symbol": "a₀ + ∑ₙ₌₁ⁿ₌∞ aₙxⁿ", "latex_code": "a_0 + \\sum_{n=1}^\\infty a_n x^n", "explanation": "Power series — represents a function as an infinite polynomial; coefficients relate to [higher-order derivatives](!/calculus/derivatives/higher-order#8) via Taylor's formula"}
//     ],
//     "vector_calculus": [
//       {"symbol": "∇⋅F", "latex_code": "\\nabla \\cdot \\mathbf{F}", "explanation": "Divergence of a vector field F — a scalar measuring net outward flux per unit volume at each point"},
//       {"symbol": "∇×F", "latex_code": "\\nabla \\times \\mathbf{F}", "explanation": "Curl of a vector field F — a vector measuring local rotational tendency at each point"},
//       {"symbol": "∬ₛ F ⋅ dS", "latex_code": "\\iint_S \\mathbf{F} \\cdot \\mathbf{dS}", "explanation": "Flux integral — measures the total flow of F through a surface S, accounting for direction via the surface normal"},
//       {"symbol": "∮ₓ F ⋅ dr", "latex_code": "\\oint_C \\mathbf{F} \\cdot \\mathbf{dr}", "explanation": "Circulation integral — measures the total work done by F along a closed curve C"}
//     ],
//     "other_notations": [
//       {"symbol": "|f(x)|", "latex_code": "|f(x)|", "explanation": "Absolute value of f(x) — the non-negative magnitude, relevant when [evaluating integrals](!/calculus/integrals/evaluating#4) involving sign changes"},
//       {"symbol": "sgn(x)", "latex_code": "\\text{sgn}(x)", "explanation": "Sign function — returns −1 for negative x, 0 for zero, and +1 for positive x"},
//       {"symbol": "∞", "latex_code": "\\infty", "explanation": "Infinity — not a number but a symbol describing unbounded growth, used in limits and [improper integrals](!/calculus/integrals/improper#2)"},
//       {"symbol": "dx", "latex_code": "dx", "explanation": "[Differential](!/calculus/derivatives/differentials#1) of x — an independent increment, not required to be infinitely small; sets the scale for linear approximation"},
//       {"symbol": "ε", "latex_code": "\\epsilon", "explanation": "Epsilon — conventionally a small positive quantity in the formal ε-δ definition of limits"},
//       {"symbol": "δ", "latex_code": "\\delta", "explanation": "Delta — the corresponding small positive quantity in ε-δ definitions; for every ε there must exist a δ"}
//     ],
//     "advanced_integration": [
//       {"symbol": "∭ₓ f dV", "latex_code": "\\iiint_V f\\, dV", "explanation": "Triple integral over a volume V — computes accumulated quantity throughout a three-dimensional region"},
//       {"symbol": "∯ₓ f dS", "latex_code": "\\iint_S f\\, dS", "explanation": "Surface integral over surface S — integrates a scalar function over a two-dimensional surface embedded in space"},
//       {"symbol": "∮ₓ f dx", "latex_code": "\\oint_C f\\, dx", "explanation": "Closed line integral — integrates over a path that forms a complete loop"},
//       {"symbol": "∫ₐᵦ |f(x)| dx", "latex_code": "\\int_a^b |f(x)|\\, dx", "explanation": "Integral of absolute value — computes total unsigned area, counting regions below the x-axis as [positive](!/calculus/integrals/definite#3)"},
//       {"symbol": "∫ f(x) δ(x − x₀) dx", "latex_code": "\\int f(x)\\, \\delta(x - x_0)\\, dx", "explanation": "Integral involving the Dirac delta — extracts the value f(x₀); the delta is a distribution, not a function in the classical sense"}
//     ],
//     "differential_operators": [
//       {"symbol": "∇²f", "latex_code": "\\nabla^2 f", "explanation": "Laplacian of f — the divergence of the gradient, a second-order differential operator fundamental to physics"},
//       {"symbol": "∂²f/∂x²", "latex_code": "\\frac{\\partial^2 f}{\\partial x^2}", "explanation": "Second partial derivative of f with respect to x — differentiates twice with respect to the same variable"},
//       {"symbol": "∂²f/∂x∂y", "latex_code": "\\frac{\\partial^2 f}{\\partial x \\partial y}", "explanation": "Mixed second partial derivative — differentiates with respect to y then x; equals ∂²f/∂y∂x when both are continuous (Clairaut's theorem)"},
//       {"symbol": "d²y/dx²", "latex_code": "\\frac{d^2y}{dx^2}", "explanation": "[Second derivative](!/calculus/derivatives/higher-order#2) of y with respect to x — the notation d²y/dx² is a single operator, not a fraction"}
//     ],
//     "curvature_geometry": [
//       {"symbol": "κ", "latex_code": "\\kappa", "explanation": "Curvature of a curve — measures how sharply the curve bends at each point; the reciprocal of the radius of the best-fitting circle"},
//       {"symbol": "τ", "latex_code": "\\tau", "explanation": "Torsion of a space curve — measures how the curve twists out of its osculating plane"},
//       {"symbol": "r(t)", "latex_code": "\\mathbf{r}(t)", "explanation": "Parametric curve — a vector-valued function tracing a path as the parameter t varies; [parametric differentiation](!/calculus/derivatives/techniques#6) gives the tangent"},
//       {"symbol": "T(t)", "latex_code": "\\mathbf{T}(t)", "explanation": "Unit tangent vector — the normalized derivative r'(t)/|r'(t)|, pointing in the direction of motion"},
//       {"symbol": "N(t)", "latex_code": "\\mathbf{N}(t)", "explanation": "Unit normal vector — perpendicular to T(t) in the direction the curve is turning"},
//       {"symbol": "B(t)", "latex_code": "\\mathbf{B}(t)", "explanation": "Unit binormal vector — perpendicular to both T and N, completing the Frenet-Serret frame"}
//     ],
//     "special_functions": [
//       {"symbol": "Γ(n)", "latex_code": "\\Gamma(n)", "explanation": "Gamma function — extends factorial to real and complex numbers; Γ(n) = (n−1)! for positive integers"},
//       {"symbol": "ζ(s)", "latex_code": "\\zeta(s)", "explanation": "Riemann zeta function — defined as ∑ 1/nˢ for Re(s) > 1, central to number theory and the distribution of primes"},
//       {"symbol": "Li(x)", "latex_code": "\\text{Li}(x)", "explanation": "Logarithmic integral — defined as ∫ dt/ln(t), used in prime number estimates"},
//       {"symbol": "erf(x)", "latex_code": "\\text{erf}(x)", "explanation": "Error function — (2/√π)∫₀ˣ e⁻ᵗ² dt, arises in probability and the normal distribution"}
//     ],
//     "differential_equations": [
//       {"symbol": "dy/dx = f(x)", "latex_code": "\\frac{dy}{dx} = f(x)", "explanation": "Ordinary differential equation — relates an unknown function y to its derivative; solved by [antidifferentiation](!/calculus/integrals/indefinite#1) when the right side depends only on x"},
//       {"symbol": "∂u/∂t = D∇²u", "latex_code": "\\frac{\\partial u}{\\partial t} = D\\nabla^2 u", "explanation": "Heat equation — a partial differential equation modeling diffusion; the Laplacian ∇²u drives the evolution"},
//       {"symbol": "∂²u/∂t² = c²∇²u", "latex_code": "\\frac{\\partial^2 u}{\\partial t^2} = c^2\\nabla^2 u", "explanation": "Wave equation — models propagation of waves at speed c; the second time derivative balances the spatial Laplacian"},
//       {"symbol": "∇²φ = ρ", "latex_code": "\\nabla^2 \\phi = \\rho", "explanation": "Poisson's equation — relates a potential φ to a source distribution ρ; reduces to Laplace's equation when ρ = 0"}
//     ]
//   };

//   const introBarData = {
//   description: 'Notation reference with LaTeX codes for calculus — derivatives, integrals, limits, series, and differential operators. Use our',
//   links: [
//     { label: 'Mathematical Keyboard', href: '/keyboard' }
//   ],
//   sections: [
//     { label: 'Notation confusions', anchor: 'notation-confusions' },
//     { label: 'Algebraic traps', anchor: 'algebraic-traps' },
//     { label: 'Common integral mistakes', anchor: 'integral-mistakes' },
//   ],
// };


// const pitfallSections = {
//   obj1: {
//     title: `Notation Confusions`,
//     content: `Several calculus symbols look alike but carry different meanings. Misreading them silently changes the mathematics.

// The expressions $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$ are operators, not fractions. The first is the [derivative](!/calculus/derivatives/function#1), a single symbol that cannot be "cancelled" by multiplying both sides by $dx$ in general algebraic contexts. The second is the [second derivative](!/calculus/derivatives/higher-order#1) — the superscript 2 appears in different positions ($d^2y$ on top, $dx^2$ on bottom) because it counts applications of the operator $d/dx$, not a power of anything.

// The straight $d$ and the curled $\\partial$ are not interchangeable. The notation $\\frac{df}{dx}$ means $f$ depends on one variable and we differentiate with respect to it. The notation $\\frac{\\partial f}{\\partial x}$ means $f$ depends on several variables and all others are held constant. Using $d$ in a multivariable setting or $\\partial$ in a single-variable one is a notational error that may also signal a conceptual one.

// The prime notation $f'$, $f''$, $f'''$ and the parenthetical superscript $f^{(n)}$ serve different ranges. Primes work for the first three derivatives; beyond that, $f^{(4)}$ replaces $f''''$. The parentheses in $f^{(4)}(x)$ distinguish the [derivative order](!/calculus/derivatives/higher-order#1) from an exponent — $f^4(x)$ would mean $[f(x)]^4$.

// The integral sign $\\int$ without limits denotes an [indefinite integral](!/calculus/integrals/indefinite#3) — the result is a function plus $C$. The same sign with limits $\\int_a^b$ denotes a [definite integral](!/calculus/integrals/definite#2) — the result is a number. Despite looking similar, these are different operations connected by the Fundamental Theorem of Calculus.

// The symbol $\\infty$ is not a number. It cannot be substituted into expressions, added to, or divided by. It appears in limits and [improper integrals](!/calculus/integrals/improper#2) as a shorthand for unbounded behavior, not as a value.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Algebraic Traps`,
//     content: `Certain algebraic manipulations that work with ordinary numbers fail with calculus operations.

// The derivative of a product is not the product of the derivatives. The correct rule is the [product rule](!/calculus/derivatives/rules#5): $(fg)' = f'g + fg'$. Similarly, the derivative of a quotient is not the quotient of the derivatives — it requires the [quotient rule](!/calculus/derivatives/rules#6), with its critical subtraction in the numerator and squared denominator.

// The [chain rule](!/calculus/derivatives/rules#7) is frequently forgotten or misapplied. The derivative of $\\sin(x^2)$ is $\\cos(x^2) \\cdot 2x$, not $\\cos(x^2)$. Every composed function requires multiplying by the derivative of the inner layer. Omitting this factor is the single most common differentiation error.

// The derivative of $e^{f(x)}$ is $e^{f(x)} \\cdot f'(x)$, not $e^{f(x)}$. The self-replicating property $\\frac{d}{dx}[e^x] = e^x$ applies only when the exponent is exactly $x$. Any other exponent triggers the chain rule.

// [L'Hôpital's rule](!/calculus/derivatives/rules#10) applies only to indeterminate forms $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$. Applying it to a limit that is not indeterminate — such as $\\frac{1}{0}$ — produces wrong results. The rule also requires that the limit of the derivative ratio actually exists; if it oscillates, L'Hôpital gives no information.

// In [implicit differentiation](!/calculus/derivatives/techniques#1), every $y$ term requires $\\frac{dy}{dx}$ as a chain rule factor when differentiating with respect to $x$. Forgetting this factor eliminates $\\frac{dy}{dx}$ from the equation entirely, making it unsolvable.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Common Integral Mistakes`,
//     content: `Integration carries its own set of persistent errors, distinct from differentiation mistakes.

// Omitting the [constant of integration](!/calculus/integrals/indefinite#2) $+ C$ in indefinite integrals discards infinitely many valid antiderivatives. The constant is not optional — it represents the full family of solutions.

// The antiderivative of $\\frac{1}{x}$ is $\\ln|x| + C$, not $\\ln x + C$. Dropping the absolute value restricts the formula to positive $x$ and produces errors when integrating over intervals that include negative values.

// When using [substitution](!/calculus/integrals/techniques#2) in definite integrals, either convert the limits to $u$-values immediately or substitute back to $x$ before evaluating. Mixing the two — evaluating $x$-limits on a $u$-expression — is a guaranteed error.

// Not every integral that looks standard actually is. The integral $\\int_{-1}^{1} \\frac{1}{x^2}\\, dx$ appears routine but is [improper](!/calculus/integrals/improper#3) — the integrand is unbounded at $x = 0$. Applying the Fundamental Theorem directly without splitting at the discontinuity yields a negative answer for a positive integrand, an obvious contradiction.

// Sign errors in trigonometric integrals are endemic. The antiderivative of $\\sin x$ is $-\\cos x$, not $\\cos x$. The antiderivative of $\\csc^2 x$ is $-\\cot x$, not $\\cot x$. The negative signs trace back to the corresponding [derivative formulas](!/calculus/derivatives/common#4) and must be preserved through every step.

// In [integration by parts](!/calculus/integrals/techniques#3), choosing $u$ and $dv$ poorly does not produce a wrong answer — it produces a harder integral. The LIATE guideline (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) ranks candidates for $u$ from most to least desirable.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };

//   return {
//     props: {
//       symbolsData,
//       meta, // Pass SEO metadata
//       menuItems,
//       introBarData,
//       pitfallSections,
//     },
//   };
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import IntroBar from '../../../app/components/page-components/IntroBar'
import Sections from '../../../app/components/page-components/section/Sections'

export default function MathSymbolsCalculusPage({ symbolsData, meta, menuItems, introBarData,
      pitfallSections, faqQuestions, schemas }) {


        const pitfallGenericSections = [
  {
    id: 'notation-confusions',
    title: pitfallSections.obj1.title,
    link: pitfallSections.obj1.link,
    content: [pitfallSections.obj1.content],
  },
  {
    id: 'algebraic-traps',
    title: pitfallSections.obj2.title,
    link: pitfallSections.obj2.link,
    content: [pitfallSections.obj2.content],
  },
  {
    id: 'integral-mistakes',
    title: pitfallSections.obj3.title,
    link: pitfallSections.obj3.link,
    content: [pitfallSections.obj3.content],
  },
];
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.canonical} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

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
      {/* <GenericNavbar /> */}
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb />
      <OperaSidebar
        side="right"
        // topOffset="65px"
        sidebarWidth="45px"
        panelWidth="300px"
        iconColor="white"
        panelBackgroundColor="#f2f2f2"
      />
      <h1 className="title" style={{ marginTop: '0px' }}>
        {meta.pageHeading}
      </h1>
      <br/>
      <br/>
       <IntroBar introBar={introBarData} />
      <br/>
      <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
      
      <VerticalButtonGroup 
      items={menuItems}
      width="200px"       
    //   backgroundColor ='#0070f3'
    //   color = 'white'
      isSticky={true}
      verticalOffset='250px'
      />
      <div
        className="title"
        style={{
          margin: 'auto',
          width: '85%',
        }}
      >
        
        <DataWrapper data={symbolsData} />
      </div>
      </div>
      {/* <ScrollUpButton /> */}
      <br/>
      <br/>
         <Sections sections={pitfallGenericSections} />
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

// Include data and metadata in getStaticProps
export async function getStaticProps() {


  // const menuItems = [
  //   {
  //     title: "Linear Algebra",
  //     // icon: <Home />,
  //     link: "/math-symbols/linear-algebra"
  //   },
  //   {
  //       title: "Mathematical Logic",
  //       // icon: <Home />,
  //       link: "/math-symbols/math-logic"
  //     },
  //     // {
  //     //   title: "Calculus",
  //     //   // icon: <Home />,
  //     //   link: "/math-symbols/calculus"
  //     // },
  //     {
  //       title: "Trigonometry",
  //       // icon: <Home />,
  //       link: "/math-symbols/trigonometry"
  //     },
  //     {
  //       title: "Set Theory",
  //       // icon: <Home />,
  //       link: "/math-symbols/set-theory"
  //     },

  //     {
  //       title: "Combinatorics",
  //       // icon: <Home />,
  //       link: "/math-symbols/combinatorics"
  //     },
  //     {
  //       title: "Probability",
  //       // icon: <Home />,
  //       link: "/math-symbols/probability"
  //     },
  //      {
  //         title: "Complex Numbers",
  //         link: "/math-symbols/complex-numbers"  // Example without icon
  //       },
  //   // {
  //   //   title: "Settings",
  //   //   link: "/settings"  // Example without icon
  //   // }
  // ];
  

const menuItems = [
  {
    title: "Similar tables",
    items: [
      { title: "Linear Algebra", link: "/math-symbols/linear-algebra" },
      { title: "Mathematical Logic", link: "/math-symbols/math-logic" },
      { title: "Trigonometry", link: "/math-symbols/trigonometry" },
      { title: "Set Theory", link: "/math-symbols/set-theory" },
      { title: "Combinatorics", link: "/math-symbols/combinatorics" },
      { title: "Probability", link: "/math-symbols/probability" },
      { title: "Complex Numbers", link: "/math-symbols/complex-numbers" },
    ]
  },
  {
    title: "Relevant tools",
    items: [
      { title: "Mathematical Keyboard", link: "/keyboard" },
    ]
  },
  {
    title: "Relevant pages",
    items: [
      { title: "Calculus", link: "/calculus" },
      { title: "Derivatives", link: "/calculus/derivatives" },
      { title: "Integrals", link: "/calculus/integrals" },
      { title: "Limits", link: "/calculus/limits" },
      { title: "Calculus Formulas", link: "/calculus/formulas" },
      { title: "Calculus Definitions", link: "/calculus/definitions" },
    ]
  }
];


  const keyWords = [
    'calculus symbols',
    'calculus notation chart',
    'calculus LaTeX codes',
    'derivative notation',
    'integral symbols',
    'limit notation',
    'partial derivative symbol',
    'gradient nabla symbol',
    'series summation notation',
    'vector calculus symbols',
    'differential operator notation',
    'Leibniz notation',
    'math symbols reference',
    'calculus symbol list'
  ];

  const meta = {
    title: 'Calculus Symbols: Chart & LaTeX Codes | Learn Math Class',
    description:
      'Complete calculus symbols chart with LaTeX codes. Covers derivatives, integrals, limits, series, vector calculus, differential operators, and common notation pitfalls.',
    keywords: keyWords,
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/calculus',
    pageHeading: 'Calculus Symbols',
  };

  const faqQuestions = {
    obj1: {
      question: "What are the main calculus notation systems?",
      answer: "Calculus uses three primary notation systems for derivatives: Lagrange notation (f'(x), f''(x)), Leibniz notation (dy/dx, d2y/dx2), and operator notation (Df, D2f). Lagrange is compact for single-variable functions, Leibniz emphasizes the variable of differentiation and works well with the chain rule, and operator notation is concise for higher-order derivatives."
    },
    obj2: {
      question: "What is the difference between d and the partial symbol in calculus?",
      answer: "The straight d in df/dx indicates ordinary differentiation of a function that depends on one variable. The curled partial symbol in the partial derivative df/dx indicates partial differentiation of a function that depends on multiple variables, with all other variables held constant. Using the wrong symbol is a notational error."
    },
    obj3: {
      question: "What does the nabla symbol mean in calculus?",
      answer: "The nabla symbol (an inverted triangle) represents the gradient operator. Applied to a scalar field f, the gradient nabla f produces a vector of all partial derivatives pointing in the direction of steepest ascent. Combined with dot product it gives divergence, and with cross product it gives curl."
    },
    obj4: {
      question: "What is the difference between definite and indefinite integrals?",
      answer: "An indefinite integral (integral sign without limits) finds the family of antiderivatives and always includes + C. A definite integral (integral sign with upper and lower limits) computes a specific number representing the signed area under the curve between those bounds."
    },
    obj5: {
      question: "How do you write calculus symbols in LaTeX?",
      answer: "Common LaTeX commands include \\frac{dy}{dx} for derivatives, \\partial for partial derivatives, \\int for integrals, \\lim for limits, \\sum for series, \\nabla for gradient, and \\infty for infinity. Double and triple integrals use \\iint and \\iiint respectively."
    }
  };

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Calculus Symbols Chart",
      "description": "Complete calculus symbols chart with LaTeX codes. Covers derivatives, integrals, limits, series, vector calculus, differential operators, and common notation pitfalls.",
      "url": "https://www.learnmathclass.com/math-symbols/calculus",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Calculus Symbols and Notation"
      },
      "teaches": [
        "Derivative notation: Lagrange, Leibniz, and operator forms",
        "Integral symbols for indefinite, definite, double, triple, and line integrals",
        "Limit notation including one-sided and infinite limits",
        "Series and product notation for finite and infinite sums",
        "Vector calculus symbols: gradient, divergence, curl, and flux",
        "Common notation confusions and algebraic traps in calculus"
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
          "name": "Math Symbols",
          "item": "https://www.learnmathclass.com/math-symbols"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Calculus Symbols",
          "item": "https://www.learnmathclass.com/math-symbols/calculus"
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
  };

  const symbolsData = {
    "differentiation": [
      {"symbol": "f'(x)", "latex_code": "f'(x)", "explanation": "First derivative of f(x) — Lagrange notation, the most common for single-variable functions. See [notation conventions](!/calculus/derivatives/higher-order#1)"},
      {"symbol": "f''(x)", "latex_code": "f''(x)", "explanation": "Second derivative of f(x) — measures [concavity](!/calculus/derivatives/graph-analysis#7) and the rate at which the slope itself changes"},
      {"symbol": "df/dx", "latex_code": "\\frac{df}{dx}", "explanation": "Derivative of f with respect to x — [Leibniz notation](!/calculus/derivatives/differentials#7), emphasizes the variable of differentiation and behaves algebraically in the chain rule"},
      {"symbol": "\u2202f/\u2202x", "latex_code": "\\frac{\\partial f}{\\partial x}", "explanation": "Partial derivative of f with respect to x — used when f depends on multiple variables, all others held constant. Uses the curled \u2202 to distinguish from the ordinary d"},
      {"symbol": "D\u207Ff(x)", "latex_code": "D^n f(x)", "explanation": "n-th derivative of f(x) — operator notation, compact for [higher-order derivatives](!/calculus/derivatives/higher-order#1). Parenthetical superscript f\u207D\u207F\u207E is the Lagrange equivalent"},
      {"symbol": "dy/dx", "latex_code": "\\frac{dy}{dx}", "explanation": "Rate of change of y with respect to x — Leibniz notation, interpretable as the ratio of [differentials](!/calculus/derivatives/differentials#2) dy and dx"},
      {"symbol": "\u2207f", "latex_code": "\\nabla f", "explanation": "Gradient of a scalar field f — a [vector](!/linear-algebra/vectors) of all partial derivatives, points in the direction of steepest ascent"}
    ],
    "integration": [
      {"symbol": "\u222B f(x) dx", "latex_code": "\\int f(x)\\, dx", "explanation": "[Indefinite integral](!/calculus/integrals/indefinite#3) of f(x) — the family of antiderivatives, result always includes + C"},
      {"symbol": "\u222B\u2090\u1D47 f(x) dx", "latex_code": "\\int_a^b f(x)\\, dx", "explanation": "[Definite integral](!/calculus/integrals/definite#2) of f(x) from a to b — yields a number representing signed area under the curve"},
      {"symbol": "\u222C f(x,y) dA", "latex_code": "\\iint f(x,y)\\, dA", "explanation": "Double integral over a region A — extends integration to two variables, computes volume or accumulated quantity over a planar region"},
      {"symbol": "\u222D f(x,y,z) dV", "latex_code": "\\iiint f(x,y,z)\\, dV", "explanation": "Triple integral over a volume V — extends integration to three dimensions, computes mass, charge, or other quantities distributed in space"},
      {"symbol": "\u222E f(x) dx", "latex_code": "\\oint f(x)\\, dx", "explanation": "Line integral over a closed curve — the circle on the integral sign indicates the path returns to its starting point"},
      {"symbol": "\u222B\u2093 f ds", "latex_code": "\\int_C f\\, ds", "explanation": "Integral along a curve C — integrates with respect to arc length rather than a coordinate variable"}
    ],
    "limits": [
      {"symbol": "lim\u2093\u2192c f(x)", "latex_code": "\\lim_{x \\to c} f(x)", "explanation": "Limit of f(x) as x approaches c — the value f(x) tends toward, whether or not f(c) exists"},
      {"symbol": "lim\u2093\u2192\u221E f(x)", "latex_code": "\\lim_{x \\to \\infty} f(x)", "explanation": "Limit of f(x) as x approaches infinity — describes end behavior, connected to horizontal asymptotes"},
      {"symbol": "lim\u2093\u2192c\u207B f(x)", "latex_code": "\\lim_{x \\to c^-} f(x)", "explanation": "Left-hand limit — the value f(x) approaches as x comes from values less than c"},
      {"symbol": "lim\u2093\u2192c\u207A f(x)", "latex_code": "\\lim_{x \\to c^+} f(x)", "explanation": "Right-hand limit — the value f(x) approaches as x comes from values greater than c"}
    ],
    "series": [
      {"symbol": "\u2211\u2099\u208C\u2081\u207F\u208C\u221E a\u2099", "latex_code": "\\sum_{n=1}^\\infty a_n", "explanation": "Infinite series — the sum of infinitely many terms, converges if the partial sums approach a finite limit"},
      {"symbol": "\u2211\u2099\u208C\u2080\u207F\u208CN a\u2099", "latex_code": "\\sum_{n=0}^N a_n", "explanation": "Finite series — the sum of the first N + 1 terms, always produces a definite value"},
      {"symbol": "\u220F\u2099\u208C\u2081\u207F\u208C\u221E a\u2099", "latex_code": "\\prod_{n=1}^\\infty a_n", "explanation": "Infinite product — the product of infinitely many factors, converges if the partial products approach a nonzero finite limit"},
      {"symbol": "a\u2080 + \u2211\u2099\u208C\u2081\u207F\u208C\u221E a\u2099x\u207F", "latex_code": "a_0 + \\sum_{n=1}^\\infty a_n x^n", "explanation": "Power series — represents a function as an infinite polynomial; coefficients relate to [higher-order derivatives](!/calculus/derivatives/higher-order#8) via Taylor's formula"}
    ],
    "vector_calculus": [
      {"symbol": "\u2207\u22C5F", "latex_code": "\\nabla \\cdot \\mathbf{F}", "explanation": "Divergence of a vector field F — a scalar measuring net outward flux per unit volume at each point"},
      {"symbol": "\u2207\u00D7F", "latex_code": "\\nabla \\times \\mathbf{F}", "explanation": "Curl of a vector field F — a vector measuring local rotational tendency at each point"},
      {"symbol": "\u222C\u209B F \u22C5 dS", "latex_code": "\\iint_S \\mathbf{F} \\cdot \\mathbf{dS}", "explanation": "Flux integral — measures the total flow of F through a surface S, accounting for direction via the surface normal"},
      {"symbol": "\u222E\u2093 F \u22C5 dr", "latex_code": "\\oint_C \\mathbf{F} \\cdot \\mathbf{dr}", "explanation": "Circulation integral — measures the total work done by F along a closed curve C"}
    ],
    "other_notations": [
      {"symbol": "|f(x)|", "latex_code": "|f(x)|", "explanation": "Absolute value of f(x) — the non-negative magnitude, relevant when [evaluating integrals](!/calculus/integrals/evaluating#4) involving sign changes"},
      {"symbol": "sgn(x)", "latex_code": "\\text{sgn}(x)", "explanation": "Sign function — returns \u22121 for negative x, 0 for zero, and +1 for positive x"},
      {"symbol": "\u221E", "latex_code": "\\infty", "explanation": "Infinity — not a number but a symbol describing unbounded growth, used in limits and [improper integrals](!/calculus/integrals/improper#2)"},
      {"symbol": "dx", "latex_code": "dx", "explanation": "[Differential](!/calculus/derivatives/differentials#1) of x — an independent increment, not required to be infinitely small; sets the scale for linear approximation"},
      {"symbol": "\u03B5", "latex_code": "\\epsilon", "explanation": "Epsilon — conventionally a small positive quantity in the formal \u03B5-\u03B4 definition of limits"},
      {"symbol": "\u03B4", "latex_code": "\\delta", "explanation": "Delta — the corresponding small positive quantity in \u03B5-\u03B4 definitions; for every \u03B5 there must exist a \u03B4"}
    ],
    "advanced_integration": [
      {"symbol": "\u222D\u2093 f dV", "latex_code": "\\iiint_V f\\, dV", "explanation": "Triple integral over a volume V — computes accumulated quantity throughout a three-dimensional region"},
      {"symbol": "\u222F\u2093 f dS", "latex_code": "\\iint_S f\\, dS", "explanation": "Surface integral over surface S — integrates a scalar function over a two-dimensional surface embedded in space"},
      {"symbol": "\u222E\u2093 f dx", "latex_code": "\\oint_C f\\, dx", "explanation": "Closed line integral — integrates over a path that forms a complete loop"},
      {"symbol": "\u222B\u2090\u1D66 |f(x)| dx", "latex_code": "\\int_a^b |f(x)|\\, dx", "explanation": "Integral of absolute value — computes total unsigned area, counting regions below the x-axis as [positive](!/calculus/integrals/definite#3)"},
      {"symbol": "\u222B f(x) \u03B4(x \u2212 x\u2080) dx", "latex_code": "\\int f(x)\\, \\delta(x - x_0)\\, dx", "explanation": "Integral involving the Dirac delta — extracts the value f(x\u2080); the delta is a distribution, not a function in the classical sense"}
    ],
    "differential_operators": [
      {"symbol": "\u2207\u00B2f", "latex_code": "\\nabla^2 f", "explanation": "Laplacian of f — the divergence of the gradient, a second-order differential operator fundamental to physics"},
      {"symbol": "\u2202\u00B2f/\u2202x\u00B2", "latex_code": "\\frac{\\partial^2 f}{\\partial x^2}", "explanation": "Second partial derivative of f with respect to x — differentiates twice with respect to the same variable"},
      {"symbol": "\u2202\u00B2f/\u2202x\u2202y", "latex_code": "\\frac{\\partial^2 f}{\\partial x \\partial y}", "explanation": "Mixed second partial derivative — differentiates with respect to y then x; equals \u2202\u00B2f/\u2202y\u2202x when both are continuous (Clairaut's theorem)"},
      {"symbol": "d\u00B2y/dx\u00B2", "latex_code": "\\frac{d^2y}{dx^2}", "explanation": "[Second derivative](!/calculus/derivatives/higher-order#2) of y with respect to x — the notation d\u00B2y/dx\u00B2 is a single operator, not a fraction"}
    ],
    "curvature_geometry": [
      {"symbol": "\u03BA", "latex_code": "\\kappa", "explanation": "Curvature of a curve — measures how sharply the curve bends at each point; the reciprocal of the radius of the best-fitting circle"},
      {"symbol": "\u03C4", "latex_code": "\\tau", "explanation": "Torsion of a space curve — measures how the curve twists out of its osculating plane"},
      {"symbol": "r(t)", "latex_code": "\\mathbf{r}(t)", "explanation": "Parametric curve — a vector-valued function tracing a path as the parameter t varies; [parametric differentiation](!/calculus/derivatives/techniques#6) gives the tangent"},
      {"symbol": "T(t)", "latex_code": "\\mathbf{T}(t)", "explanation": "Unit tangent vector — the normalized derivative r'(t)/|r'(t)|, pointing in the direction of motion"},
      {"symbol": "N(t)", "latex_code": "\\mathbf{N}(t)", "explanation": "Unit normal vector — perpendicular to T(t) in the direction the curve is turning"},
      {"symbol": "B(t)", "latex_code": "\\mathbf{B}(t)", "explanation": "Unit binormal vector — perpendicular to both T and N, completing the Frenet-Serret frame"}
    ],
    "special_functions": [
      {"symbol": "\u0393(n)", "latex_code": "\\Gamma(n)", "explanation": "Gamma function — extends factorial to real and complex numbers; \u0393(n) = (n\u22121)! for positive integers"},
      {"symbol": "\u03B6(s)", "latex_code": "\\zeta(s)", "explanation": "Riemann zeta function — defined as \u2211 1/n\u02E2 for Re(s) > 1, central to number theory and the distribution of primes"},
      {"symbol": "Li(x)", "latex_code": "\\text{Li}(x)", "explanation": "Logarithmic integral — defined as \u222B dt/ln(t), used in prime number estimates"},
      {"symbol": "erf(x)", "latex_code": "\\text{erf}(x)", "explanation": "Error function — (2/\u221A\u03C0)\u222B\u2080\u02E3 e\u207B\u1D57\u00B2 dt, arises in probability and the normal distribution"}
    ],
    "differential_equations": [
      {"symbol": "dy/dx = f(x)", "latex_code": "\\frac{dy}{dx} = f(x)", "explanation": "Ordinary differential equation — relates an unknown function y to its derivative; solved by [antidifferentiation](!/calculus/integrals/indefinite#1) when the right side depends only on x"},
      {"symbol": "\u2202u/\u2202t = D\u2207\u00B2u", "latex_code": "\\frac{\\partial u}{\\partial t} = D\\nabla^2 u", "explanation": "Heat equation — a partial differential equation modeling diffusion; the Laplacian \u2207\u00B2u drives the evolution"},
      {"symbol": "\u2202\u00B2u/\u2202t\u00B2 = c\u00B2\u2207\u00B2u", "latex_code": "\\frac{\\partial^2 u}{\\partial t^2} = c^2\\nabla^2 u", "explanation": "Wave equation — models propagation of waves at speed c; the second time derivative balances the spatial Laplacian"},
      {"symbol": "\u2207\u00B2\u03C6 = \u03C1", "latex_code": "\\nabla^2 \\phi = \\rho", "explanation": "Poisson's equation — relates a potential \u03C6 to a source distribution \u03C1; reduces to Laplace's equation when \u03C1 = 0"}
    ]
  };

  const introBarData = {
  description: 'Notation reference with LaTeX codes for calculus — derivatives, integrals, limits, series, and differential operators. Use our',
  links: [
    { label: 'Mathematical Keyboard', href: '/keyboard' }
  ],
  sections: [
    { label: 'Notation confusions', anchor: 'notation-confusions' },
    { label: 'Algebraic traps', anchor: 'algebraic-traps' },
    { label: 'Common integral mistakes', anchor: 'integral-mistakes' },
  ],
};


const pitfallSections = {
  obj1: {
    title: `Notation Confusions`,
    content: `Several calculus symbols look alike but carry different meanings. Misreading them silently changes the mathematics.

The expressions $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$ are operators, not fractions. The first is the [derivative](!/calculus/derivatives/function#1), a single symbol that cannot be "cancelled" by multiplying both sides by $dx$ in general algebraic contexts. The second is the [second derivative](!/calculus/derivatives/higher-order#1) \u2014 the superscript 2 appears in different positions ($d^2y$ on top, $dx^2$ on bottom) because it counts applications of the operator $d/dx$, not a power of anything.

The straight $d$ and the curled $\\partial$ are not interchangeable. The notation $\\frac{df}{dx}$ means $f$ depends on one variable and we differentiate with respect to it. The notation $\\frac{\\partial f}{\\partial x}$ means $f$ depends on several variables and all others are held constant. Using $d$ in a multivariable setting or $\\partial$ in a single-variable one is a notational error that may also signal a conceptual one.

The prime notation $f'$, $f''$, $f'''$ and the parenthetical superscript $f^{(n)}$ serve different ranges. Primes work for the first three derivatives; beyond that, $f^{(4)}$ replaces $f''''$. The parentheses in $f^{(4)}(x)$ distinguish the [derivative order](!/calculus/derivatives/higher-order#1) from an exponent \u2014 $f^4(x)$ would mean $[f(x)]^4$.

The integral sign $\\int$ without limits denotes an [indefinite integral](!/calculus/integrals/indefinite#3) \u2014 the result is a function plus $C$. The same sign with limits $\\int_a^b$ denotes a [definite integral](!/calculus/integrals/definite#2) \u2014 the result is a number. Despite looking similar, these are different operations connected by the Fundamental Theorem of Calculus.

The symbol $\\infty$ is not a number. It cannot be substituted into expressions, added to, or divided by. It appears in limits and [improper integrals](!/calculus/integrals/improper#2) as a shorthand for unbounded behavior, not as a value.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Algebraic Traps`,
    content: `Certain algebraic manipulations that work with ordinary numbers fail with calculus operations.

The derivative of a product is not the product of the derivatives. The correct rule is the [product rule](!/calculus/derivatives/rules#5): $(fg)' = f'g + fg'$. Similarly, the derivative of a quotient is not the quotient of the derivatives \u2014 it requires the [quotient rule](!/calculus/derivatives/rules#6), with its critical subtraction in the numerator and squared denominator.

The [chain rule](!/calculus/derivatives/rules#7) is frequently forgotten or misapplied. The derivative of $\\sin(x^2)$ is $\\cos(x^2) \\cdot 2x$, not $\\cos(x^2)$. Every composed function requires multiplying by the derivative of the inner layer. Omitting this factor is the single most common differentiation error.

The derivative of $e^{f(x)}$ is $e^{f(x)} \\cdot f'(x)$, not $e^{f(x)}$. The self-replicating property $\\frac{d}{dx}[e^x] = e^x$ applies only when the exponent is exactly $x$. Any other exponent triggers the chain rule.

[L'Hopital's rule](!/calculus/derivatives/rules#10) applies only to indeterminate forms $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$. Applying it to a limit that is not indeterminate \u2014 such as $\\frac{1}{0}$ \u2014 produces wrong results. The rule also requires that the limit of the derivative ratio actually exists; if it oscillates, L'Hopital gives no information.

In [implicit differentiation](!/calculus/derivatives/techniques#1), every $y$ term requires $\\frac{dy}{dx}$ as a chain rule factor when differentiating with respect to $x$. Forgetting this factor eliminates $\\frac{dy}{dx}$ from the equation entirely, making it unsolvable.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Common Integral Mistakes`,
    content: `Integration carries its own set of persistent errors, distinct from differentiation mistakes.

Omitting the [constant of integration](!/calculus/integrals/indefinite#2) $+ C$ in indefinite integrals discards infinitely many valid antiderivatives. The constant is not optional \u2014 it represents the full family of solutions.

The antiderivative of $\\frac{1}{x}$ is $\\ln|x| + C$, not $\\ln x + C$. Dropping the absolute value restricts the formula to positive $x$ and produces errors when integrating over intervals that include negative values.

When using [substitution](!/calculus/integrals/techniques#2) in definite integrals, either convert the limits to $u$-values immediately or substitute back to $x$ before evaluating. Mixing the two \u2014 evaluating $x$-limits on a $u$-expression \u2014 is a guaranteed error.

Not every integral that looks standard actually is. The integral $\\int_{-1}^{1} \\frac{1}{x^2}\\, dx$ appears routine but is [improper](!/calculus/integrals/improper#3) \u2014 the integrand is unbounded at $x = 0$. Applying the Fundamental Theorem directly without splitting at the discontinuity yields a negative answer for a positive integrand, an obvious contradiction.

Sign errors in trigonometric integrals are endemic. The antiderivative of $\\sin x$ is $-\\cos x$, not $\\cos x$. The antiderivative of $\\csc^2 x$ is $-\\cot x$, not $\\cot x$. The negative signs trace back to the corresponding [derivative formulas](!/calculus/derivatives/common#4) and must be preserved through every step.

In [integration by parts](!/calculus/integrals/techniques#3), choosing $u$ and $dv$ poorly does not produce a wrong answer \u2014 it produces a harder integral. The LIATE guideline (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) ranks candidates for $u$ from most to least desirable.`,
    before: ``,
    after: ``,
    link: '',
  },
};

  return {
    props: {
      symbolsData,
      meta,
      menuItems,
      introBarData,
      pitfallSections,
      faqQuestions,
      schemas,
    },
  };
}