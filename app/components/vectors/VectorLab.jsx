import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const theme = {
  background: "#ffffff",
  gridColor: "#e5e5e5",
  axisColor: "#2c3e50",
  vectorAColor: "#3498db",
  vectorBColor: "#e74c3c",
  resultColor: "#27ae60",
  spanColor: "rgba(52, 152, 219, 0.08)",
  projectionColor: "#9b59b6",
  labelColor: "#666",
  fontFamily: "'Inter', -apple-system, sans-serif"
};

const niceRange = (value) => {
  const padded = value * 1.3;
  const niceValues = [1, 2, 3, 5, 8, 10, 15, 20, 25, 50, 75, 100, 150, 200, 250, 500, 1000, 2000, 5000, 10000];
  return niceValues.find(v => v >= padded) || Math.ceil(padded / 100) * 100;
};

const MODES = [
  { id: "addition", label: "Addition" },
  { id: "scalar", label: "Scalar" },
  { id: "span", label: "Span" },
  { id: "dot", label: "Dot Product" }
];

export default function VectorLab() {
  const svgRef = useRef(null);

  const [mode, setMode] = useState("addition");

  // Vector A
  const [ax, setAx] = useState(3);
  const [ay, setAy] = useState(1);
  const [axInput, setAxInput] = useState("3");
  const [ayInput, setAyInput] = useState("1");

  // Vector B
  const [bx, setBx] = useState(1);
  const [by, setBy] = useState(3);
  const [bxInput, setBxInput] = useState("1");
  const [byInput, setByInput] = useState("3");

  // Scalar
  const [scalar, setScalar] = useState(2);
  const [scalarInput, setScalarInput] = useState("2");

  // Auto scale
  const [customScale, setCustomScale] = useState(0);

  // Compute all needed values
  const sumX = ax + bx;
  const sumY = ay + by;
  const scaledX = ax * scalar;
  const scaledY = ay * scalar;
  const dotProduct = ax * bx + ay * by;
  const magA = Math.sqrt(ax * ax + ay * ay);
  const magB = Math.sqrt(bx * bx + by * by);
  const angleBetween = magA > 0 && magB > 0
    ? Math.acos(Math.max(-1, Math.min(1, dotProduct / (magA * magB)))) * (180 / Math.PI)
    : 0;

  // Projection of B onto A
  const projScalar = magA > 0 ? dotProduct / (magA * magA) : 0;
  const projX = ax * projScalar;
  const projY = ay * projScalar;

  // Determine max component for auto scale
  const allPoints = mode === "addition"
    ? [ax, ay, bx, by, sumX, sumY]
    : mode === "scalar"
      ? [ax, ay, scaledX, scaledY]
      : [ax, ay, bx, by];

  const maxComponent = Math.max(...allPoints.map(Math.abs), 1);
  const autoRange = niceRange(maxComponent);
  const axisRange = customScale > 0 ? customScale : autoRange;
  const sliderMax = axisRange * 0.95;

  // Input helpers
  const makeInputHandlers = (setter, inputSetter, currentVal) => ({
    onChange: (e) => inputSetter(e.target.value),
    onCommit: () => {
      const parsed = parseFloat(inputSetter === setAxInput ? axInput
        : inputSetter === setAyInput ? ayInput
        : inputSetter === setBxInput ? bxInput
        : inputSetter === setByInput ? byInput
        : inputSetter === setScalarInput ? scalarInput
        : "");
      if (!isNaN(parsed)) setter(parsed);
      else inputSetter(String(currentVal));
    }
  });

  const handleAxChange = (e) => setAxInput(e.target.value);
  const handleAxCommit = () => {
    const p = parseFloat(axInput);
    if (!isNaN(p)) setAx(p);
    else setAxInput(String(ax));
  };

  const handleAyChange = (e) => setAyInput(e.target.value);
  const handleAyCommit = () => {
    const p = parseFloat(ayInput);
    if (!isNaN(p)) setAy(p);
    else setAyInput(String(ay));
  };

  const handleBxChange = (e) => setBxInput(e.target.value);
  const handleBxCommit = () => {
    const p = parseFloat(bxInput);
    if (!isNaN(p)) setBx(p);
    else setBxInput(String(bx));
  };

  const handleByChange = (e) => setByInput(e.target.value);
  const handleByCommit = () => {
    const p = parseFloat(byInput);
    if (!isNaN(p)) setBy(p);
    else setByInput(String(by));
  };

  const handleScalarChange = (e) => setScalarInput(e.target.value);
  const handleScalarCommit = () => {
    const p = parseFloat(scalarInput);
    if (!isNaN(p)) setScalar(p);
    else setScalarInput(String(scalar));
  };

  const sliderSet = (setter, inputSetter) => (e) => {
    const val = Number(e.target.value);
    setter(val);
    inputSetter(String(val));
  };

  const handleKeyDown = (commitFn) => (e) => {
    if (e.key === "Enter") {
      commitFn();
      e.target.blur();
    }
  };

  // Sync inputs when values change via slider
  useEffect(() => { setAxInput(String(ax)); }, [ax]);
  useEffect(() => { setAyInput(String(ay)); }, [ay]);
  useEffect(() => { setBxInput(String(bx)); }, [bx]);
  useEffect(() => { setByInput(String(by)); }, [by]);
  useEffect(() => { setScalarInput(String(scalar)); }, [scalar]);

  // Drawing
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 560;
    const height = 560;
    const margin = 50;

    svg.attr("width", width).attr("height", height);

    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", theme.background);

    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("stroke", theme.gridColor)
      .attr("stroke-width", 2);

    const xScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([margin, width - margin]);
    const yScale = d3.scaleLinear().domain([-axisRange, axisRange]).range([height - margin, margin]);

    const origin = { x: xScale(0), y: yScale(0) };

    const toSvg = (vx, vy) => ({ x: xScale(vx), y: yScale(vy) });

    // Grid
    const gridDivisions = 8;
    const stepSize = (2 * axisRange) / gridDivisions;
    const gridValues = d3.range(-axisRange, axisRange + stepSize / 2, stepSize);
    const gridGroup = svg.append("g");

    gridValues.forEach((val) => {
      const isZero = Math.abs(val) < stepSize * 0.01;
      gridGroup.append("line")
        .attr("x1", xScale(val)).attr("y1", margin)
        .attr("x2", xScale(val)).attr("y2", height - margin)
        .attr("stroke", theme.gridColor)
        .attr("stroke-width", isZero ? 0 : 1);
      gridGroup.append("line")
        .attr("x1", margin).attr("y1", yScale(val))
        .attr("x2", width - margin).attr("y2", yScale(val))
        .attr("stroke", theme.gridColor)
        .attr("stroke-width", isZero ? 0 : 1);
    });

    // Axes
    svg.append("line")
      .attr("x1", margin).attr("y1", origin.y)
      .attr("x2", width - margin).attr("y2", origin.y)
      .attr("stroke", theme.axisColor).attr("stroke-width", 1.5);
    svg.append("line")
      .attr("x1", origin.x).attr("y1", margin)
      .attr("x2", origin.x).attr("y2", height - margin)
      .attr("stroke", theme.axisColor).attr("stroke-width", 1.5);

    // Axis labels
    gridValues.forEach((val) => {
      if (Math.abs(val) > stepSize * 0.01) {
        const displayVal = Math.abs(val) >= 1 ? Math.round(val) : val.toFixed(1);
        svg.append("text")
          .attr("x", xScale(val)).attr("y", origin.y + 18)
          .attr("text-anchor", "middle")
          .attr("fill", theme.labelColor)
          .style("font-size", "11px")
          .style("font-family", theme.fontFamily)
          .text(displayVal);
        svg.append("text")
          .attr("x", origin.x - 12).attr("y", yScale(val) + 4)
          .attr("text-anchor", "end")
          .attr("fill", theme.labelColor)
          .style("font-size", "11px")
          .style("font-family", theme.fontFamily)
          .text(displayVal);
      }
    });

    // Defs for arrow markers
    const defs = svg.append("defs");

    const addArrow = (id, color) => {
      defs.append("marker")
        .attr("id", id)
        .attr("viewBox", [0, 0, 10, 10])
        .attr("refX", 5)
        .attr("refY", 5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", "M 0 0 L 10 5 L 0 10 z")
        .attr("fill", color);
    };

    addArrow("arrow-a", theme.vectorAColor);
    addArrow("arrow-b", theme.vectorBColor);
    addArrow("arrow-result", theme.resultColor);
    addArrow("arrow-proj", theme.projectionColor);

    const drawVector = (fromX, fromY, toX, toY, color, markerId, width2, dash) => {
      const from = typeof fromX === "object" ? fromX : toSvg(fromX, fromY);
      const to = typeof toX === "object" ? toX : toSvg(toX, toY);

      svg.append("line")
        .attr("x1", from.x).attr("y1", from.y)
        .attr("x2", to.x).attr("y2", to.y)
        .attr("stroke", color)
        .attr("stroke-width", width2 || 2.5)
        .attr("stroke-dasharray", dash || "none")
        .attr("marker-end", `url(#${markerId})`);
    };

    const drawLabel = (vx, vy, text, color, offsetX, offsetY) => {
      const pos = toSvg(vx, vy);
      svg.append("text")
        .attr("x", pos.x + (offsetX || 8))
        .attr("y", pos.y + (offsetY || -8))
        .attr("fill", color)
        .style("font-size", "13px")
        .style("font-weight", "600")
        .style("font-family", theme.fontFamily)
        .text(text);
    };

    const drawDot = (vx, vy, color) => {
      const pos = toSvg(vx, vy);
      svg.append("circle")
        .attr("cx", pos.x).attr("cy", pos.y)
        .attr("r", 4).attr("fill", color);
    };

    // ===================== MODE: ADDITION =====================
    if (mode === "addition") {
      // Parallelogram
      const o = origin;
      const a = toSvg(ax, ay);
      const b = toSvg(bx, by);
      const s = toSvg(sumX, sumY);

      svg.append("polygon")
        .attr("points", `${o.x},${o.y} ${a.x},${a.y} ${s.x},${s.y} ${b.x},${b.y}`)
        .attr("fill", "rgba(39, 174, 96, 0.08)")
        .attr("stroke", theme.resultColor)
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "4,3")
        .attr("opacity", 0.6);

      // Ghost vectors (A from tip of B, B from tip of A)
      svg.append("line")
        .attr("x1", a.x).attr("y1", a.y)
        .attr("x2", s.x).attr("y2", s.y)
        .attr("stroke", theme.vectorBColor)
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "3,3")
        .attr("opacity", 0.35);

      svg.append("line")
        .attr("x1", b.x).attr("y1", b.y)
        .attr("x2", s.x).attr("y2", s.y)
        .attr("stroke", theme.vectorAColor)
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "3,3")
        .attr("opacity", 0.35);

      // Vectors
      drawVector(0, 0, ax, ay, theme.vectorAColor, "arrow-a");
      drawVector(0, 0, bx, by, theme.vectorBColor, "arrow-b");
      drawVector(0, 0, sumX, sumY, theme.resultColor, "arrow-result");

      // Labels
      drawLabel(ax, ay, `a (${ax}, ${ay})`, theme.vectorAColor);
      drawLabel(bx, by, `b (${bx}, ${by})`, theme.vectorBColor);
      drawLabel(sumX, sumY, `a+b (${sumX.toFixed(1)}, ${sumY.toFixed(1)})`, theme.resultColor);

      // Dots
      drawDot(ax, ay, theme.vectorAColor);
      drawDot(bx, by, theme.vectorBColor);
      drawDot(sumX, sumY, theme.resultColor);
    }

    // ===================== MODE: SCALAR =====================
    if (mode === "scalar") {
      // Original vector
      drawVector(0, 0, ax, ay, theme.vectorAColor, "arrow-a");
      drawLabel(ax, ay, `a (${ax}, ${ay})`, theme.vectorAColor);
      drawDot(ax, ay, theme.vectorAColor);

      // Scaled vector
      drawVector(0, 0, scaledX, scaledY, theme.resultColor, "arrow-result");
      drawLabel(scaledX, scaledY, `${scalar}a (${scaledX.toFixed(1)}, ${scaledY.toFixed(1)})`, theme.resultColor);
      drawDot(scaledX, scaledY, theme.resultColor);

      // Dashed line showing direction (extended)
      if (magA > 0.1) {
        const dirX = ax / magA;
        const dirY = ay / magA;
        const extent = axisRange * 0.95;
        const from = toSvg(-dirX * extent, -dirY * extent);
        const to = toSvg(dirX * extent, dirY * extent);
        svg.append("line")
          .attr("x1", from.x).attr("y1", from.y)
          .attr("x2", to.x).attr("y2", to.y)
          .attr("stroke", theme.vectorAColor)
          .attr("stroke-width", 0.5)
          .attr("stroke-dasharray", "2,4")
          .attr("opacity", 0.4);
      }
    }

    // ===================== MODE: SPAN =====================
    if (mode === "span") {
      const cross = ax * by - ay * bx;
      const isDependent = Math.abs(cross) < 0.01;

      if (isDependent) {
        // Collinear: show line through origin
        if (magA > 0.1) {
          const dirX = ax / magA;
          const dirY = ay / magA;
          const extent = axisRange * 0.95;
          const from = toSvg(-dirX * extent, -dirY * extent);
          const to = toSvg(dirX * extent, dirY * extent);
          svg.append("line")
            .attr("x1", from.x).attr("y1", from.y)
            .attr("x2", to.x).attr("y2", to.y)
            .attr("stroke", theme.resultColor)
            .attr("stroke-width", 2)
            .attr("opacity", 0.5);
        }

        // Dependent label
        svg.append("text")
          .attr("x", width / 2).attr("y", margin - 15)
          .attr("text-anchor", "middle")
          .attr("fill", theme.vectorBColor)
          .style("font-size", "14px")
          .style("font-weight", "600")
          .style("font-family", theme.fontFamily)
          .text("Linearly Dependent — span is a line");
      } else {
        // Independent: shade the entire plane
        svg.append("rect")
          .attr("x", margin).attr("y", margin)
          .attr("width", width - 2 * margin)
          .attr("height", height - 2 * margin)
          .attr("fill", theme.spanColor);

        svg.append("text")
          .attr("x", width / 2).attr("y", margin - 15)
          .attr("text-anchor", "middle")
          .attr("fill", theme.resultColor)
          .style("font-size", "14px")
          .style("font-weight", "600")
          .style("font-family", theme.fontFamily)
          .text("Linearly Independent — span is ℝ²");
      }

      // Vectors
      drawVector(0, 0, ax, ay, theme.vectorAColor, "arrow-a");
      drawVector(0, 0, bx, by, theme.vectorBColor, "arrow-b");

      drawLabel(ax, ay, `a (${ax}, ${ay})`, theme.vectorAColor);
      drawLabel(bx, by, `b (${bx}, ${by})`, theme.vectorBColor);
      drawDot(ax, ay, theme.vectorAColor);
      drawDot(bx, by, theme.vectorBColor);

      // Show determinant
      svg.append("text")
        .attr("x", width / 2).attr("y", height - margin + 35)
        .attr("text-anchor", "middle")
        .attr("fill", theme.labelColor)
        .style("font-size", "12px")
        .style("font-family", theme.fontFamily)
        .text(`det = ${ax}·${by} − ${ay}·${bx} = ${cross.toFixed(2)}`);
    }

    // ===================== MODE: DOT PRODUCT =====================
    if (mode === "dot") {
      // Projection line (dashed perpendicular)
      if (magA > 0.1) {
        const proj = toSvg(projX, projY);
        const bPos = toSvg(bx, by);

        // Dashed drop line from B tip to projection point
        svg.append("line")
          .attr("x1", bPos.x).attr("y1", bPos.y)
          .attr("x2", proj.x).attr("y2", proj.y)
          .attr("stroke", theme.projectionColor)
          .attr("stroke-width", 1.5)
          .attr("stroke-dasharray", "4,3")
          .attr("opacity", 0.7);

        // Projection vector
        drawVector(0, 0, projX, projY, theme.projectionColor, "arrow-proj", 2);
        drawDot(projX, projY, theme.projectionColor);

        // Right angle indicator
        if (Math.abs(projScalar) > 0.05 && magB > 0.1) {
          const pPos = toSvg(projX, projY);
          const size = 8;

          // Direction along A (normalized, in SVG coords)
          const aDirSvgX = (toSvg(ax, ay).x - origin.x) / magA;
          const aDirSvgY = (toSvg(ax, ay).y - origin.y) / magA;

          // Perpendicular direction (toward B tip)
          const perpSvgX = bPos.x - pPos.x;
          const perpSvgY = bPos.y - pPos.y;
          const perpMag = Math.sqrt(perpSvgX * perpSvgX + perpSvgY * perpSvgY);

          if (perpMag > 0.1) {
            const pnx = perpSvgX / perpMag;
            const pny = perpSvgY / perpMag;

            const corner1x = pPos.x + pnx * size;
            const corner1y = pPos.y + pny * size;
            const corner2x = corner1x - aDirSvgX * size;
            const corner2y = corner1y - aDirSvgY * size;
            const corner3x = pPos.x - aDirSvgX * size;
            const corner3y = pPos.y - aDirSvgY * size;

            svg.append("polyline")
              .attr("points", `${corner1x},${corner1y} ${corner2x},${corner2y} ${corner3x},${corner3y}`)
              .attr("fill", "none")
              .attr("stroke", theme.projectionColor)
              .attr("stroke-width", 1)
              .attr("opacity", 0.6);
          }
        }

        // Projection label
        drawLabel(projX, projY, `proj (${projX.toFixed(1)}, ${projY.toFixed(1)})`, theme.projectionColor, 8, 18);
      }

      // Angle arc between A and B
      if (magA > 0.3 && magB > 0.3) {
        const arcRadius = 35;
        const angleA = Math.atan2(ay, ax);
        const angleB = Math.atan2(by, bx);

        const startX = origin.x + arcRadius * Math.cos(angleA);
        const startY = origin.y - arcRadius * Math.sin(angleA);
        const endX = origin.x + arcRadius * Math.cos(angleB);
        const endY = origin.y - arcRadius * Math.sin(angleB);

        let angleDiff = angleB - angleA;
        if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
        if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

        const largeArc = Math.abs(angleDiff) > Math.PI ? 1 : 0;
        const sweep = angleDiff > 0 ? 0 : 1;

        svg.append("path")
          .attr("d", `M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArc} ${sweep} ${endX} ${endY}`)
          .attr("fill", "none")
          .attr("stroke", theme.projectionColor)
          .attr("stroke-width", 1.5)
          .attr("opacity", 0.6);

        const midAngle = angleA + angleDiff / 2;
        const labelR = arcRadius + 18;
        svg.append("text")
          .attr("x", origin.x + labelR * Math.cos(midAngle))
          .attr("y", origin.y - labelR * Math.sin(midAngle))
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("fill", theme.projectionColor)
          .style("font-size", "11px")
          .style("font-family", theme.fontFamily)
          .text(`${angleBetween.toFixed(1)}°`);
      }

      // Vectors
      drawVector(0, 0, ax, ay, theme.vectorAColor, "arrow-a");
      drawVector(0, 0, bx, by, theme.vectorBColor, "arrow-b");

      drawLabel(ax, ay, `a (${ax}, ${ay})`, theme.vectorAColor);
      drawLabel(bx, by, `b (${bx}, ${by})`, theme.vectorBColor);
      drawDot(ax, ay, theme.vectorAColor);
      drawDot(bx, by, theme.vectorBColor);

      // Info text
      const dotSign = dotProduct > 0 ? "positive (acute)" : dotProduct < 0 ? "negative (obtuse)" : "zero (perpendicular)";
      svg.append("text")
        .attr("x", width / 2).attr("y", height - margin + 35)
        .attr("text-anchor", "middle")
        .attr("fill", theme.labelColor)
        .style("font-size", "12px")
        .style("font-family", theme.fontFamily)
        .text(`a · b = ${dotProduct.toFixed(2)} — ${dotSign}`);
    }

  }, [mode, ax, ay, bx, by, scalar, axisRange]);

  // Styles
  const inputStyle = {
    width: "62px",
    padding: "5px 7px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "13px",
    fontFamily: theme.fontFamily
  };

  const sliderStyle = { width: "110px", margin: "0 8px" };

  const labelStyle = {
    fontSize: "13px",
    fontFamily: theme.fontFamily,
    color: "#333",
    minWidth: "28px",
    fontWeight: "500"
  };

  const sectionStyle = {
    padding: "12px 15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "10px"
  };

  const headingStyle = {
    margin: "0 0 10px 0",
    fontSize: "13px",
    fontWeight: "600",
    fontFamily: theme.fontFamily,
    color: "#333"
  };

  const tabStyle = (active) => ({
    padding: "7px 14px",
    border: "1px solid #ddd",
    borderBottom: active ? "2px solid #2c3e50" : "1px solid #ddd",
    borderRadius: "6px 6px 0 0",
    backgroundColor: active ? "#fff" : "#f0f0f0",
    fontFamily: theme.fontFamily,
    fontSize: "13px",
    fontWeight: active ? "600" : "400",
    color: active ? "#2c3e50" : "#888",
    cursor: "pointer"
  });

  const rowStyle = { display: "flex", alignItems: "center", marginBottom: "8px" };

  const vectorInput = (label, val, inputVal, onSlider, onChange, onCommit, color) => (
    <div style={rowStyle}>
      <span style={{ ...labelStyle, color }}>{label}:</span>
      <input
        type="range"
        min={-sliderMax}
        max={sliderMax}
        step="0.1"
        value={Math.max(-sliderMax, Math.min(sliderMax, val))}
        onChange={onSlider}
        style={sliderStyle}
      />
      <input
        type="text"
        value={inputVal}
        onChange={onChange}
        onBlur={onCommit}
        onKeyDown={handleKeyDown(onCommit)}
        style={inputStyle}
      />
    </div>
  );

  return (
    <div style={{
      display: "flex",
      gap: "25px",
      padding: "20px",
      fontFamily: theme.fontFamily,
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      alignItems: "flex-start",
      justifyContent: "center"
    }}>

      {/* Canvas */}
      <div><svg ref={svgRef}></svg></div>

      {/* Controls */}
      <div style={{ width: "290px" }}>
        <h2 style={{ margin: "0 0 15px 0", fontSize: "18px", color: "#2c3e50" }}>
          VectorLab
        </h2>

        {/* Mode Tabs */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              style={tabStyle(mode === m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Vector A - always shown */}
        <div style={sectionStyle}>
          <h3 style={{ ...headingStyle, color: theme.vectorAColor }}>
            Vector a
          </h3>
          {vectorInput("x", ax, axInput,
            sliderSet(setAx, setAxInput), handleAxChange, handleAxCommit, theme.vectorAColor)}
          {vectorInput("y", ay, ayInput,
            sliderSet(setAy, setAyInput), handleAyChange, handleAyCommit, theme.vectorAColor)}
        </div>

        {/* Vector B - hidden in scalar mode */}
        {mode !== "scalar" && (
          <div style={sectionStyle}>
            <h3 style={{ ...headingStyle, color: theme.vectorBColor }}>
              Vector b
            </h3>
            {vectorInput("x", bx, bxInput,
              sliderSet(setBx, setBxInput), handleBxChange, handleBxCommit, theme.vectorBColor)}
            {vectorInput("y", by, byInput,
              sliderSet(setBy, setByInput), handleByChange, handleByCommit, theme.vectorBColor)}
          </div>
        )}

        {/* Scalar control - only in scalar mode */}
        {mode === "scalar" && (
          <div style={sectionStyle}>
            <h3 style={{ ...headingStyle, color: theme.resultColor }}>
              Scalar (k)
            </h3>
            <div style={rowStyle}>
              <span style={{ ...labelStyle, color: theme.resultColor }}>k:</span>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={scalar}
                onChange={sliderSet(setScalar, setScalarInput)}
                style={sliderStyle}
              />
              <input
                type="text"
                value={scalarInput}
                onChange={handleScalarChange}
                onBlur={handleScalarCommit}
                onKeyDown={handleKeyDown(handleScalarCommit)}
                style={inputStyle}
              />
            </div>
          </div>
        )}

        {/* Scale */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Scale</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ fontSize: "13px", color: "#333", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={customScale === 0}
                onChange={(e) => {
                  if (e.target.checked) setCustomScale(0);
                  else setCustomScale(autoRange);
                }}
                style={{ marginRight: "6px" }}
              />
              Auto
            </label>
            {customScale > 0 && (
              <>
                <input
                  type="range" min="1" max="500" step="1"
                  value={customScale}
                  onChange={(e) => setCustomScale(Number(e.target.value))}
                  style={{ ...sliderStyle, width: "100px" }}
                />
                <span style={{ fontSize: "12px", color: "#666", minWidth: "30px" }}>
                  ±{customScale}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Mode-specific info */}
        <div style={{
          ...sectionStyle,
          backgroundColor: "#fff",
          border: "1px solid #e0e0e0"
        }}>
          {mode === "addition" && (
            <>
              <h3 style={headingStyle}>Addition</h3>
              <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.8" }}>
                <div><strong>a + b</strong> = ({sumX.toFixed(2)}, {sumY.toFixed(2)})</div>
                <div style={{ marginTop: "6px" }}>
                  The green vector is the diagonal of the parallelogram formed by a and b.
                </div>
              </div>
            </>
          )}
          {mode === "scalar" && (
            <>
              <h3 style={headingStyle}>Scalar Multiplication</h3>
              <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.8" }}>
                <div><strong>{scalar}a</strong> = ({scaledX.toFixed(2)}, {scaledY.toFixed(2)})</div>
                <div><strong>|a|</strong> = {magA.toFixed(2)} → <strong>|{scalar}a|</strong> = {(Math.abs(scalar) * magA).toFixed(2)}</div>
                <div style={{ marginTop: "6px" }}>
                  {scalar < 0 ? "Negative scalar reverses direction." : scalar === 0 ? "Zero scalar collapses to origin." : "Positive scalar preserves direction."}
                </div>
              </div>
            </>
          )}
          {mode === "span" && (
            <>
              <h3 style={headingStyle}>Span & Dependence</h3>
              <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.8" }}>
                <div><strong>det</strong> = {(ax * by - ay * bx).toFixed(2)}</div>
                <div style={{ marginTop: "6px" }}>
                  {Math.abs(ax * by - ay * bx) < 0.01
                    ? "Vectors are dependent — they lie on the same line. Their span is 1D."
                    : "Vectors are independent — they span the entire 2D plane. Any point in ℝ² can be reached."}
                </div>
              </div>
            </>
          )}
          {mode === "dot" && (
            <>
              <h3 style={headingStyle}>Dot Product</h3>
              <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.8" }}>
                <div><strong>a · b</strong> = {dotProduct.toFixed(2)}</div>
                <div><strong>Angle</strong> = {angleBetween.toFixed(1)}°</div>
                <div><strong>proj<sub>a</sub>b</strong> = ({projX.toFixed(2)}, {projY.toFixed(2)})</div>
                <div style={{ marginTop: "6px" }}>
                  The purple vector is the projection of b onto a. The dashed line shows the perpendicular drop.
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}