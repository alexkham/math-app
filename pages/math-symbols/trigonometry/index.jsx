
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export default function MathSymbolsTrigonometryPage({ symbolsData, meta,menuItems }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.canonical} />
      </Head>
      <GenericNavbar />
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
      <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
     
     <VerticalButtonGroup 
     items={menuItems}
     width="200px"       
   //   backgroundColor ='#0070f3'
   //   color = 'white'
     isSticky={true}
     verticalOffset='100px'
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
      <ScrollUpButton />
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
        {title:"Trigonometric Identities",link:'/trigonometry/identities'}
      ]
    }

  ];
  
 
  const meta = {
    title: 'Trigonometry Symbols | Trigonometry Symbols Chart',
    description:
      'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
    keywords: [
      'math symbols',
      'mathematical symbols',
      'LaTeX',
      'LaTeX code',
      'math symbols list',
      'math symbols chart',
       'trigonometry symbols',
       'trigonometry math symbols'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/trigonometry',
    pageHeading: 'Trigonometry Symbols',
  };
  const symbolsData = {
    "basic_trigonometric_functions": [
      {"symbol": "sin(θ)", "latex_code": "\\sin(\\theta)", "explanation": "Sine function"},
      {"symbol": "cos(θ)", "latex_code": "\\cos(\\theta)", "explanation": "Cosine function"},
      {"symbol": "tan(θ)", "latex_code": "\\tan(\\theta)", "explanation": "Tangent function"},
      {"symbol": "cot(θ)", "latex_code": "\\cot(\\theta)", "explanation": "Cotangent function"},
      {"symbol": "sec(θ)", "latex_code": "\\sec(\\theta)", "explanation": "Secant function"},
      {"symbol": "csc(θ)", "latex_code": "\\csc(\\theta)", "explanation": "Cosecant function"}
    ],
    "inverse_trigonometric_functions": [
      {"symbol": "sin⁻¹(x)", "latex_code": "\\sin^{-1}(x)", "explanation": "Inverse sine (arcsine) function"},
      {"symbol": "cos⁻¹(x)", "latex_code": "\\cos^{-1}(x)", "explanation": "Inverse cosine (arccosine) function"},
      {"symbol": "tan⁻¹(x)", "latex_code": "\\tan^{-1}(x)", "explanation": "Inverse tangent (arctangent) function"},
      {"symbol": "cot⁻¹(x)", "latex_code": "\\cot^{-1}(x)", "explanation": "Inverse cotangent (arccotangent) function"},
      {"symbol": "sec⁻¹(x)", "latex_code": "\\sec^{-1}(x)", "explanation": "Inverse secant (arcsecant) function"},
      {"symbol": "csc⁻¹(x)", "latex_code": "\\csc^{-1}(x)", "explanation": "Inverse cosecant (arccosecant) function"}
    ],
    "trigonometric_identities": [
      {"symbol": "sin²(θ) + cos²(θ) = 1", "latex_code": "\\sin^2(\\theta) + \\cos^2(\\theta) = 1", "explanation": "Pythagorean identity"},
      {"symbol": "1 + tan²(θ) = sec²(θ)", "latex_code": "1 + \\tan^2(\\theta) = \\sec^2(\\theta)", "explanation": "Pythagorean identity for tangent and secant"},
      {"symbol": "1 + cot²(θ) = csc²(θ)", "latex_code": "1 + \\cot^2(\\theta) = \\csc^2(\\theta)", "explanation": "Pythagorean identity for cotangent and cosecant"},
      {"symbol": "sin(2θ) = 2sin(θ)cos(θ)", "latex_code": "\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)", "explanation": "Double angle identity for sine"},
      {"symbol": "cos(2θ) = cos²(θ) − sin²(θ)", "latex_code": "\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta)", "explanation": "Double angle identity for cosine"},
      {"symbol": "tan(2θ) = 2tan(θ) / (1 − tan²(θ))", "latex_code": "\\tan(2\\theta) = \\frac{2\\tan(\\theta)}{1 - \\tan^2(\\theta)}", "explanation": "Double angle identity for tangent"}
    ],
    "law_of_sines_and_cosines": [
      {"symbol": "a/sin(A) = b/sin(B) = c/sin(C)", "latex_code": "\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}", "explanation": "Law of sines"},
      {"symbol": "c² = a² + b² − 2abcos(C)", "latex_code": "c^2 = a^2 + b^2 - 2ab\\cos(C)", "explanation": "Law of cosines"}
    ],
    "angles_and_arc_lengths": [
      {"symbol": "θ = s / r", "latex_code": "\\theta = \\frac{s}{r}", "explanation": "Angle in radians as arc length divided by radius"},
      {"symbol": "s = rθ", "latex_code": "s = r\\theta", "explanation": "Arc length of a circle"}
    ],
    "unit_circle_relations": [
      {"symbol": "(x, y) = (cos(θ), sin(θ))", "latex_code": "(x, y) = (\\cos(\\theta), \\sin(\\theta))", "explanation": "Coordinates on the unit circle"},
      {"symbol": "tan(θ) = y / x", "latex_code": "\\tan(\\theta) = \\frac{y}{x}", "explanation": "Tangent as ratio of \( y \) to \( x \)"}
    ],
    "hyperbolic_functions": [
      {"symbol": "sinh(x)", "latex_code": "\\sinh(x)", "explanation": "Hyperbolic sine"},
      {"symbol": "cosh(x)", "latex_code": "\\cosh(x)", "explanation": "Hyperbolic cosine"},
      {"symbol": "tanh(x)", "latex_code": "\\tanh(x)", "explanation": "Hyperbolic tangent"},
      {"symbol": "coth(x)", "latex_code": "\\coth(x)", "explanation": "Hyperbolic cotangent"},
      {"symbol": "sech(x)", "latex_code": "\\text{sech}(x)", "explanation": "Hyperbolic secant"},
      {"symbol": "csch(x)", "latex_code": "\\text{csch}(x)", "explanation": "Hyperbolic cosecant"}
    ],
    "inverse_hyperbolic_functions": [
      {"symbol": "sinh⁻¹(x)", "latex_code": "\\sinh^{-1}(x)", "explanation": "Inverse hyperbolic sine"},
      {"symbol": "cosh⁻¹(x)", "latex_code": "\\cosh^{-1}(x)", "explanation": "Inverse hyperbolic cosine"},
      {"symbol": "tanh⁻¹(x)", "latex_code": "\\tanh^{-1}(x)", "explanation": "Inverse hyperbolic tangent"},
      {"symbol": "coth⁻¹(x)", "latex_code": "\\coth^{-1}(x)", "explanation": "Inverse hyperbolic cotangent"},
      {"symbol": "sech⁻¹(x)", "latex_code": "\\text{sech}^{-1}(x)", "explanation": "Inverse hyperbolic secant"},
      {"symbol": "csch⁻¹(x)", "latex_code": "\\text{csch}^{-1}(x)", "explanation": "Inverse hyperbolic cosecant"}
    ],
    "complex_numbers": [
      {"symbol": "z = r(cos(θ) + isin(θ))", "latex_code": "z = r(\\cos(\\theta) + i\\sin(\\theta))", "explanation": "Trigonometric form of a complex number"},
      {"symbol": "eⁱᶿ = cos(θ) + isin(θ)", "latex_code": "e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)", "explanation": "Euler's formula"},
      {"symbol": "zⁿ = rⁿ(cos(nθ) + isin(nθ))", "latex_code": "z^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))", "explanation": "De Moivre's theorem"}
    ],
    "sum_and_difference_identities": [
      {"symbol": "sin(α + β) = sin(α)cos(β) + cos(α)sin(β)", "latex_code": "\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)", "explanation": "Sine of a sum"},
      {"symbol": "sin(α − β) = sin(α)cos(β) − cos(α)sin(β)", "latex_code": "\\sin(\\alpha - \\beta) = \\sin(\\alpha)\\cos(\\beta) - \\cos(\\alpha)\\sin(\\beta)", "explanation": "Sine of a difference"},
      {"symbol": "cos(α + β) = cos(α)cos(β) − sin(α)sin(β)", "latex_code": "\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)", "explanation": "Cosine of a sum"},
      {"symbol": "cos(α − β) = cos(α)cos(β) + sin(α)sin(β)", "latex_code": "\\cos(\\alpha - \\beta) = \\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)", "explanation": "Cosine of a difference"},
      {"symbol": "tan(α + β) = (tan(α) + tan(β)) / (1 − tan(α)tan(β))", "latex_code": "\\tan(\\alpha + \\beta) = \\frac{\\tan(\\alpha) + \\tan(\\beta)}{1 - \\tan(\\alpha)\\tan(\\beta)}", "explanation": "Tangent of a sum"},
      {"symbol": "tan(α − β) = (tan(α) − tan(β)) / (1 + tan(α)tan(β))", "latex_code": "\\tan(\\alpha - \\beta) = \\frac{\\tan(\\alpha) - \\tan(\\beta)}{1 + \\tan(\\alpha)\\tan(\\beta)}", "explanation": "Tangent of a difference"}
    ]
  };
  


  return {
    props: {
      symbolsData,
      meta, // Pass SEO metadata
      menuItems
    },
  };
}
