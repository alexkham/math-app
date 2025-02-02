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
import CubeRootsTable from '@/app/components/tables/CubeRootsTable'
import CardsGroup from '@/app/components/cards/CardsGroup'



export default function Test3Page() {


  const CustomStats=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-big"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/></svg>
)

const CustomTriangle=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-right"><path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"/></svg>
)


const CustomAlgebra=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-variable"><path d="M8 21s-4-3-4-9 4-9 4-9"/><path d="M16 3s4 3 4 9-4 9-4 9"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>
)

const CustomList=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-ordered"><path d="M10 12h11"/><path d="M10 18h11"/><path d="M10 6h11"/><path d="M4 10h2"/><path d="M4 6h1v4"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
)

const CustomArithmetic=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-diff"><path d="M12 3v14"/><path d="M5 10h14"/><path d="M5 21h14"/></svg>
)




   
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


// const cardItems=[
//   {
//     id: "arithmetic-calculators",
//     category: "Arithmetic Calculators",
//     content: "Perform Basic and Advanced Arithmetic Operations ",
//     icon:CustomArithmetic,
//     // href: "/calculators",
//     subcategories: [
//       {
//         name: "Root Calculator",
//         path: "/calculators/root-calculator"
//       },
//       {
//         name: "Logarithmic Calculator",
//         href: "/calculators/log-calculator"
//       },
//       {
//         name: "Exponent Calculator",
//         href: "/calculators/exponent-calculator"
//       },
     
//     ]
//   },
//     {
//         category: 'Statistics Calculator',
//         icon: CustomStats,
//         href:'/calculators/statistics-calculator',
//         // No subcategories, will show simple link
//         content:"Upload dataset from file or manually and calculate up to 18 different stats with explanations "
//       },
//       {
//         category: 'Trigonometry Calculator',
//         icon: CustomTriangle,
//         href:'/calculators/trigonometry-calculator',
//         // No subcategories, will show simple link
//         content:"Calculate Basic Trigonometric functions for any angle in degrees or radiands and Inverse trigonometric functions "
//       },
//       {
//         id: "algebra-calculators",
//         category: "Algebra Calculators",
//         content: "Access powerful algebraic calculation tools",
//         icon:CustomAlgebra,
//         // href: "/calculators",
//         subcategories: [
//           {
//             name: "Quadratic Equations Calculator",
//             href: "/calculators/quadratic-equations"
//           },
//           {
//             name: "Factoring Calculator",
//             href: "/calculators/factoring-calculator"
//           },
//           {
//             name: "Polynomial Calculator",
//             href: "/calculators/polynomial-calculator"
//           }
//         ]
//       },
//       {
//         id: "sequences-calculators",
//         category: "Sequences Calculators",
//         content: "Use Calculators to learn about most important sequences in math",
//         icon:CustomList,
//         // href: "/calculators",
//         subcategories: [
//           {
//             name: "Prime Numbers Calculator",
//             href: "/sequences/prime-numbers"
//           },
//           {
//             name: "Fibonacci Calculator",
//             href: "/sequences/fibonacci-numbers"
//           }
//         ]
//       }
// ]

const cardItems = [
  {
    name: "arithmetic-calculators",
    description: "Perform Basic and Advanced Arithmetic Operations",
    backgroundColor:'red',
    textColor:"white",
    footerColor:'yellow',
    icon: CustomArithmetic,
    path: "/calculators",
    subcategories: [
      {
        name: "Root Calculator", 
        path: "/calculators/root-calculator"
      },
      {
        name: "Logarithmic Calculator",
        path: "/calculators/log-calculator"
      },
      {
        name: "Exponent Calculator",
        path: "/calculators/exponent-calculator"
      }
    ]
  },
  {
    name: 'Statistics Calculator',
    icon: CustomStats,
    path: '/calculators/statistics-calculator',
    description: "Upload dataset from file or manually and calculate up to 18 different stats with explanations"
  },
  {
    name: 'Trigonometry Calculator',
    icon: CustomTriangle, 
    path: '/calculators/trigonometry-calculator',
    description: "Calculate Basic Trigonometric functions for any angle in degrees or radiands and Inverse trigonometric functions"
  },
  {
    name: "algebra-calculators",
    description: "Access powerful algebraic calculation tools",
    icon: CustomAlgebra,
    path: "/calculators",
    subcategories: [
      {
        name: "Quadratic Equations Calculator",
        path: "/calculators/quadratic-equations"
      },
      {
        name: "Factoring Calculator",
        path: "/calculators/factoring-calculator"
      },
      {
        name: "Polynomial Calculator",
        path: "/calculators/polynomial-calculator" 
      }
    ]
  },
  {
    name: "sequences-calculators",
    description: "Use Calculators to learn about most important sequences in math",
    icon: CustomList,
    path: "/calculators",
    subcategories: [
      {
        name: "Prime Numbers Calculator",
        path: "/sequences/prime-numbers"
      },
      {
        name: "Fibonacci Calculator",
        path: "/sequences/fibonacci-numbers"
      }
    ]
  }
 ]


const cards = [
  {
    name: "users",
    description: "Manage user accounts and permissions",
    path: "/users",
   
    // icon: UserIcon,
    icon:CustomList,
    backgroundColor: "#f0f9ff",
    textColor: "#0369a1",
    footerColor: "red"
  },
  {
    name: "products",
    description: "View and manage products",
    path: "/products",
    // icon: BoxIcon
    // Will use default colors from your CSS
  }
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
    {/* <NewCardGroup cards={cardsData}/> */}
   
    <br/>
    {/* <NewCardGroup cards={cards}/> */}
    <br/>
    <br/>
    <br/>
    <NewCardGroup cards={cardItems}/>
    <br/>
    <br/>
    {/* <NewCardGroup cards={cardItems}/> */}
    <br/>
    <CardsGroup items={cardItems}/>
    <br/>
    <CubeRootsTable/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton />
    </>
  )
}
