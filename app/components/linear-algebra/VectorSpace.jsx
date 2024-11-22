// // // import React from "react";

// // // const VectorSpace = () => {
// // //   const width = 800;
// // //   const height = 800;
// // //   const origin = { x: width / 2, y: height / 2 };
// // //   const scale = 100;

// // //   // Define vectors
// // //   const v1 = { x: 1, y: 2 };
// // //   const v2 = { x: 2, y: 1 };

// // //   // Compute the endpoints of the vectors
// // //   const computeEndpoint = (vec) => ({
// // //     x: origin.x + vec.x * scale,
// // //     y: origin.y - vec.y * scale,
// // //   });
// // //   const v1End = computeEndpoint(v1);
// // //   const v2End = computeEndpoint(v2);
// // //   const v3End = computeEndpoint({ x: v1.x + v2.x, y: v1.y + v2.y });

// // //   return (
// // //     <svg width={width} height={height} style={{ border: "1px solid black" }}>
// // //       {/* Coordinate Axes */}
// // //       <line x1={origin.x} y1={0} x2={origin.x} y2={height} stroke="gray" />
// // //       <line x1={0} y1={origin.y} x2={width} y2={origin.y} stroke="gray" />

// // //       {/* Plane Spanned by Vectors */}
// // //       <polygon
// // //         points={`${origin.x},${origin.y} ${v1End.x},${v1End.y} ${v3End.x},${v3End.y} ${v2End.x},${v2End.y}`}
// // //         fill="lightblue"
// // //         opacity="0.5"
// // //       />

// // //       {/* Vectors */}
// // //       <line
// // //         x1={origin.x}
// // //         y1={origin.y}
// // //         x2={v1End.x}
// // //         y2={v1End.y}
// // //         stroke="blue"
// // //         strokeWidth="2"
// // //       />
// // //       <line
// // //         x1={origin.x}
// // //         y1={origin.y}
// // //         x2={v2End.x}
// // //         y2={v2End.y}
// // //         stroke="green"
// // //         strokeWidth="2"
// // //       />

// // //       {/* Labels for Vectors */}
// // //       <text x={v1End.x + 10} y={v1End.y - 10} fill="blue">
// // //         v1
// // //       </text>
// // //       <text x={v2End.x + 10} y={v2End.y - 10} fill="green">
// // //         v2
// // //       </text>
// // //     </svg>
// // //   );
// // // };

// // // export default VectorSpace;


// // import React from "react";

// // const VectorSpace = () => {
// //   const width = 800 * 0.7; // Scale down by 30%
// //   const height = 800 * 0.7; // Scale down by 30%
// //   const origin = { x: width / 2, y: height / 2 };
// //   const scale = 100 * 0.7; // Scale down vector lengths by 30%

// //   // Define vectors
// //   const v1 = { x: 1, y: 2 };
// //   const v2 = { x: 2, y: 1 };

// //   // Compute the endpoints of the vectors
// //   const computeEndpoint = (vec) => ({
// //     x: origin.x + vec.x * scale,
// //     y: origin.y - vec.y * scale,
// //   });
// //   const v1End = computeEndpoint(v1);
// //   const v2End = computeEndpoint(v2);
// //   const v3End = computeEndpoint({ x: v1.x + v2.x, y: v1.y + v2.y });

// //   return (
// //     <svg
// //       width={width}
// //       height={height}
// //       xmlns="http://www.w3.org/2000/svg"
// //       style={{ border: "1px solid black" }}
// //     >
// //       {/* Coordinate Grid */}
// //       {[...Array(9).keys()].map((i) => {
// //         const offset = (i - 4) * scale; // Centered grid
// //         return (
// //           <React.Fragment key={i}>
// //             {/* Vertical Lines */}
// //             <line
// //               x1={origin.x + offset}
// //               y1={0}
// //               x2={origin.x + offset}
// //               y2={height}
// //               stroke="gray"
// //               strokeWidth="0.5"
// //               opacity="0.5"
// //             />
// //             {/* Horizontal Lines */}
// //             <line
// //               x1={0}
// //               y1={origin.y - offset}
// //               x2={width}
// //               y2={origin.y - offset}
// //               stroke="gray"
// //               strokeWidth="0.5"
// //               opacity="0.5"
// //             />
// //           </React.Fragment>
// //         );
// //       })}

