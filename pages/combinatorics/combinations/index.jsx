import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import GenericTable from '@/app/components/generic-table/GenericTable'
import { scenariosData } from '@/app/api/db/diagrams/combinatorics/scenarios'
import SvgDiagram from '@/app/components/diagrams/render-svg/SvgDiagram'
import Head from 'next/head'



export async function getStaticProps(){

  const keyWords=[
    'combinations','combination formula','permutation and combination','combinatorics',
    'combinations vs permutations'
  ]

    const combinationsScenariosTableData = {
        tableTitle: "Combination Scenarios",
        rows: [
          {
            "Scenario": "[Simple Combination](!/combinatorics/combinations#combinations)",
            "Objects distinct or identical?": "Distinct",
            "Select Subset or distribute?": "Select",
            "Cells labeled or unlabeled?": "N/A",
            "Empty cells allowed?": "N/A",
            "Formula": "$\\binom{n}{r}$",
            "Example": "Choose 3 fruits out of 10 different types"
          },
          {
            "Scenario": "[Partition into Groups](!/combinatorics/combinations#partition)",
            "Objects distinct or identical?": "Distinct",
            "Select Subset or distribute?": "Distribute",
            "Cells labeled or unlabeled?": "Unlabeled",
            "Empty cells allowed?": "Typically no",
            "Formula": "$\\frac{n!}{n_1!n_2!\\dots n_k!}$ (Stirling numbers for equal partitions)",
            "Example": "Split 12 players into 3 unlabeled teams of 4"
          },
          {
            "Scenario": "[Weak Composition](!/combinatorics/combinations#weak)",
            "Objects distinct or identical?": "Identical",
            "Select Subset or distribute?": "Distribute",
            "Cells labeled or unlabeled?": "Labeled",
            "Empty cells allowed?": "Yes",
            "Formula": "$\\binom{n+r-1}{r-1}$",
            "Example": "Distribute 7 identical candies to 3 children (some may get none)"
          },
          {
            "Scenario": "[Strong Composition](!/combinatorics/combinations#strong)",
            "Objects distinct or identical?": "Identical",
            "Select Subset or distribute?": "Distribute",
            "Cells labeled or unlabeled?": "Labeled",
            "Empty cells allowed?": "No",
            "Formula": "$\\binom{n-1}{r-1}$",
            "Example": "Distribute 7 identical candies to 3 children (each gets at least 1)"
          },
          {
            "Scenario": "[Distribution into Cells](!/combinatorics/combinations#distribution)",
            "Objects distinct or identical?": "Distinct",
            "Select Subset or distribute?": "Distribute",
            "Cells labeled or unlabeled?": "Labeled",
            "Empty cells allowed?": "Yes",
            "Formula": "$r^n$",
            "Example": "Assign 5 employees to 3 different projects"
          }
        ]
      };
      

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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distinct</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Select subset</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #95a5a6; font-size: 16px; font-weight: bold;">N/A</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #95a5a6; font-size: 16px; font-weight: bold;">N/A</td>
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distinct</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distribute</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Unlabeled</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 16px; font-weight: bold;">Typically no</td>
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Identical</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distribute</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Labeled</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Identical</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distribute</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Labeled</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distinct</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distribute</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Labeled</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`



    
  const sectionsContent={

    combinations:{
      title:`Simple Combinations`,
      content:``,
      before:`**Simple Combination** works when selecting items from a collection where order doesn't matter and no repetitions are allowed. Classic examples include choosing team members from a group or selecting lottery numbers.
      
      `,
      after:`      
**Common notations:**
\t\t\t•$\\binom{n}{r}$ - "n choose r" (most common in modern texts)
\t\t\t•$C(n,r)$ - C for "combinations"
\t\t\t•$C_n^r$ - alternative C notation
\t\t\t•$_nC_r$ - subscript/superscript form

The $\\binom{n}{r}$ notation is the most widely used in modern mathematics, but you'll often see $C(n,r)$ in introductory texts and $_nC_r$ on calculators.


      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

      **Formula**:
      The total number of simple combinations is 
@academic[example:&nbsp\t\t\t\t\t\t$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$]@
If $n$ is the total number of distinct items and $r$ is the number of items to select, then order doesn't matter and repetition isn't allowed.
      `,
      between:`
      **Simple Combination — Examples**:
Choosing committee members from a club, selecting lottery numbers, picking a set of books to borrow from a library, forming a group of students for a project, selecting ingredients for a recipe from available options.`,
  
  
    },
    partition:{
      title:`Partition into Groups`,
      content:``,
      before:`**Partition into Groups** applies when dividing distinct items into unlabeled subsets where only grouping matters, not the order within groups or names of the groups. Classic examples include dividing students into teams or splitting items into categories.
      
      `,
      after:`
       **Notation**:
       Partition into Groups doesn't have a standard symbolic notation like $\\binom{n}{r}$ for [simple combinations](!/combinatorics/combinations#combinations).

Partitions are typically just described in words or with set notation like:

"Partition of set S into k parts"
{A₁, A₂, ..., Aₖ} where A₁ ∪ A₂ ∪ ... ∪ Aₖ = S

Unlike other combinations, permutations, etc., partitions don't have a universally recognized compact notation symbol.


      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

      **Formula**:
      The total number of partitions into groups is 
@academic[example:&nbsp\t\t\t\t\t\t{A₁, A₂, ..., Aₖ}=$\\frac{n!}{n_1!n_2!\\dots n_k!}$]@ 
If $n$ is the total number of distinct items to partition into $k$ groups of sizes $n_1, n_2, \\ldots, n_k$ respectively, where the groups are unlabeled and only the grouping matters.
      `,
      between:  `
      **Partition into Groups — Examples**:
Dividing students into study groups, splitting employees into project teams, grouping tasks into phases of a project, dividing guests into tables at an event, forming clusters of data points in analysis.`,
  
    },
  
    distribution:{
  
      title:`Distribution into Cells`,
      content:``,
      before:`**Distribution into Cells** works when assigning each distinct item to a specific labeled container, creating a mapping that shows which container each item goes to. Classic examples include assigning students to different classrooms or placing different files into labeled folders.
      
      `,
      after:`
      **Notation**:
    
**Distribution into Cells** doesn't have a standard symbolic notation like $\\binom{n}{r}$ for [simple combinations](!/combinatorics/combinations#combinations). It's typically just described as "functions from set A to set B" or "mappings" in mathematical notation, but there's no compact symbol specifically for this concept like there is for combinations or permutations.

      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

      **Formula**:
      The total number of distributions into cells is 
@academic[example:&nbsp\t\t\t\t\t\t$r^n$]@
If $n$ is the total number of distinct items to assign and $r$ is the number of labeled containers, where each item can go into any container and containers can be empty.
      `,
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
      after:`
       **Notation**:
       The notation for **Weak Composition** is:

\t\t\t$\\left(\\binom{n}{r}\\right)$** or **$\\left(\\left(\\binom{n}{r}\\right)\\right)$

This represents the number of ways to place n identical objects into r labeled bins, where empty bins are allowed. It's also written as $\\binom{n+r-1}{r-1}$ but the double parentheses notation specifically indicates weak compositions.

      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

      **Formula**:
      The total number of weak compositions is 
@academic[example:&nbsp\t\t\t\t\t\t$\\left(\\binom{n}{r}\\right)=\\binom{n+r-1}{r-1}$]@   
If $n$ is the total number of identical items to distribute into $r$ labeled containers, where empty containers are allowed and only the count in each container matters.
      `,
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
      after:`
       **Notation**:
       The notation for **Strong Composition** is:

\t\t\t$\\left\\langle\\binom{n}{r}\\right\\rangle$ or $\\left\\langle\\left\\langle\\binom{n}{r}\\right\\rangle\\right\\rangle$

This represents the number of ways to place n identical objects into r labeled bins where each bin must contain at least one object. It's also written as $\\binom{n-1}{r-1}$ but the angle brackets notation specifically indicates strong compositions.


      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

      **Formula**:
      The total number of strong compositions is 
@academic[example:&nbsp\t\t\t\t\t\t$\\left\\langle\\binom{n}{r}\\right\\rangle=\\binom{n-1}{r-1}$]@     
If $n$ is the total number of identical items to distribute into $r$ labeled containers, where each container must receive at least one item and only the count in each container matters.
      `,
      between:`
     **Strong Composition — Examples**:
Distributing identical items to departments where each department must receive at least one, allocating identical resources among teams ensuring none are left empty, dividing identical tasks across several workers with no one unassigned. Like weak composition, this type of experiment is quite specific — it focuses on counts in labeled containers with no empties allowed — making it largely self‑explanatory and less common in everyday situations.


      `,
  
    },
    types:{
  
        title:`Types of Combinations`,
        content:``,
        before:`In combinatorics, combinations represent ways to select or distribute items without considering order, in contrast to [permutations](!/combinatorics/permutations) where order matters. Building on our earlier comparison between combinations and [permutations](!/combinatorics/permutations), we now distinguish between different types of combinations using key questions: whether the objects are distinct or identical, whether we are selecting a subset or distributing all objects, and whether the containers (cells) are labeled or can remain empty.

        `,
        after:`
        **Conclusion**:
Understanding these different combination scenarios is essential because each situation leads to a different counting formula. Recognizing the correct type of combination ensures accurate problem-solving in probability, statistics, and many applied fields.
        `,
        between:``,
    
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
         seoData: {
      title: `${sectionsContent.types.title} in Combinatorics | Learn Math Class`,
      description: introContent.content.substring(0, 160),
      keywords: keyWords.join(", "),
      url: "/combinatorics/combinations"
    },
        sectionsContent,
        introContent,
        simpleCombinationTable,
        partitionTable,
        weakCompositionTable,
        strongCompositionTable,
        distributionTable,
        combinationsScenariosTableData
        
      }
    }
  }
  

export default function CombinationsPage({ seoData,sectionsContent,introContent,simpleCombinationTable,
  partitionTable,weakCompositionTable ,strongCompositionTable,distributionTable,
combinationsScenariosTableData}) {

  
  const combinationsSections=[
    {
        id:'types',
        title:sectionsContent.types.title,
        link:'',
        content:[
          sectionsContent.types.before,
          <div key={11} style={{width:'95%',margin:'auto'}}>
          <GenericTable
                key={1}
                tableData={combinationsScenariosTableData} theme='lightBlue'
                cellFontSize={'14px'}
                headerFontSize={'15px'}
                />
                </div>,
          sectionsContent.types.after,

        ]
    },
    {
        id:'combinations',
        title:sectionsContent.combinations.title,
        link:'',
        content:[
          sectionsContent.combinations.before,
          <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html:simpleCombinationTable }} key="table" />,
          sectionsContent.combinations.between,
          sectionsContent.combinations.after,
          <div key={2} style={{width:'100%',margin:'auto'}}>
     <SvgDiagram
   data={scenariosData["Combinations"]}
  scale={'1'}
//   width='1200px'
  layout='horizontal'
  splitRatio={'0.7'}
 />
 </div>

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
           sectionsContent.partition.after,
               <div key={3} style={{width:'100%',margin:'auto'}}>
     <SvgDiagram
   data={scenariosData["Partition into Groups of Known Sizes"]}
  scale={'1'}
//   width='1200px'
  layout='horizontal'
  splitRatio={'0.7'}
 />
 </div>
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
          sectionsContent.weak.after,
                     <div key={4} style={{width:'100%',margin:'auto'}}>
     <SvgDiagram
   data={scenariosData["Weak Composition"]}
  scale={'1'}
//   width='1200px'
  layout='horizontal'
  splitRatio={'0.7'}
 />
 </div>
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
          sectionsContent.strong.after,
            <div key={5} style={{width:'100%',margin:'auto'}}>
     <SvgDiagram
   data={scenariosData["Strong Composition"]}
  scale={'1'}
//   width='1200px'
  layout='horizontal'
  splitRatio={'0.7'}
 />
 </div>,

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
        sectionsContent.distribution.after,
       
    //     <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: distributionTable }} key="table" />,
    //     sectionsContent.distribution.between,
    //    <div style={{transform:'scale(0.8)'}}>
    //     {scenariosData["Distributing Different Items into Numbered Cells"].svg}
    //     </div>,
       
        // scenariosData["Distributing Different Items into Numbered Cells"].svg,

        <div key={112}  style={{
            textAlign: 'center',
            transform: 'scale(0.7)',
            transformOrigin: 'center',
            marginTop:'30px'
          }} dangerouslySetInnerHTML={{ 
            __html: scenariosData["Distributing Different Items into Numbered Cells"].svg 
          }} />
       
      ]
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.title,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": "Combinations",
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
    <SectionTableOfContents sections={combinationsSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
         secondaryNavTitle="More in this Section" />
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

