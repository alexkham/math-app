
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import Head from 'next/head';
// import '../../pages.css'
// import DataWrapper from '@/app/components/generic-table/DataWrapper';
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
// import IntroBar from '../../../app/components/page-components/IntroBar'
// import Sections from '../../../app/components/page-components/section/Sections'

// export default function MathSymbolsTrigonometryPage({ symbolsData, meta,menuItems,pitfallSections,
//       introBarData, }) {


//         // genericSections for the pitfall sections
// const pitfallGenericSections = [
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
//     id: 'domain-mode-errors',
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
//       <br />
//       <br />
//       <IntroBar introBar={introBarData} />
//       <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
     
//      <VerticalButtonGroup 
//      items={menuItems}
//      width="180px"       
//    //   backgroundColor ='#0070f3'
//    //   color = 'white'
//      isSticky={true}
//      verticalOffset='100px'
//      />
//       <div
//         className="title"
//         style={{
//           margin: 'auto',
//           width: '90%',
//         }}
//       >
//         <DataWrapper data={symbolsData} />
//       </div>
//       </div>
//       <br/>
//       <br/>
//       <br/>
//       <Sections sections={pitfallGenericSections} />
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton /> */}
//     </>
//   );
// }

// // Include data and metadata in getStaticProps
// export async function getStaticProps() {

  
//   const menuItems = [

//    { title:"Other tables",
//    items:[ {
//       title: "Linear Algebra",
//       // icon: <Home />,
//       link: "/math-symbols/linear-algebra"
//     },
//     {
//         title: "Mathematical Logic",
//         // icon: <Home />,
//         link: "/math-symbols/math-logic"
//       },
//       {
//         title: "Calculus",
//         // icon: <Home />,
//         link: "/math-symbols/calculus"
//       },
//       // {
//       //   title: "Trigonometry",
//       //   // icon: <Home />,
//       //   link: "/math-symbols/trigonometry"
//       // },
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
//    ]},

//    {
//         title:"Relevant tools",
//         items:[
//             {title:"Interactive Unit Circle",link:"/visual-tools/unit-circle"},
//             {title:"Trigonometry Calculator",link:"/calculators/trigonometry-calculator"},
//             {title:"Angle Converter",link:"/converters/degree-radians"},
//         ]
//     }
//     ,
//     {
//       title:"Relevant Pages",
//       items:[
//         {title:"Trigonometry",link:'/trigonometry'},
//         {title:"Trigonometric Identities",link:'/trigonometry/identities'},
//         {title:"Trigonometric Tables",link:'/tables/trigonometry'}
//       ]
//     }

