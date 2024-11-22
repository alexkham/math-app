// components/NavButton.jsx
// import React from 'react';

// const NavButton = ({ link,title }) => {
//   return (
//     <button
//       onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
//       style={{
//         padding: '0.8rem 1.5rem',
//         backgroundColor: '#333',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         fontSize: '1rem'
//       }}
//     >
//       Go to {title}
//     </button>
//   );
// };

// export default NavButton;

import { capitalizeWords } from '@/app/utils/utils-functions';
import React from 'react';

const NavButton = ({ link }) => {
  return (
    <button
      onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
      style={{
        padding: '0.8rem 1.5rem',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem'
      }}
    >
      Go to {capitalizeWords(link)} Section
    </button>
  );
};

export default NavButton;