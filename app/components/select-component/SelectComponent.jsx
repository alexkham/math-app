import React from 'react';
import './SelectComponent.css'

function SelectComponent({ label, options,value,onChange }) {


  return (
    <div className='select-container'>
      <label className={"label"}>
        {label}
      </label>
      <select
        className={"select"}
        value={value}
        onChange={onChange}        
      >
        <option>Select {label}</option>
        {options?.map((option,index) => (
          <option key={index} >
            {option}
          </option>
        ))}
      </select>
      
    </div>
  );
}

export default SelectComponent;


