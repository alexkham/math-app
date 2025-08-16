'use client'
import React, { useState } from 'react';
import BellCurve from './BellCurve';

const ZScoreVisualizer = () => {
  const [zScore, setZScore] = useState(0.96); // Example: Set the default z-score

  // Update zScore based on user input, if necessary
  // For example, you could use an input field to let users change the zScore

  return (
    <div>
      <h2>Z-Score Visualization</h2>
      {/* Render the BellCurve component with the current zScore */}
      <BellCurve zScore={zScore} />
      {/* Optionally, add an input to change the zScore dynamically */}
      <input
        type="number"
        value={zScore}
        onChange={(e) => setZScore(Number(e.target.value))}
      />
      <span>{zScore}</span>
    </div>
  );
};

export default ZScoreVisualizer;
