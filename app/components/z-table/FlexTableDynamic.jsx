import React from 'react';
import './FlexTable.css';
import { cumulativeProbability,complementaryCumulativeProbability } from '@/app/utils/z-tables';
import { probabilityBetweenZScores,twoTailedZScore } from '@/app/utils/z-tables';

const FlexTableDynamic = ({ startZ = 0, endZ = 4.1, increment = 0.1, probabilityCalculation }) => {
    function cumulativeProbability(z) {
        const p = 0.2316419;
        const b1 = 0.319381530;
        const b2 = -0.356563782;
        const b3 = 1.781477937;
        const b4 = -1.821255978;
        const b5 = 1.330274429;
        const t = 1 / (1 + p * Math.abs(z));
        const tSeries = b1 * t + b2 * Math.pow(t, 2) + b3 * Math.pow(t, 3) + b4 * Math.pow(t, 4) + b5 * Math.pow(t, 5);
        const sigma = 1 - (1 / (Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * Math.pow(z, 2))) * tSeries;
        return z < 0 ? 1 - sigma : sigma;
      }
  const generateTableData = () => {
    const data = [];
    for (let i = startZ; i <= endZ; i += increment) {
      const row = { z: parseFloat(i.toFixed(1)), values: [] };
      for (let j = 0; j <= 0.09; j += 0.01) {
        const zScore = row.z + parseFloat(j.toFixed(2));
        const probability = probabilityCalculation(zScore);
        row.values.push({ zScore: zScore.toFixed(2), probability: probability });
      }
      data.push(row);
    }
    return data;
  };

  const tableData = generateTableData();

  return (
    <div className="flex-table-container" role="table" aria-label="Normal Distribution Table">
      <div className="flex-table-header" role="rowgroup">
        <div className="flex-table-cell header-cell" role="columnheader">z</div>
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="flex-table-cell header-cell" role="columnheader">+0.{index.toString().padStart(2, '0')}</div>
        ))}
      </div>
      {/* Table body */}
      {tableData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex-table-row" role="row">
          <div className="flex-table-cell first-column" role="cell">{row.z.toFixed(1)}</div>
          {row.values.map((cell, cellIndex) => (
            <div key={cellIndex} className="flex-table-cell tooltip-container" role="cell">
              {cell.probability.toFixed(5)}
              <span className="tooltip">Z-Score: {cell.zScore}, Probability: {cell.probability.toFixed(5)}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="flex-table-header" role="rowgroup">
        <div className="flex-table-cell header-cell" role="columnheader">z</div>
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="flex-table-cell header-cell" role="columnheader">+0.{index.toString().padStart(2, '0')}</div>
        ))}
      </div>
    </div>
  );
};

export default FlexTableDynamic;
