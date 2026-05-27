


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import ThreeSetsLawsExplorer from '../../../../app/components/venn-diagrams/3-sets/ThreeSetsLawsExplorer'

// export async function getStaticProps(){

//   const keyWords = [
//     "two set laws venn",
//     "set laws visualizer",
//     "set identities proof",
//     "de morgan laws visual",
//     "idempotent law sets",
//     "commutative law sets",
//     "absorption law sets",
//     "complement law sets",
//     "double complement law",
//     "symmetric difference identity",
//     "set algebra laws",
//     "venn diagram proof",
//     "two set algebraic identities",
//     "visual proof set theory",
//     "set theory laws",
//   ]

//   const sectionsContent = {
//     obj0: {
//       title: `Key Terms`,
//       content: `
// - **Set identity** — an equation between two set expressions that holds for all sets
// - **Idempotent law** — $A \\cup A = A$, $A \\cap A = A$
// - **Commutative law** — $A \\cup B = B \\cup A$, $A \\cap B = B \\cap A$
// - **Identity element** — $\\emptyset$ for union, $U$ for intersection
// - **Annihilator** — $U$ for union, $\\emptyset$ for intersection
// - **Complement law** — $A \\cup A' = U$, $A \\cap A' = \\emptyset$
// - **Double complement** — $(A')' = A$
// - **De Morgan's laws** — $(A \\cup B)' = A' \\cap B'$, $(A \\cap B)' = A' \\cup B'$
// - **Absorption law** — $A \\cup (A \\cap B) = A$, $A \\cap (A \\cup B) = A$
// - **Visual proof** — two diagrams shading the same regions confirm an identity
// `,
//       before: ``,
//       after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
//       link: '',
//     },

//     obj1: {
//       title: `Getting Started with the Explorer`,
//       content: `Open the explorer and you'll see two miniature Venn diagrams side by side, separated by an equals sign. The left diagram shades the regions for the **left-hand side** of an identity; the right diagram shades the regions for the **right-hand side**. When the two shaded patterns match, the identity holds — and a green badge below the diagrams confirms it.

// The current identity is shown as a badge above the diagrams (e.g. $A \\cup A = A$). Each side has a label showing the specific expression it represents. The first identity loads automatically, so you can start interacting immediately.

// The interface has three control areas: the **category tabs** at the top, the **formula buttons** below them, and the **Jump to** dropdown on the right. Underneath the diagrams are theme controls and a Previous/Next navigation strip with a counter showing your position among the 27 identities.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj2: {
//       title: `Navigating Category Tabs`,
//       content: `The eight category tabs group the 27 laws by structural type:

// • **Idempotent** — laws where combining a set with itself returns the set
// • **Commutative** — order does not matter for union or intersection
// • **Identity & Annihilation** — special roles of $\\emptyset$ and $U$
// • **Complement** — laws involving $A'$, including the double complement
// • **De Morgan's Laws** — the two complement-distribution laws
// • **Absorption** — $A$ absorbs $A \\cap B$ in a union, and $A \\cup B$ in an intersection
// • **Difference** — equivalent forms for $A \\setminus B$ and the symmetric difference
// • **Compound Complements** — complements of mixed expressions like $(A \\cup B')'$

// Click a tab to switch the row of formula buttons below it. The current identity stays selected across tab switches, so you can browse other groups without losing context.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj3: {
//       title: `Selecting an Identity`,
//       content: `Two ways to pick a law. The **formula buttons** under the active tab display every identity in that category — each button shows the full equation (e.g. $A \\cup A = A$, $(A \\cup B)' = A' \\cap B'$). Click any one to load it into the diagrams.

// The **Jump to** dropdown lists all 27 identities across every category in a single menu, grouped by tab. Useful when you know the formula but not which group it belongs to.

// When you select an identity, four things update simultaneously:

// • The badge above the diagrams shows the new equation
// • The left diagram re-shades for the new LHS expression
// • The right diagram re-shades for the new RHS expression
// • The match indicator below confirms whether the two patterns agree`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj4: {
//       title: `Reading the Side-by-Side Proof`,
//       content: `Each side of the equals sign is a complete two-circle Venn diagram with four disjoint regions: outside both, only in $A$, only in $B$, and the intersection. The shaded combination of these four regions represents the set described by the expression.

