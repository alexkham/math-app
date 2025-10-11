
// // // import React, { useState } from 'react';

// // // export default function ComparisonTable({ data }) {
// // //   const [hoveredRow, setHoveredRow] = useState(null);

// // //   const { title, subtitle, comparison, similarFeatures, differentFeatures } = data;

// // //   const styles = {
// // //     container: { maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui', background: 'white', minHeight: '100vh' },
// // //     header: { textAlign: 'center', marginBottom: '40px' },
// // //     title: { fontSize: '36px', fontWeight: '700', margin: '0 0 10px 0', color: '#0D47A1' },
// // //     subtitle: { fontSize: '16px', color: '#546E7A', margin: 0 },
// // //     card: { background: '#FFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #D0D7DE' },
// // //     headerRow: { display: 'grid', gridTemplateColumns: '0.75fr 1fr 1fr', background: '#0D47A1' },
// // //     headerCell1: { padding: '20px 25px', color: '#0D47A1', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', background: '#ECF1F7' },
// // //     headerCell2: { padding: '20px 25px', color: '#FFF', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', textAlign: 'center' },
// // //     sectionHeader: { display: 'flex', alignItems: 'center', padding: '25px 30px', gap: '20px' },
// // //     divider: { flex: 1, height: '2px' },
// // //     sectionTitle: { fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', whiteSpace: 'nowrap' },
// // //     row: { display: 'grid', gridTemplateColumns: '0.75fr 1fr 1fr', borderBottom: '1px solid #E8F0F7', transition: 'background 0.2s' },
// // //     featureCell: { padding: '18px 25px', display: 'flex', alignItems: 'center', background: '#ECF1F7' },
// // //     valueCell: { padding: '18px 25px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <div style={styles.header}>
// // //         <h1 style={styles.title}>{title ? title :''}</h1>
// // //         <p style={styles.subtitle}>{subtitle ? subtitle :''}</p>
// // //       </div>
// // //       <div style={styles.card}>
// // //         <div style={styles.headerRow}>
// // //           <div style={styles.headerCell1}>Feature</div>
// // //           <div style={{...styles.headerCell2, background: comparison.itemA.color}}>{comparison.itemA.name}</div>
// // //           <div style={{...styles.headerCell2, background: comparison.itemB.color}}>{comparison.itemB.name}</div>
// // //         </div>
// // //         <div style={{...styles.sectionHeader, background: '#E3F2FD'}}>
// // //           <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #1976D2, transparent)'}}></div>
// // //           <span style={{...styles.sectionTitle, color: '#0D47A1'}}>Common Features</span>
// // //           <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #1976D2, transparent)'}}></div>
// // //         </div>
// // //         <div>
// // //           {similarFeatures.map((row, index) => (
// // //             <div key={index} style={{...styles.row, background: hoveredRow === `s${index}` ? '#BBDEFB' : index % 2 === 0 ? '#E3F2FD' : '#F1F8FE'}} onMouseEnter={() => setHoveredRow(`s${index}`)} onMouseLeave={() => setHoveredRow(null)}>
// // //               <div style={styles.featureCell}><span style={{fontSize: '15px', fontWeight: '600', color: '#0D47A1'}}>{row.feature}</span></div>
// // //               <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemA.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemA}</span></div>
// // //               <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemB.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemB}</span></div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <div style={{...styles.sectionHeader, background: '#B3E5FC'}}>
// // //           <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #0288D1, transparent)'}}></div>
// // //           <span style={{...styles.sectionTitle, color: '#01579B'}}>Differences</span>
// // //           <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #0288D1, transparent)'}}></div>
// // //         </div>
// // //         <div>
// // //           {differentFeatures.map((row, index) => (
// // //             <div key={index} style={{...styles.row, background: hoveredRow === `d${index}` ? '#81D4FA' : index % 2 === 0 ? '#B3E5FC' : '#E1F5FE'}} onMouseEnter={() => setHoveredRow(`d${index}`)} onMouseLeave={() => setHoveredRow(null)}>
// // //               <div style={styles.featureCell}><span style={{fontSize: '15px', fontWeight: '600', color: '#0D47A1'}}>{row.feature}</span></div>
// // //               <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemA.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemA}</span></div>
// // //               <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemB.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemB}</span></div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import React, { useState, useRef } from 'react';

// // export default function ComparisonTable({ data }) {
// //   const [hoveredRow, setHoveredRow] = useState(null);
// //   const tableRef = useRef(null);

// //   const { title, subtitle, comparison, similarFeatures, differentFeatures } = data;

