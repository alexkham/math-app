'use client'
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from 'chart.js';
import { VennDiagramChart } from "chartjs-chart-venn";

Chart.register(...registerables);

const SetTheoryVennDiagram2 = () => {
  const chartRef2 = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }

    const ctx = chartRef2.current.getContext('2d');

    const config = {
      type: "venn",
      data: {
        labels: ["A", "B", "C"],
        datasets: [{
          label: 'Set Theory',
          data: [
            { sets: ["A"], value: 'A' },
            { sets: ["B"], value: 'B' },
            { sets: ["C"], value: 'C' },
            { sets: ["A", "B"], value: 'A∩B' },
            { sets: ["A", "C"], value: 'A∩C' },
            { sets: ["B", "C"], value: 'B∩C' },
            { sets: ["A", "B", "C"], value: 'A∩B∩C' }
          ],
          font:{size:58},
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',  // Red for A
            'rgba(54, 162, 235, 0.5)',  // Blue for B
            'rgba(255, 206, 86, 0.5)',  // Yellow for C
            'rgba(75, 192, 192, 0.5)',  // Teal for A∩B
            'rgba(153, 102, 255, 0.5)', // Purple for A∩C
            'rgba(255, 159, 64, 0.5)',  // Orange for B∩C
            'rgba(201, 203, 207, 0.5)'  // Grey for A∩B∩C
          ]
        }]
      },
      options: {
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: "Set Theory: A, B, and C (with Intersections)",
            font: { size: 38 }
          },
          legend: {
            display: true,
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => {
                return tooltipItems[0].dataset.label;
              },
              label: (tooltipItem) => {
                const label = tooltipItem.label;
                const value = tooltipItem.raw.value;
                return ` ${value}`;
              }
            }
          }
        }
      }
    };

    chartInstance2.current = new VennDiagramChart(ctx, config);

    return () => {
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '600px', height: '500px', margin: 'auto' }}>
      <canvas ref={chartRef2} width="600" height="500"></canvas>
    </div>
  );
};

export default SetTheoryVennDiagram2;