// A set identity asserts that the LHS and RHS pick out the same regions. The explorer evaluates both expressions on all four combinations of $A$ and $B$ membership and shades the diagrams accordingly. If the same regions are shaded on both sides, the two set expressions are equal as sets — that is the geometric content of the identity.

// For example, selecting $(A \\cup B)' = A' \\cap B'$ produces two diagrams that each shade only the region outside both circles. The visual match is the proof.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj5: {
//       title: `The Match Indicator`,
//       content: `Below the two diagrams, a colored badge reports whether the regions agree:

// • **Green badge with a checkmark** — the two predicates produce the same truth value on all four membership combinations, meaning the identity holds for any choice of $A$ and $B$
// • **Red badge with a cross** — the regions differ, meaning the equation is not a valid identity

// For every law in the explorer's catalog, the badge is green — the catalog only includes valid identities. The match indicator is a verification, not a test of the user's input. Its purpose is to make the equality between LHS and RHS visible: the equation is true because the two shaded patterns are identical, not just because a textbook says so.

// This turns the explorer into a tool for visual reasoning rather than rote memorization.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj6: {
//       title: `Theme Controls and Navigation`,
//       content: `The **Theme** panel below the diagrams customizes shading appearance:

// • **Color picker** — change the hue of the shaded regions
// • **Opacity slider** — adjust transparency from $1.00$ (opaque) to $0.00$ (invisible), with the current value shown next to the slider
// • **Reset** — restore the default blue at $0.85$ opacity

// Theme changes persist across identity selections, so adjustments apply to every law you visit afterward.

// The navigation strip at the bottom has **Previous** and **Next** buttons that cycle through all 27 identities in the order defined by the category groups, with a counter showing position. Navigation wraps around — pressing **Previous** on the first identity jumps to the last. The active tab and active formula button update automatically as you advance, so you always know where you are in the catalog.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj7: {
//       title: `What is a Set Identity?`,
//       content: `A **set identity** is an equation between two set expressions that holds for every possible choice of the sets involved. The equation $A \\cup B = B \\cup A$ is an identity because it is true regardless of what $A$ and $B$ are. By contrast, $A \\cup B = A$ is not an identity — it holds only when $B \\subseteq A$.

// Set identities form the algebraic backbone of set theory. They let expressions be rewritten without changing their meaning, much like algebraic identities for numbers ($a + b = b + a$, $a(b + c) = ab + ac$). Skilled use of set identities is what turns set-theoretic reasoning from case-by-case argument into mechanical manipulation.

// For the full algebraic catalog, including identities involving three or more sets, see **set laws and identities**.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj8: {
//       title: `Why Do Visual Proofs Work?`,
//       content: `A two-circle Venn diagram divides the universe into four mutually exclusive regions, and every two-set expression assigns each region one of two states: in or out. Two expressions are equal as sets if and only if they assign the same state to every region.

// This means a set identity in two variables can be verified by checking just four cases — the four possible combinations of "is in $A$" and "is in $B$". The explorer performs this check by evaluating each expression on all four combinations and shading the regions where the result is true. If the two diagrams match, the identity is verified.

// This is not just a heuristic — it is a complete decision procedure for two-set identities. For identities involving more sets, the same principle applies with more regions ($2^n$ for $n$ sets), but the visual approach becomes harder to read past three sets. See **venn diagrams** for the multi-set generalization.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj9: {
//       title: `De Morgan's Laws and Their Mirrors`,
//       content: `Two of the most-used identities are **De Morgan's laws**:

// $$(A \\cup B)' = A' \\cap B'$$

// $$(A \\cap B)' = A' \\cup B'$$

// The complement of a union equals the intersection of the complements; the complement of an intersection equals the union of the complements. Each law converts a complement of a combined set into a combination of complements.

// The Compound Complements category in the explorer derives several mirrored identities from De Morgan's plus the double-complement law $(A')' = A$. For example, $(A \\cap B')' = A' \\cup B$ — useful in propositional logic, where it corresponds to the implication $A \\to B$. Each of the four compound complements has a matching dual obtained by swapping $A$ and $B$ or by complementing both sides.

// For the algebraic proofs and the general $n$-set form, see **De Morgan's laws**.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj10: {
//       title: `Related Concepts and Tools`,
//       content: `**Two-Set Basic Identities** — the companion explorer for shading individual operations (union, intersection, complement, differences) rather than identity equations.

// **Set Operations** — formal definitions of union, intersection, complement, difference, and symmetric difference.

// **Venn Diagrams** — overview of one-set, two-set, and three-set diagrams.

