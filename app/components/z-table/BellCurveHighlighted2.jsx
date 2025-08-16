'use client'
import React, { useEffect, useState , useRef} from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(...registerables, annotationPlugin);


const BellCurveHighlighted2 = ({ dataPoints, zScore  }) => {
    const chartRef = useRef(null);
   const pdf = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
   // const pdf=x=>(2*x+6)
    console.log(dataPoints)
    console.log(zScore)
    console.log(zScore[0])
    
    // Prepare your chart data here
    const chartData = {
        labels: dataPoints,
        datasets: [{
            label: 'Distribution',
            data: dataPoints.map(x => pdf(x)),
            borderColor: 'rgba(0, 0, 192, 1)',
            borderWidth: 1,
            fill: false,
            tension: 0.4,
            pointRadius: 0,
            backgroundColor: dataPoints.map(x => parseFloat(x) <= parseFloat(zScore[0]+400) ? 'rgba(0, 0, 192, 0.2)' : 'transparent'),
        }],
    };
    console.log( 'Dataset :'+chartData.datasets[0].data)
    const options = {
        scales: {
            x: { 
                beginAtZero: false,
                title: { display: true, text: 'Z-Score' },
            },
            y: {
                beginAtZero: false,
                title: { display: true, text: 'Probability Density' },
            },
        },
        plugins: {
            annotation: {
                annotations: {
                    verticalLine: {
                        type: 'line',
                        xMin: zScore*100+400,
                        xMax: zScore*100+400,
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 2,
                        yMin:0,
                        yMax:pdf(zScore),
                       
                        label: {
                            enabled: true,
                            content: `Z = ${zScore}`,
                        }
                    }
                }
            }
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width: '800px', height: '400px' }}>
            <Line ref={chartRef} data={chartData} options={options} />
        </div>
    );
};

export default BellCurveHighlighted2;
