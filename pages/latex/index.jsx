// // import React from 'react'
// // import Breadcrumb from '../../app/components/breadcrumb/Breadcrumb'
// // import '@/pages/pages.css'



// // export default function index() {
// //   return (
// // <>
// // <br/>
// // <br/>
// // <Breadcrumb/>
// // <br/>
// // <h1 className='title'>Latex Mathematical Format</h1>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>

// // </>

// // )
// // }




// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FeatureCard from '@/app/components/page-components/new-layout/FeatureCard'
// import CardGrid from '@/app/components/page-components/new-layout/CardGrid'
// import CalloutBlockGroup from '@/app/components/page-components/new-layout/CalloutBlockGroup'
// import Accordion from '@/app/components/page-components/new-layout/Accordion'


// export async function getStaticProps() {

//   const keyWords = [
//     'latex',
//     'latex math',
//     'latex mathematical format',
//     'latex notation',
//     'math typesetting',
//     'latex editor',
//     'latex symbols',
//     'latex commands',
//     'latex fractions',
//     'latex matrices',
//     'latex integrals',
//     'latex greek letters',
//     'write math online',
//     'math formula notation',
//     'latex reference',
//   ]


//   const sectionsContent = {

//     obj0: {
//       title: `Key Terms`,
//       content: `**LaTeX** - A typesetting system for mathematics and technical writing where expressions are written as plain text using backslash-prefixed commands.

// **Command** - A backslash-prefixed token that produces a symbol or structure. Examples: @[\\alpha]@, @[\\sqrt]@, @[\\sum]@, @[\\frac]@.

// **Argument** - The content a command operates on, enclosed in braces. The fraction @[\\frac{1}{2}]@ has two arguments: the numerator @[1]@ and the denominator @[2]@.

// **Grouping** - Wrapping multiple characters in braces so a command treats them as a single unit. @[x^{2n}]@ raises x to the 2n, while @[x^2n]@ raises only to 2.

// **Environment** - A block opened with @[\\begin{name}]@ and closed with @[\\end{name}]@, used for matrices, aligned equations, cases, and arrays.

// **Subscript and Superscript** - Indices attached with @[_]@ and @[^]@. The same syntax sets summation bounds, integral limits, and tensor indices.

// **Delimiter** - A bracket-like symbol such as a parenthesis, square bracket, or absolute value bar. The @[\\left]@ and @[\\right]@ commands make delimiters scale with their content.

// **Operator** - A named function like @[\\sin]@, @[\\log]@, @[\\lim]@, or @[\\max]@. Operators render in upright type and accept subscripts as limits.

// **Accent** - A decoration attached above a symbol, such as @[\\hat{x}]@ for a hat or @[\\bar{x}]@ for a bar.

// **Math Mode** - The state in which LaTeX interprets text as mathematics. Inline math is wrapped in @[$...$]@; displayed math uses @[$$...$$]@ or environments like @[equation]@ and @[align]@.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj1: {
//       title: `What is LaTeX?`,
//       content: `LaTeX is a typesetting system for mathematics and technical writing. Math expressions are written as plain text using backslash-prefixed commands - the fraction one over two is @[\\frac{1}{2}]@, the integral from zero to one is @[\\int_0^1]@. The source is portable, version-controllable, and is the standard format for scientific publishing.

// This section indexes everything on the site that helps you read, write, and look up LaTeX math notation - a live editor, structured references, and the notation blocks embedded throughout the topic pages.

// Below: a working editor, an overview of how math is encoded, eight common structures with dedicated reference pages, symbol catalogs by mathematical domain, cross-links to notation blocks on topic pages, and a quick-reference accordion of everyday patterns.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj2: {
//       title: `How math is encoded`,
//       content: `Four building blocks cover almost every LaTeX expression.

// **Commands** begin with a backslash and name a symbol or operation: @[\\alpha]@ produces the Greek letter alpha, @[\\sqrt]@ a square root, @[\\sum]@ a summation sign. Hundreds of commands exist, but a few dozen cover most everyday writing.

// **Grouping** with braces tells LaTeX what belongs together. @[x^{2n}]@ raises x to the power 2n, while @[x^2n]@ raises only to 2 and treats the n as a separate factor. Whenever an argument is more than one character, wrap it in braces.

// **Subscripts and superscripts** attach with @[^]@ for superscripts and @[_]@ for subscripts. The same syntax sets summation bounds, integral limits, and tensor indices: $\\sum_{i=1}^{n} x_i$, $\\int_0^\\infty e^{-x} dx$, $T^{\\mu\\nu}_{\\alpha\\beta}$.

// **Environments** wrap content that needs special handling. Matrices use @[\\begin{bmatrix} ... \\end{bmatrix}]@, multi-line equations use @[\\begin{align} ... \\end{align}]@, piecewise definitions use @[\\begin{cases} ... \\end{cases}]@. Inside, ampersand separates columns and double-backslash separates rows.

