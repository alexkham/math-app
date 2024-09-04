'use client'
import React, { useEffect } from "react";
import { VennDiagramChart, extractSets } from "chartjs-chart-venn";

const ChartVenn = () => {
  const config = {
    type: "euler",
    data: {
      labels: [
        "Soccer",
        "Tennis",
        "Volleyball",
        "Soccer ∩ Tennis",
        "Soccer ∩ Volleyball",
        "Tennis ∩ Volleyball",
        "Soccer ∩ Tennis ∩ Volleyball"
      ],
      datasets: [
        {
          label: "Sports",
          data: [
            { sets: ["Soccer"], value: 2 },
            { sets: ["Tennis"], value: 0 },
            { sets: ["Volleyball"], value: ["LAK2011", "LAK2011"] },
            { sets: ["Soccer", "Tennis"], value: "a" },
            { sets: ["Soccer", "Volleyball"], value: 0 },
            { sets: ["Tennis", "Volleyball"], value: "a" },
            { sets: ["Soccer", "Tennis", "Volleyball"], value: "a" }
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Chart.js Venn Diagram Chart"
      }
    }
  };

  useEffect(() => {
    const ctx = document.getElementById("canvas");
    const d = new VennDiagramChart(ctx, config);
  }, []);

  return (
    <>
      <div className="App">
        <canvas id="canvas" ></canvas>
      </div>
    </>
  );
};

export default ChartVenn;