'use client'
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(...registerables, annotationPlugin);


const BellCurveHighlighted = ({ dataPoints, zScore = 2.99 }) => {
  const pdf = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
  const [backgroundColor, setBackgroundColor] = useState('trasnsparent');

  useEffect(() => {
    const newBackgroundColor = dataPoints.map(x => {
      const numericX = parseFloat(x);
      return numericX <= zScore ? 'rgba(0, 0, 255, 0.3)' : 'transparent';
    });
    setBackgroundColor([...newBackgroundColor]);
  }, [dataPoints, zScore]); // Dependencies: Recompute when dataPoints or zScore changes
  

  useEffect(() => {
    const chart = Chart.getChart("myChart"); // Assuming "myChart" is your chart's ID
    if (!chart) {
      return;
    }
  
    // Extend the chart to draw a vertical line after the main chart has been rendered
    const originalDraw = chart.draw;
    chart.draw = function () {
      originalDraw.apply(this, arguments);
  
      const ctx = this.ctx;
      const yAxis = this.scales.y;
      const xAxis = this.scales.x;
      const xValue = xAxis.getPixelForValue(zScore); // Convert zScore to pixel on the x-axis
      const yValueMax = yAxis.getPixelForValue(pdf(zScore)); // Convert the pdf(zScore) to pixel on the y-axis
  
      // Start custom drawing
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xValue, yAxis.bottom); // Start at the bottom of the chart
      ctx.lineTo(xValue, yValueMax); // Draw line up to the calculated y-value
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgb(0, 0, 232)';
      ctx.stroke();
      ctx.restore();
    };
  
    // Trigger a redraw to apply the custom drawing
    chart.update();
  }, [dataPoints, zScore]); // Re-run effect if dataPoints or zScore changes
  

  const pdfValues = dataPoints.map(x => pdf(parseFloat(x)));

  const chartData = {
    labels: dataPoints,
    datasets: [{
      label: 'Distribution',
      data: pdfValues.map(value => value.toFixed(4)),
      borderColor: 'rgba(0, 0, 192, 1)',
      borderWidth: 1,
      fill: true,
      radius:0.1,
      backgroundColor:[...backgroundColor], // Use state for backgroundColor
    }],
  };

//   const options = {
//     scales: {
//       x: { title: { display: true, text: 'Z-Score' } },
//       y: { beginAtZero: true, title: { display: true, text: 'Probability Density' } },
//     },
//     elements: { point: { radius: 0 } }, // Smooth curve
//     maintainAspectRatio: false,
//   };

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
    plugins: {
        annotation: {
            annotations: {
                line1: {
                    type: 'line',
                    xMin:(zScore+4)*100,
                    xMax: (zScore+4)*100,
                    borderColor: 'rgb(0, 0, 232)',
                    borderWidth: 0.9,
                    yMin:0,
                    yMax:pdf(zScore+4),
                    
                    
                    
                    label: {
                        content: `Z-Score: ${zScore}`,
                        enabled: true,
                        position: "6"
                    }
                }
            }
        }
    },
    maintainAspectRatio: false,
};


  return (
    <div style={{ width: '800px', height: '400px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BellCurveHighlighted;
