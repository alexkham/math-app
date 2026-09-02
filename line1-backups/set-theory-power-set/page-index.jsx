import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '../../../../app/components/ExplanationDetails'
import PowerSetExplorer from '../../../../app/components/diagrams/set-theory/PowerSetExplorer'


export async function getStaticProps(){

  const keyWords = [
    'power set',
    'power set calculator',
    'power set explorer',
    'subset lattice',
    'hasse diagram subsets',
    'all subsets of a set',
    'how many subsets does a set have',
    'proper subset',
    'empty set subset',
    'number of subsets 2^n',
    'subsets of a 3 element set',
    'set theory visual tool',
    'interactive subset diagram',
    'binomial coefficient subsets',
    'free power set tool',
  ]

  const instructions = [
    'Type the elements of the set into the Elements box, separated by commas or spaces. Repeats are dropped, because a set has no duplicates, and order never matters.',
    'The Size buttons 1 to 5 rebuild the set at that many elements, and the preset buttons below load ready-made sets: a, b, c — 1, 2, 3, 4 — x, y — red, green, blue.',
    'The diagram is a Hasse diagram of the subset lattice. Every subset of the set is a node, and a line joins two nodes that differ by exactly one element, so the subset relation reads as upward paths.',
    'The readout beside the title reports the arithmetic: $|A| = n$ elements give $|P(A)| = 2^n$ subsets. Levels run from the empty set at the bottom to the whole set at the top.',
    'Click any subset, or focus it and press Enter, to select it. Its subsets light up below it, its supersets light up above it, and the legend under the diagram names the three colors.',
    'Switch the Empty set toggle to write the empty subset as $\\emptyset$ rather than as an empty pair of braces.',
    'The Subsets tab counts each level as $\\binom{n}{k}$ with a bar chart, and totals them to $2^n$ — a row of Pascal’s triangle read off the diagram.',
    'The Roster form below that table lists every subset in set notation. Clicking any entry selects that subset in the diagram, which is the fastest way to reach a node in a crowded lattice.',
    'The Style tab sets the highlight color, the vertical gap between levels, and whether lines outside the selected cones are dimmed.',
  ]

  const sectionsContent={

    obj0:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },

    obj1:{
      title:`Getting Started`,
      content:`The explorer draws the power set of whatever set you hand it, so the first move is to define that set.

Type the members into the **Elements** box, separated by commas or spaces. Anything works as an element: letters, numbers, words. Two rules are enforced as you type, and both of them are facts about sets rather than quirks of the tool. Repeats are dropped, because a set has no duplicates. Order is ignored, because $\\{a, b\\}$ and $\\{b, a\\}$ are the same set.

Three shortcuts save you the typing:

• The **Size** buttons, 1 through 5, rebuild the set at that many elements.
• The preset buttons load ready-made sets — letters, numbers, a two-element set, and color names.
• The **Empty set** toggle decides whether the empty subset is drawn as $\\emptyset$ or as an empty pair of braces.

Five elements is the ceiling, and the reason is the doubling rather than an arbitrary limit: five elements already produce 32 subsets, and six would produce 64. The picture stops being readable well before the mathematics stops being correct.`,
      before:``,
      after:``,
      link:'',

    },

    obj2:{
      title:`Reading the Subset Lattice`,
      content:`The diagram is a **Hasse diagram**, and it is worth knowing what that means before you read anything off it.

Every node is one subset of your set. The empty set sits alone at the bottom, the whole set sits alone at the top, and the rows in between hold the subsets of each intermediate size — one element on the first row up, two on the next, and so on.

A line joins two nodes when they differ by exactly one element. That is the whole drawing rule, and it is what makes the picture readable: lines for one-step containments only, with the longer containments left implicit.

The payoff is that containment becomes a direction. If you can trace a path upward from one subset to another, the first is contained in the second. If you cannot get from one to the other by travelling upward, neither contains the other, and the two subsets are **incomparable**. Most pairs in a large lattice are incomparable, which is exactly why containment is a partial order rather than a ranking.

The readout beside the title keeps the arithmetic in view: $n$ elements, $2^n$ subsets.`,
      before:``,
      after:``,
      link:'',

    },

    obj3:{
      title:`Selecting a Subset`,
      content:`Click any node to select it — or move the keyboard focus to it and press Enter, which does the same thing.

Selection splits the diagram into three colors, named in the legend under the picture:

• The selected subset itself.
• Everything **below** it that it contains — its own subsets.
• Everything **above** it that contains it — its supersets.

Anything left pale is incomparable to your selection: it neither contains the subset nor sits inside it.

The two colored regions are called **cones**, and reading them is the point of the tool. The downward cone from a subset of size $k$ is a complete copy of the whole diagram for a set of that size, holding $2^k$ nodes. The upward cone holds $2^{n-k}$ nodes, one choice of in-or-out for each element not already present.

Try the extremes first. Select the bottom node and nothing lights up below it, because nothing is below the empty set. Select the top node and everything lights up below it, because every subset is contained in the set itself. The panel on the right narrates whichever case you have selected.`,
      before:``,
      after:``,
      link:'',

    },

    obj4:{
      title:`Counting Levels in the Subsets Tab`,
      content:`The **Subsets** tab turns the picture into numbers.

The table at the top has one row per level. Level $k$ counts the subsets holding exactly $k$ elements, and that count is the binomial coefficient $\\binom{n}{k}$ — the number of ways to choose which $k$ of the $n$ elements to include. A bar beside each row scales the counts against each other, and the footer adds them up to $2^n$.

Two patterns show up immediately and are worth pausing on. The counts are symmetric, reading the same forwards and backwards, because choosing $k$ elements to keep is the same decision as choosing $n - k$ to leave out. And they are largest in the middle, because there are more ways to pick a middling number of elements than to pick almost none or almost all.

Below the table, the **Roster form** writes the power set out properly, in braces, one subset after another. Clicking any entry selects it in the diagram, which is far quicker than hunting for a node by eye once the lattice gets crowded.`,
      before:``,
      after:``,
      link:'',

    },

    obj5:{
      title:`Styling the Diagram`,
      content:`The **Style** tab has three controls, and each solves a specific readability problem rather than being decoration.

**Highlight** sets the accent color used for the selected subset and its downward cone. Worth changing when you are pasting screenshots into notes that already use a color scheme, or when the default blue is hard to distinguish on a projector.

**Level gap** sets the vertical distance between rows. Widen it when the labels on a five-element set start crowding each other; tighten it when you want the whole lattice visible without scrolling.

**Fade edges** dims every line that falls outside the two cones of the current selection. Leave it on while you are tracing containment, because it strips away the lines that have nothing to do with your subset and leaves the two cones standing out cleanly. Turn it off when you want to study the full structure of the lattice — the symmetry of the diagram is much easier to see with every edge drawn at equal weight.

None of the three change the mathematics; they change how much of it you can see at once.`,
      before:``,
      after:``,
      link:'',

    },

    obj6:{
      title:`Things Worth Trying`,
      content:`A few deliberate experiments make the structure obvious faster than reading about it does.

**Watch the doubling.** Step the Size buttons from 1 to 5 and read the total each time: 2, 4, 8, 16, 32. Each new element doubles the count, because every subset that existed before now appears twice — once without the new element, once with it.

**Find the copy inside.** Select a two-element subset of a four-element set. The cone below it holds four nodes in the same diamond shape the whole diagram has when $n = 2$. Every node carries a smaller copy of the picture inside it.

**Check the halves.** Select a single element. Exactly half the subsets contain it, because each of the others is independently in or out.

**Compare bottom and top.** The empty set has one subset and the maximum number of supersets. The full set is the reverse. Every node in between trades one for the other.

**Rename the elements.** Swap the letters for words. The lattice is identical, which is the point: the power set depends on how many elements there are, not on what they are.`,
      before:``,
      after:``,
      link:'',

    },

    obj7:{
      title:`What Is a Power Set?`,
      content:`The **power set** of a set $A$, written $P(A)$ or sometimes $2^A$, is the set of all subsets of $A$.

The definition is short, and the one thing to be careful about is that the members of $P(A)$ are themselves sets. If $A = \\{a, b\\}$, then

$$P(A) = \\{\\, \\emptyset,\\ \\{a\\},\\ \\{b\\},\\ \\{a, b\\} \\,\\}$$

which has four members, none of which is $a$ or $b$. The elements of $A$ are not elements of $P(A)$; the subsets built from them are.

Two members are easy to forget, and both are always present. The **empty set** is a subset of every set, so it always appears. And $A$ is a subset of itself, so the whole set always appears too. Leaving either one out is the most common mistake when listing a power set by hand.

The construction can be repeated: $P(P(A))$ is a perfectly good set, with $2^4 = 16$ members when $A$ has two elements. For the underlying definitions of subset and membership, see **set theory**.`,
      before:``,
      after:``,
      link:'',

    },

    obj8:{
      title:`Why a Set of n Elements Has 2 to the n Subsets`,
      content:`The formula for the size of a power set is

$$|P(A)| = 2^{|A|}$$

and the argument behind it is one decision repeated.

To build a subset, walk through the elements of $A$ one at a time and decide, for each, whether it goes in. Two choices per element, and the choices are independent, so $n$ elements give $2 \\times 2 \\times \\cdots \\times 2 = 2^n$ possible outcomes. Each distinct sequence of decisions produces a distinct subset, and every subset arises from exactly one sequence, so the count is exact rather than an estimate.

This is also why every subset can be written as a string of yes-or-no answers, one per element — the reason computers store small sets as bit patterns.

The same total can be reached by counting level by level and adding: $\\sum_k \\binom{n}{k} = 2^n$. Both routes are visible in the tool, the first in the shape of the lattice and the second in the level table. For the counting rules behind the coefficients, see **combinations**.`,
      before:``,
      after:``,
      link:'',

    },

    obj9:{
      title:`Subset, Proper Subset, and Element`,
      content:`Three relations are easy to confuse, and the lattice separates them cleanly.

$A \\subseteq B$ says every element of $A$ is also in $B$. This allows $A$ and $B$ to be the same set, which is why every set is a subset of itself and why the top node of the diagram belongs in the power set at all.

$A \\subset B$, a **proper subset**, says the same thing but rules out equality. That single exclusion is the entire difference, and it is why the two counts a set has always differ by exactly one: $2^n$ subsets, $2^n - 1$ proper ones.

$a \\in B$ is a different kind of claim altogether. It says $a$ is one of the members of $B$, not that it is contained in $B$ as a set. So for $B = \\{a, b\\}$: $\\{a\\} \\subseteq B$ is true, $a \\in B$ is true, and $a \\subseteq B$ is not even well formed.

The empty set is where this bites hardest. $\\emptyset \\subseteq B$ is always true; $\\emptyset \\in B$ is usually false. For the formal statements, see **subsets**.`,
      before:``,
      after:``,
      link:'',

    },

    obj10:{
      title:`Where Power Sets Are Used`,
      content:`The power set is not only a classroom exercise; it is the standard way to package all the possibilities of a situation as a single object.

In **probability**, the sample space is a set of outcomes and an event is a subset of it. For a finite sample space the collection of all events is exactly the power set, which is why a three-outcome experiment has eight events, counting the impossible one and the certain one.

In **combinatorics**, counting subsets by size is counting combinations, and the level table is a row of **Pascal’s triangle**.

In logic and computing, a subset of $n$ items is a string of $n$ bits, so power sets are the natural model for flag sets, feature toggles, and truth assignments over $n$ variables.

In **set theory** proper, the power set drives Cantor’s theorem: $|P(A)|$ is always strictly larger than $|A|$, even for infinite sets. That single result is what produces different sizes of infinity, and it starts from the diagram on this page.`,
      before:``,
      after:``,
      link:'',

    },

    obj11:{
      title:`Related Concepts and Tools`,
      content:`**Set Theory** — sets, membership, and the notation the whole page is written in.

**Subsets** — the containment relation, proper subsets, and how to prove one set sits inside another.

**Set Operations** — union, intersection, difference, and complement, defined on the same sets whose subsets are drawn here.

**Cardinality** — sizes of sets, finite and infinite, and Cantor’s theorem about the power set.

**Combinations** — the $\\binom{n}{k}$ counts that fill each level of the lattice.

**Pascal’s Triangle** — where those level counts come from, and why they are symmetric.

**Venn Diagram Generator** — the companion tool for shading set expressions rather than enumerating subsets.`,
      before:``,
      after:``,
      link:'',

    },

  }


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}

  const faqQuestions = {
    obj1: {
      question: "What is the power set of a set?",
      answer: "The power set of a set A, written P(A), is the set of all subsets of A. Its members are themselves sets, and two of them are always present: the empty set, which is a subset of every set, and A itself, since every set is a subset of itself."
    },
    obj2: {
      question: "How many subsets does a set with n elements have?",
      answer: "Exactly 2 to the power n. Building a subset means deciding independently for each element whether it goes in, which gives two choices per element. So a 3-element set has 8 subsets, a 4-element set has 16, and a 5-element set has 32."
    },
    obj3: {
      question: "Is the empty set a subset of every set?",
      answer: "Yes. The claim that the empty set is a subset of S asks whether every element of the empty set is in S, and there are no elements to check, so the condition holds by default. Note that this is different from the empty set being an element of S, which is usually false."
    },
    obj4: {
      question: "What is the difference between a subset and a proper subset?",
      answer: "A subset allows equality, so every set is a subset of itself. A proper subset excludes that one case. That is why a set with n elements has 2 to the n subsets but only 2 to the n minus 1 proper subsets."
    },
    obj5: {
      question: "How do I list all the subsets of a set?",
      answer: "Work level by level: the empty set, then every single element, then every pair, and so on up to the whole set. Level k holds n choose k subsets. The Subsets tab in the explorer does this for you and prints the full roster in set notation."
    }
  }

  const seoData = {
    title: "Power Set Explorer | Interactive Subset Lattice",
    description: "Explore the power set of any small set as an interactive subset lattice. Click a subset to see what it contains, count all subsets, and read each level.",
    keywords: keyWords.join(", "),
    url: "/set-theory/visual-tools/power-set",
    name: "Power Set Explorer",
    hubDescription: "Draw the power set of a set of up to five elements as a Hasse diagram of the subset lattice. Click any subset and its subsets light up below it while its supersets light up above it, so containment reads as a direction on the page. A level table counts each size as a binomial coefficient and totals them to 2 to the n, and a roster panel lists every subset in set notation.",
    category: "Sets and Subsets",
    subCategory: "Power Sets",
  }

  const schemas = {

    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Power set of any set of up to five elements, drawn as a Hasse diagram of the subset lattice",
        "Click or keyboard selection of any subset, highlighting its subsets below and its supersets above",
        "Live count of the total number of subsets as 2 to the power of the set size",
        "Level table counting the subsets of each size as binomial coefficients, with a bar chart and total",
        "Roster form listing every subset in set notation, with click-to-select on each entry",
        "Preset sets and a size selector from one to five elements",
        "Styling controls for highlight color, level spacing, and fading of edges outside the selection"
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
          "name": "Power Set Explorer",
          "item": `https://www.learnmathclass.com${seoData.url}`
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
      props:{
         sectionsContent,
         introContent,
         instructions,
         faqQuestions,
         schemas,
         seoData,
       }
    }
   }

export default function PowerSetPage({seoData, sectionsContent, introContent, instructions, faqQuestions, schemas}) {


  // obj0 is the Key Terms slot, unused on tool pages - it stays empty and is
  // filtered out here so it never reaches the table of contents.
  const genericSections = Object.keys(sectionsContent)
    .filter((key) => sectionsContent[key].title)
    .map((key, index) => ({
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
           // topOffset='65px'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Power Set Explorer</h1>
   <br/>
   <div style={{width:'80%', margin:'auto'}}>
     <ExplanationDetails
       title='How to use'
       instructions={instructions}
       accent='#2f4fd8'
     />
   </div>
   <br/>
   <br/>
   <PowerSetExplorer showIntro={false}/>
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
   {/* Widget pages do not carry an intro section.
    <IntroSection
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   */}
   {/* Key Terms is for theoretical pages only - obj0 is left empty here.
    <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   />
   <br/>
   */}
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
