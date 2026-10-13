// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import React from 'react'
// // import '../../pages.css'
// // import FractionCalculator from '@/app/components/calculators/fraction-calculator/FractionCalculator'
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // import Head from 'next/head'
// // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


// // export async function getStaticProps() {


// //    const fractionsExplanations = {
// //   calculate_fraction: {
// //     title: "Basic Fraction Operations",
// //     content: "Perform addition, subtraction, multiplication, or division with two fractions. The calculator will find a common denominator for addition and subtraction, and simplify the result."
// //   },
// //   float_to_frac: {
// //     title: "Float to Fraction",
// //     content: "Converts a decimal number (like 0.75) into its fraction form (3/4). The result is automatically simplified to the lowest terms."
// //   },
// //   float_to_mixed: {
// //     title: "Float to Mixed Number",
// //     content: "Converts a decimal number into a mixed number format (whole number + fraction). For example, 2.5 becomes 2 1/2."
// //   },
// //   frac_to_float: {
// //     title: "Fraction to Decimal",
// //     content: "Converts a fraction into its decimal representation. Simply divide the numerator by the denominator to get the result."
// //   },
// //   mixed_to_float: {
// //     title: "Mixed Number to Float",
// //     content: "Converts a mixed number (like 1 1/2) into a decimal. The whole number and fraction are combined into a single decimal value."
// //   },
// //   inverse: {
// //     title: "Find Inverse",
// //     content: "Calculates the multiplicative inverse (1/x) of a number. For example, the inverse of 2 is 0.5, and the inverse of 0.5 is 2."
// //   },
// //   add_mixed: {
// //     title: "Add Mixed Numbers",
// //     content: "Adds two mixed numbers together. The calculator converts them to improper fractions, adds them, and converts back to mixed number form."
// //   },
// //   subtract_mixed: {
// //     title: "Subtract Mixed Numbers",
// //     content: "Subtracts the second mixed number from the first. The result is simplified and shown as a mixed number when appropriate."
// //   },
// //   multiply_mixed: {
// //     title: "Multiply Mixed Numbers",
// //     content: "Multiplies two mixed numbers. Both numbers are converted to improper fractions, multiplied, and the result is simplified."
// //   },
// //   divide_mixed: {
// //     title: "Divide Mixed Numbers",
// //     content: "Divides the first mixed number by the second. This is done by multiplying the first number by the reciprocal of the second."
// //   }
// // };

// // const navigationGroup=[
// //   {title:'Other Calculators',
// //     items:[
// //       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
// //       {title:'Root Calculator',link:'/calculators/root-calculator'},
// //       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
// //       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
// //       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
// //       {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
// //       // {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
// //       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
// //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// //       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
// //     ]
// //   },
// //   {
// //    title:'Visual Tools',
// //    items:[
// //     {title:'FractionsVisualizer',link:'/visual-tools/fractions-visualizer'}
// //    ]

// //   }
// // ]

// //   const keyWords = ['fractions calculator','calculate the fraction','fractions',
// //     'decimal to fraction','adding fractions','multiplying fractions','dividing fractions',
// //     'fraction to decimal','adding and subtracting fractions','fraction and decimal calculator',
// //     'reducing fractions calculator'];

// //   return {
// //     props: {
// //       seoData: {
// //         title: "Fraction Calculator - Add, Subtract, Multiply & Divide Fractions | Learn Math Class",
// //         description: "Free fraction calculator for adding, subtracting, multiplying, and dividing fractions. Convert decimals to fractions and simplify fractions online.",
// //         keywords: keyWords.join(", "),
// //         url: "/calculators/fraction-calculator",
// //         name: "Fraction Calculator"
// //       },
// //       keyWords,
// //       navigationGroup,
// //       fractionsExplanations
// //     }
// //   }
// // }

// // export default function FractionCalculatorPage({ seoData, keyWords,
// //   navigationGroup,fractionsExplanations }) {

// //   // const keyWords=['fractions calculator','calculate the fraction','fractions',
// //   //   'decimal to fraction','adding fractions','multiplying fractions','dividing fractions',
// //   //   'fraction to decimal','adding and subtracting fractions','fraction and decimal calculator',
// //   //   'reducing fractions calculator']


// //   return (
// //    <>
// //    <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify({
// //         "@context": "https://schema.org",
// //         "@type": "WebPage",
// //         "name": seoData.name,
// //         "description": seoData.description,
// //         "keywords": seoData.keywords,
// //         "url": `https://www.learnmathclass.com${seoData.url}`,
// //         "dateModified": new Date().toISOString(),
// //         "inLanguage": "en-US",
// //         "mainEntity": {
// //           "@type": "Article",
// //           "name": seoData.name,
// //           "dateModified": new Date().toISOString(),
// //           "author": {
// //             "@type": "Organization",
// //             "name": "Learn Math Class"
// //           }
// //         }
// //       })
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar
// //            side='right'
// //            // topOffset='65px'
// //            sidebarWidth='45px'
// //            panelWidth='300px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          />
// //    <Breadcrumb/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Fraction Calculator</h1>
   
// //    <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: '15% 80%',
// //       gap: '20px',
// //       width: '100%'
// //    }}>
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
// //          <div style={{width:'100%',margin:'auto',marginLeft:'-50px'}}>
// //           <div style={{transform:'scale(0.95)'}}>
// //        <FractionCalculator explanations={fractionsExplanations} />
// //       </div> 
          
        
// //             <br/>
// //             <br/>
// //             <br/>
           
            
// //          </div>
// //       </div>
// //    </div>
     
   
   
// //    {/* <VerticalButtonGroup/> */}
// //    {/* <FractionCalculator/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
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
// import FractionCalculator from '@/app/components/calculators/fraction-calculator/FractionCalculator';
// import '../../pages.css';
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

// export async function getStaticProps() {

// const navigationGroup = [
//   {
//     title: 'Other Calculators',
//     items: [
//       {title: 'Exponent Calculator', link: '/calculators/exponent-calculator'},
//       {title: 'Root Calculator', link: '/calculators/root-calculator'},
//       {title: 'Modulo Calculator', link: '/calculators/modulo-calculator'},
//       {title: 'Logarithm Calculator', link: '/calculators/log-calculator'},
//       {title: 'Percentage Calculator', link: '/calculators/percentage-calculator'},
//       {title: 'Factorial Calculator', link: '/calculators/factorial-calculator'},
//       {title: 'Complex Numbers Calculator', link: '/calculators/complex-numbers'},
//       {title: 'Trigonometry Calculator', link: '/calculators/trigonometry-calculator'},
//       {title: 'Statistics Calculator', link: '/calculators/statistics-calculator'},
//     ]
//   },
//   {
//     title: 'Visual Tools',
//     items: [
//       {title: 'Fractions Visualizer', link: '/visual-tools/fractions-visualizer'}
//     ]
//   }
// ];

// const detailInstructions = [
//   "Select your operation type from the dropdown menu (10 different operations available)",
//   "Enter your numbers in the appropriate input fields based on the selected operation",
//   "For fraction operations, enter numerator and denominator separately",
//   "Click Calculate to see the result and step-by-step explanation",
//   "Use Reset to clear inputs and try a different calculation"
// ];

// const fractionsExplanations = {
//   calculate_fraction: {
//     title: "Basic Fraction Operations",
//     content: "Perform addition, subtraction, multiplication, or division with two fractions. The calculator will find a common denominator for addition and subtraction, and simplify the result."
//   },
//   float_to_frac: {
//     title: "Float to Fraction",
//     content: "Converts a decimal number (like $0.75$) into its fraction form ($\\frac{3}{4}$). The result is automatically simplified to the lowest terms."
//   },
//   float_to_mixed: {
//     title: "Float to Mixed Number",
//     content: "Converts a decimal number into a mixed number format (whole number + fraction). For example, $2.5$ becomes $2\\frac{1}{2}$."
//   },
//   frac_to_float: {
//     title: "Fraction to Decimal",
//     content: "Converts a fraction into its decimal representation. Simply divide the numerator by the denominator to get the result."
//   },
//   mixed_to_float: {
//     title: "Mixed Number to Float",
//     content: "Converts a mixed number (like $1\\frac{1}{2}$) into a decimal. The whole number and fraction are combined into a single decimal value."
//   },
//   inverse: {
//     title: "Find Inverse",
//     content: "Calculates the multiplicative inverse ($\\frac{1}{x}$) of a number. For example, the inverse of $2$ is $0.5$, and the inverse of $0.5$ is $2$."
//   },
//   add_mixed: {
//     title: "Add Mixed Numbers",
//     content: "Adds two mixed numbers together. The calculator converts them to improper fractions, adds them, and converts back to mixed number form."
//   },
//   subtract_mixed: {
//     title: "Subtract Mixed Numbers",
//     content: "Subtracts the second mixed number from the first. The result is simplified and shown as a mixed number when appropriate."
//   },
//   multiply_mixed: {
//     title: "Multiply Mixed Numbers",
//     content: "Multiplies two mixed numbers. Both numbers are converted to improper fractions, multiplied, and the result is simplified."
//   },
//   divide_mixed: {
//     title: "Divide Mixed Numbers",
//     content: "Divides the first mixed number by the second. This is done by multiplying the first number by the reciprocal of the second."
//   }
// };

