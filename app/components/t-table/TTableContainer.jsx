// 'use client'
// import React, { useState } from 'react'
// import SelectComponent from '../select-component/SelectComponent';
// import { cumulativeProbabilityT, complementaryCumulativeProbabilityT } from '@/app/utils/t-tables';
// import FlexTableDynamic from './FlexTableDynamic';
// import '../z-table/FlexTable.css'

// const t_tables = {
//     "Cumulative (less than t) Positive Values": {
//       startT: 0,
//       endT: 4.1,
//       increment: 0.1,
//       probabilityCalculation: cumulativeProbabilityT,
//     },
//     "Cumulative (less than t) Negative Values": {
//       startT: -4.0,
//       endT: 0,
//       increment: 0.1,
//       probabilityCalculation: cumulativeProbabilityT,
//     },
//     "Complementary Cumulative (greater than t) for Positive Values": {
//         startT: 0,
//         endT: 4.1,
//         increment: 0.1,
//         probabilityCalculation: complementaryCumulativeProbabilityT
//     },
//     "Complementary Cumulative (greater than t) for Negative Values": {
//         startT: -4.1,
//         endT: 0,
//         increment: 0.1,
//         probabilityCalculation: complementaryCumulativeProbabilityT
//     },
// };

// function TTableContainer() {
//  const [selectedTable, setSelectedTable] = useState('');
//  const [degreesOfFreedom, setDegreesOfFreedom] = useState(30);

//  const tables = Object.keys(t_tables)

//  const handleTableChange = (e) => {
//     setSelectedTable(e.target.value);
//  }

//  const handleDOFChange = (e) => {
//     setDegreesOfFreedom(parseInt(e.target.value));
//  }

//  return (
//     <div className='t-container-outer'>
//         <SelectComponent
//          label=" Type of t-table"
//          options={tables}
//          onChange={handleTableChange}></SelectComponent>

//         <input
//           type="number"
//           min="1"
//           value={degreesOfFreedom}
//           onChange={handleDOFChange}
//           placeholder="Degrees of Freedom"
//         />

//         {selectedTable && t_tables[selectedTable] && (
//         <>
//         <h2 className='title'>{selectedTable}</h2>
//         <FlexTableDynamic
//           {...t_tables[selectedTable]}
//           degreesOfFreedom={degreesOfFreedom}
//         />
//         </>
//       )}
//     </div>
//  )
// }

// export default TTableContainer
'use client'
import React, { useState } from 'react'
import SelectComponent from '../select-component/SelectComponent';
import { cumulativeProbabilityT, complementaryCumulativeProbabilityT } from '@/app/utils/t-tables';
import FlexTableDynamic from './FlexTableDynamic';
import './FlexTable.css'

const t_tables = {
    "Cumulative (less than t) Positive Values": {
      startT: 0,
      endT: 4.1,
      increment: 0.1,
      probabilityCalculation: (t, df) => cumulativeProbabilityT(t, df),
    },
    "Cumulative (less than t) Negative Values": {
      startT: -4.0,
      endT: 0,
      increment: 0.1,
      probabilityCalculation: (t, df) => cumulativeProbabilityT(t, df),
    },
    "Complementary Cumulative (greater than t) for Positive Values": {
        startT: 0,
        endT: 4.1,
        increment: 0.1,
        probabilityCalculation: (t, df) => complementaryCumulativeProbabilityT(t, df),
    },
    "Complementary Cumulative (greater than t) for Negative Values": {
        startT: -4.1,
        endT: 0,
        increment: 0.1,
        probabilityCalculation: (t, df) => complementaryCumulativeProbabilityT(t, df),
    },
};

function TTableContainer() {
 const [selectedTable, setSelectedTable] = useState('');
 const [degreesOfFreedom, setDegreesOfFreedom] = useState(30);

 const tables = Object.keys(t_tables)

 const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
 }

 const handleDOFChange = (e) => {
    setDegreesOfFreedom(parseInt(e.target.value));
 }

 return (
    <div className='t-container-outer'>
        <div className='input-container'>
        <SelectComponent
         label=" Type of t-table"
         options={tables}
        
         onChange={handleTableChange}></SelectComponent>
        <label>Degrees of Freedom</label>
        <input
          type="number"
          min="1"
          value={degreesOfFreedom}
          onChange={handleDOFChange}
         
          placeholder="Degrees of Freedom"
        />
        </div>

        {selectedTable && t_tables[selectedTable] && (
        <>
        <h2 className='title'>{selectedTable}</h2>
        <FlexTableDynamic
          {...t_tables[selectedTable]}
          degreesOfFreedom={degreesOfFreedom}
        />
        </>
      )}
    </div>
 )
}

export default TTableContainer