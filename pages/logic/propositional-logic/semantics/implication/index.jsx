import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import MyList from '@/app/components/page-components/lists/MyList'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import ExpandableTable from '@/app/components/generic-table/ExpandableTable'
import Head from 'next/head'



export async function getStaticProps(){

 
  const keyWords=[
    'logical implications','conditional statement','definition of implication',
    'logical implication truth table','implication table','propositional logic'
    ]

    

  
  const implicationLaws = [
    {
      id: 1,
      law: "Contrapositive Law",
      formula: "(p → q) ≡ (¬q → ¬p)",
      explanation: "If p implies q, then not q implies not p."
    },
    {
      id: 2,
      law: "Implication as OR",
      formula: "p → q ≡ ¬p ∨ q",
      explanation: "A conditional statement can be rewritten as a disjunction."
    },
    {
      id: 3,
      law: "Inverse Law for Implication",
      formula: "(p → q) ≢ (¬p → ¬q)",
      explanation: "Just because p→q is true, it doesn't mean ¬p→¬q is true."
    },
    {
      id: 4,
      law: "Equivalence Breakdown",
      formula: "p ↔ q ≡ (p → q) ∧ (q → p)",
      explanation: "Biconditional means both directions of implication must be true."
    },
    {
      id: 5,
      law: "Monotonicity of OR",
      formula: "p → (p ∨ q)",
      explanation: "Adding a term to an OR doesn't make it false."
    },
    {
      id: 6,
      law: "Monotonicity of AND",
      formula: "(p ∧ q) → p",
      explanation: "Removing a term from an AND doesn't make it true."
    },
    {
      id: 7,
      law: "Resolution",
      formula: "(p ∨ q), (¬p ∨ r) ⊢ (q ∨ r)",
      explanation: "If we have p∨q and ¬p∨r, we can conclude q∨r."
    },
    {
      id: 8,
      law: "Peirce's Law",
      formula: "((p → q) → p) → p",
      explanation: "Valid in classical logic but not in intuitionistic logic."
    }
  ];

  const introContent = {
    id: "intro",
    title: "Overview of Logical Implication Page",
    content: `This page offers a structured exploration of logical implication, a core concept in propositional logic. It begins by defining implication formally and introducing common notations. A detailed truth table demonstrates how the implication $p\\rightarrow q$ evaluates across all possible truth values. The page then outlines key properties of implication, including reflexivity, transitivity, contraposition, and material implication. To address frequent points of confusion, a section on common misconceptions clarifies ideas like vacuous truth and the asymmetry of implication. Finally, the page highlights the role of implication in mathematical proofs, showing how it is used in direct reasoning, contrapositive arguments, and proof by contradiction. Together, these sections form a clear foundation for understanding conditional logic in both theoretical and applied contexts.`
  }


  const properties=[
    `**Reflexivity**:
$p→p$ is always true for any proposition $𝑝$.
This follows from the [truth table](!/logic/propositional-logic/semantics/implication#tt_self) because whenever 
the **antecedent** and the **consequent** are the same-$𝑝→𝑝$ is always true since implication is only false when the antecedent is true and the consequent is false, and that simply can not happen here.
The expression is always true ([tautology](!/logic/propositional-logic/semantics/tautology)).`,
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

const notation=[
  `$p→q$ (standard notation)`,
  `$p⇒q$ (sometimes used in formal logic)`,
  `"If $𝑝$, then $𝑞$" (verbal expression)`,
  `"$𝑝$ implies $𝑞$" (another verbal expression)`
]
  

  return {
    props:{

      implicationLaws,
      introContent,
      properties,
      keyWords,
      notation
      
    }
  }
}




export default function ImplicationPage({implicationLaws ,introContent ,properties ,keyWords ,notation}) {


 
   const implicationSections=[
      {
            id:'definition',
            title:'Definition and Notation',
            content:[`**Logical implication** is a fundamental concept in logic and mathematics. It describes a conditional relationship between two statements.
## Definition:
            Logical implication ($𝑝→𝑞$) is a conditional statement meaning "if $p$, then $𝑞$." It asserts that whenever $𝑝$ (the antecedent or hypothesis) is true, $𝑞$ (the consequent or conclusion) must also be true.
            **An implication expresses a dependency between two propositions, where the truth of the antecedent guarantees the truth of the the consequent**. 
            However, if $𝑝$ is false, the implication is still considered to be true regardless of $𝑞$. This is very important point that follows directly from the definition. We will see the meaning of it while dealing with implication [truth table](!/logic/propositional-logic/semantics/implication#truth_table). 
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
          `<br id='tt_self'></br>`,
          `A special case worth noting is $p \\rightarrow p$, where the **antecedent** and the **consequent** are the same proposition. This implication is always true  (it is a [tautology](!/logic/propositional-logic/semantics/tautology)), as seen directly in the truth table:`,
`<table  border='1' cellpadding='10' cellspacing='0' style='border-collapse: collapse; width: 100%; margin: 15px 0;'><tr style='background-color: #eef2f7;'><th style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>P</th><th style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>P</th><th style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>P → P</th><th style='padding: 10px; text-align: left; border: 1px solid #bdc9d9;'>Explanation</th></tr><tr><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>T</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>T</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9; color: #2e7d32;'>T</td><td style='padding: 10px; border: 1px solid #bdc9d9;'>When P is true, P → P is true.</td></tr><tr style='background-color: #f8f9fa;'><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>F</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9;'>F</td><td style='padding: 10px; text-align: center; border: 1px solid #bdc9d9; color: #2e7d32;'>T</td><td style='padding: 10px; border: 1px solid #bdc9d9;'>When P is false, P → P is still true.</td></tr></table>`
,`<br ></br>`,
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
            boxed={true} color={'blue'} compact={true} type={'dot'} />
        ]
          },
          {
            id: 'misconceptions',
            title: 'Common Misconceptions',
            content: [
              `A frequent source of confusion in propositional logic is the truth value of the implication statement $p \\rightarrow q$ when $p$ is false. According to the truth table, the implication is considered true regardless of the truth value of $q$. This phenomenon is known as **vacuous truth**.`,
              
              `The rationale behind this definition is that an implication is only false in the specific case where the hypothesis ($p$) is true and the conclusion ($q$) is false. If the hypothesis is not satisfied, then the implication is not violated, and thus the overall statement is true.`,
              
              `**Example**: "If I win the lottery, then I will buy a new car." If I do not win the lottery, the statement remains valid regardless of whether I buy a car.`,
              
              `Another common misunderstanding is to assume that $p \\rightarrow q$ is equivalent to $q \\rightarrow p$. This is incorrect: implication is not symmetric, and such an inference does not hold logically.`
            ]
          },
          {
            id: 'proofs',
            title: 'Implication in Mathematical Proofs',
            content: [
              `Logical implication plays a foundational role in mathematical reasoning. In a **direct proof**, one assumes the antecedent ($p$) and demonstrates that the consequent ($q$) logically follows, thereby confirming the truth of $p \\rightarrow q$.`,
              
              `Another essential technique is **proof by contraposition**, which leverages the equivalence of $p \\rightarrow q$ and $\\neg q \\rightarrow \\neg p$. In many cases, this approach is more straightforward than a direct proof.`,
              
              `**Example**: To prove "If $n^2$ is even, then $n$ is even," one may instead prove the contrapositive: "If $n$ is odd, then $n^2$ is odd."`,
              
              `Logical implication also underpins **proof by contradiction**, where the assumption of $p$ being true and $q$ being false leads to a contradiction. This contradiction implies that the original implication $p \\rightarrow q$ must be valid.`
            ]
          },
          {
            id: 'implication_laws',
            title: 'Implication in Logic Laws',
            content: [
              `Implication plays a central role in many formal [laws of propositional logic](!/logic/propositional-logic/laws). These laws describe how implication interacts with other logical operations and how it can be transformed or reasoned about in proofs.`,
              `Some of these equivalences help simplify expressions, while others are foundational rules used in direct proofs, proof by contraposition, and resolution strategies.`,
              `<br/>`,
              <ExpandableTable 
                data={implicationLaws}
                key={3}
                copyableFields="formula"
              />,
              `These rules are particularly useful for transforming, simplifying, or interpreting logical statements involving conditional relationships.`,
              `Read more about [laws of propositional logic](!/logic/propositional-logic/laws) on dedicated page.`
            ]
          }
          

          
          
    //   {
    //         id:'',
    //         title:'',
    //         content:``
    //       },
   ]

  return (
    <>
    <Head>
  <title>Logical Implication (Conditional Statement) | Learn Math Class</title>
  <meta name="description" content="Learn logical implication in propositional logic. Complete guide covering definition, truth tables, properties, and applications in mathematical proofs." />
  <meta name="keywords" content={keyWords.join(', ')} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://www.learnmathclass.com/logic/propositional-logic/semantics/implication" />
  
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Logical Implication (Conditional Statement) | Learn Math Class" />
  <meta property="og:description" content="Complete guide to logical implication in propositional logic with truth tables and examples." />
  <meta property="og:url" content="https://www.learnmathclass.com/logic/propositional-logic/semantics/implication" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="robots" content="index, follow" />
  
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Logical Implication (Conditional Statement)",
        "description": "Complete guide to logical implication in propositional logic with truth tables and examples.",
        "author": {
          "@type": "Organization",
          "name": "Learn Math Class"
        },
        "mainEntityOfPage": "https://www.learnmathclass.com/logic/propositional-logic/semantics/implication",
        "keywords": keyWords
      })
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.learnmathclass.com"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Logic",
            "item": "https://www.learnmathclass.com/logic"
          },
          {
            "@type": "ListItem",
            "position": 3, 
            "name": "Propositional Logic",
            "item": "https://www.learnmathclass.com/logic/propositional-logic"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Semantics", 
            "item": "https://www.learnmathclass.com/logic/propositional-logic/semantics"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Implication",
            "item": "https://www.learnmathclass.com/logic/propositional-logic/semantics/implication"
          }
        ]
      })
    }}
  />
</Head>
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
    <SectionTableOfContents sections={implicationSections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
     secondaryNavTitle="Similar Pages"/>
    <br/>
    <br/>
    <br/>
    <IntroSection
         id={introContent.id}
         title={introContent.title} 
         content={introContent.content}
         backgroundColor="#f2f2f2"
         textColor="#06357a"
       />
    <Sections sections={implicationSections}/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
