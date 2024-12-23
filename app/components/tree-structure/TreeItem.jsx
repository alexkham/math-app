
// // // // // import React from 'react';
// // // // // import Link from 'next/link';
// // // // // import './TreeItem.css';

// // // // // const TreeItem = ({ title, children }) => {
// // // // //   const hasChildren = children && Object.keys(children).length > 0;
// // // // //   const hasUrl = children && children.url;

// // // // //   return (
// // // // //     <li>
// // // // //       <details>
// // // // //         <summary>
// // // // //           {hasChildren && !hasUrl && <span className="symbol"></span>}
// // // // //           {hasUrl ? (
// // // // //             <Link href={children.url}>
// // // // //             {title}
// // // // //             </Link>
// // // // //           ) : (
// // // // //             title
// // // // //           )}
// // // // //         </summary>
// // // // //         {hasChildren && !hasUrl && (
// // // // //           <ul>
// // // // //             {Object.entries(children).map(([key, value]) => (
// // // // //               <TreeItem key={key} title={key}>
// // // // //                 {value}
// // // // //               </TreeItem>
// // // // //             ))}
// // // // //           </ul>
// // // // //         )}
// // // // //       </details>
// // // // //     </li>
// // // // //   );
// // // // // };

// // // // // const Tree = ({ data }) => {
// // // // //   return (
// // // // //     <ul className="tree">
// // // // //       {Object.entries(data).map(([key, value]) => (
// // // // //         <TreeItem key={key} title={key}>
// // // // //           {value}
// // // // //         </TreeItem>
// // // // //       ))}
// // // // //     </ul>
// // // // //   );
// // // // // };

// // // // // const TreeStructure = ({ data }) => {
// // // // //   return (
// // // // //     <div>
// // // // //       <Tree data={data} />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TreeStructure;


// // // // import React from 'react';
// // // // import Link from 'next/link';
// // // // import './TreeItem.css';

// // // // const TreeItem = ({ title, children, isTopLevel = false }) => {
// // // //   const hasChildren = children && Object.keys(children).length > 0;
// // // //   const hasUrl = children && children.url;

// // // //   return (
// // // //     <li>
// // // //       <details open={isTopLevel}>
// // // //         <summary>
// // // //           {hasChildren && !hasUrl && <span className="symbol"></span>}
// // // //           {hasUrl ? (
// // // //             <Link href={children.url}>
// // // //               {title}
// // // //             </Link>
// // // //           ) : (
// // // //             title
// // // //           )}
// // // //         </summary>
// // // //         {hasChildren && !hasUrl && (
// // // //           <ul>
// // // //             {Object.entries(children).map(([key, value]) => (
// // // //               <TreeItem 
// // // //                 key={key} 
// // // //                 title={key}
// // // //               >
// // // //                 {value}
// // // //               </TreeItem>
// // // //             ))}
// // // //           </ul>
// // // //         )}
// // // //       </details>
// // // //     </li>
// // // //   );
// // // // };

// // // // const Tree = ({ data }) => {
// // // //   return (
// // // //     <ul className="tree">
// // // //       {Object.entries(data).map(([key, value]) => (
// // // //         <TreeItem 
// // // //           key={key} 
// // // //           title={key}
// // // //           isTopLevel={true}
// // // //         >
// // // //           {value}
// // // //         </TreeItem>
// // // //       ))}
// // // //     </ul>
// // // //   );
// // // // };

// // // // const TreeStructure = ({ data }) => {
// // // //   return (
// // // //     <div>
// // // //       <Tree data={data} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TreeStructure;

// // // import React from 'react';
// // // import Link from 'next/link';
// // // import './TreeItem.css';

// // // const TreeItem = ({ title, children, expandTopLevel = false }) => {
// // //   const hasChildren = children && Object.keys(children).length > 0;
// // //   const hasUrl = children && children.url;

// // //   return (
// // //     <li>
// // //       <details open={expandTopLevel}>
// // //         <summary>
// // //           {hasChildren && !hasUrl && <span className="symbol"></span>}
// // //           {hasUrl ? (
// // //             <Link href={children.url}>
// // //               {title}
// // //             </Link>
// // //           ) : (
// // //             title
// // //           )}
// // //         </summary>
// // //         {hasChildren && !hasUrl && (
// // //           <ul>
// // //             {Object.entries(children).map(([key, value]) => (
// // //               <TreeItem 
// // //                 key={key} 
// // //                 title={key}
// // //               >
// // //                 {value}
// // //               </TreeItem>
// // //             ))}
// // //           </ul>
// // //         )}
// // //       </details>
// // //     </li>
// // //   );
// // // };

// // // const Tree = ({ data, expandTopLevel = false }) => {
// // //   return (
// // //     <ul className="tree">
// // //       {Object.entries(data).map(([key, value]) => (
// // //         <TreeItem 
// // //           key={key} 
// // //           title={key}
// // //           expandTopLevel={expandTopLevel}
// // //         >
// // //           {value}
// // //         </TreeItem>
// // //       ))}
// // //     </ul>
// // //   );
// // // };

// // // const TreeStructure = ({ data, expandTopLevel = false }) => {
// // //   return (
// // //     <div>
// // //       <Tree data={data} expandTopLevel={expandTopLevel} />
// // //     </div>
// // //   );
// // // };

// // // export default TreeStructure;


// // import React from 'react';
// // import Link from 'next/link';
// // import './TreeItem.css';

// // const TreeItem = ({ title, children, expandTopLevel = false }) => {
// //   const hasChildren = children && Object.keys(children).length > 0;
// //   const hasUrl = children && children.url;
// //   const hasExplanation = children && children.explanation;