// //       {/* Coordinate Axes */}
// //       <line
// //         x1={origin.x}
// //         y1={0}
// //         x2={origin.x}
// //         y2={height}
// //         stroke="black"
// //         strokeWidth="1"
// //         markerEnd="url(#arrowY)"
// //       />
// //       <line
// //         x1={0}
// //         y1={origin.y}
// //         x2={width}
// //         y2={origin.y}
// //         stroke="black"
// //         strokeWidth="1"
// //         markerEnd="url(#arrowX)"
// //       />

// //       {/* Plane Spanned by Vectors */}
// //       <polygon
// //         points={`${origin.x},${origin.y} ${v1End.x},${v1End.y} ${v3End.x},${v3End.y} ${v2End.x},${v2End.y}`}
// //         fill="lightblue"
// //         opacity="0.3"
// //       />

// //       {/* Vectors */}
// //       <line
// //         x1={origin.x}
// //         y1={origin.y}
// //         x2={v1End.x}
// //         y2={v1End.y}
// //         stroke="blue"
// //         strokeWidth="2"
// //         markerEnd="url(#arrowV1)"
// //       />
// //       <line
// //         x1={origin.x}
// //         y1={origin.y}
// //         x2={v2End.x}
// //         y2={v2End.y}
// //         stroke="green"
// //         strokeWidth="2"
// //         markerEnd="url(#arrowV2)"
// //       />

// //       {/* Labels for Vectors */}
// //       <text x={v1End.x + 10} y={v1End.y - 10} fill="blue">
// //         v1
// //       </text>
// //       <text x={v2End.x + 10} y={v2End.y - 10} fill="green">
// //         v2
// //       </text>
// //       <text x={width - 20} y={origin.y + 20} fill="black">
// //         X
// //       </text>
// //       <text x={origin.x - 20} y={20} fill="black">
// //         Y
// //       </text>

// //       {/* Arrowhead Markers */}
// //       <defs>
// //         <marker
// //           id="arrowX"
// //           markerWidth="10"
// //           markerHeight="10"
// //           refX="10"
// //           refY="5"
// //           orient="auto"
// //         >
// //           <polygon points="0,0 10,5 0,10" fill="black" />
// //         </marker>
// //         <marker
// //           id="arrowY"
// //           markerWidth="10"
// //           markerHeight="10"
// //           refX="10"
// //           refY="5"
// //           orient="auto"
// //         >
// //           <polygon points="0,0 10,5 0,10" fill="black" />
// //         </marker>
// //         <marker
// //           id="arrowV1"
// //           markerWidth="10"
// //           markerHeight="10"
// //           refX="10"
// //           refY="5"
// //           orient="auto"
// //         >
// //           <polygon points="0,0 10,5 0,10" fill="blue" />
// //         </marker>
// //         <marker
// //           id="arrowV2"
// //           markerWidth="10"
// //           markerHeight="10"
// //           refX="10"
// //           refY="5"
// //           orient="auto"
// //         >
// //           <polygon points="0,0 10,5 0,10" fill="green" />
// //         </marker>
// //       </defs>
// //     </svg>
// //   );
// // };

// // export default VectorSpace;


// import React from "react";

// const VectorSpace = () => {
//   const width = 800 * 0.7; // Scale down by 30%
//   const height = 800 * 0.7; // Scale down by 30%
//   const origin = { x: width / 2, y: height / 2 };
//   const scale = 100 * 0.7; // Scale down by 30%

//   // Define vectors
//   const v1 = { x: 1, y: 2 };
//   const v2 = { x: 2, y: 1 };

//   // Compute the endpoints of the vectors
//   const computeEndpoint = (vec) => ({
//     x: origin.x + vec.x * scale,
//     y: origin.y - vec.y * scale,
//   });
//   const v1End = computeEndpoint(v1);
//   const v2End = computeEndpoint(v2);
//   const v3End = computeEndpoint({ x: v1.x + v2.x, y: v1.y + v2.y });

