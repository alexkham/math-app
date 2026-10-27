// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// import diagrams from '@/app/api/db/svg/set-theory/svg'
// import summaries from '@/app/api/db/tables/set-theory/summaries'


// export async function getStaticProps(){
// const keyWords = [
//   "set theory basics",
//   "what is a set",
//   "definition of a set",
//   "set notation",
//   "set builder notation",
//   "enumerative set notation",
//   "elements of a set",
//   "set membership",
//   "cardinality of a set",
//   "finite and infinite sets",
//   "empty set",
//   "universal set",
//   "subsets and supersets",
//   "disjoint sets",
//   "set operations",
//   "union and intersection of sets",
//   "set difference",
//   "symmetric difference"
// ]

//   // ---------- FIGURES ----------
//   // Legacy /set-theory hub diagrams, re-rendered as centered figures with captions.

//   const figure = (svg, caption) => `
// <figure style="margin: 24px auto; text-align: center;">
//   ${svg}
//   <figcaption style="margin-top: 8px; font-weight: bold; color: #06357a; font-family: Arial, sans-serif; font-size: 14px;">${caption}</figcaption>
// </figure>
// `

//   const figs = {
//     anyObjects: figure(diagrams[0].svg, 'Diagram 1. Mathematical sets may contain absolutely any type of objects or entities.'),
//     membership: figure(diagrams[1].svg, 'Diagram 2. Set membership.'),
//     subsetSuperset: figure(diagrams[12].svg, 'Diagram 3. Set A is a subset of set B, and set B is a superset of set A.'),
//     disjoint: figure(diagrams[11].svg, 'Diagram 4. Disjoint sets have no common area on a Venn diagram.'),
//     intersection: figure(diagrams[7].svg, 'Diagram 5. The intersection of two sets is their common area on a Venn diagram.'),
//     union: figure(diagrams[8].svg, 'Diagram 6. The union of two sets is all the area the two circles occupy together.'),
//     difference: figure(diagrams[9].svg, 'Diagram 7. The difference A − B is the part of A that does not belong to B.'),
//     symmetricDifference: figure(diagrams[10].svg, 'Diagram 8. The symmetric difference is the area belonging to exactly one of the two sets.'),
//   }

//   // ---------- SUMMARY TABLES (shared set-theory summaries DB) ----------
//   const notationTable = summaries[0].table
//   const cardinalityTable = summaries[1].table
//   const relationshipsTable = summaries[2].table
//   const operationsTable = summaries[3].table

// const sectionsContent = {
//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Set](!/set-theory/definitions#set) — an unordered collection of unique items
// - [Element](!/set-theory/definitions#element) — a single member of a set
// - [Empty Set](!/set-theory/definitions#empty_set) — the set containing no elements
// - [Universal Set](!/set-theory/definitions#universal_set) — the set of everything under consideration
// - [Subset](!/set-theory/definitions#subset) — a set whose elements all belong to another set
// - [Union](!/set-theory/definitions#union) — the elements found in either of two sets
// - [Intersection](!/set-theory/definitions#intersection) — the elements common to both sets
// - [Cardinality](!/set-theory/definitions#cardinality) — the number of elements in a set


// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
//   link: '',
// },
//   obj1: {
//     title: `What Is a Set? The Definition`,
//     content: `
// In mathematics, a set is defined as an **unordered collection of unique items**. This short yet concise definition contains everything needed to understand the essence of the object we call a mathematical set. Let us analyze it in more depth:

// - **Unordered** — the order of the elements does not matter. Two or more sets containing the same items are identical, no matter how the items are listed.

// - **Collection** — stands for zero or more items, up to an infinite number of them.

// - **Unique** — each member of the set is distinct; no two identical items are present.

// What kinds of items or entities can be members of a mathematical set? Whatever they are, it does not matter. Mathematics is all about abstraction, and in the abstract world things can be of any type — so the famous 'apples and oranges' problem does not apply here. Entities of completely different kinds can live together as parts of the same set.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   notation: {
//     title: `Notation Used in Set Theory`,
//     lead: `The discipline that lends its marks to all the others starts here: the braces that build sets, the bar that filters them, the membership pair, and the symbol for having nothing. Sets take capital letters ($A$, $B$, $C$) by convention; the full chart of [set theory symbols](!/math-symbols/set-theory) lists every mark with its [LaTeX](!/latex) code, and the [mathematical keyboard](!/keyboard) types them directly. The summary table below collects the symbols at a glance.`,
//     inherited: `The containment family $\\subseteq$, $\\subset$, $\\supseteq$, $\\supset$ appears in **Relationships Between Sets** below and is owned by the [subsets page](!/set-theory/subsets); the operation marks $\\cap$, $\\cup$ belong to [operations](!/set-theory/operations).`,
//     entries: [
//       {
//         id: 'roster-braces',
//         tex: `$\\{1, 2, 3\\}$`,
//         read: `the set containing one, two, three`,
//         means: `Enumerative (roster) notation: curly braces list the members outright, and membership is all they claim — order and repetition carry no meaning. Anything can be a member: numbers, letters, words, other sets.`,
//         cases: `Unlistable tails compress to an ellipsis — $\\{1, 2, 3, \\ldots\\}$ continues the visible pattern; [ranges of functions](!/functions/range#2) borrow the roster for finite output lists.`,
//         confusedWith: `The other braces and brackets. A single brace selects rows in [piecewise definitions](!/functions/piecewise#2); square brackets build [intervals](!/functions/domain#2) — $\\{2, 7\\}$ is two numbers, $[2, 7]$ is infinitely many.`,
//       },
//       {
//         id: 'set-builder-bar',
//         tex: `$\\{x \\mid x > 0\\}$`,
//         read: `the set of all x such that x is positive`,
//         means: `Descriptive (set-builder) notation: four building blocks — a variable, the vertical bar reading "such that", a condition, and the enclosing braces. It names sets too large or too awkward to list.`,
//         cases: `Both slots accept words as freely as symbols — $\\{$prime number $\\mid$ prime number $> 10\\}$ is legal; [domain descriptions](!/functions/domain#2) run this grammar with the colon variant $\\{x : \\ldots\\}$ as an alternative bar.`,
//         confusedWith: `Other vertical bars. The same stroke means [divides](!/arithmetic/divisibility) in number theory and absolute value when doubled around a quantity — between a variable and its condition, inside braces, it is always "such that".`,
//       },
//       {
//         id: 'membership-pair',
//         tex: `$\\in$ · $\\notin$`,
//         read: `is an element of; is not an element of`,
//         means: `The membership pair: $x \\in A$ claims $x$ is a member, and the slash manufactures the denial — $y \\notin B$. The slash-negation pattern is general equipment: $\\neq$, $\\notin$, $\\not\\subset$ all deny by striking through.`,
//         cases: `Membership doubles as a domain declaration across mathematics — the $n \\in \\mathbb{Z}$ of [general solutions](!/trigonometry/functions#notation) and the $z \\in \\mathbb{C}$ of [complex numbers](!/complex-numbers/basics#notation) are this mark at work abroad.`,
//         confusedWith: `Containment. $1 \\in A$ but $\\{1\\} \\subseteq A$ — an element belongs, a set is contained; mixing $\\in$ with $\\subseteq$ is the subject's most reliable exam error, and **Relationships Between Sets** below draws the line.`,
//       },
//       {
//         id: 'empty-set',
//         tex: `$\\varnothing$`,
//         read: `the empty set`,
//         means: `The set with no members, written $\\varnothing$ or $\\{\\}$ — one object, two spellings. It is a set like any other: a legitimate value, a legitimate member, a legitimate answer.`,
//         cases: `Nesting is not emptiness: $\\{\\varnothing\\}$ is a one-element set whose single member happens to be empty — $|\\varnothing| = 0$ but $|\\{\\varnothing\\}| = 1$.`,
//         confusedWith: `The Greek letter phi. Handwriting collapses $\\varnothing$ into $\\phi$ — but the empty-set mark is a struck circle, not a letter; writing "phi" for the empty set is a naming error graders notice.`,
//       },
//     ],
//     symbolsHref: `/math-symbols/set-theory`,
//     symbolsLabel: `All set theory symbols`,
//     parentHref: `/set-theory`,
//     parentLabel: `Set Theory`,
//   },
//   obj3: {
//     title: `Cardinality and Types of Sets`,
//     content: `
// The **cardinality** of a mathematical set is simply its size — the number of elements in the set. Cardinality is most often denoted by the symbol |A| or card(A), where A is the set; symbols like #A, n(A), or ‖A‖ may be used as well.

