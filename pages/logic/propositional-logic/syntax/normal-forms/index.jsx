

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import NormalFormsConverter from '@/app/components/logic-calculator/normal-form-converters/NormalFormsConverter'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../../../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

// export default function NormalFormsPage({dnfExplanations, cnfExplanations, title, description, keywords, canonicalUrl}) {
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta name="keywords" content={keywords} />
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="https://www.learnmathclass.com/images/normal-forms-og.jpg" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={title} />
//         <meta name="twitter:description" content={description} />
//         <meta name="twitter:image" content="https://www.learnmathclass.com/images/normal-forms-og.jpg" />
//         <link rel="canonical" href={canonicalUrl} />
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebApplication",
//             "name": "Normal Forms Converter",
//             "description": description,
//             "url": canonicalUrl,
//             "applicationCategory": "EducationalApplication",
//             "operatingSystem": "Any",
//             "offers": {
//               "@type": "Offer",
//               "price": "0",
//               "priceCurrency": "USD"
//             },
//             "author": {
//               "@type": "Organization",
//               "name": "LearnMathClass",
//               "url": "https://www.learnmathclass.com"
//             }
//           })}
//         </script>
//       </Head>
//       {/* <GenericNavbar/> */}
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
//       <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Normal Forms Converters</h1>
//       <div style={{transform:'scale(0.95)'}}>
//         <NormalFormsConverter
//           dnfExplanations={dnfExplanations}
//           cnfExplanations={cnfExplanations}
//         />
//       </div>
//       <br/>
//       <br/>
//       <br/>
//     </>
//   )
// }

// export async function getStaticProps() {
//   const dnfExplanations = {
//     title: "How DNF Conversion Works:",
//     steps: [
//       "1. Create a truth table for the expression",
//       "2. Find all rows where the expression evaluates to true",
//       "3. For each 'true' row, create a conjunction (AND) of literals that makes that row true:",
//       "   • If a variable is true in the row, use the variable itself",
//       "   • If a variable is false in the row, use the negation of the variable",
//       "4. Join all these conjunctions with OR operations",
//       "5. The resulting expression is in DNF",
//     ]
//   }
  
//   const cnfExplanations = {
//     title: "How CNF Conversion Works:",
//     steps: [
//       "1. Create a truth table for the expression",
//       "2. Find all rows where the expression evaluates to false",
//       "3. For each 'false' row, create a disjunction (OR) of literals that makes that row false:",
//       "   • If a variable is true in the row, use the negation of the variable",
//       "   • If a variable is false in the row, use the variable itself",
//       "4. Join all these disjunctions with AND operations",
//       "5. The resulting expression is in CNF",
//     ]
//   }

//   // SEO metadata
//   const title = "DNF and CNF Converter | Normal Forms in Propositional Logic | LearnMathClass";
//   const description = "Convert logical expressions to Disjunctive Normal Form (DNF) and Conjunctive Normal Form (CNF) with our free online converter. Learn step-by-step conversion methods with clear explanations.";
//   const keywords = "dnf, cnf, normal form, disjunctive normal form, conjunctive normal form, propositional logic, logical expressions, truth table, boolean algebra, logical forms";
//   const canonicalUrl = "https://www.learnmathclass.com/logic/propositional-logic/syntax/normal-forms";

//   return {
//     props: {
//       dnfExplanations,
//       cnfExplanations,
//       title,
//       description,
//       keywords,
//       canonicalUrl
//     }
//   }
// }





import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import NormalFormsConverter from '@/app/components/logic-calculator/normal-form-converters/NormalFormsConverter'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'