//   ];
  
 
//   const meta = {
//     title: 'Trigonometry Symbols | Trigonometry Symbols Chart',
//     description:
//       'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
//     keywords: [
//       'math symbols',
//       'mathematical symbols',
//       'LaTeX',
//       'LaTeX code',
//       'math symbols list',
//       'math symbols chart',
//        'trigonometry symbols',
//        'trigonometry math symbols'
//     ],
//     author: 'LearnMathClass',
//     canonical: 'https://www.learnmathclass.com/math-symbols/trigonometry',
//     pageHeading: 'Trigonometry Symbols',
//   };
//   // const symbolsData = {
//   //   "basic_trigonometric_functions": [
//   //     {"symbol": "sin(θ)", "latex_code": "\\sin(\\theta)", "explanation": "Sine function"},
//   //     {"symbol": "cos(θ)", "latex_code": "\\cos(\\theta)", "explanation": "Cosine function"},
//   //     {"symbol": "tan(θ)", "latex_code": "\\tan(\\theta)", "explanation": "Tangent function"},
//   //     {"symbol": "cot(θ)", "latex_code": "\\cot(\\theta)", "explanation": "Cotangent function"},
//   //     {"symbol": "sec(θ)", "latex_code": "\\sec(\\theta)", "explanation": "Secant function"},
//   //     {"symbol": "csc(θ)", "latex_code": "\\csc(\\theta)", "explanation": "Cosecant function"}
//   //   ],
//   //   "inverse_trigonometric_functions": [
//   //     {"symbol": "sin⁻¹(x)", "latex_code": "\\sin^{-1}(x)", "explanation": "Inverse sine (arcsine) function"},
//   //     {"symbol": "cos⁻¹(x)", "latex_code": "\\cos^{-1}(x)", "explanation": "Inverse cosine (arccosine) function"},
//   //     {"symbol": "tan⁻¹(x)", "latex_code": "\\tan^{-1}(x)", "explanation": "Inverse tangent (arctangent) function"},
//   //     {"symbol": "cot⁻¹(x)", "latex_code": "\\cot^{-1}(x)", "explanation": "Inverse cotangent (arccotangent) function"},
//   //     {"symbol": "sec⁻¹(x)", "latex_code": "\\sec^{-1}(x)", "explanation": "Inverse secant (arcsecant) function"},
//   //     {"symbol": "csc⁻¹(x)", "latex_code": "\\csc^{-1}(x)", "explanation": "Inverse cosecant (arccosecant) function"}
//   //   ],
//   //   "trigonometric_identities": [
//   //     {"symbol": "sin²(θ) + cos²(θ) = 1", "latex_code": "\\sin^2(\\theta) + \\cos^2(\\theta) = 1", "explanation": "Pythagorean identity"},
//   //     {"symbol": "1 + tan²(θ) = sec²(θ)", "latex_code": "1 + \\tan^2(\\theta) = \\sec^2(\\theta)", "explanation": "Pythagorean identity for tangent and secant"},
//   //     {"symbol": "1 + cot²(θ) = csc²(θ)", "latex_code": "1 + \\cot^2(\\theta) = \\csc^2(\\theta)", "explanation": "Pythagorean identity for cotangent and cosecant"},
//   //     {"symbol": "sin(2θ) = 2sin(θ)cos(θ)", "latex_code": "\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)", "explanation": "Double angle identity for sine"},
//   //     {"symbol": "cos(2θ) = cos²(θ) − sin²(θ)", "latex_code": "\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta)", "explanation": "Double angle identity for cosine"},
//   //     {"symbol": "tan(2θ) = 2tan(θ) / (1 − tan²(θ))", "latex_code": "\\tan(2\\theta) = \\frac{2\\tan(\\theta)}{1 - \\tan^2(\\theta)}", "explanation": "Double angle identity for tangent"}
//   //   ],
//   //   "law_of_sines_and_cosines": [
//   //     {"symbol": "a/sin(A) = b/sin(B) = c/sin(C)", "latex_code": "\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}", "explanation": "Law of sines"},
//   //     {"symbol": "c² = a² + b² − 2abcos(C)", "latex_code": "c^2 = a^2 + b^2 - 2ab\\cos(C)", "explanation": "Law of cosines"}
//   //   ],
//   //   "angles_and_arc_lengths": [
//   //     {"symbol": "θ = s / r", "latex_code": "\\theta = \\frac{s}{r}", "explanation": "Angle in radians as arc length divided by radius"},
//   //     {"symbol": "s = rθ", "latex_code": "s = r\\theta", "explanation": "Arc length of a circle"}
//   //   ],
//   //   "unit_circle_relations": [
//   //     {"symbol": "(x, y) = (cos(θ), sin(θ))", "latex_code": "(x, y) = (\\cos(\\theta), \\sin(\\theta))", "explanation": "Coordinates on the unit circle"},
//   //     {"symbol": "tan(θ) = y / x", "latex_code": "\\tan(\\theta) = \\frac{y}{x}", "explanation": "Tangent as ratio of \( y \) to \( x \)"}
//   //   ],
//   //   "hyperbolic_functions": [
//   //     {"symbol": "sinh(x)", "latex_code": "\\sinh(x)", "explanation": "Hyperbolic sine"},
//   //     {"symbol": "cosh(x)", "latex_code": "\\cosh(x)", "explanation": "Hyperbolic cosine"},
//   //     {"symbol": "tanh(x)", "latex_code": "\\tanh(x)", "explanation": "Hyperbolic tangent"},
//   //     {"symbol": "coth(x)", "latex_code": "\\coth(x)", "explanation": "Hyperbolic cotangent"},
//   //     {"symbol": "sech(x)", "latex_code": "\\text{sech}(x)", "explanation": "Hyperbolic secant"},
//   //     {"symbol": "csch(x)", "latex_code": "\\text{csch}(x)", "explanation": "Hyperbolic cosecant"}
//   //   ],
//   //   "inverse_hyperbolic_functions": [
//   //     {"symbol": "sinh⁻¹(x)", "latex_code": "\\sinh^{-1}(x)", "explanation": "Inverse hyperbolic sine"},
//   //     {"symbol": "cosh⁻¹(x)", "latex_code": "\\cosh^{-1}(x)", "explanation": "Inverse hyperbolic cosine"},
//   //     {"symbol": "tanh⁻¹(x)", "latex_code": "\\tanh^{-1}(x)", "explanation": "Inverse hyperbolic tangent"},
//   //     {"symbol": "coth⁻¹(x)", "latex_code": "\\coth^{-1}(x)", "explanation": "Inverse hyperbolic cotangent"},
//   //     {"symbol": "sech⁻¹(x)", "latex_code": "\\text{sech}^{-1}(x)", "explanation": "Inverse hyperbolic secant"},
//   //     {"symbol": "csch⁻¹(x)", "latex_code": "\\text{csch}^{-1}(x)", "explanation": "Inverse hyperbolic cosecant"}
//   //   ],
//   //   "complex_numbers": [
//   //     {"symbol": "z = r(cos(θ) + isin(θ))", "latex_code": "z = r(\\cos(\\theta) + i\\sin(\\theta))", "explanation": "Trigonometric form of a complex number"},
//   //     {"symbol": "eⁱᶿ = cos(θ) + isin(θ)", "latex_code": "e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)", "explanation": "Euler's formula"},
//   //     {"symbol": "zⁿ = rⁿ(cos(nθ) + isin(nθ))", "latex_code": "z^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))", "explanation": "De Moivre's theorem"}
//   //   ],
//   //   "sum_and_difference_identities": [
//   //     {"symbol": "sin(α + β) = sin(α)cos(β) + cos(α)sin(β)", "latex_code": "\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)", "explanation": "Sine of a sum"},
//   //     {"symbol": "sin(α − β) = sin(α)cos(β) − cos(α)sin(β)", "latex_code": "\\sin(\\alpha - \\beta) = \\sin(\\alpha)\\cos(\\beta) - \\cos(\\alpha)\\sin(\\beta)", "explanation": "Sine of a difference"},
//   //     {"symbol": "cos(α + β) = cos(α)cos(β) − sin(α)sin(β)", "latex_code": "\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)", "explanation": "Cosine of a sum"},
//   //     {"symbol": "cos(α − β) = cos(α)cos(β) + sin(α)sin(β)", "latex_code": "\\cos(\\alpha - \\beta) = \\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)", "explanation": "Cosine of a difference"},
//   //     {"symbol": "tan(α + β) = (tan(α) + tan(β)) / (1 − tan(α)tan(β))", "latex_code": "\\tan(\\alpha + \\beta) = \\frac{\\tan(\\alpha) + \\tan(\\beta)}{1 - \\tan(\\alpha)\\tan(\\beta)}", "explanation": "Tangent of a sum"},
//   //     {"symbol": "tan(α − β) = (tan(α) − tan(β)) / (1 + tan(α)tan(β))", "latex_code": "\\tan(\\alpha - \\beta) = \\frac{\\tan(\\alpha) - \\tan(\\beta)}{1 + \\tan(\\alpha)\\tan(\\beta)}", "explanation": "Tangent of a difference"}
//   //   ]
//   // };
  
