// // // import React from 'react';
// // // import Link from 'next/link';
// // // import styles from './TreeStructure2.module.css';


// // // const TreeItem = ({ title, children, expandTopLevel = false, viewMode = 'tooltip' }) => {
// // //   const hasChildren = children && Object.keys(children).length > 0;
// // //   const hasUrl = children && children.url;
// // //   const hasExplanation = children && children.explanation;

// // //   const renderContent = () => {
// // //     if (hasUrl) {
// // //       return (
// // //         <div>
// // //           <Link href={children.url}>{title}</Link>
// // //           {viewMode === 'parsed' && hasExplanation && (
// // //             <div className="explanation">{children.explanation}</div>
// // //           )}
// // //           {viewMode === 'tooltip' && hasExplanation && (
// // //             <span className="tooltip">{children.explanation}</span>
// // //           )}
// // //         </div>
// // //       );
// // //     }

// // //     if (hasExplanation) {
// // //       return (
// // //         <div>
// // //           <span>{title}</span>
// // //           {viewMode === 'parsed' && (
// // //             <div className="explanation">{children.explanation}</div>
// // //           )}
// // //           {viewMode === 'tooltip' && (
// // //             <span className="tooltip">{children.explanation}</span>
// // //           )}
// // //         </div>
// // //       );
// // //     }

// // //     return title;
// // //   };

// // //   return (
// // //     <li>
// // //       <details open={expandTopLevel}>
// // //         <summary>
// // //           {hasChildren && !hasUrl && <span className="symbol"></span>}
// // //           {renderContent()}
// // //         </summary>
// // //         {hasChildren && !hasUrl && (
// // //           <ul>
// // //             {Object.entries(children).map(([key, value]) => (
// // //               <TreeItem
// // //                 key={key}
// // //                 title={key}
// // //                 viewMode={viewMode}
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

// // // const Tree = ({ data, expandTopLevel = false, viewMode = 'tooltip' }) => {
// // //   return (
// // //     <ul className="tree">
// // //       {Object.entries(data).map(([key, value]) => (
// // //         <TreeItem
// // //           key={key}
// // //           title={key}
// // //           expandTopLevel={expandTopLevel}
// // //           viewMode={viewMode}
// // //         >
// // //           {value}
// // //         </TreeItem>
// // //       ))}
// // //     </ul>
// // //   );
// // // };

// // // const TreeStructure2 = ({ data, expandTopLevel = false, viewMode = 'tooltip', width = "100%" }) => {
// // //   return (
// // //     <div className="tree-container" style={{ width }}>
// // //       <Tree data={data} expandTopLevel={expandTopLevel} viewMode={viewMode} />
// // //     </div>
// // //   );
// // // };

// // // export default TreeStructure2;

// // import React from 'react';
// // import Link from 'next/link';
// // import styles from './TreeStructure2.module.css';

// // const TreeItem = ({ title, children, expandTopLevel = false, viewMode = 'tooltip' }) => {
// //   const hasChildren = children && Object.keys(children).length > 0;
// //   const hasUrl = children && children.url;
// //   const hasExplanation = children && children.explanation;

// //   const renderContent = () => {
// //     if (hasUrl) {
// //       return (
// //         <div>
// //           <Link href={children.url}>{title}</Link>
// //           {viewMode === 'parsed' && hasExplanation && (
// //             <div className={styles.explanation}>{children.explanation}</div>
// //           )}
// //           {viewMode === 'tooltip' && hasExplanation && (
// //             <span className={styles.tooltip}>{children.explanation}</span>
// //           )}
// //         </div>
// //       );
// //     }

// //     if (hasExplanation) {
// //       return (
// //         <div>
// //           <span>{title}</span>
// //           {viewMode === 'parsed' && (
// //             <div className={styles.explanation}>{children.explanation}</div>
// //           )}
// //           {viewMode === 'tooltip' && (
// //             <span className={styles.tooltip}>{children.explanation}</span>
// //           )}
// //         </div>
// //       );
// //     }

// //     return title;
// //   };

// //   return (
// //     <li>
// //       <details open={expandTopLevel}>
// //         <summary>
// //           {hasChildren && !hasUrl && <span className={styles.symbol}></span>}
// //           {renderContent()}
// //         </summary>
// //         {hasChildren && !hasUrl && (
// //           <ul>
// //             {Object.entries(children).map(([key, value]) => (
// //               <TreeItem
// //                 key={key}
// //                 title={key}
// //                 viewMode={viewMode}
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

