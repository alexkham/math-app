
// // import React from 'react';
// // import Link from 'next/link';

// // const GenericCircularButtonGroup = ({ 
// //   sections, 
// //   titleColor = '#4B5563',
// //   centerContent, // New prop for center content
// //   centerTextColor = '#4B5563' // Optional prop for center text color
// // }) => {
// //   const numberOfSections = sections.length;
// //   const anglePerSection = 360 / numberOfSections;

// //   return (
// //     <div className="flex justify-center items-center" style={{ width: '360px', margin: '0 auto' }}>
// //       <svg width="360" height="360" viewBox="0 0 100 100">
// //         {sections.map((section, index) => {
// //           const startAngle = index * anglePerSection;
// //           return (
// //             <Link href={section.url} key={section.id}>
// //               <g className="cursor-pointer hover:opacity-90">
// //                 <path
// //                   d={`M 50 50 
// //                      L ${50 + 48 * Math.cos(startAngle * Math.PI / 180)} ${50 + 48 * Math.sin(startAngle * Math.PI / 180)} 
// //                      A 48 48 0 0 1 ${50 + 48 * Math.cos((startAngle + anglePerSection) * Math.PI / 180)} ${50 + 48 * Math.sin((startAngle + anglePerSection) * Math.PI / 180)} 
// //                      Z`}
// //                   fill={section.color}
// //                   stroke="#e5e7eb"
// //                 />
// //                 <text
// //                   x={50 + 30 * Math.cos((startAngle + anglePerSection/2) * Math.PI / 180)}
// //                   y={50 + 30 * Math.sin((startAngle + anglePerSection/2) * Math.PI / 180)}
// //                   textAnchor="middle"
// //                   fontSize="4"
// //                   fill={titleColor}
// //                   className="pointer-events-none"
// //                 >
// //                   {section.title}
                
// //                 </text>
// //               </g>
// //             </Link>
// //           );
// //         })}
// //         {/* Center circle with content */}
// //         <circle cx="50" cy="50" r="18" fill="white" stroke="#e5e7eb" />
// //         <text
// //           x="50"
// //           y="50"
// //           textAnchor="middle"
// //           dominantBaseline="middle"
// //           fontSize="6"
// //           fill={centerTextColor}
// //         >
// //           {centerContent}
// //         </text>
// //       </svg>
// //     </div>
// //   );
// // };

// // export default GenericCircularButtonGroup;


// import React from 'react';
// import Link from 'next/link';
// import { processContent } from '@/app/utils/contentProcessor';

// const GenericCircularButtonGroup = ({
//   sections,
//   titleColor = '#4B5563',
//   centerContent, // New prop for center content
//   centerTextColor = '#4B5563' // Optional prop for center text color
// }) => {
//   const numberOfSections = sections.length;
//   const anglePerSection = 360 / numberOfSections;

//   return (
//     <div style={{ position: 'relative', width: '360px', height: '360px', margin: '0 auto' }}>
//       <div className="flex justify-center items-center" style={{ width: '360px', margin: '0 auto' }}>
//         <svg width="360" height="360" viewBox="0 0 100 100">
//           {sections.map((section, index) => {
//             const startAngle = index * anglePerSection;
//             return (
//               <Link href={section.url} key={section.id}>
//                 <g className="cursor-pointer hover:opacity-90">
//                   <path
//                     d={`M 50 50
//                       L ${50 + 48 * Math.cos(startAngle * Math.PI / 180)} ${50 + 48 * Math.sin(startAngle * Math.PI / 180)}
//                       A 48 48 0 0 1 ${50 + 48 * Math.cos((startAngle + anglePerSection) * Math.PI / 180)} ${50 + 48 * Math.sin((startAngle + anglePerSection) * Math.PI / 180)}
//                       Z`}
//                     fill={section.color}
//                     stroke="#e5e7eb"
//                   />
//                   <text
//                     x={50 + 30 * Math.cos((startAngle + anglePerSection/2) * Math.PI / 180)}
//                     y={50 + 30 * Math.sin((startAngle + anglePerSection/2) * Math.PI / 180)}
//                     textAnchor="middle"
//                     fontSize="4"
//                     fill={titleColor}
//                     className="pointer-events-none"
//                   >
//                     {section.title}
//                   </text>
//                 </g>
//               </Link>
//             );
//           })}
//           {/* Center circle with content */}
//           <circle cx="50" cy="50" r="18" fill="white" stroke="#e5e7eb" />
//           <text
//             x="50"
//             y="50"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="6"
//             fill={centerTextColor}
//           >
//             {centerContent}
//           </text>
//         </svg>
//       </div>

//       {/* Content sections in circle */}
//       {sections.map((section, index) => {
//         if (!section.content || !Array.isArray(section.content) || section.content.length === 0) {
//           return null;
//         }

//         const angle = (index * anglePerSection + anglePerSection / 2) * Math.PI / 180;
//         const radius = 100; // Match the SVG viewBox size
//         const x = Math.cos(angle) * radius;
//         const y = Math.sin(angle) * radius;

//         return (
//           <div 
//             key={`content-${section.id}`}
//             style={{
//               position: 'absolute',
//               left: '50%',
//               top: '50%',
//               transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//               width: '120px',
//               padding: '15px',
//               backgroundColor: section.content.backgroundColor || 'transparent',
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//             }}
//           >
//             {section.content.map((item, itemIndex) => (
//               <div key={`content-item-${section.id}-${itemIndex}`}>
//                 {item.title && (
//                   <h3 style={{ 
//                     color: item.titleColor || '#000',
//                     marginBottom: '10px',
//                     fontSize: '14px',
//                     fontWeight: 'bold'
//                   }}>
//                     {processContent(item.title)}
//                   </h3>
//                 )}
//                 {item.text && (
//                   <div style={{ 
//                     color: item.textColor || '#000',
//                     fontSize: '12px'
//                   }}>
//                     {processContent(item.text)}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default GenericCircularButtonGroup;

import React from 'react';
import Link from 'next/link';
import { processContent } from '@/app/utils/contentProcessor';

const GenericCircularButtonGroup = ({
  sections,
  titleColor = '#4B5563',
  centerContent, // New prop for center content
  centerTextColor = '#4B5563' // Optional prop for center text color
}) => {
  const numberOfSections = sections.length;
  const anglePerSection = 360 / numberOfSections;

  return (
    <div style={{ position: 'relative', width: '600px', height: '600px', margin: '0 auto' }}>
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

      {/* Content sections in circle */}
      {sections.map((section, index) => {
        if (!section.content || !Array.isArray(section.content) || section.content.length === 0) {
          return null;
        }

        const angle = (index * anglePerSection + anglePerSection / 2) * Math.PI / 180;
        const radius = 200;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div 
            key={`content-${section.id}`}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              width: '120px',
              padding: '15px',
              backgroundColor: section.content.backgroundColor || 'transparent',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            {section.content.map((item, itemIndex) => (
              <div key={`content-item-${section.id}-${itemIndex}`}>
                {item.title && (
                  <h3 style={{ 
                    color: item.titleColor || '#000',
                    marginBottom: '10px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    {processContent(item.title)}
                  </h3>
                )}
                {item.text && (
                  <div style={{ 
                    color: item.textColor || '#000',
                    fontSize: '12px'
                  }}>
                    {processContent(item.text)}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GenericCircularButtonGroup;