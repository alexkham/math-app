

// // import React, { useEffect, useRef } from "react";
// // import * as d3 from "d3";

// // const defaultTheme = {
// //   background: "#ffffff",
// //   labelColor:"gray",
// //   gridColor: "#e5e5e5",
// //   axisColor: "#2c3e50",
// //   vectorColor: "#3498db",
// //   labelColor: "#34495e",
// //   fontFamily: "'Inter', -apple-system, sans-serif"
// // };

// // const VectorVisualizer2D = ({ 
// //   vectorCoordinates = [100, 150], 
// //   axisRange = 200,
// //   gridDivisions = 8,
// //   theme = defaultTheme
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

// //     // Add background
// //     svg
// //       .append("rect")
// //       .attr("width", width)
// //       .attr("height", height)
// //       .attr("fill", theme.background);

// //     // Add border frame
// //     svg
// //       .append("rect")
// //       .attr("width", width)
// //       .attr("height", height)
// //       .attr("fill", "none")
// //       .attr("stroke", theme.gridColor)
// //       .attr("stroke-width", 5);

// //     // Destructure vector coordinates
// //     const [vectorX, vectorY] = vectorCoordinates;

// //     // Define vector origin
// //     const origin = { x: width / 2, y: height / 2 };

// //     // Scales for grid numbers
// //     const xScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([0, width]);
// //     const yScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([height,0]);

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
// //       .attr("y1", 5)
// //       .attr("x2", (d) => xScale(d))
// //       .attr("y2", height-5)
// //       .attr("stroke", theme.gridColor)
// //       .attr("stroke-width", 1);

// //     gridLines
// //       .selectAll(".horizontal-line")
// //       .data(d3.range(-axisRange, axisRange + 1, stepSize))
// //       .enter()
// //       .append("line")
// //       .attr("x1", 5)
// //       .attr("y1", (d) => yScale(d))
// //       .attr("x2", width-5)
// //       .attr("y2", (d) => yScale(d))
// //       .attr("stroke", theme.gridColor)
// //       .attr("stroke-width", 1);

// //     // Draw coordinate axes with arrowheads
// //     svg
// //       .append("line")
// //       .attr("x1", 5)
// //       .attr("y1", height / 2)
// //       .attr("x2", width - 10)
// //       .attr("y2", height / 2)
// //       .attr("stroke", theme.axisColor)
// //       .attr("stroke-width", 1)
// //       .attr("marker-end", "url(#arrow)");

// //     svg
// //       .append("line")
// //       .attr("x1", width / 2)
// //       .attr("y1", height - margin+30)
// //       .attr("x2", width / 2)
// //       .attr("y2", 10)
// //       .attr("stroke", theme.axisColor)
// //       .attr("stroke-width", 1)
// //       .attr("marker-end", "url(#arrow)");

// //     // Draw the vector as an arrow
// //     svg
// //       .append("line")
// //       .attr("x1", origin.x)
// //       .attr("y1", origin.y)
// //       .attr("x2", origin.x + xScale(vectorX) - xScale(0))
// //       .attr("y2", origin.y + (yScale(vectorY) - yScale(0)))
// //       .attr("stroke", theme.vectorColor)
// //       .attr("stroke-width", 1.5)
// //       .attr("marker-end", "url(#arrow-vector)");

// //     // Add labels for axes - now using gridColor
// //     svg
// //       .append("text")
// //       .attr("x", width - margin + 10)
// //       .attr("y", height / 2 - 10)
// //       .attr("fill", theme.labelColor)
// //       .style("font-size", "18px")
// //       .style("font-family", theme.fontFamily)
// //       .text("X");

// //     svg
// //       .append("text")
// //       .attr("x", width / 2 + 10)
// //       .attr("y", margin - 10)
// //       .attr("fill", theme.labelColor)
// //       .style("font-size", "18px")
// //       .style("font-family", theme.fontFamily)
// //       .text("Y");