// //   const handlePrint = () => {
// //     window.print();
// //   };

// //   const handleDownload = () => {
// //     const element = tableRef.current;
// //     const content = element.innerHTML;
// //     const fileName = title ? title.replace(/\s+/g, '_') : 'comparison_table';
    
// //     const htmlContent = `
// //       <!DOCTYPE html>
// //       <html>
// //       <head>
// //         <meta charset="utf-8">
// //         <title>${title || 'Comparison Table'}</title>
// //         <style>
// //           body { font-family: system-ui; margin: 40px; background: #F0F4F8; }
// //           * { box-sizing: border-box; }
// //         </style>
// //       </head>
// //       <body>
// //         ${content}
// //       </body>
// //       </html>
// //     `;
    
// //     const blob = new Blob([htmlContent], { type: 'text/html' });
// //     const url = URL.createObjectURL(blob);
// //     const link = document.createElement('a');
// //     link.href = url;
// //     link.download = `${fileName}.html`;
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //     URL.revokeObjectURL(url);
// //   };

// //   const styles = {
// //     container: { maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui', background: 'white', minHeight: '100vh' },
// //     header: { textAlign: 'center', marginBottom: '40px' },
// //     title: { fontSize: '36px', fontWeight: '700', margin: '0 0 10px 0', color: '#0D47A1' },
// //     subtitle: { fontSize: '16px', color: '#546E7A', margin: 0 },
// //     actions: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' },
// //     button: { 
// //       padding: '12px 24px', 
// //       fontSize: '14px', 
// //       fontWeight: '600', 
// //       border: 'none', 
// //       borderRadius: '8px', 
// //       cursor: 'pointer', 
// //       transition: 'all 0.2s',
// //       background: '#1565C0',
// //       color: '#FFF'
// //     },
// //     card: { background: '#FFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #D0D7DE' },
// //     headerRow: { display: 'grid', gridTemplateColumns: '0.75fr 1fr 1fr', background: '#0D47A1' },
// //     headerCell1: { padding: '20px 25px', color: '#0D47A1', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', background: '#ECF1F7' },
// //     headerCell2: { padding: '20px 25px', color: '#FFF', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', textAlign: 'center' },
// //     sectionHeader: { display: 'flex', alignItems: 'center', padding: '25px 30px', gap: '20px' },
// //     divider: { flex: 1, height: '2px' },
// //     sectionTitle: { fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', whiteSpace: 'nowrap' },
// //     row: { display: 'grid', gridTemplateColumns: '0.75fr 1fr 1fr', borderBottom: '1px solid #E8F0F7', transition: 'background 0.2s' },
// //     featureCell: { padding: '18px 25px', display: 'flex', alignItems: 'center', background: '#ECF1F7' },
// //     valueCell: { padding: '18px 25px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.header}>
// //         <h1 style={styles.title}>{title ? title : ''}</h1>
// //         <p style={styles.subtitle}>{subtitle ? subtitle : ''}</p>
// //       </div>
      
// //       <div style={styles.actions}>
// //         <button 
// //           style={styles.button}
// //           onClick={handlePrint}
// //           onMouseEnter={(e) => e.target.style.background = '#0D47A1'}
// //           onMouseLeave={(e) => e.target.style.background = '#1565C0'}
// //         >
// //           🖨️ Print
// //         </button>
// //         <button 
// //           style={styles.button}
// //           onClick={handleDownload}
// //           onMouseEnter={(e) => e.target.style.background = '#0D47A1'}
// //           onMouseLeave={(e) => e.target.style.background = '#1565C0'}
// //         >
// //           ⬇️ Download
// //         </button>
// //       </div>