// These four mechanisms compose freely - a fraction whose numerator is a square root whose argument is a sum whose terms are exponentials is just nesting commands and arguments to whatever depth the expression needs.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj3: {
//       title: `Try the editor`,
//       content: ``,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj4: {
//       title: `Common structures`,
//       content: `Each structure below has a dedicated page with full syntax, variants, and worked examples.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj5: {
//       title: `Symbols by mathematical domain`,
//       content: `Symbol catalogs organized by topic. Each one pairs the rendered symbol with its LaTeX command, grouped into categories specific to that domain.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj6: {
//       title: `LaTeX notation across the site`,
//       content: `Many topic pages include a dedicated notation block showing the formal LaTeX for that concept - definitions, distributions, theorems, and identities written in publication-ready form.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj7: {
//       title: `Quick reference`,
//       content: `Patterns that cover most everyday math typesetting.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj8: {
//       title: `Related tools`,
//       content: `The [math symbols catalogs](!/math-symbols) map every symbol to its LaTeX command, organized by domain. The [tables section](!/tables) collects formula and identity references in compact LaTeX-rendered grids. The [interactive editor](!/latex/editor) sits at the heart of this section - click symbols, build expressions across multiple lines, and copy the source when ready.

// For deeper notation on specific topics, every domain section ($\\textit{probability}$, $\\textit{set theory}$, $\\textit{linear algebra}$, and others) includes pages whose notation blocks are written and rendered in LaTeX directly. Pair this hub with any of them when you need to write something you have only seen rendered, not coded.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj9: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj10: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj15: { title: ``, content: ``, before: ``, after: ``, link: '' },

//   }


//   const editorFeature = {
//     title: 'Interactive LaTeX editor',
//     description: 'Build formulas visually. Click symbols to insert fractions, roots, integrals, and matrices across multiple equation lines. The combined source updates live and copies to the clipboard with one click.',
//     icon: 'math-function',
//     iconColor: '#0C447C',
//     iconBackgroundColor: '#E6F1FB',
//     link: { label: 'Open editor', url: '/latex/editor' },
//   }


//   const structureCards = [
//     {
//       preview: `$\\dfrac{a}{b}$`,
//       title: 'Fractions',
//       caption: '\\frac{a}{b}',
//       link: { label: '', url: '/latex/fractions' },
//     },
//     {
//       preview: `$\\sqrt{x}$`,
//       title: 'Roots',
//       caption: '\\sqrt{x}',
//       link: { label: '', url: '/latex/roots' },
//     },
//     {
//       preview: `$\\int_a^b f(x)\\,dx$`,
//       title: 'Integrals',
//       caption: '\\int f(x) dx',
//       link: { label: '', url: '/latex/integrals' },
//     },
//     {
//       preview: `$\\sum_{i=1}^{n} x_i$`,
//       title: 'Sums',
//       caption: '\\sum x_i',
//       link: { label: '', url: '/latex/sums-and-products' },
//     },
//     {
//       preview: `$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$`,
//       title: 'Matrices',
//       caption: '\\begin{bmatrix}',
//       link: { label: '', url: '/latex/matrices' },
//     },
//     {
//       preview: `$\\alpha\\;\\beta\\;\\gamma$`,
//       title: 'Greek letters',
//       caption: '\\alpha \\beta \\gamma',
//       link: { label: '', url: '/latex/greek-letters' },
//     },
//     {
//       preview: `$\\left( \\dfrac{x}{y} \\right)$`,
//       title: 'Delimiters',
//       caption: '\\left( \\right)',
//       link: { label: '', url: '/latex/delimiters' },
//     },
//     {
//       preview: `$\\hat{x}\\;\\bar{x}\\;\\vec{x}$`,
//       title: 'Accents',
//       caption: '\\hat{x} \\bar{x}',
//       link: { label: '', url: '/latex/accents-and-decorations' },
//     },
//   ]