// //     // Add grid numbers - now using gridColor
// //     gridLines
// //       .selectAll(".x-label")
// //       .data(d3.range(-axisRange, axisRange + 1, stepSize))
// //       .enter()
// //       .append("text")
// //       .attr("x", (d) => xScale(d))
// //       .attr("y", height / 2 + 15)
// //       .attr("text-anchor", "right")
// //       .attr("fill", theme.labelColor)
// //       .style("font-size", "10px")
// //       .style("font-family", theme.fontFamily)
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
// //       .attr("fill", theme.labelColor)
// //       .style("font-size", "10px")
// //       .style("font-family", theme.fontFamily)
// //       .text((d) => d !== 0 ? d : '');

// //     // Define arrowhead markers
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
// //       .attr("fill", theme.axisColor);

// //     svg
// //       .append("defs")
// //       .append("marker")
// //       .attr("id", "arrow-vector")
// //       .attr("viewBox", [0, 0, 10, 10])
// //       .attr("refX", 5)
// //       .attr("refY", 5)
// //       .attr("markerWidth", 6)
// //       .attr("markerHeight", 6)
// //       .attr("orient", "auto-start-reverse")
// //       .append("path")
// //       .attr("d", "M 0 0 L 10 5 L 0 10 z")
// //       .attr("fill", theme.vectorColor);
// //   }, [vectorCoordinates, axisRange, gridDivisions, theme]);

// //   return <svg ref={svgRef}></svg>;
// // };

// // export default VectorVisualizer2D;

// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const defaultTheme = {
//   background: "#ffffff",
//   labelColor: "gray",
//   gridColor: "#e5e5e5",
//   axisColor: "#2c3e50",
//   defaultVectorColor: "#3498db",
//   clampedStrokeDash: "4,3",
//   fontFamily: "'Inter', -apple-system, sans-serif"
// };

// const VectorVisualizer2D = ({
//   vectors = [{ coords: [100, 150] }],
//   axisRange = 200,
//   autoFit = true,
//   autoFitPadding = 1.2,
//   gridDivisions = 8,
//   theme = defaultTheme
// }) => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     d3.select(svgRef.current).selectAll("*").remove();

//     const width = 500;
//     const height = 500;
//     const margin = 40;

//     let effectiveRange = axisRange;

//     if (autoFit) {
//       const maxComponent = vectors.reduce((max, vec) => {
//         const [x, y] = vec.coords;
//         return Math.max(max, Math.abs(x), Math.abs(y));
//       }, 0);

//       if (maxComponent > 0) {
//         const padded = maxComponent * autoFitPadding;
//         const niceValues = [10, 20, 25, 50, 100, 150, 200, 250, 500, 1000, 2000, 5000, 10000];
//         effectiveRange = niceValues.find(v => v >= padded) || Math.ceil(padded / 100) * 100;
//       }
//     }

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height);

//     svg
//       .append("rect")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("fill", theme.background);

//     svg
//       .append("rect")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("fill", "none")
//       .attr("stroke", theme.gridColor)
//       .attr("stroke-width", 5);

//     const origin = { x: width / 2, y: height / 2 };

//     const xScale = d3.scaleLinear().domain([-effectiveRange, effectiveRange]).range([margin, width - margin]);
//     const yScale = d3.scaleLinear().domain([-effectiveRange, effectiveRange]).range([height - margin, margin]);

//     const stepSize = (2 * effectiveRange) / gridDivisions;

//     const gridLines = svg.append("g").attr("class", "grid");

//     gridLines
//       .selectAll(".vertical-line")
//       .data(d3.range(-effectiveRange, effectiveRange + 1, stepSize))
//       .enter()
//       .append("line")
//       .attr("x1", (d) => xScale(d))
//       .attr("y1", margin)
//       .attr("x2", (d) => xScale(d))
//       .attr("y2", height - margin)
//       .attr("stroke", theme.gridColor)
//       .attr("stroke-width", 1);

