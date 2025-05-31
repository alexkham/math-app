
// // // // // // // // import React from 'react';

// // // // // // // // const CircularDiagram = ({ data, showCircle = false, radius = 100 }) => {
// // // // // // // //  const getPosition = (index, total) => {
// // // // // // // //    const angle = (index * 2 * Math.PI) / total;
// // // // // // // //    return {
// // // // // // // //      x: 400 + radius * Math.cos(angle - Math.PI / 2),
// // // // // // // //      y: 300 + radius * Math.sin(angle - Math.PI / 2),
// // // // // // // //      angle: angle - Math.PI / 2
// // // // // // // //    };
// // // // // // // //  };

// // // // // // // //  const wrapText = (text, maxWidth) => {
// // // // // // // //    const words = text.split(' ');
// // // // // // // //    const lines = [];
// // // // // // // //    let currentLine = words[0];

// // // // // // // //    for(let i = 1; i < words.length; i++) {
// // // // // // // //      const word = words[i];
// // // // // // // //      if ((currentLine + " " + word).length * 8 < maxWidth) { // Rough estimate of text width
// // // // // // // //        currentLine += " " + word;
// // // // // // // //      } else {
// // // // // // // //        lines.push(currentLine);
// // // // // // // //        currentLine = word;
// // // // // // // //      }
// // // // // // // //    }
// // // // // // // //    lines.push(currentLine);
// // // // // // // //    return lines;
// // // // // // // //  };

// // // // // // // //  const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
// // // // // // // //    if (!textBox) return null;

// // // // // // // //    const boxDistance = radius * 0.7;
// // // // // // // //    const { text, width = 120, height = 35 } = textBox;
   
// // // // // // // //    const boxX = x + Math.cos(angle) * boxDistance;
// // // // // // // //    const boxY = y + Math.sin(angle) * boxDistance;
   
// // // // // // // //    const lineStartX = x + Math.cos(angle) * nodeSize;
// // // // // // // //    const lineStartY = y + Math.sin(angle) * nodeSize;
// // // // // // // //    const lineEndX = x + Math.cos(angle) * (boxDistance - width/2);
// // // // // // // //    const lineEndY = y + Math.sin(angle) * (boxDistance - height/2);

// // // // // // // //    const lines = wrapText(text, width - 20); // Account for padding
// // // // // // // //    const lineHeight = height / (lines.length + 1);

// // // // // // // //    return (
// // // // // // // //      <g>
// // // // // // // //        <line
// // // // // // // //          x1={lineStartX}
// // // // // // // //          y1={lineStartY}
// // // // // // // //          x2={lineEndX}
// // // // // // // //          y2={lineEndY}
// // // // // // // //          stroke="#ccc"
// // // // // // // //          strokeWidth="1"
// // // // // // // //        />
// // // // // // // //        <rect
// // // // // // // //          x={boxX - width/2}
// // // // // // // //          y={boxY - height/2}
// // // // // // // //          width={width}
// // // // // // // //          height={height}
// // // // // // // //          fill="#fff"
// // // // // // // //          stroke="#ccc"
// // // // // // // //          strokeWidth="1"
// // // // // // // //          rx="4"
// // // // // // // //        />
// // // // // // // //        {lines.map((line, i) => (
// // // // // // // //          <text
// // // // // // // //            key={i}
// // // // // // // //            x={boxX}
// // // // // // // //            y={boxY - (lines.length - 1) * lineHeight / 2 + i * lineHeight}
// // // // // // // //            textAnchor="middle"
// // // // // // // //            dominantBaseline="middle"
// // // // // // // //            style={{ fontSize: '14px', fill: '#666' }}
// // // // // // // //          >
// // // // // // // //            {line}
// // // // // // // //          </text>
// // // // // // // //        ))}
// // // // // // // //      </g>
// // // // // // // //    );
// // // // // // // //  };

// // // // // // // //  const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
// // // // // // // //    <>
// // // // // // // //      <circle 
// // // // // // // //        cx={x} 
// // // // // // // //        cy={y} 
// // // // // // // //        r={size} 
// // // // // // // //        fill={color || '#000000'}
// // // // // // // //      />
// // // // // // // //      <text 
// // // // // // // //        x={x} 
// // // // // // // //        y={y} 
// // // // // // // //        textAnchor="middle"
// // // // // // // //        dominantBaseline="middle"
// // // // // // // //        style={{ fill: '#fff', fontSize: '12px', pointerEvents: 'none' }}
// // // // // // // //      >
// // // // // // // //        {title}
// // // // // // // //      </text>
// // // // // // // //      <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
// // // // // // // //    </>
// // // // // // // //  );

// // // // // // // //  const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
// // // // // // // //    const handleClick = () => {
// // // // // // // //      if (link) window.open(link, '_blank');
// // // // // // // //    };

// // // // // // // //    return (
// // // // // // // //      <g 
// // // // // // // //        onClick={handleClick} 
// // // // // // // //        style={{ cursor: 'pointer' }}
// // // // // // // //      >
// // // // // // // //        <NodeContent 
// // // // // // // //          x={x} 
// // // // // // // //          y={y} 
// // // // // // // //          size={size} 
// // // // // // // //          color={color} 
// // // // // // // //          title={title} 
// // // // // // // //          textBox={textBox}
// // // // // // // //          angle={angle}
// // // // // // // //        />
// // // // // // // //      </g>
// // // // // // // //    );
// // // // // // // //  };

// // // // // // // //  return (
// // // // // // // //    <div style={{ width: '100%', height: '600px', backgroundColor: '#fff' }}>
// // // // // // // //      <svg viewBox="0 0 800 600" style={{ width: '100%', height: '100%' }}>
// // // // // // // //        {showCircle && (
// // // // // // // //          <circle
// // // // // // // //            cx={400}
// // // // // // // //            cy={300}
// // // // // // // //            r={radius}
// // // // // // // //            stroke="lightgray"
// // // // // // // //            fill="none"
// // // // // // // //            strokeWidth="6"
// // // // // // // //          />
// // // // // // // //        )}

// // // // // // // //        {data.link ? (
// // // // // // // //          <ClickableNode 
// // // // // // // //            x={400}
// // // // // // // //            y={300}
// // // // // // // //            size={data.size || 40}
// // // // // // // //            color={data.color}
// // // // // // // //            title={data.title}
// // // // // // // //            link={data.link}
// // // // // // // //            textBox={data.textBox}
// // // // // // // //            angle={0}
// // // // // // // //          />
// // // // // // // //        ) : (
// // // // // // // //          <NodeContent 
// // // // // // // //            x={400}
// // // // // // // //            y={300}
// // // // // // // //            size={data.size || 40}
// // // // // // // //            color={data.color}
// // // // // // // //            title={data.title}
// // // // // // // //            textBox={data.textBox}
// // // // // // // //            angle={0}
// // // // // // // //          />
// // // // // // // //        )}

// // // // // // // //        {data.nested.map((item, index) => {
// // // // // // // //          const pos = getPosition(index, data.nested.length);
         
