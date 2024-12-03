// // // // import React, { useEffect, useRef } from "react";
// // // // import * as d3 from "d3";

// // // // const VectorVisualizer2D = () => {
// // // //   const svgRef = useRef(null);

// // // //   useEffect(() => {
// // // //     // Clear previous SVG content
// // // //     d3.select(svgRef.current).selectAll("*").remove();

// // // //     // Set up SVG dimensions
// // // //     const width = 400;
// // // //     const height = 400;
// // // //     const margin = 20;

// // // //     const svg = d3
// // // //       .select(svgRef.current)
// // // //       .attr("width", width)
// // // //       .attr("height", height)
// // // //       .style("border", "1px solid black");

// // // //     // Define vector origin and end
// // // //     const origin = { x: width / 2, y: height / 2 };
// // // //     const vector = { x: 100, y: -150 }; // Example vector (100, -150)

// // // //     // Draw coordinate axes
// // // //     svg
// // // //       .append("line")
// // // //       .attr("x1", margin)
// // // //       .attr("y1", height / 2)
// // // //       .attr("x2", width - margin)
// // // //       .attr("y2", height / 2)
// // // //       .attr("stroke", "black")
// // // //       .attr("stroke-width", 1);

// // // //     svg
// // // //       .append("line")
// // // //       .attr("x1", width / 2)
// // // //       .attr("y1", margin)
// // // //       .attr("x2", width / 2)
// // // //       .attr("y2", height - margin)
// // // //       .attr("stroke", "black")
// // // //       .attr("stroke-width", 1);

// // // //     // Draw the vector as an arrow
// // // //     svg
// // // //       .append("line")
// // // //       .attr("x1", origin.x)
// // // //       .attr("y1", origin.y)
// // // //       .attr("x2", origin.x + vector.x)
// // // //       .attr("y2", origin.y + vector.y)
// // // //       .attr("stroke", "blue")
// // // //       .attr("stroke-width", 2)
// // // //       .attr("marker-end", "url(#arrow)");

// // // //     // Define an arrowhead
// // // //     svg
// // // //       .append("defs")
// // // //       .append("marker")
// // // //       .attr("id", "arrow")
// // // //       .attr("viewBox", [0, 0, 10, 10])
// // // //       .attr("refX", 5)
// // // //       .attr("refY", 5)
// // // //       .attr("markerWidth", 6)
// // // //       .attr("markerHeight", 6)
// // // //       .attr("orient", "auto-start-reverse")
// // // //       .append("path")
// // // //       .attr("d", "M 0 0 L 10 5 L 0 10 z")
// // // //       .attr("fill", "blue");
// // // //   }, []);

// // // //   return <svg ref={svgRef}></svg>;
// // // // };

// // // // export default VectorVisualizer2D;


// // // import React, { useEffect, useRef } from "react";
// // // import * as d3 from "d3";

// // // const VectorVisualizer = () => {
// // //   const svgRef = useRef(null);

// // //   useEffect(() => {
// // //     // Clear previous SVG content
// // //     d3.select(svgRef.current).selectAll("*").remove();

// // //     // Set up SVG dimensions
// // //     const width = 400;
// // //     const height = 400;
// // //     const margin = 40;

// // //     const svg = d3
// // //       .select(svgRef.current)
// // //       .attr("width", width)
// // //       .attr("height", height);

// // //     // Define vector origin and end
// // //     const origin = { x: width / 2, y: height / 2 };
// // //     const vector = { x: 100, y: -150 }; // Example vector (100, -150)

// // //     // Scale for grid numbers
// // //     const xScale = d3.scaleLinear().domain([-200, 200]).range([0, width]);
// // //     const yScale = d3.scaleLinear().domain([-200, 200]).range([height, 0]);

// // //     // Draw grid lines
// // //     const gridLines = svg.append("g").attr("class", "grid");

// // //     gridLines
// // //       .selectAll(".vertical-line")
// // //       .data(d3.range(-200, 201, 50))
// // //       .enter()
// // //       .append("line")
// // //       .attr("x1", (d) => xScale(d))
// // //       .attr("y1", 0)
// // //       .attr("x2", (d) => xScale(d))
// // //       .attr("y2", height)
// // //       .attr("stroke", "#ddd")
// // //       .attr("stroke-width", 0.5);

