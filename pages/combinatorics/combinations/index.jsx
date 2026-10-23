// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import '../../pages.css'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import GenericTable from '@/app/components/generic-table/GenericTable'
// import { scenariosData } from '@/app/api/db/diagrams/combinatorics/scenarios'
// import SvgDiagram from '@/app/components/diagrams/render-svg/SvgDiagram'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'



// export async function getStaticProps(){

//  const keyWords = [
//   'combinations',
//   'combination formula',
//   'n choose r',
//   'binomial coefficient',
//   'partition into groups',
//   'weak composition',
//   'strong composition',
//   'distribution into cells',
//   'stars and bars',
//   'combinations vs permutations',
//   'unordered selection',
//   'multinomial coefficient',
//   'combinatorics combinations',
//   'combination examples'
// ]
//     const combinationsScenariosTableData = {
//         tableTitle: "Combination Scenarios",
//         rows: [
//           {
//             "Scenario": "[Simple Combination](!/combinatorics/combinations#combinations)",
//             "Objects distinct or identical?": "Distinct",
//             "Select Subset or distribute?": "Select",
//             "Cells labeled or unlabeled?": "N/A",
//             "Empty cells allowed?": "N/A",
//             "Formula": "$\\binom{n}{r}$",
//             "Example": "Choose 3 fruits out of 10 different types"
//           },
//           {
//             "Scenario": "[Partition into Groups](!/combinatorics/combinations#partition)",
//             "Objects distinct or identical?": "Distinct",
//             "Select Subset or distribute?": "Distribute",
//             "Cells labeled or unlabeled?": "Unlabeled",
//             "Empty cells allowed?": "Typically no",
//             "Formula": "$\\frac{n!}{n_1!n_2!\\dots n_k!}$ (Stirling numbers for equal partitions)",
//             "Example": "Split 12 players into 3 unlabeled teams of 4"
//           },
//           {
//             "Scenario": "[Weak Composition](!/combinatorics/combinations#weak)",
//             "Objects distinct or identical?": "Identical",
//             "Select Subset or distribute?": "Distribute",
//             "Cells labeled or unlabeled?": "Labeled",
//             "Empty cells allowed?": "Yes",
//             "Formula": "$\\binom{n+r-1}{r-1}$",
//             "Example": "Distribute 7 identical candies to 3 children (some may get none)"
//           },
//           {
//             "Scenario": "[Strong Composition](!/combinatorics/combinations#strong)",
//             "Objects distinct or identical?": "Identical",
//             "Select Subset or distribute?": "Distribute",
//             "Cells labeled or unlabeled?": "Labeled",
//             "Empty cells allowed?": "No",
//             "Formula": "$\\binom{n-1}{r-1}$",
//             "Example": "Distribute 7 identical candies to 3 children (each gets at least 1)"
//           },
//           {
//             "Scenario": "[Distribution into Cells](!/combinatorics/combinations#distribution)",
//             "Objects distinct or identical?": "Distinct",
//             "Select Subset or distribute?": "Distribute",
//             "Cells labeled or unlabeled?": "Labeled",
//             "Empty cells allowed?": "Yes",
//             "Formula": "$r^n$",
//             "Example": "Assign 5 employees to 3 different projects"
//           }
//         ]
//       };
      

//   const simpleCombinationTable= `<!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Simple Combination</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distinct</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Select subset</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #95a5a6; font-size: 16px; font-weight: bold;">N/A</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #95a5a6; font-size: 16px; font-weight: bold;">N/A</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>
// `

// const partitionTable= `<!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Partition into Groups</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distinct</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distribute</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Unlabeled</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 16px; font-weight: bold;">Typically no</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>`

// const weakCompositionTable=`<!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Weak Composition</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Identical</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distribute</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Labeled</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>`


// const strongCompositionTable=`<!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Strong Composition</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Identical</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distribute</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Labeled</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>`

// const distributionTable=`<!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Distribution into Cells</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Objects distinct or identical?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distinct</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Select subset or distribute?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Distribute</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Cells labeled or unlabeled?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Labeled</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Empty cells allowed?</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>
// `



    
// //   const sectionsContent={

// //     combinations:{
// //       title:`Simple Combinations`,
// //       content:``,
// //       before:`**Simple Combination** works when selecting items from a collection where order doesn't matter and no repetitions are allowed. Classic examples include choosing team members from a group or selecting lottery numbers.
      
// //       `,
// //       after:`      
// // **Common notations:**
// // \t\t\t•$\\binom{n}{r}$ - "n choose r" (most common in modern texts)
// // \t\t\t•$C(n,r)$ - C for "combinations"
// // \t\t\t•$C_n^r$ - alternative C notation
// // \t\t\t•$_nC_r$ - subscript/superscript form

// // The $\\binom{n}{r}$ notation is the most widely used in modern mathematics, but you'll often see $C(n,r)$ in introductory texts and $_nC_r$ on calculators.


// //       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// //       **Formula**:
// //       The total number of simple combinations is 
// // @academic[example:&nbsp\t\t\t\t\t\t$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$]@
// // If $n$ is the total number of distinct items and $r$ is the number of items to select, then order doesn't matter and repetition isn't allowed.

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=6) →@

// // `,
// //       between:`
// //       **Simple Combination — Examples**:
// // Choosing committee members from a club, selecting lottery numbers, picking a set of books to borrow from a library, forming a group of students for a project, selecting ingredients for a recipe from available options.`,
  
  
// //     },
// //     partition:{
// //       title:`Partition into Groups`,
// //       content:``,
// //       before:`**Partition into Groups** applies when dividing distinct items into unlabeled subsets where only grouping matters, not the order within groups or names of the groups. Classic examples include dividing students into teams or splitting items into categories.
      
// //       `,
// //       after:`
// //        **Notation**:
// //        Partition into Groups doesn't have a standard symbolic notation like $\\binom{n}{r}$ for [simple combinations](!/combinatorics/combinations#combinations).

// // Partitions are typically just described in words or with set notation like:

// // "Partition of set S into k parts"
// // {A₁, A₂, ..., Aₖ} where A₁ ∪ A₂ ∪ ... ∪ Aₖ = S

// // Unlike other combinations, permutations, etc., partitions don't have a universally recognized compact notation symbol.


// //       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// //       **Formula**:
// //       The total number of partitions into groups is 
// // @academic[example:&nbsp\t\t\t\t\t\t{A₁, A₂, ..., Aₖ}=$\\frac{n!}{n_1!n_2!\\dots n_k!}$]@ 
// // If $n$ is the total number of distinct items to partition into $k$ groups of sizes $n_1, n_2, \\ldots, n_k$ respectively, where the groups are unlabeled and only the grouping matters.
     

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=7) →@

// // `,
// //       between:  `
// //       **Partition into Groups — Examples**:
// // Dividing students into study groups, splitting employees into project teams, grouping tasks into phases of a project, dividing guests into tables at an event, forming clusters of data points in analysis.`,
  
// //     },
  
// //     distribution:{
  
// //       title:`Distribution into Cells`,
// //       content:``,
// //       before:`**Distribution into Cells** works when assigning each distinct item to a specific labeled container, creating a mapping that shows which container each item goes to. Classic examples include assigning students to different classrooms or placing different files into labeled folders.
      
// //       `,
// //       after:`
// //       **Notation**:
    
// // **Distribution into Cells** doesn't have a standard symbolic notation like $\\binom{n}{r}$ for [simple combinations](!/combinatorics/combinations#combinations). It's typically just described as "functions from set A to set B" or "mappings" in mathematical notation, but there's no compact symbol specifically for this concept like there is for combinations or permutations.

