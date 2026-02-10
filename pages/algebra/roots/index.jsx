import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import CircularDiagram from '@/app/components/breakdowns/circular-diagram/CircularDiagram'
import '../../../pages/pages.css'


export async function getStaticProps(){

  const intro=`Roots in mathematics represent the inverse operation of powers, answering the fundamental question: "What number, when raised to a given power, produces a specific result?"
Roots are indispensable across mathematical disciplines. In algebra, they're crucial for solving quadratic and polynomial equations, while in geometry, they help calculate distances, areas, and volumes. Calculus extensively uses roots in integration techniques, particularly when dealing with radical functions and substitution methods. In trigonometry, roots appear in half-angle formulas and when solving trigonometric equations.
Perhaps most importantly, roots provide the mathematical framework for understanding irrational numbers and expanding our number system beyond simple fractions. From the ancient Greeks' discovery of √2 to modern computational algorithms, roots continue to challenge and enrich mathematical thinking, serving as gateways to more advanced concepts in analysis, number theory, and applied mathematics.`


   
const introContent = {
  id: "intro",
  title: "Introduction to Roots",
  content: `Roots in mathematics represent the inverse operation of powers, answering the fundamental question: "What number, when raised to a given power, produces a specific result?"
Roots are indispensable across mathematical disciplines. In algebra, they're crucial for solving quadratic and polynomial equations, while in geometry, they help calculate distances, areas, and volumes. Calculus extensively uses roots in integration techniques, particularly when dealing with radical functions and substitution methods. In trigonometry, roots appear in half-angle formulas and when solving trigonometric equations.
Perhaps most importantly, roots provide the mathematical framework for understanding irrational numbers and expanding our number system beyond simple fractions. From the ancient Greeks' discovery of √2 to modern computational algorithms, roots continue to challenge and enrich mathematical thinking, serving as gateways to more advanced concepts in analysis, number theory, and applied mathematics.`
}



  const circularRulesData = {
    title: "Root and Radical Rules",
    color: "#2563eb",
    size: 65,
    link: "",
    // textBox: {
    //   text:''
    // },
    nested: [
      {
        title: "Definition and Basic Rules",
        color: "#3cc583",
        size: 50,
        link: "",
        textBox: {
          text: "Explain what roots are and how they behave in key cases like squares or even vs. odd indices",
          width: 230,
          height: 50,
          className: ""
        }
      },
      {
        title: "Product and Quotient Rules",
        color: "#de8431",
        size: 50,
        link: "",
        textBox: {
          text: "Show how roots interact under multiplication and division",
          width: 120,
          height: 40,
          className: ""
        }
      },
      {
        title: "Power and Exponent Rules",
        color: "#e55753",
        size: 50,
        link: "",
        textBox: {
          text: "Help translate between radical and exponential forms",
          width: 150,
          height: 40,
          className: ""
        }
      },
      {
        title: "Nested Root Rules",
        color: "#de58a9",
        size: 50,
        link: "",
        textBox: {
          text: "Explain how to simplify layers of roots for complex structures",
          width: 90,
          height: 40,
          className: ""
        }
      },
      {
        title: "Simplification Rules",
        color: "#1eabda",
        size: 50,
        link: "",
        textBox: {
          text: "Provide techniques for factoring, combining, or reducing radicals",
          width: 200,
          height: 40,
          className: ""
        }
      },
      {
        title: "Rationalization Rules",
        color: "#92bd39",
        size: 50,
        link: "",
        textBox: {
          text: "Clear radicals from denominators using algebraic tricks",
          width: 150,
          height: 40,
          className: ""
        }
      },
      {
        title: "Special Value Rules",
        color: "#7f64ea",
        size: 50,
        link: "",
        textBox: {
          text: "Rules for roots of 0, 1, and perfect powers",
          width: 150,
          height: 40,
          className: ""
        }
      },
      {
        title: "Domain and Sign Rules",
        color: "#ba5de5",
        size: 50,
        link: "",
        textBox: {
          text: "Clarify which expressions are valid and how signs behave",
          width: 150,
          height: 40,
          className: ""
        }
      },
      {
        title: "Equation Solving Rules",
        color: "#dc2626",
        size: 50,
        link: "",
        textBox: {
          text: "Guide you through solving equations with radicals, including avoiding extraneous solutions",
          width: 190,
          height: 50,
          className: ""
        }
      }
    ]
   };

    const sectionsContent={

        definition:{
          title:`Definitions and Notation`,
          content:``,
          before:`In mathematics, $n$-th root of a value is the number that, when multiplied by itself $𝑛$ times, gives back the original value.
          $n$ is called **index** (or **degree**) and the original value -the **radicand**.

          `,
          after:`**Notation**:
          The n-th root of a value is written as $\\sqrt[n]{a}$. 
          The radical symbol ( $\\sqrt{\ }$ ) denotes a root. 
          The small number \($ n$ \), called the **index**, indicates the degree of the root.
           If \( $n = 2$ \), it is called a **square root**, and the index is usually omitted: \( $\\sqrt{a}$ \).

           **Expanded Notation**:
           This expression means finding the value \( b \) such that multiplying it by itself \( n \) times gives \( a \):
          
          \t\t\t\t\t\t\t\t$\\sqrt[n]{a} = \\underbrace{b}_{\\text{such that } b^n = a}$ .

          
Actually, calculating a root is the inverse operation of [exponentiation (calculating a power)](!/algebra/powers). 
It answers the question:
**“What number raised to a given exponent equals a certain value?”**
In general, the n-th root of a number 𝑎 is a number 𝑏 such that:

\t\t\t\t\t\t\t\t$𝑏^𝑛=𝑎$

**This means**:
𝑏 is the root (corresponds to the base in [powers](!/algebra/powers)),
𝑛 is the degree of the root (corresponds to **exponent**),
𝑎 is the radicand (the number inside the root symbol , corresponding to the **power**).

`,
          svg:`<svg width="750" height="400" style="margin-left:200px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="700" height="400" fill="#f8f9fa"/>
  
  <!-- Root box (top left) -->
  <rect x="20" y="30" width="100" height="60" rx="5" fill="none" stroke="#4a90e2" stroke-width="2"/>
  <text x="70" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-style="italic" fill="#4a90e2">root</text>
  
  <!-- Index/base box (bottom left) -->
  <rect x="20" y="280" width="100" height="60" rx="5" fill="none" stroke="#4a90e2" stroke-width="2"/>
  <text x="70" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#4a90e2">n</text>
  
  <!-- Main equation showing root -->
  <text x="200" y="80" font-family="Arial, sans-serif" font-size="28" font-style="italic" fill="#333">
    <tspan font-size="20" baseline-shift="super">n</tspan>√a = b
  </text>
  
  <!-- Arrow from root to equation -->
  <path d="M 130 50 Q 160 50 180 70" fill="none" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Arrow from index to equation -->
  <path d="M 130 300 Q 160 250 180 90" fill="none" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Main multiplication equation -->
  <text x="280" y="180" font-family="Arial, sans-serif" font-size="24" font-style="italic" fill="#333">a = b × b ×...× b × b × b</text>
  
  <!-- Brace showing n times -->
  <path d="M 320 200 Q 320 220 340 220 Q 510 220 510 220 Q 530 220 530 200" 
        fill="none" stroke="#4a90e2" stroke-width="2"/>
  <path d="M 320 200 L 325 195" stroke="#4a90e2" stroke-width="2"/>
  <path d="M 320 200 L 325 205" stroke="#4a90e2" stroke-width="2"/>
  <path d="M 530 200 L 525 195" stroke="#4a90e2" stroke-width="2"/>
  <path d="M 530 200 L 525 205" stroke="#4a90e2" stroke-width="2"/>
  
  <!-- n times box -->
  <rect x="420" y="240" width="120" height="60" rx="5" fill="none" stroke="#4a90e2" stroke-width="2"/>
  <text x="480" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-style="italic" fill="#4a90e2">n times</text>
  
  <!-- Arrow to n times box -->
  <path d="M 425 220 L 425 240" fill="none" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Labels -->
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="14" fill="#666">b is the nth root of a</text>
  <text x="70" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">index</text>
  
  <!-- Connection showing the relationship -->
  <text x="200" y="340" font-family="Arial, sans-serif" font-size="16" fill="#333">When you multiply the root by itself n times, you get the original number</text>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#4a90e2"/>
    </marker>
  </defs>
</svg>`
      
      
        },
        rules:{
          title:`Radical Rules`,
          content:`Root and radical rules are essential for working with expressions involving roots, whether square roots or higher-order radicals.  
They begin with the [Definition and Basic Rules](!/algebra/roots/radical-rules), which explain what roots are and how they behave in key cases like squares or even vs. odd indices.  
The [Product and Quotient Rules](!/algebra/roots/radical-rules) show how roots interact under multiplication and division, while the [Power and Exponent Rules](!/algebra/roots/radical-rules) help translate between radical and exponential forms.  
For more complex structures, the [Nested Root Rules](!/algebra/roots/radical-rules) explain how to simplify layers of roots.  
The [Simplification Rules](!/algebra/roots/radical-rules) provide techniques for factoring, combining, or reducing radicals.  
When working with fractions, the [Rationalization Rules](!/algebra/roots/radical-rules) clear radicals from denominators using algebraic tricks.  
There are also [Special Value Rules](!/algebra/roots/radical-rules) for roots of 0, 1, and perfect powers, and the [Domain and Sign Rules](!/algebra/roots/radical-rules) clarify which expressions are valid and how signs behave.  
Finally, the [Equation Solving Rules](!/algebra/roots/radical-rules) guide you through solving equations with radicals, including how to avoid extraneous solutions.
`,
          before:``,
          after:``,
          link:`/algebra/roots/radical-rules`
      
        },
      
        obj3:{
      
          title:``,
          content:``,
          before:``,
          after:``,
      
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


    return {
      props:{

        sectionsContent,
        circularRulesData,
        introContent
        
      }
    }
  }

export default function RootsPage({sectionsContent ,circularRulesData ,introContent}) {


    const powersSections=[
        {
            id:'definition',
            title:sectionsContent.definition.title,
            link:'',
            content:[

                sectionsContent.definition.before,
                sectionsContent.definition.svg,
                sectionsContent.definition.after,
            ]
        },
        {
            id:'rules',
            title:sectionsContent.rules.title,
            link:sectionsContent.rules.link,
            content:[
              sectionsContent.rules.content,
              <CircularDiagram data={circularRulesData}
              key={1}
              showCircle={true}
              radius={180}/>



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
      {/* <GenericNavbar/> */}
     
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
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'10px'}}>Roots</h1>
      <br/>
      <SectionTableOfContents sections={powersSections}
       showSecondaryNav={true}
       secondaryNavMode="siblings"
       secondaryNavTitle="Similar Pages"/>
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
      <Sections sections={powersSections}/>
      <br/>
      <br/>
      <br/>
       {/* <ScrollUpButton/> */} 
    </>
  );
}
