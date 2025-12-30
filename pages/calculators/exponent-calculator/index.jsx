

// // import Head from 'next/head';
// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// // import ExplanationDetails from '@/app/components/ExplanationDetails';
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// // import ExponentCalculator from '@/app/components/calculators/arithmetics/ExponentCalculator';
// // import '../../pages.css';
// // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

// // export async function getStaticProps() {


// //   const navigationGroup=[
// //   {title:'Other Calculators',
// //     items:[
// //       // {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
// //       {title:'Root Calculator',link:'/calculators/root-calculator'},
// //       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
// //       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
// //       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
// //       {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
// //       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
// //       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
// //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// //       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
// //     ]
// //   }
// // ]



// //   const detailInstructions = [
// //     "Select the type of power operation you want to perform (Square, Cube, or Custom)",
// //     "Enter your base number in the first input field",
// //     "For custom powers, enter your desired exponent in the second field",
// //     "Click Calculate to see the result",
// //     "Hover over ? icons for additional help"
// //   ];

// //   const explanations = {
// //     square: {
// //       text: `When you square a number, you multiply it by itself. In mathematical notation, this is written as $x^2$.

// // For example:
// // - $5^2 = 5 × 5 = 25$
// // - $2.5^2 = 2.5 × 2.5 = 6.25$
// // - $(-3)^2 = (-3) × (-3) = 9$

// // Remember that when squaring a negative number, the result is always positive because negative × negative = positive.

// // This calculator can handle both integer and decimal numbers, and will display the result in standard notation for manageable numbers or scientific notation ($1.234e+10$) for very large or small results.`,
// // links:[

// //   {title:"Explore Exponents Table Page ",
// //     link:"/tables/arithmetics/exponential-table"},
// //     {title:"See Table of Integer Numbers Exponents (Powers) ",
// //       link:"/tables/arithmetics/powers-table"}
    
  
// // ]
// //     },
// //     cube: {
// //       text: `Cubing a number means multiplying it by itself three times. In mathematical notation, this is written as $x^3$.

// // For example:
// // - $2^3 = 2 × 2 × 2 = 8$
// // - $(-2)^3 = (-2) × (-2) × (-2) = -8$
// // - $1.5^3 = 1.5 × 1.5 × 1.5 = 3.375$

// // Unlike squares, when cubing a negative number, the result is negative because:
// // negative × negative × negative = negative

// // The calculator automatically handles any precision issues and will format very large results ($1000^3 = 1e+9$) in scientific notation for better readability.`
// //     },
// //     custom: {
// //       text: `Custom powers allow you to raise a number to any power (exponent). The mathematical notation is $x^n$ where:
// // - $x$ is your base number
// // - $n$ is your chosen power

// // Some examples:
// // - $2^4 = 2 × 2 × 2 × 2 = 16$
// // - $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} ≈ 0.1111$
// // - $5^{2.5} = 5^2 × \\sqrt{5} ≈ 55.9017$

// // **Important rules**:
// // • Positive numbers can be raised to any power
// // • Negative numbers can only be raised to integer powers (whole numbers)
// // • For negative bases with even powers, the result is positive
// // • For negative bases with odd powers, the result is negative
// // • Zero raised to a positive power is always 0
// // • Zero raised to zero or negative powers is undefined

// // The calculator uses high-precision arithmetic and will automatically format results in scientific notation when they become very large ($2^{100} = 1.2676e+30$) or very small ($2^{-50} = 8.8818e-16$).`
// //     }
// //   };

// //   return {
// //     props: {
// //       detailInstructions,
// //       explanations,
// //       navigationGroup,
// //     },
// //     revalidate: 86400
// //   };
// // }

// // export default function ExponentCalculatorPage({ detailInstructions, explanations, navigationGroup }) {
// //   return (
// //     <>
// //       <Head>
// //         <title>Exponent Calculator | Learn Math Class</title>
// //         <meta name="description" content="Free online exponent calculator for square, cube, and custom powers. Calculate powers and exponents with our easy-to-use calculator with step-by-step explanations." />
// //         <meta name="keywords" content="exponent calculator, exponential notation calculator, power calculator, exponential cal, math calculator, square calculator, cube calculator" />
// //         <link rel="canonical" href="https://www.learnmathclass.com/calculators/exponent-calculator" />
// //         <meta property="og:title" content="Exponent Calculator | Learn Math Class" />
// //         <meta property="og:description" content="Calculate powers and exponents easily with our free online calculator" />
// //         <meta property="og:url" content="https://www.learnmathclass.com/calculators/exponent-calculator" />
// //         <meta property="og:site_name" content="Learn Math Class" />
// //         <meta property="og:type" content="website" />
// //       </Head>
// //            <style jsx>{`
// //   @media (max-width: 1024px) {
// //     .layout-container > div:first-child,
// //     .layout-container > div:first-child *,
// //     :global([class*="vertical"]),
// //     :global([class*="vertical"]) * {
// //       position: static !important;
// //     }
// //   }
  
// //   .layout-container {
// //     display: grid;
// //     grid-template-columns: 20% 80%;
// //     gap: 20px;
// //     width: 100%;
// //   }
  
// //   @media (max-width: 1024px) {
// //     .layout-container {
// //       grid-template-columns: 1fr;
// //     }
// //   }
// // `}</style>


// //       {/* <GenericNavbar/> */}
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <Breadcrumb/>
// //       <OperaSidebar
// //         side='right'
// //         // topOffset='65px'
// //         sidebarWidth='45px'
// //         panelWidth='300px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       />
      
// //       <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Exponent Calculator</h1>
// //       <div style={{marginBottom:'20px'}}>
// //         <ExplanationDetails 
// //           instructions={detailInstructions}
// //           title='How to use Exponent Calculator'
// //         />
// //       </div>
// //       <div className="layout-container"> 
// //   {/* <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: '15% 80%',
// //       gap: '20px',
// //       width: '100%'
// //    }}> */}
// //       {/* Left column - Sidebar */}
// //       <div>
// //         <br/>
       