// //       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// //       **Formula**:
// //       The total number of distributions into cells is 
// // @academic[example:&nbsp\t\t\t\t\t\t$r^n$]@
// // If $n$ is the total number of distinct items to assign and $r$ is the number of labeled containers, where each item can go into any container and containers can be empty.
      

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=10) →@


// // `,
// //       between:`
// //       **Distribution into Cells — Examples**:
// // Assigning students to classrooms, placing different files into labeled folders, allocating distinct products to specific storage bins, or assigning employees to designated offices. This setup focuses on mapping each unique item to a labeled container, making the outcome a clear one‑to‑one assignment.
// // `,
  
// //     },
// //     weak:{
// //       title:`Weak Composition`,
// //       content:``,
// //       before:`**Weak Composition** occures when distributing identical units into labeled containers where some containers can remain empty and only the count in each container matters. Classic examples include distributing identical coins into numbered boxes or allocating identical resources to different departments.


// // `,
// //       after:`
// //        **Notation**:
// //        The notation for **Weak Composition** is:

// // \t\t\t$\\left(\\binom{n}{r}\\right)$** or **$\\left(\\left(\\binom{n}{r}\\right)\\right)$

// // This represents the number of ways to place n identical objects into r labeled bins, where empty bins are allowed. It's also written as $\\binom{n+r-1}{r-1}$ but the double parentheses notation specifically indicates weak compositions.

// //       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// //       **Formula**:
// //       The total number of weak compositions is 
// // @academic[example:&nbsp\t\t\t\t\t\t$\\left(\\binom{n}{r}\\right)=\\binom{n+r-1}{r-1}$]@   
// // If $n$ is the total number of identical items to distribute into $r$ labeled containers, where empty containers are allowed and only the count in each container matters.
      

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=8) →@


// // `,
// //       between:`
// //       **Weak Composition — Examples**:
// // Distributing identical coins into numbered boxes, allocating identical resources to different departments, assigning identical tasks across several workers. Since this type of experiment is highly specific — focusing only on counts in labeled containers, even allowing some to remain empty — it is largely self‑explanatory and not as easy to find in common real‑world situations.
// // `,
  
// //     },


// //     strong:{
  
// //       title:`Strong Composition`,
// //       content:``,
// //       before:`**Strong Composition** works when distributing identical units into labeled containers where every container must receive at least one unit and only the count in each container matters. Classic examples include distributing identical items to departments where each department must get something or allocating identical resources ensuring no group is left empty.
      
// //       `,
// //       after:`
// //        **Notation**:
// //        The notation for **Strong Composition** is:

// // \t\t\t$\\left\\langle\\binom{n}{r}\\right\\rangle$ or $\\left\\langle\\left\\langle\\binom{n}{r}\\right\\rangle\\right\\rangle$

// // This represents the number of ways to place n identical objects into r labeled bins where each bin must contain at least one object. It's also written as $\\binom{n-1}{r-1}$ but the angle brackets notation specifically indicates strong compositions.


// //       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// //       **Formula**:
// //       The total number of strong compositions is 
// // @academic[example:&nbsp\t\t\t\t\t\t$\\left\\langle\\binom{n}{r}\\right\\rangle=\\binom{n-1}{r-1}$]@     
// // If $n$ is the total number of identical items to distribute into $r$ labeled containers, where each container must receive at least one item and only the count in each container matters.
     

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=9) →@


// // `,
// //       between:`
// //      **Strong Composition — Examples**:
// // Distributing identical items to departments where each department must receive at least one, allocating identical resources among teams ensuring none are left empty, dividing identical tasks across several workers with no one unassigned. Like weak composition, this type of experiment is quite specific — it focuses on counts in labeled containers with no empties allowed — making it largely self‑explanatory and less common in everyday situations.


// //       `,
  
// //     },
// //     types:{
  
// //         title:`Types of Combinations`,
// //         content:``,
// //         before:`In combinatorics, combinations represent ways to select or distribute items without considering order, in contrast to [permutations](!/combinatorics/permutations) where order matters. Building on our earlier comparison between combinations and [permutations](!/combinatorics/permutations), we now distinguish between different types of combinations using key questions: whether the objects are distinct or identical, whether we are selecting a subset or distributing all objects, and whether the containers (cells) are labeled or can remain empty.

// //         `,
// //         after:`
// //         **Conclusion**:
// // Understanding these different combination scenarios is essential because each situation leads to a different counting formula. Recognizing the correct type of combination ensures accurate problem-solving in probability, statistics, and many applied fields.
// //         `,
// //         between:``,
    
// //       },
// //       obj5:{
  
// //         title:``,
// //         content:``,
// //         before:``,
// //         after:``,
    
// //       }
  
// //   }



// // formulas-optimized: v1 | 2026-06-11 | 5 callouts via @academic[example:...]@ → formula_callout swap (override 2)
// const sectionsContent={

//     combinations:{
//       title:`Simple Combinations`,
//       content:``,
//       before:`**Simple Combination** works when selecting items from a collection where order doesn't matter and no repetitions are allowed. Classic examples include choosing team members from a group or selecting lottery numbers.
      
//       `,
//       after:`      
// **Common notations:**
// \t\t\t•$\\binom{n}{r}$ - "n choose r" (most common in modern texts)
// \t\t\t•$C(n,r)$ - C for "combinations"
// \t\t\t•$C_n^r$ - alternative C notation
// \t\t\t•$_nC_r$ - subscript/superscript form

// The $\\binom{n}{r}$ notation is the most widely used in modern mathematics, but you'll often see $C(n,r)$ in introductory texts and $_nC_r$ on calculators.


//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of simple combinations is 

// @academic[formula_callout:Combination
// $$\\binom{n}{r} = \\frac{n!}{r! \\, (n-r)!}.$$
// /combinatorics/formulas#combination]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// If $n$ is the total number of distinct items and $r$ is the number of items to select, then order doesn't matter and repetition isn't allowed.

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=6) →@

// `,
//       between:`
//       **Simple Combination — Examples**:
// Choosing committee members from a club, selecting lottery numbers, picking a set of books to borrow from a library, forming a group of students for a project, selecting ingredients for a recipe from available options.`,
  
  
//     },
//     partition:{
//       title:`Partition into Groups`,
//       content:``,
//       before:`**Partition into Groups** applies when dividing distinct items into unlabeled subsets where only grouping matters, not the order within groups or names of the groups. Classic examples include dividing students into teams or splitting items into categories.
      
//       `,
//       after:`
//        **Notation**:
//        Partition into Groups doesn't have a standard symbolic notation like $\\binom{n}{r}$ for [simple combinations](!/combinatorics/combinations#combinations).

// Partitions are typically just described in words or with set notation like:

// "Partition of set S into k parts"
// {A₁, A₂, ..., Aₖ} where A₁ ∪ A₂ ∪ ... ∪ Aₖ = S

// Unlike other combinations, permutations, etc., partitions don't have a universally recognized compact notation symbol.


//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of partitions into groups is 

// @academic[formula_callout:Partition into Groups
// $$\\frac{n!}{n_1! \\, n_2! \\cdots n_k!}, \\quad n_1 + n_2 + \\cdots + n_k = n.$$
// /combinatorics/formulas#partition_into_groups]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// If $n$ is the total number of distinct items to partition into $k$ groups of sizes $n_1, n_2, \\ldots, n_k$ respectively, where the groups are unlabeled and only the grouping matters.
     

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=7) →@