// If A = {1, 2, 3}, then the cardinality of A is |A| = 3, because there are three elements in the set. If B = {1, 'apple', 3.14, True}, then |B| = 4, because there are four elements in this set.

// Based on cardinality, mathematical sets are classified into groups:

// - **Finite sets** — sets having a well-defined number of elements that may be expressed by a natural number. Examples: A = {1, 2, 3, 4, 5}, B = {1, 'apple', 3.14, True}. A set may contain millions of objects, but as long as it can be counted even theoretically, the set is finite.

// - **Infinite sets** — sets whose elements cannot be exhausted by counting. Examples: A = {x | x is a positive even number} — it is impossible to count all positive even numbers; B = {1, 2, 3, ...}.

// - **Empty set** — a special case of a finite set having no elements. Notations used for the empty set: E = { } or E = ∅.

// - **Universal set** — a set that contains all the objects or elements under consideration within a specific context or domain of discourse. It is typically denoted **U** or **ξ**. The universal set may be finite — if it represents the days of the week, then U = {Monday, Tuesday, Wednesday, ..., Sunday}, a finite set of 7 elements. It may also be infinite — if it represents all natural numbers, then U = {1, 2, 3, ...}; if it represents all real numbers, then U = ℝ, an infinite set with an uncountable number of elements.

// Interestingly, despite being conceptually opposite, the universal set and the empty set share fundamental commonalities in set theory. Both are extremes in the hierarchy of sets — the universal set containing everything and the empty set containing nothing. Yet they are complementary and serve as identity elements in key set operations.

// Understanding the universal set and the empty set has immense importance for mastering other ideas in set theory, such as operations on sets, relations, and more. This section only measures size by counting — the story of comparing infinite sizes continues on the dedicated [cardinality](!/set-theory/cardinality) page.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Relationships Between Sets`,
//     content: `
// **Basic Set Membership**

// - **Belongs to (∈)** — an object belongs to a set if it is an element of the set. Notation: x ∈ A means that x is an element of set A. Example: if A = {1, 2, 3}, then 1 ∈ A but 4 ∉ A.

// - **Does not belong to (∉)** — notation: y ∉ B means that y is not an element of set B. Example: if B = {5, 6, 7}, then 4 ∉ B.
//     `,
//     content2: `
// **Equality and Inequality of Sets**

// - **Equality (=)** — two sets are equal if they contain exactly the same elements. Example: A = {1, 2, 3} and B = {3, 1, 2}; A = B.

// - **Inequality (≠)** — two sets are unequal if there is at least one element that is different between the sets. Example: A = {1, 2, 3} and C = {4, 5, 6}; A ≠ C.

// **Subsets**

// - **Basic subsets** — a set is a [subset](!/set-theory/subsets) of another set if every element of this set is also an element of the including set. Example: A = {1, 2} is a subset of B = {1, 2, 3, 4}.

// - **Proper subsets** — a proper subset of a set is a subset that is not equal to the original set, containing fewer elements. Example: A = {1, 2} is a proper subset of B.

// **Supersets**

// - **Basic supersets** — a superset includes every element of another set. Example: A = {1, 2, 3, 4} is a superset of B = {1, 2} and of C = {1, 2, 3, 4}.

// - **Proper supersets** — a proper superset contains all elements of the subset plus additional elements. Example: A is a proper superset of B, but not a proper superset of C.
//     `,
//     content3: `
// **Disjoint Sets**

// Two sets are disjoint if they have no common elements. Example: A = {1, 2, 3} and C = {4, 5, 6} are disjoint.
//     `,
//     content4: `
// **Complement**

// The complement of set A with respect to a universal set U includes all elements that are in U but not in A. Example: U = {1, 2, 3, 4, 5}; A = {1, 2, 3}; then $A^c$ = {4, 5}.

// This section starts by establishing the fundamental notion of set membership, which is crucial for understanding all subsequent relations and operations between sets. That foundation is then expanded with the various types of set relations, each illustrated with a clear example. The full treatment of these relations lives on the [relationships between sets](!/set-theory/relationships) page.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Operations on Sets`,
//     content: `
// The diagrams accompanying each operation below are [Venn diagrams](!/set-theory/venn-diagrams) — the standard way to picture how sets combine.