// const keyWords = [
//   'fraction calculator',
//   'calculate fractions',
//   'add fractions',
//   'subtract fractions',
//   'multiply fractions',
//   'divide fractions',
//   'decimal to fraction',
//   'fraction to decimal',
//   'mixed number calculator',
//   'simplify fractions',
//   'free fraction calculator',
//   'online fraction tool',
//   'fraction converter',
//   'mixed fractions calculator',
//   'improper fractions'
// ];

// const sectionsContent = {
//   obj1: {
//     title: `Getting Started with the Fraction Calculator`,
//     content: `The fraction calculator has two main areas: a left panel for inputs and calculations, and a right sidebar showing explanations. Start by clicking the **Operation** dropdown at the top of the left panel. You'll see 10 different operations to choose from, including basic fraction math, decimal conversions, and mixed number operations.

// After selecting an operation, the input fields change automatically to match what you need. For **Basic Fraction Operations**, you'll see two fractions with numerator and denominator boxes, plus an operation selector. For **Convert Float to Fraction**, you get a single decimal input box. For **Add Mixed Numbers**, you'll see two text inputs for mixed number format.

// Enter your numbers in the appropriate fields. For fractions, type the numerator in the top box and denominator in the bottom box. For mixed numbers, use the format "1 1/2" (whole number, space, fraction). For decimals, type any number like $0.75$ or $2.5$.

// Click the blue **Calculate** button to see your result appear in the result section below. The right sidebar updates with static explanations for the operation type, and when you enter valid inputs, step-by-step working appears showing exactly how the calculator solved your problem. Use **Reset** anytime to clear everything and start fresh.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Using Basic Fraction Operations`,
//     content: `Select **Basic Fraction Operations** from the dropdown to add, subtract, multiply, or divide two fractions. You'll see two fraction input areas, each with a numerator box on top and denominator box on bottom. Enter your first fraction's numbers, then choose your operation: **Add (+)**, **Subtract (−)**, **Multiply (×)**, or **Divide (÷)**.

// Try adding $\\frac{1}{2} + \\frac{1}{3}$. Enter $1$ and $2$ for the first fraction, select **Add (+)**, then enter $1$ and $3$ for the second fraction. Click Calculate to see the result $\\frac{5}{6}$. The step-by-step section shows how the calculator found the common denominator ($2 \\times 3 = 6$), converted both fractions, and added the numerators.

// For multiplication like $\\frac{2}{3} \\times \\frac{3}{4}$, you don't need common denominators. The calculator multiplies numerators together ($2 \\times 3 = 6$) and denominators together ($3 \\times 4 = 12$), giving $\\frac{6}{12}$, which simplifies to $\\frac{1}{2}$.

// Division works by flipping the second fraction. When you calculate $\\frac{1}{2} \\div \\frac{1}{4}$, the calculator flips $\\frac{1}{4}$ to $\\frac{4}{1}$, then multiplies: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. Watch the step-by-step display to see this reciprocal process in action.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Converting Between Decimals and Fractions`,
//     content: `The calculator offers four conversion modes for switching between decimal and fraction formats. **Convert Float to Fraction** changes decimals like $0.75$ into fractions ($\\frac{3}{4}$). Enter any decimal, click Calculate, and see both the fraction result and the step-by-step conversion showing how decimal places become the denominator.

// Try converting $0.625$ to a fraction. The calculator counts $3$ decimal places, creates $\\frac{625}{1000}$ by multiplying by $10^3$, then simplifies by finding the greatest common divisor. The result is $\\frac{5}{8}$.

// **Convert Fraction to Decimal** does the opposite. Select this mode, enter a fraction like $\\frac{3}{8}$, and the calculator divides $3 \\div 8 = 0.375$. The result appears immediately with the division shown step-by-step.

// **Convert Float to Mixed Number** and **Convert Mixed Number to Float** work with mixed numbers. Enter $2.75$ and get $2\\frac{3}{4}$, or enter "1 1/2" to get $1.5$. The mixed number format requires a space between the whole number and fraction: type "1 1/2" not "11/2". The calculator separates the parts and shows you each conversion step.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Working with Mixed Numbers`,
//     content: `Four operations handle mixed numbers specifically: **Add Mixed Numbers**, **Subtract Mixed Numbers**, **Multiply Mixed Numbers**, and **Divide Mixed Numbers**. Select any of these modes to see two text input boxes asking for mixed numbers in the format "whole fraction" like "1 1/2" or "2 3/4".

// When adding mixed numbers like $1\\frac{1}{2} + 2\\frac{1}{4}$, type "1 1/2" in the first box and "2 1/4" in the second. The calculator converts both to improper fractions ($\\frac{3}{2}$ and $\\frac{9}{4}$), finds a common denominator, adds them, and converts back to mixed number form. The result $3\\frac{3}{4}$ appears with every conversion step shown.

// You can also use regular fractions in mixed number operations. Type "3/4" instead of a mixed number and the calculator treats it as $0\\frac{3}{4}$. This works for all four mixed operations—the format accepts both "1 1/2" and "3/2" interchangeably.

// For division like $3\\frac{1}{2} \\div 1\\frac{1}{4}$, enter "3 1/2" and "1 1/4". The step-by-step shows conversion to improper fractions ($\\frac{7}{2} \\div \\frac{5}{4}$), flipping the second fraction ($\\frac{4}{5}$), multiplying, and simplifying. Watch how the calculator handles each transformation clearly.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Understanding the Step-by-Step Display`,
//     content: `The right sidebar contains two explanation panels. The top panel shows a static description of the current operation—what it does and when to use it. This text updates whenever you change the operation dropdown. Read this first to understand what calculation you're about to perform.

// The bottom panel, labeled **Step-by-Step**, appears only after you enter valid inputs. This dynamic section shows exactly how the calculator solves your specific problem. For adding fractions, you'll see steps like "Find common denominator → 2 × 3 = 6" followed by "Convert fractions" with the actual numbers from your input.

// Each step uses mathematical notation to show formulas. When adding $\\frac{1}{2} + \\frac{1}{3}$, the steps display: Step 1 finds the common denominator $6$, Step 2 shows $\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$, Step 3 adds numerators $3 + 2 = 5$, and Step 4 shows the result $\\frac{5}{6}$.

// The step-by-step updates in real-time as you type. Change any number in your input and watch the explanation adjust instantly. This feature helps you learn the process, not just get an answer. Follow along with your own paper to verify each calculation step matches the mathematical rules for that operation.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Reading Results and Error Messages`,
//     content: `After clicking Calculate, your result appears in the **Result** section between the input form and sidebar. The answer displays in large, clear text using proper fraction notation. For fraction results, you'll see the numerator over a horizontal line over the denominator. For decimal results, you get a standard number like $0.75$ or $1.5$.

// The calculator automatically simplifies all fraction results. If you add $\\frac{2}{4} + \\frac{1}{4}$, you won't see $\\frac{3}{4}$ written as $\\frac{6}{8}$—the calculator finds the greatest common divisor and reduces to simplest form. Mixed numbers appear as "whole number fraction" format when appropriate.

// Red error messages appear above the result area when inputs are invalid. **"Please enter a valid numerator"** means you left a fraction box empty or typed non-numeric characters. **"Denominator cannot be zero"** prevents division by zero errors. **"Please enter a valid mixed number"** reminds you to use the correct format like "1 1/2" with a space.

// Orange validation errors appear for mathematical impossibilities like dividing by zero. If you try $\\frac{1}{2} \\div \\frac{0}{1}$, you'll see **"Cannot divide by zero"** in orange. The calculator won't process the calculation until you fix the error. Simply correct your input and the error disappears when you click Calculate again.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `What Are Fractions`,
//     content: `A fraction represents part of a whole. It has two numbers: the **numerator** (top) shows how many parts you have, and the **denominator** (bottom) shows how many equal parts make the whole. In $\\frac{3}{4}$, you have $3$ parts out of $4$ total equal parts.

// Think of a pizza cut into $8$ slices. If you eat $3$ slices, you ate $\\frac{3}{8}$ of the pizza. The denominator ($8$) is the total slices, and the numerator ($3$) is how many you took. Fractions let you describe quantities between whole numbers precisely.

// **Proper fractions** have numerators smaller than denominators: $\\frac{1}{2}$, $\\frac{3}{4}$, $\\frac{5}{8}$. These represent values less than $1$. **Improper fractions** have numerators equal to or greater than denominators: $\\frac{5}{4}$, $\\frac{7}{3}$, $\\frac{8}{8}$. These equal $1$ or more.

// For more detailed fraction theory and visual representations, see **fractions fundamentals** and **fraction visualization tools**.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Fraction Operations Explained`,
//     content: `**Adding and subtracting fractions** requires a common denominator. You can't add $\\frac{1}{2} + \\frac{1}{3}$ directly because the pieces are different sizes. Find a common denominator (usually by multiplying denominators: $2 \\times 3 = 6$), convert both fractions ($\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$), then add numerators: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.

// **Multiplying fractions** is simpler—multiply numerators together and denominators together. For $\\frac{2}{3} \\times \\frac{4}{5}$, calculate $2 \\times 4 = 8$ (numerator) and $3 \\times 5 = 15$ (denominator) to get $\\frac{8}{15}$. No common denominator needed.

// **Dividing fractions** uses the "flip and multiply" rule. To divide $\\frac{1}{2} \\div \\frac{1}{4}$, flip the second fraction to $\\frac{4}{1}$ (the reciprocal), then multiply: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. This works because dividing by a fraction is the same as multiplying by its reciprocal.