//   const symbolDomainBlocks = [
//     {
//       label: 'Algebra',
//       content: `Variables, operators, equality, exponents, radicals, and absolute value notation.`,
//       link: { label: '', url: '/math-symbols/algebra' },
//       backgroundColor: '#F1EFE8',
//       borderColor: '#5F5E5A',
//       textColor: '#444441',
//       labelColor: '#5F5E5A',
//     },
//     {
//       label: 'Calculus',
//       content: `Derivatives ($\\frac{d}{dx}$, $\\partial$), integrals ($\\int$), limits, gradients ($\\nabla$), and infinity.`,
//       link: { label: '', url: '/math-symbols/calculus' },
//       backgroundColor: '#FAECE7',
//       borderColor: '#993C1D',
//       textColor: '#712B13',
//       labelColor: '#993C1D',
//     },
//     {
//       label: 'Set theory',
//       content: `Membership ($\\in$), unions ($\\cup$), intersections ($\\cap$), subsets, and empty set ($\\emptyset$).`,
//       link: { label: '', url: '/math-symbols/set-theory' },
//       backgroundColor: '#E1F5EE',
//       borderColor: '#0F6E56',
//       textColor: '#085041',
//       labelColor: '#0F6E56',
//     },
//     {
//       label: 'Math logic',
//       content: `Quantifiers ($\\forall$, $\\exists$), connectives ($\\land$, $\\lor$, $\\neg$), and implication arrows.`,
//       link: { label: '', url: '/math-symbols/math-logic' },
//       backgroundColor: '#EAF3DE',
//       borderColor: '#3B6D11',
//       textColor: '#27500A',
//       labelColor: '#3B6D11',
//     },
//     {
//       label: 'Linear algebra',
//       content: `Matrices, transpose ($A^T$), determinants, eigenvalues ($\\lambda$), and tensor products ($\\otimes$).`,
//       link: { label: '', url: '/math-symbols/linear-algebra' },
//       backgroundColor: '#EEEDFE',
//       borderColor: '#534AB7',
//       textColor: '#3C3489',
//       labelColor: '#534AB7',
//     },
//     {
//       label: 'Probability',
//       content: `Probability ($P(A)$), expectation ($\\mathbb{E}[X]$), variance ($\\sigma^2$), and distribution symbols.`,
//       link: { label: '', url: '/math-symbols/probability' },
//       backgroundColor: '#E6F1FB',
//       borderColor: '#185FA5',
//       textColor: '#0C447C',
//       labelColor: '#185FA5',
//     },
//     {
//       label: 'Combinatorics',
//       content: `Factorials ($n!$), binomial coefficients ($\\binom{n}{k}$), permutations, and combinations.`,
//       link: { label: '', url: '/math-symbols/combinatorics' },
//       backgroundColor: '#FAEEDA',
//       borderColor: '#854F0B',
//       textColor: '#633806',
//       labelColor: '#854F0B',
//     },
//     {
//       label: 'Trigonometry',
//       content: `Trigonometric functions ($\\sin$, $\\cos$, $\\tan$), angles ($\\theta$), and degree notation.`,
//       link: { label: '', url: '/math-symbols/trigonometry' },
//       backgroundColor: '#FBEAF0',
//       borderColor: '#993556',
//       textColor: '#72243E',
//       labelColor: '#993556',
//     },
//     {
//       label: 'Complex numbers',
//       content: `Imaginary unit ($i$), modulus ($|z|$), argument ($\\arg z$), conjugate ($\\bar{z}$), and number sets.`,
//       link: { label: '', url: '/math-symbols/complex-numbers' },
//       backgroundColor: '#E6F1FB',
//       borderColor: '#185FA5',
//       textColor: '#0C447C',
//       labelColor: '#185FA5',
//     },
//   ]


//   const notationCrossLinks = [
//     {
//       label: 'Probability',
//       content: `[Normal distribution notation](!/probability/normal-distribution) &middot; [Binomial PMF](!/probability/binomial-distribution) &middot; [Distribution symbols](!/probability/definitions)`,
//       backgroundColor: '#E6F1FB',
//       borderColor: '#185FA5',
//       textColor: '#0C447C',
//       labelColor: '#185FA5',
//     },
//     {
//       label: 'Set theory',
//       content: `[Set builder notation](!/set-theory/set-builder-notation) &middot; [Cardinality](!/set-theory/cardinality) &middot; [Set operations](!/set-theory/set-operations)`,
//       backgroundColor: '#E1F5EE',
//       borderColor: '#0F6E56',
//       textColor: '#085041',
//       labelColor: '#0F6E56',
//     },
//     {
//       label: 'Linear algebra',
//       content: `[Matrix notation](!/linear-algebra/matrices) &middot; [Vector notation](!/linear-algebra/vectors) &middot; [Determinants](!/linear-algebra/determinants)`,
//       backgroundColor: '#EEEDFE',
//       borderColor: '#534AB7',
//       textColor: '#3C3489',
//       labelColor: '#534AB7',
//     },
//     {
//       label: 'Calculus',
//       content: `[Derivative notation](!/calculus/derivatives) &middot; [Integral notation](!/calculus/integrals) &middot; [Limit notation](!/calculus/limits)`,
//       backgroundColor: '#FAECE7',
//       borderColor: '#993C1D',
//       textColor: '#712B13',
//       labelColor: '#993C1D',
//     },
//     {
//       label: 'Complex numbers',
//       content: `[Polar form](!/complex-numbers/polar-form) &middot; [Modulus and argument](!/complex-numbers/modulus-argument) &middot; [Complex notation](!/complex-numbers/definitions)`,
//       backgroundColor: '#FBEAF0',
//       borderColor: '#993556',
//       textColor: '#72243E',
//       labelColor: '#993556',
//     },
//     {
//       label: 'Combinatorics',
//       content: `[Binomial coefficient](!/combinatorics/binomial-coefficient) &middot; [Permutations](!/combinatorics/permutations) &middot; [Counting principles](!/combinatorics/counting-principles)`,
//       backgroundColor: '#FAEEDA',
//       borderColor: '#854F0B',
//       textColor: '#633806',
//       labelColor: '#854F0B',
//     },
//   ]