// - **Intersection (∩)** — the intersection of two sets A and B, denoted A ∩ B, is the set of elements that are common to both A and B. Example: if A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B = {3, 4}.
//     `,
//     content2: `
// - **Union (∪)** — the union of two sets A and B, denoted A ∪ B, is the set of elements that are in A, in B, or in both. Example: if A = {1, 2, 3} and B = {4, 5, 3}, then A ∪ B = {1, 2, 3, 4, 5}.
//     `,
//     content3: `
// - **Difference (−)** — the difference between two sets A and B, denoted A − B, is the set of elements that are in A but not in B. Example: if A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A − B = {1, 2}.
//     `,
//     content4: `
// - **Symmetric difference (Δ)** — the symmetric difference between two sets A and B, denoted A Δ B, is the set of elements that are in either of the sets A or B but not in their intersection. Example: if A = {1, 2, 3} and B = {3, 4, 5}, then A Δ B = {1, 2, 4, 5}.
//     `,
//     content5: `
// This section demonstrates the fundamental operations on sets with graphical examples to aid in understanding intersection, union, difference, and symmetric difference. The dedicated [operations on sets](!/set-theory/operations) page develops each operation in depth, together with the algebraic laws they obey.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// const introContent = {
//   id: "intro",
//   title: `The Vocabulary Every Other Page Builds On`,
//   content: `
// Set theory is the language in which much of modern mathematics is written. This page collects its basic vocabulary in one place: what a set is, how sets are written down, how their size is measured, and the standard relationships and operations between sets. Every topic surveyed here is developed in depth on its own dedicated page within the [set theory](!/set-theory) section.
//   `,
// };


// const faqQuestions = {
//   obj1: {
//     question: "What is a set in mathematics?",
//     answer: "A set is an unordered collection of unique items. The order of elements does not matter, each element appears only once, and the elements can be objects of absolutely any type.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What can be an element of a set?",
//     answer: "Practically anything — numbers, letters, words, symbols, or even other sets. Mathematics abstracts away the nature of the objects, so items of completely different types can belong to the same set.",
//     sectionId: "1"
//   },
//   obj3: {
//     question: "What is enumerative set notation?",
//     answer: "Enumerative notation lists the elements of a set within curly braces, e.g. A = {1, 2, 3}. For large or infinite sets, an ellipsis can stand for the omitted elements, e.g. A = {1, 2, 3, ...}.",
//     sectionId: "2"
//   },
//   obj4: {
//     question: "What is descriptive (set-builder) notation?",
//     answer: "Set-builder notation defines a set by a property its elements must satisfy, e.g. A = {x | x is a positive even number}. The vertical bar reads as 'such that'. It consists of a variable, the bar, a condition, and enclosing curly braces.",
//     sectionId: "2"
//   },
//   obj5: {
//     question: "What is the cardinality of a set?",
//     answer: "Cardinality is the size of a set — the number of elements it contains, denoted |A| or card(A). If A = {1, 2, 3}, then |A| = 3.",
//     sectionId: "3"
//   },
//   obj6: {
//     question: "What is the universal set?",
//     answer: "The universal set, denoted U or ξ, contains all objects under consideration in a given context. It can be finite (the days of the week) or infinite (all natural or real numbers).",
//     sectionId: "3"
//   },
//   obj7: {
//     question: "What is the empty set?",
//     answer: "The empty set is the set containing no elements, written ∅ or { }. It is a special case of a finite set and, together with the universal set, serves as an identity element in key set operations.",
//     sectionId: "3"
//   },
//   obj8: {
//     question: "What is a subset?",
//     answer: "A set is a subset of another set if every element of the first set is also an element of the second, e.g. {1, 2} ⊆ {1, 2, 3, 4}. A proper subset is a subset that is not equal to the original set.",
//     sectionId: "4"
//   },
//   obj9: {
//     question: "What are disjoint sets?",
//     answer: "Two sets are disjoint if they have no elements in common. For example, A = {1, 2, 3} and C = {4, 5, 6} are disjoint sets.",
//     sectionId: "4"
//   },
//   obj10: {
//     question: "What is the difference between union and intersection?",
//     answer: "The union A ∪ B collects the elements that are in A, in B, or in both. The intersection A ∩ B keeps only the elements common to both sets.",
//     sectionId: "5"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Set Theory Basics",
//     "description": "Fundamental concepts of set theory explained: the definition of a set, notation, cardinality and types of sets, relationships between sets, and the basic set operations.",
//     "url": "https://www.learnmathclass.com/set-theory/basics",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Set Theory Basics"
//     },
//     "teaches": [
//       "Definition of a mathematical set",
//       "Enumerative and descriptive (set-builder) notation",
//       "Cardinality and types of sets",
//       "Relationships between sets: membership, equality, subsets, supersets, disjoint sets, complement",
//       "Basic set operations: intersection, union, difference, symmetric difference"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2026-07-31",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
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
//         "name": "Set Theory",
//         "item": "https://www.learnmathclass.com/set-theory"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Basics",
//         "item": "https://www.learnmathclass.com/set-theory/basics"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }

//   return {
//   props: {
//     sectionsContent,
//     introContent,
//     figs,
//     notationTable,
//     cardinalityTable,
//     relationshipsTable,
//     operationsTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Set Theory Basics: Terminology and Core Concepts | Learn Math Class",
//       description: "Fundamental concepts of set theory explained: the definition of a set, notation, cardinality and types of sets, relationships between sets, and the basic operations — with diagrams and summary tables.",
//       // Surfaced on the /set-theory hub via buildSectionData extraction.
//       hubDescription: "The complete starter vocabulary of set theory on one page: what a mathematical set is, how sets are written in enumerative and set-builder notation, how cardinality measures their size, the relationships between sets — membership, equality, subsets and supersets, disjointness, complement — and the four basic operations of intersection, union, difference and symmetric difference, each illustrated with diagrams and collected into summary tables.",
//       keywords: keyWords.join(", "),
//       url: "/set-theory/basics",
//       name: "Set Theory Basics"
//     },
//   }
// }
//    }


// export default function SetTheoryBasicsPage({seoData, sectionsContent, introContent, figs, notationTable, cardinalityTable, relationshipsTable, operationsTable, faqQuestions, schemas}) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//           <div key={'fig-any-objects'} dangerouslySetInnerHTML={{ __html: figs.anyObjects }} />,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.notation.title,
//         link:``,
//         content:[
//           <NotationSection
//             key={'notation'}
//             title={sectionsContent.notation.title}
//             lead={sectionsContent.notation.lead}
//             inherited={sectionsContent.notation.inherited}
//             entries={sectionsContent.notation.entries}
//             symbolsHref={sectionsContent.notation.symbolsHref}
//             symbolsLabel={sectionsContent.notation.symbolsLabel}
//             parentHref={sectionsContent.notation.parentHref}
//             parentLabel={sectionsContent.notation.parentLabel}
//             theme={'navy'}
//           />,
//           <div
//             key={'notation-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: notationTable }}
//           />,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//           <div
//             key={'cardinality-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: cardinalityTable }}
//           />,
//         ]
//     },