// const symbolsData = {
//     "basic_trigonometric_functions": [
//       {"symbol": "sin(θ)", "latex_code": "\\sin(\\theta)", "explanation": "Sine function — ratio of the opposite side to the hypotenuse; equals the y-coordinate on the [unit circle](!/trigonometry/unit-circle#2)"},
//       {"symbol": "cos(θ)", "latex_code": "\\cos(\\theta)", "explanation": "Cosine function — ratio of the adjacent side to the hypotenuse; equals the x-coordinate on the [unit circle](!/trigonometry/unit-circle#2)"},
//       {"symbol": "tan(θ)", "latex_code": "\\tan(\\theta)", "explanation": "Tangent function — ratio of opposite to adjacent, or equivalently [sin(θ)/cos(θ)](!/trigonometry/functions#3)"},
//       {"symbol": "cot(θ)", "latex_code": "\\cot(\\theta)", "explanation": "Cotangent function — ratio of adjacent to opposite; [reciprocal of tangent](!/trigonometry/functions#6)"},
//       {"symbol": "sec(θ)", "latex_code": "\\sec(\\theta)", "explanation": "Secant function — ratio of hypotenuse to adjacent; [reciprocal of cosine](!/trigonometry/functions#5)"},
//       {"symbol": "csc(θ)", "latex_code": "\\csc(\\theta)", "explanation": "Cosecant function — ratio of hypotenuse to opposite; [reciprocal of sine](!/trigonometry/functions#4)"}
//     ],
//     "inverse_trigonometric_functions": [
//       {"symbol": "sin⁻¹(x)", "latex_code": "\\sin^{-1}(x)", "explanation": "Inverse sine ([arcsine](!/trigonometry/inverse-functions#2)) — returns the angle whose sine is x, restricted to [−π/2, π/2]"},
//       {"symbol": "cos⁻¹(x)", "latex_code": "\\cos^{-1}(x)", "explanation": "Inverse cosine ([arccosine](!/trigonometry/inverse-functions#3)) — returns the angle whose cosine is x, restricted to [0, π]"},
//       {"symbol": "tan⁻¹(x)", "latex_code": "\\tan^{-1}(x)", "explanation": "Inverse tangent ([arctangent](!/trigonometry/inverse-functions#4)) — returns the angle whose tangent is x, restricted to (−π/2, π/2)"},
//       {"symbol": "cot⁻¹(x)", "latex_code": "\\cot^{-1}(x)", "explanation": "Inverse cotangent ([arccotangent](!/trigonometry/inverse-functions#5)) — returns the angle whose cotangent is x, restricted to (0, π)"},
//       {"symbol": "sec⁻¹(x)", "latex_code": "\\sec^{-1}(x)", "explanation": "Inverse secant ([arcsecant](!/trigonometry/inverse-functions#5)) — returns the angle whose secant is x, defined for |x| ≥ 1"},
//       {"symbol": "csc⁻¹(x)", "latex_code": "\\csc^{-1}(x)", "explanation": "Inverse cosecant ([arccosecant](!/trigonometry/inverse-functions#5)) — returns the angle whose cosecant is x, defined for |x| ≥ 1"}
//     ],
//     "trigonometric_identities": [
//       {"symbol": "sin²(θ) + cos²(θ) = 1", "latex_code": "\\sin^2(\\theta) + \\cos^2(\\theta) = 1", "explanation": "[Pythagorean identity](!/trigonometry/identities#pythagorean) — follows directly from the unit circle equation x² + y² = 1"},
//       {"symbol": "1 + tan²(θ) = sec²(θ)", "latex_code": "1 + \\tan^2(\\theta) = \\sec^2(\\theta)", "explanation": "[Pythagorean identity](!/trigonometry/identities#pythagorean) for tangent and secant — obtained by dividing sin² + cos² = 1 by cos²"},
//       {"symbol": "1 + cot²(θ) = csc²(θ)", "latex_code": "1 + \\cot^2(\\theta) = \\csc^2(\\theta)", "explanation": "[Pythagorean identity](!/trigonometry/identities#pythagorean) for cotangent and cosecant — obtained by dividing sin² + cos² = 1 by sin²"},
//       {"symbol": "sin(2θ) = 2sin(θ)cos(θ)", "latex_code": "\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)", "explanation": "[Double angle identity](!/trigonometry/identities#double) for sine — derived from the angle sum formula with equal angles"},
//       {"symbol": "cos(2θ) = cos²(θ) − sin²(θ)", "latex_code": "\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta)", "explanation": "[Double angle identity](!/trigonometry/identities#double) for cosine — has two alternate forms using the Pythagorean identity"},
//       {"symbol": "tan(2θ) = 2tan(θ) / (1 − tan²(θ))", "latex_code": "\\tan(2\\theta) = \\frac{2\\tan(\\theta)}{1 - \\tan^2(\\theta)}", "explanation": "[Double angle identity](!/trigonometry/identities#double) for tangent — derived from the tangent sum formula"}
//     ],
//     "law_of_sines_and_cosines": [
//       {"symbol": "a/sin(A) = b/sin(B) = c/sin(C)", "latex_code": "\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}", "explanation": "[Law of Sines](!/trigonometry/sines-cosines-law#2) — relates side lengths to the sines of their opposite angles in any triangle"},
//       {"symbol": "c² = a² + b² − 2abcos(C)", "latex_code": "c^2 = a^2 + b^2 - 2ab\\cos(C)", "explanation": "[Law of Cosines](!/trigonometry/sines-cosines-law#5) — generalizes the Pythagorean theorem to any triangle"}
//     ],
//     "angles_and_arc_lengths": [
//       {"symbol": "θ = s / r", "latex_code": "\\theta = \\frac{s}{r}", "explanation": "Angle in [radians](!/trigonometry/degrees-radians#2) — defined as the ratio of arc length to radius"},
//       {"symbol": "s = rθ", "latex_code": "s = r\\theta", "explanation": "[Arc length](!/trigonometry/degrees-radians#4) formula — requires θ in radians; no conversion constant needed"}
//     ],
//     "unit_circle_relations": [
//       {"symbol": "(x, y) = (cos(θ), sin(θ))", "latex_code": "(x, y) = (\\cos(\\theta), \\sin(\\theta))", "explanation": "Coordinates of a point on the [unit circle](!/trigonometry/unit-circle#2) at angle θ define cosine and sine"},
//       {"symbol": "tan(θ) = y / x", "latex_code": "\\tan(\\theta) = \\frac{y}{x}", "explanation": "Tangent as the ratio of [unit circle coordinates](!/trigonometry/unit-circle#2); geometrically, the slope of the terminal side"}
//     ],
//     "hyperbolic_functions": [
//       {"symbol": "sinh(x)", "latex_code": "\\sinh(x)", "explanation": "Hyperbolic sine — defined as (eˣ − e⁻ˣ)/2"},
//       {"symbol": "cosh(x)", "latex_code": "\\cosh(x)", "explanation": "Hyperbolic cosine — defined as (eˣ + e⁻ˣ)/2"},
//       {"symbol": "tanh(x)", "latex_code": "\\tanh(x)", "explanation": "Hyperbolic tangent — defined as sinh(x)/cosh(x)"},
//       {"symbol": "coth(x)", "latex_code": "\\coth(x)", "explanation": "Hyperbolic cotangent — defined as cosh(x)/sinh(x), x ≠ 0"},
//       {"symbol": "sech(x)", "latex_code": "\\text{sech}(x)", "explanation": "Hyperbolic secant — defined as 1/cosh(x)"},
//       {"symbol": "csch(x)", "latex_code": "\\text{csch}(x)", "explanation": "Hyperbolic cosecant — defined as 1/sinh(x), x ≠ 0"}
//     ],
//     "inverse_hyperbolic_functions": [
//       {"symbol": "sinh⁻¹(x)", "latex_code": "\\sinh^{-1}(x)", "explanation": "Inverse hyperbolic sine — defined for all real x; equals ln(x + √(x² + 1))"},
//       {"symbol": "cosh⁻¹(x)", "latex_code": "\\cosh^{-1}(x)", "explanation": "Inverse hyperbolic cosine — defined for x ≥ 1; equals ln(x + √(x² − 1))"},
//       {"symbol": "tanh⁻¹(x)", "latex_code": "\\tanh^{-1}(x)", "explanation": "Inverse hyperbolic tangent — defined for |x| < 1; equals ½ ln((1+x)/(1−x))"},
//       {"symbol": "coth⁻¹(x)", "latex_code": "\\coth^{-1}(x)", "explanation": "Inverse hyperbolic cotangent — defined for |x| > 1; equals ½ ln((x+1)/(x−1))"},
//       {"symbol": "sech⁻¹(x)", "latex_code": "\\text{sech}^{-1}(x)", "explanation": "Inverse hyperbolic secant — defined for 0 < x ≤ 1"},
//       {"symbol": "csch⁻¹(x)", "latex_code": "\\text{csch}^{-1}(x)", "explanation": "Inverse hyperbolic cosecant — defined for x ≠ 0"}
//     ],
//     "complex_numbers": [
//       {"symbol": "z = r(cos(θ) + isin(θ))", "latex_code": "z = r(\\cos(\\theta) + i\\sin(\\theta))", "explanation": "[Trigonometric form](!/complex-numbers/trigonometric-form#7) of a complex number — r is the modulus, θ is the argument"},
//       {"symbol": "eⁱᶿ = cos(θ) + isin(θ)", "latex_code": "e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)", "explanation": "[Euler's formula](!/complex-numbers/exponential-form#1) — connects exponential and trigonometric functions through the imaginary unit"},
//       {"symbol": "zⁿ = rⁿ(cos(nθ) + isin(nθ))", "latex_code": "z^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))", "explanation": "[De Moivre's theorem](!/complex-numbers/demoivre-theorem#2) — raises a complex number to the n-th power by scaling the modulus and multiplying the argument"}
//     ],
//     "sum_and_difference_identities": [
//       {"symbol": "sin(α + β) = sin(α)cos(β) + cos(α)sin(β)", "latex_code": "\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)", "explanation": "[Angle sum identity](!/trigonometry/identities#sum) for sine — expands sine of a sum into products of individual functions"},
//       {"symbol": "sin(α − β) = sin(α)cos(β) − cos(α)sin(β)", "latex_code": "\\sin(\\alpha - \\beta) = \\sin(\\alpha)\\cos(\\beta) - \\cos(\\alpha)\\sin(\\beta)", "explanation": "[Angle difference identity](!/trigonometry/identities#difference) for sine — same structure as the sum, with signs reversed"},
//       {"symbol": "cos(α + β) = cos(α)cos(β) − sin(α)sin(β)", "latex_code": "\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)", "explanation": "[Angle sum identity](!/trigonometry/identities#sum) for cosine — expands cosine of a sum into products of individual functions"},
//       {"symbol": "cos(α − β) = cos(α)cos(β) + sin(α)sin(β)", "latex_code": "\\cos(\\alpha - \\beta) = \\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)", "explanation": "[Angle difference identity](!/trigonometry/identities#difference) for cosine — same structure as the sum, with signs reversed"},
//       {"symbol": "tan(α + β) = (tan(α) + tan(β)) / (1 − tan(α)tan(β))", "latex_code": "\\tan(\\alpha + \\beta) = \\frac{\\tan(\\alpha) + \\tan(\\beta)}{1 - \\tan(\\alpha)\\tan(\\beta)}", "explanation": "[Angle sum identity](!/trigonometry/identities#sum) for tangent — undefined when the denominator equals zero"},
//       {"symbol": "tan(α − β) = (tan(α) − tan(β)) / (1 + tan(α)tan(β))", "latex_code": "\\tan(\\alpha - \\beta) = \\frac{\\tan(\\alpha) - \\tan(\\beta)}{1 + \\tan(\\alpha)\\tan(\\beta)}", "explanation": "[Angle difference identity](!/trigonometry/identities#difference) for tangent — undefined when the denominator equals zero"}
//     ]
//   };


