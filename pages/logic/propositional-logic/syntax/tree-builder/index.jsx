

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import Head from 'next/head'
// import '../../../../pages.css'
// import PropositionTreeBuilder from '@/app/components/logic-calculator/proposition-tree/PropositionTreeBuilder'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

// export async function getStaticProps() {
//   const keyWords = [
//     'propositional logic', 'propositional calculus', 'sentential logic',
//     'propositional logic syntax', 'logic syntax', 'syntax', 'syntax tree'
//   ]

//   const pageTitle = "Proposition Analyzer & Tree Builder | Learn Math Class"
//   const pageDescription = "Interactive proposition analyzer and syntax tree builder for propositional logic. Parse logical expressions and visualize their syntactic structure with step-by-step analysis."
//   const canonicalUrl = 'https://www.learnmathclass.com/logic/propositional-logic/syntax/tree-builder'
//   const lastModified = new Date().toISOString()

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     "name": "Proposition Analyzer & Tree Builder",
//     "description": pageDescription,
//     "url": canonicalUrl,
//     "applicationCategory": "EducationalApplication",
//     "operatingSystem": "Web Browser",
//     "keywords": keyWords.join(", "),
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     }
//   }

//   const breadcrumbData = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem", 
//         "position": 2,
//         "name": "Logic",
//         "item": "https://www.learnmathclass.com/logic"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3, 
//         "name": "Propositional Logic",
//         "item": "https://www.learnmathclass.com/logic/propositional-logic"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Syntax", 
//         "item": "https://www.learnmathclass.com/logic/propositional-logic/syntax"
//       },
//       {
//         "@type": "ListItem",
//         "position": 5,
//         "name": "Tree Builder",
//         "item": "https://www.learnmathclass.com/logic/propositional-logic/syntax/tree-builder"
//       }
//     ]
//   }

//   return {
//     props: {
//       keyWords,
//       pageTitle,
//       pageDescription,
//       structuredData,
//       breadcrumbData,
//       canonicalUrl
//     }
//   }
// }

// export default function TreeBuilderPage({ 
//   keyWords, 
//   pageTitle, 
//   pageDescription, 
//   structuredData, 
//   breadcrumbData, 
//   canonicalUrl 
// }) {
//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="keywords" content={keyWords.join(', ')} />
//         <link rel="canonical" href={canonicalUrl} />
        
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content={pageTitle} />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:site_name" content="Learn Math Class" />
        
//         <meta name="robots" content="index, follow" />
        
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
//         />
//       </Head>
// {/* 
//       <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar
//         side='right'
//         topOffset='55px'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <Breadcrumb/>
//       <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
//         Proposition Analyzer & Tree Builder
//       </h1>
      
//       <PropositionTreeBuilder/>
      
//       <br/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton/> */}
//     </>
//   )
// }

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import Head from 'next/head'
import '../../../../pages.css'
import PropositionTreeBuilder from '@/app/components/logic-calculator/proposition-tree/PropositionTreeBuilder'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'

