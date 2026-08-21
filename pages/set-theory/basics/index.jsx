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
import diagrams from '@/app/api/db/svg/set-theory/svg'
import summaries from '@/app/api/db/tables/set-theory/summaries'


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

What kinds of items or entities can be members of a mathematical set? Whatever they are, it does not matter. Mathematics is all about abstraction, and in the abstract world things can be of any type — so the famous 'apples and oranges' problem does not apply here. Entities of completely different kinds can live together as parts of the same set.
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
  obj3: {
    title: `Cardinality and Types of Sets`,
    content: `
The **cardinality** of a mathematical set is simply its size — the number of elements in the set. Cardinality is most often denoted by the symbol |A| or card(A), where A is the set; symbols like #A, n(A), or ‖A‖ may be used as well.

If A = {1, 2, 3}, then the cardinality of A is |A| = 3, because there are three elements in the set. If B = {1, 'apple', 3.14, True}, then |B| = 4, because there are four elements in this set.

Based on cardinality, mathematical sets are classified into groups:

- **Finite sets** — sets having a well-defined number of elements that may be expressed by a natural number. Examples: A = {1, 2, 3, 4, 5}, B = {1, 'apple', 3.14, True}. A set may contain millions of objects, but as long as it can be counted even theoretically, the set is finite.

- **Infinite sets** — sets whose elements cannot be exhausted by counting. Examples: A = {x | x is a positive even number} — it is impossible to count all positive even numbers; B = {1, 2, 3, ...}.

- **Empty set** — a special case of a finite set having no elements. Notations used for the empty set: E = { } or E = ∅.

- **Universal set** — a set that contains all the objects or elements under consideration within a specific context or domain of discourse. It is typically denoted **U** or **ξ**. The universal set may be finite — if it represents the days of the week, then U = {Monday, Tuesday, Wednesday, ..., Sunday}, a finite set of 7 elements. It may also be infinite — if it represents all natural numbers, then U = {1, 2, 3, ...}; if it represents all real numbers, then U = ℝ, an infinite set with an uncountable number of elements.

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

- **Proper subsets** — a proper subset of a set is a subset that is not equal to the original set, containing fewer elements. Example: A = {1, 2} is a proper subset of B.

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
    `,
    content3: `
- **Difference (−)** — the difference between two sets A and B, denoted A − B, is the set of elements that are in A but not in B. Example: if A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A − B = {1, 2}.
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
};


const introContent = {
  id: "intro",
  title: `The Vocabulary Every Other Page Builds On`,
  content: `
Set theory is the language in which much of modern mathematics is written. This page collects its basic vocabulary in one place: what a set is, how sets are written down, how their size is measured, and the standard relationships and operations between sets. Every topic surveyed here is developed in depth on its own dedicated page within the [set theory](!/set-theory) section.
  `,
};


const faqQuestions = {
  obj1: {
    question: "What is a set in mathematics?",
    answer: "A set is an unordered collection of unique items. The order of elements does not matter, each element appears only once, and the elements can be objects of absolutely any type.",
    sectionId: "1"
  },
  obj2: {
    question: "What can be an element of a set?",
    answer: "Practically anything — numbers, letters, words, symbols, or even other sets. Mathematics abstracts away the nature of the objects, so items of completely different types can belong to the same set.",
    sectionId: "1"
  },
  obj3: {
    question: "What is enumerative set notation?",
    answer: "Enumerative notation lists the elements of a set within curly braces, e.g. A = {1, 2, 3}. For large or infinite sets, an ellipsis can stand for the omitted elements, e.g. A = {1, 2, 3, ...}.",
    sectionId: "2"
  },
  obj4: {
    question: "What is descriptive (set-builder) notation?",
    answer: "Set-builder notation defines a set by a property its elements must satisfy, e.g. A = {x | x is a positive even number}. The vertical bar reads as 'such that'. It consists of a variable, the bar, a condition, and enclosing curly braces.",
    sectionId: "2"
  },
  obj5: {
    question: "What is the cardinality of a set?",
    answer: "Cardinality is the size of a set — the number of elements it contains, denoted |A| or card(A). If A = {1, 2, 3}, then |A| = 3.",
    sectionId: "3"
  },
  obj6: {
    question: "What is the universal set?",
    answer: "The universal set, denoted U or ξ, contains all objects under consideration in a given context. It can be finite (the days of the week) or infinite (all natural or real numbers).",
    sectionId: "3"
  },
  obj7: {
    question: "What is the empty set?",
    answer: "The empty set is the set containing no elements, written ∅ or { }. It is a special case of a finite set and, together with the universal set, serves as an identity element in key set operations.",
    sectionId: "3"
  },
  obj8: {
    question: "What is a subset?",
    answer: "A set is a subset of another set if every element of the first set is also an element of the second, e.g. {1, 2} ⊆ {1, 2, 3, 4}. A proper subset is a subset that is not equal to the original set.",
    sectionId: "4"
  },
  obj9: {
    question: "What are disjoint sets?",
    answer: "Two sets are disjoint if they have no elements in common. For example, A = {1, 2, 3} and C = {4, 5, 6} are disjoint sets.",
    sectionId: "4"
  },
  obj10: {
    question: "What is the difference between union and intersection?",
    answer: "The union A ∪ B collects the elements that are in A, in B, or in both. The intersection A ∩ B keeps only the elements common to both sets.",
    sectionId: "5"
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


export default function SetTheoryBasicsPage({seoData, sectionsContent, introContent, figs, notationTable, cardinalityTable, relationshipsTable, operationsTable, faqQuestions, schemas}) {

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
