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
// //    <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Fraction Calculator</h1>
   
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
    
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Fraction Calculator</h1>
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
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import FractionCalculator from '@/app/components/calculators/fraction-calculator/FractionCalculator';
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
  "Select your operation type from the dropdown menu (10 different operations available)",
  "Enter your numbers in the appropriate input fields based on the selected operation",
  "For fraction operations, enter numerator and denominator separately",
  "Click Calculate to see the result and step-by-step explanation",
  "Use Reset to clear inputs and try a different calculation"
];

const fractionsExplanations = {
  calculate_fraction: {
    title: "Basic Fraction Operations",
    content: "Perform addition, subtraction, multiplication, or division with two fractions. The calculator will find a common denominator for addition and subtraction, and simplify the result."
  },
  float_to_frac: {
    title: "Float to Fraction",
    content: "Converts a decimal number (like $0.75$) into its fraction form ($\\frac{3}{4}$). The result is automatically simplified to the lowest terms."
  },
  float_to_mixed: {
    title: "Float to Mixed Number",
    content: "Converts a decimal number into a mixed number format (whole number + fraction). For example, $2.5$ becomes $2\\frac{1}{2}$."
  },
  frac_to_float: {
    title: "Fraction to Decimal",
    content: "Converts a fraction into its decimal representation. Simply divide the numerator by the denominator to get the result."
  },
  mixed_to_float: {
    title: "Mixed Number to Float",
    content: "Converts a mixed number (like $1\\frac{1}{2}$) into a decimal. The whole number and fraction are combined into a single decimal value."
  },
  inverse: {
    title: "Find Inverse",
    content: "Calculates the multiplicative inverse ($\\frac{1}{x}$) of a number. For example, the inverse of $2$ is $0.5$, and the inverse of $0.5$ is $2$."
  },
  add_mixed: {
    title: "Add Mixed Numbers",
    content: "Adds two mixed numbers together. The calculator converts them to improper fractions, adds them, and converts back to mixed number form."
  },
  subtract_mixed: {
    title: "Subtract Mixed Numbers",
    content: "Subtracts the second mixed number from the first. The result is simplified and shown as a mixed number when appropriate."
  },
  multiply_mixed: {
    title: "Multiply Mixed Numbers",
    content: "Multiplies two mixed numbers. Both numbers are converted to improper fractions, multiplied, and the result is simplified."
  },
  divide_mixed: {
    title: "Divide Mixed Numbers",
    content: "Divides the first mixed number by the second. This is done by multiplying the first number by the reciprocal of the second."
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

Division works by flipping the second fraction. When you calculate $\\frac{1}{2} \\div \\frac{1}{4}$, the calculator flips $\\frac{1}{4}$ to $\\frac{4}{1}$, then multiplies: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. Watch the step-by-step display to see this reciprocal process in action.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Converting Between Decimals and Fractions`,
    content: `The calculator offers four conversion modes for switching between decimal and fraction formats. **Convert Float to Fraction** changes decimals like $0.75$ into fractions ($\\frac{3}{4}$). Enter any decimal, click Calculate, and see both the fraction result and the step-by-step conversion showing how decimal places become the denominator.

Try converting $0.625$ to a fraction. The calculator counts $3$ decimal places, creates $\\frac{625}{1000}$ by multiplying by $10^3$, then simplifies by finding the greatest common divisor. The result is $\\frac{5}{8}$.

**Convert Fraction to Decimal** does the opposite. Select this mode, enter a fraction like $\\frac{3}{8}$, and the calculator divides $3 \\div 8 = 0.375$. The result appears immediately with the division shown step-by-step.

**Convert Float to Mixed Number** and **Convert Mixed Number to Float** work with mixed numbers. Enter $2.75$ and get $2\\frac{3}{4}$, or enter "1 1/2" to get $1.5$. The mixed number format requires a space between the whole number and fraction: type "1 1/2" not "11/2". The calculator separates the parts and shows you each conversion step.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Working with Mixed Numbers`,
    content: `Four operations handle mixed numbers specifically: **Add Mixed Numbers**, **Subtract Mixed Numbers**, **Multiply Mixed Numbers**, and **Divide Mixed Numbers**. Select any of these modes to see two text input boxes asking for mixed numbers in the format "whole fraction" like "1 1/2" or "2 3/4".

When adding mixed numbers like $1\\frac{1}{2} + 2\\frac{1}{4}$, type "1 1/2" in the first box and "2 1/4" in the second. The calculator converts both to improper fractions ($\\frac{3}{2}$ and $\\frac{9}{4}$), finds a common denominator, adds them, and converts back to mixed number form. The result $3\\frac{3}{4}$ appears with every conversion step shown.

You can also use regular fractions in mixed number operations. Type "3/4" instead of a mixed number and the calculator treats it as $0\\frac{3}{4}$. This works for all four mixed operations—the format accepts both "1 1/2" and "3/2" interchangeably.

For division like $3\\frac{1}{2} \\div 1\\frac{1}{4}$, enter "3 1/2" and "1 1/4". The step-by-step shows conversion to improper fractions ($\\frac{7}{2} \\div \\frac{5}{4}$), flipping the second fraction ($\\frac{4}{5}$), multiplying, and simplifying. Watch how the calculator handles each transformation clearly.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding the Step-by-Step Display`,
    content: `The right sidebar contains two explanation panels. The top panel shows a static description of the current operation—what it does and when to use it. This text updates whenever you change the operation dropdown. Read this first to understand what calculation you're about to perform.

The bottom panel, labeled **Step-by-Step**, appears only after you enter valid inputs. This dynamic section shows exactly how the calculator solves your specific problem. For adding fractions, you'll see steps like "Find common denominator → 2 × 3 = 6" followed by "Convert fractions" with the actual numbers from your input.

Each step uses mathematical notation to show formulas. When adding $\\frac{1}{2} + \\frac{1}{3}$, the steps display: Step 1 finds the common denominator $6$, Step 2 shows $\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$, Step 3 adds numerators $3 + 2 = 5$, and Step 4 shows the result $\\frac{5}{6}$.

The step-by-step updates in real-time as you type. Change any number in your input and watch the explanation adjust instantly. This feature helps you learn the process, not just get an answer. Follow along with your own paper to verify each calculation step matches the mathematical rules for that operation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Results and Error Messages`,
    content: `After clicking Calculate, your result appears in the **Result** section between the input form and sidebar. The answer displays in large, clear text using proper fraction notation. For fraction results, you'll see the numerator over a horizontal line over the denominator. For decimal results, you get a standard number like $0.75$ or $1.5$.

The calculator automatically simplifies all fraction results. If you add $\\frac{2}{4} + \\frac{1}{4}$, you won't see $\\frac{3}{4}$ written as $\\frac{6}{8}$—the calculator finds the greatest common divisor and reduces to simplest form. Mixed numbers appear as "whole number fraction" format when appropriate.

Red error messages appear above the result area when inputs are invalid. **"Please enter a valid numerator"** means you left a fraction box empty or typed non-numeric characters. **"Denominator cannot be zero"** prevents division by zero errors. **"Please enter a valid mixed number"** reminds you to use the correct format like "1 1/2" with a space.

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

For more detailed fraction theory and visual representations, see **fractions fundamentals** and **fraction visualization tools**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Fraction Operations Explained`,
    content: `**Adding and subtracting fractions** requires a common denominator. You can't add $\\frac{1}{2} + \\frac{1}{3}$ directly because the pieces are different sizes. Find a common denominator (usually by multiplying denominators: $2 \\times 3 = 6$), convert both fractions ($\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$), then add numerators: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.

**Multiplying fractions** is simpler—multiply numerators together and denominators together. For $\\frac{2}{3} \\times \\frac{4}{5}$, calculate $2 \\times 4 = 8$ (numerator) and $3 \\times 5 = 15$ (denominator) to get $\\frac{8}{15}$. No common denominator needed.

**Dividing fractions** uses the "flip and multiply" rule. To divide $\\frac{1}{2} \\div \\frac{1}{4}$, flip the second fraction to $\\frac{4}{1}$ (the reciprocal), then multiply: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. This works because dividing by a fraction is the same as multiplying by its reciprocal.

**Simplifying** means reducing to lowest terms by dividing both numerator and denominator by their greatest common factor. The fraction $\\frac{6}{8}$ simplifies to $\\frac{3}{4}$ because both $6$ and $8$ divide by $2$. For comprehensive fraction operation rules, see **fraction arithmetic concepts**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Mixed Numbers vs Improper Fractions`,
    content: `A **mixed number** combines a whole number with a fraction: $2\\frac{1}{4}$ means $2$ whole units plus $\\frac{1}{4}$ of another unit. An **improper fraction** has a numerator larger than its denominator: $\\frac{9}{4}$. These two forms represent the same value—$2\\frac{1}{4} = \\frac{9}{4}$.

Convert mixed numbers to improper fractions by multiplying the whole number by the denominator and adding the numerator. For $3\\frac{2}{5}$, calculate $3 \\times 5 = 15$, add $2$ to get $17$, so $3\\frac{2}{5} = \\frac{17}{5}$.

Convert improper fractions to mixed numbers by dividing numerator by denominator. For $\\frac{11}{3}$, divide $11 \\div 3 = 3$ remainder $2$. The quotient ($3$) is the whole number, remainder ($2$) is the new numerator, original denominator stays: $\\frac{11}{3} = 3\\frac{2}{3}$.

Use mixed numbers for measurements and real-world quantities like "$2\\frac{1}{2}$ cups of flour" or "I ran $3\\frac{3}{4}$ miles." Use improper fractions for calculations—they're easier to add, multiply, and divide. The calculator handles both and converts between them automatically. See **fraction types** and **fraction conversion methods** for more details.`,
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

For deeper theoretical understanding, explore **fraction arithmetic**, **equivalent fractions**, **fraction simplification**, **common denominators**, and **rational number theory**.`,
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

export default function FractionCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, fractionsExplanations, navigationGroup, faqQuestions, schemas}) {

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
    
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Fraction Calculator</h1>
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