
// import Head from 'next/head';
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// import React from 'react';
// import '../../pages.css';
// import LogarithmCalculator from '@/app/components/calculators/arithmetics/LogarithmCalculator';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import ExplanationDetails from '@/app/components/ExplanationDetails';
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

// export default function LogCalculatorPage({ logarithmExplanations, detailInstructionsLogarithms }) {

//   const navigationGroup=[
//   {title:'Other Calculators',
//     items:[
//       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
//       {title:'Root Calculator',link:'/calculators/root-calculator'},
//       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
//       // {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
//       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
//       {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
//       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
//       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
//       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
//       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
//     ]
//   }
// ]
//   return (
//     <>
//       <Head>
//         <title>Logarithm Calculator | Calculate Logarithms | LearnMathClass</title>
//         <meta name="description" content="Free online logarithm calculator. Calculate logarithms with base 2, e, 10 or custom base. Easy to use with step-by-step explanations." />
//         <meta name="keywords" content="log calculator, log calc, logarithms, calculator of logs, find log calculator, log log calculator, logarithm calculator, logarithmic calculator" />
        
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Logarithm Calculator | LearnMathClass" />
//         <meta property="og:description" content="Calculate logarithms online with any base. Get instant results with mathematical explanations." />
//         <meta property="og:url" content="https://www.learnmathclass.com/calculators/log-calculator" />
        
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
//         <link rel="canonical" href="https://www.learnmathclass.com/calculators/log-calculator" />
//       </Head>
//         <style jsx>{`
//   @media (max-width: 1024px) {
//     .layout-container > div:first-child,
//     .layout-container > div:first-child *,
//     :global([class*="vertical"]),
//     :global([class*="vertical"]) * {
//       position: static !important;
//     }
//   }
  
//   .layout-container {
//     display: grid;
//     grid-template-columns: 20% 80%;
//     gap: 20px;
//     width: 100%;
//   }
  
//   @media (max-width: 1024px) {
//     .layout-container {
//       grid-template-columns: 1fr;
//     }
//   }
// `}</style>

//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <Breadcrumb/>
//       <OperaSidebar
//         side='right'
//         // topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='300px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <h1 className='title' style={{marginTop:'-0px',marginBottom:'20px'}}>Logarithm Calculator</h1>
//       <div style={{marginBottom:'10px'}}>
//         <ExplanationDetails 
//           instructions={detailInstructionsLogarithms}
//           title='How to use Logarithm Calculator'
//         />
//       </div>
//       <br/>
//        <div className="layout-container">
//        {/* <div style={{
//       display: 'grid',
//       gridTemplateColumns: '15% 80%',
//       gap: '20px',
//       width: '100%'
//    }}> */}
//       {/* Left column - Sidebar */}
//       <div>
//         <br/>
       
//          <VerticalButtonGroup 
//             items={navigationGroup}
//             width="230px"       
//             theme='lightBlue'
//             isSticky={true}
//             verticalOffset='200px'
//          />
//       </div>

//       {/* Right column - Table */}
//       <div>
//          <div style={{width:'100%',margin:'auto',marginLeft:'-50px'}}>
//           <div style={{transform:'scale(0.95)'}}>
//              <LogarithmCalculator explanations={logarithmExplanations}/>
    
//       </div> 
          
        
//             <br/>
//             <br/>
//             <br/>
           
            
//          </div>
//       </div>
//    </div>

//       {/* <VerticalButtonGroup/>
//       <div style={{transform:'scale(0.8)'}}>
//         <LogarithmCalculator explanations={logarithmExplanations}/>
//       </div> */}
//       <br/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton/> */}
//     </>
//   );
// }

