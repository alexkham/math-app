import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

   const sectionsContent = {
  obj1: {
    title: `The Addition Rule`,
    content: `
The addition rule applies when a count splits into cases that cannot occur simultaneously. If an outcome can be achieved by method 1 in $m_1$ ways, by method 2 in $m_2$ ways, and so on through method $k$ in $m_k$ ways, with no outcome belonging to more than one method, then the total number of outcomes is
 
$$m_1 + m_2 + \\cdots + m_k.$$
 
The linguistic marker for the addition rule is the word **or** — pick method 1 OR method 2 OR method 3. Each "or" between mutually exclusive cases contributes its own count to the sum.
 
In the language of [set theory](!/set-theory), the rule is the cardinality identity $|A \\cup B| = |A| + |B|$ when $A \\cap B = \\emptyset$, generalized to any number of pairwise disjoint sets.
 
## Example
 
A traveller can reach the city by 2 bus routes, by 3 train routes, or by 4 taxi routes. Since these options are mutually exclusive — one trip uses one mode of transport — the total number of route choices is
 
$$2 + 3 + 4 = 9.$$
 
## The Mutual-Exclusion Condition
 
The rule requires that the cases be mutually exclusive. When two methods share outcomes, naive addition counts the shared outcomes twice. The systematic correction for this case is the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion), which extends the addition rule by alternating additions and subtractions of intersection sizes.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj2: {
    title: `The Multiplication Rule`,
    content: `
The multiplication rule applies when an outcome is built from a sequence of independent steps, each contributing its own number of options. If step 1 has $m_1$ outcomes, step 2 has $m_2$ outcomes, and so on through step $k$ with $m_k$ outcomes, and the steps are independent, then the combined sequence has
 
$$m_1 \\times m_2 \\times \\cdots \\times m_k$$
 
possible outcomes.
 
The linguistic marker for the multiplication rule is the word **and** — choose step 1 AND step 2 AND step 3. Each "and" between independent steps multiplies the count.
 
In set-theoretic terms, the rule is the cardinality of the Cartesian product, $|A \\times B| = |A| \\cdot |B|$, extended to any finite number of factors.
 
## Example
 
A lunch combo is built from 3 main courses, 2 drinks, and 4 desserts. Each main can be paired with each drink, and each pairing with each dessert, giving
 
$$3 \\times 2 \\times 4 = 24$$
 
possible meals.
 
## The Independence Condition
 
The rule requires that the number of options at each step not depend on the choices made at earlier steps. When the option count at a later step shifts based on earlier choices, the multiplication rule does not apply directly and the count must be broken down further — usually by splitting into cases via the addition rule.
 
The multiplication rule is the engine behind every [permutation](!/combinatorics/permutations) formula. Arranging $n$ distinct items in a line uses the rule with decreasing counts at each step: $n$ choices for the first position AND $(n-1)$ for the second AND $(n-2)$ for the third, down to $1$, yielding $n!$ total arrangements. [Combinations](!/combinatorics/combinations) build on the same product, with a division step to remove the ordering.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj3: {
    title: `Complementary Counting`,
    content: `
Some counting problems are easier to solve in reverse. Counting the cases that fail a condition can be significantly simpler than counting the cases that satisfy it, especially when the condition has the form "at least one" — its negation, "none", often collapses into a single tractable count.
 
If $U$ is the universe of all outcomes and $A \\subseteq U$ is the set of desired outcomes, then
 
$$|A| = |U| - |U \\setminus A|.$$
 
The strategy is to count the total, count the complement, and subtract.
 
## Example
 
The number of arrangements of $n$ distinct items in which at least one item ends up in a specific designated position is awkward to count directly — multiple items can satisfy the condition independently, and the cases overlap. The complementary count — arrangements in which no item is in that position — partitions cleanly: the designated position holds one of the $n-1$ non-designated items, and the remaining $n-1$ items fill the rest. Subtracting this count from $n!$ gives the desired number.
 
## Structural Note
 
In set-theoretic notation, complementary counting expresses $|A| = |U| - |A^c|$, where $A^c$ is the complement of $A$ in the universe. This is the addition rule applied to the partition $A \\cup A^c = U$ — complementary counting is a strategic application of the addition rule rather than an independent principle.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj4: {
    title: `Double Counting`,
    content: `
Double counting is a proof technique rather than a counting formula. The set in question is counted in two genuinely different ways; the two resulting expressions both equal the size of the set, so they equal each other. The output is an identity, not a numerical count.
 
If $|S|$ can be expressed as $f(n)$ by one argument and as $g(n)$ by another argument, then
 
$$f(n) = g(n).$$
 
## The Handshake Lemma
 
A canonical illustration: in a group of people who have shaken hands in various pairings, the sum of the number of hands each person shook equals twice the total number of handshakes. The reason is that each handshake is counted once from each participant&apos;s perspective — the same set (handshakes) counted two ways. In graph theory this becomes $\\sum_{v} \\deg(v) = 2|E|$, where the left side sums degrees over all vertices and the right side counts each edge from both endpoints.
 
## Combinatorial Identities
 
Many of the identities involving the [binomial coefficient](!/combinatorics/binomial-coefficient) — including Vandermonde&apos;s identity and the hockey stick identity — are most naturally proved by double counting. A subset count is interpreted in two ways: by selecting members directly, and by partitioning the selection into stages or cases. The two expressions for the same subset count then equate to produce the identity. Algebraic proofs of these identities exist, but the combinatorial proofs are typically shorter and more illuminating.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj5: {
    title: `The Pigeonhole Principle`,
    content: `
The pigeonhole principle does not count outcomes — it guarantees the existence of a particular kind of outcome. The statement is existential: it certifies that something must occur without identifying where.
 
## Basic Form
 
If $n$ items are distributed among $k$ containers and $n > k$, then at least one container holds at least two items.
 
The reasoning is direct: if every container held at most one item, the total number of items would be at most $k$, contradicting $n > k$.
 
## Generalized Form
 
If $n$ items are distributed among $k$ containers, then at least one container holds at least $\\lceil n/k \\rceil$ items, where $\\lceil \\cdot \\rceil$ denotes the ceiling function. The basic form is the case $n = k+1$, which forces $\\lceil n/k \\rceil = 2$.
 
## Examples
 
In any group of 13 people, at least two share a birth month — the 13 people are distributed among 12 months, so the basic form applies.
 
Among any 5 integers chosen from $\\{1, 2, \\ldots, 8\\}$, at least two come from one of the four pairs $\\{1,2\\}, \\{3,4\\}, \\{5,6\\}, \\{7,8\\}$ — 5 items distributed into 4 pairs forces at least one pair to contain two of the chosen integers, and those two differ by exactly 1.
 
## One-Sided Nature
 
The pigeonhole principle is asymmetric. It proves that a collision must occur, but says nothing about which container holds it or how to find it. The principle yields existence proofs in number theory, geometry, and combinatorics, often in settings where direct construction is hard or impossible.
 
In the language of [functions](!/functions), the principle states that no injection exists from a finite set into a strictly smaller finite set — any function from a larger finite set to a smaller one must map at least two elements of the domain to the same target.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj6: {
    title: `Putting the Principles Together`,
    content: `
Most counting problems are not solved by applying a single principle. They require chaining several — addition to split a problem into cases, multiplication within each case to count its outcomes, complementary counting to simplify a case that is easier in reverse.
 
## A Worked Example
 
Count the number of 3-digit positive integers whose digits are all distinct.
 
The first digit cannot be 0 (or the number would not be a 3-digit number), so it has 9 choices. The second digit can be any digit except the one already used, giving 9 remaining choices (now including 0). The third digit can be any digit except the two already used, giving 8 choices. By the multiplication rule:
 
$$9 \\times 9 \\times 8 = 648.$$
 
Now consider the complementary question: how many 3-digit positive integers contain at least one repeated digit?
 
The total number of 3-digit positive integers is $9 \\times 10 \\times 10 = 900$ — 9 choices for the first digit and 10 each for the other two. Subtracting the 648 with all-distinct digits gives
 
$$900 - 648 = 252$$
 
with at least one repetition.
 
A direct count of the "at least one repetition" set would require case analysis: exactly two digits equal and one different, all three digits equal, and the various positional arrangements. The complementary route converts the multi-case problem into a single subtraction.
 
## When Each Principle Applies
 
The addition rule splits a count across mutually exclusive cases. The multiplication rule builds a count from independent steps. Complementary counting reframes a hard "at least one" problem as a simpler "none" problem and subtracts. Double counting produces identities by counting the same set two different ways. The pigeonhole principle proves that a configuration must exist when items outnumber containers.
 
These five principles together cover the logical foundation of every formula that appears in the rest of the section.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj7: {
    title: `Related Concepts`,
    content: `
• [Set Theory](!/set-theory) — the language of unions, intersections, complements, and Cartesian products that the counting rules formalize as cardinality identities.
 
• [Functions](!/functions) — the pigeonhole principle is the statement that no injection exists from a finite set into a strictly smaller finite set.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
};



const introContent = {
  id: 'intro',
  title: `The Logic Beneath the Formulas`,
  content: `
Before any specific formula in combinatorics — before permutations, combinations, or the binomial theorem — there are a small number of logical rules that govern how counts combine. Every counting argument in the section, however elaborate, is a structured application of these rules.
 
Two of them are foundational. The addition rule applies when a count splits into mutually exclusive cases; the multiplication rule applies when an outcome is built from a sequence of independent steps. Three further principles extend or vary these ideas: complementary counting (count what fails the condition and subtract), double counting (count the same set two ways and equate), and the pigeonhole principle (more items than containers forces a repeat).
 
Each principle answers a structural question about a counting problem rather than computing a specific number. Recognizing which principle applies is the first step in any counting argument.
`,
};




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/combinatorics/counting-principles",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Counting Principles</h1>
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
