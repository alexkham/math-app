// // components/LinksList.js
// import themes from './themes';

// export default function LinksList({ 
//   links, 
//   layout = 'vertical', 
//   size = '', 
//   width = 'w-auto', 
//   theme = 'light' 
// }) {
//   const themeClass = `theme-${theme}`;
//   const className = `links-list ${layout} ${size} ${width} ${themeClass}`;

//   return (
//     <ul className={className}>
//       {links.map((link, index) => (
//         <li key={index}>
//           <a href={link.href}>
//             {link.icon && <span className="icon">{link.icon}</span>}
//             {link.title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// }


import themes from './themes';

export default function LinksList({ 
  links, 
  layout = 'vertical', 
  size = '', 
  width = 'auto', 
  theme = 'light' 
}) {
  const t = themes[theme];

  return (
    <>
      <ul className={`links-list ${layout} ${size}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>
              {link.icon && <span className="icon">{link.icon}</span>}
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      
      <style jsx>{`
        .links-list {
          list-style: none;
          margin: 0;
          padding: 0;
          background: ${t.background};
          border: ${t.border};
          width: ${width};
        }
        .links-list.vertical { display: block; }
        .links-list.horizontal { display: flex; flex-wrap: wrap; gap: 0; }
        .links-list li { margin: 0; }
        .links-list.vertical li { border-bottom: 1px solid ${t.borderColor}; }
        .links-list.vertical li:last-child { border-bottom: none; }
        .links-list.horizontal li { border-right: 1px solid ${t.borderColor}; }
        .links-list.horizontal li:last-child { border-right: none; }
        .links-list a {
          display: block;
          padding: 0.75rem 1rem;
          color: ${t.linkColor};
          text-decoration: none;
          background: ${t.linkBackground};
          transition: all 0.2s;
        }
        .links-list a:hover {
          background: ${t.linkHoverBackground};
          color: ${t.linkHoverColor};
        }
        .links-list a .icon { margin-right: 0.5rem; }
        .links-list.small a { padding: 0.5rem 0.75rem; font-size: 0.875rem; }
        .links-list.large a { padding: 1rem 1.5rem; font-size: 1.125rem; }
      `}</style>
    </>
  );
}