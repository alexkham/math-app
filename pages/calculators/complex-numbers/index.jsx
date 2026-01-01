// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import ComplexNumbersCalculator from '@/app/components/calculators/ComplexNumbers'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../math-app/pages/pages.css'
// import Head from 'next/head'


// export async function getStaticProps(){

//     const keyWords=[
//         'complex numbers','imaginary numbers','complex arithmetic','complex numbers calculator',
//         'imaginary number calculator','complex fraction calculator','complex fractions',
//         'simplifying complex fractions','complex arithmetic calculator','complex conjugate',
//         'complex fraction solver','complex number in mathematics',
//     ]

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
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


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }

// const explanations = {
//   generalGuide: `
// **Complex Number:** 
// z = a + bi where a is real part, b is imaginary part

// **Examples:**
// • 3 + 4i
// • -2 + 5i  
// • 7 - 3i
// • 0 + 2i (pure imaginary)
// `,
  
//   operationGuides: {
//     add: `
// **Addition Formula:**
// (a + bi) + (c + di) = (a + c) + (b + d)i

// **How it works:**
// • Add real parts together
// • Add imaginary parts together
// • Combine the results

// **Example:**
// (3 + 2i) + (1 + 4i) = 4 + 6i
// `,
//     subtract: `
// **Subtraction Formula:**
// (a + bi) - (c + di) = (a - c) + (b - d)i

// **How it works:**
// • Subtract real parts
// • Subtract imaginary parts
// • Combine the results

// **Example:**
// (5 + 3i) - (2 + 1i) = 3 + 2i
// `,
//     multiply: `
// **Multiplication Formula:**
// (a + bi)(c + di) = (ac - bd) + (ad + bc)i

// **How it works:**
// • Use FOIL method
// • Remember: i² = -1
// • Combine like terms

// **Example:**
// (2 + 3i)(1 + 4i) = 2 + 8i + 3i + 12i²
// = 2 + 11i - 12 = -10 + 11i
// `,
//     divide: `
// **Division Method:**
// Multiply numerator and denominator by conjugate of denominator

// **Formula:**
// (a + bi)/(c + di) = (a + bi)(c - di)/((c + di)(c - di))

// **How it works:**
// • Find conjugate of denominator
// • Multiply both parts by conjugate
// • Simplify the result

// **Result:** Real number denominator
// `,
//     conjugate: `
// **Conjugate Definition:**
// The conjugate of z = a + bi is z* = a - bi

// **Properties:**
// • Changes sign of imaginary part
// • Real part stays the same
// • z × z* = |z|²

// **Uses:**
// • Division of complex numbers
// • Finding modulus
// • Solving equations
// `,
//     modulus: `
// **Modulus Formula:**
// |z| = |a + bi| = √(a² + b²)

// **Meaning:**
// • Distance from origin in complex plane
// • Always a positive real number
// • Pythagorean theorem applied

// **Properties:**
// • |z₁z₂| = |z₁||z₂|
// • |z₁/z₂| = |z₁|/|z₂|
// • |z*| = |z|
// `,
//     power: `
// **Power Operations:**
// z^n for positive integer n

// **Method:**
// • Repeated multiplication
// • Use De Moivre's theorem for efficiency
// • Convert to polar form for higher powers

// **Note:**
// This operation requires additional implementation for the power value input.
// `
//   }
// }





//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          explanations,
//          seoData: {
//       title: "Complex Numbers Calculator - Add, Subtract, Multiply & Divide | Learn Math Class",
//       description: "Free complex numbers calculator for arithmetic operations. Add, subtract, multiply, divide complex numbers with step-by-step solutions and explanations.",
//       keywords: keyWords.join(", "),
//       url: "/calculators/complex-numbers",
//       name: "Complex Numbers Calculator"
//     },
//     keyWords,
        
//        }
//     }
//    }

// export default function PageTemplate({ seoData, sectionsContent, introContent, explanations, keyWords }) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:'section1',
//         link:'',
//         content:''
//     },
//     {
//         id:'2',
//         title:'section2',
//         link:'',
//         content:''
//     },
//     {
//         id:'',
//         title:'',
//         link:'',
//         content:''
//     }
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    <GenericNavbar/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Complex Numbers Calculator</h1>
//    <br/>
//    <ComplexNumbersCalculator
//   explanations={explanations}
//    />
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#34383c"
//         /> */}
//    <br/>
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    <ScrollUpButton/>
//    </>
//   )
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
import ComplexNumbersCalculator from '@/app/components/calculators/ComplexNumbers';
import '../../pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export async function getStaticProps() {

