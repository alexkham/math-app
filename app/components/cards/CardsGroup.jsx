// // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';

// // // // // // // // // // // // // const CardsGroup = ({ items }) => {
// // // // // // // // // // // // //   const [expandedCards, setExpandedCards] = useState({});

// // // // // // // // // // // // //   const toggleCard = (categoryId) => {
// // // // // // // // // // // // //     setExpandedCards(prev => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       [categoryId]: !prev[categoryId]
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mx-auto">
// // // // // // // // // // // // //       {items.map((item) => {
// // // // // // // // // // // // //         const Icon = item.icon;
// // // // // // // // // // // // //         const hasSubcategories = item.subcategories && item.subcategories.length > 0;
// // // // // // // // // // // // //         const isExpanded = expandedCards[item.category];

// // // // // // // // // // // // //         return (
// // // // // // // // // // // // //           <div 
// // // // // // // // // // // // //             key={item.category}
// // // // // // // // // // // // //             className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
// // // // // // // // // // // // //               <div className="p-4 flex flex-col items-center">
// // // // // // // // // // // // //                 {item.image ? (
// // // // // // // // // // // // //                   <img 
// // // // // // // // // // // // //                     src={item.image} 
// // // // // // // // // // // // //                     alt={item.category}
// // // // // // // // // // // // //                     className="w-16 h-16 object-cover rounded-full mb-2"
// // // // // // // // // // // // //                   />
// // // // // // // // // // // // //                 ) : (
// // // // // // // // // // // // //                   Icon && <Icon className="w-8 h-8 text-indigo-600 mb-2" />
// // // // // // // // // // // // //                 )}
// // // // // // // // // // // // //                 <h2 className="text-xl font-semibold text-gray-800 mb-1">
// // // // // // // // // // // // //                   {item.category}
// // // // // // // // // // // // //                 </h2>
// // // // // // // // // // // // //                 <p className="text-sm text-gray-600 text-center">
// // // // // // // // // // // // //                   Explore {item.category.toLowerCase()} concepts
// // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div className="bg-indigo-600 p-2 text-white">
// // // // // // // // // // // // //                 {hasSubcategories ? (
// // // // // // // // // // // // //                   <button
// // // // // // // // // // // // //                     onClick={() => toggleCard(item.category)}
// // // // // // // // // // // // //                     className="w-full flex items-center justify-center gap-2 hover:bg-indigo-700 rounded py-1 transition-colors duration-200"
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     <span className="font-medium text-sm">
// // // // // // // // // // // // //                       {isExpanded ? 'Hide Content' : 'View Content'}
// // // // // // // // // // // // //                     </span>
// // // // // // // // // // // // //                     {isExpanded ? (
// // // // // // // // // // // // //                       <ChevronUp className="w-4 h-4" />
// // // // // // // // // // // // //                     ) : (
// // // // // // // // // // // // //                       <ChevronDown className="w-4 h-4" />
// // // // // // // // // // // // //                     )}
// // // // // // // // // // // // //                   </button>
// // // // // // // // // // // // //                 ) : (
// // // // // // // // // // // // //                   <Link 
// // // // // // // // // // // // //                     href={`/tables/${item.category.toLowerCase()}`}
// // // // // // // // // // // // //                     className="block text-center font-medium text-sm hover:bg-indigo-700 rounded py-1 transition-colors duration-200"
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     View Content →
// // // // // // // // // // // // //                   </Link>
// // // // // // // // // // // // //                 )}
// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               {hasSubcategories && isExpanded && (
// // // // // // // // // // // // //                 <div className="border-t border-gray-200 divide-y divide-gray-200">
// // // // // // // // // // // // //                   {item.subcategories.map((sub) => (
// // // // // // // // // // // // //                     <Link
// // // // // // // // // // // // //                       key={sub.name}
// // // // // // // // // // // // //                       href={sub.href}
// // // // // // // // // // // // //                       className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       {sub.name}
// // // // // // // // // // // // //                     </Link>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               )}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         );
// // // // // // // // // // // // //       })}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default CardsGroup;

// // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // // // // import styles from './CardsGroup.module.css';

// // // // // // // // // // // // const CardsGroup = ({ items }) => {
// // // // // // // // // // // //   const [expandedCards, setExpandedCards] = useState({});

// // // // // // // // // // // //   const toggleCard = (categoryId) => {
// // // // // // // // // // // //     setExpandedCards(prev => ({
// // // // // // // // // // // //       ...prev,
// // // // // // // // // // // //       [categoryId]: !prev[categoryId]
// // // // // // // // // // // //     }));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className={styles.gridContainer}>
// // // // // // // // // // // //       {items.map((item) => {
// // // // // // // // // // // //         const Icon = item.icon;
// // // // // // // // // // // //         const hasSubcategories = item.subcategories && item.subcategories.length > 0;
// // // // // // // // // // // //         const isExpanded = expandedCards[item.category];

