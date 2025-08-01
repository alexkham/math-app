import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import { scenariosData } from '@/app/api/db/diagrams/combinatorics/scenarios'
import GenericTable from '@/app/components/generic-table/GenericTable'



export async function getStaticProps(){

  const keyWords=['permutations','combinatorial','combinatorics','formula for permutations',
    'example of permutation', 'permutation and combination'
  ]

  const permutationsScenariosTableData = {
    tableTitle: "Permutation Scenarios",
    rows: [
      {
        "Scenario": "[Full permutation](!/combinatorics/permutations#full)",
        "Order matters?": "Yes",
        "Repetition?": "No",
        "Identical items?": "No",
        "Arrangement type": "Linear",
        "Formula": "$n!$",
        "Example": "Arrange 6 books in a row"
      },
      {
        "Scenario": "[Partial permutation](!/combinatorics/permutations#without)",
        "Order matters?": "Yes",
        "Repetition?": "No",
        "Identical items?": "No",
        "Arrangement type": "Linear",
        "Formula": "$\\frac{n!}{(n-r)!}$",
        "Example": "Arrange 3 of 10 runners"
      },
      {
        "Scenario": "[Permutation with repetition](!/combinatorics/permutations#with)",
        "Order matters?": "Yes",
        "Repetition?": "Yes",
        "Identical items?": "No",
        "Arrangement type": "Linear",
        "Formula": "$n^r$",
        "Example": "4-digit PIN code"
      },
      {
        "Scenario": "[Permutation with identical items](!/combinatorics/permutations#identical)",
        "Order matters?": "Yes",
        "Repetition?": "N/A",
        "Identical items?": "Yes",
        "Arrangement type": "Linear",
        "Formula": "$\\frac{n!}{n_1! \\, n_2! \\dots n_k!}$",
        "Example": "Rearrange \"BALLOON\""
      },
      {
        "Scenario": "[Circular permutation](!/combinatorics/permutations#circular)",
        "Order matters?": "Yes",
        "Repetition?": "No",
        "Identical items?": "No",
        "Arrangement type": "Circular",
        "Formula": "$(n-1)!$",
        "Example": "Seat 5 people around a table"
      }
    ]
  };

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

const fullPermutationTable=`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Full Permutation</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
        </tbody>
    </table>
</body>
</html>

`

const identicalTable=`
  <!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Permutation with Identical Items</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`

const partialWithoutTable=`
  <!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Partial Permutation without Repetition</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`

const permutationWithRepetitionTable=`
  <!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Permutation with Repetition</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`

const circularTable=`
  <!DOCTYPE html>
<html>
<head>
</head>
<body>
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Circular Permutation</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
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
    
  const sectionsContent={

    full:{
      title:`Permutation (Full)`,
      content:``,
      before:`**Full Permutation** applies when you arrange all distinct items in a specific order with no repetitions allowed. 
      
      `,
      after:`
      The intuition and logic we use for this kind of permutation has been explained pretty well in previous [section](!/combinatorics/permutations#logic) and it works basically for all [types](!/combinatorics/permutations#types) of permutations.
      Just in case of full permutations (unlike in other [types](!/combinatorics/permutations#types)) no further modifications needed and the calculation is simple. 
      \n**Notation**:
In combinatorics, we use specific notation to represent different types of permutations. 
For arranging $r$ objects selected from $n$ distinct objects, the standard notation is $P(n,r)$ or $_nP_r$.
When applied to full permutations, apparently $r=n$ (because we use all the items ), and the notation turns into :

\t\t\t\t\t\t$P(n,n)$ or $_nP_n$ or simply $P(n)$.

**Formula**:
      The number of possible results is calculated by the formula :      
@academic[example:&nbsp \t\t\t\t\t\t$P(n)=n!$]@
 Product of all integers from $n$ down to $1$.
       Where $n$ is the number of items to arrange. 

      `,
      between:`
     **Full Permutation — Examples**:
Arranging all books on a shelf, deciding the lineup of all players in a team, organizing all photos in an album, setting the order of speakers in a presentation, ordering all tasks in a workflow, ranking all competitors in a contest, scheduling all meetings in a day, sorting all files in a folder.

`,
formula:`@academic[example:&nbsp \t\t\t\t\t\t$P(n)=n!$]@`
  
  
    },
    identical:{
      title:`Permutation with Identical Items`,
      content:``,
      before:`**Permutation with Identical Items** applies when arranging all items where some identical elements appear multiple times in your collection. Classic examples include arranging all letters in words like "MISSISSIPPI" or organizing all colored balls when you have multiple balls of the same color.
      
      `,
      after:`
      **Notation:**
      
      \t\t\t\t\t\t$\\binom{n}{n_1, n_2, \\ldots, n_k}$ or $P(n; n_1, n_2, n_3, \\ldots, n_k)$ or $P_n^{n_1, n_2, n_3, \\ldots, n_k}$

       To calculate the number of possible arrangements :
      @academic[example:$\\binom{n}{n_{1},n_{2},\\dots,n_{k}} = \\frac{n!}{n_{1}!n_{2}!\\dots n_{k}!}$]@ 
      Where multinomial coefficient: counts distinct arrangements of $n$ items split into groups of sizes $n_{1},n_{2},\\dots,n_{k}$.
      
      `,
      between:`
      **Permutation with Identical Items — Examples**:
Rearranging letters in the word “BALLOON,” organizing colored balls where some colors repeat, sequencing identical files and unique ones in storage, arranging identical chairs and distinct tables in a layout, ordering repeated ingredients in a recipe list.`,
  
    },
  
   without:{
  
      title:`Partial Permutation without Repetition`,
      content:``,
      before:`**Partial Permutation without Repetition** applies when selecting and arranging only some items from a larger collection, with all items being distinct. Classic examples include choosing and ordering contestants from a group or selecting and arranging books from a library shelf.
      
      `,
      after:`
      The number of arrangements for Partial Permutation without Repetition is :
       @academic[example:$\\frac{n!}{(n-r)!}$]@ 
      Where $n!$ counts all arrangements, dividing by $(n-r)!$ removes the unused positions.`,
      between:`
      **Partial Permutation (without repetition) — Examples**:
Selecting and ordering finalists from a group of contestants, arranging a subset of books on a display, picking and sequencing players for a relay team, choosing and ordering questions for an interview, organizing a limited set of tasks for a project phase.
      `,
  
    },
    circular:{
      title:`Circular Permutation`,
      content:``,
      before:`**Circular Permutation** applies when arranging items around a circle where rotations are considered identical arrangements. Classic examples include seating people around a round table or arranging objects in a circular pattern.
      
      `,
      after:`
      The total number of possible circular arrangements is:
      @academic[example:$(n-1)!$]@ 
      If $n$ is a total number of items to arrange then fixing one item reduces circular arrangements to $(n-1)!$ linear ones.`,
      between:`
      **Circular Permutation — Examples**:
Arranging guests around a round table, seating participants in a circular panel, ordering beads in a circular necklace, organizing tasks in a repeating cycle, setting positions for players in a circular game arrangement.`,
  
    },


    with:{
  
      title:`Permutation with Repetition`,
      content:``,
      before:`**Permutation with Repetition** applies when arranging items where you can reuse the same element multiple times during the arrangement process. Classic examples include creating PIN codes where digits can repeat, or forming passwords where letters can be used multiple times.
      
      `,
      after:`
      Total number of permutations with repetitions possible and all items used is:
     @academic[example:$n^{r}$]@
     Where each of the $r$ positions can be filled in $n$ ways.
`,
between:`
**Permutation with Repetition — Examples**:
Generating PIN codes from digits, creating letter sequences for passwords, arranging beads in a bracelet where colors can repeat, composing license plate numbers, assigning seats with multiple people allowed in the same category.
`,
  
    },
    types:{
  
      title:`Types of Permutations`,
      content:``,
      before:`Although in all types of permutations the order of arrangement matters, the key differences between them arise from other considerations: Can items be repeated? Are some items identical? Is the arrangement linear or circular? The table below summarizes these distinctions, showing how different scenarios lead to different counting formulas.

`,
      after:`

By addressing these additional questions, we can classify permutations into several types, each with its own counting method. Understanding these distinctions helps in correctly applying the appropriate formula for a given arrangement problem.
`,
  
    },
    logic:{
  
      title:`The Logic behind permutations`,
      content:``,
      before:`In combinatorics, we distinguish between several [types](!/combinatorics/permutations#types) of permutations based on different criteria, but they all share one key property: in every type, the order of arrangement matters ( and that is exactly what makes the difference between [permutations and variations](!/combinatorics#permutations_vs_combinations)).
In all different scenarios, the mechanism for creating a permutation is similar, and it is important to understand it.
When creating an arrangement, we must make two decisions:
1. Which item to pick?
2. Where to place it in the arrangement?

Let us examine the simplest case. Imagine we need to arrange $n$ different items (all distinct) in a row, without repetition. We can break it down into steps:

 **Step 1:** Choose an item for the first position. There are $n$ options.
 **Step 2:** Choose an item for the second position. Now there are $n-1$ options.
 **Step 3:** Choose an item for the third position. Now there are $n-2$ options.
 … and so on, until
 **Step** $n$: Only one item remains, so there is just 1 option.

Each step reduces the number of choices (since repetition is not allowed). Because we must make all these choices in sequence, we apply the [multiplication principle](!/combinatorics#multi).

Thus, to calculate the total number of permutations, we multiply:

$n \\times (n-1) \\times (n-2) \\times \\dots \\times 1,$

which is the definition of a factorial.

For $n$ distinct objects, the number of permutations is:
@academic[example:$n! = n \\times (n−1) \\times (n−2) \\times \\dots \\times 2 \\times 1.$]@
**To summarize:**

* We start with $n$ options.
* Each choice reduces the number of remaining options by one.
* We multiply the number of choices at each step.

This gives us $n!$ total permutations.

Here is an example of simple permutation: creating 3 letter string.

`,
      after:``,
      between:`You can see how the principle explained before is applied here.
      First, one of 3 letters is picked and for each scenario there are 2 different choices to select the second letter.Once the choice is made, only one letter left.     
      
      The result is:
      @academic[example:$3\\times 2 \\times 1 = 6 (n!)$]@
      Where $n$ is total number of items.

      `,
  
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
        permutationsDiagram,
        fullPermutationTable,
        identicalTable,
        permutationsScenariosTableData,
        partialWithoutTable,
        permutationWithRepetitionTable,
        circularTable
        
      }
    }
  }
  

export default function PermutationsPage({sectionsContent,introContent,permutationsDiagram,fullPermutationTable,
  identicalTable,permutationsTable ,permutationsScenariosTableData,partialWithoutTable,
  permutationWithRepetitionTable,circularTable}) {

  
  const permutationsSections=[
    {
        id:'logic',
        title:sectionsContent.logic.title,
        link:'',
        content:[
          sectionsContent.logic.before,
          scenariosData["Permutations of ABC: STEP-by-Step"].svg,
          sectionsContent.logic.between,
          scenariosData["Permutations (Full)"].svg,
         
          
        ]
    },
   {
        id:'types',
        title:sectionsContent.types.title,
        link:'',
        content:[
          sectionsContent.types.before,
          <div style={{width:'90%',margin:'auto'}}>
          <GenericTable
                key={1}
                tableData={permutationsScenariosTableData} theme='lightBlue'
                cellFontSize={'14px'}
                headerFontSize={'16px'}
                />
                </div>,
                sectionsContent.types.after,
        ]
    },
    {
        id:'full',
        title:sectionsContent.full.title,
        link:'',
        content:[
          // <div style={{margin:'auto',width:'80%'}} dangerouslySetInnerHTML={{ __html: permutationsTable }} key="table" />
          sectionsContent.full.before,
        <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: fullPermutationTable }} key="table" />,
      sectionsContent.full.between,
      sectionsContent.full.after,
      
    
      
      
        ]
    },
    {
        id:'identical',
        title:sectionsContent.identical.title,
        link:'',
        content:[
          sectionsContent.identical.before,
          <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: identicalTable }} key="table" />,
          sectionsContent.identical.between,
          sectionsContent.identical.after,
        ]
    },
    {
        id:'without',
        title:sectionsContent.without.title,
        link:'',
        content:[
          sectionsContent.without.before,
          <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: partialWithoutTable }} key="table" />,
          sectionsContent.without.between,
          sectionsContent.without.after,

        ]
    },
      {
    id:'with',
    title:sectionsContent.with.title,
    link:'',
    content:[
      sectionsContent.with.before,
      <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html:permutationWithRepetitionTable }} key="table" />,
      sectionsContent.with.between,
      sectionsContent.with.after,

    ]
},
    {
      id:'circular',
      title:sectionsContent.circular.title,
      link:'',
      content:[
        sectionsContent.circular.before,
        <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: circularTable }} key="table" />,
        sectionsContent.circular.between,
        sectionsContent.circular.after,
        scenariosData["Circular Permutation"].svg,
        scenariosData["Circular Permutation 2"].svg,
        scenariosData["Circular Permutation 3"].svg

      ]
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
