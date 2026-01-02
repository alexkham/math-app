
// import TypeWriter from '@/app/components/keyboards/TypeWriter'
// import React from 'react'
// import Head from 'next/head';
// import MultipleTypeWriter from '@/app/components/keyboards/MultipleTypeWriter';
// import NewMultipleTypeWriter from '@/app/components/keyboards/NewMultipleTypeWriter';
// import '../../pages/pages.css'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';

// export default function KeyboardPage(props) {
//   return (
//     <>
//       <Head>
//         <title>Mathematical Keyboard | Interactive Learning Tool</title>
//         <meta name="description" content={props.metaDescription} />
//         <meta name="keywords" content="mathematical keyboard, math symbols, interactive learning, math education" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta charSet="utf-8" />
//         <link rel="canonical" href="https://www.learnmathclass.com/keyboard" />
//         <meta property="og:title" content="Mathematical Keyboard | Interactive Learning Tool" />
//         <meta property="og:description" content={props.metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.learnmathclass.com/keyboard" />
//         <meta property="og:image" content="https://www.learnmathclass.com/images/math-keyboard-og.jpg" />
//         <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
//       </Head>

//       <br/>
//       <br/>
     
    
//        <OperaSidebar 
//               side='right'
//               topOffset='55px' 
//               sidebarWidth='45px'
//               panelWidth='300px'
//               iconColor='white'
//               panelBackgroundColor='#f2f2f2'
//             /> 
//             <Breadcrumb/>
//       <br/>
//       <br/>
     
     
//         <h1 className='title' style={{marginTop:'-50px',marginBottom:'-30px'}}>Mathematical Keyboard</h1>
//         {/* <MultipleTypeWriter /> */}
//         <div style={{transform:'scale(0.95)',margin:'auto',width:'80%'}}>
//         <NewMultipleTypeWriter/>
//         </div>
    
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//     </>
//   )
// }

// export async function getStaticProps() {
//   // Simulating a static metadata fetch. Replace with actual data fetching if necessary.
//   const metaDescription = "Explore our interactive Mathematical Keyboard. Perfect for students, educators, and math enthusiasts to practice and learn mathematical notation.";
  
//   return {
//     props: {
//       metaDescription
//     }
//   };
// }



import React from 'react'
import Head from 'next/head'
import NewMultipleTypeWriter from '@/app/components/keyboards/NewMultipleTypeWriter'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import Sections from '@/app/components/page-components/section/Sections'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../pages/pages.css'