// `,
//       between:  `
//       **Partition into Groups — Examples**:
// Dividing students into study groups, splitting employees into project teams, grouping tasks into phases of a project, dividing guests into tables at an event, forming clusters of data points in analysis.`,
  
//     },
  
//     distribution:{
  
//       title:`Distribution into Cells`,
//       content:``,
//       before:`**Distribution into Cells** works when assigning each distinct item to a specific labeled container, creating a mapping that shows which container each item goes to. Classic examples include assigning students to different classrooms or placing different files into labeled folders.
      
//       `,
//       after:`
//       **Notation**:
    
// **Distribution into Cells** doesn't have a standard symbolic notation like $\\binom{n}{r}$ for [simple combinations](!/combinatorics/combinations#combinations). It's typically just described as "functions from set A to set B" or "mappings" in mathematical notation, but there's no compact symbol specifically for this concept like there is for combinations or permutations.

//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of distributions into cells is 

// @academic[formula_callout:Distribution into Cells
// $$r^n.$$
// /combinatorics/formulas#distribution_into_cells]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// If $n$ is the total number of distinct items to assign and $r$ is the number of labeled containers, where each item can go into any container and containers can be empty.
      

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=10) →@


// `,
//       between:`
//       **Distribution into Cells — Examples**:
// Assigning students to classrooms, placing different files into labeled folders, allocating distinct products to specific storage bins, or assigning employees to designated offices. This setup focuses on mapping each unique item to a labeled container, making the outcome a clear one‑to‑one assignment.
// `,
  
//     },
//     weak:{
//       title:`Weak Composition`,
//       content:``,
//       before:`**Weak Composition** occures when distributing identical units into labeled containers where some containers can remain empty and only the count in each container matters. Classic examples include distributing identical coins into numbered boxes or allocating identical resources to different departments.


// `,
//       after:`
//        **Notation**:
//        The notation for **Weak Composition** is:

// \t\t\t$\\left(\\binom{n}{r}\\right)$** or **$\\left(\\left(\\binom{n}{r}\\right)\\right)$

// This represents the number of ways to place n identical objects into r labeled bins, where empty bins are allowed. It's also written as $\\binom{n+r-1}{r-1}$ but the double parentheses notation specifically indicates weak compositions.

//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of weak compositions is 

// @academic[formula_callout:Weak Composition
// $$\\left(\\!\\!\\binom{n}{r}\\!\\!\\right) = \\binom{n + r - 1}{r - 1}.$$
// /combinatorics/formulas#weak_composition]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// If $n$ is the total number of identical items to distribute into $r$ labeled containers, where empty containers are allowed and only the count in each container matters.
      

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=8) →@


// `,
//       between:`
//       **Weak Composition — Examples**:
// Distributing identical coins into numbered boxes, allocating identical resources to different departments, assigning identical tasks across several workers. Since this type of experiment is highly specific — focusing only on counts in labeled containers, even allowing some to remain empty — it is largely self‑explanatory and not as easy to find in common real‑world situations.
// `,
  
//     },


//     strong:{
  
//       title:`Strong Composition`,
//       content:``,
//       before:`**Strong Composition** works when distributing identical units into labeled containers where every container must receive at least one unit and only the count in each container matters. Classic examples include distributing identical items to departments where each department must get something or allocating identical resources ensuring no group is left empty.
      
//       `,
//       after:`
//        **Notation**:
//        The notation for **Strong Composition** is:

// \t\t\t$\\left\\langle\\binom{n}{r}\\right\\rangle$ or $\\left\\langle\\left\\langle\\binom{n}{r}\\right\\rangle\\right\\rangle$

// This represents the number of ways to place n identical objects into r labeled bins where each bin must contain at least one object. It's also written as $\\binom{n-1}{r-1}$ but the angle brackets notation specifically indicates strong compositions.


//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of strong compositions is 

// @academic[formula_callout:Strong Composition
// $$\\left\\langle \\binom{n}{r} \\right\\rangle = \\binom{n - 1}{r - 1}.$$
// /combinatorics/formulas#strong_composition]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// If $n$ is the total number of identical items to distribute into $r$ labeled containers, where each container must receive at least one item and only the count in each container matters.
     

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=9) →@


// `,
//       between:`
//      **Strong Composition — Examples**:
// Distributing identical items to departments where each department must receive at least one, allocating identical resources among teams ensuring none are left empty, dividing identical tasks across several workers with no one unassigned. Like weak composition, this type of experiment is quite specific — it focuses on counts in labeled containers with no empties allowed — making it largely self‑explanatory and less common in everyday situations.


//       `,
  
//     },
//     types:{
  
//         title:`Types of Combinations`,
//         content:``,
//         before:`In combinatorics, combinations represent ways to select or distribute items without considering order, in contrast to [permutations](!/combinatorics/permutations) where order matters. Building on our earlier comparison between combinations and [permutations](!/combinatorics/permutations), we now distinguish between different types of combinations using key questions: whether the objects are distinct or identical, whether we are selecting a subset or distributing all objects, and whether the containers (cells) are labeled or can remain empty.

//         `,
//         after:`
//         **Conclusion**:
// Understanding these different combination scenarios is essential because each situation leads to a different counting formula. Recognizing the correct type of combination ensures accurate problem-solving in probability, statistics, and many applied fields.
//         `,
//         between:``,
    
//       },
//       obj5:{
  
//         title:``,
//         content:``,
//         before:``,
//         after:``,
    
//       }
  
//   }
  
// const introContent = {
//   id: "intro",
//   title: "Combinations: Selecting and Grouping without Order",
//   content: `Combinations focus on selection where **order doesn't matter**. Unlike [permutations](!/combinatorics/permutations) where arrangement sequence is crucial, combinations only care about which elements are chosen, not how they're arranged.

// This page covers five key combination scenarios: [Basic Combinations](!/combinatorics/combinations#combinations) (selecting unordered subsets), [Partition into Groups](!/combinatorics/combinations#partition) (dividing elements into unlabeled groups), [Distribution into Cells](!/combinatorics/combinations#distribution) (assigning elements to labeled containers), [Weak Composition](!/combinatorics/combinations#weak) (distributing identical units with empty cells allowed), and [Strong Composition](!/combinatorics/combinations#strong) (distributing identical units requiring non-empty cells).

// Each type serves different counting needs, from team selection to resource allocation. Understanding when order matters versus when it doesn't is fundamental to choosing between combinations and permutations.

// Mastering these combination types equips you to handle selection and distribution problems across various mathematical and practical contexts. The challenge is identifying which scenario matches your specific problem.`
// }


