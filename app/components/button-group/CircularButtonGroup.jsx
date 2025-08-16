// // // import React from 'react';
// // // import Link from 'next/link';

// // // const CircularButtonGroup = ({ sections }) => {
// // //   return (
// // //     <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
// // //       <svg width="300" height="300" viewBox="0 0 100 100">
// // //         {sections.map((section, index) => {
// // //           const startAngle = index * 90;
// // //           return (
// // //             <Link href={section.url} key={section.id}>
// // //               <g className="cursor-pointer hover:opacity-90">
// // //                 <path
// // //                   d={`M 50 50 
// // //                      L ${50 + 40 * Math.cos(startAngle * Math.PI / 180)} ${50 + 40 * Math.sin(startAngle * Math.PI / 180)} 
// // //                      A 40 40 0 0 1 ${50 + 40 * Math.cos((startAngle + 90) * Math.PI / 180)} ${50 + 40 * Math.sin((startAngle + 90) * Math.PI / 180)} 
// // //                      Z`}
// // //                   fill={section.color}
// // //                   stroke="#e5e7eb"
// // //                 />
// // //                 <text
// // //                   x={50 + 25 * Math.cos((startAngle + 45) * Math.PI / 180)}
// // //                   y={50 + 25 * Math.sin((startAngle + 45) * Math.PI / 180)}
// // //                   textAnchor="middle"
// // //                   fontSize="8"
// // //                   className="pointer-events-none"
// // //                 >
// // //                   {section.title}
// // //                 </text>
// // //               </g>
// // //             </Link>
// // //           );
// // //         })}
// // //         <circle cx="50" cy="50" r="15" fill="white" stroke="#e5e7eb" />
// // //       </svg>
// // //     </div>
// // //   );
// // // };

// // // export default CircularButtonGroup;

// // import React from 'react';
// // import Link from 'next/link';

// // const CircularButtonGroup = ({ sections }) => {
// //   return (
// //     <div className="flex justify-center items-center" style={{ width: '300px', margin: '0 auto' }}>
// //       <svg width="300" height="300" viewBox="0 0 100 100">
// //         {sections.map((section, index) => {
// //           const startAngle = index * 90;
// //           return (
// //             <Link href={section.url} key={section.id}>
// //               <g className="cursor-pointer hover:opacity-90">
// //                 <path
// //                   d={`M 50 50 
// //                      L ${50 + 40 * Math.cos(startAngle * Math.PI / 180)} ${50 + 40 * Math.sin(startAngle * Math.PI / 180)} 
// //                      A 40 40 0 0 1 ${50 + 40 * Math.cos((startAngle + 90) * Math.PI / 180)} ${50 + 40 * Math.sin((startAngle + 90) * Math.PI / 180)} 
// //                      Z`}
// //                   fill={section.color}
// //                   stroke="#e5e7eb"
// //                 />
// //                 <text
// //                   x={50 + 25 * Math.cos((startAngle + 45) * Math.PI / 180)}
// //                   y={50 + 25 * Math.sin((startAngle + 45) * Math.PI / 180)}
// //                   textAnchor="middle"
// //                   fontSize="8"
// //                   className="pointer-events-none"
// //                 >
// //                   {section.title}
// //                 </text>
// //               </g>
// //             </Link>
// //           );
// //         })}
// //         <circle cx="50" cy="50" r="15" fill="white" stroke="#e5e7eb" />
// //       </svg>
// //     </div>
// //   );
// // };

// // export default CircularButtonGroup;

// import React from 'react';
// import Link from 'next/link';

// const CircularButtonGroup = ({ sections, titleColor = '#4B5563' }) => {
//   return (
//     <div className="flex justify-center items-center" style={{ width: '450px', margin: '0 auto' }}>
//       <svg width="450" height="450" viewBox="0 0 100 100">
//         {sections.map((section, index) => {
//           const startAngle = index * 90;
//           return (
//             <Link href={section.url} key={section.id}>
//               <g className="cursor-pointer hover:opacity-90">
//                 <path
//                   d={`M 50 50 
//                      L ${50 + 60 * Math.cos(startAngle * Math.PI / 180)} ${50 + 60 * Math.sin(startAngle * Math.PI / 180)} 
//                      A 60 60 0 0 1 ${50 + 60 * Math.cos((startAngle + 90) * Math.PI / 180)} ${50 + 60 * Math.sin((startAngle + 90) * Math.PI / 180)} 
//                      Z`}
//                   fill={section.color}
//                   stroke="#e5e7eb"
//                 />
//                 <text
//                   x={50 + 37.5 * Math.cos((startAngle + 45) * Math.PI / 180)}
//                   y={50 + 37.5 * Math.sin((startAngle + 45) * Math.PI / 180)}
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
//         <circle cx="50" cy="50" r="22.5" fill="white" stroke="#e5e7eb" />
//       </svg>
//     </div>
//   );
// };

// export default CircularButtonGroup;

import React from 'react';
import Link from 'next/link';

const CircularButtonGroup = ({ sections, titleColor = '#4B5563' }) => {
  return (
    <div className="flex justify-center items-center" style={{ width: '360px', margin: '0 auto' }}>
      <svg width="360" height="360" viewBox="0 0 100 100">
        {sections.map((section, index) => {
          const startAngle = index * 90;
          return (
            <Link href={section.url} key={section.id}>
              <g className="cursor-pointer hover:opacity-90">
                <path
                  d={`M 50 50 
                     L ${50 + 48 * Math.cos(startAngle * Math.PI / 180)} ${50 + 48 * Math.sin(startAngle * Math.PI / 180)} 
                     A 48 48 0 0 1 ${50 + 48 * Math.cos((startAngle + 90) * Math.PI / 180)} ${50 + 48 * Math.sin((startAngle + 90) * Math.PI / 180)} 
                     Z`}
                  fill={section.color}
                  stroke="#e5e7eb"
                />
                <text
                  x={50 + 30 * Math.cos((startAngle + 45) * Math.PI / 180)}
                  y={50 + 30 * Math.sin((startAngle + 45) * Math.PI / 180)}
                  textAnchor="middle"
                  fontSize="5"
                  fill={titleColor}
                  className="pointer-events-none"
                >
                  {section.title}
                </text>
              </g>
            </Link>
          );
        })}
        <circle cx="50" cy="50" r="18" fill="white" stroke="#e5e7eb" />
      </svg>
    </div>
  );
};

export default CircularButtonGroup;