export async function getStaticProps() {
  
  const keyWords = [
    'mathematical keyboard',
    'math symbol keyboard',
    'Greek letter keyboard',
    'interactive math keyboard',
    'type math symbols',
    'mathematical notation tool',
    'subscript superscript keyboard',
    'math symbols online',
    'type Greek letters',
    'mathematical character keyboard',
    'free math keyboard',
    'type math online',
    'mathematical symbols tool',
    'special characters keyboard',
    'math typing tool'
  ]

  const sectionsContent = {
    obj1: {
      title: `Getting Started with the Mathematical Keyboard`,
      content: `Begin by selecting a category from the grid at the top. The **QWERTY Keyboard** provides standard alphanumeric keys plus numbers. Specialized categories like **Arithmetic Symbols**, **Greek Letters**, **Set Theory Symbols**, and others contain mathematical notation specific to those domains. Click any category button to load its keyboard layout in the left panel.

The mode indicator displays your current typing mode: Regular, Subscript, or Superscript. Click symbols to insert them into the text area on the right. Characters appear immediately where your cursor is positioned. You can also type directly into the text area using your physical keyboard.

Hover over any category button to see a tooltip describing what symbols it contains. Hover over mathematical symbols to see brief explanations of their meaning and usage. The interface updates in real-time as you interact with categories and modes.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Selecting Symbol Categories`,
      content: `Categories organize symbols by mathematical domain. **Arithmetic Symbols** includes basic operations: +, −, ×, ÷, =, √. **Greek Letters** provides both lowercase (α, β, γ) and uppercase (Δ, Σ, Ω) variants commonly used in equations and formulas.

**Set Theory Symbols** contains ∈, ⊂, ∪, ∩, ∅ for working with sets. **Relational Operators** includes ≤, ≥, ≈, ≡ for comparisons. **Arrow Symbols** provides →, ⇒, ↔, ⇔ for logical implications and mappings.

Additional categories include **Brackets** (parentheses, braces, angle brackets), **Binary Operators** (∧, ∨, ⊕), **N-ary Operators** (∑, ∫, ∏), **Math Letter-like Symbols** (ℝ, ℕ, ℤ), **Trigonometry Symbols**, **Combinatorics Symbols**, **Probability Symbols**, **Geometry Symbols**, and **Negation Symbols**.

Click a category to switch keyboards instantly. The active category appears highlighted with a blue background. You can switch categories at any time without losing your typed content.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Using Regular, Subscript, and Superscript Modes`,
      content: `Three mode buttons sit above the text area: Regular, Subscript, and Superscript. Click a mode button to activate it—the active mode shows a checkmark and blue background. The mode indicator at the top displays your current selection.

In **Regular mode**, all symbols insert at normal baseline height. This is the default mode for most mathematical notation. Switch to **Subscript mode** to type characters that appear below the baseline, like indices in $x_1$, $x_2$, or chemical formulas. Switch to **Superscript mode** for exponents and powers like $x^2$, $n^3$, or footnote markers.

The mode applies to all characters you click or type until you switch modes again. Common workflow: type a variable in Regular mode, switch to Superscript for the exponent, then return to Regular for the next term. This works with both symbol buttons and direct keyboard typing.

Numbers, letters, and many symbols have subscript and superscript variants. If a character lacks a subscript/superscript form, it inserts as regular text.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Inserting Symbols by Clicking`,
      content: `Click any symbol button to insert that character into the text area. The symbol appears at your cursor position. If you've selected text, the symbol replaces the selection. Click multiple symbols in sequence to build expressions.

Special function keys appear as labeled buttons: **space** inserts a space character, **enter** creates a new line, **backspace** deletes the character before the cursor, **caps** toggles capitalization for letter keys (QWERTY only), **done** closes the keyboard without action.

Symbol buttons show visual feedback on hover—they scale slightly larger and change color. Function buttons (space, enter, backspace) use blue backgrounds to distinguish them from symbol keys. Each click focuses the text area automatically so typing continues smoothly.

When hovering over mathematical symbols, a tooltip may appear showing the symbol's name or meaning. This helps identify unfamiliar notation before inserting it.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `Typing in the Text Area`,
      content: `The large text area on the right accepts both clicked symbols and direct keyboard input. Click inside to focus it, then type normally using your physical keyboard. The text area supports standard text editing: select text by dragging, use arrow keys to move the cursor, hold Shift while arrowing to select, use Ctrl+A (Cmd+A on Mac) to select all.

Your current mode (Regular, Subscript, Superscript) affects characters typed from your keyboard just like clicked symbols. Type "x2" in Superscript mode and both characters become superscripted. Switch modes mid-typing to mix normal and superscript text.

The text area displays a monospace font for consistent character spacing, especially important when aligning subscripts and superscripts. The placeholder text "Click symbols to insert, or type directly..." disappears when you start typing.

Text wraps automatically at the right edge. Use Enter to create explicit line breaks for multi-line expressions or separate equations. The text area scrolls vertically when content exceeds visible height.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Managing Your Content`,
      content: `Two action buttons sit below the text area. **Copy to Clipboard** copies all text area content to your system clipboard. After clicking, paste into any application using Ctrl+V (Cmd+V on Mac). The copied text includes all symbols and formatting from your session.

**Clear** erases all content from the text area instantly. Use this to start fresh without manually deleting text. There's no undo for Clear, so copy important content first if you want to save it.

Both buttons provide visual feedback on hover: they lift slightly and brighten their color. Copy uses a blue gradient, Clear uses red to signal destructive action. Click either button and the text area refocuses automatically for continued typing.

You can copy and clear as many times as needed during a session. Content persists while the page stays open but doesn't save between page refreshes—copy anything important before leaving.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `QWERTY Keyboard Layout`,
      content: `The **QWERTY Keyboard** category provides a familiar layout matching standard keyboards. Top row contains numbers 1-0 plus a two-column backspace button. Second row has letters Q-P. Third row starts with a two-column caps button, includes letters A-L, and ends with a two-column enter button. Fourth row has letters Z-M plus punctuation , . ?

Bottom row features a four-column space button and a done button. This layout works exactly like your physical keyboard but with clickable buttons. Use it for typing variables, words, or mixing letters with mathematical symbols from other categories.

Caps lock toggles between lowercase and uppercase for letter keys. When active, letters insert capitalized. Caps affects only letters, not numbers or punctuation. Click caps again to deactivate.

The QWERTY layout integrates with mode selection: type in Superscript mode and your letters become superscripted. Switch categories to access mathematical symbols, then return to QWERTY for more alphanumeric input.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Working with Greek Letters`,
      content: `The **Greek Letters** category contains the full Greek alphabet in both lowercase and uppercase forms. Lowercase includes α (alpha), β (beta), γ (gamma), δ (delta), ε (epsilon), θ (theta), λ (lambda), μ (mu), π (pi), σ (sigma), φ (phi), ψ (psi), ω (omega), and more.

Uppercase variants include Δ (Delta), Σ (Sigma), Π (Pi), Ω (Omega), Φ (Phi), Ψ (Psi), Γ (Gamma), Λ (Lambda), and others. Greek letters appear frequently in mathematics, physics, and engineering for variables, constants, angles, and special functions.

Click any Greek letter to insert it into your text. Use Regular mode for standard-sized letters, Subscript for indices like $θ_1$, or Superscript for exponents. Combine Greek letters with other categories: type π from Greek Letters, switch to Arithmetic Symbols for ×, return to QWERTY for "r", then Arithmetic for "2" in superscript mode to build πr².

Greek letters integrate seamlessly with all keyboard modes and categories. Hover over unfamiliar symbols to see their names in tooltips.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Related Mathematical Tools`,
      content: `**Math Symbols Reference** provides a comprehensive database of mathematical notation organized by category with LaTeX codes and explanations. Browse hundreds of symbols with their proper names and usage contexts.

**Mathematical Notation Guide** explains how to properly format expressions, use spacing conventions, and follow standard typesetting rules. Essential for creating professional-looking mathematical documents.

**LaTeX Math Mode** documentation shows how to convert keyboard-generated text into proper LaTeX notation. Many symbols insert as Unicode that can be copied into LaTeX documents or converted using reference tables.

**Equation Editors** like the **Formula Builder Tool** offer WYSIWYG interfaces for complex equations. Combine with this keyboard for quick symbol insertion into longer expressions.

**Symbol Search Tools** let you find unfamiliar notation by description or appearance. Useful when you recognize a symbol but don't know its category or name.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Keyboard Features and Interface Elements`,
      content: `The interface divides into three main sections. The **category selector** at the top displays all available keyboards as clickable buttons plus a mode indicator showing current typing mode. Categories organize into a responsive grid that adjusts to screen width.

The **keyboard panel** on the left shows the active category's symbols as clickable buttons. Symbol keys appear in white with subtle borders, while function keys (space, enter, backspace) use blue backgrounds. The panel scrolls vertically if categories contain many symbols.

The **text area panel** on the right includes mode buttons, the main typing area, and action buttons. Mode buttons let you switch between Regular, Subscript, and Superscript. The text area accepts both clicks and keyboard input. Copy and Clear buttons sit at the bottom.

Hover effects provide feedback: buttons scale up and change color when your mouse moves over them. Tooltips appear above symbols showing names or descriptions. The active category highlights in blue, and the active mode shows a checkmark.

The interface maintains consistent spacing and alignment across all categories. Button sizes standardize for reliable clicking on both desktop and touch devices.`,
      before: ``,
      after: ``,
      link: '',
    },
  }
  
  const faqQuestions = {
    obj1: {
      question: "How do I type subscripts and superscripts?",
      answer: "Click one of the three mode buttons above the text area: Regular, Subscript, or Superscript. Once you select a mode, all characters you click or type will appear in that format. Switch back to Regular mode when you want normal text again."
    },
    obj2: {
      question: "Can I use my physical keyboard instead of clicking symbols?",
      answer: "Yes. Click inside the text area to focus it, then type normally using your keyboard. The current mode (Regular, Subscript, Superscript) applies to your typed characters just like clicked symbols. You can mix keyboard typing with symbol clicking freely."
    },
    obj3: {
      question: "What's the difference between the symbol categories?",
      answer: "Each category contains symbols for a specific mathematical domain. Arithmetic has basic operations, Greek Letters has α β γ, Set Theory has ∈ ∪ ∩, and so on. Click any category button to load that keyboard and see what symbols it includes."
    },
    obj4: {
      question: "Does my text save between sessions?",
      answer: "No, the text area clears when you refresh or close the page. Use the Copy to Clipboard button to save your work before leaving. Paste the copied text into a document or note-taking app for permanent storage."
    },
    obj5: {
      question: "How do I find a specific mathematical symbol?",
      answer: "Hover over category buttons to see tooltips describing their contents. Click categories to browse their symbols. Many symbols show explanatory tooltips when you hover over them. If you're unsure which category contains a symbol, check related math notation references."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Mathematical Keyboard",
      "description": "Type mathematical symbols, Greek letters, and special characters with specialized keyboard layouts and subscript/superscript modes. Free online tool for students and educators.",
      "url": "https://www.learnmathclass.com/keyboard",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Multiple specialized keyboard layouts for different mathematical domains",
        "QWERTY keyboard plus 17 symbol category keyboards",
        "Regular, subscript, and superscript typing modes",
        "Real-time symbol insertion with hover tooltips",
        "Direct keyboard typing support with mode awareness",
        "Copy to clipboard functionality",
        "Categories include arithmetic, Greek letters, set theory, logic, calculus, and more"
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
      "educationalLevel": "Middle School, High School, College",
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
          "name": "Mathematical Keyboard",
          "item": "https://www.learnmathclass.com/keyboard"
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

  const introContent = {
    id: "intro",
    title: "Interactive Mathematical Keyboard",
    content: `This mathematical keyboard provides instant access to hundreds of specialized symbols organized by mathematical domain. Select from 18 different keyboard layouts including standard QWERTY, Greek letters, arithmetic operators, set theory notation, calculus symbols, logic operators, and more. Each category contains symbols specific to its field, letting you quickly find and insert the notation you need.

Three typing modes—Regular, Subscript, and Superscript—work across all keyboards. Switch modes to create properly formatted mathematical expressions with indices, exponents, and standard baseline text. Click symbols to insert them, or type directly using your physical keyboard while the active mode controls formatting.

The interface combines click-based symbol insertion with direct keyboard typing. Hover over symbols for explanatory tooltips. Copy your completed text to the clipboard for use in documents, emails, or other applications. The tool requires no installation and works in any modern web browser.`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Mathematical Keyboard | Type Math Symbols & Greek Letters",
        description: "Type mathematical symbols, Greek letters, and special characters instantly. 18 specialized keyboards with subscript/superscript modes. Free online tool for students and educators.",
        keywords: keyWords.join(", "),
        url: "/keyboard",
        name: "Interactive Mathematical Keyboard"
      }
    }
  }
}

export default function KeyboardPage({ seoData, sectionsContent, introContent, faqQuestions, schemas }) {
  
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
        <meta charSet="utf-8" />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        
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

      <br/>
      <br/>
      
      
      <OperaSidebar 
        side='right'
        topOffset='55px' 
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      
      <Breadcrumb/>
      
     
      
      
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'-20px'}}>Mathematical Keyboard</h1>
       <div style={{transform:'scale(0.95)',margin:'auto',width:'80%'}}>
        <NewMultipleTypeWriter/>
      </div>
      <br/>
      
      <SectionTableOfContents sections={genericSections}/>
      
      <br/>
      <br/>
      
      {/* <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
      
      <br/>
      <br/>
      
     
      
      <br/>
      <br/>
      
      <Sections sections={genericSections}/>
      
      <br/>
      <br/>
      <br/>
    </>
  )
}