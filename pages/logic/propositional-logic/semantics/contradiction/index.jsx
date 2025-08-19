import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ExpandableTable from '@/app/components/data-wrapper/generic-table/ExpandableTable'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head';


export async function getStaticProps(){


  
 const keyWords=['logic','propositional logic','contradiction',
  'tautology','tautology and contradiction','tautology and contradiction']



  const contradictions = [
    {
      id: "1",
      name: "Simple Contradiction",
      expression: "P ∧ ¬P",
      explanation: "A proposition and its negation cannot both be true"
    },
    {
      id: "2",
      name: "Multiple Contradiction",
      expression: "(P ∧ Q) ∧ ¬(P ∧ Q)",
      explanation: "A compound proposition and its negation cannot both be true"
    },
    {
      id: "3",
      name: "Implication Contradiction",
      expression: "(P → Q) ∧ (P ∧ ¬Q)",
      explanation: "Cannot have P implying Q while P is true and Q is false"
    },
    {
      id: "4",
      name: "Biconditional Contradiction",
      expression: "(P ↔ Q) ∧ (P ∧ ¬Q)",
      explanation: "Cannot have P equivalent to Q while P is true and Q is false"
    },
    {
      id: "5",
      name: "Disjunction Contradiction",
      expression: "¬(P ∨ Q) ∧ (P ∨ Q)",
      explanation: "A disjunction and its negation cannot both be true"
    },
    {
      id: "6",
      name: "Exclusive Disjunction Contradiction",
      expression: "(P ⊕ Q) ∧ (P ↔ Q)",
      explanation: "P and Q cannot be both different and the same"
    },
    {
      id: "7",
      name: "Triple Contradiction",
      expression: "P ∧ ¬P ∧ Q",
      explanation: "Adding propositions to a contradiction still yields a contradiction"
    },
    {
      id: "8",
      name: "Negated Tautology",
      expression: "¬(P → P)",
      explanation: "The negation of a self-implication tautology"
    },
    {
      id: "9",
      name: "Material Implication Contradiction",
      expression: "(P → Q) ∧ ¬(¬P ∨ Q)",
      explanation: "Contradicts the material implication equivalence"
    },
    {
      id: "10",
      name: "Syllogism Contradiction",
      expression: "((P → Q) ∧ (Q → R)) ∧ (P ∧ ¬R)",
      explanation: "Contradicts the transitive property of implication"
    },
    {
      id: "11",
      name: "Distributive Law Contradiction",
      expression: "¬((P ∧ (Q ∨ R)) ↔ ((P ∧ Q) ∨ (P ∧ R)))",
      explanation: "Negation of the distributive property of conjunction over disjunction"
    },
    {
      id: "12",
      name: "Absorption Law Contradiction",
      expression: "¬((P ∨ (P ∧ Q)) ↔ P)",
      explanation: "Negation of the absorption property"
    },
    {
      id: "13",
      name: "Double Negation Contradiction",
      expression: "¬(¬¬P ↔ P)",
      explanation: "Negation of the double negation equivalence"
    },
    {
      id: "14",
      name: "Contraposition Contradiction",
      expression: "¬((P → Q) ↔ (¬Q → ¬P))",
      explanation: "Negation of the contrapositive equivalence"
    },
    {
      id: "15",
      name: "Material Equivalence Contradiction",
      expression: "¬((P ↔ Q) ↔ ((P → Q) ∧ (Q → P)))",
      explanation: "Negation of the definition of the biconditional"
    },
    {
      id: "16",
      name: "Exportation Law Contradiction",
      expression: "¬(((P ∧ Q) → R) ↔ (P → (Q → R)))",
      explanation: "Negation of the exportation equivalence"
    },
    {
      id: "17",
      name: "Self-Contradiction with Implication",
      expression: "(P → Q) ∧ (P → ¬Q) ∧ P",
      explanation: "P implies contradictory outcomes while P is true"
    },
    {
      id: "18",
      name: "Conjunction-Disjunction Contradiction",
      expression: "(P ∧ Q) ∧ ¬(P ∨ Q)",
      explanation: "Cannot have a conjunction be true while its disjunction is false"
    },
    {
      id: "19",
      name: "Tautology-Contradiction Implication",
      expression: "((P ∨ ¬P) → (Q ∧ ¬Q))",
      explanation: "A tautology cannot imply a contradiction"
    },
    {
      id: "20",
      name: "Vacuous Truth Contradiction",
      expression: "¬P ∧ (P → Q) ∧ ¬Q",
      explanation: "Contradicts the principle of vacuous truth for implication"
    },
    {
      id: "21",
      name: "Biconditional Chain Contradiction",
      expression: "(P ↔ Q) ∧ (Q ↔ R) ∧ ¬(P ↔ R)",
      explanation: "Contradicts the transitivity of the biconditional"
    },
    {
      id: "22",
      name: "Disjunctive Syllogism Contradiction",
      expression: "(P ∨ Q) ∧ ¬P ∧ ¬Q",
      explanation: "Contradicts the disjunctive syllogism principle"
    },
    {
      id: "23",
      name: "Hypothetical Syllogism Contradiction",
      expression: "(P → Q) ∧ (Q → R) ∧ (P ∧ ¬R)",
      explanation: "Contradicts the hypothetical syllogism principle"
    },
    {
      id: "24",
      name: "Exclusive Or Contradiction",
      expression: "(P ⊕ Q) ∧ ¬(P ∨ Q)",
      explanation: "Exclusive OR requires at least one proposition to be true"
    }
  ];


  
  const introContent = {
    id: "intro",
    title: "Introduction",
    content: `Contradictions form a cornerstone concept in propositional logic, representing logical impossibility. A contradiction is a formula that evaluates to false under all possible interpretations of its variables. The simplest example is P ∧ ¬P, which states that a proposition and its negation are simultaneously true – an impossible scenario. 

Unlike ordinary propositions that may be true or false depending on circumstances, contradictions are guaranteed to be false, providing absolute certainty in logical analysis. This property makes contradictions invaluable in proof techniques, particularly in reductio ad absurdum (proof by contradiction), where we demonstrate that assuming the opposite of what we want to prove leads to a logical impossibility.

This page explores contradictions in detail, examining their properties, relationship to [tautologies](!/logic/propositional-logic/semantics/tautology), and applications in logical reasoning and formal proofs.`
  }

  const contradictionContent={
      
    definition:{
      title:'Definition and Notation',
      description:`A **contradiction** is a proposition that is always false, regardless of the truth values of its components. In [propositional logic](!/logic/propositional-logic), a contradiction is a formula that evaluates to false under all possible truth assignments.

**Example**:

\t\t\t\t\t$P∧¬P$ 

(The [law](!/logic/propositional-logic/laws) of non-contradiction: "P and not P" is always false.)

The **notation** commonly used for **contradiction** in logic is:

\t\t\t\t\t$\\bot$

(The **bottom symbol**, also called "falsum" or "false constant").

Alternatively, a **contradiction can be denoted** explicitly as:

\t\t\t\t\t$\\vdash ¬P$ 

which means "the negation of P is provable" when P is a [tautology](!/logic/propositional-logic/semantics/tautology).

In some texts, contradictions are also expressed using [equivalence](!/logic/propositional-logic/semantics/equivalences) sign like this:

\t\t\t\t\t$P \\equiv \\bot$

to explicitly state that a proposition $\( P \)$ is always false (equivalent to false).
`
    },
    laws:{
      title:'Contradictions as Logic Laws',
      description:`As discussed in previous [section](!/logic/propositional-logic/semantics/contradiction#definition), a contradiction is a proposition that always evaluates to false. Some contradictions are so fundamental that they represent core principles of propositional logic.
          
          ## Negations of Logical Laws as Contradictions
          When we negate certain fundamental laws of propositional logic, we obtain expressions that are always false, making them **contradictions**.
          
          **Examples**:
          
          **Negation of the Law of Excluded Middle**:
          \t\t\t\t\t\t$¬(P∨¬P)≡F$
          This states that it's false that a proposition can be neither true nor false, making it a contradiction.
          
          **Law of Non-Contradiction** (direct form):
          \t\t\t\t\t\t$P∧¬P≡F$
          This states that a proposition cannot be both true and false simultaneously, which is always false.
          
          ## Contradictory Forms of Equivalences
          We can also derive contradictions by asserting the negation of logical equivalences:
          
          **Negation of Commutative Laws**:
          \t\t\t\t\t\t$¬(P∨Q≡Q∨P)≡F$
          \t\t\t\t\t\t$¬(P∧Q≡Q∧P)≡F$
          
          **Negation of De Morgan's Laws**:
          \t\t\t\t\t\t$¬(¬(P∨Q)≡(¬P∧¬Q))≡F$
          \t\t\t\t\t\t$¬(¬(P∧Q)≡(¬P∨¬Q))≡F$
          
          These contradictions are the logical foundation of proof by contradiction methods, where assuming the negation of a true statement leads to a contradiction, thereby validating the original statement.
          
          Visit corresponding page to learn more about [propositional logic laws](!/logic/propositional-logic/laws).
          
          Use this tool to evaluate [truth tables](!/logic/truth-tables).
          `

    },
    other:{
      title:'Contradictions that are not laws',
      description: `While some contradictions are negations of fundamental logical laws, not all **contradictions** represent the negation of logical laws. A law in logic is a fundamental principle that defines how logical operations behave, often used in formal proofs and reasoning systems.
          
      However, some **contradictions** are simply valid logical statements that always evaluate to false without being the direct negation of a fundamental principle.
      
      These non-law contradictions may still be useful in proofs, particularly in proof by contradiction methods (reductio ad absurdum), but they do not represent the negation of core logical rules like De Morgan's Laws or the Law of Excluded Middle. Instead, they are often the result of specific logical constructions or transformations that yield contradictory results.
      
            `,
            description2: `
     Use this [tool](!/logic/truth-tables) to generate truth tables dynamically and evaluate these contradictions.`
    },
    contradiction_vs_tautology:{
      title:'Contradiction vs Tautology',
      description: `In propositional logic, tautologies and contradictions represent opposite ends of logical certainty. 
      While [tautology](!/logic/propositional-logic/semantics/tautology) is a logical formula that always evaluates to true, no matter what truth values are assigned to its variables, a contradiction, in contrast, is always false regardless of its variables' values.
      These concepts are perfect mirrors of each other - applying negation to a [tautology](!/logic/propositional-logic/semantics/tautology) produces a contradiction, and negating a contradiction creates a [tautology](!/logic/propositional-logic/semantics/tautology). 
      This relationship is not just a curiosity but forms the foundation of logical reasoning. Tautologies tell us what must be true in all possible worlds, while contradictions show us what cannot be true under any circumstances. Together, they establish the boundaries of logical possibility and impossibility, providing the framework for all logical deduction in propositional logic.`,
      svg:    
      `<svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" 
style="display: block; margin: 0 auto; fill:none; stroke:none; fill-rule:evenodd; clip-rule:evenodd; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:1.5;">
<defs>
<!-- Arrow markers -->
<marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
<path d="M0,0 L10,3.5 L0,7 Z" fill="#777777" />
</marker>
</defs>

<!-- Left node (green/tautology) with checkmark -->
<circle cx="125" cy="150" r="60" fill="#3cc583" stroke="#ffffff" stroke-width="2" />
<!-- Checkmark icon -->
<path d="M 90 150 L 115 175 L 160 120" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />

<!-- Right node (red/contradiction) with X -->
<circle cx="375" cy="150" r="60" fill="#e55753" stroke="#ffffff" stroke-width="2" />
<!-- X icon -->
<path d="M 335 110 L 415 190 M 415 110 L 335 190" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />

<!-- Upper arrow (flatter curve) -->
<path d="M185 110 C225 90, 275 90, 315 110" stroke="#777777" stroke-width="0.8" fill="none" marker-end="url(#arrowhead)" />
<!-- Upper arrow negation label -->
<text x="250" y="80" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#444444">negation (¬)</text>

<!-- Lower arrow (flatter curve) -->
<path d="M315 190 C275 210, 225 210, 185 190" stroke="#777777" stroke-width="0.8" fill="none" marker-end="url(#arrowhead)" />
<!-- Lower arrow negation label -->
<text x="250" y="220" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#444444">negation (¬)</text>

<!-- Labels -->
<text x="125" y="230" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#3cc583">Tautology</text>
<text x="375" y="230" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#e55753">Contradiction</text>
</svg>`,
     description2:       
     `These two related and opposite concepts exist in perfect duality through negation as shown in the diagram – the negation of any [tautology](!/logic/propositional-logic/semantics/tautology) produces a contradiction, and negating any contradiction creates a [tautology](!/logic/propositional-logic/semantics/tautology). This relationship reveals a fundamental symmetry in logical reasoning.
     
     This duality plays a crucial role in logical analysis. Tautologies provide the foundation for valid arguments and proofs, as they represent statements that must necessarily be true. Contradictions enable powerful proof techniques like reductio ad absurdum, where we disprove statements by showing they lead to contradictions. Together, they establish the boundary conditions of logical reasoning – what must be true and what cannot be true – providing the fixed points around which all logical deduction revolves in propositional logic.`
     

    }

  }



  return{
    props:{

      contradictions,
      introContent,
      contradictionContent,
       seoData: {
      title: "Contradiction in Propositional Logic - Complete Guide | Learn Math Class",
      description: "Learn about contradictions in propositional logic, their relationship to tautologies, and how they represent logical impossibilities. Explore examples, notation, and applications in logical reasoning.",
      keywords: keyWords.join(", "),
      url: "/logic/propositional-logic/semantics/contradiction",
      name: "Contradiction in Propositional Logic"
    },
    keyWords

    }
  }
}

