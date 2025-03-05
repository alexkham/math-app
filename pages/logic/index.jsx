
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar' 
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head'
import { createContentHtml } from '@/app/utils/utils-functions'
import ToolsSlider from '@/app/components/sliders/ToolsSlider'
import MyList from '@/app/components/page-components/lists/MyList'

export async function getStaticProps() {
 const { default: logicFormulasList } = await import('@/app/api/db/formulas/logic/logicFormulasList')
 const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')

 const sectionContent = {
   formulas: {
     title: 'Mathematical Logic Formulas',
     description: 'Visit Mathematical Logic formulas page',
     leftContentHtml: createContentHtml({
       description: 'The Mathematical Logic Formulas page presents essential logical laws, rules, and principles organized in five main categories: Logical Equivalences, De Morgans Laws, Logical Laws, Quantifier Rules, and Inference Rules. It covers fundamental concepts from basic logical operations like conjunction and disjunction to advanced topics like quantifiers and inference rules. Each formula includes detailed explanations, symbolic notation, real-world examples, and practical applications.',
      //  link: '/logic/formulas',
       linkText: 'View All Formulas',
       height: '350px',
       backgroundColor: 'none',
     }),
     layout: 'horizontal',
   },
   definitions: {
     title: 'Logic Terms and Definitions', 
     description: 'Browse Logic terminology including main concepts and their definitions with examples',
     rightContentHtml: createContentHtml({
       description: 'The Logic Terms and Definitions page presents key concepts and terminology organized in multiple categories including Logic Basics, Reasoning, Formal Logic, Proof Methods, Logical Principles, and Structures. It covers fundamental concepts like propositions and predicates, reasoning methods, formal systems, and proof techniques. Each term is clearly defined to help understand the building blocks of mathematical logic and logical reasoning.',
      //  link: '/logic/definitions',
       linkText: 'View All Definitions',
       height: '350px',
       backgroundColor: 'none',
     }),
     layout: 'horizontal'
   },
   propositional_logic:{
    title:'Propositional Logic',
    intro:
      `Propositional logic, also known as propositional calculus or sentential logic, forms a foundational sub-field of mathematical logic along with other sub-fields such as first-order logic, higher-order logic, modal logic, intuitionistic logic, temporal logic, set theory, model theory, proof theory, and recursion theory.
      Propositional logic provides a formal system for representing and analyzing statements that are either true or false.`,
    list:[
     ` **Syntax**:
      The formal structure including propositions (typically represented by variables like p, q, r) and logical connectives (AND, OR, NOT, implies, etc.)`,
`**Semantics**:
 How we determine truth values using truth tables, and identifying tautologies (always true) and contradictions (always false)`,
`**Equivalences**:
 Laws like De Morgan's laws, distributive laws, and other equivalences that allow for simplification.
 However, not all logical equivalences are laws. Some are specific derivations that are still true but are not considered "fundamental" enough to be named as laws.
 All laws are logical equivalences, but not all logical equivalences are laws.
Laws are fundamental, while other equivalences may be derived, conditional, or context-dependent.
 Learn more about [basic laws](!/logic/propositional-logic/laws) of propositional logic and other [equivalences](!/logic/propositional-logic/equivalences).`,
`**Inference Rules**:
 Formal rules such as modus ponens, modus tollens, and others that allow for step-by-step proofs`,
`**Normal Forms**:
 Standard ways to represent logical formulas, like conjunctive normal form (CNF) and disjunctive normal form (DNF)`,
`**Proof Techniques**:
 Methods like proof by contradiction, direct proof, and truth tables to establish the validity of arguments`,
 `**Truth tables**:
 Truth tables are primarily used in sentential logic to determine the truth values of logical expressions based on their components.`,
`**Applications**:
 Propositional logic is indeed widely used in computer science (for circuit design, program verification), artificial intelligence (knowledge representation, automated reasoning), philosophy (formal analysis of arguments), and many other fields`,
    ],
    conclusion:`The study of propositional logic establishes the foundation for more complex logical systems while providing essential tools for formal reasoning across numerous disciplines.`
   }
 }

 const introContent = {
   id: "intro",
   title: "Introduction to Mathematical Logic Section",
   content: `Mathematical logic studies the principles of reasoning and provides a rigorous framework to analyze the structure of statements and arguments. It begins with the basics of **propositional logic**, where statements are combined using logical operators like **and**, **or**, and **not**, to form compound statements and evaluate their truth.

A deeper layer is **predicate logic**, which extends propositional logic by introducing quantifiers like **for all** and **there exists**, allowing reasoning about objects and their properties. Central to this is the concept of **logical validity**, which examines whether conclusions follow from premises regardless of specific interpretations.

Mathematical logic also explores **formal systems**, which consist of axioms, rules of inference, and symbols for constructing proofs. Key topics include **set theory**, the foundation of mathematics, and **model theory**, which studies the relationship between formal languages and their interpretations.

Another significant area is **computability theory**, which asks fundamental questions about what problems can be solved by algorithms, and **proof theory**, which investigates the nature and structure of mathematical proofs.

Applications of mathematical logic are vast, influencing fields like **computer science**, where it underpins algorithms and programming languages, and **philosophy**, where it sharpens reasoning. It develops skills in abstraction, critical thinking, and formal reasoning, making it a cornerstone of mathematical rigor.`
 }

 const keyWords = [
   'mathematical logic',
   'logic formulas',
   'logic definitions',
   'propositional logic', 
   'predicate logic',
   'formal systems',
   'mathematical proofs',
   'logic tutorial',
   'formal logic'
 ]

 const canonicalUrl = 'https://www.learnmathclass.com/logic'
 const lastModified = new Date().toISOString()

 const pageTitle = "Mathematical Logic - Formulas, Definitions & Concepts | Learn Math Class"
 const pageDescription = "Master mathematical logic with our comprehensive collection of formulas, definitions, and core concepts. Perfect for students and educators."

 const structuredData = {
   "@context": "https://schema.org",
   "@type": "WebPage",
   "name": "Mathematical Logic - Learn Mathematics",
   "description": "Comprehensive guide to mathematical logic including formulas, definitions, and core concepts.",
   "keywords": keyWords.join(", "),
   "url": canonicalUrl,
   "dateModified": lastModified,
   "inLanguage": "en-US",
   "mainEntity": {
     "@type": "Article",
     "name": "Mathematical Logic",
     "dateModified": lastModified,
     "author": {
       "@type": "Organization",
       "name": "Learn Math Class"
     }
   }
 }

 return {
   props: {
     sectionContent,
     logicFormulasList,
     logicTermsList,
     pageTitle,
     pageDescription,
     introContent,
     structuredData,
     keyWords,
     canonicalUrl,
     lastModified
   }
 }
}

