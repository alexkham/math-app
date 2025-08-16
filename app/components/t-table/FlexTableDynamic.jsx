import React from 'react';
import '../z-table/FlexTable.css';
import { cumulativeProbabilityT, complementaryCumulativeProbabilityT } from '@/app/utils/t-tables';

const FlexTableDynamic = ({ startT = 0, endT = 4.1, increment = 0.1, probabilityCalculation, degreesOfFreedom }) => {
  const generateTableData = () => {
    const data = [];
    for (let i = startT; i <= endT; i += increment) {
      const row = { t: parseFloat(i.toFixed(1)), values: [] };
      for (let j = 0; j <= 0.09; j += 0.01) {
        const tScore = row.t + parseFloat(j.toFixed(2));
        const probability = probabilityCalculation(tScore, degreesOfFreedom);
        row.values.push({ tScore: tScore.toFixed(2), probability: probability });
      }
      data.push(row);
    }
    return data;
  };

  const tableData = generateTableData();

  return (
    <div className="flex-table-container" role="table" aria-label="T-Distribution Table">
      <div className="flex-table-header" role="rowgroup">
        <div className="flex-table-cell header-cell" role="columnheader">t</div>
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="flex-table-cell header-cell" role="columnheader">+0.{index.toString().padStart(2, '0')}</div>
        ))}
      </div>
      {/* Table body */}
      {tableData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex-table-row" role="row">
          <div className="flex-table-cell first-column" role="cell">{row.t.toFixed(1)}</div>
          {row.values.map((cell, cellIndex) => (
            <div key={cellIndex} className="flex-table-cell tooltip-container" role="cell">
              {cell.probability.toFixed(5)}
              <span className="tooltip">T-Score: {cell.tScore}, Probability: {cell.probability.toFixed(5)}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="flex-table-header" role="rowgroup">
        <div className="flex-table-cell header-cell" role="columnheader">t</div>
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="flex-table-cell header-cell" role="columnheader">+0.{index.toString().padStart(2, '0')}</div>
        ))}
      </div>
    </div>
  );
};

export default FlexTableDynamic;