// //   const introBarData = {
// //   description: 'Reference chart for trigonometric notation and LaTeX codes.',
// //   links: [
// //     { label: 'math keyboard', href: '/keyboard' }
// //   ],
// //   sections: [
// //     { label: 'Notation confusions', anchor: 'notation-confusions' },
// //     { label: 'Algebraic traps', anchor: 'algebraic-traps' },
// //     { label: 'Domain & mode errors', anchor: 'domain-mode-errors' },
// //   ],
// // };

// const introBarData = {
//   description: 'Notation reference with LaTeX codes for trigonometric functions, identities, and related formulas. Use our',
//   links: [
//     { label: 'math keyboard', href: '/keyboard' }
//   ],
//   sections: [
//     { label: 'Notation confusions', anchor: 'notation-confusions' },
//     { label: 'Algebraic traps', anchor: 'algebraic-traps' },
//     { label: 'Domain & mode errors', anchor: 'domain-mode-errors' },
//   ],
// };


// const pitfallSections = {
//   obj1: {
//     title: `Notation Confusions`,
//     content: `Several trigonometric symbols look deceptively similar but carry entirely different meanings. Misreading them leads to wrong calculations even when the underlying method is correct.
 
// The most persistent confusion is between $\\sin^{-1}(x)$ and $\\frac{1}{\\sin(x)}$. The superscript $-1$ on a [trigonometric function](!/trigonometry/functions) does not mean "raise to the power $-1$." It denotes the [inverse function](!/trigonometry/inverse-functions): $\\sin^{-1}(x) = \\arcsin(x)$, which returns an angle. The reciprocal of sine is the cosecant: $\\frac{1}{\\sin(x)} = \\csc(x)$. The notation $\\arcsin$ avoids this trap entirely.
 
// The expression $\\sin^2(\\theta)$ means $(\\sin\\theta)^2$ — the square of the output. It does not mean $\\sin(\\theta^2)$, which would apply the function to a squared input. These produce different values at almost every angle: $\\sin^2(30°) = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$, while $\\sin(30°^2) = \\sin(900°) = \\sin(180°) = 0$.
 
// The abbreviation $\\text{cis}(\\theta)$ stands for $\\cos\\theta + i\\sin\\theta$ and appears in some textbooks for the [trigonometric form](!/complex-numbers/trigonometric-form#7) of complex numbers. It is not a separate function — just shorthand. Not all sources use it.
 
// The notation $\\sinh$ denotes the hyperbolic sine function, defined as $\\frac{e^x - e^{-x}}{2}$. It is not sine evaluated at a variable called $h$. Hyperbolic functions are a separate family with their own identities and properties.
 
// The letter $e$ in Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ is [Euler's number](!/complex-numbers/exponential-form#1), the mathematical constant approximately equal to $2.71828$. It is not a variable and cannot be treated as one in algebraic manipulation.
 
// The notation $|z|$ applied to a complex number means the modulus — the distance from $z$ to the origin in the complex plane: $|a + bi| = \\sqrt{a^2 + b^2}$. This extends the real-number absolute value but is not the same as "removing the sign."`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Algebraic Traps`,
//     content: `Trigonometric functions do not obey the algebraic rules that apply to multiplication and addition. Treating them as if they do produces errors that no amount of careful arithmetic can fix.
 
// The most common mistake: $\\sin(\\alpha + \\beta) \\neq \\sin\\alpha + \\sin\\beta$. Sine does not distribute over addition. The correct expansion is the [angle sum identity](!/trigonometry/identities#sum): $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$. The same applies to cosine and tangent — none of them distribute.
 
// The expression $\\sin(2\\theta)$ is not the same as $2\\sin(\\theta)$. The first applies sine to a doubled argument; the second doubles the output of sine. They coincide only at isolated angles. The correct relationship is the [double angle identity](!/trigonometry/identities#double): $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$.
 
// The expressions $\\sin^2\\theta + \\cos^2\\theta$ and $\\sin(2\\theta) + \\cos(2\\theta)$ look similar at a glance but are unrelated. The first is the [Pythagorean identity](!/trigonometry/identities#pythagorean) and always equals $1$. The second is a sum of trigonometric functions at a doubled angle and varies with $\\theta$.
 
// The $\\pm$ sign in [half-angle formulas](!/trigonometry/identities#half) is not a free choice. It is determined by the quadrant of $\\frac{\\theta}{2}$. For $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$, use $+$ when $\\frac{\\theta}{2}$ falls in a quadrant where sine is positive, and $-$ when it falls where sine is negative. The formula provides the magnitude; the quadrant provides the sign.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Domain and Mode Errors`,
//     content: `Input and output conventions in trigonometry carry strict requirements that are easy to overlook — and the consequences are silently wrong answers, not error messages.
 