// // // // // // // // // // // //         return (
// // // // // // // // // // // //           <div key={item.category} className={styles.cardWrapper}>
// // // // // // // // // // // //             <div className={styles.card}>
// // // // // // // // // // // //               <div className={styles.cardContent}>
// // // // // // // // // // // //                 {item.image ? (
// // // // // // // // // // // //                   <div className={styles.imageContainer}>
// // // // // // // // // // // //                     <img 
// // // // // // // // // // // //                       src={item.image} 
// // // // // // // // // // // //                       alt={item.category}
// // // // // // // // // // // //                       className={styles.categoryImage}
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 ) : (
// // // // // // // // // // // //                   Icon && <Icon className={styles.icon} />
// // // // // // // // // // // //                 )}
// // // // // // // // // // // //                 <h2 className={styles.categoryTitle}>{item.category}</h2>
// // // // // // // // // // // //                 <p className={styles.description}>
// // // // // // // // // // // //                   Explore {item.category.toLowerCase()} concepts
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               <div className={styles.cardFooter}>
// // // // // // // // // // // //                 {hasSubcategories ? (
// // // // // // // // // // // //                   <button
// // // // // // // // // // // //                     onClick={() => toggleCard(item.category)}
// // // // // // // // // // // //                     className={styles.viewButton}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     {isExpanded ? 'Hide Content' : 'View Content'}
// // // // // // // // // // // //                     {isExpanded ? (
// // // // // // // // // // // //                       <ChevronUp className="w-4 h-4" />
// // // // // // // // // // // //                     ) : (
// // // // // // // // // // // //                       <ChevronDown className="w-4 h-4" />
// // // // // // // // // // // //                     )}
// // // // // // // // // // // //                   </button>
// // // // // // // // // // // //                 ) : (
// // // // // // // // // // // //                   <Link 
// // // // // // // // // // // //                     href={`/tables/${item.category.toLowerCase()}`}
// // // // // // // // // // // //                     className={styles.viewButton}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     View Content →
// // // // // // // // // // // //                   </Link>
// // // // // // // // // // // //                 )}
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
// // // // // // // // // // // //                 {hasSubcategories && (
// // // // // // // // // // // //                   <div className={styles.subcategoriesList}>
// // // // // // // // // // // //                     {item.subcategories.map((sub) => (
// // // // // // // // // // // //                       <Link
// // // // // // // // // // // //                         key={sub.name}
// // // // // // // // // // // //                         href={sub.href}
// // // // // // // // // // // //                         className={styles.subcategoryItem}
// // // // // // // // // // // //                       >
// // // // // // // // // // // //                         {sub.name}
// // // // // // // // // // // //                       </Link>
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 )}
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         );
// // // // // // // // // // // //       })}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default CardsGroup;
// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // // // import styles from './CardsGroup.module.css';

// // // // // // // // // // // const CardsGroup = ({ items }) => {
// // // // // // // // // // //   const [expandedCards, setExpandedCards] = useState({});

// // // // // // // // // // //   const toggleCard = (categoryId) => {
// // // // // // // // // // //     setExpandedCards(prev => ({
// // // // // // // // // // //       ...prev,
// // // // // // // // // // //       [categoryId]: !prev[categoryId]
// // // // // // // // // // //     }));
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className={styles.gridContainer}>
// // // // // // // // // // //       {items.map((item) => {
// // // // // // // // // // //         const Icon = item.icon;
// // // // // // // // // // //         const hasSubcategories = item.subcategories && item.subcategories.length > 0;
// // // // // // // // // // //         const isExpanded = expandedCards[item.category];

// // // // // // // // // // //         return (
// // // // // // // // // // //           <div key={item.category} className={styles.cardWrapper}>
// // // // // // // // // // //             <div className={styles.card}>
// // // // // // // // // // //               <div className={styles.cardContent}>
// // // // // // // // // // //                 {item.image ? (
// // // // // // // // // // //                   <div className={styles.imageContainer}>
// // // // // // // // // // //                     <img 
// // // // // // // // // // //                       src={item.image} 
// // // // // // // // // // //                       alt={item.category}
// // // // // // // // // // //                       className={styles.categoryImage}
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 ) : (
// // // // // // // // // // //                   Icon && <Icon className={styles.icon} />
// // // // // // // // // // //                 )}
// // // // // // // // // // //                 <h2 className={styles.categoryTitle}>{item.category}</h2>
// // // // // // // // // // //                 <p className={styles.description}>
// // // // // // // // // // //                   Explore {item.category.toLowerCase()} concepts
// // // // // // // // // // //                 </p>
                
// // // // // // // // // // //                 {hasSubcategories && (
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     onClick={() => toggleCard(item.category)}
// // // // // // // // // // //                     className={styles.expandButton}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     {isExpanded ? 'Show less' : 'Show subcategories'}
// // // // // // // // // // //                     {isExpanded ? (
// // // // // // // // // // //                       <ChevronUp className={styles.chevron} />
// // // // // // // // // // //                     ) : (
// // // // // // // // // // //                       <ChevronDown className={styles.chevron} />
// // // // // // // // // // //                     )}
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 )}
// // // // // // // // // // //               </div>

// // // // // // // // // // //               {hasSubcategories && (
// // // // // // // // // // //                 <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
// // // // // // // // // // //                   <div className={styles.subcategoriesList}>
// // // // // // // // // // //                     {item.subcategories.map((sub) => (
// // // // // // // // // // //                       <Link
// // // // // // // // // // //                         key={sub.name}
// // // // // // // // // // //                         href={sub.href}
// // // // // // // // // // //                         className={styles.subcategoryItem}
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {sub.name}
// // // // // // // // // // //                       </Link>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               )}

// // // // // // // // // // //               <div className={styles.cardFooter}>
// // // // // // // // // // //                 <Link 
// // // // // // // // // // //                   href={`/tables/${item.category.toLowerCase()}`}
// // // // // // // // // // //                   className={styles.viewButton}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   View All {item.category} Tables →
// // // // // // // // // // //                 </Link>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         );
// // // // // // // // // // //       })}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default CardsGroup;
// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // // import styles from './CardsGroup.module.css';

// // // // // // // // // // const CardsGroup = ({ items }) => {
// // // // // // // // // //   const [expandedCards, setExpandedCards] = useState({});

// // // // // // // // // //   const toggleCard = (categoryId) => {
// // // // // // // // // //     setExpandedCards(prev => ({
// // // // // // // // // //       ...prev,
// // // // // // // // // //       [categoryId]: !prev[categoryId]
// // // // // // // // // //     }));
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className={styles.gridContainer}>
// // // // // // // // // //       {items.map((item) => {
// // // // // // // // // //         const Icon = item.icon;
// // // // // // // // // //         const hasSubcategories = item.subcategories && item.subcategories.length > 0;
// // // // // // // // // //         const isExpanded = expandedCards[item.category];

