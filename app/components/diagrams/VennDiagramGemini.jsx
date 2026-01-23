// components/VennDiagram.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as venn from 'venn.js';

const VennDiagramGemini = ({ sets, width = 600, height = 400 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // 1. Clean up previous render
    const chart = d3.select(chartRef.current);
    chart.selectAll("*").remove();

    // 2. Define the chart function from venn.js
    const vennChart = venn.VennDiagram()
      .width(width)
      .height(height);

    // 3. Render the chart
    chart.datum(sets).call(vennChart);

    // 4. Add Interactivity (Tooltip & Styling)
    
    // Style the text (labels)
    chart.selectAll("text")
      .style("fill", "#444")
      .style("font-family", "Arial, sans-serif")
      .style("font-weight", "600");

    // Add Hover Effects for Intersection/Union visualization
    chart.selectAll("g")
      .on("mouseover", function(event, d) {
        // Sort rendering order to bring hovered element to front
        venn.sortAreas(chart, d);

        // Highlight the hovered area (Intersection or single Set)
        const node = d3.select(this);
        node.select("path")
          .style("fill-opacity", 0.8)
          .style("stroke-opacity", 1)
          .style("stroke", "#333")
          .style("stroke-width", "2px");
        
        // Add a tooltip (simple title attribute for demo)
        // In production, use a custom div for tooltip
        node.select("text").style("font-weight", "bold");
      })
      .on("mouseout", function(event, d) {
        const node = d3.select(this);
        node.select("path")
          .style("fill-opacity", 0.5) // Reset opacity
          .style("stroke-opacity", 0);
          
        node.select("text").style("font-weight", "600");
      });

  }, [sets, width, height]); // Re-render if data changes

  return <div ref={chartRef} />;
};

export default VennDiagramGemini;