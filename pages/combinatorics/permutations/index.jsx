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


  const decision=`To choose the correct permutation type, follow the decision tree by answering three key questions in order:

**Are you using all available items or selecting a subset?** - If you're arranging every available element, continue to the repetition question. If you're only selecting and arranging some elements (like 3 books from 10), you have **Permutation without Repetition**.

**Do identical elements appear in your collection?** - If identical elements can appear multiple times (like letters in "BOOK"), you have **Permutation with Repetition**. If all elements must be distinct, proceed to the arrangement question.

**Is the arrangement linear or circular?** - If the arrangement is in a line or sequence, it's **Permutation (Full)**. If elements are arranged around a circle where rotations look identical (like people around a table), it's **Circular Permutation**.

The table shows these three parameters as columns, making it easy to match your problem's characteristics to the correct permutation type.`

  const permutationsDiagram=`flowchart TD
    A["Permutation Problem"] --> B{"Using all items?"}
    
    B -->|"Yes"| C{"Repetition allowed?"}
    B -->|"No (r of n)"| D["Permutation without<br/>Repetition"]
    
    C -->|"No"| E{"Linear or circular?"}
    C -->|"Yes"| F["Permutation with<br/>Repetition"]
    
    E -->|"Linear"| G["Permutation (Full)"]
    E -->|"Circular"| H["Circular Permutation"]
    
    click D "https://google.com" "Permutation without Repetition: n!/(n-r)!"
    click F "https://facebook.com" "Permutation with Repetition: n!/(n₁!×n₂!×...×nₖ!)"
    click G "https://youtube.com" "Full Permutation: n!"
    click H "https://wikipedia.org" "Circular Permutation: (n-1)!"`


  const permutationsTable=`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Type</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Using All Items?</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Repetition Allowed?</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Linear/Circular?</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Permutation (Full)</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">Linear</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Permutation with Repetition</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">Linear</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Permutation without Repetition</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #f39c12; font-weight: bold;">r of n</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">Linear</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Circular Permutation</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">Circular</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`
    
  const sectionsContent={

    full:{
      title:`Permutation (Full)`,
      content:``,
      before:``,
      after:``,
  
  
    },
    with:{
      title:`Permutation with Repetition`,
      content:``,
      before:``,
      after:``,
  
    },
  
   without:{
  
      title:`Partial Permutation without Repetition`,
      content:``,
      before:``,
      after:``,
  
    },
    circular:{
      title:`Circular Permutation`,
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
  title: "Permutations: Understanding Ordered Arrangements",
  content: `Permutations are arrangements where **order matters**. As we discussed on the [main combinatorics page](!/combinatorics), this is what distinguishes permutations from [combinations](!/combinatorics/combinations).

On this page, we'll explore four key permutation scenarios: [Full Permutation](!/combinatorics/permutations#full) (arranging all n distinct elements), [Permutation with Repetition](!/combinatorics/permutations#with) (arrangements where certain elements can repeat), [Permutation without Repetition](!/combinatorics/permutations#without) (selecting and arranging r elements from n options), and [Circular Permutation](!/combinatorics/permutations#circular) (arrangements around a circle where rotations are identical).

Each scenario has specific formulas and real-world applications. Ready to dive into the details, or want to compare with [combinations](!/combinatorics/combinations) where order doesn't matter?

Mastering these permutation types gives you the tools to solve ordering problems across mathematics, computer science, and everyday scenarios. The key is recognizing which type fits your specific situation.`
}

    return {
      props:{
        sectionsContent,
        introContent,
        permutationsTable,
        permutationsDiagram
        
      }
    }
  }
  

export default function PermutationsPage({sectionsContent,introContent,permutationsDiagram,
  permutationsTable}) {

  
  const permutationsSections=[
    {
        id:'full',
        title:sectionsContent.full.title,
        link:'',
        content:[
          // <div style={{margin:'auto',width:'80%'}} dangerouslySetInnerHTML={{ __html: permutationsTable }} key="table" />
        ]
    },
    {
        id:'with',
        title:sectionsContent.with.title,
        link:'',
        content:''
    },
    {
        id:'without',
        title:sectionsContent.without.title,
        link:'',
        content:''
    },
    {
      id:'circular',
      title:sectionsContent.circular.title,
      link:'',
      content:''
  },
//   {
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
    <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>Permutations</h1>   
    <br/> 
    <SectionTableOfContents sections={permutationsSections}/>
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
    <Sections sections={permutationsSections}/>
    <br/> 
    <br/>
    <ScrollUpButton/> 
    
    </>
  )
}