//   const quickReferenceItems = [
//     {
//       title: 'Subscripts and superscripts',
//       content: `Use @[_]@ for subscript and @[^]@ for superscript. Wrap multi-character indices in braces: @[x_{ij}]@ renders as $x_{ij}$, while @[x_ij]@ renders as $x_ij$ - only the i is subscripted. The same syntax sets summation bounds and integral limits.`,
//       open: true,
//     },
//     {
//       title: 'Fractions and roots',
//       content: `Use @[\\frac{num}{den}]@ for inline fractions and @[\\dfrac{num}{den}]@ for display-size fractions in running text. Square roots are @[\\sqrt{x}]@; n-th roots use the optional bracket argument: @[\\sqrt[n]{x}]@ for $\\sqrt[n]{x}$. Fractions nest freely - $\\dfrac{1}{1+\\dfrac{1}{x}}$.`,
//     },
//     {
//       title: 'Sums, products, and integrals',
//       content: `Sums use @[\\sum]@, products @[\\prod]@, integrals @[\\int]@. Limits attach as subscript and superscript: @[\\sum_{i=1}^{n}]@ for $\\sum_{i=1}^{n}$. Multiple integrals stack the command: @[\\iint]@, @[\\iiint]@, @[\\oint]@ for line integrals.`,
//     },
//     {
//       title: 'Greek letters',
//       content: `Lowercase Greek is @[\\letter]@ - @[\\alpha]@, @[\\beta]@, @[\\pi]@ for $\\alpha, \\beta, \\pi$. Uppercase Greek capitalizes the first letter: @[\\Gamma]@, @[\\Sigma]@, @[\\Omega]@ for $\\Gamma, \\Sigma, \\Omega$. Letters that look identical to Latin (uppercase alpha, beta, etc.) are not aliased; use the Latin letter.`,
//     },
//     {
//       title: 'Matrices and arrays',
//       content: `Inside @[\\begin{bmatrix} ... \\end{bmatrix}]@ (square brackets), @[pmatrix]@ (parentheses), or @[vmatrix]@ (vertical bars for determinants), use ampersand to separate columns and double-backslash to separate rows. Example: @[\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}]@ produces $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$.`,
//     },
//     {
//       title: 'Delimiters that scale',
//       content: `Bare @[()]@ stay small. Use @[\\left(]@ and @[\\right)]@ to make parentheses grow with their content: @[\\left( \\dfrac{a}{b} \\right)]@ for $\\left( \\dfrac{a}{b} \\right)$. The pairing applies to brackets, braces, absolute value bars, angle brackets, and ceiling/floor symbols.`,
//     },
//     {
//       title: 'Operators and functions',
//       content: `Common functions like sine, cosine, log, and limit have dedicated commands that render upright: @[\\sin x]@, @[\\cos x]@, @[\\log x]@, @[\\lim_{x\\to 0}]@ produce $\\sin x$, $\\cos x$, $\\log x$, $\\lim_{x\\to 0}$. For custom upright operators, use @[\\operatorname{name}]@.`,
//     },
//   ]


//   return {
//     props: {
//       sectionsContent,
//       editorFeature,
//       structureCards,
//       symbolDomainBlocks,
//       notationCrossLinks,
//       quickReferenceItems,
//       seoData: {
//         title: "LaTeX Mathematical Format: Editor, Symbols, Notation | Learn Math Class",
//         description: "A live LaTeX editor, references for fractions, roots, integrals, matrices, Greek letters, and cross-links to symbol catalogs and notation blocks across every math topic.",
//         keywords: keyWords.join(", "),
//         url: "/latex",
//         name: "LaTeX Mathematical Format",
//       },
//     }
//   }
// }


// export default function LatexHubPage({
//   seoData,
//   sectionsContent,
//   editorFeature,
//   structureCards,
//   symbolDomainBlocks,
//   notationCrossLinks,
//   quickReferenceItems,
// }) {


//   const genericSections = [
//     { id: '1', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [sectionsContent.obj1.content] },
//     { id: '2', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [sectionsContent.obj2.content] },
//     { id: '3', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [sectionsContent.obj3.content] },
//     { id: '4', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [sectionsContent.obj4.content] },
//     { id: '5', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [sectionsContent.obj5.content] },
//     { id: '6', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [sectionsContent.obj6.content] },
//     { id: '7', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [sectionsContent.obj7.content] },
//     { id: '0', title: sectionsContent.obj0.title, link: sectionsContent.obj0.link, content: [sectionsContent.obj0.content] },
//     { id: '8', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
//   ]


//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Learn Math Class" />

//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />

//         <meta name="robots" content="index, follow" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": seoData.name,
//               "description": seoData.description,
//               "keywords": seoData.keywords,
//               "url": `https://www.learnmathclass.com${seoData.url}`,
//               "dateModified": new Date().toISOString(),
//               "inLanguage": "en-US",
//               "mainEntity": {
//                 "@type": "Article",
//                 "name": seoData.name,
//                 "dateModified": new Date().toISOString(),
//                 "author": {
//                   "@type": "Organization",
//                   "name": "Learn Math Class"
//                 }
//               }
//             })
//           }}
//         />
//       </Head>

//       <br />
//       <br />
//       <br />
//       <br />

//       <OperaSidebar
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />

