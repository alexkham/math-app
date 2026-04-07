// import React from 'react';

// const styles = {
//   container: {
//     width: '85%',
//     margin: '0 auto 20px',
//     background: '#f0f4f8',
//     borderRadius: '8px',
//     padding: '14px 24px',
//     fontSize: '15px',
//     color: '#374151',
//     lineHeight: 1.6,
//     textAlign: 'center',
//   },
//   link: {
//     color: '#2563eb',
//     textDecoration: 'none',
//   },
//   sectionsRow: {
//     fontSize: '14px',
//     color: '#6b7280',
//     marginTop: '4px',
//   },
//   sectionLink: {
//     color: '#4b5563',
//     textDecoration: 'none',
//     borderBottom: '1px dotted #9ca3af',
//     cursor: 'pointer',
//   },
//   separator: {
//     margin: '0 8px',
//     color: '#d1d5db',
//   },
// };

// export default function IntroBar({ introBar }) {
//   const { description, links, sections } = introBar;

//   return (
//     <div style={styles.container}>
//       <span>
//         {description}
//         {links &&
//           links.map((link, i) => (
//             <span key={i}>
//               {' '}
//               <a href={link.href} style={styles.link}>
//                 {link.label}
//               </a>
//               {i < links.length - 1 ? ',' : '.'}
//             </span>
//           ))}
//       </span>
//       {sections && sections.length > 0 && (
//         <div style={styles.sectionsRow}>
//           {sections.map((section, i) => (
//             <span key={i}>
//               <a href={`#${section.anchor}`} style={styles.sectionLink}>
//                 {section.label}
//               </a>
//               {i < sections.length - 1 && <span style={styles.separator}>&middot;</span>}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



import React from 'react';

const styles = {
  container: {
    width: '50%',
    margin: '0 auto 20px',
    background: '#f0f4f8',
    borderRadius: '8px',
    padding: '14px 24px',
    fontSize: '18px',
    color: '#374151',
    lineHeight: 1.6,
    textAlign: 'center',
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  sectionsRow: {
    fontSize: '16px',
    color: '#6b7280',
    marginTop: '4px',
  },
  sectionLink: {
    color: '#4b5563',
    textDecoration: 'none',
    borderBottom: '1px dotted #9ca3af',
    cursor: 'pointer',
  },
  separator: {
    margin: '0 8px',
    color: '#d1d5db',
  },
};

export default function IntroBar({ introBar }) {
  const { description, links, sections } = introBar;

  return (
    <div style={styles.container}>
      <span>
        {description}
        {links &&
          links.map((link, i) => (
            <span key={i}>
              {' '}
              <a href={link.href} style={styles.link}>
                {link.label}
              </a>
              {i < links.length - 1 ? ',' : '.'}
            </span>
          ))}
      </span>
      {sections && sections.length > 0 && (
        <div style={styles.sectionsRow}>
          {sections.map((section, i) => (
            <span key={i}>
              <a href={`#${section.anchor}`} style={styles.sectionLink}>
                {section.label}
              </a>
              {i < sections.length - 1 && <span style={styles.separator}>&middot;</span>}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}