// //          <VerticalButtonGroup 
// //             items={navigationGroup}
// //             width="250px"       
// //             theme='lightBlue'
// //             isSticky={true}
// //             verticalOffset='200px'
// //          />
// //       </div>

// //       {/* Right column - Table */}
// //       <div>
// //          <div style={{width:'100%',margin:'auto'}}>
// //           <div style={{transform:'scale(0.95)'}}>
// //         <ExponentCalculator explanations={explanations}/>
// //       </div> 
          
// //            {/* <div style={{transform:'scale(0.90)'}}>
// //         <RootCalculator explanations={explanations}
// //         />
// //       </div>  */}
// //             <br/>
// //             <br/>
// //             <br/>
           
            
// //          </div>
// //       </div>
// //    </div>
     
// //       {/* <div style={{transform:'scale(0.85)'}}>
// //         <ExponentCalculator explanations={explanations}/>
// //       </div> */}
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       {/* <ScrollUpButton/>    */}
// //     </>
// //   );
// // }


// import Head from 'next/head';
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';
// import Sections from '@/app/components/page-components/section/Sections';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import ExplanationDetails from '@/app/components/ExplanationDetails';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import ExponentCalculator from '@/app/components/calculators/arithmetics/ExponentCalculator';
// import '../../pages.css';
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

// export async function getStaticProps() {

// const navigationGroup=[
//   {title:'Other Calculators',
//     items:[
//       {title:'Root Calculator',link:'/calculators/root-calculator'},
//       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
//       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
//       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
//       {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
//       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
//       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
//       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
//       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
//     ]
//   }
// ]

// const detailInstructions = [
//   "Select the type of power operation you want to perform (Square, Cube, or Custom)",
//   "Enter your base number in the first input field",
//   "For custom powers, enter your desired exponent in the second field",
//   "Click Calculate to see the result",
//   "Hover over ? icons for additional help"
// ];

// const explanations = {
//   square: {
//     text: `When you square a number, you multiply it by itself. In mathematical notation, this is written as $x^2$.

// For example:
// - $5^2 = 5 × 5 = 25$
// - $2.5^2 = 2.5 × 2.5 = 6.25$
// - $(-3)^2 = (-3) × (-3) = 9$

// Remember that when squaring a negative number, the result is always positive because negative × negative = positive.

// This calculator can handle both integer and decimal numbers, and will display the result in standard notation for manageable numbers or scientific notation ($1.234e+10$) for very large or small results.`,
//     links:[
//       {title:"Explore Exponents Table Page",
//         link:"/tables/arithmetics/exponential-table"},
//       {title:"See Table of Integer Numbers Exponents (Powers)",
//         link:"/tables/arithmetics/powers-table"}
//     ]
//   },
//   cube: {
//     text: `Cubing a number means multiplying it by itself three times. In mathematical notation, this is written as $x^3$.

// For example:
// - $2^3 = 2 × 2 × 2 = 8$
// - $(-2)^3 = (-2) × (-2) × (-2) = -8$
// - $1.5^3 = 1.5 × 1.5 × 1.5 = 3.375$

// Unlike squares, when cubing a negative number, the result is negative because:
// negative × negative × negative = negative

// The calculator automatically handles any precision issues and will format very large results ($1000^3 = 1e+9$) in scientific notation for better readability.`
//   },
//   custom: {
//     text: `Custom powers allow you to raise a number to any power (exponent). The mathematical notation is $x^n$ where:
// - $x$ is your base number
// - $n$ is your chosen power

// Some examples:
// - $2^4 = 2 × 2 × 2 × 2 = 16$
// - $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} ≈ 0.1111$
// - $5^{2.5} = 5^2 × \\sqrt{5} ≈ 55.9017$

// **Important rules**:
// • Positive numbers can be raised to any power
// • Negative numbers can only be raised to integer powers (whole numbers)
// • For negative bases with even powers, the result is positive
// • For negative bases with odd powers, the result is negative
// • Zero raised to a positive power is always 0
// • Zero raised to zero or negative powers is undefined

// The calculator uses high-precision arithmetic and will automatically format results in scientific notation when they become very large ($2^{100} = 1.2676e+30$) or very small ($2^{-50} = 8.8818e-16$).`
//   }
// };

// const keyWords = [
//   'exponent calculator',
//   'power calculator',
//   'exponential calculator',
//   'square calculator',
//   'cube calculator',
//   'calculate exponents',
//   'raise to power',
//   'exponentiation calculator',
//   'online exponent tool',
//   'free power calculator',
//   'math exponent calculator',
//   'exponential notation',
//   'powers and exponents',
//   'base and exponent',
//   'scientific notation calculator'
// ];

// const sectionsContent = {
//   obj1: {
//     title: `Getting Started with the Calculator`,
//     content: `The exponent calculator has three main parts: the power type selector at the top, input fields in the middle, and Calculate/Reset buttons at the bottom. Start by choosing between Square (power of 2), Cube (power of 3), or Custom Power (any exponent you choose).

// After selecting your power type, enter your base number in the first box. This is the number you want to raise to a power. The calculator accepts whole numbers, decimals, and negative numbers. For example, try entering $5$, $2.5$, or $-3$.

// The second box shows your exponent. For Square and Cube, this fills automatically with $2$ or $3$. For Custom Power, you can type any exponent you want—positive, negative, or decimal. Try $4$ for a fourth power, or $0.5$ for a square root.

// Click the blue **Calculate** button to see your result appear on the right side of the equation. The calculator displays answers in standard form when possible, or scientific notation (like $1.234e+10$) for very large or very small numbers. Use **Reset** to clear everything and start over.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Choosing Between Square, Cube, and Custom Power`,
//     content: `The three radio buttons at the top let you pick which type of power calculation to perform. **Square** is the most common—it multiplies your number by itself once ($x \\times x = x^2$). Choose this when you need to find areas, work with quadratic equations, or square measurements.

