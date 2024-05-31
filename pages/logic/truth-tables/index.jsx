import LogicCalculator from '@/app/components/logic-calculator/LogicCalculator'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'

export default function TruthTablesPage() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <br></br>
    <br></br>
    <br></br>
    <div style={{margin:'20px'}}>
    <LogicCalculator></LogicCalculator>
    </div>
    <br></br>
    <ScrollUpButton></ScrollUpButton>
    </>
  )
}