const navigationGroup = [
  {
    title: 'Other Calculators',
    items: [
      {title: 'Exponent Calculator', link: '/calculators/exponent-calculator'},
      {title: 'Root Calculator', link: '/calculators/root-calculator'},
      {title: 'Fraction Calculator', link: '/calculators/fraction-calculator'},
      {title: 'Modulo Calculator', link: '/calculators/modulo-calculator'},
      {title: 'Logarithm Calculator', link: '/calculators/log-calculator'},
      {title: 'Factorial Calculator', link: '/calculators/factorial-calculator'},
      {title: 'Trigonometry Calculator', link: '/calculators/trigonometry-calculator'},
      // {title: 'Matrix Calculator', link: '/calculators/matrix-calculator'},
    ]
  }
];

const detailInstructions = [
  "Enter the real and imaginary parts for your complex number(s) in the input fields",
  "Select your desired operation from the 7 available choices (add, subtract, multiply, divide, conjugate, modulus, power)",
  "The calculator automatically computes the result as you type",
  "Click 'Show Steps' to see the detailed step-by-step solution",
  "Use 'Clear All' to reset all inputs and start a new calculation"
];

const explanations = {
  generalGuide: `
**Complex Number:** 
z = a + bi where a is real part, b is imaginary part

**Examples:**
• 3 + 4i
• -2 + 5i  
• 7 - 3i
• 0 + 2i (pure imaginary)

**Basic Properties:**
• i² = -1
• Real axis (horizontal)
• Imaginary axis (vertical)
`,
  operationGuides: {
    add: `
**Addition Formula:**
(a + bi) + (c + di) = (a + c) + (b + d)i

**How it works:**
• Add real parts together
• Add imaginary parts together
• Combine the results

**Example:**
(3 + 2i) + (1 + 4i) = 4 + 6i
`,
    subtract: `
**Subtraction Formula:**
(a + bi) - (c + di) = (a - c) + (b - d)i

**How it works:**
• Subtract real parts
• Subtract imaginary parts
• Combine the results

**Example:**
(5 + 3i) - (2 + 1i) = 3 + 2i
`,
    multiply: `
**Multiplication Formula:**
(a + bi)(c + di) = (ac - bd) + (ad + bc)i

**How it works:**
• Use FOIL method
• Remember: i² = -1
• Combine like terms

**Example:**
(2 + 3i)(1 + 4i) = 2 + 8i + 3i + 12i²
= 2 + 11i - 12 = -10 + 11i
`,
    divide: `
**Division Method:**
Multiply numerator and denominator by conjugate of denominator

**Formula:**
(a + bi)/(c + di) = (a + bi)(c - di)/((c + di)(c - di))

**How it works:**
• Find conjugate of denominator
• Multiply both parts by conjugate
• Simplify the result

**Result:** Real number denominator
`,
    conjugate: `
**Conjugate Definition:**
The conjugate of z = a + bi is z* = a - bi

**Properties:**
• Changes sign of imaginary part
• Real part stays the same
• z × z* = |z|²

**Uses:**
• Division of complex numbers
• Finding modulus
• Solving equations
`,
    modulus: `
**Modulus Formula:**
|z| = |a + bi| = √(a² + b²)

**Meaning:**
• Distance from origin in complex plane
• Always a positive real number
• Pythagorean theorem applied

**Properties:**
• |z₁z₂| = |z₁||z₂|
• |z₁/z₂| = |z₁|/|z₂|
• |z*| = |z|
`,
    power: `
**Power Operations:**
z^n for positive integer n

**Method:**
• Repeated multiplication
• Use De Moivre's theorem for efficiency
• Convert to polar form for higher powers

**Note:**
This operation requires additional implementation for the power value input.
`
  }
};

