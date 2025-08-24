
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import UnitCircle from '@/app/components/trigo-calculator/UnitCircle'
import React from 'react';
import '../../pages.css'
import Head from 'next/head'
import { processContent } from '@/app/utils/contentProcessor'
import SvgDiagram from '@/app/components/diagrams/svg-diagram/SvgDiagram'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'


export async function getStaticProps() {
   const keyWords = [
       "unit circle","trig circle","radian unit circle",
       "circle of trigonometry","circle unit trigonometry"
   ]

   
  const sectionsContent={

    definition:{
      title:`What is Unit Circle?`,
      content:``,
      before:`The unit circle is a mathematical abstraction model invented to give us an intuitive understanding of how [trigonometric functions](!/trigonometry) behave in the coordinate system with respect to different [angles](!/visual-tools/unit-circle#angles). Rather than being just another geometric shape, it serves as a visual and computational tool that transforms abstract [trigonometric relationships](!/trigonometry) into concrete, observable patterns.

We create this circle by placing its center at the origin (0,0) of the coordinate plane and setting the radius to exactly 1. This positioning is crucial because when we take any point on the circle and drop perpendicular lines to the x and y axes, we automatically create a right triangle. The hypotenuse of this triangle is always the radius (which equals 1), while the legs are the x and y coordinates of the point.

`,
      after:`
      This model allows us to see trigonometric functions as coordinates on a circle, making it possible to understand their behavior across all possible angles, not just the limited range we can explore with right triangles.`,
      svg:`<svg viewBox="0 0 700 650" style="margin-left:300px; margin-bottom:-500px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Unit circle -->
  <circle cx="150" cy="125" r="80" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Axes -->
  <line x1="50" y1="125" x2="250" y2="125" stroke="black" stroke-width="1"/>
  <line x1="150" y1="25" x2="150" y2="225" stroke="black" stroke-width="1"/>
  
  <!-- Origin point -->
  <circle cx="150" cy="125" r="2" fill="black"/>
  <text x="155" y="140" font-size="10" fill="black">O (0,0)</text>
  
  <!-- Angle arc at origin -->
  <path d="M 167,125 A 17,17 0 0,0 165,115" fill="none" stroke="black" stroke-width="1"/>
  <text x="175" y="118" font-size="10" fill="black">θ</text>
  
  <!-- Point on circle -->
  <circle cx="214" cy="77" r="2" fill="black"/>
  
  <!-- Radius line -->
  <line x1="150" y1="125" x2="214" y2="77" stroke="black" stroke-width="1"/>
  <text x="165" y="95" font-size="10" fill="black">r = 1</text>
  
  <!-- Dotted projections -->
  <line x1="214" y1="77" x2="214" y2="125" stroke="black" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="214" y1="77" x2="150" y2="77" stroke="black" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="150" y1="125" x2="150" y2="77" stroke="black" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Right triangle -->
  <polygon points="150,125 214,125 214,77" fill="none" stroke="gray" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Right angle indicator -->
  <polygon points="204,125 204,115 214,115" fill="none" stroke="gray" stroke-width="1"/>
  <text x="190" y="110" font-size="8" fill="gray">90°</text>
  
  <!-- Coordinate labels -->
  <text x="202" y="140" font-size="10" fill="black">x</text>
  <text x="220" y="100" font-size="10" fill="black">y</text>
  
  <!-- Axis labels -->
  <text x="240" y="130" font-size="10" fill="black">x-axis</text>
  <text x="155" y="20" font-size="10" fill="black">y-axis</text>
</svg>`,
  
  
    },
    why:{
      title:`Why Radius = 1? `,
      content:``,
      before:`The choice of radius = 1 is not arbitrary—it's a deliberate simplification that eliminates unnecessary complexity from trigonometric calculations. Here's exactly why this matters:
In any right triangle, we define trigonometric functions as ratios:\n


$\\sin \\theta = \\frac{\\text{opposite side}}{\\text{hypotenuse}}$

$\\cos \\theta = \\frac{\\text{adjacent side}}{\\text{hypotenuse}}$
`,
     
between:`When we replace the hypotenuse with 1, the trigonometric functions drastically simplify:

Starting with the basic definitions:

$\\sin \\theta = \\frac{\\text{opposite side}}{\\text{hypotenuse}}$
$\\cos \\theta = \\frac{\\text{adjacent side}}{\\text{hypotenuse}}$

When hypotenuse = 1:

$\\sin \\theta = \\frac{\\text{opposite side}}{1} = \\text{opposite side}$
$\\cos \\theta = \\frac{\\text{adjacent side}}{1} = \\text{adjacent side}$


`,
after:`This means sine becomes simply the opposite side, and cosine becomes simply the adjacent side. The unit circle allows us to visualize these values directly as coordinates, eliminating the need for division calculations.
`,
      svg:`<svg viewBox="0 0 900 700" style="margin-left:400px;margin-top:-100px;margin-bottom:-300px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Triangle -->
  <polygon points="50,250 250,250 250,100" fill="none" stroke="black" stroke-width="2"/>
  
  <!-- Right angle indicator -->
  <polygon points="235,250 235,235 250,235" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Angle arc -->
  <path d="M 80,250 A 30,30 0 0,0 77,233" fill="none" stroke="blue" stroke-width="2"/>
  
  <!-- Angle label -->
  <text x="85" y="240" font-size="16" fill="blue">θ</text>
  
  <!-- Side labels -->
  <text x="145" y="270" font-size="14" fill="red" text-anchor="middle">adjacent</text>
  <text x="300" y="175" font-size="14" fill="green" text-anchor="middle">opposite</text>
  <text x="105" y="165" font-size="14" fill="blue" text-anchor="middle">hypotenuse</text>
  
  <!-- Side highlighting -->
  <line x1="50" y1="250" x2="250" y2="250" stroke="red" stroke-width="2" opacity="0.7"/>
  <line x1="250" y1="250" x2="250" y2="100" stroke="green" stroke-width="2" opacity="0.7"/>
  <line x1="50" y1="250" x2="250" y2="100" stroke="blue" stroke-width="2" opacity="0.7"/>
  
  <!-- Formulas with proper color coding -->
  <text x="50" y="40" font-size="16" fill="black">sin θ = <tspan fill="green">opposite</tspan>/<tspan fill="blue">hypotenuse</tspan></text>
  <text x="50" y="65" font-size="16" fill="black">cos θ = <tspan fill="red">adjacent</tspan>/<tspan fill="blue">hypotenuse</tspan></text>
</svg>`,

svg2:`
<svg viewBox="0 0 900 700" style="margin-left:400px;margin-top:-300px;margin-bottom:-300px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Unit circle -->
  <circle cx="200" cy="150" r="80" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Axes -->
  <line x1="100" y1="150" x2="300" y2="150" stroke="black" stroke-width="1"/>
  <line x1="200" y1="70" x2="200" y2="230" stroke="black" stroke-width="1"/>
  
  <!-- Triangle -->
  <polygon points="200,150 264,150 264,104" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Right angle indicator -->
  <polygon points="254,150 254,140 264,140" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Angle arc -->
  <path d="M 220,150 A 20,20 0 0,0 215,138" fill="none" stroke="black" stroke-width="1"/>
  <text x="225" y="143" font-size="12" fill="black">θ</text>
  
  <!-- Hypotenuse (radius = 1) -->
  <line x1="200" y1="150" x2="264" y2="104" stroke="blue" stroke-width="2"/>
  <text x="220" y="120" font-size="12" fill="blue">1</text>
  
  <!-- Adjacent (cos θ) -->
  <line x1="200" y1="150" x2="264" y2="150" stroke="red" stroke-width="2"/>
  <text x="232" y="165" font-size="12" fill="red">cos θ</text>
  
  <!-- Opposite (sin θ) -->
  <line x1="264" y1="150" x2="264" y2="104" stroke="green" stroke-width="2"/>
  <text x="275" y="127" font-size="12" fill="green">sin θ</text>
  
  <!-- Formulas -->
  <text x="320" y="80" font-size="14" fill="black">When radius = 1:</text>
  <text x="320" y="105" font-size="14" fill="black">sin θ = <tspan fill="green">opposite</tspan>/<tspan fill="blue">1</tspan> = <tspan fill="green">opposite</tspan></text>
  <text x="320" y="125" font-size="14" fill="black">cos θ = <tspan fill="red">adjacent</tspan>/<tspan fill="blue">1</tspan> = <tspan fill="red">adjacent</tspan></text>
  
  <!-- Point -->
  <circle cx="264" cy="104" r="2" fill="black"/>
</svg>
`
  
    },
  
    angles:{
  
      title:`Angle Measurements in the Unit Circle`,
      content:``,
      before:`The unit circle uses two primary systems for measuring angles: degrees and radians. Understanding both systems is essential because different applications favor different units.

**Degrees**: The most familiar system, where a complete rotation around the circle equals 360°. This system divides the circle into 360 equal parts, making it intuitive for everyday use. In the unit circle, we start measuring from the positive x-axis (0°) and move counterclockwise.

**Radians**: The mathematical standard, where a complete rotation equals 2π radians (approximately 6.28). One radian is defined as the angle created when the arc length equals the radius. Since our circle has radius 1, this means one radian corresponds to an arc length of 1 unit along the circle's circumference.

The conversion between these systems is straightforward:

$\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180}$

$\\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}$

**Why radians matter**: While degrees feel more natural, radians create cleaner mathematical relationships. In calculus and advanced mathematics, formulas involving trigonometric functions work more elegantly with radians. For example, the derivative of sin(x) is simply cos(x) when x is in radians, but requires additional conversion factors when x is in degrees.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use degree to radians angle converter](!/converters/degree-radians) →@

  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Check angle conversion table](!/tables/angle-conversion) →@

**Standard position**: Regardless of the unit system, angles in the unit circle are measured from the positive x-axis in a counterclockwise direction. This creates a consistent reference point for all calculations and makes it possible to extend trigonometry beyond the first quadrant.`,
      after:``,
  
    },
    quadrants:{
      title:`The Four Quadrants: A Sign Language`,
      content:`
One of the most crucial concepts for mastering trigonometry is understanding how the signs of sine and cosine change as we move around the circle. The unit circle is divided into four quadrants, each with its own "personality":

**Quadrant I (0° to 90° or 0 to π/2 radians):** Both x and y coordinates are positive, so both cosine and sine are positive. This is the "happy quadrant" where everything is positive and straightforward.

**Quadrant II (90° to 180° or π/2 to π radians):** The x-coordinate becomes negative while y stays positive. This means cosine is negative but sine remains positive. Think "sine is still climbing, but cosine has crossed over to the negative side."

**Quadrant III (180° to 270° or π to 3π/2 radians):** Both coordinates are negative, making both cosine and sine negative. This is the "opposite quadrant" from Quadrant I.

**Quadrant IV (270° to 360° or 3π/2 to 2π radians):** The x-coordinate returns to positive while y becomes negative. Cosine is positive again, but sine has gone negative.

You can observe these sign changes by using the interactive tool above. Set the angle to 45° (π/4 radians), then 135° (3π/4 radians), then 225° (5π/4 radians), and finally 315° (7π/4 radians). Watch how the values in the trigonometric table change signs as you move through each quadrant.


`,
      before:``,
      after:`
 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use degree to radians angle converter](!/converters/degree-radians) →@

  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Check angle conversion table](!/tables/angle-conversion) →@
`,
  
    },


    special:{
  
      title:`Special Angles: The Essential Values`,
      content:`Certain angles on the unit circle are particularly important because they produce exact, "clean" trigonometric values that appear frequently in mathematics and real-world applications. These special angles have trigonometric values that can be expressed as simple fractions involving square roots, rather than long decimal approximations.

**The Key Angles:**

**30° (π/6 radians)**: 
 sin(30°) = 1/2
 cos(30°) = √3/2

**45° (π/4 radians)**:
 sin(45°) = √2/2
 cos(45°) = √2/2

**60° (π/3 radians)**:
 sin(60°) = √3/2
 cos(60°) = 1/2

**90° (π/2 radians)**:
 sin(90°) = 1
 cos(90°) = 0

These angles, along with their equivalents in other quadrants, form the backbone of trigonometric calculations. Notice the pattern: 30° and 60° are complementary (they add to 90°), and their sine and cosine values are swapped. The 45° angle creates an isosceles right triangle, giving equal sine and cosine values.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use trigonometry calculator](!/calculators/trigonometry) →@

**Why These Angles Matter:**

These values come from two fundamental right triangles: the 30-60-90 triangle and the 45-45-90 triangle. Because their side ratios involve simple square roots and fractions, calculations remain exact rather than requiring decimal approximations.

**Extended Special Angles:**

The unit circle extends these basic angles to all four quadrants:
- **120° (2π/3)**, **135° (3π/4)**, **150° (5π/6)** in Quadrant II
- **210° (7π/6)**, **225° (5π/4)**, **240° (4π/3)** in Quadrant III  
- **300° (5π/3)**, **315° (7π/4)**, **330° (11π/6)** in Quadrant IV

Try entering these angles in the interactive tool above. You'll notice that the absolute values of sine and cosine remain the same as their first-quadrant counterparts, but the signs change according to the quadrant rules we discussed earlier.`,
      before:``,
      after:`
      
 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use degree to radians angle converter](!/converters/degree-radians) →@

  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Check angle conversion table](!/tables/angle-conversion) →@

      `,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
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



   const unitCircleSVG=`<svg xmlns="http://www.w3.org/2000/svg" style="margin-bottom:-100px;" viewBox="-1650 -1650 3300 3300">
  <!-- Background -->
  <rect x="-1650" y="-1650" width="3300" height="3300" fill="#f8f9fa" />
  
  <!-- Coordinate system -->
  <line x1="-1500" y1="0" x2="1500" y2="0" stroke="#888" stroke-width="3" />
  <line x1="0" y1="-1500" x2="0" y2="1500" stroke="#888" stroke-width="3" />
  
  <!-- Degree markers (every 30 degrees) -->
  <g stroke="#aaa" stroke-width="3">
    <line x1="-1350" y1="0" x2="-1500" y2="0" />
    <line x1="1350" y1="0" x2="1500" y2="0" />
    <line x1="0" y1="-1350" x2="0" y2="-1500" />
    <line x1="0" y1="1350" x2="0" y2="1500" />
  </g>
  
  <!-- Unit circle -->
  <circle cx="0" cy="0" r="1200" fill="none" stroke="#333" stroke-width="6" />
  
  <!-- Degree lines (every 30 degrees) -->
  <g stroke="#666" stroke-width="4.5" stroke-dasharray="15,15">
    <!-- 30° -->
    <line x1="0" y1="0" x2="1039.23" y2="-600" />
    <!-- 60° -->
    <line x1="0" y1="0" x2="600" y2="-1039.23" />
    
    <!-- 120° -->
    <line x1="0" y1="0" x2="-600" y2="-1039.23" />
    <!-- 150° -->
    <line x1="0" y1="0" x2="-1039.23" y2="-600" />
    
    <!-- 210° -->
    <line x1="0" y1="0" x2="-1039.23" y2="600" />
    <!-- 240° -->
    <line x1="0" y1="0" x2="-600" y2="1039.23" />
    
    <!-- 300° -->
    <line x1="0" y1="0" x2="600" y2="1039.23" />
    <!-- 330° -->
    <line x1="0" y1="0" x2="1039.23" y2="600" />
  </g>
  
  <!-- Degree text (every 30 degrees) -->
  <g font-family="Arial, sans-serif" font-size="60" text-anchor="middle">
    <!-- 0° -->
    <text x="1290" y="90">0°</text>
    <!-- 30° -->
    <text x="1110" y="-570">30°</text>
    <!-- 60° -->
    <text x="660" y="-1020">60°</text>
    <!-- 90° -->
    <text x="0" y="-1290">90°</text>
    <!-- 120° -->
    <text x="-660" y="-1020">120°</text>
    <!-- 150° -->
    <text x="-1110" y="-570">150°</text>
    <!-- 180° -->
    <text x="-1290" y="90">180°</text>
    <!-- 210° -->
    <text x="-1110" y="630">210°</text>
    <!-- 240° -->
    <text x="-660" y="1110">240°</text>
    <!-- 270° -->
    <text x="0" y="1290">270°</text>
    <!-- 300° -->
    <text x="660" y="1110">300°</text>
    <!-- 330° -->
    <text x="1110" y="630">330°</text>
  </g>
  
  <!-- Degree markers (every 10 degrees) -->
  <g stroke="#999" stroke-width="3">
    <!-- 10° -->
    <line x1="1181.76" y1="-205.2" x2="1241.76" y2="-215.82" />
    <!-- 20° -->
    <line x1="1127.64" y1="-410.43" x2="1184.01" y2="-430.95" />
  </g>
  
  <!-- Special points on the unit circle -->
  <g fill="#e63946" stroke="none">
    <!-- 0° / 360° -->
    <circle cx="1200" cy="0" r="18" />
    <!-- 90° -->
    <circle cx="0" cy="-1200" r="18" />
    <!-- 180° -->
    <circle cx="-1200" cy="0" r="18" />
    <!-- 270° -->
    <circle cx="0" cy="1200" r="18" />
    
    <!-- 30° -->
    <circle cx="1039.23" cy="-600" r="18" />
    <!-- 60° -->
    <circle cx="600" cy="-1039.23" r="18" />
    <!-- 120° -->
    <circle cx="-600" cy="-1039.23" r="18" />
    <!-- 150° -->
    <circle cx="-1039.23" cy="-600" r="18" />
    <!-- 210° -->
    <circle cx="-1039.23" cy="600" r="18" />
    <!-- 240° -->
    <circle cx="-600" cy="1039.23" r="18" />
    <!-- 300° -->
    <circle cx="600" cy="1039.23" r="18" />
    <!-- 330° -->
    <circle cx="1039.23" cy="600" r="18" />
  </g>
  
  <!-- Title -->
  <text x="0" y="-1500" font-family="Arial, sans-serif" font-size="72" text-anchor="middle" font-weight="bold">Unit Circle - 360 Degrees</text>
  
  <!-- Center dot -->
  <circle cx="0" cy="0" r="12" fill="#000" />
  
  <!-- Labels for quadrants -->
  <g font-family="Arial, sans-serif" font-size="72" fill="#444" font-weight="bold">
    <text x="450" y="-450" text-anchor="middle">Quadrant I</text>
    <text x="-450" y="-450" text-anchor="middle">Quadrant II</text>
    <text x="-450" y="450" text-anchor="middle">Quadrant III</text>
    <text x="450" y="450" text-anchor="middle">Quadrant IV</text>
  </g>
  
  <!-- Radius example - moved to 0 degrees horizontal -->
  <line x1="0" y1="0" x2="1200" y2="0" stroke="#0066cc" stroke-width="9" />
  <text x="600" y="-60" font-family="Arial, sans-serif" font-size="48" fill="#0066cc">r = 1</text>
</svg>`

   return {
       props: {
           title: 'Unit Circle Visualizer and Calculator | Learn Math Class',
           description: 'Interactive unit circle visualization tool. Calculate and visualize sine, cosine, tangent and other trigonometric functions in real-time.',
           keywords: keyWords,
           canonicalUrl: 'https://www.learnmathclass.com/visual-tools/unit-circle',
           unitCircleSVG,
           sectionsContent,
       },
       revalidate: 3600
   }
}

export default function UnitCirclePage({ title, description, keywords, canonicalUrl ,
  unitCircleSVG , sectionsContent}) {


    
  const unitCircleSections=[
    {
        id:'definition',
        title: sectionsContent.definition.title,
        link:'',
        content:[
          sectionsContent.definition.before,
          sectionsContent.definition.svg,
          sectionsContent.definition.after,
        ]
    },
    {
        id:'why',
        title:sectionsContent.why.title,
        link:'',
        content:[
          sectionsContent.why.before,
          sectionsContent.why.svg,
          sectionsContent.why.between,
          sectionsContent.why.svg2,
          sectionsContent.why.after,
        ]
    },
     {
        id:'angles',
        title:sectionsContent.angles.title,
        link:'',
        content:[
          sectionsContent.angles.before
        ]
    },
      {
        id:'quadrants',
        title:sectionsContent.quadrants.title,
        link:'',
        content:[
          
          sectionsContent.quadrants.content,
          <SvgDiagram data={{ svg: unitCircleSVG,
             explanation: "This unit circle shows all four quadrants with degree markings every 30°. Notice how the signs of sine and cosine change in each quadrant - this is the foundation of trigonometric calculations.", }}
          scale={0.7}
          containerStyle={{marginBottom:'-300px'}} />,
          sectionsContent.quadrants.after,
        
        ]
    },
     {
        id:'special',
        title:sectionsContent.special.title,
        link:'',
        content:[
          sectionsContent.special.content,
          sectionsContent.special.after,
        ]
    },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // }
]


   return (
       <>
           <Head>
               <title>{title}</title>
               <meta name="description" content={description} />
               <meta name="keywords" content={keywords.join(', ')} />
               <link rel="canonical" href={canonicalUrl} />
               <meta property="og:title" content="Unit Circle Visualizer and Calculator" />
               <meta property="og:description" content={description} />
               <meta property="og:url" content={canonicalUrl} />
               <meta property="og:type" content="website" />
               <meta name="viewport" content="width=device-width, initial-scale=1" />
               <meta name="robots" content="index, follow" />
           </Head>
           <GenericNavbar/>
           <br/>
           <br/>
           <br/>
           <br/>
           <OperaSidebar
               side='right'
               topOffset='65px'
               sidebarWidth='45px'
               panelWidth='200px'
               iconColor='white'
               panelBackgroundColor='#f2f2f2'
           />
           <Breadcrumb/>
           <br/>
           <br/>
           <h1 className='title' style={{marginTop:'0px',marginBottom:'-40px'}}>Unit Circle Visualizer and Calculator</h1>
         <br/>
         <br/>
         <br/>
         <br/>
           <UnitCircle/>
           <br/>
           <br/>
           <SectionTableOfContents sections={unitCircleSections}/>
           <br/>
           <br/>
           <br/>
           <Sections sections={unitCircleSections}/>
           <br/>
          {/* <SvgDiagram data={{ svg: unitCircleSVG }}
          scale={0.4}/> */}
           <br/>
           <br/>
           
           <br/>
           <ScrollUpButton/>
       </>
   )
}