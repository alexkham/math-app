

// import Head from 'next/head';
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// import React from 'react';
// import '../../pages.css';
// import RootCalculator from '@/app/components/calculators/arithmetics/RootCalculator';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import ExplanationDetails from '@/app/components/ExplanationDetails';
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
// import Sections from '@/app/components/page-components/section/Sections';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

// export default function RootCalculatorPage(props) {  // Changed to receive props
//   const { explanations, keyWords,detailInstructions,navigationGroup,sectionsContent } = props;  // Destructure props


     
//   const rootSections=[
//     {
//         id:'intro',
//         title:sectionsContent.intro.title,
//         link:'/algebra/roots',
//         content:[
//           sectionsContent.intro.content
//         ]
//     },
//     // {
//     //     id:'2',
//     //     title:'section2',
//     //     link:'',
//     //     content:''
//     // },
//     // {
//     //     id:'',
//     //     title:'',
//     //     link:'',
//     //     content:''
//     // }
// ]


//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     "name": "Root Calculator",
//     "applicationCategory": "EducationalApplication",
//     "description": "Free online calculator for square roots, cube roots, and nth roots with detailed explanations.",
//     "url": "https://www.learnmathclass.com/calculators/root-calculator",
//     "offers": {
//       "@type": "Offer",
//       "price": "0",
//       "priceCurrency": "USD"
//     },
//     "featureList": [
//       "Square root calculation",
//       "Cube root calculation",
//       "Nth root calculation",
//       "Step by step explanations"
//     ]
//   };

//   return (
//     <>
//       <Head>
//         <title>Root Calculator | Square, Cube & Nth Root | LearnMathClass</title>
//         <meta name="description" content="Free online root calculator for square roots, cube roots, and nth roots. Easy to use with detailed explanations. Perfect for students and teachers." />
//         <meta name="keywords" content={Array.isArray(keyWords) ? keyWords.join(', ') : ''} />
        
//         {/* Open Graph / Social */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Root Calculator | LearnMathClass" />
//         <meta property="og:description" content="Calculate square roots, cube roots, and nth roots with our free online calculator. Get instant results with explanations." />
//         <meta property="og:url" content="https://www.learnmathclass.com/calculators/root-calculator" />
        
//         {/* Mobile Optimization */}
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
//         {/* Canonical URL */}
//         <link rel="canonical" href="https://www.learnmathclass.com/calculators/root-calculator" />

//         {/* Structured Data */}
//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//       </Head>
//       <style jsx>{`
//   @media (max-width: 1024px) {
//     :global(.layout-container > div:first-child *) {
//       position: static !important;
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
//       <h1 className='title' style={{marginTop:'-0px',marginBottom:'20px'}}>Root Calculator</h1>
//       <div style={{marginBottom:'20px'}}>
//       <ExplanationDetails instructions={detailInstructions}
//       title='How to use Root Calculator'/>
//       </div>


//        <div style={{
//       display: 'grid',
//       gridTemplateColumns: '10% 90%',
//       gap: '20px',
//       width: '100%'
//    }}>
//       {/* Left column - Sidebar */}
//       <div>
//         <br/>
//         <br/>
//         <br/>
//          <VerticalButtonGroup 
//             items={navigationGroup}
//             width="250px"       
//             theme='vivid'
//             isSticky={true}
//             verticalOffset='200px'
//          />
//       </div>

//       {/* Right column - Table */}
//       <div>
//          <div style={{width:'90%',margin:'auto'}}>
//            <div style={{transform:'scale(0.90)'}}>
//         <RootCalculator explanations={explanations}
//         />
//       </div> 
//             <br/>
//             <br/>
//             <br/>
           
            
//          </div>
//       </div>
//    </div>
//       {/* <VerticalButtonGroup items={navigationGroup}/>
//       <div style={{transform:'scale(0.90)'}}>
//         <RootCalculator explanations={explanations}
//         />
//       </div> */}
//       <br/>
//       <br/>
//       <SectionTableOfContents sections={rootSections}/>
//       <br/>
//      <Sections sections={rootSections}/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton/> */}
//     </>
//   );
// }