// // // // // // // //          return item.link ? (
// // // // // // // //            <ClickableNode 
// // // // // // // //              key={item.title}
// // // // // // // //              x={pos.x}
// // // // // // // //              y={pos.y}
// // // // // // // //              size={item.size || 30}
// // // // // // // //              color={item.color}
// // // // // // // //              title={item.title}
// // // // // // // //              link={item.link}
// // // // // // // //              textBox={item.textBox}
// // // // // // // //              angle={pos.angle}
// // // // // // // //            />
// // // // // // // //          ) : (
// // // // // // // //            <g key={item.title}>
// // // // // // // //              <NodeContent 
// // // // // // // //                x={pos.x}
// // // // // // // //                y={pos.y}
// // // // // // // //                size={item.size || 30}
// // // // // // // //                color={item.color}
// // // // // // // //                title={item.title}
// // // // // // // //                textBox={item.textBox}
// // // // // // // //                angle={pos.angle}
// // // // // // // //              />
// // // // // // // //            </g>
// // // // // // // //          );
// // // // // // // //        })}
// // // // // // // //      </svg>
// // // // // // // //    </div>
// // // // // // // //  );
// // // // // // // // };

// // // // // // // // export default CircularDiagram;



// // // // // // // import React from 'react';

// // // // // // // const CircularDiagram = ({ data, showCircle = false, radius = 100 }) => {
// // // // // // // const getPosition = (index, total) => {
// // // // // // //   const angle = (index * 2 * Math.PI) / total;
// // // // // // //   return {
// // // // // // //     x: 400 + radius * Math.cos(angle - Math.PI / 2),
// // // // // // //     y: 300 + radius * Math.sin(angle - Math.PI / 2),
// // // // // // //     angle: angle - Math.PI / 2
// // // // // // //   };
// // // // // // // };

// // // // // // // const wrapText = (text, maxWidth) => {
// // // // // // //   const words = text.split(' ');
// // // // // // //   const lines = [];
// // // // // // //   let currentLine = words[0];

// // // // // // //   for(let i = 1; i < words.length; i++) {
// // // // // // //     const word = words[i];
// // // // // // //     if ((currentLine + " " + word).length * 8 < maxWidth) {
// // // // // // //       currentLine += " " + word;
// // // // // // //     } else {
// // // // // // //       lines.push(currentLine);
// // // // // // //       currentLine = word;
// // // // // // //     }
// // // // // // //   }
// // // // // // //   lines.push(currentLine);
// // // // // // //   return lines;
// // // // // // // };

// // // // // // // const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
// // // // // // //   if (!textBox) return null;

// // // // // // //   const boxDistance = 50; // Fixed short distance
// // // // // // //   const { text, width = 120, height = 35 } = textBox;
  
// // // // // // //   let boxX = x + Math.cos(angle) * boxDistance;
// // // // // // //   let boxY = y + Math.sin(angle) * boxDistance;
  
// // // // // // //   // Prevent overflow by clamping to canvas bounds
// // // // // // //   const margin = width/2 + 10;
// // // // // // //   boxX = Math.max(margin, Math.min(800 - margin, boxX));
// // // // // // //   boxY = Math.max(height/2 + 10, Math.min(600 - height/2 - 10, boxY));
  
// // // // // // //   // Short line from node edge
// // // // // // //   const lineStartX = x + Math.cos(angle) * nodeSize;
// // // // // // //   const lineStartY = y + Math.sin(angle) * nodeSize;
// // // // // // //   const lineEndX = x + Math.cos(angle) * (nodeSize + 20);
// // // // // // //   const lineEndY = y + Math.sin(angle) * (nodeSize + 20);

// // // // // // //   const lines = wrapText(text, width - 20);
// // // // // // //   const lineHeight = height / (lines.length + 1);

// // // // // // //   return (
// // // // // // //     <g>
// // // // // // //       <line
// // // // // // //         x1={lineStartX}
// // // // // // //         y1={lineStartY}
// // // // // // //         x2={lineEndX}
// // // // // // //         y2={lineEndY}
// // // // // // //         stroke="#ccc"
// // // // // // //         strokeWidth="1"
// // // // // // //       />
// // // // // // //       <rect
// // // // // // //         x={boxX - width/2}
// // // // // // //         y={boxY - height/2}
// // // // // // //         width={width}
// // // // // // //         height={height}
// // // // // // //         fill="#fff"
// // // // // // //         stroke="#ccc"
// // // // // // //         strokeWidth="1"
// // // // // // //         rx="4"
// // // // // // //       />
// // // // // // //       {lines.map((line, i) => (
// // // // // // //         <text
// // // // // // //           key={i}
// // // // // // //           x={boxX}
// // // // // // //           y={boxY - (lines.length - 1) * lineHeight / 2 + i * lineHeight}
// // // // // // //           textAnchor="middle"
// // // // // // //           dominantBaseline="middle"
// // // // // // //           style={{ fontSize: '14px', fill: '#666' }}
// // // // // // //         >
// // // // // // //           {line}
// // // // // // //         </text>
// // // // // // //       ))}
// // // // // // //     </g>
// // // // // // //   );
// // // // // // // };

// // // // // // // const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
// // // // // // //   <>
// // // // // // //     <circle 
// // // // // // //       cx={x} 
// // // // // // //       cy={y} 
// // // // // // //       r={size} 
// // // // // // //       fill={color || '#000000'}
// // // // // // //     />
// // // // // // //     <text 
// // // // // // //       x={x} 
// // // // // // //       y={y} 
// // // // // // //       textAnchor="middle"
// // // // // // //       dominantBaseline="middle"
// // // // // // //       style={{ fill: '#fff', fontSize: '12px', pointerEvents: 'none' }}
// // // // // // //     >
// // // // // // //       {title}
// // // // // // //     </text>
// // // // // // //     <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
// // // // // // //   </>
// // // // // // // );

// // // // // // // const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
// // // // // // //   const handleClick = () => {
// // // // // // //     if (link) window.open(link, '_blank');
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <g 
// // // // // // //       onClick={handleClick} 
// // // // // // //       style={{ cursor: 'pointer' }}
// // // // // // //     >
// // // // // // //       <NodeContent 
// // // // // // //         x={x} 
// // // // // // //         y={y} 
// // // // // // //         size={size} 
// // // // // // //         color={color} 
// // // // // // //         title={title} 
// // // // // // //         textBox={textBox}
// // // // // // //         angle={angle}
// // // // // // //       />
// // // // // // //     </g>
// // // // // // //   );
// // // // // // // };

// // // // // // // return (
// // // // // // //   <div style={{ width: '100%', height: '600px', backgroundColor: '#fff' }}>
// // // // // // //     <svg viewBox="0 0 800 600" style={{ width: '100%', height: '100%' }}>
// // // // // // //       {showCircle && (
// // // // // // //         <circle
// // // // // // //           cx={400}
// // // // // // //           cy={300}
// // // // // // //           r={radius}
// // // // // // //           stroke="lightgray"
// // // // // // //           fill="none"
// // // // // // //           strokeWidth="6"
// // // // // // //         />
// // // // // // //       )}

// // // // // // //       {data.link ? (
// // // // // // //         <ClickableNode 
// // // // // // //           x={400}
// // // // // // //           y={300}
// // // // // // //           size={data.size || 40}
// // // // // // //           color={data.color}
// // // // // // //           title={data.title}
// // // // // // //           link={data.link}
// // // // // // //           textBox={data.textBox}
// // // // // // //           angle={0}
// // // // // // //         />
// // // // // // //       ) : (
// // // // // // //         <NodeContent 
// // // // // // //           x={400}
// // // // // // //           y={300}
// // // // // // //           size={data.size || 40}
// // // // // // //           color={data.color}
// // // // // // //           title={data.title}
// // // // // // //           textBox={data.textBox}
// // // // // // //           angle={0}
// // // // // // //         />
// // // // // // //       )}