// const faqQuestions = {
//   obj1: {
//     question: "What is a combination?",
//     answer: "A combination is an unordered selection of items, where only which items are chosen matters and not the order in which they appear. The standard count C(n,r) = n!/(r!(n-r)!) gives the number of r-element subsets of an n-element set."
//   },
//   obj2: {
//     question: "What is the difference between combinations and permutations?",
//     answer: "Combinations count unordered selections (ABC and CBA are the same), while permutations count ordered arrangements (ABC and CBA are different). The structural question 'does order matter' determines which family applies, and the two counts differ by a factor of r! for selecting r items."
//   },
//   obj3: {
//     question: "What is the formula for combinations?",
//     answer: "The simple combination count is C(n,r) = n!/(r!(n-r)!), read 'n choose r'. Other scenarios use different formulas: partition into groups uses n!/(n_1!·n_2!·...·n_k!), weak composition uses C(n+r-1, r-1), and strong composition uses C(n-1, r-1)."
//   },
//   obj4: {
//     question: "What is the difference between weak and strong composition?",
//     answer: "Both distribute n identical items into r labeled containers. Weak composition allows empty containers and counts C(n+r-1, r-1) arrangements. Strong composition requires every container to receive at least one item and counts C(n-1, r-1) arrangements."
//   },
//   obj5: {
//     question: "When do you use the partition-into-groups formula?",
//     answer: "The partition formula n!/(n_1!·n_2!·...·n_k!) applies when n distinct items are split into groups of specified sizes n_1, n_2, ..., n_k. It is the multinomial coefficient, and it counts unordered partitions where groups are distinguished by their contents, not by labels."
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Combinations",
//     "description": "Combinations in combinatorics: simple combinations, partition into groups, weak and strong composition, and distribution into cells, with formulas and examples.",
//     "url": "https://www.learnmathclass.com/combinatorics/combinations",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Combinations"
//     },
//     "teaches": [
//       "Simple combinations and the n choose r formula",
//       "Partition of distinct items into unlabeled groups",
//       "Weak composition: distributing identical items with empty cells allowed",
//       "Strong composition: distributing identical items with no empty cells",
//       "Distribution of distinct items into labeled cells",
//       "Combinations versus permutations and the role of order"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Combinatorics",
//         "item": "https://www.learnmathclass.com/combinatorics"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Combinations",
//         "item": "https://www.learnmathclass.com/combinatorics/combinations"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }





//   return {
//   props:{
//     seoData: {
//       title: "Combinations: Formula, Types & Examples | Learn Math Class",
//       description: "Combinations in combinatorics: simple combinations, partition into groups, weak and strong composition, and distribution into cells, with formulas and examples.",
//       keywords: keyWords.join(", "),
//       url: "/combinatorics/combinations",
//       name: "Combinations"
//     },
//     sectionsContent,
//     introContent,
//     simpleCombinationTable,
//     partitionTable,
//     weakCompositionTable,
//     strongCompositionTable,
//     distributionTable,
//     combinationsScenariosTableData,
//     faqQuestions,
//     schemas
//   }
// }
//   }
  
// export default function CombinationsPage({seoData, sectionsContent, introContent, simpleCombinationTable,
//   partitionTable, weakCompositionTable, strongCompositionTable, distributionTable,
//   combinationsScenariosTableData, faqQuestions, schemas}) {
  
//   const combinationsSections=[
//     {
//         id:'types',
//         title:sectionsContent.types.title,
//         link:'',
//         content:[
//           sectionsContent.types.before,
//           <div key={11} style={{width:'95%',margin:'auto'}}>
//           <GenericTable
//                 key={1}
//                 tableData={combinationsScenariosTableData} theme='lightBlue'
//                 cellFontSize={'14px'}
//                 headerFontSize={'15px'}
//                 />
//                 </div>,
//           sectionsContent.types.after,

//         ]
//     },
//     {
//         id:'combinations',
//         title:sectionsContent.combinations.title,
//         link:'',
//         content:[
//           sectionsContent.combinations.before,
//           <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html:simpleCombinationTable }} key="table" />,
//           sectionsContent.combinations.between,
//           sectionsContent.combinations.after,
//           <div key={2} style={{width:'100%',margin:'auto'}}>
//      <SvgDiagram
//    data={scenariosData["Combinations"]}
//   scale={'1'}
// //   width='1200px'
//   layout='horizontal'
//   splitRatio={'0.7'}
//  />
//  </div>

//         ]
//     },
//     {
//         id:'partition',
//         title:sectionsContent.partition.title,
//         link:'',
//         content:[
//           sectionsContent.partition.before,
//           <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: partitionTable }} key="table" />,
//            sectionsContent.partition.between,
//            sectionsContent.partition.after,
//                <div key={3} style={{width:'100%',margin:'auto'}}>
//      <SvgDiagram
//    data={scenariosData["Partition into Groups of Known Sizes"]}
//   scale={'1'}
// //   width='1200px'
//   layout='horizontal'
//   splitRatio={'0.7'}
//  />
//  </div>
//         ]
//     },
   
//     {
//         id:'weak',
//         title:sectionsContent.weak.title,
//         link:'',
//         content:[
//           sectionsContent.weak.before,
//           <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: weakCompositionTable }} key="table" />,
//           sectionsContent.weak.between,
//           sectionsContent.weak.after,
//                      <div key={4} style={{width:'100%',margin:'auto'}}>
//      <SvgDiagram
//    data={scenariosData["Weak Composition"]}
//   scale={'1'}
// //   width='1200px'
//   layout='horizontal'
//   splitRatio={'0.7'}
//  />
//  </div>
//         ]
//     },
//     {
//         id:'strong',
//         title:sectionsContent.strong.title,
//         link:'',
//         content:[

//           sectionsContent.strong.before,
//           <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: strongCompositionTable }} key="table" />,
//           sectionsContent.strong.between,
//           sectionsContent.strong.after,
//             <div key={5} style={{width:'100%',margin:'auto'}}>
//      <SvgDiagram
//    data={scenariosData["Strong Composition"]}
//   scale={'1'}
// //   width='1200px'
//   layout='horizontal'
//   splitRatio={'0.7'}
//  />
//  </div>,

//         ]
//     },
//     {
//       id:'distribution',
//       title:sectionsContent.distribution.title,
//       link:'',
//       content:[
//         sectionsContent.distribution.before,
//         <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: distributionTable }} key="table" />,
//         sectionsContent.distribution.between,
//         sectionsContent.distribution.after,
       
//     //     <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: distributionTable }} key="table" />,
//     //     sectionsContent.distribution.between,
//     //    <div style={{transform:'scale(0.8)'}}>
//     //     {scenariosData["Distributing Different Items into Numbered Cells"].svg}
//     //     </div>,
       
//         // scenariosData["Distributing Different Items into Numbered Cells"].svg,

//         <div key={112}  style={{
//             textAlign: 'center',
//             transform: 'scale(0.7)',
//             transformOrigin: 'center',
//             marginTop:'30px'
//           }} dangerouslySetInnerHTML={{ 
//             __html: scenariosData["Distributing Different Items into Numbered Cells"].svg 
//           }} />
       
//       ]
//   },
// ]




//   return (
//     <>
//  <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />

//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />

//   <meta name="robots" content="index, follow" />

//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
//   />
// </Head>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//      <OperaSidebar 
//                side='right'
//                topOffset='55px' 
//                sidebarWidth='45px'
//                panelWidth='200px'
//                iconColor='white'
//                panelBackgroundColor='#f2f2f2'
//              /> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Combinations</h1>   
//     <br/> 
//     <SectionTableOfContents sections={combinationsSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "siblings"
//          secondaryNavTitle="More in this Section" />
//     <br/> 
//     <br/> 
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#06357a"
//         />
//     <br/> 
//     <br/> 
//     <br/> 
//     <Sections sections={combinationsSections}/>
//     <br/> 
//     <br/>
//     {/* <ScrollUpButton/>  */}
    
//     </>
//   )
// }




import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import '../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import GenericTable from '@/app/components/generic-table/GenericTable'
import { scenariosData } from '@/app/api/db/diagrams/combinatorics/scenarios'
import SvgDiagram from '@/app/components/diagrams/render-svg/SvgDiagram'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import partialPermutationDiagrams from '@/app/components/combinatorics/new-visualizers/scenes/partialPermutationDiagrams'
import simpleCombinationDiagrams from '@/app/components/combinatorics/new-visualizers/scenes/simpleCombinationDiagrams'
import { tableHeaders } from '@/app/styles/theme'



