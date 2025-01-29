// // import React, { useState } from 'react';
// // import { ChevronDown } from 'lucide-react';

// // const CategoriesList = ({ 
// //  data, 
// //  categoryExplanations = {}, 
// //  baseUrl = '/' 
// // }) => {
// //  const [openCategories, setOpenCategories] = useState(new Set());
// //  const categories = [...new Set(data.map(item => item.category))].sort();

// //  const toggleCategory = (category) => {
// //    const newOpen = new Set(openCategories);
// //    if (newOpen.has(category)) {
// //      newOpen.delete(category);
// //    } else {
// //      newOpen.add(category);
// //    }
// //    setOpenCategories(newOpen);
// //  };

// //  return (
// //    <div style={{
// //      padding: '20px',
// //      maxWidth: '800px',
// //      margin: '0 auto'
// //    }}>
// //      {categories.map(category => {
// //        const categoryId = `category_${category.toLowerCase().replace(/\s+/g, '_')}`;
// //        const itemsInCategory = data.filter(item => item.category === category).length;
// //        const explanation = categoryExplanations[category];
// //        const isOpen = openCategories.has(category);
// //        const categoryUrl = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}#${categoryId}`;

// //        return (
// //          <div key={category} style={{
// //            marginBottom: '10px',
// //            border: '1px solid #e2e8f0',
// //            borderRadius: '8px',
// //            overflow: 'hidden'
// //          }}>
// //            <button 
// //              onClick={() => toggleCategory(category)}
// //              style={{
// //                width: '100%',
// //                padding: '15px',
// //                backgroundColor: '#f8fafc',
// //                border: 'none',
// //                display: 'flex',
// //                alignItems: 'center',
// //                justifyContent: 'space-between',
// //                cursor: 'pointer',
// //                textAlign: 'left'
// //              }}
// //            >
// //              <span style={{ 
// //                fontWeight: '600', 
// //                fontSize: '18px',
// //                color: '#2563eb'
// //              }}>
// //                {category}
// //                <span style={{
// //                  fontSize: '14px',
// //                  color: '#6b7280',
// //                  marginLeft: '8px',
// //                  fontWeight: 'normal'
// //                }}>
// //                  ({itemsInCategory} {itemsInCategory === 1 ? 'item' : 'items'})
// //                </span>
// //              </span>
// //              <ChevronDown 
// //                style={{
// //                  transform: isOpen ? 'rotate(180deg)' : 'none',
// //                  transition: 'transform 0.2s'
// //                }}
// //              />
// //            </button>
// //            <div style={{
// //              padding: isOpen ? '15px' : '0',
// //              maxHeight: isOpen ? '500px' : '0',
// //              overflow: 'hidden',
// //              transition: 'all 0.2s',
// //              backgroundColor: 'white'
// //            }}>
// //              {explanation && (
// //                <div style={{
// //                  fontSize: '16px',
// //                  color: '#4b5563',
// //                  lineHeight: '1.5',
// //                  marginBottom: '15px'
// //                }}>
// //                  {explanation}
// //                </div>
// //              )}
// //              <a 
// //                href={categoryUrl}
// //                style={{
// //                  display: 'inline-block',
// //                  color: '#2563eb',
// //                  textDecoration: 'none',
// //                  fontSize: '16px'
// //                }}
// //              >
// //                Go to {category} section →
// //              </a>
// //            </div>
// //          </div>
// //        );
// //      })}
// //    </div>
// //  );
// // };

// // export default CategoriesList;


// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const CategoriesList = ({ 
//   data, 
//   categoryExplanations = {}, 
//   baseUrl = '/' 
// }) => {
//   const [openCategories, setOpenCategories] = useState(new Set());
//   const categories = [...new Set(data.map(item => item.category))].sort();

//   const toggleCategory = (category) => {
//     const newOpen = new Set(openCategories);
//     if (newOpen.has(category)) {
//       newOpen.delete(category);
//     } else {
//       newOpen.add(category);
//     }
//     setOpenCategories(newOpen);
//   };

//   return (
//     <div style={{
//       padding: '20px',
//       maxWidth: '800px',
//       margin: '0 auto'
//     }}>
//       {categories.map(category => {
//         const categoryId = `category_${category.toLowerCase().replace(/\s+/g, '_')}`;
//         const itemsInCategory = data.filter(item => item.category === category).length;
//         const explanation = categoryExplanations[category];
//         const isOpen = openCategories.has(category);
//         const categoryUrl = `${baseUrl}#${categoryId}`;