// // // // // // //       {data.nested.map((item, index) => {
// // // // // // //         const pos = getPosition(index, data.nested.length);
        
// // // // // // //         return item.link ? (
// // // // // // //           <ClickableNode 
// // // // // // //             key={item.title}
// // // // // // //             x={pos.x}
// // // // // // //             y={pos.y}
// // // // // // //             size={item.size || 30}
// // // // // // //             color={item.color}
// // // // // // //             title={item.title}
// // // // // // //             link={item.link}
// // // // // // //             textBox={item.textBox}
// // // // // // //             angle={pos.angle}
// // // // // // //           />
// // // // // // //         ) : (
// // // // // // //           <g key={item.title}>
// // // // // // //             <NodeContent 
// // // // // // //               x={pos.x}
// // // // // // //               y={pos.y}
// // // // // // //               size={item.size || 30}
// // // // // // //               color={item.color}
// // // // // // //               title={item.title}
// // // // // // //               textBox={item.textBox}
// // // // // // //               angle={pos.angle}
// // // // // // //             />
// // // // // // //           </g>
// // // // // // //         );
// // // // // // //       })}
// // // // // // //     </svg>
// // // // // // //   </div>
// // // // // // // );
// // // // // // // };

// // // // // // // export default CircularDiagram;



// // // // // // import React from 'react';

// // // // // // const CircularDiagram = ({ data, showCircle = false, radius = 100, width = 1000, height = 700 }) => {
// // // // // // const centerX = width / 2;
// // // // // // const centerY = height / 2;

// // // // // // const getPosition = (index, total) => {
// // // // // //   const angle = (index * 2 * Math.PI) / total;
// // // // // //   return {
// // // // // //     x: centerX + radius * Math.cos(angle - Math.PI / 2),
// // // // // //     y: centerY + radius * Math.sin(angle - Math.PI / 2),
// // // // // //     angle: angle - Math.PI / 2
// // // // // //   };
// // // // // // };

// // // // // // const wrapText = (text, maxWidth) => {
// // // // // //   const words = text.split(' ');
// // // // // //   const lines = [];
// // // // // //   let currentLine = words[0];

// // // // // //   for(let i = 1; i < words.length; i++) {
// // // // // //     const word = words[i];
// // // // // //     if ((currentLine + " " + word).length * 8 < maxWidth) {
// // // // // //       currentLine += " " + word;
// // // // // //     } else {
// // // // // //       lines.push(currentLine);
// // // // // //       currentLine = word;
// // // // // //     }
// // // // // //   }
// // // // // //   lines.push(currentLine);
// // // // // //   return lines;
// // // // // // };

// // // // // // const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
// // // // // //   if (!textBox) return null;

// // // // // //   const boxDistance = 70; // Compromise distance - not too short, not too long
// // // // // //   const { text, width: boxWidth = 120, height: boxHeight = 35 } = textBox;
  
// // // // // //   let boxX = x + Math.cos(angle) * boxDistance;
// // // // // //   let boxY = y + Math.sin(angle) * boxDistance;
  
// // // // // //   // Prevent overflow by clamping to canvas bounds with padding
// // // // // //   const padding = 20;
// // // // // //   const margin = boxWidth/2 + padding;
// // // // // //   boxX = Math.max(margin, Math.min(width - margin, boxX));
// // // // // //   boxY = Math.max(boxHeight/2 + padding, Math.min(height - boxHeight/2 - padding, boxY));
  
// // // // // //   // Line from node edge to closer to box
// // // // // //   const lineStartX = x + Math.cos(angle) * nodeSize;
// // // // // //   const lineStartY = y + Math.sin(angle) * nodeSize;
// // // // // //   const lineEndX = x + Math.cos(angle) * (nodeSize + 35);
// // // // // //   const lineEndY = y + Math.sin(angle) * (nodeSize + 35);

// // // // // //   const lines = wrapText(text, boxWidth - 20);
// // // // // //   const lineHeight = boxHeight / (lines.length + 1);

// // // // // //   return (
// // // // // //     <g>
// // // // // //       <line
// // // // // //         x1={lineStartX}
// // // // // //         y1={lineStartY}
// // // // // //         x2={lineEndX}
// // // // // //         y2={lineEndY}
// // // // // //         stroke="#ccc"
// // // // // //         strokeWidth="1"
// // // // // //       />
// // // // // //       <rect
// // // // // //         x={boxX - boxWidth/2}
// // // // // //         y={boxY - boxHeight/2}
// // // // // //         width={boxWidth}
// // // // // //         height={boxHeight}
// // // // // //         fill="#fff"
// // // // // //         stroke="#ccc"
// // // // // //         strokeWidth="1"
// // // // // //         rx="4"
// // // // // //       />
// // // // // //       {lines.map((line, i) => (
// // // // // //         <text
// // // // // //           key={i}
// // // // // //           x={boxX}
// // // // // //           y={boxY - (lines.length - 1) * lineHeight / 2 + i * lineHeight}
// // // // // //           textAnchor="middle"
// // // // // //           dominantBaseline="middle"
// // // // // //           style={{ fontSize: '14px', fill: '#666' }}
// // // // // //         >
// // // // // //           {line}
// // // // // //         </text>
// // // // // //       ))}
// // // // // //     </g>
// // // // // //   );
// // // // // // };

// // // // // // const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
// // // // // //   <>
// // // // // //     <circle 
// // // // // //       cx={x} 
// // // // // //       cy={y} 
// // // // // //       r={size} 
// // // // // //       fill={color || '#000000'}
// // // // // //     />
// // // // // //     <text 
// // // // // //       x={x} 
// // // // // //       y={y} 
// // // // // //       textAnchor="middle"
// // // // // //       dominantBaseline="middle"
// // // // // //       style={{ fill: '#fff', fontSize: '12px', pointerEvents: 'none' }}
// // // // // //     >
// // // // // //       {title}
// // // // // //     </text>
// // // // // //     <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
// // // // // //   </>
// // // // // // );

// // // // // // const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
// // // // // //   const handleClick = () => {
// // // // // //     if (link) window.open(link, '_blank');
// // // // // //   };

// // // // // //   return (
// // // // // //     <g 
// // // // // //       onClick={handleClick} 
// // // // // //       style={{ cursor: 'pointer' }}
// // // // // //     >
// // // // // //       <NodeContent 
// // // // // //         x={x} 
// // // // // //         y={y} 
// // // // // //         size={size} 
// // // // // //         color={color} 
// // // // // //         title={title} 
// // // // // //         textBox={textBox}
// // // // // //         angle={angle}
// // // // // //       />
// // // // // //     </g>
// // // // // //   );
// // // // // // };

// // // // // // return (
// // // // // //   <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#fff' }}>
// // // // // //     <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%' }}>
// // // // // //       {showCircle && (
// // // // // //         <circle
// // // // // //           cx={centerX}
// // // // // //           cy={centerY}
// // // // // //           r={radius}
// // // // // //           stroke="lightgray"
// // // // // //           fill="none"
// // // // // //           strokeWidth="6"
// // // // // //         />
// // // // // //       )}