// // //     gridLines
// // //       .selectAll(".horizontal-line")
// // //       .data(d3.range(-200, 201, 50))
// // //       .enter()
// // //       .append("line")
// // //       .attr("x1", 0)
// // //       .attr("y1", (d) => yScale(d))
// // //       .attr("x2", width)
// // //       .attr("y2", (d) => yScale(d))
// // //       .attr("stroke", "#ddd")
// // //       .attr("stroke-width", 0.5);

// // //     // Draw coordinate axes with arrowheads
// // //     svg
// // //       .append("line")
// // //       .attr("x1", margin)
// // //       .attr("y1", height / 2)
// // //       .attr("x2", width - margin)
// // //       .attr("y2", height / 2)
// // //       .attr("stroke", "black")
// // //       .attr("stroke-width", 1.5)
// // //       .attr("marker-end", "url(#arrow)");

// // //     svg
// // //       .append("line")
// // //       .attr("x1", width / 2)
// // //       .attr("y1", height - margin)
// // //       .attr("x2", width / 2)
// // //       .attr("y2", margin)
// // //       .attr("stroke", "black")
// // //       .attr("stroke-width", 1.5)
// // //       .attr("marker-end", "url(#arrow)");

// // //     // Draw the vector as an arrow
// // //     svg
// // //       .append("line")
// // //       .attr("x1", origin.x)
// // //       .attr("y1", origin.y)
// // //       .attr("x2", origin.x + vector.x)
// // //       .attr("y2", origin.y + vector.y)
// // //       .attr("stroke", "blue")
// // //       .attr("stroke-width", 2)
// // //       .attr("marker-end", "url(#arrow)");

// // //     // Add labels for axes
// // //     svg
// // //       .append("text")
// // //       .attr("x", width - margin + 10)
// // //       .attr("y", height / 2 - 10)
// // //       .attr("fill", "black")
// // //       .style("font-size", "12px")
// // //       .text("X");

// // //     svg
// // //       .append("text")
// // //       .attr("x", width / 2 + 10)
// // //       .attr("y", margin - 10)
// // //       .attr("fill", "black")
// // //       .style("font-size", "12px")
// // //       .text("Y");

// // //     // Add grid numbers
// // //     gridLines
// // //       .selectAll(".x-label")
// // //       .data(d3.range(-200, 201, 50))
// // //       .enter()
// // //       .append("text")
// // //       .attr("x", (d) => xScale(d))
// // //       .attr("y", height / 2 + 15)
// // //       .attr("text-anchor", "middle")
// // //       .attr("fill", "#666")
// // //       .style("font-size", "10px")
// // //       .text((d) => d);

// // //     gridLines
// // //       .selectAll(".y-label")
// // //       .data(d3.range(-200, 201, 50))
// // //       .enter()
// // //       .append("text")
// // //       .attr("x", width / 2 + 5)
// // //       .attr("y", (d) => yScale(d))
// // //       .attr("text-anchor", "start")
// // //       .attr("alignment-baseline", "middle")
// // //       .attr("fill", "#666")
// // //       .style("font-size", "10px")
// // //       .text((d) => d);

// // //     // Define arrowhead marker
// // //     svg
// // //       .append("defs")
// // //       .append("marker")
// // //       .attr("id", "arrow")
// // //       .attr("viewBox", [0, 0, 10, 10])
// // //       .attr("refX", 5)
// // //       .attr("refY", 5)
// // //       .attr("markerWidth", 6)
// // //       .attr("markerHeight", 6)
// // //       .attr("orient", "auto-start-reverse")
// // //       .append("path")
// // //       .attr("d", "M 0 0 L 10 5 L 0 10 z")
// // //       .attr("fill", "black");
// // //   }, []);

// // //   return <svg ref={svgRef}></svg>;
// // // };

// // // export default VectorVisualizer;
// // import React, { useEffect, useRef } from "react";
// // import * as d3 from "d3";

// // const VectorVisualizer2D = ({ vectorCoordinates = [100, 150], axisRange = 200 }) => {
// //   const svgRef = useRef(null);

// //   useEffect(() => {
// //     // Clear previous SVG content
// //     d3.select(svgRef.current).selectAll("*").remove();

// //     // Set up SVG dimensions
// //     const width = 400;
// //     const height = 400;
// //     const margin = 40;