// // // // // // // // // //         return (
// // // // // // // // // //           <div key={item.category} className={styles.cardWrapper}>
// // // // // // // // // //             <div className={styles.card}>
// // // // // // // // // //               <div className={styles.cardContent}>
// // // // // // // // // //                 <div className={styles.headerSection}>
// // // // // // // // // //                   {item.image ? (
// // // // // // // // // //                     <div className={styles.imageContainer}>
// // // // // // // // // //                       <img 
// // // // // // // // // //                         src={item.image} 
// // // // // // // // // //                         alt={item.category}
// // // // // // // // // //                         className={styles.categoryImage}
// // // // // // // // // //                       />
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ) : (
// // // // // // // // // //                     Icon && <Icon className={styles.icon} />
// // // // // // // // // //                   )}
// // // // // // // // // //                   <div className={styles.titleContainer}>
// // // // // // // // // //                     <h2 className={styles.categoryTitle}>{item.category}</h2>
// // // // // // // // // //                     <p className={styles.description}>
// // // // // // // // // //                       Explore {item.category.toLowerCase()} concepts
// // // // // // // // // //                     </p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
                
// // // // // // // // // //                 {hasSubcategories && (
// // // // // // // // // //                   <button
// // // // // // // // // //                     onClick={() => toggleCard(item.category)}
// // // // // // // // // //                     className={styles.expandButton}
// // // // // // // // // //                   >
// // // // // // // // // //                     {isExpanded ? 'Show less' : 'Show subcategories'}
// // // // // // // // // //                     {isExpanded ? (
// // // // // // // // // //                       <ChevronUp className={styles.chevron} />
// // // // // // // // // //                     ) : (
// // // // // // // // // //                       <ChevronDown className={styles.chevron} />
// // // // // // // // // //                     )}
// // // // // // // // // //                   </button>
// // // // // // // // // //                 )}
// // // // // // // // // //               </div>

// // // // // // // // // //               {hasSubcategories && (
// // // // // // // // // //                 <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
// // // // // // // // // //                   <div className={styles.subcategoriesList}>
// // // // // // // // // //                     {item.subcategories.map((sub) => (
// // // // // // // // // //                       <Link
// // // // // // // // // //                         key={sub.name}
// // // // // // // // // //                         href={sub.href}
// // // // // // // // // //                         className={styles.subcategoryItem}
// // // // // // // // // //                       >
// // // // // // // // // //                         {sub.name}
// // // // // // // // // //                       </Link>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}

// // // // // // // // // //               {item.href && (
// // // // // // // // // //                 <div className={styles.cardFooter}>
// // // // // // // // // //                   <Link 
// // // // // // // // // //                     href={item.href}
// // // // // // // // // //                     className={styles.viewButton}
// // // // // // // // // //                   >
// // // // // // // // // //                     View All {item.category} Tables →
// // // // // // // // // //                   </Link>
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         );
// // // // // // // // // //       })}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default CardsGroup;

// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import Link from 'next/link';
// // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // import styles from './CardsGroup.module.css';

// // // // // // // // // const CardsGroup = ({ items = [] }) => {
// // // // // // // // //   if (!Array.isArray(items)) {
// // // // // // // // //     console.error('CardsGroup: items prop must be an array');
// // // // // // // // //     return null;
// // // // // // // // //   }

// // // // // // // // //   const [expandedStates, setExpandedStates] = useState({});

// // // // // // // // //   const toggleExpand = (id) => {
// // // // // // // // //     setExpandedStates(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [id]: !prev[id]
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.container}>
// // // // // // // // //       <div className={styles.grid}>
// // // // // // // // //         {items.map((item, index) => {
// // // // // // // // //           if (!item || typeof item !== 'object') return null;
          
// // // // // // // // //           const {
// // // // // // // // //             id = index,
// // // // // // // // //             category,
// // // // // // // // //             icon: Icon,
// // // // // // // // //             image,
// // // // // // // // //             href,
// // // // // // // // //             subcategories = []
// // // // // // // // //           } = item;

// // // // // // // // //           const isExpanded = !!expandedStates[id];
// // // // // // // // //           const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;

// // // // // // // // //           return (
// // // // // // // // //             <div key={id} className={styles.cardWrapper}>
// // // // // // // // //               <div className={styles.card}>
// // // // // // // // //                 <div className={styles.cardHeader}>
// // // // // // // // //                   <div className={styles.headerContent}>
// // // // // // // // //                     <div className={styles.iconContainer}>
// // // // // // // // //                       {image ? (
// // // // // // // // //                         <img
// // // // // // // // //                           src={image}
// // // // // // // // //                           alt={category}
// // // // // // // // //                           className={styles.categoryImage}
// // // // // // // // //                         />
// // // // // // // // //                       ) : Icon ? (
// // // // // // // // //                         <Icon className={styles.icon} />
// // // // // // // // //                       ) : null}
// // // // // // // // //                     </div>
                    
// // // // // // // // //                     <div className={styles.titleContainer}>
// // // // // // // // //                       <h2 className={styles.title}>{category}</h2>
// // // // // // // // //                       <p className={styles.description}>
// // // // // // // // //                         Explore {category?.toLowerCase()} concepts
// // // // // // // // //                       </p>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>

// // // // // // // // //                   {hasSubcategories && (
// // // // // // // // //                     <button
// // // // // // // // //                       onClick={() => toggleExpand(id)}
// // // // // // // // //                       className={styles.expandButton}
// // // // // // // // //                       aria-expanded={isExpanded}
// // // // // // // // //                     >
// // // // // // // // //                       <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
// // // // // // // // //                       {isExpanded ? (
// // // // // // // // //                         <ChevronUp className={styles.chevron} />
// // // // // // // // //                       ) : (
// // // // // // // // //                         <ChevronDown className={styles.chevron} />
// // // // // // // // //                       )}
// // // // // // // // //                     </button>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>