// // const Tree = ({ data, expandTopLevel = false, viewMode = 'tooltip' }) => {
// //   return (
// //     <ul className={styles.tree}>
// //       {Object.entries(data).map(([key, value]) => (
// //         <TreeItem
// //           key={key}
// //           title={key}
// //           expandTopLevel={expandTopLevel}
// //           viewMode={viewMode}
// //         >
// //           {value}
// //         </TreeItem>
// //       ))}
// //     </ul>
// //   );
// // };

// // const TreeStructure2 = ({ data, expandTopLevel = false, viewMode = 'tooltip', width = "100%" }) => {
// //   return (
// //     <div className={styles.treeWrapper}>
// //       <div className={styles.treeContainer} style={{ width }}>
// //         <Tree data={data} expandTopLevel={expandTopLevel} viewMode={viewMode} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TreeStructure2;

// import React from 'react';
// import Link from 'next/link';
// import styles from './TreeStructure2.module.css';

// const TreeItem = ({ title, children, expandTopLevel = false, viewMode = 'tooltip' }) => {
//   const hasChildren = children && Object.keys(children).length > 0;
//   const hasUrl = children && children.url;
//   const hasExplanation = children && children.explanation;

//   const renderContent = () => {
//     if (hasUrl) {
//       return (
//         <div>
//           <Link href={children.url}>{title}</Link>
//           {viewMode === 'parsed' && hasExplanation && (
//             <div className={styles.explanation}>{children.explanation}</div>
//           )}
//           {viewMode === 'tooltip' && hasExplanation && (
//             <span className={styles.tooltip}>{children.explanation}</span>
//           )}
//         </div>
//       );
//     }

//     if (hasExplanation) {
//       return (
//         <div>
//           <span>{title}</span>
//           {viewMode === 'parsed' && (
//             <div className={styles.explanation}>{children.explanation}</div>
//           )}
//           {viewMode === 'tooltip' && (
//             <span className={styles.tooltip}>{children.explanation}</span>
//           )}
//         </div>
//       );
//     }

//     return title;
//   };

//   return (
//     <li className={styles.treeItem}>
//       <details open={expandTopLevel}>
//         <summary className={styles.summary}>
//           {hasChildren && !hasUrl && <span className={`${styles.symbol} ${!expandTopLevel ? styles.closed : ''}`}></span>}
//           {renderContent()}
//         </summary>
//         {hasChildren && !hasUrl && (
//           <ul>
//             {Object.entries(children).map(([key, value]) => (
//               <TreeItem
//                 key={key}
//                 title={key}
//                 viewMode={viewMode}
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

// const Tree = ({ data, expandTopLevel = false, viewMode = 'tooltip' }) => {
//   return (
//     <ul className={styles.tree}>
//       {Object.entries(data).map(([key, value]) => (
//         <TreeItem
//           key={key}
//           title={key}
//           expandTopLevel={expandTopLevel}
//           viewMode={viewMode}
//         >
//           {value}
//         </TreeItem>
//       ))}
//     </ul>
//   );
// };

// const TreeStructure2 = ({ data, expandTopLevel = false, viewMode = 'tooltip', width = "100%" }) => {
//   return (
//     <div className={styles.treeWrapper}>
//       <div className={styles.treeContainer} style={{ width }}>
//         <Tree data={data} expandTopLevel={expandTopLevel} viewMode={viewMode} />
//       </div>
//     </div>
//   );
// };

// export default TreeStructure2;


import React from 'react';
import Link from 'next/link';
import styles from './TreeStructure2.module.css';