export async function getStaticProps() {

  const keyWords = [
    'DNF converter',
    'CNF converter',
    'disjunctive normal form',
    'conjunctive normal form',
    'normal form converter tool',
    'propositional logic normal forms',
    'DNF CNF truth table',
    'convert expression to DNF',
    'convert expression to CNF',
    'boolean normal form calculator',
    'logic expression converter',
    'sum of products',
    'product of sums',
    'interactive normal form tool',
    'propositional logic calculator'
  ]

  const dnfExplanations = {
    title: "How DNF Conversion Works:",
    steps: [
      "1. Create a truth table for the expression",
      "2. Find all rows where the expression evaluates to true",
      "3. For each 'true' row, create a conjunction (AND) of literals that makes that row true:",
      "   • If a variable is true in the row, use the variable itself",
      "   • If a variable is false in the row, use the negation of the variable",
      "4. Join all these conjunctions with OR operations",
      "5. The resulting expression is in DNF",
    ]
  }

  const cnfExplanations = {
    title: "How CNF Conversion Works:",
    steps: [
      "1. Create a truth table for the expression",
      "2. Find all rows where the expression evaluates to false",
      "3. For each 'false' row, create a disjunction (OR) of literals that makes that row false:",
      "   • If a variable is true in the row, use the negation of the variable",
      "   • If a variable is false in the row, use the variable itself",
      "4. Join all these disjunctions with AND operations",
      "5. The resulting expression is in CNF",
    ]
  }

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Converter`,
      content: `The tool opens with two tabs at the top: DNF Converter and CNF Converter. Click either tab to switch modes. Both share the same layout: an input field on the left for your logical expression and a step-by-step explanation panel on the right.

Type your expression directly into the input field using standard logical symbols. The tool accepts lowercase variables (p, q, r, etc.) and five connectives: $\\wedge$ (AND), $\\vee$ (OR), $\\neg$ (NOT), $\\to$ (IMPLIES), and $\\leftrightarrow$ (IFF). You can also type shorthand notation like -> for implication, <-> for biconditional, and ! for negation, which the converter normalizes automatically.

If you prefer not to type symbols manually, click one of the three preset example buttons below the input field: $p \\to q$, $\\neg(p \\wedge q)$, or $p \\wedge (q \\vee r)$. Each loads the expression into the input field so you can convert it immediately or edit it further before converting.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Converting and Reading Results`,
      content: `After entering your expression, click the blue "Convert to DNF" or "Convert to CNF" button depending on the active tab. The tool generates a complete truth table and displays it below the input area.

In DNF mode, rows where the expression evaluates to true are highlighted in green with bold text. An "Include in DNF" column on the right shows "Yes" for these rows. Each included row contributes one minterm to the final DNF expression.

In CNF mode, rows where the expression evaluates to false are highlighted in red with bold text. An "Include in CNF" column shows "Yes" for these rows. Each included row contributes one maxterm to the final CNF expression.

The resulting normal form expression appears below the truth table in a monospace display block. Use the Copy button inside the input field to copy your original expression to the clipboard, or select the result text directly to copy the converted output.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Input Controls and Error Handling`,
      content: `The input field includes two inline controls. The Copy button copies your current expression to the clipboard and briefly changes its label to "Copied!" as confirmation. The X button clears the input field along with any displayed truth table and result, giving you a clean slate.

If your expression contains a syntax error, such as missing parentheses or unrecognized characters, a red error message appears below the example buttons describing the problem. The converter accepts only single uppercase or lowercase letters as variables and the five standard logical connectives. Numbers, multi-character variable names, and unknown symbols will trigger an error.

When no variables are found in the input, the converter reports "No variables found in expression." Check that your input contains at least one alphabetic character representing a propositional variable.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Understanding the Step-by-Step Panel`,
      content: `The right side of each tab displays a panel explaining the conversion algorithm in numbered steps. This panel is always visible and does not change based on your input. It serves as a quick reference so you can follow along as the truth table and result update on the left.

For DNF, the panel explains that the converter finds true rows, builds a conjunction for each, and joins them with OR. For CNF, the panel explains that the converter finds false rows, builds a disjunction for each, and joins them with AND.

The panel also clarifies the literal assignment rule: in DNF, a true variable stays positive and a false variable gets negated. In CNF, the rule is inverted: a true variable gets negated and a false variable stays positive. This inversion is the key difference between how minterms and maxterms are constructed from truth table rows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `How DNF Conversion Works`,
      content: `Disjunctive Normal Form expresses any proposition as an OR of AND-clauses. Each AND-clause is called a **minterm** and contains every variable from the expression exactly once, either in positive or negated form.

The conversion follows a systematic process. First, the converter builds a truth table with $2^n$ rows for $n$ variables. It then identifies every row where the expression evaluates to true. For each true row, it creates a conjunction: variables assigned true appear as themselves, and variables assigned false appear negated. All conjunctions are wrapped in parentheses and joined with the OR operator.

For example, $p \\to q$ has three true rows. Each produces a minterm, and the final DNF is the disjunction of those three minterms. If every row is true, the result is simply "true" (a tautology). If no row is true, the result is "false" (a contradiction).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `How CNF Conversion Works`,
      content: `Conjunctive Normal Form expresses any proposition as an AND of OR-clauses. Each OR-clause is called a **maxterm** and contains every variable exactly once.

The CNF algorithm mirrors DNF but targets false rows. The converter scans the truth table for rows where the expression evaluates to false. For each false row, it builds a disjunction: variables assigned true appear negated, and variables assigned false appear as themselves. All disjunctions are wrapped in parentheses and joined with the AND operator.

Each maxterm eliminates exactly one falsifying assignment. When all maxterms are combined, every false row is excluded, leaving only the true assignments. If no row is false, the result is "true." If every row is false, the result is "false." The output is always logically equivalent to the original expression.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `DNF vs CNF: When to Use Each`,
      content: `Both forms are canonical representations, meaning every propositional formula has a unique equivalent in each form up to reordering of clauses and literals.

**Disjunctive Normal Form** enumerates all scenarios that make a statement true. Each minterm is one satisfying assignment. DNF is commonly used in database query optimization and in describing output conditions for digital systems. In circuit design, DNF corresponds to a sum-of-products implementation.

**Conjunctive Normal Form** enumerates constraints that must all hold simultaneously. CNF is the standard input format for SAT solvers and resolution-based proof systems used in hardware verification, software testing, and AI planning. In circuit design, CNF corresponds to a product-of-sums implementation.

A formula with many true rows produces a long DNF but a short CNF. A formula that is mostly false produces a compact DNF and a lengthy CNF. Choosing the shorter form reduces clause count and simplifies subsequent analysis.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Minterms and Maxterms`,
      content: `A **minterm** is a conjunction of literals where every variable appears exactly once, either positive or negated. Because each variable is fixed to a specific truth value, a minterm is true for exactly one row of the truth table and false for all others. DNF is the disjunction of all minterms corresponding to true rows.

A **maxterm** is a disjunction of literals with the same completeness requirement. A maxterm is false for exactly one row and true for all others. CNF is the conjunction of all maxterms corresponding to false rows.

The number of minterms in the DNF equals the number of true rows. The number of maxterms in the CNF equals the number of false rows. Together they always sum to $2^n$, where $n$ is the number of variables. This duality means you can convert between the two forms by switching which rows you target and swapping the roles of AND and OR.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `What Are Normal Forms in Logic?`,
      content: `A normal form is a standardized way of writing a logical expression so that every formula has exactly one canonical representation. Normal forms eliminate structural ambiguity and make it possible to compare two formulas by comparing their normalized versions.

In **propositional logic**, the two most important normal forms are DNF and CNF. Both require that the expression use only three connectives: AND ($\\wedge$), OR ($\\vee$), and NOT ($\\neg$). Any implication, biconditional, or exclusive-or must first be rewritten using these three operators before the normal form can be constructed. The converter handles this rewriting internally during truth table evaluation.

Normal forms also appear in other areas of mathematics and computer science. Databases use normal forms to organize table structures, and linear algebra uses row echelon form for matrices. The underlying idea is always the same: reduce varied representations to a single standard shape that is easier to analyze.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Propositional logic syntax** defines the grammar rules for building well-formed formulas. Normal form conversion assumes a valid input expression that conforms to these rules.

**Truth tables** are the exhaustive evaluation method that underpins both DNF and CNF construction. The converter builds one internally for every input expression.

**Logical equivalence** means two expressions produce identical truth tables. A formula and its DNF or CNF are always logically equivalent by construction.

**Boolean algebra** provides algebraic laws such as De Morgan's laws and the distributive law that can simplify normal form expressions after conversion.

**SAT solvers** accept CNF as input and determine satisfiability. Converting to CNF is the standard preprocessing step before applying these tools.`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const faqQuestions = {
    obj1: {
      question: "What is Disjunctive Normal Form (DNF)?",
      answer: "DNF is a standardized way of writing a logical expression as an OR of AND-clauses. Each AND-clause, called a minterm, contains every variable exactly once in either positive or negated form. DNF is constructed by identifying all true rows in the truth table and building one minterm per true row."
    },
    obj2: {
      question: "What is Conjunctive Normal Form (CNF)?",
      answer: "CNF is a standardized way of writing a logical expression as an AND of OR-clauses. Each OR-clause, called a maxterm, contains every variable exactly once. CNF is constructed by identifying all false rows in the truth table and building one maxterm per false row."
    },
    obj3: {
      question: "How do you convert a logical expression to DNF?",
      answer: "Generate the complete truth table for the expression. Find every row where the result is true. For each true row, build a conjunction of literals matching the variable assignments. Join all the conjunctions with OR to produce the DNF."
    },
    obj4: {
      question: "What is the difference between DNF and CNF?",
      answer: "DNF is an OR of AND-clauses built from true rows of the truth table, while CNF is an AND of OR-clauses built from false rows. DNF enumerates satisfying assignments directly, whereas CNF enumerates constraints that must all hold. DNF maps to sum-of-products circuits and CNF maps to product-of-sums circuits."
    },
    obj5: {
      question: "Why are normal forms important in computer science?",
      answer: "Normal forms provide canonical representations that make logical formulas easier to compare and analyze. CNF is the standard input for SAT solvers used in hardware verification and AI planning. DNF is used in database query optimization. Both forms map directly to two-level digital logic circuits."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "DNF and CNF Normal Forms Converter",
      "description": "Convert propositional logic expressions to Disjunctive and Conjunctive Normal Form with step-by-step truth table analysis. Free interactive DNF and CNF converter tool.",
      "url": "https://www.learnmathclass.com/logic/propositional-logic/syntax/normal-forms",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Convert any propositional expression to Disjunctive Normal Form",
        "Convert any propositional expression to Conjunctive Normal Form",
        "Truth table with highlighted rows and Include in DNF/CNF column",
        "Three preset example expressions for quick demonstration",
        "Shorthand input normalization for arrows and negation symbols",
        "Copy to clipboard and one-click reset controls"
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
          "name": "DNF and CNF Normal Forms Converter",
          "item": "https://www.learnmathclass.com/logic/propositional-logic/syntax/normal-forms"
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
      dnfExplanations,
      cnfExplanations,
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "DNF & CNF Normal Forms Converter | Learn Math Class",
        description: "Convert logical expressions to Disjunctive and Conjunctive Normal Form with step-by-step truth table analysis. Free interactive DNF and CNF converter tool.",
        keywords: keyWords.join(", "),
        url: "/logic/propositional-logic/syntax/normal-forms",
        name: "DNF and CNF Normal Forms Converter"
      },
    }
  }
}

export default function NormalFormsConverterPage({
  seoData,
  dnfExplanations,
  cnfExplanations,
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Normal Forms Converters</h1>
      <div style={{transform:'scale(0.95)'}}>
        <NormalFormsConverter
          dnfExplanations={dnfExplanations}
          cnfExplanations={cnfExplanations}
        />
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}