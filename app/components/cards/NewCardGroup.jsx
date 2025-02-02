// // // // import React from 'react';
// // // // import Link from 'next/link';
// // // // import styles from './NewCardGroup.module.css';
// // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // const NewCardGroup = ({ title, cards }) => {
// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <h1 className={styles.title}>{title}</h1>
// // // //       <div className={styles.grid}>
// // // //         {cards.map((card) => {
// // // //           const Icon = card.icon;
// // // //           return (
// // // //             <Link href={card.path} key={card.name} className={styles.card}>
// // // //               <div className={styles.cardHeader}>
// // // //                 <Icon className={styles.icon} />
// // // //                 <h2 className={styles.tableTitle}>{capitalizeWords(card.name)}</h2>
// // // //               </div>
// // // //               <p className={styles.description}>{capitalizeWords(card.description)}</p>
// // // //               <div className={styles.cardFooter}>
// // // //                 <span className={styles.viewText}>Explore Table</span>
// // // //               </div>
// // // //             </Link>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default NewCardGroup;

// // // import React from 'react';
// // // import Link from 'next/link';
// // // import styles from './NewCardGroup.module.css';
// // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // const NewCardGroup = ({ title, cards }) => {
// // //   return (
// // //     <div className={styles.container}>
// // //       <h1 className={styles.title}>{title}</h1>
// // //       <div className={styles.grid}>
// // //         {cards.map((card) => {
// // //           const Icon = card.icon;
// // //           const cardStyle = card.backgroundColor || card.textColor ? {
// // //             backgroundColor: card.backgroundColor || '',
// // //             color: card.textColor || ''
// // //           } : {};
          
// // //           const footerStyle = card.footerColor ? {
// // //             backgroundColor: card.footerColor
// // //           } : {};

// // //           return (
// // //             <Link 
// // //               href={card.path} 
// // //               key={card.name} 
// // //               className={styles.card}
// // //               style={cardStyle}
// // //             >
// // //               <div className={styles.cardHeader}>
// // //                 <Icon className={styles.icon} style={card.textColor ? { color: card.textColor } : {}} />
// // //                 <h2 className={styles.tableTitle}>{capitalizeWords(card.name)}</h2>
// // //               </div>
// // //               <p className={styles.description}>{capitalizeWords(card.description)}</p>
// // //               <div className={styles.cardFooter} style={footerStyle}>
// // //                 <span className={styles.viewText}>Explore Table</span>
// // //               </div>
// // //             </Link>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default NewCardGroup;
// // import React from 'react';
// // import Link from 'next/link';
// // import styles from './NewCardGroup.module.css';
// // import { capitalizeWords } from '@/app/utils/utils-functions';

// // const NewCardGroup = ({ title, cards }) => {
// //   return (
// //     <div className={styles.container}>
// //       <h1 className={styles.title}>{title}</h1>
// //       <div className={styles.grid}>
// //         {cards.map((card) => {
// //           const cardStyle = card.backgroundColor || card.textColor ? {
// //             backgroundColor: card.backgroundColor || '',
// //             color: card.textColor || ''
// //           } : {};
          
// //           const footerStyle = card.footerColor ? { backgroundColor: card.footerColor } : {};

// //           return (
// //             <Link href={card.path} key={card.name} className={styles.card} style={cardStyle}>
// //               <div className={styles.cardHeader}>
// //                 {card.icon && <card.icon className={styles.icon} style={card.textColor ? { color: card.textColor } : {}} />}
// //                 <h2 className={styles.tableTitle}>{capitalizeWords(card.name)}</h2>
// //               </div>
// //               <p className={styles.description}>{capitalizeWords(card.description)}</p>
// //               <div className={styles.cardFooter} style={footerStyle}>
// //                 <span className={styles.viewText}>Explore Table</span>
// //               </div>
// //             </Link>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewCardGroup;

// import React from 'react';
// import Link from 'next/link';
// import styles from './NewCardGroup.module.css';
// import { capitalizeWords } from '@/app/utils/utils-functions';

// const NewCardGroup = ({ title, cards }) => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>{title}</h1>
//       <div className={styles.grid}>
//         {cards.map((card) => {
//           const cardStyle = card.backgroundColor || card.textColor ? {
//             backgroundColor: card.backgroundColor || '',
//             color: card.textColor || ''
//           } : {};
          
//           const footerStyle = card.footerColor ? { backgroundColor: card.footerColor } : {};

//           return (
//             <Link href={card.path} key={card.name} className={styles.card} style={cardStyle}>
//               <div className={styles.cardHeader}>
//                 {card.icon && <card.icon className={styles.icon} style={card.textColor ? { color: card.textColor } : {}} />}
//                 <h2 className={styles.tableTitle}>{capitalizeWords(card.name)}</h2>
//               </div>
//               <p className={styles.description}>{capitalizeWords(card.description)}</p>
//               <div className={styles.cardFooter} style={footerStyle}>
//                 <span className={styles.viewText}>Explore Table</span>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default NewCardGroup;

import React from 'react';
import Link from 'next/link';
import styles from './NewCardGroup.module.css';
import { capitalizeWords } from '@/app/utils/utils-functions';

const NewCardGroup = ({ title, cards = [] , linkTitle='Go ' }) => {
  const CardWrapper = ({ card, children }) => {
    if (!card.path) return <div className={styles.card} style={card.backgroundColor ? { backgroundColor: card.backgroundColor } : {}}>{children}</div>;
    return <Link href={card.path} className={styles.card} style={card.backgroundColor ? { backgroundColor: card.backgroundColor } : {}}>{children}</Link>;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>
        {cards.map((card) => {
          const Icon = card.icon;
          const textStyle = card.textColor ? { color: card.textColor } : {};
          const footerStyle = card.footerColor ? { backgroundColor: card.footerColor } : {};

          return (
            <CardWrapper key={card.name} card={card}>
              <div className={styles.cardHeader}>
                {Icon && <Icon className={styles.icon} style={textStyle} />}
                <h2 className={styles.tableTitle} style={textStyle}>{capitalizeWords(card.name)}</h2>
              </div>
              <p className={styles.description} style={textStyle}>{capitalizeWords(card.description)}</p>
              <div className={styles.cardFooter} style={footerStyle}>
                <span className={styles.viewText}>{linkTitle+'⟶'}</span>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default NewCardGroup;