// export async function getStaticProps() {


//    const sectionsContent={

//     intro:{
//       title:`What are roots?`,
//       content:`
// A root is a value that, when multiplied by itself a certain number of times, produces a given number. It represents the inverse operation of exponentiation.

// To express roots, mathematicians use radical notation. This notation consists of the radical symbol (√) with two essential components:

// • The degree (or index) is a small number positioned at the top left of the radical symbol (ⁿ√) indicating how many times the value must multiply itself

// • The radicand is the number or expression written under the radical symbol whose root we're finding

// Roots are classified in multiple ways. The most common classification is by degree, which determines the specific type of root: square roots, cube roots, fourth roots, and higher-degree roots each have distinct properties and applications in mathematics.
//         `,
//       before:``,
//       after:``,
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }


// const navigationGroup=[
//   {title:'Other Calculators',
//     items:[
//       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
//       // {title:'Root Calculator',link:'/calculators/root-calculator'},
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


//   const explanations = {

//     square: {
//       text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of 25 is 5, because 5 × 5 = 25.",
//       links: [
//         { title: "Square Root Visualizer", link: "/visual-tools/square-root" },
//         { title: "Perfect Squares and Roots Table", link: "/tables/arithmetics/perfect-squares" }
//       ],
//     },
//     cube: {
//       text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27.",
//       links: [
       
//         { title: "Perfect Cubes and Cube Roots Table", link: "/tables/arithmetics/perfect-cubes" }
//       ],
//     },
//     nth: {
//       text: "An $n$-th root of a number is a value that, when multiplied by itself $n-1$ times, gives the number. For example, the $4$-th root of $16$ is $2$, because $2 × 2 × 2 × 2 = 16$.",
//     }
//   };

//   const keyWords = [
//     'root calculator',
//     'square root calculator',
//     'sqrt calculator',
//     'calculate square root calculator',
//     'calculator to find square root',
//     'square root value calculator',
//     'cubic root calculator'
//   ];


//   const detailInstructions = [
    
//     "Select root type: square, cube, or nth root",
//     "For nth root, specify the value of n",
//     "Click Calculate to see the result",
//     "Use Reset to clear all fields and start over",
//     "Hover over ? icons for additional help"
//   ];

//   return {
//     props: {
//       explanations,
//       keyWords,
//       detailInstructions,
//       navigationGroup,
//       sectionsContent
//     },
//     revalidate: 86400
//   };
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
import RootCalculator from '@/app/components/calculators/arithmetics/RootCalculator';
import '../../pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export async function getStaticProps() {

const navigationGroup = [
  {
    title: 'Other Calculators',
    items: [
      {title: 'Exponent Calculator', link: '/calculators/exponent-calculator'},
      {title: 'Modulo Calculator', link: '/calculators/modulo-calculator'},
      {title: 'Logarithm Calculator', link: '/calculators/log-calculator'},
      {title: 'Percentage Calculator', link: '/calculators/percentage-calculator'},
      {title: 'Factorial Calculator', link: '/calculators/factorial-calculator'},
      {title: 'Fractions Calculator', link: '/calculators/fraction-calculator'},
      {title: 'Complex Numbers Calculator', link: '/calculators/complex-numbers'},
      {title: 'Trigonometry Calculator', link: '/calculators/trigonometry-calculator'},
      {title: 'Statistics Calculator', link: '/calculators/statistics-calculator'},
    ]
  }
];

const detailInstructions = [
  "Select root type: square, cube, or nth root",
  "For nth root, specify the value of n in the small input box",
  "Enter the number you want to find the root of",
  "Click Calculate to see the result",
  "Use Reset to clear all fields and start over"
];

