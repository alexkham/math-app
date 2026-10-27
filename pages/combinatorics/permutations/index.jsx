// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import '../../pages.css'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import { scenariosData } from '@/app/api/db/diagrams/combinatorics/scenarios'
// import GenericTable from '@/app/components/generic-table/GenericTable'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'



// export async function getStaticProps(){
// const keyWords = [
//   'permutations',
//   'permutation formula',
//   'types of permutations',
//   'circular permutation',
//   'permutation with repetition',
//   'permutation without repetition',
//   'partial permutation',
//   'derangement formula',
//   'permutation examples',
//   'n factorial permutations',
//   'P(n,r) formula',
//   'permutation with identical items',
//   'ordered arrangements',
//   'combinatorics permutations'
// ]

//   const permutationsScenariosTableData = {
//     tableTitle: "Permutation Scenarios",
//     rows: [
//       {
//         "Scenario": "[Full permutation](!/combinatorics/permutations#full)",
//         "Order matters?": "Yes",
//         "Repetition?": "No",
//         "Identical items?": "No",
//         "Arrangement type": "Linear",
//         "Formula": "$n!$",
//         "Example": "Arrange 6 books in a row"
//       },
//       {
//         "Scenario": "[Partial permutation](!/combinatorics/permutations#without)",
//         "Order matters?": "Yes",
//         "Repetition?": "No",
//         "Identical items?": "No",
//         "Arrangement type": "Linear",
//         "Formula": "$\\frac{n!}{(n-r)!}$",
//         "Example": "Arrange 3 of 10 runners"
//       },
//       {
//         "Scenario": "[Permutation with repetition](!/combinatorics/permutations#with)",
//         "Order matters?": "Yes",
//         "Repetition?": "Yes",
//         "Identical items?": "No",
//         "Arrangement type": "Linear",
//         "Formula": "$n^r$",
//         "Example": "4-digit PIN code"
//       },
//       {
//         "Scenario": "[Permutation with identical items](!/combinatorics/permutations#identical)",
//         "Order matters?": "Yes",
//         "Repetition?": "N/A",
//         "Identical items?": "Yes",
//         "Arrangement type": "Linear",
//         "Formula": "$\\frac{n!}{n_1! \\, n_2! \\dots n_k!}$",
//         "Example": "Rearrange \"BALLOON\""
//       },
//       {
//         "Scenario": "[Circular permutation](!/combinatorics/permutations#circular)",
//         "Order matters?": "Yes",
//         "Repetition?": "No",
//         "Identical items?": "No",
//         "Arrangement type": "Circular",
//         "Formula": "$(n-1)!$",
//         "Example": "Seat 5 people around a table"
//       }
//     ]
//   };

//   const decision=`To choose the correct permutation type, follow the decision tree by answering three key questions in order:

// **Are you using all available items or selecting a subset?** - If you're arranging every available element, continue to the repetition question. If you're only selecting and arranging some elements (like 3 books from 10), you have **Permutation without Repetition**.

// **Do identical elements appear in your collection?** - If identical elements can appear multiple times (like letters in "BOOK"), you have **Permutation with Repetition**. If all elements must be distinct, proceed to the arrangement question.

// **Is the arrangement linear or circular?** - If the arrangement is in a line or sequence, it's **Permutation (Full)**. If elements are arranged around a circle where rotations look identical (like people around a table), it's **Circular Permutation**.

// The table shows these three parameters as columns, making it easy to match your problem's characteristics to the correct permutation type.`

//   const permutationsDiagram=`flowchart TD
//     A["Permutation Problem"] --> B{"Using all items?"}
    
//     B -->|"Yes"| C{"Repetition allowed?"}
//     B -->|"No (r of n)"| D["Permutation without<br/>Repetition"]
    
//     C -->|"No"| E{"Linear or circular?"}
//     C -->|"Yes"| F["Permutation with<br/>Repetition"]
    
//     E -->|"Linear"| G["Permutation (Full)"]
//     E -->|"Circular"| H["Circular Permutation"]
    
//     click D "https://google.com" "Permutation without Repetition: n!/(n-r)!"
//     click F "https://facebook.com" "Permutation with Repetition: n!/(n₁!×n₂!×...×nₖ!)"
//     click G "https://youtube.com" "Full Permutation: n!"
//     click H "https://wikipedia.org" "Circular Permutation: (n-1)!"`


//   const permutationsTable=`<!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Type</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Using All Items?</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Repetition Allowed?</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Linear/Circular?</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Permutation (Full)</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">Linear</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Permutation with Repetition</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">Linear</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Permutation without Repetition</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #f39c12; font-weight: bold;">r of n</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">Linear</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Circular Permutation</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">Circular</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>`

// const fullPermutationTable=`<!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Full Permutation</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>

// `

// const identicalTable=`
//   <!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Permutation with Identical Items</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>
// `

// const partialWithoutTable=`
//   <!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Partial Permutation without Repetition</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>
// `

// const permutationWithRepetitionTable=`
//   <!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Permutation with Repetition</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>
// `

// const circularTable=`
//   <!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//         <thead>
//             <tr>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
//                 <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Circular Permutation</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Use all items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Order matters</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✓</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Identical items</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Repetitions</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50; text-align: left;">Linear arrangement</td>
//                 <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #e74c3c; font-size: 18px; font-weight: bold;">✗</td>
//             </tr>
//         </tbody>
//     </table>
// </body>
// </html>
// `
    
// //   const sectionsContent={

// //     full:{
// //       title:`Permutation (Full)`,
// //       content:``,
// //       before:`**Full Permutation** applies when you arrange all distinct items in a specific order with no repetitions allowed. 
      
// //       `,
// //       after:`
// //       The intuition and logic we use for this kind of permutation has been explained pretty well in previous [section](!/combinatorics/permutations#logic) and it works basically for all [types](!/combinatorics/permutations#types) of permutations.
// //       Just in case of full permutations (unlike in other [types](!/combinatorics/permutations#types)) no further modifications needed and the calculation is simple. 
// //       \n**Notation**:
// // In combinatorics, we use specific notation to represent different types of permutations. 
// // For arranging $r$ objects selected from $n$ distinct objects, the standard notation is $P(n,r)$ or $_nP_r$.
// // When applied to full permutations, apparently $r=n$ (because we use all the items ), and the notation turns into :

// // \t\t\t\t\t\t$P(n,n)$\n\n\t\t\t\t\t\tor $_nP_n$\n\n\t\t\t\t\t\t or simply $P(n)$.

// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// // **Formula**:
// //       The number of possible results is calculated by the formula :      
// // @academic[example:&nbsp \t\t\t\t\t\t$P(n)=n!$]@
// //  Product of all integers from $n$ down to $1$.
// //        Where $n$ is the number of items to arrange. 

// //        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=1) →@

// //       `,
// //       between:`
// //      **Full Permutation — Examples**:
// // Arranging all books on a shelf, deciding the lineup of all players in a team, organizing all photos in an album, setting the order of speakers in a presentation, ordering all tasks in a workflow, ranking all competitors in a contest, scheduling all meetings in a day, sorting all files in a folder.

// // `,
// // formula:`@academic[example:&nbsp \t\t\t\t\t\t$P(n)=n!$]@`
  
  
// //     },
// //     identical:{
// //       title:`Permutation with Identical Items`,
// //       content:``,
// //       before:`**Permutation with Identical Items** applies when arranging all items where some identical elements appear multiple times in your collection. Classic examples include arranging all letters in words like "MISSISSIPPI" or organizing all colored balls when you have multiple balls of the same color.
      
// //       `,
// //       after:`
// //       **Notation:**
      
// // \t\t\t\t\t\t $\\binom{n}{n_1, n_2, \\ldots, n_k}$\n\n\t\t\t\t or $P(n; n_1, n_2, n_3, \\ldots, n_k)$\n\n\t\t\t\t or $P_n^{n_1, n_2, n_3, \\ldots, n_k}$

// //       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// //       **Formula**:

// //        To calculate the number of possible arrangements 
// //       @academic[example:&nbsp\t\t\t\t\t\t$\\binom{n}{n_{1},n_{2},\\dots,n_{k}} = \\frac{n!}{n_{1}!n_{2}!\\dots n_{k}!}$]@ 
// //       Where multinomial coefficient: counts distinct arrangements of $n$ items split into groups of sizes $n_{1},n_{2},\\dots,n_{k}$.
      
// //        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=2) →@
      
      
      
// //        `,
// //       between:`
// //       **Permutation with Identical Items — Examples**:
// // Rearranging letters in the word “BALLOON,” organizing colored balls where some colors repeat, sequencing identical files and unique ones in storage, arranging identical chairs and distinct tables in a layout, ordering repeated ingredients in a recipe list.`,
  
// //     },
  
// //    without:{
  
// //       title:`Partial Permutation without Repetition`,
// //       content:``,
// //       before:`**Partial Permutation without Repetition** applies when selecting and arranging only some items from a larger collection, with all items being distinct. Classic examples include choosing and ordering contestants from a group or selecting and arranging books from a library shelf.
      
// //       `,
// //       after:`
// //       **Notation**:

// // Most common:
// // \n\t\t\t\t\t\t$P(n,r)$

// //  Alternative notations:
// // \n\t\t\t\t\t\t$ {}^nP_r$

// // \t\t\t\t\t\t$A_n^r$

// // \t\t\t\t\t\t$\\text{nPr}$

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@
     
// //  **Formula**:      
// //       The number of arrangements for Partial Permutation without Repetition is 
// //        @academic[example:&nbsp\t\t\t\t\t\t$P(n,r) = \\frac{n!}{(n-r)!}$]@ 
// //       Where $n!$ counts all arrangements, dividing by $(n-r)!$ removes the unused positions.
      
// //        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=3) →@
      
// //       `,
// //       between:`
// //       **Partial Permutation (without repetition) — Examples**:
// // Selecting and ordering finalists from a group of contestants, arranging a subset of books on a display, picking and sequencing players for a relay team, choosing and ordering questions for an interview, organizing a limited set of tasks for a project phase.
// //       `,
  
// //     },
// //     circular:{
// //       title:`Circular Permutation`,
// //       content:``,
// //       before:`**Circular Permutation** applies when arranging items around a circle where rotations are considered identical arrangements. Classic examples include seating people around a round table or arranging objects in a circular pattern.
      
// //       `,
// //       after:`
// //       **Notation**:
// // Circular permutation
// // \n\t\t\t\t\t\t$P_{\\text{circ}}(n)$

// // Alternative notations
// // \n\t\t\t\t\t\t$C_n$
// // \n\t\t\t\t\t\t$P_{\\text{cyclic}}(n)$
// // \n\t\t\t\t\t\t$\\frac{n!}{n}$

// //        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@
      
// //       **Formula**:

// //       The total number of possible circular arrangements is
// //       @academic[example:&nbsp\t\t\t\t\t\t$P_{\\text{circ}}(n) = (n-1)!$]@ 
// //       If $n$ is a total number of items to arrange then fixing one item reduces circular arrangements to $(n-1)!$ linear ones.
      
// //        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=5) →@
    
       
// //       `,
// //       between:`
// //       **Circular Permutation — Examples**:
// // Arranging guests around a round table, seating participants in a circular panel, ordering beads in a circular necklace, organizing tasks in a repeating cycle, setting positions for players in a circular game arrangement.`,
  
