import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TwoSetsLawsExplorer from '../../../../app/components/venn-diagrams/TwoSetsLawsExplorer'


export async function getStaticProps(){

  const keyWords = [
    "two set laws venn",
    "set laws visualizer",
    "set identities proof",
    "de morgan laws visual",
    "idempotent law sets",
    "commutative law sets",
    "absorption law sets",
    "complement law sets",
    "double complement law",
    "symmetric difference identity",
    "set algebra laws",
    "venn diagram proof",
    "two set algebraic identities",
    "visual proof set theory",
    "set theory laws",
  ]

  const sectionsContent = {
    obj0: {
      title: `Key Terms`,
      content: `
- **Set identity** — an equation between two set expressions that holds for all sets
- **Idempotent law** — $A \\cup A = A$, $A \\cap A = A$
- **Commutative law** — $A \\cup B = B \\cup A$, $A \\cap B = B \\cap A$
- **Identity element** — $\\emptyset$ for union, $U$ for intersection
- **Annihilator** — $U$ for union, $\\emptyset$ for intersection
- **Complement law** — $A \\cup A' = U$, $A \\cap A' = \\emptyset$
- **Double complement** — $(A')' = A$
- **De Morgan's laws** — $(A \\cup B)' = A' \\cap B'$, $(A \\cap B)' = A' \\cup B'$
- **Absorption law** — $A \\cup (A \\cap B) = A$, $A \\cap (A \\cup B) = A$
- **Visual proof** — two diagrams shading the same regions confirm an identity
`,
      before: ``,
      after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Explorer`,
      content: `Open the explorer and you'll see two miniature Venn diagrams side by side, separated by an equals sign. The left diagram shades the regions for the **left-hand side** of an identity; the right diagram shades the regions for the **right-hand side**. When the two shaded patterns match, the identity holds — and a green badge below the diagrams confirms it.

The current identity is shown as a badge above the diagrams (e.g. $A \\cup A = A$). Each side has a label showing the specific expression it represents. The first identity loads automatically, so you can start interacting immediately.

The interface has three control areas: the **category tabs** at the top, the **formula buttons** below them, and the **Jump to** dropdown on the right. Underneath the diagrams are theme controls and a Previous/Next navigation strip with a counter showing your position among the 27 identities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Navigating Category Tabs`,
      content: `The eight category tabs group the 27 laws by structural type:

• **Idempotent** — laws where combining a set with itself returns the set
• **Commutative** — order does not matter for union or intersection
• **Identity & Annihilation** — special roles of $\\emptyset$ and $U$
• **Complement** — laws involving $A'$, including the double complement
• **De Morgan's Laws** — the two complement-distribution laws
• **Absorption** — $A$ absorbs $A \\cap B$ in a union, and $A \\cup B$ in an intersection
• **Difference** — equivalent forms for $A \\setminus B$ and the symmetric difference
• **Compound Complements** — complements of mixed expressions like $(A \\cup B')'$

Click a tab to switch the row of formula buttons below it. The current identity stays selected across tab switches, so you can browse other groups without losing context.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Selecting an Identity`,
      content: `Two ways to pick a law. The **formula buttons** under the active tab display every identity in that category — each button shows the full equation (e.g. $A \\cup A = A$, $(A \\cup B)' = A' \\cap B'$). Click any one to load it into the diagrams.

The **Jump to** dropdown lists all 27 identities across every category in a single menu, grouped by tab. Useful when you know the formula but not which group it belongs to.

When you select an identity, four things update simultaneously:

• The badge above the diagrams shows the new equation
• The left diagram re-shades for the new LHS expression
• The right diagram re-shades for the new RHS expression
• The match indicator below confirms whether the two patterns agree`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Side-by-Side Proof`,
      content: `Each side of the equals sign is a complete two-circle Venn diagram with four disjoint regions: outside both, only in $A$, only in $B$, and the intersection. The shaded combination of these four regions represents the set described by the expression.

A set identity asserts that the LHS and RHS pick out the same regions. The explorer evaluates both expressions on all four combinations of $A$ and $B$ membership and shades the diagrams accordingly. If the same regions are shaded on both sides, the two set expressions are equal as sets — that is the geometric content of the identity.

For example, selecting $(A \\cup B)' = A' \\cap B'$ produces two diagrams that each shade only the region outside both circles. The visual match is the proof.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Match Indicator`,
      content: `Below the two diagrams, a colored badge reports whether the regions agree:

• **Green badge with a checkmark** — the two predicates produce the same truth value on all four membership combinations, meaning the identity holds for any choice of $A$ and $B$
• **Red badge with a cross** — the regions differ, meaning the equation is not a valid identity

For every law in the explorer's catalog, the badge is green — the catalog only includes valid identities. The match indicator is a verification, not a test of the user's input. Its purpose is to make the equality between LHS and RHS visible: the equation is true because the two shaded patterns are identical, not just because a textbook says so.

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

Theme changes persist across identity selections, so adjustments apply to every law you visit afterward.

The navigation strip at the bottom has **Previous** and **Next** buttons that cycle through all 27 identities in the order defined by the category groups, with a counter showing position. Navigation wraps around — pressing **Previous** on the first identity jumps to the last. The active tab and active formula button update automatically as you advance, so you always know where you are in the catalog.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Set Identity?`,
      content: `A **set identity** is an equation between two set expressions that holds for every possible choice of the sets involved. The equation $A \\cup B = B \\cup A$ is an identity because it is true regardless of what $A$ and $B$ are. By contrast, $A \\cup B = A$ is not an identity — it holds only when $B \\subseteq A$.

Set identities form the algebraic backbone of set theory. They let expressions be rewritten without changing their meaning, much like algebraic identities for numbers ($a + b = b + a$, $a(b + c) = ab + ac$). Skilled use of set identities is what turns set-theoretic reasoning from case-by-case argument into mechanical manipulation.

For the full algebraic catalog, including identities involving three or more sets, see **set laws and identities**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why Do Visual Proofs Work?`,
      content: `A two-circle Venn diagram divides the universe into four mutually exclusive regions, and every two-set expression assigns each region one of two states: in or out. Two expressions are equal as sets if and only if they assign the same state to every region.

This means a set identity in two variables can be verified by checking just four cases — the four possible combinations of "is in $A$" and "is in $B$". The explorer performs this check by evaluating each expression on all four combinations and shading the regions where the result is true. If the two diagrams match, the identity is verified.

This is not just a heuristic — it is a complete decision procedure for two-set identities. For identities involving more sets, the same principle applies with more regions ($2^n$ for $n$ sets), but the visual approach becomes harder to read past three sets. See **venn diagrams** for the multi-set generalization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `De Morgan's Laws and Their Mirrors`,
      content: `Two of the most-used identities are **De Morgan's laws**:

$$(A \\cup B)' = A' \\cap B'$$

$$(A \\cap B)' = A' \\cup B'$$

The complement of a union equals the intersection of the complements; the complement of an intersection equals the union of the complements. Each law converts a complement of a combined set into a combination of complements.

The Compound Complements category in the explorer derives several mirrored identities from De Morgan's plus the double-complement law $(A')' = A$. For example, $(A \\cap B')' = A' \\cup B$ — useful in propositional logic, where it corresponds to the implication $A \\to B$. Each of the four compound complements has a matching dual obtained by swapping $A$ and $B$ or by complementing both sides.

For the algebraic proofs and the general $n$-set form, see **De Morgan's laws**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Two-Set Basic Identities** — the companion explorer for shading individual operations (union, intersection, complement, differences) rather than identity equations.

**Set Operations** — formal definitions of union, intersection, complement, difference, and symmetric difference.

**Venn Diagrams** — overview of one-set, two-set, and three-set diagrams.

**De Morgan's Laws** — algebraic proofs and the $n$-set generalization.

**Set Laws and Identities** — the full algebraic catalog of laws on sets.

**Three-Set Venn Diagram** — extends visual proof techniques to three overlapping sets.

**Set Theory Definitions** — glossary of foundational terms used throughout set algebra.`,
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
    title: "Visual Proofs of Two-Set Laws",
    content: `Every algebraic law in two-set algebra reduces to a claim about regions in a Venn diagram: the left-hand side and the right-hand side of the law shade the same regions. The explorer below displays both sides as miniature Venn diagrams and confirms the match. Twenty-seven laws are organized into eight categories — from idempotence and commutativity through De Morgan's laws to compound complements.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a set identity?",
      answer: "A set identity is an equation between two set expressions that holds for every possible choice of the sets involved. For example, A union B equals B union A is an identity because it is true regardless of what A and B are. Set identities form the algebraic backbone of set theory and allow expressions to be rewritten without changing their meaning."
    },
    obj2: {
      question: "How does the explorer verify a set law visually?",
      answer: "The explorer displays the left-hand side and right-hand side of each identity as two miniature Venn diagrams. Each side shades the regions where its expression is true across all four combinations of membership in A and B. When the two shaded patterns match, a green badge confirms that the identity holds for any sets A and B."
    },
    obj3: {
      question: "What categories of laws are included?",
      answer: "The explorer covers idempotent laws, commutative laws, identity and annihilation laws involving the empty set and the universe, complement laws including double complement, De Morgan's laws, absorption laws, difference identities including symmetric difference forms, and compound complements derived from De Morgan and double complement combined. Twenty-seven identities in total across eight categories."
    },
    obj4: {
      question: "Why is the visual proof a valid proof?",
      answer: "A two-circle Venn diagram divides the universe into four disjoint regions, and any two-set expression assigns each region a single truth value. Two expressions are equal as sets if and only if they produce the same truth value in every region. Checking all four combinations of A and B membership is therefore a complete decision procedure for two-set identities."
    },
    obj5: {
      question: "What are De Morgan's laws?",
      answer: "De Morgan's laws state that the complement of a union equals the intersection of the complements, and the complement of an intersection equals the union of the complements. Symbolically, (A union B) prime equals A prime intersect B prime, and (A intersect B) prime equals A prime union B prime. Both can be verified visually by shading the relevant regions in the Venn diagram."
    },
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Two-Set Venn Diagram Laws and Identities Explorer",
      "description": "Verify two-set laws and identities by shading both sides of each equation on side-by-side Venn diagrams — idempotent, commutative, De Morgan's, absorption, and more.",
      "url": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-laws-venn",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Side-by-side Venn diagrams shading the left-hand and right-hand sides of each identity",
        "Automatic match indicator confirming the regions agree on all four membership combinations",
        "Twenty-seven identities organized into eight category tabs: Idempotent, Commutative, Identity and Annihilation, Complement, De Morgan's Laws, Absorption, Difference, and Compound Complements",
        "Formula buttons and a Jump-to dropdown for selecting any identity",
        "Customizable shading color and opacity with one-click reset",
        "Previous and Next navigation with a wrap-around scenario counter",
        "Side explanation panel describing the meaning of each law"
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
          "name": "Two-Set Venn Diagram: Laws and Identities",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-laws-venn"
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
        title: "Two-Set Venn Diagram: Laws & Identities | Learn Math Class",
        description: "Verify two-set laws and identities by shading both sides on side-by-side Venn diagrams — idempotent, commutative, De Morgan's, absorption, and complement laws.",
        keywords: keyWords.join(", "),
        url: "/set-theory/visual-tools/two-sets-laws-venn",
        name: "Two-Set Venn Diagram Laws and Identities Explorer",
        hubDescription: "Verify two-set algebraic laws by shading both sides of each identity on a pair of side-by-side Venn diagrams. Browse 27 laws across eight categories — idempotent, commutative, identity, complement, De Morgan's, absorption, difference, and compound complements — and watch the match indicator confirm each visual proof.",
        category: "Venn Diagrams",
        subCategory: "Two Sets"
      },
    }
  }
}

export default function TwoSetsLawsVennPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'-80px'}}>Venn Diagrams: Two Sets Laws and Complex Identities</h1>
      <br/>
      <div style={{transform:'scale(0.85)'}}>
        <TwoSetsLawsExplorer/>
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