// // // // // //       {data.link ? (
// // // // // //         <ClickableNode 
// // // // // //           x={centerX}
// // // // // //           y={centerY}
// // // // // //           size={data.size || 40}
// // // // // //           color={data.color}
// // // // // //           title={data.title}
// // // // // //           link={data.link}
// // // // // //           textBox={data.textBox}
// // // // // //           angle={0}
// // // // // //         />
// // // // // //       ) : (
// // // // // //         <NodeContent 
// // // // // //           x={centerX}
// // // // // //           y={centerY}
// // // // // //           size={data.size || 40}
// // // // // //           color={data.color}
// // // // // //           title={data.title}
// // // // // //           textBox={data.textBox}
// // // // // //           angle={0}
// // // // // //         />
// // // // // //       )}

// // // // // //       {data.nested.map((item, index) => {
// // // // // //         const pos = getPosition(index, data.nested.length);
        
// // // // // //         return item.link ? (
// // // // // //           <ClickableNode 
// // // // // //             key={item.title}
// // // // // //             x={pos.x}
// // // // // //             y={pos.y}
// // // // // //             size={item.size || 30}
// // // // // //             color={item.color}
// // // // // //             title={item.title}
// // // // // //             link={item.link}
// // // // // //             textBox={item.textBox}
// // // // // //             angle={pos.angle}
// // // // // //           />
// // // // // //         ) : (
// // // // // //           <g key={item.title}>
// // // // // //             <NodeContent 
// // // // // //               x={pos.x}
// // // // // //               y={pos.y}
// // // // // //               size={item.size || 30}
// // // // // //               color={item.color}
// // // // // //               title={item.title}
// // // // // //               textBox={item.textBox}
// // // // // //               angle={pos.angle}
// // // // // //             />
// // // // // //           </g>
// // // // // //         );
// // // // // //       })}
// // // // // //     </svg>
// // // // // //   </div>
// // // // // // );
// // // // // // };

// // // // // // export default CircularDiagram;


// // // // // import React from 'react';

// // // // // const CircularDiagram = ({ data, showCircle = false, radius = 100, width = 1000, height = 700 }) => {
// // // // //  const centerX = width / 2;
// // // // //  const centerY = height / 2;

// // // // //  const getPosition = (index, total) => {
// // // // //    const angle = (index * 2 * Math.PI) / total;
// // // // //    return {
// // // // //      x: centerX + radius * Math.cos(angle - Math.PI / 2),
// // // // //      y: centerY + radius * Math.sin(angle - Math.PI / 2),
// // // // //      angle: angle - Math.PI / 2
// // // // //    };
// // // // //  };

// // // // //  const wrapText = (text, maxWidth) => {
// // // // //    const words = text.split(' ');
// // // // //    const lines = [];
// // // // //    let currentLine = words[0];

// // // // //    for(let i = 1; i < words.length; i++) {
// // // // //      const word = words[i];
// // // // //      if ((currentLine + " " + word).length * 8 < maxWidth) {
// // // // //        currentLine += " " + word;
// // // // //      } else {
// // // // //        lines.push(currentLine);
// // // // //        currentLine = word;
// // // // //      }
// // // // //    }
// // // // //    lines.push(currentLine);
// // // // //    return lines;
// // // // //  };

// // // // //  const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
// // // // //    if (!textBox) return null;

// // // // //    const { text, width: boxWidth = 120, height: boxHeight = 35 } = textBox;
   
// // // // //    // Calculate box position AWAY from center, not towards it
// // // // //    const boxDistance = nodeSize + 80; // Always outside the node
// // // // //    let boxX = x + Math.cos(angle) * boxDistance;
// // // // //    let boxY = y + Math.sin(angle) * boxDistance;
   
// // // // //    // Prevent overflow by clamping to canvas bounds with padding
// // // // //    const padding = 20;
// // // // //    const margin = boxWidth/2 + padding;
// // // // //    boxX = Math.max(margin, Math.min(width - margin, boxX));
// // // // //    boxY = Math.max(boxHeight/2 + padding, Math.min(height - boxHeight/2 - padding, boxY));
   
// // // // //    // Line from node edge outward
// // // // //    const lineStartX = x + Math.cos(angle) * nodeSize;
// // // // //    const lineStartY = y + Math.sin(angle) * nodeSize;
// // // // //    const lineEndX = boxX - Math.cos(angle) * (boxWidth/2); // Line to box edge
// // // // //    const lineEndY = boxY - Math.sin(angle) * (boxHeight/2);

// // // // //    const lines = wrapText(text, boxWidth - 20);
// // // // //    const lineHeight = boxHeight / (lines.length + 1);

// // // // //    return (
// // // // //      <g>
// // // // //        <line
// // // // //          x1={lineStartX}
// // // // //          y1={lineStartY}
// // // // //          x2={lineEndX}
// // // // //          y2={lineEndY}
// // // // //          stroke="#ccc"
// // // // //          strokeWidth="1"
// // // // //        />
// // // // //        <rect
// // // // //          x={boxX - boxWidth/2}
// // // // //          y={boxY - boxHeight/2}
// // // // //          width={boxWidth}
// // // // //          height={boxHeight}
// // // // //          fill="#fff"
// // // // //          stroke="#ccc"
// // // // //          strokeWidth="1"
// // // // //          rx="4"
// // // // //        />
// // // // //        {lines.map((line, i) => (
// // // // //          <text
// // // // //            key={i}
// // // // //            x={boxX}
// // // // //            y={boxY - (lines.length - 1) * lineHeight / 2 + i * lineHeight}
// // // // //            textAnchor="middle"
// // // // //            dominantBaseline="middle"
// // // // //            style={{ fontSize: '14px', fill: '#666' }}
// // // // //          >
// // // // //            {line}
// // // // //          </text>
// // // // //        ))}
// // // // //      </g>
// // // // //    );
// // // // //  };

// // // // //  const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
// // // // //    <>
// // // // //      <circle 
// // // // //        cx={x} 
// // // // //        cy={y} 
// // // // //        r={size} 
// // // // //        fill={color || '#000000'}
// // // // //      />
// // // // //      <text 
// // // // //        x={x} 
// // // // //        y={y} 
// // // // //        textAnchor="middle"
// // // // //        dominantBaseline="middle"
// // // // //        style={{ fill: '#fff', fontSize: '12px', pointerEvents: 'none' }}
// // // // //      >
// // // // //        {title}
// // // // //      </text>
// // // // //      <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
// // // // //    </>
// // // // //  );

// // // // //  const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
// // // // //    const handleClick = () => {
// // // // //      if (link) window.open(link, '_blank');
// // // // //    };

// // // // //    return (
// // // // //      <g 
// // // // //        onClick={handleClick} 
// // // // //        style={{ cursor: 'pointer' }}
// // // // //      >
// // // // //        <NodeContent 
// // // // //          x={x} 
// // // // //          y={y} 
// // // // //          size={size} 
// // // // //          color={color} 
// // // // //          title={title} 
// // // // //          textBox={textBox}
// // // // //          angle={angle}
// // // // //        />
// // // // //      </g>
// // // // //    );
// // // // //  };