// //     },


// //     with:{
  
// //       title:`Permutation with Repetition`,
// //       content:``,
// //       before:`**Permutation with Repetition** applies when arranging items where you can reuse the same element multiple times during the arrangement process. Classic examples include creating PIN codes where digits can repeat, or forming passwords where letters can be used multiple times.
      
// //       `,
// //       after:`
// //       **Notation**:

// // Permutation with repetition (positions)

// // \t\t\t\t\t\t$P_{\\text{rep}}(n,r)$

// // Alternative notations:
// // \n\t\t\t\t\t\t$\\overline{P}(n,r)$
// // \n\t\t\t\t\t\t$P^{(r)}(n)$
// // \n\t\t\t\t\t\t$ {}^nP^{(r)}_r$

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// // **Formula**:
// //       Total number of permutations with repetitions possible and all items used is:
// //      @academic[example:&nbsp\t\t\t\t\t\t$P_{\\text{rep}}(n,r)=n^{r}$]@
// //      Where each of the $r$ positions can be filled in $n$ ways.


// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=4) →@


// // `,
// // between:`
// // **Permutation with Repetition — Examples**:
// // Generating PIN codes from digits, creating letter sequences for passwords, arranging beads in a bracelet where colors can repeat, composing license plate numbers, assigning seats with multiple people allowed in the same category.
// // `,
  
// //     },
// //     types:{
  
// //       title:`Types of Permutations`,
// //       content:``,
// //       before:`Although in all types of permutations the order of arrangement matters, the key differences between them arise from other considerations: Can items be repeated? Are some items identical? Is the arrangement linear or circular? The table below summarizes these distinctions, showing how different scenarios lead to different counting formulas.

// // `,
// //       after:`

// // By addressing these additional questions, we can classify permutations into several types, each with its own counting method. Understanding these distinctions helps in correctly applying the appropriate formula for a given arrangement problem.
// // `,
  
// //     },
// //     logic:{
  
// //       title:`The Logic behind permutations`,
// //       content:``,
// //       before:`In combinatorics, we distinguish between several [types](!/combinatorics/permutations#types) of permutations based on different criteria, but they all share one key property: in every type, the order of arrangement matters ( and that is exactly what makes the difference between [permutations and variations](!/combinatorics#permutations_vs_combinations)).
// // In all different scenarios, the mechanism for creating a permutation is similar, and it is important to understand it.
// // When creating an arrangement, we must make two decisions:
// // 1. Which item to pick?
// // 2. Where to place it in the arrangement?

// // Let us examine the simplest case. Imagine we need to arrange $n$ different items (all distinct) in a row, without repetition. We can break it down into steps:

// //  **Step 1:** Choose an item for the first position. There are $n$ options.
// //  **Step 2:** Choose an item for the second position. Now there are $n-1$ options.
// //  **Step 3:** Choose an item for the third position. Now there are $n-2$ options.
// //  … and so on, until
// //  **Step** $n$: Only one item remains, so there is just 1 option.

// // Each step reduces the number of choices (since repetition is not allowed). Because we must make all these choices in sequence, we apply the [multiplication principle](!/combinatorics#multi).

// // Thus, to calculate the total number of permutations, we multiply:

// // $n \\times (n-1) \\times (n-2) \\times \\dots \\times 1,$

// // which is the definition of a factorial.

// // For $n$ distinct objects, the number of permutations is:
// // @academic[example:&nbsp\t\t\t\t\t\t$n! = n \\times (n−1) \\times (n−2) \\times \\dots \\times 2 \\times 1.$]@
// // **To summarize:**

// // * We start with $n$ options.
// // * Each choice reduces the number of remaining options by one.
// // * We multiply the number of choices at each step.

// // This gives us $n!$ total permutations.

// // Here is an example of simple permutation: creating 3 letter string.

// // `,
// //       after:``,
// //       between:`You can see how the principle explained before is applied here.
// //       First, one of 3 letters is picked and for each scenario there are 2 different choices to select the second letter.Once the choice is made, only one letter left.     
      
// //       The result is:
// //       @academic[example:&nbsp\t\t\t\t\t\t$3\\times 2 \\times 1 = 6 (n!)$]@
// //       Where $n$ is total number of items.

// //       `,
  
// //     },
// //     // URL: /combinatorics/permutations
// // // New section — slot after #circular, anchor id: 'derangement'

// //   obj8: {
// //     title: `Derangement`,
// //     content: `
// // A derangement is a permutation with an added constraint: no element appears in its original position. The other five permutation types vary the question of which arrangements to count — all items or a subset, with or without repetition, linear or circular. The derangement varies the constraint on the arrangement itself: same items, same order-matters property, same linear shape, with the extra requirement that every item must have moved.

// // The classical motivation is the hat-check problem. $n$ guests check $n$ hats, and the attendant returns them in a random order. In how many of those orderings does no guest receive their own hat? Each such ordering is a derangement of the $n$ hats.

// // ## Notation

// // Two notations are in common use:

// // • $!n$ — the subfactorial, the modern standard. The exclamation precedes the operand, mirroring the factorial in reverse.
// // • $D_n$ — an alternative notation, common in older texts.

// // The two are interchangeable.

// // ## Formula

// // The explicit formula is

// // $$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$

// // It is derived by applying the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion) to the set of all permutations: start with $n!$ total, subtract those that fix at least one specific position, add back those that fix at least two, and continue with alternating signs through all $n$ positions. The full derivation lives on the inclusion–exclusion page; the permutations page uses the result.

// // A recursive form is also useful for computation:

// // $$!n = (n-1)\\bigl(!(n-1) + !(n-2)\\bigr).$$

// // The asymptotic behavior of the formula is striking. As $n \\to \\infty$,

// // $$\\frac{!n}{n!} \\to \\frac{1}{e} \\approx 0.368.$$

// // The proportion of permutations that are derangements approaches a fixed limit rather than vanishing or filling the space — for any sufficiently large $n$, roughly $36.8\\%$ of all permutations of $n$ items are derangements.

// // ## Small Values

// // The first few subfactorials:

// // • $!1 = 0$ — with one item, the only permutation leaves it in place
// // • $!2 = 1$ — the swap
// // • $!3 = 2$
// // • $!4 = 9$
// // • $!5 = 44$
// // • $!6 = 265$

// // ## Example

// // In the hat-check problem with 4 guests, the number of orderings in which no guest receives their own hat is

// // $$!4 = 4! \\sum_{k=0}^{4} \\frac{(-1)^k}{k!} = 24 \\left(1 - 1 + \\tfrac{1}{2} - \\tfrac{1}{6} + \\tfrac{1}{24}\\right) = 9.$$

// // Out of the $4! = 24$ possible orderings of the four hats, exactly 9 satisfy the no-fixed-point condition.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
  
// //   }


// // formulas-optimized: v1 | 2026-06-11 | 3 callouts (obj8 ×3); 6 skipped (inside @academic[example:...]@)
// // Skipped: Factorial (logic), Full Permutation (full), Permutation with Identical Items (identical),
// //          Partial Permutation (without), Permutation with Repetition (with), Circular Permutation (circular)
// const sectionsContent={

//     full:{
//       title:`Permutation (Full)`,
//       content:``,
//       before:`**Full Permutation** applies when you arrange all distinct items in a specific order with no repetitions allowed. 
      
//       `,
//       after:`
//       The intuition and logic we use for this kind of permutation has been explained pretty well in previous [section](!/combinatorics/permutations#logic) and it works basically for all [types](!/combinatorics/permutations#types) of permutations.
//       Just in case of full permutations (unlike in other [types](!/combinatorics/permutations#types)) no further modifications needed and the calculation is simple. 
//       \n**Notation**:
// In combinatorics, we use specific notation to represent different types of permutations. 
// For arranging $r$ objects selected from $n$ distinct objects, the standard notation is $P(n,r)$ or $_nP_r$.
// When applied to full permutations, apparently $r=n$ (because we use all the items ), and the notation turns into :

// \t\t\t\t\t\t$P(n,n)$\n\n\t\t\t\t\t\tor $_nP_n$\n\n\t\t\t\t\t\t or simply $P(n)$.

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// **Formula**:
//       The number of possible results is calculated by the formula :      
// @academic[example:&nbsp \t\t\t\t\t\t$P(n)=n!$]@
//  Product of all integers from $n$ down to $1$.
//        Where $n$ is the number of items to arrange. 

//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=1) →@

//       `,
//       between:`
//      **Full Permutation — Examples**:
// Arranging all books on a shelf, deciding the lineup of all players in a team, organizing all photos in an album, setting the order of speakers in a presentation, ordering all tasks in a workflow, ranking all competitors in a contest, scheduling all meetings in a day, sorting all files in a folder.

// `,
// formula:`@academic[example:&nbsp \t\t\t\t\t\t$P(n)=n!$]@`
  
  
//     },
//     identical:{
//       title:`Permutation with Identical Items`,
//       content:``,
//       before:`**Permutation with Identical Items** applies when arranging all items where some identical elements appear multiple times in your collection. Classic examples include arranging all letters in words like "MISSISSIPPI" or organizing all colored balls when you have multiple balls of the same color.
      
//       `,
//       after:`
//       **Notation:**
      
// \t\t\t\t\t\t $\\binom{n}{n_1, n_2, \\ldots, n_k}$\n\n\t\t\t\t or $P(n; n_1, n_2, n_3, \\ldots, n_k)$\n\n\t\t\t\t or $P_n^{n_1, n_2, n_3, \\ldots, n_k}$

//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:

//        To calculate the number of possible arrangements 
//       @academic[example:&nbsp\t\t\t\t\t\t$\\binom{n}{n_{1},n_{2},\\dots,n_{k}} = \\frac{n!}{n_{1}!n_{2}!\\dots n_{k}!}$]@ 
//       Where multinomial coefficient: counts distinct arrangements of $n$ items split into groups of sizes $n_{1},n_{2},\\dots,n_{k}$.
      
//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=2) →@
      
      
      
//        `,
//       between:`
//       **Permutation with Identical Items — Examples**:
// Rearranging letters in the word “BALLOON,” organizing colored balls where some colors repeat, sequencing identical files and unique ones in storage, arranging identical chairs and distinct tables in a layout, ordering repeated ingredients in a recipe list.`,
  
//     },
  
//    without:{
  
//       title:`Partial Permutation without Repetition`,
//       content:``,
//       before:`**Partial Permutation without Repetition** applies when selecting and arranging only some items from a larger collection, with all items being distinct. Classic examples include choosing and ordering contestants from a group or selecting and arranging books from a library shelf.
      
//       `,
//       after:`
//       **Notation**:

// Most common:
// \n\t\t\t\t\t\t$P(n,r)$

//  Alternative notations:
// \n\t\t\t\t\t\t$ {}^nP_r$

// \t\t\t\t\t\t$A_n^r$

// \t\t\t\t\t\t$\\text{nPr}$

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@
     
//  **Formula**:      
//       The number of arrangements for Partial Permutation without Repetition is 
//        @academic[example:&nbsp\t\t\t\t\t\t$P(n,r) = \\frac{n!}{(n-r)!}$]@ 
//       Where $n!$ counts all arrangements, dividing by $(n-r)!$ removes the unused positions.
      