// **Cube** multiplies your number by itself twice ($x \\times x \\times x = x^3$). Select this option for volume calculations, cubic measurements, or when working with three-dimensional problems. The cube of $2$ is $8$, and the cube of $3$ is $27$.

// **Custom Power** opens up all possibilities. You can enter any exponent: whole numbers like $4$ or $5$, negative numbers like $-2$ (which gives you fractions), or decimals like $1.5$. This mode is perfect for advanced calculations, fractional exponents, or when following specific formulas.

// Switch between modes by clicking the radio buttons. The calculator remembers your base number, so you can easily compare $5^2$ versus $5^3$ versus $5^4$ by changing modes and recalculating.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Entering Your Base Number`,
//     content: `Click in the first input box to enter your base number. You can type whole numbers ($5$, $12$, $100$), decimals ($2.5$, $3.14$, $0.75$), or negative numbers ($-3$, $-10$, $-2.5$). The calculator handles all these types automatically.

// For decimals, use a period (dot) not a comma: type $3.5$ not $3,5$. You can enter as many decimal places as you need—the calculator uses high-precision math to maintain accuracy. Try $2.718$ (approximately $e$) or $3.14159$ (approximately $\\pi$).

// Negative bases work but have restrictions. You can square or cube them freely: $(-2)^2 = 4$ and $(-2)^3 = -8$. For custom powers, negative bases only work with whole number exponents. Trying $(-2)^{2.5}$ will cause an error because fractional powers of negatives involve imaginary numbers.

// The question mark (?) icon next to the input shows a helpful tooltip when you hover over it. If you make a mistake, the box turns red and displays an error message below. Simply correct your entry and the error disappears.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Setting the Exponent`,
//     content: `The second input box controls your exponent (the power). For **Square** and **Cube** modes, this box automatically fills with $2$ or $3$ and is locked—you cannot edit it. This prevents mistakes and makes these common calculations faster.

// In **Custom Power** mode, the exponent box becomes editable. Click inside and type any number. Positive whole numbers like $4$, $5$, or $10$ work straightforwardly: $2^4 = 16$, $2^5 = 32$, $2^{10} = 1024$.

// **Negative exponents** flip your number into a fraction. The exponent $-2$ means "one divided by the square": $2^{-2} = \\frac{1}{2^2} = \\frac{1}{4} = 0.25$. Try $3^{-1} = 0.3333$ or $10^{-3} = 0.001$.

// **Decimal exponents** work too: $4^{0.5}$ equals $\\sqrt{4} = 2$, and $8^{0.333}$ approximately equals the cube root of $8$, which is $2$. The calculator computes these precisely using logarithmic methods. Remember that negative bases cannot use decimal exponents.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Reading Your Results`,
//     content: `After clicking Calculate, your answer appears on the right side of the equals sign. For everyday numbers, you'll see standard notation: $5^2 = 25$ or $2^3 = 8$. The calculator displays up to four decimal places for precision: $2.5^2 = 6.2500$.

// Large results automatically switch to **scientific notation** for readability. Instead of showing $1000000000$, you'll see $1.0000e+9$ (which means $1.0 \\times 10^9$). The $e+9$ means "move the decimal point 9 places right." For example, $2^{20} = 1.0486e+6$ equals $1,048,576$.

// Very small numbers use negative exponents in scientific notation. The result $2^{-10} = 9.7656e-4$ means $0.00097656$ (move the decimal point 4 places left). This format keeps tiny numbers readable without long strings of zeros.

// If you see unusual results, check your inputs. Entering $0^0$ or $0^{-1}$ causes errors because these are mathematically undefined. The result $(-2)^{1.5}$ will fail because negative bases need integer exponents in this calculator.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Understanding Error and Warning Messages`,
//     content: `The calculator displays helpful messages when something goes wrong. **"Error: Invalid base number"** appears when the first box contains non-numeric characters like letters or symbols. Delete any text and enter only numbers, decimals, and minus signs.

// **"Error: Invalid exponent"** means the second box has wrong formatting. Check for stray characters or multiple decimal points. The exponent must be a valid number—positive, negative, whole, or decimal.

// **Warning messages** appear in yellow text when you type unusual characters. "Please use only numbers and decimal point" reminds you to avoid commas, spaces, or letters. The calculator won't compute until you fix the warning.

// Some mathematical impossibilities trigger errors: negative bases with decimal exponents, zero to negative powers, or extremely large calculations that exceed the calculator's precision. The error text explains what went wrong so you can adjust your inputs and try again. Click Reset to clear all messages and start fresh.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `What Are Exponents`,
//     content: `An exponent tells you how many times to multiply a number by itself. In the expression $2^3$, the $2$ is the **base** and the $3$ is the **exponent** or **power**. This means: multiply $2$ by itself $3$ times: $2 \\times 2 \\times 2 = 8$.

// Think of exponents as a shorthand for repeated multiplication. Instead of writing $5 \\times 5 \\times 5 \\times 5$, we write $5^4$. This is much cleaner and easier to read, especially for large powers like $2^{100}$.

// The exponent can be any number. Whole number exponents are straightforward: $3^4 = 81$ means multiply $3$ four times. But exponents can also be fractions (like $4^{0.5} = 2$), decimals (like $2^{1.5} \\approx 2.828$), or even negative (like $2^{-2} = 0.25$).

// **Special cases**: Any number to the power of $1$ equals itself: $7^1 = 7$. Any number to the power of $0$ equals $1$: $5^0 = 1$ (except $0^0$, which is undefined). These rules work for all numbers.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Positive vs Negative Exponents`,
//     content: `**Positive exponents** make numbers bigger (unless the base is between $0$ and $1$). When you see $2^5$, count up: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$. Each step multiplies by the base again.

// **Negative exponents** create fractions by flipping the base. The rule is: $x^{-n} = \\frac{1}{x^n}$. So $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} = 0.125$. Think of negative exponents as "reciprocal powers." Try $5^{-2} = \\frac{1}{25} = 0.04$.

