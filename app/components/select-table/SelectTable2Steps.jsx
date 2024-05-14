'use client'
import React, { useState, useEffect } from 'react';
import SelectComponent from '../select-component/SelectComponent';
import { useRouter } from 'next/navigation';
import '../../globals.css'

export default function SelectTable2Steps({ categoryOptions, filesData }) {
  
  const arithmeticTitles=["Logarithms","Natural_Logarithms","Binary_Logarithms"]

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
    const title=e.target.value;
    setSelectedTitle(title);
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
      {/* {<span>{selectedTitle}</span>} */}
      <div className='select-container'>
      <SelectComponent
        label="Category"
        options={categoryOptions}
        value={category}
        onChange={handleCategoryChange}
        
      />
      {category&&category!='Arithmetics' && (
        <SelectComponent
          label="Table"
          options={tableTitles}
          value={selectedTitle}
          onChange={handleTitleChange}
        />
      )}
      { category==='Arithmetics'&&(
        <SelectComponent
        label="Table"
        options={arithmeticTitles}
        value={selectedTitle}
        onChange={handleTitleChange}
      />

      )

      }
       <button onClick={handleSelectionComplete}>Go to Table</button>
      </div>
     
    </div>
  );
}

