// // 'use client'
// // import React, { useEffect, useRef } from "react";
// // import { Chart, registerables } from 'chart.js';
// // import { VennDiagramChart } from "chartjs-chart-venn";

// // Chart.register(...registerables);

// // const SetTheoryVennDiagram = () => {
// //   const chartRef = useRef(null);
// //   const chartInstance = useRef(null);

// //   useEffect(() => {
// //     if (chartInstance.current) {
// //       chartInstance.current.destroy();
// //     }

// //     const ctx = chartRef.current.getContext('2d');

// //     const config = {
// //       type: "venn",
// //       data: {
// //         labels: ["A", "B", "C", "A ∩ B", "A ∩ C", "B ∩ C", "A ∩ B ∩ C"],
// //         datasets: [{
// //           label: 'Set Theory',
// //           data: [
// //             { sets: ["A"], value: 100, color: 'rgba(255, 0, 0, 0.5)' },
// //             { sets: ["B"], value: 100, color: 'rgba(0, 255, 0, 0.5)' },
// //             { sets: ["C"], value: 100, color: 'rgba(0, 0, 255, 0.5)' },
// //             { sets: ["A", "B"], value: 40, color: 'rgba(255, 255, 0, 0.5)' },
// //             { sets: ["A", "C"], value: 40, color: 'rgba(255, 0, 255, 0.5)' },
// //             { sets: ["B", "C"], value: 40, color: 'rgba(0, 255, 255, 0.5)' },
// //             { sets: ["A", "B", "C"], value: 20, color: 'rgba(128, 128, 128, 0.5)' }
// //           ]
// //         }]
// //       },
// //       options: {
// //         responsive: false,
// //         plugins: {
// //           title: {
// //             display: true,
// //             text: "Set Theory: A, B, and C",
// //             font: {
// //               size: 18
// //             }
// //           },
// //           legend: {
// //             display: true,
// //             position: 'bottom'
// //           },
// //           tooltip: {
// //             callbacks: {
// //               title: (tooltipItems) => {
// //                 return tooltipItems[0].label;
// //               },
// //               label: (tooltipItem) => {
// //                 return `Elements: ${tooltipItem.raw.value}`;
// //               }
// //             }
// //           }
// //         }
// //       }
// //     };

// //     chartInstance.current = new VennDiagramChart(ctx, config);

// //     return () => {
// //       if (chartInstance.current) {
// //         chartInstance.current.destroy();
// //       }
// //     };
// //   }, []);

// //   return (
// //     <div style={{ width: '600px', height: '500px', margin: 'auto' }}>
// //       <canvas ref={chartRef} width="600" height="500"></canvas>
// //     </div>
// //   );
// // };

// // export default SetTheoryVennDiagram;
'use client'
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from 'chart.js';
import { VennDiagramChart } from "chartjs-chart-venn";

Chart.register(...registerables);

const SetTheoryVennDiagram = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

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
            { sets: ["A", "C"], value: 40 },
            { sets: ["B", "C"], value: 40 },
            { sets: ["A", "B", "C"], value: 20 }
          ],
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
            text: "Set Theory: A, B, and C",
            font: { size: 28 }
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
                return `${label}: ${value} elements`;
              }
            }
          }
        }
      }
    };

    chartInstance.current = new VennDiagramChart(ctx, config);

    // data: [
    //     { sets: ["A"], value: 100, color: 'rgba(255, 99, 132, 0.5)' },    // Pink
    //     { sets: ["B"], value: 100, color: 'rgba(54, 162, 235, 0.5)' },    // Blue
    //     { sets: ["C"], value: 100, color: 'rgba(255, 206, 86, 0.5)' },    // Yellow
    //     { sets: ["A", "B"], value: 40, color: 'rgba(75, 192, 192, 0.5)' }, // Teal
    //     { sets: ["A", "C"], value: 40, color: 'rgba(153, 102, 255, 0.5)' }, // Purple
    //     { sets: ["B", "C"], value: 40, color: 'rgba(255, 159, 64, 0.5)' }, // Orange
    //     { sets: ["A", "B", "C"], value: 20, color: 'rgba(201, 203, 207, 0.5)' } // Gray
    //   ]

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '600px', height: '500px', margin: 'auto' }}>
      <canvas ref={chartRef} width="600" height="500"></canvas>
    </div>
  );
};

export default SetTheoryVennDiagram;