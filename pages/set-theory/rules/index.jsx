import SkillsToLearn from '@/app/components/infographics/SkillsToLearn/SkillsToLearn'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import React from 'react';
import '../../pages.css';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import Sections from '@/app/components/page-components/section/Sections';
import ExpandableTable from '@/app/components/generic-table/ExpandableTable';
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import twoSetsLawsVennDiagrams from '@/app/components/venn-diagrams/twoSetsLawsVennDiagrams'
import threeSetsLawsVennDiagrams from '@/app/components/venn-diagrams/3-sets/threeSetsLawsVennDiagrams'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import SetDiagram from '@/app/components/infographics/SetDiagram/SetDiagram'


// Skills list 2026-11-14: every skill links to its how-to page in the Methods tier.
const skillsToLearn = {
  title: false,
  lede: "Each skill opens its step-by-step method page.",
  groups: [
    { title: "Set theory methods", items: [
      { skill: "Prove a set identity", href: "/set-theory/methods/prove-set-identities", desc: "Prove that two set expressions are equal: show each side is a subset of the other, or rewrite one side with the laws of set algebra.", level: "composite" },
      { skill: "Find the union of two sets", href: "/set-theory/methods#union", desc: "The question asks for the elements in one set **or** the other, or both: $A \\cup B$, \"in at least one of the sets\", \"everyone on either team\".", level: "atomic" },
      { skill: "Find the intersection of two sets", href: "/set-theory/methods#intersection", desc: "The question asks for the elements in **both** sets: $A \\cap B$, \"common to\", \"in $A$ and in $B$\". If nothing is shared, the answer is $\\emptyset$.", level: "atomic" },
      { skill: "Find the complement of a set", href: "/set-theory/methods#complement", desc: "The question asks for everything **not** in a set, relative to a universal set $U$: $A^c$, \"not in $A$\", \"outside the circle\". Without a stated $U$ the complement is not defined.", level: "atomic" },
      { skill: "Find the difference of two sets", href: "/set-theory/methods#difference", desc: "The question asks for the elements of one set that are **not** in another: $A \\setminus B$ (also written $A - B$), \"in $A$ but not in $B$\". Order matters.", level: "atomic" },
    ] },
  ],
  hub: { href: "/set-theory/methods", label: "All set theory methods" },
};