// // // // //  return (
// // // // //    <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#fff' }}>
// // // // //      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%' }}>
// // // // //        {showCircle && (
// // // // //          <circle
// // // // //            cx={centerX}
// // // // //            cy={centerY}
// // // // //            r={radius}
// // // // //            stroke="lightgray"
// // // // //            fill="none"
// // // // //            strokeWidth="6"
// // // // //          />
// // // // //        )}

// // // // //        {data.link ? (
// // // // //          <ClickableNode 
// // // // //            x={centerX}
// // // // //            y={centerY}
// // // // //            size={data.size || 40}
// // // // //            color={data.color}
// // // // //            title={data.title}
// // // // //            link={data.link}
// // // // //            textBox={data.textBox}
// // // // //            angle={0}
// // // // //          />
// // // // //        ) : (
// // // // //          <NodeContent 
// // // // //            x={centerX}
// // // // //            y={centerY}
// // // // //            size={data.size || 40}
// // // // //            color={data.color}
// // // // //            title={data.title}
// // // // //            textBox={data.textBox}
// // // // //            angle={0}
// // // // //          />
// // // // //        )}

// // // // //        {data.nested.map((item, index) => {
// // // // //          const pos = getPosition(index, data.nested.length);
         
// // // // //          return item.link ? (
// // // // //            <ClickableNode 
// // // // //              key={item.title}
// // // // //              x={pos.x}
// // // // //              y={pos.y}
// // // // //              size={item.size || 30}
// // // // //              color={item.color}
// // // // //              title={item.title}
// // // // //              link={item.link}
// // // // //              textBox={item.textBox}
// // // // //              angle={pos.angle}
// // // // //            />
// // // // //          ) : (
// // // // //            <g key={item.title}>
// // // // //              <NodeContent 
// // // // //                x={pos.x}
// // // // //                y={pos.y}
// // // // //                size={item.size || 30}
// // // // //                color={item.color}
// // // // //                title={item.title}
// // // // //                textBox={item.textBox}
// // // // //                angle={pos.angle}
// // // // //              />
// // // // //            </g>
// // // // //          );
// // // // //        })}
// // // // //      </svg>
// // // // //    </div>
// // // // //  );
// // // // // };

// // // // // export default CircularDiagram;


// // // // import React from 'react';

// // // // const CircularDiagram = ({ data, showCircle = false, radius = 100, width = 1000, height = 700 }) => {
// // // // const centerX = width / 2;
// // // // const centerY = height / 2;

// // // // const getPosition = (index, total) => {
// // // //   const angle = (index * 2 * Math.PI) / total;
// // // //   return {
// // // //     x: centerX + radius * Math.cos(angle - Math.PI / 2),
// // // //     y: centerY + radius * Math.sin(angle - Math.PI / 2),
// // // //     angle: angle - Math.PI / 2
// // // //   };
// // // // };

// // // // const wrapText = (text, maxWidth) => {
// // // //   const words = text.split(' ');
// // // //   const lines = [];
// // // //   let currentLine = words[0] || '';
// // // //   const maxCharsPerLine = Math.floor(maxWidth / 7); // Conservative estimate

// // // //   for(let i = 1; i < words.length; i++) {
// // // //     const word = words[i];
// // // //     if ((currentLine + " " + word).length <= maxCharsPerLine) {
// // // //       currentLine += " " + word;
// // // //     } else {
// // // //       lines.push(currentLine);
// // // //       currentLine = word;
// // // //     }
// // // //   }
// // // //   lines.push(currentLine);
// // // //   return lines;
// // // // };

// // // // const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
// // // //   if (!textBox) return null;

// // // //   const { text, width: boxWidth = 120, height: boxHeight = 35 } = textBox;
  
// // // //   // Calculate box position AWAY from center, not towards it
// // // //   const boxDistance = nodeSize + 80; // Always outside the node
// // // //   let boxX = x + Math.cos(angle) * boxDistance;
// // // //   let boxY = y + Math.sin(angle) * boxDistance;
  
// // // //   // Prevent overflow by clamping to canvas bounds with padding
// // // //   const padding = 20;
// // // //   const margin = boxWidth/2 + padding;
// // // //   boxX = Math.max(margin, Math.min(width - margin, boxX));
// // // //   boxY = Math.max(boxHeight/2 + padding, Math.min(height - boxHeight/2 - padding, boxY));
  
// // // //   // Line from node edge outward
// // // //   const lineStartX = x + Math.cos(angle) * nodeSize;
// // // //   const lineStartY = y + Math.sin(angle) * nodeSize;
// // // //   const lineEndX = boxX - Math.cos(angle) * (boxWidth/2); // Line to box edge
// // // //   const lineEndY = boxY - Math.sin(angle) * (boxHeight/2);

// // // //   const lines = wrapText(text, boxWidth - 20);
// // // //   const lineHeight = boxHeight / (lines.length + 1);

// // // //   return (
// // // //     <g>
// // // //       <line
// // // //         x1={lineStartX}
// // // //         y1={lineStartY}
// // // //         x2={lineEndX}
// // // //         y2={lineEndY}
// // // //         stroke="#ccc"
// // // //         strokeWidth="1"
// // // //       />
// // // //       <rect
// // // //         x={boxX - boxWidth/2}
// // // //         y={boxY - boxHeight/2}
// // // //         width={boxWidth}
// // // //         height={boxHeight}
// // // //         fill="#fff"
// // // //         stroke="#ccc"
// // // //         strokeWidth="1"
// // // //         rx="4"
// // // //       />
// // // //       {lines.map((line, i) => (
// // // //         <text
// // // //           key={i}
// // // //           x={boxX}
// // // //           y={boxY - (lines.length - 1) * lineHeight / 2 + i * lineHeight}
// // // //           textAnchor="middle"
// // // //           dominantBaseline="middle"
// // // //           style={{ fontSize: '14px', fill: '#666' }}
// // // //         >
// // // //           {line}
// // // //         </text>
// // // //       ))}
// // // //     </g>
// // // //   );
// // // // };

// // // // const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
// // // //   <>
// // // //     <circle 
// // // //       cx={x} 
// // // //       cy={y} 
// // // //       r={size} 
// // // //       fill={color || '#000000'}
// // // //     />
// // // //     <text 
// // // //       x={x} 
// // // //       y={y} 
// // // //       textAnchor="middle"
// // // //       dominantBaseline="middle"
// // // //       style={{ fill: '#fff', fontSize: '12px', pointerEvents: 'none' }}
// // // //     >
// // // //       {title}
// // // //     </text>
// // // //     <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
// // // //   </>
// // // // );

// // // // const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
// // // //   const handleClick = () => {
// // // //     if (link) window.open(link, '_blank');
// // // //   };

// // // //   return (
// // // //     <g 
// // // //       onClick={handleClick} 
// // // //       style={{ cursor: 'pointer' }}
// // // //     >
// // // //       <NodeContent 
// // // //         x={x} 
// // // //         y={y} 
// // // //         size={size} 
// // // //         color={color} 
// // // //         title={title} 
// // // //         textBox={textBox}
// // // //         angle={angle}
// // // //       />
// // // //     </g>
// // // //   );
// // // // };