// Negative exponents never make the base negative—they make results smaller (between $0$ and $1$ for bases greater than $1$). For example, $10^{-1} = 0.1$, $10^{-2} = 0.01$, $10^{-3} = 0.001$. This pattern continues: each negative power adds another zero after the decimal.

// **Fractional (decimal) exponents** relate to roots: $x^{0.5} = \\sqrt{x}$, $x^{0.333...} \\approx \\sqrt[3]{x}$. The fraction $\\frac{1}{n}$ as an exponent means "take the nth root." So $16^{0.25} = \\sqrt[4]{16} = 2$ because $2^4 = 16$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Basic Exponent Rules You Should Know`,
//     content: `**Multiplying same bases**: When multiplying powers with the same base, add the exponents: $x^a \\times x^b = x^{a+b}$. Example: $2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$. You can verify: $8 \\times 16 = 128$.

// **Dividing same bases**: When dividing powers with the same base, subtract the exponents: $\\frac{x^a}{x^b} = x^{a-b}$. Example: $\\frac{2^5}{2^2} = 2^{5-2} = 2^3 = 8$. Check: $\\frac{32}{4} = 8$.

// **Power of a power**: When raising a power to another power, multiply the exponents: $(x^a)^b = x^{a \\times b}$. Example: $(2^3)^2 = 2^{3 \\times 2} = 2^6 = 64$. Verify: $8^2 = 64$.

// **Special bases**: $1$ raised to any power equals $1$: $1^{100} = 1$. Zero raised to any positive power equals $0$: $0^5 = 0$. But $0^0$ and $0^{-1}$ are undefined. Negative bases with even exponents give positive results: $(-2)^4 = 16$. Negative bases with odd exponents stay negative: $(-2)^3 = -8$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Real-World Examples of Exponents`,
//     content: `**Area and Volume**: When you calculate the area of a square with side length $5$ meters, you compute $5^2 = 25$ square meters. For a cube's volume with side $3$ cm, calculate $3^3 = 27$ cubic centimeters.

// **Population Growth**: If a bacteria population doubles every hour, after $4$ hours you have $2^4 = 16$ times the original amount. After $10$ hours: $2^{10} = 1024$ times more bacteria.

// **Computer Memory**: Storage sizes use powers of $2$. One kilobyte is $2^{10} = 1024$ bytes. One megabyte is $2^{20} = 1,048,576$ bytes. One gigabyte is $2^{30}$ bytes, over one billion.

// **Money and Interest**: With $5\\%$ annual compound interest, $\\$1000$ grows to $\\$1000 \\times 1.05^{10} \\approx \\$1628.89$ after $10$ years. The exponent $10$ represents the number of years.

// **Distance and Scale**: Scientific notation uses powers of $10$. The Earth's mass is about $6 \\times 10^{24}$ kg, which means $6$ followed by $24$ zeros. Light travels at $3 \\times 10^8$ meters per second.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj11: {
//     title: `Practice Problems to Try`,
//     content: `**Easy problems**: Calculate $3^2$, $4^3$, and $10^4$. Answers: $9$, $64$, and $10000$. Try $6^2$ and verify you get $36$. Compute $1^{100}$ and confirm it equals $1$.

// **Negative exponents**: Find $2^{-3}$, $5^{-2}$, and $10^{-4}$. Answers: $0.125$, $0.04$, and $0.0001$. Remember these give fractions—reciprocals of the positive powers.

// **Decimal bases**: Calculate $2.5^2$, $1.5^3$, and $0.5^4$. Answers: $6.25$, $3.375$, and $0.0625$. Notice how bases less than $1$ get smaller when raised to powers.

// **Mixed problems**: Try $(-2)^3$, $(-3)^2$, and $(-1)^5$. Answers: $-8$, $9$, and $-1$. Observe that negative bases with even powers turn positive, but odd powers stay negative.

// **Challenge problems**: Compute $2^{10}$, $3^5$, and $5^4$. Answers: $1024$, $243$, and $625$. For advanced practice, try $2^{-5}$ (answer: $0.03125$) and verify $4^{0.5} = 2$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj12: {
//     title: `Related Calculators and Resources`,
//     content: `**Root Calculator** performs the inverse of exponents. Instead of $2^3 = 8$, find what number cubed equals $8$ (answer: $2$). Use this when you know the result and need to find the base.

// **Logarithm Calculator** solves for exponents. If $2^x = 32$, logarithms tell you $x = 5$. Logarithms and exponents are inverse operations, like addition and subtraction.

// **Exponential Tables** show pre-calculated powers for quick reference. Look up $2^1$ through $2^{20}$ or other common bases without calculating each time.

// **Scientific Calculator** combines exponents with other operations for complex equations. Use it when exponents are part of larger formulas requiring multiple steps.

// For deeper learning, explore exponential growth and decay in science, compound interest in finance, and polynomial functions in algebra where exponents appear in every term.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };

// const faqQuestions = {
//   obj1: {
//     question: "How do I calculate an exponent or power?",
//     answer: "To calculate an exponent, multiply the base number by itself as many times as indicated by the exponent. For example, 2^3 means 2 × 2 × 2 = 8. Use this calculator by entering your base number, selecting the power type (square, cube, or custom), and clicking Calculate. The result appears instantly."
//   },
//   obj2: {
//     question: "What's the difference between square and cube?",
//     answer: "Square means raising a number to the power of 2 (multiplying it by itself once): 5^2 = 5 × 5 = 25. Cube means raising to the power of 3 (multiplying by itself twice): 5^3 = 5 × 5 × 5 = 125. Square gives area measurements, while cube gives volume measurements."
//   },
//   obj3: {
//     question: "Can I use negative numbers as the base?",
//     answer: "Yes, but with limitations. Negative bases work perfectly for whole number exponents: (-2)^3 = -8 and (-2)^4 = 16. However, you cannot raise negative numbers to decimal or fractional exponents in this calculator because that would produce imaginary numbers. For custom powers with negative bases, use only integer exponents."
//   },
//   obj4: {
//     question: "What does a negative exponent mean?",
//     answer: "A negative exponent means reciprocal or 'one divided by' the positive power. For example, 2^(-3) = 1/(2^3) = 1/8 = 0.125. Negative exponents create fractions less than 1. They're common in scientific notation for very small numbers like 0.001 = 10^(-3)."
//   },
//   obj5: {
//     question: "Why does anything to the power of 0 equal 1?",
//     answer: "By mathematical convention and the rules of exponents, any non-zero number raised to the power of 0 equals 1. This comes from the division rule: x^a ÷ x^a = x^(a-a) = x^0, and any number divided by itself equals 1. Therefore x^0 = 1. The only exception is 0^0, which is undefined."
//   }
// };