// export async function getStaticProps() {
// //   const logarithmExplanations = {
// //     standard: {
// //       text: "A logarithm calculates what exponent is needed for a base to reach a given number. If bx = N, then logb(N) = x. For example, log₂(8) = 3 because 2³ = 8. The most common bases are: base 2 (binary logarithm), base e (natural logarithm), and base 10 (common logarithm)."
// //     },
// //     custom: {
// //       text: "For any positive numbers M and b (where b ≠ 1), the equation logb(M) = y means that b^y = M. The base b must be positive and not equal to 1, while M must be positive. The logarithm finds the exponent needed to reach M using base b."
// //     }
// //   };

 
//     const logarithmExplanations = {
//         standard: {
//           text: "A logarithm calculates what exponent is needed for a base to reach a given number. If bx = N, then logb(N) = x. For example, log₂(8) = 3 because 2³ = 8. The most common bases are: base 2 (binary logarithm), base e (natural logarithm), and base 10 (common logarithm).",
//           links: [
//             {
//               title: "Explore Logarithmic Tables Page",
//               link: "/tables/arithmetics"
//             }
//           ],
//         //  externalLinks: [
//         //     {
//         //       title: "Properties of Logarithms",
//         //       link: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-prop/a/properties-of-logarithms"
//         //     }
//         //   ]
//         },
//         custom: {
//           text: "For any positive numbers M and b (where b ≠ 1), the equation logb(M) = y means that b^y = M. The base b must be positive and not equal to 1, while M must be positive. The logarithm finds the exponent needed to reach M using base b.",
//           links: [
//             {
//               title: "Explore Logarithmic Tables Page",
//               link: "/tables/arithmetics"
//             }
//           ]
//         }
//        };


// const detailInstructionsLogarithms = [
    
//     "Choose between standard bases (2, e, 10) or a custom base",
//     "For custom base, enter any positive number except 1",
//     "Enter the number for which you want to find the logarithm",
//     "Click Calculate to compute the result",
//     "Hover over ? icons for additional help"
    
//   ];

//   return {
//     props: {
//       logarithmExplanations,
//       detailInstructionsLogarithms
//     },
//     revalidate: 86400
//   };
// }


import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import React from 'react';
import '../../pages.css';
import LogarithmCalculator from '@/app/components/calculators/arithmetics/LogarithmCalculator';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export async function getStaticProps() {

const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]

const logarithmExplanations = {
  standard: {
    text: `A logarithm calculates what exponent is needed for a base to reach a given number. If $b^x = N$, then $\\log_b(N) = x$. For example, $\\log_2(8) = 3$ because $2^3 = 8$. The most common bases are: base $2$ (binary logarithm), base $e$ (natural logarithm), and base $10$ (common logarithm).`,
    links: [
      {
        title: "Explore Logarithmic Tables Page",
        link: "/tables/arithmetics"
      }
    ],
  },
  custom: {
    text: `For any positive numbers $M$ and $b$ (where $b \\neq 1$), the equation $\\log_b(M) = y$ means that $b^y = M$. The base $b$ must be positive and not equal to $1$, while $M$ must be positive. The logarithm finds the exponent needed to reach $M$ using base $b$.`,
    links: [
      {
        title: "Explore Logarithmic Tables Page",
        link: "/tables/arithmetics"
      }
    ]
  }
};

const detailInstructionsLogarithms = [
  "Choose between standard bases (2, e, 10) or a custom base",
  "For custom base, enter any positive number except 1",
  "Enter the number for which you want to find the logarithm",
  "Click Calculate to compute the result",
  "Hover over ? icons for additional help"
];

