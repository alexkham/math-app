import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'



export async function getStaticProps(){

  const simpleCombinationTable= `<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Simple Combination</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`

const partitionTable= `<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Partition into Groups</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`

const weakCompositionTable=`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Weak Composition</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`


const strongCompositionTable=`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Strong Composition</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`

const distributionTable=`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Distribution into Cells</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`



    
  const sectionsContent={

    combinations:{
      title:`Simple Combinations`,
      content:``,
      before:`**Simple Combination** works when selecting items from a collection where order doesn't matter and no repetitions are allowed. Classic examples include choosing team members from a group or selecting lottery numbers.
      
      `,
      after:``,
      between:`
      **Simple Combination — Examples**:
Choosing committee members from a club, selecting lottery numbers, picking a set of books to borrow from a library, forming a group of students for a project, selecting ingredients for a recipe from available options.`,
  
  
    },
    partition:{
      title:`Partition into Groups`,
      content:``,
      before:`**Partition into Groups** applies when dividing distinct items into unlabeled subsets where only grouping matters, not the order within groups or names of the groups. Classic examples include dividing students into teams or splitting items into categories.
      
      `,
      after:``,
      between:  `
      **Partition into Groups — Examples**:
Dividing students into study groups, splitting employees into project teams, grouping tasks into phases of a project, dividing guests into tables at an event, forming clusters of data points in analysis.`,
  
    },
  
    distribution:{
  
      title:`Distribution into Cells`,
      content:``,
      before:`**Distribution into Cells** works when assigning each distinct item to a specific labeled container, creating a mapping that shows which container each item goes to. Classic examples include assigning students to different classrooms or placing different files into labeled folders.
      
      `,
      after:``,
      between:`
      **Distribution into Cells — Examples**:
Assigning students to classrooms, placing different files into labeled folders, allocating distinct products to specific storage bins, or assigning employees to designated offices. This setup focuses on mapping each unique item to a labeled container, making the outcome a clear one‑to‑one assignment.
`,
  
    },
    weak:{
      title:`Weak Composition`,
      content:``,
      before:`**Weak Composition** occures when distributing identical units into labeled containers where some containers can remain empty and only the count in each container matters. Classic examples include distributing identical coins into numbered boxes or allocating identical resources to different departments.


`,
      after:``,
      between:`
      **Weak Composition — Examples**:
Distributing identical coins into numbered boxes, allocating identical resources to different departments, assigning identical tasks across several workers. Since this type of experiment is highly specific — focusing only on counts in labeled containers, even allowing some to remain empty — it is largely self‑explanatory and not as easy to find in common real‑world situations.
`,
  
    },


    strong:{
  
      title:`Strong Composition`,
      content:``,
      before:`**Strong Composition** works when distributing identical units into labeled containers where every container must receive at least one unit and only the count in each container matters. Classic examples include distributing identical items to departments where each department must get something or allocating identical resources ensuring no group is left empty.
      
      `,
      after:``,
      between:`
     **Strong Composition — Examples**:
Distributing identical items to departments where each department must receive at least one, allocating identical resources among teams ensuring none are left empty, dividing identical tasks across several workers with no one unassigned. Like weak composition, this type of experiment is quite specific — it focuses on counts in labeled containers with no empties allowed — making it largely self‑explanatory and less common in everyday situations.


      `,
  
    },
    obj5:{
  
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
  title: "Combinations: Selecting and Grouping without Order",
  content: `Combinations focus on selection where **order doesn't matter**. Unlike [permutations](!/combinatorics/permutations) where arrangement sequence is crucial, combinations only care about which elements are chosen, not how they're arranged.

This page covers five key combination scenarios: [Basic Combinations](!/combinatorics/combinations#combinations) (selecting unordered subsets), [Partition into Groups](!/combinatorics/combinations#partition) (dividing elements into unlabeled groups), [Distribution into Cells](!/combinatorics/combinations#distribution) (assigning elements to labeled containers), [Weak Composition](!/combinatorics/combinations#weak) (distributing identical units with empty cells allowed), and [Strong Composition](!/combinatorics/combinations#strong) (distributing identical units requiring non-empty cells).

Each type serves different counting needs, from team selection to resource allocation. Understanding when order matters versus when it doesn't is fundamental to choosing between combinations and permutations.

Mastering these combination types equips you to handle selection and distribution problems across various mathematical and practical contexts. The challenge is identifying which scenario matches your specific problem.`
}

    return {
      props:{
        sectionsContent,
        introContent,
        simpleCombinationTable,
        partitionTable,
        weakCompositionTable,
        strongCompositionTable,
        distributionTable
        
      }
    }
  }
  

export default function CombinationsPage({sectionsContent,introContent,simpleCombinationTable,
  partitionTable,weakCompositionTable ,strongCompositionTable,distributionTable}) {

  
  const combinationsSections=[
    {
        id:'combinations',
        title:sectionsContent.combinations.title,
        link:'',
        content:[
          sectionsContent.combinations.before,
          <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html:simpleCombinationTable }} key="table" />,
          sectionsContent.combinations.between,

        ]
    },
    {
        id:'partition',
        title:sectionsContent.partition.title,
        link:'',
        content:[
          sectionsContent.partition.before,
          <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: partitionTable }} key="table" />,
           sectionsContent.partition.between,
        ]
    },
   
    {
        id:'weak',
        title:sectionsContent.weak.title,
        link:'',
        content:[
          sectionsContent.weak.before,
          <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: weakCompositionTable }} key="table" />,
          sectionsContent.weak.between,
        ]
    },
    {
        id:'strong',
        title:sectionsContent.strong.title,
        link:'',
        content:[

          sectionsContent.strong.before,
          <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: strongCompositionTable }} key="table" />,
          sectionsContent.strong.between,

        ]
    },
    {
      id:'distribution',
      title:sectionsContent.distribution.title,
      link:'',
      content:[
        sectionsContent.distribution.before,
        <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: distributionTable }} key="table" />,
        sectionsContent.distribution.between,
      ]
  },
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
    <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>Combinations</h1>   
    <br/> 
    <SectionTableOfContents sections={combinationsSections}/>
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
    <br/> 
    <Sections sections={combinationsSections}/>
    <br/> 
    <br/>
    <ScrollUpButton/> 
    
    </>
  )
}