// **De Morgan's Laws** — algebraic proofs and the $n$-set generalization.

// **Set Laws and Identities** — the full algebraic catalog of laws on sets.

// **Three-Set Venn Diagram** — extends visual proof techniques to three overlapping sets.

// **Set Theory Definitions** — glossary of foundational terms used throughout set algebra.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj11: { title:``, content:``, before:``, after:``, link:'' },
//     obj12: { title:``, content:``, before:``, after:``, link:'' },
//     obj13: { title:``, content:``, before:``, after:``, link:'' },
//     obj14: { title:``, content:``, before:``, after:``, link:'' },
//     obj15: { title:``, content:``, before:``, after:``, link:'' },
//   }

//   const introContent = {
//     id: "intro",
//     title: "Visual Proofs of Two-Set Laws",
//     content: `Every algebraic law in two-set algebra reduces to a claim about regions in a Venn diagram: the left-hand side and the right-hand side of the law shade the same regions. The explorer below displays both sides as miniature Venn diagrams and confirms the match. Twenty-seven laws are organized into eight categories — from idempotence and commutativity through De Morgan's laws to compound complements.`
//   }

//   const faqQuestions = {
//     obj1: {
//       question: "What is a set identity?",
//       answer: "A set identity is an equation between two set expressions that holds for every possible choice of the sets involved. For example, A union B equals B union A is an identity because it is true regardless of what A and B are. Set identities form the algebraic backbone of set theory and allow expressions to be rewritten without changing their meaning."
//     },
//     obj2: {
//       question: "How does the explorer verify a set law visually?",
//       answer: "The explorer displays the left-hand side and right-hand side of each identity as two miniature Venn diagrams. Each side shades the regions where its expression is true across all four combinations of membership in A and B. When the two shaded patterns match, a green badge confirms that the identity holds for any sets A and B."
//     },
//     obj3: {
//       question: "What categories of laws are included?",
//       answer: "The explorer covers idempotent laws, commutative laws, identity and annihilation laws involving the empty set and the universe, complement laws including double complement, De Morgan's laws, absorption laws, difference identities including symmetric difference forms, and compound complements derived from De Morgan and double complement combined. Twenty-seven identities in total across eight categories."
//     },
//     obj4: {
//       question: "Why is the visual proof a valid proof?",
//       answer: "A two-circle Venn diagram divides the universe into four disjoint regions, and any two-set expression assigns each region a single truth value. Two expressions are equal as sets if and only if they produce the same truth value in every region. Checking all four combinations of A and B membership is therefore a complete decision procedure for two-set identities."
//     },
//     obj5: {
//       question: "What are De Morgan's laws?",
//       answer: "De Morgan's laws state that the complement of a union equals the intersection of the complements, and the complement of an intersection equals the union of the complements. Symbolically, (A union B) prime equals A prime intersect B prime, and (A intersect B) prime equals A prime union B prime. Both can be verified visually by shading the relevant regions in the Venn diagram."
//     },
//   }

//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Two-Set Venn Diagram Laws and Identities Explorer",
//       "description": "Verify two-set laws and identities by shading both sides of each equation on side-by-side Venn diagrams — idempotent, commutative, De Morgan's, absorption, and more.",
//       "url": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-laws-venn",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Side-by-side Venn diagrams shading the left-hand and right-hand sides of each identity",
//         "Automatic match indicator confirming the regions agree on all four membership combinations",
//         "Twenty-seven identities organized into eight category tabs: Idempotent, Commutative, Identity and Annihilation, Complement, De Morgan's Laws, Absorption, Difference, and Compound Complements",
//         "Formula buttons and a Jump-to dropdown for selecting any identity",
//         "Customizable shading color and opacity with one-click reset",
//         "Previous and Next navigation with a wrap-around scenario counter",
//         "Side explanation panel describing the meaning of each law"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Interactive Tool",
//       "educationalLevel": "High School, College",
//       "keywords": keyWords.join(", ")
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Set Theory",
//           "item": "https://www.learnmathclass.com/set-theory"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Visual Tools",
//           "item": "https://www.learnmathclass.com/set-theory/visual-tools"
//         },
//         {
//           "@type": "ListItem",
//           "position": 4,
//           "name": "Two-Set Venn Diagram: Laws and Identities",
//           "item": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-laws-venn"
//         }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Two-Set Venn Diagram: Laws & Identities | Learn Math Class",
//         description: "Verify two-set laws and identities by shading both sides on side-by-side Venn diagrams — idempotent, commutative, De Morgan's, absorption, and complement laws.",
//         keywords: keyWords.join(", "),
//         url: "/set-theory/visual-tools/three-sets-laws-venn",
//         name: "Two-Set Venn Diagram Laws and Identities Explorer",
//         hubDescription: "Verify two-set algebraic laws by shading both sides of each identity on a pair of side-by-side Venn diagrams. Browse 27 laws across eight categories — idempotent, commutative, identity, complement, De Morgan's, absorption, difference, and compound complements — and watch the match indicator confirm each visual proof.",
//         category: "Venn Diagrams",
//         subCategory: "Two Sets"
//       },
//     }
//   }
// }