// // // // // // // // //                 {hasSubcategories && (
// // // // // // // // //                   <div className={`${styles.subcategoriesContainer} ${isExpanded ? styles.expanded : ''}`}>
// // // // // // // // //                     <div className={styles.subcategoriesList}>
// // // // // // // // //                       {subcategories.map((sub, subIndex) => (
// // // // // // // // //                         <Link
// // // // // // // // //                           key={`${id}-${subIndex}`}
// // // // // // // // //                           href={sub.href || '#'}
// // // // // // // // //                           className={styles.subcategoryLink}
// // // // // // // // //                         >
// // // // // // // // //                           {sub.name}
// // // // // // // // //                         </Link>
// // // // // // // // //                       ))}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {href && (
// // // // // // // // //                   <div className={styles.footer}>
// // // // // // // // //                     <Link href={href} className={styles.footerLink}>
// // // // // // // // //                       View All {category} Tables →
// // // // // // // // //                     </Link>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           );
// // // // // // // // //         })}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default CardsGroup;

// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import Link from 'next/link';
// // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // import styles from './CardsGroup.module.css';

// // // // // // // // const CardsGroup = ({ items = [] }) => {
// // // // // // // //   if (!Array.isArray(items)) return null;

// // // // // // // //   const [expandedStates, setExpandedStates] = useState({});

// // // // // // // //   const toggleExpand = (id) => {
// // // // // // // //     setExpandedStates(prev => ({
// // // // // // // //       ...prev,
// // // // // // // //       [id]: !prev[id]
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={styles.grid}>
// // // // // // // //       {items.map((item, index) => {
// // // // // // // //         if (!item || typeof item !== 'object') return null;
        
// // // // // // // //         const {
// // // // // // // //           id = index,
// // // // // // // //           category,
// // // // // // // //           icon: Icon,
// // // // // // // //           image,
// // // // // // // //           href,
// // // // // // // //           subcategories = []
// // // // // // // //         } = item;

// // // // // // // //         const isExpanded = !!expandedStates[id];
// // // // // // // //         const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;

// // // // // // // //         return (
// // // // // // // //           <div key={id} className={styles.card}>
// // // // // // // //             <div className={styles.cardHeader}>
// // // // // // // //               <div className={styles.headerContent}>
// // // // // // // //                 <div className={styles.iconContainer}>
// // // // // // // //                   {image ? (
// // // // // // // //                     <img
// // // // // // // //                       src={image}
// // // // // // // //                       alt={category}
// // // // // // // //                       className={styles.categoryImage}
// // // // // // // //                     />
// // // // // // // //                   ) : Icon ? (
// // // // // // // //                     <Icon className={styles.icon} />
// // // // // // // //                   ) : null}
// // // // // // // //                 </div>
                