// //     const svg = d3
// //       .select(svgRef.current)
// //       .attr("width", width)
// //       .attr("height", height);

// //     // Destructure vector coordinates
// //     const [vectorX, vectorY] = vectorCoordinates;

// //     // Define vector origin
// //     const origin = { x: width / 2, y: height / 2 };

// //     // Scales for grid numbers
// //     const xScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([0, width]);
// //     // const yScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([height, 0]);
// //     const yScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([ height,0]);


// //     // Draw grid lines
// //     const gridLines = svg.append("g").attr("class", "grid");

// //     gridLines
// //       .selectAll(".vertical-line")
// //       .data(d3.range(-axisRange, axisRange + 1, 1))
// //       .enter()
// //       .append("line")
// //       .attr("x1", (d) => xScale(d))
// //       .attr("y1", 0)
// //       .attr("x2", (d) => xScale(d))
// //       .attr("y2", height)
// //       .attr("stroke", "gray")
// //       .attr("stroke-width", 0.25);

// //     gridLines
// //       .selectAll(".horizontal-line")
// //       .data(d3.range(-axisRange, axisRange + 1, 1))
// //       .enter()
// //       .append("line")
// //       .attr("x1", 0)
// //       .attr("y1", (d) => yScale(d))
// //       .attr("x2", width)
// //       .attr("y2", (d) => yScale(d))
// //       .attr("stroke", "gray")
// //       .attr("stroke-width", 0.25);

// //     // Draw coordinate axes with arrowheads
// //     svg
// //       .append("line")
// //       .attr("x1", 0)
// //       .attr("y1", height / 2)
// //       .attr("x2", width -10)
// //       .attr("y2", height / 2)
// //       .attr("stroke", "gray")
// //       .attr("stroke-width", 1)
// //       .attr("marker-end", "url(#arrow)");

// //     svg
// //       .append("line")
// //       .attr("x1", width / 2)
// //       .attr("y1", height - margin)
// //       .attr("x2", width / 2)
// //       .attr("y2", 10)
// //       .attr("stroke", "gray")
// //       .attr("stroke-width", 1)
// //       .attr("marker-end", "url(#arrow)");

// //     // Draw the vector as an arrow
// //     svg
// //       .append("line")
// //       .attr("x1", origin.x)
// //       .attr("y1", origin.y)
// //       .attr("x2", origin.x + xScale(vectorX) - xScale(0))
// //       .attr("y2", origin.y +(yScale(vectorY) - yScale(0)))
// //       .attr("stroke", "blue")
// //       .attr("stroke-width", 1)
// //       .attr("marker-end", "url(#arrow-blue)");

// //     // Add labels for axes
// //     svg
// //       .append("text")
// //       .attr("x", width - margin + 10)
// //       .attr("y", height / 2 - 10)
// //       .attr("fill", "black")
// //       .style("font-size", "18px")
// //       .text("X");

// //     svg
// //       .append("text")
// //       .attr("x", width / 2 + 10)
// //       .attr("y", margin - 10)
// //       .attr("fill", "black")
// //       .style("font-size", "18px")
// //       .text("Y");

// //     // Add grid numbers
// //     gridLines
// //       .selectAll(".x-label")
// //       .data(d3.range(-axisRange, axisRange + 1, 1))
// //       .enter()
// //       .append("text")
// //       .attr("x", (d) => xScale(d))
// //       .attr("y", height / 2 + 15)
// //       .attr("text-anchor", "middle")
// //       .attr("fill", "#666")
// //       .style("font-size", "10px")
// //       .text((d) => d);

// //     gridLines
// //       .selectAll(".y-label")
// //       .data(d3.range(-axisRange, axisRange + 1, 1))
// //       .enter()
// //       .append("text")
// //       .attr("x", width / 2 + 5)
// //       .attr("y", (d) => yScale(d))
// //       .attr("text-anchor", "start")
// //       .attr("alignment-baseline", "middle")
// //       .attr("fill", "#666")
// //       .style("font-size", "10px")
// //       .text((d) => d);

// //     // Define arrowhead marker
// //     svg
// //       .append("defs")
// //       .append("marker")
// //       .attr("id", "arrow")
// //       .attr("viewBox", [0, 0, 10, 10])
// //       .attr("refX", 5)
// //       .attr("refY", 5)
// //       .attr("markerWidth", 6)
// //       .attr("markerHeight", 6)
// //       .attr("orient", "auto-start-reverse")
// //       .append("path")
// //       .attr("d", "M 0 0 L 10 5 L 0 10 z")
// //       .attr("fill", "gray");

