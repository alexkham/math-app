'use client'
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from 'chart.js';
import { VennDiagramChart } from "chartjs-chart-venn";

Chart.register(...registerables);

const StableChartVenn = () => {
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
        labels: ["Soccer", "Tennis", "Volleyball"],
        datasets: [{
          label: 'Sports',
          data: [
            { sets: ["Soccer"], value: 50 },
            { sets: ["Tennis"], value: 40 },
            { sets: ["Volleyball"], value: 30 },
            { sets: ["Soccer", "Tennis"], value: 10 },
            { sets: ["Soccer", "Volleyball"], value: 5 },
            { sets: ["Tennis", "Volleyball"], value: 8 },
            { sets: ["Soccer", "Tennis", "Volleyball"], value: 2 }
          ]
        }]
      },
      options: {
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: "Stable Venn Diagram"
          },
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    };

    chartInstance.current = new VennDiagramChart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <canvas ref={chartRef} width="600" height="400"></canvas>
    </div>
  );
};

export default StableChartVenn;