// // // // return (
// // // //   <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#fff' }}>
// // // //     <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%' }}>
// // // //       {showCircle && (
// // // //         <circle
// // // //           cx={centerX}
// // // //           cy={centerY}
// // // //           r={radius}
// // // //           stroke="lightgray"
// // // //           fill="none"
// // // //           strokeWidth="6"
// // // //         />
// // // //       )}

// // // //       {data.link ? (
// // // //         <ClickableNode 
// // // //           x={centerX}
// // // //           y={centerY}
// // // //           size={data.size || 40}
// // // //           color={data.color}
// // // //           title={data.title}
// // // //           link={data.link}
// // // //           textBox={data.textBox}
// // // //           angle={0}
// // // //         />
// // // //       ) : (
// // // //         <NodeContent 
// // // //           x={centerX}
// // // //           y={centerY}
// // // //           size={data.size || 40}
// // // //           color={data.color}
// // // //           title={data.title}
// // // //           textBox={data.textBox}
// // // //           angle={0}
// // // //         />
// // // //       )}

// // // //       {data.nested.map((item, index) => {
// // // //         const pos = getPosition(index, data.nested.length);
        
// // // //         return item.link ? (
// // // //           <ClickableNode 
// // // //             key={item.title}
// // // //             x={pos.x}
// // // //             y={pos.y}
// // // //             size={item.size || 30}
// // // //             color={item.color}
// // // //             title={item.title}
// // // //             link={item.link}
// // // //             textBox={item.textBox}
// // // //             angle={pos.angle}
// // // //           />
// // // //         ) : (
// // // //           <g key={item.title}>
// // // //             <NodeContent 
// // // //               x={pos.x}
// // // //               y={pos.y}
// // // //               size={item.size || 30}
// // // //               color={item.color}
// // // //               title={item.title}
// // // //               textBox={item.textBox}
// // // //               angle={pos.angle}
// // // //             />
// // // //           </g>
// // // //         );
// // // //       })}
// // // //     </svg>
// // // //   </div>
// // // // );
// // // // };

// // // // export default CircularDiagram;


// // // import React from 'react';

// // // const CircularDiagram = ({ data, showCircle = false, radius = 100, width = 1000, height = 700 }) => {
// // //  const centerX = width / 2;
// // //  const centerY = height / 2;

// // //  const getPosition = (index, total) => {
// // //    const angle = (index * 2 * Math.PI) / total;
// // //    return {
// // //      x: centerX + radius * Math.cos(angle - Math.PI / 2),
// // //      y: centerY + radius * Math.sin(angle - Math.PI / 2),
// // //      angle: angle - Math.PI / 2
// // //    };
// // //  };

// // //  const wrapText = (text, maxWidth) => {
// // //    const words = text.split(' ');
// // //    const lines = [];
// // //    let currentLine = words[0] || '';
// // //    const maxCharsPerLine = Math.floor(maxWidth / 8); // More aggressive

// // //    for(let i = 1; i < words.length; i++) {
// // //      const word = words[i];
// // //      if ((currentLine + " " + word).length <= maxCharsPerLine) {
// // //        currentLine += " " + word;
// // //      } else {
// // //        lines.push(currentLine);
// // //        currentLine = word;
// // //      }
// // //    }
// // //    lines.push(currentLine);
// // //    return lines;
// // //  };

// // //  const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
// // //    if (!textBox) return null;

// // //    const { text, width: boxWidth = 150, height: boxHeight = 60 } = textBox; // Bigger default height
   
// // //    const boxDistance = nodeSize + 80;
// // //    let boxX = x + Math.cos(angle) * boxDistance;
// // //    let boxY = y + Math.sin(angle) * boxDistance;
   
// // //    const padding = 20;
// // //    const margin = boxWidth/2 + padding;
// // //    boxX = Math.max(margin, Math.min(width - margin, boxX));
// // //    boxY = Math.max(boxHeight/2 + padding, Math.min(height - boxHeight/2 - padding, boxY));
   
// // //    const lineStartX = x + Math.cos(angle) * nodeSize;
// // //    const lineStartY = y + Math.sin(angle) * nodeSize;
// // //    const lineEndX = boxX - Math.cos(angle) * (boxWidth/2);
// // //    const lineEndY = boxY - Math.sin(angle) * (boxHeight/2);

// // //    const lines = wrapText(text, boxWidth - 20);
// // //    const lineHeight = 16; // Fixed line height

// // //    return (
// // //      <g>
// // //        <line
// // //          x1={lineStartX}
// // //          y1={lineStartY}
// // //          x2={lineEndX}
// // //          y2={lineEndY}
// // //          stroke="#ccc"
// // //          strokeWidth="1"
// // //        />
// // //        <rect
// // //          x={boxX - boxWidth/2}
// // //          y={boxY - boxHeight/2}
// // //          width={boxWidth}
// // //          height={boxHeight}
// // //          fill="#fff"
// // //          stroke="#ccc"
// // //          strokeWidth="1"
// // //          rx="4"
// // //        />
// // //        {lines.map((line, i) => (
// // //          <text
// // //            key={i}
// // //            x={boxX}
// // //            y={boxY - ((lines.length - 1) * lineHeight / 2) + (i * lineHeight)}
// // //            textAnchor="middle"
// // //            dominantBaseline="middle"
// // //            style={{ fontSize: '12px', fill: '#666' }}
// // //          >
// // //            {line}
// // //          </text>
// // //        ))}
// // //      </g>
// // //    );
// // //  };

// // //  const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
// // //    <>
// // //      <circle 
// // //        cx={x} 
// // //        cy={y} 
// // //        r={size} 
// // //        fill={color || '#000000'}
// // //      />
// // //      <text 
// // //        x={x} 
// // //        y={y} 
// // //        textAnchor="middle"
// // //        dominantBaseline="middle"
// // //        style={{ fill: '#fff', fontSize: '12px', pointerEvents: 'none' }}
// // //      >
// // //        {title}
// // //      </text>
// // //      <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
// // //    </>
// // //  );

// // //  const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
// // //    const handleClick = () => {
// // //      if (link) window.open(link, '_blank');
// // //    };

// // //    return (
// // //      <g 
// // //        onClick={handleClick} 
// // //        style={{ cursor: 'pointer' }}
// // //      >
// // //        <NodeContent 
// // //          x={x} 
// // //          y={y} 
// // //          size={size} 
// // //          color={color} 
// // //          title={title} 
// // //          textBox={textBox}
// // //          angle={angle}
// // //        />
// // //      </g>
// // //    );
// // //  };

// // //  return (
// // //    <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#fff' }}>
// // //      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%' }}>
// // //        {showCircle && (
// // //          <circle
// // //            cx={centerX}
// // //            cy={centerY}
// // //            r={radius}
// // //            stroke="lightgray"
// // //            fill="none"
// // //            strokeWidth="6"
// // //          />
// // //        )}

// // //        {data.link ? (
// // //          <ClickableNode 
// // //            x={centerX}
// // //            y={centerY}
// // //            size={data.size || 40}
// // //            color={data.color}
// // //            title={data.title}
// // //            link={data.link}
// // //            textBox={data.textBox}
// // //            angle={0}
// // //          />
// // //        ) : (
// // //          <NodeContent 
// // //            x={centerX}
// // //            y={centerY}
// // //            size={data.size || 40}
// // //            color={data.color}
// // //            title={data.title}
// // //            textBox={data.textBox}
// // //            angle={0}
// // //          />
// // //        )}

