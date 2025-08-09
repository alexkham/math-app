import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import GenericTable from '@/app/components/generic-table/GenericTable'
import MermaidDiagram from '@/app/components/mermaid-diagram/MermaidDiagram'
import { countingPrinciplesDiagramsData } from '@/app/api/db/diagrams/combinatorics/countingPrinciples'



export async function getStaticProps(){

 const decisionMakingChart= `flowchart TD
    A["Order matters?"]
    A -- Yes --> B["Repetition allowed?"]
    A -- No --> C["Objects distinct or identical?"]
    
    B -- Yes --> D["Permutation with Repetition (#2)"]
    B -- No --> E["Use all n items?"]
    
    E -- No --> F["Permutation without Repetition (#3)"]
    E -- Yes --> G["Linear or Circular?"]
    
    G -- Linear --> H["Full Permutation (#1)"]
    G -- Circular --> I["Circular Permutation (#4)"]
    
    C -- Distinct --> J["Select a subset or Distribute all?"]
    C -- Identical --> K["Empty cells allowed?"]
    
    J -- Select --> L["Combination (#5)"]
    J -- Distribute --> M["Labeled or Unlabeled?"]
    
    M -- Labeled --> N["Distribution into Cells (#7)"]
    M -- Unlabeled --> O["Partition into Groups (#6)"]
    
    K -- Yes --> P["Weak Composition (#8)"]
    K -- No --> Q["Strong Composition (#9)"]`


  
const countingPrinciplesDiagram=`
graph TD
    A("<h3>Counting Principles in Combinatorics</h3>")
    B("<h3>Addition Principle</h3>Count of disjoint events<br>is sum of individual counts")
    C("<h3>Multiplication Principle</h3>Count of sequential events<br>is product of individual counts")
    D("<h3>Permutations</h3>Ordered arrangements<br>of distinct objects")
    E("<h3>Combinations</h3>Unordered selections<br>from a set of objects")
    
    A -->|"Disjoint events (OR)"| B
    A -->|"Sequential events (AND)"| C
    C -->|"Order matters"| D
    C -->|"Order doesn't matter"| E

    click A "/combinatorics#counting" "Go to Combinatorics overview"
    click B "/combinatorics#counting" "Learn about Addition Principle"
    click C "/combinatorics#counting" "Learn about Multiplication Principle"
    click D "/combinatorics/permutations" "Learn about Permutations"
    click E "/combinatorics/combinations" "Learn about Combinations"
`

    // const combinatoricsScenariosData = {
    //     tableTitle: 'Basic Combinatorics Scenarios',
    //     rows: [
    //       {
    //         scenario: 'Permutation (Full)',
    //         description: 'Arrangement of n distinct elements into a linear sequence, with each element appearing exactly once.'
    //       },
    //       {
    //         scenario: 'Permutation with Repetition',
    //         description: 'Arrangement of a multiset of n positions in which certain element‐types may repeat, counting each distinct linear ordering.'
    //       },
    //       {
    //         scenario: 'Permutation without Repetition',
    //         description: 'Selection of r distinct elements from a set of size n followed by their arrangement into a linear sequence, with no element reused.'
    //       },
    //       {
    //         scenario: 'Circular Permutation',
    //         description: 'Arrangement of n distinct elements around a fixed circle, where configurations differing only by rotation are considered identical.'
    //       },
    //       {
    //         scenario: 'Combination',
    //         description: 'Selection of an unordered subset of size r from a set of n distinct elements, with no regard to sequence.'
    //       },
    //       {
    //         scenario: 'Partition into Groups',
    //         description: 'Division of n distinct elements into r unlabeled subsets, considering only which elements share the same subset and not the order or names of subsets.'
    //       },
    //       {
    //         scenario: 'Distribution into Cells',
    //         description: 'Assignment of each of n distinct elements to one of r labeled cells, producing an ordered mapping of elements to specific cells.'
    //       },
    //       {
    //         scenario: 'Weak Composition',
    //         description: 'Allocation of n identical units into r labeled cells, permitting some cells to receive zero units, and tracking only the counts per cell.'
    //       },
    //       {
    //         scenario: 'Strong Composition',
    //         description: 'Allocation of n identical units into r labeled cells, requiring that every cell receives at least one unit, with only the distribution counts recorded.'
    //       }
    //     ]
    //   };
      
  //   const combinatoricsScenariosData = {
  //     tableTitle: 'Basic Combinatorics Scenarios',
  //     rows: [
  //       {
  //         '#' : `1`,
  //         scenario: '[Permutation (Full)](!/combinatorics/permutations#full)',
  //         description: 'Arrangement of n distinct elements into a linear sequence, with each element appearing exactly once.',
  //         essence: '[Permutation](!/combinatorics/permutations)'
  //       },
  //       {
  //         '#': `2`,
  //         scenario: '[Permutation with Repetition](!/combinatorics/permutations#with)',
  //         description: 'Arrangement of a multiset of n positions in which certain element‐types may repeat, counting each distinct linear ordering.',
  //         essence: '[Permutation](!/combinatorics/permutations)'
  //       },
  //       {
  //         '#': `3`,
  //         scenario: '[Partial Permutation without Repetition](!/combinatorics/permutations#without)',
  //         description: 'Selection of r distinct elements from a set of size n followed by their arrangement into a linear sequence, with no element reused.',
  //         essence: '[Permutation](!/combinatorics/permutations)'
  //       },
  //       {
  //         '#': `4`,
  //         scenario: '[Circular Permutation](!/combinatorics/permutations#circular)',
  //         description: 'Arrangement of n distinct elements around a fixed circle, where configurations differing only by rotation are considered identical.',
  //         essence: '[Permutation](!/combinatorics/permutations)'
  //       },
  //       {
  //         '#': `5`,
  //         scenario: '[Simple Combination](!/combinatorics/combinations#combinations)',
  //         description: 'Selection of an unordered subset of size r from a set of n distinct elements, with no regard to sequence.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       },
  //       {
  //         '#': `6`,
  //         scenario: '[Partition into Groups](!/combinatorics/combinations#partition)',
  //         description: 'Division of n distinct elements into r unlabeled subsets, considering only which elements share the same subset and not the order or names of subsets.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       },
  //       {
  //         '#': `7`,
  //         scenario: '[Distribution into Cells](!/combinatorics/combinations#distribution)',
  //         description: 'Assignment of each of n distinct elements to one of r labeled cells, producing an ordered mapping of elements to specific cells.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       },
  //       {
  //         '#': `8`,
  //         scenario: '[Weak Composition](!/combinatorics/combinations#weak)',
  //         description: 'Allocation of n identical units into r labeled cells, permitting some cells to receive zero units, and tracking only the counts per cell.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       },
  //       {
  //         '#': `9`,
  //         scenario: '[Strong Composition](!/combinatorics/combinations#strong)',
  //         description: 'Allocation of n identical units into r labeled cells, requiring that every cell receives at least one unit, with only the distribution counts recorded.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       }
  //     ]
  // };
  const combinatoricsScenariosData = {
    tableTitle: 'Basic Combinatorics Scenarios',
    rows: [
      {
        '#' : `1`,
        scenario: '[Permutation (Full)](!/combinatorics/permutations#full)',
        description: 'Arrangement of n distinct elements into a linear sequence, with each element appearing exactly once.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `2`,
        scenario: '[Permutation with Identical Items](!/combinatorics/permutations#identical)',
        description: 'Arrangement of n elements where some elements are identical, counting only distinct linear orderings.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `3`,
        scenario: '[Partial Permutation without Repetition](!/combinatorics/permutations#without)',
        description: 'Selection of r distinct elements from a set of size n followed by their arrangement into a linear sequence, with no element reused.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `4`,
        scenario: '[Permutation with Repetition](!/combinatorics/permutations#with-repetition)',
        description: 'Arrangement of r positions chosen from n possible elements, allowing repeated use of elements in different positions.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `5`,
        scenario: '[Circular Permutation](!/combinatorics/permutations#circular)',
        description: 'Arrangement of n distinct elements around a fixed circle, where configurations differing only by rotation are considered identical.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `6`,
        scenario: '[Simple Combination](!/combinatorics/combinations#combinations)',
        description: 'Selection of an unordered subset of size r from a set of n distinct elements, with no regard to sequence.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
      {
        '#': `7`,
        scenario: '[Partition into Groups](!/combinatorics/combinations#partition)',
        description: 'Division of n distinct elements into r unlabeled subsets, considering only which elements share the same subset and not the order or names of subsets.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
      {
        '#': `8`,
        scenario: '[Weak Composition](!/combinatorics/combinations#weak)',
        description: 'Allocation of n identical units into r labeled cells, permitting some cells to receive zero units, and tracking only the counts per cell.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
      {
        '#': `9`,
        scenario: '[Strong Composition](!/combinatorics/combinations#strong)',
        description: 'Allocation of n identical units into r labeled cells, requiring that every cell receives at least one unit, with only the distribution counts recorded.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
      {
        '#': '10',
        scenario: '[Distribution into Cells](!/combinatorics/combinations#distribution)',
        description: 'Assignment of each of n distinct elements to one of r labeled cells, producing a mapping of elements to specific cells.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
    ]
  };
  
    
    const countingPrinciplesData = {
        tableTitle: "Fundamental Counting Principles",
        rows: [
          {
            feature: "Conjunction",
            sum_addition_principle: '"OR"',
            product_multiplication_principle: '"AND"'
          },
          {
            feature: "Formula",
            sum_addition_principle: "$m_1 + m_2 + \\cdots + m_k$",
            product_multiplication_principle: "$m_1 \\times m_2 \\times \\cdots \\times m_k$"
          },
          {
            feature: "Key Question",
            sum_addition_principle: "How many ways to choose from different categories?",
            product_multiplication_principle: "How many ways to complete a sequence of choices?"
          },
          {
            feature: "Prerequisite",
            sum_addition_principle: "Options must be mutually exclusive (disjoint)",
            product_multiplication_principle: "Each step must be independent of others"
          },
          {
            feature: "When to use",
            sum_addition_principle: "Choose **one** option from several disjoint groups",
            product_multiplication_principle: "Perform **all** steps, each with its own options"
          },
          {
            feature: "Example",
            sum_addition_principle: "3 cake flavors **OR** 4 ice-cream flavors **OR** 2 pie fillings = 3 + 4 + 2 = 9 desserts",
            product_multiplication_principle: "5 scoop flavors **AND** 3 toppings = 5 \\times 3 = 15 cones"
          },
          {
            feature: "Common feature",
            sum_addition_principle: "Counts distinct possibilities by breaking a problem into simpler parts",
            product_multiplication_principle: "Counts distinct possibilities by breaking a problem into simpler parts"
          }
        ]
      };
      
    
    const sectionsContent={
  
      counting:{
        title:`2 Main Counting Principles`,
        content:``,
        before:`At its core, combinatorics rests on two “big-picture” rules from which almost every enumeration argument can be built or deduced:
     
        **1. Sum (Addition) Rule (“OR”)**

If a choice can be made by **one or another** of $k$ mutually exclusive methods—where Method 1 offers $m_1$ different options, Method 2 offers $m_2$, …, Method k offers $m_k$—then the total number of possibilities is
@academic[example:$m_1 + m_2 + \\cdots + m_k.$]@
This principle corresponds to an **“or”** situation: you pick **one OR** the other.
 **Example (transport):**
  You can travel **by bus OR by train OR by taxi**:
   Bus routes: 2 options
   Train lines: 3 options
   Taxi services: 4 options
  Total travel choices = $2 + 3 + 4 = 9$.


`,
between:`**2. Product (Multiplication) Rule (“AND”)**

If an outcome requires completing $k$ independent steps—where Step 1 has $m_1$ different options, Step 2 has $m_2$, …, Step k has $m_k$—and you must do **all** of them, then the total number of outcomes is
@academic[example:$m_1 \\times m_2 \\times \\cdots \\times m_k.$]@
This principle corresponds to an **“and”** situation: you choose **this AND** that.
**Example (meal combo):**
  You build a lunch by choosing a main course **AND** a drink **AND** a dessert:
   Mains: 3 choices
   Drinks: 2 choices
   Desserts: 4 choices
    Total meal combos = $3 \\times 2 \\times 4 = 24$.
    
    `,
  after:`

To summarize, whenever you see **“or”** you **add** disjoint counts; whenever you see **“and”** you **multiply** independent choices.

`,
    
    
      },
      scenarios:{
        title:`Basic Combinatorial Scenarios`,
        content:``,
        before:`In combinatorics, most counting problems can be classified into 9 basic templates or scenarios. Rather than approaching each problem as a unique puzzle, we can identify patterns and apply standardized methods. The following nine fundamental scenarios represent the core building blocks of combinatorial problem-solving. By recognizing which template applies to a given situation, we transform complex counting challenges into systematic applications of well-established formulas and techniques. This classification system not only simplifies problem-solving but also provides a structured framework for understanding the relationships between different types of combinatorial questions.
        `,
        after:`We may divide all those scenarios into two broad groups: [permutations](!/combinatorics/permutations) and [combinations](!/combinatorics/combinations).
        **Scenarios** $1–5$ **(Permutations)**:
         These all involve arrangements of elements where **order matters**.
         **Scenarios** $6–10$ **(Combinations)**:
         These involve selections or groupings where order **does not matter** (or where only counts per category matter).

        These nine scenarios form the foundation of combinatorial analysis. Each template addresses specific constraints about order, repetition, and grouping that appear repeatedly across mathematical applications. Mastering the ability to recognize which scenario applies to a problem—whether we're dealing with arrangements versus selections, labeled versus unlabeled groups, or strict versus flexible distributions—is the key to efficient combinatorial problem-solving. As you encounter new counting problems, always begin by identifying the underlying scenario, as this will immediately guide you toward the appropriate mathematical tools and formulas needed for the solution.
        `,
    
      },
    
      permutations_vs_combinations:{
    
        title:`Permutations vs Combinations`,
        content:``,
        before:`As we discussed in previous section, there are two main [counting principles](!/combinatorics#counting) in combinatorics. However, there's more depth to this framework than initially appears. When we apply the multiplication principle to solve counting problems, we encounter a crucial distinction that leads to further classification.

The multiplication principle handles sequential decision-making where we perform multiple steps, each with its own set of options. But within this category, we must ask a fundamental question: **"Does order matter?"** This single question divides multiplication-based problems into two distinct subcategories, each with its own mathematical approach and formulas.
`,
        after:`In cases order **does** matter—such as arranging people in a line or assigning ranks in a competition—we're dealing with [permutations](!/combinatorics/permutations). The sequence or position of elements affects the outcome, making different arrangements count as separate results.
When order **doesn't** matter—such as selecting team members or choosing ingredients for a recipe—we're working with [combinations](!/combinatorics/combinations). Here, we care only about which elements are chosen, not their arrangement or sequence.
This branching creates a clear decision tree: start with the fundamental counting principles, apply the multiplication principle for sequential choices, then determine whether the specific ordering of those choices affects your final count.`,
    
      },
      obj4:{
        title:``,
        content:``,
        before:``,
        after:``,
    
      },
  
  
      obj5:{
    
        title:``,
        content:``,
        before:``,
        after:``,
    
      }
    
    }

    
const introContent = {
    id: "intro",
    title: "Combinatorics: The Art of Counting",
    content: `
Combinatorics is the branch of mathematics that deals with counting, arrangement, and selection of objects. At its core, it answers fundamental questions: "In how many ways can this be done?" and "How many possibilities exist?" This field transforms seemingly simple counting problems into powerful mathematical tools that reveal hidden patterns and structures.

Combinatorics serves as a bridge connecting multiple mathematical disciplines. It provides the foundation for [probability](!/probability) theory, where calculating favorable outcomes requires systematic counting techniques. The field draws heavily from [set theory](!/set-theory) when dealing with collections and their intersections, while its applications extend into **graph theory** through network analysis and path counting. **Number theory** benefits from combinatorial methods in partition problems and divisibility questions, and [linear algebra](!/linear-algebra) uses combinatorial principles in matrix theory and vector spaces.

The problems combinatorics solves range from practical applications—like determining optimal seating arrangements or analyzing computer algorithms—to abstract mathematical questions about infinite structures. Whether you're calculating lottery odds, designing efficient networks, or exploring mathematical proofs, combinatorics provides the essential counting framework.

In this section, we'll explore the fundamental counting principles, dive into permutations and combinations, and tackle real-world combinatorial scenarios that demonstrate the power and elegance of this mathematical art.`
  }
  
      return {
        props:{
          sectionsContent,
          introContent,
          combinatoricsScenariosData,
          countingPrinciplesData,
          countingPrinciplesDiagram,
          
        }
      }
    }
   

export default function CombinatoricspAGE({sectionsContent,introContent,
  combinatoricsScenariosData,countingPrinciplesData,countingPrinciplesDiagram}) {

  
    const combinatoricsSections=[
        {
            id:'counting',
            title:sectionsContent.counting.title,
            link:'',
            content:[
               <div key={'add'} id='add'></div>,
                sectionsContent.counting.before,
                countingPrinciplesDiagramsData["Addition Principle"].svg,
                <div   key={'multi'} id='multi'></div>,
                sectionsContent.counting.between,                
                countingPrinciplesDiagramsData["Multiplication Principle"].svg,
                sectionsContent.counting.after,
                <GenericTable
                key={2}
                tableData={countingPrinciplesData} theme='lightBlue'
                cellFontSize={'16px'}
                headerFontSize={'18px'}
                />,
               
               
            ]
        },
         {
            id:'permutations_vs_combinations',
            title:sectionsContent.permutations_vs_combinations.title,
            link:'',
            content:[
              sectionsContent.permutations_vs_combinations.before,
              <div key={'mermaid'} style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'50px'}}>
                 <MermaidDiagram chartDefinition={countingPrinciplesDiagram}
                   width="500px"
                   height="300px"
                   scale={.9} />
                   </div> ,   
             sectionsContent.permutations_vs_combinations.after,       
                 
                 
                

            ]
        },
        {
            id:'scenarios',
            title:sectionsContent.scenarios.title,
            link:'',
            content:[
              sectionsContent.scenarios.before,
                <GenericTable 
                key={1}
                tableData={combinatoricsScenariosData} theme='lightBlue'
                cellFontSize={'16px'}
                headerFontSize={'18px'}/>,
                sectionsContent.scenarios.after,
            ]
        },
        // {
        //     id:'',
        //     title:'',
        //     link:'',
        //     content:''
        // }
    ]
    

  return (
   <>
   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           topOffset='55px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Combinatorics</h1>
   <br/>
   <SectionTableOfContents sections={combinatoricsSections}/>
   <br/>
   <br/>
   <br/>
   <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={combinatoricsSections}/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
