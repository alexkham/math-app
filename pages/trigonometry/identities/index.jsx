import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import ExpandableTable from '@/app/components/generic-table/ExpandableTable'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents2'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'

export async function getStaticProps(){

  const keyWords=[
    'trigonometric identities','trig identities','trigonometry','verifying trig identities','simplifying trig identities',
    'proving trigonometric identities'
  ]

  const sectionsContent={
    definition:{
      title:'Definition-based Identities',
      before: `Definition-based identities derive from the fundamental relationships between trigonometric functions based on their right-triangle definitions.
      Those may be well illustrated by [unit circle](!/visual-tools/unit-circle).
      
      \n`,     

      after:  `\nDefinition-based identities are fundamental relationships derived directly from how trigonometric functions are defined in a right triangle. They establish the basic connections between these functions and serve as building blocks for more complex identities.
      To get better feeling and understanding of basic definition-based identities use our visual intteractive [unit circle](!/visual-tools/unit-circle) tool.
      `
 
    },
    reciprocal:{
      title:'Reciprocal Identities',
      before:  `In mathematics, the **reciprocal** of a number or expression is 1 divided by that number.
      So, for any non-zero value $𝑥$, the reciprocal is $\\frac{1}{x}$ .
      A reciprocal identity expresses the relationship between a trigonometric function and its multiplicative inverse — basically, how each function "flips".​
      Each basic trigonometric function (sine, cosine, tangent) has a reciprocal counterpart.
              
              `,
      after: `
      Reciprocal identities help simplify rational trigonometric expressions, especially in algebra-heavy problems or when combining functions.
      Knowing how to flip between functions is critical in isolating variables and solving identities.
      Reciprocal identities let you flip between familiar and less familiar functions, extend your solving toolbox, and reduce redundancy in learning.
      `        
    },
    pythagorean:{
      title:'Pythagorean Identities',
      before:`Pythagorean Identities are based on the Pythagorean theorem applied to the [unit circle](!/visual-tools/unit-circle). 
      They express fundamental relationships that always equal 1 or have the form "1 + something²". The core identity sin²(θ) + cos²(θ) = 1 comes directly from the unit circle where any point (cos θ, sin θ) satisfies x² + y² = 1. The other two identities are derived by dividing this fundamental relationship by cos² or sin². 
      
      `,
      after:`
      
      Being familiar with these identities is a crucial skill because they allow converting between different trigonometric functions and are essential for simplifying complex trigonometric expressions.`,
    },
     triangle:{
      title:'Triangle Geometry Identities',
      before:`Triangle Geometry Identities are fundamental relationships that apply to any triangle, not just right triangles. They're special because they connect angles and side lengths in general triangles, extending beyond basic trigonometry. The Law of Sines relates ratios of sides to opposite angles, while the Law of Cosines generalizes the Pythagorean theorem for non-right triangles.
      
      `,
      after:`

      These identities are crucial for solving real-world problems involving triangulation, navigation, and engineering where you need to find unknown sides or angles in any triangle configuration.
      `,
    },


     even_odd:{
      title:"Even-Odd Identities",
      before:`Even-Odd Identities describe the symmetry properties of trigonometric functions when the angle is negated. They're special because they classify functions as either even (symmetric about the y-axis) or odd (symmetric about the origin). Cosine and secant are even functions, meaning f(-θ) = f(θ), while sine, tangent, cosecant, and cotangent are odd functions, meaning f(-θ) = -f(θ). 
      
      `,
      after:`
      
      These identities are important for simplifying expressions with negative angles, understanding function behavior, and solving equations where angle direction matters.
      `,
    },

    
    co_function:{
      title:`Co-Function Identities`,
      before:`Co-Function Identities express the relationship between trigonometric functions and their "co-functions" (complementary functions). They're special because they show how trig functions of complementary angles (angles that add to 90°) are related. For example, sine of an angle equals cosine of its complement. These identities exist because in a right triangle, the two acute angles are complementary, so one angle's opposite side becomes the other angle's adjacent side.
      
      `,
      after:`
      
      Co-Function identities are important for converting between different trig functions and simplifying expressions involving complementary angles.
      `,
    },

    

    periodicity:{
      title:'Periodicity Identities',
      before:`Periodicity Identities describe how trigonometric functions repeat their values at regular intervals. They're special because they capture the cyclical nature of trigonometric functions - sine and cosine repeat every 2π (full circle), while tangent and cotangent repeat every π (half circle). These identities exist because trigonometric functions are based on circular motion and angles, which naturally cycle.
      
      `,
      after:`
      
       Understanding periodicity identities is crucial for solving equations with multiple solutions, understanding wave behavior, and working with any angle by reducing it to a standard interval.
      `,
    },
    
     shift:{
      title:`Shift Identities`,
      before:`Shift Identities show how trigonometric functions behave when the angle is shifted by specific amounts like π or π/2. They're special because they reveal the phase relationships between different trig functions - for example, how sine becomes cosine when shifted by π/2. These identities exist because of the geometric relationships on the unit circle where shifting an angle corresponds to rotating the point.
      
      `,
      after:`
      Shift identities are important for understanding wave phase shifts, converting between trig functions, and analyzing periodic phenomena where timing or phase differences matter.
      `,
    },

     sum:{
      title:'Angle Sum Identities',
      before:`Angle Sum Identities express trigonometric functions of the sum of two angles in terms of the individual angles' functions. They're special because they break down complex angle combinations into manageable parts using products and sums of simpler functions. These identities exist due to the geometric properties of rotating and combining angles on the unit circle. 
      
      `,
      after:`

      These identities are fundamental for calculus, solving trigonometric equations, proving other identities, and applications in physics where multiple rotations or oscillations combine, such as in wave interference and vector analysis.
      `,
    },

     difference:{
      title:'Angle Difference Identities',
      before:`Angle Difference Identities express trigonometric functions of the difference between two angles in terms of the individual angles' functions. They're special because they complement the sum identities, providing the complete toolkit for breaking down angle combinations. These identities exist from the same geometric principles as sum identities but with opposite rotation directions on the unit circle. 
      
      `,
      after:`
      Angle Difference identities are essential for solving trigonometric equations, deriving other identities, and applications involving relative motion, phase differences, or when one oscillation opposes another in physics and engineering problems.
      `,
    },

    double:{
      title: 'Double Angle Identities',
      before:`Double Angle Identities are specialized cases of angle sum formulas where both angles are identical (θ + θ = 2θ). What makes them unique is their simplified, elegant forms that directly relate single-angle functions to double-angle functions. They emerge naturally from setting a = b in the sum identities, creating powerful shortcuts. 
      
      `,
      after:`
      
      These identities are vital for integration in calculus, solving equations with multiple angle relationships, and analyzing phenomena with frequency doubling, such as harmonics in music, optical frequency conversion, and engineering systems with gear ratios.
      `,
    },

    
    half:{
      title:`Half Angle Identities`,
      before:`Half Angle Identities work in reverse of double angle formulas, expressing functions of θ/2 in terms of functions of θ. Their uniqueness lies in providing square root forms and rational expressions that eliminate half-angles from equations. They arise by algebraically rearranging double angle identities and often involve ± signs requiring careful quadrant analysis.
      
      `,
      after:`

      These identities are indispensable for integration techniques, solving equations with fractional angles, and applications involving bisection problems, such as cutting angles in half for construction, optics with half-wave plates, and signal processing with subharmonics.
      `,
    },

    triple:{
      title:`Triple Angle Identities`,
      before:`Triple Angle Identities extend angle multiplication to express functions of 3θ in terms of functions of θ. They're distinctive for producing cubic polynomial relationships, creating elegant algebraic forms like sin(3θ) = 3sin(θ) - 4sin³(θ). These identities emerge from repeatedly applying angle sum formulas or using complex number methods.
      
      `,
      after:`
      
      Those identities are valuable in advanced calculus, solving higher-order trigonometric equations, and specialized applications like three-phase electrical systems, crystallography with threefold symmetry, and acoustics where third harmonics play crucial roles in sound quality and instrument timbre.
      `,
    },

    
    power_reducing:{
      title:'Power-Reducing Identities',
      before:`Power-Reducing Identities convert higher powers of trigonometric functions into expressions with lower powers and multiple angles. They're special because they eliminate troublesome squared and higher-power terms by expressing them using first-power functions of double angles. 
      
      `,
      after:`
      
      These identities stem from rearranging double angle formulas to isolate the squared terms. They're essential in calculus integration where powers create complexity, Fourier analysis for breaking down periodic functions, and signal processing where reducing power terms simplifies frequency domain analysis and filtering operations.
      `,
    },
    

     product_sum:{
      title:'Product-to-Sum Identities',
      before:`Product-to-Sum Identities transform products of trigonometric functions into sums or differences of simpler trigonometric expressions. They're special because they convert multiplication (which is complex) into addition (which is simpler), essentially "unpacking" products into linear combinations. These identities arise from algebraically manipulating angle sum and difference formulas.
      
      `,
      after:`
      
      These identities are crucial in signal processing for analyzing beat frequencies, Fourier analysis for decomposing complex waveforms, acoustics for understanding interference patterns, and integration techniques where products are harder to handle than sums.
      `,
    },


     sum_product:{
      title:`Sum-to-Product Identities`,
      before:`Sum-to-Product Identities convert sums and differences of trigonometric functions into products of simpler expressions. They're special because they perform the reverse operation of product-to-sum identities, transforming linear combinations into multiplicative forms. These identities emerge from reversing the algebraic manipulation of angle sum formulas. They're valuable for factoring trigonometric expressions, solving equations where products reveal common factors, analyzing wave interference where constructive and destructive patterns create amplitude modulation, and in acoustics for understanding how combined frequencies create beats and harmonics.
      
      `,
      after:`
      
      
      `,
    },

    
    
    // pythagorean:{
    //   title:``,
    //   before:``,
    //   after:``,
    // },


    // pythagorean:{
    //   title:``,
    //   before:``,
    //   after:``,
    // }
  }
  
    const trigIdentitiesData = {
          "Definition-based Identities": [
          { 
            id: 1, 
            law: "Definition of Sine", 
            formula: "sin(θ) = opposite / hypotenuse", 
            explanation: "Sine defined from right triangle" 
          },
          { 
            id: 2, 
            law: "Definition of Cosine", 
            formula: "cos(θ) = adjacent / hypotenuse", 
            explanation: "Cosine defined from right triangle" 
          },
          { 
            id: 3, 
            law: "Definition of Tangent", 
            formula: "tan(θ) = opposite / adjacent", 
            explanation: "Tangent defined from right triangle" 
          },
          { 
            id: 4, 
            law: "Definition of Cotangent", 
            formula: "cot(θ) = adjacent / opposite", 
            explanation: "Reciprocal of tangent" 
          },
          { 
            id: 5, 
            law: "Definition of Secant", 
            formula: "sec(θ) = hypotenuse / adjacent", 
            explanation: "Reciprocal of cosine" 
          },
          { 
            id: 6, 
            law: "Definition of Cosecant", 
            formula: "csc(θ) = hypotenuse / opposite", 
            explanation: "Reciprocal of sine" 
          },
          { 
            id: 7, 
            law: "Tangent-Sine-Cosine Relation", 
            formula: "tan(θ) = sin(θ) / cos(θ)", 
            explanation: "Derived from basic definitions" 
          },
          { 
            id: 8, 
            law: "Cotangent-Sine-Cosine Relation", 
            formula: "cot(θ) = cos(θ) / sin(θ)", 
            explanation: "Derived from basic definitions" 
          }
          ],

          "Reciprocal Identities": [
            { id: 9, law: "Reciprocal of Sine", formula: "sin(θ) = 1 / csc(θ)", explanation: "Sine is reciprocal of cosecant" },
            { id: 10, law: "Reciprocal of Cosine", formula: "cos(θ) = 1 / sec(θ)", explanation: "Cosine is reciprocal of secant" },
            { id: 11, law: "Reciprocal of Tangent", formula: "tan(θ) = 1 / cot(θ)", explanation: "Tangent is reciprocal of cotangent" },
            { id: 12, law: "Reciprocal of Cosecant", formula: "csc(θ) = 1 / sin(θ)", explanation: "Cosecant is reciprocal of sine" },
            { id: 13, law: "Reciprocal of Secant", formula: "sec(θ) = 1 / cos(θ)", explanation: "Secant is reciprocal of cosine" },
            { id: 14, law: "Reciprocal of Cotangent", formula: "cot(θ) = 1 / tan(θ)", explanation: "Cotangent is reciprocal of tangent" }
          ],
        "Pythagorean Identities": [
          { id: 15, law: "Sine and Cosine", formula: "sin²(θ) + cos²(θ) = 1", explanation: "Fundamental identity derived directly from the [unit circle](!/visual-tools/unit-circle) .", topic: "Pythagorean" },
          { id: 16, law: "Tangent and Secant", formula: "1 + tan²(θ) = sec²(θ)", explanation: "Derived from dividing sin² + cos² = 1 by cos²", topic: "Pythagorean" },
          { id: 17, law: "Cotangent and Cosecant", formula: "1 + cot²(θ) = csc²(θ)", explanation: "Derived from dividing sin² + cos² = 1 by sin²", topic: "Pythagorean" }
        ],
      
        "Triangle Geometry Identities": [
    {
      id: 18,
      law: "Law of Sines",
      formula: "sin(A)/a = sin(B)/b = sin(C)/c",
      explanation: "Relates the ratios of angles and opposite sides in any triangle"
    },
    {
      id: 19,
      law: "Law of Cosines (Standard Form)",
      formula: "c² = a² + b² − 2ab·cos(C)",
      explanation: "Generalization of the Pythagorean Theorem for any triangle"
    },
    {
      id: 20,
      law: "Law of Cosines (Alternative Forms)",
      formula: "a² = b² + c² − 2bc·cos(A);\n b² = a² + c² − 2ac·cos(B)",
      explanation: "Same law applied for other sides of the triangle"
    }
  ],

  "Even-Odd Identities": [
    {
      id: 21,
      law: "Odd Sine",
      formula: "sin(−θ) = −sin(θ)",
      explanation: "Sine is an odd function; reflects through origin"
    },
    {
      id: 22,
      law: "Even Cosine",
      formula: "cos(−θ) = cos(θ)",
      explanation: "Cosine is an even function; symmetric about y-axis"
    },
    {
      id: 23,
      law: "Odd Tangent",
      formula: "tan(−θ) = −tan(θ)",
      explanation: "Tangent is odd; sine is odd and cosine is even"
    },
    {
      id: 24,
      law: "Odd Cosecant",
      formula: "csc(−θ) = −csc(θ)",
      explanation: "Cosecant is reciprocal of sine, so also odd"
    },
    {
      id: 25,
      law: "Even Secant",
      formula: "sec(−θ) = sec(θ)",
      explanation: "Secant is reciprocal of cosine, so also even"
    },
    {
      id: 26,
      law: "Odd Cotangent",
      formula: "cot(−θ) = −cot(θ)",
      explanation: "Cotangent is reciprocal of tangent, so also odd"
    }
  ],
        "Co-Function Identities": [
    {
      id: 27,
      law: "Sine of Complement",
      formula: "sin(π/2 − θ) = cos(θ)",
      explanation: "Sine of an angle's complement equals cosine"
    },
    {
      id: 28,
      law: "Cosine of Complement",
      formula: "cos(π/2 − θ) = sin(θ)",
      explanation: "Cosine of an angle's complement equals sine"
    },
    {
      id: 29,
      law: "Tangent of Complement",
      formula: "tan(π/2 − θ) = cot(θ)",
      explanation: "Tangent of complement equals cotangent"
    },
    {
      id: 30,
      law: "Cotangent of Complement",
      formula: "cot(π/2 − θ) = tan(θ)",
      explanation: "Cotangent of complement equals tangent"
    },
    {
      id: 31,
      law: "Secant of Complement",
      formula: "sec(π/2 − θ) = csc(θ)",
      explanation: "Secant of complement equals cosecant"
    },
    {
      id: 32,
      law: "Cosecant of Complement",
      formula: "csc(π/2 − θ) = sec(θ)",
      explanation: "Cosecant of complement equals secant"
    }
  ],

   "Periodicity Identities": [
    {
      id: 33,
      law: "Sine Periodicity",
      formula: "sin(θ + 2π) = sin(θ)",
      explanation: "Sine repeats every 2π"
    },
    {
      id: 34,
      law: "Cosine Periodicity",
      formula: "cos(θ + 2π) = cos(θ)",
      explanation: "Cosine repeats every 2π"
    },
    {
      id: 35,
      law: "Tangent Periodicity",
      formula: "tan(θ + π) = tan(θ)",
      explanation: "Tangent repeats every π"
    },
    {
      id: 36,
      law: "Cotangent Periodicity",
      formula: "cot(θ + π) = cot(θ)",
      explanation: "Cotangent repeats every π"
    },
    {
      id: 37,
      law: "Secant Periodicity",
      formula: "sec(θ + 2π) = sec(θ)",
      explanation: "Secant repeats every 2π"
    },
    {
      id: 37,
      law: "Cosecant Periodicity",
      formula: "csc(θ + 2π) = csc(θ)",
      explanation: "Cosecant repeats every 2π"
    }
  ],

      
        // "Even-Odd Identities": [
        //   { id: 10, law: "Even Cosine", formula: "cos(−θ) = cos(θ)", explanation: "Cosine is an even function", topic: "Parity" },
        //   { id: 11, law: "Odd Sine", formula: "sin(−θ) = −sin(θ)", explanation: "Sine is an odd function", topic: "Parity" },
        //   { id: 12, law: "Odd Tangent", formula: "tan(−θ) = −tan(θ)", explanation: "Tangent is an odd function", topic: "Parity" }
        // ],

        "Shift Identities": [
    {
      id: 38,
      law: "Sine Shift by π",
      formula: "sin(θ + π) = −sin(θ)",
      explanation: "Sine shifts by π with a sign flip"
    },
    {
      id: 39,
      law: "Cosine Shift by π",
      formula: "cos(θ + π) = −cos(θ)",
      explanation: "Cosine shifts by π with a sign flip"
    },
    {
      id: 40,
      law: "Tangent Shift by π",
      formula: "tan(θ + π) = tan(θ)",
      explanation: "Tangent is periodic with π and does not flip"
    },
    {
      id: 41,
      law: "Sine Shift by π/2",
      formula: "sin(θ + π/2) = cos(θ)",
      explanation: "Sine shifted by π/2 becomes cosine"
    },
    {
      id: 42,
      law: "Cosine Shift by π/2",
      formula: "cos(θ + π/2) = −sin(θ)",
      explanation: "Cosine shifted by π/2 becomes negative sine"
    },
    {
      id: 43,
      law: "Tangent Shift by π/2",
      formula: "tan(θ + π/2) = −cot(θ)",
      explanation: "Tangent shifted by π/2 becomes negative cotangent"
    }
  ],
  
  "Angle Sum Identities": [
    {
      id: 44,
      law: "Sine of Sum",
      formula: "sin(a + b) = sin(a)cos(b) + cos(a)sin(b)",
      explanation: "Expands sine of a sum"
    },
    {
      id: 45,
      law: "Cosine of Sum",
      formula: "cos(a + b) = cos(a)cos(b) − sin(a)sin(b)",
      explanation: "Expands cosine of a sum"
    },
    {
      id: 46,
      law: "Tangent of Sum",
      formula: "tan(a + b) = (tan(a) + tan(b)) / (1 − tan(a)tan(b))",
      explanation: "Expands tangent of a sum"
    },
    {
      id: 47,
      law: "Cotangent of Sum",
      formula: "cot(a + b) = (cot(a)cot(b) − 1) / (cot(a) + cot(b))",
      explanation: "Expands cotangent of a sum"
    },
    {
      id: 48,
      law: "Secant of Sum",
      formula: "sec(a + b) = 1 / [cos(a + b)]",
      explanation: "Reciprocal of cosine of sum"
    },
    {
      id: 49,
      law: "Cosecant of Sum",
      formula: "csc(a + b) = 1 / [sin(a + b)]",
      explanation: "Reciprocal of sine of sum"
    }
  ],

  "Angle Difference Identities": [
    {
      id: 50,
      law: "Sine of Difference",
      formula: "sin(a − b) = sin(a)cos(b) − cos(a)sin(b)",
      explanation: "Expands sine of a difference"
    },
    {
      id: 51,
      law: "Cosine of Difference",
      formula: "cos(a − b) = cos(a)cos(b) + sin(a)sin(b)",
      explanation: "Expands cosine of a difference"
    },
    {
      id: 52,
      law: "Tangent of Difference",
      formula: "tan(a − b) = (tan(a) − tan(b)) / (1 + tan(a)tan(b))",
      explanation: "Expands tangent of a difference"
    },
    {
      id: 53,
      law: "Cotangent of Difference",
      formula: "cot(a − b) = (cot(a)cot(b) + 1) / (cot(b) − cot(a))",
      explanation: "Expands cotangent of a difference"
    },
    {
      id: 54,
      law: "Secant of Difference",
      formula: "sec(a − b) = 1 / [cos(a − b)]",
      explanation: "Reciprocal of cosine of difference"
    },
    {
      id: 55,
      law: "Cosecant of Difference",
      formula: "csc(a − b) = 1 / [sin(a − b)]",
      explanation: "Reciprocal of sine of difference"
    }
  ],

        "Double Angle Identities": [
            {
              id: 56,
              law: "Double Angle for Sine",
              formula: "sin(2θ) = 2sin(θ)cos(θ)",
              explanation: "Derived from the sine of a sum"
            },
            {
              id: 57,
              law: "Double Angle for Cosine",
              formula: "cos(2θ) = cos²(θ) − sin²(θ)",
              explanation: "Standard form from the cosine of a sum"
            },
            {
              id: 58,
              law: "Double Angle for Cosine",
              formula: "cos(2θ) = 2cos²(θ) − 1",
              explanation: "Alternate form using cosine only"
            },
            {
              id: 59,
              law: "Double Angle for Cosine",
              formula: "cos(2θ) = 1 − 2sin²(θ)",
              explanation: "Alternate form using sine only"
            },
            {
              id: 60,
              law: "Double Angle for Tangent",
              formula: "tan(2θ) = (2tan(θ)) / (1 − tan²(θ))",
              explanation: "Derived from the tangent of a sum"
            },
            {
              id: 61,
              law: "Double Angle for Cotangent",
              formula: "cot(2θ) = (cot²(θ) − 1) / (2cot(θ))",
              explanation: "Derived from reciprocal of tangent double angle"
            }
          ],

                  "Half Angle Identities": [
            {
              id: 62,
              law: "Half Angle for Sine",
              formula: "sin²(θ) = (1 − cos(2θ)) / 2",
              explanation: "Derived from cosine double angle identity"
            },
            {
              id: 63,
              law: "Half Angle for Cosine",
              formula: "cos²(θ) = (1 + cos(2θ)) / 2",
              explanation: "Derived from cosine double angle identity"
            },
            {
              id: 64,
              law: "Half Angle for Tangent",
              formula: "tan(θ/2) = ±√[(1 − cos(θ)) / (1 + cos(θ))]",
              explanation: "Square root form derived from sine and cosine"
            },
            {
              id: 65,
              law: "Half Angle for Tangent",
              formula: "tan(θ/2) = sin(θ) / (1 + cos(θ))",
              explanation: "Derived by rationalizing tangent expression"
            },
            {
              id: 66,
              law: "Half Angle for Tangent",
              formula: "tan(θ/2) = (1 − cos(θ)) / sin(θ)",
              explanation: "Alternate rational form for tangent"
            },
            {
              id: 67,
              law: "Half Angle for Cotangent",
              formula: "cot(θ/2) = ±√[(1 + cos(θ)) / (1 − cos(θ))]",
              explanation: "Reciprocal of the square root tangent identity"
            }
          ],

          "Triple Angle Identities": [
              {
                id: 68,
                law: "Triple Angle for Sine",
                formula: "sin(3θ) = 3sin(θ) − 4sin³(θ)",
                explanation: "Expanded using angle addition identity"
              },
              {
                id: 69,
                law: "Triple Angle for Cosine",
                formula: "cos(3θ) = 4cos³(θ) − 3cos(θ)",
                explanation: "Expanded using angle addition identity"
              },
              {
                id: 70,
                law: "Triple Angle for Tangent",
                formula: "tan(3θ) = (3tan(θ) − tan³(θ)) / (1 − 3tan²(θ))",
                explanation: "Derived from tangent sum identity"
              },
              {
                id: 71,
                law: "Triple Angle for Cotangent",
                formula: "cot(3θ) = (cot³(θ) − 3cot(θ)) / (3cot²(θ) − 1)",
                explanation: "Derived from reciprocal of tangent triple angle"
              },
              {
                id: 72,
                law: "Triple Angle for Secant",
                formula: "sec(3θ) = 1 / (4cos³(θ) − 3cos(θ))",
                explanation: "Reciprocal of cosine triple angle"
              },
              {
                id: 73,
                law: "Triple Angle for Cosecant",
                formula: "csc(3θ) = 1 / (3sin(θ) − 4sin³(θ))",
                explanation: "Reciprocal of sine triple angle"
              }
            ],

            "Power-Reducing Identities": [
    {
      id: 74,
      law: "Power-Reducing for Sine",
      formula: "sin²(θ) = (1 − cos(2θ)) / 2",
      explanation: "Reduces power of sine using double angle"
    },
    {
      id: 75,
      law: "Power-Reducing for Cosine",
      formula: "cos²(θ) = (1 + cos(2θ)) / 2",
      explanation: "Reduces power of cosine using double angle"
    },
    {
      id: 76,
      law: "Power-Reducing for Tangent",
      formula: "tan²(θ) = (1 − cos(2θ)) / (1 + cos(2θ))",
      explanation: "Derived from sin²/cos² power-reduced forms"
    },
    {
      id: 77,
      law: "Power-Reducing for Cotangent",
      formula: "cot²(θ) = (1 + cos(2θ)) / (1 − cos(2θ))",
      explanation: "Reciprocal form of tangent power-reduction"
    },
    {
      id: 78,
      law: "Power-Reducing for Secant",
      formula: "sec²(θ) = 2 / (1 + cos(2θ))",
      explanation: "Derived by inverting cos² power identity"
    },
    {
      id: 79,
      law: "Power-Reducing for Cosecant",
      formula: "csc²(θ) = 2 / (1 − cos(2θ))",
      explanation: "Derived by inverting sin² power identity"
    }
  ],

  "Product-to-Sum Identities": [
    {
      id: 80,
      law: "Product-to-Sum for sin(a)sin(b)",
      formula: "sin(a)sin(b) = ½[cos(a − b) − cos(a + b)]",
      explanation: "Converts product of sines into sum of cosines"
    },
    {
      id: 81,
      law: "Product-to-Sum for cos(a)cos(b)",
      formula: "cos(a)cos(b) = ½[cos(a − b) + cos(a + b)]",
      explanation: "Converts product of cosines into sum of cosines"
    },
    {
      id: 82,
      law: "Product-to-Sum for sin(a)cos(b)",
      formula: "sin(a)cos(b) = ½[sin(a + b) + sin(a − b)]",
      explanation: "Converts product of sine and cosine into sum of sines"
    },
    {
      id: 83,
      law: "Product-to-Sum for cos(a)sin(b)",
      formula: "cos(a)sin(b) = ½[sin(a + b) − sin(a − b)]",
      explanation: "Converts product of cosine and sine into difference of sines"
    },
    {
      id: 84,
      law: "Product-to-Sum for tan(a)tan(b)",
      formula: "tan(a)tan(b) = [cos(a − b) − cos(a + b)] / [cos(a − b) + cos(a + b)]",
      explanation: "Derived using tangent in terms of sine and cosine"
    },
    {
      id: 85,
      law: "Product-to-Sum for cot(a)cot(b)",
      formula: "cot(a)cot(b) = [cos(a − b) + cos(a + b)] / [cos(a − b) − cos(a + b)]",
      explanation: "Derived using cotangent in terms of cosine and sine"
    }
  ],

  "Sum-to-Product Identities": [
    {
      id: 86,
      law: "Sum-to-Product for sin(a) + sin(b)",
      formula: "sin(a) + sin(b) = 2sin[(a + b)/2]cos[(a − b)/2]",
      explanation: "Converts sum of sines into product of sine and cosine"
    },
    {
      id: 87,
      law: "Sum-to-Product for sin(a) − sin(b)",
      formula: "sin(a) − sin(b) = 2cos[(a + b)/2]sin[(a − b)/2]",
      explanation: "Converts difference of sines into product"
    },
    {
      id: 88,
      law: "Sum-to-Product for cos(a) + cos(b)",
      formula: "cos(a) + cos(b) = 2cos[(a + b)/2]cos[(a − b)/2]",
      explanation: "Converts sum of cosines into product"
    },
    {
      id: 89,
      law: "Sum-to-Product for cos(a) − cos(b)",
      formula: "cos(a) − cos(b) = −2sin[(a + b)/2]sin[(a − b)/2]",
      explanation: "Converts difference of cosines into negative product of sines"
    },
    {
      id: 90,
      law: "Sum-to-Product for tan(a) + tan(b)",
      formula: "tan(a) + tan(b) = sin(a + b) / [cos(a)cos(b)]",
      explanation: "Derived by expressing tangent in terms of sine and cosine"
    },
    {
      id: 91,
      law: "Sum-to-Product for tan(a) − tan(b)",
      formula: "tan(a) − tan(b) = sin(a − b) / [cos(a)cos(b)]",
      explanation: "Difference of tangents expressed as sine over product of cosines"
    }
  ],


  // "Inverse Trigonometric Identities": [
  //   {
  //     id: 92,
  //     law: "sin⁻¹(x)",
  //     formula: "sin⁻¹(−x) = −sin⁻¹(x)",
  //     explanation: "Odd function; valid for x ∈ [−1, 1]"
  //   },
  //   {
  //     id: 93,
  //     law: "cos⁻¹(x)",
  //     formula: "cos⁻¹(−x) = π − cos⁻¹(x)",
  //     explanation: "Reflective identity; x ∈ [−1, 1]"
  //   },
  //   {
  //     id: 94,
  //     law: "tan⁻¹(x)",
  //     formula: "tan⁻¹(−x) = −tan⁻¹(x)",
  //     explanation: "Odd function; valid for all real x"
  //   },
  //   {
  //     id: 95,
  //     law: "cot⁻¹(x)",
  //     formula: "cot⁻¹(−x) = π − cot⁻¹(x)",
  //     explanation: "Symmetry identity for cotangent inverse; x ∈ ℝ"
  //   },
  //   {
  //     id: 96,
  //     law: "sec⁻¹(x)",
  //     formula: "sec⁻¹(−x) = π − sec⁻¹(x)",
  //     explanation: "Valid for |x| ≥ 1"
  //   },
  //   {
  //     id: 97,
  //     law: "csc⁻¹(x)",
  //     formula: "csc⁻¹(−x) = −csc⁻¹(x)",
  //     explanation: "Odd function; valid for |x| ≥ 1"
  //   }
  // ]

  // "Inverse Trigonometric Identities": [
  //   {
  //     id: 92,
  //     law: "sin⁻¹(sin(x)) = x",
  //     formula: "sin⁻¹(sin(x)) = x",
  //     explanation: "Valid only if x is in [−π/2, π/2]"
  //   },
  //   {
  //     id: 93,
  //     law: "cos⁻¹(cos(x)) = x",
  //     formula: "cos⁻¹(cos(x)) = x",
  //     explanation: "Valid only if x is in [0, π]"
  //   },
  //   {
  //     id: 94,
  //     law: "tan⁻¹(tan(x)) = x",
  //     formula: "tan⁻¹(tan(x)) = x",
  //     explanation: "Valid only if x is in (−π/2, π/2)"
  //   },
  //   {
  //     id: 95,
  //     law: "sin(sin⁻¹(x)) = x",
  //     formula: "sin(sin⁻¹(x)) = x",
  //     explanation: "Valid only if x is in [−1, 1]"
  //   },
  //   {
  //     id: 96,
  //     law: "cos(cos⁻¹(x)) = x",
  //     formula: "cos(cos⁻¹(x)) = x",
  //     explanation: "Valid only if x is in [−1, 1]"
  //   },
  //   {
  //     id: 97,
  //     law: "tan(tan⁻¹(x)) = x",
  //     formula: "tan(tan⁻¹(x)) = x",
  //     explanation: "Valid for all real x"
  //   }
  // ]
      
        // "Angle Sum and Difference Identities": [
        //   { id: 13, law: "Sine Sum", formula: "sin(a + b) = sin(a)cos(b) + cos(a)sin(b)", explanation: "Sine of a sum expands to product terms", topic: "Angle Sum/Diff" },
        //   { id: 14, law: "Cosine Difference", formula: "cos(a − b) = cos(a)cos(b) + sin(a)sin(b)", explanation: "Cosine of a difference uses similar pattern", topic: "Angle Sum/Diff" },
        //   { id: 15, law: "Tangent Sum", formula: "tan(a + b) = (tan(a) + tan(b)) / (1 − tan(a)tan(b))", explanation: "Tangent sum is a rational function", topic: "Angle Sum/Diff" }
        // ],
      
        // "Double Angle Identities": [
        //   { id: 16, law: "Double Sine", formula: "sin(2θ) = 2sin(θ)cos(θ)", explanation: "Sine double angle comes from sum formula", topic: "Double Angle" },
        //   { id: 17, law: "Double Cosine", formula: "cos(2θ) = cos²(θ) − sin²(θ)", explanation: "Cosine double angle from cos(a + b)", topic: "Double Angle" },
        //   { id: 18, law: "Alt Cosine", formula: "cos(2θ) = 2cos²(θ) − 1", explanation: "Alternative form using cos²", topic: "Double Angle" }
        // ],
      
        // "Half Angle Identities": [
        //   { id: 19, law: "Half Cosine", formula: "cos²(θ) = (1 + cos(2θ))/2", explanation: "Derived from double angle cosine", topic: "Half Angle" },
        //   { id: 20, law: "Half Sine", formula: "sin²(θ) = (1 − cos(2θ))/2", explanation: "Derived from double angle sine", topic: "Half Angle" }
        // ]
      };

      const config = {
        displayColumns: ["law", "formula", "explanation"],  // Show name, formula, and explanation
        copyableFields: ["formula"],  // Allow copying just the formula
        searchableFields: ["law", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      };

      const introContent={
        id:'intro',
        title:'Trigonometric Identities : Practical Guide',
        content:`Trigonometric identities are equations involving trigonometric functions that are true for all values in their domains.
        Knowing those identities and understanding them is  important because they:
     ▪  Simplify complex expressions
     ▪  Help solving equations not easily solvable in their original form
     ▪  May be useful in proving mathematical theorems
    ▪ Model periodic phenomena in physics, engineering, and other fields
    ▪  Transform expressions to more useful forms for integration or differentiation



    `
      }    
      

    return{
        props:{

            trigIdentitiesData,
            config,
            sectionsContent,
            introContent
            

        }
    }
}

export default function TrigoIdentitiesPage({trigIdentitiesData ,config ,sectionsContent,introContent}) {

 

  const identitiesSections=[

    {
      id:'definition',
      title:sectionsContent.definition.title,
      link:'',
      content:[
        sectionsContent.definition.before,
         
         <div style={{marginLeft:'50px',marginRight:'50px'}}>
    <ExpandableTable data={trigIdentitiesData["Definition-based Identities"]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
     sectionsContent.definition.after
   
      ]
    },
    {
      id:'reciprocal',
      title:sectionsContent.reciprocal.title,
      link:'',
      content:[
         sectionsContent.reciprocal.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Reciprocal Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
        sectionsContent.reciprocal.after
        
      ]
    },
     {
      id:'pythagorean',
      title: sectionsContent.pythagorean.title,
      link:'',
      content:[

        sectionsContent.pythagorean.before,

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Pythagorean Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
          sectionsContent.pythagorean.after,
        
      ]
    },
     {
      id:'triangle',
      title: sectionsContent.triangle.title,
      link:'',
      content:[

        sectionsContent.triangle.before,

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Triangle Geometry Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

         sectionsContent.triangle.after,

        
        
      ]
    },
      {
      id:'even-odd',
      title:sectionsContent.even_odd.title,
      link:'',
      content:[
          sectionsContent.even_odd.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Even-Odd Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.even_odd.after,

        
      ]
    },
     {
      id:'co-function',
      title: sectionsContent.co_function.title,
      link:'',
      content:[
         sectionsContent.co_function.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Co-Function Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.co_function.after,


        
        
      ]
    },
      {
      id:'periodicity',
      title:sectionsContent.periodicity.title,
      link:'',
      content:[
         sectionsContent.periodicity.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Periodicity Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.periodicity.after,

        
        
      ]
    },
     {
      id:'shift',
      title:sectionsContent.shift.title,
      link:'',
      content:[
         sectionsContent.shift.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Shift Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.shift.after,        
        
      ]
    },
      {
      id:'sum',
      title: sectionsContent.sum.title,
      link:'',
      content:[

          sectionsContent.sum.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Angle Sum Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.sum.after,
        
      ]
    },
      {
      id:'difference',
      title: sectionsContent.difference.title,
      link:'',
      content:[
        sectionsContent.difference.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Angle Difference Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.difference.after,
        
        
      ]
    },
      {
      id:'double',
      title:sectionsContent.double.title,
      link:'',
      content:[
            sectionsContent.double.before,

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Double Angle Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

          sectionsContent.double.after,


       
        
      ]
    },

     {
      id:'half',
      title:sectionsContent.half.title,
      link:'',
      content:[
        sectionsContent.half.before,

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Half Angle Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.half.after,
        
      ]
    },

      {
      id:'triple',
      title:sectionsContent.triple.title,
      link:'',
      content:[
        sectionsContent.triple.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Triple Angle Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.triple.after,

      ]
    },

       {
      id:'power-reducing',
      title:sectionsContent.power_reducing.title,
      link:'',
      content:[
         sectionsContent.power_reducing.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Power-Reducing Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.power_reducing.after,
       
        
      ]
    },

      {
      id:'product-sum',
      title:sectionsContent.product_sum.title,
      link:'',
      content:[
          sectionsContent.product_sum.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Product-to-Sum Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.product_sum.after,

        
        
      ]
    },

      {
      id:'sum-product',
      title:sectionsContent.sum_product.title,
      link:'',
      content:[

         sectionsContent.sum_product.before,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Sum-to-Product Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.sum_product.after,

        
        
      ]
    },

    //  {
    //   id:'inverse',
    //   title:'Inverse Trigonometric Identities',
    //   link:'',
    //   content:[

    //     <div style={{marginLeft:'50px',marginRight:'50px'}}>
    //     <ExpandableTable data={trigIdentitiesData["Inverse Trigonometric Identities"]}
    //      displayColumns={ ["law", "formula", "explanation"]}
    //      copyableFields={["formula"]}
    //      includedFields={ ["law", "formula", "explanation"]} />
    //      </div> ,

        
    //   ]
    // }



     // {
    //   id:'',
    //   title:'',
    //   link:'',
    //   content:[
        
    //   ]
    // }

  ]
  return (
    <>
    <head>
  {/* Essential Meta Tags */}
  <title>Trigonometric Identities: Complete Guide with Formulas | LearnMathClass</title>
  <meta name="description" content="Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities with formulas and explanations." />
  <meta name="keywords" content="trigonometric identities, trig identities, trigonometry, verifying trig identities, simplifying trig identities, proving trigonometric identities" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="utf-8" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.learnmathclass.com/trigonometry/identities" />

  {/* Open Graph for Social Sharing */}
  <meta property="og:title" content="Trigonometric Identities: Complete Guide with Formulas" />
  <meta property="og:description" content="Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities." />
  <meta property="og:url" content="https://www.learnmathclass.com/trigonometry/identities" />
  <meta property="og:type" content="article" />

  {/* Basic Structured Data */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Trigonometric Identities: Complete Guide with Formulas",
      "description": "Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities.",
      "url": "https://www.learnmathclass.com/trigonometry/identities"
    }`}
  </script>

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</head>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <OperaSidebar 
          side='right'
          // topOffset='65px' 
          sidebarWidth='45px'
          panelWidth='300px'
          
          iconColor='white'
          panelBackgroundColor='#f2f2f2'/> 
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Trigonometric Identities</h1>
    {/* <div style={{transform:'scale(0.9)',marginLeft:'100px',marginRight:'100px'}}>
    <DataWrapper2 data={trigIdentitiesData} config={config} searchable={false}/>
    </div> */}
    <SectionTableOfContents sections={identitiesSections}/>
    <br/>
    <br/>
    <br/>
    <IntroSection 
  id={introContent.id}
  title={introContent.title}
  content={introContent.content}
  backgroundColor="#f2f2f2"
  textColor="#34383c"
/>
    <br/>
    <br/>
    <Sections sections={identitiesSections}/>
    {/* <h1>Reciprocal</h1> */}
    {/* <DataWrapper2 data={reciprocalId}/> */}
    {/* <div style={{marginLeft:'200px',marginRight:'200px'}}>
    <ExpandableTable data={trigIdentitiesData["Reciprocal Identities"]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> */}
    <br/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