// The degree symbol matters. $\\sin(30)$ with no degree symbol means sine of $30$ radians — approximately $-0.988$. $\\sin(30°)$ means sine of $30$ degrees — exactly $\\frac{1}{2}$. When no unit symbol is present, radians are assumed. This mismatch is the most common source of calculator errors: the calculator is in the wrong mode, the answer looks plausible enough to go unquestioned, and the error propagates through subsequent work.
 
// Radians carry no unit symbol precisely because they are dimensionless — the ratio of two lengths. The absence of a symbol is itself the indicator. When an expression like $\\sin(\\pi/6)$ appears, the $\\pi/6$ is in radians. When an expression like $\\sin(30°)$ appears, the degree symbol is explicit. Mixing the two in a single computation is a reliable path to error.
 
// The [inverse trigonometric functions](!/trigonometry/inverse-functions) take numbers as inputs and return angles as outputs. The domain of $\\arcsin$ is $[-1, 1]$ — only numbers in this interval have a corresponding angle. The output of $\\arcsin$ is an angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Students frequently reverse these, attempting to compute $\\arcsin(2)$ (undefined) or expecting $\\arcsin$ to return a number outside its range.
 
// The composition $\\cos^{-1}(\\cos(x)) = x$ holds only when $x \\in [0, \\pi]$. Outside this interval, the inverse "folds" the result back into its restricted range. For example, $\\cos^{-1}(\\cos(\\frac{5\\pi}{3})) = \\cos^{-1}(\\frac{1}{2}) = \\frac{\\pi}{3}$, not $\\frac{5\\pi}{3}$. The same caution applies to $\\arcsin(\\sin(x))$ outside $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.
 
// Parentheses in trigonometric notation are optional for single variables — $\\sin\\theta$ and $\\sin(\\theta)$ are identical. But for compound expressions, parentheses are mandatory. $\\sin\\alpha + \\beta$ means $(\\sin\\alpha) + \\beta$, while $\\sin(\\alpha + \\beta)$ applies sine to the entire sum. Omitting parentheses does not merely look informal — it changes the mathematical meaning.`,
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
//       pitfallSections,
//       introBarData,
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

export default function MathSymbolsTrigonometryPage({ symbolsData, meta, menuItems, pitfallSections,
      introBarData, faqQuestions, schemas }) {


        // genericSections for the pitfall sections
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
    id: 'domain-mode-errors',
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
      <br />
      <br />
      <IntroBar introBar={introBarData} />
      <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
     
     <VerticalButtonGroup 
     items={menuItems}
     width="180px"       
   //   backgroundColor ='#0070f3'
   //   color = 'white'
     isSticky={true}
     verticalOffset='100px'
     />
      <div
        className="title"
        style={{
          margin: 'auto',
          width: '90%',
        }}
      >
        <DataWrapper data={symbolsData} />
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <Sections sections={pitfallGenericSections} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton /> */}
    </>
  );
}

