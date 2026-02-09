import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../pages.css';
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export default function MathSymbolsPage({ symbolsData, meta,menuItems }) {

    // const menuItems = [
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
    //       {
    //         title: "Calculus",
    //         // icon: <Home />,
    //         link: "/math-symbols/calculus"
    //       },
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
    //     // {
    //     //   title: "Settings",
    //     //   link: "/settings"  // Example without icon
    //     // }
    //   ];
      
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
      <h1 className="title" style={{ marginTop: '0px',marginBottom:'0px' }}>
        {meta.pageHeading}
      </h1>
      <br/>
      <br/>
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
          width: '80%',
        
        }}
      >
        <DataWrapper data={symbolsData} />
      </div>
      </div>
      {/* <ScrollUpButton /> */}
    </>
  );
}

// Include data and metadata in getStaticProps
export async function getStaticProps() {

    const menuItems = [
        {
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
          {
            title: "Trigonometry",
            // icon: <Home />,
            link: "/math-symbols/trigonometry"
          },
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
      ];
      
 
  const meta = {
    title: 'Math Symbols | Mathematical Symbols Chart',
    description:
      'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
    keywords: [
      'math symbols',
      'mathematical symbols',
      'LaTeX',
      'LaTeX code',
      'math symbols list',
      'math symbols chart',
     
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols',
    pageHeading: 'Mathematical Symbols',
  };


  const symbolsData ={ 
    "arithmetic_symbols": [
      {"symbol": "+", "latex_code": "+", "explanation": "Addition" },
      {"symbol": "−", "latex_code": "-", "explanation": "Subtraction"},
      {"symbol": "×", "latex_code": "\\times", "explanation": "Multiplication"},
      {"symbol": "÷", "latex_code": "\\div", "explanation": "Division"},
      {"symbol": "=", "latex_code": "=", "explanation": "Equal to"},
      {"symbol": "≠", "latex_code": "\\neq", "explanation": "Not equal to"},
      {"symbol": "<", "latex_code": "<", "explanation": "Less than"},
      {"symbol": ">", "latex_code": ">", "explanation": "Greater than"},
      {"symbol": "≤", "latex_code": "\\leq", "explanation": "Less than or equal to"},
      {"symbol": "≥", "latex_code": "\\geq", "explanation": "Greater than or equal to"},
      {"symbol": "±", "latex_code": "\\pm", "explanation": "Plus-minus"},
      {"symbol": "∓", "latex_code": "\\mp", "explanation": "Minus-plus"},
      {"symbol": "%", "latex_code": "\\%", "explanation": "Percent"},
      {"symbol": "‰", "latex_code": "\\permil", "explanation": "Per mille"},
      {"symbol": "‱", "latex_code": "\\textpertenthousand", "explanation": "Per ten thousand sign"},
      {"symbol": "√", "latex_code": "\\sqrt{}", "explanation": "Square root"},
      {"symbol": "∛", "latex_code": "\\sqrt[3]{}", "explanation": "Cube root"},
      {"symbol": "∜", "latex_code": "\\sqrt[4]{}", "explanation": "Fourth root"},
      {"symbol": "^", "latex_code": "^", "explanation": "Exponentiation (power)"},
      {"symbol": "log", "latex_code": "\\log", "explanation": "Logarithm base 10"},
      {"symbol": "ln", "latex_code": "\\ln", "explanation": "Natural logarithm (base \\(e\\))"},
      {"symbol": "e", "latex_code": "e", "explanation": "The base of the natural logarithm (\\(e\\))"},
      {"symbol": "∞", "latex_code": "\\infty", "explanation": "Infinity"},
    {"symbol": "π", "latex_code": "\\pi", "explanation": "Pi, the ratio of the circumference of a circle to its diameter"},
    {"symbol": "φ", "latex_code": "\\varphi", "explanation": "Phi, the golden ratio"},
    {"symbol": "!", "latex_code": "!", "explanation": "Factorial, the product of all positive integers up to a given number"},
    {"symbol": "∑", "latex_code": "\\sum", "explanation": "Summation, the sum of a sequence of numbers"},
    {"symbol": "∏", "latex_code": "\\prod", "explanation": "Product, the product of a sequence of numbers"},
    {"symbol": "∂", "latex_code": "\\partial", "explanation": "Partial derivative symbol"},
    {"symbol": "∆", "latex_code": "\\Delta", "explanation": "Delta, represents change or difference in mathematics"},
     {"symbol": "∫", "latex_code": "\\int", "explanation": "Integral, represents the area under a curve"},
     {"symbol": "∮", "latex_code": "\\oint", "explanation": "Contour integral, used in complex analysis"},
      {"symbol": "(", "latex_code": "(", "explanation": "Left parenthesis for grouping"},
      {"symbol": ")", "latex_code": ")", "explanation": "Right parenthesis for grouping"},
      {"symbol": "[", "latex_code": "[", "explanation": "Left square bracket for grouping"},
      {"symbol": "]", "latex_code": "]", "explanation": "Right square bracket for grouping"},
   
    ]
  ,
  "basic_binary_operators": [
    {
        "symbol": "+",
        "title": "Plus",
        "latex_code": "\\+",
        "html_entity": "&plus;",
        "unicode_escape_sequence": "\\u002B",
        "category": "Binary Operators",
        "unicode_code_point": "U+002B",
        "mathml_representation": "<mo>+</mo>",
        "alternate_representations": [
            "+",
            "&plus;"
        ],
        "math_type_code": "<m:plus></m:plus>",
        "html_entity_name": "Plus",
         "explanation": "Addition operation between two numbers."
    },
    {
        "symbol": "-",
        "title": "Minus",
        "latex_code": "\\-",
        "html_entity": "&minus;",
        "unicode_escape_sequence": "\\u002D",
        "category": "Binary Operators",
        "unicode_code_point": "U+002D",
        "mathml_representation": "<mo>-</mo>",
        "alternate_representations": [
            "-",
            "&minus;"
        ],
        "math_type_code": "<m:minus></m:minus>",
        "html_entity_name": "Minus",
        "explanation": "Subtraction operation between two numbers."
    },
    {
        "symbol": "*",
        "title": "Asterisk",
        "latex_code": "\\ast",
        "html_entity": "&ast;",
        "unicode_escape_sequence": "\\u002A",
        "category": "Binary Operators",
        "unicode_code_point": "U+002A",
        "mathml_representation": "<mo>*</mo>",
        "alternate_representations": [
            "*",
            "&ast;"
        ],
        "math_type_code": "<m:asterisk></m:asterisk>",
        "html_entity_name": "Asterisk",
         "explanation": "Multiplication or a wildcard symbol."
    },
    {
        "symbol": "/",
        "title": "Slash",
        "latex_code": "\\/",
        "html_entity": "&sol;",
        "unicode_escape_sequence": "\\u002F",
        "category": "Binary Operators",
        "unicode_code_point": "U+002F",
        "mathml_representation": "<mo>/</mo>",
        "alternate_representations": [
            "/",
            "&sol;"
        ],
        "math_type_code": "<m:slash></m:slash>",
        "html_entity_name": "Slash",
        "explanation": "Denotes division or separates terms."
    },
    {
        "symbol": "=",
        "title": "Equals",
        "latex_code": "\\=",
        "html_entity": "&equals;",
        "unicode_escape_sequence": "\\u003D",
        "category": "Binary Operators",
        "unicode_code_point": "U+003D",
        "mathml_representation": "<mo>=</mo>",
        "alternate_representations": [
            "=",
            "&equals;"
        ],
        "math_type_code": "<m:equals></m:equals>",
        "html_entity_name": "Equals",
        "explanation": "Indicates equality between two expressions or assignment."
    },
    {
        "symbol": "≠",
        "title": "Not Equal",
        "latex_code": "\\neq",
        "html_entity": "&ne;",
        "unicode_escape_sequence": "\\u2260",
        "category": "Binary Operators",
        "unicode_code_point": "U+2260",
        "mathml_representation": "<mo>≠</mo>",
        "alternate_representations": [
            "≠",
            "&ne;"
        ],
        "math_type_code": "<m:notequal></m:notequal>",
        "html_entity_name": "Not Equal",
        "explanation": "Indicates that two expressions are not equal."
    },
    {
        "symbol": "<",
        "title": "Less Than",
        "latex_code": "\\<",
        "html_entity": "&lt;",
        "unicode_escape_sequence": "\\u003C",
        "category": "Binary Operators",
        "unicode_code_point": "U+003C",
        "mathml_representation": "<mo><</mo>",
        "alternate_representations": [
            "<",
            "&lt;"
        ],
        "math_type_code": "<m:lessthan></m:lessthan>",
        "html_entity_name": "Less Than",
        "explanation": "Indicates that the left value is smaller than the right."
    },
    {
        "symbol": ">",
        "title": "Greater Than",
        "latex_code": "\\>",
        "html_entity": "&gt;",
        "unicode_escape_sequence": "\\u003E",
        "category": "Binary Operators",
        "unicode_code_point": "U+003E",
        "mathml_representation": "<mo>></mo>",
        "alternate_representations": [
            ">",
            "&gt;"
        ],
        "math_type_code": "<m:greaterthan></m:greaterthan>",
        "html_entity_name": "Greater Than",
        "explanation": "Indicates that the left value is larger than the right."
    },
    {
        "symbol": "≤",
        "title": "Less Than or Equal To",
        "latex_code": "\\leq",
        "html_entity": "&le;",
        "unicode_escape_sequence": "\\u2264",
        "category": "Binary Operators",
        "unicode_code_point": "U+2264",
        "mathml_representation": "<mo>≤</mo>",
        "alternate_representations": [
            "≤",
            "&le;"
        ],
        "math_type_code": "<m:lessthanorequalto></m:lessthanorequalto>",
        "html_entity_name": "Less Than or Equal To",
        "explanation": "Left value is less than or equal to the right."
    },
    {
        "symbol": "≥",
        "title": "Greater Than or Equal To",
        "latex_code": "\\geq",
        "html_entity": "&ge;",
        "unicode_escape_sequence": "\\u2265",
        "category": "Binary Operators",
        "unicode_code_point": "U+2265",
        "mathml_representation": "<mo>≥</mo>",
        "alternate_representations": [
            "≥",
            "&ge;"
        ],
        "math_type_code": "<m:greaterthanorequalto></m:greaterthanorequalto>",
        "html_entity_name": "Greater Than or Equal To",
        "explanation": "Left value is greater than or equal to the right."
    },
    {
        "symbol": "×",
        "title": "Times",
        "latex_code": "\\times",
        "html_entity": "&times;",
        "unicode_escape_sequence": "\\u00D7",
        "category": "Binary Operators",
        "unicode_code_point": "U+00D7",
        "mathml_representation": "<mo>×</mo>",
        "alternate_representations": [
            "×",
            "&times;"
        ],
        "math_type_code": "<m:times></m:times>",
        "html_entity_name": "Times",
         "explanation": "Denotes multiplication between two quantities."
    },
    {
        "symbol": "÷",
        "title": "Division Sign",
        "latex_code": "\\div",
        "html_entity": "&divide;",
        "unicode_escape_sequence": "\\u00F7",
        "category": "Binary Operators",
        "unicode_code_point": "U+00F7",
        "mathml_representation": "<mo>÷</mo>",
        "alternate_representations": [
            "÷",
            "&divide;"
        ],
        "math_type_code": "<m:divisionsign></m:divisionsign>",
        "html_entity_name": "Division Sign",
        "explanation": "Represents division between two numbers."
    },
    {
        "symbol": "±",
        "title": "Plus Minus",
        "latex_code": "\\pm",
        "html_entity": "&plusmn;",
        "unicode_escape_sequence": "\\u00B1",
        "category": "Binary Operators",
        "unicode_code_point": "U+00B1",
        "mathml_representation": "<mo>±</mo>",
        "alternate_representations": [
            "±",
            "&plusmn;"
        ],
        "math_type_code": "<m:plusminus></m:plusminus>",
        "html_entity_name": "Plus Minus",
        "explanation": "Plus Minus."
    },
    {
        "symbol": "∓",
        "title": "Minus Plus",
        "latex_code": "\\mp",
        "html_entity": "&mnplus;",
        "unicode_escape_sequence": "\\u2213",
        "category": "Binary Operators",
        "unicode_code_point": "U+2213",
        "mathml_representation": "<mo>∓</mo>",
        "alternate_representations": [
            "∓",
            "&mnplus;"
        ],
        "math_type_code": "<m:minusplus></m:minusplus>",
        "html_entity_name": "Minus Plus",
        "explanation": "Minus Plus."
    },
    {
        "symbol": "∧",
        "title": "Logical And",
        "latex_code": "\\wedge",
        "html_entity": "&and;",
        "unicode_escape_sequence": "\\u2227",
        "category": "Binary Operators",
        "unicode_code_point": "U+2227",
        "mathml_representation": "<mo>∧</mo>",
        "alternate_representations": [
            "∧",
            "&and;"
        ],
        "math_type_code": "<m:logicaland></m:logicaland>",
        "html_entity_name": "Logical And",
         "explanation": "Logical conjunction; true if both operands are true."
    },
    {
        "symbol": "∨",
        "title": "Logical Or",
        "latex_code": "\\vee",
        "html_entity": "&or;",
        "unicode_escape_sequence": "\\u2228",
        "category": "Binary Operators",
        "unicode_code_point": "U+2228",
        "mathml_representation": "<mo>∨</mo>",
        "alternate_representations": [
            "∨",
            "&or;"
        ],
        "math_type_code": "<m:logicalor></m:logicalor>",
        "html_entity_name": "Logical Or",
         "explanation": "Logical disjunction; true if at least one operand is true."
    },
    {
        "symbol": "⊕",
        "title": "Circled Plus",
        "latex_code": "\\oplus",
        "html_entity": "&oplus;",
        "unicode_escape_sequence": "\\u2295",
        "category": "Binary Operators",
        "unicode_code_point": "U+2295",
        "mathml_representation": "<mo>⊕</mo>",
        "alternate_representations": [
            "⊕",
            "&oplus;"
        ],
        "math_type_code": "<m:circledplus></m:circledplus>",
        "html_entity_name": "Circled Plus",
        "explanation": "Represents direct sum or exclusive OR."
    },
    {
        "symbol": "⊗",
        "title": "Circled Times",
        "latex_code": "\\otimes",
        "html_entity": "&otimes;",
        "unicode_escape_sequence": "\\u2297",
        "category": "Binary Operators",
        "unicode_code_point": "U+2297",
        "mathml_representation": "<mo>⊗</mo>",
        "alternate_representations": [
            "⊗",
            "&otimes;"
        ],
        "math_type_code": "<m:circledtimes></m:circledtimes>",
        "html_entity_name": "Circled Times",
         "explanation": "Denotes tensor product."
    },
    {
        "symbol": "∙",
        "title": "Dot",
        "latex_code": "\\cdot",
        "html_entity": "&sdot;",
        "unicode_escape_sequence": "\\u2219",
        "category": "Binary Operators",
        "unicode_code_point": "U+2219",
        "mathml_representation": "<mo>∙</mo>",
        "alternate_representations": [
            "∙",
            "&sdot;"
        ],
        "math_type_code": "<m:dot></m:dot>",
        "html_entity_name": "Dot",
         "explanation": "Represents multiplication, especially scalar product."
    },
    {
        "symbol": "∝",
        "title": "Proportional To",
        "latex_code": "\\propto",
        "html_entity": "&prop;",
        "category": "Binary Operators",
        "unicode_code_point": "U+221D",
        "mathml_representation": "<mo>∝</mo>",
        "alternate_representations": [
            "∝",
            "&prop;"
        ],
        "math_type_code": "<m:proportionalto></m:proportionalto>",
        "html_entity_name": "Proportional To",
        "unicode_escape_sequence": "\\u221D",
        "explanation": "Indicates proportionality between two quantities."
    },
    {
        "symbol": "∘",
        "title": "Function Composition",
        "latex_code": "\\circ",
        "html_entity": "&compfn;",
        "category": "Binary Operators",
        "unicode_code_point": "U+2218",
        "mathml_representation": "<mo>∘</mo>",
        "alternate_representations": [
            "∘",
            "&compfn;"
        ],
        "math_type_code": "<m:functioncomposition></m:functioncomposition>",
        "html_entity_name": "Function Composition",
        "unicode_escape_sequence": "\\u2218",
         "explanation": "Denotes the composition of two functions."
    },
    {
        "symbol": "∙",
        "title": "Bullet Operator",
        "latex_code": "\\bullet",
        "html_entity": "&bull;",
        "category": "Binary Operators",
        "unicode_code_point": "U+2219",
        "mathml_representation": "<mo>∙</mo>",
        "alternate_representations": [
            "∙",
            "&bull;"
        ],
        "math_type_code": "<m:bulletoperator></m:bulletoperator>",
        "html_entity_name": "Bullet Operator",
        "unicode_escape_sequence": "\\u2219",
        "explanation": "Used for multiplication or as a list marker."
    },
    {
        "symbol": "∩",
        "title": "Intersection",
        "latex_code": "\\cap",
        "html_entity": "&cap;",
        "category": "Binary Operators",
        "unicode_code_point": "U+2229",
        "mathml_representation": "<mo>∩</mo>",
        "alternate_representations": [
            "∩",
            "&cap;"
        ],
        "math_type_code": "<m:intersection></m:intersection>",
        "html_entity_name": "Intersection",
        "unicode_escape_sequence": "\\u2229",
         "explanation": "Represents common elements of sets."
    },
    {
        "symbol": "∪",
        "title": "Union",
        "latex_code": "\\cup",
        "html_entity": "&cup;",
        "category": "Binary Operators",
        "unicode_code_point": "U+222A",
        "mathml_representation": "<mo>∪</mo>",
        "alternate_representations": [
            "∪",
            "&cup;"
        ],
        "math_type_code": "<m:union></m:union>",
        "html_entity_name": "Union",
        "unicode_escape_sequence": "\\u222A",
        "explanation": "Represents all elements from both sets."
    },
    {
        "symbol": "⊎",
        "title": "Multiset Union",
        "latex_code": "\\uplus",
        "html_entity": "&uplus;",
        "category": "Binary Operators",
        "unicode_code_point": "U+228E",
        "mathml_representation": "<mo>⊎</mo>",
        "alternate_representations": [
            "⊎",
            "&uplus;"
        ],
        "math_type_code": "<m:multisetunion></m:multisetunion>",
        "html_entity_name": "Multiset Union",
        "unicode_escape_sequence": "\\u228E",
         "explanation": "Union where elements' multiplicities are summed."
    },
    {
        "symbol": "⊓",
        "title": "Infimum",
        "latex_code": "\\inf",
        "html_entity": "&inf;",
        "category": "Binary Operators",
        "unicode_code_point": "U+2293",
        "mathml_representation": "<mo>⊓</mo>",
        "alternate_representations": [
            "⊓",
            "&inf;"
        ],
        "math_type_code": "<m:infimum></m:infimum>",
        "html_entity_name": "Infimum",
        "unicode_escape_sequence": "\\u2293",
        "explanation": "Greatest element less than or equal to all elements."
    },
    {
        "symbol": "⊔",
        "title": "Supremum",
        "latex_code": "\\sup",
        "html_entity": "&sup;",
        "category": "Binary Operators",
        "unicode_code_point": "U+2294",
        "mathml_representation": "<mo>⊔</mo>",
        "alternate_representations": [
            "⊔",
            "&sup;"
        ],
        "math_type_code": "<m:supremum></m:supremum>",
        "html_entity_name": "Supremum",
        "unicode_escape_sequence": "\\u2294",
        "explanation": "Least element greater than or equal to all elements."
    },
    {
        "symbol": "≮",
        "title": "Not Less Than",
        "latex_code": "\\nless",
        "html_entity": "&nlt;",
        "category": "Binary Operators",
        "unicode_code_point": "U+226E",
        "mathml_representation": "<mo>≮</mo>",
        "alternate_representations": [
            "≮",
            "&nlt;"
        ],
        "math_type_code": "<m:notlessthan></m:notlessthan>",
        "html_entity_name": "Not Less Than",
        "unicode_escape_sequence": "\\u226E",
        "explanation": "Indicates the left value is not less than the right."
    },
   
],
    "advanced_binary_operators": [
        {"symbol": "∔", "latex_code": "\\dotplus", "explanation": "Dot plus"},
        {"symbol": "∸", "latex_code": "\\dotminus", "explanation": "Dot minus"},
        {"symbol": "∖", "latex_code": "\\setminus", "explanation": "Set minus"},
        {"symbol": "⋒", "latex_code": "\\curlyvee", "explanation": "Curly logical or"},
        {"symbol": "⋓", "latex_code": "\\curlywedge", "explanation": "Curly logical and"},
        {"symbol": "⊟", "latex_code": "\\boxminus", "explanation": "Square image"},
        {"symbol": "⊠", "latex_code": "\\boxtimes", "explanation": "Square original"},
        {"symbol": "⊡", "latex_code": "\\boxdot", "explanation": "Squared dot operator"},
        {"symbol": "⊞", "latex_code": "\\boxplus", "explanation": "Squared plus"},
        {"symbol": "⋇", "latex_code": "\\divideontimes", "explanation": "Division times"},
        {"symbol": "⋉", "latex_code": "\\ltimes", "explanation": "Left normal factor semidirect product"},
        {"symbol": "⋊", "latex_code": "\\rtimes", "explanation": "Right normal factor semidirect product"},
        {"symbol": "⋋", "latex_code": "\\leftthreetimes", "explanation": "Left semidirect product"},
        {"symbol": "⋌", "latex_code": "\\rightthreetimes", "explanation": "Right semidirect product"},
        {"symbol": "⋏", "latex_code": "\\bigcap", "explanation": "N-ary intersection"},
        {"symbol": "⋎", "latex_code": "\\bigcup", "explanation": "N-ary union"},
        {"symbol": "⊝", "latex_code": "\\circleddash", "explanation": "Circled dash"},
        {"symbol": "⊺", "latex_code": "\\turnstile", "explanation": "Turnstile"},
        {"symbol": "⊕", "latex_code": "\\oplus", "explanation": "Direct sum / Circled plus"},
        {"symbol": "⊖", "latex_code": "\\ominus", "explanation": "Circled minus"},
        {"symbol": "⊗", "latex_code": "\\otimes", "explanation": "Tensor product / Circled times"},
        {"symbol": "⊘", "latex_code": "\\oslash", "explanation": "Circled division slash"},
        {"symbol": "⊙", "latex_code": "\\odot", "explanation": "Circled dot operator"},
        {"symbol": "⊛", "latex_code": "\\circledast", "explanation": "Circled star operator"},
        {"symbol": "⊚", "latex_code": "\\circledcirc", "explanation": "Circled ring operator"},
        {"symbol": "†", "latex_code": "\\dagger", "explanation": "Dagger"},
        {"symbol": "‡", "latex_code": "\\ddagger", "explanation": "Double dagger"},
        {"symbol": "⋆", "latex_code": "\\star", "explanation": "Star operator"},
        {"symbol": "⋄", "latex_code": "\\diamond", "explanation": "Diamond operator"},
        {"symbol": "≀", "latex_code": "\\wr", "explanation": "Wreath product"},
        {"symbol": "△", "latex_code": "\\triangle", "explanation": "Triangle / Delta"},
        {"symbol": "⋀", "latex_code": "\\bigwedge", "explanation": "N-ary logical and"},
        {"symbol": "⋁", "latex_code": "\\bigvee", "explanation": "N-ary logical or"},
        {"symbol": "⨀", "latex_code": "\\bigwedge", "explanation": "N-ary logical and"},
        {"symbol": "⨂", "latex_code": "\\bigotimes", "explanation": "N-ary times operator"},
        {"symbol": "⨁", "latex_code": "\\bigoplus", "explanation": "N-ary direct sum"},
        {"symbol": "⨅", "latex_code": "\\bigcap", "explanation": "N-ary coproduct"},
        {"symbol": "⨆", "latex_code": "\\bigcup", "explanation": "N-ary union operator"},
        {"symbol": "⨄", "latex_code": "\\biguplus", "explanation": "N-ary union plus"},
        {"symbol": "⨃", "latex_code": "\\bigcupplus", "explanation": "Union with a plus"},
        // {"symbol": "space", "latex_code": "\\bigcupplus", "explanation": "Space"},
        // {"symbol": "enter", "latex_code": "\\bigcupplus", "explanation": "Enter"},
        // {"symbol": "backspace", "latex_code": "\\bigcupplus", "explanation": "Backspace"},
        // {"symbol": "caps", "latex_code": "\\bigcupplus", "explanation": "CapsLock"},
        // {"symbol": "done", "latex_code": "\\bigcupplus", "explanation": "Close"}
    ],
    "geometry_symbols": [
        {"symbol": "∟", "latex_code": "\\rightangle", "explanation": "Right Angle"},
        {"symbol": "∠", "latex_code": "\\angle", "explanation": "Angle"},
        {"symbol": "∡", "latex_code": "\\measuredangle", "explanation": "Measured Angle"},
        {"symbol": "∢", "latex_code": "\\sphericalangle", "explanation": "Spherical Angle"},
        {"symbol": "⊾", "latex_code": "\\rightanglewitharc", "explanation": "Right Angle With Arc"},
        {"symbol": "⊿", "latex_code": "\\righttriangle", "explanation": "Right Triangle"},
        {"symbol": "⋕", "latex_code": "\\equalparallel", "explanation": "Equal and Parallel To"},
        {"symbol": "⊥", "latex_code": "\\perp", "explanation": "Perpendicular"},
        {"symbol": "∤", "latex_code": "\\nmid ", "explanation": "Undefined control sequence "},
        {"symbol": "∥", "latex_code": "\\parallel", "explanation": "Parallel"},
        {"symbol": "∦", "latex_code": "\\nparallel", "explanation": "Not Parallel To (another form)"},
        {"symbol": "∶", "latex_code": "\\ratio", "explanation": "Ratio"},
        {"symbol": "∷", "latex_code": "\\proportion", "explanation": "Proportion"},
        {"symbol": "∴", "latex_code": "\\therefore", "explanation": "Therefore"},
        {"symbol": "∵", "latex_code": "\\because", "explanation": "Because"},
        {"symbol": "∎", "latex_code": "\\blacksquare", "explanation": "End of Proof (Tombstone)"},
        
        
        {"symbol": "△", "latex_code": "\\triangle", "explanation": "Triangle"},
        {"symbol": "≅", "latex_code": "\\cong", "explanation": "Congruent (identical in form)"},
        {"symbol": "∼", "latex_code": "\\sim", "explanation": "Similar (same shape, different size)"},
        {"symbol": "○", "latex_code": "\\bigcirc", "explanation": "Circle"},
        {"symbol": "⊙", "latex_code": "\\odot", "explanation": "Circled dot (often represents a circle with a center point)"},
        {"symbol": "□", "latex_code": "\\square", "explanation": "Square"},
        {"symbol": "◇", "latex_code": "\\diamond", "explanation": "Diamond"},
        {"symbol": "▭", "latex_code": "\\rectangle", "explanation": "Rectangle"},
        {"symbol": "⬟", "latex_code": "\\pentagon", "explanation": "Pentagon"},
        {"symbol": "⬣", "latex_code": "\\hexagon", "explanation": "Hexagon"},
        {"symbol": "ω", "latex_code": "\\omega", "explanation": "Omega (often used to represent a specific angle in trigonometry)"},
        {"symbol": "Ω", "latex_code": "\\Omega", "explanation": "Ohm or Omega (can represent a large circle or completion)"},
        {"symbol": "α", "latex_code": "\\alpha", "explanation": "Alpha (often used to represent angles in triangles and circles)"},
        {"symbol": "β", "latex_code": "\\beta", "explanation": "Beta (also used for angles)"},
        {"symbol": "γ", "latex_code": "\\gamma", "explanation": "Gamma (often represents an angle or a specific point)"},


        // {"symbol": "space", "latex_code": "\\bigcupplus", "explanation": "Space"},
        // {"symbol": "enter", "latex_code": "\\bigcupplus", "explanation": "Enter"},
        // {"symbol": "backspace", "latex_code": "\\bigcupplus", "explanation": "Backspace"},
        // {"symbol": "done", "latex_code": "\\bigcupplus", "explanation": "Close"}

    ],
    "basic_n-ary_operators": [
        {"symbol": "∑", "latex_code": "\\sum", "explanation": "Summation symbol"},
        {"symbol": "∫", "latex_code": "\\int", "explanation": "Integral symbol"},
        {"symbol": "∬", "latex_code": "\\iint", "explanation": "Double integral symbol"},
        {"symbol": "∭", "latex_code": "\\iiint", "explanation": "Triple integral symbol"},
        {"symbol": "∮", "latex_code": "\\oint", "explanation": "Contour integral symbol"},
        {"symbol": "∯", "latex_code": "\\oiint", "explanation": "Surface integral symbol"},
        {"symbol": "∰", "latex_code": "\\oiiint", "explanation": "Volume integral symbol"},
        {"symbol": "∱", "latex_code": "\\varointclockwise", "explanation": "Clockwise integral"},
        {"symbol": "∲", "latex_code": "\\ointctrclockwise", "explanation": "Clockwise contour integral"},
        {"symbol": "∳", "latex_code": "\\varointctrclockwise", "explanation": "Counterclockwise contour integral"},
        {"symbol": "∏", "latex_code": "\\prod", "explanation": "Product symbol"},
        {"symbol": "∐", "latex_code": "\\coprod", "explanation": "Coproduct symbol"},
        {"symbol": "⋂", "latex_code": "\\bigcap", "explanation": "Intersection symbol"},
        {"symbol": "⋃", "latex_code": "\\bigcup", "explanation": "Union symbol"},
        {"symbol": "⋀", "latex_code": "\\bigwedge", "explanation": "Logical AND or N-ary logical conjunction"},
        {"symbol": "⋁", "latex_code": "\\bigvee", "explanation": "Logical OR or N-ary logical disjunction"},
        {"symbol": "⨀", "latex_code": "\\bigwedge", "explanation": "N-ary logical AND"},
        {"symbol": "⨂", "latex_code": "\\bigotimes", "explanation": "Tensor product"},
        {"symbol": "⨁", "latex_code": "\\bigoplus", "explanation": "Direct sum"},
        {"symbol": "⨄", "latex_code": "\\biguplus", "explanation": "Multiset sum"},
        {"symbol": "⨃", "latex_code": "\\bigcupplus", "explanation": "Union with a plus"},
       
    ],
    "math_letter_like_symbols": [
        {"symbol": "∀", "latex_code": "\\forall", "explanation": "For All (Universal Quantifier)"},
        {"symbol": "∁", "latex_code": "\\complement", "explanation": "Complement"},
        {"symbol": "ℂ", "latex_code": "\\mathbb{C}", "explanation": "Set of Complex Numbers"},
        {"symbol": "∂", "latex_code": "\\partial", "explanation": "Partial Differential"},
        {"symbol": "ð", "latex_code": "\\eth", "explanation": "Eth (Used in phonetic notations)"},
        {"symbol": "ℇ", "latex_code": "\\Euler", "explanation": "Euler's Number (Variant)"},
        {"symbol": "Ϝ", "latex_code": "\\digamma", "explanation": "Digamma (Greek letter)"},
        {"symbol": "Ⅎ", "latex_code": "\\Finv", "explanation": "Turned Capital F"},
        {"symbol": "ℊ", "latex_code": "\\gscript", "explanation": "Script Capital G (Used in Physics for conductance)"},
        {"symbol": "ℋ", "latex_code": "\\hPlanck", "explanation": "Planck Constant"},
        {"symbol": "ℌ", "latex_code": "\\hHilbert", "explanation": "Black-Letter Capital H (Hilbert Space)"},
        {"symbol": "ℎ", "latex_code": "\\hBar", "explanation": "Planck's Constant over Two Pi"},
        {"symbol": "ℏ", "latex_code": "\\hslash", "explanation": "Reduced Planck's Constant"},
        {"symbol": "℩", "latex_code": "\\imaginaryJ", "explanation": "Script Capital J"},
        {"symbol": "ı", "latex_code": "\\dotlessi", "explanation": "Dotless I"},
        {"symbol": "ℑ", "latex_code": "\\imaginary", "explanation": "Imaginary Part"},
        {"symbol": "j", "latex_code": "\\imaginaryJ", "explanation": "J, used as a unit imaginary number in electrical engineering"},
        {"symbol": "ϰ", "latex_code": "\\varkappa", "explanation": "Kappa Symbol (Greek letter)"},
        {"symbol": "ℒ", "latex_code": "\\lagrangian", "explanation": "Script Capital L (Lagrangian)"},
        {"symbol": "ℓ", "latex_code": "\\ell", "explanation": "Script Small L (Liter)"},
        {"symbol": "ℕ", "latex_code": "\\mathbb{N}", "explanation": "Set of Natural Numbers"},
        {"symbol": "℘", "latex_code": "\\wp", "explanation": "Weierstrass P (Power Set)"},
        {"symbol": "ℚ", "latex_code": "\\mathbb{Q}", "explanation": "Set of Rational Numbers"},
        {"symbol": "ℛ", "latex_code": "\\real", "explanation": "Script Capital R"},
        {"symbol": "ℜ", "latex_code": "\\realpart", "explanation": "Real Part"},
        {"symbol": "ℝ", "latex_code": "\\mathbb{R}", "explanation": "Set of Real Numbers"},
        {"symbol": "ℤ", "latex_code": "\\mathbb{Z}", "explanation": "Set of Integers"},
        {"symbol": "℧", "latex_code": "\\turnedOmega", "explanation": "Turned Omega"},
        {"symbol": "Å", "latex_code": "\\angstrom", "explanation": "Angstrom"},
        {"symbol": "ℬ", "latex_code": "\\Bbbk", "explanation": "Script Capital B"},
        {"symbol": "℮", "latex_code": "\\estimated", "explanation": "Estimated Symbol (Euro)"},
        {"symbol": "ℰ", "latex_code": "\\scriptE", "explanation": "Script Capital E"},
        {"symbol": "∃", "latex_code": "\\exists", "explanation": "There Exists (Existential Quantifier)"},
        {"symbol": "∄", "latex_code": "\\nexists", "explanation": "There Does Not Exist"},
        {"symbol": "ℱ", "latex_code": "\\scriptF", "explanation": "Script Capital F"},
        {"symbol": "ℳ", "latex_code": "\\scriptM", "explanation": "Script Capital M"},
        {"symbol": "ℴ", "latex_code": "\\scriptO", "explanation": "Script Small O"},
        {"symbol": "ℵ", "latex_code": "\\aleph", "explanation": "Aleph Number (Transfinite Numbers)"},
        {"symbol": "ℶ", "latex_code": "\\beth", "explanation": "Beth Number"},
        {"symbol": "ℷ", "latex_code": "\\gimel", "explanation": "Gimel Function"},
        {"symbol": "ℸ", "latex_code": "\\dalet", "explanation": "Dalet Symbol"},
       
    ],
    "relational_operators": [
        {"symbol": "=", "latex_code": "=", "explanation": "Equal to"},
        {"symbol": "≠", "latex_code": "\\neq", "explanation": "Not equal to"},
        {"symbol": "<", "latex_code": "<", "explanation": "Less than"},
        {"symbol": ">", "latex_code": ">", "explanation": "Greater than"},
        {"symbol": "≤", "latex_code": "\\le", "explanation": "Less than or equal to"},
        {"symbol": "≥", "latex_code": "\\ge", "explanation": "Greater than or equal to"},
        {"symbol": "≮", "latex_code": "\\nless", "explanation": "Not less than"},
        {"symbol": "≰", "latex_code": "\\nleq", "explanation": "Neither less than nor equal to"},
        {"symbol": "≯", "latex_code": "\\ngtr", "explanation": "Not greater than"},
        {"symbol": "≱", "latex_code": "\\ngeq", "explanation": "Neither greater than nor equal to"},
        {"symbol": "≡", "latex_code": "\\equiv", "explanation": "Identical to or congruent"},
        {"symbol": "∼", "latex_code": "\\sim", "explanation": "Tilde operator, often denotes similarity or equivalence"},
        {"symbol": "≃", "latex_code": "\\simeq", "explanation": "Asymptotically equal to"},
        {"symbol": "≈", "latex_code": "\\approx", "explanation": "Approximately equal to"},
        {"symbol": "≅", "latex_code": "\\cong", "explanation": "Approximately equal to or congruent"},
        {"symbol": "≢", "latex_code": "\\nequiv", "explanation": "Not identical to"},
        {"symbol": "≄", "latex_code": "\\nasymp", "explanation": "Not asymptotically equal to"},
        {"symbol": "≉", "latex_code": "\\napprox", "explanation": "Not approximately equal to"},
        {"symbol": "≇", "latex_code": "\\ncong", "explanation": "Neither approximately nor actually equal to"},
        {"symbol": "∝", "latex_code": "\\propto", "explanation": "Proportional to"},
        {"symbol": "≪", "latex_code": "\\ll", "explanation": "Much less than"},
        {"symbol": "≫", "latex_code": "\\gg", "explanation": "Much greater than"},
        {"symbol": "∈", "latex_code": "\\in", "explanation": "Element of"},
        {"symbol": "∋", "latex_code": "\\ni", "explanation": "Contains as a member"},
        {"symbol": "∉", "latex_code": "\\notin", "explanation": "Not an element of"},
        {"symbol": "⊂", "latex_code": "\\subset", "explanation": "Subset of"},
        {"symbol": "⊃", "latex_code": "\\supset", "explanation": "Superset of"},
        {"symbol": "⊆", "latex_code": "\\subseteq", "explanation": "Subset of or equal to"},
        {"symbol": "⊇", "latex_code": "\\supseteq", "explanation": "Superset of or equal to"},
        {"symbol": "≺", "latex_code": "\\prec", "explanation": "Precedes"},
        {"symbol": "≻", "latex_code": "\\succ", "explanation": "Succeeds"},
        {"symbol": "≼", "latex_code": "\\preceq", "explanation": "Precedes or equal to"},
        {"symbol": "≽", "latex_code": "\\succeq", "explanation": "Succeeds or equal to"},
        {"symbol": "⊏", "latex_code": "\\sqsubset", "explanation": "Subset of with not equal to"},
        {"symbol": "⊐", "latex_code": "\\sqsupset", "explanation": "Superset of with not equal to"},
        {"symbol": "⊑", "latex_code": "\\sqsubseteq", "explanation": "Square image of or equal to"},
        {"symbol": "⊒", "latex_code": "\\sqsupseteq", "explanation": "Square original of or equal to"},
        {"symbol": "∥", "latex_code": "\\parallel", "explanation": "Parallel to"},
        {"symbol": "⊥", "latex_code": "\\perp", "explanation": "Perpendicular to"},
        {"symbol": "⊢", "latex_code": "\\vdash", "explanation": "Proves, forces"},
        {"symbol": "⊣", "latex_code": "\\dashv", "explanation": "Double turnstile"},
        {"symbol": "⋈", "latex_code": "\\bowtie", "explanation": "Bowtie, join"},
        {"symbol": "≍", "latex_code": "\\asymp", "explanation": "Equiangular to"},
       
    ],
    "brackets": [
        {"symbol": "(", "latex_code": "\\left(", "explanation": "Left parenthesis"},
        {"symbol": ")", "latex_code": "\\right)", "explanation": "Right parenthesis"},
        {"symbol": "[", "latex_code": "\\left[", "explanation": "Left square bracket"},
        {"symbol": "]", "latex_code": "\\right]", "explanation": "Right square bracket"},
        {"symbol": "{", "latex_code": "\\left\\{", "explanation": "Left curly brace"},
        {"symbol": "}", "latex_code": "\\right\\}", "explanation": "Right curly brace"},
        {"symbol": "⟨", "latex_code": "\\left\\langle", "explanation": "Left angle bracket"},
        {"symbol": "⟩", "latex_code": "\\right\\rangle", "explanation": "Right angle bracket"},
        {"symbol": "|", "latex_code": "\\left|", "explanation": "Left vertical bar"},
        {"symbol": "|", "latex_code": "\\right|", "explanation": "Right vertical bar"},
        {"symbol": "⌈", "latex_code": "\\left\\lceil", "explanation": "Left ceiling bracket"},
        {"symbol": "⌉", "latex_code": "\\right\\rceil", "explanation": "Right ceiling bracket"},
        {"symbol": "⌊", "latex_code": "\\left\\lfloor", "explanation": "Left floor bracket"},
        {"symbol": "⌋", "latex_code": "\\right\\rfloor", "explanation": "Right floor bracket"},
        {"symbol": "‖", "latex_code": "\\left\\|", "explanation": "Left double vertical bar"},
        {"symbol": "‖", "latex_code": "\\right\\|", "explanation": "Right double vertical bar"},
        {"symbol": "⟦", "latex_code": "\\left\\llbracket", "explanation": "Left double bracket"},
        {"symbol": "⟧", "latex_code": "\\right\\rrbracket", "explanation": "Right double bracket"},
        
    ],
    "negation_symbols": [
        {"symbol": "≠", "latex_code": "\\neq", "explanation": "Not Equal To"},
        {"symbol": "≮", "latex_code": "\\nless", "explanation": "Not Less Than"},
        {"symbol": "≯", "latex_code": "\\ngtr", "explanation": "Not Greater Than"},
        {"symbol": "≰", "latex_code": "\\nleq", "explanation": "Neither Less Than Nor Equal To"},
        {"symbol": "≱", "latex_code": "\\ngeq", "explanation": "Neither Greater Than Nor Equal To"},
        {"symbol": "≢", "latex_code": "\\nequiv", "explanation": "Not Identical To"},
        {"symbol": "≁", "latex_code": "\\nsim", "explanation": "Not Tilde"},
        {"symbol": "≄", "latex_code": "\\nasymp", "explanation": "Not Asymptotically Equal To"},
        {"symbol": "≉", "latex_code": "\\napprox", "explanation": "Not Almost Equal To"},
        {"symbol": "≇", "latex_code": "\\ncong", "explanation": "Neither Approximately Nor Actually Equal To"},
        {"symbol": "≭", "latex_code": "\\nmid", "explanation": "Not Divides"},
        {"symbol": "≨", "latex_code": "\\lneq", "explanation": "Less Than But Not Equal To"},
        {"symbol": "≩", "latex_code": "\\gneq", "explanation": "Greater Than But Not Equal To"},
        {"symbol": "⊀", "latex_code": "\\nprec", "explanation": "Not Precedes"},
        {"symbol": "⊁", "latex_code": "\\nsucc", "explanation": "Not Succeeds"},
        {"symbol": "⋠", "latex_code": "\\npreceq", "explanation": "Does Not Precede Or Equal"},
        {"symbol": "⋡", "latex_code": "\\nsucceq", "explanation": "Does Not Succeed Or Equal"},
        {"symbol": "∉", "latex_code": "\\notin", "explanation": "Not An Element Of"},
        {"symbol": "∌", "latex_code": "\\notni", "explanation": "Does Not Contain As Member"},
        {"symbol": "⊄", "latex_code": "\\nsubset", "explanation": "Not A Subset Of"},
        {"symbol": "⊅", "latex_code": "\\nsupset", "explanation": "Not A Superset Of"},
        {"symbol": "⊈", "latex_code": "\\nsubseteq", "explanation": "Not A Subset Of Or Equal To"},
        {"symbol": "⊉", "latex_code": "\\nsupseteq", "explanation": "Not A Superset Of Or Equal To"},
        {"symbol": "⊊", "latex_code": "\\subsetneq", "explanation": "Subset Of With Not Equal To"},
        {"symbol": "⋢", "latex_code": "\\varsubsetneq", "explanation": "Subset Of With Not Equal To (variant)"},
        {"symbol": "⊋", "latex_code": "\\supsetneq", "explanation": "Superset Of With Not Equal To"},
        {"symbol": "⋣", "latex_code": "\\varsupsetneq", "explanation": "Superset Of With Not Equal To (variant)"},
        {"symbol": "⋦", "latex_code": "\\lnsim", "explanation": "Less Than But Not Equivalent To"},
        {"symbol": "⋧", "latex_code": "\\gnsim", "explanation": "Greater Than But Not Equivalent To"},
        {"symbol": "⋨", "latex_code": "\\precnsim", "explanation": "Precedes But Not Equivalent To"},
        {"symbol": "⋩", "latex_code": "\\succnsim", "explanation": "Succeeds But Not Equivalent To"},
        {"symbol": "⋪", "latex_code": "\\ntriangleleft", "explanation": "Not Normal Subgroup Of"},
        {"symbol": "⋫", "latex_code": "\\ntriangleright", "explanation": "Does Not Contain As Normal Subgroup"},
        {"symbol": "⋬", "latex_code": "\\ntrianglelefteq", "explanation": "Not Normal Subgroup Of Or Equal To"},
        {"symbol": "⋭", "latex_code": "\\ntrianglerighteq", "explanation": "Does Not Contain As Normal Subgroup Or Equal"},
        {"symbol": "∤", "latex_code": "\\nmid", "explanation": "Does Not Divide"},
        {"symbol": "∦", "latex_code": "\\nparallel", "explanation": "Not Parallel To"},
        {"symbol": "⊬", "latex_code": "\\nvdash", "explanation": "Does Not Prove"},
        {"symbol": "⊭", "latex_code": "\\nvDash", "explanation": "Not True"},
        {"symbol": "⊮", "latex_code": "\\nVdash", "explanation": "Does Not Force"},
        {"symbol": "⊯", "latex_code": "\\nVDash", "explanation": "Negated Double Vertical Bar Double Right Turnstile"},
        {"symbol": "∄", "latex_code": "\\nexists", "explanation": "There Does Not Exist"},
       
        
    ],
    
        "arrow_symbols": [
            {"symbol": "←", "latex_code": "\\leftarrow", "explanation": "Leftwards Arrow"},
            {"symbol": "→", "latex_code": "\\rightarrow", "explanation": "Rightwards Arrow"},
            {"symbol": "↑", "latex_code": "\\uparrow", "explanation": "Upwards Arrow"},
            {"symbol": "↓", "latex_code": "\\downarrow", "explanation": "Downwards Arrow"},
            {"symbol": "↔", "latex_code": "\\leftrightarrow", "explanation": "Left Right Arrow"},
            {"symbol": "↕", "latex_code": "\\updownarrow", "explanation": "Up Down Arrow"},
            {"symbol": "⇐", "latex_code": "\\Leftarrow", "explanation": "Leftwards Double Arrow"},
            {"symbol": "⇒", "latex_code": "\\Rightarrow", "explanation": "Rightwards Double Arrow"},
            {"symbol": "⇑", "latex_code": "\\Uparrow", "explanation": "Upwards Double Arrow"},
            {"symbol": "⇓", "latex_code": "\\Downarrow", "explanation": "Downwards Double Arrow"},
            {"symbol": "⇔", "latex_code": "\\Leftrightarrow", "explanation": "Left Right Double Arrow"},
            {"symbol": "⇕", "latex_code": "\\Updownarrow", "explanation": "Up Down Double Arrow"},
            {"symbol": "⟵", "latex_code": "\\longleftarrow", "explanation": "Long Leftwards Arrow"},
            {"symbol": "⟶", "latex_code": "\\longrightarrow", "explanation": "Long Rightwards Arrow"},
            {"symbol": "⟷", "latex_code": "\\longleftrightarrow", "explanation": "Long Left Right Arrow"},
            {"symbol": "⟸", "latex_code": "\\Longleftarrow", "explanation": "Long Leftwards Double Arrow"},
            {"symbol": "⟹", "latex_code": "\\Longrightarrow", "explanation": "Long Rightwards Double Arrow"},
            {"symbol": "⟺", "latex_code": "\\Longleftrightarrow", "explanation": "Long Left Right Double Arrow"},
            {"symbol": "↗", "latex_code": "\\nearrow", "explanation": "North East Arrow"},
            {"symbol": "↖", "latex_code": "\\nwarrow", "explanation": "North West Arrow"},
            {"symbol": "↘", "latex_code": "\\searrow", "explanation": "South East Arrow"},
            {"symbol": "↙", "latex_code": "\\swarrow", "explanation": "South West Arrow"},
            {"symbol": "↚", "latex_code": "\\nleftarrow", "explanation": "Leftwards Arrow with Stroke"},
            {"symbol": "↛", "latex_code": "\\nrightarrow", "explanation": "Rightwards Arrow with Stroke"},
            {"symbol": "↮", "latex_code": "\\nleftrightarrow", "explanation": "Left Right Arrow with Stroke"},
            {"symbol": "⇍", "latex_code": "\\nLeftarrow", "explanation": "Leftwards Double Arrow with Stroke"},
            {"symbol": "⇏", "latex_code": "\\nRightarrow", "explanation": "Rightwards Double Arrow with Stroke"},
            {"symbol": "⇎", "latex_code": "\\nLeftrightarrow", "explanation": "Left Right Double Arrow with Stroke"},
            {"symbol": "⇠", "latex_code": "\\dashleftarrow", "explanation": "Leftwards Dashed Arrow"},
            {"symbol": "⇢", "latex_code": "\\dashrightarrow", "explanation": "Rightwards Dashed Arrow"},
            {"symbol": "↤", "latex_code": "\\leftarrowtail", "explanation": "Leftwards Arrow from Bar"},
            {"symbol": "↦", "latex_code": "\\rightarrowtail", "explanation": "Rightwards Arrow from Bar"},
            {"symbol": "⟻", "latex_code": "\\rightsquigarrow", "explanation": "Long Rightwards Squiggle Arrow"},
            {"symbol": "⟼", "latex_code": "\\leadsto", "explanation": "Long Rightwards Double Squiggle Arrow"},
            {"symbol": "↩", "latex_code": "\\hookleftarrow", "explanation": "Leftwards Arrow with Hook"},
            {"symbol": "↪", "latex_code": "\\hookrightarrow", "explanation": "Rightwards Arrow with Hook"},
            {"symbol": "↼", "latex_code": "\\leftharpoonup", "explanation": "Leftwards Harpoon with Barb Upwards"},
            {"symbol": "↽", "latex_code": "\\leftharpoondown", "explanation": "Leftwards Harpoon with Barb Downwards"},
            {"symbol": "⇀", "latex_code": "\\rightharpoonup", "explanation": "Rightwards Harpoon with Barb Upwards"},
            {"symbol": "⇁", "latex_code": "\\rightharpoondown", "explanation": "Rightwards Harpoon with Barb Downwards"},
            {"symbol": "↿", "latex_code": "\\upharpoonleft", "explanation": "Upwards Harpoon with Barb Leftwards"},
            {"symbol": "↾", "latex_code": "\\upharpoonright", "explanation": "Upwards Harpoon with Barb Rightwards"},
            {"symbol": "⇃", "latex_code": "\\downharpoonleft", "explanation": "Downwards Harpoon with Barb Leftwards"},
            {"symbol": "⇂", "latex_code": "\\downharpoonright", "explanation": "Downwards Harpoon with Barb Rightwards"},
            {"symbol": "⇋", "latex_code": "\\leftrightharpoons", "explanation": "Leftwards Harpoon Over Rightwards Harpoon"},
            {"symbol": "⇌", "latex_code": "\\rightleftharpoons", "explanation": "Rightwards Harpoon Over Leftwards Harpoon"},
            {"symbol": "⇇", "latex_code": "\\leftleftarrows", "explanation": "Leftwards Paired Arrows"},
            {"symbol": "⇉", "latex_code": "\\rightrightarrows", "explanation": "Rightwards Paired Arrows"},
            {"symbol": "⇈", "latex_code": "\\upuparrows", "explanation": "Upwards Paired Arrows"},
            {"symbol": "⇊", "latex_code": "\\downdownarrows", "explanation": "Downwards Paired Arrows"},
            {"symbol": "⇆", "latex_code": "\\leftrightarrows", "explanation": "Leftwards Arrow Over Rightwards Arrow"},
            {"symbol": "⇄", "latex_code": "\\rightleftarrows", "explanation": "Rightwards Arrow Over Leftwards Arrow"},
            {"symbol": "↫", "latex_code": "\\looparrowleft", "explanation": "Leftwards Arrow with Loop"},
            {"symbol": "↬", "latex_code": "\\looparrowright", "explanation": "Rightwards Arrow with Loop"},
            {"symbol": "↢", "latex_code": "\\Lsh", "explanation": "Leftwards Arrow with Tail"},
            {"symbol": "↣", "latex_code": "\\Rsh", "explanation": "Rightwards Arrow with Tail"},
            {"symbol": "↰", "latex_code": "\\upharpoonleft", "explanation": "Upwards Arrow with Tip Leftwards"},
            {"symbol": "↱", "latex_code": "\\upharpoonright", "explanation": "Upwards Arrow with Tip Rightwards"},
            {"symbol": "↲", "latex_code": "\\downharpoonleft", "explanation": "Downwards Arrow with Tip Leftwards"},
            {"symbol": "↳", "latex_code": "\\downharpoonright", "explanation": "Downwards Arrow with Tip Rightwards"},
            {"symbol": "⇚", "latex_code": "\\Lleftarrow", "explanation": "Leftwards Triple Arrow"},
            {"symbol": "⇛", "latex_code": "\\Rrightarrow", "explanation": "Rightwards Triple Arrow"},
            {"symbol": "↞", "latex_code": "\\twoheadleftarrow", "explanation": "Two Headed Leftwards Arrow"},
            {"symbol": "↠", "latex_code": "\\twoheadrightarrow", "explanation": "Two Headed Rightwards Arrow"},
            {"symbol": "↶", "latex_code": "\\curvearrowleft", "explanation": "Anticlockwise Top Semicircle Arrow"},
            {"symbol": "↷", "latex_code": "\\curvearrowright", "explanation": "Clockwise Top Semicircle Arrow"},
            {"symbol": "↺", "latex_code": "\\circlearrowleft", "explanation": "Anticlockwise Open Circle Arrow"},
            {"symbol": "↻", "latex_code": "\\circlearrowright", "explanation": "Clockwise Open Circle Arrow"},
            {"symbol": "⊸", "latex_code": "\\multimap", "explanation": "Circled Dash with Arrow"},
            {"symbol": "↭", "latex_code": "\\leftrightsquigarrow", "explanation": "Left Right Wave Arrow"},
            {"symbol": "↜", "latex_code": "\\leftsquigarrow", "explanation": "Leftwards Wave Arrow"},
            {"symbol": "↝", "latex_code": "\\rightsquigarrow", "explanation": "Rightwards Wave Arrow"},
            {"symbol": "⇜", "latex_code": "\\leftsquigarrow", "explanation": "Leftwards Squiggle Arrow"},
       
        ],
        "greek_letters": [
            {
                "symbol": "α",
                "title": "alpha",
                "latex_code": "\\alpha",
                "html_entity": "&alpha;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B1",
                "mathml_representation": "<mi>α</mi>",
                "alternate_representations": ["α", "α"],
                "math_type_code": "<m:alpha></m:alpha>",
                "html_entity_name": "alpha"
            },
            {
                "symbol": "β",
                "title": "beta",
                "latex_code": "\\beta",
                "html_entity": "&beta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B2",
                "mathml_representation": "<mi>β</mi>",
                "alternate_representations": ["β", "β"],
                "math_type_code": "<m:beta></m:beta>",
                "html_entity_name": "beta"
            },
            {
                "symbol": "γ",
                "title": "gamma",
                "latex_code": "\\gamma",
                "html_entity": "&gamma;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B3",
                "mathml_representation": "<mi>γ</mi>",
                "alternate_representations": ["γ", "γ"],
                "math_type_code": "<m:gamma></m:gamma>",
                "html_entity_name": "gamma"
            },
            {
                "symbol": "δ",
                "title": "delta",
                "latex_code": "\\delta",
                "html_entity": "&delta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B4",
                "mathml_representation": "<mi>δ</mi>",
                "alternate_representations": ["δ", "δ"],
                "math_type_code": "<m:delta></m:delta>",
                "html_entity_name": "delta"
            },
            {
                "symbol": "ε",
                "title": "epsilon",
                "latex_code": "\\epsilon",
                "html_entity": "&epsilon;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B5",
                "mathml_representation": "<mi>ε</mi>",
                "alternate_representations": ["ε", "ε"],
                "math_type_code": "<m:epsilon></m:epsilon>",
                "html_entity_name": "epsilon"
            },
            {
                "symbol": "ζ",
                "title": "zeta",
                "latex_code": "\\zeta",
                "html_entity": "&zeta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B6",
                "mathml_representation": "<mi>ζ</mi>",
                "alternate_representations": ["ζ", "ζ"],
                "math_type_code": "<m:zeta></m:zeta>",
                "html_entity_name": "zeta"
            },
            {
                "symbol": "η",
                "title": "eta",
                "latex_code": "\\eta",
                "html_entity": "&eta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B7",
                "mathml_representation": "<mi>η</mi>",
                "alternate_representations": ["η", "η"],
                "math_type_code": "<m:eta></m:eta>",
                "html_entity_name": "eta"
            },
            {
                "symbol": "θ",
                "title": "theta",
                "latex_code": "\\theta",
                "html_entity": "&theta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B8",
                "mathml_representation": "<mi>θ</mi>",
                "alternate_representations": ["θ", "θ"],
                "math_type_code": "<m:theta></m:theta>",
                "html_entity_name": "theta"
            },
            {
                "symbol": "ι",
                "title": "iota",
                "latex_code": "\\iota",
                "html_entity": "&iota;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03B9",
                "mathml_representation": "<mi>ι</mi>",
                "alternate_representations": ["ι", "ι"],
                "math_type_code": "<m:iota></m:iota>",
                "html_entity_name": "iota"
            },
            {
                "symbol": "κ",
                "title": "kappa",
                "latex_code": "\\kappa",
                "html_entity": "&kappa;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03BA",
                "mathml_representation": "<mi>κ</mi>",
                "alternate_representations": ["κ", "κ"],
                "math_type_code": "<m:kappa></m:kappa>",
                "html_entity_name": "kappa"
            },
            {
                "symbol": "λ",
                "title": "lambda",
                "latex_code": "\\lambda",
                "html_entity": "&lambda;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03BB",
                "mathml_representation": "<mi>λ</mi>",
                "alternate_representations": ["λ", "λ"],
                "math_type_code": "<m:lambda></m:lambda>",
                "html_entity_name": "lambda"
            },
            {
                "symbol": "μ",
                "title": "mu",
                "latex_code": "\\mu",
                "html_entity": "&mu;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03BC",
                "mathml_representation": "<mi>μ</mi>",
                "alternate_representations": ["μ", "μ"],
                "math_type_code": "<m:mu></m:mu>",
                "html_entity_name": "mu"
            },
            {
                "symbol": "ν",
                "title": "nu",
                "latex_code": "\\nu",
                "html_entity": "&nu;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03BD",
                "mathml_representation": "<mi>ν</mi>",
                "alternate_representations": ["ν", "ν"],
                "math_type_code": "<m:nu></m:nu>",
                "html_entity_name": "nu"
            },
            {
                "symbol": "ξ",
                "title": "xi",
                "latex_code": "\\xi",
                "html_entity": "&xi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03BE",
                "mathml_representation": "<mi>ξ</mi>",
                "alternate_representations": ["ξ", "ξ"],
                "math_type_code": "<m:xi></m:xi>",
                "html_entity_name": "xi"
            },
            {
                "symbol": "ο",
                "title": "omicron",
                "latex_code": "o",
                "html_entity": "&omicron;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03BF",
                "mathml_representation": "<mi>o</mi>",
                "alternate_representations": ["o", "o"],
                "math_type_code": "<m:omicron></m:omicron>",
                "html_entity_name": "omicron"
            },
            {
                "symbol": "π",
                "title": "pi",
                "latex_code": "\\pi",
                "html_entity": "&pi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C0",
                "mathml_representation": "<mi>π</mi>",
                "alternate_representations": ["π", "π"],
                "math_type_code": "<m:pi></m:pi>",
                "html_entity_name": "pi"
            },
            {
                "symbol": "ρ",
                "title": "rho",
                "latex_code": "\\rho",
                "html_entity": "&rho;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C1",
                "mathml_representation": "<mi>ρ</mi>",
                "alternate_representations": ["ρ", "ρ"],
                "math_type_code": "<m:rho></m:rho>",
                "html_entity_name": "rho"
            },
            {
                "symbol": "σ",
                "title": "sigma",
                "latex_code": "\\sigma",
                "html_entity": "&sigma;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C3",
                "mathml_representation": "<mi>σ</mi>",
                "alternate_representations": ["σ", "σ"],
                "math_type_code": "<m:sigma></m:sigma>",
                "html_entity_name": "sigma"
            },
            {
                "symbol": "τ",
                "title": "tau",
                "latex_code": "\\tau",
                "html_entity": "&tau;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C4",
                "mathml_representation": "<mi>τ</mi>",
                "alternate_representations": ["τ", "τ"],
                "math_type_code": "<m:tau></m:tau>",
                "html_entity_name": "tau"
            },
            {
                "symbol": "υ",
                "title": "upsilon",
                "latex_code": "\\upsilon",
                "html_entity": "&upsilon;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C5",
                "mathml_representation": "<mi>υ</mi>",
                "alternate_representations": ["υ", "υ"],
                "math_type_code": "<m:upsilon></m:upsilon>",
                "html_entity_name": "upsilon"
            },
            {
                "symbol": "φ",
                "title": "phi",
                "latex_code": "\\phi",
                "html_entity": "&phi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C6",
                "mathml_representation": "<mi>φ</mi>",
                "alternate_representations": ["φ", "φ"],
                "math_type_code": "<m:phi></m:phi>",
                "html_entity_name": "phi"
            },
            {
                "symbol": "χ",
                "title": "chi",
                "latex_code": "\\chi",
                "html_entity": "&chi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C7",
                "mathml_representation": "<mi>χ</mi>",
                "alternate_representations": ["χ", "χ"],
                "math_type_code": "<m:chi></m:chi>",
                "html_entity_name": "chi"
            },
            {
                "symbol": "ψ",
                "title": "psi",
                "latex_code": "\\psi",
                "html_entity": "&psi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C8",
                "mathml_representation": "<mi>ψ</mi>",
                "alternate_representations": ["ψ", "ψ"],
                "math_type_code": "<m:psi></m:psi>",
                "html_entity_name": "psi"
            },
            {
                "symbol": "ω",
                "title": "omega",
                "latex_code": "\\omega",
                "html_entity": "&omega;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03C9",
                "mathml_representation": "<mi>ω</mi>",
                "alternate_representations": ["ω", "ω"],
                "math_type_code": "<m:omega></m:omega>",
                "html_entity_name": "omega"
            },
            {
                "symbol": "Α",
                "title": "Alpha",
                "latex_code": "\\Alpha",
                "html_entity": "&Alpha;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0391",
                "mathml_representation": "<mi>Α</mi>",
                "alternate_representations": ["Α", "Α"],
                "math_type_code": "<m:Alpha></m:Alpha>",
                "html_entity_name": "Alpha"
            },
            {
                "symbol": "Β",
                "title": "Beta",
                "latex_code": "\\Beta",
                "html_entity": "&Beta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0392",
                "mathml_representation": "<mi>Β</mi>",
                "alternate_representations": ["Β", "Β"],
                "math_type_code": "<m:Beta></m:Beta>",
                "html_entity_name": "Beta"
            },
            {
                "symbol": "Γ",
                "title": "Gamma",
                "latex_code": "\\Gamma",
                "html_entity": "&Gamma;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0393",
                "mathml_representation": "<mi>Γ</mi>",
                "alternate_representations": ["Γ", "Γ"],
                "math_type_code": "<m:Gamma></m:Gamma>",
                "html_entity_name": "Gamma"
            },
            {
                "symbol": "Δ",
                "title": "Delta",
                "latex_code": "\\Delta",
                "html_entity": "&Delta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0394",
                "mathml_representation": "<mi>Δ</mi>",
                "alternate_representations": ["Δ", "Δ"],
                "math_type_code": "<m:Delta></m:Delta>",
                "html_entity_name": "Delta"
            },
            {
                "symbol": "Ε",
                "title": "Epsilon",
                "latex_code": "\\Epsilon",
                "html_entity": "&Epsilon;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0395",
                "mathml_representation": "<mi>Ε</mi>",
                "alternate_representations": ["Ε", "Ε"],
                "math_type_code": "<m:Epsilon></m:Epsilon>",
                "html_entity_name": "Epsilon"
            },
            {
                "symbol": "Ζ",
                "title": "Zeta",
                "latex_code": "\\Zeta",
                "html_entity": "&Zeta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0396",
                "mathml_representation": "<mi>Ζ</mi>",
                "alternate_representations": ["Ζ", "Ζ"],
                "math_type_code": "<m:Zeta></m:Zeta>",
                "html_entity_name": "Zeta"
            },
            {
                "symbol": "Η",
                "title": "Eta",
                "latex_code": "\\Eta",
                "html_entity": "&Eta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0397",
                "mathml_representation": "<mi>Η</mi>",
                "alternate_representations": ["Η", "Η"],
                "math_type_code": "<m:Eta></m:Eta>",
                "html_entity_name": "Eta"
            },
            {
                "symbol": "Θ",
                "title": "Theta",
                "latex_code": "\\Theta",
                "html_entity": "&Theta;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0398",
                "mathml_representation": "<mi>Θ</mi>",
                "alternate_representations": ["Θ", "Θ"],
                "math_type_code": "<m:Theta></m:Theta>",
                "html_entity_name": "Theta"
            },
            {
                "symbol": "Ι",
                "title": "Iota",
                "latex_code": "\\Iota",
                "html_entity": "&Iota;",
                "category": "Greek Letters",
                "unicode_code_point": "U+0399",
                "mathml_representation": "<mi>Ι</mi>",
                "alternate_representations": ["Ι", "Ι"],
                "math_type_code": "<m:Iota></m:Iota>",
                "html_entity_name": "Iota"
            },
            {
                "symbol": "Κ",
                "title": "Kappa",
                "latex_code": "\\Kappa",
                "html_entity": "&Kappa;",
                "category": "Greek Letters",
                "unicode_code_point": "U+039A",
                "mathml_representation": "<mi>Κ</mi>",
                "alternate_representations": ["Κ", "Κ"],
                "math_type_code": "<m:Kappa></m:Kappa>",
                "html_entity_name": "Kappa"
            },
            {
                "symbol": "Λ",
                "title": "Lambda",
                "latex_code": "\\Lambda",
                "html_entity": "&Lambda;",
                "category": "Greek Letters",
                "unicode_code_point": "U+039B",
                "mathml_representation": "<mi>Λ</mi>",
                "alternate_representations": ["Λ", "Λ"],
                "math_type_code": "<m:Lambda></m:Lambda>",
                "html_entity_name": "Lambda"
            },
            {
                "symbol": "Μ",
                "title": "Mu",
                "latex_code": "\\Mu",
                "html_entity": "&Mu;",
                "category": "Greek Letters",
                "unicode_code_point": "U+039C",
                "mathml_representation": "<mi>Μ</mi>",
                "alternate_representations": ["Μ", "Μ"],
                "math_type_code": "<m:Mu></m:Mu>",
                "html_entity_name": "Mu"
            },
            {
                "symbol": "Ν",
                "title": "Nu",
                "latex_code": "\\Nu",
                "html_entity": "&Nu;",
                "category": "Greek Letters",
                "unicode_code_point": "U+039D",
                "mathml_representation": "<mi>Ν</mi>",
                "alternate_representations": ["Ν", "Ν"],
                "math_type_code": "<m:Nu></m:Nu>",
                "html_entity_name": "Nu"
            },
            {
                "symbol": "Ξ",
                "title": "Xi",
                "latex_code": "\\Xi",
                "html_entity": "&Xi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+039E",
                "mathml_representation": "<mi>Ξ</mi>",
                "alternate_representations": ["Ξ", "Ξ"],
                "math_type_code": "<m:Xi></m:Xi>",
                "html_entity_name": "Xi"
            },
            {
                "symbol": "Ο",
                "title": "Omicron",
                "latex_code": "\\Omicron",
                "html_entity": "&Omicron;",
                "category": "Greek Letters",
                "unicode_code_point": "U+039F",
                "mathml_representation": "<mi>Ο</mi>",
                "alternate_representations": ["Ο", "Ο"],
                "math_type_code": "<m:Omicron></m:Omicron>",
                "html_entity_name": "Omicron"
            },
            {
                "symbol": "Π",
                "title": "Pi",
                "latex_code": "\\Pi",
                "html_entity": "&Pi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A0",
                "mathml_representation": "<mi>Π</mi>",
                "alternate_representations": ["Π", "Π"],
                "math_type_code": "<m:Pi></m:Pi>",
                "html_entity_name": "Pi"
            },
            {
                "symbol": "Ρ",
                "title": "Rho",
                "latex_code": "\\Rho",
                "html_entity": "&Rho;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A1",
                "mathml_representation": "<mi>Ρ</mi>",
                "alternate_representations": ["Ρ", "Ρ"],
                "math_type_code": "<m:Rho></m:Rho>",
                "html_entity_name": "Rho"
            },
            {
                "symbol": "Σ",
                "title": "Sigma",
                "latex_code": "\\Sigma",
                "html_entity": "&Sigma;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A3",
                "mathml_representation": "<mi>Σ</mi>",
                "alternate_representations": ["Σ", "Σ"],
                "math_type_code": "<m:Sigma></m:Sigma>",
                "html_entity_name": "Sigma"
            },
            {
                "symbol": "Τ",
                "title": "Tau",
                "latex_code": "\\Tau",
                "html_entity": "&Tau;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A4",
                "mathml_representation": "<mi>Τ</mi>",
                "alternate_representations": ["Τ", "Τ"],
                "math_type_code": "<m:Tau></m:Tau>",
                "html_entity_name": "Tau"
            },
            {
                "symbol": "Υ",
                "title": "Upsilon",
                "latex_code": "\\Upsilon",
                "html_entity": "&Upsilon;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A5",
                "mathml_representation": "<mi>Υ</mi>",
                "alternate_representations": ["Υ", "Υ"],
                "math_type_code": "<m:Upsilon></m:Upsilon>",
                "html_entity_name": "Upsilon"
            },
            {
                "symbol": "Φ",
                "title": "Phi",
                "latex_code": "\\Phi",
                "html_entity": "&Phi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A6",
                "mathml_representation": "<mi>Φ</mi>",
                "alternate_representations": ["Φ", "Φ"],
                "math_type_code": "<m:Phi></m:Phi>",
                "html_entity_name": "Phi"
            },
            {
                "symbol": "Χ",
                "title": "Chi",
                "latex_code": "\\Chi",
                "html_entity": "&Chi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A7",
                "mathml_representation": "<mi>Χ</mi>",
                "alternate_representations": ["Χ", "Χ"],
                "math_type_code": "<m:Chi></m:Chi>",
                "html_entity_name": "Chi"
           },
           {
                "symbol": "Ψ",
                "title": "Psi",
                "latex_code": "\\Psi",
                "html_entity": "&Psi;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A8",
                "mathml_representation": "<mi>Ψ</mi>",
                "alternate_representations": ["Ψ", "Ψ"],
                "math_type_code": "<m:Psi></m:Psi>",
                "html_entity_name": "Psi"
            },
            {
                "symbol": "Ω",
                "title": "Omega",
                "latex_code": "\\Omega",
                "html_entity": "&Omega;",
                "category": "Greek Letters",
                "unicode_code_point": "U+03A9",
                "mathml_representation": "<mi>Ω</mi>",
                "alternate_representations": ["Ω", "Ω"],
                "math_type_code": "<m:Omega></m:Omega>",
                "html_entity_name": "Omega"
    }
            ,
        
            
        ],
        "latin_letters":[
            
                {
                    "symbol": "a",
                    "title": "a",
                    "latex_code": "\\a",
                    "html_entity": "&a;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0061",
                    "mathml_representation": "<mi>a</mi>",
                    "alternate_representations": [
                        "a",
                        "a"
                    ],
                    "math_type_code": "<m:a></m:a>",
                    "html_entity_name": "A"
                },
                {
                    "symbol": "b",
                    "title": "b",
                    "latex_code": "\\b",
                    "html_entity": "&b;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0062",
                    "mathml_representation": "<mi>b</mi>",
                    "alternate_representations": [
                        "b",
                        "b"
                    ],
                    "math_type_code": "<m:b></m:b>",
                    "html_entity_name": "B"
                },
                {
                    "symbol": "c",
                    "title": "c",
                    "latex_code": "\\c",
                    "html_entity": "&c;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0063",
                    "mathml_representation": "<mi>c</mi>",
                    "alternate_representations": [
                        "c",
                        "c"
                    ],
                    "math_type_code": "<m:c></m:c>",
                    "html_entity_name": "C"
                },
                {
                    "symbol": "d",
                    "title": "d",
                    "latex_code": "\\d",
                    "html_entity": "&d;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0064",
                    "mathml_representation": "<mi>d</mi>",
                    "alternate_representations": [
                        "d",
                        "d"
                    ],
                    "math_type_code": "<m:d></m:d>",
                    "html_entity_name": "D"
                },
                {
                    "symbol": "e",
                    "title": "e",
                    "latex_code": "\\e",
                    "html_entity": "&e;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0065",
                    "mathml_representation": "<mi>e</mi>",
                    "alternate_representations": [
                        "e",
                        "e"
                    ],
                    "math_type_code": "<m:e></m:e>",
                    "html_entity_name": "E"
                },
                {
                    "symbol": "f",
                    "title": "f",
                    "latex_code": "\\f",
                    "html_entity": "&f;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0066",
                    "mathml_representation": "<mi>f</mi>",
                    "alternate_representations": [
                        "f",
                        "f"
                    ],
                    "math_type_code": "<m:f></m:f>",
                    "html_entity_name": "F"
                },
                {
                    "symbol": "g",
                    "title": "g",
                    "latex_code": "\\g",
                    "html_entity": "&g;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0067",
                    "mathml_representation": "<mi>g</mi>",
                    "alternate_representations": [
                        "g",
                        "g"
                    ],
                    "math_type_code": "<m:g></m:g>",
                    "html_entity_name": "G"
                },
                {
                    "symbol": "h",
                    "title": "h",
                    "latex_code": "\\h",
                    "html_entity": "&h;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0068",
                    "mathml_representation": "<mi>h</mi>",
                    "alternate_representations": [
                        "h",
                        "h"
                    ],
                    "math_type_code": "<m:h></m:h>",
                    "html_entity_name": "H"
                },
                {
                    "symbol": "i",
                    "title": "i",
                    "latex_code": "\\i",
                    "html_entity": "&i;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0069",
                    "mathml_representation": "<mi>i</mi>",
                    "alternate_representations": [
                        "i",
                        "i"
                    ],
                    "math_type_code": "<m:i></m:i>",
                    "html_entity_name": "I"
                },
                {
                    "symbol": "j",
                    "title": "j",
                    "latex_code": "\\j",
                    "html_entity": "&j;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+006A",
                    "mathml_representation": "<mi>j</mi>",
                    "alternate_representations": [
                        "j",
                        "j"
                    ],
                    "math_type_code": "<m:j></m:j>",
                    "html_entity_name": "J"
                },
                {
                    "symbol": "k",
                    "title": "k",
                    "latex_code": "\\k",
                    "html_entity": "&k;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+006B",
                    "mathml_representation": "<mi>k</mi>",
                    "alternate_representations": [
                        "k",
                        "k"
                    ],
                    "math_type_code": "<m:k></m:k>",
                    "html_entity_name": "K"
                },
                {
                    "symbol": "l",
                    "title": "l",
                    "latex_code": "\\l",
                    "html_entity": "&l;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+006C",
                    "mathml_representation": "<mi>l</mi>",
                    "alternate_representations": [
                        "l",
                        "l"
                    ],
                    "math_type_code": "<m:l></m:l>",
                    "html_entity_name": "L"
                },
                {
                    "symbol": "m",
                    "title": "m",
                    "latex_code": "\\m",
                    "html_entity": "&m;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+006D",
                    "mathml_representation": "<mi>m</mi>",
                    "alternate_representations": [
                        "m",
                        "m"
                    ],
                    "math_type_code": "<m:m></m:m>",
                    "html_entity_name": "M"
                },
                {
                    "symbol": "n",
                    "title": "n",
                    "latex_code": "\\n",
                    "html_entity": "&n;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+006E",
                    "mathml_representation": "<mi>n</mi>",
                    "alternate_representations": [
                        "n",
                        "n"
                    ],
                    "math_type_code": "<m:n></m:n>",
                    "html_entity_name": "N"
                },
                {
                    "symbol": "o",
                    "title": "o",
                    "latex_code": "\\o",
                    "html_entity": "&o;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+006F",
                    "mathml_representation": "<mi>o</mi>",
                    "alternate_representations": [
                        "o",
                        "o"
                    ],
                    "math_type_code": "<m:o></m:o>",
                    "html_entity_name": "O"
                },
                {
                    "symbol": "p",
                    "title": "p",
                    "latex_code": "\\p",
                    "html_entity": "&p;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0070",
                    "mathml_representation": "<mi>p</mi>",
                    "alternate_representations": [
                        "p",
                        "p"
                    ],
                    "math_type_code": "<m:p></m:p>",
                    "html_entity_name": "P"
                },
                {
                    "symbol": "q",
                    "title": "q",
                    "latex_code": "\\q",
                    "html_entity": "&q;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0071",
                    "mathml_representation": "<mi>q</mi>",
                    "alternate_representations": [
                        "q",
                        "q"
                    ],
                    "math_type_code": "<m:q></m:q>",
                    "html_entity_name": "Q"
                },
                {
                    "symbol": "r",
                    "title": "r",
                    "latex_code": "\\r",
                    "html_entity": "&r;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0072",
                    "mathml_representation": "<mi>r</mi>",
                    "alternate_representations": [
                        "r",
                        "r"
                    ],
                    "math_type_code": "<m:r></m:r>",
                    "html_entity_name": "R"
                },
                {
                    "symbol": "s",
                    "title": "s",
                    "latex_code": "\\s",
                    "html_entity": "&s;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0073",
                    "mathml_representation": "<mi>s</mi>",
                    "alternate_representations": [
                        "s",
                        "s"
                    ],
                    "math_type_code": "<m:s></m:s>",
                    "html_entity_name": "S"
                },
                {
                    "symbol": "t",
                    "title": "t",
                    "latex_code": "\\t",
                    "html_entity": "&t;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0074",
                    "mathml_representation": "<mi>t</mi>",
                    "alternate_representations": [
                        "t",
                        "t"
                    ],
                    "math_type_code": "<m:t></m:t>",
                    "html_entity_name": "T"
                },
                {
                    "symbol": "u",
                    "title": "u",
                    "latex_code": "\\u",
                    "html_entity": "&u;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0075",
                    "mathml_representation": "<mi>u</mi>",
                    "alternate_representations": [
                        "u",
                        "u"
                    ],
                    "math_type_code": "<m:u></m:u>",
                    "html_entity_name": "U"
                },
                {
                    "symbol": "v",
                    "title": "v",
                    "latex_code": "\\v",
                    "html_entity": "&v;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0076",
                    "mathml_representation": "<mi>v</mi>",
                    "alternate_representations": [
                        "v",
                        "v"
                    ],
                    "math_type_code": "<m:v></m:v>",
                    "html_entity_name": "V"
                },
                {
                    "symbol": "w",
                    "title": "w",
                    "latex_code": "\\w",
                    "html_entity": "&w;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0077",
                    "mathml_representation": "<mi>w</mi>",
                    "alternate_representations": [
                        "w",
                        "w"
                    ],
                    "math_type_code": "<m:w></m:w>",
                    "html_entity_name": "W"
                },
                {
                    "symbol": "x",
                    "title": "x",
                    "latex_code": "\\x",
                    "html_entity": "&x;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0078",
                    "mathml_representation": "<mi>x</mi>",
                    "alternate_representations": [
                        "x",
                        "x"
                    ],
                    "math_type_code": "<m:x></m:x>",
                    "html_entity_name": "X"
                },
                {
                    "symbol": "y",
                    "title": "y",
                    "latex_code": "\\y",
                    "html_entity": "&y;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0079",
                    "mathml_representation": "<mi>y</mi>",
                    "alternate_representations": [
                        "y",
                        "y"
                    ],
                    "math_type_code": "<m:y></m:y>",
                    "html_entity_name": "Y"
                },
                {
                    "symbol": "z",
                    "title": "z",
                    "latex_code": "\\z",
                    "html_entity": "&z;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+007A",
                    "mathml_representation": "<mi>z</mi>",
                    "alternate_representations": [
                        "z",
                        "z"
                    ],
                    "math_type_code": "<m:z></m:z>",
                    "html_entity_name": "Z"
                },
                {
                    "symbol": "A",
                    "title": "A",
                    "latex_code": "\\A",
                    "html_entity": "&A;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0041",
                    "mathml_representation": "<mi>A</mi>",
                    "alternate_representations": [
                        "A",
                        "A"
                    ],
                    "math_type_code": "<m:A></m:A>",
                    "html_entity_name": "A"
                },
                {
                    "symbol": "B",
                    "title": "B",
                    "latex_code": "\\B",
                    "html_entity": "&B;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0042",
                    "mathml_representation": "<mi>B</mi>",
                    "alternate_representations": [
                        "B",
                        "B"
                    ],
                    "math_type_code": "<m:B></m:B>",
                    "html_entity_name": "B"
                },
                {
                    "symbol": "C",
                    "title": "C",
                    "latex_code": "\\C",
                    "html_entity": "&C;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0043",
                    "mathml_representation": "<mi>C</mi>",
                    "alternate_representations": [
                        "C",
                        "C"
                    ],
                    "math_type_code": "<m:C></m:C>",
                    "html_entity_name": "C"
                },
                {
                    "symbol": "D",
                    "title": "D",
                    "latex_code": "\\D",
                    "html_entity": "&D;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0044",
                    "mathml_representation": "<mi>D</mi>",
                    "alternate_representations": [
                        "D",
                        "D"
                    ],
                    "math_type_code": "<m:D></m:D>",
                    "html_entity_name": "D"
                },
                {
                    "symbol": "E",
                    "title": "E",
                    "latex_code": "\\E",
                    "html_entity": "&E;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0045",
                    "mathml_representation": "<mi>E</mi>",
                    "alternate_representations": [
                        "E",
                        "E"
                    ],
                    "math_type_code": "<m:E></m:E>",
                    "html_entity_name": "E"
                },
                {
                    "symbol": "F",
                    "title": "F",
                    "latex_code": "\\F",
                    "html_entity": "&F;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0046",
                    "mathml_representation": "<mi>F</mi>",
                    "alternate_representations": [
                        "F",
                        "F"
                    ],
                    "math_type_code": "<m:F></m:F>",
                    "html_entity_name": "F"
                },
                {
                    "symbol": "G",
                    "title": "G",
                    "latex_code": "\\G",
                    "html_entity": "&G;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0047",
                    "mathml_representation": "<mi>G</mi>",
                    "alternate_representations": [
                        "G",
                        "G"
                    ],
                    "math_type_code": "<m:G></m:G>",
                    "html_entity_name": "G"
                },
                {
                    "symbol": "H",
                    "title": "H",
                    "latex_code": "\\H",
                    "html_entity": "&H;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0048",
                    "mathml_representation": "<mi>H</mi>",
                    "alternate_representations": [
                        "H",
                        "H"
                    ],
                    "math_type_code": "<m:H></m:H>",
                    "html_entity_name": "H"
                },
                {
                    "symbol": "I",
                    "title": "I",
                    "latex_code": "\\I",
                    "html_entity": "&I;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0049",
                    "mathml_representation": "<mi>I</mi>",
                    "alternate_representations": [
                        "I",
                        "I"
                    ],
                    "math_type_code": "<m:I></m:I>",
                    "html_entity_name": "I"
                },
                {
                    "symbol": "J",
                    "title": "J",
                    "latex_code": "\\J",
                    "html_entity": "&J;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+004A",
                    "mathml_representation": "<mi>J</mi>",
                    "alternate_representations": [
                        "J",
                        "J"
                    ],
                    "math_type_code": "<m:J></m:J>",
                    "html_entity_name": "J"
                },
                {
                    "symbol": "K",
                    "title": "K",
                    "latex_code": "\\K",
                    "html_entity": "&K;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+004B",
                    "mathml_representation": "<mi>K</mi>",
                    "alternate_representations": [
                        "K",
                        "K"
                    ],
                    "math_type_code": "<m:K></m:K>",
                    "html_entity_name": "K"
                },
                {
                    "symbol": "L",
                    "title": "L",
                    "latex_code": "\\L",
                    "html_entity": "&L;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+004C",
                    "mathml_representation": "<mi>L</mi>",
                    "alternate_representations": [
                        "L",
                        "L"
                    ],
                    "math_type_code": "<m:L></m:L>",
                    "html_entity_name": "L"
                },
                {
                    "symbol": "M",
                    "title": "M",
                    "latex_code": "\\M",
                    "html_entity": "&M;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+004D",
                    "mathml_representation": "<mi>M</mi>",
                    "alternate_representations": [
                        "M",
                        "M"
                    ],
                    "math_type_code": "<m:M></m:M>",
                    "html_entity_name": "M"
                },
                {
                    "symbol": "N",
                    "title": "N",
                    "latex_code": "\\N",
                    "html_entity": "&N;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+004E",
                    "mathml_representation": "<mi>N</mi>",
                    "alternate_representations": [
                        "N",
                        "N"
                    ],
                    "math_type_code": "<m:N></m:N>",
                    "html_entity_name": "N"
                },
                {
                    "symbol": "O",
                    "title": "O",
                    "latex_code": "\\O",
                    "html_entity": "&O;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+004F",
                    "mathml_representation": "<mi>O</mi>",
                    "alternate_representations": [
                        "O",
                        "O"
                    ],
                    "math_type_code": "<m:O></m:O>",
                    "html_entity_name": "O"
                },
                {
                    "symbol": "P",
                    "title": "P",
                    "latex_code": "\\P",
                    "html_entity": "&P;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0050",
                    "mathml_representation": "<mi>P</mi>",
                    "alternate_representations": [
                        "P",
                        "P"
                    ],
                    "math_type_code": "<m:P></m:P>",
                    "html_entity_name": "P"
                },
                {
                    "symbol": "Q",
                    "title": "Q",
                    "latex_code": "\\Q",
                    "html_entity": "&Q;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0051",
                    "mathml_representation": "<mi>Q</mi>",
                    "alternate_representations": [
                        "Q",
                        "Q"
                    ],
                    "math_type_code": "<m:Q></m:Q>",
                    "html_entity_name": "Q"
                },
                {
                    "symbol": "R",
                    "title": "R",
                    "latex_code": "\\R",
                    "html_entity": "&R;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0052",
                    "mathml_representation": "<mi>R</mi>",
                    "alternate_representations": [
                        "R",
                        "R"
                    ],
                    "math_type_code": "<m:R></m:R>",
                    "html_entity_name": "R"
                },
                {
                    "symbol": "S",
                    "title": "S",
                    "latex_code": "\\S",
                    "html_entity": "&S;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0053",
                    "mathml_representation": "<mi>S</mi>",
                    "alternate_representations": [
                        "S",
                        "S"
                    ],
                    "math_type_code": "<m:S></m:S>",
                    "html_entity_name": "S"
                },
                {
                    "symbol": "T",
                    "title": "T",
                    "latex_code": "\\T",
                    "html_entity": "&T;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0054",
                    "mathml_representation": "<mi>T</mi>",
                    "alternate_representations": [
                        "T",
                        "T"
                    ],
                    "math_type_code": "<m:T></m:T>",
                    "html_entity_name": "T"
                },
                {
                    "symbol": "U",
                    "title": "U",
                    "latex_code": "\\U",
                    "html_entity": "&U;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0055",
                    "mathml_representation": "<mi>U</mi>",
                    "alternate_representations": [
                        "U",
                        "U"
                    ],
                    "math_type_code": "<m:U></m:U>",
                    "html_entity_name": "U"
                },
                {
                    "symbol": "V",
                    "title": "V",
                    "latex_code": "\\V",
                    "html_entity": "&V;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0056",
                    "mathml_representation": "<mi>V</mi>",
                    "alternate_representations": [
                        "V",
                        "V"
                    ],
                    "math_type_code": "<m:V></m:V>",
                    "html_entity_name": "V"
                },
                {
                    "symbol": "W",
                    "title": "W",
                    "latex_code": "\\W",
                    "html_entity": "&W;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0057",
                    "mathml_representation": "<mi>W</mi>",
                    "alternate_representations": [
                        "W",
                        "W"
                    ],
                    "math_type_code": "<m:W></m:W>",
                    "html_entity_name": "W"
                },
                {
                    "symbol": "X",
                    "title": "X",
                    "latex_code": "\\X",
                    "html_entity": "&X;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0058",
                    "mathml_representation": "<mi>X</mi>",
                    "alternate_representations": [
                        "X",
                        "X"
                    ],
                    "math_type_code": "<m:X></m:X>",
                    "html_entity_name": "X"
                },
                {
                    "symbol": "Y",
                    "title": "Y",
                    "latex_code": "\\Y",
                    "html_entity": "&Y;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+0059",
                    "mathml_representation": "<mi>Y</mi>",
                    "alternate_representations": [
                        "Y",
                        "Y"
                    ],
                    "math_type_code": "<m:Y></m:Y>",
                    "html_entity_name": "Y"
                },
                {
                    "symbol": "Z",
                    "title": "Z",
                    "latex_code": "\\Z",
                    "html_entity": "&Z;",
                    "category": "Latin Letters",
                    "unicode_code_point": "U+005A",
                    "mathml_representation": "<mi>Z</mi>",
                    "alternate_representations": [
                        "Z",
                        "Z"
                    ],
                    "math_type_code": "<m:Z></m:Z>",
                    "html_entity_name": "Z"
                },

            // {"symbol": "space", "latex_code": "\\bigcupplus", "explanation": "Space"},
            // {"symbol": "enter", "latex_code": "\\bigcupplus", "explanation": "Enter"},
            // {"symbol": "backspace", "latex_code": "\\bigcupplus", "explanation": "Backspace"},
            // {"symbol": "done", "latex_code": "\\bigcupplus", "explanation": "Close"}

            ],
            
                "set_theory_symbols": [
                  {"symbol": "∈", "latex_code": "\\in", "explanation": "Element of"},
                  {"symbol": "∉", "latex_code": "\\notin", "explanation": "Not element of"},
                  {"symbol": "⊂", "latex_code": "\\subset", "explanation": "Subset of"},
                  {"symbol": "⊄", "latex_code": "\\not\\subset", "explanation": "Not subset of"},
                  {"symbol": "⊆", "latex_code": "\\subseteq", "explanation": "Subset or equal"},
                  {"symbol": "⊇", "latex_code": "\\supseteq", "explanation": "Superset or equal"},
                  {"symbol": "∪", "latex_code": "\\cup", "explanation": "Union"},
                  {"symbol": "∩", "latex_code": "\\cap", "explanation": "Intersection"},
                  {"symbol": "⊖", "latex_code": "\\setminus", "explanation": "Set minus"},
                  {"symbol": "⊕", "latex_code": "\\oplus", "explanation": "Disjoint union"},
                  {"symbol": "℘", "latex_code": "\\wp", "explanation": "Power set"},
                  {"symbol": "∀", "latex_code": "\\forall", "explanation": "For all"},
                  {"symbol": "∃", "latex_code": "\\exists", "explanation": "There exists"},
                  {"symbol": "∃!", "latex_code": "\\exists!", "explanation": "There exists one and only one"},
                  {"symbol": "⇒", "latex_code": "\\Rightarrow", "explanation": "Implies"},
                  {"symbol": "⇐", "latex_code": "\\Leftarrow", "explanation": "Is implied by"},
                  {"symbol": "⇔", "latex_code": "\\Leftrightarrow", "explanation": "If and only if"},
                  {"symbol": "∼", "latex_code": "\\sim", "explanation": "Not"},
                  {"symbol": "∧", "latex_code": "\\wedge", "explanation": "And"},
                  {"symbol": "∨", "latex_code": "\\vee", "explanation": "Or"},
                  {"symbol": "⊻", "latex_code": "\\veebar", "explanation": "Exclusive or"},
                  {"symbol": "=", "latex_code": "=", "explanation": "Equality"},
                  {"symbol": "≠", "latex_code": "\\neq", "explanation": "Inequality"},
                  {"symbol": "∅", "latex_code": "\\emptyset", "explanation": "Empty set"},
                  {"symbol": "ℝ", "latex_code": "\\mathbb{R}", "explanation": "Real numbers"},
                  {"symbol": "ℕ", "latex_code": "\\mathbb{N}", "explanation": "Natural numbers"},
                  {"symbol": "ℤ", "latex_code": "\\mathbb{Z}", "explanation": "Integers"},
                  {"symbol": "ℚ", "latex_code": "\\mathbb{Q}", "explanation": "Rational numbers"},
                  {"symbol": "ℂ", "latex_code": "\\mathbb{C}", "explanation": "Complex numbers"},
                  {"symbol": "∆", "latex_code": "\\triangle", "explanation": "Symmetric difference"},
                  {"symbol": "×", "latex_code": "\\times", "explanation": "Cartesian product"},
                //   {"symbol": "space", "latex_code": "\\bigcupplus", "explanation": "Space"},
                //   {"symbol": "enter", "latex_code": "\\bigcupplus", "explanation": "Enter"},
                //   {"symbol": "backspace", "latex_code": "\\bigcupplus", "explanation": "Backspace"},
                //   {"symbol": "done", "latex_code": "\\bigcupplus", "explanation": "Close"}

                ],
                
                    "trigonometry_symbols": [
                      {"symbol": "sin", "latex_code": "\\sin", "explanation": "Sine"},
                      {"symbol": "cos", "latex_code": "\\cos", "explanation": "Cosine"},
                      {"symbol": "tan", "latex_code": "\\tan", "explanation": "Tangent"},
                      {"symbol": "csc", "latex_code": "\\csc", "explanation": "Cosecant"},
                      {"symbol": "sec", "latex_code": "\\sec", "explanation": "Secant"},
                      {"symbol": "cot", "latex_code": "\\cot", "explanation": "Cotangent"},
                      {"symbol": "π", "latex_code": "\\pi", "explanation": "Pi, the ratio of the circumference of a circle to its diameter"},
                      {"symbol": "θ", "latex_code": "\\theta", "explanation": "Theta, often used as the variable for an angle"},
                      {"symbol": "sin⁻¹", "latex_code": "\\sin^{-1}", "explanation": "Inverse sine (arcsin)"},
                      {"symbol": "cos⁻¹", "latex_code": "\\cos^{-1}", "explanation": "Inverse cosine (arccos)"},
                      {"symbol": "tan⁻¹", "latex_code": "\\tan^{-1}", "explanation": "Inverse tangent (arctan)"},
                      {"symbol": "csc⁻¹", "latex_code": "\\csc^{-1}", "explanation": "Inverse cosecant (arccsc)"},
                      {"symbol": "sec⁻¹", "latex_code": "\\sec^{-1}", "explanation": "Inverse secant (arcsec)"},
                      {"symbol": "cot⁻¹", "latex_code": "\\cot^{-1}", "explanation": "Inverse cotangent (arccot)"},
                      {"symbol": "∠", "latex_code": "\\angle", "explanation": "Angle"},
                      {"symbol": "∡", "latex_code": "\\measuredangle", "explanation": "Measured angle"},
                      {"symbol": "∢", "latex_code": "\\sphericalangle", "explanation": "Spherical angle"},
                      {"symbol": "∆", "latex_code": "\\Delta", "explanation": "Delta, represents change or difference, often used for angle in trigonometry"},
                      {"symbol": "sinh", "latex_code": "\\sinh", "explanation": "Hyperbolic sine"},
                    {"symbol": "cosh", "latex_code": "\\cosh", "explanation": "Hyperbolic cosine"},
                    {"symbol": "tanh", "latex_code": "\\tanh", "explanation": "Hyperbolic tangent"},
                    {"symbol": "csch", "latex_code": "\\csch", "explanation": "Hyperbolic cosecant"},
                    {"symbol": "sech", "latex_code": "\\sech", "explanation": "Hyperbolic secant"},
                    {"symbol": "coth", "latex_code": "\\coth", "explanation": "Hyperbolic cotangent"},
                    {"symbol": "e", "latex_code": "e", "explanation": "Euler's number, the base of the natural logarithm"},
                    {"symbol": "i", "latex_code": "i", "explanation": "Imaginary unit, satisfies i² = -1"},
                    {"symbol": "φ", "latex_code": "\\varphi", "explanation": "Phi, often used for phase angle in wave functions"},
                    {"symbol": "λ", "latex_code": "\\lambda", "explanation": "Lambda, often used for wavelength"},
                    {"symbol": "ω", "latex_code": "\\omega", "explanation": "Omega, angular frequency of a wave"},
                    {"symbol": "∑", "latex_code": "\\sum", "explanation": "Summation, sum of terms"},
                    {"symbol": "∏", "latex_code": "\\prod", "explanation": "Product, product of terms"},
                    {"symbol": "√", "latex_code": "\\sqrt{}", "explanation": "Square root"},
                    {"symbol": "∛", "latex_code": "\\sqrt[3]{}", "explanation": "Cube root"},
                    {"symbol": "|z|", "latex_code": "|z|", "explanation": "Magnitude of a complex number"},
                    {"symbol": "π", "latex_code": "\\pi", "explanation": "Pi, the ratio of the circumference of a circle to its diameter"},
                    {"symbol": "π/2", "latex_code": "\\frac{\\pi}{2}", "explanation": "Half pi, represents a right angle or 90 degrees"},
                    {"symbol": "π/3", "latex_code": "\\frac{\\pi}{3}", "explanation": "One third of pi, represents 60 degrees"},
                    {"symbol": "π/4", "latex_code": "\\frac{\\pi}{4}", "explanation": "Quarter pi, represents 45 degrees"},
                    {"symbol": "π/6", "latex_code": "\\frac{\\pi}{6}", "explanation": "One sixth of pi, represents 30 degrees"},
                    {"symbol": "2π", "latex_code": "2\\pi", "explanation": "Two pi, represents a full circle or 360 degrees"},
                    {"symbol": "3π/2", "latex_code": "\\frac{3\\pi}{2}", "explanation": "Three halves of pi, represents 270 degrees or a three-quarter turn"},
                    {"symbol": "2π/3", "latex_code": "\\frac{2\\pi}{3}", "explanation": "Two thirds of pi, represents 120 degrees"},
                    {"symbol": "π/8", "latex_code": "\\frac{\\pi}{8}", "explanation": "One eighth of pi, represents 22.5 degrees"},
                    {"symbol": "5π/6", "latex_code": "\\frac{5\\pi}{6}", "explanation": "Five sixths of pi, represents 150 degrees"},
                    {"symbol": "π/12", "latex_code": "\\frac{\\pi}{12}", "explanation": "One twelfth of pi, represents 15 degrees"},
                    {"symbol": "4π/3", "latex_code": "\\frac{4\\pi}{3}", "explanation": "Four thirds of pi, represents 240 degrees"},
                    {"symbol": "5π/3", "latex_code": "\\frac{5\\pi}{3}", "explanation": "Five thirds of pi, represents 300 degrees"},
                    {"symbol": "3π/4", "latex_code": "\\frac{3\\pi}{4}", "explanation": "Three quarters of pi, represents 135 degrees"},
                    {"symbol": "7π/4", "latex_code": "\\frac{7\\pi}{4}", "explanation": "Seven quarters of pi, represents 315 degrees"},
                    {"symbol": "7π/6", "latex_code": "\\frac{7\\pi}{6}", "explanation": "Seven sixths of pi, represents 210 degrees"},
                    {"symbol": "11π/6", "latex_code": "\\frac{11\\pi}{6}", "explanation": "Eleven sixths of pi, represents 330 degrees"},
                
                  
                

                ],
                
                "combinatorics_symbols": [
                    {"symbol": "!", "latex_code": "!", "explanation": "Factorial"},
                    {"symbol": "P(n, k)", "latex_code": "P(n, k)", "explanation": "Permutations"},
                    {"symbol": "C(n, k)", "latex_code": "\\binom{n}{k}", "explanation": "Combinations"},
                    {"symbol": "nᵏ", "latex_code": "n^k", "explanation": "Power"},
                   
                    
                    {"symbol": "S(n, k)", "latex_code": "S(n, k)", "explanation": "Stirling numbers of the second kind"},
                    {"symbol": "B(n)", "latex_code": "B(n)", "explanation": "Bell numbers"},
                    {"symbol": "ℙ(A)", "latex_code": "\\mathcal{P}(A)", "explanation": "Power set of A"},
                    {"symbol": "|A|", "latex_code": "|A|", "explanation": "Cardinality of set A"},
                   
                
                  ],
                  "probability_symbols": [
                    {"symbol": "P(A)", "latex_code": "P(A)", "explanation": "Probability of event A"},
                    {"symbol": "P(A|B)", "latex_code": "P(A|B)", "explanation": "Conditional probability of A given B"},
                    {"symbol": "P(A ∩ B)", "latex_code": "P(A \\cap B)", "explanation": "Probability of both A and B"},
                    {"symbol": "P(A ∪ B)", "latex_code": "P(A \\cup B)", "explanation": "Probability of A or B"},
                    {"symbol": "E(X)", "latex_code": "E(X)", "explanation": "Expected value of random variable X"},
                    {"symbol": "Var(X)", "latex_code": "\\text{Var}(X)", "explanation": "Variance of random variable X"},
                    {"symbol": "σ²", "latex_code": "\\sigma^2", "explanation": "Variance of a population"},
                    {"symbol": "σ", "latex_code": "\\sigma", "explanation": "Standard deviation of a population"},
                    {"symbol": "S²", "latex_code": "S^2", "explanation": "Sample variance"},
                    {"symbol": "S", "latex_code": "S", "explanation": "Sample standard deviation"},
                    {"symbol": "μ", "latex_code": "\\mu", "explanation": "Mean of a population"},
                    {"symbol": "x̄", "latex_code": "\\bar{x}", "explanation": "Sample mean"},
                    {"symbol": "n", "latex_code": "n", "explanation": "Sample size"},
                    {"symbol": "N", "latex_code": "N", "explanation": "Population size"},
                    {"symbol": "Z", "latex_code": "Z", "explanation": "Z-score"},
                    {"symbol": "t", "latex_code": "t", "explanation": "t-score in t-distribution"},
                    {"symbol": "χ²", "latex_code": "\\chi^2", "explanation": "Chi-squared statistic"},
                    {"symbol": "F", "latex_code": "F", "explanation": "F statistic in F-distribution"},
                    {"symbol": "ρ", "latex_code": "\\rho", "explanation": "Correlation coefficient"},
                    {"symbol": "p-value", "latex_code": "\\text{p-value}", "explanation": "p-value, probability of observing the test result under the null hypothesis"},    
                    {"symbol": "Z-score", "latex_code": "Z = \\frac{X - \\mu}{\\sigma}", "explanation": "Measure of how many standard deviations an element is from the mean. Calculated as Z = (X - μ) / σ, where X is the value, μ is the mean, and σ is the standard deviation."},                                    
                    
                
                  ]
            }
                  
                  
                  
              
   

  return {
    props: {
      symbolsData,
      meta, // Pass SEO metadata
      menuItems
    },
  };
}