export default function ContradictionPage({
  seoData,
  contradictions,
  introContent,
  contradictionContent,
  keyWords
}) {
//  const keyWords=['logic','propositional logic','contradiction',
//   'tautology','tautology and contradiction','tautology and contradiction']

 

    const contradictionSections=[
            {
            id:'definition',
            title: contradictionContent.definition.title,
            content:contradictionContent.definition.description
          },
           
          {
            id:'contradictions_as_laws',
            title:contradictionContent.laws.title,
            content:contradictionContent.laws.description
          },
          {
            id:'other_contradictions',
            title:contradictionContent.other.title,
            content:[
              contradictionContent.other.description ,
                <ExpandableTable data={contradictions}
                key={1}
                copyableFields={'expression'}/>,
                contradictionContent.other.description2 ,
               
            ]
          },
                {
            id:'contradiction_vs_tautology',
            title:contradictionContent.contradiction_vs_tautology.title,
            content:[

              contradictionContent.contradiction_vs_tautology.description,
              contradictionContent.contradiction_vs_tautology.svg,
              contradictionContent.contradiction_vs_tautology.description2,
  
            ]
          },
        //     {
        //     id:'',
        //     title:'',
        //     content:``
        //   },
    ]
  return (
    <>
    <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head>
     <Head>
      <title>Contradiction in Propositional Logic | Learn Math Class</title>
      <meta name="description" content="Learn about contradictions in propositional logic, their relationship to tautologies, and how they represent logical impossibilities. Explore examples, notation, and applications in logical reasoning." />
      <meta name="keywords" content="contradiction, propositional logic, logical fallacy, law of non-contradiction, tautology, logical reasoning, formal proofs, reductio ad absurdum, proof by contradiction" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.learnmathclass.com/logic/propositional-logic/semantics/contradiction" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.learnmathclass.com/logic/propositional-logic/semantics/contradiction" />
      <meta property="og:title" content="Contradiction in Propositional Logic | Learn Math Class" />
      <meta property="og:description" content="Explore contradictions in propositional logic - logical formulas that always evaluate to false regardless of their variables' truth values." />
      <meta property="og:image" content="https://www.learnmathclass.com/images/og-contradiction.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.learnmathclass.com/logic/propositional-logic/semantics/contradiction" />
      <meta property="twitter:title" content="Contradiction in Propositional Logic | Learn Math Class" />
      <meta property="twitter:description" content="Explore contradictions in propositional logic - logical formulas that always evaluate to false regardless of their variables' truth values." />
      <meta property="twitter:image" content="https://www.learnmathclass.com/images/twitter-contradiction.jpg" />
      
      {/* Mobile responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured data (JSON-LD) for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Contradiction in Propositional Logic",
            "description": "Learn about contradictions in propositional logic, their relationship to tautologies, and how they represent logical impossibilities.",
            "author": {
              "@type": "Organization",
              "name": "Learn Math Class"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Learn Math Class",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.learnmathclass.com/logo.png"
              }
            },
            "datePublished": "2023-01-15",
            "dateModified": "2023-05-20",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.learnmathclass.com/logic/propositional-logic/semantics/contradiction"
            }
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
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Contradiction</h1>
    <br/>
    <SectionTableOfContents sections={contradictionSections}
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
    <br/>
 <Sections sections={contradictionSections}/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
