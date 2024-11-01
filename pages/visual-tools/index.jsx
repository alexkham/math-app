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

    const cardItems=[
        {
            category: 'Visual Base Converter',
            icon: CustomBase,
            href:'/visual-tools/base-converter',
            // No subcategories, will show simple link
            content:"Upload dataset from file or manually and calculate up to 18 different stats with explanations "
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
    ]
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
   
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px'}} >Visual Tools</h1>
    <br/>
    <OperaSidebar 
   side='right'
   topOffset='65px' 
    sidebarWidth='45px'
     panelWidth='200px'
    
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