//     // obj4: membership → equality → subsets/supersets → disjoint → complement,
//     // with the legacy hub diagrams interleaved where the old page placed them
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//           <div key={'fig-membership'} dangerouslySetInnerHTML={{ __html: figs.membership }} />,
//           sectionsContent.obj4.content2,
//           <div key={'fig-subset-superset'} dangerouslySetInnerHTML={{ __html: figs.subsetSuperset }} />,
//           sectionsContent.obj4.content3,
//           <div key={'fig-disjoint'} dangerouslySetInnerHTML={{ __html: figs.disjoint }} />,
//           sectionsContent.obj4.content4,
//           <div
//             key={'relationships-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: relationshipsTable }}
//           />,
//         ]
//     },

//     // obj5: one diagram per operation, as on the legacy hub
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//           <div key={'fig-intersection'} dangerouslySetInnerHTML={{ __html: figs.intersection }} />,
//           sectionsContent.obj5.content2,
//           <div key={'fig-union'} dangerouslySetInnerHTML={{ __html: figs.union }} />,
//           sectionsContent.obj5.content3,
//           <div key={'fig-difference'} dangerouslySetInnerHTML={{ __html: figs.difference }} />,
//           sectionsContent.obj5.content4,
//           <div key={'fig-symmetric-difference'} dangerouslySetInnerHTML={{ __html: figs.symmetricDifference }} />,
//           sectionsContent.obj5.content5,
//           <div
//             key={'operations-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: operationsTable }}
//           />,
//         ]
//     },
// ]

//   return (
//    <>


// <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />

//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />

//   <meta name="robots" content="index, follow" />

//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar
//            side='right'
//            // topOffset='65px'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          />
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Set Theory Basics: Terminology and Core Concepts</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"

//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//      <KeyTermsCard
//            id="0"
//            title={sectionsContent.obj0.title}
//            content={sectionsContent.obj0.content}
//            after={sectionsContent.obj0.after}
//            variant="light"
//          />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import diagrams from '@/app/api/db/svg/set-theory/svg'
import summaries from '@/app/api/db/tables/set-theory/summaries'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import twoSetsVennDiagrams from '@/app/components/venn-diagrams/twoSetsVennDiagrams'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "set theory basics",
  "what is a set",
  "definition of a set",
  "set notation",
  "set builder notation",
  "enumerative set notation",
  "elements of a set",
  "set membership",
  "cardinality of a set",
  "finite and infinite sets",
  "empty set",
  "universal set",
  "subsets and supersets",
  "disjoint sets",
  "set operations",
  "union and intersection of sets",
  "set difference",
  "symmetric difference"
]

  // ---------- FIGURES ----------
  // Legacy /set-theory hub diagrams, re-rendered as centered figures with captions.

  const figure = (svg, caption) => `
<figure style="margin: 24px auto; text-align: center;">
  ${svg}
  <figcaption style="margin-top: 8px; font-weight: bold; color: #06357a; font-family: Arial, sans-serif; font-size: 14px;">${caption}</figcaption>
</figure>
`

  const figs = {
    anyObjects: figure(diagrams[0].svg, 'Diagram 1. Mathematical sets may contain absolutely any type of objects or entities.'),
    membership: figure(diagrams[1].svg, 'Diagram 2. Set membership.'),
    subsetSuperset: figure(diagrams[12].svg, 'Diagram 3. Set A is a subset of set B, and set B is a superset of set A.'),
    disjoint: figure(diagrams[11].svg, 'Diagram 4. Disjoint sets have no common area on a Venn diagram.'),
    intersection: figure(diagrams[7].svg, 'Diagram 5. The intersection of two sets is their common area on a Venn diagram.'),
    union: figure(diagrams[8].svg, 'Diagram 6. The union of two sets is all the area the two circles occupy together.'),
    difference: figure(diagrams[9].svg, 'Diagram 7. The difference A − B is the part of A that does not belong to B.'),
    symmetricDifference: figure(diagrams[10].svg, 'Diagram 8. The symmetric difference is the area belonging to exactly one of the two sets.'),
  }

  // ---------- SUMMARY TABLES (shared set-theory summaries DB) ----------
  const notationTable = summaries[0].table
  const cardinalityTable = summaries[1].table
  const relationshipsTable = summaries[2].table
  const operationsTable = summaries[3].table