const keyWords = [
  'logarithm calculator',
  'log calculator',
  'natural log calculator',
  'log base 2 calculator',
  'log base 10 calculator',
  'logarithmic calculator',
  'calculate logarithm',
  'online log calculator',
  'free logarithm tool',
  'binary logarithm',
  'natural logarithm',
  'common logarithm',
  'custom base logarithm',
  'log calc',
  'logarithm solver'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Calculator`,
    content: `The logarithm calculator has two main options at the top: **Standard** and **Custom** base. Standard gives you quick access to the three most common logarithm bases: $2$, $e$ (approximately $2.718$), and $10$. Custom lets you enter any positive number as your base (except $1$).

Start by choosing your base type using the radio buttons. If you select **Standard**, a dropdown menu appears with bases $2$, $e$, and $10$. For **Custom**, you get an empty box where you can type any base you want—try $3$, $5$, or $7$.

Enter the number you want to find the logarithm of in the main input box at the top. This must be a positive number. You can use whole numbers like $8$ or $100$, or decimals like $2.5$ or $50.75$. The calculator accepts any positive value.

Click the blue **Calculate** button to see your result appear on the right side of the equals sign. The answer shows up to four decimal places for precision. Use **Reset** to clear everything and start a new calculation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Choosing Between Standard and Custom Base`,
    content: `The **Standard** option is perfect for everyday calculations. Select it when you need logarithms with base $2$ (used in computer science), base $e$ (natural logarithm, used in calculus and science), or base $10$ (common logarithm, used in many applications). Just pick your base from the dropdown and you're ready.

With **Standard** selected, the dropdown shows three choices. Base $2$ is the binary logarithm, written as $\\log_2$. Base $e$ (approximately $2.7183$) is the natural logarithm, often written as $\\ln$. Base $10$ is the common logarithm, sometimes written as just $\\log$ without a subscript.

Switch to **Custom** when you need a different base. This opens a text input where you can type any positive number except $1$. Try base $3$ for ternary logarithms, base $5$ for quinary, or any other positive number. Custom bases are useful for specialized calculations and learning.

You can switch between Standard and Custom anytime by clicking the radio buttons. The calculator remembers your number, so you can easily compare $\\log_2(8)$ versus $\\log_3(8)$ by switching modes and recalculating.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Entering Your Number`,
    content: `Click in the top input box labeled "Enter number" to type your value. This is the number you want to find the logarithm of—mathematically, if you're calculating $\\log_b(N)$, this box holds $N$. Only positive numbers work because logarithms of zero or negative numbers don't exist in regular mathematics.

You can enter whole numbers like $8$, $16$, $100$, or $1000$. Try $8$ with base $2$ to get $3$ (because $2^3 = 8$). Decimals work too: enter $2.5$, $10.7$, or $99.99$. The calculator uses high-precision math to handle decimal inputs accurately.

Very large numbers are fine: try $1000000$ with base $10$ to get $6$. Very small decimals work too: $0.5$ with base $2$ gives $-1$ (because $2^{-1} = 0.5$). The number can have many decimal places—the calculator maintains precision throughout.

The question mark (?) icon shows a tooltip when you hover over it: "Enter the value to calculate the logarithm of." If you enter something invalid, the input box turns red and an error message appears below. Fix your entry to continue.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Using Standard Bases`,
    content: `With **Standard** selected, click the dropdown menu to choose your base. **Base 2** calculates binary logarithms, answering "what power of $2$ gives this number?" For example, $\\log_2(16) = 4$ because $2^4 = 16$. Base $2$ is common in computer science for measuring information and algorithm complexity.

**Base e** computes natural logarithms, written as $\\ln$ in many textbooks. The number $e \\approx 2.71828$ appears throughout calculus, physics, and biology. Try $\\ln(7.389) \\approx 2$ because $e^2 \\approx 7.389$. Natural logarithms describe growth, decay, and many natural phenomena.

**Base 10** gives common logarithms, often written as just $\\log$ without a subscript. This base relates to our decimal number system. Calculate $\\log_{10}(100) = 2$ because $10^2 = 100$, or $\\log_{10}(1000) = 3$ because $10^3 = 1000$. Base $10$ appears in scientific notation, pH calculations, and decibel measurements.

Switch between bases by clicking the dropdown. The calculator preserves your number, making it easy to compare results. Try $\\log_2(8) = 3$, $\\ln(8) \\approx 2.0794$, and $\\log_{10}(8) \\approx 0.9031$ to see how the same number has different logarithms depending on the base.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Working with Custom Base`,
    content: `Select the **Custom** radio button to unlock the base input field. Click in the box and type any positive number except $1$. The base must be greater than $0$ and cannot equal $1$ because logarithms with base $1$ are undefined (every number would give infinity as the answer).

Try base $3$: calculate $\\log_3(9) = 2$ because $3^2 = 9$. Or base $5$: find $\\log_5(125) = 3$ because $5^3 = 125$. Custom bases work just like standard ones—they answer "what exponent gives this result?" but for your chosen base.

Decimal bases work too. Enter $2.5$ as a base and calculate $\\log_{2.5}(6.25) = 2$ because $2.5^2 = 6.25$. Large bases are fine: try base $100$ to see $\\log_{100}(10000) = 2$ because $100^2 = 10000$.

If you enter an invalid base like $0$, $-3$, or $1$, the calculator displays an error: "Both value and base must be positive numbers." The base input box turns red until you correct it. Enter a valid positive number (not $1$) to continue.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Understanding Your Results and Errors`,
    content: `After clicking Calculate, your answer appears on the right side of the equals sign. The result displays up to four decimal places. For clean answers like $\\log_2(8) = 3$, you'll see $3.0000$. For irrational results like $\\log_2(5) \\approx 2.3219$, you get precise decimals.

**Negative results** are normal. When your number is less than $1$, logarithms give negative answers. Try $\\log_2(0.5) = -1.0000$ because $2^{-1} = 0.5$. Or $\\log_{10}(0.01) = -2.0000$ because $10^{-2} = 0.01$. This isn't an error—it's correct mathematics.

**Zero and fractional results** appear for various inputs. Calculate $\\log_{10}(1)$ with any base and get $0$ (because any number to the power $0$ equals $1$). Try $\\log_2(3) \\approx 1.5850$ for a decimal between whole numbers.

**Error messages** appear in red when something's wrong. "Both value and base must be positive numbers" means you entered zero, a negative, or invalid text. "Input contains invalid characters" appears if you type letters or symbols. Fix the red input box to continue. The calculator won't compute until all inputs are valid positive numbers.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Logarithms`,
    content: `A logarithm answers the question: "What exponent do I need?" If you know $2^? = 8$, the logarithm tells you the answer is $3$. We write this as $\\log_2(8) = 3$. Logarithms are the opposite (inverse) of exponents—they undo what exponents do.

Think of it like division versus multiplication. If $3 \\times 4 = 12$, then $12 \\div 3 = 4$ reverses the operation. Similarly, if $2^3 = 8$, then $\\log_2(8) = 3$ reverses it. The logarithm "undoes" the exponent to reveal what power was used.

The general form is $\\log_b(N) = x$, which means $b^x = N$. The **base** ($b$) is the number being raised to a power, the **argument** ($N$) is the result you're trying to reach, and the **logarithm** ($x$) is the exponent needed. So $\\log_5(25) = 2$ because $5^2 = 25$.

Logarithms only work with positive numbers. You cannot find $\\log(0)$ or $\\log(-5)$ because no real exponent makes a positive base equal zero or negative. Also, base $1$ doesn't work because $1$ raised to any power always equals $1$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Understanding Different Bases`,
    content: `The **base** determines which number is being raised to a power. Base $2$ means powers of $2$: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$. So $\\log_2(4) = 2$ because $4$ is the second power of $2$. Different bases give different answers for the same number.

**Base 2** (binary logarithm) is fundamental in computer science. Computers use binary (base $2$), so $\\log_2$ measures things like how many times you can divide by $2$, or how many bits are needed. Eight items need $\\log_2(8) = 3$ bits to represent.

**Base e** (natural logarithm) uses $e \\approx 2.71828$, a special mathematical constant. Natural logarithms appear in growth and decay: population growth, radioactive decay, compound interest. The notation $\\ln(x)$ means $\\log_e(x)$. For example, $\\ln(20) \\approx 2.996$.

**Base 10** (common logarithm) matches our decimal system. It tells you how many digits a number has (roughly). Since $10^2 = 100$ and $10^3 = 1000$, numbers between $100$ and $1000$ have logarithms between $2$ and $3$. This helps with scientific notation and measuring scales like pH or decibels.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Simple Logarithm Rules`,
    content: `**The logarithm of 1 always equals 0**, regardless of base: $\\log_2(1) = 0$, $\\log_{10}(1) = 0$, $\\log_5(1) = 0$. This is because any number to the power $0$ equals $1$: $2^0 = 1$, $10^0 = 1$, $5^0 = 1$.

**The logarithm of the base equals 1**: $\\log_2(2) = 1$, $\\log_{10}(10) = 1$, $\\log_7(7) = 1$. This makes sense because the base to the first power equals itself: $2^1 = 2$, $10^1 = 10$, $7^1 = 7$.

**Multiplication becomes addition** with logarithms: $\\log_b(xy) = \\log_b(x) + \\log_b(y)$. For example, $\\log_2(8) + \\log_2(4) = 3 + 2 = 5 = \\log_2(32)$ because $8 \\times 4 = 32$. This property makes logarithms useful for simplifying multiplication.

**Division becomes subtraction**: $\\log_b(\\frac{x}{y}) = \\log_b(x) - \\log_b(y)$. Try $\\log_2(8) - \\log_2(4) = 3 - 2 = 1 = \\log_2(2)$ because $8 \\div 4 = 2$. And **exponents become multiplication**: $\\log_b(x^n) = n \\cdot \\log_b(x)$. So $\\log_2(8^2) = 2 \\cdot \\log_2(8) = 2 \\times 3 = 6$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Practice Problems to Try`,
    content: `**Easy problems with base 2**: Calculate $\\log_2(4)$, $\\log_2(16)$, and $\\log_2(32)$. Answers: $2$ (because $2^2 = 4$), $4$ (because $2^4 = 16$), and $5$ (because $2^5 = 32$). These are all whole numbers because the inputs are perfect powers of $2$.

**Base 10 problems**: Find $\\log_{10}(100)$, $\\log_{10}(1000)$, and $\\log_{10}(10000)$. Answers: $2$, $3$, and $4$. Notice the pattern—each answer tells you how many zeros are in the number (plus one for the leading $1$).

**Problems with decimals**: Try $\\log_2(5)$, $\\log_{10}(50)$, and $\\log_3(10)$. Answers: approximately $2.3219$, $1.6990$, and $2.0959$. These give decimals because the inputs aren't perfect powers of their bases.

**Negative logarithms**: Calculate $\\log_2(0.5)$, $\\log_{10}(0.1)$, and $\\log_5(0.2)$. Answers: $-1$, $-1$, and $-1$. All equal $-1$ because $2^{-1} = 0.5$, $10^{-1} = 0.1$, and $5^{-1} = 0.2$.

**Custom base challenges**: Find $\\log_3(27)$, $\\log_5(125)$, and $\\log_7(49)$. Answers: $3$, $3$, and $2$. Check: $3^3 = 27$, $5^3 = 125$, and $7^2 = 49$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Real-World Uses of Logarithms`,
    content: `**pH Scale** uses base $10$ logarithms to measure acidity. A pH of $7$ is neutral, below $7$ is acidic, above $7$ is basic. The formula involves $\\log_{10}$ of hydrogen ion concentration. Each whole number change represents a tenfold difference—pH $5$ is ten times more acidic than pH $6$.

**Decibels** measure sound intensity using $\\log_{10}$. The formula is $10 \\cdot \\log_{10}(\\frac{I}{I_0})$ where $I$ is intensity. A whisper is about $30$ dB, normal conversation $60$ dB, a rock concert $120$ dB. Every $10$ dB increase means the sound is ten times more intense.

**Earthquake magnitude** (Richter scale) uses logarithms. A magnitude $5$ earthquake releases about $32$ times more energy than magnitude $4$ because the scale is logarithmic. $\\log_{10}$ helps compress the huge range of earthquake energies into manageable numbers.

**Population growth** and **compound interest** use natural logarithms (base $e$). If bacteria double every hour, $\\ln$ helps calculate how long to reach a certain population. The formula $t = \\frac{\\ln(N/N_0)}{\\ln(2)}$ tells you how many doublings occurred.

**Computer algorithms** use $\\log_2$ to analyze efficiency. Binary search has complexity $O(\\log_2 n)$—it divides the problem in half each step. Searching $1024$ items takes only about $\\log_2(1024) = 10$ steps instead of checking all $1024$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Related Calculators and Tools`,
    content: `**Exponent Calculator** performs the opposite operation. Instead of finding what exponent gives a result, you calculate the result from a known base and exponent. Use it to verify logarithms: if $\\log_2(8) = 3$, check that $2^3 = 8$ using the exponent calculator.

**Root Calculator** finds roots, which are fractional exponents. The square root of $16$ equals $16^{0.5}$, and you can verify this using logarithms: $0.5 \\cdot \\log(16) = \\log(4)$. Roots and logarithms are related through exponent rules.

**Scientific Calculator** combines logarithms with other operations for complex formulas. Use it when logarithms are part of longer calculations involving multiple steps, parentheses, or different operations.

**Logarithmic Tables** provide pre-calculated values for common logarithms. Before calculators existed, people looked up logarithms in books. Our tables page shows logarithms for reference and helps you understand patterns in logarithmic values.

For deeper learning, explore exponential growth and decay, logarithmic scales in science, change of base formula, and how logarithms simplify multiplication and division in complex calculations.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "How do I calculate a logarithm?",
    answer: "To calculate a logarithm, choose your base (use Standard for bases 2, e, or 10, or Custom for any other positive number except 1), enter the number you want to find the logarithm of, and click Calculate. The result tells you what exponent is needed. For example, log₂(8) = 3 because 2³ = 8."
  },
  obj2: {
    question: "What's the difference between log, ln, and log₂?",
    answer: "log usually means base 10 (common logarithm), ln means base e (natural logarithm where e ≈ 2.71828), and log₂ means base 2 (binary logarithm). They all find exponents, but for different bases. This calculator supports all three: select base 10 or e from Standard, or enter 2 in Custom base."
  },
  obj3: {
    question: "Why can't I calculate the logarithm of negative numbers or zero?",
    answer: "Logarithms only work with positive numbers because you cannot raise a positive base to any real exponent and get zero or a negative result. For example, 2 raised to any power (positive or negative) always gives a positive number, never zero or negative. This is a fundamental mathematical limitation."
  },
  obj4: {
    question: "What does a negative logarithm mean?",
    answer: "A negative logarithm means the result is less than 1. For example, log₂(0.5) = -1 because 2⁻¹ = 0.5. Negative logarithms represent negative exponents—they tell you the denominator of a fraction with numerator 1. So log₁₀(0.01) = -2 means 10⁻² = 1/100 = 0.01."
  },
  obj5: {
    question: "Why can't I use base 1?",
    answer: "Base 1 is undefined for logarithms because 1 raised to any power always equals 1 (1¹ = 1, 1² = 1, 1¹⁰⁰ = 1). This means log₁(5) would be asking 'what exponent makes 1 equal 5?' which has no answer. The calculator requires bases greater than 0 and not equal to 1."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Logarithm Calculator - Calculate Log with Any Base",
    "description": "Free online logarithm calculator for base 2, e, 10, or custom bases. Calculate logarithms instantly with step-by-step explanations and examples.",
    "url": "https://www.learnmathclass.com/calculators/log-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Standard base logarithms (base 2, e, 10)",
      "Custom base logarithm calculation",
      "Binary logarithm (log₂)",
      "Natural logarithm (ln or logₑ)",
      "Common logarithm (log₁₀)",
      "High-precision arithmetic",
      "Decimal and whole number support",
      "Real-time error validation"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "Middle School, High School, College",
    "keywords": keyWords.join(", ")
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
        "name": "Calculators",
        "item": "https://www.learnmathclass.com/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Logarithm Calculator",
        "item": "https://www.learnmathclass.com/calculators/log-calculator"
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

return {
  props: {
    logarithmExplanations,
    detailInstructionsLogarithms,
    sectionsContent,
    navigationGroup,
    faqQuestions,
    schemas,
    seoData: {
      title: "Logarithm Calculator | Calculate Log Base 2, e, 10 & Custom",
      description: "Free logarithm calculator for any base. Calculate log₂, ln, log₁₀ and custom base logarithms instantly. Easy-to-use tool with examples and explanations.",
      keywords: keyWords.join(", "),
      url: "/calculators/log-calculator",
      name: "Logarithm Calculator - Log Base 2, e, 10 & Custom Tool"
    },
  },
  revalidate: 86400
};
}

export default function LogCalculatorPage({seoData, sectionsContent, logarithmExplanations, detailInstructionsLogarithms, navigationGroup, faqQuestions, schemas}) {

const genericSections = Object.keys(sectionsContent).map((key, index) => ({
  id: `${index + 1}`,
  title: sectionsContent[key].title,
  link: sectionsContent[key].link,
  content: [sectionsContent[key].content]
}));

return (
  <>
    <Head>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
      
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Learn Math Class" />
      
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      
      <meta name="robots" content="index, follow" />
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
      />
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />
    </Head>

    <style jsx>{`
      @media (max-width: 1024px) {
        .layout-container > div:first-child,
        .layout-container > div:first-child *,
        :global([class*="vertical"]),
        :global([class*="vertical"]) * {
          position: static !important;
        }
      }
      
      .layout-container {
        display: grid;
        grid-template-columns: 20% 80%;
        gap: 20px;
        width: 100%;
      }
      
      @media (max-width: 1024px) {
        .layout-container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <OperaSidebar
      side='right'
      sidebarWidth='45px'
      panelWidth='300px'
      iconColor='white'
      panelBackgroundColor='#f2f2f2'
    />
    
    <h1 className='title' style={{marginTop:'-0px',marginBottom:'20px'}}>Logarithm Calculator</h1>
    <div style={{marginBottom:'10px'}}>
      <ExplanationDetails 
        instructions={detailInstructionsLogarithms}
        title='How to use Logarithm Calculator'
      />
    </div>
    <br/>
    
    <div className="layout-container">
      <div>
        <br/>
        <VerticalButtonGroup 
          items={navigationGroup}
          width="230px"       
          theme='lightBlue'
          isSticky={true}
          verticalOffset='200px'
        />
      </div>

      <div>
        <div style={{width:'100%',margin:'auto',marginLeft:'-50px'}}>
          <div style={{transform:'scale(0.95)'}}>
            <LogarithmCalculator 
              explanations={logarithmExplanations}
            />
          </div> 
          <br/>
        </div>
      </div>
    </div>

    <br/>
    <SectionTableOfContents sections={genericSections}/>
    <br/>
    <br/>
    <br/>
    <Sections sections={genericSections}/>
    <br/>
    <br/>
    <br/>
  </>
);
}