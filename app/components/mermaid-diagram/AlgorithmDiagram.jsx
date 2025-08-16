'use client'
import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';

const AlgorithmDiagram = () => {
  const diagramRef = useRef(null);

  useEffect(() => {
    if (diagramRef.current && typeof window !== "undefined") {
      const $ = go.GraphObject.make;

      // Create the diagram
      const myDiagram = $(go.Diagram, diagramRef.current, {
        "undoManager.isEnabled": true,
        layout: $(go.TreeLayout, { 
          angle: 90, 
          nodeSpacing: 20,
          layerSpacing: 50
        }),
        initialContentAlignment: go.Spot.Center
      });

      // Define the node template
      myDiagram.nodeTemplate =
        $(go.Node, "Auto",
          $(go.Shape, "RoundedRectangle", { 
            fill: "white", 
            stroke: "#7155cc",
            strokeWidth: 2
          }),
          $(go.TextBlock, { 
            margin: 8, 
            font: "12px sans-serif",
            wrap: go.TextBlock.WrapFit,
            textAlign: "center"
          }, new go.Binding("text", "text"))
        );

      // Define the link template
      myDiagram.linkTemplate =
        $(go.Link,
          { routing: go.Link.Orthogonal, corner: 5 },
          $(go.Shape, { stroke: "#7155cc", strokeWidth: 2 }),
          $(go.Shape, { toArrow: "Standard", fill: "#7155cc", stroke: null })
        );

      // Define your algorithm as a series of nodes and links
      const nodeDataArray = [
        { key: "start", text: "Start" },
        { key: "create", text: "Create augmented matrix" },
        { key: "loop", text: "For each column" },
        { key: "pivot", text: "Is pivot = 0?" },
        { key: "swap", text: "Swap with non-zero row" },
        { key: "eliminate", text: "Eliminate entries below pivot" },
        { key: "more", text: "More columns?" },
        { key: "back", text: "Back-substitution" },
        { key: "end", text: "End" }
      ];

      const linkDataArray = [
        { from: "start", to: "create" },
        { from: "create", to: "loop" },
        { from: "loop", to: "pivot" },
        { from: "pivot", to: "swap", text: "Yes" },
        { from: "pivot", to: "eliminate", text: "No" },
        { from: "swap", to: "eliminate" },
        { from: "eliminate", to: "more" },
        { from: "more", to: "loop", text: "Yes" },
        { from: "more", to: "back", text: "No" },
        { from: "back", to: "end" }
      ];

      // Load the data into the diagram
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

      // Center and scale the diagram to fit
      myDiagram.initialAutoScale = go.Diagram.Uniform;
      myDiagram.contentAlignment = go.Spot.Center;

      return () => {
        myDiagram.div = null;
      };
    }
  }, []);

  return <div ref={diagramRef} style={{ width: '100%', height: '400px', border: '1px solid black' }} />;
};

export default AlgorithmDiagram;