


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
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import threeSetsLawsVennDiagrams from '../../../../app/components/venn-diagrams/3-sets/threeSetsLawsVennDiagrams'

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

• [Associative](!#associative-and-distributive-laws) — grouping does not matter for repeated $\\cup$, $\\cap$, or $\\triangle$ (three identities)
• [Distributive](!#associative-and-distributive-laws) — intersection distributes over union and union distributes over intersection (two identities)
• [De Morgan's Laws](!#de-morgans-laws-for-three-sets) — the complement of a triple union or triple intersection (two identities)
• [Difference](!#difference-identities-in-three-sets) — five identities showing how set difference interacts with union, intersection, and itself, including nested differences

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
      after: `All five get dedicated frozen frames below: [associativity of union](!#associativity-of-union), [of intersection](!#associativity-of-intersection), and [of the symmetric difference](!#associativity-of-the-symmetric-difference), then [intersection over union](!#intersection-distributes-over-union) and [union over intersection](!#union-distributes-over-intersection).`,
      link: '',
    },

    obj10: {
      title: `Difference Identities in Three Sets`,
      content: `The Difference tab collects five identities that govern how set difference interacts with union, intersection, and itself across three sets:

• [Difference over union](!#difference-over-a-union): $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$ — removing a union equals intersecting individual differences
• [Difference over intersection](!#difference-over-an-intersection): $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$ — removing an intersection equals unioning individual differences
• [Union minus a set](!#a-union-minus-a-set): $(A \\cup B) \\setminus C = (A \\setminus C) \\cup (B \\setminus C)$ — difference distributes from the right over union
• [Intersection minus a set](!#an-intersection-minus-a-set): $(A \\cap B) \\setminus C = A \\cap (B \\setminus C)$ — subtracting $C$ from $A \\cap B$ equals intersecting $A$ with $B \\setminus C$
• [Nested difference](!#the-nested-difference): $(A \\setminus B) \\setminus C = A \\setminus (B \\cup C)$ — subtracting two sets in sequence equals subtracting their union

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

    // ---- Line 1 group section (De Morgan; the other three groups are served
    // by the existing associative/distributive and difference sections) ----

    obj12: {
      title: `De Morgan's Laws for Three Sets`,
      content: `The two shortest proofs in the catalog, and the most extreme shadings: [the complement of the triple union](!#the-complement-of-the-triple-union) matches a single region on each side, while [the complement of the triple intersection](!#the-complement-of-the-triple-intersection) matches seven.

The pattern is the two-set De Morgan pair scaled up — complement converts $\\cup$ to $\\cap$ and back, and adding a third operand changes only the number of complements on the right-hand side. The same laws hold for any finite collection of sets.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Per-state sections: Associative ----

    obj13: {
      title: `Associativity of Union`,
      content: `$(A \\cup B) \\cup C = A \\cup (B \\cup C)$: both frames shade all seven regions inside the circles. However the union is grouped, the answer is "in at least one".`,
      before: ``,
      after: `The parentheses vanish because both groupings compute the same membership test: $x$ qualifies once any single set contains it. That is what licenses the notation $A \\cup B \\cup C$ with no parentheses at all — an expression that would be ambiguous for a non-associative operation.

Associativity plus commutativity together make union order-and-grouping blind: any of the twelve ways to parenthesize and arrange three sets shades these same seven regions. Its intersection twin is [associativity of intersection](!#associativity-of-intersection).`,
      link: '',
    },

    obj14: {
      title: `Associativity of Intersection`,
      content: `$(A \\cap B) \\cap C = A \\cap (B \\cap C)$: both frames shade only the central core — the region passing all three membership tests.`,
      before: ``,
      after: `Intersecting is filtering, and filters compose in any order: whether you first demand "$A$ and $B$" and then "$C$", or start from "$B$ and $C$", the survivors are the elements in all three sets. One region, however grouped.

Together with [the union law](!#associativity-of-union), this justifies writing $A \\cap B \\cap C$ bare — and the pair of frames (seven regions there, one here) bookends how differently the two operations spread while obeying the same structural law.`,
      link: '',
    },

    obj15: {
      title: `Associativity of the Symmetric Difference`,
      content: `$(A \\triangle B) \\triangle C = A \\triangle (B \\triangle C)$: both frames shade the three "only" regions plus the center — the odd-membership pattern.`,
      before: ``,
      after: `This is the least obvious associativity in elementary set theory, and the parity argument is what makes it work: each $\\triangle$ toggles membership, so an element ends up inside exactly when an odd number of the three sets contain it. Toggles compose associatively — the grouping cannot change a count's parity.

The shaded pattern (count 1 or count 3) is the same "checkerboard" the basic explorer shows for $A \\triangle B \\triangle C$, and it is the reason $\\triangle$ gives the subsets of $U$ a genuine group structure, with $\\emptyset$ as identity and every set its own inverse.`,
      link: '',
    },

    // ---- Per-state sections: Distributive ----

    obj16: {
      title: `Intersection Distributes over Union`,
      content: `$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$: both frames shade three regions — $A$'s two slivers and the center, the part of circle $A$ touching at least one neighbor.`,
      before: ``,
      after: `The left side clips the six-region union $B \\cup C$ to circle $A$; the right side assembles the same area from the two pairwise intersections. Same three regions from opposite directions — expansion and factoring certified equal.

The law is the set-theoretic sibling of $a(b+c) = ab + ac$, with one upgrade: in arithmetic only multiplication distributes over addition, while in set algebra the mirror law also holds — see [union over intersection](!#union-distributes-over-intersection).`,
      link: '',
    },

    obj17: {
      title: `Union Distributes over Intersection`,
      content: `$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$: five regions on each side — all of circle $A$ plus the bottom sliver where $B$ and $C$ meet without it.`,
      before: ``,
      after: `The right-hand side is the surprising one: intersecting two six-region unions somehow leaves five regions, exactly $A$ plus $B \\cap C$. Working the regions by eye — which regions do both unions shade? — is a worthwhile one-minute exercise, and the explorer has already done it for you.

This second distributive law has no arithmetic analogue at all ($a + bc \\neq (a+b)(a+c)$ in general). Its validity is a genuine peculiarity of the lattice of sets, dual to [intersection over union](!#intersection-distributes-over-union) under the usual $\\cup \\leftrightarrow \\cap$ swap.`,
      link: '',
    },

    // ---- Per-state sections: De Morgan's Laws ----

    obj18: {
      title: `The Complement of the Triple Union`,
      content: `$(A \\cup B \\cup C)' = A' \\cap B' \\cap C'$: both frames shade the single outside region — beyond all three circles at once.`,
      before: ``,
      after: `The left side negates "in at least one"; the right side conjoins three negations. Both leave exactly the outside, and the eight-case check is a truth-table proof drawn as a picture — one region shaded out of eight.

The law scales without change: for $n$ sets, the complement of the union is the intersection of the $n$ complements. Compare [the intersection form](!#the-complement-of-the-triple-intersection), where the same swap runs in reverse and the shading flips from one region to seven.`,
      link: '',
    },

    obj19: {
      title: `The Complement of the Triple Intersection`,
      content: `$(A \\cap B \\cap C)' = A' \\cup B' \\cup C'$: seven regions on each side — everything except the central core.`,
      before: ``,
      after: `Escaping "all three" requires failing just one membership test, and the union of the three complements collects every way to fail. Only the center — where nothing fails — stays blank.

The pair of De Morgan frames is the catalog's starkest duality display: 1 versus 7 shaded regions, $\\cup$ versus $\\cap$, and each law recoverable from the other by complementing both sides and cancelling doubles. The difference tab that follows is these laws wearing subtraction notation — see [difference over a union](!#difference-over-a-union).`,
      link: '',
    },

    // ---- Per-state sections: Difference ----

    obj20: {
      title: `Difference over a Union`,
      content: `$A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$: both frames shade one region — A-only, the part of $A$ clear of both neighbors.`,
      before: ``,
      after: `Removing a union removes everything either set touches, so what survives must avoid $B$ *and* avoid $C$ — an intersection of the two one-sided differences. Rewrite $\\setminus$ as intersection-with-complement and this is literally the first De Morgan law wearing subtraction clothes: $A \\cap (B \\cup C)' = A \\cap B' \\cap C'$.

The same single region reappears in [the nested difference](!#the-nested-difference), reached by subtracting sequentially instead of at once — one identity, three notations.`,
      link: '',
    },

    obj21: {
      title: `Difference over an Intersection`,
      content: `$A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$: three regions — everything in circle $A$ except the central core.`,
      before: ``,
      after: `Removing only the intersection is the gentlest subtraction: an element of $A$ is deleted only if *both* $B$ and $C$ claim it. Escaping either one suffices to stay — hence the union of the two differences on the right.

This is the second De Morgan law in subtraction form ($A \\cap (B \\cap C)' = A \\cap (B' \\cup C')$). Comparing its three shaded regions with the single region of [difference over a union](!#difference-over-a-union) shows at a glance how much more a union takes away than an intersection.`,
      link: '',
    },

    obj22: {
      title: `A Union Minus a Set`,
      content: `$(A \\cup B) \\setminus C = (A \\setminus C) \\cup (B \\setminus C)$: three regions — A-only, B-only, and their shared sliver, the two-circle union scrubbed of everything touching $C$.`,
      before: ``,
      after: `Subtraction distributes over union from the right: removing $C$ from a union is the same as removing it from each part first. Both routes strip the same three $C$-touching regions from the six-region union.

Caution for the algebraically adventurous: the mirror statement with intersection, $(A \\cap B) \\setminus C$ versus intersecting the differences, needs its own law — the next frame, [an intersection minus a set](!#an-intersection-minus-a-set), gives the correct form.`,
      link: '',
    },

    obj23: {
      title: `An Intersection Minus a Set`,
      content: `$(A \\cap B) \\setminus C = A \\cap (B \\setminus C)$: one region — the $A \\cap B$ sliver, the pairwise overlap with the center subtracted away.`,
      before: ``,
      after: `The law says the $\\setminus C$ can slide inside the intersection and attach to either factor: subtracting after intersecting equals intersecting with an already-subtracted set. Under the hood all three expressions are the same triple conjunction $A \\cap B \\cap C'$ — associativity and commutativity of $\\cap$ in light disguise.

The single shaded region is one the basic explorer knows as "A and B but not C" — the same region, arrived at here as the meeting point of two different orders of operations.`,
      link: '',
    },

    obj24: {
      title: `The Nested Difference`,
      content: `$(A \\setminus B) \\setminus C = A \\setminus (B \\cup C)$: one region, A-only — two subtractions in sequence collapsing into one subtraction of a union.`,
      before: ``,
      after: `Sequential removal accumulates: first strip $B$'s territory from $A$, then strip $C$'s from what is left, and everything either neighbor touched is gone — exactly what subtracting $B \\cup C$ in one stroke removes. The catalog closes by connecting back to [difference over a union](!#difference-over-a-union), which reaches this same region through an intersection instead.

The law generalizes into a habit worth keeping: a chain of subtractions can always be flattened into one subtraction of a union, $((A \\setminus B) \\setminus C) \\setminus D = A \\setminus (B \\cup C \\cup D)$ — often the single most simplifying rewrite in a difference-heavy expression.`,
      link: '',
    },
  }

  // Frozen-state framed units (Line 1): the LHS = RHS pair with match badge,
  // one per law. Built here, passed via props, rendered as content-array items.
  const d = threeSetsLawsVennDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    'assoc-u': u('assoc-u', '(A &#8746; B) &#8746; C = A &#8746; (B &#8746; C), frozen',
      'Seven regions on each side, however the parentheses fall. Grouping cannot change &#8220;in at least one&#8221;.'),
    'assoc-i': u('assoc-i', '(A &#8745; B) &#8745; C = A &#8745; (B &#8745; C), frozen',
      'Both frames shade only the central core. Filters compose in any order &#8212; the survivors pass all three tests.'),
    'assoc-sd': u('assoc-sd', '(A &#9651; B) &#9651; C = A &#9651; (B &#9651; C), frozen',
      'The odd-count checkerboard: three private regions plus the center. Toggles compose associatively &#8212; parity ignores grouping.'),
    'dist-i-over-u': u('dist-i-over-u', 'A &#8745; (B &#8746; C) = (A &#8745; B) &#8746; (A &#8745; C), frozen',
      'Three regions from opposite directions: clip the union to A, or glue the two pairwise intersections. Factoring certified.'),
    'dist-u-over-i': u('dist-u-over-i', 'A &#8746; (B &#8745; C) = (A &#8746; B) &#8745; (A &#8746; C), frozen',
      'Five regions: all of A plus the bottom sliver. Two six-region unions intersect down to exactly this &#8212; the law arithmetic lacks.'),
    'dm-u-3': u('dm-u-3', '(A &#8746; B &#8746; C)&#8242; = A&#8242; &#8745; B&#8242; &#8745; C&#8242;, frozen',
      'One region out of eight: beyond the union means beyond each set. A truth-table proof drawn as near-empty frames.'),
    'dm-i-3': u('dm-i-3', '(A &#8745; B &#8745; C)&#8242; = A&#8242; &#8746; B&#8242; &#8746; C&#8242;, frozen',
      'Seven regions out of eight: one failed membership suffices to escape. The 1-versus-7 mirror of the union law.'),
    'diff-over-u': u('diff-over-u', 'A &#8726; (B &#8746; C) = (A &#8726; B) &#8745; (A &#8726; C), frozen',
      'One region: A-only. Surviving a union-removal means avoiding B and avoiding C &#8212; De Morgan in subtraction clothes.'),
    'diff-over-i': u('diff-over-i', 'A &#8726; (B &#8745; C) = (A &#8726; B) &#8746; (A &#8726; C), frozen',
      'Three regions: all of A except the core. Only elements claimed by both neighbors are deleted &#8212; the gentlest subtraction.'),
    'union-minus-c': u('union-minus-c', '(A &#8746; B) &#8726; C = (A &#8726; C) &#8746; (B &#8726; C), frozen',
      'The two-circle union scrubbed of C &#8212; whether C is removed after uniting or from each part first.'),
    'inter-minus-c': u('inter-minus-c', '(A &#8745; B) &#8726; C = A &#8745; (B &#8726; C), frozen',
      'One sliver: the subtraction slides inside the intersection and attaches to either factor. Three notations, one region.'),
    'nested-diff': u('nested-diff', '(A &#8726; B) &#8726; C = A &#8726; (B &#8746; C), frozen',
      'Two sequential subtractions collapse into one subtraction of a union &#8212; the chain-flattening rewrite, certified.'),
  };

  // Per-state panel explanations (Line 1). Rendered by ExplanationsPanel as an
  // extra tab through processContent — $math$ and same-page !# anchors work.
  // The built-in Overview tab still renders when nothing is passed.
  const tab = (content) => [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content }] }];
  const explanations = {
    'assoc-u': tab(`Both groupings compute "in at least one", which is what licenses the parenthesis-free notation $A \\cup B \\cup C$. [Learn more about associativity of union](!#associativity-of-union) · [Associative and distributive laws](!#associative-and-distributive-laws)`),
    'assoc-i': tab(`Intersection is filtering, and filters compose in any order — one region survives, however grouped. [Learn more about associativity of intersection](!#associativity-of-intersection) · [Associative and distributive laws](!#associative-and-distributive-laws)`),
    'assoc-sd': tab(`Each $\\triangle$ toggles membership, and grouping cannot change a toggle-count's parity — the least obvious associativity, proved by the checkerboard. [Learn more about the symmetric-difference law](!#associativity-of-the-symmetric-difference) · [Associative and distributive laws](!#associative-and-distributive-laws)`),
    'dist-i-over-u': tab(`Clip the union to $A$, or glue the two pairwise intersections — the set sibling of $a(b+c) = ab+ac$. [Learn more about intersection over union](!#intersection-distributes-over-union) · [Associative and distributive laws](!#associative-and-distributive-laws)`),
    'dist-u-over-i': tab(`The mirror law with no arithmetic analogue: $a + bc \\neq (a+b)(a+c)$, yet the set version holds on all eight regions. [Learn more about union over intersection](!#union-distributes-over-intersection) · [Associative and distributive laws](!#associative-and-distributive-laws)`),
    'dm-u-3': tab(`Outside the triple union means outside every set — one region against seven, and the law scales to any $n$. [Learn more about the complement of the triple union](!#the-complement-of-the-triple-union) · [De Morgan's laws](!#de-morgans-laws-for-three-sets)`),
    'dm-i-3': tab(`One failed membership escapes the triple intersection; only the core, where nothing fails, stays blank. [Learn more about the complement of the triple intersection](!#the-complement-of-the-triple-intersection) · [De Morgan's laws](!#de-morgans-laws-for-three-sets)`),
    'diff-over-u': tab(`Surviving a union-removal means avoiding both sets — the first De Morgan law rewritten with $\\setminus$. [Learn more about difference over a union](!#difference-over-a-union) · [All difference identities](!#difference-identities-in-three-sets)`),
    'diff-over-i': tab(`Only elements claimed by both $B$ and $C$ are deleted, so escaping either suffices to stay — the second De Morgan law in subtraction form. [Learn more about difference over an intersection](!#difference-over-an-intersection) · [All difference identities](!#difference-identities-in-three-sets)`),
    'union-minus-c': tab(`Remove $C$ after uniting, or from each part first — subtraction distributes over union from the right. [Learn more about a union minus a set](!#a-union-minus-a-set) · [All difference identities](!#difference-identities-in-three-sets)`),
    'inter-minus-c': tab(`The $\\setminus C$ slides inside the intersection: all three readings are the one conjunction $A \\cap B \\cap C'$. [Learn more about an intersection minus a set](!#an-intersection-minus-a-set) · [All difference identities](!#difference-identities-in-three-sets)`),
    'nested-diff': tab(`Chains of subtractions flatten into one subtraction of a union — often the most simplifying rewrite available. [Learn more about the nested difference](!#the-nested-difference) · [All difference identities](!#difference-identities-in-three-sets)`),
  };

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
      stateUnits,
      explanations,
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

