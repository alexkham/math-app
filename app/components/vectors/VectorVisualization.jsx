// import Plot from 'react-plotly.js';

// const VectorVisualization = () => {
//     // Define base vector and scalar multiples
//     const vector = [1, 2];
//     const scalars = [0.5, 1, 2];
//     const colors = ['green', 'blue', 'red'];

//     // Generate traces for each scaled vector
//     const traces = scalars.map((scalar, index) => {
//         const scaledVector = [scalar * vector[0], scalar * vector[1]];
//         return {
//             x: [0, scaledVector[0]],
//             y: [0, scaledVector[1]],
//             mode: 'lines+markers',
//             line: { color: colors[index], width: 3 },
//             marker: { size: 8 },
//             name: `${scalar} * Vector`,
//         };
//     });

//     // Layout configuration
//     const layout = {
//         title: 'Scalar Multiplication of a Vector',
//         xaxis: {
//             title: 'X-axis',
//             zeroline: true,
//             range: [-3, 3],
//             dtick: 0.5,
//             gridcolor: 'lightgrey',
//         },
//         yaxis: {
//             title: 'Y-axis',
//             zeroline: true,
//             range: [-3, 5],
//             dtick: 0.5,
//             gridcolor: 'lightgrey',
//         },
//         showlegend: true,
//         template: 'plotly_white',
//         width: 600,
//         height: 600,
//     };

//     return (
//         <Plot
//             data={traces}
//             layout={layout}
//             config={{ responsive: true }}
//         />
//     );
// };

// export default VectorVisualization;

import dynamic from 'next/dynamic';

// Dynamically import Plotly to prevent SSR
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const VectorVisualization = () => {
    const vector = [1, 2];
    const scalars = [0.5, 1, 2];
    const colors = ['green', 'blue', 'red'];

    const traces = scalars.map((scalar, index) => {
        const scaledVector = [scalar * vector[0], scalar * vector[1]];
        return {
            x: [0, scaledVector[0]],
            y: [0, scaledVector[1]],
            mode: 'lines+markers',
            line: { color: colors[index], width: 3 },
            marker: { size: 8 },
            name: `${scalar} * Vector`,
        };
    });

    const layout = {
        title: 'Scalar Multiplication of a Vector',
        xaxis: {
            title: 'X-axis',
            zeroline: true,
            range: [-3, 3],
            dtick: 0.5,
            gridcolor: 'lightgrey',
        },
        yaxis: {
            title: 'Y-axis',
            zeroline: true,
            range: [-3, 5],
            dtick: 0.5,
            gridcolor: 'lightgrey',
        },
        showlegend: true,
        template: 'plotly_white',
        width: 600,
        height: 600,
    };

    return <Plot data={traces} layout={layout} config={{ responsive: true }} />;
};

export default VectorVisualization;
