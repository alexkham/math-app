
import React, { useState, useEffect, useCallback,useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AnimatedVennDiagram.module.css';

const AnimatedVennDiagram2 = ({ scenario }) => {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [circles, setCircles] = useState([]);
  const [cumulativeLegendItems, setCumulativeLegendItems] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
    if (scenario && scenario.circles) {
      setCircles([...scenario.circles]);
      setStage(0);
      setIsPlaying(false);
    }
  }, [scenario]);

  useEffect(() => {
    const newItems = new Set();

    scenario.stages.slice(0, stage + 1).forEach((stageItems) => {
      stageItems.forEach((item) => {
        if (item.type !== 'label' && item.type !== 'circle') {
          newItems.add(item.type);
        }
      });
    });

    setCumulativeLegendItems([...newItems]);
  }, [scenario, stage]);

  const nextStage = useCallback(() => {
    setStage((prev) => Math.min(prev + 1, (scenario.stages?.length || 1) - 1));
  }, [scenario.stages]);

  const previousStage = useCallback(() => {
    setStage((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleReset = useCallback(() => {
    setStage(0);
    setIsPlaying(false);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setStage((prev) => {
          if (prev < (scenario.stages?.length || 1) - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, scenario.stages]);

  const calculateCircleIntersection = useCallback((circle1, circle2) => {
    const dx = circle2.cx - circle1.cx;
    const dy = circle2.cy - circle1.cy;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > circle1.radius + circle2.radius) {
      return null; // Circles don't intersect
    }

    const a =
      (circle1.radius * circle1.radius -
        circle2.radius * circle2.radius +
        distance * distance) /
      (2 * distance);
    const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

    const cx = circle1.cx + (a * dx) / distance;
    const cy = circle1.cy + (a * dy) / distance;

    const intersectionX1 = cx + (h * dy) / distance;
    const intersectionY1 = cy - (h * dx) / distance;
    const intersectionX2 = cx - (h * dy) / distance;
    const intersectionY2 = cy + (h * dx) / distance;

    return { x1: intersectionX1, y1: intersectionY1, x2: intersectionX2, y2: intersectionY2 };
  }, []);

//   const handleDownload = useCallback(() => {
//     if (svgRef.current) {
//       const svgData = new XMLSerializer().serializeToString(svgRef.current);
//       const canvas = document.createElement("canvas");
//       canvas.width = 500;
//       canvas.height = 300;
//       const ctx = canvas.getContext("2d");
//       const img = new Image();
//       img.onload = () => {
//         ctx.drawImage(img, 0, 0);
//         const pngFile = canvas.toDataURL("image/png");
//         const downloadLink = document.createElement("a");
//         downloadLink.download = `venn_diagram_stage_${stage + 1}.png`;
//         downloadLink.href = pngFile;
//         downloadLink.click();
//       };
//       img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
//     }
//   }, [stage]);

const handleDownload = useCallback(() => {
    if (svgRef.current) {
      // Get the SVG data
      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      
      // Create a Blob with the SVG data
      const blob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
      
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
      
      // Create a temporary anchor element and trigger the download
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `venn_diagram_stage_${stage + 1}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Clean up the URL created for the Blob
      URL.revokeObjectURL(url);
    }
  }, [stage]);  

const createCirclePath = useCallback((circle) => {
    return `M ${circle.cx - circle.radius} ${circle.cy} 
            A ${circle.radius} ${circle.radius} 0 1 1 ${circle.cx + circle.radius} ${circle.cy} 
            A ${circle.radius} ${circle.radius} 0 1 1 ${circle.cx - circle.radius} ${circle.cy}`;
  }, []);

  const calculateIntersection = useCallback(() => {
    if (circles.length < 2) return null;
    const [circle1, circle2] = circles;
    const intersection = calculateCircleIntersection(circle1, circle2);
    if (!intersection) return null;

    const { x1, y1, x2, y2 } = intersection;
    return `M ${x1} ${y1} A ${circle1.radius} ${circle1.radius} 0 0 1 ${x2} ${y2} 
            A ${circle2.radius} ${circle2.radius} 0 0 1 ${x1} ${y1}`;
  }, [circles, calculateCircleIntersection]);

  const calculateDifference = useCallback(() => {
    if (circles.length < 2) return null;
    const [circle1, circle2] = circles;
    const intersection = calculateCircleIntersection(circle1, circle2);
    if (!intersection) return createCirclePath(circle1);

    const { x1, y1, x2, y2 } = intersection;
    const largeArcFlag = Math.abs(y2 - y1) > circle1.radius ? 1 : 0;
    return `M ${x1} ${y1} 
            A ${circle1.radius} ${circle1.radius} 0 ${largeArcFlag} 1 ${x2} ${y2} 
            A ${circle2.radius} ${circle2.radius} 0 0 0 ${x1} ${y1}`;
  }, [circles, calculateCircleIntersection, createCirclePath]);

  const calculateRightDifference = useCallback(() => {
    if (circles.length < 2) return null;
    const [circle1, circle2] = circles;
    const intersection = calculateCircleIntersection(circle1, circle2);
    if (!intersection) return createCirclePath(circle2);

    const { x1, y1, x2, y2 } = intersection;
    const largeArcFlag = Math.abs(y2 - y1) > circle2.radius ? 1 : 0;
    return `M ${x1} ${y1} 
            A ${circle2.radius} ${circle2.radius} 0 ${largeArcFlag} 0 ${x2} ${y2} 
            A ${circle1.radius} ${circle1.radius} 0 0 1 ${x1} ${y1}`;
  }, [circles, calculateCircleIntersection, createCirclePath]);

  const calculateSymmetricDifference = useCallback(() => {
    const leftDifference = calculateDifference();
    const rightDifference = calculateRightDifference();
    if (!leftDifference || !rightDifference) return null;
    return `${leftDifference} ${rightDifference}`;
  }, [calculateDifference, calculateRightDifference]);

  const calculateUnion = useCallback(() => {
    const intersection = calculateIntersection();
    const symmetricDifference = calculateSymmetricDifference();
    if (!intersection || !symmetricDifference) return null;
    return `${intersection} ${symmetricDifference}`;
  }, [calculateIntersection, calculateSymmetricDifference]);

  const calculateComplement = useCallback(
    (shape) => {
      const universeWidth = 400;
      const universeHeight = 300;
      const universePath = `M 0 0 H ${universeWidth} V ${universeHeight} H 0 V 0 Z`;

      if (typeof shape === 'number') {
        if (shape >= circles.length) return null;
        const circle = circles[shape];
        return `${universePath}
                M ${circle.cx} ${circle.cy} m -${circle.radius}, 0
                a ${circle.radius},${circle.radius} 0 1,0 ${circle.radius * 2},0
                a ${circle.radius},${circle.radius} 0 1,0 -${circle.radius * 2},0`;
      } else if (typeof shape === 'string') {
        return `${universePath} ${shape}`;
      }
      return null;
    },
    [circles]
  );

  const calculateComplexShape = useCallback(
    (operation) => {
      switch (operation.type) {
        case 'intersection':
          return calculateIntersection();
        case 'difference':
          return calculateRightDifference(); // Swapped from calculateDifference
        case 'rightDifference':
          return calculateDifference(); // Swapped from calculateRightDifference
        case 'symmetricDifference':
          return calculateSymmetricDifference();
        case 'union':
          return calculateUnion();
        case 'complement':
          if (operation.of) {
            const innerShape = calculateComplexShape(operation.of);
            return innerShape ? calculateComplement(innerShape) : null;
          }
          return typeof operation.index === 'number' ? calculateComplement(operation.index) : null;
        default:
          return null;
      }
    },
    [
      calculateIntersection,
      calculateDifference,
      calculateRightDifference,
      calculateSymmetricDifference,
      calculateUnion,
      calculateComplement,
    ]
  );

  const renderShape = useCallback(
    (item, index) => {
      const shapeProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
      };

      switch (item.type) {
        case 'circle':
          return (
            <motion.circle
              key={`circle-${index}`}
              cx={circles[index]?.cx}
              cy={circles[index]?.cy}
              r={circles[index]?.radius}
              fill={`${circles[index]?.color}4D`}
              stroke={circles[index]?.color}
              strokeWidth="1"
              {...shapeProps}
              initial={{ ...shapeProps.initial, r: 0 }}
              animate={{ ...shapeProps.animate, r: circles[index]?.radius }}
              exit={{ ...shapeProps.exit, r: 0 }}
            />
          );
        case 'intersection':
        case 'difference':
        case 'rightDifference':
        case 'symmetricDifference':
        case 'union':
        case 'complement': {
          const path = calculateComplexShape(item);
          if (!path) return null;

          let fill = scenario[`${item.type}Color`] || 'rgba(255, 0, 0, 0.5)';
          let stroke = circles[item.type === 'difference' ? 1 : 0]?.color || 'gray'; // Updated this line
          let strokeWidth = item.type.includes('difference') ? 1 : 0;

          if (item.type === 'complement' && item.of) {
            const innerPath = calculateComplexShape(item.of);
            return (
              <React.Fragment key={`complement-group-${index}`}>
                <motion.path
                  key={`${item.of.type}-${index}`}
                  d={innerPath}
                  fill={scenario[`${item.of.type}Color`] || 'purple'}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  fillRule="evenodd"
                  {...shapeProps}
                />
                <motion.path
                  key={`complement-${index}`}
                  d={path}
                  fill={scenario.complementColor || 'yellow'}
                  stroke="none"
                  fillRule="evenodd"
                  {...shapeProps}
                />
              </React.Fragment>
            );
          } else {
            return (
              <motion.path
                key={`${item.type}-${index}`}
                d={path}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                fillRule="evenodd"
                {...shapeProps}
              />
            );
          }
        }
        case 'label':
          return (
            <motion.text
              key={`label-${index}`}
              x={item.x}
              y={item.y}
              fill={
                item.category === 'set'
                  ? scenario.setLabelColor
                  : item.category === 'difference'
                  ? scenario.differenceLabelColor
                  : scenario.intersectionLabelColor
              }
              {...shapeProps}
            >
              {item.text}
            </motion.text>
          );
        default:
          return null;
      }
    },
    [circles, scenario, calculateComplexShape]
  );

  const renderLegend = useCallback(() => {
    if (!scenario.legend || !scenario.legend.show) {
      return null;
    }

    const legendItems =
      scenario.legend.items ||
      cumulativeLegendItems.map((type) => ({
        type,
        label: type.charAt(0).toUpperCase() + type.slice(1),
        color: scenario[`${type}Color`] || 'rgba(255, 0, 0, 0.5)',
      }));

    return (
      <div className={`${styles.legend} ${styles[`legend-${scenario.legend.position || 'bottom'}`]}`}>
        {legendItems.map((item, index) => (
          <div key={index} className={styles.legendItem}>
            <svg width="20" height="20">
              <rect width="20" height="20" fill={item.color} />
            </svg>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    );
  }, [scenario, cumulativeLegendItems]);

  if (!scenario || !scenario.stages) {
    return <div>No scenario data available</div>;
  }

  const n = scenario?.legend?.initialStage ? scenario.legend.initialStage : 1;

  return (
    <div className={styles.container}>
  <div className={styles.leftColumn}>
    <h4>{scenario.title}</h4>
   
    <div className={styles.svgContainer}>
      <svg ref={svgRef} width="100%" height="300" viewBox="0 0 400 300">
        <AnimatePresence>
          {scenario.stages[stage]?.map(renderShape)}
        </AnimatePresence>
      </svg>
    </div>
    <div>{stage > n && renderLegend()}</div> 
    <div className={styles.controls}>
      <button onClick={previousStage} disabled={stage === 0}>
        Previous
      </button>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={nextStage} disabled={stage === scenario.stages.length - 1}>
        Next
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
    <button className={styles.downloadBtn} onClick={handleDownload}>Download</button>
    <div className={styles.stageInfo}>
      Stage: {stage + 1} / {scenario.stages.length}
    </div>
    {/* {stage > n && renderLegend()} */}
  </div>
  <div className={styles.rightColumn}>
    <div className={styles.description}>
      <h4>Description</h4>
      <p>{scenario.description}</p>
            
    </div>
  </div>

</div>
    // <div className={styles.container}>
    //   <h3>{scenario.title}</h3>
    //   <svg  ref={svgRef}  width="500" height="300" viewBox="0 0 400 300">
    //     <AnimatePresence>
    //       {scenario.stages[stage]?.map(renderShape)}
    //     </AnimatePresence>
    //   </svg>
    //   <button onClick={handleDownload}>Download</button>
    //   {stage > n && renderLegend()}
    //   <div className={styles.controls}>
    //     <button onClick={previousStage} disabled={stage === 0}>
    //       Previous
    //     </button>
    //     <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    //     <button onClick={nextStage} disabled={stage === scenario.stages.length - 1}>
    //       Next
    //     </button>
    //     <button onClick={handleReset}>Reset</button>
    //   </div>
    //   <div className={styles.stageInfo}>
    //     Stage: {stage + 1} / {scenario.stages.length}
    //   </div>
    //   <p>{scenario.description}</p>
     
    // </div>
  );
};

export default AnimatedVennDiagram2;