// // // // // // // //                 <div className={styles.titleContainer}>
// // // // // // // //                   <h2 className={styles.title}>{category}</h2>
// // // // // // // //                   <p className={styles.description}>
// // // // // // // //                     Explore {category?.toLowerCase()} concepts
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {hasSubcategories && (
// // // // // // // //                 <button
// // // // // // // //                   onClick={() => toggleExpand(id)}
// // // // // // // //                   className={styles.expandButton}
// // // // // // // //                   aria-expanded={isExpanded}
// // // // // // // //                 >
// // // // // // // //                   <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
// // // // // // // //                   {isExpanded ? (
// // // // // // // //                     <ChevronUp className={styles.chevron} />
// // // // // // // //                   ) : (
// // // // // // // //                     <ChevronDown className={styles.chevron} />
// // // // // // // //                   )}
// // // // // // // //                 </button>
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             {hasSubcategories && (
// // // // // // // //               <div className={`${styles.subcategoriesContainer} ${isExpanded ? styles.expanded : ''}`}>
// // // // // // // //                 <div className={styles.subcategoriesList}>
// // // // // // // //                   {subcategories.map((sub, subIndex) => (
// // // // // // // //                     <Link
// // // // // // // //                       key={`${id}-${subIndex}`}
// // // // // // // //                       href={sub.href || '#'}
// // // // // // // //                       className={styles.subcategoryLink}
// // // // // // // //                     >
// // // // // // // //                       {sub.name}
// // // // // // // //                     </Link>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             <div className={styles.footer}>
// // // // // // // //               {href ? (
// // // // // // // //                 <Link href={href} className={styles.footerLink}>
// // // // // // // //                   View All {category} Tables →
// // // // // // // //                 </Link>
// // // // // // // //               ) : (
// // // // // // // //                 <span className={styles.footerText}>
// // // // // // // //                   View All {category} Tables →
// // // // // // // //                 </span>
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         );
// // // // // // // //       })}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default CardsGroup;

// // // // // // // import React, { useState } from 'react';
// // // // // // // import Link from 'next/link';
// // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // import styles from './CardsGroup.module.css';

// // // // // // // const CardsGroup = ({ items = [] }) => {
// // // // // // //   if (!Array.isArray(items)) return null;

// // // // // // //   const [expandedStates, setExpandedStates] = useState({});

// // // // // // //   const toggleExpand = (id) => {
// // // // // // //     setExpandedStates(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [id]: !prev[id]
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   // Calculate number of items in the last row
// // // // // // //   const itemCount = items.length;
// // // // // // //   const lastRowCount = itemCount % 3;
// // // // // // //   const lastRowStart = itemCount - lastRowCount;

// // // // // // //   return (
// // // // // // //     <div className={styles.grid}>
// // // // // // //       {items.map((item, index) => {
// // // // // // //         if (!item || typeof item !== 'object') return null;
        
// // // // // // //         const {
// // // // // // //           id = index,
// // // // // // //           category,
// // // // // // //           icon: Icon,
// // // // // // //           image,
// // // // // // //           href,
// // // // // // //           subcategories = []
// // // // // // //         } = item;

// // // // // // //         const isExpanded = !!expandedStates[id];
// // // // // // //         const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;
        
// // // // // // //         // Add offset class for last row items
// // // // // // //         const isLastRow = index >= lastRowStart;
// // // // // // //         const lastRowClass = isLastRow && lastRowCount === 2 ? styles.lastRowTwo : 
// // // // // // //                            isLastRow && lastRowCount === 1 ? styles.lastRowOne : '';

// // // // // // //         return (
// // // // // // //           <div key={id} className={`${styles.card} ${lastRowClass}`}>
// // // // // // //             <div className={styles.cardHeader}>
// // // // // // //               <div className={styles.headerContent}>
// // // // // // //                 <div className={styles.iconContainer}>
// // // // // // //                   {image ? (
// // // // // // //                     <img
// // // // // // //                       src={image}
// // // // // // //                       alt={category}
// // // // // // //                       className={styles.categoryImage}
// // // // // // //                     />
// // // // // // //                   ) : Icon ? (
// // // // // // //                     <Icon className={styles.icon} />
// // // // // // //                   ) : null}
// // // // // // //                 </div>
                
// // // // // // //                 <div className={styles.titleContainer}>
// // // // // // //                   <h2 className={styles.title}>{category}</h2>
// // // // // // //                   <p className={styles.description}>
// // // // // // //                     Explore {category?.toLowerCase()} concepts
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {hasSubcategories && (
// // // // // // //                 <button
// // // // // // //                   onClick={() => toggleExpand(id)}
// // // // // // //                   className={styles.expandButton}
// // // // // // //                   aria-expanded={isExpanded}
// // // // // // //                 >
// // // // // // //                   <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
// // // // // // //                   {isExpanded ? (
// // // // // // //                     <ChevronUp className={styles.chevron} />
// // // // // // //                   ) : (
// // // // // // //                     <ChevronDown className={styles.chevron} />
// // // // // // //                   )}
// // // // // // //                 </button>
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             {hasSubcategories && (
// // // // // // //               <div className={`${styles.subcategoriesContainer} ${isExpanded ? styles.expanded : ''}`}>
// // // // // // //                 <div className={styles.subcategoriesList}>
// // // // // // //                   {subcategories.map((sub, subIndex) => (
// // // // // // //                     <Link
// // // // // // //                       key={`${id}-${subIndex}`}
// // // // // // //                       href={sub.href || '#'}
// // // // // // //                       className={styles.subcategoryLink}
// // // // // // //                     >
// // // // // // //                       {sub.name}
// // // // // // //                     </Link>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             {href && (
// // // // // // //               <div className={styles.footer}>
// // // // // // //                 <Link href={href} className={styles.footerLink}>
// // // // // // //                   View All {category} Tables →
// // // // // // //                 </Link>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         );
// // // // // // //       })}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CardsGroup;
// // // // // // import React, { useState } from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // import styles from './CardsGroup.module.css';

// // // // // // const CardsGroup = ({ items = [] }) => {
// // // // // //   if (!Array.isArray(items)) return null;

// // // // // //   const [expandedStates, setExpandedStates] = useState({});

// // // // // //   const toggleExpand = (id) => {
// // // // // //     setExpandedStates(prev => ({
// // // // // //       ...prev,
// // // // // //       [id]: !prev[id]
// // // // // //     }));
// // // // // //   };

// // // // // //   const itemCount = items.length;
// // // // // //   const lastRowCount = itemCount % 3;
// // // // // //   const lastRowStart = itemCount - lastRowCount;

// // // // // //   return (
// // // // // //     <div className={styles.grid}>
// // // // // //       {items.map((item, index) => {
// // // // // //         if (!item || typeof item !== 'object') return null;
        
// // // // // //         const {
// // // // // //           id = index,
// // // // // //           category,
// // // // // //           icon: Icon,
// // // // // //           image,
// // // // // //           href,
// // // // // //           subcategories = []
// // // // // //         } = item;

// // // // // //         const isExpanded = !!expandedStates[id];
// // // // // //         const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;
        
// // // // // //         const isLastRow = index >= lastRowStart;
// // // // // //         const lastRowClass = isLastRow && lastRowCount === 2 ? styles.lastRowTwo : 
// // // // // //                            isLastRow && lastRowCount === 1 ? styles.lastRowOne : '';

// // // // // //         return (
// // // // // //           <div key={id} className={`${styles.card} ${lastRowClass}`}>
// // // // // //             <div className={styles.cardHeader}>
// // // // // //               <div className={styles.headerContent}>
// // // // // //                 <div className={styles.iconContainer}>
// // // // // //                   {image ? (
// // // // // //                     <img
// // // // // //                       src={image}
// // // // // //                       alt={category}
// // // // // //                       className={styles.categoryImage}
// // // // // //                     />
// // // // // //                   ) : Icon ? (
// // // // // //                     <Icon className={styles.icon} />
// // // // // //                   ) : null}
// // // // // //                 </div>
                
// // // // // //                 <div className={styles.titleContainer}>
// // // // // //                   <h2 className={styles.title}>{category}</h2>
// // // // // //                   <p className={styles.description}>
// // // // // //                     Explore {category?.toLowerCase()} concepts
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {hasSubcategories && (
// // // // // //                 <button
// // // // // //                   onClick={() => toggleExpand(id)}
// // // // // //                   className={styles.expandButton}
// // // // // //                   aria-expanded={isExpanded}
// // // // // //                 >
// // // // // //                   <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
// // // // // //                   {isExpanded ? (
// // // // // //                     <ChevronUp className={styles.chevron} />
// // // // // //                   ) : (
// // // // // //                     <ChevronDown className={styles.chevron} />
// // // // // //                   )}
// // // // // //                 </button>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {hasSubcategories && (
// // // // // //               <div className={`${styles.subcategoriesContainer} ${isExpanded ? styles.expanded : ''}`}>
// // // // // //                 <div className={styles.subcategoriesList}>
// // // // // //                   {subcategories.map((sub, subIndex) => (
// // // // // //                     <Link
// // // // // //                       key={`${id}-${subIndex}`}
// // // // // //                       href={sub.href || '#'}
// // // // // //                       className={styles.subcategoryLink}
// // // // // //                     >
// // // // // //                       {sub.name}
// // // // // //                     </Link>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <div className={styles.footer}>
// // // // // //               {href ? (
// // // // // //                 <Link href={href} className={styles.footerContent}>
// // // // // //                   View All {category} Tables →
// // // // // //                 </Link>
// // // // // //               ) : (
// // // // // //                 <span className={styles.footerContent}>
// // // // // //                   View All {category} Tables →
// // // // // //                 </span>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         );
// // // // // //       })}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CardsGroup;

// // // // // import React, { useState } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // import styles from './CardsGroup.module.css';

// // // // // const CardsGroup = ({ items = [] }) => {
// // // // //   if (!Array.isArray(items)) return null;

// // // // //   const [expandedStates, setExpandedStates] = useState({});

// // // // //   const toggleExpand = (id) => {
// // // // //     setExpandedStates(prev => ({
// // // // //       ...prev,
// // // // //       [id]: !prev[id]
// // // // //     }));
// // // // //   };

// // // // //   const itemCount = items.length;
// // // // //   const lastRowCount = itemCount % 3;
// // // // //   const lastRowStart = itemCount - lastRowCount;

// // // // //   return (
// // // // //     <div className={styles.grid}>
// // // // //       {items.map((item, index) => {
// // // // //         if (!item || typeof item !== 'object') return null;
        
// // // // //         const {
// // // // //           id = index,
// // // // //           category,
// // // // //           icon: Icon,
// // // // //           image,
// // // // //           href,
// // // // //           subcategories = []
// // // // //         } = item;

// // // // //         const isExpanded = !!expandedStates[id];
// // // // //         const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;
        
// // // // //         const isLastRow = index >= lastRowStart;
// // // // //         const lastRowClass = isLastRow && lastRowCount === 2 ? styles.lastRowTwo : 
// // // // //                            isLastRow && lastRowCount === 1 ? styles.lastRowOne : '';

// // // // //         return (
// // // // //           <div key={id} className={`${styles.card} ${lastRowClass}`}>
// // // // //             <div className={styles.cardHeader}>
// // // // //               <div className={styles.headerContent}>
// // // // //                 <div className={styles.iconContainer}>
// // // // //                   {image ? (
// // // // //                     <img
// // // // //                       src={image}
// // // // //                       alt={category}
// // // // //                       className={styles.categoryImage}
// // // // //                     />
// // // // //                   ) : Icon ? (
// // // // //                     <Icon className={styles.icon} />
// // // // //                   ) : null}
// // // // //                 </div>
                
// // // // //                 <div className={styles.titleContainer}>
// // // // //                   <h2 className={styles.title}>{category}</h2>
// // // // //                   <p className={styles.description}>
// // // // //                     Explore {category?.toLowerCase()} concepts
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {hasSubcategories && (
// // // // //                 <button
// // // // //                   onClick={() => toggleExpand(id)}
// // // // //                   className={styles.expandButton}
// // // // //                   aria-expanded={isExpanded}
// // // // //                 >
// // // // //                   <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
// // // // //                   {isExpanded ? (
// // // // //                     <ChevronUp className={styles.chevron} />
// // // // //                   ) : (
// // // // //                     <ChevronDown className={styles.chevron} />
// // // // //                   )}
// // // // //                 </button>
// // // // //               )}
// // // // //             </div>

// // // // //             {hasSubcategories && (
// // // // //               <div className={`${styles.subcategoriesContainer} ${isExpanded ? styles.expanded : ''}`}>
// // // // //                 <div className={styles.subcategoriesList}>
// // // // //                   {subcategories.map((sub, subIndex) => (
// // // // //                     <Link
// // // // //                       key={`${id}-${subIndex}`}
// // // // //                       href={sub.href || '#'}
// // // // //                       className={styles.subcategoryLink}
// // // // //                     >
// // // // //                       {sub.name}
// // // // //                     </Link>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}

// // // // //             <div className={styles.footer}>
// // // // //               {href && (
// // // // //                 <Link href={href} className={styles.footerContent}>
// // // // //                   View All {category} Tables →
// // // // //                 </Link>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         );
// // // // //       })}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CardsGroup;
// // // // import React, { useState } from 'react';
// // // // import Link from 'next/link';
// // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // import styles from './CardsGroup.module.css';

// // // // const CardsGroup = ({ items = [] }) => {
// // // //   if (!Array.isArray(items)) return null;

// // // //   const [expandedStates, setExpandedStates] = useState({});

// // // //   const toggleExpand = (id) => {
// // // //     setExpandedStates(prev => ({
// // // //       ...prev,
// // // //       [id]: !prev[id]
// // // //     }));
// // // //   };

// // // //   const itemCount = items.length;
// // // //   const mainRowsCount = Math.floor(itemCount / 3);
// // // //   const remainingItems = itemCount % 3;

// // // //   return (
// // // //     <div className={styles.grid}>
// // // //       {items.map((item, index) => {
// // // //         if (!item || typeof item !== 'object') return null;
        
// // // //         const {
// // // //           id = index,
// // // //           category,
// // // //           icon: Icon,
// // // //           image,
// // // //           href,
// // // //           subcategories = []
// // // //         } = item;

// // // //         const isExpanded = !!expandedStates[id];
// // // //         const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;
        
// // // //         return (
// // // //           <div key={id} className={`${styles.card} ${
// // // //             index >= mainRowsCount * 3 ? styles.lastRowItem : ''} ${
// // // //             remainingItems === 1 ? styles.singleLastItem : ''} ${
// // // //             remainingItems === 2 && index >= mainRowsCount * 3 ? styles.doubleLastItem : ''
// // // //           }`}>
// // // //             <div className={styles.cardHeader}>
// // // //               <div className={styles.headerContent}>
// // // //                 <div className={styles.iconContainer}>
// // // //                   {image ? (
// // // //                     <img
// // // //                       src={image}
// // // //                       alt={category}
// // // //                       className={styles.categoryImage}
// // // //                     />
// // // //                   ) : Icon ? (
// // // //                     <Icon className={styles.icon} />
// // // //                   ) : null}
// // // //                 </div>
                
// // // //                 <div className={styles.titleContainer}>
// // // //                   <h2 className={styles.title}>{category}</h2>
// // // //                   <p className={styles.description}>
// // // //                     Explore {category?.toLowerCase()} concepts
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               {hasSubcategories && (
// // // //                 <button
// // // //                   onClick={() => toggleExpand(id)}
// // // //                   className={styles.expandButton}
// // // //                 >
// // // //                   <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
// // // //                   {isExpanded ? (
// // // //                     <ChevronUp className={styles.chevron} />
// // // //                   ) : (
// // // //                     <ChevronDown className={styles.chevron} />
// // // //                   )}
// // // //                 </button>
// // // //               )}
// // // //             </div>

// // // //             {hasSubcategories && (
// // // //               <div className={`${styles.subcategoriesContainer} ${isExpanded ? styles.expanded : ''}`}>
// // // //                 <div className={styles.subcategoriesList}>
// // // //                   {subcategories.map((sub, subIndex) => (
// // // //                     <Link
// // // //                       key={`${id}-${subIndex}`}
// // // //                       href={sub.href || '#'}
// // // //                       className={styles.subcategoryLink}
// // // //                     >
// // // //                       {sub.name}
// // // //                     </Link>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             <div className={styles.footer}>
// // // //               {href && (
// // // //                 <Link href={href} className={styles.footerContent}>
// // // //                   View All {category} Tables →
// // // //                 </Link>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         );
// // // //       })}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CardsGroup;
// // // import React, { useState } from 'react';
// // // import Link from 'next/link';
// // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // import styles from './CardsGroup.module.css';

// // // const CardsGroup = ({ items = [] }) => {
// // //   if (!Array.isArray(items)) return null;

// // //   const [expandedStates, setExpandedStates] = useState({});

// // //   const toggleExpand = (id) => {
// // //     setExpandedStates(prev => ({
// // //       ...prev,
// // //       [id]: !prev[id]
// // //     }));
// // //   };

// // //   return (
// // //     <div className={styles.grid}>
// // //       {items.map((item, index) => {
// // //         if (!item || typeof item !== 'object') return null;

// // //         const {
// // //           id = index,
// // //           category,
// // //           icon: Icon,
// // //           image,
// // //           href,
// // //           subcategories = []
// // //         } = item;

// // //         const isExpanded = !!expandedStates[id];
// // //         const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;

// // //         return (
// // //           <div key={id} className={styles.card}>
// // //             <div className={styles.cardHeader}>
// // //               <div className={styles.headerContent}>
// // //                 <div className={styles.iconContainer}>
// // //                   {image ? (
// // //                     <img
// // //                       src={image}
// // //                       alt={category}
// // //                       className={styles.categoryImage}
// // //                     />
// // //                   ) : Icon ? (
// // //                     <Icon className={styles.icon} />
// // //                   ) : null}
// // //                 </div>

// // //                 <div className={styles.titleContainer}>
// // //                   <h2 className={styles.title}>{category}</h2>
// // //                   <p className={styles.description}>
// // //                     Explore {category?.toLowerCase()} concepts
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {hasSubcategories && (
// // //                 <button
// // //                   onClick={() => toggleExpand(id)}
// // //                   className={styles.expandButton}
// // //                 >
// // //                   <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
// // //                   {isExpanded ? (
// // //                     <ChevronUp className={styles.chevron} />
// // //                   ) : (
// // //                     <ChevronDown className={styles.chevron} />
// // //                   )}
// // //                 </button>
// // //               )}
// // //             </div>

// // //             {hasSubcategories && (
// // //               <div className={`${styles.subcategoriesContainer} ${
// // //                 isExpanded ? styles.expanded : ''
// // //               }`}>
// // //                 <div className={styles.subcategoriesList}>
// // //                   {subcategories.map((sub, subIndex) => (
// // //                     <Link
// // //                       key={`${id}-${subIndex}`}
// // //                       href={sub.href || '#'}
// // //                       className={styles.subcategoryLink}
// // //                     >
// // //                       {sub.name}
// // //                     </Link>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}

// // //             <div className={styles.footer}>
// // //               {href && (
// // //                 <Link href={href} className={styles.footerContent}>
// // //                   View All {category} Tables →
// // //                 </Link>
// // //               )}
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };

// // // export default CardsGroup;
// // // CardsGroup.js
// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import { ChevronDown, ChevronUp } from 'lucide-react';
// // import styles from './CardsGroup.module.css';

// // const CardsGroup = ({ items = [] }) => {
// //   if (!Array.isArray(items)) return null;

// //   const [expandedStates, setExpandedStates] = useState({});

// //   const toggleExpand = (id) => {
// //     setExpandedStates(prev => ({
// //       ...prev,
// //       [id]: !prev[id]
// //     }));
// //   };

// //   return (
// //     <div className={styles.grid}>
// //       {items.map((item, index) => {
// //         if (!item || typeof item !== 'object') return null;

// //         const {
// //           id = index,
// //           category,
// //           icon: Icon,
// //           image,
// //           href,
// //           subcategories = []
// //         } = item;

// //         const isExpanded = !!expandedStates[id];
// //         const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;

// //         return (
// //           <div key={id} className={styles.card}>
// //             <div className={styles.cardHeader}>
// //               <div className={styles.headerContent}>
// //                 <div className={styles.iconContainer}>
// //                   {image ? (
// //                     <img
// //                       src={image}
// //                       alt={category}
// //                       className={styles.categoryImage}
// //                     />
// //                   ) : Icon ? (
// //                     <Icon className={styles.icon} />
// //                   ) : null}
// //                 </div>

// //                 <div className={styles.titleContainer}>
// //                   <h2 className={styles.title}>{category}</h2>
// //                   <p className={styles.description}>
// //                     Explore {category?.toLowerCase()} concepts
// //                   </p>
// //                 </div>
// //               </div>

// //               {hasSubcategories && (
// //                 <button
// //                   onClick={() => toggleExpand(id)}
// //                   className={styles.expandButton}
// //                 >
// //                   <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
// //                   {isExpanded ? (
// //                     <ChevronUp className={styles.chevron} />
// //                   ) : (
// //                     <ChevronDown className={styles.chevron} />
// //                   )}
// //                 </button>
// //               )}
// //             </div>

// //             {hasSubcategories && (
// //               <div className={`${styles.subcategoriesContainer} ${
// //                 isExpanded ? styles.expanded : ''
// //               }`}>
// //                 <div className={styles.subcategoriesList}>
// //                   {subcategories.map((sub, subIndex) => (
// //                     <Link
// //                       key={`${id}-${subIndex}`}
// //                       href={sub.href || '#'}
// //                       className={styles.subcategoryLink}
// //                     >
// //                       {sub.name}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             <div className={styles.footer}>
// //               {href && (
// //                 <Link href={href} className={styles.footerContent}>
// //                   View All {category} Tables →
// //                 </Link>
// //               )}
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default CardsGroup;

// // CardsGroup.js
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import styles from './CardsGroup.module.css';
// import { capitalizeWords } from '@/app/utils/utils-functions';

// const CardsGroup = ({ items = [] }) => {
//   if (!Array.isArray(items)) return null;

//   const [expandedStates, setExpandedStates] = useState({});

//   const toggleExpand = (id) => {
//     setExpandedStates(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <div className={styles.grid}>
//       {items.map((item, index) => {
//         if (!item || typeof item !== 'object') return null;

//         const {
//           id = index,
//           category,
//           content,
//           icon: Icon,
//           image,
//           href,
//           subcategories = []
//         } = item;

//         const isExpanded = !!expandedStates[id];
//         const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;

//         return (
//           <div key={id} className={styles.card}>
//             <div className={styles.cardHeader}>
//               <div className={styles.headerContent}>
//                 <div className={styles.iconContainer}>
//                   {image ? (
//                     <img
//                       src={image}
//                       alt={category}
//                       className={styles.categoryImage}
//                     />
//                   ) : Icon ? (
//                     <Icon className={styles.icon} />
//                   ) : null}
//                 </div>

//                 <div className={styles.titleContainer}>
//                   <h2 className={styles.title}>{category}</h2>
//                   <br/>
//                   <br/>
//                   <p className={styles.description}>
//                     {/* Explore {category?.toLowerCase()} concepts */}
//                     {content?capitalizeWords(content):`Explore ${category?.toLowerCase()} Concepts`}
//                   </p>
//                 </div>
//               </div>

//               {hasSubcategories && (
//                 <button
//                   onClick={() => toggleExpand(id)}
//                   className={styles.expandButton}
//                 >
//                   <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
//                   {isExpanded ? (
//                     <ChevronUp className={styles.chevron} />
//                   ) : (
//                     <ChevronDown className={styles.chevron} />
//                   )}
//                 </button>
//               )}
//             </div>

//             {hasSubcategories && (
//               <div className={`${styles.subcategoriesContainer} ${
//                 isExpanded ? styles.expanded : ''
//               }`}>
//                 <div className={styles.subcategoriesList}>
//                   {subcategories.map((sub, subIndex) => (
//                     <Link
//                       key={`${id}-${subIndex}`}
//                       href={sub.href || '#'}
//                       className={styles.subcategoryLink}
//                     >
//                       {sub.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className={styles.footer}>
//               {href && (
//                 <Link href={href} className={styles.footerContent}>
//                   Learn More  →
//                 </Link>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CardsGroup;

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './CardsGroup.module.css';
import { capitalizeWords } from '@/app/utils/utils-functions';

const CardsGroup = ({ items = [] }) => {
  const [expandedStates, setExpandedStates] = useState({});

  if (!Array.isArray(items)) return null;

  const toggleExpand = (id) => {
    setExpandedStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={styles.grid}>
      {items.map((item, index) => {
        if (!item || typeof item !== 'object') return null;

        const {
          id = index,
          category,
          content,
          icon: Icon,
          image,
          href,
          subcategories = []
        } = item;

        const isExpanded = !!expandedStates[id];
        const hasSubcategories = Array.isArray(subcategories) && subcategories.length > 0;

        return (
          <div key={id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.headerContent}>
                <div className={styles.iconContainer}>
                  {image ? (
                    <Image
                      src={image}
                      alt={category || 'Category image'}
                      width={64}  // Adjust these values based on your needs
                      height={64} // Adjust these values based on your needs
                      className={styles.categoryImage}
                    />
                  ) : Icon ? (
                    <Icon className={styles.icon} />
                  ) : null}
                </div>

                <div className={styles.titleContainer}>
                  <h2 className={styles.title}>{category}</h2>
                  <br/>
                  <br/>
                  <p className={styles.description}>
                    {content ? capitalizeWords(content) : `Explore ${category?.toLowerCase()} Concepts`}
                  </p>
                </div>
              </div>

              {hasSubcategories && (
                <button
                  onClick={() => toggleExpand(id)}
                  className={styles.expandButton}
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? 'Show less' : 'Show more'}
                >
                  <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                  {isExpanded ? (
                    <ChevronUp className={styles.chevron} />
                  ) : (
                    <ChevronDown className={styles.chevron} />
                  )}
                </button>
              )}
            </div>

            {hasSubcategories && (
              <div 
                className={`${styles.subcategoriesContainer} ${
                  isExpanded ? styles.expanded : ''
                }`}
              >
                <div className={styles.subcategoriesList}>
                  {subcategories.map((sub, subIndex) => (
                    <Link
                      key={`${id}-${subIndex}`}
                      href={sub.href || '#'}
                      className={styles.subcategoryLink}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.footer}>
              {href && (
                <Link href={href} className={styles.footerContent}>
                  Learn More  →
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsGroup;