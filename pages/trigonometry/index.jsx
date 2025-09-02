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
