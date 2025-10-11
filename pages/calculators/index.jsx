import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import CardsGroup from '@/app/components/cards/CardsGroup'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'

export default function ConvertersPage() {
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

    const CustomCombinatorics=()=>(
      // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-combine-icon lucide-combine"><path d="M10 18H5a3 3 0 0 1-3-3v-1"/><path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/><path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/><path d="m7 21 3-3-3-3"/><rect x="14" y="14" width="8" height="8" rx="2"/><rect x="2" y="2" width="8" height="8" rx="2"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
       <rect x="4" y="4" width="4" height="4" rx="1"/>
       <rect x="10" y="4" width="4" height="4" rx="1"/>
       <rect x="16" y="4" width="4" height="4" rx="1"/>
       <rect x="4" y="10" width="4" height="4" rx="1"/>
       <rect x="10" y="10" width="4" height="4" rx="1"/>
       <rect x="16" y="10" width="4" height="4" rx="1"/>
       <rect x="4" y="16" width="4" height="4" rx="1"/>
       <rect x="10" y="16" width="4" height="4" rx="1"/>
       <rect x="16" y="16" width="4" height="4" rx="1"/>
   </svg>
    )

    const CustomLinearAlgebra = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        {/* Matrix brackets */}
        <path d="M3 4 L3 20 L5 20 L5 18 L5 6 L5 4 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M19 4 L19 6 L19 18 L19 20 L21 20 L21 4 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        
        {/* Matrix elements - 3x3 grid */}
        <circle cx="8" cy="7" r="1.5"/>
        <circle cx="12" cy="7" r="1.5"/>
        <circle cx="16" cy="7" r="1.5"/>
        <circle cx="8" cy="12" r="1.5"/>
        <circle cx="12" cy="12" r="1.5"/>
        <circle cx="16" cy="12" r="1.5"/>
        <circle cx="8" cy="17" r="1.5"/>
        <circle cx="12" cy="17" r="1.5"/>
        <circle cx="16" cy="17" r="1.5"/>
    </svg>
)

const CustomProbability=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dices-icon lucide-dices"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/><path d="M6 18h.01"/><path d="M10 14h.01"/><path d="M15 6h.01"/><path d="M18 9h.01"/></svg>
)
   

    const cardItems=[
      {
        id: "arithmetic-calculators",
        category: "Arithmetic Calculators",
        content: "Perform Basic and Advanced Arithmetic Operations ",
        icon:CustomArithmetic,
        // href: "/calculators",
        subcategories: [
          {
            name: "Root Calculator",
            href: "/calculators/root-calculator"
          },
          {
            name: "Logarithmic Calculator",
            href: "/calculators/log-calculator"
          },
          {
            name: "Exponent Calculator",
            href: "/calculators/exponent-calculator"
          },

          {
            name: "Percentage Calculator",
            href: "/calculators/percentage-calculator"
          },
          {
            name: "Modulo Calculator",
            href: "/calculators/modulo-calculator"
          },

          {
            name: "Factorial Calculator",
            href: "/calculators/factorial-calculator"
          },
          {
            name: "Fraction Calculator",
            href: "/calculators/fraction-calculator"
          },
         
         
         
        ]
      },
        {
            category: 'Statistics Calculator',
            icon: CustomStats,
            href:'/calculators/statistics-calculator',
            // No subcategories, will show simple link
            content:"Upload dataset from file or manually and calculate up to 18 different stats with explanations "
          },
          {
            category: 'Trigonometry Calculator',
            icon: CustomTriangle,
            href:'/calculators/trigonometry-calculator',
            // No subcategories, will show simple link
            content:"Calculate Basic Trigonometric functions for any angle in degrees or radiands and Inverse trigonometric functions "
          },
          {
            category: 'Probability Calculator',
            icon: CustomProbability,
            href:'/probability/calculator',
            // No subcategories, will show simple link
            content:"Calculate Wide Range of Probability functions for various events and distributions"
          },
          {
            id: "algebra-calculators",
            category: "Algebra Calculators",
            content: "Access powerful algebraic calculation tools",
            icon:CustomAlgebra,
            // href: "/calculators",
            subcategories: [
              {
                name: "Quadratic Equations Calculator",
                href: "/calculators/quadratic-equations"
              },
              {
                name: "Factoring Calculator",
                href: "/calculators/factoring-calculator"
              },
              {
                name: "Polynomial Calculator",
                href: "/calculators/polynomial-calculator"
              }
            ]
          },
          {
            id: "sequences-calculators",
            category: "Sequences Calculators",
            content: "Use Calculators to learn about most important sequences in math",
            icon:CustomList,
            // href: "/calculators",
            subcategories: [
              {
                name: "Prime Numbers Calculator",
                href: "/sequences/prime-numbers"
              },
              {
                name: "Fibonacci Calculator",
                href: "/sequences/fibonacci-numbers"
              }
            ]
          },
           {
            category: 'Combinatorics Calculator',
            icon: CustomCombinatorics,
            href:'/combinatorics/calculator',
            // No subcategories, will show simple link
            content:"Calculate Combinations and Permutations for different Combinatorial Scenarios and learn to differentiate them. "
          },

           {
            category: 'Linear ALgebra Calculators',
            icon: CustomLinearAlgebra,
            // href:'/combinatorics/calculator',
            // No subcategories, will show simple link
            content:"Calculate Complex Numbers.",
            subcategories:[
              {
                name:"Complex Numbers Calculator",
                href:'/calculators/complex-numbers'

              }
            ]
          },
    ]
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
   
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'-20px'}} >Calculators</h1>
    <br/>
    <OperaSidebar 
   side='right'
  //  topOffset='65px' 
    sidebarWidth='45px'
     panelWidth='300px'
    
     iconColor='white'
     panelBackgroundColor='#f2f2f2'/> 
    <br/>
    <br/>
    <div style={{transform:'scale(0.9)'}}>
    <CardsGroup items={cardItems}/>
    </div>

    <ScrollUpButton/>
    
    </>
  )
}