// const schemas = {
//   webApplication: {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     "name": "Exponent Calculator - Calculate Powers and Exponents",
//     "description": "Free online exponent calculator for square, cube, and custom powers. Calculate any base raised to any exponent with instant results and step-by-step explanations.",
//     "url": "https://www.learnmathclass.com/calculators/exponent-calculator",
//     "applicationCategory": "EducationalApplication",
//     "operatingSystem": "Any",
//     "offers": {
//       "@type": "Offer",
//       "price": "0",
//       "priceCurrency": "USD"
//     },
//     "featureList": [
//       "Square calculation (power of 2)",
//       "Cube calculation (power of 3)",
//       "Custom power calculation with any exponent",
//       "Support for positive and negative bases",
//       "Support for positive and negative exponents",
//       "Decimal and fractional exponent support",
//       "High-precision arithmetic with scientific notation",
//       "Real-time error validation and helpful messages"
//     ],
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString(),
//     "inLanguage": "en-US",
//     "isAccessibleForFree": true,
//     "learningResourceType": "Interactive Tool",
//     "educationalLevel": "Middle School, High School, College",
//     "keywords": keyWords.join(", ")
//   },
  
//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Calculators",
//         "item": "https://www.learnmathclass.com/calculators"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Exponent Calculator",
//         "item": "https://www.learnmathclass.com/calculators/exponent-calculator"
//       }
//     ]
//   },
  
//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// };

// const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// };

// return {
//   props: {
//     detailInstructions,
//     explanations,
//     sectionsContent,
//     introContent,
//     navigationGroup,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Exponent Calculator | Calculate Powers and Exponents Online",
//       description: "Free exponent calculator for square, cube, and custom powers. Calculate any base raised to any exponent instantly with step-by-step explanations and examples.",
//       keywords: keyWords.join(", "),
//       url: "/calculators/exponent-calculator",
//       name: "Exponent Calculator - Powers and Exponents Tool"
//     },
//   },
//   revalidate: 86400
// };
// }

// export default function ExponentCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, explanations, navigationGroup, faqQuestions, schemas}) {

// const genericSections = Object.keys(sectionsContent).map((key, index) => ({
//   id: `${index + 1}`,
//   title: sectionsContent[key].title,
//   link: sectionsContent[key].link,
//   content: [sectionsContent[key].content]
// }));

// return (
//   <>
//     <Head>
//       <title>{seoData.title}</title>
//       <meta name="description" content={seoData.description} />
//       <meta name="keywords" content={seoData.keywords} />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
      
//       <meta property="og:title" content={seoData.title} />
//       <meta property="og:description" content={seoData.description} />
//       <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//       <meta property="og:type" content="website" />
//       <meta property="og:site_name" content="Learn Math Class" />
      
//       <meta name="twitter:card" content="summary" />
//       <meta name="twitter:title" content={seoData.title} />
//       <meta name="twitter:description" content={seoData.description} />
      
//       <meta name="robots" content="index, follow" />
      
//       <script 
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
//       />
      
//       <script 
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
//       />
      
//       <script 
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
//       />
//     </Head>

//     <style jsx>{`
//       @media (max-width: 1024px) {
//         .layout-container > div:first-child,
//         .layout-container > div:first-child *,
//         :global([class*="vertical"]),
//         :global([class*="vertical"]) * {
//           position: static !important;
//         }
//       }
      
//       .layout-container {
//         display: grid;
//         grid-template-columns: 20% 80%;
//         gap: 20px;
//         width: 100%;
//       }
      
//       @media (max-width: 1024px) {
//         .layout-container {
//           grid-template-columns: 1fr;
//         }
//       }
//     `}</style>

//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//     <OperaSidebar
//       side='right'
//       sidebarWidth='45px'
//       panelWidth='300px'
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'
//     />
    
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Exponent Calculator</h1>
    
//     <div className="layout-container"> 
//       <div>
//         <br/>
//         <VerticalButtonGroup 
//           items={navigationGroup}
//           width="250px"       
//           theme='lightBlue'
//           isSticky={true}
//           verticalOffset='200px'
//         />
//       </div>

//       <div>
//         <div style={{width:'100%',margin:'auto'}}>
//           <div style={{transform:'scale(0.95)'}}>
//             <ExponentCalculator 
//               explanations={explanations}
//               detailInstructions={detailInstructions}
//             />
//           </div> 
//           <br/>
//         </div>
//       </div>
//     </div>
    
//     <br/>
//     <SectionTableOfContents sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <Sections sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//   </>
// );
// }


import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ExponentCalculator from '@/app/components/calculators/arithmetics/ExponentCalculator';
import '../../pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export async function getStaticProps() {

const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]

const detailInstructions = [
  "Select the type of power operation you want to perform (Square, Cube, or Custom)",
  "Enter your base number in the first input field",
  "For custom powers, enter your desired exponent in the second field",
  "Click Calculate to see the result",
  "Hover over ? icons for additional help"
];

