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
import Head from 'next/head'
import { createContentHtml } from '@/app/utils/utils-functions';


 export async function getStaticProps(){

  const keyWords=['trigonometry','unit circle','trigonometric functions',
    'trigonometric functions on the unit circle','6 trigonometric functions',
    'basic trigonometry','right triangle','pythagorean relationship','pythagoras triangle']


  
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


  
  const sectionsContent={

    formulas:{
      title:`Trigonometry Formulas`,
      link:'/trigonometry/formulas',
      content:``,
      before:``,
      after:``,
       leftContentHtml: createContentHtml({ 
              description: 'The Trigonometry Formulas page covers essential identities and relationships involving angles, ratios, and periodic functions. It includes fundamental formulas such as Pythagorean identities, angle sum and difference identities, double and half-angle formulas, product-to-sum transformations, and laws of sines and cosines. Each formula is presented with definitions, usage notes, and step-by-step examples for solving geometric and algebraic problems.',
              // link: '/calculus/definitions',
              // linkText: 'View All Definitions',
              height:'300px',
              backgroundColor:'#e2e3e5',
            }),
  
  
    },
    definitions:{
      title:`Trigonometry Terms and Definitions`,
       link:'/trigonometry/definitions',
      content:``,
      before:``,
      after:``,
  
    },
  
    identities:{
  
      title:``,
      content:`Trigonometric identities form a rich and interconnected system rooted in geometric definitions and algebraic transformations. 
     
      At the foundation lie the [reciprocal](!/trigonometry/identities#reciprocal) and quotient identities, such as $\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$ or $\\csc(\\theta) =\\frac{1}{\\sin(\\theta)}$, that emerge directly from the unit circle and right-triangle definitions of the trigonometric functions.
     
      Building upon this base are the symmetry-based identities—such as the [even-odd](!/trigonometry/identities#even-odd) and [co-function](!/trigonometry/identities#co-function) properties—which reflect the inherent symmetries of the unit circle, including reflections across axes and rotations. For instance, $\\cos(-\\theta) = \\cos(\\theta)$ showcases cosine’s evenness, while $\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos(\\theta)$ exemplifies co-function symmetry.

      The [Pythagorean](!/trigonometry/identities#pythagorean) identities, such as $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$, are central to the structure and serve as a gateway to more complex relationships.

Angle [sum](!/trigonometry/identities#sum) and [difference](!/trigonometry/identities#difference) formulas—like $\\sin(a + b) = \\sin(a)\\cos(b) + \\cos(a)\\sin(b)$—are derived through coordinate geometry or rotation matrices, enabling the construction of [double-angle](!/trigonometry/identities#double), [half-angle](!/trigonometry/identities#half), and [triple-angle](!/trigonometry/identities#triple) identities, such as $\\cos(2\\theta) = 2\\cos^2(\\theta) - 1$.

Product-to-sum identities, for example $\\sin(a)\\sin(b) = \\frac{1}{2}[\\cos(a - b) - \\cos(a + b)]$, reorganize these angle relationships for simplification in both theory and applications. 

Inverse trigonometric identities like $\\sin^{-1}(x) + \\cos^{-1}(x) = \\frac{\\pi}{2}$, along with hyperbolic analogs and Euler’s identity $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$, extend trigonometry into broader mathematical contexts. Throughout this structure, many identities emerge as special cases of these general forms, demonstrating a coherent and logical progression.`,
      before:``,
      after:``,
  
    },
    functions:{
      title:``,
      content:`Trigonometric functions lie at the heart of trigonometry, originally emerging from the study of right triangles and the unit circle. Today, they serve as indispensable tools in mathematics, especially in calculus, analysis, and mathematical modeling of periodic phenomena.

The most fundamental functions are the **sine**, **cosine**, and **tangent**, along with their reciprocals **cosecant**, **secant**, and **cotangent**. These form the core set of **basic trigonometric functions**. Other function families — such as inverse, hyperbolic, and complex extensions — also exist and are important in advanced contexts, but this section focuses primarily on the classical real-valued functions and their mathematical behavior.

This part of the trigonometry module is dedicated to exploring the **analytical structure** of trigonometric functions. On the child page, we will examine:

* **Definitions**: from geometric constructions to analytic formulations via power series and differential equations
* **Properties**: including periodicity, symmetry, continuity, and boundedness
* **Identities**: such as angle sum/difference formulas, double-angle identities, and Pythagorean relations
* **Graphs and Transformations**: visual behaviors and effects of shifts, stretches, and reflections
* **Equations**: solving trigonometric equations and analyzing their solutions
* **Mathematical Applications**: their roles in Fourier analysis, differential equations, and linear algebra

While more specialized trigonometric forms (e.g., inverse and hyperbolic functions) are acknowledged, they are treated in their own contexts where relevant.

Whether you're analyzing waveforms, studying rotations, or decomposing functions into periodic components, a strong grasp of trigonometric functions provides a powerful mathematical toolkit.

`,
      before:``,
      after:``,
  
    },


    symbols:{
  
      title:``,
      content: `Our [Trigonometry Symbols page](!/math-symbols/trigonometry) offers a comprehensive collection of notation used in trigonometric mathematics. This reference serves as a valuable resource for students and educators working with angular relationships and periodic functions.

      The guide organizes symbols into functional categories including basic trigonometric functions (sin(θ), cos(θ), tan(θ)), their inverse functions (sin⁻¹(x), cos⁻¹(x)), and fundamental identities such as the Pythagorean identity sin²(θ) + cos²(θ) = 1. It extends to practical applications like the Law of Sines and Cosines for triangle calculations, unit circle relationships, and hyperbolic functions.

      Advanced sections cover complex number representations using trigonometric forms, Euler's formula, and important sum and difference identities—all presented with precise LaTeX code for academic writing and mathematical typesetting.`,
      before:``,
      after:``,
  
    },
  
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  
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
  
  


   return {
      props:{
         sectionsContent,
         introContent,
         tools,
          seoData: {
      title: "Trigonometry - Functions, Identities & Formulas | Learn Math Class",
      description: "Complete trigonometry guide covering functions, identities, formulas, and the unit circle. Learn sine, cosine, tangent with interactive tools and examples.",
      keywords: keyWords.join(", "),
      url: "/trigonometry",
      name: "Trigonometry"
    },
    keyWords,
        
       }
    }
   }
  

  
  
  



export default function TrigonometryPage({ seoData, sectionsContent, introContent, tools, keyWords }) {



  const trigonometrySections = [
   
    {
      id: 'formulas',
      title: sectionsContent.formulas.title,
      link: sectionsContent.formulas.link,
      content:"Explore ",
      content: [
        // 'Explore Trigonometry formulas with explanations and examples',
        // " ",
        // <VerticalScrollingFormulaWidget 
        // key={"formula-widget"}
        //  formulaData={trigonometryFormulaList}
        //  moreFormulasLink='/trigonometry/formulas'
        // //  title='See them all'
        //   />,

         { 
          content: sectionsContent.formulas.leftContentHtml,
          layout: 'horizontal', 
          position: 'left',
          width: 1.5 
        },
        { 
          content: <VerticalScrollingFormulaWidget 
            key="formula-widget"
            formulaData={trigonometryFormulaList}
            moreFormulasLink='/calculus/formulas'
          />, 
          layout: 'horizontal', 
          position: 'right',
          width: 2 
        }
   
    ]
      
    },
    {
      id: 'definitions',
      title: sectionsContent.definitions.title,
      link: sectionsContent.definitions.link,
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
      content:[
        sectionsContent.identities.content,
      ]
    },

    {
      id:'functions',
      title:'Trigonometric Functions',
      link:'',
      content:[
        sectionsContent.functions.content,
      ],
      // after:``,
      // content:``,
    },

     {
      id:'symbols',
      title:'Trigonometry Symbols Reference',
      link:'/math-symbols/trigonometry',
      content:[
       sectionsContent.symbols.content,
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
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head>
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
