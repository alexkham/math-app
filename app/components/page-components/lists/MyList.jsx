// // import React from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';
// // import MathContainer from '../../math-content/MathContainer';

// // const MyList = ({
// //  data,
// //  type = 'default',
// //  boxed = false,
// //  compact = false,
// //  divided = false,
// //  color = 'gray',
// //  width = '100%',
// //  math = false,
// //  article = false,
// //  centered = false,
// //  mathProps = {} // Default props for MathContainer
// // }) => {
// //  const colors = {
// //    gray: { marker: '#6B7280', bg: '#F3F4F6', border: '#E5E7EB' },
// //    blue: { marker: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE' },
// //    green: { marker: '#10B981', bg: '#ECFDF5', border: '#A7F3D0' },
// //    red: { marker: '#EF4444', bg: '#FEF2F2', border: '#FECACA' },
// //    yellow: { marker: '#F59E0B', bg: '#fdfdea', border: '#FEF08A' }
// //  };

// //  const modifyData = (data) => {
// //    if (article) {
// //      return data.map(item => ({
// //        text: `**${item.title}**\n${item.text}`
// //      }));
// //    }
// //    return data;
// //  };

// //  const styles = {
// //    list: {
// //      listStyle: 'none',
// //      padding: 0,
// //      margin: '0.5rem 0',
// //      width: width,
// //      ...(centered && {
// //        textAlign: 'center'
// //      })
// //    },
// //    item: {
// //      position: 'relative',
// //      padding: compact ? '0.25rem 1rem' : '0.5rem 1rem',
// //      ...(boxed && {
// //        backgroundColor: colors[color].bg,
// //        border: `1px solid ${colors[color].border}`,
// //        borderRadius: '0.375rem',
// //        margin: '0.95rem 0'
// //      }),
// //      ...(divided && !boxed && {
// //        borderBottom: `1px solid ${colors[color].border}`
// //      }),
// //      display: 'flex',
// //      alignItems: centered ? 'center' : 'flex-start',
// //      gap: '0.5rem',
// //      fontSize: '16px',
// //      ...(centered && {
// //        justifyContent: 'center'
// //      })
// //    },
// //    marker: {
// //      color: colors[color].marker,
// //      minWidth: type === 'number' ? '1.5rem' : 'auto',
// //      paddingTop: centered ? 0 : '0.125rem'
// //    },
// //    content: {
// //      flex: centered ? '0 1 auto' : 1
// //    },
// //    nestedList: {
// //      paddingLeft: '1.5rem',
// //      width: '100%'
// //    },
// //    mathContainer: {
// //      marginTop: '10px'
// //    }
// //  };

// //  const getMarker = (index) => {
// //    switch(type) {
// //      case 'number': return `${index + 1}.`;
// //      case 'dash': return '—';
// //      case 'dot': return '•';
// //      case 'arrow': return '→';
// //      default: return '';
// //    }
// //  };

// //  const processItem = (item) => {
// //    if (math) {
// //      if (typeof item === 'object' && item !== null) {
// //        return (
// //          <>
// //            {processContent(item.item)}
// //            {item.math && (
// //              <div style={styles.mathContainer}>
// //                <MathContainer 
// //                  content={item.math}
// //                  {...mathProps}
// //                />
// //              </div>
// //            )}
// //          </>
// //        );
// //      }
// //      return null;
// //    }

// //    if (typeof item === 'string') {
// //      return processContent(item);
// //    }
   
// //    if (typeof item === 'object' && item !== null) {
// //      if (item.items && Array.isArray(item.items)) {
// //        return (
// //          <>
// //            {processContent(item.title)}
// //            <div style={styles.nestedList}>
// //              <MyList
// //                data={item.items}
// //                type={type}
// //                boxed={boxed}
// //                compact={compact}
// //                divided={divided}
// //                color={color}
// //                math={math}
// //                article={article}
// //                centered={centered}
// //                mathProps={mathProps}
// //              />
// //            </div>
// //          </>
// //        );
// //      }
     
// //      // Try common fields first, then stringify if none found
// //      const content = item.text || item.title || item.content || item.description || JSON.stringify(item);
// //      return processContent(content);
// //    }
   
// //    return processContent(String(item));
// //  };

// //  const ListTag = type === 'number' ? 'ol' : 'ul';
// //  const modifiedData = modifyData(data);

// //  return (
// //    <ListTag style={styles.list}>
// //      {modifiedData.map((item, index) => (
// //        <li key={index} style={styles.item}>
// //          {type !== 'default' && (
// //            <span style={styles.marker}>
// //              {getMarker(index)}
// //            </span>
// //          )}
// //          <div style={styles.content}>
// //            {processItem(item)}
// //          </div>
// //        </li>
// //      ))}
// //    </ListTag>
// //  );
// // };

