'use client'
import React, { useState } from 'react';
import SelectComponent from './select-component/SelectComponent';

function ParentSelect() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <SelectComponent 
        label="Your Choice " 
        options={['Option1', 'Option2']} 
        value={selectedValue}
        onChange={handleSelectChange} 
      />
      <p>Selected Value: {selectedValue}</p> {/* This will display the selected value */}
    </div>
  );
}

export default ParentSelect;
