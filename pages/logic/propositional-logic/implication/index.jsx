import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import MyList from '@/app/components/page-components/lists/MyList'

export default function ImplicationPage() {

    const keyWords=[
    'logical implications','conditional statement','definition of implication',
    'logical implication truth table','implication table','propositional logic'
    ]


    const notation=[
        `$p→q$ (standard notation)`,
        `$p⇒q$ (sometimes used in formal logic)`,
        `"If $𝑝$, then $𝑞$" (verbal expression)`,
        `"$𝑝$ implies $𝑞$" (another verbal expression)`
    ]
   const implicationSections=[
      {
            id:'definition',
            title:'Definition and Notation',
            content:[`**Logical implication** is a fundamental concept in logic and mathematics. It describes a conditional relationship between two statements.
## Definition:
            Logical implication ($𝑝→𝑞$) is a conditional statement meaning "if $p$, then $𝑞$." It asserts that whenever $𝑝$ (the antecedent or hypothesis) is true, $𝑞$ (the consequent or conclusion) must also be true.
            However, if $𝑝$ is false, the implication is still considered to be true regardless of $𝑞$. This is very important point that follows directly from the definition. We will see the meaning of it while dealing with implication [truth table](!/logic/propositional-logic/implication#truth_table). 
## Notation:
            `,
            <MyList data={notation}
            key={1}
            boxed={true} color={'blue'} compact={true} type={'dot'} width='300px'/>
        ]
          },
      {
            id:'truth_table',
            title:'Truth Table for Logical Implication',
            content:``
          },
      {
            id:'',
            title:'',
            content:``
          },
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
    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Logical Implication (Conditional Statement)</h1>
    <br/>
    <SectionTableOfContents sections={implicationSections}/>
    <br/>
    <br/>
    <br/>
    <Sections sections={implicationSections}/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
