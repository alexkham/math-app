// import React from 'react';
// import Link from 'next/link';

// const GenericCircularButtonGroup = ({ sections, titleColor = '#4B5563' }) => {
//   const numberOfSections = sections.length;
//   const anglePerSection = 360 / numberOfSections;

//   return (
//     <div className="flex justify-center items-center" style={{ width: '360px', margin: '0 auto' }}>
//       <svg width="360" height="360" viewBox="0 0 100 100">
//         {sections.map((section, index) => {
//           const startAngle = index * anglePerSection;
//           return (
//             <Link href={section.url} key={section.id}>
//               <g className="cursor-pointer hover:opacity-90">
//                 <path
//                   d={`M 50 50 
//                      L ${50 + 48 * Math.cos(startAngle * Math.PI / 180)} ${50 + 48 * Math.sin(startAngle * Math.PI / 180)} 
//                      A 48 48 0 0 1 ${50 + 48 * Math.cos((startAngle + anglePerSection) * Math.PI / 180)} ${50 + 48 * Math.sin((startAngle + anglePerSection) * Math.PI / 180)} 
//                      Z`}
//                   fill={section.color}
//                   stroke="#e5e7eb"
//                 />
//                 <text
//                   x={50 + 30 * Math.cos((startAngle + anglePerSection/2) * Math.PI / 180)}
//                   y={50 + 30 * Math.sin((startAngle + anglePerSection/2) * Math.PI / 180)}
//                   textAnchor="middle"
//                   fontSize="4"
//                   fill={titleColor}
//                   className="pointer-events-none"
//                 >
//                   {section.title}
//                 </text>
//               </g>
//             </Link>
//           );
//         })}
//         <circle cx="50" cy="50" r="18" fill="white" stroke="#e5e7eb" />
        
//       </svg>
//     </div>
//   );
// };

// export default GenericCircularButtonGroup;

import React from 'react';
import Link from 'next/link';

const CircularButtonGroup = ({ 
  sections, 
  titleColor = '#4B5563',
  centerContent, // New prop for center content
  centerTextColor = '#4B5563' // Optional prop for center text color
}) => {
  const numberOfSections = sections.length;
  const anglePerSection = 360 / numberOfSections;

  return (
    <div className="flex justify-center items-center" style={{ width: '360px', margin: '0 auto' }}>
      <svg width="360" height="360" viewBox="0 0 100 100">
        {sections.map((section, index) => {
          const startAngle = index * anglePerSection;
          return (
            <Link href={section.url} key={section.id}>
              <g className="cursor-pointer hover:opacity-90">
                <path
                  d={`M 50 50 
                     L ${50 + 48 * Math.cos(startAngle * Math.PI / 180)} ${50 + 48 * Math.sin(startAngle * Math.PI / 180)} 
                     A 48 48 0 0 1 ${50 + 48 * Math.cos((startAngle + anglePerSection) * Math.PI / 180)} ${50 + 48 * Math.sin((startAngle + anglePerSection) * Math.PI / 180)} 
                     Z`}
                  fill={section.color}
                  stroke="#e5e7eb"
                />
                <text
                  x={50 + 30 * Math.cos((startAngle + anglePerSection/2) * Math.PI / 180)}
                  y={50 + 30 * Math.sin((startAngle + anglePerSection/2) * Math.PI / 180)}
                  textAnchor="middle"
                  fontSize="4"
                  fill={titleColor}
                  className="pointer-events-none"
                >
                  {section.title}
                </text>
              </g>
            </Link>
          );
        })}
        {/* Center circle with content */}
        <circle cx="50" cy="50" r="18" fill="white" stroke="#e5e7eb" />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="6"
          fill={centerTextColor}
        >
          {centerContent}
        </text>
      </svg>
    </div>
  );
};

export default CircularButtonGroup;