// Include data and metadata in getStaticProps
export async function getStaticProps() {

  
  const menuItems = [

   { title:"Other tables",
   items:[ {
      title: "Linear Algebra",
      // icon: <Home />,
      link: "/math-symbols/linear-algebra"
    },
    {
        title: "Mathematical Logic",
        // icon: <Home />,
        link: "/math-symbols/math-logic"
      },
      {
        title: "Calculus",
        // icon: <Home />,
        link: "/math-symbols/calculus"
      },
      // {
      //   title: "Trigonometry",
      //   // icon: <Home />,
      //   link: "/math-symbols/trigonometry"
      // },
      {
        title: "Set Theory",
        // icon: <Home />,
        link: "/math-symbols/set-theory"
      },

      {
        title: "Combinatorics",
        // icon: <Home />,
        link: "/math-symbols/combinatorics"
      },
      {
        title: "Probability",
        // icon: <Home />,
        link: "/math-symbols/probability"
      },
       {
          title: "Complex Numbers",
          link: "/math-symbols/complex-numbers"  // Example without icon
        },
    // {
    //   title: "Settings",
    //   link: "/settings"  // Example without icon
    // }
   ]},

   {
        title:"Relevant tools",
        items:[
            {title:"Interactive Unit Circle",link:"/visual-tools/unit-circle"},
            {title:"Trigonometry Calculator",link:"/calculators/trigonometry-calculator"},
            {title:"Angle Converter",link:"/converters/degree-radians"},
        ]
    }
    ,
    {
      title:"Relevant Pages",
      items:[
        {title:"Trigonometry",link:'/trigonometry'},
        {title:"Trigonometric Identities",link:'/trigonometry/identities'},
        {title:"Trigonometric Tables",link:'/tables/trigonometry'}
      ]
    }

  ];
  

  const keyWords = [
    'trigonometry symbols',
    'trig symbols chart',
    'trigonometric notation',
    'trig LaTeX codes',
    'sine cosine tangent symbols',
    'inverse trig symbols',
    'trigonometric identities notation',
    'hyperbolic function symbols',
    'unit circle notation',
    'angle sum identity symbols',
    'law of sines cosines notation',
    'double angle formula symbols',
    'math symbols reference',
    'trigonometry symbol list'
  ];

  const meta = {
    title: 'Trigonometry Symbols: Chart & LaTeX Codes | Learn Math Class',
    description:
      'Complete trigonometry symbols chart with LaTeX codes. Covers sine, cosine, tangent, inverse trig, hyperbolic functions, identities, and common notation pitfalls.',
    keywords: keyWords,
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/trigonometry',
    pageHeading: 'Trigonometry Symbols',
  };

  const faqQuestions = {
    obj1: {
      question: "What are the basic trigonometry symbols?",
      answer: "The six basic trigonometry symbols are sin, cos, tan, cot, sec, and csc. They represent the sine, cosine, tangent, cotangent, secant, and cosecant functions respectively, each defined as a ratio of sides in a right triangle or as coordinates on the unit circle."
    },
    obj2: {
      question: "What is the difference between sin inverse and 1 over sin?",
      answer: "The notation sin^(-1)(x) or arcsin(x) is the inverse sine function, which returns an angle whose sine equals x. The expression 1/sin(x) is the reciprocal of sine, which equals csc(x). Despite the similar-looking exponent, they have completely different meanings."
    },
    obj3: {
      question: "What are the Pythagorean trigonometric identities?",
      answer: "The three Pythagorean identities are sin^2(t) + cos^2(t) = 1, 1 + tan^2(t) = sec^2(t), and 1 + cot^2(t) = csc^2(t). They all derive from the unit circle equation x^2 + y^2 = 1 by dividing through by cos^2 or sin^2."
    },
    obj4: {
      question: "What are hyperbolic trig functions?",
      answer: "Hyperbolic functions sinh, cosh, tanh, coth, sech, and csch are analogs of trigonometric functions defined using the exponential function rather than the unit circle. For example, sinh(x) = (e^x - e^(-x))/2. They satisfy their own set of identities similar to circular trig identities."
    },
    obj5: {
      question: "How do you write trigonometry symbols in LaTeX?",
      answer: "In LaTeX, use backslash commands such as \\sin, \\cos, \\tan, \\cot, \\sec, and \\csc. For inverse functions use \\sin^{-1} or \\arcsin. Greek letters for angles use \\theta, \\alpha, and \\beta. Squared functions are written as \\sin^2(\\theta)."
    }
  };

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Trigonometry Symbols Chart",
      "description": "Complete trigonometry symbols chart with LaTeX codes. Covers sine, cosine, tangent, inverse trig, hyperbolic functions, identities, and common notation pitfalls.",
      "url": "https://www.learnmathclass.com/math-symbols/trigonometry",
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
        "name": "Trigonometry Symbols and Notation"
      },
      "teaches": [
        "Basic trigonometric function symbols and their meanings",
        "Inverse trigonometric function notation",
        "Trigonometric identity notation including Pythagorean and double angle formulas",
        "Hyperbolic function symbols and definitions",
        "LaTeX codes for all trigonometric symbols",
        "Common notation confusions and algebraic traps in trigonometry"
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
          "name": "Trigonometry Symbols",
          "item": "https://www.learnmathclass.com/math-symbols/trigonometry"
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
    "basic_trigonometric_functions": [
      {"symbol": "sin(\u03B8)", "latex_code": "\\sin(\\theta)", "explanation": "Sine function \u2014 ratio of the opposite side to the hypotenuse; equals the y-coordinate on the [unit circle](!/trigonometry/unit-circle#2)"},
      {"symbol": "cos(\u03B8)", "latex_code": "\\cos(\\theta)", "explanation": "Cosine function \u2014 ratio of the adjacent side to the hypotenuse; equals the x-coordinate on the [unit circle](!/trigonometry/unit-circle#2)"},
      {"symbol": "tan(\u03B8)", "latex_code": "\\tan(\\theta)", "explanation": "Tangent function \u2014 ratio of opposite to adjacent, or equivalently [sin(\u03B8)/cos(\u03B8)](!/trigonometry/functions#3)"},
      {"symbol": "cot(\u03B8)", "latex_code": "\\cot(\\theta)", "explanation": "Cotangent function \u2014 ratio of adjacent to opposite; [reciprocal of tangent](!/trigonometry/functions#6)"},
      {"symbol": "sec(\u03B8)", "latex_code": "\\sec(\\theta)", "explanation": "Secant function \u2014 ratio of hypotenuse to adjacent; [reciprocal of cosine](!/trigonometry/functions#5)"},
      {"symbol": "csc(\u03B8)", "latex_code": "\\csc(\\theta)", "explanation": "Cosecant function \u2014 ratio of hypotenuse to opposite; [reciprocal of sine](!/trigonometry/functions#4)"}
    ],
    "inverse_trigonometric_functions": [
      {"symbol": "sin\u207B\u00B9(x)", "latex_code": "\\sin^{-1}(x)", "explanation": "Inverse sine ([arcsine](!/trigonometry/inverse-functions#2)) \u2014 returns the angle whose sine is x, restricted to [\u2212\u03C0/2, \u03C0/2]"},
      {"symbol": "cos\u207B\u00B9(x)", "latex_code": "\\cos^{-1}(x)", "explanation": "Inverse cosine ([arccosine](!/trigonometry/inverse-functions#3)) \u2014 returns the angle whose cosine is x, restricted to [0, \u03C0]"},
      {"symbol": "tan\u207B\u00B9(x)", "latex_code": "\\tan^{-1}(x)", "explanation": "Inverse tangent ([arctangent](!/trigonometry/inverse-functions#4)) \u2014 returns the angle whose tangent is x, restricted to (\u2212\u03C0/2, \u03C0/2)"},
      {"symbol": "cot\u207B\u00B9(x)", "latex_code": "\\cot^{-1}(x)", "explanation": "Inverse cotangent ([arccotangent](!/trigonometry/inverse-functions#5)) \u2014 returns the angle whose cotangent is x, restricted to (0, \u03C0)"},
      {"symbol": "sec\u207B\u00B9(x)", "latex_code": "\\sec^{-1}(x)", "explanation": "Inverse secant ([arcsecant](!/trigonometry/inverse-functions#5)) \u2014 returns the angle whose secant is x, defined for |x| \u2265 1"},
      {"symbol": "csc\u207B\u00B9(x)", "latex_code": "\\csc^{-1}(x)", "explanation": "Inverse cosecant ([arccosecant](!/trigonometry/inverse-functions#5)) \u2014 returns the angle whose cosecant is x, defined for |x| \u2265 1"}
    ],
    "trigonometric_identities": [
      {"symbol": "sin\u00B2(\u03B8) + cos\u00B2(\u03B8) = 1", "latex_code": "\\sin^2(\\theta) + \\cos^2(\\theta) = 1", "explanation": "[Pythagorean identity](!/trigonometry/identities#pythagorean) \u2014 follows directly from the unit circle equation x\u00B2 + y\u00B2 = 1"},
      {"symbol": "1 + tan\u00B2(\u03B8) = sec\u00B2(\u03B8)", "latex_code": "1 + \\tan^2(\\theta) = \\sec^2(\\theta)", "explanation": "[Pythagorean identity](!/trigonometry/identities#pythagorean) for tangent and secant \u2014 obtained by dividing sin\u00B2 + cos\u00B2 = 1 by cos\u00B2"},
      {"symbol": "1 + cot\u00B2(\u03B8) = csc\u00B2(\u03B8)", "latex_code": "1 + \\cot^2(\\theta) = \\csc^2(\\theta)", "explanation": "[Pythagorean identity](!/trigonometry/identities#pythagorean) for cotangent and cosecant \u2014 obtained by dividing sin\u00B2 + cos\u00B2 = 1 by sin\u00B2"},
      {"symbol": "sin(2\u03B8) = 2sin(\u03B8)cos(\u03B8)", "latex_code": "\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)", "explanation": "[Double angle identity](!/trigonometry/identities#double) for sine \u2014 derived from the angle sum formula with equal angles"},
      {"symbol": "cos(2\u03B8) = cos\u00B2(\u03B8) \u2212 sin\u00B2(\u03B8)", "latex_code": "\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta)", "explanation": "[Double angle identity](!/trigonometry/identities#double) for cosine \u2014 has two alternate forms using the Pythagorean identity"},
      {"symbol": "tan(2\u03B8) = 2tan(\u03B8) / (1 \u2212 tan\u00B2(\u03B8))", "latex_code": "\\tan(2\\theta) = \\frac{2\\tan(\\theta)}{1 - \\tan^2(\\theta)}", "explanation": "[Double angle identity](!/trigonometry/identities#double) for tangent \u2014 derived from the tangent sum formula"}
    ],
    "law_of_sines_and_cosines": [
      {"symbol": "a/sin(A) = b/sin(B) = c/sin(C)", "latex_code": "\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}", "explanation": "[Law of Sines](!/trigonometry/sines-cosines-law#2) \u2014 relates side lengths to the sines of their opposite angles in any triangle"},
      {"symbol": "c\u00B2 = a\u00B2 + b\u00B2 \u2212 2abcos(C)", "latex_code": "c^2 = a^2 + b^2 - 2ab\\cos(C)", "explanation": "[Law of Cosines](!/trigonometry/sines-cosines-law#5) \u2014 generalizes the Pythagorean theorem to any triangle"}
    ],
    "angles_and_arc_lengths": [
      {"symbol": "\u03B8 = s / r", "latex_code": "\\theta = \\frac{s}{r}", "explanation": "Angle in [radians](!/trigonometry/degrees-radians#2) \u2014 defined as the ratio of arc length to radius"},
      {"symbol": "s = r\u03B8", "latex_code": "s = r\\theta", "explanation": "[Arc length](!/trigonometry/degrees-radians#4) formula \u2014 requires \u03B8 in radians; no conversion constant needed"}
    ],
    "unit_circle_relations": [
      {"symbol": "(x, y) = (cos(\u03B8), sin(\u03B8))", "latex_code": "(x, y) = (\\cos(\\theta), \\sin(\\theta))", "explanation": "Coordinates of a point on the [unit circle](!/trigonometry/unit-circle#2) at angle \u03B8 define cosine and sine"},
      {"symbol": "tan(\u03B8) = y / x", "latex_code": "\\tan(\\theta) = \\frac{y}{x}", "explanation": "Tangent as the ratio of [unit circle coordinates](!/trigonometry/unit-circle#2); geometrically, the slope of the terminal side"}
    ],
    "hyperbolic_functions": [
      {"symbol": "sinh(x)", "latex_code": "\\sinh(x)", "explanation": "Hyperbolic sine \u2014 defined as (e\u02E3 \u2212 e\u207B\u02E3)/2"},
      {"symbol": "cosh(x)", "latex_code": "\\cosh(x)", "explanation": "Hyperbolic cosine \u2014 defined as (e\u02E3 + e\u207B\u02E3)/2"},
      {"symbol": "tanh(x)", "latex_code": "\\tanh(x)", "explanation": "Hyperbolic tangent \u2014 defined as sinh(x)/cosh(x)"},
      {"symbol": "coth(x)", "latex_code": "\\coth(x)", "explanation": "Hyperbolic cotangent \u2014 defined as cosh(x)/sinh(x), x \u2260 0"},
      {"symbol": "sech(x)", "latex_code": "\\text{sech}(x)", "explanation": "Hyperbolic secant \u2014 defined as 1/cosh(x)"},
      {"symbol": "csch(x)", "latex_code": "\\text{csch}(x)", "explanation": "Hyperbolic cosecant \u2014 defined as 1/sinh(x), x \u2260 0"}
    ],
    "inverse_hyperbolic_functions": [
      {"symbol": "sinh\u207B\u00B9(x)", "latex_code": "\\sinh^{-1}(x)", "explanation": "Inverse hyperbolic sine \u2014 defined for all real x; equals ln(x + \u221A(x\u00B2 + 1))"},
      {"symbol": "cosh\u207B\u00B9(x)", "latex_code": "\\cosh^{-1}(x)", "explanation": "Inverse hyperbolic cosine \u2014 defined for x \u2265 1; equals ln(x + \u221A(x\u00B2 \u2212 1))"},
      {"symbol": "tanh\u207B\u00B9(x)", "latex_code": "\\tanh^{-1}(x)", "explanation": "Inverse hyperbolic tangent \u2014 defined for |x| < 1; equals \u00BD ln((1+x)/(1\u2212x))"},
      {"symbol": "coth\u207B\u00B9(x)", "latex_code": "\\coth^{-1}(x)", "explanation": "Inverse hyperbolic cotangent \u2014 defined for |x| > 1; equals \u00BD ln((x+1)/(x\u22121))"},
      {"symbol": "sech\u207B\u00B9(x)", "latex_code": "\\text{sech}^{-1}(x)", "explanation": "Inverse hyperbolic secant \u2014 defined for 0 < x \u2264 1"},
      {"symbol": "csch\u207B\u00B9(x)", "latex_code": "\\text{csch}^{-1}(x)", "explanation": "Inverse hyperbolic cosecant \u2014 defined for x \u2260 0"}
    ],
    "complex_numbers": [
      {"symbol": "z = r(cos(\u03B8) + isin(\u03B8))", "latex_code": "z = r(\\cos(\\theta) + i\\sin(\\theta))", "explanation": "[Trigonometric form](!/complex-numbers/trigonometric-form#7) of a complex number \u2014 r is the modulus, \u03B8 is the argument"},
      {"symbol": "e\u2071\u1DBF = cos(\u03B8) + isin(\u03B8)", "latex_code": "e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)", "explanation": "[Euler's formula](!/complex-numbers/exponential-form#1) \u2014 connects exponential and trigonometric functions through the imaginary unit"},
      {"symbol": "z\u207F = r\u207F(cos(n\u03B8) + isin(n\u03B8))", "latex_code": "z^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))", "explanation": "[De Moivre's theorem](!/complex-numbers/demoivre-theorem#2) \u2014 raises a complex number to the n-th power by scaling the modulus and multiplying the argument"}
    ],
    "sum_and_difference_identities": [
      {"symbol": "sin(\u03B1 + \u03B2) = sin(\u03B1)cos(\u03B2) + cos(\u03B1)sin(\u03B2)", "latex_code": "\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)", "explanation": "[Angle sum identity](!/trigonometry/identities#sum) for sine \u2014 expands sine of a sum into products of individual functions"},
      {"symbol": "sin(\u03B1 \u2212 \u03B2) = sin(\u03B1)cos(\u03B2) \u2212 cos(\u03B1)sin(\u03B2)", "latex_code": "\\sin(\\alpha - \\beta) = \\sin(\\alpha)\\cos(\\beta) - \\cos(\\alpha)\\sin(\\beta)", "explanation": "[Angle difference identity](!/trigonometry/identities#difference) for sine \u2014 same structure as the sum, with signs reversed"},
      {"symbol": "cos(\u03B1 + \u03B2) = cos(\u03B1)cos(\u03B2) \u2212 sin(\u03B1)sin(\u03B2)", "latex_code": "\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)", "explanation": "[Angle sum identity](!/trigonometry/identities#sum) for cosine \u2014 expands cosine of a sum into products of individual functions"},
      {"symbol": "cos(\u03B1 \u2212 \u03B2) = cos(\u03B1)cos(\u03B2) + sin(\u03B1)sin(\u03B2)", "latex_code": "\\cos(\\alpha - \\beta) = \\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)", "explanation": "[Angle difference identity](!/trigonometry/identities#difference) for cosine \u2014 same structure as the sum, with signs reversed"},
      {"symbol": "tan(\u03B1 + \u03B2) = (tan(\u03B1) + tan(\u03B2)) / (1 \u2212 tan(\u03B1)tan(\u03B2))", "latex_code": "\\tan(\\alpha + \\beta) = \\frac{\\tan(\\alpha) + \\tan(\\beta)}{1 - \\tan(\\alpha)\\tan(\\beta)}", "explanation": "[Angle sum identity](!/trigonometry/identities#sum) for tangent \u2014 undefined when the denominator equals zero"},
      {"symbol": "tan(\u03B1 \u2212 \u03B2) = (tan(\u03B1) \u2212 tan(\u03B2)) / (1 + tan(\u03B1)tan(\u03B2))", "latex_code": "\\tan(\\alpha - \\beta) = \\frac{\\tan(\\alpha) - \\tan(\\beta)}{1 + \\tan(\\alpha)\\tan(\\beta)}", "explanation": "[Angle difference identity](!/trigonometry/identities#difference) for tangent \u2014 undefined when the denominator equals zero"}
    ]
  };