// export default function TwoSetsLawsVennPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

//   const genericSections = [
//     { id:'0', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
//     { id:'1', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
//     { id:'2', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
//     { id:'3', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
//     { id:'4', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
//     { id:'5', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
//     { id:'6', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
//     { id:'7', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
//     { id:'8', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
//     { id:'9', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
//     { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
//             __html: JSON.stringify(schemas.webApplication)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.breadcrumb)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.faq)
//           }}
//         />
//       </Head>
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar
//         side='right'
//         // topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <Breadcrumb/>
//       <br/>
//       <br/>
//       <h1 className='title' style={{marginTop:'-10px',marginBottom:'-80px'}}>Venn Diagrams: Three Sets Laws and Complex Identities</h1>
//       <br/>
//       <div style={{transform:'scale(0.85)'}}>
//        <ThreeSetsLawsExplorer/>
//       </div>

//       <br/>
//       <SectionTableOfContents sections={genericSections}
//         showSecondaryNav={true}
//         secondaryNavMode="siblings"
//         secondaryNavTitle="More in this Section"
//       />
//       <br/>
//       <br/>
//       <br/>
//       {/* <IntroSection
//         id={introContent.id}
//         title={introContent.title}
//         content={introContent.content}
//         backgroundColor='#f9fafb'
//         textColor="#06357a"
//       /> */}
//       <br/>
//       {/* <KeyTermsCard
//         id="0"
//         title={sectionsContent.obj0.title}
//         content={sectionsContent.obj0.content}
//         after={sectionsContent.obj0.after}
//         variant="light"
//       /> */}
//       <br/>
//       <Sections sections={genericSections}/>
//       <br/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton/> */}
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ThreeSetsLawsExplorer from '../../../../app/components/venn-diagrams/3-sets/ThreeSetsLawsExplorer'

