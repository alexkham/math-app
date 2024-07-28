// // import React from 'react';
// // import data from './pandas_operations.json';
// // import './TreeItem.css';
// // import Link from 'next/link';

// // const TreeItem = ({ title, children }) => {
// //   return (
// //     <li>
// //       <details>
// //         <summary>
// //           {children && <span className="symbol"></span>}
// //           {title}
// //         </summary>
// //         {Array.isArray(children) ? (
// //           <ul>
// //             {children.map((child, index) => (
// //               <li key={index}>
// //                 <Link href={'https://www.google.com'}>{child}</Link>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <ul>
// //             {children && Object.entries(children).map(([key, value]) => (
// //               <TreeItem key={key} title={key}>
// //                 {value}
// //               </TreeItem>
// //             ))}
// //           </ul>
// //         )}
// //       </details>
// //     </li>
// //   );
// // };

// // const Tree = ({ data }) => {
// //   return (
// //     <ul className="tree">
// //       {data && Object.entries(data).map(([key, value]) => (
// //         <TreeItem key={key} title={key}>
// //           {value}
// //         </TreeItem>
// //       ))}
// //     </ul>
// //   );
// // };

// // const TreeStructure = () => {
// //   return (
// //     <div>
// //       <Tree data={data['Pandas Operations']} />
// //     </div>
// //   );
// // };

// // export default TreeStructure;
// import React from 'react';
// import Link from 'next/link';
// import './TreeItem.css';

// const TreeItem = ({ title, children }) => {
//   return (
//     <li>
//       <details>
//         <summary>
//           {children && <span className="symbol"></span>}
//           {title}
//         </summary>
//         {children && (
//           <ul>
//             {Object.entries(children).map(([key, value]) => (
//               <TreeItem key={key} title={key}>
//                 {value}
//               </TreeItem>
//             ))}
//           </ul>
//         )}
//       </details>
//     </li>
//   );
// };

// const Tree = ({ data }) => {
//   return (
//     <ul className="tree">
//       {Object.entries(data).map(([key, value]) => (
//         <TreeItem key={key} title={key}>
//           {value}
//         </TreeItem>
//       ))}
//     </ul>
//   );
// };

// const TreeStructure = ({ data }) => {
//   return (
//     <div>
//       <Tree data={data} />
//     </div>
//   );
// };

// export default TreeStructure;
import React from 'react';
import Link from 'next/link';
import './TreeItem.css';

const TreeItem = ({ title, children }) => {
  const hasChildren = children && Object.keys(children).length > 0;
  const hasUrl = children && children.url;

  return (
    <li>
      <details>
        <summary>
          {hasChildren && !hasUrl && <span className="symbol"></span>}
          {hasUrl ? (
            <Link href={children.url}>
            {title}
            </Link>
          ) : (
            title
          )}
        </summary>
        {hasChildren && !hasUrl && (
          <ul>
            {Object.entries(children).map(([key, value]) => (
              <TreeItem key={key} title={key}>
                {value}
              </TreeItem>
            ))}
          </ul>
        )}
      </details>
    </li>
  );
};

const Tree = ({ data }) => {
  return (
    <ul className="tree">
      {Object.entries(data).map(([key, value]) => (
        <TreeItem key={key} title={key}>
          {value}
        </TreeItem>
      ))}
    </ul>
  );
};

const TreeStructure = ({ data }) => {
  return (
    <div>
      <Tree data={data} />
    </div>
  );
};

export default TreeStructure;