const sectionsContent = {
    obj0: {
  title: `Key Terms`,
  content: `
- [Set](!/set-theory/definitions#set) — an unordered collection of unique items
- [Element](!/set-theory/definitions#element) — a single member of a set
- [Empty Set](!/set-theory/definitions#empty_set) — the set containing no elements
- [Universal Set](!/set-theory/definitions#universal_set) — the set of everything under consideration
- [Subset](!/set-theory/definitions#subset) — a set whose elements all belong to another set
- [Union](!/set-theory/definitions#union) — the elements found in either of two sets
- [Intersection](!/set-theory/definitions#intersection) — the elements common to both sets
- [Cardinality](!/set-theory/definitions#cardinality) — the number of elements in a set


`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
  link: '',
},
  obj1: {
    title: `What Is a Set? The Definition`,
    content: `
In mathematics, a set is defined as an **unordered collection of unique items**. This short yet concise definition contains everything needed to understand the essence of the object we call a mathematical set. Let us analyze it in more depth:

- **Unordered** — the order of the elements does not matter. Two or more sets containing the same items are identical, no matter how the items are listed.

- **Collection** — stands for zero or more items, up to an infinite number of them.

- **Unique** — each member of the set is distinct; no two identical items are present.

@academic[fact,aside:true,width:35%:Not every collection can be a set
The collection of all sets that are not members of themselves would contain itself exactly when it does not. Russell found this in 1901 and wrote to Frege in 1902, as Frege's book founding arithmetic on such collections went to press.]@

What kinds of items or entities can be members of a mathematical set? Whatever they are, it does not matter. Mathematics is all about abstraction, and in the abstract world things can be of any type — so the famous 'apples and oranges' problem does not apply here. Entities of completely different kinds can live together as parts of the same set.

Members can even be sets themselves. The set $\\{1, \\{2, 3\\}\\}$ has two elements: the number $1$ and the set $\\{2, 3\\}$. A set can also be described by a property alone, as in the set of all even numbers, without listing a single member.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  notation: {
    title: `Notation Used in Set Theory`,
    lead: `The discipline that lends its marks to all the others starts here: the braces that build sets, the bar that filters them, the membership pair, and the symbol for having nothing. Sets take capital letters ($A$, $B$, $C$) by convention; the full chart of [set theory symbols](!/math-symbols/set-theory) lists every mark with its [LaTeX](!/latex) code, and the [mathematical keyboard](!/keyboard) types them directly. The summary table below collects the symbols at a glance.`,
    inherited: `The containment family $\\subseteq$, $\\subset$, $\\supseteq$, $\\supset$ appears in **Relationships Between Sets** below and is owned by the [subsets page](!/set-theory/subsets); the operation marks $\\cap$, $\\cup$ belong to [operations](!/set-theory/operations).`,
    entries: [
      {
        id: 'roster-braces',
        tex: `$\\{1, 2, 3\\}$`,
        read: `the set containing one, two, three`,
        means: `Enumerative (roster) notation: curly braces list the members outright, and membership is all they claim — order and repetition carry no meaning. Anything can be a member: numbers, letters, words, other sets.`,
        cases: `Unlistable tails compress to an ellipsis — $\\{1, 2, 3, \\ldots\\}$ continues the visible pattern; [ranges of functions](!/functions/range#2) borrow the roster for finite output lists.`,
        confusedWith: `The other braces and brackets. A single brace selects rows in [piecewise definitions](!/functions/piecewise#2); square brackets build [intervals](!/functions/domain#2) — $\\{2, 7\\}$ is two numbers, $[2, 7]$ is infinitely many.`,
      },
      {
        id: 'set-builder-bar',
        tex: `$\\{x \\mid x > 0\\}$`,
        read: `the set of all x such that x is positive`,
        means: `Descriptive (set-builder) notation: four building blocks — a variable, the vertical bar reading "such that", a condition, and the enclosing braces. It names sets too large or too awkward to list.`,
        cases: `Both slots accept words as freely as symbols — $\\{$prime number $\\mid$ prime number $> 10\\}$ is legal; [domain descriptions](!/functions/domain#2) run this grammar with the colon variant $\\{x : \\ldots\\}$ as an alternative bar.`,
        confusedWith: `Other vertical bars. The same stroke means [divides](!/arithmetic/divisibility) in number theory and absolute value when doubled around a quantity — between a variable and its condition, inside braces, it is always "such that".`,
      },
      {
        id: 'membership-pair',
        tex: `$\\in$ · $\\notin$`,
        read: `is an element of; is not an element of`,
        means: `The membership pair: $x \\in A$ claims $x$ is a member, and the slash manufactures the denial — $y \\notin B$. The slash-negation pattern is general equipment: $\\neq$, $\\notin$, $\\not\\subset$ all deny by striking through.`,
        cases: `Membership doubles as a domain declaration across mathematics — the $n \\in \\mathbb{Z}$ of [general solutions](!/trigonometry/functions#notation) and the $z \\in \\mathbb{C}$ of [complex numbers](!/complex-numbers/basics#notation) are this mark at work abroad.`,
        confusedWith: `Containment. $1 \\in A$ but $\\{1\\} \\subseteq A$ — an element belongs, a set is contained; mixing $\\in$ with $\\subseteq$ is the subject's most reliable exam error, and **Relationships Between Sets** below draws the line.`,
      },
      {
        id: 'empty-set',
        tex: `$\\varnothing$`,
        read: `the empty set`,
        means: `The set with no members, written $\\varnothing$ or $\\{\\}$ — one object, two spellings. It is a set like any other: a legitimate value, a legitimate member, a legitimate answer.`,
        cases: `Nesting is not emptiness: $\\{\\varnothing\\}$ is a one-element set whose single member happens to be empty — $|\\varnothing| = 0$ but $|\\{\\varnothing\\}| = 1$.`,
        confusedWith: `The Greek letter phi. Handwriting collapses $\\varnothing$ into $\\phi$ — but the empty-set mark is a struck circle, not a letter; writing "phi" for the empty set is a naming error graders notice.`,
      },
    ],
    symbolsHref: `/math-symbols/set-theory`,
    symbolsLabel: `All set theory symbols`,
    parentHref: `/set-theory`,
    parentLabel: `Set Theory`,
  },
  faq: {
    title: `Set Theory Basics FAQ`,
  },
  obj3: {
    title: `Cardinality and Types of Sets`,
    content: `
The **cardinality** of a mathematical set is simply its size — the number of elements in the set. Cardinality is most often denoted by the symbol |A| or card(A), where A is the set; symbols like #A, n(A), or ‖A‖ may be used as well.

If A = {1, 2, 3}, then the cardinality of A is |A| = 3, because there are three elements in the set. If B = {1, 'apple', 3.14, True}, then |B| = 4, because there are four elements in this set.

@academic[pitfall,aside:true,width:35%:Counting a repeated element twice
Taking $|\\{1, 2, 2, 3\\}| = 4$ counts the entry 2 twice. The listing names only the elements 1, 2 and 3, so the size is $3$, the same as for $\\{1, 2, 3\\}$.
[Read more](!#pitfalls)]@

To find a cardinality from a listing, read off the members one by one and count them. The order in which they are written plays no part, so {3, 1, 2} gives the same count as {1, 2, 3}, and a member that is itself a word, a number or a symbol counts in the same way as any other. For a finite set the counting always comes to an end, and its result is the cardinality: 0 for the empty set and a positive whole number for any other finite set.

@academic[fact,aside:true,width:35%:Whole numbers built from the empty set
In 1923 von Neumann defined $0$ as $\\varnothing$ and each next whole number as the set of all numbers before it: $1 = \\{\\varnothing\\}$, $2 = \\{\\varnothing, \\{\\varnothing\\}\\}$. Each number $n$ is then a set with exactly $n$ elements.]@

Based on cardinality, mathematical sets are classified into groups:

- **Finite sets** — sets having a well-defined number of elements that may be expressed by a natural number. Examples: A = {1, 2, 3, 4, 5}, B = {1, 'apple', 3.14, True}. A set may contain millions of objects, but as long as counting its elements would eventually end, even if only in theory, the set is finite.

- **Infinite sets** — sets whose elements cannot be exhausted by counting. Examples: A = {x | x is a positive even number} — it is impossible to count all positive even numbers; B = {1, 2, 3, ...}.

- **Empty set** — a special case of a finite set having no elements. Notations used for the empty set: E = { } or E = ∅.

- **Universal set** — a set that contains all the objects or elements under consideration within a specific context or domain of discourse. It is typically denoted **U** or **ξ**. The universal set may be finite — if it represents the days of the week, then U = {Monday, Tuesday, Wednesday, ..., Sunday}, a finite set of 7 elements. It may also be infinite — if it represents all natural numbers, then U = {1, 2, 3, ...}; if it represents all real numbers, then U = ℝ, an infinite set with an uncountable number of elements.

@academic[pitfall,aside:true,width:35%:Putting the empty set inside braces
Writing the empty set as $\\{\\varnothing\\}$ gives a set with one element, the empty set itself, so $|\\{\\varnothing\\}| = 1$. The empty set is $\\varnothing$ or $\\{\\}$ on its own, with $|\\varnothing| = 0$.
[Read more](!#pitfalls)]@

Interestingly, despite being conceptually opposite, the universal set and the empty set share fundamental commonalities in set theory. Both are extremes in the hierarchy of sets — the universal set containing everything and the empty set containing nothing. Yet they are complementary and serve as identity elements in key set operations.

Understanding the universal set and the empty set has immense importance for mastering other ideas in set theory, such as operations on sets, relations, and more. This section only measures size by counting — the story of comparing infinite sizes continues on the dedicated [cardinality](!/set-theory/cardinality) page.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Relationships Between Sets`,
    content: `
**Basic Set Membership**

- **Belongs to (∈)** — an object belongs to a set if it is an element of the set. Notation: x ∈ A means that x is an element of set A. Example: if A = {1, 2, 3}, then 1 ∈ A but 4 ∉ A.

- **Does not belong to (∉)** — notation: y ∉ B means that y is not an element of set B. Example: if B = {5, 6, 7}, then 4 ∉ B.
    `,
    content2: `
**Equality and Inequality of Sets**

- **Equality (=)** — two sets are equal if they contain exactly the same elements. Example: A = {1, 2, 3} and B = {3, 1, 2}; A = B.

- **Inequality (≠)** — two sets are unequal if there is at least one element that is different between the sets. Example: A = {1, 2, 3} and C = {4, 5, 6}; A ≠ C.

**Subsets**

- **Basic subsets** — a set is a [subset](!/set-theory/subsets) of another set if every element of this set is also an element of the including set. Example: A = {1, 2} is a subset of B = {1, 2, 3, 4}.

- **Proper subsets** — a proper subset of a set is a subset that is not equal to the original set; for a finite set, it contains fewer elements. Example: A = {1, 2} is a proper subset of B.

@academic[pitfall,aside:true,width:35%:Using the membership sign for a subset
Writing $\\{1, 2\\} \\in B$ for $B = \\{1, 2, 3, 4\\}$ claims that the set $\\{1, 2\\}$ is one of the four elements of $B$, and it is not. The correct statements are $\\{1, 2\\} \\subseteq B$ and $1 \\in B$.
[Read more](!#pitfalls)]@

The example set B = {1, 2, 3, 4} has many subsets besides A = {1, 2}. The one-element sets such as {3} are subsets of B, and so are the empty set and B itself, since each of them is built only from elements of B. Their sizes run from 0 elements for the empty set up to 4 elements for B itself, and only B is a subset of B that is not proper. In all, a set with 4 elements has $2^4 = 16$ subsets.

**Supersets**

- **Basic supersets** — a superset includes every element of another set. Example: A = {1, 2, 3, 4} is a superset of B = {1, 2} and of C = {1, 2, 3, 4}.

- **Proper supersets** — a proper superset contains all elements of the subset plus additional elements. Example: A is a proper superset of B, but not a proper superset of C.
    `,
    content3: `
**Disjoint Sets**

Two sets are disjoint if they have no common elements. Example: A = {1, 2, 3} and C = {4, 5, 6} are disjoint.
    `,
    content4: `
**Complement**

The complement of set A with respect to a universal set U includes all elements that are in U but not in A. Example: U = {1, 2, 3, 4, 5}; A = {1, 2, 3}; then $A^c$ = {4, 5}.

This section starts by establishing the fundamental notion of set membership, which is crucial for understanding all subsequent relations and operations between sets. That foundation is then expanded with the various types of set relations, each illustrated with a clear example. The full treatment of these relations lives on the [relationships between sets](!/set-theory/relationships) page.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Operations on Sets`,
    content: `
The diagrams accompanying each operation below are [Venn diagrams](!/set-theory/venn-diagrams) — the standard way to picture how sets combine.

- **Intersection (∩)** — the intersection of two sets A and B, denoted A ∩ B, is the set of elements that are common to both A and B. Example: if A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B = {3, 4}.
    `,
    content2: `
- **Union (∪)** — the union of two sets A and B, denoted A ∪ B, is the set of elements that are in A, in B, or in both. Example: if A = {1, 2, 3} and B = {4, 5, 3}, then A ∪ B = {1, 2, 3, 4, 5}.

@academic[pitfall,aside:true,width:35%:Adding the sizes for a union
Taking $3 + 3 = 6$ as the size of $A \\cup B$ for $A = \\{1, 2, 3\\}$ and $B = \\{4, 5, 3\\}$ counts the shared element 3 twice. The union $\\{1, 2, 3, 4, 5\\}$ has $5$ elements: $3 + 3 - 1 = 5$.
[Read more](!#pitfalls)]@

The shared element 3 belongs to A and to B at the same time, and the union takes it in like any other element. Union is the set version of the word "or": an element qualifies as soon as it belongs to at least one of the two sets, and belonging to both is allowed. The elements 1 and 2 come into the union from A alone, and 4 and 5 from B alone. The diagram below shades both circles completely, the overlap included.
    `,
    content3: `
- **Difference (−)** — the difference between two sets A and B, denoted A − B, is the set of elements that are in A but not in B. Example: if A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A − B = {1, 2}.

@academic[pitfall,aside:true,width:35%:Reversing the difference
Computing $B - A$ in place of $A - B$ for $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$ gives $\\{5, 6\\}$, the part of $B$ outside $A$. Order matters: $A - B = \\{1, 2\\}$ and $B - A = \\{5, 6\\}$ are different sets.
[Read more](!#pitfalls)]@

The difference starts from the first set and removes whatever the second set also contains. In the example, A loses 3 and 4 because B contains them, and it keeps 1 and 2, which B lacks. The elements 5 and 6 belong to B alone, so they play no part in the result: the difference only ever takes elements away from A and never adds any. The diagram below shades the part of the circle A that lies outside B.
    `,
    content4: `
- **Symmetric difference (Δ)** — the symmetric difference between two sets A and B, denoted A Δ B, is the set of elements that are in either of the sets A or B but not in their intersection. Example: if A = {1, 2, 3} and B = {3, 4, 5}, then A Δ B = {1, 2, 4, 5}.
    `,
    content5: `
This section demonstrates the fundamental operations on sets with graphical examples to aid in understanding intersection, union, difference, and symmetric difference. The dedicated [operations on sets](!/set-theory/operations) page develops each operation in depth, together with the algebraic laws they obey.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Common Pitfalls`,
    content: `
Five mistakes come up again and again with the basic vocabulary of sets. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Counting a repeated element twice**

A set is written down with one element listed twice, and its size is read off as the number of entries in the listing. Repeated entries name the same element, so they add nothing to the set.

Wrong working: $\\{1, 2, 2, 3\\}$ has four entries, so $|\\{1, 2, 2, 3\\}| = 4$.

Right working: the distinct elements are 1, 2 and 3, so $\\{1, 2, 2, 3\\} = \\{1, 2, 3\\}$ and $|\\{1, 2, 2, 3\\}| = 3$.

Why it happens: counting the entries on the page is quicker than checking each one against the others, and many lists outside mathematics, such as shopping lists or tallies, do count repeats.

How to check: rewrite the set with each element once, in any order, before counting. The number of entries in the rewritten listing is the cardinality.

**Putting the empty set inside braces**

The empty set is written as $\\{\\varnothing\\}$, with its symbol placed inside a pair of braces. The braces build a new set whose one element is the empty set, so the result is no longer empty.

Wrong working: $E = \\{\\varnothing\\}$ is taken to be the empty set, so $|E| = 0$.

Right working: $\\{\\varnothing\\}$ has exactly one element, so $|\\{\\varnothing\\}| = 1$. The empty set is written $\\varnothing$ or $\\{\\}$ on its own, and $|\\varnothing| = 0$.

Why it happens: other sets are written with braces, so wrapping the symbol in braces looks like proper set notation. But $\\varnothing$ is already a complete name for a set and needs no braces around it.

How to check: ask what is listed between the outer braces. In $\\{\\varnothing\\}$ there is one item, so the set is not empty.

**Using the membership sign for a subset**

The sign $\\in$ is written between two sets when one is contained in the other. $\\in$ says that its left side is one of the elements of the right side; containment of a whole set is written $\\subseteq$.

Wrong working: for $B = \\{1, 2, 3, 4\\}$, the statements $\\{1, 2\\} \\in B$ and $1 \\subseteq B$ are written.

Right working: the elements of $B$ are the numbers 1, 2, 3 and 4, and the set $\\{1, 2\\}$ is not one of them, so $\\{1, 2\\} \\notin B$ but $\\{1, 2\\} \\subseteq B$. The number 1 is an element, so $1 \\in B$, and the one-element set built from it is a subset: $\\{1\\} \\subseteq B$.

Why it happens: both signs are often read aloud as "is in", and in everyday speech a group of items can be in a collection just as a single item can.

How to check: read $x \\in B$ as "x appears in the listing of B". Look for $\\{1, 2\\}$, braces included, among the listed elements of $B$; it is not there.

**Adding the sizes for a union**

The size of a union is found by adding the sizes of the two sets. Elements that belong to both sets are then counted once for each set.

Wrong working: for $A = \\{1, 2, 3\\}$ and $B = \\{4, 5, 3\\}$, the size of $A \\cup B$ is given as $3 + 3 = 6$.

Right working: $A \\cup B = \\{1, 2, 3, 4, 5\\}$, which has $5$ elements. In general the size of the union is $|A| + |B| - |A \\cap B|$, and here $A \\cap B = \\{3\\}$, so $3 + 3 - 1 = 5$. The [inclusion-exclusion principle](!/combinatorics/inclusion-exclusion) extends this correction to more than two sets.

Why it happens: the union is built by putting two sets together, and putting together sounds like adding.

How to check: write the union out and count it, or test the answer against its bounds. The union has at least as many elements as the larger set and at most $|A| + |B|$, and it reaches $|A| + |B|$ only when the sets are disjoint.

**Reversing the difference**

$A - B$ is computed as if the order of the two sets did not matter, and the elements of $B$ outside $A$ are returned. Unlike union and intersection, the difference can change when the sets swap places.

Wrong working: for $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$, the difference is given as $A - B = \\{5, 6\\}$.

Right working: start from $A$ and remove the elements that are also in $B$, namely 3 and 4. This leaves $A - B = \\{1, 2\\}$. The set $\\{5, 6\\}$ is the other difference, $B - A$.

Why it happens: union, intersection and symmetric difference give the same set in either order, and the habit carries over to the one basic operation where order matters.

How to check: every element of $A - B$ must be an element of $A$. Since 5 and 6 are not in $A$, the set $\\{5, 6\\}$ cannot be $A - B$.
    `,
    before: ``,
    after: ``,
    link: '',
  }
};