const introBarData = {
  description: 'Notation reference with LaTeX codes for trigonometric functions, identities, and related formulas. Use our',
  links: [
    { label: 'Mathematical Keyboard', href: '/keyboard' }
  ],
  sections: [
    { label: 'Notation confusions', anchor: 'notation-confusions' },
    { label: 'Algebraic traps', anchor: 'algebraic-traps' },
    { label: 'Domain & mode errors', anchor: 'domain-mode-errors' },
  ],
};


const pitfallSections = {
  obj1: {
    title: `Notation Confusions`,
    content: `Several trigonometric symbols look deceptively similar but carry entirely different meanings. Misreading them leads to wrong calculations even when the underlying method is correct.
 
The most persistent confusion is between $\\sin^{-1}(x)$ and $\\frac{1}{\\sin(x)}$. The superscript $-1$ on a [trigonometric function](!/trigonometry/functions) does not mean "raise to the power $-1$." It denotes the [inverse function](!/trigonometry/inverse-functions): $\\sin^{-1}(x) = \\arcsin(x)$, which returns an angle. The reciprocal of sine is the cosecant: $\\frac{1}{\\sin(x)} = \\csc(x)$. The notation $\\arcsin$ avoids this trap entirely.
 
The expression $\\sin^2(\\theta)$ means $(\\sin\\theta)^2$ \u2014 the square of the output. It does not mean $\\sin(\\theta^2)$, which would apply the function to a squared input. These produce different values at almost every angle: $\\sin^2(30\u00B0) = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$, while $\\sin(30\u00B0^2) = \\sin(900\u00B0) = \\sin(180\u00B0) = 0$.
 
The abbreviation $\\text{cis}(\\theta)$ stands for $\\cos\\theta + i\\sin\\theta$ and appears in some textbooks for the [trigonometric form](!/complex-numbers/trigonometric-form#7) of complex numbers. It is not a separate function \u2014 just shorthand. Not all sources use it.
 
The notation $\\sinh$ denotes the hyperbolic sine function, defined as $\\frac{e^x - e^{-x}}{2}$. It is not sine evaluated at a variable called $h$. Hyperbolic functions are a separate family with their own identities and properties.
 
The letter $e$ in Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ is [Euler's number](!/complex-numbers/exponential-form#1), the mathematical constant approximately equal to $2.71828$. It is not a variable and cannot be treated as one in algebraic manipulation.
 
The notation $|z|$ applied to a complex number means the modulus \u2014 the distance from $z$ to the origin in the complex plane: $|a + bi| = \\sqrt{a^2 + b^2}$. This extends the real-number absolute value but is not the same as "removing the sign."`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Algebraic Traps`,
    content: `Trigonometric functions do not obey the algebraic rules that apply to multiplication and addition. Treating them as if they do produces errors that no amount of careful arithmetic can fix.
 
The most common mistake: $\\sin(\\alpha + \\beta) \\neq \\sin\\alpha + \\sin\\beta$. Sine does not distribute over addition. The correct expansion is the [angle sum identity](!/trigonometry/identities#sum): $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$. The same applies to cosine and tangent \u2014 none of them distribute.
 
The expression $\\sin(2\\theta)$ is not the same as $2\\sin(\\theta)$. The first applies sine to a doubled argument; the second doubles the output of sine. They coincide only at isolated angles. The correct relationship is the [double angle identity](!/trigonometry/identities#double): $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$.
 
The expressions $\\sin^2\\theta + \\cos^2\\theta$ and $\\sin(2\\theta) + \\cos(2\\theta)$ look similar at a glance but are unrelated. The first is the [Pythagorean identity](!/trigonometry/identities#pythagorean) and always equals $1$. The second is a sum of trigonometric functions at a doubled angle and varies with $\\theta$.
 
The $\\pm$ sign in [half-angle formulas](!/trigonometry/identities#half) is not a free choice. It is determined by the quadrant of $\\frac{\\theta}{2}$. For $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$, use $+$ when $\\frac{\\theta}{2}$ falls in a quadrant where sine is positive, and $-$ when it falls where sine is negative. The formula provides the magnitude; the quadrant provides the sign.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Domain and Mode Errors`,
    content: `Input and output conventions in trigonometry carry strict requirements that are easy to overlook \u2014 and the consequences are silently wrong answers, not error messages.
 
The degree symbol matters. $\\sin(30)$ with no degree symbol means sine of $30$ radians \u2014 approximately $-0.988$. $\\sin(30\u00B0)$ means sine of $30$ degrees \u2014 exactly $\\frac{1}{2}$. When no unit symbol is present, radians are assumed. This mismatch is the most common source of calculator errors: the calculator is in the wrong mode, the answer looks plausible enough to go unquestioned, and the error propagates through subsequent work.
 
Radians carry no unit symbol precisely because they are dimensionless \u2014 the ratio of two lengths. The absence of a symbol is itself the indicator. When an expression like $\\sin(\\pi/6)$ appears, the $\\pi/6$ is in radians. When an expression like $\\sin(30\u00B0)$ appears, the degree symbol is explicit. Mixing the two in a single computation is a reliable path to error.
 
The [inverse trigonometric functions](!/trigonometry/inverse-functions) take numbers as inputs and return angles as outputs. The domain of $\\arcsin$ is $[-1, 1]$ \u2014 only numbers in this interval have a corresponding angle. The output of $\\arcsin$ is an angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Students frequently reverse these, attempting to compute $\\arcsin(2)$ (undefined) or expecting $\\arcsin$ to return a number outside its range.
 
The composition $\\cos^{-1}(\\cos(x)) = x$ holds only when $x \\in [0, \\pi]$. Outside this interval, the inverse "folds" the result back into its restricted range. For example, $\\cos^{-1}(\\cos(\\frac{5\\pi}{3})) = \\cos^{-1}(\\frac{1}{2}) = \\frac{\\pi}{3}$, not $\\frac{5\\pi}{3}$. The same caution applies to $\\arcsin(\\sin(x))$ outside $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.
 
Parentheses in trigonometric notation are optional for single variables \u2014 $\\sin\\theta$ and $\\sin(\\theta)$ are identical. But for compound expressions, parentheses are mandatory. $\\sin\\alpha + \\beta$ means $(\\sin\\alpha) + \\beta$, while $\\sin(\\alpha + \\beta)$ applies sine to the entire sum. Omitting parentheses does not merely look informal \u2014 it changes the mathematical meaning.`,
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
      pitfallSections,
      introBarData,
      faqQuestions,
      schemas,
    },
  };
}