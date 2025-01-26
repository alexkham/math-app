// // components/IntroSection.jsx
// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// const IntroSection = ({
//   id,
//   content,
//   title,
//   backgroundColor = '#ffffff',
//   textColor = '#000000'
// }) => {
//   return (
//     <section 
//       id={id}
//       style={{ 
//         backgroundColor,
//         color: textColor,
//         minHeight: '300px',
//         padding: '2rem',
//         margin: 0,
//         fontFamily: 'Times New Roman, Times, serif',
//         lineHeight: 1.5,
//         width:'80%',
//        marginLeft:'auto',
//        marginRight:'55px'
//       }}
//     >
//       <div style={{
//         maxWidth: '800px',
//         margin: '0 auto',
//         fontSize: '1.05rem',
//         '& a': {  // Add link styles
//           color: '#0066cc',
//           textDecoration: 'none',
//           '&:hover': {
//             textDecoration: 'underline'
//           }
//         }
//       }}>
       
       
       
//         {title && (
//           <h1 style={{
//             fontSize: '2.2rem',
//             marginBottom: '1.5rem',
//             fontWeight: 600
//           }}>
//             {processContent(title)}
//           </h1>
//         )}
//         {processContent(content)}
//       </div>
//     </section>
//   );
// };

// export default IntroSection;


// components/IntroSection/IntroSection.jsx
import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import styles from './IntroSection.module.css';

const IntroSection = ({
  id,
  content,
  title,
  backgroundColor = '#ffffff',
  textColor = '#000000'
}) => {
  return (
    <section 
      id={id}
      className={styles.container}
      style={{
        backgroundColor,
        color: textColor
      }}
    >
      <div className={styles.content}>
        {title && (
          <h1 className={styles.title}>
            {processContent(title)}
          </h1>
        )}
        {processContent(content)}
      </div>
    </section>
  );
};

export default IntroSection;