//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=3) →@
      
//       `,
//       between:`
//       **Partial Permutation (without repetition) — Examples**:
// Selecting and ordering finalists from a group of contestants, arranging a subset of books on a display, picking and sequencing players for a relay team, choosing and ordering questions for an interview, organizing a limited set of tasks for a project phase.
//       `,

//     },

//     notation: {
//       title: `Permutation Notation`,
//       lead: `Three marks carry every count on this page: the exclamation that multiplies downward, the two-letter family that orders selections, and the same exclamation moved out front to count the restless. Each scenario section keeps its own **Notation** block for the variant spellings.`,
//       inherited: `The choose-family marks $\\binom{n}{r}$ and $C(n, r)$ belong to the [binomial coefficient](!/combinatorics/binomial-coefficient); the set-size bars behind the counting arguments to [cardinality](!/set-theory/cardinality#notation).`,
//       entries: [
//         {
//           id: 'factorial',
//           tex: `$n!$`,
//           read: `n factorial`,
//           means: `The postfix count of complete rearrangements: $n! = n \\times (n-1) \\times \\cdots \\times 1$, introduced in **The Logic behind permutations** above. The convention $0! = 1$ is load-bearing — it keeps every counting formula honest at the edges.`,
//           cases: `The mark binds tight — $2n!$ means $2 \\cdot (n!)$, and $(2n)!$ needs its brackets; stacked marks are different animals: $(n!)!$ iterates, while $n!!$ skips every second factor (the double factorial), not a repeat.`,
//           confusedWith: `Punctuation. A sentence ending on $5$ with an exclamation and the operator in $5!$ share a glyph — and in programming @[!]@ negates; position and context carry the meaning.`,
//         },
//         {
//           id: 'p-family',
//           tex: `$P(n, r)$ · $_nP_r$`,
//           read: `P n r; n permute r`,
//           means: `The arrangement-count family: $P(n, r) = \\frac{n!}{(n - r)!}$ orders $r$ items chosen from $n$ — functional $P(n, r)$ in texts, subscripted $_nP_r$ on calculator keys, as the **Notation** blocks of **Permutation (Full)** and **Partial Permutation without Repetition** above list.`,
//           cases: `$A_n^r$ — the Arrangements letter of French and Russian textbooks, same count in a different alphabet; the full case collapses the second argument: $P(n, n) = P(n) = n!$.`,
//           confusedWith: `The choose family. $P(n, r)$ counts ordered selections, $\\binom{n}{r}$ unordered ones — they differ by exactly the factor $r!$, and the [binomial coefficient](!/combinatorics/binomial-coefficient) owns the other side of that ledger.`,
//         },
//         {
//           id: 'subfactorial',
//           tex: `$!n$ · $D_n$`,
//           read: `subfactorial n; derangements of n`,
//           means: `The factorial's mirror image: $!n$ counts permutations that leave nothing in place — the prefix position is the entire distinction, as **Derangement** below explains. $D_n$ is the older spelling, still common.`,
//           cases: `The two interchange freely — $!5 = D_5 = 44$; the prefix form reads badly mid-sentence, which is precisely what keeps the subscripted $D_n$ alive in running text.`,
//           confusedWith: `$n!$ read backwards. $!4 = 9$ while $4! = 24$ — position flips the meaning entirely, and a hasty transcription trades all arrangements for only the restless ones.`,
//         },
//       ],
//       symbolsHref: `/math-symbols/combinatorics`,
//       symbolsLabel: `All combinatorics symbols`,
//       parentHref: `/combinatorics`,
//       parentLabel: `Combinatorics`,
//     },

//     circular:{
//       title:`Circular Permutation`,
//       content:``,
//       before:`**Circular Permutation** applies when arranging items around a circle where rotations are considered identical arrangements. Classic examples include seating people around a round table or arranging objects in a circular pattern.
      
//       `,
//       after:`
//       **Notation**:
// Circular permutation
// \n\t\t\t\t\t\t$P_{\\text{circ}}(n)$

// Alternative notations
// \n\t\t\t\t\t\t$C_n$
// \n\t\t\t\t\t\t$P_{\\text{cyclic}}(n)$
// \n\t\t\t\t\t\t$\\frac{n!}{n}$

//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@
      
//       **Formula**:

//       The total number of possible circular arrangements is
//       @academic[example:&nbsp\t\t\t\t\t\t$P_{\\text{circ}}(n) = (n-1)!$]@ 
//       If $n$ is a total number of items to arrange then fixing one item reduces circular arrangements to $(n-1)!$ linear ones.
      
//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=5) →@
    
       
//       `,
//       between:`
//       **Circular Permutation — Examples**:
// Arranging guests around a round table, seating participants in a circular panel, ordering beads in a circular necklace, organizing tasks in a repeating cycle, setting positions for players in a circular game arrangement.`,
  
//     },


//     with:{
  
//       title:`Permutation with Repetition`,
//       content:``,
//       before:`**Permutation with Repetition** applies when arranging items where you can reuse the same element multiple times during the arrangement process. Classic examples include creating PIN codes where digits can repeat, or forming passwords where letters can be used multiple times.
      
//       `,
//       after:`
//       **Notation**:

// Permutation with repetition (positions)

// \t\t\t\t\t\t$P_{\\text{rep}}(n,r)$

// Alternative notations:
// \n\t\t\t\t\t\t$\\overline{P}(n,r)$
// \n\t\t\t\t\t\t$P^{(r)}(n)$
// \n\t\t\t\t\t\t$ {}^nP^{(r)}_r$

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// **Formula**:
//       Total number of permutations with repetitions possible and all items used is:
//      @academic[example:&nbsp\t\t\t\t\t\t$P_{\\text{rep}}(n,r)=n^{r}$]@
//      Where each of the $r$ positions can be filled in $n$ ways.


//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=4) →@


// `,
// between:`
// **Permutation with Repetition — Examples**:
// Generating PIN codes from digits, creating letter sequences for passwords, arranging beads in a bracelet where colors can repeat, composing license plate numbers, assigning seats with multiple people allowed in the same category.
// `,
  
//     },
//     types:{
  
//       title:`Types of Permutations`,
//       content:``,
//       before:`Although in all types of permutations the order of arrangement matters, the key differences between them arise from other considerations: Can items be repeated? Are some items identical? Is the arrangement linear or circular? The table below summarizes these distinctions, showing how different scenarios lead to different counting formulas.

// `,
//       after:`

// By addressing these additional questions, we can classify permutations into several types, each with its own counting method. Understanding these distinctions helps in correctly applying the appropriate formula for a given arrangement problem.
// `,
  
//     },
//     logic:{
  
//       title:`The Logic behind permutations`,
//       content:``,
//       before:`In combinatorics, we distinguish between several [types](!/combinatorics/permutations#types) of permutations based on different criteria, but they all share one key property: in every type, the order of arrangement matters ( and that is exactly what makes the difference between [permutations and variations](!/combinatorics#permutations_vs_combinations)).
// In all different scenarios, the mechanism for creating a permutation is similar, and it is important to understand it.
// When creating an arrangement, we must make two decisions:
// 1. Which item to pick?
// 2. Where to place it in the arrangement?

// Let us examine the simplest case. Imagine we need to arrange $n$ different items (all distinct) in a row, without repetition. We can break it down into steps:

//  **Step 1:** Choose an item for the first position. There are $n$ options.
//  **Step 2:** Choose an item for the second position. Now there are $n-1$ options.
//  **Step 3:** Choose an item for the third position. Now there are $n-2$ options.
//  … and so on, until
//  **Step** $n$: Only one item remains, so there is just 1 option.

// Each step reduces the number of choices (since repetition is not allowed). Because we must make all these choices in sequence, we apply the [multiplication principle](!/combinatorics#multi).

// Thus, to calculate the total number of permutations, we multiply:

// $n \\times (n-1) \\times (n-2) \\times \\dots \\times 1,$

// which is the definition of a factorial.

// For $n$ distinct objects, the number of permutations is:
// @academic[example:&nbsp\t\t\t\t\t\t$n! = n \\times (n−1) \\times (n−2) \\times \\dots \\times 2 \\times 1.$]@
// **To summarize:**

// * We start with $n$ options.
// * Each choice reduces the number of remaining options by one.
// * We multiply the number of choices at each step.

// This gives us $n!$ total permutations.

// Here is an example of simple permutation: creating 3 letter string.

// `,
//       after:``,
//       between:`You can see how the principle explained before is applied here.
//       First, one of 3 letters is picked and for each scenario there are 2 different choices to select the second letter.Once the choice is made, only one letter left.     
      
//       The result is:
//       @academic[example:&nbsp\t\t\t\t\t\t$3\\times 2 \\times 1 = 6 (n!)$]@
//       Where $n$ is total number of items.

//       `,
  
//     },

//   obj8: {
//     title: `Derangement`,
//     content: `
// A derangement is a permutation with an added constraint: no element appears in its original position. The other five permutation types vary the question of which arrangements to count — all items or a subset, with or without repetition, linear or circular. The derangement varies the constraint on the arrangement itself: same items, same order-matters property, same linear shape, with the extra requirement that every item must have moved.

// The classical motivation is the hat-check problem. $n$ guests check $n$ hats, and the attendant returns them in a random order. In how many of those orderings does no guest receive their own hat? Each such ordering is a derangement of the $n$ hats.

// ## Notation

// Two notations are in common use:

// • $!n$ — the subfactorial, the modern standard. The exclamation precedes the operand, mirroring the factorial in reverse.
// • $D_n$ — an alternative notation, common in older texts.

// The two are interchangeable.

// ## Formula

// The explicit formula is

// @academic[formula_callout:Derangement
// $$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$
// /combinatorics/formulas#derangement]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// It is derived by applying the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion) to the set of all permutations: start with $n!$ total, subtract those that fix at least one specific position, add back those that fix at least two, and continue with alternating signs through all $n$ positions. The full derivation lives on the inclusion–exclusion page; the permutations page uses the result.

// A recursive form is also useful for computation:

// @academic[formula_callout:Derangement Recurrence
// $$!n = (n-1) \\bigl( !(n-1) + !(n-2) \\bigr), \\quad !0 = 1, \\quad !1 = 0.$$
// /combinatorics/formulas#derangement_recurrence]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// The asymptotic behavior of the formula is striking. As $n \\to \\infty$,

// @academic[formula_callout:Derangement Asymptotic Limit
// $$\\lim_{n \\to \\infty} \\frac{!n}{n!} = \\frac{1}{e} \\approx 0.367879.$$
// /combinatorics/formulas#derangement_asymptotic_limit]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// The proportion of permutations that are derangements approaches a fixed limit rather than vanishing or filling the space — for any sufficiently large $n$, roughly $36.8\\%$ of all permutations of $n$ items are derangements.

// ## Small Values

// The first few subfactorials:

// • $!1 = 0$ — with one item, the only permutation leaves it in place
// • $!2 = 1$ — the swap
// • $!3 = 2$
// • $!4 = 9$
// • $!5 = 44$
// • $!6 = 265$

// ## Example

// In the hat-check problem with 4 guests, the number of orderings in which no guest receives their own hat is

// $$!4 = 4! \\sum_{k=0}^{4} \\frac{(-1)^k}{k!} = 24 \\left(1 - 1 + \\tfrac{1}{2} - \\tfrac{1}{6} + \\tfrac{1}{24}\\right) = 9.$$