const TreeItem = ({ title, children, expandTopLevel = false, viewMode = 'tooltip' }) => {
  const hasChildren = children && Object.keys(children).length > 0;
  const hasUrl = children && children.url;
  const hasExplanation = children && children.explanation;

//   const renderContent = () => {
//     if (hasUrl) {
//       return (
//         <div>
//           <Link href={children.url} className={styles.link}>{title}</Link>
//           {viewMode === 'parsed' && hasExplanation && (
//             <div className={styles.explanation}>{children.explanation}</div>
//           )}
//           {viewMode === 'tooltip' && hasExplanation && (
//             <span className={styles.tooltip}>{children.explanation}</span>
//           )}
//         </div>
//       );
//     }

//     if (hasExplanation) {
//       return (
//         <div>
//           <span className={hasChildren ? styles.subtitle : styles.text}>{title}</span>
//           {viewMode === 'parsed' && (
//             <div className={styles.explanation}>{children.explanation}</div>
//           )}
//           {viewMode === 'tooltip' && (
//             <span className={styles.tooltip}>{children.explanation}</span>
//           )}
//         </div>
//       );
//     }

//     return <span className={hasChildren ? styles.title : styles.text}>{title}</span>;
//   };

// const renderContent = () => {
//     if (hasUrl) {
//       return (
//         <div className={styles.textBlock}>
//           <Link href={children.url} className={styles.link}>{title}</Link>
//           {viewMode === 'parsed' && hasExplanation && (
//             <div className={styles.text}>{children.explanation}</div>
//           )}
//           {viewMode === 'tooltip' && hasExplanation && (
//             <span className={styles.tooltip}>{children.explanation}</span>
//           )}
//         </div>
//       );
//     }
  
//     if (hasExplanation) {
//       return (
//         <div className={styles.textBlock}>
//           <span className={hasChildren ? styles.subtitle : styles.text}>{title}</span>
//           {viewMode === 'parsed' && (
//             <div className={styles.text}>{children.explanation}</div>
//           )}
//           {viewMode === 'tooltip' && (
//             <span className={styles.tooltip}>{children.explanation}</span>
//           )}
//         </div>
//       );
//     }
  
//     return <span className={hasChildren ? styles.title : styles.text}>{title}</span>;
//   }; 


// const renderContent = () => {
//     if (hasUrl) {
//       return (
//         <div className={styles.textBlock}>
//           <Link href={children.url} className={styles.link}>{title}</Link>
//           {viewMode === 'parsed' && hasExplanation && (
//             <div className={styles.text}>{children.explanation}</div>
//           )}
//           {viewMode === 'tooltip' && hasExplanation && (
//             <span className={styles.tooltip}>{children.explanation}</span>
//           )}
//         </div>
//       );
//     }
  
//     if (hasExplanation) {
//       return (
//         <div className={styles.textBlock}>
//           <span className={styles.title}>{title}</span>
//           {viewMode === 'parsed' && (
//             <div className={styles.text}>{children.explanation}</div>
//           )}
//           {viewMode === 'tooltip' && (
//             <span className={styles.tooltip}>{children.explanation}</span>
//           )}
//         </div>
//       );
//     }
  
//     return <span className={hasChildren ? styles.title : styles.text}>{title}</span>;
//   };

const renderContent = () => {
    if (hasUrl) {
      return (
        <div className={styles.textBlock}>
          <Link href={children.url} className={styles.link}>{title}</Link>
          {viewMode === 'parsed' && hasExplanation && (
            <>
              <div className={styles.text}>{children.explanation}</div>
              <div className={styles.actionsRow}>
                <Link href={children.url} className={styles.actionLink}>Learn more</Link>
              </div>
            </>
          )}
          {viewMode === 'tooltip' && hasExplanation && (
            <span className={styles.tooltip}>{children.explanation}</span>
          )}
        </div>
      );
    }
   
    if (hasExplanation) {
      return (
        <div className={styles.textBlock}>
          <span className={styles.title}>{title}</span>
          {viewMode === 'parsed' && (
            <>
              <div className={styles.text}>{children.explanation}</div>
              {/* <div className={styles.actionsRow}> */}
                <Link href="#" className={styles.actionLink}>Learn more</Link>
              {/* </div> */}
            </>
          )}
          {viewMode === 'tooltip' && (
            <span className={styles.tooltip}>{children.explanation}</span>
          )}
        </div>
      );
    }
   
    return <span className={hasChildren ? styles.title : styles.text}>{title}</span>;
   };

return (
    <li className={styles.treeItem}>
      <details open={expandTopLevel}>
        <summary className={styles.summary}>
          {hasChildren && !hasUrl && (
            <span className={`${styles.symbol} ${!expandTopLevel ? styles.closed : ''}`}></span>
          )}
          {renderContent()}
        </summary>
        {hasChildren && !hasUrl && (
          <ul>
            {Object.entries(children).map(([key, value]) => (
              <TreeItem
                key={key}
                title={key}
                viewMode={viewMode}
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

const Tree = ({ data, expandTopLevel = false, viewMode = 'tooltip' }) => {
  return (
    <ul className={styles.tree}>
      {Object.entries(data).map(([key, value]) => (
        <TreeItem
          key={key}
          title={key}
          expandTopLevel={expandTopLevel}
          viewMode={viewMode}
        >
          {value}
        </TreeItem>
      ))}
    </ul>
  );
};

const TreeStructure2 = ({ data, expandTopLevel = false, viewMode = 'tooltip', width = "100%" }) => {
  return (
    <div className={styles.treeWrapper}>
      <div className={styles.treeContainer} style={{ width }}>
        <Tree data={data} expandTopLevel={expandTopLevel} viewMode={viewMode} />
      </div>
    </div>
  );
};

export default TreeStructure2;