import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TwoSetIdentitiesExplorer from '../../../../app/components/venn-diagrams/TwoSetsBasicIdentitiesExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import SiblingsNavStandalone from '../../../../app/components/SiblingsNavStandalone'

export async function getStaticProps(){

  const keyWords = [
    "two set venn diagram",
    "venn diagram two sets",
    "two set identities",
    "set identities visualizer",
    "union of two sets",
    "intersection of two sets",
    "set complement venn",
    "symmetric difference venn",
    "de morgan laws venn",
    "set operations explorer",
    "interactive venn diagram",
    "two circle venn diagram",
    "shaded venn regions",
    "subset disjoint equal sets",
    "set theory visualization",
  ]

  const sectionsContent = {
    obj0: {
      title: `Key Terms`,
      content: `
- **Set** — a collection of distinct elements
- **Universal set** — the set containing every element under consideration, denoted $U$
- **Union** — $A \\cup B$, elements in $A$, in $B$, or in both
- **Intersection** — $A \\cap B$, elements in both $A$ and $B$
- **Complement** — $A'$, elements in $U$ but not in $A$
- **Set difference** — $A \\setminus B$, elements in $A$ but not in $B$
- **Symmetric difference** — $A \\triangle B$, elements in exactly one of $A$ or $B$
- **Subset** — $A \\subseteq B$ when every element of $A$ is also in $B$
- **Disjoint sets** — sets that share no elements, $A \\cap B = \\emptyset$
- **De Morgan's laws** — $(A \\cup B)' = A' \\cap B'$ and $(A \\cap B)' = A' \\cup B'$
`,
      before: ``,
      after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Explorer`,
      content: `Open the explorer and a two-circle Venn diagram appears with the first identity pre-selected. The blue shaded region marks the elements that satisfy the current identity; the unshaded regions are excluded. The symbol of the current identity appears in the badge above the diagram, and the explanation panel beside it describes what the highlighted region means.

The interface has three main controls. The **category tabs** at the top group identities by type. The **formula buttons** below the tabs show the identities within the active category. The **Jump to** dropdown on the right lists every identity across all categories in one place.

At the bottom of the diagram column, **Previous** and **Next** cycle through all 22 identities in order, with a counter showing your current position. The theme panel underneath lets you customize the shading color and opacity.

No setup is required — pick any tab and any button to see the corresponding region light up immediately.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Navigating Category Tabs`,
      content: `The category tabs organize all 22 identities into seven groups based on their structural role:

• **Basic Sets** — the sets $A$ and $B$ themselves, the universal set $U$, and the empty set $\\emptyset$
• **Complements** — $A'$ and $B'$
• **Intersection & Union** — $A \\cap B$ and $A \\cup B$
• **Differences** — $A \\setminus B$, $B \\setminus A$, and the symmetric difference $A \\triangle B$
• **Compound** — combined expressions like $A \\cup B'$ and $A' \\cup B$
• **De Morgan's Laws** — $(A \\cup B)'$ and $(A \\cap B)'$
• **Relations** — subset, disjoint, and equal sets, each drawn with a special circle layout

Click a tab to switch the row of formula buttons below. The currently selected identity stays highlighted across tab switches, so you can browse other categories without losing your place. The tab strip scrolls horizontally on narrow screens.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Selecting an Identity`,
      content: `Two ways to pick an identity. Use the **formula buttons** under the active tab to choose from identities in that category — each button shows the set-theory notation ($A \\cup B$, $A'$, $A \\triangle B$, and so on). Or use the **Jump to** dropdown, which lists every identity across all seven categories in one menu, grouped by tab.

When you select an identity, three things update simultaneously:

• The diagram shading changes to highlight the regions belonging to the new identity
• The badge above the diagram updates to the new symbol
• The explanation panel refreshes with a definition and, where applicable, a numerical example like $A = \\{1,2,3,4\\}$, $B = \\{3,4,5,6\\}$

Selection is preserved when you switch tabs, so you can compare an identity to others without re-selecting after navigating.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Shaded Venn Diagram`,
      content: `A two-circle Venn diagram divides the universe into four disjoint regions, and every two-set identity highlights some combination of them:

• **Outside both circles** — elements not in $A$ and not in $B$, formally $A' \\cap B'$
• **Only in A** — elements in $A$ but not in $B$, formally $A \\setminus B$
• **Only in B** — elements in $B$ but not in $A$, formally $B \\setminus A$
• **In both** — the intersection $A \\cap B$

For example, $A \\cup B$ shades the three regions inside either circle. $A'$ shades the two regions outside circle $A$ (the outside region plus B-only). The symmetric difference $A \\triangle B$ shades the two crescent regions but leaves the central overlap unshaded. The complement of the union $(A \\cup B)'$ shades only the region outside both circles.

Hover over any region for a tooltip naming it. Identities in the **Relations** group use special circle layouts (nested, separated, or coincident) instead of the standard overlap.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Customizing Color and Opacity`,
      content: `The **Theme** panel below the diagram offers two adjustments to the shaded regions.

The **color picker** changes the shading hue. Useful when printing, presenting, comparing diagrams side by side, or matching the color scheme of a course or textbook. Any standard color value works.

The **opacity slider** controls how transparent the shading is, ranging from $1.00$ (fully opaque) to $0.00$ (invisible). Lower opacity is helpful when you want to see the underlying circle outlines through the fill, or when overlaying the diagram on other content. The current numeric value appears next to the slider in monospace.

Click **Reset** to return both controls to the defaults — blue at $0.85$ opacity. Theme changes persist as you navigate between scenarios, so adjustments stay applied across the entire session.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Previous and Next Navigation`,
      content: `At the bottom of the diagram column, the **Previous** and **Next** buttons cycle through all 22 identities in the order defined by the category groups: Basic Sets, then Complements, then Intersection & Union, then Differences, Compound, De Morgan's Laws, and finally Relations. The counter between the two buttons displays the current position, formatted as "$n$ / $22$".

Navigation wraps around: pressing **Previous** on the first scenario jumps to the last, and pressing **Next** on the last returns to the first. This makes the explorer well suited for systematic review — start at the first identity and click through every region one by one to see how each algebraic expression maps to a shaded combination of the four regions.

The active tab and active formula button update automatically as you advance, so you always know which group the current identity belongs to.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Two-Set Venn Diagram?`,
      content: `A two-set Venn diagram is a visual representation of two sets drawn as overlapping circles inside a rectangle. The rectangle represents the **universal set** $U$ — everything under consideration. The two circles, labeled $A$ and $B$, represent the two specific sets, and their overlap shows elements common to both.

The diagram has exactly four disjoint regions: outside both circles, only in $A$, only in $B$, and the intersection. Every algebraic combination of two sets — no matter how complex — maps to some union of these four regions. This is what makes two-set Venn diagrams a complete visual language for two-set algebra.

Three-set Venn diagrams have eight regions and are harder to read, while one-set diagrams have only two regions and are usually unnecessary. The two-set diagram sits at the practical sweet spot: rich enough to display every standard identity, simple enough to interpret at a glance.

For comprehensive theory on Venn diagrams across different numbers of sets, see **Venn diagrams**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Set Operations on Two Sets`,
      content: `Five core operations generate every two-set identity:

**Union** $A \\cup B$ — elements in $A$, in $B$, or in both. Set-builder form: $\\{x : x \\in A \\text{ or } x \\in B\\}$. Visually, the entire shaded region of the two circles.

**Intersection** $A \\cap B$ — elements in both $A$ and $B$ simultaneously. Set-builder form: $\\{x : x \\in A \\text{ and } x \\in B\\}$. Visually, the overlap of the circles.

**Complement** $A'$ — elements in $U$ but not in $A$. Set-builder form: $\\{x : x \\notin A\\}$. Visually, everything outside circle $A$.

**Difference** $A \\setminus B$ — elements in $A$ but not in $B$, equivalent to $A \\cap B'$. Visually, the crescent of $A$ that does not overlap $B$.

**Symmetric difference** $A \\triangle B$ — elements in exactly one of the two sets, equivalent to $(A \\setminus B) \\cup (B \\setminus A)$ or $(A \\cup B) \\setminus (A \\cap B)$. Visually, both crescents but not the overlap.

For formal definitions and algebraic properties, see **set operations**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `De Morgan's Laws for Two Sets`,
      content: `De Morgan's laws relate the complement of a combined set to the combination of complements:

$$(A \\cup B)' = A' \\cap B'$$

$$(A \\cap B)' = A' \\cup B'$$

The complement of the union equals the intersection of the complements. The complement of the intersection equals the union of the complements. Each law converts a complement of a combination into a combination of complements — useful both for algebraic manipulation and for translating logical statements.

Both laws can be verified visually with the explorer. Select $(A \\cup B)'$ from the De Morgan's Laws tab: only the region outside both circles is shaded. That same region is what $A' \\cap B'$ would produce — outside $A$ and outside $B$ simultaneously. The two expressions describe the same set, and the diagram confirms it.

For algebraic proofs, the general $n$-set form, and applications to propositional logic, see **De Morgan's laws**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Set Operations** — formal definitions and properties of union, intersection, complement, difference, and symmetric difference.

**Venn Diagrams** — overview of one-set, two-set, and three-set diagrams, drawing conventions, and when each is appropriate.

**De Morgan's Laws** — algebraic proofs of both two-set laws and the generalization to arbitrary collections of sets.

**Set Relations** — definitions of subset, proper subset, disjoint sets, and equal sets, with examples.

**Set Theory Definitions** — glossary of foundational terms used throughout set algebra.

**Three-Set Venn Diagram** — extends the same visual approach to three overlapping sets and the eight regions they produce, including the three-set De Morgan's laws.

**Set Laws and Identities** — algebraic catalog of commutative, associative, distributive, absorption, and complement laws on sets.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: { title:``, content:``, before:``, after:``, link:'' },
    obj12: { title:``, content:``, before:``, after:``, link:'' },
    obj13: { title:``, content:``, before:``, after:``, link:'' },
    obj14: { title:``, content:``, before:``, after:``, link:'' },
    obj15: { title:``, content:``, before:``, after:``, link:'' },
  }

  const introContent = {
    id: "intro",
    title: "Two-Set Algebra Through Shaded Regions",
    content: `Every algebraic expression involving two sets — no matter how compound — reduces to a combination of four disjoint regions in a Venn diagram. The explorer below lets you select any standard two-set identity and instantly see which combination of regions it picks out. The shaded area shows the elements satisfying the expression; the explanation panel translates the picture back into set-builder notation.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a two-set Venn diagram?",
      answer: "A two-set Venn diagram is a visual representation of two sets, drawn as overlapping circles inside a rectangle that represents the universal set. The two circles, labeled A and B, divide the universe into four disjoint regions: outside both sets, in A only, in B only, and in both A and B. Every two-set identity corresponds to a combination of these four regions."
    },
    obj2: {
      question: "What identities can the explorer visualize?",
      answer: "The explorer covers all standard two-set identities: the basic sets A and B, the universal set, and the empty set; complements A prime and B prime; intersection and union; the three differences (A minus B, B minus A, and symmetric difference); compound expressions like A union B prime; De Morgan's laws; and the relations of subset, disjoint sets, and equal sets. Twenty-two scenarios in total."
    },
    obj3: {
      question: "What are De Morgan's laws for two sets?",
      answer: "De Morgan's laws state that the complement of a union equals the intersection of the complements, and the complement of an intersection equals the union of the complements. Symbolically, (A union B) prime equals A prime intersect B prime, and (A intersect B) prime equals A prime union B prime. Both can be verified visually by shading the relevant regions in the Venn diagram."
    },
    obj4: {
      question: "How is the symmetric difference different from the union?",
      answer: "The union of A and B includes every element in A, in B, or in both, covering all three shaded regions inside the two circles. The symmetric difference includes only elements in exactly one of the sets, excluding the intersection. In a Venn diagram, the symmetric difference shades the two crescent regions and leaves the central overlap unshaded."
    },
    obj5: {
      question: "Can the explorer show set relations like subset and disjoint?",
      answer: "Yes. Under the Relations tab, the explorer switches to special circle layouts that reflect each relation: a small circle inside a larger one for A being a subset of B, two separated circles for disjoint sets that share no elements, and two overlapping circles drawn at the same position for equal sets. The shaded region in each case highlights the elements common to A and B."
    },
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Two-Set Venn Diagram Basic Identities Explorer",
      "description": "Shade Venn diagram regions for two-set operations: union, intersection, complement, difference, De Morgan's laws, and set relations like subset and disjoint.",
      "url": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-basic-venn",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive two-circle Venn diagram with shaded regions for each selected identity",
        "Identities organized into seven category tabs: Basic Sets, Complements, Intersection and Union, Differences, Compound expressions, De Morgan's Laws, and Relations",
        "Formula buttons and a Jump-to dropdown for selecting any of 22 standard two-set identities",
        "Customizable shading color and opacity with a one-click reset",
        "Previous and Next navigation with a scenario counter that wraps around",
        "Special circle layouts for subset, disjoint, and equal-set relations",
        "Side explanation panel with set-builder definitions and numeric examples"
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
          "name": "Two-Set Venn Diagram: Basic Identities",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-basic-venn"
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
        title: "Two-Set Venn Diagram: Basic Identities | Learn Math Class",
        description: "Shade Venn diagram regions for two-set operations: union, intersection, complement, difference, De Morgan's laws, and set relations like subset and disjoint.",
        keywords: keyWords.join(", "),
        url: "/set-theory/visual-tools/two-sets-basic-venn",
        name: "Two-Set Venn Diagram Basic Identities Explorer",
        hubDescription: "Shade the Venn diagram for any two-set identity — union, intersection, complement, the three differences, De Morgan's laws, and set relations like subset and disjoint. Switch between categories using the tabs, pick an identity from the formula buttons or Jump-to dropdown, and customize the shading color and opacity. Each highlighted region updates with an explanation panel showing the set-builder notation.",
        category: "Venn Diagrams",
        subCategory: "Two Sets"
      },
    }
  }
}

export default function TwoSetsBasicVennPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [sectionsContent.obj0.content]
    },
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [sectionsContent.obj4.content]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [sectionsContent.obj5.content]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [sectionsContent.obj6.content]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [sectionsContent.obj7.content]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [sectionsContent.obj8.content]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [sectionsContent.obj9.content]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [sectionsContent.obj10.content]
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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'-80px'}}>Venn Diagrams: Two Sets Basic Identities</h1>
      <br/>
      {/* <div style={{ display: 'grid', gridTemplateColumns: '200px minmax(0, 1fr)', gap: 28 }}>
        <SiblingsNavStandalone

          bg="#fafaf7"
          color="#2c5d99"
          activeColor="#143a66"
          activeBg="#dde9f7"

        /> */}
      <div style={{transform:'scale(0.85)'}}>

        <TwoSetIdentitiesExplorer/>

      </div>
      {/* </div> */}

      {/* <SiblingsNavStandalone
        bg="#fafaf7"
        color="#2c5d99"
        activeColor="#143a66"
        activeBg="#dde9f7"
      /> */}

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