// //       svg
// //       .append("defs")
// //       .append("marker")
// //       .attr("id", "arrow-blue")
// //       .attr("viewBox", [0, 0, 10, 10])
// //       .attr("refX", 5)
// //       .attr("refY", 5)
// //       .attr("markerWidth", 6)
// //       .attr("markerHeight", 6)
// //       .attr("orient", "auto-start-reverse")
// //       .append("path")
// //       .attr("d", "M 0 0 L 10 5 L 0 10 z")
// //       .attr("fill", "blue");
// //   }, [vectorCoordinates, axisRange]);

// //   return <svg ref={svgRef}></svg>;
// // };

// // export default VectorVisualizer2D;


// // import React, { useEffect, useRef } from "react";
// // import * as d3 from "d3";

// // const VectorVisualizer2D = ({ 
// //   vectorCoordinates = [100, 150], 
// //   axisRange = 200,
// //   gridDivisions = 8 // New prop to control number of divisions
// // }) => {
// //   const svgRef = useRef(null);

// //   useEffect(() => {
// //     // Clear previous SVG content
// //     d3.select(svgRef.current).selectAll("*").remove();

// //     // Set up SVG dimensions
// //     const width = 400;
// //     const height = 400;
// //     const margin = 40;

// //     const svg = d3
// //       .select(svgRef.current)
// //       .attr("width", width)
// //       .attr("height", height);

// //     // Destructure vector coordinates
// //     const [vectorX, vectorY] = vectorCoordinates;

// //     // Define vector origin
// //     const origin = { x: width / 2, y: height / 2 };

// //     // Scales for grid numbers
// //     const xScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([0, width]);
// //     const yScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([ height,0]);

// //     // Calculate step size based on gridDivisions
// //     const stepSize = (2 * axisRange) / gridDivisions;

// //     // Draw grid lines
// //     const gridLines = svg.append("g").attr("class", "grid");

// //     gridLines
// //       .selectAll(".vertical-line")
// //       .data(d3.range(-axisRange, axisRange + 1, stepSize))
// //       .enter()
// //       .append("line")
// //       .attr("x1", (d) => xScale(d))
// //       .attr("y1", 0)
// //       .attr("x2", (d) => xScale(d))
// //       .attr("y2", height)
// //       .attr("stroke", "gray")
// //       .attr("stroke-width", 0.25);

// //     gridLines
// //       .selectAll(".horizontal-line")
// //       .data(d3.range(-axisRange, axisRange + 1, stepSize))
// //       .enter()
// //       .append("line")
// //       .attr("x1", 0)
// //       .attr("y1", (d) => yScale(d))
// //       .attr("x2", width)
// //       .attr("y2", (d) => yScale(d))
// //       .attr("stroke", "gray")
// //       .attr("stroke-width", 0.25);

// //     // Draw coordinate axes with arrowheads
// //     svg
// //       .append("line")
// //       .attr("x1", 0)
// //       .attr("y1", height / 2)
// //       .attr("x2", width - 10)
// //       .attr("y2", height / 2)
// //       .attr("stroke", "gray")
// //       .attr("stroke-width", 1)
// //       .attr("marker-end", "url(#arrow)");

// //     svg
// //       .append("line")
// //       .attr("x1", width / 2)
// //       .attr("y1", height - margin)
// //       .attr("x2", width / 2)
// //       .attr("y2", 10)
// //       .attr("stroke", "gray")
// //       .attr("stroke-width", 1)
// //       .attr("marker-end", "url(#arrow)");

// //     // Draw the vector as an arrow
// //     svg
// //       .append("line")
// //       .attr("x1", origin.x)
// //       .attr("y1", origin.y)
// //       .attr("x2", origin.x + xScale(vectorX) - xScale(0))
// //       .attr("y2", origin.y + (yScale(vectorY) - yScale(0)))
// //       .attr("stroke", "blue")
// //       .attr("stroke-width", 1)
// //       .attr("marker-end", "url(#arrow-blue)");