//     gridLines
//       .selectAll(".horizontal-line")
//       .data(d3.range(-effectiveRange, effectiveRange + 1, stepSize))
//       .enter()
//       .append("line")
//       .attr("x1", margin)
//       .attr("y1", (d) => yScale(d))
//       .attr("x2", width - margin)
//       .attr("y2", (d) => yScale(d))
//       .attr("stroke", theme.gridColor)
//       .attr("stroke-width", 1);

//     svg
//       .append("line")
//       .attr("x1", margin)
//       .attr("y1", height / 2)
//       .attr("x2", width - margin)
//       .attr("y2", height / 2)
//       .attr("stroke", theme.axisColor)
//       .attr("stroke-width", 1.5);

//     svg
//       .append("line")
//       .attr("x1", width / 2)
//       .attr("y1", height - margin)
//       .attr("x2", width / 2)
//       .attr("y2", margin)
//       .attr("stroke", theme.axisColor)
//       .attr("stroke-width", 1.5);

//     svg
//       .append("text")
//       .attr("x", width - margin + 15)
//       .attr("y", height / 2 - 10)
//       .attr("fill", theme.labelColor)
//       .style("font-size", "16px")
//       .style("font-family", theme.fontFamily)
//       .text("X");

//     svg
//       .append("text")
//       .attr("x", width / 2 + 10)
//       .attr("y", margin - 10)
//       .attr("fill", theme.labelColor)
//       .style("font-size", "16px")
//       .style("font-family", theme.fontFamily)
//       .text("Y");

//     gridLines
//       .selectAll(".x-label")
//       .data(d3.range(-effectiveRange, effectiveRange + 1, stepSize))
//       .enter()
//       .append("text")
//       .attr("x", (d) => xScale(d))
//       .attr("y", height / 2 + 18)
//       .attr("text-anchor", "middle")
//       .attr("fill", theme.labelColor)
//       .style("font-size", "10px")
//       .style("font-family", theme.fontFamily)
//       .text((d) => Math.round(d) !== 0 ? Math.round(d) : "");

//     gridLines
//       .selectAll(".y-label")
//       .data(d3.range(-effectiveRange, effectiveRange + 1, stepSize))
//       .enter()
//       .append("text")
//       .attr("x", width / 2 - 8)
//       .attr("y", (d) => yScale(d) + 4)
//       .attr("text-anchor", "end")
//       .attr("fill", theme.labelColor)
//       .style("font-size", "10px")
//       .style("font-family", theme.fontFamily)
//       .text((d) => Math.round(d) !== 0 ? Math.round(d) : "");

//     const defs = svg.append("defs");

//     vectors.forEach((vec, index) => {
//       const color = vec.color || theme.defaultVectorColor;

//       defs
//         .append("marker")
//         .attr("id", `arrow-vector-${index}`)
//         .attr("viewBox", [0, 0, 10, 10])
//         .attr("refX", 5)
//         .attr("refY", 5)
//         .attr("markerWidth", 6)
//         .attr("markerHeight", 6)
//         .attr("orient", "auto-start-reverse")
//         .append("path")
//         .attr("d", "M 0 0 L 10 5 L 0 10 z")
//         .attr("fill", color);

//       defs
//         .append("marker")
//         .attr("id", `arrow-vector-clamped-${index}`)
//         .attr("viewBox", [0, 0, 10, 10])
//         .attr("refX", 5)
//         .attr("refY", 5)
//         .attr("markerWidth", 6)
//         .attr("markerHeight", 6)
//         .attr("orient", "auto-start-reverse")
//         .append("path")
//         .attr("d", "M 0 0 L 10 5 L 0 10 z")
//         .attr("fill", "none")
//         .attr("stroke", color)
//         .attr("stroke-width", 1.5);
//     });

//     const vectorsGroup = svg.append("g").attr("class", "vectors");