//   return (
//     <svg
//       width={width}
//       height={height}
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ border: "1px solid black" }}
//     >
//       {/* Coordinate Grid */}
//       {[...Array(9).keys()].map((i) => {
//         const offset = (i - 4) * scale; // Centered grid
//         return (
//           <React.Fragment key={i}>
//             {/* Vertical Lines */}
//             <line
//               x1={origin.x + offset}
//               y1={0}
//               x2={origin.x + offset}
//               y2={height}
//               stroke="gray"
//               strokeWidth="0.5"
//               opacity="0.5"
//             />
//             {/* Horizontal Lines */}
//             <line
//               x1={0}
//               y1={origin.y - offset}
//               x2={width}
//               y2={origin.y - offset}
//               stroke="gray"
//               strokeWidth="0.5"
//               opacity="0.5"
//             />
//           </React.Fragment>
//         );
//       })}

//       {/* Coordinate Axes */}
//       <line
//         x1={origin.x}
//         y1={0}
//         x2={origin.x}
//         y2={height}
//         stroke="black"
//         strokeWidth="1"
//         markerEnd="url(#arrowY)"
//       />
//       <line
//         x1={0}
//         y1={origin.y}
//         x2={width}
//         y2={origin.y}
//         stroke="black"
//         strokeWidth="1"
//         markerEnd="url(#arrowX)"
//       />

//       {/* Plane Spanned by Vectors */}
//       <polygon
//         points={`${origin.x},${origin.y} ${v1End.x},${v1End.y} ${v3End.x},${v3End.y} ${v2End.x},${v2End.y}`}
//         fill="lightblue"
//         opacity="0.3"
//       />

//       {/* Vectors */}
//       <line
//         x1={origin.x}
//         y1={origin.y}
//         x2={v1End.x}
//         y2={v1End.y}
//         stroke="blue"
//         strokeWidth="2"
//         markerEnd="url(#arrowV1)"
//       />
//       <line
//         x1={origin.x}
//         y1={origin.y}
//         x2={v2End.x}
//         y2={v2End.y}
//         stroke="green"
//         strokeWidth="2"
//         markerEnd="url(#arrowV2)"
//       />

//       {/* Labels for Vectors */}
//       <text x={v1End.x + 10} y={v1End.y - 10} fill="blue">
//         v1
//       </text>
//       <text x={v2End.x + 10} y={v2End.y - 10} fill="green">
//         v2
//       </text>
//       <text x={width - 20} y={origin.y + 20} fill="black">
//         X
//       </text>
//       <text x={origin.x - 20} y={20} fill="black">
//         Y
//       </text>

//       {/* Arrowhead Markers */}
//       <defs>
//         <marker
//           id="arrowX"
//           markerWidth="10"
//           markerHeight="10"
//           refX="10"
//           refY="5"
//           orient="auto"
//         >
//           <polygon points="0,0 10,5 0,10" fill="black" />
//         </marker>
//         <marker
//           id="arrowY"
//           markerWidth="10"
//           markerHeight="10"
//           refX="10"
//           refY="5"
//           orient="auto"
//         >
//           <polygon points="0,0 10,5 0,10" fill="black" />
//         </marker>
//         <marker
//           id="arrowV1"
//           markerWidth="10"
//           markerHeight="10"
//           refX="10"
//           refY="5"
//           orient="auto"
//         >
//           <polygon points="0,0 10,5 0,10" fill="blue" />
//         </marker>
//         <marker
//           id="arrowV2"
//           markerWidth="10"
//           markerHeight="10"
//           refX="10"
//           refY="5"
//           orient="auto"
//         >
//           <polygon points="0,0 10,5 0,10" fill="green" />
//         </marker>
//       </defs>
//     </svg>
//   );
// };

// export default VectorSpace;
import React from "react";