// Out of the $4! = 24$ possible orderings of the four hats, exactly 9 satisfy the no-fixed-point condition.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
  
//   }




// const introContent = {
//   id: "intro",
//   title: "Permutations: Understanding Ordered Arrangements",
//   content: `Permutations are arrangements where **order matters**. As we discussed on the [main combinatorics page](!/combinatorics), this is what distinguishes permutations from [combinations](!/combinatorics/combinations).

// On this page, we'll explore four key permutation scenarios: [Full Permutation](!/combinatorics/permutations#full) (arranging all n distinct elements), [Permutation with Repetition](!/combinatorics/permutations#with) (arrangements where certain elements can repeat), [Permutation without Repetition](!/combinatorics/permutations#without) (selecting and arranging r elements from n options), and [Circular Permutation](!/combinatorics/permutations#circular) (arrangements around a circle where rotations are identical).

// Each scenario has specific formulas and real-world applications. Ready to dive into the details, or want to compare with [combinations](!/combinatorics/combinations) where order doesn't matter?

// Mastering these permutation types gives you the tools to solve ordering problems across mathematics, computer science, and everyday scenarios. The key is recognizing which type fits your specific situation.`
// }



// const faqQuestions = {
//   obj1: {
//     question: "What is a permutation?",
//     answer: "A permutation is an ordered arrangement of items where sequence matters. Different orderings of the same items count as distinct permutations. This contrasts with combinations, which count unordered selections."
//   },
//   obj2: {
//     question: "What is the formula for permutations?",
//     answer: "For arranging all n distinct items the count is n!. For arranging r items chosen from n distinct items it is P(n,r) = n!/(n-r)!. For arrangements with repetition allowed across r positions it is n^r, and for arrangements with identical items it uses the multinomial coefficient n!/(n_1!·n_2!·...·n_k!)."
//   },
//   obj3: {
//     question: "What is the difference between a permutation and a combination?",
//     answer: "Permutations count ordered arrangements: ABC and BCA are different. Combinations count unordered selections: ABC and BCA are the same. The structural question 'does order matter' determines which family applies."
//   },
//   obj4: {
//     question: "What is a circular permutation?",
//     answer: "A circular permutation arranges n distinct items around a circle, with rotations counted as identical. Fixing one item to break the rotational symmetry reduces the count to (n-1)! arrangements."
//   },
//   obj5: {
//     question: "What is a derangement?",
//     answer: "A derangement is a permutation in which no element appears in its original position. The count is denoted !n or D_n, given by !n = n!·sum from k=0 to n of (-1)^k/k!. As n grows, the proportion of permutations that are derangements approaches 1/e ≈ 0.368."
//   }
// }



// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Permutations",
//     "description": "Permutations in combinatorics: full, partial, with repetition, with identical items, circular, and derangements. Formulas, notation, and worked examples.",
//     "url": "https://www.learnmathclass.com/combinatorics/permutations",
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
//       "name": "Permutations"
//     },
//     "teaches": [
//       "Logic behind permutations and the multiplication principle",
//       "Full permutations and the factorial formula n!",
//       "Permutations with identical items via the multinomial coefficient",
//       "Partial permutations with and without repetition",
//       "Circular permutations and rotational equivalence",
//       "Derangements and the subfactorial formula"
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
//         "name": "Permutations",
//         "item": "https://www.learnmathclass.com/combinatorics/permutations"
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

//    return {
//   props:{
//     seoData: {
//       title: "Permutations: Types, Formulas, Examples | Learn Math Class",
//       description: "Permutations in combinatorics: full, partial, with repetition, with identical items, circular, and derangements. Formulas, notation, and worked examples.",
//       keywords: keyWords.join(", "),
//       url: "/combinatorics/permutations",
//       name: "Permutations"
//     },
//     sectionsContent,
//     introContent,
//     permutationsTable,
//     permutationsDiagram,
//     fullPermutationTable,
//     identicalTable,
//     permutationsScenariosTableData,
//     partialWithoutTable,
//     permutationWithRepetitionTable,
//     circularTable,
//     faqQuestions,
//     schemas
//   }
// }
//   }
  
// export default function PermutationsPage({seoData, sectionsContent, introContent, permutationsDiagram, fullPermutationTable,
//   identicalTable, permutationsTable, permutationsScenariosTableData, partialWithoutTable,
//   permutationWithRepetitionTable, circularTable, faqQuestions, schemas}) {
  
//   const permutationsSections=[
//     {
//         id:'logic',
//         title:sectionsContent.logic.title,
//         link:'',
//         content:[
//           sectionsContent.logic.before,
//           scenariosData["Permutations of ABC: STEP-by-Step"].svg,
//           sectionsContent.logic.between,
//           scenariosData["Permutations (Full)"].svg,
         
          
//         ]
//     },
//    {
//         id:'types',
//         title:sectionsContent.types.title,
//         link:'',
//         content:[
//           sectionsContent.types.before,
//           <div key={11} style={{width:'90%',margin:'auto'}}>
//           <GenericTable
//                 key={1}
//                 tableData={permutationsScenariosTableData} theme='lightBlue'
//                 cellFontSize={'14px'}
//                 headerFontSize={'16px'}
//                 />
//                 </div>,
//                 sectionsContent.types.after,
//         ]
//     },
//     {
//         id:'full',
//         title:sectionsContent.full.title,
//         link:'',
//         content:[
//           // <div style={{margin:'auto',width:'80%'}} dangerouslySetInnerHTML={{ __html: permutationsTable }} key="table" />
//           sectionsContent.full.before,
//         <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: fullPermutationTable }} key="table" />,
//       sectionsContent.full.between,
//       sectionsContent.full.after,
      
    
      
      
//         ]
//     },
//     {
//         id:'identical',
//         title:sectionsContent.identical.title,
//         link:'',
//         content:[
//           sectionsContent.identical.before,
//           <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: identicalTable }} key="table" />,
//           sectionsContent.identical.between,
//           sectionsContent.identical.after,
//            <div key={12} style={{
//                       textAlign: 'center',
//                       transform: 'scale(0.85)',
//                       transformOrigin: 'center',
//                       marginTop:'-30px'
//                     }} dangerouslySetInnerHTML={{ 
//                       __html: scenariosData["Permutations of 3 with 2 Identical Items"].svg 
//                     }} />,
//            <div key={13} style={{
//                       textAlign: 'center',
//                       transform: 'scale(0.85)',
//                       transformOrigin: 'center',
//                       marginTop:'-30px'
//                     }} dangerouslySetInnerHTML={{ 
//                       __html: scenariosData["Permutations of 3 with 3 Identical Items"].svg 
//                     }} />,
                    
//           scenariosData["Permutations with Identical Items"].svg,
//         ]
//     },
//     {
//         id:'without',
//         title:sectionsContent.without.title,
//         link:'',
//         content:[
//           sectionsContent.without.before,
//           <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: partialWithoutTable }} key="table" />,
//           sectionsContent.without.between,
//           sectionsContent.without.after,
//           scenariosData["Partial Permutations without Repetition"].svg,
//           scenariosData["Permutation without Repetition (Partial)"].svg,

//         ]
//     },
//       {
//         id:'notation',
//         title:sectionsContent.notation.title,
//         link:``,
//         content:[
//           <NotationSection
//             key={'notation'}
//             title={sectionsContent.notation.title}
//             lead={sectionsContent.notation.lead}
//             inherited={sectionsContent.notation.inherited}
//             entries={sectionsContent.notation.entries}
//             symbolsHref={sectionsContent.notation.symbolsHref}
//             symbolsLabel={sectionsContent.notation.symbolsLabel}
//             parentHref={sectionsContent.notation.parentHref}
//             parentLabel={sectionsContent.notation.parentLabel}
//             theme={'navy'}
//           />,
//         ]
//     },
//       {
//     id:'with',
//     title:sectionsContent.with.title,
//     link:'',
//     content:[
//       sectionsContent.with.before,
//       <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html:permutationWithRepetitionTable }} key="table" />,
//       sectionsContent.with.between,
//       sectionsContent.with.after,
//       scenariosData["Permutations with Repetition"].svg,
     
      

//     ]
// },
//     {
//       id:'circular',
//       title:sectionsContent.circular.title,
//       link:'',
//       content:[
//         sectionsContent.circular.before,
//         <div style={{margin:'auto',width:'50%'}} dangerouslySetInnerHTML={{ __html: circularTable }} key="table" />,
//         sectionsContent.circular.between,
//         sectionsContent.circular.after,
//         scenariosData["Circular Permutation"].svg,
//         scenariosData["Circular Permutation 2"].svg,
//         scenariosData["Circular Permutation 3"].svg

//       ]
//   },

//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
// //   {
// //     id:'',
// //     title:'',
// //     link:'',
// //     content:''
// // }
// ]




//   return (
//     <>
// <Head>
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
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Permutations</h1>   
//     <br/> 
//     <SectionTableOfContents sections={permutationsSections}
//      showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "siblings"
//          secondaryNavTitle="More in this Section"
//     />
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
//     <Sections sections={permutationsSections}/>
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
import { scenariosData } from '@/app/api/db/diagrams/combinatorics/scenarios'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import fullPermutationDiagrams from '@/app/components/combinatorics/new-visualizers/scenes/fullPermutationDiagrams'
import renderFixedPoints from '@/app/utils/illustrations/combinatorics/permutations/fixedPoints'
import GenericTable from '@/app/components/generic-table/GenericTable'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import { tableHeaders } from '@/app/styles/theme'