// **Simplifying** means reducing to lowest terms by dividing both numerator and denominator by their greatest common factor. The fraction $\\frac{6}{8}$ simplifies to $\\frac{3}{4}$ because both $6$ and $8$ divide by $2$. For comprehensive fraction operation rules, see **fraction arithmetic concepts**.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Mixed Numbers vs Improper Fractions`,
//     content: `A **mixed number** combines a whole number with a fraction: $2\\frac{1}{4}$ means $2$ whole units plus $\\frac{1}{4}$ of another unit. An **improper fraction** has a numerator larger than its denominator: $\\frac{9}{4}$. These two forms represent the same value—$2\\frac{1}{4} = \\frac{9}{4}$.

// Convert mixed numbers to improper fractions by multiplying the whole number by the denominator and adding the numerator. For $3\\frac{2}{5}$, calculate $3 \\times 5 = 15$, add $2$ to get $17$, so $3\\frac{2}{5} = \\frac{17}{5}$.

// Convert improper fractions to mixed numbers by dividing numerator by denominator. For $\\frac{11}{3}$, divide $11 \\div 3 = 3$ remainder $2$. The quotient ($3$) is the whole number, remainder ($2$) is the new numerator, original denominator stays: $\\frac{11}{3} = 3\\frac{2}{3}$.

// Use mixed numbers for measurements and real-world quantities like "$2\\frac{1}{2}$ cups of flour" or "I ran $3\\frac{3}{4}$ miles." Use improper fractions for calculations—they're easier to add, multiply, and divide. The calculator handles both and converts between them automatically. See **fraction types** and **fraction conversion methods** for more details.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Related Calculators and Visual Tools`,
//     content: `**Fractions Visualizer** - See fractions as visual shapes and diagrams. Watch how $\\frac{1}{2} + \\frac{1}{4}$ combines graphically, making abstract fraction operations concrete and understandable.

// **Percentage Calculator** - Convert between fractions, decimals, and percentages. The fraction $\\frac{3}{4}$ equals $75\\%$, and understanding these relationships helps with real-world applications.

// **GCD Calculator** - Find the greatest common divisor for simplifying fractions. If you need to reduce $\\frac{24}{36}$, find $GCD(24, 36) = 12$ and divide both parts by $12$ to get $\\frac{2}{3}$.

// **LCM Calculator** - Calculate the least common multiple for finding common denominators. To add $\\frac{1}{6} + \\frac{1}{8}$, find $LCM(6, 8) = 24$ as your common denominator.

// **Ratio Calculator** - Work with ratios, which are closely related to fractions. The ratio $3:4$ is the same as the fraction $\\frac{3}{4}$.

// For deeper theoretical understanding, explore **fraction arithmetic**, **equivalent fractions**, **fraction simplification**, **common denominators**, and **rational number theory**.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };

// const faqQuestions = {
//   obj1: {
//     question: "How do I add fractions with different denominators?",
//     answer: "To add fractions with different denominators, first find a common denominator (usually by multiplying the denominators together). Then convert both fractions to equivalent fractions with this common denominator. Finally, add the numerators and keep the denominator the same. For example, 1/2 + 1/3 = 3/6 + 2/6 = 5/6. This calculator does all these steps automatically."
//   },
//   obj2: {
//     question: "What's the difference between a proper fraction and an improper fraction?",
//     answer: "A proper fraction has a numerator smaller than the denominator (like 3/4), representing a value less than 1. An improper fraction has a numerator equal to or greater than the denominator (like 5/4 or 8/8), representing a value of 1 or greater. Improper fractions can be converted to mixed numbers for easier understanding."
//   },
//   obj3: {
//     question: "How do I convert a decimal to a fraction?",
//     answer: "Count the decimal places in your number. Create a fraction with the decimal number (without the decimal point) as the numerator and 10 raised to the number of decimal places as the denominator. For 0.75 (2 decimal places), this gives 75/100, which simplifies to 3/4. Use the Convert Float to Fraction mode in this calculator for instant conversion."
//   },
//   obj4: {
//     question: "Why do I flip the second fraction when dividing?",
//     answer: "Dividing by a fraction is the same as multiplying by its reciprocal (the fraction flipped upside down). This is because division asks 'how many times does this fraction fit into that number?' For example, 1/2 ÷ 1/4 asks how many 1/4s fit in 1/2. The answer is 2, which you get by flipping 1/4 to 4/1 and multiplying: 1/2 × 4/1 = 4/2 = 2."
//   },
//   obj5: {
//     question: "How do I enter mixed numbers in the calculator?",
//     answer: "Type mixed numbers using the format 'whole number space fraction'. For example, one and a half is entered as '1 1/2' (not 11/2). Make sure there's a space between the whole number and the fraction. You can also enter just a fraction like '3/4' in mixed number operations, and the calculator will treat it as 0 3/4."
//   }
// };

// const schemas = {
//   webApplication: {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     "name": "Fraction Calculator - Add, Subtract, Multiply & Divide Fractions",
//     "description": "Free online fraction calculator for all fraction operations. Add, subtract, multiply, divide fractions, convert decimals to fractions, work with mixed numbers, and see step-by-step solutions.",
//     "url": "https://www.learnmathclass.com/calculators/fraction-calculator",
//     "applicationCategory": "EducationalApplication",
//     "operatingSystem": "Any",
//     "offers": {
//       "@type": "Offer",
//       "price": "0",
//       "priceCurrency": "USD"
//     },
//     "featureList": [
//       "Add, subtract, multiply, and divide fractions",
//       "Convert decimals to fractions and fractions to decimals",
//       "Convert between mixed numbers and improper fractions",
//       "Work with mixed number operations (add, subtract, multiply, divide)",
//       "Calculate multiplicative inverse (1/x)",
//       "Automatic fraction simplification to lowest terms",
//       "Step-by-step explanations for every calculation",
//       "Real-time validation and error checking"
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
//     "educationalLevel": "Elementary School, Middle School, High School",
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
//         "name": "Fraction Calculator",
//         "item": "https://www.learnmathclass.com/calculators/fraction-calculator"
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
//     fractionsExplanations,
//     sectionsContent,
//     introContent,
//     navigationGroup,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Fraction Calculator | Add, Subtract, Multiply & Divide",
//       description: "Free fraction calculator for all operations. Add, subtract, multiply, divide fractions, convert decimals, work with mixed numbers. Step-by-step solutions included.",
//       keywords: keyWords.join(", "),
//       url: "/calculators/fraction-calculator",
//       name: "Fraction Calculator - Complete Fraction Operations Tool"
//     },
//   },
//   revalidate: 86400
// };
// }

// export default function FractionCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, fractionsExplanations, navigationGroup, faqQuestions, schemas}) {

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
//         grid-template-columns: 250px 1fr;
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
    
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Fraction Calculator</h1>
//     <div style={{marginBottom:'20px'}}>
//       <ExplanationDetails 
//         instructions={detailInstructions}
//         title='How to use Fraction Calculator'
//       />
//     </div>
    
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
//         <div style={{width:'100%', maxWidth:'900px'}}>
//           <FractionCalculator explanations={fractionsExplanations} />
//           <br/>
//         </div>
//       </div>
//     </div>
    
//     <br/>
//     <br/>
//     <SectionTableOfContents sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
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
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import FractionCalculator from '@/app/components/calculators/fraction-calculator/FractionCalculator';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';
import '../../pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export async function getStaticProps() {

const navigationGroup = [
  {
    title: 'Other Calculators',
    items: [
      {title: 'Exponent Calculator', link: '/calculators/exponent-calculator'},
      {title: 'Root Calculator', link: '/calculators/root-calculator'},
      {title: 'Modulo Calculator', link: '/calculators/modulo-calculator'},
      {title: 'Logarithm Calculator', link: '/calculators/log-calculator'},
      {title: 'Percentage Calculator', link: '/calculators/percentage-calculator'},
      {title: 'Factorial Calculator', link: '/calculators/factorial-calculator'},
      {title: 'Complex Numbers Calculator', link: '/calculators/complex-numbers'},
      {title: 'Trigonometry Calculator', link: '/calculators/trigonometry-calculator'},
      {title: 'Statistics Calculator', link: '/calculators/statistics-calculator'},
    ]
  },
  {
    title: 'Visual Tools',
    items: [
      {title: 'Fractions Visualizer', link: '/visual-tools/fractions-visualizer'}
    ]
  }
];

const detailInstructions = [
  `Pick an operation in the **Operation** dropdown. The inputs below it change to match: two fractions, one number, or two mixed numbers. [Learn more about choosing an operation](!#getting-started-with-the-fraction-calculator)`,
  `In **Basic Fraction Operations**, type each fraction as a numerator and a denominator in separate boxes, and pick add, subtract, multiply or divide in the middle dropdown. [Learn more about basic fraction operations](!#using-basic-fraction-operations)`,
  `The four conversion modes take one value: a decimal to turn into a fraction or mixed number, a fraction to turn into a decimal, or a mixed number to turn into a decimal. [Learn more about converting](!#converting-between-decimals-and-fractions)`,
  `The mixed-number modes take each number as whole part, space, fraction, for example **1 1/2**. A plain fraction such as **3/4** also works. [Learn more about mixed numbers](!#working-with-mixed-numbers)`,
  `Click **Calculate**. The result appears under the form in lowest terms; a message appears instead when an input is missing or invalid. [Learn more about results and error messages](!#reading-results-and-error-messages)`,
  `The top panel on the right explains the operation you picked. Its link opens the section below that explains that operation in full. [Learn more about the explanation panels](!#understanding-the-step-by-step-display)`,
  `The **Step-by-Step** panel appears as soon as the inputs are valid and shows the working for your own numbers. It updates as you type. [Learn more about the step-by-step display](!#understanding-the-step-by-step-display)`,
  `Click **Reset** to clear every input and the result. Changing the operation also clears the inputs. [Learn more about choosing an operation](!#getting-started-with-the-fraction-calculator)`,
];