export async function getStaticProps(){

 const keyWords = [
  'combinations',
  'combination formula',
  'n choose r',
  'binomial coefficient',
  'partition into groups',
  'weak composition',
  'strong composition',
  'distribution into cells',
  'stars and bars',
  'combinations vs permutations',
  'unordered selection',
  'multinomial coefficient',
  'combinatorics combinations',
  'combination examples'
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
            "Cells labeled or unlabeled?": "Labeled",
            "Empty cells allowed?": "Typically no",
            "Formula": "$\\frac{n!}{n_1!n_2!\\dots n_k!}$ (divide by $k!$ when equal-size groups are unlabeled)",
            "Example": "Split 12 players into 3 named teams of 4"
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 16px; font-weight: bold;">Labeled</td>
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



    
//   const sectionsContent={

//     combinations:{
//       title:`Simple Combinations`,
//       content:``,
//       before:`**Simple Combination** works when selecting items from a collection where order doesn't matter and no repetitions are allowed. Classic examples include choosing team members from a group or selecting lottery numbers.
      
//       `,
//       after:`      
// **Common notations:**
// \t\t\t•$\\binom{n}{r}$ - "n choose r" (most common in modern texts)
// \t\t\t•$C(n,r)$ - C for "combinations"
// \t\t\t•$C_n^r$ - alternative C notation
// \t\t\t•$_nC_r$ - subscript/superscript form

// The $\\binom{n}{r}$ notation is the most widely used in modern mathematics, but you'll often see $C(n,r)$ in introductory texts and $_nC_r$ on calculators.


//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of simple combinations is 
// @academic[example:&nbsp\t\t\t\t\t\t$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$]@
// If $n$ is the total number of distinct items and $r$ is the number of items to select, then order doesn't matter and repetition isn't allowed.

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=6) →@

// `,
//       between:`
//       **Simple Combination — Examples**:
// Choosing committee members from a club, selecting lottery numbers, picking a set of books to borrow from a library, forming a group of students for a project, selecting ingredients for a recipe from available options.`,
  
  
//     },
//     partition:{
//       title:`Partition into Groups`,
//       content:``,
//       before:`**Partition into Groups** applies when dividing distinct items into unlabeled subsets where only grouping matters, not the order within groups or names of the groups. Classic examples include dividing students into teams or splitting items into categories.
      
//       `,
//       after:`
//        **Notation**:
//        Partition into Groups doesn't have a standard symbolic notation like $\\binom{n}{r}$ for [simple combinations](!/combinatorics/combinations#combinations).

// Partitions are typically just described in words or with set notation like:

// "Partition of set S into k parts"
// {A₁, A₂, ..., Aₖ} where A₁ ∪ A₂ ∪ ... ∪ Aₖ = S

// Unlike other combinations, permutations, etc., partitions don't have a universally recognized compact notation symbol.


//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of partitions into groups is 
// @academic[example:&nbsp\t\t\t\t\t\t{A₁, A₂, ..., Aₖ}=$\\frac{n!}{n_1!n_2!\\dots n_k!}$]@ 
// If $n$ is the total number of distinct items to partition into $k$ groups of sizes $n_1, n_2, \\ldots, n_k$ respectively, where the groups are unlabeled and only the grouping matters.
     

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=7) →@

// `,
//       between:  `
//       **Partition into Groups — Examples**:
// Dividing students into study groups, splitting employees into project teams, grouping tasks into phases of a project, dividing guests into tables at an event, forming clusters of data points in analysis.`,
  
//     },
  
//     distribution:{
  
//       title:`Distribution into Cells`,
//       content:``,
//       before:`**Distribution into Cells** works when assigning each distinct item to a specific labeled container, creating a mapping that shows which container each item goes to. Classic examples include assigning students to different classrooms or placing different files into labeled folders.
      
//       `,
//       after:`
//       **Notation**:
    
// **Distribution into Cells** doesn't have a standard symbolic notation like $\\binom{n}{r}$ for [simple combinations](!/combinatorics/combinations#combinations). It's typically just described as "functions from set A to set B" or "mappings" in mathematical notation, but there's no compact symbol specifically for this concept like there is for combinations or permutations.

//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of distributions into cells is 
// @academic[example:&nbsp\t\t\t\t\t\t$r^n$]@
// If $n$ is the total number of distinct items to assign and $r$ is the number of labeled containers, where each item can go into any container and containers can be empty.
      

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=10) →@


// `,
//       between:`
//       **Distribution into Cells — Examples**:
// Assigning students to classrooms, placing different files into labeled folders, allocating distinct products to specific storage bins, or assigning employees to designated offices. This setup focuses on mapping each unique item to a labeled container, making the outcome a clear one‑to‑one assignment.
// `,
  
//     },
//     weak:{
//       title:`Weak Composition`,
//       content:``,
//       before:`**Weak Composition** occures when distributing identical units into labeled containers where some containers can remain empty and only the count in each container matters. Classic examples include distributing identical coins into numbered boxes or allocating identical resources to different departments.


// `,
//       after:`
//        **Notation**:
//        The notation for **Weak Composition** is:

// \t\t\t$\\left(\\binom{n}{r}\\right)$** or **$\\left(\\left(\\binom{n}{r}\\right)\\right)$

// This represents the number of ways to place n identical objects into r labeled bins, where empty bins are allowed. It's also written as $\\binom{n+r-1}{r-1}$ but the double parentheses notation specifically indicates weak compositions.

//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of weak compositions is 
// @academic[example:&nbsp\t\t\t\t\t\t$\\left(\\binom{n}{r}\\right)=\\binom{n+r-1}{r-1}$]@   
// If $n$ is the total number of identical items to distribute into $r$ labeled containers, where empty containers are allowed and only the count in each container matters.
      

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=8) →@


// `,
//       between:`
//       **Weak Composition — Examples**:
// Distributing identical coins into numbered boxes, allocating identical resources to different departments, assigning identical tasks across several workers. Since this type of experiment is highly specific — focusing only on counts in labeled containers, even allowing some to remain empty — it is largely self‑explanatory and not as easy to find in common real‑world situations.
// `,
  
//     },


//     strong:{
  
//       title:`Strong Composition`,
//       content:``,
//       before:`**Strong Composition** works when distributing identical units into labeled containers where every container must receive at least one unit and only the count in each container matters. Classic examples include distributing identical items to departments where each department must get something or allocating identical resources ensuring no group is left empty.
      
//       `,
//       after:`
//        **Notation**:
//        The notation for **Strong Composition** is:

// \t\t\t$\\left\\langle\\binom{n}{r}\\right\\rangle$ or $\\left\\langle\\left\\langle\\binom{n}{r}\\right\\rangle\\right\\rangle$

// This represents the number of ways to place n identical objects into r labeled bins where each bin must contain at least one object. It's also written as $\\binom{n-1}{r-1}$ but the angle brackets notation specifically indicates strong compositions.


//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:
//       The total number of strong compositions is 
// @academic[example:&nbsp\t\t\t\t\t\t$\\left\\langle\\binom{n}{r}\\right\\rangle=\\binom{n-1}{r-1}$]@     
// If $n$ is the total number of identical items to distribute into $r$ labeled containers, where each container must receive at least one item and only the count in each container matters.
     

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=9) →@


// `,
//       between:`
//      **Strong Composition — Examples**:
// Distributing identical items to departments where each department must receive at least one, allocating identical resources among teams ensuring none are left empty, dividing identical tasks across several workers with no one unassigned. Like weak composition, this type of experiment is quite specific — it focuses on counts in labeled containers with no empties allowed — making it largely self‑explanatory and less common in everyday situations.