// SetDiagram (identity) 2026-11-15: both sides of each law built step by step. Laws, formulas and explanations are the page's own.
const setDiagramTheme = { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309', circle: '#06357A', setLabel: '#06357A', hatch: '#06357A', pickInk: '#B45309' };

const deMorganBothSides = {
  sets: [{ id: 'A' }, { id: 'B' }],
  universe: 'U',
  laws: [
    { name: 'De Morgan’s Law for Union', formula: '$(A \\cup B)^c = A^c \\cap B^c$', explanation: 'The complement of a union is the intersection of the complements.',
      left: { label: '$(A \\cup B)^c$', steps: [{ label: '$A \\cup B$', regions: ['A', 'AB', 'B'] }, { label: '$(A \\cup B)^c$', regions: [''] }] },
      right: { label: '$A^c \\cap B^c$', steps: [{ label: '$A^c$', regions: ['B', ''] }, { label: '$B^c$', regions: ['A', ''] }, { label: '$A^c \\cap B^c$', regions: [''] }] } },
    { name: 'De Morgan’s Law for Intersection', formula: '$(A \\cap B)^c = A^c \\cup B^c$', explanation: 'The complement of an intersection is the union of the complements.',
      left: { label: '$(A \\cap B)^c$', steps: [{ label: '$A \\cap B$', regions: ['AB'] }, { label: '$(A \\cap B)^c$', regions: ['A', 'B', ''] }] },
      right: { label: '$A^c \\cup B^c$', steps: [{ label: '$A^c$', regions: ['B', ''] }, { label: '$B^c$', regions: ['A', ''] }, { label: '$A^c \\cup B^c$', regions: ['A', 'B', ''] }] } },
  ],
};

const distributiveBothSides = {
  sets: [{ id: 'A' }, { id: 'B' }, { id: 'C' }],
  universe: 'U',
  laws: [
    { name: 'Distributive Law of Union over Intersection', formula: '$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$', explanation: 'Union distributes over intersection.',
      left: { label: '$A \\cup (B \\cap C)$', steps: [{ label: '$B \\cap C$', regions: ['BC', 'ABC'] }, { label: '$A \\cup (B \\cap C)$', regions: ['A', 'AB', 'AC', 'BC', 'ABC'] }] },
      right: { label: '$(A \\cup B) \\cap (A \\cup C)$', steps: [{ label: '$A \\cup B$', regions: ['A', 'B', 'AB', 'AC', 'BC', 'ABC'] }, { label: '$A \\cup C$', regions: ['A', 'C', 'AB', 'AC', 'BC', 'ABC'] }, { label: '$(A \\cup B) \\cap (A \\cup C)$', regions: ['A', 'AB', 'AC', 'BC', 'ABC'] }] } },
    { name: 'Distributive Law of Intersection over Union', formula: '$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$', explanation: 'Intersection distributes over union.',
      left: { label: '$A \\cap (B \\cup C)$', steps: [{ label: '$B \\cup C$', regions: ['B', 'C', 'AB', 'AC', 'BC', 'ABC'] }, { label: '$A \\cap (B \\cup C)$', regions: ['AB', 'AC', 'ABC'] }] },
      right: { label: '$(A \\cap B) \\cup (A \\cap C)$', steps: [{ label: '$A \\cap B$', regions: ['AB', 'ABC'] }, { label: '$A \\cap C$', regions: ['AC', 'ABC'] }, { label: '$(A \\cap B) \\cup (A \\cap C)$', regions: ['AB', 'AC', 'ABC'] }] } },
  ],
};

export async function getStaticProps(){

    // Surfaced on the /set-theory hub via buildSectionData extraction.
    const hubMeta = {
      name: 'Set Theory Rules',
      hubDescription: 'The laws of the algebra of sets collected in one reference: idempotent, associative, commutative, distributive, identity, domination, absorption, complement and De Morgan laws — each stated as a formula for both union and intersection, with a plain-language explanation of what the law permits.',
    }

    const setAlgebraLawsData = {
        "Idempotent Laws": [
          {
            law: "Idempotent Law for Union",
            formula: "$A \\cup A = A$",
            explanation: "A set unioned with itself remains the same set."
          },
          {
            law: "Idempotent Law for Intersection",
            formula: "$A \\cap A = A$",
            explanation: "A set intersected with itself remains the same set."
          }
        ],
      
        "Associative Laws": [
          {
            law: "Associative Law for Union",
            formula: "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$",
            explanation: "Grouping of sets under union does not affect the result."
          },
          {
            law: "Associative Law for Intersection",
            formula: "$(A \\cap B) \\cap C = A \\cap (B \\cap C)$",
            explanation: "Grouping of sets under intersection does not affect the result."
          }
        ],
      
        "Commutative Laws": [
          {
            law: "Commutative Law for Union",
            formula: "$A \\cup B = B \\cup A$",
            explanation: "The order of sets in a union does not affect the result."
          },
          {
            law: "Commutative Law for Intersection",
            formula: "$A \\cap B = B \\cap A$",
            explanation: "The order of sets in an intersection does not affect the result."
          }
        ],
      
        "Distributive Laws": [
          {
            law: "Distributive Law of Union over Intersection",
            formula: "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
            explanation: "Union distributes over intersection."
          },
          {
            law: "Distributive Law of Intersection over Union",
            formula: "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
            explanation: "Intersection distributes over union."
          }
        ],
      
        "Identity Laws": [
          {
            law: "Identity Law for Union",
            formula: "$A \\cup \\emptyset = A$",
            explanation: "The union of a set with the empty set is the set itself."
          },
          {
            law: "Identity Law for Intersection",
            formula: "$A \\cap U = A$",
            explanation: "The intersection of a set with the universal set is the set itself."
          },
          {
            law: "Annihilation Law for Intersection",
            formula: "$A \\cap \\emptyset = \\emptyset$",
            explanation: "The intersection of a set with the empty set is the empty set."
          },
          {
            law: "Annihilation Law for Union",
            formula: "$A \\cup U = U$",
            explanation: "The union of a set with the universal set is the universal set."
          }
        ],
      
        "Complement Laws": [
          {
            law: "Complement Law for Union",
            formula: "$A \\cup A^c = U$",
            explanation: "A set unioned with its complement gives the universal set."
          },
          {
            law: "Complement Law for Intersection",
            formula: "$A \\cap A^c = \\emptyset$",
            explanation: "A set intersected with its complement gives the empty set."
          },
          {
            law: "Complement of Universal Set",
            formula: "$U^c = \\emptyset$",
            explanation: "The complement of the universal set is the empty set."
          },
          {
            law: "Complement of Empty Set",
            formula: "$\\emptyset^c = U$",
            explanation: "The complement of the empty set is the universal set."
          },
          {
            law: "Double Complement Law (Involution)",
            formula: "$(A^c)^c = A$",
            explanation: "Taking the complement twice returns the original set."
          }
        ],
      
        "De Morgan’s Laws": [
          {
            law: "De Morgan’s Law for Union",
            formula: "$(A \\cup B)^c = A^c \\cap B^c$",
            explanation: "The complement of a union is the intersection of the complements."
          },
          {
            law: "De Morgan’s Law for Intersection",
            formula: "$(A \\cap B)^c = A^c \\cup B^c$",
            explanation: "The complement of an intersection is the union of the complements."
          }
        ]
      };


    
  const sectionsContent={

    idempotent:{
      title:`Idempotent Laws`,
      content:``,
      before:``,
      after:``,
  
  
    },
    associative:{
      title:`Associative Laws`,
      content:``,
      before:``,
      after:``,
  
    },
  
    commutative:{
  
      title:`Commutative Laws`,
      content:``,
      before:``,
      after:``,
  
    },
    distributive:{
      title:`Distributive Laws`,
      content:``,
      before:``,
      after:``,
  
    },


    identity:{
  
      title:`Identity Laws`,
      content:``,
      before:``,
      after:``,
  
    },
    complement:{
  
        title:`Complement Laws`,
        content:``,
        before:``,
        after:``,
    
      },
      de_morgan:{
  
        title:`De Morgan’s Laws`,
        content:``,
        before:``,
        after:``,
    
      }
  
  }

  const introContent = {
    id: 'intro',
    content: `Every law below is written in five marks, and the tables assume you already read them.

$A \\cup B$ is the **union** — everything in either set. $A \\cap B$ is the **intersection** — only what is in both. The two are set out at [set operations](!/set-theory/operations#notation), which also explains why the cup opens upward and the cap down.

$\\emptyset$ is the **empty set**, the one with no members, and $U$ is the **universal set**, everything currently under discussion. Both are defined at [set basics](!/set-theory/basics#2). $U$ is not fixed: it is whatever the problem says it is, which is what makes the complement below depend on it.

$A^c$ is the **complement** of $A$ — everything in $U$ that is not in $A$. This site also writes it $A'$ on the [Venn tools](!/set-theory/visual-tools/two-sets-basic-venn), and $\\overline{A}$ appears in other texts; all three mean the same set.

Read that way, each law states that two different routes through these operations land on the same set.`,
  }

      // Operation A demonstration units: a frozen law state from the laws tools,
  // an explanation panel, and the tool link, in one frame. Built here and
  // rendered as content-array items. Only the two non-obvious laws: for the
  // others both sides paint the same trivially-shaded region, which restates
  // the formula in shapes.
  const demoUnits = {
    deMorgan: demoUnitFrame({
      svg: twoSetsLawsVennDiagrams['dm-u'],
      caption: '(A &#8746; B)&#8242; = A&#8242; &#8745; B&#8242;, frozen',
      text: 'Both sides paint the same region &#8212; everything outside both circles. The complement of a union keeps only what lies in neither set, which is exactly what is outside <em>A</em> and also outside <em>B</em>. Check the second De Morgan law, and every other two-set identity, on the',
      href: '/set-theory/visual-tools/two-sets-laws-venn',
      linkText: 'two-set laws explorer',
    }),
    distributive: demoUnitFrame({
      svg: threeSetsLawsVennDiagrams['dist-i-over-u'],
      caption: 'A &#8745; (B &#8746; C) = (A &#8745; B) &#8746; (A &#8745; C), frozen',
      text: 'Both sides paint the same two lenses: the part of <em>A</em> that overlaps <em>B</em>, and the part of <em>A</em> that overlaps <em>C</em>. Intersection spreads across a union the way multiplication spreads across a sum. Step through the other three-set identities on the',
      href: '/set-theory/visual-tools/three-sets-laws-venn',
      linkText: 'three-set laws explorer',
    }),
  };

  return {
      props:{
        demoUnits,
        sectionsContent,
        setAlgebraLawsData,
        introContent,
      }
    }
  }
  

export default function SetTheoryRulesPage({demoUnits,sectionsContent,setAlgebraLawsData,introContent}) {


    
  const setTheoryRulesSections=[
    {
        id:'idempotent',
        title:sectionsContent.idempotent.title,
        link:'',
        content:[
            // <ExpandableTable/>
            <div key={1} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.idempotent.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'associative',
        title:sectionsContent.associative.title,
        link:'',
        content:[
            <div key={2} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.associative.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'commutative',
        title:sectionsContent.commutative.title,
        link:'',
        content:[
            <div key={3} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.commutative.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'distributive',
        title:sectionsContent.distributive.title,
        link:'',
        content:[
            <div key={4} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.distributive.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
            <div key={'unit-distributive'} dangerouslySetInnerHTML={{ __html: demoUnits.distributive }} />,
            `Union spreads across intersection as well, which has no counterpart in ordinary arithmetic.`,
            <DiagramFrame
              key={'set-diagram-distributive'}
              id="distributive-laws-both-sides"
              title="Distributive laws, side by side"
              source="/set-theory/rules"
              before="Build each side of a distributive law one step at a time. Both sides end on the same regions."
            >
              <SetDiagram data={distributiveBothSides} variant="identity" theme={setDiagramTheme} />
            </DiagramFrame>,
        ]
    },
    {
        id:'identity',
        title:sectionsContent.identity.title,
        link:'',
        content:[
            <div key={5} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.identity.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'complement',
        title:sectionsContent.complement.title,
        link:'',
        content:[
            <div key={6} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.complement.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'de_morgan',
        title:sectionsContent.de_morgan.title,
        link:'',
        content:[
            <div key={7} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.de_morgan.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
            <div key={'unit-deMorgan'} dangerouslySetInnerHTML={{ __html: demoUnits.deMorgan }} />,
            `The same exchange runs the other way: the complement of an intersection is the union of the complements.`,
            <DiagramFrame
              key={'set-diagram-de-morgan'}
              id="de-morgan-laws-both-sides"
              title="De Morgan’s laws, side by side"
              source="/set-theory/rules"
              before="Build each side of a De Morgan law one step at a time. Both sides end on the same regions."
            >
              <SetDiagram data={deMorganBothSides} variant="identity" theme={setDiagramTheme} />
            </DiagramFrame>,
        ]
    },
    {
        id:'skills',
        title:'Skills You Should Learn',
        link:``,
        content:[
          <SkillsToLearn key={'skills-to-learn'} data={skillsToLearn} />,
        ]
    },
]


    // const setAlgebraLawsData = {
    //     "Idempotent Laws": [
    //       {
    //         law: "Idempotent Law for Union",
    //         formula: "$A \\cup A = A$",
    //         explanation: "A set unioned with itself remains the same set."
    //       },
    //       {
    //         law: "Idempotent Law for Intersection",
    //         formula: "$A \\cap A = A$",
    //         explanation: "A set intersected with itself remains the same set."
    //       }
    //     ],
      
    //     "Associative Laws": [
    //       {
    //         law: "Associative Law for Union",
    //         formula: "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$",
    //         explanation: "Grouping of sets under union does not affect the result."
    //       },
    //       {
    //         law: "Associative Law for Intersection",
    //         formula: "$(A \\cap B) \\cap C = A \\cap (B \\cap C)$",
    //         explanation: "Grouping of sets under intersection does not affect the result."
    //       }
    //     ],
      
    //     "Commutative Laws": [
    //       {
    //         law: "Commutative Law for Union",
    //         formula: "$A \\cup B = B \\cup A$",
    //         explanation: "The order of sets in a union does not affect the result."
    //       },
    //       {
    //         law: "Commutative Law for Intersection",
    //         formula: "$A \\cap B = B \\cap A$",
    //         explanation: "The order of sets in an intersection does not affect the result."
    //       }
    //     ],
      
    //     "Distributive Laws": [
    //       {
    //         law: "Distributive Law of Union over Intersection",
    //         formula: "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
    //         explanation: "Union distributes over intersection."
    //       },
    //       {
    //         law: "Distributive Law of Intersection over Union",
    //         formula: "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
    //         explanation: "Intersection distributes over union."
    //       }
    //     ],
      
    //     "Identity Laws": [
    //       {
    //         law: "Identity Law for Union",
    //         formula: "$A \\cup \\emptyset = A$",
    //         explanation: "The union of a set with the empty set is the set itself."
    //       },
    //       {
    //         law: "Identity Law for Intersection",
    //         formula: "$A \\cap U = A$",
    //         explanation: "The intersection of a set with the universal set is the set itself."
    //       },
    //       {
    //         law: "Annihilation Law for Intersection",
    //         formula: "$A \\cap \\emptyset = \\emptyset$",
    //         explanation: "The intersection of a set with the empty set is the empty set."
    //       },
    //       {
    //         law: "Annihilation Law for Union",
    //         formula: "$A \\cup U = U$",
    //         explanation: "The union of a set with the universal set is the universal set."
    //       }
    //     ],
      
    //     "Complement Laws": [
    //       {
    //         law: "Complement Law for Union",
    //         formula: "$A \\cup A^c = U$",
    //         explanation: "A set unioned with its complement gives the universal set."
    //       },
    //       {
    //         law: "Complement Law for Intersection",
    //         formula: "$A \\cap A^c = \\emptyset$",
    //         explanation: "A set intersected with its complement gives the empty set."
    //       },
    //       {
    //         law: "Complement of Universal Set",
    //         formula: "$U^c = \\emptyset$",
    //         explanation: "The complement of the universal set is the empty set."
    //       },
    //       {
    //         law: "Complement of Empty Set",
    //         formula: "$\\emptyset^c = U$",
    //         explanation: "The complement of the empty set is the universal set."
    //       },
    //       {
    //         law: "Double Complement Law (Involution)",
    //         formula: "$(A^c)^c = A$",
    //         explanation: "Taking the complement twice returns the original set."
    //       }
    //     ],
      
    //     "De Morgan’s Laws": [
    //       {
    //         law: "De Morgan’s Law for Union",
    //         formula: "$(A \\cup B)^c = A^c \\cap B^c$",
    //         explanation: "The complement of a union is the intersection of the complements."
    //       },
    //       {
    //         law: "De Morgan’s Law for Intersection",
    //         formula: "$(A \\cap B)^c = A^c \\cup B^c$",
    //         explanation: "The complement of an intersection is the union of the complements."
    //       }
    //     ]
    //   };

      
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
   <OperaSidebar
           side='right'
           // topOffset='55px'
           sidebarWidth='35px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Set Theory Rules</h1>
    <br/>
    <SectionTableOfContents sections={setTheoryRulesSections}/>
    <br/>
    <IntroSection id={introContent.id} content={introContent.content}/>
    <br/>
    <Sections sections={setTheoryRulesSections}/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