// //     // Add labels for axes
// //     svg
// //       .append("text")
// //       .attr("x", width - margin + 10)
// //       .attr("y", height / 2 - 10)
// //       .attr("fill", "black")
// //       .style("font-size", "18px")
// //       .text("X");

// //     svg
// //       .append("text")
// //       .attr("x", width / 2 + 10)
// //       .attr("y", margin - 10)
// //       .attr("fill", "black")
// //       .style("font-size", "18px")
// //       .text("Y");

// //     // Add grid numbers
// //     gridLines
// //       .selectAll(".x-label")
// //       .data(d3.range(-axisRange, axisRange + 1, stepSize))
// //       .enter()
// //       .append("text")
// //       .attr("x", (d) => xScale(d))
// //       .attr("y", height / 2 + 15)
// //       .attr("text-anchor", "right")
// //       .attr("fill", "#666")
// //       .style("font-size", "10px")
// //       .text((d) => d);

// //     gridLines
// //       .selectAll(".y-label")
// //       .data(d3.range(-axisRange, axisRange + 1, stepSize))
// //       .enter()
// //       .append("text")
// //       .attr("x", width / 2 + 5)
// //       .attr("y", (d) => yScale(d))
// //       .attr("text-anchor", "start")
// //       .attr("alignment-baseline", "middle")
// //       .attr("fill", "#666")
// //       .style("font-size", "10px")
// //       .text((d) => d !== 0 ? d : ''); // Skip 0 for x-axis

// //     // Define arrowhead marker
// //     svg
// //       .append("defs")
// //       .append("marker")
// //       .attr("id", "arrow")
// //       .attr("viewBox", [0, 0, 10, 10])
// //       .attr("refX", 5)
// //       .attr("refY", 5)
// //       .attr("markerWidth", 6)
// //       .attr("markerHeight", 6)
// //       .attr("orient", "auto-start-reverse")
// //       .append("path")
// //       .attr("d", "M 0 0 L 10 5 L 0 10 z")
// //       .attr("fill", "gray");

// //     svg
// //       .append("defs")
// //       .append("marker")
// //       .attr("id", "arrow-blue")
// //       .attr("viewBox", [0, 0, 10, 10])
// //       .attr("refX", 5)
// //       .attr("refY", 5)
// //       .attr("markerWidth", 6)
// //       .attr("markerHeight", 6)
// //       .attr("orient", "auto-start-reverse")
// //       .append("path")
// //       .attr("d", "M 0 0 L 10 5 L 0 10 z")
// //       .attr("fill", "blue");
// //   }, [vectorCoordinates, axisRange, gridDivisions]);

// //   return <svg ref={svgRef}></svg>;
// // };

// // export default VectorVisualizer2D;


// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const defaultTheme = {
//   background: "#ffffff",
//   gridColor: "#e5e5e5",
//   axisColor: "#2c3e50",
//   vectorColor: "#3498db",
//   labelColor: "#34495e",
//   fontFamily: "'Inter', -apple-system, sans-serif"
// };

// const VectorVisualizer2D = ({ 
//   vectorCoordinates = [100, 150], 
//   axisRange = 200,
//   gridDivisions = 8,
//   theme = defaultTheme
// }) => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     // Clear previous SVG content
//     d3.select(svgRef.current).selectAll("*").remove();

//     // Set up SVG dimensions
//     const width = 400;
//     const height = 400;
//     const margin = 40;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height);

//     // Add background
//     svg
//       .append("rect")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("fill", theme.background);

//     // Destructure vector coordinates
//     const [vectorX, vectorY] = vectorCoordinates;

//     // Define vector origin
//     const origin = { x: width / 2, y: height / 2 };

//     // Scales for grid numbers
//     const xScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([0, width]);
//     const yScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([height,0]);

//     // Calculate step size based on gridDivisions
//     const stepSize = (2 * axisRange) / gridDivisions;

//     // Draw grid lines
//     const gridLines = svg.append("g").attr("class", "grid");

//     gridLines
//       .selectAll(".vertical-line")
//       .data(d3.range(-axisRange, axisRange + 1, stepSize))
//       .enter()
//       .append("line")
//       .attr("x1", (d) => xScale(d))
//       .attr("y1", 0)
//       .attr("x2", (d) => xScale(d))
//       .attr("y2", height)
//       .attr("stroke", theme.gridColor)
//       .attr("stroke-width", 1);