export default function ThreeSetsLawsVennPage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / section with after-text / per-state section
  // carrying its frozen LHS=RHS unit as [content, unit, after].
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content]
  })
  const withAfter = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content, sectionsContent[obj].after]
  })
  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ]
  })

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started-with-the-explorer'),
    plain('obj2', 'navigating-category-tabs'),
    plain('obj3', 'selecting-an-identity'),
    plain('obj4', 'reading-the-side-by-side-proof'),
    plain('obj5', 'the-match-indicator'),
    plain('obj6', 'theme-controls-and-navigation'),
    plain('obj7', 'what-is-a-three-set-identity'),
    plain('obj8', 'why-do-visual-proofs-work'),

    withAfter('obj9', 'associative-and-distributive-laws'),
    stateRow('obj13', 'associativity-of-union', 'assoc-u'),
    stateRow('obj14', 'associativity-of-intersection', 'assoc-i'),
    stateRow('obj15', 'associativity-of-the-symmetric-difference', 'assoc-sd'),
    stateRow('obj16', 'intersection-distributes-over-union', 'dist-i-over-u'),
    stateRow('obj17', 'union-distributes-over-intersection', 'dist-u-over-i'),

    plain('obj12', 'de-morgans-laws-for-three-sets'),
    stateRow('obj18', 'the-complement-of-the-triple-union', 'dm-u-3'),
    stateRow('obj19', 'the-complement-of-the-triple-intersection', 'dm-i-3'),

    plain('obj10', 'difference-identities-in-three-sets'),
    stateRow('obj20', 'difference-over-a-union', 'diff-over-u'),
    stateRow('obj21', 'difference-over-an-intersection', 'diff-over-i'),
    stateRow('obj22', 'a-union-minus-a-set', 'union-minus-c'),
    stateRow('obj23', 'an-intersection-minus-a-set', 'inter-minus-c'),
    stateRow('obj24', 'the-nested-difference', 'nested-diff'),

    plain('obj11', 'related-concepts-and-tools'),
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
       <ThreeSetsLawsExplorer explanations={explanations}/>
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