const explanations = {
  square: {
    text: `When you square a number, you multiply it by itself. In mathematical notation, this is written as $x^2$.

For example:
- $5^2 = 5 × 5 = 25$
- $2.5^2 = 2.5 × 2.5 = 6.25$
- $(-3)^2 = (-3) × (-3) = 9$

Remember that when squaring a negative number, the result is always positive because negative × negative = positive.

This calculator can handle both integer and decimal numbers, and will display the result in standard notation for manageable numbers or scientific notation ($1.234e+10$) for very large or small results.`,
    links:[
      {title:"Explore Exponents Table Page",
        link:"/tables/arithmetics/exponential-table"},
      {title:"See Table of Integer Numbers Exponents (Powers)",
        link:"/tables/arithmetics/powers-table"}
    ]
  },
  cube: {
    text: `Cubing a number means multiplying it by itself three times. In mathematical notation, this is written as $x^3$.

For example:
- $2^3 = 2 × 2 × 2 = 8$
- $(-2)^3 = (-2) × (-2) × (-2) = -8$
- $1.5^3 = 1.5 × 1.5 × 1.5 = 3.375$

Unlike squares, when cubing a negative number, the result is negative because:
negative × negative × negative = negative

The calculator automatically handles any precision issues and will format very large results ($1000^3 = 1e+9$) in scientific notation for better readability.`
  },
  custom: {
    text: `Custom powers allow you to raise a number to any power (exponent). The mathematical notation is $x^n$ where:
- $x$ is your base number
- $n$ is your chosen power

Some examples:
- $2^4 = 2 × 2 × 2 × 2 = 16$
- $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} ≈ 0.1111$
- $5^{2.5} = 5^2 × \\sqrt{5} ≈ 55.9017$

**Important rules**:
• Positive numbers can be raised to any power
• Negative numbers can only be raised to integer powers (whole numbers)
• For negative bases with even powers, the result is positive
• For negative bases with odd powers, the result is negative
• Zero raised to a positive power is always 0
• Zero raised to zero or negative powers is undefined

The calculator uses high-precision arithmetic and will automatically format results in scientific notation when they become very large ($2^{100} = 1.2676e+30$) or very small ($2^{-50} = 8.8818e-16$).`
  }
};