// //   const renderContent = () => {
// //     if (hasUrl) {
// //       return (
// //         <Link href={children.url}>
// //           {hasExplanation ? (
// //             <span className="tooltip-trigger">
// //               {title}
// //               <span className="tooltip">{children.explanation}</span>
// //             </span>
// //           ) : (
// //             title
// //           )}
// //         </Link>
// //       );
// //     }
    
// //     return hasExplanation ? (
// //       <span className="tooltip-trigger">
// //         {title}
// //         <span className="tooltip">{children.explanation}</span>
// //       </span>
// //     ) : (
// //       title
// //     );
// //   };

// //   return (
// //     <li>
// //       <details open={expandTopLevel}>
// //         <summary>
// //           {hasChildren && !hasUrl && <span className="symbol"></span>}
// //           {renderContent()}
// //         </summary>
// //         {hasChildren && !hasUrl && (
// //           <ul>
// //             {Object.entries(children).map(([key, value]) => (
// //               <TreeItem 
// //                 key={key} 
// //                 title={key}
// //               >
// //                 {value}
// //               </TreeItem>
// //             ))}
// //           </ul>
// //         )}
// //       </details>
// //     </li>
// //   );
// // };

// // const Tree = ({ data, expandTopLevel = false }) => {
// //   return (
// //     <ul className="tree">
// //       {Object.entries(data).map(([key, value]) => (
// //         <TreeItem 
// //           key={key} 
// //           title={key}
// //           expandTopLevel={expandTopLevel}
// //         >
// //           {value}
// //         </TreeItem>
// //       ))}
// //     </ul>
// //   );
// // };

// // const TreeStructure = ({ data, expandTopLevel = false, width = "100%" }) => {
// //   return (
// //     <div className="tree-container" style={{ width }}>
// //       <Tree data={data} expandTopLevel={expandTopLevel} />
// //     </div>
// //   );
// // };

// // export default TreeStructure;

// import React from 'react';
// import Link from 'next/link';
// import './TreeItem.css';

// const TreeItem = ({ title, children, expandTopLevel = false }) => {
//   const hasChildren = children && Object.keys(children).length > 0;
//   const hasUrl = children && children.url;
//   const hasExplanation = children && children.explanation;

//   const renderContent = () => {
//     const content = (
//       <>
//         {title}
//         {hasExplanation && (
//           <span className="tooltip">{children.explanation}</span>
//         )}
//       </>
//     );

//     if (hasUrl) {
//       return (
//         <Link href={children.url} className="tooltip-trigger">
//           {content}
//         </Link>
//       );
//     }
    
//     return hasExplanation ? (
//       <span className="tooltip-trigger">{content}</span>
//     ) : (
//       content
//     );
//   };

//   return (
//     <li>
//       <details open={expandTopLevel}>
//         <summary>
//           {hasChildren && !hasUrl && <span className="symbol"></span>}
//           {renderContent()}
//         </summary>
//         {hasChildren && !hasUrl && (
//           <ul>
//             {Object.entries(children).map(([key, value]) => (
//               <TreeItem 
//                 key={key} 
//                 title={key}
//               >
//                 {value}
//               </TreeItem>
//             ))}
//           </ul>
//         )}
//       </details>
//     </li>
//   );
// };

// const Tree = ({ data, expandTopLevel = false }) => {
//   return (
//     <ul className="tree">
//       {Object.entries(data).map(([key, value]) => (
//         <TreeItem 
//           key={key}
//           title={key}
//           expandTopLevel={expandTopLevel}
//         >
//           {value}
//         </TreeItem>
//       ))}
//     </ul>
//   );
// };

// const TreeStructure = ({ data, expandTopLevel = false, width = "100%" }) => {
//   return (
//     <div className="tree-container" style={{ width }}>
//       <Tree data={data} expandTopLevel={expandTopLevel} />
//     </div>
//   );
// };

// export default TreeStructure;
import React from 'react';
import Link from 'next/link';
import './TreeItem.css';

const TreeItem = ({ title, children, expandTopLevel = false }) => {
  const hasChildren = children && Object.keys(children).length > 0;
  const hasUrl = children && children.url;
  const hasExplanation = children && children.explanation;

  const renderContent = () => {
    const tooltipSpan = hasExplanation && (
      <span className="tooltip">{children.explanation}</span>
    );

    if (hasUrl) {
      return (
        <span className="tooltip-trigger">
        <Link href={children.url}>
            {title}
          </Link>
         {tooltipSpan}
        </span>
      );
    }
    
    if (hasExplanation) {
      return (
        <span className="tooltip-trigger">
          {title}
          {tooltipSpan}
        </span>
      );
    }

    return title;
  };

  return (
    <li>
      <details open={expandTopLevel}>
        <summary>
          {hasChildren && !hasUrl && <span className="symbol"></span>}
          {renderContent()}
        </summary>
        {hasChildren && !hasUrl && (
          <ul>
            {Object.entries(children).map(([key, value]) => (
              <TreeItem 
                key={key}
                title={key}
              >
                {value}
              </TreeItem>
            ))}
          </ul>
        )}
      </details>
    </li>
  );
};

const Tree = ({ data, expandTopLevel = false }) => {
  return (
    <ul className="tree">
      {Object.entries(data).map(([key, value]) => (
        <TreeItem 
          key={key}
          title={key}
          expandTopLevel={expandTopLevel}
        >
          {value}
        </TreeItem>
      ))}
    </ul>
  );
};

const TreeStructure = ({ data, expandTopLevel = false, width = "100%" }) => {
  return (
    <div className="tree-container" style={{ width }}>
      <Tree data={data} expandTopLevel={expandTopLevel} />
    </div>
  );
};

export default TreeStructure;