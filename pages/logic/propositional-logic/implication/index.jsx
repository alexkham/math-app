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

    const properties=[
        `**Reflexivity**:
$p→p$ is always true for any proposition $𝑝$.
This follows from the [truth table](!/logic/propositional-logic/implication#truth_table) since whenever 
$𝑝$ and $𝑞$ are the same-$𝑝→𝑞$ is always true.`,
`**Transitivity**:
If $𝑝→𝑞$ and $𝑞→𝑟$, then $𝑝→𝑟$.
Example:
"If it rains, the ground gets wet." ($𝑝→𝑞$)
"If the ground gets wet, the grass grows." ($𝑞→𝑟$)
Conclusion: "If it rains, the grass grows." ($𝑝→𝑟$)`,
`**Contraposition**:
$𝑝→𝑞$ is logically equivalent to $¬𝑞→¬𝑝$.
This means: If "If it rains, then the ground is wet" is true, then "If the ground is not wet, then it did not rain" must also be true.
This equivalence is useful in proof techniques, especially proof by contrapositive.`,
`**Material Implication (Alternative Form)**:
$𝑝→𝑞$ is equivalent to $¬p∨q$.
This means that "If $𝑝$ then $𝑞$" can be rewritten as "Either $𝑝$ is false or $𝑞$ is true."
**Example**:
"If it's a dog, then it's an animal."
This is logically the same as saying: "It's not a dog, or it's an animal."
This equivalence is a key rule in propositional logic and is used in proofs and simplifications.`,
`**Asymmetry**:
($𝑝→𝑞$) is equivalent to ($¬𝑝∨𝑞$), but not equivalent to ($𝑞→𝑝$).
This means that implication is not symmetric. Just because $𝑝→𝑞$ is true does not mean $𝑞→𝑝$ is true.
**Example**:
"If you are a mother, then you are a woman" ($𝑝→𝑞$) is true.
But "If you are a woman, then you are a mother" ($𝑞→𝑝$) is not necessarily true.`

    ]

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
            **An implication expresses a dependency between two propositions, where the truth of the antecedent guarantees the truth of the the consequent**. 
            However, if $𝑝$ is false, the implication is still considered to be true regardless of $𝑞$. This is very important point that follows directly from the definition. We will see the meaning of it while dealing with implication [truth table](!/logic/propositional-logic/implication#truth_table). 
## Notation:
            `,
            <MyList data={notation}
            key={1}
            boxed={true} color={'blue'} compact={true} type={'dot'} width='400px'/>
        ]
          },
    //   {
    //         id:'truth_table',
    //         title:'Truth Table for Logical Implication',
    //         content:``
    //       },

    // {
    //     id: 'truth_table',
    //     title: 'Truth Table for Logical Implication',
    //     content:[ `Logical implication (P → Q) is a fundamental operation in propositional logic.`,
      
    //   `<table border='1' cellpadding='8' cellspacing='0' style='border-collapse: collapse;'><tr style='background-color: #f2f2f2;'><th>P</th><th>Q</th><th>P → Q</th><th>Explanation</th></tr><tr><td align='center'>T</td><td align='center'>T</td><td align='center'>T</td><td>When P is true and Q is true, the implication is true.</td></tr><tr><td align='center'>T</td><td align='center'>F</td><td align='center'>F</td><td>When P is true but Q is false, the implication is false.</td></tr><tr><td align='center'>F</td><td align='center'>T</td><td align='center'>T</td><td>When P is false and Q is true, the implication is true.</td></tr><tr><td align='center'>F</td><td align='center'>F</td><td align='center'>T</td><td>When P is false and Q is false, the implication is true.</td></tr></table>`,
      
    //   `The counterintuitive aspect is that P → Q is true whenever P is false, regardless of Q's value. This is called "vacuous truth." A helpful way to understand this is with a promise analogy: "If it rains, I'll bring an umbrella." If it doesn't rain, the promise remains unbroken whether I bring an umbrella or not.`
    //     ] 
    // },

    {
        id: 'truth_table',
        title: 'Truth Table for Logical Implication',
        content: [
          `Logical implication $(P → Q)$ is a fundamental operation in propositional logic, represented as "if P, then Q." This relationship is only false in one specific case: when the antecedent P is true but the consequent Q is false.
          The truth table below shows all possible combinations of truth values for 2 variables:`,
          
          `<table border='1' cellpadding='10' cellspacing='0' style='border-collapse: collapse; width: 100%; margin: 15px 0;'><tr style='background-color: #eef2f7;'><th style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>P</th><th style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>Q</th><th style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>P → Q</th><th style='padding: 10px; text-align: left; border: 1px solid #bdc9d9;'>Explanation</th></tr><tr><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>T</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>T</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9; color: #2e7d32;'>T</td><td style='padding: 10px; border: 1px solid #bdc9d9;'>When P is true and Q is true, the implication is true.</td></tr><tr style='background-color: #f8f9fa;'><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>T</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>F</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9; color: #c62828;'>F</td><td style='padding: 10px; border: 1px solid #bdc9d9;'>When P is true but Q is false, the implication is false.</td></tr><tr><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>F</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>T</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9; color: #2e7d32;'>T</td><td style='padding: 10px; border: 1px solid #bdc9d9;'>When P is false and Q is true, the implication is true.</td></tr><tr style='background-color: #f8f9fa;'><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>F</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>F</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9; color: #2e7d32;'>T</td><td style='padding: 10px; border: 1px solid #bdc9d9;'>When P is false and Q is false, the implication is true.</td></tr></table>`,
          
          `The counterintuitive aspect is that P → Q is true whenever P is false, regardless of Q's value. This is called **"vacuous truth"**. A helpful way to understand this is with a promise analogy: "If it rains, I'll bring an umbrella." If it doesn't rain, the promise remains unbroken whether I bring an umbrella or not.
          Promise may be broken only if it has been given. In case it had been never given (last 2 rows, when $P$ is equal to false)- it can not be broken and the whole statement evaluates to true.`,
          `And to conclude this discussion, **the rule of thumb with logical implication is that whenever the hypotesis is false-the overall expression evaluates to true.**`,
          `See more truth tables for expressions involving implications [here](!/tables/truth-tables/implications).`,
          'Or use this interactive [truth table generator](!/logic/truth-tables) to evaluate your own expressions.'
        ]
      },
      {
            id:'properties',
            title:'Properties of Implication',
            content:[`Logical implications have several important properties that define how it behaves in reasoning and formal logic. These properties help establish relationships between statements, simplify logical expressions, and form the basis for proofs. Understanding these properties—such as transitivity, contraposition, and material implication—is essential for working with logical arguments and mathematical reasoning.
            **Here are some important properties of logical implication**:            
            `,
            <MyList data={properties}
            key={2}
            boxed={true} color={'blue'} compact={true} type={'dot'} width='500px'/>
        ]
          },
    //   {
    //         id:'',
    //         title:'',
    //         content:``
    //       },
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