// //       <div ref={tableRef}>
// //         <div style={styles.card}>
// //           <div style={styles.headerRow}>
// //             <div style={styles.headerCell1}>Feature</div>
// //             <div style={{...styles.headerCell2, background: comparison.itemA.color}}>{comparison.itemA.name}</div>
// //             <div style={{...styles.headerCell2, background: comparison.itemB.color}}>{comparison.itemB.name}</div>
// //           </div>
// //           <div style={{...styles.sectionHeader, background: '#E3F2FD'}}>
// //             <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #1976D2, transparent)'}}></div>
// //             <span style={{...styles.sectionTitle, color: '#0D47A1'}}>Common Features</span>
// //             <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #1976D2, transparent)'}}></div>
// //           </div>
// //           <div>
// //             {similarFeatures.map((row, index) => (
// //               <div key={index} style={{...styles.row, background: hoveredRow === `s${index}` ? '#BBDEFB' : index % 2 === 0 ? '#E3F2FD' : '#F1F8FE'}} onMouseEnter={() => setHoveredRow(`s${index}`)} onMouseLeave={() => setHoveredRow(null)}>
// //                 <div style={styles.featureCell}><span style={{fontSize: '15px', fontWeight: '600', color: '#0D47A1'}}>{row.feature}</span></div>
// //                 <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemA.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemA}</span></div>
// //                 <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemB.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemB}</span></div>
// //               </div>
// //             ))}
// //           </div>
// //           <div style={{...styles.sectionHeader, background: '#B3E5FC'}}>
// //             <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #0288D1, transparent)'}}></div>
// //             <span style={{...styles.sectionTitle, color: '#01579B'}}>Differences</span>
// //             <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #0288D1, transparent)'}}></div>
// //           </div>
// //           <div>
// //             {differentFeatures.map((row, index) => (
// //               <div key={index} style={{...styles.row, background: hoveredRow === `d${index}` ? '#81D4FA' : index % 2 === 0 ? '#B3E5FC' : '#E1F5FE'}} onMouseEnter={() => setHoveredRow(`d${index}`)} onMouseLeave={() => setHoveredRow(null)}>
// //                 <div style={styles.featureCell}><span style={{fontSize: '15px', fontWeight: '600', color: '#0D47A1'}}>{row.feature}</span></div>
// //                 <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemA.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemA}</span></div>
// //                 <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemB.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemB}</span></div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState, useRef } from 'react';

// export default function ComparisonTable({ data }) {
//   const [hoveredRow, setHoveredRow] = useState(null);
//   const tableRef = useRef(null);

//   const { title, subtitle, comparison, similarFeatures, differentFeatures } = data;

//   const handlePrint = () => {
//     const element = tableRef.current;
//     const printWindow = window.open('', '', 'width=800,height=600');
//     printWindow.document.write(`
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <meta charset="utf-8">
//         <title>${title || 'Comparison Table'}</title>
//         <style>
//           body { font-family: system-ui; margin: 20px; }
//           * { box-sizing: border-box; }
//           @media print {
//             body { margin: 0; }
//           }
//         </style>
//       </head>
//       <body>
//         ${element.innerHTML}
//       </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.focus();
//     setTimeout(() => {
//       printWindow.print();
//       printWindow.close();
//     }, 250);
//   };

//   const handleDownload = () => {
//     const element = tableRef.current;
//     const content = element.innerHTML;
//     const fileName = title ? title.replace(/\s+/g, '_') : 'comparison_table';
    
//     const htmlContent = `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <meta charset="utf-8">
//         <title>${title || 'Comparison Table'}</title>
//         <style>
//           body { font-family: system-ui; margin: 40px; background: #F0F4F8; }
//           * { box-sizing: border-box; }
//         </style>
//       </head>
//       <body>
//         ${content}
//       </body>
//       </html>
//     `;
    
//     const blob = new Blob([htmlContent], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `${fileName}.html`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   const styles = {
//     container: { maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui', background: 'white', minHeight: '100vh' },
//     header: { textAlign: 'center', marginBottom: '40px' },
//     title: { fontSize: '36px', fontWeight: '700', margin: '0 0 10px 0', color: '#0D47A1' },
//     subtitle: { fontSize: '16px', color: '#546E7A', margin: 0 },
//     actions: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' },
//     button: { 
//       padding: '12px 24px', 
//       fontSize: '14px', 
//       fontWeight: '600', 
//       border: 'none', 
//       borderRadius: '8px', 
//       cursor: 'pointer', 
//       transition: 'all 0.2s',
//       background: '#1565C0',
//       color: '#FFF'
//     },
//     card: { background: '#FFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #D0D7DE' },
//     headerRow: { display: 'grid', gridTemplateColumns: '0.75fr 1fr 1fr', background: '#0D47A1' },
//     headerCell1: { padding: '20px 25px', color: '#0D47A1', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', background: '#ECF1F7' },
//     headerCell2: { padding: '20px 25px', color: '#FFF', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', textAlign: 'center' },
//     sectionHeader: { display: 'flex', alignItems: 'center', padding: '25px 30px', gap: '20px' },
//     divider: { flex: 1, height: '2px' },
//     sectionTitle: { fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', whiteSpace: 'nowrap' },
//     row: { display: 'grid', gridTemplateColumns: '0.75fr 1fr 1fr', borderBottom: '1px solid #E8F0F7', transition: 'background 0.2s' },
//     featureCell: { padding: '18px 25px', display: 'flex', alignItems: 'center', background: '#ECF1F7' },
//     valueCell: { padding: '18px 25px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>{title ? title : ''}</h1>
//         <p style={styles.subtitle}>{subtitle ? subtitle : ''}</p>
//       </div>
      
