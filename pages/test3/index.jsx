import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import combinatoricsFormulaList from '@/app/api/db/formulas/combinatorics/combinatoricsFormulas'
import AngleConverter from '@/app/components/converters/AngleConverter'
import TrigoCalculator from '@/app/components/trigo-calculator/TrigoCalculator'
import RootCalculator from '@/app/components/calculators/arithmetics/RootCalculator'
import VectorCalculator from '@/app/components/vectors/VectorCalculator'
import LogarithmCalculator from '@/app/components/calculators/arithmetics/LogarithmCalculator'
import ExponentCalculator from '@/app/components/calculators/arithmetics/ExponentCalculator'
import SquareRootsTable from '@/app/components/tables/SquareRootsTable'
import GenericSquareRootsTable from '@/app/components/tables/GenericSquareRootsTable'
import {LogIn, Activity} from 'lucide-react'
import NewCardGroup from '@/app/components/cards/NewCardGroup'



export default function Test3Page() {

   
const testSections = [
    {
      id: 'main1',
      title: 'Main Section 1',
      content: 'This is main section 1 content',
      pageLink: '/main1',
      subsections: [
        {
          id: 'sub1-1',
          title: 'Subsection 1.1',
          content: 'Detailed content for subsection 1.1',
          pageLink: '/sub1-1'
        },
        {
          id: 'sub1-2',
          title: 'Subsection 1.2',
          content: 'Detailed content for subsection 1.2',
          pageLink: '/sub1-2'
        }
      ]
    },
    {
      id: 'main2',
      title: 'Main Section 2',
      content: 'Regular section without subsections',
      pageLink: '/main2'
    },
    {
      id: 'main3',
      title: 'Main Section 3',
      content: 'This is main section 3 content',
      pageLink: '/main3',
      subsections: [
        {
          id: 'sub3-1',
          title: 'Subsection 3.1',
          content: 'Content for subsection 3.1',
          pageLink: '/sub3-1'
        }
      ]
    },
    {
      id: 'main4',
      title: 'Main Section 4',
      content: [
        'Some Text',
        // `<div>`,
      <VerticalScrollingFormulaWidget key={"formula-widget"} formulaData={combinatoricsFormulaList} />,
    //   `<h1>hello</h1>`,
   
    ]
      // pageLink: '/main2'
    },
  ];


  const explanations = {
    square: {
      text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of 25 is 5, because 5 × 5 = 25.",
      links: [
        {
          title: "Learn More About Square Roots",
          link: "https://example.com/square-roots"
        }
      ]
    },
    cube: {
      text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27.",
      // links: [
      //   {
      //     title: "Cube Roots Explained",
      //     link: "https://example.com/cube-roots"
      //   }
      // ]
    },
    nth: {
      text: "An nth root of a number is a value that, when multiplied by itself n-1 times, gives the number. For example, the 4th root of 16 is 2, because 2 × 2 × 2 × 2 = 16.",
      links: [
        {
          title: "Understanding Nth Roots",
          link: "https://example.com/nth-roots"
        }
      ]
    }
  };


//  const logarithmExplanations = {
//     standard: {
//       text: "Logarithms with standard bases are commonly used in mathematics and science. Base 2 logarithms are used in computer science and information theory, natural logarithms (base e) in calculus and growth/decay problems, and base 10 logarithms in engineering and scientific notation.",
//       links: [
//         {
//           title: "Understanding Standard Logarithms",
//           link: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs"
//         }
//       ]
//     },
//     custom: {
//       text: "A logarithm with custom base b of a number x (written as logb(x)) finds the exponent needed to raise b to get x. For example, log3(27) = 3 because 3³ = 27.",
//       links: [
//         {
//           title: "Learn About Custom Base Logarithms",
//           link: "https://www.mathsisfun.com/algebra/logarithms.html"
//         }
//       ]
//     }
//    };
  


 const logarithmExplanations = {
  standard: {
    text: "A logarithm calculates what exponent is needed for a base to reach a given number. If bx = N, then logb(N) = x. For example, log₂(8) = 3 because 2³ = 8. The most common bases are: base 2 (binary logarithm), base e (natural logarithm), and base 10 (common logarithm).",
    links: [
      {
        title: "Properties of Logarithms",
        link: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-prop/a/properties-of-logarithms"
      }
    ]
  },
  custom: {
    text: "For any positive numbers M and b (where b ≠ 1), the equation logb(M) = y means that b^y = M. The base b must be positive and not equal to 1, while M must be positive. The logarithm finds the exponent needed to reach M using base b.",
    links: [
      {
        title: "Advanced Logarithm Rules",
        link: "https://www.mathsisfun.com/algebra/logarithm-rules.html"
      }
    ]
  }
 };


 const detailInstructionsLogarithms = [
  "Enter the number for which you want to find the logarithm",
  "Choose between standard bases (2, e, 10) or enter a custom base",
  "For custom base, enter any positive number except 1",
  "Click Calculate to compute the result",
  "For standard bases: log₂ is used in computing, log₁₀ for scientific notation, loge for natural calculations"
 ];


 const exponentExplanations = {
  square: {
    text: "Square is the result of multiplying a number by itself...",
    links: [
      { title: "Learn about square numbers", link: "/square-numbers" },
      { title: "Square number properties", link: "/properties" }
    ]
  },
  cube: {
    text: "Cube is the result of multiplying a number by itself twice...",
    links: [
      { title: "Understanding cube numbers", link: "/cube-numbers" }
    ]
  },
  custom: {
    text: "Custom powers allow you to raise a number to any power...",
    links: [
      { title: "Exponents explained", link: "/exponents" }
    ]
  }
};





// Example data structure
const cardsData = [
  {
    name: 'Logarithms (Base 10)',
    description: 'Standard logarithmic table with explanations and usage guide.',
    icon: LogIn,
    path: '/tables/arithmetics/logarithm'
  },
  {
    name: 'Natural Logarithms',
    description: 'Logarithms with base e, fundamental in calculus and natural sciences.',
    icon: Activity,
    path: '/tables/arithmetics/natural-logarithms'
  },
  // ... more cards
];



  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>

    <div>Test3Page</div>
    <br></br>
    <br></br>
    {/* <SectionTableOfContents sections={testSections}/> */}
    <br/>
    <br/>
    <br/>
    {/* <AngleConverter/> */}
    <br/>
    <br/>
    <br/>
    <Sections sections={testSections}/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{transform:'scale(0.9)'}}>
    <TrigoCalculator/>
    </div> */}
    <br/>
    <br/>
    <br/>
    <VectorCalculator/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{transform:'scale(0.8)'}}>
    <RootCalculator explanations={explanations}/>
    </div> */}

    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{transform:'scale(0.8)'}}>
    <LogarithmCalculator explanations={logarithmExplanations}/>
    </div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <ExponentCalculator explanations={exponentExplanations}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(0.9)'}}>
    <SquareRootsTable/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <NewCardGroup cards={cardsData}/>
   
    <br/>
    <br/>
    <br/>
    <ScrollUpButton />
    </>
  )
}