export async function getStaticProps(){
const keyWords = [
  'permutations',
  'permutation formula',
  'types of permutations',
  'circular permutation',
  'permutation with repetition',
  'permutation without repetition',
  'partial permutation',
  'derangement formula',
  'permutation examples',
  'n factorial permutations',
  'P(n,r) formula',
  'permutation with identical items',
  'ordered arrangements',
  'combinatorics permutations'
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
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center; color: #27ae60; font-size: 18px; font-weight: bold;">✗</td>
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
    
//   const sectionsContent={

//     full:{
//       title:`Permutation (Full)`,
//       content:``,
//       before:`**Full Permutation** applies when you arrange all distinct items in a specific order with no repetitions allowed. 
      
//       `,
//       after:`
//       The intuition and logic we use for this kind of permutation has been explained pretty well in previous [section](!/combinatorics/permutations#logic) and it works basically for all [types](!/combinatorics/permutations#types) of permutations.
//       Just in case of full permutations (unlike in other [types](!/combinatorics/permutations#types)) no further modifications needed and the calculation is simple. 
//       \n**Notation**:
// In combinatorics, we use specific notation to represent different types of permutations. 
// For arranging $r$ objects selected from $n$ distinct objects, the standard notation is $P(n,r)$ or $_nP_r$.
// When applied to full permutations, apparently $r=n$ (because we use all the items ), and the notation turns into :

// \t\t\t\t\t\t$P(n,n)$\n\n\t\t\t\t\t\tor $_nP_n$\n\n\t\t\t\t\t\t or simply $P(n)$.

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// **Formula**:
//       The number of possible results is calculated by the formula :      
// @academic[example:&nbsp \t\t\t\t\t\t$P(n)=n!$]@
//  Product of all integers from $n$ down to $1$.
//        Where $n$ is the number of items to arrange. 

//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=1) →@

//       `,
//       between:`
//      **Full Permutation — Examples**:
// Arranging all books on a shelf, deciding the lineup of all players in a team, organizing all photos in an album, setting the order of speakers in a presentation, ordering all tasks in a workflow, ranking all competitors in a contest, scheduling all meetings in a day, sorting all files in a folder.

// `,
// formula:`@academic[example:&nbsp \t\t\t\t\t\t$P(n)=n!$]@`
  
  
//     },
//     identical:{
//       title:`Permutation with Identical Items`,
//       content:``,
//       before:`**Permutation with Identical Items** applies when arranging all items where some identical elements appear multiple times in your collection. Classic examples include arranging all letters in words like "MISSISSIPPI" or organizing all colored balls when you have multiple balls of the same color.
      
//       `,
//       after:`
//       **Notation:**
      
// \t\t\t\t\t\t $\\binom{n}{n_1, n_2, \\ldots, n_k}$\n\n\t\t\t\t or $P(n; n_1, n_2, n_3, \\ldots, n_k)$\n\n\t\t\t\t or $P_n^{n_1, n_2, n_3, \\ldots, n_k}$

//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

//       **Formula**:

//        To calculate the number of possible arrangements 
//       @academic[example:&nbsp\t\t\t\t\t\t$\\binom{n}{n_{1},n_{2},\\dots,n_{k}} = \\frac{n!}{n_{1}!n_{2}!\\dots n_{k}!}$]@ 
//       Where multinomial coefficient: counts distinct arrangements of $n$ items split into groups of sizes $n_{1},n_{2},\\dots,n_{k}$.
      
//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=2) →@
      
      
      
//        `,
//       between:`
//       **Permutation with Identical Items — Examples**:
// Rearranging letters in the word “BALLOON,” organizing colored balls where some colors repeat, sequencing identical files and unique ones in storage, arranging identical chairs and distinct tables in a layout, ordering repeated ingredients in a recipe list.`,
  
//     },
  
//    without:{
  
//       title:`Partial Permutation without Repetition`,
//       content:``,
//       before:`**Partial Permutation without Repetition** applies when selecting and arranging only some items from a larger collection, with all items being distinct. Classic examples include choosing and ordering contestants from a group or selecting and arranging books from a library shelf.
      
//       `,
//       after:`
//       **Notation**:

// Most common:
// \n\t\t\t\t\t\t$P(n,r)$

//  Alternative notations:
// \n\t\t\t\t\t\t$ {}^nP_r$

// \t\t\t\t\t\t$A_n^r$

// \t\t\t\t\t\t$\\text{nPr}$

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@
     
//  **Formula**:      
//       The number of arrangements for Partial Permutation without Repetition is 
//        @academic[example:&nbsp\t\t\t\t\t\t$P(n,r) = \\frac{n!}{(n-r)!}$]@ 
//       Where $n!$ counts all arrangements, dividing by $(n-r)!$ removes the unused positions.
      
//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=3) →@
      
//       `,
//       between:`
//       **Partial Permutation (without repetition) — Examples**:
// Selecting and ordering finalists from a group of contestants, arranging a subset of books on a display, picking and sequencing players for a relay team, choosing and ordering questions for an interview, organizing a limited set of tasks for a project phase.
//       `,
  
//     },
//     circular:{
//       title:`Circular Permutation`,
//       content:``,
//       before:`**Circular Permutation** applies when arranging items around a circle where rotations are considered identical arrangements. Classic examples include seating people around a round table or arranging objects in a circular pattern.
      
//       `,
//       after:`
//       **Notation**:
// Circular permutation
// \n\t\t\t\t\t\t$P_{\\text{circ}}(n)$

// Alternative notations
// \n\t\t\t\t\t\t$C_n$
// \n\t\t\t\t\t\t$P_{\\text{cyclic}}(n)$
// \n\t\t\t\t\t\t$\\frac{n!}{n}$

//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@
      
//       **Formula**:

//       The total number of possible circular arrangements is
//       @academic[example:&nbsp\t\t\t\t\t\t$P_{\\text{circ}}(n) = (n-1)!$]@ 
//       If $n$ is a total number of items to arrange then fixing one item reduces circular arrangements to $(n-1)!$ linear ones.
      
//        @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=5) →@
    
       
//       `,
//       between:`
//       **Circular Permutation — Examples**:
// Arranging guests around a round table, seating participants in a circular panel, ordering beads in a circular necklace, organizing tasks in a repeating cycle, setting positions for players in a circular game arrangement.`,
  
//     },


//     with:{
  
//       title:`Permutation with Repetition`,
//       content:``,
//       before:`**Permutation with Repetition** applies when arranging items where you can reuse the same element multiple times during the arrangement process. Classic examples include creating PIN codes where digits can repeat, or forming passwords where letters can be used multiple times.
      
//       `,
//       after:`
//       **Notation**:

// Permutation with repetition (positions)

// \t\t\t\t\t\t$P_{\\text{rep}}(n,r)$

// Alternative notations:
// \n\t\t\t\t\t\t$\\overline{P}(n,r)$
// \n\t\t\t\t\t\t$P^{(r)}(n)$
// \n\t\t\t\t\t\t$ {}^nP^{(r)}_r$

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

// **Formula**:
//       Total number of permutations with repetitions possible and all items used is:
//      @academic[example:&nbsp\t\t\t\t\t\t$P_{\\text{rep}}(n,r)=n^{r}$]@
//      Where each of the $r$ positions can be filled in $n$ ways.


//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=4) →@


// `,
// between:`
// **Permutation with Repetition — Examples**:
// Generating PIN codes from digits, creating letter sequences for passwords, arranging beads in a bracelet where colors can repeat, composing license plate numbers, assigning seats with multiple people allowed in the same category.
// `,
  
//     },
//     types:{
  
//       title:`Types of Permutations`,
//       content:``,
//       before:`Although in all types of permutations the order of arrangement matters, the key differences between them arise from other considerations: Can items be repeated? Are some items identical? Is the arrangement linear or circular? The table below summarizes these distinctions, showing how different scenarios lead to different counting formulas.

// `,
//       after:`

// By addressing these additional questions, we can classify permutations into several types, each with its own counting method. Understanding these distinctions helps in correctly applying the appropriate formula for a given arrangement problem.
// `,
  
//     },
//     logic:{
  
//       title:`The Logic behind permutations`,
//       content:``,
//       before:`In combinatorics, we distinguish between several [types](!/combinatorics/permutations#types) of permutations based on different criteria, but they all share one key property: in every type, the order of arrangement matters ( and that is exactly what makes the difference between [permutations and variations](!/combinatorics#permutations_vs_combinations)).
// In all different scenarios, the mechanism for creating a permutation is similar, and it is important to understand it.
// When creating an arrangement, we must make two decisions:
// 1. Which item to pick?
// 2. Where to place it in the arrangement?

// Let us examine the simplest case. Imagine we need to arrange $n$ different items (all distinct) in a row, without repetition. We can break it down into steps:

//  **Step 1:** Choose an item for the first position. There are $n$ options.
//  **Step 2:** Choose an item for the second position. Now there are $n-1$ options.
//  **Step 3:** Choose an item for the third position. Now there are $n-2$ options.
//  … and so on, until
//  **Step** $n$: Only one item remains, so there is just 1 option.

// Each step reduces the number of choices (since repetition is not allowed). Because we must make all these choices in sequence, we apply the [multiplication principle](!/combinatorics#multi).

// Thus, to calculate the total number of permutations, we multiply:

// $n \\times (n-1) \\times (n-2) \\times \\dots \\times 1,$

// which is the definition of a factorial.

// For $n$ distinct objects, the number of permutations is:
// @academic[example:&nbsp\t\t\t\t\t\t$n! = n \\times (n−1) \\times (n−2) \\times \\dots \\times 2 \\times 1.$]@
// **To summarize:**

// * We start with $n$ options.
// * Each choice reduces the number of remaining options by one.
// * We multiply the number of choices at each step.

// This gives us $n!$ total permutations.

// Here is an example of simple permutation: creating 3 letter string.

// `,
//       after:``,
//       between:`You can see how the principle explained before is applied here.
//       First, one of 3 letters is picked and for each scenario there are 2 different choices to select the second letter.Once the choice is made, only one letter left.     
      
//       The result is:
//       @academic[example:&nbsp\t\t\t\t\t\t$3\\times 2 \\times 1 = 6 (n!)$]@
//       Where $n$ is total number of items.

//       `,
  
//     },
//     // URL: /combinatorics/permutations
// // New section — slot after #circular, anchor id: 'derangement'

//   obj8: {
//     title: `Derangement`,
//     content: `
// A derangement is a permutation with an added constraint: no element appears in its original position. The other five permutation types vary the question of which arrangements to count — all items or a subset, with or without repetition, linear or circular. The derangement varies the constraint on the arrangement itself: same items, same order-matters property, same linear shape, with the extra requirement that every item must have moved.

// The classical motivation is the hat-check problem. $n$ guests check $n$ hats, and the attendant returns them in a random order. In how many of those orderings does no guest receive their own hat? Each such ordering is a derangement of the $n$ hats.

// ## Notation

// Two notations are in common use:

// • $!n$ — the subfactorial, the modern standard. The exclamation precedes the operand, mirroring the factorial in reverse.
// • $D_n$ — an alternative notation, common in older texts.

// The two are interchangeable.

// ## Formula

// The explicit formula is

// $$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$

// It is derived by applying the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion) to the set of all permutations: start with $n!$ total, subtract those that fix at least one specific position, add back those that fix at least two, and continue with alternating signs through all $n$ positions. The full derivation lives on the inclusion–exclusion page; the permutations page uses the result.

// A recursive form is also useful for computation:

// $$!n = (n-1)\\bigl(!(n-1) + !(n-2)\\bigr).$$

// The asymptotic behavior of the formula is striking. As $n \\to \\infty$,

// $$\\frac{!n}{n!} \\to \\frac{1}{e} \\approx 0.368.$$

// The proportion of permutations that are derangements approaches a fixed limit rather than vanishing or filling the space — for any sufficiently large $n$, roughly $36.8\\%$ of all permutations of $n$ items are derangements.

// ## Small Values

// The first few subfactorials:

// • $!1 = 0$ — with one item, the only permutation leaves it in place
// • $!2 = 1$ — the swap
// • $!3 = 2$
// • $!4 = 9$
// • $!5 = 44$
// • $!6 = 265$

// ## Example

// In the hat-check problem with 4 guests, the number of orderings in which no guest receives their own hat is

// $$!4 = 4! \\sum_{k=0}^{4} \\frac{(-1)^k}{k!} = 24 \\left(1 - 1 + \\tfrac{1}{2} - \\tfrac{1}{6} + \\tfrac{1}{24}\\right) = 9.$$

// Out of the $4! = 24$ possible orderings of the four hats, exactly 9 satisfy the no-fixed-point condition.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
  
//   }


// formulas-optimized: v1 | 2026-06-11 | 3 callouts (obj8 ×3); 6 skipped (inside @academic[example:...]@)
// Skipped: Factorial (logic), Full Permutation (full), Permutation with Identical Items (identical),
//          Partial Permutation (without), Permutation with Repetition (with), Circular Permutation (circular)
// Concept introduction (section "logic") — template A, definition last.
// Running instance: arranging A, B, C. The section's two scenario diagrams and
// two example boxes are carried in unchanged; its old text stays in
// sectionsContent.logic, unused.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciGrowthTable = ciTableOpen(['items n', 'choices, position by position', 'arrangements']) +
  ciRow(['1', '1', '1']) +
  ciRow(['2', '2 × 1', '2'], { shade: true }) +
  ciRow(['3', '3 × 2 × 1', '6'], { color: '#2563EB', cols: [2] }) +
  ciRow(['4', '4 × 3 × 2 × 1', '24'], { shade: true }) +
  ciRow(['5', '5 × 4 × 3 × 2 × 1', '120'], { last: true }) +
  '</tbody></table>'

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

\t\t\t\t\t\t$P(n,n)$\n\n\t\t\t\t\t\tor $_nP_n$\n\n\t\t\t\t\t\t or simply $P(n)$.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

**Formula**:
      The number of possible results is calculated by the formula :
@academic[formula_callout:Full Permutation
$$P(n)=n!$$
/combinatorics/formulas#full_permutation]@
 Product of all integers from $n$ down to $1$.
       Where $n$ is the number of items to arrange. 

       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=1) →@

@academic[fact,aside:true,width:35%:$\\pi$ and $e$ estimate $10!$ within 1%
Stirling's formula $n! \\approx \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$ gives about $3{,}598{,}696$ for $n = 10$, less than $1\\%$ below $10! = 3{,}628{,}800$. Its relative error is close to $\\frac{1}{12n}$, so it keeps shrinking as $n$ grows.]@

The factorial soon outgrows every everyday quantity. Each new item multiplies the count by a larger number than the item before it did, so $n!$ eventually overtakes $2^n$, $10^n$ and any other fixed number raised to the power $n$. Already $13! = 6{,}227{,}020{,}800$ is more than six billion, and $20!$ has $19$ digits. Most pocket calculators give up at $70!$, the first factorial above $10^{100}$, because they show only two digits for the power of ten.

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
      
\t\t\t\t\t\t $\\binom{n}{n_1, n_2, \\ldots, n_k}$\n\n\t\t\t\t or $P(n; n_1, n_2, n_3, \\ldots, n_k)$\n\n\t\t\t\t or $P_n^{n_1, n_2, n_3, \\ldots, n_k}$

      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

      **Formula**:

       To calculate the number of possible arrangements
      @academic[formula_callout:Permutation with Identical Items
$$\\binom{n}{n_{1},n_{2},\\dots,n_{k}} = \\frac{n!}{n_{1}!n_{2}!\\dots n_{k}!}$$
/combinatorics/formulas#permutation_with_identical_items]@
      The multinomial coefficient counts distinct arrangements of $n$ items split into groups of sizes $n_{1},n_{2},\\dots,n_{k}$.
      
       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=2) →@

@academic[pitfall,aside:true,width:35%:Missing a repeated letter
Computing $\\frac{11!}{4! \\cdot 4!} = 69{,}300$ for MISSISSIPPI divides out the Is and the Ss but not the two Ps, so every word is counted twice. With $2!$ in the denominator, the count is $34{,}650$.
[Read more](!#pitfalls)]@

MISSISSIPPI is the standard case for this formula. Its $11$ letters fall into four groups: one M, four Is, four Ss and two Ps, so $n = 11$ and the group sizes are $1, 4, 4$ and $2$. Swapping two letters of the same group gives back the same word, and the denominator removes these swaps group by group. A letter that appears only once forms a group of size one and contributes $1! = 1$.
      
      
      
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
      **Notation**:

Most common:
\n\t\t\t\t\t\t$P(n,r)$

 Alternative notations:
\n\t\t\t\t\t\t$ {}^nP_r$

\t\t\t\t\t\t$A_n^r$

\t\t\t\t\t\t$\\text{nPr}$

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@
     
 **Formula**:      
      The number of arrangements for Partial Permutation without Repetition is
       @academic[formula_callout:Partial Permutation without Repetition
$$P(n,r) = \\frac{n!}{(n-r)!}$$
/combinatorics/formulas#partial_permutation]@
      Where $n!$ counts all arrangements, dividing by $(n-r)!$ removes the unused positions.
      
       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=3) →@

@academic[pitfall,aside:true,width:35%:Dividing by r! when order matters
Using $\\binom{10}{3} = 120$ for gold, silver and bronze among 10 runners counts only which three runners win a medal. Each such trio can receive the three medals in $3! = 6$ orders, so the count is $P(10, 3) = 720$.
[Read more](!#pitfalls)]@

A race with 10 runners and medals for the first three places is the typical case: $n = 10$ runners and $r = 3$ places. The formula keeps only the first $r$ factors of $10!$, one for each place to fill: $10$ choices for the gold, $9$ for the silver and $8$ for the bronze. The remaining factors $7 \\cdot 6 \\cdots 1$ are exactly the $(n - r)! = 7!$ that the division removes.
      
      `,
      between:`
      **Partial Permutation (without repetition) — Examples**:
Selecting and ordering finalists from a group of contestants, arranging a subset of books on a display, picking and sequencing players for a relay team, choosing and ordering questions for an interview, organizing a limited set of tasks for a project phase.
      `,

    },

    notation: {
      title: `Permutation Notation`,
      lead: `Three marks carry every count on this page: the exclamation that multiplies downward, the two-letter family that orders selections, and the same exclamation moved out front to count the restless. Each scenario section keeps its own **Notation** block for the variant spellings.`,
      inherited: `The choose-family marks $\\binom{n}{r}$ and $C(n, r)$ belong to the [binomial coefficient](!/combinatorics/binomial-coefficient); the set-size bars behind the counting arguments to [cardinality](!/set-theory/cardinality#notation).`,
      entries: [
        {
          id: 'factorial',
          tex: `$n!$`,
          read: `n factorial`,
          means: `The postfix count of complete rearrangements: $n! = n \\times (n-1) \\times \\cdots \\times 1$, introduced in **The Logic behind permutations** above. The convention $0! = 1$ is load-bearing — it keeps every counting formula honest at the edges.`,
          cases: `The mark binds tight — $2n!$ means $2 \\cdot (n!)$, and $(2n)!$ needs its brackets; stacked marks are different animals: $(n!)!$ iterates, while $n!!$ skips every second factor (the double factorial), not a repeat.`,
          confusedWith: `Punctuation. A sentence ending on $5$ with an exclamation and the operator in $5!$ share a glyph — and in programming @[!]@ negates; position and context carry the meaning.`,
        },
        {
          id: 'p-family',
          tex: `$P(n, r)$ · $_nP_r$`,
          read: `P n r; n permute r`,
          means: `The arrangement-count family: $P(n, r) = \\frac{n!}{(n - r)!}$ orders $r$ items chosen from $n$ — functional $P(n, r)$ in texts, subscripted $_nP_r$ on calculator keys, as the **Notation** blocks of **Permutation (Full)** and **Partial Permutation without Repetition** above list.`,
          cases: `$A_n^r$ — the Arrangements letter of French and Russian textbooks, same count in a different alphabet; the full case collapses the second argument: $P(n, n) = P(n) = n!$.`,
          confusedWith: `The choose family. $P(n, r)$ counts ordered selections, $\\binom{n}{r}$ unordered ones — they differ by exactly the factor $r!$, and the [binomial coefficient](!/combinatorics/binomial-coefficient) owns the other side of that ledger.`,
        },
        {
          id: 'subfactorial',
          tex: `$!n$ · $D_n$`,
          read: `subfactorial n; derangements of n`,
          means: `The factorial's mirror image: $!n$ counts permutations that leave nothing in place — the prefix position is the entire distinction, as **Derangement** below explains. $D_n$ is the older spelling, still common.`,
          cases: `The two interchange freely — $!5 = D_5 = 44$; the prefix form reads badly mid-sentence, which is precisely what keeps the subscripted $D_n$ alive in running text.`,
          confusedWith: `$n!$ read backwards. $!4 = 9$ while $4! = 24$ — position flips the meaning entirely, and a hasty transcription trades all arrangements for only the restless ones.`,
        },
      ],
      symbolsHref: `/math-symbols/combinatorics`,
      symbolsLabel: `All combinatorics symbols`,
      parentHref: `/combinatorics`,
      parentLabel: `Combinatorics`,
    },

    circular:{
      title:`Circular Permutation`,
      content:``,
      before:`**Circular Permutation** applies when arranging items around a circle where rotations are considered identical arrangements. Classic examples include seating people around a round table or arranging objects in a circular pattern.
      
      `,
      after:`
      **Notation**:
Circular permutation
\n\t\t\t\t\t\t$P_{\\text{circ}}(n)$

Alternative notations
\n\t\t\t\t\t\t$P_{\\text{cyclic}}(n)$
\n\t\t\t\t\t\t$\\frac{n!}{n}$

       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@
      
      **Formula**:

      The total number of possible circular arrangements is
      @academic[formula_callout:Circular Permutation
$$P_{\\text{circ}}(n) = (n-1)!$$
/combinatorics/formulas#circular_permutation]@
      If $n$ is a total number of items to arrange then fixing one item reduces circular arrangements to $(n-1)!$ linear ones.
      
       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=5) →@

@academic[pitfall,aside:true,width:35%:Using n! for a round table
Counting $5! = 120$ seatings for 5 people at a round table counts each seating 5 times, once for every turn of the table. Dividing by 5 gives $4! = 24$.
[Read more](!#pitfalls)]@

Five people at a round table show how this works. Fix one of them in a seat; every seating can then be read from that seat clockwise, and the other four people fill the remaining seats in any order. Turning the whole table moves everyone at once but leaves each person with the same neighbours on the left and on the right, which is why a turn does not create a new arrangement.
    
       
      `,
      between:`
      **Circular Permutation — Examples**:
Arranging guests around a round table, seating participants in a circular panel, ordering beads on a ring that is never flipped over, organizing tasks in a repeating cycle, setting positions for players in a circular game arrangement.`,
  
    },


    with:{
  
      title:`Permutation with Repetition`,
      content:``,
      before:`**Permutation with Repetition** applies when arranging items where you can reuse the same element multiple times during the arrangement process. Classic examples include creating PIN codes where digits can repeat, or forming passwords where letters can be used multiple times.
      
      `,
      after:`
      **Notation**:

Permutation with repetition (positions)

\t\t\t\t\t\t$P_{\\text{rep}}(n,r)$

Alternative notations:
\n\t\t\t\t\t\t$\\overline{P}(n,r)$
\n\t\t\t\t\t\t$P^{(r)}(n)$
\n\t\t\t\t\t\t$ {}^nP^{(r)}_r$

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more about combinatorial notations and symbols here](!/math-symbols/combinatorics) →@

**Formula**:
      Total number of permutations with repetition allowed, filling $r$ positions from $n$ items, is:
     @academic[formula_callout:Permutation with Repetition
$$P_{\\text{rep}}(n,r)=n^{r}$$
/combinatorics/formulas#permutation_with_repetition]@
     Where each of the $r$ positions can be filled in $n$ ways.


 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use combinatorics calculator](!/combinatorics/calculator?scenario=4) →@

@academic[pitfall,aside:true,width:35%:Swapping the base and the exponent
Writing $4^{10} = 1{,}048{,}576$ for a 4-digit PIN treats it as 10 positions with 4 options each. Four positions with 10 digits each give $10^4 = 10{,}000$ codes.
[Read more](!#pitfalls)]@

A 4-digit PIN is the standard example. Each of the $r = 4$ positions can hold any of the $n = 10$ digits, whatever was entered before, so the same digit may appear in several positions, as in 0707 or 1111. The count is built position by position, exactly as for a full permutation, except that the number of options never shrinks from one position to the next.


`,
between:`
**Permutation with Repetition — Examples**:
Generating PIN codes from digits, creating letter sequences for passwords, setting the dials of a combination lock, composing license plate numbers, assigning seats with multiple people allowed in the same category.

@academic[fact,aside:true,width:35%:A combination lock counts permutations
A lock set to 4-7-2 does not open at 2-7-4, and two dials may show the same digit, so its codes are ordered and may repeat: three dials give $10^3 = 1000$ codes. A true combination of three different digits would leave only $\\binom{10}{3} = 120$.]@

The combination lock in this list is a small case of the same count. A padlock with three dials, each showing the digits 0 to 9, has one position for every dial and one option for every digit, so it fits the formula below with $n = 10$ and $r = 3$. Nothing stops two dials, or all three, from showing the same digit, and a code such as 0-0-0 is as valid as any other.
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
      before:`In combinatorics, we distinguish between several [types](!/combinatorics/permutations#types) of permutations based on different criteria, but they all share one key property: in every type, the order of arrangement matters ( and that is exactly what makes the difference between [permutations and combinations](!/combinatorics#permutations_vs_combinations)).
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
@academic[example:&nbsp\t\t\t\t\t\t$n! = n \\times (n−1) \\times (n−2) \\times \\dots \\times 2 \\times 1.$]@
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
      @academic[example:&nbsp\t\t\t\t\t\t$3\\times 2 \\times 1 = 6 (n!)$]@
      Where $n$ is total number of items.

      `,
  
    },

  obj8: {
    title: `Derangement`,
    content: `
A derangement is a permutation with an added constraint: no element appears in its original position. The other five permutation types vary the question of which arrangements to count — all items or a subset, with or without repetition, linear or circular. The derangement varies the constraint on the arrangement itself: same items, same order-matters property, same linear shape, with the extra requirement that every item must have moved.

The classical motivation is the hat-check problem. $n$ guests check $n$ hats, and the attendant returns them in a random order. In how many of those orderings does no guest receive their own hat? Each such ordering is a derangement of the $n$ hats.

## Notation

Two notations are in common use:

• $!n$ — the subfactorial, the modern standard. The exclamation precedes the operand, mirroring the factorial in reverse.
• $D_n$ — an alternative notation, common in older texts.

The two are interchangeable.

## Formula

The explicit formula is

@academic[formula_callout:Derangement
$$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$
/combinatorics/formulas#derangement]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

It is derived by applying the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion) to the set of all permutations: start with $n!$ total, subtract those that fix at least one specific position, add back those that fix at least two, and continue with alternating signs through all $n$ positions. The full derivation lives on the inclusion–exclusion page; the permutations page uses the result.

A recursive form is also useful for computation:

@academic[formula_callout:Derangement Recurrence
$$!n = (n-1) \\bigl( !(n-1) + !(n-2) \\bigr), \\quad !0 = 1, \\quad !1 = 0.$$
/combinatorics/formulas#derangement_recurrence]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

The asymptotic behavior of the formula is striking. As $n \\to \\infty$,

@academic[formula_callout:Derangement Asymptotic Limit
$$\\lim_{n \\to \\infty} \\frac{!n}{n!} = \\frac{1}{e} \\approx 0.367879.$$
/combinatorics/formulas#derangement_asymptotic_limit]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

The proportion of permutations that are derangements approaches a fixed limit rather than vanishing or filling the space — for any sufficiently large $n$, roughly $36.8\\%$ of all permutations of $n$ items are derangements.

## Small Values

The first few subfactorials:

• $!1 = 0$ — with one item, the only permutation leaves it in place
• $!2 = 1$ — the swap
• $!3 = 2$
• $!4 = 9$
• $!5 = 44$
• $!6 = 265$

@academic[example:Example

In the hat-check problem with 4 guests, the number of orderings in which no guest receives their own hat is

$$!4 = 4! \\sum_{k=0}^{4} \\frac{(-1)^k}{k!} = 24 \\left(1 - 1 + \\tfrac{1}{2} - \\tfrac{1}{6} + \\tfrac{1}{24}\\right) = 9.$$

Out of the $4! = 24$ possible orderings of the four hats, exactly 9 satisfy the no-fixed-point condition.]@

@academic[pitfall,aside:true,width:35%:Subtracting only the single fixed points
Taking $24 - 4 \\cdot 3! = 0$ for the 4 hats removes every order that returns two or more hats several times. Adding back pairs and subtracting triples gives $24 - 24 + 12 - 4 + 1 = 9$.
[Read more](!#pitfalls)]@

Behind the five terms of the sum are the counts of orders with chosen hats fixed. Fixing the hat of one chosen guest leaves $3! = 6$ orders, and there are $4$ guests to choose. Fixing a chosen pair leaves $2! = 2$ orders for each of the $\\binom{4}{2} = 6$ pairs, a chosen three leaves $1$ order for each of the $4$ triples, and all four fixed is the single order that returns every hat. An order that returns two hats correctly is among the orders counted for each of those two guests.

The [factorial calculator](!/calculators/factorial-calculator) also computes the subfactorial $!n$, which counts derangements directly.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
  
  obj9: {
    title: `Common Pitfalls`,
    content: `
Five mistakes come up again and again when counting permutations. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Missing a repeated letter**

In a word with several repeated letters, the factorial of one group or of two groups goes into the denominator and another group is left out. Every arrangement is then counted once for each order of the letters in the missing group.

Wrong working: MISSISSIPPI has $11$ letters with four Is, four Ss and two Ps, and the count is given as $\\frac{11!}{4! \\cdot 4!} = \\frac{39{,}916{,}800}{576} = 69{,}300$.

Right working: every repeated group gets its factorial: $\\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = \\frac{39{,}916{,}800}{1152} = 34{,}650$.

Why it happens: the large groups catch the eye, and a group of two looks too small to matter. Yet a group of two halves the count.

How to check: list the letters with their counts before writing the formula, and make sure the counts add up to $n$: here $1 + 4 + 4 + 2 = 11$. Each count in that list must appear as a factorial in the denominator.

**Dividing by r! when order matters**

The places in the arrangement are different, but the count is done with the binomial coefficient $\\binom{n}{r}$, which treats the chosen items as a group with no order.

Wrong working: gold, silver and bronze among $10$ runners: $\\binom{10}{3} = 120$.

Right working: the medals are different, so the order of the three winners matters: $P(10, 3) = 10 \\cdot 9 \\cdot 8 = 720$. This is $120 \\cdot 3! = 720$: each group of three winners can receive the medals in $6$ orders.

Why it happens: "choose 3 of 10" sounds like a selection, and the binomial coefficient is the more familiar formula. The words gold, silver and bronze are what make the places different.

How to check: swap two of the winners and ask whether the result changes. If gold and silver swapped gives a different outcome, order matters and $P(n, r)$ is the count.

**Swapping the base and the exponent**

In a count with repetition, the number of positions is used as the base and the number of options as the exponent.

Wrong working: a 4-digit PIN from the digits 0 to 9 is counted as $4^{10} = 1{,}048{,}576$.

Right working: there are $4$ positions and each can hold any of $10$ digits, so the count is $10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10{,}000$.

Why it happens: $n^r$ is remembered as a pattern of two numbers, without the product of choices behind it.

How to check: write the count as a product of choices, one factor for each position. The number of factors is the exponent and each factor is the base. For a 4-digit PIN the codes 0000 to 9999 give exactly $10{,}000$.

**Using n! for a round table**

Seats around a round table are treated like places in a row, so the count is $n!$. A row has a first place; a round table does not, and turning the whole table gives the same seating.

Wrong working: $5$ people around a round table: $5! = 120$ seatings.

Right working: each seating appears $5$ times among the $120$ rows, once for each person who could sit in the first place of the row. So the count is $\\frac{5!}{5} = 4! = 24$. Equivalently, fix one person and arrange the other $4$: $4! = 24$.

Why it happens: the people are distinct and order matters, which is exactly the description of a full permutation. The extra condition that turns count as the same arrangement is easy to overlook.

How to check: take $n = 3$. Three people around a table have only $2$ seatings: the order clockwise is either A, B, C or A, C, B. The formula $(3 - 1)! = 2$ agrees, while $3! = 6$ does not.

**Subtracting only the single fixed points**

When counting derangements, the orders that return at least one hat are counted as $n \\cdot (n-1)!$ and subtracted once. Orders that return two or more hats are inside several of these counts, so they are subtracted more than once.

Wrong working: for $4$ guests, $4! - 4 \\cdot 3! = 24 - 24 = 0$ derangements.

Right working: continue the alternating sum: $24 - \\binom{4}{1} 3! + \\binom{4}{2} 2! - \\binom{4}{3} 1! + \\binom{4}{4} 0! = 24 - 24 + 12 - 4 + 1 = 9$.

Why it happens: "subtract the orders where someone gets their own hat" sounds like one subtraction, and $n \\cdot (n-1)!$ looks like the number of such orders. It is not: it counts the identity order $4$ times, once for each guest.

How to check: the answer $0$ is impossible for $n \\geq 2$, since moving every hat one seat along is always a derangement. For small $n$ the small values listed above give a direct check: $!3 = 2$ and $!4 = 9$.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  faq: {
    title: `Permutations FAQ`,
  },
  }




const introContent = {
  id: "intro",
  title: "Permutations: Understanding Ordered Arrangements",
  content: `Permutations are arrangements where **order matters**. As we discussed on the [main combinatorics page](!/combinatorics), this is what distinguishes permutations from [combinations](!/combinatorics/combinations).

On this page, we'll explore the key permutation scenarios, including [Full Permutation](!/combinatorics/permutations#full) (arranging all n distinct elements), [Permutation with Repetition](!/combinatorics/permutations#with) (arrangements where certain elements can repeat), [Permutation without Repetition](!/combinatorics/permutations#without) (selecting and arranging r elements from n options), and [Circular Permutation](!/combinatorics/permutations#circular) (arrangements around a circle where rotations are identical).

Each scenario has specific formulas and real-world applications. Ready to dive into the details, or want to compare with [combinations](!/combinatorics/combinations) where order doesn't matter?

Mastering these permutation types gives you the tools to solve ordering problems across mathematics, computer science, and everyday scenarios. The key is recognizing which type fits your specific situation.`
}



const faqQuestions = {
  obj1: {
    question: "What is a permutation?",
    answer: "An arrangement of items where the order counts. Listing three books on a shelf in a different sequence produces a different permutation, even though the same books are involved. This is the defining contrast with selections, where rearranging the chosen items changes nothing about the result.",
    sectionId: "logic"
  },
  obj2: {
    question: "What is the difference between permutations with and without repetition?",
    answer: "Without repetition each item can be used once, so the pool shrinks with every position filled and the count is a descending product. With repetition the full pool is available every time, so the count is one number raised to the power of the number of positions. A PIN allows repeats; seating people does not. Compare both on the [permutation calculator](!/combinatorics/calculator?scenario=1).",
    sectionId: "with"
  },
  obj3: {
    question: "How do you count arrangements when some items are identical?",
    answer: "Count as if every item were distinct, then divide by the factorial of each repeated group's size. The division removes the rearrangements among identical items, which produce no visibly different result. Arranging the letters of a word with repeated letters is the standard case where this correction is needed.",
    sectionId: "identical"
  },
  obj4: {
    question: "Why do you divide by n when counting circular permutations?",
    answer: "Because rotating the whole arrangement produces the same circular seating. Every distinct circle corresponds to n straight-line arrangements, one for each starting position, so the linear count overcounts by exactly that factor. Fixing one person in place and arranging the rest gives the same answer more directly.",
    sectionId: "circular"
  },
  obj5: {
    question: "What is the difference between nPr and n factorial?",
    answer: "Factorial arranges every item, while nPr arranges only r of them chosen from n. Factorial is the special case where r equals n, so all positions are filled. Reading nPr as a factorial of something is a common slip; it is a descending product that stops after r terms rather than continuing to one.",
    sectionId: "notation"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Permutations",
    "description": "Permutations in combinatorics: full, partial, with repetition, with identical items, circular, and derangements. Formulas, notation, and worked examples.",
    "url": "https://www.learnmathclass.com/combinatorics/permutations",
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
      "name": "Permutations"
    },
    "teaches": [
      "Logic behind permutations and the multiplication principle",
      "Full permutations and the factorial formula n!",
      "Permutations with identical items via the multinomial coefficient",
      "Partial permutations with and without repetition",
      "Circular permutations and rotational equivalence",
      "Derangements and the subfactorial formula"
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
        "name": "Permutations",
        "item": "https://www.learnmathclass.com/combinatorics/permutations"
      }
    ]
  },

}

  const fpHats = {
    kind: 'derangements',
    svgTitle: 'Six ways to hand back three hats; two leave no guest with their own',
    items: ['A', 'B', 'C'],
    placeName: 'guest', rowName: 'order', countName: 'own hats', ownNote: 'a guest gets their own hat',
    caption: '2 of the 3! = 6 orders give nobody their own hat: !3 = 2',
  };

  const conceptIntroFigures = {
    n4: fullPermutationDiagrams.n4,
    growthTable: ciGrowthTable,
  };

  const demoUnits = {
    fullN3: demoUnitFrame({
      svg: fullPermutationDiagrams.n3,
      caption: 'All 3! = 6 arrangements of three items',
      text: 'Three distinct items, every order they can stand in: 3 choices for the first place, 2 for the second, 1 for the last, and the six results laid out in groups by their first item. Each group has the same size because whatever goes first, the rest can still be ordered in 2! ways. Build the arrangements for 4 and 5 items on the',
      href: '/combinatorics/visual-tools/full-permutation',
      linkText: 'full permutation visualizer',
    }),
    hatCheck: demoUnitFrame({
      svg: renderFixedPoints(fpHats),
      caption: 'Three guests, three hats',
      text: 'Guests A, B and C each checked a hat, and the six rows are every order the hats can come back in. A red circle marks a guest who got their own hat back. Four orders return at least one hat correctly; only B C A and C A B leave every guest holding someone else&#8217;s hat &#8212; the two derangements, so !3 = 2. The alternating sum under the table is the formula for n = 3: start from all 3! orders and correct for the ones that fix a place.',
    }),
  };

   return {
  props:{
    seoData: {
      title: "Permutations: Types, Formulas, Examples | Learn Math Class",
      description: "Permutations in combinatorics: full, partial, with repetition, with identical items, circular, and derangements. Formulas, notation, and worked examples.",
      keywords: keyWords.join(", "),
      url: "/combinatorics/permutations",
      name: "Permutations"
    },
    sectionsContent,
    introContent,
    permutationsTable,
    permutationsDiagram,
    fullPermutationTable,
    identicalTable,
    permutationsScenariosTableData,
    demoUnits,
    conceptIntroFigures,
    partialWithoutTable,
    permutationWithRepetitionTable,
    circularTable,
    faqQuestions,
    schemas
  }
}
  }
  
export default function PermutationsPage({seoData, sectionsContent, introContent, permutationsDiagram, fullPermutationTable,
  identicalTable, permutationsTable, permutationsScenariosTableData, partialWithoutTable,
  permutationWithRepetitionTable, circularTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  // The section's scenario diagrams carry a fixed left margin; inside the
  // introduction's narrower column the wrapper cancels it and scales them to fit.
  // The diagrams themselves are unchanged.
  const ciFit = (name) => (
    <div key={name} className="ci-fit" dangerouslySetInnerHTML={{ __html: scenariosData[name].svg }} />
  )
  const ciFitStyle = <style key="ci-fit-style">{'.ci-fit svg{margin-left:0 !important;max-width:100%;height:auto;display:block;margin-right:auto}.ci-fit svg[style*=margin-bottom]{margin-bottom:-12% !important}'}</style>

  // "The Logic behind permutations" concept introduction — template A (definition last).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Lining things up in order gets out of hand quickly.`,
        content: [
          `Two items can stand in a row in $2$ ways: AB or BA. Three letters A, B, C already give more, and the list is easy to get wrong — skip one order or write another twice. Ten books on a shelf could not be listed by hand at all. There has to be a way to count the orders without writing them out.`,
          ciFitStyle,
          ciFit("Permutations (Full)"),
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Building the orders one position at a time gives the count.`,
        content: [
          `Fill the three places of the row in turn. The first place can take any of the $3$ letters. Once it is filled, $2$ letters are left for the second place. Then $1$ letter is left for the third. Every first choice combines with every second choice and every third, so the counts multiply.`,
          ciFit("Permutations of ABC: STEP-by-Step"),
          `@academic[formula_callout:Factorial of 3
$$3\\times 2 \\times 1 = 6 (n!)$$]@`,
          `Six orders: ABC, ACB, BAC, BCA, CAB, CBA — exactly the list above, with nothing missed and nothing repeated.`,
        ],
      },
      {
        id: 'forcing',
        lead: `Nothing in that count was chosen; every factor was forced.`,
        content: [
          `Each factor is one less than the one before because a letter, once placed, cannot be used again. The factors multiply because the choices are made in sequence — the [multiplication principle](!/combinatorics#multi). Nothing depended on there being three letters: with $n$ items the first place has $n$ options, the next $n - 1$, and so on down to $1$.`,
          ciTable('growthTable'),
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [permutation](!/combinatorics/definitions#permutation) of a set of distinct items is an arrangement of all of them in a definite order. For $n$ distinct objects, the number of permutations is:`,
        formula: `@academic[formula_callout:Factorial
$$n! = n \\times (n−1) \\times (n−2) \\times \\dots \\times 2 \\times 1.$$
/combinatorics/formulas#factorial]@`,
        footer: `The product $n \\times (n - 1) \\times \\dots \\times 1$ is the factorial $n!$; for $3$ letters, $3! = 6$.`,
      },
      {
        id: 'kind',
        lead: `A permutation is an ordered arrangement, and n! is a count of them.`,
        content: `Each permutation is a sequence: ABC and BAC contain the same letters but are different permutations, because order is the whole point. In every type of permutation, the order of arrangement matters — that is exactly what separates permutations from [combinations](!/combinatorics/combinations), where only the group counts. The number $n!$ is how many such sequences there are.`,
      },
      {
        id: 'caveat',
        lead: `The multiplying generalizes; the rest was particular to this example.`,
        content: `What generalizes is the mechanism: fill positions one by one and multiply the options at each step. What was particular: every item was used, every item was different, none could repeat, and the row had a first and last place. Change any of these — use only some items, allow identical items or repetition, seat them in a circle — and the factors change, which is what the [types](!/combinatorics/permutations#types) of permutations below sort out. And the count grows fast: $4$ items already give $24$ orders, and $10$ give $3{,}628{,}800$.`,
        visual: ciSvg('n4'),
        caption: `All $24$ orders of $4$ items, grouped by the item in first place: $4$ groups of $6$, the $3! = 6$ orders of the rest. The same state is on the [full permutation visualizer](!/combinatorics/visual-tools/full-permutation).`,
      },
      {
        id: 'exit',
        content: `The rest of the page goes through the types of permutations — full, with identical items, partial, with repetition, circular — their notation, and derangements, where no item may stay in its place.`,
      },
    ],
  }
  
  const permutationsSections=[
    {
        id:'logic',
        title:sectionsContent.logic.title,
        link:'',
        content:[
          <ConceptIntro key={'logic-intro'} data={conceptIntro} />,
        ]
    },
   {
        id:'types',
        title:sectionsContent.types.title,
        link:'',
        content:[
          sectionsContent.types.before,
          <div key={11} style={{width:'90%',margin:'auto'}}>
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
      <div key={'unit-fullN3'} dangerouslySetInnerHTML={{ __html: demoUnits.fullN3 }} />,
      `Every extra item multiplies the count again: 4 items give 24 arrangements, 5 give 120.`,
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
           <div key={12} style={{
                      textAlign: 'center',
                      transform: 'scale(0.85)',
                      transformOrigin: 'center',
                      marginTop:'-30px'
                    }} dangerouslySetInnerHTML={{ 
                      __html: scenariosData["Permutations of 3 with 2 Identical Items"].svg 
                    }} />,
           <div key={13} style={{
                      textAlign: 'center',
                      transform: 'scale(0.85)',
                      transformOrigin: 'center',
                      marginTop:'-30px'
                    }} dangerouslySetInnerHTML={{ 
                      __html: scenariosData["Permutations of 3 with 3 Identical Items"].svg 
                    }} />,
                    
          scenariosData["Permutations with Identical Items"].svg,
          `@academic[punchline:Swapping identical items changes nothing, so each group's factorial in the denominator removes exactly those swaps.]@`,
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
          scenariosData["Partial Permutations without Repetition"].svg,
          scenariosData["Permutation without Repetition (Partial)"].svg,
          `@academic[punchline:Filling only $r$ places keeps the first $r$ factors of $n!$ and drops the rest.]@`,

        ]
    },
      {
        id:'notation',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
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
      scenariosData["Permutations with Repetition"].svg,
     
      

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
        scenariosData["Circular Permutation 3"].svg,
        `@academic[punchline:A circle has no first seat, so fixing one item turns the circle into a row of the remaining $n - 1$.]@`,

      ]
  },

    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'unit-hatCheck'} dangerouslySetInnerHTML={{ __html: demoUnits.hatCheck }} />,
          `Both derangements are rotations: in B C A every hat moves one seat one way, in C A B one seat the other way.`,
          `@academic[punchline:Beyond a handful of items, the share of orders that move every item settles near $1$ in $e$, about $37\\%$.]@`,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
//   {
//     id:'',
//     title:'',
//     link:'',
//     content:''
// }
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
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Permutations</h1>   
    <br/> 
    <SectionTableOfContents sections={permutationsSections}
     showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
         secondaryNavTitle="More in this Section"
    />
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
    {/* <ScrollUpButton/>  */}
    
    </>
  )
}