//       <Breadcrumb />
//       <br />
//       <br />
//       <h1 className='title' style={{ marginTop: '0px', marginBottom: '0px' }}>Latex Mathematical Format</h1>
//       <br />
//       <br />

//       <SectionTableOfContents
//         sections={genericSections}
//         showSecondaryNav={true}
//         secondaryNavMode="siblings"
//         secondaryNavTitle="More in this Section"
//       />

//       <br />
//       <br />
//       <br />

//       {/* Section 1: What is LaTeX? */}
//       <Sections sections={[genericSections[0]]} />

//       <br />

//       {/* Section 2: How math is encoded */}
//       <Sections sections={[genericSections[1]]} />

//       <br />

//       {/* Section 3: Try the editor */}
//       <div id="3" style={{ width: '80%', margin: '0 auto' }}>
//         <h2 style={{ marginBottom: '8px' }}>{sectionsContent.obj3.title}</h2>
//         <FeatureCard
//           title={editorFeature.title}
//           description={editorFeature.description}
//           icon={editorFeature.icon}
//           iconColor={editorFeature.iconColor}
//           iconBackgroundColor={editorFeature.iconBackgroundColor}
//           link={editorFeature.link}
//         />
//       </div>

//       <br />

//       {/* Section 4: Common structures */}
//       <div id="4" style={{ width: '80%', margin: '0 auto' }}>
//         <h2 style={{ marginBottom: '8px' }}>{sectionsContent.obj4.title}</h2>
//         <p style={{ color: '#4b5563', lineHeight: 1.7 }}>{sectionsContent.obj4.content}</p>
//         <CardGrid cards={structureCards} />
//       </div>

//       <br />

//       {/* Section 5: Symbols by mathematical domain */}
//       <div id="5" style={{ width: '80%', margin: '0 auto' }}>
//         <h2 style={{ marginBottom: '8px' }}>{sectionsContent.obj5.title}</h2>
//         <p style={{ color: '#4b5563', lineHeight: 1.7 }}>{sectionsContent.obj5.content}</p>
//         <CalloutBlockGroup blocks={symbolDomainBlocks} />
//       </div>

//       <br />

//       {/* Section 6: LaTeX notation across the site */}
//       <div id="6" style={{ width: '80%', margin: '0 auto' }}>
//         <h2 style={{ marginBottom: '8px' }}>{sectionsContent.obj6.title}</h2>
//         <p style={{ color: '#4b5563', lineHeight: 1.7 }}>{sectionsContent.obj6.content}</p>
//         <CalloutBlockGroup blocks={notationCrossLinks} />
//       </div>

//       <br />

//       {/* Section 7: Quick reference */}
//       <div id="7" style={{ width: '80%', margin: '0 auto' }}>
//         <h2 style={{ marginBottom: '8px' }}>{sectionsContent.obj7.title}</h2>
//         <p style={{ color: '#4b5563', lineHeight: 1.7 }}>{sectionsContent.obj7.content}</p>
//         <Accordion items={quickReferenceItems} />
//       </div>

//       <br />

//       {/* Key Terms */}
//       {/* <KeyTermsCard
//         id="0"
//         title={sectionsContent.obj0.title}
//         content={sectionsContent.obj0.content}
//         after={sectionsContent.obj0.after}
//         variant="light"
//       /> */}

//       <br />

//       {/* Section 8: Related tools */}
//       <Sections sections={[genericSections[8]]} />

//       <br />
//       <br />
//       <br />
//     </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import FeatureCard from '@/app/components/page-components/new-layout/FeatureCard'
import CardGrid from '@/app/components/page-components/new-layout/CardGrid'
import CalloutBlockGroup from '@/app/components/page-components/new-layout/CalloutBlockGroup'
import Accordion from '@/app/components/page-components/new-layout/Accordion'


