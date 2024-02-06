import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { pdf } from '@/app/utils/probability';

const BellCurve = ({ zScore }) => {
  // Function to calculate the probability density function
  

  // Generate data for the bell curve
  const dataPoints = Array.from({ length: 800 }, (_, index) => (index / 100 - 4).toFixed(2));
  const pdfValues = dataPoints.map(pdf);
  
//   const backgroundColor = dataPoints.map((x, index) => {
//     const xValue = parseFloat(x);
//     // Highlight if x is less than the single zScore or between two zScores
//     if (zScoresArray.length === 1) {
//       return xValue <= zScoresArray[0] ? 'rgba(0, 0, 255, 0.3)' : 'transparent';
//     } else if (zScoresArray.length > 1) {
//       return xValue >= zScoresArray[0] && xValue <= zScoresArray[1] ? 'rgba(0, 0, 255, 0.3)' : 'transparent';
//     }
//     return 'transparent';
//   });

  // Determine the chart data
  const chartData = {
    labels: dataPoints,
    datasets: [
      {
        label: 'Standard Normal Distribution',
        data: pdfValues,
        borderColor: 'blue',
        borderWidth: 1,
        pointBorderWidth:0.1,
        pointRadius:0.9,
        fill: true,
        backgroundColor: dataPoints.map(x => 
          Math.abs(x) <= zScore ? 'rgba(0, 0, 255, 0.3)' : 'transparent'
        ),
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Z-Score',
        },
      },
    
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Probability Density',
        },
      },
      
    },
  };

  return (
    <div style={{ width: '800px', height: '400px' }}>
      <Line data={chartData} options={{ ...options, maintainAspectRatio: false }} />
    </div>
  );
};

export default BellCurve;
