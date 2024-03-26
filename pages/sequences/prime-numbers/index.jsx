import PrimeTable from '@/app/components/sequences/PrimeTable'
import React from 'react'
import '../../../app/globals.css'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'


export default function PrimeNumbers() {
  return (
    <>
    <MyNavbar></MyNavbar>
    
    <div className='outer-container'>
    <PrimeTable></PrimeTable>
    </div>
    <ScrollUpButton></ScrollUpButton>
    </>
  )
}
