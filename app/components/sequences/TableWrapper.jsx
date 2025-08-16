// 'use client'
// import React, { useState, useEffect } from 'react';
// import './sequences.css'
// import { capitalizeWords } from '@/app/utils/utils-functions';
// import ArrayTable from './ArrayTable';

// const TableWrapper = ({ initialData, columns, TableComponent }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(initialData);

//   useEffect(() => {
//     console.log('inside useEffect')
//     console.log(initialData)
//     if (initialData && Array.isArray(initialData.rows)) {
//       const lowercasedSearchTerm = searchTerm.toLowerCase();
//       const filteredRows = initialData.rows.filter(row => {
//         // Search only in specified columns if provided
//         if (columns && columns.length) {
//           return columns.some(column =>
//             row[column] && row[column].toString().toLowerCase().includes(lowercasedSearchTerm)
//           );
//         }
//         // Search in all columns if no specific columns are specified
//         return Object.values(row).some(value =>
//           value && value.toString().toLowerCase().includes(lowercasedSearchTerm)
//         );
//       });

//       setFilteredData({ ...initialData, rows: filteredRows });
//       console.log(filteredData)
//     }
//   }, [searchTerm, initialData, columns]);

//   return (
//     <div>
//       <h2 className='wrapper-title'>{capitalizeWords(initialData.tableTitle)}</h2>
//       <div className='input-wrapper'>
//       <input
//         className='my-input'
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <svg className='input-svg' style={{width:'20px',height:'20px'}} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M11.8153 10.3439C12.6061 9.2673 13.0732 7.9382 13.0732 6.5C13.0732 2.91015 10.163 0 6.57318 0C2.98333 0 0.0731812 2.91015 0.0731812 6.5C0.0731812 10.0899 2.98333 13 6.57318 13C8.01176 13 9.3412 12.5327 10.4179 11.7415L10.4171 11.7422C10.4466 11.7822 10.4794 11.8204 10.5156 11.8566L14.3661 15.7071C14.7566 16.0976 15.3898 16.0976 15.7803 15.7071C16.1708 15.3166 16.1708 14.6834 15.7803 14.2929L11.9298 10.4424C11.8936 10.4062 11.8553 10.3734 11.8153 10.3439ZM12.0732 6.5C12.0732 9.53757 9.61075 12 6.57318 12C3.53561 12 1.07318 9.53757 1.07318 6.5C1.07318 3.46243 3.53561 1 6.57318 1C9.61075 1 12.0732 3.46243 12.0732 6.5Z" fill="currentColor"></path>
//           </svg>
//       </div>
//       <TableComponent tableData={filteredData} />
//     </div>
//   );
// };

// export default TableWrapper;
// 'use client'
// import React, { useState, useMemo } from 'react';
// import ArrayTable from './ArrayTable'; // Adjust the import path as necessary

// const TableWrapper = ({ data, titles, tableStyle }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter data based on search term
//   const filteredData = useMemo(() => {
//     if (!searchTerm) return data;

//     // Adjust the filtering logic based on your data structure and needs
//     return data.filter(item => 
//       titles.some(title => 
//         String(item[title]).toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [data, searchTerm, titles]);

//   return (
//     <div>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <ArrayTable data={filteredData} titles={titles} tableStyle={tableStyle} />
//     </div>
//   );
// };

// export default TableWrapper;
// 'use client'
// import React, { useState, useMemo } from 'react';
// import ArrayTable from './ArrayTable'; // Adjust the import path as necessary

// const TableWrapper = ({ data, titles, tableStyle }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filtered data based on search term
//   const filteredData = useMemo(() => {
//     if (!searchTerm) return data;

//     return data.filter(item =>
//       item.prime.toString().toLowerCase().startsWith(searchTerm.toLowerCase())
//     );
//   }, [data, searchTerm]);

//   return (
//     <div>
//       <div className="search-bar">
//         <input
//           className='my-input'
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <ArrayTable data={filteredData} titles={titles} tableStyle={tableStyle} />
//     </div>
//   );
// };

// export default TableWrapper;
// 'use client'
// import React, { useState, useMemo } from 'react';
// import ArrayTable from './ArrayTable'; // Adjust the import path as necessary

// const TableWrapper = ({ data, titles, tableStyle }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filtered data based on search term
//   const filteredData = useMemo(() => {
//     if (!searchTerm) return data;

//     return data.filter(item =>
//       item.prime.toString().toLowerCase().startsWith(searchTerm.toLowerCase())
//     );
//   }, [data, searchTerm]);