export async function getStaticProps() {

  const keyWords = [
    'proposition analyzer',
    'syntax tree builder',
    'propositional logic tool',
    'truth table generator',
    'logical expression parser',
    'proposition tree diagram',
    'logic syntax tree',
    'propositional calculus calculator',
    'truth table calculator',
    'logical connectives tool',
    'tautology checker',
    'contradiction detector',
    'interactive logic analyzer',
    'proposition truth value',
    'logical operators calculator'
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Analyzer`,
      content: `The Proposition Analyzer loads with a default expression so you can see its output immediately. The input field at the top accepts any well-formed **propositional logic** formula built from variables A through Z and standard logical connectives.

Type directly into the input field or use the on-screen keyboard to construct your expression. The analyzer processes input in real time, generating both a syntax tree and a truth table as you type. If your expression contains a syntax error, a descriptive message appears below the input field explaining what went wrong.

Try modifying the default expression or click the clear button to start from scratch. Begin with simple formulas like a single implication before building more complex nested expressions with multiple operators and parentheses.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Using the On-Screen Keyboard`,
      content: `The keyboard is divided into two rows. The top row contains propositional variables A through Z. Click any variable button to insert it at the current cursor position in the input field, not just at the end.

The bottom row holds six logical operator buttons plus parentheses. Hover over any operator to see a tooltip with its full name and a brief description of its behavior:

$\\wedge$ (AND) requires both operands to be true. $\\vee$ (OR) requires at least one. $\\neg$ (NOT) reverses the truth value of a single operand. $\\to$ (IMPLIES) models the if-then relationship. $\\leftrightarrow$ (EQUIVALENT) checks whether both sides share the same truth value. $\\oplus$ (XOR) is true when exactly one operand is true.

Parentheses control grouping and override the default operator precedence. Wrapping a sub-expression in parentheses forces the analyzer to evaluate it first, regardless of the connectives involved.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Understanding the Syntax Tree Display`,
      content: `The syntax tree section renders a hierarchical diagram of your parsed expression. The root node at the top represents the main connective, which is the last operator evaluated when computing the overall truth value.

Each internal node displays the sub-expression it governs along with its operator. Branches descend from each operator to its operands. Leaf nodes at the bottom are individual propositional variables.

Reading the tree from top to bottom reveals evaluation order: the deepest nodes are evaluated first, and results propagate upward until the root produces the final truth value. This structure mirrors the recursive definition of well-formed formulas in **propositional logic** and makes operator precedence visually explicit.

For a negation node, only one branch descends because negation is a unary operator. All other connectives are binary operators and produce two branches, one for the left operand and one for the right.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Truth Table`,
      content: `The truth table lists every possible combination of truth values for the variables in your expression. Each row assigns true (T) or false (F) to every variable, and the final column shows the result of evaluating the entire proposition under that assignment.

Columns are arranged with individual variables on the left and the complete expression on the right. True cells and false cells are color-coded so you can scan results at a glance.

Above the table, a badge automatically classifies the proposition. **Tautology** means the result is true in every row. **Contradiction** means the result is false in every row. **Contingent** means the result depends on the variable assignment. This classification is one of the most useful outputs for checking logical equivalences and verifying arguments.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Tautologies, Contradictions, and Contingencies`,
      content: `A **tautology** is a formula that is true under every possible truth assignment. Classic examples include the law of excluded middle, $P \\vee \\neg P$, and the expression $(P \\to Q) \\leftrightarrow (\\neg P \\vee Q)$. Enter either of these into the analyzer to see the tautology badge appear.

A **contradiction** is the opposite: a formula that is false under every assignment. The simplest contradiction is $P \\wedge \\neg P$. Contradictions are important because any argument whose premises lead to a contradiction contains an inconsistency.

A **contingent** proposition is neither a tautology nor a contradiction. Its truth value changes depending on the assignment. Most everyday logical statements are contingent. Recognizing which category a formula falls into is a fundamental task in **propositional calculus** and is used extensively in proof techniques, circuit design, and automated reasoning.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Input Controls and History`,
      content: `Four control buttons sit alongside the input field. The copy button places the current expression on your clipboard so you can paste it into notes or another tool. A brief checkmark confirms successful copying.

The undo button steps back through your editing history one change at a time. Every keystroke and keyboard-button insertion is recorded, so you can retrace your steps if an edit introduces an error.

The clear button resets the input field to an empty string, giving you a blank slate. This also adds an entry to the history, so you can undo a clear if you change your mind.

The analyze button forces a fresh parse and rebuild of the syntax tree and truth table. Although the analyzer already updates in real time as you type, clicking analyze can be useful after pasting an expression from an external source.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is a Syntax Tree in Logic?`,
      content: `A syntax tree, also called a parse tree or formation tree, is a data structure that represents the grammatical structure of a well-formed formula. In **propositional logic**, every compound proposition can be decomposed into a tree whose internal nodes are logical connectives and whose leaves are atomic propositions.

The tree captures exactly how sub-expressions nest inside one another. Two formulas that look similar as strings, such as $P \\wedge Q \\vee R$ versus $P \\wedge (Q \\vee R)$, produce different trees because their main connectives differ. The tree therefore disambiguates expressions that would otherwise be ambiguous without explicit parentheses.

Syntax trees are foundational in computer science as well. Compilers and interpreters build analogous structures, called abstract syntax trees, when parsing programming languages. Understanding parse trees in logic provides a direct bridge to these computational applications.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Logical Connectives and Operator Precedence`,
      content: `The analyzer follows a standard precedence hierarchy when parentheses are absent. Negation ($\\neg$) binds most tightly with the highest precedence. The binary connectives AND ($\\wedge$), OR ($\\vee$), and XOR ($\\oplus$) share the next level. Implication ($\\to$) and biconditional ($\\leftrightarrow$) have the lowest precedence and are evaluated last.

When two operators share the same precedence level, the analyzer resolves them left to right. For instance, $P \\wedge Q \\wedge R$ is parsed as $(P \\wedge Q) \\wedge R$.

Explicit parentheses always override these defaults. If you are unsure how your expression will be parsed, add parentheses around the sub-expression you want evaluated first. The resulting syntax tree will confirm whether the grouping matches your intention.

Understanding precedence is essential for writing unambiguous logical formulas, especially in formal proofs and digital circuit specifications where incorrect grouping leads to entirely different truth conditions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Common Errors and Troubleshooting`,
      content: `The most frequent error is mismatched parentheses. Every opening parenthesis must have a corresponding closing parenthesis. The analyzer reports this with a clear error message so you can locate the mismatch.

Placing a negation symbol after a variable instead of before it, such as typing $P\\neg$ rather than $\\neg P$, also triggers an error. Negation is a prefix operator and must always precede its operand.

Unknown characters produce an error identifying the offending token and its position. Only uppercase letters A through Z, the six operator symbols, parentheses, and spaces are accepted.

If two binary operators appear next to each other without an operand between them, the parser cannot build a valid tree and will report an invalid expression. Make sure every binary connective has exactly one operand on each side.

When an error appears, read the message carefully. It usually points to the exact position in the input where parsing failed, making it straightforward to correct the issue.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Propositional logic syntax** is the formal grammar that defines which strings count as well-formed formulas. This analyzer applies those rules automatically during parsing.

**Truth tables** are the standard method for determining the truth value of compound propositions. The table generated here covers all $2^n$ rows for $n$ distinct variables.

**Tautologies and contradictions** play central roles in formal proof systems, where identifying logically valid formulas is a prerequisite for constructing sound arguments.

**Logical equivalence** can be tested by entering two expressions connected with the biconditional operator and checking whether the result is a tautology.

**Digital logic design** uses the same connectives to model logic gates. AND, OR, NOT, and XOR gates correspond directly to the operators available in this tool, making it useful for verifying simple circuit behavior.`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const faqQuestions = {
    obj1: {
      question: "What is a proposition syntax tree?",
      answer: "A proposition syntax tree is a hierarchical diagram that breaks a logical expression into its component parts. The root node represents the main connective, branches lead to sub-expressions, and leaf nodes are individual propositional variables. It reveals parsing order and operator precedence visually."
    },
    obj2: {
      question: "What logical operators does the proposition analyzer support?",
      answer: "The analyzer supports six operators: AND (conjunction), OR (disjunction), NOT (negation), IMPLIES (material conditional), EQUIVALENT (biconditional), and XOR (exclusive or). Each can be inserted via the on-screen keyboard, which includes tooltips explaining every operator."
    },
    obj3: {
      question: "How does the truth table generator work?",
      answer: "The generator identifies all propositional variables in your expression, creates every possible true-false combination, and evaluates the expression for each row. It then classifies the overall result as a tautology, contradiction, or contingent proposition based on the pattern of results."
    },
    obj4: {
      question: "What is a tautology in propositional logic?",
      answer: "A tautology is a proposition that evaluates to true under every possible assignment of truth values to its variables. The analyzer detects tautologies automatically by checking all rows of the truth table. If every row produces a true result, the expression receives a tautology badge."
    },
    obj5: {
      question: "How do I enter complex logical expressions?",
      answer: "Use the on-screen keyboard to insert variables A through Z and logical operator symbols. Group sub-expressions with parentheses to control evaluation order. The analyzer parses input in real time and displays error messages if the syntax is invalid, identifying the position of the problem."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Proposition Analyzer & Tree Builder",
      "description": "Build and analyze propositional logic syntax trees with an interactive parser. Generate truth tables, check tautologies, and visualize logical structure.",
      "url": "https://www.learnmathclass.com/logic/propositional-logic/syntax/tree-builder",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Real-time propositional logic parsing with error detection",
        "Interactive syntax tree visualization with hierarchical node display",
        "Automatic truth table generation for all variable combinations",
        "Tautology, contradiction, and contingency classification",
        "On-screen keyboard with 26 variables and 6 logical operators",
        "Expression history with undo and clipboard copy support"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
    },

    breadcrumb: {
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
          "name": "Proposition Analyzer & Tree Builder",
          "item": "https://www.learnmathclass.com/logic/propositional-logic/syntax/tree-builder"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }

  return {
    props: {
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Proposition Analyzer & Tree Builder | Learn Math Class",
        description: "Build and analyze propositional logic syntax trees with an interactive parser. Generate truth tables, check tautologies, and visualize logical structure.",
        keywords: keyWords.join(", "),
        url: "/logic/propositional-logic/syntax/tree-builder",
        name: "Proposition Analyzer & Tree Builder"
      },
    }
  }
}

export default function PropositionTreeBuilderPage({
  seoData,
  sectionsContent,
  faqQuestions,
  schemas
}) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }))

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
        />
      </Head>
      {/* <GenericNavbar/> */}
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
        Proposition Analyzer &amp; Tree Builder
      </h1>

      <PropositionTreeBuilder/>

      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}