export async function getStaticProps(){

  const keyWords = [
    "three set laws venn",
    "three set identities visualizer",
    "associative law sets",
    "distributive law sets",
    "de morgan laws three sets",
    "difference distributes over union",
    "difference distributes over intersection",
    "symmetric difference associative",
    "nested set difference",
    "set algebra three sets",
    "venn diagram proof three sets",
    "three set algebraic identities",
    "visual proof set theory",
    "three set complex identities",
    "set theory laws",
  ]

  const sectionsContent = {
    obj0: {
      title: `Key Terms`,
      content: `
- **Set identity** — an equation between two set expressions that holds for all sets
- **Associative law** — $(A \\cup B) \\cup C = A \\cup (B \\cup C)$, also for $\\cap$ and $\\triangle$
- **Distributive law** — $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ and its dual
- **De Morgan's laws (three sets)** — $(A \\cup B \\cup C)' = A' \\cap B' \\cap C'$ and $(A \\cap B \\cap C)' = A' \\cup B' \\cup C'$
- **Symmetric difference** — $A \\triangle B$, elements in exactly one of $A$ or $B$; extends to $A \\triangle B \\triangle C$
- **Difference distribution** — $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$ and $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$
- **Nested difference** — $(A \\setminus B) \\setminus C = A \\setminus (B \\cup C)$
- **Visual proof** — two diagrams shading the same eight regions confirm an identity
- **Eight regions** — the disjoint pieces a three-circle Venn diagram divides the universe into
`,
      before: ``,
      after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Explorer`,
      content: `Open the explorer and you'll see two miniature three-circle Venn diagrams side by side, separated by an equals sign. The left diagram shades the regions for the **left-hand side** of an identity; the right diagram shades the regions for the **right-hand side**. When the two shaded patterns match, the identity holds — and a green badge below the diagrams confirms it.

The current identity is shown as a badge above the diagrams (e.g. $(A \\cup B) \\cup C = A \\cup (B \\cup C)$). Each side has a label showing the specific expression it represents. The first identity loads automatically, so you can start interacting immediately.

The interface has three control areas: the **category tabs** at the top, the **formula buttons** below them, and the **Jump to** dropdown on the right. Underneath the diagrams are theme controls and a Previous/Next navigation strip with a counter showing your position among the 12 identities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Navigating Category Tabs`,
      content: `The four category tabs group the 12 laws by structural type:

• **Associative** — grouping does not matter for repeated $\\cup$, $\\cap$, or $\\triangle$ (three identities)
• **Distributive** — intersection distributes over union and union distributes over intersection (two identities)
• **De Morgan's Laws** — the complement of a triple union or triple intersection (two identities)
• **Difference** — five identities showing how set difference interacts with union, intersection, and itself, including nested differences

Click a tab to switch the row of formula buttons below it. The current identity stays selected across tab switches, so you can browse other groups without losing context. The active tab updates automatically when you use Previous/Next.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Selecting an Identity`,
      content: `Two ways to pick a law. The **formula buttons** under the active tab display every identity in that category — each button shows the full equation (e.g. $(A \\cup B) \\cup C = A \\cup (B \\cup C)$, $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$). Click any one to load it into the diagrams.

The **Jump to** dropdown lists all 12 identities across every category in a single menu, grouped by tab. Useful when you know the formula but not which group it belongs to.

When you select an identity, four things update simultaneously:

• The badge above the diagrams shows the new equation
• The left diagram re-shades for the new LHS expression
• The right diagram re-shades for the new RHS expression
• The match indicator below confirms whether the two patterns agree on all eight regions`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Side-by-Side Proof`,
      content: `Each side of the equals sign is a complete three-circle Venn diagram with eight disjoint regions: outside all circles, three "only" regions ($A$, $B$, $C$ alone), three pairwise-but-not-triple regions ($A \\cap B$ minus $C$, and the rest), and the central triple intersection $A \\cap B \\cap C$. The shaded combination of these eight regions represents the set described by the expression.

A set identity asserts that the LHS and RHS pick out the same regions. The explorer evaluates both expressions on all eight combinations of $A$, $B$, $C$ membership and shades the diagrams accordingly. If the same regions are shaded on both sides, the two set expressions are equal as sets — that is the geometric content of the identity.

For example, selecting $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ produces two diagrams that each shade the same three regions where $A$ meets either $B$ or $C$. The visual match is the proof.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Match Indicator`,
      content: `Below the two diagrams, a colored badge reports whether the regions agree:

• **Green badge with a checkmark** — the two predicates produce the same truth value on all eight membership combinations, meaning the identity holds for any choice of $A$, $B$, $C$
• **Red badge with a cross** — the regions differ, meaning the equation is not a valid identity

For every law in the explorer's catalog, the badge is green — the catalog only includes valid identities. The match indicator is a verification, not a test of the user's input. Its purpose is to make the equality between LHS and RHS visible: the equation is true because the two shaded patterns are identical across all eight regions, not just because a textbook says so.

This turns the explorer into a tool for visual reasoning rather than rote memorization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Theme Controls and Navigation`,
      content: `The **Theme** panel below the diagrams customizes shading appearance:

• **Color picker** — change the hue of the shaded regions
• **Opacity slider** — adjust transparency from $1.00$ (opaque) to $0.00$ (invisible), with the current value shown next to the slider
• **Reset** — restore the default blue at $0.85$ opacity

Theme changes persist across identity selections, so adjustments apply to every law you visit afterward. Lower opacity is particularly useful when comparing the central triple-intersection regions on both diagrams, where multiple circle boundaries overlap.

The navigation strip at the bottom has **Previous** and **Next** buttons that cycle through all 12 identities in the order defined by the category groups: Associative, then Distributive, then De Morgan's Laws, then Difference. Navigation wraps around. The active tab and active formula button update automatically as you advance.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Three-Set Identity?`,
      content: `A **three-set identity** is an equation between two set expressions in three variables that holds for every possible choice of the sets involved. The equation $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ is an identity because it is true regardless of what $A$, $B$, $C$ are. By contrast, $A \\cup B = C$ is not an identity — it only holds for specific choices of sets.

Three-set identities are where set algebra becomes genuinely structural. Two-set laws like commutativity and idempotence are short statements involving few operations; three-set laws like associativity and distributivity govern how operations combine across multiple operands. They are the rules that make set algebra usable for systematic manipulation in proofs and computation.

For the full algebraic catalog, including identities involving more than three sets, see **set laws and identities**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why Do Visual Proofs Work?`,
      content: `A three-circle Venn diagram divides the universe into eight mutually exclusive regions, and every three-set expression assigns each region one of two states: in or out. Two expressions are equal as sets if and only if they assign the same state to every region.

This means a set identity in three variables can be verified by checking exactly eight cases — the eight possible combinations of "is in $A$", "is in $B$", "is in $C$". The explorer performs this check by evaluating each expression on all eight combinations and shading the regions where the result is true. If the two diagrams match across all eight regions, the identity is verified.

This is not just a heuristic — it is a complete decision procedure for three-set identities, equivalent to a truth-table proof in propositional logic. For identities in $n$ sets, the same principle requires $2^n$ regions, but the visual approach becomes hard to read past three sets. See **venn diagrams** for the multi-set generalization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Associative and Distributive Laws`,
      content: `Three is the smallest number of operands for which **associativity** becomes meaningful. The explorer covers three associative laws:

$$(A \\cup B) \\cup C = A \\cup (B \\cup C)$$

$$(A \\cap B) \\cap C = A \\cap (B \\cap C)$$

$$(A \\triangle B) \\triangle C = A \\triangle (B \\triangle C)$$

In each case, grouping does not matter — the result is independent of where parentheses are placed.

The two **distributive laws** govern how union and intersection combine:

$$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$$

$$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$$

Unlike ordinary arithmetic — where addition does not distribute over multiplication — set union and intersection are mutually distributive. Each law lets you expand or factor expressions, and both can be verified by checking that the eight regions match on both sides.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Difference Identities in Three Sets`,
      content: `The Difference tab collects five identities that govern how set difference interacts with union, intersection, and itself across three sets:

• **Difference over union**: $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$ — removing a union equals intersecting individual differences
• **Difference over intersection**: $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$ — removing an intersection equals unioning individual differences
• **Union minus a set**: $(A \\cup B) \\setminus C = (A \\setminus C) \\cup (B \\setminus C)$ — difference distributes from the right over union
• **Intersection minus a set**: $(A \\cap B) \\setminus C = A \\cap (B \\setminus C)$ — subtracting $C$ from $A \\cap B$ equals intersecting $A$ with $B \\setminus C$
• **Nested difference**: $(A \\setminus B) \\setminus C = A \\setminus (B \\cup C)$ — subtracting two sets in sequence equals subtracting their union

These laws are essentially the De Morgan and distributive laws translated into difference notation, since $A \\setminus B = A \\cap B'$. They are useful for simplifying complex expressions involving multiple subtractions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Concepts and Tools`,
      content: `**Two-Set Laws and Identities** — the companion explorer for 27 two-set laws across categories like idempotent, commutative, absorption, and compound complements.

**Three-Set Basic Identities** — the companion explorer for shading individual three-set expressions (triple union, triple intersection, "exactly two", and so on) rather than identity equations.

**Set Operations** — formal definitions of union, intersection, complement, difference, and symmetric difference.

**Venn Diagrams** — overview of one-set, two-set, and three-set diagrams.

**De Morgan's Laws** — algebraic proofs and the $n$-set generalization.

**Set Laws and Identities** — the full algebraic catalog including associativity, distributivity, and absorption.

**Set Theory Definitions** — glossary of foundational terms used throughout set algebra.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: { title:``, content:``, before:``, after:``, link:'' },
    obj13: { title:``, content:``, before:``, after:``, link:'' },
    obj14: { title:``, content:``, before:``, after:``, link:'' },
    obj15: { title:``, content:``, before:``, after:``, link:'' },
  }

  const introContent = {
    id: "intro",
    title: "Visual Proofs of Three-Set Laws",
    content: `Every algebraic law in three-set algebra reduces to a claim about regions in a three-circle Venn diagram: the left-hand side and the right-hand side of the law shade the same eight regions. The explorer below displays both sides as miniature three-set diagrams and confirms the match. Twelve laws are organized into four categories — associative, distributive, De Morgan's, and difference identities.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a three-set identity?",
      answer: "A three-set identity is an equation between two set expressions involving three sets A, B, C that holds for every possible choice of those sets. Examples include the associative law for union, the distributive law of intersection over union, and the three-set De Morgan's laws. Three-set identities are the structural rules that make set algebra usable for systematic manipulation."
    },
    obj2: {
      question: "How does the explorer verify a three-set law visually?",
      answer: "The explorer displays the left-hand side and right-hand side of each identity as two miniature three-circle Venn diagrams. Each side shades the regions where its expression is true across all eight combinations of membership in A, B, C. When the two shaded patterns match across all eight regions, a green badge confirms that the identity holds for any sets A, B, C."
    },
    obj3: {
      question: "What categories of three-set laws are included?",
      answer: "The explorer covers twelve identities across four categories: associative laws for union, intersection, and symmetric difference; distributive laws of intersection over union and union over intersection; the two three-set De Morgan's laws; and five difference identities including difference over union, difference over intersection, and nested differences."
    },
    obj4: {
      question: "Why is the visual proof a valid proof?",
      answer: "A three-circle Venn diagram divides the universe into eight disjoint regions, and any three-set expression assigns each region a single truth value. Two expressions are equal as sets if and only if they produce the same truth value in every region. Checking all eight combinations of A, B, C membership is therefore a complete decision procedure for three-set identities, equivalent to a truth-table proof in propositional logic."
    },
    obj5: {
      question: "What is the distributive law for sets?",
      answer: "The distributive laws state that intersection distributes over union and union distributes over intersection: A intersect (B union C) equals (A intersect B) union (A intersect C), and A union (B intersect C) equals (A union B) intersect (A union C). Unlike ordinary arithmetic, where multiplication distributes over addition but not the reverse, set union and intersection are mutually distributive over each other."
    },
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Three-Set Venn Diagram Laws and Complex Identities Explorer",
      "description": "Verify three-set laws and identities by shading both sides of each equation on side-by-side three-circle Venn diagrams — associative, distributive, De Morgan's, and difference identities.",
      "url": "https://www.learnmathclass.com/set-theory/visual-tools/three-sets-laws-venn",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Side-by-side three-circle Venn diagrams shading the left-hand and right-hand sides of each identity",
        "Automatic match indicator confirming the regions agree on all eight membership combinations",
        "Twelve identities organized into four category tabs: Associative, Distributive, De Morgan's Laws, and Difference",
        "Coverage of associativity for union, intersection, and symmetric difference",
        "Distributive laws of intersection over union and union over intersection",
        "Three-set De Morgan's laws and five difference identities including nested differences",
        "Customizable shading color and opacity with one-click reset",
        "Previous and Next navigation with a wrap-around scenario counter"
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
          "name": "Set Theory",
          "item": "https://www.learnmathclass.com/set-theory"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Three-Set Venn Diagram: Laws and Complex Identities",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools/three-sets-laws-venn"
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
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Three-Set Venn Diagram: Laws & Identities | Learn Math Class",
        description: "Verify three-set laws and complex identities by shading both sides on side-by-side Venn diagrams — associative, distributive, De Morgan's, and difference identities.",
        keywords: keyWords.join(", "),
        url: "/set-theory/visual-tools/three-sets-laws-venn",
        name: "Three-Set Venn Diagram Laws and Complex Identities Explorer",
        hubDescription: "Verify three-set algebraic laws by shading both sides of each identity on a pair of side-by-side three-circle Venn diagrams. Browse 12 laws across four categories — associative laws for union, intersection, and symmetric difference; distributive laws; three-set De Morgan's laws; and five difference identities — and watch the match indicator confirm each visual proof across all eight regions.",
        category: "Venn Diagrams",
        subCategory: "Three Sets"
      },
    }
  }
}

export default function ThreeSetsLawsVennPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    { id:'0', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
    { id:'1', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
    { id:'2', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
    { id:'3', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
    { id:'4', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
    { id:'5', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
    { id:'6', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
    { id:'7', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
    { id:'8', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
    { id:'9', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
    { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
    { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
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
            __html: JSON.stringify(schemas.webApplication)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.breadcrumb)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.faq)
          }}
        />
      </Head>
      {/* <GenericNavbar/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        // topOffset='65px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'-80px'}}>Venn Diagrams: Three Sets Laws and Complex Identities</h1>
      <br/>
      <div style={{transform:'scale(0.85)'}}>
       <ThreeSetsLawsExplorer/>
      </div>

      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
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
      {/* <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      /> */}
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}