const VectorSpace = () => {
  const width = 800 * 0.7; // Scale down by 30%
  const height = 800 * 0.7; // Scale down by 30%
  const origin = { x: width / 2, y: height / 2 };
  const scale = 100 * 0.7; // Scale down by 30%

  // Define vectors
  const v1 = { x: 1, y: 2 };
  const v2 = { x: 2, y: 1 };

  // Compute the endpoints of the vectors
  const computeEndpoint = (vec) => ({
    x: origin.x + vec.x * scale,
    y: origin.y - vec.y * scale,
  });
  const v1End = computeEndpoint(v1);
  const v2End = computeEndpoint(v2);
  const v3End = computeEndpoint({ x: v1.x + v2.x, y: v1.y + v2.y });

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ border: "1px solid black" }}
    >
      {/* Coordinate Grid */}
      {[...Array(9).keys()].map((i) => {
        const offset = (i - 4) * scale; // Centered grid
        return (
          <React.Fragment key={i}>
            {/* Vertical Lines */}
            <line
              x1={origin.x + offset}
              y1={0}
              x2={origin.x + offset}
              y2={height}
              stroke="gray"
              strokeWidth="0.5"
              opacity="0.5"
            />
            {/* Horizontal Lines */}
            <line
              x1={0}
              y1={origin.y - offset}
              x2={width}
              y2={origin.y - offset}
              stroke="gray"
              strokeWidth="0.5"
              opacity="0.5"
            />
          </React.Fragment>
        );
      })}

      {/* Coordinate Axes */}
      <line
        x1={origin.x}
        y1={height}
        x2={origin.x}
        y2={0} // Arrow now points upwards
        stroke="black"
        strokeWidth="1"
        markerEnd="url(#arrowY)"
      />
      <line
        x1={0}
        y1={origin.y}
        x2={width}
        y2={origin.y}
        stroke="black"
        strokeWidth="1"
        markerEnd="url(#arrowX)"
      />

      {/* Plane Spanned by Vectors */}
      <polygon
        points={`${origin.x},${origin.y} ${v1End.x},${v1End.y} ${v3End.x},${v3End.y} ${v2End.x},${v2End.y}`}
        fill="lightblue"
        opacity="0.3"
      />

      {/* Vectors */}
      <line
        x1={origin.x}
        y1={origin.y}
        x2={v1End.x}
        y2={v1End.y}
        stroke="blue"
        strokeWidth="2"
        markerEnd="url(#arrowV1)"
      />
      <line
        x1={origin.x}
        y1={origin.y}
        x2={v2End.x}
        y2={v2End.y}
        stroke="green"
        strokeWidth="2"
        markerEnd="url(#arrowV2)"
      />

      {/* Labels for Vectors */}
      <text x={v1End.x + 10} y={v1End.y - 10} fill="blue">
        v1
      </text>
      <text x={v2End.x + 10} y={v2End.y - 10} fill="green">
        v2
      </text>
      <text x={width - 20} y={origin.y + 20} fill="black">
        X
      </text>
      <text x={origin.x - 20} y={20} fill="black">
        Y
      </text>

      {/* Arrowhead Markers */}
      <defs>
        <marker
          id="arrowX"
          markerWidth="10"
          markerHeight="10"
          refX="10"
          refY="5"
          orient="auto"
        >
          <polygon points="0,0 10,5 0,10" fill="black" />
        </marker>
        <marker
          id="arrowY"
          markerWidth="10"
          markerHeight="10"
          refX="10"
          refY="5"
          orient="auto"
        >
          <polygon points="0,0 10,5 0,10" fill="black" />
        </marker>
        <marker
          id="arrowV1"
          markerWidth="10"
          markerHeight="10"
          refX="10"
          refY="5"
          orient="auto"
        >
          <polygon points="0,0 10,5 0,10" fill="blue" />
        </marker>
        <marker
          id="arrowV2"
          markerWidth="10"
          markerHeight="10"
          refX="10"
          refY="5"
          orient="auto"
        >
          <polygon points="0,0 10,5 0,10" fill="green" />
        </marker>
      </defs>
    </svg>
  );
};

export default VectorSpace;