//         return (
//           <div key={category} style={{
//             marginBottom: '10px',
//             border: '1px solid #e2e8f0',
//             borderRadius: '8px',
//             overflow: 'hidden'
//           }}>
//             <button 
//               onClick={() => toggleCategory(category)}
//               style={{
//                 width: '100%',
//                 padding: '15px',
//                 backgroundColor: '#f8fafc',
//                 border: 'none',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 cursor: 'pointer',
//                 textAlign: 'left'
//               }}
//             >
//               <span style={{ 
//                 fontWeight: '600', 
//                 fontSize: '18px',
//                 color: '#2563eb'
//               }}>
//                 {category}
//                 <span style={{
//                   fontSize: '14px',
//                   color: '#6b7280',
//                   marginLeft: '8px',
//                   fontWeight: 'normal'
//                 }}>
//                   ({itemsInCategory} {itemsInCategory === 1 ? 'item' : 'items'})
//                 </span>
//               </span>
//               <ChevronDown 
//                 style={{
//                   transform: isOpen ? 'rotate(180deg)' : 'none',
//                   transition: 'transform 0.2s'
//                 }}
//               />
//             </button>
//             <div style={{
//               padding: isOpen ? '15px' : '0',
//               maxHeight: isOpen ? '500px' : '0',
//               overflow: 'hidden',
//               transition: 'all 0.2s',
//               backgroundColor: 'white'
//             }}>
//               {explanation && (
//                 <div style={{
//                   fontSize: '16px',
//                   color: '#4b5563',
//                   lineHeight: '1.5',
//                   marginBottom: '15px'
//                 }}>
//                   {explanation}
//                 </div>
//               )}
//               <a 
//                 href={categoryUrl}
//                 style={{
//                   display: 'inline-block',
//                   color: '#2563eb',
//                   textDecoration: 'none',
//                   fontSize: '16px'
//                 }}
//               >
//                 Go to {category} section →
//               </a>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CategoriesList;


import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { processContent } from '@/app/utils/contentProcessor';

const CategoriesList = ({ 
  data, 
  categoryExplanations = {}, 
  baseUrl = '/' 
}) => {
  const [openCategories, setOpenCategories] = useState(new Set());
  const categories = [...new Set(data.map(item => item.category))].sort();

  const toggleCategory = (category) => {
    setOpenCategories(prev => {
      const newOpen = new Set(prev);
      if (newOpen.has(category)) newOpen.delete(category);
      else newOpen.add(category);
      return newOpen;
    });
  };

  const handleCategoryClick = (categoryId, e) => {
    e.preventDefault();
    window.location.replace(`${baseUrl}#${categoryId}`);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {categories.map(category => {
        const categoryId = `category_${category.toLowerCase().replace(/\s+/g, '_')}`;
        const itemsInCategory = data.filter(item => item.category === category).length;
        const explanation = categoryExplanations[category];
        const isOpen = openCategories.has(category);
        const categoryUrl = `${baseUrl}#${categoryId}`;

        return (
          <div key={category} style={{
            marginBottom: '10px',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <button 
              onClick={() => toggleCategory(category)}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#f8fafc',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span style={{ 
                fontWeight: '600', 
                fontSize: '18px',
                color: '#2563eb'
              }}>
                {category}
                <span style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginLeft: '8px',
                  fontWeight: 'normal'
                }}>
                  ({itemsInCategory} {itemsInCategory === 1 ? 'item' : 'items'})
                </span>
              </span>
              <ChevronDown 
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s'
                }}
              />
            </button>
            <div style={{
              padding: isOpen ? '15px' : '0',
              maxHeight: isOpen ? '500px' : '0',
              overflow: 'hidden',
              transition: 'all 0.2s',
              backgroundColor: 'white'
            }}>
              {explanation && (
                <div style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  lineHeight: '1.5',
                  marginBottom: '15px'
                }}>
                  {processContent(explanation)}
                </div>
              )}
              <a 
                href={categoryUrl}
                onClick={(e) => handleCategoryClick(categoryId, e)}
                style={{
                  display: 'inline-block',
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontSize: '16px'
                }}
              >
                Go to {category} section →
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;