const fractionsExplanations = {
  "calculate_fraction": {
    title: `Basic Fraction Operations`,
    content: `Adds, subtracts, multiplies or divides two fractions and reduces the answer to lowest terms. Pick the operation in the middle dropdown. [All fraction operations](!#fraction-operations-explained)`
  },
  "calculate_fraction:add": {
    title: `Adding Fractions`,
    content: `Rewrites both fractions over a common denominator, adds the numerators, then simplifies: $\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$. [Learn more about adding fractions](!#adding-fractions) · [All fraction operations](!#fraction-operations-explained)`
  },
  "calculate_fraction:subtract": {
    title: `Subtracting Fractions`,
    content: `Rewrites both fractions over a common denominator, subtracts the second numerator from the first, then simplifies. [Learn more about subtracting fractions](!#subtracting-fractions) · [All fraction operations](!#fraction-operations-explained)`
  },
  "calculate_fraction:multiply": {
    title: `Multiplying Fractions`,
    content: `Multiplies the numerators together and the denominators together. No common denominator is needed: $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$. [Learn more about multiplying fractions](!#multiplying-fractions) · [All fraction operations](!#fraction-operations-explained)`
  },
  "calculate_fraction:divide": {
    title: `Dividing Fractions`,
    content: `Flips the second fraction and multiplies: $\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = 2$. [Learn more about dividing fractions](!#dividing-fractions) · [All fraction operations](!#fraction-operations-explained)`
  },
  "float_to_frac": {
    title: `Float to Fraction`,
    content: `Turns a decimal such as $0.75$ into a fraction in lowest terms, $\\frac{3}{4}$. The number of decimal places sets the starting denominator. [Learn more about decimal to fraction](!#decimal-to-fraction)`
  },
  "float_to_mixed": {
    title: `Float to Mixed Number`,
    content: `Splits a decimal into its whole part and a fraction for the rest. For example, $2.5$ becomes $2\\frac{1}{2}$. [Learn more about decimal to mixed number](!#decimal-to-mixed-number)`
  },
  "frac_to_float": {
    title: `Fraction to Decimal`,
    content: `Divides the numerator by the denominator: $\\frac{3}{8} = 3 \\div 8 = 0.375$. [Learn more about fraction to decimal](!#fraction-to-decimal)`
  },
  "mixed_to_float": {
    title: `Mixed Number to Float`,
    content: `Adds the whole part to the decimal value of the fraction: $1\\frac{1}{2} = 1 + 0.5 = 1.5$. [Learn more about mixed number to decimal](!#mixed-number-to-decimal)`
  },
  "inverse": {
    title: `Find Inverse`,
    content: `Calculates the multiplicative inverse $\\frac{1}{x}$, the number that multiplies with $x$ to give $1$. The inverse of $2$ is $0.5$, and the inverse of $0.5$ is $2$. [Learn more about the reciprocal](!#reciprocal-of-a-number)`
  },
  "add_mixed": {
    title: `Add Mixed Numbers`,
    content: `Converts both mixed numbers to improper fractions, adds them over a common denominator, and converts back. [Learn more about adding mixed numbers](!#adding-mixed-numbers) · [All about mixed numbers](!#mixed-numbers-vs-improper-fractions)`
  },
  "subtract_mixed": {
    title: `Subtract Mixed Numbers`,
    content: `Converts both mixed numbers to improper fractions, subtracts over a common denominator, and converts back. [Learn more about subtracting mixed numbers](!#subtracting-mixed-numbers) · [All about mixed numbers](!#mixed-numbers-vs-improper-fractions)`
  },
  "multiply_mixed": {
    title: `Multiply Mixed Numbers`,
    content: `Converts both mixed numbers to improper fractions, multiplies them, and simplifies. [Learn more about multiplying mixed numbers](!#multiplying-mixed-numbers) · [All about mixed numbers](!#mixed-numbers-vs-improper-fractions)`
  },
  "divide_mixed": {
    title: `Divide Mixed Numbers`,
    content: `Converts both mixed numbers to improper fractions, then multiplies the first by the reciprocal of the second. [Learn more about dividing mixed numbers](!#dividing-mixed-numbers) · [All about mixed numbers](!#mixed-numbers-vs-improper-fractions)`
  },
};