// // //        {data.nested.map((item, index) => {
// // //          const pos = getPosition(index, data.nested.length);
         
// // //          return item.link ? (
// // //            <ClickableNode 
// // //              key={item.title}
// // //              x={pos.x}
// // //              y={pos.y}
// // //              size={item.size || 30}
// // //              color={item.color}
// // //              title={item.title}
// // //              link={item.link}
// // //              textBox={item.textBox}
// // //              angle={pos.angle}
// // //            />
// // //          ) : (
// // //            <g key={item.title}>
// // //              <NodeContent 
// // //                x={pos.x}
// // //                y={pos.y}
// // //                size={item.size || 30}
// // //                color={item.color}
// // //                title={item.title}
// // //                textBox={item.textBox}
// // //                angle={pos.angle}
// // //              />
// // //            </g>
// // //          );
// // //        })}
// // //      </svg>
// // //    </div>
// // //  );
// // // };

// // // export default CircularDiagram;


// // import React from 'react';

// // const CircularDiagram = ({ data, showCircle = false, radius = 100, width = 1000, height = 700 }) => {
// // const centerX = width / 2;
// // const centerY = height / 2;

// // const getPosition = (index, total) => {
// //   const angle = (index * 2 * Math.PI) / total;
// //   return {
// //     x: centerX + radius * Math.cos(angle - Math.PI / 2),
// //     y: centerY + radius * Math.sin(angle - Math.PI / 2),
// //     angle: angle - Math.PI / 2
// //   };
// // };

// // const NodeContent = ({ x, y, size, color, title, angle }) => (
// //   <>
// //     <circle 
// //       cx={x} 
// //       cy={y} 
// //       r={size} 
// //       fill={color || '#000000'}
// //     />
// //     <foreignObject
// //       x={x - size}
// //       y={y - size}
// //       width={size * 2}
// //       height={size * 2}
// //     >
// //       <div style={{
// //         width: '100%',
// //         height: '100%',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         textAlign: 'center',
// //         color: '#fff',
// //         fontSize: '12px',
// //         fontWeight: 'bold',
// //         pointerEvents: 'none',
// //         wordWrap: 'break-word',
// //         hyphens: 'auto',
// //         lineHeight: '1.1',
// //         padding: '4px',
// //         overflowWrap: 'break-word'
// //       }}>
// //         {title}
// //       </div>
// //     </foreignObject>
// //   </>
// // );

// // const ClickableNode = ({ x, y, size, color, title, link, angle }) => {
// //   const handleClick = () => {
// //     if (link) window.open(link, '_blank');
// //   };

// //   return (
// //     <g 
// //       onClick={handleClick} 
// //       style={{ cursor: 'pointer' }}
// //     >
// //       <NodeContent 
// //         x={x} 
// //         y={y} 
// //         size={size} 
// //         color={color} 
// //         title={title} 
// //         angle={angle}
// //       />
// //     </g>
// //   );
// // };

// // return (
// //   <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#fff' }}>
// //     <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%' }}>
// //       {showCircle && (
// //         <circle
// //           cx={centerX}
// //           cy={centerY}
// //           r={radius}
// //           stroke="lightgray"
// //           fill="none"
// //           strokeWidth="6"
// //         />
// //       )}

// //       {data.link ? (
// //         <ClickableNode 
// //           x={centerX}
// //           y={centerY}
// //           size={data.size || 40}
// //           color={data.color}
// //           title={data.title}
// //           link={data.link}
// //           angle={0}
// //         />
// //       ) : (
// //         <NodeContent 
// //           x={centerX}
// //           y={centerY}
// //           size={data.size || 40}
// //           color={data.color}
// //           title={data.title}
// //           angle={0}
// //         />
// //       )}

// //       {data.nested.map((item, index) => {
// //         const pos = getPosition(index, data.nested.length);
        
// //         return item.link ? (
// //           <ClickableNode 
// //             key={item.title}
// //             x={pos.x}
// //             y={pos.y}
// //             size={item.size || 30}
// //             color={item.color}
// //             title={item.title}
// //             link={item.link}
// //             angle={pos.angle}
// //           />
// //         ) : (
// //           <g key={item.title}>
// //             <NodeContent 
// //               x={pos.x}
// //               y={pos.y}
// //               size={item.size || 30}
// //               color={item.color}
// //               title={item.title}
// //               angle={pos.angle}
// //             />
// //           </g>
// //         );
// //       })}
// //     </svg>
// //   </div>
// // );
// // };

// // export default CircularDiagram;



// import React from 'react';

// const CircularDiagram = ({ data, showCircle = false, radius = 100, width = 1000, height = 700 }) => {
// const centerX = width / 2;
// const centerY = height / 2;

// const getPosition = (index, total) => {
//   const angle = (index * 2 * Math.PI) / total;
//   return {
//     x: centerX + radius * Math.cos(angle - Math.PI / 2),
//     y: centerY + radius * Math.sin(angle - Math.PI / 2),
//     angle: angle - Math.PI / 2
//   };
// };

// const wrapText = (text, maxWidth) => {
//   const words = text.split(' ');
//   const lines = [];
//   let currentLine = words[0] || '';
//   const maxCharsPerLine = Math.floor(maxWidth / 8);

//   for(let i = 1; i < words.length; i++) {
//     const word = words[i];
//     if ((currentLine + " " + word).length <= maxCharsPerLine) {
//       currentLine += " " + word;
//     } else {
//       lines.push(currentLine);
//       currentLine = word;
//     }
//   }
//   lines.push(currentLine);
//   return lines;
// };

// const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
//   if (!textBox) return null;

//   const { text, width: boxWidth = 150, height: boxHeight = 60 } = textBox;
  
//   const boxDistance = nodeSize + 80;
//   let boxX = x + Math.cos(angle) * boxDistance;
//   let boxY = y + Math.sin(angle) * boxDistance;
  
//   const padding = 20;
//   const margin = boxWidth/2 + padding;
//   boxX = Math.max(margin, Math.min(width - margin, boxX));
//   boxY = Math.max(boxHeight/2 + padding, Math.min(height - boxHeight/2 - padding, boxY));
  
//   const lineStartX = x + Math.cos(angle) * nodeSize;
//   const lineStartY = y + Math.sin(angle) * nodeSize;
//   const lineEndX = boxX - Math.cos(angle) * (boxWidth/2);
//   const lineEndY = boxY - Math.sin(angle) * (boxHeight/2);

//   const lines = wrapText(text, boxWidth - 20);
//   const lineHeight = 16;

//   return (
//     <g>
//       <line
//         x1={lineStartX}
//         y1={lineStartY}
//         x2={lineEndX}
//         y2={lineEndY}
//         stroke="#ccc"
//         strokeWidth="1"
//       />
//       <rect
//         x={boxX - boxWidth/2}
//         y={boxY - boxHeight/2}
//         width={boxWidth}
//         height={boxHeight}
//         fill="#fff"
//         stroke="#ccc"
//         strokeWidth="1"
//         rx="4"
//       />
//       {lines.map((line, i) => (
//         <text
//           key={i}
//           x={boxX}
//           y={boxY - ((lines.length - 1) * lineHeight / 2) + (i * lineHeight)}
//           textAnchor="middle"
//           dominantBaseline="middle"
//           style={{ fontSize: '12px', fill: '#666' }}
//         >
//           {line}
//         </text>
//       ))}
//     </g>
//   );
// };

