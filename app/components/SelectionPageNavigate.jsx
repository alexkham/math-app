// import React, { useState } from 'react';

// export default function SelectionPage() {
//   const [branch, setBranch] = useState('');
//   const [tableTitle, setTableTitle] = useState('');

//   // Function to handle the redirection
//   const redirectToTable = () => {
//     if (branch && tableTitle) {
//       const url = `../pages/some/${encodeURIComponent(branch)}/${encodeURIComponent(tableTitle)}`;
//       window.location.href = url; // Redirecting using plain JavaScript
//     }
//   };

//   // Call redirectToTable whenever branch or tableTitle changes
//   useState(() => {
//     redirectToTable();
//   }, [branch, tableTitle]);

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={branch} 
//         onChange={(e) => setBranch(e.target.value)} 
//         placeholder="Branch" 
//       />
//       <input 
//         type="text" 
//         value={tableTitle} 
//         onChange={(e) => setTableTitle(e.target.value)} 
//         placeholder="Table Title" 
//       />
//       {/* No button for manual navigation */}
//     </div>
//   );
// }
'use client'
import React, { useState } from 'react';

export default function SelectionPage() {
  const [branch, setBranch] = useState('');
  const [tableTitle, setTableTitle] = useState('');

  // Construct the dynamic URL based on the input values
  const url = branch && tableTitle 
              ? `/some/${encodeURIComponent(branch)}/${encodeURIComponent(tableTitle)}`
              : '#';

  return (
    <div>
      <input 
        type="text" 
        value={branch} 
        onChange={(e) => setBranch(e.target.value)} 
        placeholder="Branch"
      />
      <input 
        type="text" 
        value={tableTitle} 
        onChange={(e) => setTableTitle(e.target.value)} 
        placeholder="Table Title"
      />
      {/* Directly use an anchor tag for navigation */}
      <a href={url}>Go to Table</a>
    </div>
  );
}