// // export default MyList;



// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';
// import MathContainer from '../../math-content/MathContainer';

// const MyList = ({
//  data,
//  type = 'default',
//  boxed = false,
//  compact = false,
//  divided = false,
//  color = 'gray',
//  width = '100%',
//  math = false,
//  article = false,
//  centered = false,
//  mathProps = {} // Default props for MathContainer
// }) => {
//  const colors = {
//    gray: { marker: '#6B7280', bg: '#F3F4F6', border: '#E5E7EB' },
//    blue: { marker: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE' },
//    green: { marker: '#10B981', bg: '#ECFDF5', border: '#A7F3D0' },
//    red: { marker: '#EF4444', bg: '#FEF2F2', border: '#FECACA' },
//    yellow: { marker: '#F59E0B', bg: '#fdfdea', border: '#FEF08A' }
//  };

//  const modifyData = (data) => {
//    if (article) {
//      return data.map(item => ({
//        text: `**${item.title}**\n${item.text}`
//      }));
//    }
//    return data;
//  };

//  const styles = {
//    list: {
//      listStyle: 'none',
//      padding: 0,
//      margin: '0.5rem 0',
//      width: width,
//      ...(centered && {
//        textAlign: 'center'
//      })
//    },
//    item: {
//      position: 'relative',
//      padding: compact ? '0.25rem 1rem' : '0.5rem 1rem',
//      paddingBottom: compact ? '0.5rem' : '0.75rem', // Added more bottom padding
//      ...(boxed && {
//        backgroundColor: colors[color].bg,
//        border: `1px solid ${colors[color].border}`,
//        borderRadius: '0.375rem',
//        margin: '0.95rem 0'
//      }),
//      ...(divided && !boxed && {
//        borderBottom: `1px solid ${colors[color].border}`
//      }),
//      display: 'flex',
//      alignItems: centered ? 'center' : 'flex-start',
//      gap: '0.5rem',
//      fontSize: '16px',
//      ...(centered && {
//        justifyContent: 'center'
//      })
//    },
//    marker: {
//      color: colors[color].marker,
//      minWidth: type === 'number' ? '1.5rem' : 'auto',
//      paddingTop: centered ? 0 : '0.125rem'
//    },
//    content: {
//      flex: centered ? '0 1 auto' : 1
//    },
//    nestedList: {
//      paddingLeft: '1.5rem',
//      width: '100%'
//    },
//    mathContainer: {
//      marginTop: '10px'
//    },
//    afterContainer: {
//      marginTop: '10px'
//    }
//  };

//  const getMarker = (index) => {
//    switch(type) {
//      case 'number': return `${index + 1}.`;
//      case 'dash': return '—';
//      case 'dot': return '•';
//      case 'arrow': return '→';
//      default: return '';
//    }
//  };

//  const processItem = (item) => {
//    if (math) {
//      if (typeof item === 'object' && item !== null) {
//        return (
//          <>
//            {processContent(item.item)}
//            {item.math && (
//              <div style={styles.mathContainer}>
//                <MathContainer 
//                  content={item.math}
//                  {...mathProps}
//                />
//              </div>
//            )}
//            {item.after && (
//              <div style={styles.afterContainer}>
//                {processContent(item.after)}
//              </div>
//            )}
//          </>
//        );
//      }
//      return null;
//    }

//    if (typeof item === 'string') {
//      return processContent(item);
//    }
   
//    if (typeof item === 'object' && item !== null) {
//      if (item.items && Array.isArray(item.items)) {
//        return (
//          <>
//            {processContent(item.title)}
//            <div style={styles.nestedList}>
//              <MyList
//                data={item.items}
//                type={type}
//                boxed={boxed}
//                compact={compact}
//                divided={divided}
//                color={color}
//                math={math}
//                article={article}
//                centered={centered}
//                mathProps={mathProps}
//              />
//            </div>
//          </>
//        );
//      }
     
//      // Try common fields first, then stringify if none found
//      const content = item.text || item.title || item.content || item.description || JSON.stringify(item);
//      return processContent(content);
//    }
   
//    return processContent(String(item));
//  };

//  const ListTag = type === 'number' ? 'ol' : 'ul';
//  const modifiedData = modifyData(data);