// const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
//   <>
//     <circle 
//       cx={x} 
//       cy={y} 
//       r={size} 
//       fill={color || '#000000'}
//     />
//     <foreignObject
//       x={x - size}
//       y={y - size}
//       width={size * 2}
//       height={size * 2}
//     >
//       <div style={{
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         color: '#fff',
//         fontSize: '12px',
//         fontWeight: 'bold',
//         pointerEvents: 'none',
//         wordWrap: 'break-word',
//         hyphens: 'auto',
//         lineHeight: '1.1',
//         padding: '4px',
//         overflowWrap: 'break-word'
//       }}>
//         {title}
//       </div>
//     </foreignObject>
//     <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
//   </>
// );

// const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
//   const handleClick = () => {
//     if (link) window.open(link, '_blank');
//   };

//   return (
//     <g 
//       onClick={handleClick} 
//       style={{ cursor: 'pointer' }}
//     >
//       <NodeContent 
//         x={x} 
//         y={y} 
//         size={size} 
//         color={color} 
//         title={title} 
//         textBox={textBox}
//         angle={angle}
//       />
//     </g>
//   );
// };

// return (
//   <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#fff' }}>
//     <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%' }}>
//       {showCircle && (
//         <circle
//           cx={centerX}
//           cy={centerY}
//           r={radius}
//           stroke="lightgray"
//           fill="none"
//           strokeWidth="6"
//         />
//       )}

//       {data.link ? (
//         <ClickableNode 
//           x={centerX}
//           y={centerY}
//           size={data.size || 40}
//           color={data.color}
//           title={data.title}
//           link={data.link}
//           textBox={data.textBox}
//           angle={0}
//         />
//       ) : (
//         <NodeContent 
//           x={centerX}
//           y={centerY}
//           size={data.size || 40}
//           color={data.color}
//           title={data.title}
//           textBox={data.textBox}
//           angle={0}
//         />
//       )}

//       {data.nested.map((item, index) => {
//         const pos = getPosition(index, data.nested.length);
        
//         return item.link ? (
//           <ClickableNode 
//             key={item.title}
//             x={pos.x}
//             y={pos.y}
//             size={item.size || 30}
//             color={item.color}
//             title={item.title}
//             link={item.link}
//             textBox={item.textBox}
//             angle={pos.angle}
//           />
//         ) : (
//           <g key={item.title}>
//             <NodeContent 
//               x={pos.x}
//               y={pos.y}
//               size={item.size || 30}
//               color={item.color}
//               title={item.title}
//               textBox={item.textBox}
//               angle={pos.angle}
//             />
//           </g>
//         );
//       })}
//     </svg>
//   </div>
// );
// };

// export default CircularDiagram;


import React from 'react';

const CircularDiagram = ({ data, showCircle = false, radius = 100, width = 1000, height = 700 }) => {
const centerX = width / 2;
const centerY = height / 2;

const getPosition = (index, total) => {
  const angle = (index * 2 * Math.PI) / total;
  return {
    x: centerX + radius * Math.cos(angle - Math.PI / 2),
    y: centerY + radius * Math.sin(angle - Math.PI / 2),
    angle: angle - Math.PI / 2
  };
};

const wrapText = (text, maxWidth) => {
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0] || '';
  const maxCharsPerLine = Math.floor(maxWidth / 8);

  for(let i = 1; i < words.length; i++) {
    const word = words[i];
    if ((currentLine + " " + word).length <= maxCharsPerLine) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
};

const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
  if (!textBox) return null;

  const { text, width: boxWidth = 150 } = textBox;
  
  const boxDistance = nodeSize + 80;
  let boxX = x + Math.cos(angle) * boxDistance;
  let boxY = y + Math.sin(angle) * boxDistance;
  
  const lines = wrapText(text, boxWidth - 20);
  const lineHeight = 16;
  const padding = 8;
  const boxHeight = (lines.length * lineHeight) + (padding * 2);
  
  const margin = boxWidth/2 + 20;
  boxX = Math.max(margin, Math.min(width - margin, boxX));
  boxY = Math.max(boxHeight/2 + 20, Math.min(height - boxHeight/2 - 20, boxY));
  
  const lineStartX = x + Math.cos(angle) * nodeSize;
  const lineStartY = y + Math.sin(angle) * nodeSize;
  const lineEndX = boxX - Math.cos(angle) * (boxWidth/2);
  const lineEndY = boxY - Math.sin(angle) * (boxHeight/2);

  return (
    <g>
      <line
        x1={lineStartX}
        y1={lineStartY}
        x2={lineEndX}
        y2={lineEndY}
        stroke="#ccc"
        strokeWidth="1"
      />
      <rect
        x={boxX - boxWidth/2}
        y={boxY - boxHeight/2}
        width={boxWidth}
        height={boxHeight}
        fill="#fff"
        stroke="#ccc"
        strokeWidth="1"
        rx="4"
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={boxX}
          y={boxY - boxHeight/2 + padding + (i * lineHeight) + (lineHeight/2)}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '12px', fill: '#666' }}
        >
          {line}
        </text>
      ))}
    </g>
  );
};

const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
  <>
    <circle 
      cx={x} 
      cy={y} 
      r={size} 
      fill={color || '#000000'}
    />
    <foreignObject
      x={x - size}
      y={y - size}
      width={size * 2}
      height={size * 2}
    >
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 'bold',
        pointerEvents: 'none',
        wordWrap: 'break-word',
        hyphens: 'auto',
        lineHeight: '1.1',
        padding: '4px',
        overflowWrap: 'break-word'
      }}>
        {title}
      </div>
    </foreignObject>
    <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
  </>
);

const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
  const handleClick = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <g 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }}
    >
      <NodeContent 
        x={x} 
        y={y} 
        size={size} 
        color={color} 
        title={title} 
        textBox={textBox}
        angle={angle}
      />
    </g>
  );
};

return (
  <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#fff' }}>
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%' }}>
      {showCircle && (
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke="lightgray"
          fill="none"
          strokeWidth="6"
        />
      )}

      {data.link ? (
        <ClickableNode 
          x={centerX}
          y={centerY}
          size={data.size || 40}
          color={data.color}
          title={data.title}
          link={data.link}
          textBox={data.textBox}
          angle={0}
        />
      ) : (
        <NodeContent 
          x={centerX}
          y={centerY}
          size={data.size || 40}
          color={data.color}
          title={data.title}
          textBox={data.textBox}
          angle={0}
        />
      )}

      {data.nested.map((item, index) => {
        const pos = getPosition(index, data.nested.length);
        
        return item.link ? (
          <ClickableNode 
            key={item.title}
            x={pos.x}
            y={pos.y}
            size={item.size || 30}
            color={item.color}
            title={item.title}
            link={item.link}
            textBox={item.textBox}
            angle={pos.angle}
          />
        ) : (
          <g key={item.title}>
            <NodeContent 
              x={pos.x}
              y={pos.y}
              size={item.size || 30}
              color={item.color}
              title={item.title}
              textBox={item.textBox}
              angle={pos.angle}
            />
          </g>
        );
      })}
    </svg>
  </div>
);
};

export default CircularDiagram;