//     vectors.forEach((vec, index) => {
//       const [vectorX, vectorY] = vec.coords;
//       const color = vec.color || theme.defaultVectorColor;
//       const label = vec.label || null;

//       const isClamped =
//         !autoFit &&
//         (Math.abs(vectorX) > effectiveRange || Math.abs(vectorY) > effectiveRange);

//       let clampedX = vectorX;
//       let clampedY = vectorY;

//       if (isClamped) {
//         const maxAbs = Math.max(Math.abs(vectorX), Math.abs(vectorY));
//         const scale = (effectiveRange * 0.95) / maxAbs;
//         clampedX = vectorX * scale;
//         clampedY = vectorY * scale;
//       }

//       const originX = xScale(0);
//       const originY = yScale(0);
//       const endX = xScale(clampedX);
//       const endY = yScale(clampedY);

//       vectorsGroup
//         .append("line")
//         .attr("x1", originX)
//         .attr("y1", originY)
//         .attr("x2", endX)
//         .attr("y2", endY)
//         .attr("stroke", color)
//         .attr("stroke-width", 2)
//         .attr("stroke-dasharray", isClamped ? theme.clampedStrokeDash : "none")
//         .attr("marker-end", isClamped
//           ? `url(#arrow-vector-clamped-${index})`
//           : `url(#arrow-vector-${index})`);

//       if (isClamped) {
//         vectorsGroup
//           .append("text")
//           .attr("x", endX + 5)
//           .attr("y", endY - 5)
//           .attr("fill", color)
//           .style("font-size", "9px")
//           .style("font-family", theme.fontFamily)
//           .style("font-style", "italic")
//           .text(`(${vectorX}, ${vectorY})`);
//       }

//       if (label) {
//         vectorsGroup
//           .append("text")
//           .attr("x", endX + 8)
//           .attr("y", endY + (isClamped ? 12 : 4))
//           .attr("fill", color)
//           .style("font-size", "12px")
//           .style("font-family", theme.fontFamily)
//           .style("font-weight", "600")
//           .text(label);
//       }

//       vectorsGroup
//         .append("circle")
//         .attr("cx", endX)
//         .attr("cy", endY)
//         .attr("r", 4)
//         .attr("fill", color);
//     });

//   }, [vectors, axisRange, autoFit, autoFitPadding, gridDivisions, theme]);

//   return <svg ref={svgRef}></svg>;
// };

// // ============ DEMO ============

// // export default function App() {
// //   const fourVectors = [
// //     { coords: [120, 80], color: "#3498db", label: "v1" },
// //     { coords: [-90, 60], color: "#e74c3c", label: "v2" },
// //     { coords: [40, -110], color: "#27ae60", label: "v3" },
// //     { coords: [-70, -50], color: "#f39c12", label: "v4" }
// //   ];

// //   return (
// //     <div style={{
// //       display: "flex",
// //       flexDirection: "column",
// //       alignItems: "center",
// //       justifyContent: "center",
// //       minHeight: "100vh",
// //       backgroundColor: "#f5f5f5",
// //       padding: "20px",
// //       fontFamily: "'Inter', sans-serif"
// //     }}>
// //       <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
// //         VectorVisualizer2D — 4 Vectors
// //       </h2>
      
// //       <VectorVisualizer2D
// //         vectors={fourVectors}
// //         autoFit={true}
// //       />
      
// //       <div style={{
// //         marginTop: "20px",
// //         display: "flex",
// //         gap: "20px",
// //         fontSize: "14px"
// //       }}>
// //         <span><span style={{ color: "#3498db" }}>●</span> v1: (120, 80)</span>
// //         <span><span style={{ color: "#e74c3c" }}>●</span> v2: (-90, 60)</span>
// //         <span><span style={{ color: "#27ae60" }}>●</span> v3: (40, -110)</span>
// //         <span><span style={{ color: "#f39c12" }}>●</span> v4: (-70, -50)</span>
// //       </div>
// //     </div>
// //   );
// // }