export default function LogicPage({
 sectionContent,
 logicFormulasList,
 logicTermsList,
 pageTitle,
 pageDescription,
 introContent,
 structuredData,
 keyWords,
 canonicalUrl,
 lastModified
}) {


  // const tools = [
  //   {
  //     title: "Truth Tables Generator",
  //     description: "Create thruth tables dynamically and examine the results.",
  //     image: "/tools/truth-table-generator.jpg",
  //     link: "/logic/truth-tables"
  //   },
  //   {
  //     title: "Truth Tables",
  //     description: "Browse truth tables. ",
  //     image: "/tools/truth-tables.jpg",
  //     link: "/tables/truth-tables"
  //   },
  //   // {
  //   //   title: "Unit Circle2",
  //   //   description: "2Interactive trigonometry tool",
  //   //   image: "/images/calculus.jpg",
  //   //   link: "/tools/unit-circle1"
  //   // },
  //   ]


  const tools = [
    {
      title: "Truth Tables Generator",
      description: "Build custom truth tables for any logical expression. Enter your own propositions and operators to dynamically generate complete truth tables with step-by-step evaluation.",
      image: "/tools/truth-table-generator.jpg",
      link: "/logic/truth-tables"
    },
    {
      title: "Truth Tables",
      description: "Explore truth tables for all logical operators including AND, OR, XOR, NAND, NOR, and XNOR. See how different combinations of truth values affect logical outcomes with clear explanations.",
      image: "/tools/truth-tables.jpg",
      link: "/tables/truth-tables"
    },
    // {
    //   title: "Unit Circle2",
    //   description: "2Interactive trigonometry tool",
    //   image: "/images/calculus.jpg",
    //   link: "/tools/unit-circle1"
    // },
  ]

 const logicSections = [
   {
     id: 'formulas',
     title: sectionContent.formulas.title,
     link:`/logic/formulas`,
     content: [
       {
         content: sectionContent.formulas.leftContentHtml,
         layout: 'horizontal',
         position: 'left',
         width: 1.5
       },
       {
         content: <VerticalScrollingFormulaWidget
           key="formula-widget"
           formulaData={logicFormulasList}
           moreFormulasLink='/logic/formulas'
         />,
         layout: 'horizontal',
         position: 'right',
         width: 2
       }
     ]
   },
   {
     id: 'definitions',
     title: sectionContent.definitions.title,
     link:`/logic/definitions`,
     content: [
       {
         content: <VerticalScrollingFormulaWidget
           key="definitions-widget" 
           formulaData={logicTermsList}
           moreFormulasLink='/logic/definitions'
           type='definition'
         />,
         layout: 'horizontal',
         position: 'left',
         width: 2
       },
       {
         content: sectionContent.definitions.rightContentHtml,
         layout: 'horizontal',
         position: 'right',
         width: 1.5
       }
     ]
   },
   {
    id: 'propositional_logic',
    title: sectionContent.propositional_logic.title,
    link:`/logic/propositional-logic`,
    content: [
      // `Propositional logic, also known as propositional calculus or sentential logic, forms a foundational sub-field of mathematical logic along with other sub-fields such as first-order logic, higher-order logic, modal logic, intuitionistic logic, temporal logic, set theory, model theory, proof theory, and recursion theory.
      // Propositional logic provides a formal system for representing and analyzing statements that are either true or false.`,
      sectionContent.propositional_logic.intro,
      `\n**It includes**:`,
      <MyList
      key={1}
      data={sectionContent.propositional_logic.list}
      boxed={true} color={'yellow'} compact={true} type={'dot'} width={'700px'}/>,
      
      
      sectionContent.propositional_logic.conclusion
// `* Syntax: The formal structure including propositions (typically represented by variables like p, q, r) and logical connectives (AND, OR, NOT, implies, etc.)
// * Semantics: How we determine truth values using truth tables, and identifying tautologies (always true) and contradictions (always false)
// * Equivalences: Laws like De Morgan's laws, distributive laws, and other equivalences that allow for simplification
// * Inference Rules: Formal rules such as modus ponens, modus tollens, and others that allow for step-by-step proofs
// * Normal Forms: Standard ways to represent logical formulas, like conjunctive normal form (CNF) and disjunctive normal form (DNF)
// * Proof Techniques: Methods like proof by contradiction, direct proof, and truth tables to establish the validity of arguments
// * Applications: Propositional logic is indeed widely used in computer science (for circuit design, program verification), artificial intelligence (knowledge representation, automated reasoning), philosophy (formal analysis of arguments), and many other fields.`,


// `The study of propositional logic establishes the foundation for more complex logical systems while providing essential tools for formal reasoning across numerous disciplines.`
  ] },
 
  {
    id: 'tools',
    title: 'Tools', // Give it a proper title
    // link: '/logic/tools', // Optional
    content: [
      {
        content: <div>
         
          <ToolsSlider tools={tools} key={'slider'}/>
        </div>,
        layout: 'horizontal',
        position: 'center', // or 'left' if you prefer
        width: 8 // full width
      }
    ]
  }
 ]

 return (
   <>
     <Head>
       <title>{pageTitle}</title>
       <meta name="description" content={pageDescription} />
       <meta name="keywords" content={keyWords.join(", ")} />
       <link rel="canonical" href={canonicalUrl} />
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
    
     <main>
       <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
         Mathematical Logic
       </h1>
       <SectionTableOfContents sections={logicSections}/>
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
       <Sections sections={logicSections}/>
       <br/>
       <br/>
       <br/>
       <ScrollUpButton/>
     </main>
   </>
 )
}