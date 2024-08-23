import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import PermutationsVisualizer2 from '@/app/components/combinatorics/PermutationsVisualizer2'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'

export default function PermutationsVisualizerPage() {
  return (
   <>
   <MyNavbar></MyNavbar>
   <br></br>
   <br></br>
   <br></br>
   <Breadcrumb></Breadcrumb>
   <h1 className='title'  style={{marginBottom:'-20px'}}>Permutations Visualizer</h1>
   <PermutationsVisualizer2></PermutationsVisualizer2>
   <ScrollUpButton></ScrollUpButton>
   
   </>
  )
}
