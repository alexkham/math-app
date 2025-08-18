import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import { equationsData } from '@/app/api/db/diagrams/algebra/equations'
import FourPanel from '@/app/components/page-components/lists/FourPanel'
import TreeStructure2 from '@/app/components/tree-structure/TreeItem2'


export async function getStaticProps(){

  const keyWords=['equations','algebra equations','math equations','linear equations',
    'solving equations','mathematical equations','quadratic equations','types of equations']

 
  const equationTypesData = {
    "Linear equations": {
      "Definition": {
        explanation: `Degree 1 polynomial equations with the highest power of the variable being 1 
        (e.g., $2x + 3 = 7$)`,
        url: "/algebra/equations/linear"
      },
    },
    "Quadratic equations": {
      "Definition": {
        explanation: "Degree 2 polynomial equations with the highest power of the variable being 2 (e.g., x² + 5x + 6 = 0)",
        url: " "
      },
    },
    "Cubic equations": {
      "Definition": {
        explanation: "Degree 3 polynomial equations with the highest power of the variable being 3 (e.g., x³ + 2x² - x + 1 = 0)",
        url: ""
      },
    },
    "Quartic equations": {
      "Definition": {
        explanation: "Degree 4 polynomial equations with the highest power of the variable being 4 (e.g., x⁴ + 2x³ - x + 1 = 0)",
        url: ""
      }
    },
    "Quintic equations": {
      "Definition": {
        explanation: `Degree 5 polynomial equations with the highest power of the variable being 5 
        (e.g., $x⁵ + 3x² - 7 = 0$)`,
        url: ""
      }
    },
    "Higher degree equations": {
      "Definition": {
        explanation: "Polynomial equations of degree 6 and above with increasingly complex solution methods (e.g., x⁷ + x³ - 1 = 0)",
        url: ""
      }
    }
   };


   const equationsByContext = {
    "Polynomial equations": {
      "Definition": {
        explanation: "Equations that contain only polynomial expressions with variables raised to non-negative integer powers",
        url: ""
      }
    },
    "Rational equations": {
      "Definition": {
        explanation: "Equations that involve fractions with variables in the denominators (e.g., 1/x + 2 = 5)",
        url: ""
      }
    },
    "Radical equations": {
      "Definition": {
        explanation: "Equations that contain variables under radical signs or roots (e.g., √x + 3 = 7)",
        url: ""
      }
    },
    "Exponential equations": {
      "Definition": {
        explanation: "Equations where variables appear in the exponents (e.g., 2^x = 8)",
        url: ""
      }
    },
    "Logarithmic equations": {
      "Definition": {
        explanation: "Equations that involve logarithmic functions with variables (e.g., log x = 3)",
        url: ""
      }
    },
    "Trigonometric equations": {
      "Definition": {
        explanation: "Equations that contain trigonometric functions like sine, cosine, or tangent (e.g., sin x = 0.5)",
        url: ""
      }
    },
    "Differential equations": {
      "Definition": {
        explanation: "Equations that involve derivatives of unknown functions with respect to one or more variables",
        url: ""
      }
    },
    "Integral equations": {
      "Definition": {
        explanation: "Equations where the unknown function appears under an integral sign",
        url: ""
      }
    },
    "Functional equations": {
      "Definition": {
        explanation: "Equations where the unknown is a function rather than a variable or number",
        url: ""
      }
    }
   };
   
  const sectionsContent={

    definition:{
      title:`Definition`,
      content:``,
      before:`@academic[theorem:An equation is a mathematical statement that always contains an equals sign and two parts around it: left and right, with one or both sides including unknown quantities called variables.]@`,
      after:`In a functional sense, an equation represents a relationship between quantities that describes how one value depends on another, often used to model real-world situations.
      Algebraically, it serves as a tool for finding unknown values by setting up equivalent expressions and applying mathematical operations to isolate variables.`,
  
  
    },
    components:{
      title:`Equation Components`,
      content:``,
      before:`Understanding an equation's structure helps in solving and manipulating it effectively. Every equation consists of fundamental building blocks that work together to express mathematical relationships.
      
      `,
      after:`
      These components work together to create mathematical statements that can model real-world problems and be solved systematically. Recognizing each component helps in choosing the appropriate solving strategy.`,
  
    },
  
    types:{
  
      title:`Equations Types`,
      content:``,
      before:`In algebra exist several ways to classify equations into different types.
      **By degree** ("Degree" refers to the highest power (exponent) of the variable in a polynomial equation.)
      `,
      
      between:`Another way to classify equations is by their mathematical context or form, which refers to the specific mathematical operations and functions involved in the equation. This classification system focuses on the structural characteristics of equations - whether they contain polynomial terms, fractions with variables, radical expressions, exponential or logarithmic functions, trigonometric functions, or calculus operations like derivatives and integrals. Understanding the mathematical context helps determine which solution methods and techniques are most appropriate for solving different types of equations.`,
      
      after:`In addition to classification by degree and mathematical form, equations can also be divided by the number of variables they contain. Single-variable equations involve only one unknown quantity, while multi-variable equations contain two or more unknowns that must be solved simultaneously.
It's important to note that these three classification systems - by degree, by mathematical form, and by number of variables - are not mutually exclusive and can be used interchangeably. The same equation may belong to multiple categories simultaneously. For example, the equation $2x² + 3y² = 10$ is both a quadratic equation (by degree), a polynomial equation (by mathematical form), and a multi-variable equation (by number of variables). This flexibility in classification allows mathematicians to approach problems from different angles and choose the most effective solution strategy.
`,
  
    },
    obj4:{
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


  const equationComponents = [
    { title: 'Equality Sign', content: 'The "=" symbol that indicates both sides have equal value' },
    { title: 'Variables', content: 'Unknown symbols like $x, y, z$ that we solve for' },
    { title: 'Constants/Coefficients', content: 'Fixed numbers like 2, -5, or $\\pi$' },
    { title: 'Operators', content: 'Mathematical operations: +, -, ×, ÷, exponentiation, etc.' }
   ];

  const introContent = {
    id: "intro",
    title: "",
    content: `Equations are fundamental tools in mathematics that express relationships between quantities using an equals sign. They serve the crucial purpose of modeling real-world problems, finding unknown values, and describing mathematical patterns that govern everything from physics to economics.

In mathematics, equations are essential for problem-solving, proving theorems, and establishing mathematical relationships. They provide a systematic way to translate word problems into solvable mathematical statements and form the foundation for advanced mathematical concepts like functions and calculus.

Equations come in various types: linear equations (like $2x + 3 = 7$) involve variables to the first power, quadratic equations $(x² + 5x + 6 = 0)$ contain squared terms, and polynomial equations include higher-degree terms. There are also exponential, logarithmic, and trigonometric equations, each requiring specific solving techniques.
`
  }
  
    return {
      props:{
        sectionsContent,
        equationComponents,
        introContent,
        equationTypesData,
        equationsByContext
        
      }
    }
  }
  

export default function EquationsPage({sectionsContent,introContent,
  equationComponents,equationTypesData,equationsByContext}) {


    const equationsSections=[
        {
            id:'definition',
            title:sectionsContent.definition.title,
            link:'',
            content:[
                sectionsContent.definition.before,
                equationsData['Definition of Equation'].svg,
                sectionsContent.definition.after
            ]
        },
        {
            id:'components',
            title:sectionsContent.components.title,
            link:'',
            content:[
                sectionsContent.components.before,
                <FourPanel  key={3} data={equationComponents} theme='nightsky'/>,
                sectionsContent.components.after,
            ]
        },
         {
            id:'types',
            title:sectionsContent.types.title,
            link:'',
            content:[
              sectionsContent.types.before,
              // <TreeStructure2 data={equationTypesData}/>

              <TreeStructure2
              key={1}
              data={equationTypesData} 
              // expandTopLevel={true} 
              viewMode="parsed" />,
              sectionsContent.types.between,

              <TreeStructure2
              key={2}
              data={equationsByContext} 
              // expandTopLevel={true} 
              viewMode="parsed" />,
              sectionsContent.types.after,
            ]
        }
        // {
        //     id:'',
        //     title:'',
        //     link:'',
        //     content:''
        // }
    ]
    
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <OperaSidebar 
            side='right'
            topOffset='55px' 
            sidebarWidth='45px'
            panelWidth='200px'
            iconColor='white'
            panelBackgroundColor='#f2f2f2'
          /> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Equations</h1>
    <br/>
    <SectionTableOfContents sections={equationsSections}/>
    <br/>
    <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
    <br/>
    <br/>
    <br/>
    <Sections sections={equationsSections}/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    
    
    </>
  )
}