//       `,
  
//     },
//     types:{
  
//         title:`Types of Combinations`,
//         content:``,
//         before:`In combinatorics, combinations represent ways to select or distribute items without considering order, in contrast to [permutations](!/combinatorics/permutations) where order matters. Building on our earlier comparison between combinations and [permutations](!/combinatorics/permutations), we now distinguish between different types of combinations using key questions: whether the objects are distinct or identical, whether we are selecting a subset or distributing all objects, and whether the containers (cells) are labeled or can remain empty.

//         `,
//         after:`
//         **Conclusion**:
// Understanding these different combination scenarios is essential because each situation leads to a different counting formula. Recognizing the correct type of combination ensures accurate problem-solving in probability, statistics, and many applied fields.
//         `,
//         between:``,
    
//       },
//       obj5:{
  
//         title:``,
//         content:``,
//         before:``,
//         after:``,
    
//       }
  
//   }



// formulas-optimized: v1 | 2026-06-11 | 5 callouts via @academic[example:...]@ → formula_callout swap (override 2)
// Concept introduction (section "combinations") — template D, comparison.
// Running instance: choose 2 of 3 balls — the partial-permutation tool's
// default32 state (6 ordered picks) against the combination tool's default32
// state (3 sets). The section's old content stays in
// sectionsContent.combinations, unused; every widget it held is carried into
// the introduction unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciWasteTable = ciTableOpen(['the set', 'ordered picks that give it', 'times counted']) +
  ciRow(['{1, 2}', '1 then 2, 2 then 1', '2']) +
  ciRow(['{1, 3}', '1 then 3, 3 then 1', '2'], { shade: true }) +
  ciRow(['{2, 3}', '2 then 3, 3 then 2', '2']) +
  ciRow(['3 sets', '6 picks', '6 ÷ 2 = 3'], { shade: true, last: true, color: '#2563EB' }) +
  '</tbody></table>'
const ciSymTable = ciTableOpen(['take r of 3', 'leave 3 − r', 'C(3, r)']) +
  ciRow(['0', '3', '1']) +
  ciRow(['1', '2', '3'], { shade: true }) +
  ciRow(['2', '1', '3']) +
  ciRow(['3', '0', '1'], { shade: true, last: true }) +
  '</tbody></table>'

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

@academic[formula_callout:Combination
$$\\binom{n}{r} = \\frac{n!}{r! \\, (n-r)!}.$$
/combinatorics/formulas#combination]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

If $n$ is the total number of distinct items and $r$ is the number of items to select, then order doesn't matter and repetition isn't allowed.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=6) →@

`,
      between:`
      **Simple Combination — Examples**:
Choosing committee members from a club, selecting lottery numbers, picking a set of books to borrow from a library, forming a group of students for a project, selecting ingredients for a recipe from available options.`,
  
  
    },
    partition:{
      title:`Partition into Groups`,
      content:``,
      before:`**Partition into Groups** applies when dividing distinct items into labeled (distinguishable) groups of given sizes, where only which items share a group matters, not the order within groups. Classic examples include dividing students into teams or splitting items into categories.
      
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

