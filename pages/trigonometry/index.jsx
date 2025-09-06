import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react';
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
import trigonometryFormulaList from '@/app/api/db/formulas/trigonometry/trigonometryFormulas';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents2';
import { SectionIcon } from 'lucide-react';
import Sections from '@/app/components/page-components/section/Sections';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import trigonometryTermsList from '@/app/api/db/definitions/trigonometry/trigonometryDefinitions';
import ToolsSlider from '@/app/components/sliders/ToolsSlider';

export default function TrigonometryPage() {

  const emptyUnitCircle=`<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="600" fill="#ffffff"/>
  
  <!-- Define center -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
    </marker>
  </defs>
  
  <!-- Grid lines -->
  <g stroke="#e0e0e0" stroke-width="1" opacity="0.5">
    <!-- Vertical grid lines -->
    <line x1="150" y1="50" x2="150" y2="550"/>
    <line x1="200" y1="50" x2="200" y2="550"/>
    <line x1="250" y1="50" x2="250" y2="550"/>
    <line x1="350" y1="50" x2="350" y2="550"/>
    <line x1="400" y1="50" x2="400" y2="550"/>
    <line x1="450" y1="50" x2="450" y2="550"/>
    <!-- Horizontal grid lines -->
    <line x1="50" y1="150" x2="550" y2="150"/>
    <line x1="50" y1="200" x2="550" y2="200"/>
    <line x1="50" y1="250" x2="550" y2="250"/>
    <line x1="50" y1="350" x2="550" y2="350"/>
    <line x1="50" y1="400" x2="550" y2="400"/>
    <line x1="50" y1="450" x2="550" y2="450"/>
  </g>
  
  <!-- Axes -->
  <line x1="50" y1="300" x2="550" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
  <line x1="300" y1="550" x2="300" y2="50" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Axis labels -->
  <text x="540" y="295" font-family="Arial, sans-serif" font-size="16" font-weight="bold">x</text>
  <text x="305" y="65" font-family="Arial, sans-serif" font-size="16" font-weight="bold">y</text>
  
  <!-- Unit circle -->
  <circle cx="300" cy="300" r="200" fill="none" stroke="#2c3e50" stroke-width="3"/>
  
  <!-- Center point -->
  <circle cx="300" cy="300" r="3" fill="#e74c3c"/>
  
  <!-- Major angle markers and labels -->
  <!-- 0° (1, 0) -->
  <circle cx="500" cy="300" r="4" fill="#e74c3c"/>
  <text x="510" y="305" font-family="Arial, sans-serif" font-size="14" font-weight="bold">0°</text>
  <text x="510" y="320" font-family="Arial, sans-serif" font-size="12">(1, 0)</text>
  
  <!-- 30° (√3/2, 1/2) -->
  <circle cx="473.2" cy="200" r="4" fill="#e74c3c"/>
  <text x="480" y="195" font-family="Arial, sans-serif" font-size="14" font-weight="bold">30°</text>
  <text x="475" y="185" font-family="Arial, sans-serif" font-size="11">(√3/2, 1/2)</text>
  
  <!-- 45° (√2/2, √2/2) -->
  <circle cx="441.4" cy="158.6" r="4" fill="#e74c3c"/>
  <text x="450" y="155" font-family="Arial, sans-serif" font-size="14" font-weight="bold">45°</text>
  <text x="445" y="145" font-family="Arial, sans-serif" font-size="11">(√2/2, √2/2)</text>
  
  <!-- 60° (1/2, √3/2) -->
  <circle cx="400" cy="126.8" r="4" fill="#e74c3c"/>
  <text x="405" y="120" font-family="Arial, sans-serif" font-size="14" font-weight="bold">60°</text>
  <text x="405" y="110" font-family="Arial, sans-serif" font-size="11">(1/2, √3/2)</text>
  
  <!-- 90° (0, 1) -->
  <circle cx="300" cy="100" r="4" fill="#e74c3c"/>
  <text x="305" y="95" font-family="Arial, sans-serif" font-size="14" font-weight="bold">90°</text>
  <text x="310" y="105" font-family="Arial, sans-serif" font-size="12">(0, 1)</text>
  
  <!-- 120° (-1/2, √3/2) -->
  <circle cx="200" cy="126.8" r="4" fill="#e74c3c"/>
  <text x="155" y="120" font-family="Arial, sans-serif" font-size="14" font-weight="bold">120°</text>
  <text x="140" y="110" font-family="Arial, sans-serif" font-size="11">(-1/2, √3/2)</text>
  
  <!-- 135° (-√2/2, √2/2) -->
  <circle cx="158.6" cy="158.6" r="4" fill="#e74c3c"/>
  <text x="105" y="155" font-family="Arial, sans-serif" font-size="14" font-weight="bold">135°</text>
  <text x="85" y="145" font-family="Arial, sans-serif" font-size="11">(-√2/2, √2/2)</text>
  
  <!-- 150° (-√3/2, 1/2) -->
  <circle cx="126.8" cy="200" r="4" fill="#e74c3c"/>
  <text x="75" y="195" font-family="Arial, sans-serif" font-size="14" font-weight="bold">150°</text>
  <text x="55" y="185" font-family="Arial, sans-serif" font-size="11">(-√3/2, 1/2)</text>
  
  <!-- 180° (-1, 0) -->
  <circle cx="100" cy="300" r="4" fill="#e74c3c"/>
  <text x="50" y="295" font-family="Arial, sans-serif" font-size="14" font-weight="bold">180°</text>
  <text x="55" y="310" font-family="Arial, sans-serif" font-size="12">(-1, 0)</text>
  
  <!-- 210° (-√3/2, -1/2) -->
  <circle cx="126.8" cy="400" r="4" fill="#e74c3c"/>
  <text x="75" y="415" font-family="Arial, sans-serif" font-size="14" font-weight="bold">210°</text>
  <text x="55" y="425" font-family="Arial, sans-serif" font-size="11">(-√3/2, -1/2)</text>
  
  <!-- 225° (-√2/2, -√2/2) -->
  <circle cx="158.6" cy="441.4" r="4" fill="#e74c3c"/>
  <text x="105" y="455" font-family="Arial, sans-serif" font-size="14" font-weight="bold">225°</text>
  <text x="85" y="465" font-family="Arial, sans-serif" font-size="11">(-√2/2, -√2/2)</text>
  
  <!-- 240° (-1/2, -√3/2) -->
  <circle cx="200" cy="473.2" r="4" fill="#e74c3c"/>
  <text x="155" y="490" font-family="Arial, sans-serif" font-size="14" font-weight="bold">240°</text>
  <text x="140" y="500" font-family="Arial, sans-serif" font-size="11">(-1/2, -√3/2)</text>
  
  <!-- 270° (0, -1) -->
  <circle cx="300" cy="500" r="4" fill="#e74c3c"/>
  <text x="305" y="515" font-family="Arial, sans-serif" font-size="14" font-weight="bold">270°</text>
  <text x="310" y="525" font-family="Arial, sans-serif" font-size="12">(0, -1)</text>
  
  <!-- 300° (1/2, -√3/2) -->
  <circle cx="400" cy="473.2" r="4" fill="#e74c3c"/>
  <text x="405" y="490" font-family="Arial, sans-serif" font-size="14" font-weight="bold">300°</text>
  <text x="405" y="500" font-family="Arial, sans-serif" font-size="11">(1/2, -√3/2)</text>
  
  <!-- 315° (√2/2, -√2/2) -->
  <circle cx="441.4" cy="441.4" r="4" fill="#e74c3c"/>
  <text x="450" y="455" font-family="Arial, sans-serif" font-size="14" font-weight="bold">315°</text>
  <text x="445" y="465" font-family="Arial, sans-serif" font-size="11">(√2/2, -√2/2)</text>
  
  <!-- 330° (√3/2, -1/2) -->
  <circle cx="473.2" cy="400" r="4" fill="#e74c3c"/>
  <text x="480" y="415" font-family="Arial, sans-serif" font-size="14" font-weight="bold">330°</text>
  <text x="475" y="425" font-family="Arial, sans-serif" font-size="11">(√3/2, -1/2)</text>
  
  <!-- Radius = 1 label -->
  <text x="400" y="250" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">r = 1</text>
  
  <!-- Scale marks on axes -->
  <!-- X-axis marks -->
  <line x1="400" y1="295" x2="400" y2="305" stroke="#333" stroke-width="2"/>
  <text x="395" y="320" font-family="Arial, sans-serif" font-size="12">0.5</text>
  <line x1="500" y1="295" x2="500" y2="305" stroke="#333" stroke-width="2"/>
  <text x="498" y="320" font-family="Arial, sans-serif" font-size="12">1</text>
  <line x1="200" y1="295" x2="200" y2="305" stroke="#333" stroke-width="2"/>
  <text x="190" y="320" font-family="Arial, sans-serif" font-size="12">-0.5</text>
  <line x1="100" y1="295" x2="100" y2="305" stroke="#333" stroke-width="2"/>
  <text x="95" y="320" font-family="Arial, sans-serif" font-size="12">-1</text>
  
  <!-- Y-axis marks -->
  <line x1="295" y1="200" x2="305" y2="200" stroke="#333" stroke-width="2"/>
  <text x="310" y="205" font-family="Arial, sans-serif" font-size="12">0.5</text>
  <line x1="295" y1="100" x2="305" y2="100" stroke="#333" stroke-width="2"/>
  <text x="310" y="105" font-family="Arial, sans-serif" font-size="12">1</text>
  <line x1="295" y1="400" x2="305" y2="400" stroke="#333" stroke-width="2"/>
  <text x="310" y="405" font-family="Arial, sans-serif" font-size="12">-0.5</text>
  <line x1="295" y1="500" x2="305" y2="500" stroke="#333" stroke-width="2"/>
  <text x="310" y="505" font-family="Arial, sans-serif" font-size="12">-1</text>
</svg>`


  const tools = [
    {
      title: "Degree Radians Angle Converter",
      description: "Convert between Degrees to Radians and back with our visual intuitive and interactive converter",
      image: "/tools/angle-converter.jpg",
      link: "/converters/degree-radians"
    },
    {
      title: "Unit Circle",
      description: "Explore Unit Circle for better understanding of main trigonometry concepts",
      image: "/tools/unit-circle.jpg",
      link: "/visual-tools/unit-circle"
    },
    {
      title: "Trigonometry Calculator",
      description: "Calculate the values of all main trigonometric functions for angles measured in degrees and radians",
      image: "/tools/trigonometry-calculator.jpg",
      link: "/calculators/trigonometry-calculator"
    },
    // {
    //   title: "Unit Circle2",
    //   description: "2Interactive trigonometry tool",
    //   image: "/images/calculus.jpg",
    //   link: "/tools/unit-circle1"
    // },
  ]
  

  const trigonometrySections = [
   
    {
      id: 'formulas',
      title: 'Trigonometry Formulas',
      content:"Explore ",
      content: [
        'Explore Trigonometry formulas with explanations and examples',
        " ",
        <VerticalScrollingFormulaWidget 
        key={"formula-widget"}
         formulaData={trigonometryFormulaList}
         moreFormulasLink='/trigonometry/formulas'
        //  title='See them all'
          />,
   
    ]
      
    },
    {
      id: 'definitions',
      title: 'Trigonometry Terms and Definitions',
      content:"Explore ",
      content: [
        'Explore Trigonometry formulas with explanations and examples',
        " ",
        <VerticalScrollingFormulaWidget 
        key={"definitons-widget"}
         formulaData={trigonometryTermsList}
         moreFormulasLink='/trigonometry/definitions'
         type='definition'
        //  title='See them all'
          />,
   
    ]
      
    },
   
    {
      id:'identities',
      title:'Trigonometric Identities',
      link:'/trigonometry/identities',
      content:`Trigonometric identities form a rich and interconnected system rooted in geometric definitions and algebraic transformations. At the foundation lie the reciprocal and quotient identities, such as $\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$ or $\\csc(\\theta) =\\frac{1}{\\sin(\\theta)}$, that emerge directly from the unit circle and right-triangle definitions of the trigonometric functions. Building upon this base are the symmetry-based identities—such as the even-odd and co-function properties—which reflect the inherent symmetries of the unit circle, including reflections across axes and rotations. For instance, $\\cos(-\\theta) = \\cos(\\theta)$ showcases cosine’s evenness, while $\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos(\\theta)$ exemplifies co-function symmetry.
The Pythagorean identities, such as $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$, are central to the structure and serve as a gateway to more complex relationships. Angle addition and subtraction formulas—like $\\sin(a + b) = \\sin(a)\\cos(b) + \\cos(a)\\sin(b)$—are derived through coordinate geometry or rotation matrices, enabling the construction of double-angle, half-angle, and multiple-angle identities, such as $\\cos(2\\theta) = 2\\cos^2(\\theta) - 1$.
Product-to-sum identities, for example $\\sin(a)\\sin(b) = \\frac{1}{2}[\\cos(a - b) - \\cos(a + b)]$, reorganize these angle relationships for simplification in both theory and applications. Inverse trigonometric identities like $\\sin^{-1}(x) + \\cos^{-1}(x) = \\frac{\\pi}{2}$, along with hyperbolic analogs and Euler’s identity $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$, extend trigonometry into broader mathematical contexts. Throughout this structure, many identities emerge as special cases of these general forms, demonstrating a coherent and logical progression.
`
    },

    {
      id:'functions',
      title:'Trigonometric Functions',
      link:'',
      content:`Trigonometric functions are foundational and play crucial role not only in trigonometry but also in other fields of mathematics, especially [calculus](!/calculus).
      We distinct several groups of trigonometric functions based on their complexity, purpose they serve and properties.

      **1. Basic Trigonometric Functions**
These are the core six functions derived from a right triangle or the [unit circle](!/visual-tools/unit-circle):
•**Sine (sin)**
•**Cosine (cos)**
•**Tangent (tan)**
•**Cosecant (csc) = 1/sin**
•**Secant (sec) = 1/cos**
•**Cotangent (cot) = 1/tan**

**2. Inverse Trigonometric Functions**
These functions return angles when given a ratio of sides:
•**Arcsine (arcsin or sin⁻¹)**
•**Arccosine (arccos or cos⁻¹)**
•**Arctangent (arctan or tan⁻¹)**
•**Arccosecant (arccsc or csc⁻¹)**
•**Arcsecant (arcsec or sec⁻¹)**
•**Arccotangent (arccot or cot⁻¹)**

**3. Hyperbolic Trigonometric Functions**
Analogous to the basic trig functions but related to hyperbolas instead of circles:
•**Hyperbolic Sine (sinh)**
•**Hyperbolic Cosine (cosh)**
•**Hyperbolic Tangent (tanh)**
•**Hyperbolic Cosecant (csch) = 1/sinh**
•**Hyperbolic Secant (sech) = 1/cosh**
•**Hyperbolic Cotangent (coth) = 1/tanh**

**4. Inverse Hyperbolic Functions**
Inverses of the hyperbolic functions:
•**Inverse Hyperbolic Sine (arsinh or sinh⁻¹)**
•**Inverse Hyperbolic Cosine (arcosh or cosh⁻¹)**
•**Inverse Hyperbolic Tangent (artanh or tanh⁻¹)**
•**Inverse Hyperbolic Cosecant (arcsch or csch⁻¹)**
•**Inverse Hyperbolic Secant (arsech or sech⁻¹)**
•**Inverse Hyperbolic Cotangent (arcoth or coth⁻¹)**

**5. Circular Functions (Generalization)**
Often synonymous with basic trigonometric functions but used in broader contexts like complex analysis, where they are extended to complex arguments:
•**Circular Sine (sin)**
•**Circular Cosine (cos)**
•**Circular Tangent (tan)**

**6. Complex Trigonometric Functions**
These extend trigonometric functions to the complex domain using Euler's formula:
•**sin(z) = (e^{iz} - e^{-iz}) / 2i**
•**cos(z) = (e^{iz} + e^{-iz}) / 2**

**7. Elliptic and Generalized Trigonometric Functions**
These generalize trig functions for more complex contexts such as elliptic curves and non-Euclidean geometries:
•**Jacobi Elliptic Functions (sn, cn, dn, etc.)**
•**Generalized Trigonometric Functions (used in curved spaces)**

**8. Trigonometric Polynomials**
Used extensively in Fourier analysis:
•**Linear combinations of sine and cosine functions**

Despite the fact that trigonometric functions come in such a wide variety, when it comes to core trigonometry, the **basic six functions** (sine, cosine, tangent, and their reciprocals) are the real workhorses. They're the ones you'll use and see the most, especially in solving triangles, trigonometric equations, and simplifying trigonometric expressions. The rest are powerful tools, but the basics are your foundation.

      `,
      // after:``,
      // content:``,
    },

     {
      id:'symbols',
      title:'Trigonometry Symbols Reference',
      link:'/math-symbols/trigonometry',
      content:[
    `Our [Trigonometry Symbols page](!/math-symbols/trigonometry) offers a comprehensive collection of notation used in trigonometric mathematics. This reference serves as a valuable resource for students and educators working with angular relationships and periodic functions.
The guide organizes symbols into functional categories including basic trigonometric functions (sin(θ), cos(θ), tan(θ)), their inverse functions (sin⁻¹(x), cos⁻¹(x)), and fundamental identities such as the Pythagorean identity sin²(θ) + cos²(θ) = 1. It extends to practical applications like the Law of Sines and Cosines for triangle calculations, unit circle relationships, and hyperbolic functions.
Advanced sections cover complex number representations using trigonometric forms, Euler's formula, and important sum and difference identities—all presented with precise LaTeX code for academic writing and mathematical typesetting.RetryClaude can make mistakes. Please double-check responses. 3.7 Sonnet`
      ]
    },
      {
        id: 'tools',
        title: 'Tools', // Give it a proper title
        // link: '/logic/tools', // Optional
        content: [
          {
            content: 
             
              <ToolsSlider tools={tools} key={'slider'}/>
            ,
            layout: 'horizontal',
            position: 'center', // or 'left' if you prefer
            width: 8 // full width
          }
        ]
      },

  ];
  

  const introContent = {
    id: "intro",
    title: "Introduction to Trigonometry",
    content:`While mainly focusing on relationships between the angles and sides of triangles, trigonometry extends beyond simple geometric shapes, offering tools to describe patterns involving periodicity and circular motion. This makes trigonometry essential in fields ranging from physics and engineering to computer graphics and navigation.

Here’s what students can expect to learn:

1. **Core Concepts**:
   • **Angles and Their Measures**: Degrees, radians, and how they relate to circles.
   • **Trigonometric Functions**: Sine, cosine, tangent, and their reciprocals (cosecant, secant, cotangent).
   • **Unit Circle**: A key tool for understanding how trigonometric functions behave across all angles.
   • **Inverse Trigonometric Functions**: Solving equations to find angles.

2. **Applications**:
   • **Solving Triangles**: Using the laws of sines and cosines to find unknown sides or angles.
   • **Wave Behavior**: Modeling oscillations in physics, sound waves, and light waves.
   • **Circular and Periodic Motion**: Understanding orbits, pendulums, and cycles.

3. **Advanced Topics**:
   • **Identities**: Simplifying expressions and solving equations using formulas like the Pythagorean identity, angle addition formulas, and double-angle formulas.
   • **Graphs of Trigonometric Functions**: Visualizing periodic patterns and their transformations (shifts, stretches, reflections).
   • **Complex Numbers and Euler’s Formula**: Exploring the deep connection between trigonometry and algebra.

4. **Skills Developed**:
   • **Problem-solving**: Tackling real-world problems involving geometry, motion, and oscillation.
   • **Visualization**: Interpreting and sketching graphs and diagrams to represent abstract relationships.
   • **Logical reasoning**: Manipulating trigonometric expressions and proofs.

Trigonometry teaches students how to connect abstract mathematical concepts with practical scenarios, developing versatile skills useful in scientific modeling, technical fields, and everyday problem-solving.
`

  };
  
  

  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <OperaSidebar 
      side='right'
      // topOffset='65px' 
      sidebarWidth='45px'
      panelWidth='300px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
    <Breadcrumb/>
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Trigonometry</h1>
    <SectionTableOfContents sections={trigonometrySections}
    showSecondaryNav={true}
    secondaryNavMode="children"  // or "siblings"
    secondaryNavTitle="More in this Section" />
    <br/>
    <IntroSection 
  id={introContent.id}
  title={introContent.title}
  content={introContent.content}
  backgroundColor="#f2f2f2"
  textColor="#34383c"
/>
    <Sections  sections={trigonometrySections}/>
    <br/>
    <br/>
   
    <br/>
    <ScrollUpButton/>
    


    
    </>
  )
}