const keyWords = [
  'exponent calculator',
  'power calculator',
  'exponential calculator',
  'square calculator',
  'cube calculator',
  'calculate exponents',
  'raise to power',
  'exponentiation calculator',
  'online exponent tool',
  'free power calculator',
  'math exponent calculator',
  'exponential notation',
  'powers and exponents',
  'base and exponent',
  'scientific notation calculator'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Calculator`,
    content: `The exponent calculator has three main parts: the power type selector at the top, input fields in the middle, and Calculate/Reset buttons at the bottom. Start by choosing between Square (power of 2), Cube (power of 3), or Custom Power (any exponent you choose).

After selecting your power type, enter your base number in the first box. This is the number you want to raise to a power. The calculator accepts whole numbers, decimals, and negative numbers. For example, try entering $5$, $2.5$, or $-3$.

The second box shows your exponent. For Square and Cube, this fills automatically with $2$ or $3$. For Custom Power, you can type any exponent you want—positive, negative, or decimal. Try $4$ for a fourth power, or $0.5$ for a square root.

Click the blue **Calculate** button to see your result appear on the right side of the equation. The calculator displays answers in standard form when possible, or scientific notation (like $1.234e+10$) for very large or very small numbers. Use **Reset** to clear everything and start over.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Choosing Between Square, Cube, and Custom Power`,
    content: `The three radio buttons at the top let you pick which type of power calculation to perform. **Square** is the most common—it multiplies your number by itself once ($x \\times x = x^2$). Choose this when you need to find areas, work with quadratic equations, or square measurements.

**Cube** multiplies your number by itself twice ($x \\times x \\times x = x^3$). Select this option for volume calculations, cubic measurements, or when working with three-dimensional problems. The cube of $2$ is $8$, and the cube of $3$ is $27$.

**Custom Power** opens up all possibilities. You can enter any exponent: whole numbers like $4$ or $5$, negative numbers like $-2$ (which gives you fractions), or decimals like $1.5$. This mode is perfect for advanced calculations, fractional exponents, or when following specific formulas.

Switch between modes by clicking the radio buttons. The calculator remembers your base number, so you can easily compare $5^2$ versus $5^3$ versus $5^4$ by changing modes and recalculating.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Entering Your Base Number`,
    content: `Click in the first input box to enter your base number. You can type whole numbers ($5$, $12$, $100$), decimals ($2.5$, $3.14$, $0.75$), or negative numbers ($-3$, $-10$, $-2.5$). The calculator handles all these types automatically.

For decimals, use a period (dot) not a comma: type $3.5$ not $3,5$. You can enter as many decimal places as you need—the calculator uses high-precision math to maintain accuracy. Try $2.718$ (approximately $e$) or $3.14159$ (approximately $\\pi$).

Negative bases work but have restrictions. You can square or cube them freely: $(-2)^2 = 4$ and $(-2)^3 = -8$. For custom powers, negative bases only work with whole number exponents. Trying $(-2)^{2.5}$ will cause an error because fractional powers of negatives involve imaginary numbers.

The question mark (?) icon next to the input shows a helpful tooltip when you hover over it. If you make a mistake, the box turns red and displays an error message below. Simply correct your entry and the error disappears.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Setting the Exponent`,
    content: `The second input box controls your exponent (the power). For **Square** and **Cube** modes, this box automatically fills with $2$ or $3$ and is locked—you cannot edit it. This prevents mistakes and makes these common calculations faster.

In **Custom Power** mode, the exponent box becomes editable. Click inside and type any number. Positive whole numbers like $4$, $5$, or $10$ work straightforwardly: $2^4 = 16$, $2^5 = 32$, $2^{10} = 1024$.

**Negative exponents** flip your number into a fraction. The exponent $-2$ means "one divided by the square": $2^{-2} = \\frac{1}{2^2} = \\frac{1}{4} = 0.25$. Try $3^{-1} = 0.3333$ or $10^{-3} = 0.001$.

**Decimal exponents** work too: $4^{0.5}$ equals $\\sqrt{4} = 2$, and $8^{0.333}$ approximately equals the cube root of $8$, which is $2$. The calculator computes these precisely using logarithmic methods. Remember that negative bases cannot use decimal exponents.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Reading Your Results`,
    content: `After clicking Calculate, your answer appears on the right side of the equals sign. For everyday numbers, you'll see standard notation: $5^2 = 25$ or $2^3 = 8$. The calculator displays up to four decimal places for precision: $2.5^2 = 6.2500$.

Large results automatically switch to **scientific notation** for readability. Instead of showing $1000000000$, you'll see $1.0000e+9$ (which means $1.0 \\times 10^9$). The $e+9$ means "move the decimal point 9 places right." For example, $2^{20} = 1.0486e+6$ equals $1,048,576$.

Very small numbers use negative exponents in scientific notation. The result $2^{-10} = 9.7656e-4$ means $0.00097656$ (move the decimal point 4 places left). This format keeps tiny numbers readable without long strings of zeros.

If you see unusual results, check your inputs. Entering $0^0$ or $0^{-1}$ causes errors because these are mathematically undefined. The result $(-2)^{1.5}$ will fail because negative bases need integer exponents in this calculator.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Understanding Error and Warning Messages`,
    content: `The calculator displays helpful messages when something goes wrong. **"Error: Invalid base number"** appears when the first box contains non-numeric characters like letters or symbols. Delete any text and enter only numbers, decimals, and minus signs.

**"Error: Invalid exponent"** means the second box has wrong formatting. Check for stray characters or multiple decimal points. The exponent must be a valid number—positive, negative, whole, or decimal.

**Warning messages** appear in yellow text when you type unusual characters. "Please use only numbers and decimal point" reminds you to avoid commas, spaces, or letters. The calculator won't compute until you fix the warning.

Some mathematical impossibilities trigger errors: negative bases with decimal exponents, zero to negative powers, or extremely large calculations that exceed the calculator's precision. The error text explains what went wrong so you can adjust your inputs and try again. Click Reset to clear all messages and start fresh.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Exponents`,
    content: `An exponent tells you how many times to multiply a number by itself. In the expression $2^3$, the $2$ is the **base** and the $3$ is the **exponent** or **power**. This means: multiply $2$ by itself $3$ times: $2 \\times 2 \\times 2 = 8$.

Think of exponents as a shorthand for repeated multiplication. Instead of writing $5 \\times 5 \\times 5 \\times 5$, we write $5^4$. This is much cleaner and easier to read, especially for large powers like $2^{100}$.

The exponent can be any number. Whole number exponents are straightforward: $3^4 = 81$ means multiply $3$ four times. But exponents can also be fractions (like $4^{0.5} = 2$), decimals (like $2^{1.5} \\approx 2.828$), or even negative (like $2^{-2} = 0.25$).

**Special cases**: Any number to the power of $1$ equals itself: $7^1 = 7$. Any number to the power of $0$ equals $1$: $5^0 = 1$ (except $0^0$, which is undefined). These rules work for all numbers.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Positive vs Negative Exponents`,
    content: `**Positive exponents** make numbers bigger (unless the base is between $0$ and $1$). When you see $2^5$, count up: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$. Each step multiplies by the base again.

**Negative exponents** create fractions by flipping the base. The rule is: $x^{-n} = \\frac{1}{x^n}$. So $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} = 0.125$. Think of negative exponents as "reciprocal powers." Try $5^{-2} = \\frac{1}{25} = 0.04$.

Negative exponents never make the base negative—they make results smaller (between $0$ and $1$ for bases greater than $1$). For example, $10^{-1} = 0.1$, $10^{-2} = 0.01$, $10^{-3} = 0.001$. This pattern continues: each negative power adds another zero after the decimal.

**Fractional (decimal) exponents** relate to roots: $x^{0.5} = \\sqrt{x}$, $x^{0.333...} \\approx \\sqrt[3]{x}$. The fraction $\\frac{1}{n}$ as an exponent means "take the nth root." So $16^{0.25} = \\sqrt[4]{16} = 2$ because $2^4 = 16$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Basic Exponent Rules You Should Know`,
    content: `**Multiplying same bases**: When multiplying powers with the same base, add the exponents: $x^a \\times x^b = x^{a+b}$. Example: $2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$. You can verify: $8 \\times 16 = 128$.

**Dividing same bases**: When dividing powers with the same base, subtract the exponents: $\\frac{x^a}{x^b} = x^{a-b}$. Example: $\\frac{2^5}{2^2} = 2^{5-2} = 2^3 = 8$. Check: $\\frac{32}{4} = 8$.

**Power of a power**: When raising a power to another power, multiply the exponents: $(x^a)^b = x^{a \\times b}$. Example: $(2^3)^2 = 2^{3 \\times 2} = 2^6 = 64$. Verify: $8^2 = 64$.

**Special bases**: $1$ raised to any power equals $1$: $1^{100} = 1$. Zero raised to any positive power equals $0$: $0^5 = 0$. But $0^0$ and $0^{-1}$ are undefined. Negative bases with even exponents give positive results: $(-2)^4 = 16$. Negative bases with odd exponents stay negative: $(-2)^3 = -8$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Real-World Examples of Exponents`,
    content: `**Area and Volume**: When you calculate the area of a square with side length $5$ meters, you compute $5^2 = 25$ square meters. For a cube's volume with side $3$ cm, calculate $3^3 = 27$ cubic centimeters.

**Population Growth**: If a bacteria population doubles every hour, after $4$ hours you have $2^4 = 16$ times the original amount. After $10$ hours: $2^{10} = 1024$ times more bacteria.

**Computer Memory**: Storage sizes use powers of $2$. One kilobyte is $2^{10} = 1024$ bytes. One megabyte is $2^{20} = 1,048,576$ bytes. One gigabyte is $2^{30}$ bytes, over one billion.

**Money and Interest**: With $5\\%$ annual compound interest, 1000 USD grows to 1000 times $1.05^{10}$ $\\approx 1628.89$ after $10$ years. The exponent $10$ represents the number of years.

**Distance and Scale**: Scientific notation uses powers of $10$. The Earth's mass is about $6 \\times 10^{24}$ kg, which means $6$ followed by $24$ zeros. Light travels at $3 \\times 10^8$ meters per second.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Practice Problems to Try`,
    content: `**Easy problems**: Calculate $3^2$, $4^3$, and $10^4$. Answers: $9$, $64$, and $10000$. Try $6^2$ and verify you get $36$. Compute $1^{100}$ and confirm it equals $1$.

**Negative exponents**: Find $2^{-3}$, $5^{-2}$, and $10^{-4}$. Answers: $0.125$, $0.04$, and $0.0001$. Remember these give fractions—reciprocals of the positive powers.

**Decimal bases**: Calculate $2.5^2$, $1.5^3$, and $0.5^4$. Answers: $6.25$, $3.375$, and $0.0625$. Notice how bases less than $1$ get smaller when raised to powers.

**Mixed problems**: Try $(-2)^3$, $(-3)^2$, and $(-1)^5$. Answers: $-8$, $9$, and $-1$. Observe that negative bases with even powers turn positive, but odd powers stay negative.

**Challenge problems**: Compute $2^{10}$, $3^5$, and $5^4$. Answers: $1024$, $243$, and $625$. For advanced practice, try $2^{-5}$ (answer: $0.03125$) and verify $4^{0.5} = 2$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Related Calculators and Resources`,
    content: `**Root Calculator** performs the inverse of exponents. Instead of $2^3 = 8$, find what number cubed equals $8$ (answer: $2$). Use this when you know the result and need to find the base.

**Logarithm Calculator** solves for exponents. If $2^x = 32$, logarithms tell you $x = 5$. Logarithms and exponents are inverse operations, like addition and subtraction.

**Exponential Tables** show pre-calculated powers for quick reference. Look up $2^1$ through $2^{20}$ or other common bases without calculating each time.

**Scientific Calculator** combines exponents with other operations for complex equations. Use it when exponents are part of larger formulas requiring multiple steps.

For deeper learning, explore exponential growth and decay in science, compound interest in finance, and polynomial functions in algebra where exponents appear in every term.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "How do I calculate an exponent or power?",
    answer: "To calculate an exponent, multiply the base number by itself as many times as indicated by the exponent. For example, 2^3 means 2 × 2 × 2 = 8. Use this calculator by entering your base number, selecting the power type (square, cube, or custom), and clicking Calculate. The result appears instantly."
  },
  obj2: {
    question: "What's the difference between square and cube?",
    answer: "Square means raising a number to the power of 2 (multiplying it by itself once): 5^2 = 5 × 5 = 25. Cube means raising to the power of 3 (multiplying by itself twice): 5^3 = 5 × 5 × 5 = 125. Square gives area measurements, while cube gives volume measurements."
  },
  obj3: {
    question: "Can I use negative numbers as the base?",
    answer: "Yes, but with limitations. Negative bases work perfectly for whole number exponents: (-2)^3 = -8 and (-2)^4 = 16. However, you cannot raise negative numbers to decimal or fractional exponents in this calculator because that would produce imaginary numbers. For custom powers with negative bases, use only integer exponents."
  },
  obj4: {
    question: "What does a negative exponent mean?",
    answer: "A negative exponent means reciprocal or 'one divided by' the positive power. For example, 2^(-3) = 1/(2^3) = 1/8 = 0.125. Negative exponents create fractions less than 1. They're common in scientific notation for very small numbers like 0.001 = 10^(-3)."
  },
  obj5: {
    question: "Why does anything to the power of 0 equal 1?",
    answer: "By mathematical convention and the rules of exponents, any non-zero number raised to the power of 0 equals 1. This comes from the division rule: x^a ÷ x^a = x^(a-a) = x^0, and any number divided by itself equals 1. Therefore x^0 = 1. The only exception is 0^0, which is undefined."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Exponent Calculator - Calculate Powers and Exponents",
    "description": "Free online exponent calculator for square, cube, and custom powers. Calculate any base raised to any exponent with instant results and step-by-step explanations.",
    "url": "https://www.learnmathclass.com/calculators/exponent-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Square calculation (power of 2)",
      "Cube calculation (power of 3)",
      "Custom power calculation with any exponent",
      "Support for positive and negative bases",
      "Support for positive and negative exponents",
      "Decimal and fractional exponent support",
      "High-precision arithmetic with scientific notation",
      "Real-time error validation and helpful messages"
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
        "name": "Exponent Calculator",
        "item": "https://www.learnmathclass.com/calculators/exponent-calculator"
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

const introContent = {
  id: "intro",
  title: "",
  content: ``
};

return {
  props: {
    detailInstructions,
    explanations,
    sectionsContent,
    introContent,
    navigationGroup,
    faqQuestions,
    schemas,
    seoData: {
      title: "Exponent Calculator | Calculate Powers and Exponents Online",
      description: "Free exponent calculator for square, cube, and custom powers. Calculate any base raised to any exponent instantly with step-by-step explanations and examples.",
      keywords: keyWords.join(", "),
      url: "/calculators/exponent-calculator",
      name: "Exponent Calculator - Powers and Exponents Tool"
    },
  },
  revalidate: 86400
};
}

export default function ExponentCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, explanations, navigationGroup, faqQuestions, schemas}) {

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
    
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Exponent Calculator</h1>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Exponent Calculator'
      />
    </div>
    
    <div className="layout-container"> 
      <div>
        <br/>
        <VerticalButtonGroup 
          items={navigationGroup}
          width="250px"       
          theme='lightBlue'
          isSticky={true}
          verticalOffset='200px'
        />
      </div>

      <div>
        <div style={{width:'100%',margin:'auto'}}>
          <div style={{transform:'scale(0.95)'}}>
            <ExponentCalculator 
              explanations={explanations}
              detailInstructions={detailInstructions}
            />
          </div> 
          <br/>
        </div>
      </div>
    </div>
    
    
    <br/>
    <br/>
    <SectionTableOfContents sections={genericSections}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
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