@academic[formula_callout:Partition into Groups
$$\\frac{n!}{n_1! \\, n_2! \\cdots n_k!}, \\quad n_1 + n_2 + \\cdots + n_k = n.$$
/combinatorics/formulas#partition_into_groups]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

@academic[pitfall,aside:true,width:35%:Forgetting k! for unnamed groups
Splitting $6$ people into $3$ pairs with no names as $\\frac{6!}{2! \\, 2! \\, 2!} = 90$ counts each split once for every one of the $3! = 6$ ways to name the pairs. The number of splits is $\\frac{90}{3!} = 15$.
[Read more](!#pitfalls)]@

If $n$ is the total number of distinct items to partition into $k$ groups of sizes $n_1, n_2, \\ldots, n_k$ respectively, where the groups are labeled (distinguishable) and the order within each group does not matter.

The groups count as labeled when each one has its own name or role, such as Team A and Team B, or a morning shift and an evening shift. Exchanging the members of two such groups then gives a different split. When the groups are told apart only by who is in them, as with tables at an event, exchanging two whole groups of the same size leaves the split as it was.
     

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=7) →@

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

@academic[formula_callout:Distribution into Cells
$$r^n.$$
/combinatorics/formulas#distribution_into_cells]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

@academic[pitfall,aside:true,width:35%:Swapping base and exponent
Assigning $5$ employees to $3$ projects as $5^3 = 125$ treats each project as picking one employee. Each employee picks one of $3$ projects, so the count is $3^5 = 243$.
[Read more](!#pitfalls)]@

If $n$ is the total number of distinct items to assign and $r$ is the number of labeled containers, where each item can go into any container and containers can be empty.

The count comes from the [multiplication rule](!/combinatorics/counting-principles) applied item by item. The first item has $r$ containers to go to, the second item again has $r$, and so on, because a container can take any number of items. With $n$ items this is a product of $n$ equal factors $r \\cdot r \\cdots r$, one factor for each item.
      

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=10) →@


`,
      between:`
      **Distribution into Cells — Examples**:
Assigning students to classrooms, placing different files into labeled folders, allocating distinct products to specific storage bins, or assigning employees to designated offices. This setup focuses on mapping each unique item to a labeled container, making the outcome a mapping of items to containers, where several items may share a container.
`,
  
    },
    weak:{
      title:`Weak Composition`,
      content:``,
      before:`**Weak Composition** occurs when distributing identical units into labeled containers where some containers can remain empty and only the count in each container matters. Classic examples include distributing identical coins into numbered boxes or allocating identical resources to different departments.


`,
      after:`
       **Notation**:
       The notation for **Weak Composition** is:

\t\t\t$\\left(\\binom{r}{n}\\right)$** or **$\\left(\\left(\\binom{r}{n}\\right)\\right)$

This represents the number of ways to place n identical objects into r labeled bins, where empty bins are allowed. It's also written as $\\binom{n+r-1}{r-1}$ but the double parentheses notation specifically indicates weak compositions.

      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

      **Formula**:
      The total number of weak compositions is 

@academic[formula_callout:Weak Composition
$$\\left(\\!\\!\\binom{r}{n}\\!\\!\\right) = \\binom{n + r - 1}{r - 1}.$$
/combinatorics/formulas#weak_composition]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

@academic[pitfall,aside:true,width:35%:Swapping items and containers
For $7$ identical candies and $3$ children, putting $n = 3$ and $r = 7$ into the formula gives $\\binom{9}{6} = 84$. With $n = 7$ candies and $r = 3$ children, the count is $\\binom{7 + 3 - 1}{3 - 1} = \\binom{9}{2} = 36$.
[Read more](!#pitfalls)]@

If $n$ is the total number of identical items to distribute into $r$ labeled containers, where empty containers are allowed and only the count in each container matters.

The two numbers in the formula do different jobs. The $n$ items are the units being shared out, and since they are identical, a distribution is fixed by how many units each container receives. Picture the items as a row of $n$ stars split into $r$ containers by $r - 1$ bars: the $n + r - 1$ symbols in the row give the top of the binomial coefficient, and the $r - 1$ bars give the bottom.
      

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=8) →@


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

@academic[formula_callout:Strong Composition
$$\\left\\langle \\binom{n}{r} \\right\\rangle = \\binom{n - 1}{r - 1}.$$
/combinatorics/formulas#strong_composition]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

@academic[pitfall,aside:true,width:35%:Allowing empty containers
Counting $7$ identical candies for $3$ children as $\\binom{7 + 3 - 1}{3 - 1} = 36$ includes splits like $7 + 0 + 0$, where a child gets nothing. With at least one candy each, the count is $\\binom{7 - 1}{3 - 1} = \\binom{6}{2} = 15$.
[Read more](!#pitfalls)]@

If $n$ is the total number of identical items to distribute into $r$ labeled containers, where each container must receive at least one item and only the count in each container matters.

The requirement changes what is counted, not the items or the containers. One way to see the link with weak composition is to hand one unit to every container first; the remaining $n - r$ units can then be shared out freely, with empty containers allowed. The condition also needs $n \\geq r$, since with fewer units than containers some container has to stay empty.
     

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=9) →@


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
    
      },
  
      pitfalls: {
        title: `Common Pitfalls`,
        content: `Four mistakes come up again and again when a counting formula from this page is put to work. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Forgetting k! for unnamed groups**

The formula $\\frac{n!}{n_1! \\, n_2! \\cdots n_k!}$ counts splits into labeled groups. It is used for groups that have no names, so each split is counted once for every way of attaching the names to groups of the same size.

Wrong working: $6$ people are to be split into $3$ pairs, with no names for the pairs. The count is given as $\\frac{6!}{2! \\, 2! \\, 2!} = \\frac{720}{8} = 90$.

Right working: the $90$ counts named pairs, Pair 1, Pair 2 and Pair 3. Any one split into pairs can be named in $3! = 6$ ways, so the number of splits is $\\frac{90}{6} = 15$. Only groups of equal size can be exchanged like this: if all the sizes are different, the sizes already tell the groups apart and no division is needed.

Why it happens: the formula looks complete, and problems rarely say whether the groups have names, so it is easy to miss that the formula assumes they do.

How to check: count directly. Person 1 has $5$ possible partners; of the $4$ people left, the first has $3$ possible partners; the last $2$ form the third pair. That gives $5 \\cdot 3 \\cdot 1 = 15$.

**Swapping items and containers**

In $\\binom{n + r - 1}{r - 1}$ the number of items $n$ and the number of containers $r$ do different jobs, and the two are put into the formula the wrong way round.

Wrong working: $7$ identical candies are shared among $3$ children. With $n = 3$ and $r = 7$, the count is given as $\\binom{3 + 7 - 1}{7 - 1} = \\binom{9}{6} = 84$.

Right working: the candies are the items and the children are the containers, so $n = 7$ and $r = 3$: $\\binom{7 + 3 - 1}{3 - 1} = \\binom{9}{2} = 36$.

Why it happens: the top index $n + r - 1$ is the same either way, so the swap only shows in the bottom index. The notation $\\left(\\!\\!\\binom{r}{n}\\!\\!\\right)$ also writes the number of containers on top, the opposite of $\\binom{n}{r}$.

How to check: try a case small enough to list. $2$ candies for $3$ children: $2 + 0 + 0$ in $3$ orders and $1 + 1 + 0$ in $3$ orders, $6$ in all. The correct substitution gives $\\binom{4}{2} = 6$; the swapped one gives $\\binom{4}{1} = 4$.

**Allowing empty containers**

Every container must receive at least one unit, but the weak composition formula is used, and it also counts the distributions that leave some containers empty.

Wrong working: $7$ identical candies for $3$ children, each child getting at least one. The count is given as $\\binom{7 + 3 - 1}{3 - 1} = \\binom{9}{2} = 36$.

Right working: $\\binom{7 - 1}{3 - 1} = \\binom{6}{2} = 15$. The same number comes from giving each child one candy first and sharing the remaining $4$ freely: $\\binom{4 + 3 - 1}{3 - 1} = \\binom{6}{2} = 15$.

Why it happens: the two problems differ in a single condition, and the weak formula is usually the one learned first.

How to check: the difference $36 - 15 = 21$ must be the number of distributions with an empty child. Exactly one child gets nothing in $3 \\cdot 6 = 18$ ways (choose that child, then split $7$ between the other two with at least one each), and two children get nothing in $3$ ways. Indeed $18 + 3 = 21$.

**Swapping base and exponent**

The count $r^n$ for $n$ distinct items in $r$ labeled containers is written as $n^r$.

Wrong working: $5$ employees are assigned to $3$ projects, and the count is given as $5^3 = 125$.

Right working: each of the $5$ employees chooses one of the $3$ projects, so the count is $3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 3^5 = 243$.

Why it happens: "$5$ employees to $3$ projects" names the numbers in the order base, then exponent. The count $5^3$ answers a different question, in which each project picks one employee and one employee may be picked by several projects.

How to check: try $2$ employees and $3$ projects. Each employee has $3$ choices, giving $9$ assignments, which is $3^2$, not $2^3 = 8$. The exponent is always the number of choices made, one for each item.`,
      },

      faq: {
        title: `Combinations FAQ`,
      },
  }
  
const introContent = {
  id: "intro",
  title: "Combinations: Selecting and Grouping without Order",
  content: `Combinations focus on selection where **order doesn't matter**. Unlike [permutations](!/combinatorics/permutations) where arrangement sequence is crucial, combinations only care about which elements are chosen, not how they're arranged.

This page covers five key combination scenarios: [Basic Combinations](!/combinatorics/combinations#combinations) (selecting unordered subsets), [Partition into Groups](!/combinatorics/combinations#partition) (dividing elements into labeled groups of given sizes), [Distribution into Cells](!/combinatorics/combinations#distribution) (assigning elements to labeled containers), [Weak Composition](!/combinatorics/combinations#weak) (distributing identical units with empty cells allowed), and [Strong Composition](!/combinatorics/combinations#strong) (distributing identical units requiring non-empty cells).

Each type serves different counting needs, from team selection to resource allocation. Understanding when order matters versus when it doesn't is fundamental to choosing between combinations and permutations.

Mastering these combination types equips you to handle selection and distribution problems across various mathematical and practical contexts. The challenge is identifying which scenario matches your specific problem.`
}


const faqQuestions = {
  obj1: {
    question: "What is the difference between a permutation and a combination?",
    answer: "Permutations count arrangements where order matters; combinations count selections where it does not. Choosing three people for a podium with ranked places is a permutation, while choosing three for a committee is a combination. The combination count is always smaller, since every selection corresponds to several orderings of the same items.",
    sectionId: "types"
  },
  obj2: {
    question: "Why does the combination formula divide by r factorial?",
    answer: "Because the permutation count treats each ordering of the same chosen items as separate, and there are r factorial ways to order r items. Dividing by that number collapses every ordering of a given selection into one. The division is exactly what converts a count of arrangements into a count of selections. Try values on the [combinations calculator](!/combinatorics/calculator?scenario=6).",
    sectionId: "combinations"
  },
  obj3: {
    question: "What is the difference between weak and strong composition?",
    answer: "A weak composition allows parts equal to zero, so some recipients may receive nothing. A strong composition requires every part to be at least one, so everyone receives something. The distinction changes the formula, since the strong case is handled by giving each recipient one item first and distributing the remainder weakly.",
    sectionId: "weak"
  },
  obj4: {
    question: "How many ways can you split a group into teams?",
    answer: "Divide the total arrangements by the factorial of each team size, and divide again by the factorial of the number of teams if the teams are unlabelled and all the same size. That second division catches the case where swapping two whole teams produces the same split, which is the step most often forgotten. See the [partition calculator](!/combinatorics/calculator?scenario=7).",
    sectionId: "partition"
  },
  obj5: {
    question: "Is nCr the same thing as the binomial coefficient?",
    answer: "Yes. The two notations name the same number, counted differently: nCr counts selections of r items from n, while the [binomial coefficient](!/combinatorics/binomial-coefficient) counts the coefficient of a term in an expansion. That they coincide is the reason counting and algebra connect through the binomial theorem.",
    sectionId: "combinations"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Combinations",
    "description": "Combinations in combinatorics: simple combinations, partition into groups, weak and strong composition, and distribution into cells, with formulas and examples.",
    "url": "https://www.learnmathclass.com/combinatorics/combinations",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Combinations"
    },
    "teaches": [
      "Simple combinations and the n choose r formula",
      "Partition of distinct items into labeled groups",
      "Weak composition: distributing identical items with empty cells allowed",
      "Strong composition: distributing identical items with no empty cells",
      "Distribution of distinct items into labeled cells",
      "Combinations versus permutations and the role of order"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Combinatorics",
        "item": "https://www.learnmathclass.com/combinatorics"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Combinations",
        "item": "https://www.learnmathclass.com/combinatorics/combinations"
      }
    ]
  }

}





  const conceptIntroFigures = {
    ordered: partialPermutationDiagrams.default32,
    sets: simpleCombinationDiagrams.default32,
    wasteTable: ciWasteTable,
    symTable: ciSymTable,
  };

  return {
  props:{
    conceptIntroFigures,
    seoData: {
      title: "Combinations: Formula, Types & Examples | Learn Math Class",
      description: "Combinations in combinatorics: simple combinations, partition into groups, weak and strong composition, and distribution into cells, with formulas and examples.",
      keywords: keyWords.join(", "),
      url: "/combinatorics/combinations",
      name: "Combinations"
    },
    sectionsContent,
    introContent,
    simpleCombinationTable,
    partitionTable,
    weakCompositionTable,
    strongCompositionTable,
    distributionTable,
    combinationsScenariosTableData,
    faqQuestions,
    schemas
  }
}
  }
  
export default function CombinationsPage({seoData, sectionsContent, introContent, simpleCombinationTable,
  partitionTable, weakCompositionTable, strongCompositionTable, distributionTable,
  combinationsScenariosTableData, faqQuestions, schemas, conceptIntroFigures}) {

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Simple Combinations concept introduction — template D (comparison).
  const conceptIntro = {
    beats: [
      {
        id: 'works',
        lead: `Counting ordered picks already works, so a new method has to explain itself.`,
        content: `Choose $2$ of the $3$ balls numbered $1$, $2$, $3$. Pick one ball — $3$ choices — then another — $2$ choices left — and the [multiplication principle](!/combinatorics/counting-principles) gives $3 \\times 2 = 6$. That count is correct and quick. It is the number of [partial permutations](!/combinatorics/permutations), $P(3, 2) = 6$.`,
        visual: ciSvg('ordered'),
        caption: `All $6$ ordered picks of $2$ from $3$, each with a first and a second position. The same state is on the [partial permutation visualizer](!/combinatorics/visual-tools/partial-permutation).`,
      },
      {
        id: 'waste',
        kind: 'instance',
        lead: `When order does not matter, the ordered count counts every group twice.`,
        content: [
          `A team, a hand of cards, a set of books: what matters is who is in, not who was picked first. Sort the $6$ picks by the group they end up as.`,
          ciTable('wasteTable'),
          `Each group of $2$ appears once for every way of ordering it — $2! = 2$ times. Half of the $6$ is repetition. With $5$ balls taken $3$ at a time the waste is worse: $P(5, 3) = 60$ picks for only $10$ groups, every group counted $3! = 6$ times.`,
        ],
        visual: ciSvg('sets'),
        caption: `The $3$ groups that are actually different. Each one stands for $2$ of the ordered picks above. The same state is on the [combination visualizer](!/combinatorics/visual-tools/combination).`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [simple combination](!/combinatorics/definitions#combination) is a selection of $r$ items from $n$ distinct items in which order does not matter and no item is used twice. The number of them is`,
        formula: `@academic[formula_callout:Combination
$$\\binom{n}{r} = \\frac{n!}{r! \\, (n-r)!}.$$
/combinatorics/formulas#combination]@`,
        footer: `@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@`,
      },
      {
        id: 'kind',
        lead: `A combination is a set, and the formula counts sets.`,
        content: [
          `Each combination is an unordered group — $\\{1, 2\\}$ and $\\{2, 1\\}$ are the same one — and $\\binom{n}{r}$ is a whole number: how many such groups there are.`,
          `**Simple Combination** works when selecting items from a collection where order doesn't matter and no repetitions are allowed. Classic examples include choosing team members from a group or selecting lottery numbers.`,
          <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html:simpleCombinationTable }} key="table" />,
          `
      **Simple Combination — Examples**:
Choosing committee members from a club, selecting lottery numbers, picking a set of books to borrow from a library, forming a group of students for a project, selecting ingredients for a recipe from available options.`,
          <div key={2} style={{width:'100%',margin:'auto'}}>
     <SvgDiagram
   data={scenariosData["Combinations"]}
  scale={'1'}
//   width='1200px'
  layout='horizontal'
  splitRatio={'0.7'}
 />
 </div>,
        ],
      },
      {
        id: 'free',
        lead: `Two facts come with the formula for free.`,
        content: [
          `First, it is the ordered count with the waste divided out: $\\binom{n}{r} = \\frac{P(n, r)}{r!}$ — for our balls, $\\frac{6}{2} = 3$. Second, choosing which $r$ to take is the same as choosing which $n - r$ to leave, so $\\binom{n}{r} = \\binom{n}{n-r}$.`,
          ciTable('symTable'),
          `**Common notations:**
\t\t\t•$\\binom{n}{r}$ - "n choose r" (most common in modern texts)
\t\t\t•$C(n,r)$ - C for "combinations"
\t\t\t•$C_n^r$ - alternative C notation
\t\t\t•$_nC_r$ - subscript/superscript form

The $\\binom{n}{r}$ notation is the most widely used in modern mathematics, but you'll often see $C(n,r)$ in introductory texts and $_nC_r$ on calculators.`,
          `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@`,
        ],
      },
      {
        id: 'caveat',
        lead: `Everything rests on one fact: every group is counted the same number of times.`,
        content: [
          `Dividing by $r!$ is honest only because each group of $r$ distinct items has exactly $r!$ orderings. That is what the conditions buy:`,
          `If $n$ is the total number of distinct items and $r$ is the number of items to select, then order doesn't matter and repetition isn't allowed.`,
          `Break them and the single division fails. If some items are identical, or an item may be chosen more than once, different groups have different numbers of orderings, and the counts on the rest of this page take over.`,
        ],
      },
      {
        id: 'exit',
        content: [
          `The sections that follow handle what simple combinations cannot: splitting items into several labelled groups, weak and strong compositions, and distributing items into cells.`,
          `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=6) →@`,
        ],
      },
    ],
  }

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
          <ConceptIntro key={'combinations-intro'} data={conceptIntro} />,
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
    {
        id:'pitfalls',
        title:sectionsContent.pitfalls.title,
        link:'',
        content:[
          sectionsContent.pitfalls.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:sectionsContent.faq.title,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />
</Head>
    {/* <GenericNavbar/> */}
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
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Combinations</h1>   
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
    {/* <ScrollUpButton/>  */}
    
    </>
  )
}