const keyWords = [
  'complex numbers calculator',
  'imaginary numbers calculator',
  'complex arithmetic',
  'add complex numbers',
  'multiply complex numbers',
  'divide complex numbers',
  'complex conjugate calculator',
  'modulus calculator',
  'complex number operations',
  'free complex calculator',
  'online complex numbers tool',
  'complex math calculator',
  'imaginary unit calculator',
  'complex fraction calculator',
  'simplify complex numbers'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Complex Numbers Calculator`,
    content: `The complex numbers calculator has three main sections: input panels on the left for entering your complex numbers, operation buttons in the middle for selecting calculations, and quick guide panels on the right showing formulas and explanations. The interface adjusts based on which operation you choose—some operations need two numbers while others need only one.

Start by looking at the **First Number (z₁)** input panel. You'll see two boxes with a plus sign and the letter $i$ between them. The left box is for the **real part** (the regular number), and the right box is for the **imaginary part** (the coefficient of $i$). Enter any numbers including decimals and negatives.

Below your inputs, the calculator displays your complex number in standard form like $3 + 4i$ or $-2 - 5i$. This formatted display updates instantly as you type, helping you verify your input is correct before calculating. Watch this area to make sure the calculator interprets your numbers as you intended.

The **Choose Operation** section contains seven buttons for different calculations: Addition, Subtraction, Multiplication, Division, Conjugate, Modulus, and Power. Click any operation button to select it—the button turns blue when active. For Conjugate and Modulus, the second number panel disappears since these operations work on a single complex number. The result appears automatically below without needing to click Calculate.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Entering Complex Numbers in the Input Fields`,
    content: `Click in the first input box under **First Number (z₁)** to enter your real part. Type any number: positive like $5$, negative like $-3$, decimal like $2.5$, or zero like $0$. The real part represents the horizontal component on the complex plane—it's just a regular number without $i$.

Move to the second box to enter your imaginary part. This is the coefficient of $i$, so if you want $4i$, type $4$. For $-3i$, type $-3$. You don't need to type the $i$—the calculator adds it automatically. The imaginary part represents the vertical component on the complex plane.

For pure real numbers like $5$, enter $5$ in the real box and $0$ in the imaginary box. For pure imaginary numbers like $3i$, enter $0$ in the real box and $3$ in the imaginary box. The calculator handles all combinations: $2 + 3i$, $-4 - 7i$, $6 + 0i$, $0 + 5i$.

When an operation requires a second complex number, the **Second Number (z₂)** panel appears on the right. Enter its real and imaginary parts the same way. The formatted preview below each panel shows exactly how the calculator interprets your input: $(3 + 4i)$, $(0 - 2i)$, or $(5 + 0i)$. If the preview shows "Enter values," you haven't typed anything yet.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using the Four Basic Arithmetic Operations`,
    content: `Click the **Addition (z₁ + z₂)** button to add two complex numbers. Enter $3 + 2i$ in the first panel and $1 + 4i$ in the second. The calculator adds real parts together: $3 + 1 = 4$. Then it adds imaginary parts: $2i + 4i = 6i$. The result $4 + 6i$ appears immediately in the green result box below.

For **Subtraction (z₁ - z₂)**, try $(5 + 3i) - (2 + 1i)$. The calculator subtracts the second number's real part from the first: $5 - 2 = 3$. Then imaginary parts: $3i - 1i = 2i$. Result: $3 + 2i$. Notice negative results work too: $(1 + 1i) - (3 + 4i) = -2 - 3i$.

**Multiplication (z₁ × z₂)** uses the FOIL method. Enter $(2 + 3i)$ and $(1 + 4i)$. The calculator multiplies: $2 \\times 1 = 2$, $2 \\times 4i = 8i$, $3i \\times 1 = 3i$, and $3i \\times 4i = 12i^2 = -12$ (remember $i^2 = -1$). Combining gives $2 + 8i + 3i - 12 = -10 + 11i$. Click **Show Steps** to see this breakdown.

**Division (z₁ ÷ z₂)** multiplies by the conjugate. For $(1 + 2i) \\div (3 + 4i)$, the calculator finds the conjugate of the denominator $(3 - 4i)$, multiplies numerator and denominator by it, then simplifies. The result appears as a decimal like $0.44 + 0.08i$. Division by zero (like $\\div (0 + 0i)$) shows an error: "Division by zero."`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Using Single-Number Operations: Conjugate and Modulus`,
    content: `Select **Conjugate (z₁*)** to find the complex conjugate. When you click this operation, the second number panel disappears—you only need one input. Enter $3 + 4i$ in the first panel. The conjugate flips the sign of the imaginary part: $3 - 4i$. The real part stays the same.

Try negative imaginary parts too. Enter $5 - 2i$ and the conjugate becomes $5 + 2i$. For pure imaginary $0 + 7i$, the conjugate is $0 - 7i$. For pure real $8 + 0i$, the conjugate is $8 - 0i = 8$. The conjugate is useful for division and finding the modulus squared: $z \\times z^* = |z|^2$.

**Modulus (|z₁|)** calculates the distance from the origin to your point in the complex plane. Enter $3 + 4i$. The calculator computes $\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. This uses the Pythagorean theorem—the modulus is always a positive real number.

Try $5 + 12i$ to get modulus $13$ (since $5^2 + 12^2 = 25 + 144 = 169 = 13^2$). For $1 + 1i$, the modulus is $\\sqrt{2} \\approx 1.4142$. Pure imaginary $0 + 3i$ has modulus $3$. Pure real $4 + 0i$ has modulus $4$. Click Show Steps to see the $\\sqrt{a^2 + b^2}$ calculation broken down step-by-step.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Reading Results and Step-by-Step Solutions`,
    content: `After entering your numbers and selecting an operation, the result appears in the **Result** section at the bottom. For complex number answers, you'll see the formatted output like $-10 + 11i$, $3 - 2i$, or $0.44 + 0.08i$. The calculator displays large, bold text in green for successful calculations.

For modulus operations, the result is a single real number like $5.0000$ or $13.0000$. This appears without the $+ 0i$ part since the modulus is always real. Decimal results show four decimal places for precision: $1.4142$ for $\\sqrt{2}$ or $0.4400$ for certain divisions.

Click the green **Show Steps** button to reveal the step-by-step solution. A white panel expands below the result showing each calculation stage. For addition, you'll see lines like "$(3 + 2i) + (1 + 4i)$", then "$ = (3 + 1) + (2 + 4)i$", then "$ = 4 + 6i$". For multiplication, the steps show FOIL expansion, the $i^2 = -1$ substitution, and final combination.

The **Clear All** red button resets everything—both input panels empty, the result disappears, and the interface returns to its initial state. Use this when starting a completely new problem. The result updates automatically as you type new numbers, so you don't need to clear between similar calculations unless you want a fresh start.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Using the Quick Guide Panels`,
    content: `The right side of the calculator contains two helpful guide panels that stay visible as you scroll. The top panel, **Complex Numbers Guide**, displays general information about complex numbers: the standard form $z = a + bi$, what real and imaginary parts mean, example numbers, and the key property $i^2 = -1$.

This general guide is always visible regardless of which operation you select. Read it first if you're new to complex numbers—it explains the notation and basic concepts you need to understand your calculations. The guide includes bullet points and examples formatted with proper mathematical notation.

Below it, the **Operation Guide** panel changes based on your selected operation. When you click **Addition**, it shows the addition formula $(a + bi) + (c + di) = (a + c) + (b + d)i$, explains how it works, and provides an example. Switch to **Multiplication** and the panel updates to show FOIL method, the $i^2 = -1$ rule, and a multiplication example.

Each operation guide includes the relevant formula, step-by-step explanation of the method, important properties or rules, and at least one worked example. For **Division**, you'll see the conjugate multiplication technique. For **Modulus**, you'll see the distance formula $|z| = \\sqrt{a^2 + b^2}$. These guides help you understand what the calculator is doing behind the scenes without needing to leave the page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Complex Numbers`,
    content: `Complex numbers extend the real number system by introducing $i$, the **imaginary unit**, defined as $i = \\sqrt{-1}$ or equivalently $i^2 = -1$. This allows us to take square roots of negative numbers and solve equations like $x^2 + 1 = 0$, which has no real solutions but has complex solutions $x = i$ and $x = -i$.

A complex number has the form $z = a + bi$ where $a$ is the **real part** and $b$ is the **imaginary part** (both $a$ and $b$ are real numbers). For example, in $3 + 4i$, the real part is $3$ and the imaginary part is $4$. Don't be confused by the name "imaginary"—these numbers are just as valid as real numbers, just more abstract.

**Pure real numbers** like $5$ can be written as $5 + 0i$ (imaginary part is zero). **Pure imaginary numbers** like $3i$ can be written as $0 + 3i$ (real part is zero). Complex numbers with both parts nonzero, like $2 + 3i$, represent points in the two-dimensional **complex plane** where the horizontal axis is real and vertical axis is imaginary.

For comprehensive coverage of complex number theory, notation, and the complex plane visualization, see **complex number fundamentals** and **imaginary unit properties**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `How Complex Number Operations Work`,
    content: `**Addition and subtraction** treat complex numbers like binomials. Add real parts together and imaginary parts together separately: $(3 + 4i) + (1 + 2i) = (3+1) + (4i+2i) = 4 + 6i$. Subtraction works the same: $(5 + 3i) - (2 + 1i) = (5-2) + (3i-1i) = 3 + 2i$. Think of it as combining like terms.

**Multiplication** uses the distributive property (FOIL for binomials). Multiply $(2 + 3i)(1 + 4i)$ by expanding: $2(1) + 2(4i) + 3i(1) + 3i(4i) = 2 + 8i + 3i + 12i^2$. Then substitute $i^2 = -1$: $2 + 11i + 12(-1) = 2 + 11i - 12 = -10 + 11i$. The $i^2 = -1$ substitution is crucial.

**Division** requires the conjugate trick. To divide $(a + bi) \\div (c + di)$, multiply both numerator and denominator by the conjugate $(c - di)$: $\\frac{a+bi}{c+di} \\times \\frac{c-di}{c-di}$. The denominator becomes $(c + di)(c - di) = c^2 + d^2$, a real number, making the division straightforward.

The **conjugate** $z^* = a - bi$ flips the imaginary sign. The **modulus** $|z| = \\sqrt{a^2 + b^2}$ measures distance from the origin. These concepts connect: $z \\times z^* = |z|^2$. For detailed operation rules and properties, see **complex arithmetic theory** and **complex number algebra**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Understanding Conjugate and Modulus`,
    content: `The **conjugate** of a complex number $z = a + bi$ is written $\\bar{z}$ or $z^*$ and equals $a - bi$. To find it, keep the real part the same and flip the sign of the imaginary part. The conjugate of $3 + 4i$ is $3 - 4i$. The conjugate of $2 - 5i$ is $2 + 5i$. For pure real $7 + 0i$, the conjugate is $7 - 0i = 7$.

Conjugates are essential for division: multiplying by a conjugate eliminates the imaginary part in the denominator. They also satisfy $z \\times \\bar{z} = a^2 + b^2$, a real number. For $3 + 4i$: $(3 + 4i)(3 - 4i) = 9 - 16i^2 = 9 + 16 = 25$. This equals $|z|^2$.

The **modulus** $|z| = \\sqrt{a^2 + b^2}$ represents the distance from the origin $(0, 0)$ to the point $(a, b)$ in the complex plane. For $3 + 4i$, plot the point $(3, 4)$ and measure its distance from origin: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. This is the Pythagorean theorem.

The modulus is always non-negative (zero or positive). For $0 + 0i$, the modulus is $0$. For all other complex numbers, it's positive. The modulus has useful properties: $|z_1 \\times z_2| = |z_1| \\times |z_2|$ and $|z_1 \\div z_2| = |z_1| \\div |z_2|$. For deeper understanding, see **complex conjugate properties** and **modulus applications**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Mathematical Tools`,
    content: `**Quadratic Equation Solver** - Solve equations like $x^2 + 1 = 0$ that have complex solutions. When the discriminant is negative, the roots are complex numbers. Use the complex calculator to verify and work with these solutions.

**Polynomial Calculator** - Factor and solve polynomials with complex roots. Every polynomial can be factored into linear factors over the complex numbers, following the Fundamental Theorem of Algebra.

**Trigonometry Calculator** - Complex numbers connect deeply with trigonometry through Euler's formula: $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. This links exponential, trigonometric, and complex functions.

**Matrix Calculator** - Matrices can have complex number entries. Use complex arithmetic for eigenvalues, eigenvectors, and matrix operations in quantum mechanics and signal processing.

**Vector Calculator** - Complex numbers can be viewed as two-dimensional vectors. Addition works like vector addition, and the modulus is the vector magnitude.

For theoretical background, explore **complex number theory**, **complex plane visualization**, **polar form of complex numbers**, **De Moivre's theorem**, **Euler's formula**, and **applications in engineering and physics**.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is a complex number?",
    answer: "A complex number is a number in the form a + bi, where a is the real part, b is the imaginary part, and i is the imaginary unit satisfying i² = -1. Examples include 3 + 4i, -2 + 5i, and 7 - 3i. Complex numbers extend real numbers to solve equations that have no real solutions, like x² + 1 = 0."
  },
  obj2: {
    question: "How do I add or subtract complex numbers?",
    answer: "To add complex numbers, add the real parts together and add the imaginary parts together separately. For (3 + 4i) + (1 + 2i), calculate (3+1) + (4+2)i = 4 + 6i. Subtraction works the same way: (5 + 3i) - (2 + 1i) = (5-2) + (3-1)i = 3 + 2i. Treat them like binomial expressions with separate real and imaginary components."
  },
  obj3: {
    question: "How do I multiply complex numbers?",
    answer: "Use the FOIL method (distributive property) and remember that i² = -1. For (2 + 3i)(1 + 4i), multiply to get 2 + 8i + 3i + 12i². Then substitute i² = -1: 2 + 11i + 12(-1) = 2 + 11i - 12 = -10 + 11i. This calculator performs all steps automatically and shows the work when you click Show Steps."
  },
  obj4: {
    question: "What is the conjugate of a complex number and why is it useful?",
    answer: "The conjugate of a + bi is a - bi (flip the sign of the imaginary part). It's essential for division: multiplying numerator and denominator by the conjugate eliminates imaginary numbers from the denominator. The conjugate also satisfies z × z̄ = |z|², connecting it to the modulus. For 3 + 4i, the conjugate is 3 - 4i."
  },
  obj5: {
    question: "What does the modulus of a complex number represent?",
    answer: "The modulus |z| = √(a² + b²) represents the distance from the origin to the point (a, b) in the complex plane. It's always a non-negative real number calculated using the Pythagorean theorem. For 3 + 4i, the modulus is √(9 + 16) = √25 = 5. Think of it as the 'size' or 'magnitude' of the complex number."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Complex Numbers Calculator - Add, Subtract, Multiply & Divide",
    "description": "Free complex numbers calculator for all arithmetic operations. Add, subtract, multiply, divide complex numbers, find conjugates and modulus with step-by-step solutions.",
    "url": "https://www.learnmathclass.com/calculators/complex-numbers",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Add complex numbers with automatic calculation",
      "Subtract complex numbers step-by-step",
      "Multiply complex numbers using FOIL method",
      "Divide complex numbers with conjugate method",
      "Find complex conjugate instantly",
      "Calculate modulus (absolute value) of complex numbers",
      "Power operations for complex numbers",
      "Step-by-step solution display for all operations",
      "Real-time calculation as you type",
      "Built-in operation guides and formulas"
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
    "educationalLevel": "High School, College, University",
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
        "name": "Complex Numbers Calculator",
        "item": "https://www.learnmathclass.com/calculators/complex-numbers"
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
      title: "Complex Numbers Calculator | Add, Subtract, Multiply & Divide",
      description: "Free complex numbers calculator for all operations. Add, subtract, multiply, divide, find conjugate and modulus. Instant results with step-by-step solutions.",
      keywords: keyWords.join(", "),
      url: "/calculators/complex-numbers",
      name: "Complex Numbers Calculator - Complete Imaginary Number Operations"
    },
  },
  revalidate: 86400
};
}

export default function ComplexNumbersCalculatorPage({seoData, sectionsContent, introContent, detailInstructions, explanations, navigationGroup, faqQuestions, schemas}) {

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
    
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Complex Numbers Calculator</h1>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Complex Numbers Calculator'
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
        <div style={{width:'100%'}}>
          <ComplexNumbersCalculator explanations={explanations} />
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