//  return (
//    <ListTag style={styles.list}>
//      {modifiedData.map((item, index) => (
//        <li key={index} style={styles.item}>
//          {type !== 'default' && (
//            <span style={styles.marker}>
//              {getMarker(index)}
//            </span>
//          )}
//          <div style={styles.content}>
//            {processItem(item)}
//          </div>
//        </li>
//      ))}
//    </ListTag>
//  );
// };

// export default MyList;


import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import MathContainer from '../../math-content/MathContainer';

const MyList = ({
 data,
 type = 'default',
 boxed = false,
 compact = false,
 divided = false,
 color = 'gray',
 width = '100%',
 math = false,
 article = false,
 centered = false,
 mathProps = {}, // Default props for MathContainer
 mathTheme = 'clean' // Theme for MathContainer
}) => {
 const colors = {
   gray: { marker: '#6B7280', bg: '#F3F4F6', border: '#E5E7EB' },
   blue: { marker: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE' },
   green: { marker: '#10B981', bg: '#ECFDF5', border: '#A7F3D0' },
   red: { marker: '#EF4444', bg: '#FEF2F2', border: '#FECACA' },
   yellow: { marker: '#F59E0B', bg: '#fdfdea', border: '#FEF08A' }
 };

 const modifyData = (data) => {
   if (article) {
     return data.map(item => ({
       text: `**${item.title}**\n${item.text}`
     }));
   }
   return data;
 };

 const styles = {
   list: {
     listStyle: 'none',
     padding: 0,
     margin: '0.5rem 0',
     width: width,
     ...(centered && {
       textAlign: 'center'
     })
   },
   item: {
     position: 'relative',
     padding: compact ? '0.25rem 1rem' : '0.5rem 1rem',
     paddingBottom: compact ? '1.75rem' : '1.95rem', // Added more bottom padding
     ...(boxed && {
       backgroundColor: colors[color].bg,
       border: `1px solid ${colors[color].border}`,
       borderRadius: '0.375rem',
       margin: '0.95rem 0'
     }),
     ...(divided && !boxed && {
       borderBottom: `1px solid ${colors[color].border}`
     }),
     display: 'flex',
     alignItems: centered ? 'center' : 'flex-start',
     gap: '0.5rem',
     fontSize: '16px',
     ...(centered && {
       justifyContent: 'center'
     })
   },
   marker: {
     color: colors[color].marker,
     minWidth: type === 'number' ? '1.5rem' : 'auto',
     paddingTop: centered ? 0 : '0.125rem'
   },
   content: {
     flex: centered ? '0 1 auto' : 1
   },
   nestedList: {
     paddingLeft: '1.5rem',
     width: '100%'
   },
   mathContainer: {
     marginTop: '10px'
   },
   afterContainer: {
     marginTop: '10px'
   }
 };

 const getMarker = (index) => {
   switch(type) {
     case 'number': return `${index + 1}.`;
     case 'dash': return '—';
     case 'dot': return '•';
     case 'arrow': return '→';
     default: return '';
   }
 };

 const processItem = (item) => {
   if (math) {
     if (typeof item === 'object' && item !== null) {
       return (
         <>
           {processContent(item.item)}
           {item.math && (
             <div style={styles.mathContainer}>
               <MathContainer 
                 content={item.math}
                 theme={mathTheme}
                 {...mathProps}
               />
             </div>
           )}
           {item.after && (
             <div style={styles.afterContainer}>
               {processContent(item.after)}
             </div>
           )}
         </>
       );
     }
     return null;
   }

   if (typeof item === 'string') {
     return processContent(item);
   }
   
   if (typeof item === 'object' && item !== null) {
     if (item.items && Array.isArray(item.items)) {
       return (
         <>
           {processContent(item.title)}
           <div style={styles.nestedList}>
             <MyList
               data={item.items}
               type={type}
               boxed={boxed}
               compact={compact}
               divided={divided}
               color={color}
               math={math}
               article={article}
               centered={centered}
               mathProps={mathProps}
               mathTheme={mathTheme}
             />
           </div>
         </>
       );
     }
     
     // Try common fields first, then stringify if none found
     const content = item.text || item.title || item.content || item.description || JSON.stringify(item);
     return processContent(content);
   }
   
   return processContent(String(item));
 };

 const ListTag = type === 'number' ? 'ol' : 'ul';
 const modifiedData = modifyData(data);

 return (
   <ListTag style={styles.list}>
     {modifiedData.map((item, index) => (
       <li key={index} style={styles.item}>
         {type !== 'default' && (
           <span style={styles.marker}>
             {getMarker(index)}
           </span>
         )}
         <div style={styles.content}>
           {processItem(item)}
         </div>
       </li>
     ))}
   </ListTag>
 );
};

export default MyList;