const introContent = {
  id: "intro",
  title: `The Vocabulary Every Other Page Builds On`,
  content: `
Set theory is the language in which much of modern mathematics is written. This page collects its basic vocabulary in one place: what a set is, how sets are written down, how their size is measured, and the standard relationships and operations between sets. Every topic surveyed here is developed in depth on its own dedicated page within the [set theory](!/set-theory) section.
  `,
};


// Five questions. This is the survey page, so anything a dedicated page owns
// was cut: subsets, disjoint sets, and union vs intersection now live on
// /set-theory/subsets, /set-theory/relationships and /set-theory/operations.
const faqQuestions = {
  obj1: {
    question: "What can be an element of a set?",
    answer: "Anything at all. Elements need not share a type or have anything in common, so {1, 'apple', 3.14, true} is a perfectly valid set of four elements. Sets can even contain other sets. The only rules are that elements are distinct and unordered, which is why {1, 2, 2, 3} and {3, 1, 2} name the same set.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between roster and set-builder notation?",
    answer: "Roster notation lists the members outright: {2, 4, 6}. Set-builder states a rule instead: {x | x is a positive even number}, read as the set of all x such that x is even. Roster suits small finite sets; set-builder handles sets too large or awkward to write out. Both describe the same kind of object. See [all set theory symbols](!/math-symbols/set-theory).",
    sectionId: "notation"
  },
  obj3: {
    question: "What is the universal set?",
    answer: "The universal set U contains every object under consideration in a given context. It is not a fixed collection: for a weekday problem U has seven elements, and for a real-analysis problem U is all of the reals. Complements depend entirely on it, since the complement of A means everything in U outside A.",
    sectionId: "3"
  },
  obj4: {
    question: "Is the empty set the same as a set containing the empty set?",
    answer: "No. The empty set has no members and cardinality 0, written as an empty pair of braces. The set {∅} has exactly one member, which happens to be the empty set, so its cardinality is 1. Think of an empty box versus a box holding an empty box. Both are legitimate sets.",
    sectionId: "3"
  },
  obj5: {
    question: "Are {1, 2, 3} and {3, 2, 1, 1} the same set?",
    answer: "Yes. Sets are unordered, so rearranging the listing changes nothing, and elements are distinct, so repeating one adds nothing. Both expressions name the same three-element set. This is also why cardinality counts distinct members only: the second listing has four entries written down but still has size 3."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Set Theory Basics",
    "description": "Fundamental concepts of set theory explained: the definition of a set, notation, cardinality and types of sets, relationships between sets, and the basic set operations.",
    "url": "https://www.learnmathclass.com/set-theory/basics",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Set Theory Basics"
    },
    "teaches": [
      "Definition of a mathematical set",
      "Enumerative and descriptive (set-builder) notation",
      "Cardinality and types of sets",
      "Relationships between sets: membership, equality, subsets, supersets, disjoint sets, complement",
      "Basic set operations: intersection, union, difference, symmetric difference"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2026-07-31",
    "dateModified": new Date().toISOString()
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
        "name": "Basics",
        "item": "https://www.learnmathclass.com/set-theory/basics"
      }
    ]
  },

}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const demoUnits = {
    subset: demoUnitFrame({
      svg: twoSetsVennDiagrams.subsetAinB,
      caption: 'A &#8838; B: every element of A is an element of B',
      text: 'The circle A lies entirely inside the circle B, so any element that belongs to A automatically belongs to B: that containment is the subset relation, and the picture shows why B can have elements outside A while the reverse is impossible. Membership of a single point and containment of a whole set are the two relationships drawn here. Drag the circles apart and watch the relation change on the',
      href: '/set-theory/visual-tools/two-sets-basic-venn',
      linkText: 'two-set Venn diagram explorer',
    }),
    intersection: demoUnitFrame({
      svg: twoSetsVennDiagrams.intersection,
      caption: 'A &#8745; B: the shaded overlap',
      text: 'Only the region belonging to both circles is shaded: an element is in A &#8745; B exactly when it is in A and in B. The union would shade both circles entirely, the difference A \\ B only the part of A outside the overlap. Switch operations and watch the shading move on the',
      href: '/set-theory/visual-tools/two-sets-basic-venn',
      linkText: 'two-set Venn diagram explorer',
    }),
  };

  const setTypesOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Sets by how many elements they hold',
    preface: 'A set is finite when its elements can be counted to an end and infinite when they cannot. The universal set is the frame for everything under consideration.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Size is cardinality',
    conclusion: 'How to compare the sizes of sets, including infinite ones, is the subject of [cardinality](!/set-theory/cardinality).',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Types of sets', children: [
        { id: 'fin', name: 'Finite', def: 'a well-defined number of elements', example: '{1, 2, 3, 4, 5}', children: [
          { id: 'empty', name: 'Empty set', def: 'a special case of a finite set', example: '∅' },
        ] },
        { id: 'inf', name: 'Infinite', def: 'cannot be exhausted by counting', example: '{1, 2, 3, …}' },
        { id: 'uni', name: 'Universal', def: 'all objects under consideration; finite or infinite', example: 'U' },
      ] },
    ],
  };

  return {
  props: {
    setTypesOutline,
    demoUnits,
    sectionsContent,
    introContent,
    figs,
    notationTable,
    cardinalityTable,
    relationshipsTable,
    operationsTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Set Theory Basics: Terminology and Core Concepts | Learn Math Class",
      description: "Fundamental concepts of set theory explained: the definition of a set, notation, cardinality and types of sets, relationships between sets, and the basic operations — with diagrams and summary tables.",
      // Surfaced on the /set-theory hub via buildSectionData extraction.
      hubDescription: "The complete starter vocabulary of set theory on one page: what a mathematical set is, how sets are written in enumerative and set-builder notation, how cardinality measures their size, the relationships between sets — membership, equality, subsets and supersets, disjointness, complement — and the four basic operations of intersection, union, difference and symmetric difference, each illustrated with diagrams and collected into summary tables.",
      keywords: keyWords.join(", "),
      url: "/set-theory/basics",
      name: "Set Theory Basics"
    },
  }
}
   }