//     gridLines
//       .selectAll(".horizontal-line")
//       .data(d3.range(-axisRange, axisRange + 1, stepSize))
//       .enter()
//       .append("line")
//       .attr("x1", 0)
//       .attr("y1", (d) => yScale(d))
//       .attr("x2", width)
//       .attr("y2", (d) => yScale(d))
//       .attr("stroke", theme.gridColor)
//       .attr("stroke-width", 1);

//     // Draw coordinate axes with arrowheads
//     svg
//       .append("line")
//       .attr("x1", 0)
//       .attr("y1", height / 2)
//       .attr("x2", width - 10)
//       .attr("y2", height / 2)
//       .attr("stroke", theme.axisColor)
//       .attr("stroke-width", 1)
//       .attr("marker-end", "url(#arrow)");

//     svg
//       .append("line")
//       .attr("x1", width / 2)
//       .attr("y1", height - margin)
//       .attr("x2", width / 2)
//       .attr("y2", 10)
//       .attr("stroke", theme.axisColor)
//       .attr("stroke-width", 1)
//       .attr("marker-end", "url(#arrow)");

//     // Draw the vector as an arrow
//     svg
//       .append("line")
//       .attr("x1", origin.x)
//       .attr("y1", origin.y)
//       .attr("x2", origin.x + xScale(vectorX) - xScale(0))
//       .attr("y2", origin.y + (yScale(vectorY) - yScale(0)))
//       .attr("stroke", theme.vectorColor)
//       .attr("stroke-width", 1)
//       .attr("marker-end", "url(#arrow-vector)");

//     // Add labels for axes
//     svg
//       .append("text")
//       .attr("x", width - margin + 10)
//       .attr("y", height / 2 - 10)
//       .attr("fill", theme.labelColor)
//       .style("font-size", "18px")
//       .style("font-family", theme.fontFamily)
//       .text("X");

//     svg
//       .append("text")
//       .attr("x", width / 2 + 10)
//       .attr("y", margin - 10)
//       .attr("fill", theme.labelColor)
//       .style("font-size", "18px")
//       .style("font-family", theme.fontFamily)
//       .text("Y");

//     // Add grid numbers
//     gridLines
//       .selectAll(".x-label")
//       .data(d3.range(-axisRange, axisRange + 1, stepSize))
//       .enter()
//       .append("text")
//       .attr("x", (d) => xScale(d))
//       .attr("y", height / 2 + 15)
//       .attr("text-anchor", "right")
//       .attr("fill", theme.labelColor)
//       .style("font-size", "10px")
//       .style("font-family", theme.fontFamily)
//       .text((d) => d);

//     gridLines
//       .selectAll(".y-label")
//       .data(d3.range(-axisRange, axisRange + 1, stepSize))
//       .enter()
//       .append("text")
//       .attr("x", width / 2 + 5)
//       .attr("y", (d) => yScale(d))
//       .attr("text-anchor", "start")
//       .attr("alignment-baseline", "middle")
//       .attr("fill", theme.labelColor)
//       .style("font-size", "10px")
//       .style("font-family", theme.fontFamily)
//       .text((d) => d !== 0 ? d : '');

//     // Define arrowhead markers
//     svg
//       .append("defs")
//       .append("marker")
//       .attr("id", "arrow")
//       .attr("viewBox", [0, 0, 10, 10])
//       .attr("refX", 5)
//       .attr("refY", 5)
//       .attr("markerWidth", 6)
//       .attr("markerHeight", 6)
//       .attr("orient", "auto-start-reverse")
//       .append("path")
//       .attr("d", "M 0 0 L 10 5 L 0 10 z")
//       .attr("fill", theme.axisColor);

//     svg
//       .append("defs")
//       .append("marker")
//       .attr("id", "arrow-vector")
//       .attr("viewBox", [0, 0, 10, 10])
//       .attr("refX", 5)
//       .attr("refY", 5)
//       .attr("markerWidth", 6)
//       .attr("markerHeight", 6)
//       .attr("orient", "auto-start-reverse")
//       .append("path")
//       .attr("d", "M 0 0 L 10 5 L 0 10 z")
//       .attr("fill", theme.vectorColor);
//   }, [vectorCoordinates, axisRange, gridDivisions, theme]);

//   return <svg ref={svgRef}></svg>;
// };

// export default VectorVisualizer2D;

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