const demos = {
  'getting-started-with-the-fraction-calculator': {
    title: 'Pick an operation',
    script: [
      { say: 'PICK Convert Float to Fraction\nOne decimal box replaces the two fractions.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'float_to_frac' },
      { wait: 2000 },
      { say: 'TYPE 0.75\nStep-by-Step: 0.75 = 75/100 = 3/4.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '0.75' },
      { wait: 2400 },
      { say: 'PICK Add Mixed Numbers\nTwo boxes for mixed numbers.\nChanging the operation clears the inputs.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'add_mixed' },
      { wait: 2200 },
      { say: 'PICK Basic Fraction Operations\nBack to two fractions and the operation dropdown.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'calculate_fraction' },
      { wait: 2400 },
    ],
  },
  'understanding-the-step-by-step-display': {
    title: 'Watch the steps change as you type',
    script: [
      { say: 'TYPE 2 / 3\nTop panel: Basic Fraction Operations.\nSteps wait for both fractions.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '2' },
      { set: { css: 'input', nth: 1 }, value: '3' },
      { wait: 1800 },
      { say: 'TYPE 3 / 4\nStep-by-Step appears.\nCommon denominator 3 × 4 = 12: 8/12 + 9/12 = 17/12.', at: 'tr' },
      { set: { css: 'input', nth: 2 }, value: '3' },
      { set: { css: 'input', nth: 3 }, value: '4' },
      { wait: 2600 },
      { say: 'PICK Subtract (-)\nSteps update at once.\n8/12 - 9/12 = -1/12.', at: 'tr' },
      { set: { css: 'select', nth: 1 }, value: 'subtract' },
      { wait: 2400 },
      { say: 'TYPE 5 / 6 as the second fraction\nChange a number, the steps follow.\n12/18 - 15/18 = -3/18 = -1/6.', at: 'tr' },
      { set: { css: 'input', nth: 2 }, value: '5' },
      { set: { css: 'input', nth: 3 }, value: '6' },
      { wait: 2600 },
      { say: 'READ Step-by-Step\nEach step shows your own numbers.', at: 'bl' },
      { move: { text: 'Step-by-Step' }, ms: 900 },
      { wait: 2400 },
    ],
  },
  'reading-results-and-error-messages': {
    title: 'Error messages and Reset',
    script: [
      { say: 'TYPE 1 / 0\nA zero denominator.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '1' },
      { set: { css: 'input', nth: 1 }, value: '0' },
      { wait: 1800 },
      { say: 'TYPE 1 / 2\nSecond fraction is fine.', at: 'tr' },
      { set: { css: 'input', nth: 2 }, value: '1' },
      { set: { css: 'input', nth: 3 }, value: '2' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nRed message: First denominator cannot be zero.\nNothing is calculated.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'CLICK Reset\nBoxes and message cleared.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  "using-basic-fraction-operations": {
    "title": "Add, multiply and divide two fractions",
    "script": [
      {
        "say": "TYPE 1 / 2\nTop box, bottom box.\nNo slash to type.",
        "at": "tr"
      },
      {
        "set": {
          "css": "input",
          "nth": 0
        },
        "value": "1"
      },
      {
        "set": {
          "css": "input",
          "nth": 1
        },
        "value": "2"
      },
      {
        "wait": 1800
      },
      {
        "say": "TYPE 1 / 3\nAdd (+) is already picked.\nStep-by-Step appears on the right.",
        "at": "tr"
      },
      {
        "set": {
          "css": "input",
          "nth": 2
        },
        "value": "1"
      },
      {
        "set": {
          "css": "input",
          "nth": 3
        },
        "value": "3"
      },
      {
        "wait": 2200
      },
      {
        "say": "READ Step-by-Step\nCommon denominator 2 × 3 = 6.\n3/6 + 2/6 = 5/6.",
        "at": "bl"
      },
      {
        "move": {
          "text": "Step-by-Step"
        },
        "ms": 900
      },
      {
        "wait": 2600
      },
      {
        "say": "PICK Multiply (×)\nNo common denominator.\nTop × top, bottom × bottom.",
        "at": "tr"
      },
      {
        "set": {
          "css": "select",
          "nth": 1
        },
        "value": "multiply"
      },
      {
        "wait": 2400
      },
      {
        "say": "PICK Divide (÷)\nSecond fraction flips: 3/1.\nThen multiply.",
        "at": "tr"
      },
      {
        "set": {
          "css": "select",
          "nth": 1
        },
        "value": "divide"
      },
      {
        "wait": 2600
      }
    ]
  },
  "converting-between-decimals-and-fractions": {
    "title": "Convert between decimals and fractions",
    "script": [
      {
        "say": "PICK Convert Float to Fraction\nOne box: the decimal.\nRight panel: what this mode does.",
        "at": "tr"
      },
      {
        "set": {
          "css": "select",
          "nth": 0
        },
        "value": "float_to_frac"
      },
      {
        "wait": 2000
      },
      {
        "say": "TYPE 0.625\n3 decimal places.\n625/1000, then reduce.",
        "at": "tr"
      },
      {
        "set": {
          "css": "input",
          "nth": 0
        },
        "value": "0.625"
      },
      {
        "wait": 2400
      },
      {
        "say": "PICK Convert Fraction to Decimal\nTwo boxes: top, bottom.",
        "at": "tr"
      },
      {
        "set": {
          "css": "select",
          "nth": 0
        },
        "value": "frac_to_float"
      },
      {
        "wait": 1800
      },
      {
        "say": "TYPE 3 / 8\nOne division.\n3 ÷ 8 = 0.375.",
        "at": "tr"
      },
      {
        "set": {
          "css": "input",
          "nth": 0
        },
        "value": "3"
      },
      {
        "set": {
          "css": "input",
          "nth": 1
        },
        "value": "8"
      },
      {
        "wait": 2400
      },
      {
        "say": "PICK Float to Mixed · TYPE 2.75\nWhole part 2 stays.\n0.75 = 75/100 → 2 3/4.",
        "at": "tr"
      },
      {
        "set": {
          "css": "select",
          "nth": 0
        },
        "value": "float_to_mixed"
      },
      {
        "set": {
          "css": "input",
          "nth": 0
        },
        "value": "2.75"
      },
      {
        "wait": 2800
      }
    ]
  },
  "working-with-mixed-numbers": {
    "title": "Add and divide mixed numbers",
    "script": [
      {
        "say": "PICK Add Mixed Numbers\nTwo boxes.\nFormat: whole, space, fraction.",
        "at": "tr"
      },
      {
        "set": {
          "css": "select",
          "nth": 0
        },
        "value": "add_mixed"
      },
      {
        "wait": 2000
      },
      {
        "say": "TYPE 1 1/2 and 2 1/4\nSpace between whole and fraction.",
        "at": "tr"
      },
      {
        "set": {
          "css": "input",
          "nth": 0
        },
        "value": "1 1/2"
      },
      {
        "set": {
          "css": "input",
          "nth": 1
        },
        "value": "2 1/4"
      },
      {
        "wait": 2200
      },
      {
        "say": "READ Step-by-Step\nImproper first: 3/2 and 9/4.\nCommon denominator, then add.",
        "at": "bl"
      },
      {
        "move": {
          "text": "Step-by-Step"
        },
        "ms": 900
      },
      {
        "wait": 2800
      },
      {
        "say": "PICK Divide Mixed Numbers\nMode change clears the boxes.",
        "at": "tr"
      },
      {
        "set": {
          "css": "select",
          "nth": 0
        },
        "value": "divide_mixed"
      },
      {
        "wait": 1800
      },
      {
        "say": "TYPE 3 1/2 and 1 1/4\n7/2 ÷ 5/4.\nFlip 5/4 → 4/5, multiply.",
        "at": "tr"
      },
      {
        "set": {
          "css": "input",
          "nth": 0
        },
        "value": "3 1/2"
      },
      {
        "set": {
          "css": "input",
          "nth": 1
        },
        "value": "1 1/4"
      },
      {
        "wait": 2800
      }
    ]
  }
};

const keyWords = [
  'fraction calculator',
  'calculate fractions',
  'add fractions',
  'subtract fractions',
  'multiply fractions',
  'divide fractions',
  'decimal to fraction',
  'fraction to decimal',
  'mixed number calculator',
  'simplify fractions',
  'free fraction calculator',
  'online fraction tool',
  'fraction converter',
  'mixed fractions calculator',
  'improper fractions'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Fraction Calculator`,
    content: `The fraction calculator has two main areas: a left panel for inputs and calculations, and a right sidebar showing explanations. Start by clicking the **Operation** dropdown at the top of the left panel. You'll see 10 different operations to choose from, including basic fraction math, decimal conversions, and mixed number operations.

After selecting an operation, the input fields change automatically to match what you need. For **Basic Fraction Operations**, you'll see two fractions with numerator and denominator boxes, plus an operation selector. For **Convert Float to Fraction**, you get a single decimal input box. For **Add Mixed Numbers**, you'll see two text inputs for mixed number format.

Enter your numbers in the appropriate fields. For fractions, type the numerator in the top box and denominator in the bottom box. For mixed numbers, use the format "1 1/2" (whole number, space, fraction). For decimals, type any number like $0.75$ or $2.5$.

Click the blue **Calculate** button to see your result appear in the result section below. The right sidebar updates with static explanations for the operation type, and when you enter valid inputs, step-by-step working appears showing exactly how the calculator solved your problem. Use **Reset** anytime to clear everything and start fresh.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Basic Fraction Operations`,
    content: `Select **Basic Fraction Operations** from the dropdown to add, subtract, multiply, or divide two fractions. You'll see two fraction input areas, each with a numerator box on top and denominator box on bottom. Enter your first fraction's numbers, then choose your operation: **Add (+)**, **Subtract (−)**, **Multiply (×)**, or **Divide (÷)**.

Try adding $\\frac{1}{2} + \\frac{1}{3}$. Enter $1$ and $2$ for the first fraction, select **Add (+)**, then enter $1$ and $3$ for the second fraction. Click Calculate to see the result $\\frac{5}{6}$. The step-by-step section shows how the calculator found the common denominator ($2 \\times 3 = 6$), converted both fractions, and added the numerators.

For multiplication like $\\frac{2}{3} \\times \\frac{3}{4}$, you don't need common denominators. The calculator multiplies numerators together ($2 \\times 3 = 6$) and denominators together ($3 \\times 4 = 12$), giving $\\frac{6}{12}$, which simplifies to $\\frac{1}{2}$.

Division works by flipping the second fraction. When you calculate $\\frac{1}{2} \\div \\frac{1}{4}$, the calculator flips $\\frac{1}{4}$ to $\\frac{4}{1}$, then multiplies: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. Watch the step-by-step display to see this reciprocal process in action.

Why each operation works is explained in [fraction operations explained](!#fraction-operations-explained).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Converting Between Decimals and Fractions`,
    content: `The calculator offers four conversion modes for switching between decimal and fraction formats. **Convert Float to Fraction** changes decimals like $0.75$ into fractions ($\\frac{3}{4}$). Enter any decimal, click Calculate, and see both the fraction result and the step-by-step conversion showing how decimal places become the denominator.

Try converting $0.625$ to a fraction. The calculator counts $3$ decimal places, creates $\\frac{625}{1000}$ by multiplying by $10^3$, then simplifies by finding the greatest common divisor. The result is $\\frac{5}{8}$.

**Convert Fraction to Decimal** does the opposite. Select this mode, enter a fraction like $\\frac{3}{8}$, and the calculator divides $3 \\div 8 = 0.375$. The result appears immediately with the division shown step-by-step.

**Convert Float to Mixed Number** and **Convert Mixed Number to Float** work with mixed numbers. Enter $2.75$ and get $2\\frac{3}{4}$, or enter "1 1/2" to get $1.5$. The mixed number format requires a space between the whole number and fraction: type "1 1/2" not "11/2". The calculator separates the parts and shows you each conversion step.

The rules behind each conversion are in [decimal to fraction](!#decimal-to-fraction) and [fraction to decimal](!#fraction-to-decimal).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Working with Mixed Numbers`,
    content: `Four operations handle mixed numbers specifically: **Add Mixed Numbers**, **Subtract Mixed Numbers**, **Multiply Mixed Numbers**, and **Divide Mixed Numbers**. Select any of these modes to see two text input boxes asking for mixed numbers in the format "whole fraction" like "1 1/2" or "2 3/4".

When adding mixed numbers like $1\\frac{1}{2} + 2\\frac{1}{4}$, type "1 1/2" in the first box and "2 1/4" in the second. The calculator converts both to improper fractions ($\\frac{3}{2}$ and $\\frac{9}{4}$), finds a common denominator, adds them, and converts back to mixed number form. The result $3\\frac{3}{4}$ appears with every conversion step shown.

You can also use regular fractions in mixed number operations. Type "3/4" instead of a mixed number and the calculator treats it as $0\\frac{3}{4}$. This works for all four mixed operations—the format accepts both "1 1/2" and "3/2" interchangeably.

For division like $3\\frac{1}{2} \\div 1\\frac{1}{4}$, enter "3 1/2" and "1 1/4". The step-by-step shows conversion to improper fractions ($\\frac{7}{2} \\div \\frac{5}{4}$), flipping the second fraction ($\\frac{4}{5}$), multiplying, and simplifying. Watch how the calculator handles each transformation clearly.

The theory is in [mixed numbers vs improper fractions](!#mixed-numbers-vs-improper-fractions).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding the Step-by-Step Display`,
    content: `The right sidebar contains two explanation panels. The top panel shows a static description of the current operation—what it does and when to use it. This text updates whenever you change the operation dropdown. Read this first to understand what calculation you're about to perform.

The bottom panel, labeled **Step-by-Step**, appears only after you enter valid inputs. This dynamic section shows exactly how the calculator solves your specific problem. For adding fractions, you'll see steps like "Find common denominator → 2 × 3 = 6" followed by "Convert fractions" with the actual numbers from your input.

Each step uses mathematical notation to show formulas. When adding $\\frac{1}{2} + \\frac{1}{3}$, the steps display: Step 1 finds the common denominator $6$, Step 2 shows $\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$, Step 3 adds numerators $3 + 2 = 5$, and Step 4 shows the result $\\frac{5}{6}$.

The step-by-step updates in real-time as you type. Change any number in your input, or the operation in the middle dropdown, and watch the explanation adjust instantly: $\\frac{2}{3} + \\frac{3}{4}$ becomes $\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$, and with subtraction $\\frac{8}{12} - \\frac{9}{12} = -\\frac{1}{12}$. This feature helps you learn the process, not just get an answer. Follow along with your own paper to verify each calculation step matches the mathematical rules for that operation.

The top panel ends with a **Learn more** link. It jumps to the section below that explains the chosen operation, such as [adding fractions](!#adding-fractions).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Results and Error Messages`,
    content: `After clicking Calculate, your result appears in the **Result** section between the input form and sidebar. The answer displays in large, clear text using proper fraction notation. For fraction results, you'll see the numerator over a horizontal line over the denominator. For decimal results, you get a standard number like $0.75$ or $1.5$.

The calculator automatically simplifies all fraction results. If you add $\\frac{2}{4} + \\frac{1}{4}$, you won't see $\\frac{3}{4}$ written as $\\frac{6}{8}$—the calculator finds the greatest common divisor and reduces to simplest form. Mixed numbers appear as "whole number fraction" format when appropriate.

Red error messages appear above the result area when inputs are invalid; they are checked on this page before anything is sent, so a bad input never reaches the server. **"Please enter a valid numerator"** means you left a fraction box empty or typed non-numeric characters. **"Denominator cannot be zero"** prevents division by zero errors. **"Please enter a valid mixed number"** reminds you to use the correct format like "1 1/2" with a space.

Orange validation errors appear for mathematical impossibilities like dividing by zero. If you try $\\frac{1}{2} \\div \\frac{0}{1}$, you'll see **"Cannot divide by zero"** in orange. The calculator won't process the calculation until you fix the error. Simply correct your input and the error disappears when you click Calculate again.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Fractions`,
    content: `A fraction represents part of a whole. It has two numbers: the **numerator** (top) shows how many parts you have, and the **denominator** (bottom) shows how many equal parts make the whole. In $\\frac{3}{4}$, you have $3$ parts out of $4$ total equal parts.

Think of a pizza cut into $8$ slices. If you eat $3$ slices, you ate $\\frac{3}{8}$ of the pizza. The denominator ($8$) is the total slices, and the numerator ($3$) is how many you took. Fractions let you describe quantities between whole numbers precisely.

**Proper fractions** have numerators smaller than denominators: $\\frac{1}{2}$, $\\frac{3}{4}$, $\\frac{5}{8}$. These represent values less than $1$. **Improper fractions** have numerators equal to or greater than denominators: $\\frac{5}{4}$, $\\frac{7}{3}$, $\\frac{8}{8}$. These equal $1$ or more.

For more detailed fraction theory and visual representations, see [fractions fundamentals](!/arithmetic/fractions#1) and **fraction visualization tools**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Fraction Operations Explained`,
    content: `**Adding and subtracting fractions** requires a common denominator. You can't add $\\frac{1}{2} + \\frac{1}{3}$ directly because the pieces are different sizes. Find a common denominator (usually by multiplying denominators: $2 \\times 3 = 6$), convert both fractions ($\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$), then add numerators: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.

**Multiplying fractions** is simpler—multiply numerators together and denominators together. For $\\frac{2}{3} \\times \\frac{4}{5}$, calculate $2 \\times 4 = 8$ (numerator) and $3 \\times 5 = 15$ (denominator) to get $\\frac{8}{15}$. No common denominator needed.

**Dividing fractions** uses the "flip and multiply" rule. To divide $\\frac{1}{2} \\div \\frac{1}{4}$, flip the second fraction to $\\frac{4}{1}$ (the reciprocal), then multiply: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. This works because dividing by a fraction is the same as multiplying by its reciprocal.

**Simplifying** means reducing to lowest terms by dividing both numerator and denominator by their greatest common factor. The fraction $\\frac{6}{8}$ simplifies to $\\frac{3}{4}$ because both $6$ and $8$ divide by $2$. For comprehensive fraction operation rules, see [fraction arithmetic concepts](!/arithmetic/fractions#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Mixed Numbers vs Improper Fractions`,
    content: `A **mixed number** combines a whole number with a fraction: $2\\frac{1}{4}$ means $2$ whole units plus $\\frac{1}{4}$ of another unit. An **improper fraction** has a numerator larger than its denominator: $\\frac{9}{4}$. These two forms represent the same value—$2\\frac{1}{4} = \\frac{9}{4}$.

Convert mixed numbers to improper fractions by multiplying the whole number by the denominator and adding the numerator. For $3\\frac{2}{5}$, calculate $3 \\times 5 = 15$, add $2$ to get $17$, so $3\\frac{2}{5} = \\frac{17}{5}$.

Convert improper fractions to mixed numbers by dividing numerator by denominator. For $\\frac{11}{3}$, divide $11 \\div 3 = 3$ remainder $2$. The quotient ($3$) is the whole number, remainder ($2$) is the new numerator, original denominator stays: $\\frac{11}{3} = 3\\frac{2}{3}$.

Use mixed numbers for measurements and real-world quantities like "$2\\frac{1}{2}$ cups of flour" or "I ran $3\\frac{3}{4}$ miles." Use improper fractions for calculations—they're easier to add, multiply, and divide. The calculator handles both and converts between them automatically. See [fraction types](!/arithmetic/fractions#3) and [fraction conversion methods](!/arithmetic/fractions/mixed-numbers#3) for more details.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Visual Tools`,
    content: `**Fractions Visualizer** - See fractions as visual shapes and diagrams. Watch how $\\frac{1}{2} + \\frac{1}{4}$ combines graphically, making abstract fraction operations concrete and understandable.

**Percentage Calculator** - Convert between fractions, decimals, and percentages. The fraction $\\frac{3}{4}$ equals $75\\%$, and understanding these relationships helps with real-world applications.

**GCD Calculator** - Find the greatest common divisor for simplifying fractions. If you need to reduce $\\frac{24}{36}$, find $GCD(24, 36) = 12$ and divide both parts by $12$ to get $\\frac{2}{3}$.

**LCM Calculator** - Calculate the least common multiple for finding common denominators. To add $\\frac{1}{6} + \\frac{1}{8}$, find $LCM(6, 8) = 24$ as your common denominator.

**Ratio Calculator** - Work with ratios, which are closely related to fractions. The ratio $3:4$ is the same as the fraction $\\frac{3}{4}$.

For deeper theoretical understanding, explore **fraction arithmetic**, [equivalent fractions](!/arithmetic/fractions/equivalent#1), [fraction simplification](!/arithmetic/fractions/equivalent#3), [common denominators](!/arithmetic/fractions/equivalent#7), and **rational number theory**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Adding Fractions`,
    content: `Fractions can be added only when they count pieces of the same size, so the first job is a **common denominator**. Multiplying the two denominators always gives one: for $\\frac{1}{2} + \\frac{1}{3}$ it is $2 \\times 3 = 6$. Each fraction is then rewritten over $6$ by scaling its top and bottom by the same number: $\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$.

With equal denominators, add the numerators and keep the denominator: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$. Finish by reducing to lowest terms.

The common mistake is adding straight across: $\\frac{1}{2} + \\frac{1}{3}$ is not $\\frac{2}{5}$. The denominator says what size the pieces are; it is never added.

The full method, including the least common denominator, is in [finding a common denominator](!/arithmetic/fractions/adding-subtracting#3) and [converting to a common denominator](!/arithmetic/fractions/adding-subtracting#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Subtracting Fractions`,
    content: `Subtraction follows the same path as addition. Rewrite both fractions over a common denominator, subtract the numerators, keep the denominator, and simplify.

For $\\frac{3}{4} - \\frac{1}{6}$, the product of the denominators is $24$: $\\frac{18}{24} - \\frac{4}{24} = \\frac{14}{24} = \\frac{7}{12}$. The least common denominator, $12$, gives the same answer with smaller numbers: $\\frac{9}{12} - \\frac{2}{12} = \\frac{7}{12}$.

Order matters. $\\frac{1}{6} - \\frac{3}{4}$ is $-\\frac{7}{12}$, a negative result, because the second fraction is larger than the first.

The usual errors, such as subtracting the denominators or forgetting to scale a numerator, are listed in [common mistakes](!/arithmetic/fractions/adding-subtracting#8). The method is in [converting to a common denominator](!/arithmetic/fractions/adding-subtracting#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Multiplying Fractions`,
    content: `Multiplication needs no common denominator. Multiply the numerators together and the denominators together, then simplify: $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$.

Cancelling first keeps the numbers small. The $3$ on top of one fraction and the $3$ under the other cancel, leaving $\\frac{2}{1} \\times \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$.

A whole number is a fraction over $1$. So $3 \\times \\frac{2}{5} = \\frac{3}{1} \\times \\frac{2}{5} = \\frac{6}{5}$. Multiplying both the top and the bottom by $3$ gives $\\frac{6}{15}$, which is wrong.

See the [basic rule](!/arithmetic/fractions/multiplying#1) and [cross-canceling before multiplying](!/arithmetic/fractions/multiplying#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Dividing Fractions`,
    content: `To divide by a fraction, multiply by its **reciprocal**, the fraction turned upside down. For $\\frac{1}{2} \\div \\frac{1}{4}$, flip $\\frac{1}{4}$ to $\\frac{4}{1}$ and multiply: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$.

The answer makes sense: four quarters make a whole, so two quarters fit into one half.

Only the second fraction is flipped. Flipping the first instead gives $\\frac{2}{1} \\times \\frac{1}{4} = \\frac{1}{2}$, which is wrong. Dividing by a fraction with $0$ on top is undefined, because $0$ has no reciprocal.

Why the rule works is shown in [why multiply by the reciprocal](!/arithmetic/fractions/dividing#3). The rule itself is in [dividing fractions, basic rule](!/arithmetic/fractions/dividing#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Decimal to Fraction`,
    content: `A decimal with $n$ digits after the point is a fraction over $10^n$. Write the digits over that power of ten, then reduce.

For $0.625$ there are $3$ decimal places, so $0.625 = \\frac{625}{1000}$. The greatest common divisor of $625$ and $1000$ is $125$, and dividing both by it gives $\\frac{5}{8}$. In the same way, $0.75 = \\frac{75}{100} = \\frac{3}{4}$.

Count the places carefully. $0.05$ is $\\frac{5}{100} = \\frac{1}{20}$, not $\\frac{5}{10}$.

A typed decimal always ends, so $0.333$ becomes $\\frac{333}{1000}$, not $\\frac{1}{3}$. Only the exact repeating decimal equals $\\frac{1}{3}$.

Reducing a fraction is explained in [simplifying fractions](!/arithmetic/fractions/equivalent#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Fraction to Decimal`,
    content: `A fraction is a division: the numerator divided by the denominator. $\\frac{3}{8} = 3 \\div 8 = 0.375$ and $\\frac{1}{4} = 0.25$.

Some fractions give a decimal that repeats forever: $\\frac{1}{3} = 0.333\\ldots$ and $\\frac{2}{11} = 0.1818\\ldots$. A fraction in lowest terms gives an ending decimal exactly when its denominator has no prime factors other than $2$ and $5$.

Decimals make fractions easy to compare. $\\frac{5}{8} = 0.625$ is larger than $\\frac{3}{5} = 0.6$, which is hard to see from the fractions alone.

The method is used in the [decimal conversion method](!/arithmetic/fractions/comparing#6) for comparing fractions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Decimal to Mixed Number`,
    content: `A decimal larger than $1$ splits into a whole part and a decimal part. The whole part stays as it is. The decimal part becomes a fraction.

For $2.75$, the whole part is $2$ and the decimal part is $0.75 = \\frac{75}{100} = \\frac{3}{4}$, so $2.75 = 2\\frac{3}{4}$. For a negative number the sign goes in front: $-2.75 = -2\\frac{3}{4}$.

The result can also be written as an improper fraction, $\\frac{11}{4}$. Both forms have the same value.

Moving between the two forms is shown in [converting improper fractions to mixed numbers](!/arithmetic/fractions/mixed-numbers#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `Mixed Number to Decimal`,
    content: `A mixed number is a whole number plus a fraction. Turn the fraction into a decimal and add the whole part: $1\\frac{1}{2} = 1 + 0.5 = 1.5$ and $3\\frac{3}{8} = 3 + 0.375 = 3.375$.

Another route goes through the improper fraction: $3\\frac{3}{8} = \\frac{27}{8}$, and $27 \\div 8 = 3.375$.

The space matters when you type. **1 1/2** is one and a half. **11/2** is eleven halves, which is $5.5$.

See [converting mixed numbers to improper fractions](!/arithmetic/fractions/mixed-numbers#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj19: {
    title: `Reciprocal (Inverse) of a Number`,
    content: `The **reciprocal**, or multiplicative inverse, of a number $x$ is $\\frac{1}{x}$. It is the number that multiplies with $x$ to give $1$.

For a whole number, the reciprocal is $1$ over it: the reciprocal of $2$ is $\\frac{1}{2} = 0.5$. For a fraction, swap top and bottom: the reciprocal of $\\frac{2}{3}$ is $\\frac{3}{2}$. For a decimal, divide $1$ by it: the reciprocal of $0.25$ is $4$.

The check is always the product: $0.25 \\times 4 = 1$. Zero has no reciprocal, because nothing multiplied by $0$ gives $1$.

Reciprocals are what make fraction division work. See [reciprocals](!/arithmetic/fractions/dividing#1).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj20: {
    title: `Adding Mixed Numbers`,
    content: `The reliable method is to convert each mixed number to an improper fraction, add, and convert back. $1\\frac{1}{2} + 2\\frac{1}{4} = \\frac{3}{2} + \\frac{9}{4} = \\frac{6}{4} + \\frac{9}{4} = \\frac{15}{4} = 3\\frac{3}{4}$.

When the fractions are small, you can also add the whole parts and the fraction parts separately: $(1 + 2) + (\\frac{1}{2} + \\frac{1}{4}) = 3\\frac{3}{4}$. If the fraction parts add up to more than $1$, carry the extra whole into the whole part.

The calculator uses the improper-fraction method, so its steps always have the same shape.

Both methods are worked through in [adding mixed numbers](!/arithmetic/fractions/adding-subtracting#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj21: {
    title: `Subtracting Mixed Numbers`,
    content: `Convert both numbers to improper fractions, subtract over a common denominator, and convert back. $3\\frac{1}{4} - 1\\frac{1}{2} = \\frac{13}{4} - \\frac{3}{2} = \\frac{13}{4} - \\frac{6}{4} = \\frac{7}{4} = 1\\frac{3}{4}$.

Subtracting the parts separately is where most errors happen. Here $\\frac{1}{4} - \\frac{1}{2}$ is negative, so a whole must be borrowed first: $3\\frac{1}{4} = 2\\frac{5}{4}$. The improper-fraction method avoids borrowing completely.

The borrowing method is shown step by step in [subtracting mixed numbers](!/arithmetic/fractions/adding-subtracting#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj22: {
    title: `Multiplying Mixed Numbers`,
    content: `Always convert to improper fractions first, then multiply the tops and the bottoms. $1\\frac{1}{2} \\times 2\\frac{2}{3} = \\frac{3}{2} \\times \\frac{8}{3} = \\frac{24}{6} = 4$.

Multiplying the parts separately gives the wrong answer: $1 \\times 2 + \\frac{1}{2} \\times \\frac{2}{3} = 2\\frac{1}{3}$, not $4$. Each part of the first number has to multiply each part of the second.

Cancelling before multiplying works here too: the $3$s cancel, leaving $\\frac{1}{2} \\times \\frac{8}{1} = 4$.

See [multiplying mixed numbers](!/arithmetic/fractions/multiplying#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj23: {
    title: `Dividing Mixed Numbers`,
    content: `Convert both numbers to improper fractions, then multiply the first by the reciprocal of the second. $3\\frac{1}{2} \\div 1\\frac{1}{4} = \\frac{7}{2} \\div \\frac{5}{4} = \\frac{7}{2} \\times \\frac{4}{5} = \\frac{28}{10} = 2\\frac{4}{5}$.

Flip the improper fraction, never the mixed number as written. The reciprocal of $1\\frac{1}{4}$ is $\\frac{4}{5}$, not $1\\frac{4}{1}$.

A quick estimate checks the answer: $3.5 \\div 1.25$ is a little under $3$, and $2\\frac{4}{5} = 2.8$.

See [dividing mixed numbers](!/arithmetic/fractions/dividing#6).`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "How do I add fractions with different denominators?",
    answer: "To add fractions with different denominators, first find a common denominator (usually by multiplying the denominators together). Then convert both fractions to equivalent fractions with this common denominator. Finally, add the numerators and keep the denominator the same. For example, 1/2 + 1/3 = 3/6 + 2/6 = 5/6. This calculator does all these steps automatically."
  },
  obj2: {
    question: "What's the difference between a proper fraction and an improper fraction?",
    answer: "A proper fraction has a numerator smaller than the denominator (like 3/4), representing a value less than 1. An improper fraction has a numerator equal to or greater than the denominator (like 5/4 or 8/8), representing a value of 1 or greater. Improper fractions can be converted to mixed numbers for easier understanding."
  },
  obj3: {
    question: "How do I convert a decimal to a fraction?",
    answer: "Count the decimal places in your number. Create a fraction with the decimal number (without the decimal point) as the numerator and 10 raised to the number of decimal places as the denominator. For 0.75 (2 decimal places), this gives 75/100, which simplifies to 3/4. Use the Convert Float to Fraction mode in this calculator for instant conversion."
  },
  obj4: {
    question: "Why do I flip the second fraction when dividing?",
    answer: "Dividing by a fraction is the same as multiplying by its reciprocal (the fraction flipped upside down). This is because division asks 'how many times does this fraction fit into that number?' For example, 1/2 ÷ 1/4 asks how many 1/4s fit in 1/2. The answer is 2, which you get by flipping 1/4 to 4/1 and multiplying: 1/2 × 4/1 = 4/2 = 2."
  },
  obj5: {
    question: "How do I enter mixed numbers in the calculator?",
    answer: "Type mixed numbers using the format 'whole number space fraction'. For example, one and a half is entered as '1 1/2' (not 11/2). Make sure there's a space between the whole number and the fraction. You can also enter just a fraction like '3/4' in mixed number operations, and the calculator will treat it as 0 3/4."
  },
  obj6: {
    question: "How do I calculate fractions with whole numbers?",
    answer: "Write the whole number as a fraction over 1, then work as usual. For example, 3 + 2/5 becomes 3/1 + 2/5 = 15/5 + 2/5 = 17/5 = 3 2/5, and 4 × 2/3 becomes 4/1 × 2/3 = 8/3 = 2 2/3. In Basic Fraction Operations, enter the whole number with 1 as its denominator: numerator 3, denominator 1."
  },
  obj7: {
    question: "Does the calculator simplify the answer?",
    answer: "Yes. Every result is reduced to lowest terms by dividing the numerator and denominator by their greatest common divisor. For example, 1/4 + 1/4 = 2/4 is shown as 1/2, and 3/4 × 2/3 = 6/12 is also shown as 1/2."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Fraction Calculator - Add, Subtract, Multiply & Divide Fractions",
    "description": "Free online fraction calculator for all fraction operations. Add, subtract, multiply, divide fractions, convert decimals to fractions, work with mixed numbers, and see step-by-step solutions.",
    "url": "https://www.learnmathclass.com/calculators/fraction-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Add, subtract, multiply, and divide fractions",
      "Convert decimals to fractions and fractions to decimals",
      "Convert between mixed numbers and improper fractions",
      "Work with mixed number operations (add, subtract, multiply, divide)",
      "Calculate multiplicative inverse (1/x)",
      "Automatic fraction simplification to lowest terms",
      "Step-by-step explanations for every calculation",
      "Real-time validation and error checking"
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
    "educationalLevel": "Elementary School, Middle School, High School",
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
        "name": "Fraction Calculator",
        "item": "https://www.learnmathclass.com/calculators/fraction-calculator"
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
    fractionsExplanations,
    demos,
    sectionsContent,
    introContent,
    navigationGroup,
    faqQuestions,
    schemas,
    seoData: {
      title: "Fraction Calculator | Add, Subtract, Multiply & Divide",
      description: "Free fraction calculator for all operations. Add, subtract, multiply, divide fractions, convert decimals, work with mixed numbers. Step-by-step solutions included.",
      keywords: keyWords.join(", "),
      url: "/calculators/fraction-calculator",
      name: "Fraction Calculator - Complete Fraction Operations Tool"
    },
  },
  revalidate: 86400
};
}

export default function FractionCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, fractionsExplanations, demos, navigationGroup, faqQuestions, schemas}) {

const genericSections = [
  {
    id: 'getting-started-with-the-fraction-calculator',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [
      <ToolDemoPlayer
        key='demo-getting-started-with-the-fraction-calculator'
        script={demos['getting-started-with-the-fraction-calculator'].script}
        title={demos['getting-started-with-the-fraction-calculator'].title}
        label={`Demo: ${demos['getting-started-with-the-fraction-calculator'].title}`}
        scale={0.6}
        renderText={processContent}
      >
        <FractionCalculator explanations={fractionsExplanations} />
      </ToolDemoPlayer>,
      sectionsContent.obj1.content,
    ],
  },
  {
    id: 'using-basic-fraction-operations',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [
      <ToolDemoPlayer
        key='demo-using-basic-fraction-operations'
        script={demos['using-basic-fraction-operations'].script}
        title={demos['using-basic-fraction-operations'].title}
        label={`Demo: ${demos['using-basic-fraction-operations'].title}`}
        scale={0.6}
        renderText={processContent}
      >
        <FractionCalculator explanations={fractionsExplanations} />
      </ToolDemoPlayer>,
      sectionsContent.obj2.content,
    ],
  },
  {
    id: 'converting-between-decimals-and-fractions',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [
      <ToolDemoPlayer
        key='demo-converting-between-decimals-and-fractions'
        script={demos['converting-between-decimals-and-fractions'].script}
        title={demos['converting-between-decimals-and-fractions'].title}
        label={`Demo: ${demos['converting-between-decimals-and-fractions'].title}`}
        scale={0.6}
        renderText={processContent}
      >
        <FractionCalculator explanations={fractionsExplanations} />
      </ToolDemoPlayer>,
      sectionsContent.obj3.content,
    ],
  },
  {
    id: 'working-with-mixed-numbers',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [
      <ToolDemoPlayer
        key='demo-working-with-mixed-numbers'
        script={demos['working-with-mixed-numbers'].script}
        title={demos['working-with-mixed-numbers'].title}
        label={`Demo: ${demos['working-with-mixed-numbers'].title}`}
        scale={0.6}
        renderText={processContent}
      >
        <FractionCalculator explanations={fractionsExplanations} />
      </ToolDemoPlayer>,
      sectionsContent.obj4.content,
    ],
  },
  {
    id: 'understanding-the-step-by-step-display',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [
      <ToolDemoPlayer
        key='demo-understanding-the-step-by-step-display'
        script={demos['understanding-the-step-by-step-display'].script}
        title={demos['understanding-the-step-by-step-display'].title}
        label={`Demo: ${demos['understanding-the-step-by-step-display'].title}`}
        scale={0.6}
        renderText={processContent}
      >
        <FractionCalculator explanations={fractionsExplanations} />
      </ToolDemoPlayer>,
      sectionsContent.obj5.content,
    ],
  },
  {
    id: 'reading-results-and-error-messages',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [
      <ToolDemoPlayer
        key='demo-reading-results-and-error-messages'
        script={demos['reading-results-and-error-messages'].script}
        title={demos['reading-results-and-error-messages'].title}
        label={`Demo: ${demos['reading-results-and-error-messages'].title}`}
        scale={0.6}
        renderText={processContent}
      >
        <FractionCalculator explanations={fractionsExplanations} />
      </ToolDemoPlayer>,
      sectionsContent.obj6.content,
    ],
  },
  {
    id: 'what-are-fractions',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [
      sectionsContent.obj7.content,
    ],
  },
  {
    id: 'fraction-operations-explained',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [
      sectionsContent.obj8.content,
    ],
  },
  {
    id: 'adding-fractions',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [
      sectionsContent.obj11.content,
    ],
  },
  {
    id: 'subtracting-fractions',
    title: sectionsContent.obj12.title,
    link: sectionsContent.obj12.link,
    content: [
      sectionsContent.obj12.content,
    ],
  },
  {
    id: 'multiplying-fractions',
    title: sectionsContent.obj13.title,
    link: sectionsContent.obj13.link,
    content: [
      sectionsContent.obj13.content,
    ],
  },
  {
    id: 'dividing-fractions',
    title: sectionsContent.obj14.title,
    link: sectionsContent.obj14.link,
    content: [
      sectionsContent.obj14.content,
    ],
  },
  {
    id: 'decimal-to-fraction',
    title: sectionsContent.obj15.title,
    link: sectionsContent.obj15.link,
    content: [
      sectionsContent.obj15.content,
    ],
  },
  {
    id: 'fraction-to-decimal',
    title: sectionsContent.obj16.title,
    link: sectionsContent.obj16.link,
    content: [
      sectionsContent.obj16.content,
    ],
  },
  {
    id: 'decimal-to-mixed-number',
    title: sectionsContent.obj17.title,
    link: sectionsContent.obj17.link,
    content: [
      sectionsContent.obj17.content,
    ],
  },
  {
    id: 'mixed-number-to-decimal',
    title: sectionsContent.obj18.title,
    link: sectionsContent.obj18.link,
    content: [
      sectionsContent.obj18.content,
    ],
  },
  {
    id: 'reciprocal-of-a-number',
    title: sectionsContent.obj19.title,
    link: sectionsContent.obj19.link,
    content: [
      sectionsContent.obj19.content,
    ],
  },
  {
    id: 'mixed-numbers-vs-improper-fractions',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [
      sectionsContent.obj9.content,
    ],
  },
  {
    id: 'adding-mixed-numbers',
    title: sectionsContent.obj20.title,
    link: sectionsContent.obj20.link,
    content: [
      sectionsContent.obj20.content,
    ],
  },
  {
    id: 'subtracting-mixed-numbers',
    title: sectionsContent.obj21.title,
    link: sectionsContent.obj21.link,
    content: [
      sectionsContent.obj21.content,
    ],
  },
  {
    id: 'multiplying-mixed-numbers',
    title: sectionsContent.obj22.title,
    link: sectionsContent.obj22.link,
    content: [
      sectionsContent.obj22.content,
    ],
  },
  {
    id: 'dividing-mixed-numbers',
    title: sectionsContent.obj23.title,
    link: sectionsContent.obj23.link,
    content: [
      sectionsContent.obj23.content,
    ],
  },
  {
    id: 'related-calculators-and-visual-tools',
    title: sectionsContent.obj10.title,
    link: sectionsContent.obj10.link,
    content: [
      sectionsContent.obj10.content,
    ],
  },
];

return (
  <>
    <Head>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
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
    
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Fraction Calculator</h1>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Fraction Calculator'
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
        <div style={{width:'100%', maxWidth:'900px', marginLeft:'150px'}}>
          <FractionCalculator explanations={fractionsExplanations} />
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