//   return (
//     <div>
//       <div className="search-bar">
//         <input
//           className='my-input'
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       {filteredData.length > 0 ? (
//         <ArrayTable data={filteredData} titles={titles} tableStyle={tableStyle} />
//       ) : (
//         <div>No Match Found</div>
//       )}
//     </div>
//   );
// };

// export default TableWrapper;
// 'use client'
// import React, { useState, useMemo } from 'react';

// const TableWrapper = ({ data }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredData = useMemo(() => {
//     if (!searchTerm.trim()) return data;
//     return data.filter(item =>
//       item.prime.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [data, searchTerm]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {filteredData.length > 0 ? (
//         filteredData.map(item => <div key={item.prime}>{item.prime}</div>)
//       ) : (
//         <div>No Match Found</div>
//       )}
//     </div>
//   );
// };
// export default TableWrapper;
// 'use client'
// import React, { useState, useMemo } from 'react';
// import ArrayTable from './ArrayTable'; // Ensure this path is correct

// // Assuming data is an array of objects, where each object has a 'prime' key
// const TableWrapper = ({ data, titles, tableStyle }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredData = useMemo(() => {
//     // Filter only if searchTerm is not empty, otherwise return the full data
//     return searchTerm.trim()
//       ? data.filter((item) =>
//           item.prime.toString().toLowerCase().startsWith(searchTerm.toLowerCase())
//         )
//       : data;
//   }, [data, searchTerm]);

//   return (
//     <div>
//       <div className="search-bar">
//         <label>Search by Value</label>
//         <input
//         className='my-input'
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       {/* Conditional rendering based on filteredData's length */}
//       {filteredData.length > 0 ? (
//         <ArrayTable data={filteredData} titles={titles} tableStyle={tableStyle} />
//       ) : (
//         <span>No Match Found</span>
//       )}
//     </div>
//   );
// };

// export default TableWrapper;
'use client'
import React, { useState, useMemo } from 'react';
import ArrayTable from './ArrayTable'; // Adjust the import path as necessary

const TableWrapper = ({ data, titles, tableStyle }) => {
  const [searchTermPrime, setSearchTermPrime] = useState(null);
  const [searchTermIndex, setSearchTermIndex] = useState(null);

  // Filtered data based on search term for prime numbers and index
  const filteredData = useMemo(() => {
    return data.filter(item => {
      const primeMatch = searchTermPrime ? item.prime.toString().toLowerCase().startsWith(searchTermPrime.toLowerCase()) : true;
      const indexMatch = searchTermIndex ? item.index.toString().startsWith(searchTermIndex) : true;
      return primeMatch && indexMatch;
    });
  }, [data, searchTermPrime, searchTermIndex]);

  // Conditionally render "No Match Found" message
  const renderTableOrMessage = filteredData.length > 0 ? (
    <ArrayTable data={filteredData} titles={titles} tableStyle={tableStyle} />
  ) : (
    <div>No Match Found</div>
  );

  const resetAll=()=>{
    setSearchTermIndex('')
    setSearchTermPrime('')
  }

  const handlePrimeChange = (e) => {
    const value = e.target.value;
    // Convert to a number and back to a string to remove non-numeric inputs
    // This will effectively make the input field ignore non-numeric characters
    setSearchTermPrime(String(Number(value)));
  };

  const handleIndexChange = (e) => {
    const value = e.target.value;
    setSearchTermIndex(String(Number(value)));
  };
  const handlePrimeBlur = () => {
    setSearchTermPrime(''); // Resets the prime search term
  };
  const handleIndexBlur = () => {
    setSearchTermIndex(''); // Resets the index search term
  };  
  

  return (
    <div>
      <div className="search-bar">
        <div className='input-container'> 
        <label>Search by Value :</label>
        <input
          className='my-input'
          type="number"
          placeholder="Search by Prime Value..."
          value={searchTermPrime}
          onChange={(e) => handlePrimeChange(e)}
          onBlur={handlePrimeBlur}
        />
        </div>
        <div className='input-container'> 
        <label>Search by Index :</label>
        <input
          className='my-input'
          type="number"
          placeholder="Search by #..."
          value={searchTermIndex}
          onChange={(e) => handleIndexChange(e)}
          onBlur={handleIndexBlur}
        />
        </div>
       {(searchTermIndex||searchTermPrime)&&<button
        onClick={()=>resetAll()} style={{backgroundColor:'red'}}>
            Reset Search</button>}
      </div>
      {renderTableOrMessage}
    </div>
  );
};

export default TableWrapper;