export default function SetTheoryBasicsPage({setTypesOutline, seoData, sectionsContent, introContent, figs, notationTable, cardinalityTable, relationshipsTable, operationsTable, faqQuestions, schemas, demoUnits}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          <div key={'fig-any-objects'} dangerouslySetInnerHTML={{ __html: figs.anyObjects }} />,
          `@academic[punchline:A set is decided by its members alone: listing them in another order or repeating one never changes it.]@`,
        ]
    },
    {
        id:'2',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
          <div
            key={'notation-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: notationTable }}
          />,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div
            key={'cardinality-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: cardinalityTable }}
          />,
          <DiagramFrame
            key={'obj3-diagram'}
            id="set-types-outline"
            title="Types of sets by size"
            source="/set-theory/basics"
          >
            <TaxonomyOutline data={setTypesOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
        ]
    },

    // obj4: membership → equality → subsets/supersets → disjoint → complement,
    // with the legacy hub diagrams interleaved where the old page placed them
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'fig-membership'} dangerouslySetInnerHTML={{ __html: figs.membership }} />,
          sectionsContent.obj4.content2,
          <div key={'fig-subset-superset'} dangerouslySetInnerHTML={{ __html: figs.subsetSuperset }} />,
          sectionsContent.obj4.content3,
          <div key={'fig-disjoint'} dangerouslySetInnerHTML={{ __html: figs.disjoint }} />,
          sectionsContent.obj4.content4,
          <div
            key={'relationships-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: relationshipsTable }}
          />,
                  <div key={'unit-subset'} dangerouslySetInnerHTML={{ __html: demoUnits.subset }} />,
          `Equality of sets is the case where the containment runs both ways.`,
        ]
    },

    // obj5: one diagram per operation, as on the legacy hub
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'fig-intersection'} dangerouslySetInnerHTML={{ __html: figs.intersection }} />,
          sectionsContent.obj5.content2,
          <div key={'fig-union'} dangerouslySetInnerHTML={{ __html: figs.union }} />,
          sectionsContent.obj5.content3,
          <div key={'fig-difference'} dangerouslySetInnerHTML={{ __html: figs.difference }} />,
          sectionsContent.obj5.content4,
          <div key={'fig-symmetric-difference'} dangerouslySetInnerHTML={{ __html: figs.symmetricDifference }} />,
          sectionsContent.obj5.content5,
          <div
            key={'operations-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: operationsTable }}
          />,
                  <div key={'unit-intersection'} dangerouslySetInnerHTML={{ __html: demoUnits.intersection }} />,
          `The operations page develops each of these with its own laws and diagrams.`,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:sectionsContent.faq.title,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },
]

  return (
   <>


<Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.breadcrumb)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Set Theory Basics: Terminology and Core Concepts</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"

   />
   <br/>
   <br/>
   <br/>
    <IntroSection
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
     <KeyTermsCard
           id="0"
           title={sectionsContent.obj0.title}
           content={sectionsContent.obj0.content}
           after={sectionsContent.obj0.after}
           variant="light"
         />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}