

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const defaultTheme = {
  background: "#ffffff",
  labelColor:"gray",
  gridColor: "#e5e5e5",
  axisColor: "#2c3e50",
  vectorColor: "#3498db",
  labelColor: "#34495e",
  fontFamily: "'Inter', -apple-system, sans-serif"
};

const VectorVisualizer2D = ({ 
  vectorCoordinates = [100, 150], 
  axisRange = 200,
  gridDivisions = 8,
  theme = defaultTheme
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up SVG dimensions
    const width = 400;
    const height = 400;
    const margin = 40;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Add background
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", theme.background);

    // Add border frame
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("stroke", theme.gridColor)
      .attr("stroke-width", 5);

    // Destructure vector coordinates
    const [vectorX, vectorY] = vectorCoordinates;

    // Define vector origin
    const origin = { x: width / 2, y: height / 2 };

    // Scales for grid numbers
    const xScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([0, width]);
    const yScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([height,0]);

    // Calculate step size based on gridDivisions
    const stepSize = (2 * axisRange) / gridDivisions;

    // Draw grid lines
    const gridLines = svg.append("g").attr("class", "grid");

    gridLines
      .selectAll(".vertical-line")
      .data(d3.range(-axisRange, axisRange + 1, stepSize))
      .enter()
      .append("line")
      .attr("x1", (d) => xScale(d))
      .attr("y1", 5)
      .attr("x2", (d) => xScale(d))
      .attr("y2", height-5)
      .attr("stroke", theme.gridColor)
      .attr("stroke-width", 1);

    gridLines
      .selectAll(".horizontal-line")
      .data(d3.range(-axisRange, axisRange + 1, stepSize))
      .enter()
      .append("line")
      .attr("x1", 5)
      .attr("y1", (d) => yScale(d))
      .attr("x2", width-5)
      .attr("y2", (d) => yScale(d))
      .attr("stroke", theme.gridColor)
      .attr("stroke-width", 1);

    // Draw coordinate axes with arrowheads
    svg
      .append("line")
      .attr("x1", 5)
      .attr("y1", height / 2)
      .attr("x2", width - 10)
      .attr("y2", height / 2)
      .attr("stroke", theme.axisColor)
      .attr("stroke-width", 1)
      .attr("marker-end", "url(#arrow)");

    svg
      .append("line")
      .attr("x1", width / 2)
      .attr("y1", height - margin+30)
      .attr("x2", width / 2)
      .attr("y2", 10)
      .attr("stroke", theme.axisColor)
      .attr("stroke-width", 1)
      .attr("marker-end", "url(#arrow)");

    // Draw the vector as an arrow
    svg
      .append("line")
      .attr("x1", origin.x)
      .attr("y1", origin.y)
      .attr("x2", origin.x + xScale(vectorX) - xScale(0))
      .attr("y2", origin.y + (yScale(vectorY) - yScale(0)))
      .attr("stroke", theme.vectorColor)
      .attr("stroke-width", 1.5)
      .attr("marker-end", "url(#arrow-vector)");

    // Add labels for axes - now using gridColor
    svg
      .append("text")
      .attr("x", width - margin + 10)
      .attr("y", height / 2 - 10)
      .attr("fill", theme.labelColor)
      .style("font-size", "18px")
      .style("font-family", theme.fontFamily)
      .text("X");

    svg
      .append("text")
      .attr("x", width / 2 + 10)
      .attr("y", margin - 10)
      .attr("fill", theme.labelColor)
      .style("font-size", "18px")
      .style("font-family", theme.fontFamily)
      .text("Y");

    // Add grid numbers - now using gridColor
    gridLines
      .selectAll(".x-label")
      .data(d3.range(-axisRange, axisRange + 1, stepSize))
      .enter()
      .append("text")
      .attr("x", (d) => xScale(d))
      .attr("y", height / 2 + 15)
      .attr("text-anchor", "right")
      .attr("fill", theme.labelColor)
      .style("font-size", "10px")
      .style("font-family", theme.fontFamily)
      .text((d) => d);

    gridLines
      .selectAll(".y-label")
      .data(d3.range(-axisRange, axisRange + 1, stepSize))
      .enter()
      .append("text")
      .attr("x", width / 2 + 5)
      .attr("y", (d) => yScale(d))
      .attr("text-anchor", "start")
      .attr("alignment-baseline", "middle")
      .attr("fill", theme.labelColor)
      .style("font-size", "10px")
      .style("font-family", theme.fontFamily)
      .text((d) => d !== 0 ? d : '');

    // Define arrowhead markers
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrow")
      .attr("viewBox", [0, 0, 10, 10])
      .attr("refX", 5)
      .attr("refY", 5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto-start-reverse")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", theme.axisColor);

    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrow-vector")
      .attr("viewBox", [0, 0, 10, 10])
      .attr("refX", 5)
      .attr("refY", 5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto-start-reverse")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", theme.vectorColor);
  }, [vectorCoordinates, axisRange, gridDivisions, theme]);

  return <svg ref={svgRef}></svg>;
};

export default VectorVisualizer2D;