import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const defaultTheme = {
  background: "#ffffff",
  labelColor: "gray",
  gridColor: "#e5e5e5",
  axisColor: "#2c3e50",
  defaultVectorColor: "#3498db",
  clampedStrokeDash: "4,3",
  fontFamily: "'Inter', -apple-system, sans-serif"
};

const VectorVisualizer2D = ({
  vectors = [{ coords: [100, 150] }],
  axisRange = 200,
  autoFit = true,
  autoFitPadding = 1.2,
  gridDivisions = 8,
  theme = defaultTheme
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 400;
    const height = 400;
    const margin = 40;

    // Calculate effective axis range
    let effectiveRange = axisRange;

    if (autoFit) {
      const maxComponent = vectors.reduce((max, vec) => {
        const [x, y] = vec.coords;
        return Math.max(max, Math.abs(x), Math.abs(y));
      }, 0);

      if (maxComponent > 0) {
        const padded = maxComponent * autoFitPadding;
        const niceValues = [10, 20, 25, 50, 100, 150, 200, 250, 500, 1000, 2000, 5000, 10000];
        effectiveRange = niceValues.find(v => v >= padded) || Math.ceil(padded / 100) * 100;
      }
    }

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Background
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", theme.background);

    // Border frame
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("stroke", theme.gridColor)
      .attr("stroke-width", 5);

    const origin = { x: width / 2, y: height / 2 };

    // Scales
    const xScale = d3.scaleLinear().domain([-effectiveRange, effectiveRange]).range([0, width]);
    const yScale = d3.scaleLinear().domain([-effectiveRange, effectiveRange]).range([height, 0]);

    const stepSize = (2 * effectiveRange) / gridDivisions;

    // Grid lines
    const gridLines = svg.append("g").attr("class", "grid");

    gridLines
      .selectAll(".vertical-line")
      .data(d3.range(-effectiveRange, effectiveRange + 1, stepSize))
      .enter()
      .append("line")
      .attr("x1", (d) => xScale(d))
      .attr("y1", 5)
      .attr("x2", (d) => xScale(d))
      .attr("y2", height - 5)
      .attr("stroke", theme.gridColor)
      .attr("stroke-width", 1);

    gridLines
      .selectAll(".horizontal-line")
      .data(d3.range(-effectiveRange, effectiveRange + 1, stepSize))
      .enter()
      .append("line")
      .attr("x1", 5)
      .attr("y1", (d) => yScale(d))
      .attr("x2", width - 5)
      .attr("y2", (d) => yScale(d))
      .attr("stroke", theme.gridColor)
      .attr("stroke-width", 1);

    // X axis
    svg
      .append("line")
      .attr("x1", 5)
      .attr("y1", height / 2)
      .attr("x2", width - 10)
      .attr("y2", height / 2)
      .attr("stroke", theme.axisColor)
      .attr("stroke-width", 1)
      .attr("marker-end", "url(#arrow)");

    // Y axis
    svg
      .append("line")
      .attr("x1", width / 2)
      .attr("y1", height - margin + 30)
      .attr("x2", width / 2)
      .attr("y2", 10)
      .attr("stroke", theme.axisColor)
      .attr("stroke-width", 1)
      .attr("marker-end", "url(#arrow)");

    // Axis labels
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

    // Grid numbers - X axis
    gridLines
      .selectAll(".x-label")
      .data(d3.range(-effectiveRange, effectiveRange + 1, stepSize))
      .enter()
      .append("text")
      .attr("x", (d) => xScale(d))
      .attr("y", height / 2 + 15)
      .attr("text-anchor", "middle")
      .attr("fill", theme.labelColor)
      .style("font-size", "10px")
      .style("font-family", theme.fontFamily)
      .text((d) => Math.round(d));

    // Grid numbers - Y axis
    gridLines
      .selectAll(".y-label")
      .data(d3.range(-effectiveRange, effectiveRange + 1, stepSize))
      .enter()
      .append("text")
      .attr("x", width / 2 + 5)
      .attr("y", (d) => yScale(d))
      .attr("text-anchor", "start")
      .attr("alignment-baseline", "middle")
      .attr("fill", theme.labelColor)
      .style("font-size", "10px")
      .style("font-family", theme.fontFamily)
      .text((d) => d !== 0 ? Math.round(d) : "");

    // Defs for arrowheads
    const defs = svg.append("defs");

    // Axis arrow
    defs
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

    // Create unique arrow markers for each vector color
    vectors.forEach((vec, index) => {
      const color = vec.color || theme.defaultVectorColor;

      // Normal arrow
      defs
        .append("marker")
        .attr("id", `arrow-vector-${index}`)
        .attr("viewBox", [0, 0, 10, 10])
        .attr("refX", 5)
        .attr("refY", 5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", "M 0 0 L 10 5 L 0 10 z")
        .attr("fill", color);

      // Clamped arrow (hollow/outline)
      defs
        .append("marker")
        .attr("id", `arrow-vector-clamped-${index}`)
        .attr("viewBox", [0, 0, 10, 10])
        .attr("refX", 5)
        .attr("refY", 5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", "M 0 0 L 10 5 L 0 10 z")
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 1.5);
    });

    // Draw vectors
    const vectorsGroup = svg.append("g").attr("class", "vectors");

    vectors.forEach((vec, index) => {
      const [vectorX, vectorY] = vec.coords;
      const color = vec.color || theme.defaultVectorColor;
      const label = vec.label || null;

      // Check if vector exceeds range (only relevant when autoFit is false)
      const isClamped =
        !autoFit &&
        (Math.abs(vectorX) > effectiveRange || Math.abs(vectorY) > effectiveRange);

      // Clamp coordinates if needed
      let clampedX = vectorX;
      let clampedY = vectorY;

      if (isClamped) {
        const maxAbs = Math.max(Math.abs(vectorX), Math.abs(vectorY));
        const scale = (effectiveRange * 0.95) / maxAbs;
        clampedX = vectorX * scale;
        clampedY = vectorY * scale;
      }

      // Calculate pixel positions
      const endX = origin.x + xScale(clampedX) - xScale(0);
      const endY = origin.y + (yScale(clampedY) - yScale(0));

      // Draw the vector line
      vectorsGroup
        .append("line")
        .attr("x1", origin.x)
        .attr("y1", origin.y)
        .attr("x2", endX)
        .attr("y2", endY)
        .attr("stroke", color)
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", isClamped ? theme.clampedStrokeDash : "none")
        .attr("marker-end", isClamped 
          ? `url(#arrow-vector-clamped-${index})` 
          : `url(#arrow-vector-${index})`);

      // Add label with coordinates for clamped vectors
      if (isClamped) {
        const labelX = endX + 5;
        const labelY = endY - 5;

        vectorsGroup
          .append("text")
          .attr("x", labelX)
          .attr("y", labelY)
          .attr("fill", color)
          .style("font-size", "9px")
          .style("font-family", theme.fontFamily)
          .style("font-style", "italic")
          .text(`(${vectorX}, ${vectorY})`);
      }

      // Add custom label if provided
      if (label) {
        const labelX = endX + 8;
        const labelY = endY + (isClamped ? 10 : 0);

        vectorsGroup
          .append("text")
          .attr("x", labelX)
          .attr("y", labelY)
          .attr("fill", color)
          .style("font-size", "11px")
          .style("font-family", theme.fontFamily)
          .style("font-weight", "500")
          .text(label);
      }
    });

  }, [vectors, axisRange, autoFit, autoFitPadding, gridDivisions, theme]);

  return <svg ref={svgRef}></svg>;
};

export default VectorVisualizer2D;