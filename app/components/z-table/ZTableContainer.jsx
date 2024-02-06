'use client'
import React ,{useState} from 'react'
import SelectComponent from '../select-component/SelectComponent';
import { cumulativeProbability,complementaryCumulativeProbability } from '@/app/utils/z-tables';
import FlexTableDynamic from './FlexTableDynamic';
import { probabilityBetweenZScores,twoTailedZScore } from '@/app/utils/z-tables';
import './FlexTable.css'

const z_tables = {
    "Cumulative (less than Z) Positive Values": {
      startZ: 0,
      endZ: 4.1,
      increment: 0.1,
      probabilityCalculation: cumulativeProbability, // Assuming you want cumulative for positive
    },
    "Cumulative (less than Z) Negative Values": {
      startZ: -4.0,
      endZ: 0,
      increment: 0.1,
      probabilityCalculation: cumulativeProbability, // Assuming you want cumulative for negative
    },
    "Complementary Cumulative (greater than Z) for Positive Values":{
        startZ: 0,
        endZ: 4.1,
        increment: 0.1,
        probabilityCalculation: complementaryCumulativeProbability
    },
    "Complementary Cumulative (greater than Z) for Negative Values":{
        startZ: -4.1,
        endZ: 0,
        increment: 0.1,
        probabilityCalculation: complementaryCumulativeProbability
    },
    // "Cumulative (less than Z) Large Positive Values": {
    //   startZ: 0,
    //   endZ: 80,
    //   increment: 10,
    //   probabilityCalculation: cumulativeProbability, // Assuming you want cumulative for positive
    // },
    // Add other table configurations as needed
  };

function ZTableContainer() {
 const [selectedTable, setSelectedTable] = useState('');

 const tables=Object.keys(z_tables)

 const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  }
  
  return (
    <div className='z-container-outer'>
    
    <SelectComponent 
    label={" Type of Z-table"}
    options={tables}
    onChange={handleTableChange}></SelectComponent>
    
    {selectedTable && z_tables[selectedTable] && (
        <>
        <h2 className='title'>{selectedTable}</h2>
        <FlexTableDynamic
          {...z_tables[selectedTable]}
        />
        </>
      )}


    </div>
  )
}

export default ZTableContainer