const explanations = {
  square: {
    text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of $25$ is $5$, because $5 \\times 5 = 25$.",
    links: [
      {title: "Square Root Visualizer", link: "/visual-tools/square-root"},
      {title: "Perfect Squares and Roots Table", link: "/tables/arithmetics/perfect-squares"}
    ],
  },
  cube: {
    text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of $27$ is $3$, because $3 \\times 3 \\times 3 = 27$.",
    links: [
      {title: "Perfect Cubes and Cube Roots Table", link: "/tables/arithmetics/perfect-cubes"}
    ],
  },
  nth: {
    text: "An $n$-th root of a number is a value that, when multiplied by itself $n-1$ times, gives the number. For example, the $4$-th root of $16$ is $2$, because $2 \\times 2 \\times 2 \\times 2 = 16$.",
  }
};

const keyWords = [
  'root calculator',
  'square root calculator',
  'cube root calculator',
  'nth root calculator',
  'calculate square root',
  'calculate cube root',
  'find root online',
  'sqrt calculator',
  'cubic root calculator',
  'free root calculator',
  'online root tool',
  'root calculator with steps',
  'calculate roots',
  'radical calculator',
  'root finder'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Root Calculator`,
    content: `The root calculator has three main areas: a top selection bar with three root type buttons, a central calculation display showing your inputs and result, and a right sidebar with explanations. Start by looking at the three large buttons at the top labeled **Square Root**, **Cube Root**, and **Nth Root**. Click any button to select that root type.

After selecting your root type, examine the calculation display in the blue-bordered box. You'll see the radical symbol (√ or ∛), an input field for your number, an equals sign, and a result area. The display changes based on which root type you selected—Square Root shows √, Cube Root shows ∛, and Nth Root adds an extra small input box for the n value.

Enter your number in the main input field. Type any positive or negative number including decimals like $25$, $-8$, or $15.5$. A small blue question mark appears in the corner of each input box. Hover over these question marks to see helpful tooltips explaining what each field does.

The **Calculate** button at the bottom processes your input and displays the result in the rightmost box. The **Reset** button clears all fields and returns the calculator to its starting state. The right sidebar updates automatically when you change root types, showing explanations and links relevant to your current selection.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Square Root Mode`,
    content: `Click the **Square Root** button at the top to activate square root mode. The display shows the √ symbol and a single input field. Square roots ask: "What number multiplied by itself equals my input?" For $\\sqrt{25}$, the answer is $5$ because $5 \\times 5 = 25$.

Enter your number in the input field. Try $36$ and click Calculate to get $6.0000$. The result shows four decimal places for precision. Try $50$ to get $7.0711$, which is the approximate square root since $50$ isn't a perfect square. Try $2$ to see $1.4142$, the famous square root of two.

Square roots only work with non-negative numbers in real mathematics. If you enter a negative number like $-25$ and click Calculate, you'll see an error message: "Error: Cannot calculate square root of negative number." This is mathematically correct—negative numbers don't have real square roots.

Perfect squares like $4$, $9$, $16$, $25$, $36$, $49$, $64$, $81$, and $100$ give whole number results. Non-perfect squares give decimal approximations. The calculator computes these accurately using JavaScript's Math.sqrt() function. Check the right sidebar for links to **perfect squares tables** showing common square roots.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using Cube Root Mode`,
    content: `Select **Cube Root** to activate cube root mode. The display changes to show the ∛ symbol. Cube roots ask: "What number multiplied by itself twice equals my input?" For $\\sqrt[3]{27}$, the answer is $3$ because $3 \\times 3 \\times 3 = 27$.

Enter a number and click Calculate. Try $8$ to get $2.0000$ because $2^3 = 8$. Try $64$ to get $4.0000$ because $4^3 = 64$. Try $1000$ to get $10.0000$ because $10^3 = 1000$. These perfect cubes give exact whole number results.

Unlike square roots, cube roots work with negative numbers. Enter $-8$ and click Calculate to get $-2.0000$. This works because $(-2) \\times (-2) \\times (-2) = -8$. Try $-27$ to get $-3.0000$ or $-125$ to get $-5.0000$. Negative times negative times negative equals negative.

For non-perfect cubes, you'll see decimal approximations. Enter $10$ to get approximately $2.1544$. Enter $50$ to get approximately $3.6840$. The calculator uses JavaScript's Math.pow() function with an exponent of $1/3$ to compute cube roots accurately. The right sidebar provides links to **perfect cubes tables** for reference.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Using Nth Root Mode`,
    content: `Click **Nth Root** to activate the most flexible mode. Two input fields appear: a small box on the left for the n value, and the main box for your number. The nth root asks: "What number raised to the nth power equals my input?" For the 4th root of $16$, the answer is $2$ because $2^4 = 16$.

Start by entering the n value in the small left box. Type $4$ to calculate fourth roots, $5$ for fifth roots, $6$ for sixth roots, and so on. The n value must be positive and greater than zero. Hover over the question mark tooltip to see: "Enter the value of n for the nth root."

After setting n, enter your main number in the larger input field. For example, set n to $4$ and enter $81$. Click Calculate to get $3.0000$ because $3^4 = 81$. Set n to $5$ and enter $32$ to get $2.0000$ because $2^5 = 32$.

For even roots (n = $2$, $4$, $6$, etc.), negative numbers cause errors just like square roots. Try n = $4$ with input $-16$—you'll see "Error: Cannot calculate even root of negative number." For odd roots (n = $3$, $5$, $7$, etc.), negative numbers work fine. Set n = $5$ and enter $-32$ to get $-2.0000$ successfully.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Reading Results and Understanding Output`,
    content: `After clicking Calculate, your result appears in the rightmost box of the calculation display. The result shows four decimal places for precision: $2.0000$, $3.1623$, or $1.7100$. Whole number results like $5$ display as $5.0000$ to maintain consistent formatting.

Results appear in green text when the calculation succeeds. Perfect roots show clean whole numbers: $\\sqrt{49} = 7.0000$, $\\sqrt[3]{125} = 5.0000$, or $\\sqrt[4]{256} = 4.0000$. Imperfect roots show decimal approximations: $\\sqrt{50} = 7.0711$, $\\sqrt[3]{10} = 2.1544$.

Error messages appear in red text when calculations fail. You might see "Error: Invalid input" if you leave fields empty or enter non-numeric characters. "Error: Cannot calculate square root of negative number" appears for negative inputs in square root mode. "Error: Cannot calculate even root of negative number" appears when using even nth roots with negatives.

The error "Error: Invalid nth root" means the n value is zero, negative, or not a number. Make sure n is a positive number greater than zero. If you see "Error: Calculation failed," try resetting and re-entering your values. The result box displays "—" (em dash) when no calculation has been performed yet.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Using the Explanation Panel`,
    content: `The right sidebar contains an explanation panel that updates based on your selected root type. At the top, you'll see a blue badge labeled "EXPLANATION" indicating this section provides educational context. The panel remains visible as you scroll, staying in position to assist you.

The explanation text changes when you switch root types. For **Square Root**, you'll read about values that multiply by themselves once. For **Cube Root**, the text explains multiplication by itself twice. For **Nth Root**, you get a general explanation about n-1 multiplications.

Each explanation includes a concrete example with actual numbers. Square root shows: "the square root of $25$ is $5$, because $5 \\times 5 = 25$." Cube root shows: "the cube root of $27$ is $3$, because $3 \\times 3 \\times 3 = 27$." These examples make the concept tangible.

Below the explanation text, a "Learn more:" section appears with blue arrow links. These connect to related resources like **perfect squares tables**, **perfect cubes tables**, and **visualizers**. Click these links to access deeper educational content. The panel's sticky positioning keeps it visible while you work with the calculator, providing constant reference.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Roots`,
    content: `A root is a value that, when multiplied by itself a certain number of times, produces a given number. Roots represent the inverse operation of exponentiation. If $2^3 = 8$, then the cube root of $8$ is $2$. Roots "undo" powers.

Mathematicians express roots using radical notation with the radical symbol √. The **radicand** is the number under the symbol whose root you're finding. The **index** or **degree** is the small number indicating how many times to multiply. In $\\sqrt[3]{27}$, the radicand is $27$ and the index is $3$.

When no index appears, it's implicitly $2$, meaning square root. Writing √$16$ is the same as $\\sqrt[2]{16}$. Both mean "what squared equals $16$?" The answer is $4$. For cube roots, you write the $3$ explicitly: $\\sqrt[3]{8} = 2$.

Roots connect to exponents through fractional powers. The square root of $x$ equals $x^{1/2}$. The cube root of $x$ equals $x^{1/3}$. The nth root of $x$ equals $x^{1/n}$. This connection lets calculators and computers compute roots using exponentiation: $\\sqrt[4]{81} = 81^{1/4} = 3$. For comprehensive root theory and notation, see **radical expressions** and **root properties**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Types of Roots Explained`,
    content: `**Square roots** are the most common roots. The square root of $x$ asks: "What number squared equals $x$?" Since $7^2 = 49$, we know $\\sqrt{49} = 7$. Square roots only work with non-negative numbers in real mathematics. Every positive number has two square roots (positive and negative), but calculators typically show only the principal (positive) root.

**Cube roots** involve three multiplications. The cube root of $x$ asks: "What number cubed equals $x$?" Since $4^3 = 64$, we know $\\sqrt[3]{64} = 4$. Unlike square roots, cube roots work with negative numbers: $\\sqrt[3]{-27} = -3$ because $(-3)^3 = -27$. Every real number has exactly one real cube root.

**Fourth roots and higher** follow the same pattern. The fourth root asks about four multiplications, the fifth about five, and so on. Even roots (2nd, 4th, 6th) behave like square roots—they don't accept negative inputs. Odd roots (3rd, 5th, 7th) behave like cube roots—they accept negative inputs.

**Principal roots** are the primary values calculators return. For even roots of positive numbers, this is the positive root. For $\\sqrt{16}$, both $4$ and $-4$ work mathematically ($4^2 = 16$ and $(-4)^2 = 16$), but calculators show $4$ as the principal root. For comprehensive coverage of root types, see **root classifications** and **radical functions**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Properties of Roots`,
    content: `**Product property**: The root of a product equals the product of roots: $\\sqrt{ab} = \\sqrt{a} \\times \\sqrt{b}$. For example, $\\sqrt{36} = \\sqrt{4 \\times 9} = \\sqrt{4} \\times \\sqrt{9} = 2 \\times 3 = 6$. This works for all roots: $\\sqrt[3]{8 \\times 27} = \\sqrt[3]{8} \\times \\sqrt[3]{27} = 2 \\times 3 = 6$.

**Quotient property**: The root of a quotient equals the quotient of roots: $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$. For example, $\\sqrt{\\frac{25}{4}} = \\frac{\\sqrt{25}}{\\sqrt{4}} = \\frac{5}{2} = 2.5$. This property helps simplify complex radical expressions.

**Power property**: Taking a root and raising to a power are inverse operations: $(\\sqrt[n]{a})^n = a$ and $\\sqrt[n]{a^n} = a$ (for non-negative $a$ and even $n$). For example, $(\\sqrt{5})^2 = 5$ and $\\sqrt{3^2} = 3$. This relationship shows how roots "undo" exponents.

**Simplification**: Roots of perfect powers simplify to whole numbers. $\\sqrt{49} = 7$, $\\sqrt[3]{125} = 5$, $\\sqrt[4]{16} = 2$. Non-perfect powers remain as decimals or can be simplified using the product property: $\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$. For detailed root properties and simplification techniques, see **radical simplification** and **root operations**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Mathematical Tools`,
    content: `**Exponent Calculator** - Compute powers and exponents, the inverse operation of roots. If roots ask "what base gives this result," exponents compute the result directly. Use both calculators together to understand the relationship between powers and roots.

**Logarithm Calculator** - Find exponents when you know the base and result. Logarithms, exponents, and roots form a connected triangle of inverse operations in mathematics.

**Fraction Calculator** - Simplify radical expressions that produce fractions. Many root calculations yield fractional results, and this calculator helps reduce them to lowest terms.

**Complex Numbers Calculator** - Handle square roots of negative numbers by working with imaginary numbers. While the root calculator rejects negative square roots, complex numbers extend mathematics to include them.

**Perfect Squares Table** - Reference chart showing squares and square roots of common integers. Quickly check if a number is a perfect square.

**Perfect Cubes Table** - Reference chart showing cubes and cube roots of common integers. Identify perfect cubes at a glance.

For deeper theoretical understanding, explore **radical expressions**, **rational exponents**, **root simplification**, **irrational numbers**, and **nth root functions**.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "How do I calculate a square root?",
    answer: "Select Square Root mode, enter your number in the input field, and click Calculate. The square root is the value that, when multiplied by itself, equals your input. For example, the square root of 25 is 5 because 5 × 5 = 25. The calculator works with perfect squares and provides decimal approximations for non-perfect squares."
  },
  obj2: {
    question: "Can I find cube roots of negative numbers?",
    answer: "Yes, cube roots work with negative numbers. Enter a negative value in Cube Root mode and click Calculate. For example, the cube root of -8 is -2 because (-2) × (-2) × (-2) = -8. Unlike square roots, odd-degree roots (cube, 5th, 7th, etc.) accept negative inputs."
  },
  obj3: {
    question: "What is an nth root and how do I use it?",
    answer: "An nth root is a generalization where n can be any positive number. Select Nth Root mode, enter your desired n value in the small left box (like 4 for fourth root or 5 for fifth root), enter your number in the main field, and click Calculate. The result is the value that, when raised to the nth power, equals your input."
  },
  obj4: {
    question: "Why does the calculator show errors for some inputs?",
    answer: "Errors appear for mathematically impossible operations. Square roots and even-degree roots (4th, 6th, etc.) cannot be calculated for negative numbers in real mathematics. Also, the nth root requires n to be a positive number greater than zero. Make sure your inputs are valid for the selected root type."
  },
  obj5: {
    question: "How accurate are the decimal results?",
    answer: "The calculator displays results to four decimal places for precision. It uses JavaScript's built-in Math.sqrt() and Math.pow() functions, which provide high accuracy for most practical purposes. Results for perfect roots (like square root of 25 = 5.0000) are exact, while imperfect roots (like square root of 2 = 1.4142) are precise approximations."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Root Calculator - Square, Cube & Nth Roots",
    "description": "Free online root calculator for calculating square roots, cube roots, and nth roots. Get instant results with step-by-step explanations for any number.",
    "url": "https://www.learnmathclass.com/calculators/root-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Calculate square roots of any non-negative number",
      "Calculate cube roots including negative numbers",
      "Calculate nth roots with custom degree values",
      "Decimal precision to 4 decimal places",
      "Built-in explanations for each root type",
      "Error validation for invalid inputs",
      "Interactive tooltips for guidance",
      "Links to related educational resources"
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
        "name": "Root Calculator",
        "item": "https://www.learnmathclass.com/calculators/root-calculator"
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
      title: "Root Calculator | Square, Cube & Nth Root Online",
      description: "Free root calculator for square roots, cube roots, and nth roots. Calculate any root instantly with step-by-step explanations and examples.",
      keywords: keyWords.join(", "),
      url: "/calculators/root-calculator",
      name: "Root Calculator - Square, Cube & Nth Root Tool"
    },
  },
  revalidate: 86400
};
}

export default function RootCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, explanations, navigationGroup, faqQuestions, schemas}) {

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
        grid-template-columns: 250px 1fr;
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
    
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Root Calculator</h1>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Root Calculator'
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
        <div style={{width:'100%', maxWidth:'1200px'}}>
          <RootCalculator explanations={explanations} />
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