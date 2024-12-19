import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import CardsGroup from '@/app/components/cards/CardsGroup'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'

export default function ConvertersPage() {
    const CustomBase=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-binary"><rect x="14" y="14" width="4" height="6" rx="2"/><rect x="6" y="4" width="4" height="6" rx="2"/><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/></svg>
    )

    const CustomMatrix=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

  <path d="M16 3h3v18h-3" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 21H5V3h3" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  
 
  <text x="8" y="9" font-family="monospace" font-size="6" fill="black">a</text>
  <text x="13" y="9" font-family="monospace" font-size="6" fill="black">b</text>
  <text x="8" y="16" font-family="monospace" font-size="6" fill="black">c</text>
  <text x="13" y="16" font-family="monospace" font-size="6" fill="black">d</text>
</svg>
    )


const CustomDices=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dices"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/><path d="M6 18h.01"/><path d="M10 14h.01"/><path d="M15 6h.01"/><path d="M18 9h.01"/></svg>
)

const CustomTrigo=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pi"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M10 7v10"/><path d="M16 17a2 2 0 0 1-2-2V7"/></svg>
)

const CustomAlgebra=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-variable"><path d="M8 21s-4-3-4-9 4-9 4-9"/><path d="M16 3s4 3 4 9-4 9-4 9"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>
)


    const cardItems=[
        {
            category: 'Visual Base Converter',
            icon: CustomBase,
            href:'/visual-tools/base-converter',
            // No subcategories, will show simple link
            content:"Explore the concept of base and convert numbers from one base to another "
          },

          {
            category: 'Algebra Visualizers',
            icon: CustomAlgebra,
            href:'/visual-tools/base-converter',
            // No subcategories, will show simple link
            content:"Explore Different Concepts of Algebra Visually",
            subcategories: [
                { name: 'Square Root Visualizer', href: '/visual-tools/square-root' },
               
              ]

          },
          {
            category: 'Linear Algebra Visualizers',
            icon: CustomMatrix,
            // href:'/calculators/statistics-calculator',
            // No subcategories, will show simple link
            content:"Explore Different Concepts of Linear Algebra Visually",
            subcategories: [
                { name: 'Matrix Multiplication Visualizer', href: '/visual-tools/matrix-multiplication' },
                { name: 'Gauss Elimination Visual Calculator', href: '/visual-tools/gauss-elimination' },
                { name: 'Determinat Visual Calculator', href: '/visual-tools/determinant-calculator' },
                { name: 'Matrix Transposition Visualizer', href: '/visual-tools/matrix-transposition' },
              ]

          },
          {
            category: 'Combinatorics Visualizers',
            icon: CustomDices,
            // href:'/calculators/statistics-calculator',
            // No subcategories, will show simple link
            content:"Visual tools transform abstract combinatorics into intuitive, hands-on discoveries.",
            subcategories: [
                { name: 'Permutations Visualizer', href: '/combinatorics/permutations/permutations-visualizer' },
                
              ]

          },

          {
            category: 'Trigonometry Visualizers',
            icon: CustomTrigo,
            // href:'/calculators/statistics-calculator',
            // No subcategories, will show simple link
            content:"See How Main Concepts of Trigonometry Visualized",
            subcategories: [
                { name: 'Unit Circle Visualizer', href: '/visual-tools/unit-circle' },
                
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
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'-20px'}} >Visual Tools</h1>
    <br/>
    <OperaSidebar 
   side='right'
   topOffset='65px' 
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
