// import React from "react";
// import './GenericTable.css'
// import { InlineMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import { capitalizeWords } from "@/app/utils/utils-functions";



// const GenericTable = ({ tableData }) => {
//     // Check if tableData is available and correctly structured
//     if (!tableData || !Array.isArray(tableData.rows) || tableData.rows.length === 0) {
//       return <p>No data available</p>;
//     }

//     const copyToClipboard = (text) => {
//       navigator.clipboard.writeText(text).then(() => {
//         alert('Formula copied to clipboard');
//       }).catch(err => {
//         console.error('Could not copy text: ', err);
//       });
//     };

//     const copyFormulaAsSvg = (latex) => {
//       try {
//         const svgHtml = katex.renderToString(latex, {
//           throwOnError: false,
//           output: "svg"
//         });
//         navigator.clipboard.writeText(svgHtml).then(() => {
//           alert('Formula SVG copied to clipboard');
//         });
//       } catch (err) {
//         console.error('Could not render or copy SVG: ', err);
//       }
//     };
    
  
//     // Extract the column names from the first row for the table header
//     const columnHeaders = Object.keys(tableData.rows[0]);
  
//     return (
//       <div className="table-container"> 
//         <h2 className="table-title" >{tableData.tableTitle}</h2>
//         <br></br>
//         <br></br>
//         <table className="my-table">
//           <thead>
//             <tr>
//               {columnHeaders.map((header, index) => (
                
//                 <th key={index}>{capitalizeWords(header.replace(/_/g, ' '))}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.rows.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {columnHeaders.map((col, colIndex) => {
//                   if (col === 'formula') {
//                     return <td key={colIndex}>
//                       <InlineMath math={row[col]} />
//                       {/* <button onClick={() => copyToClipboard(row[col])}>Copy</button> */}
//                       </td>;
//                   } else {
//                     // if(row[col]!='')
//                     return <td key={colIndex}>{row[col]}</td>;
//                   }
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };
  
//   export default GenericTable;
  


import React from "react";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { capitalizeWords } from "@/app/utils/utils-functions";
import tableThemes from './tableThemes'; // Import your themes object

const GenericTable = ({ tableData, theme = 'softBlue' }) => {
  // Check if tableData is available and correctly structured
  if (!tableData || !Array.isArray(tableData.rows) || tableData.rows.length === 0) {
    return <p>No data available</p>;
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Formula copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const copyFormulaAsSvg = (latex) => {
    try {
      const svgHtml = katex.renderToString(latex, {
        throwOnError: false,
        output: "svg"
      });
      navigator.clipboard.writeText(svgHtml).then(() => {
        alert('Formula SVG copied to clipboard');
      });
    } catch (err) {
      console.error('Could not render or copy SVG: ', err);
    }
  };

  // Get theme styles
  const currentTheme = tableThemes[theme] || tableThemes.softBlue;
  
  // Extract the column names from the first row for the table header
  const columnHeaders = Object.keys(tableData.rows[0]);

  return (
    <div style={currentTheme.container}> 
      <h2 style={currentTheme.title}>{tableData.tableTitle}</h2>
      <table style={currentTheme.table}>
        <thead>
          <tr>
            {columnHeaders.map((header, index) => (
              <th key={index} style={currentTheme.th}>
                {capitalizeWords(header.replace(/_/g, ' '))}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              style={rowIndex % 2 === 1 ? currentTheme.trEven : {}}
            >
              {columnHeaders.map((col, colIndex) => {
                if (col === 'formula') {
                  return (
                    <td key={colIndex} style={currentTheme.td}>
                      <InlineMath math={row[col]} />
                    </td>
                  );
                } else {
                  return (
                    <td key={colIndex} style={currentTheme.td}>
                      {row[col]}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;