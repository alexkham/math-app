'use client'
// import React, { useState,useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import SelectComponent from '../select-component/SelectComponent';

// export default function SelectTable2Steps({categoryOptions,titleOptions}) {
//   const [category, setCategory] = useState('');
//   const [tableTitle, setTableTitle] = useState('');
//   const router = useRouter();



//   const handleCategory=(e)=>{
//     setCategory(e.target.value)
//   }
//   const handleTitle=(e)=>{
//     setTableTitle(e.target.value)
//   }

//   // Call this function when the user completes their selections
//   const handleSelectionComplete=(e)=> {
//     (e)=handleTitle(e)
//     if (category && tableTitle) {
//       const url = `/some/${encodeURIComponent(category)}/${encodeURIComponent(tableTitle)}`;
//       router.push(url);
//       setCategory('');
//     }
//   }

 
//   useEffect(()=>{
//     setCategory('')
//     setTableTitle('');

//   },[])

//   // Render your selection inputs and a button to complete the process
//   return (
//     <div>
//       <h3>Two Steps Table Select</h3>
//       <SelectComponent
//       label={' Category'} 
//       options={categoryOptions}
//       value={category} 
//       onChange={(e)=>handleCategory(e)}></SelectComponent>
//      {category&& <SelectComponent
//       label={' Table'}
//       options={titleOptions}
//        value={tableTitle}
//       onChange={(e)=>handleSelectionComplete(e)}></SelectComponent>}
//       <button onClick={handleSelectionComplete}>Go to Table</button>
//     </div>
//   );

import React, { useState, useEffect } from 'react';
import SelectComponent from '../select-component/SelectComponent';
import { useRouter } from 'next/navigation';
import '../../globals.css'

export default function SelectTable2Steps({ categoryOptions, filesData }) {
  const [category, setCategory] = useState('');
  const [tableTitles, setTableTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (category) {
      // Find the file that starts with the selected category
      const file = filesData.find(f => f.filename.startsWith(category.toLowerCase()));
      if (file && file.content) {
        // Extract titles from the file content
        const titles = file.content.map(item => item.tableTitle);
        setTableTitles(titles);
      } else {
        setTableTitles([]);
      }
    }
  }, [category, filesData]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSelectedTitle('');
  };

  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
  };

  const handleSelectionComplete = () => {
    if (category && selectedTitle) {
      const url = `/tables/${encodeURI(category.toLowerCase())}/${encodeURI(selectedTitle)}`;
      router.push(url);
    }
  };

  return (
    <div className='main' >
      <h3>Two Steps Table Select</h3>
      <div className='select-container'>
      <SelectComponent
        label="Category"
        options={categoryOptions}
        value={category}
        onChange={handleCategoryChange}
        
      />
      {category && (
        <SelectComponent
          label="Table"
          options={tableTitles}
          value={selectedTitle}
          onChange={handleTitleChange}
        />
      )}
       <button onClick={handleSelectionComplete}>Go to Table</button>
      </div>
     
    </div>
  );
}