//       <div style={styles.actions}>
//         <button 
//           style={styles.button}
//           onClick={handlePrint}
//           onMouseEnter={(e) => e.target.style.background = '#0D47A1'}
//           onMouseLeave={(e) => e.target.style.background = '#1565C0'}
//         >
//           🖨️ Print
//         </button>
//         <button 
//           style={styles.button}
//           onClick={handleDownload}
//           onMouseEnter={(e) => e.target.style.background = '#0D47A1'}
//           onMouseLeave={(e) => e.target.style.background = '#1565C0'}
//         >
//           ⬇️ Download
//         </button>
//       </div>

//       <div ref={tableRef}>
//         <div style={styles.card}>
//           <div style={styles.headerRow}>
//             <div style={styles.headerCell1}>Feature</div>
//             <div style={{...styles.headerCell2, background: comparison.itemA.color}}>{comparison.itemA.name}</div>
//             <div style={{...styles.headerCell2, background: comparison.itemB.color}}>{comparison.itemB.name}</div>
//           </div>
//           <div style={{...styles.sectionHeader, background: '#E3F2FD'}}>
//             <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #1976D2, transparent)'}}></div>
//             <span style={{...styles.sectionTitle, color: '#0D47A1'}}>Common Features</span>
//             <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #1976D2, transparent)'}}></div>
//           </div>
//           <div>
//             {similarFeatures.map((row, index) => (
//               <div key={index} style={{...styles.row, background: hoveredRow === `s${index}` ? '#BBDEFB' : index % 2 === 0 ? '#E3F2FD' : '#F1F8FE'}} onMouseEnter={() => setHoveredRow(`s${index}`)} onMouseLeave={() => setHoveredRow(null)}>
//                 <div style={styles.featureCell}><span style={{fontSize: '15px', fontWeight: '600', color: '#0D47A1'}}>{row.feature}</span></div>
//                 <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemA.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemA}</span></div>
//                 <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemB.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemB}</span></div>
//               </div>
//             ))}
//           </div>
//           <div style={{...styles.sectionHeader, background: '#B3E5FC'}}>
//             <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #0288D1, transparent)'}}></div>
//             <span style={{...styles.sectionTitle, color: '#01579B'}}>Differences</span>
//             <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #0288D1, transparent)'}}></div>
//           </div>
//           <div>
//             {differentFeatures.map((row, index) => (
//               <div key={index} style={{...styles.row, background: hoveredRow === `d${index}` ? '#81D4FA' : index % 2 === 0 ? '#B3E5FC' : '#E1F5FE'}} onMouseEnter={() => setHoveredRow(`d${index}`)} onMouseLeave={() => setHoveredRow(null)}>
//                 <div style={styles.featureCell}><span style={{fontSize: '15px', fontWeight: '600', color: '#0D47A1'}}>{row.feature}</span></div>
//                 <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemA.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemA}</span></div>
//                 <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemB.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemB}</span></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export default function ComparisonTable({ data }) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const tableRef = useRef(null);

  const { title, subtitle, comparison, similarFeatures, differentFeatures } = data;

  const handlePrint = () => {
    const element = tableRef.current;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${title || 'Comparison Table'}</title>
        <style>
          body { font-family: system-ui; margin: 20px; }
          * { box-sizing: border-box; }
          @media print {
            body { margin: 0; }
          }
        </style>
      </head>
      <body>
        ${element.innerHTML}
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const handleDownload = () => {
    const element = tableRef.current;
    const content = element.innerHTML;
    const fileName = title ? title.replace(/\s+/g, '_') : 'comparison_table';
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${title || 'Comparison Table'}</title>
        <style>
          body { font-family: system-ui; margin: 40px; background: #F0F4F8; }
          * { box-sizing: border-box; }
        </style>
      </head>
      <body>
        ${content}
      </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const styles = {
    container: { maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui', background: 'white', minHeight: '100vh' },
    header: { textAlign: 'center', marginBottom: '0px' },
    title: { fontSize: '36px', fontWeight: '700', margin: '0 0 10px 0', color: '#0D47A1' },
    subtitle: { fontSize: '16px', color: '#546E7A', margin: 0 },
    actions: { display: 'flex', justifyContent: 'flex-end', gap: '15px', marginBottom: '5px' },
    button: { 
      padding: '12px 24px', 
      fontSize: '14px', 
      fontWeight: '600', 
      border: 'none', 
      borderRadius: '8px', 
      cursor: 'pointer', 
      transition: 'all 0.2s',
      background: '#1565C0',
      color: '#FFF'
    },
    card: { background: '#FFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #D0D7DE' },
    headerRow: { display: 'grid', gridTemplateColumns: '0.75fr 1fr 1fr', background: '#0D47A1' },
    headerCell1: { padding: '20px 25px', color: '#0D47A1', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', background: '#ECF1F7' },
    headerCell2: { padding: '20px 25px', color: '#FFF', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', textAlign: 'center' },
    sectionHeader: { display: 'flex', alignItems: 'center', padding: '25px 30px', gap: '20px' },
    divider: { flex: 1, height: '2px' },
    sectionTitle: { fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', whiteSpace: 'nowrap' },
    row: { display: 'grid', gridTemplateColumns: '0.75fr 1fr 1fr', borderBottom: '1px solid #E8F0F7', transition: 'background 0.2s' },
    featureCell: { padding: '18px 25px', display: 'flex', alignItems: 'center', background: '#ECF1F7' },
    valueCell: { padding: '18px 25px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{title ? title : ''}</h1>
        <p style={styles.subtitle}>{subtitle ? subtitle : ''}</p>
      </div>
      
      <div style={styles.actions}>
        <button 
          style={styles.button}
          onClick={handlePrint}
          onMouseEnter={(e) => e.target.style.background = '#0D47A1'}
          onMouseLeave={(e) => e.target.style.background = '#1565C0'}
        >
          🖨️ Print
        </button>
        <button 
          style={styles.button}
          onClick={handleDownload}
          onMouseEnter={(e) => e.target.style.background = '#0D47A1'}
          onMouseLeave={(e) => e.target.style.background = '#1565C0'}
        >
          ⬇️ Download
        </button>
      </div>

      <div ref={tableRef}>
        <div style={styles.card}>
          <div style={styles.headerRow}>
            <div style={styles.headerCell1}>Feature</div>
            <div style={{...styles.headerCell2, background: comparison.itemA.color}}>{comparison.itemA.name}</div>
            <div style={{...styles.headerCell2, background: comparison.itemB.color}}>{comparison.itemB.name}</div>
          </div>
          <div style={{...styles.sectionHeader, background: '#E3F2FD'}}>
            <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #1976D2, transparent)'}}></div>
            <span style={{...styles.sectionTitle, color: '#0D47A1'}}>Common Features</span>
            <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #1976D2, transparent)'}}></div>
          </div>
          <div>
            {similarFeatures.map((row, index) => (
              <div key={index} style={{...styles.row, background: hoveredRow === `s${index}` ? '#BBDEFB' : index % 2 === 0 ? '#E3F2FD' : '#F1F8FE'}} onMouseEnter={() => setHoveredRow(`s${index}`)} onMouseLeave={() => setHoveredRow(null)}>
                <div style={styles.featureCell}><span style={{fontSize: '15px', fontWeight: '600', color: '#0D47A1'}}>{row.feature}</span></div>
                <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemA.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemA}</span></div>
                <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemB.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{row.itemB}</span></div>
              </div>
            ))}
          </div>
          <div style={{...styles.sectionHeader, background: '#B3E5FC'}}>
            <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #0288D1, transparent)'}}></div>
            <span style={{...styles.sectionTitle, color: '#01579B'}}>Differences</span>
            <div style={{...styles.divider, background: 'linear-gradient(to right, transparent, #0288D1, transparent)'}}></div>
          </div>
          <div>
            {differentFeatures.map((row, index) => (
              <div key={index} style={{...styles.row, background: hoveredRow === `d${index}` ? '#81D4FA' : index % 2 === 0 ? '#B3E5FC' : '#E1F5FE'}} onMouseEnter={() => setHoveredRow(`d${index}`)} onMouseLeave={() => setHoveredRow(null)}>
                <div style={styles.featureCell}><span style={{fontSize: '15px', fontWeight: '600', color: '#0D47A1'}}>{processContent(row.feature)}</span></div>
                <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemA.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{processContent(row.itemA)}</span></div>
                <div style={{...styles.valueCell, borderLeft: `3px solid ${comparison.itemB.color}`}}><span style={{fontSize: '14px', color: '#1565C0', fontWeight: '500'}}>{processContent(row.itemB)}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}