// 'use client'
// import React, { useEffect } from 'react';
// import * as d3 from 'd3';
// import venn from 'venn.js'; // Keep only this import for venn.js



// const VennDiagram = () => {
//   useEffect(() => {
//     // Define sets and their sizes
//     const sets = [
//       { sets: ['A'], size: 12 },
//       { sets: ['B'], size: 12 },
//       { sets: ['A', 'B'], size: 6 }, // Intersection size
//     ];

//     // Select the element to attach the diagram to and draw it
//     const chart = venn.VennDiagram();
//     d3.select("#venn").datum(sets).call(chart);

//     // Optionally, apply styles or interactions using D3
//   }, []);

//   return <div id="venn"></div>;
// };

// export default VennDiagram;
'use client'
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as venn from "venn.js";


const VennDiagram = ({ data }) => {
  useEffect(() => {
    // Assuming "data" is the prop containing server-fetched data
    const chart = venn.VennDiagram();
    d3.select("#venn").datum(data).call(chart);
  }, [data]);

  return <div id="venn"></div>;
};

export default VennDiagram;