export async function getStaticProps() {

  const keyWords = [
    'latex',
    'latex math',
    'latex mathematical format',
    'latex notation',
    'math typesetting',
    'latex editor',
    'latex symbols',
    'latex commands',
    'latex fractions',
    'latex matrices',
    'latex integrals',
    'latex greek letters',
    'write math online',
    'math formula notation',
    'latex reference',
  ]


  const sectionsContent = {

    obj1: {
      title: `What is LaTeX?`,
      content: `LaTeX is a typesetting system for mathematics and technical writing. Math expressions are written as plain text using backslash-prefixed commands - the fraction one over two is @[\\frac{1}{2}]@, the integral from zero to one is @[\\int_0^1]@. The source is portable, version-controllable, and is the standard format for scientific publishing.

This section indexes everything on the site that helps you read, write, and look up LaTeX math notation - a live editor, structured references, and the notation blocks embedded throughout the topic pages.

Below: a working editor, an overview of how math is encoded, eight common structures with dedicated reference pages, symbol catalogs by mathematical domain, cross-links to notation blocks on topic pages, and a quick-reference accordion of everyday patterns.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `How math is encoded`,
      content: `Four building blocks cover almost every LaTeX expression.

**Commands** begin with a backslash and name a symbol or operation: @[\\alpha]@ produces the Greek letter alpha, @[\\sqrt]@ a square root, @[\\sum]@ a summation sign. Hundreds of commands exist, but a few dozen cover most everyday writing.

**Grouping** with braces tells LaTeX what belongs together. @[x^{2n}]@ raises x to the power 2n, while @[x^2n]@ raises only to 2 and treats the n as a separate factor. Whenever an argument is more than one character, wrap it in braces.

**Subscripts and superscripts** attach with @[^]@ for superscripts and @[_]@ for subscripts. The same syntax sets summation bounds, integral limits, and tensor indices: $\\sum_{i=1}^{n} x_i$, $\\int_0^\\infty e^{-x} dx$, $T^{\\mu\\nu}_{\\alpha\\beta}$.

**Environments** wrap content that needs special handling. Matrices use @[\\begin{bmatrix} ... \\end{bmatrix}]@, multi-line equations use @[\\begin{align} ... \\end{align}]@, piecewise definitions use @[\\begin{cases} ... \\end{cases}]@. Inside, ampersand separates columns and double-backslash separates rows.

These four mechanisms compose freely - a fraction whose numerator is a square root whose argument is a sum whose terms are exponentials is just nesting commands and arguments to whatever depth the expression needs.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Try the editor`,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Common structures`,
      content: `Each structure below has a dedicated page with full syntax, variants, and worked examples.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Symbols by mathematical domain`,
      content: `Symbol catalogs organized by topic. Each one pairs the rendered symbol with its LaTeX command, grouped into categories specific to that domain.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `LaTeX notation across the site`,
      content: `Many topic pages include a dedicated notation block showing the formal LaTeX for that concept - definitions, distributions, theorems, and identities written in publication-ready form.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Quick reference`,
      content: `Patterns that cover most everyday math typesetting.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Related tools`,
      content: `The [math symbols catalogs](!/math-symbols) map every symbol to its LaTeX command, organized by domain. The [tables section](!/tables) collects formula and identity references in compact LaTeX-rendered grids. The [interactive editor](!/latex/editor) sits at the heart of this section - click symbols, build expressions across multiple lines, and copy the source when ready.

For deeper notation on specific topics, every domain section (probability, set theory, linear algebra, and others) includes pages whose notation blocks are written and rendered in LaTeX directly. Pair this hub with any of them when you need to write something you have only seen rendered, not coded.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj10: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' },

  }


  const editorFeature = {
    title: 'Interactive LaTeX editor',
    description: 'Build formulas visually. Click symbols to insert fractions, roots, integrals, and matrices across multiple equation lines. The combined source updates live and copies to the clipboard with one click.',
    icon: 'math-function',
    iconColor: '#0C447C',
    iconBackgroundColor: '#E6F1FB',
    link: { label: 'Open editor', url: '/latex/editor' },
  }


  const structureCards = [
    {
      preview: `$\\dfrac{a}{b}$`,
      title: 'Fractions',
      caption: '\\frac{a}{b}',
      link: { label: '', url: '/latex/fractions' },
    },
    {
      preview: `$\\sqrt{x}$`,
      title: 'Roots',
      caption: '\\sqrt{x}',
      link: { label: '', url: '/latex/roots' },
    },
    {
      preview: `$\\int_a^b f(x)\\,dx$`,
      title: 'Integrals',
      caption: '\\int f(x) dx',
      link: { label: '', url: '/latex/integrals' },
    },
    {
      preview: `$\\sum_{i=1}^{n} x_i$`,
      title: 'Sums',
      caption: '\\sum x_i',
      link: { label: '', url: '/latex/sums-and-products' },
    },
    {
      preview: `$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$`,
      title: 'Matrices',
      caption: '\\begin{bmatrix}',
      link: { label: '', url: '/latex/matrices' },
    },
    {
      preview: `$\\alpha\\;\\beta\\;\\gamma$`,
      title: 'Greek letters',
      caption: '\\alpha \\beta \\gamma',
      link: { label: '', url: '/latex/greek-letters' },
    },
    {
      preview: `$\\left( \\dfrac{x}{y} \\right)$`,
      title: 'Delimiters',
      caption: '\\left( \\right)',
      link: { label: '', url: '/latex/delimiters' },
    },
    {
      preview: `$\\hat{x}\\;\\bar{x}\\;\\vec{x}$`,
      title: 'Accents',
      caption: '\\hat{x} \\bar{x}',
      link: { label: '', url: '/latex/accents-and-decorations' },
    },
  ]


  const symbolDomainBlocks = [
    {
      label: 'Algebra',
      content: `Variables, operators, equality, exponents, radicals, and absolute value notation.`,
      link: { label: '', url: '/math-symbols/algebra' },
      backgroundColor: '#F1EFE8',
      borderColor: '#5F5E5A',
      textColor: '#444441',
      labelColor: '#5F5E5A',
    },
    {
      label: 'Calculus',
      content: `Derivatives ($\\frac{d}{dx}$, $\\partial$), integrals ($\\int$), limits, gradients ($\\nabla$), and infinity.`,
      link: { label: '', url: '/math-symbols/calculus' },
      backgroundColor: '#FAECE7',
      borderColor: '#993C1D',
      textColor: '#712B13',
      labelColor: '#993C1D',
    },
    {
      label: 'Set theory',
      content: `Membership ($\\in$), unions ($\\cup$), intersections ($\\cap$), subsets, and empty set ($\\emptyset$).`,
      link: { label: '', url: '/math-symbols/set-theory' },
      backgroundColor: '#E1F5EE',
      borderColor: '#0F6E56',
      textColor: '#085041',
      labelColor: '#0F6E56',
    },
    {
      label: 'Math logic',
      content: `Quantifiers ($\\forall$, $\\exists$), connectives ($\\land$, $\\lor$, $\\neg$), and implication arrows.`,
      link: { label: '', url: '/math-symbols/math-logic' },
      backgroundColor: '#EAF3DE',
      borderColor: '#3B6D11',
      textColor: '#27500A',
      labelColor: '#3B6D11',
    },
    {
      label: 'Linear algebra',
      content: `Matrices, transpose ($A^T$), determinants, eigenvalues ($\\lambda$), and tensor products ($\\otimes$).`,
      link: { label: '', url: '/math-symbols/linear-algebra' },
      backgroundColor: '#EEEDFE',
      borderColor: '#534AB7',
      textColor: '#3C3489',
      labelColor: '#534AB7',
    },
    {
      label: 'Probability',
      content: `Probability ($P(A)$), expectation ($\\mathbb{E}[X]$), variance ($\\sigma^2$), and distribution symbols.`,
      link: { label: '', url: '/math-symbols/probability' },
      backgroundColor: '#E6F1FB',
      borderColor: '#185FA5',
      textColor: '#0C447C',
      labelColor: '#185FA5',
    },
    {
      label: 'Combinatorics',
      content: `Factorials ($n!$), binomial coefficients ($\\binom{n}{k}$), permutations, and combinations.`,
      link: { label: '', url: '/math-symbols/combinatorics' },
      backgroundColor: '#FAEEDA',
      borderColor: '#854F0B',
      textColor: '#633806',
      labelColor: '#854F0B',
    },
    {
      label: 'Trigonometry',
      content: `Trigonometric functions ($\\sin$, $\\cos$, $\\tan$), angles ($\\theta$), and degree notation.`,
      link: { label: '', url: '/math-symbols/trigonometry' },
      backgroundColor: '#FBEAF0',
      borderColor: '#993556',
      textColor: '#72243E',
      labelColor: '#993556',
    },
    {
      label: 'Complex numbers',
      content: `Imaginary unit ($i$), modulus ($|z|$), argument ($\\arg z$), conjugate ($\\bar{z}$), and number sets.`,
      link: { label: '', url: '/math-symbols/complex-numbers' },
      backgroundColor: '#E6F1FB',
      borderColor: '#185FA5',
      textColor: '#0C447C',
      labelColor: '#185FA5',
    },
  ]


  const notationCrossLinks = [
    {
      label: 'Probability',
      content: `[Normal distribution notation](!/probability/normal-distribution) - [Binomial PMF](!/probability/binomial-distribution) - [Distribution symbols](!/probability/definitions)`,
      backgroundColor: '#E6F1FB',
      borderColor: '#185FA5',
      textColor: '#0C447C',
      labelColor: '#185FA5',
    },
    {
      label: 'Set theory',
      content: `[Set builder notation](!/set-theory/set-builder-notation) - [Cardinality](!/set-theory/cardinality) - [Set operations](!/set-theory/set-operations)`,
      backgroundColor: '#E1F5EE',
      borderColor: '#0F6E56',
      textColor: '#085041',
      labelColor: '#0F6E56',
    },
    {
      label: 'Linear algebra',
      content: `[Matrix notation](!/linear-algebra/matrices) - [Vector notation](!/linear-algebra/vectors) - [Determinants](!/linear-algebra/determinants)`,
      backgroundColor: '#EEEDFE',
      borderColor: '#534AB7',
      textColor: '#3C3489',
      labelColor: '#534AB7',
    },
    {
      label: 'Calculus',
      content: `[Derivative notation](!/calculus/derivatives) - [Integral notation](!/calculus/integrals) - [Limit notation](!/calculus/limits)`,
      backgroundColor: '#FAECE7',
      borderColor: '#993C1D',
      textColor: '#712B13',
      labelColor: '#993C1D',
    },
    {
      label: 'Complex numbers',
      content: `[Polar form](!/complex-numbers/polar-form) - [Modulus and argument](!/complex-numbers/modulus-argument) - [Complex notation](!/complex-numbers/definitions)`,
      backgroundColor: '#FBEAF0',
      borderColor: '#993556',
      textColor: '#72243E',
      labelColor: '#993556',
    },
    {
      label: 'Combinatorics',
      content: `[Binomial coefficient](!/combinatorics/binomial-coefficient) - [Permutations](!/combinatorics/permutations) - [Counting principles](!/combinatorics/counting-principles)`,
      backgroundColor: '#FAEEDA',
      borderColor: '#854F0B',
      textColor: '#633806',
      labelColor: '#854F0B',
    },
  ]


  const quickReferenceItems = [
    {
      title: 'Subscripts and superscripts',
      content: `Use @[_]@ for subscript and @[^]@ for superscript. Wrap multi-character indices in braces: @[x_{ij}]@ renders as $x_{ij}$, while @[x_ij]@ renders as $x_ij$ - only the i is subscripted. The same syntax sets summation bounds and integral limits.`,
      open: true,
    },
    {
      title: 'Fractions and roots',
      content: `Use @[\\frac{num}{den}]@ for inline fractions and @[\\dfrac{num}{den}]@ for display-size fractions in running text. Square roots are @[\\sqrt{x}]@; n-th roots use the optional bracket argument: @[\\sqrt[n]{x}]@ for $\\sqrt[n]{x}$. Fractions nest freely - $\\dfrac{1}{1+\\dfrac{1}{x}}$.`,
    },
    {
      title: 'Sums, products, and integrals',
      content: `Sums use @[\\sum]@, products @[\\prod]@, integrals @[\\int]@. Limits attach as subscript and superscript: @[\\sum_{i=1}^{n}]@ for $\\sum_{i=1}^{n}$. Multiple integrals stack the command: @[\\iint]@, @[\\iiint]@, @[\\oint]@ for line integrals.`,
    },
    {
      title: 'Greek letters',
      content: `Lowercase Greek is @[\\letter]@ - @[\\alpha]@, @[\\beta]@, @[\\pi]@ for $\\alpha, \\beta, \\pi$. Uppercase Greek capitalizes the first letter: @[\\Gamma]@, @[\\Sigma]@, @[\\Omega]@ for $\\Gamma, \\Sigma, \\Omega$. Letters that look identical to Latin (uppercase alpha, beta, etc.) are not aliased; use the Latin letter.`,
    },
    {
      title: 'Matrices and arrays',
      content: `Inside @[\\begin{bmatrix} ... \\end{bmatrix}]@ (square brackets), @[pmatrix]@ (parentheses), or @[vmatrix]@ (vertical bars for determinants), use ampersand to separate columns and double-backslash to separate rows. Example: @[\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}]@ produces $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$.`,
    },
    {
      title: 'Delimiters that scale',
      content: `Bare @[()]@ stay small. Use @[\\left(]@ and @[\\right)]@ to make parentheses grow with their content: @[\\left( \\dfrac{a}{b} \\right)]@ for $\\left( \\dfrac{a}{b} \\right)$. The pairing applies to brackets, braces, absolute value bars, angle brackets, and ceiling/floor symbols.`,
    },
    {
      title: 'Operators and functions',
      content: `Common functions like sine, cosine, log, and limit have dedicated commands that render upright: @[\\sin x]@, @[\\cos x]@, @[\\log x]@, @[\\lim_{x\\to 0}]@ produce $\\sin x$, $\\cos x$, $\\log x$, $\\lim_{x\\to 0}$. For custom upright operators, use @[\\operatorname{name}]@.`,
    },
  ]


  return {
    props: {
      sectionsContent,
      editorFeature,
      structureCards,
      symbolDomainBlocks,
      notationCrossLinks,
      quickReferenceItems,
      seoData: {
        title: "LaTeX Mathematical Format: Editor, Symbols, Notation | Learn Math Class",
        description: "A live LaTeX editor, references for fractions, roots, integrals, matrices, Greek letters, and cross-links to symbol catalogs and notation blocks across every math topic.",
        keywords: keyWords.join(", "),
        url: "/latex",
        name: "LaTeX Mathematical Format",
      },
    }
  }
}


export default function LatexHubPage({
  seoData,
  sectionsContent,
  editorFeature,
  structureCards,
  symbolDomainBlocks,
  notationCrossLinks,
  quickReferenceItems,
}) {


  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [
        sectionsContent.obj1.content,
      ]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [
        sectionsContent.obj2.content,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        <FeatureCard
          key={'editor-feature'}
          title={editorFeature.title}
          description={editorFeature.description}
          icon={editorFeature.icon}
          iconColor={editorFeature.iconColor}
          iconBackgroundColor={editorFeature.iconBackgroundColor}
          link={editorFeature.link}
        />,
      ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
        <CardGrid key={'structures-grid'} cards={structureCards} />,
      ]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [
        sectionsContent.obj5.content,
        <CalloutBlockGroup key={'symbol-domains'} blocks={symbolDomainBlocks} />,
      ]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [
        sectionsContent.obj6.content,
        <CalloutBlockGroup key={'notation-crosslinks'} blocks={notationCrossLinks} />,
      ]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [
        sectionsContent.obj7.content,
        <Accordion key={'quick-reference'} items={quickReferenceItems} />,
      ]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [
        sectionsContent.obj8.content,
      ]
    },
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

      <br />
      <br />
      <br />
      <br />

      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '0px', marginBottom: '0px' }}>Latex Mathematical Format</h1>
      <br />
      <br />

      <SectionTableOfContents
        sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="children"
        secondaryNavTitle="More in this Section"
      />

      <br />
      <br />
      <br />

      <Sections sections={genericSections} />

      <br />
      <br />
      <br />
    </>
  )
}