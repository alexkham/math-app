// // 'use client';

// // import { useState } from 'react';
// // import { cardThemes } from './cardThemes';

// // const defaultCards = [
// //   {
// //     id: 1,
// //     title: 'Advanced Analytics',
// //     summary: 'Comprehensive data analysis and visualization tools',
// //     content: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.',
// //     icon: '📊',
// //     link: '/analytics',
// //     linkTitle: 'View Dashboard'
// //   },
// //   {
// //     id: 2,
// //     title: 'Seamless Integration',
// //     summary: 'Connect with all your favorite tools and platforms',
// //     content: 'Integrate effortlessly with over 100+ third-party applications and services. Our API-first approach ensures smooth data flow between platforms with minimal configuration. Support for webhooks, REST APIs, GraphQL, and native integrations with popular business tools.',
// //     icon: '🔗',
// //     link: '/integrations',
// //     linkTitle: 'Browse Integrations'
// //   },
// //   {
// //     id: 3,
// //     title: 'Enterprise Security',
// //     summary: 'Bank-level encryption and comprehensive protection',
// //     content: 'Your data security is our top priority. We employ military-grade AES-256 encryption, multi-factor authentication, and regular third-party security audits. Fully compliant with GDPR, HIPAA, SOC 2 Type II, and ISO 27001 standards.',
// //     icon: '🔒'
// //   },
// //   {
// //     id: 4,
// //     title: '24/7 Expert Support',
// //     summary: 'Get help whenever you need it from our dedicated team',
// //     content: 'Access our dedicated support team around the clock via live chat, email, or phone. Our expert team averages a 2-minute response time with 95% first-contact resolution rate. Every plan includes onboarding assistance and training resources.',
// //     icon: '💬',
// //     link: '/support',
// //     linkTitle: 'Contact Support'
// //   }
// // ];

// // export default function StaticCards({ cards = defaultCards, theme = 'gradient' }) {
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const [hoveredLink, setHoveredLink] = useState(null);

// //   const currentTheme = cardThemes[theme] || cardThemes.gradient;

// //   const renderGradientCard = (card) => (
// //     <div 
// //       key={card.id}
// //       style={{
// //         ...currentTheme.card,
// //         ...(hoveredCard === card.id ? currentTheme.cardHover : {})
// //       }}
// //       onMouseEnter={() => setHoveredCard(card.id)}
// //       onMouseLeave={() => setHoveredCard(null)}
// //     >
// //       <div style={{
// //         ...currentTheme.topAccent,
// //         ...(hoveredCard === card.id ? currentTheme.topAccentHover : {})
// //       }}></div>
// //       <div style={currentTheme.header}>
// //         {card.icon && (
// //           <div style={currentTheme.iconWrapper}>
// //             <span style={currentTheme.icon}>{card.icon}</span>
// //           </div>
// //         )}
// //         <h3 style={currentTheme.title}>{card.title}</h3>
// //         <p style={currentTheme.summary}>{card.summary}</p>
// //       </div>
// //       <div style={currentTheme.body}>
// //         <p style={currentTheme.content}>{card.content}</p>
// //         {card.link && card.linkTitle && (
// //           <a 
// //             href={card.link} 
// //             style={{
// //               ...currentTheme.link,
// //               ...(hoveredLink === card.id ? currentTheme.linkHover : {})
// //             }}
// //             onMouseEnter={() => setHoveredLink(card.id)}
// //             onMouseLeave={() => setHoveredLink(null)}
// //           >
// //             {card.linkTitle}
// //             <span style={currentTheme.linkArrow}>→</span>
// //           </a>
// //         )}
// //       </div>
// //     </div>
// //   );

// //   const renderMinimalCard = (card) => (
// //     <div 
// //       key={card.id}
// //       style={{
// //         ...currentTheme.card,
// //         ...(hoveredCard === card.id ? currentTheme.cardHover : {})
// //       }}
// //       onMouseEnter={() => setHoveredCard(card.id)}
// //       onMouseLeave={() => setHoveredCard(null)}
// //     >
// //       <div style={currentTheme.header}>
// //         <div style={currentTheme.headerTop}>
// //           {card.icon && (
// //             <span style={currentTheme.icon}>{card.icon}</span>
// //           )}
// //           <h3 style={currentTheme.title}>{card.title}</h3>
// //         </div>
// //         <p style={currentTheme.summary}>{card.summary}</p>
// //       </div>
// //       <div style={currentTheme.body}>
// //         <p style={currentTheme.content}>{card.content}</p>
// //         {card.link && card.linkTitle && (
// //           <a 
// //             href={card.link} 
// //             style={{
// //               ...currentTheme.link,
// //               ...(hoveredLink === card.id ? currentTheme.linkHover : {})
// //             }}
// //             onMouseEnter={() => setHoveredLink(card.id)}
// //             onMouseLeave={() => setHoveredLink(null)}
// //           >
// //             {card.linkTitle}
// //             <span style={currentTheme.linkArrow}>→</span>
// //           </a>
// //         )}
// //       </div>
// //     </div>
// //   );

// //   const renderBoldCard = (card) => (
// //     <div 
// //       key={card.id}
// //       style={{
// //         ...currentTheme.card,
// //         ...(hoveredCard === card.id ? currentTheme.cardHover : {})
// //       }}
// //       onMouseEnter={() => setHoveredCard(card.id)}
// //       onMouseLeave={() => setHoveredCard(null)}
// //     >
// //       <div style={currentTheme.header}>
// //         <div style={currentTheme.headerAccent}></div>
// //         <div style={currentTheme.iconTitle}>
// //           {card.icon && (
// //             <span style={currentTheme.icon}>{card.icon}</span>
// //           )}
// //           <h3 style={currentTheme.title}>{card.title}</h3>
// //         </div>
// //         <p style={currentTheme.summary}>{card.summary}</p>
// //       </div>
// //       <div style={currentTheme.body}>
// //         <p style={currentTheme.content}>{card.content}</p>
// //         {card.link && card.linkTitle && (
// //           <a 
// //             href={card.link} 
// //             style={{
// //               ...currentTheme.link,
// //               ...(hoveredLink === card.id ? currentTheme.linkHover : {})
// //             }}
// //             onMouseEnter={() => setHoveredLink(card.id)}
// //             onMouseLeave={() => setHoveredLink(null)}
// //           >
// //             {card.linkTitle}
// //             <span style={currentTheme.linkArrow}>→</span>
// //           </a>
// //         )}
// //       </div>
// //     </div>
// //   );

// //   const renderElegantCard = (card) => (
// //     <div 
// //       key={card.id}
// //       style={{
// //         ...currentTheme.card,
// //         ...(hoveredCard === card.id ? currentTheme.cardHover : {})
// //       }}
// //       onMouseEnter={() => setHoveredCard(card.id)}
// //       onMouseLeave={() => setHoveredCard(null)}
// //     >
// //       <div style={currentTheme.accent}></div>
// //       <div style={currentTheme.header}>
// //         {card.icon && (
// //           <span style={currentTheme.icon}>{card.icon}</span>
// //         )}
// //         <h3 style={currentTheme.title}>{card.title}</h3>
// //         <p style={currentTheme.summary}>{card.summary}</p>
// //       </div>
// //       <div style={currentTheme.divider}></div>
// //       <div style={currentTheme.body}>
// //         <p style={currentTheme.content}>{card.content}</p>
// //         {card.link && card.linkTitle && (
// //           <a 
// //             href={card.link} 
// //             style={{
// //               ...currentTheme.link,
// //               ...(hoveredLink === card.id ? currentTheme.linkHover : {})
// //             }}
// //             onMouseEnter={() => setHoveredLink(card.id)}
// //             onMouseLeave={() => setHoveredLink(null)}
// //           >
// //             {card.linkTitle}
// //             <span style={currentTheme.linkArrow}>→</span>
// //           </a>
// //         )}
// //       </div>
// //     </div>
// //   );

// //   const renderCard = (card) => {
// //     switch(theme) {
// //       case 'minimal':
// //         return renderMinimalCard(card);
// //       case 'bold':
// //         return renderBoldCard(card);
// //       case 'elegant':
// //         return renderElegantCard(card);
// //       case 'gradient':
// //       default:
// //         return renderGradientCard(card);
// //     }
// //   };

// //   return (
// //     <div style={currentTheme.container}>
// //       <div style={currentTheme.grid}>
// //         {cards.map(renderCard)}
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';

// import { useState } from 'react';
// import { cardThemes } from './cardThemes';

// const defaultCards = [
//   {
//     id: 1,
//     title: 'Advanced Analytics',
//     summary: 'Comprehensive data analysis and visualization tools',
//     content: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.',
//     icon: '📊',
//     link: '/analytics',
//     linkTitle: 'View Dashboard'
//   },
//   {
//     id: 2,
//     title: 'Seamless Integration',
//     summary: 'Connect with all your favorite tools and platforms',
//     content: 'Integrate effortlessly with over 100+ third-party applications and services. Our API-first approach ensures smooth data flow between platforms with minimal configuration. Support for webhooks, REST APIs, GraphQL, and native integrations with popular business tools.',
//     icon: '🔗',
//     link: '/integrations',
//     linkTitle: 'Browse Integrations'
//   },
//   {
//     id: 3,
//     title: 'Enterprise Security',
//     summary: 'Bank-level encryption and comprehensive protection',
//     content: 'Your data security is our top priority. We employ military-grade AES-256 encryption, multi-factor authentication, and regular third-party security audits. Fully compliant with GDPR, HIPAA, SOC 2 Type II, and ISO 27001 standards.',
//     icon: '🔒'
//   },
//   {
//     id: 4,
//     title: '24/7 Expert Support',
//     summary: 'Get help whenever you need it from our dedicated team',
//     content: 'Access our dedicated support team around the clock via live chat, email, or phone. Our expert team averages a 2-minute response time with 95% first-contact resolution rate. Every plan includes onboarding assistance and training resources.',
//     icon: '💬',
//     link: '/support',
//     linkTitle: 'Contact Support'
//   }
// ];

// export default function StaticCards({ cards = defaultCards, theme = 'gradient', layout = 'grid' }) {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredLink, setHoveredLink] = useState(null);

//   const currentTheme = cardThemes[theme] || cardThemes.gradient;
//   const currentLayout = layout === 'list' ? currentTheme.listLayout : currentTheme.gridLayout;

//   const renderGradientCard = (card) => (
//     <div 
//       key={card.id}
//       style={{
//         ...currentTheme.card,
//         ...(hoveredCard === card.id ? currentTheme.cardHover : {})
//       }}
//       onMouseEnter={() => setHoveredCard(card.id)}
//       onMouseLeave={() => setHoveredCard(null)}
//     >
//       <div style={{
//         ...currentTheme.topAccent,
//         ...(hoveredCard === card.id ? currentTheme.topAccentHover : {})
//       }}></div>
//       <div style={currentTheme.header}>
//         {card.icon && (
//           <div style={currentTheme.iconWrapper}>
//             <span style={currentTheme.icon}>{card.icon}</span>
//           </div>
//         )}
//         <h3 style={currentTheme.title}>{card.title}</h3>
//         <p style={currentTheme.summary}>{card.summary}</p>
//       </div>
//       <div style={currentTheme.body}>
//         <p style={currentTheme.content}>{card.content}</p>
//         {card.link && card.linkTitle && (
//           <a 
//             href={card.link} 
//             style={{
//               ...currentTheme.link,
//               ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//             }}
//             onMouseEnter={() => setHoveredLink(card.id)}
//             onMouseLeave={() => setHoveredLink(null)}
//           >
//             {card.linkTitle}
//             <span style={currentTheme.linkArrow}>→</span>
//           </a>
//         )}
//       </div>
//     </div>
//   );

//   const renderMinimalCard = (card) => (
//     <div 
//       key={card.id}
//       style={{
//         ...currentTheme.card,
//         ...(hoveredCard === card.id ? currentTheme.cardHover : {})
//       }}
//       onMouseEnter={() => setHoveredCard(card.id)}
//       onMouseLeave={() => setHoveredCard(null)}
//     >
//       <div style={currentTheme.header}>
//         <div style={currentTheme.headerTop}>
//           {card.icon && (
//             <span style={currentTheme.icon}>{card.icon}</span>
//           )}
//           <h3 style={currentTheme.title}>{card.title}</h3>
//         </div>
//         <p style={currentTheme.summary}>{card.summary}</p>
//       </div>
//       <div style={currentTheme.body}>
//         <p style={currentTheme.content}>{card.content}</p>
//         {card.link && card.linkTitle && (
//           <a 
//             href={card.link} 
//             style={{
//               ...currentTheme.link,
//               ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//             }}
//             onMouseEnter={() => setHoveredLink(card.id)}
//             onMouseLeave={() => setHoveredLink(null)}
//           >
//             {card.linkTitle}
//             <span style={currentTheme.linkArrow}>→</span>
//           </a>
//         )}
//       </div>
//     </div>
//   );

//   const renderBoldCard = (card) => (
//     <div 
//       key={card.id}
//       style={{
//         ...currentTheme.card,
//         ...(hoveredCard === card.id ? currentTheme.cardHover : {})
//       }}
//       onMouseEnter={() => setHoveredCard(card.id)}
//       onMouseLeave={() => setHoveredCard(null)}
//     >
//       <div style={currentTheme.header}>
//         <div style={currentTheme.headerAccent}></div>
//         <div style={currentTheme.iconTitle}>
//           {card.icon && (
//             <span style={currentTheme.icon}>{card.icon}</span>
//           )}
//           <h3 style={currentTheme.title}>{card.title}</h3>
//         </div>
//         <p style={currentTheme.summary}>{card.summary}</p>
//       </div>
//       <div style={currentTheme.body}>
//         <p style={currentTheme.content}>{card.content}</p>
//         {card.link && card.linkTitle && (
//           <a 
//             href={card.link} 
//             style={{
//               ...currentTheme.link,
//               ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//             }}
//             onMouseEnter={() => setHoveredLink(card.id)}
//             onMouseLeave={() => setHoveredLink(null)}
//           >
//             {card.linkTitle}
//             <span style={currentTheme.linkArrow}>→</span>
//           </a>
//         )}
//       </div>
//     </div>
//   );

//   const renderElegantCard = (card) => (
//     <div 
//       key={card.id}
//       style={{
//         ...currentTheme.card,
//         ...(hoveredCard === card.id ? currentTheme.cardHover : {})
//       }}
//       onMouseEnter={() => setHoveredCard(card.id)}
//       onMouseLeave={() => setHoveredCard(null)}
//     >
//       <div style={currentTheme.accent}></div>
//       <div style={currentTheme.header}>
//         {card.icon && (
//           <span style={currentTheme.icon}>{card.icon}</span>
//         )}
//         <h3 style={currentTheme.title}>{card.title}</h3>
//         <p style={currentTheme.summary}>{card.summary}</p>
//       </div>
//       <div style={currentTheme.divider}></div>
//       <div style={currentTheme.body}>
//         <p style={currentTheme.content}>{card.content}</p>
//         {card.link && card.linkTitle && (
//           <a 
//             href={card.link} 
//             style={{
//               ...currentTheme.link,
//               ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//             }}
//             onMouseEnter={() => setHoveredLink(card.id)}
//             onMouseLeave={() => setHoveredLink(null)}
//           >
//             {card.linkTitle}
//             <span style={currentTheme.linkArrow}>→</span>
//           </a>
//         )}
//       </div>
//     </div>
//   );

//   const renderCard = (card) => {
//     switch(theme) {
//       case 'minimal':
//         return renderMinimalCard(card);
//       case 'bold':
//         return renderBoldCard(card);
//       case 'elegant':
//         return renderElegantCard(card);
//       case 'gradient':
//       default:
//         return renderGradientCard(card);
//     }
//   };

//   return (
//     <div style={currentTheme.container}>
//       <div style={currentLayout}>
//         {cards.map(renderCard)}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { cardThemes } from './cardThemes';

const defaultCards = [
  {
    id: 1,
    title: 'Advanced Analytics',
    summary: 'Comprehensive data analysis and visualization tools',
    content: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.',
    icon: '📊', // Can use emoji or image URL like: '/images/analytics.png'
    link: '/analytics',
    linkTitle: 'View Dashboard'
  },
  {
    id: 2,
    title: 'Seamless Integration',
    summary: 'Connect with all your favorite tools and platforms',
    content: 'Integrate effortlessly with over 100+ third-party applications and services. Our API-first approach ensures smooth data flow between platforms with minimal configuration. Support for webhooks, REST APIs, GraphQL, and native integrations with popular business tools.',
    icon: '🔗',
    link: '/integrations',
    linkTitle: 'Browse Integrations'
  },
  {
    id: 3,
    title: 'Enterprise Security',
    summary: 'Bank-level encryption and comprehensive protection',
    content: 'Your data security is our top priority. We employ military-grade AES-256 encryption, multi-factor authentication, and regular third-party security audits. Fully compliant with GDPR, HIPAA, SOC 2 Type II, and ISO 27001 standards.',
    icon: '🔒'
  },
  {
    id: 4,
    title: '24/7 Expert Support',
    summary: 'Get help whenever you need it from our dedicated team',
    content: 'Access our dedicated support team around the clock via live chat, email, or phone. Our expert team averages a 2-minute response time with 95% first-contact resolution rate. Every plan includes onboarding assistance and training resources.',
    icon: '💬',
    link: '/support',
    linkTitle: 'Contact Support'
  }
];

export default function StaticCards({ cards = defaultCards, theme = 'gradient', layout = 'grid' }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const currentTheme = cardThemes[theme] || cardThemes.gradient;
  const currentLayout = layout === 'list' ? currentTheme.listLayout : currentTheme.gridLayout;

  const renderGradientCard = (card) => (
    <div 
      key={card.id}
      style={{
        ...currentTheme.card,
        ...(hoveredCard === card.id ? currentTheme.cardHover : {})
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={{
        ...currentTheme.topAccent,
        ...(hoveredCard === card.id ? currentTheme.topAccentHover : {})
      }}></div>
      <div style={currentTheme.header}>
        {card.icon && (
          <div style={currentTheme.iconWrapper}>
            {card.icon.startsWith('http') || card.icon.startsWith('/') ? (
              <img src={card.icon} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
            ) : (
              <span style={currentTheme.icon}>{card.icon}</span>
            )}
          </div>
        )}
        <h3 style={currentTheme.title}>{card.title}</h3>
        <p style={currentTheme.summary}>{card.summary}</p>
      </div>
      <div style={currentTheme.body}>
        <p style={currentTheme.content}>{card.content}</p>
        {card.link && card.linkTitle && (
          <a 
            href={card.link} 
            style={{
              ...currentTheme.link,
              ...(hoveredLink === card.id ? currentTheme.linkHover : {})
            }}
            onMouseEnter={() => setHoveredLink(card.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {card.linkTitle}
            <span style={currentTheme.linkArrow}>→</span>
          </a>
        )}
      </div>
    </div>
  );

  const renderMinimalCard = (card) => (
    <div 
      key={card.id}
      style={{
        ...currentTheme.card,
        ...(hoveredCard === card.id ? currentTheme.cardHover : {})
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={currentTheme.header}>
        <div style={currentTheme.headerTop}>
          {card.icon && (
            card.icon.startsWith('http') || card.icon.startsWith('/') ? (
              <img src={card.icon} alt="" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '10px'}} />
            ) : (
              <span style={currentTheme.icon}>{card.icon}</span>
            )
          )}
          <h3 style={currentTheme.title}>{card.title}</h3>
        </div>
        <p style={currentTheme.summary}>{card.summary}</p>
      </div>
      <div style={currentTheme.body}>
        <p style={currentTheme.content}>{card.content}</p>
        {card.link && card.linkTitle && (
          <a 
            href={card.link} 
            style={{
              ...currentTheme.link,
              ...(hoveredLink === card.id ? currentTheme.linkHover : {})
            }}
            onMouseEnter={() => setHoveredLink(card.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {card.linkTitle}
            <span style={currentTheme.linkArrow}>→</span>
          </a>
        )}
      </div>
    </div>
  );

  const renderBoldCard = (card) => (
    <div 
      key={card.id}
      style={{
        ...currentTheme.card,
        ...(hoveredCard === card.id ? currentTheme.cardHover : {})
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={currentTheme.header}>
        <div style={currentTheme.headerAccent}></div>
        <div style={currentTheme.iconTitle}>
          {card.icon && (
            card.icon.startsWith('http') || card.icon.startsWith('/') ? (
              <img src={card.icon} alt="" style={{width: '64px', height: '64px', objectFit: 'cover', borderRadius: '12px', border: '3px solid #93c5fd'}} />
            ) : (
              <span style={currentTheme.icon}>{card.icon}</span>
            )
          )}
          <h3 style={currentTheme.title}>{card.title}</h3>
        </div>
        <p style={currentTheme.summary}>{card.summary}</p>
      </div>
      <div style={currentTheme.body}>
        <p style={currentTheme.content}>{card.content}</p>
        {card.link && card.linkTitle && (
          <a 
            href={card.link} 
            style={{
              ...currentTheme.link,
              ...(hoveredLink === card.id ? currentTheme.linkHover : {})
            }}
            onMouseEnter={() => setHoveredLink(card.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {card.linkTitle}
            <span style={currentTheme.linkArrow}>→</span>
          </a>
        )}
      </div>
    </div>
  );

  const renderElegantCard = (card) => (
    <div 
      key={card.id}
      style={{
        ...currentTheme.card,
        ...(hoveredCard === card.id ? currentTheme.cardHover : {})
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={currentTheme.accent}></div>
      <div style={currentTheme.header}>
        {card.icon && (
          card.icon.startsWith('http') || card.icon.startsWith('/') ? (
            <img src={card.icon} alt="" style={{width: '52px', height: '52px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px', display: 'block'}} />
          ) : (
            <span style={currentTheme.icon}>{card.icon}</span>
          )
        )}
        <h3 style={currentTheme.title}>{card.title}</h3>
        <p style={currentTheme.summary}>{card.summary}</p>
      </div>
      <div style={currentTheme.divider}></div>
      <div style={currentTheme.body}>
        <p style={currentTheme.content}>{card.content}</p>
        {card.link && card.linkTitle && (
          <a 
            href={card.link} 
            style={{
              ...currentTheme.link,
              ...(hoveredLink === card.id ? currentTheme.linkHover : {})
            }}
            onMouseEnter={() => setHoveredLink(card.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {card.linkTitle}
            <span style={currentTheme.linkArrow}>→</span>
          </a>
        )}
      </div>
    </div>
  );

  const renderCard = (card) => {
    switch(theme) {
      case 'minimal':
        return renderMinimalCard(card);
      case 'bold':
        return renderBoldCard(card);
      case 'elegant':
        return renderElegantCard(card);
      case 'gradient':
      default:
        return renderGradientCard(card);
    }
  };

  return (
    <div style={currentTheme.container}>
      <div style={currentLayout}>
        {cards.map(renderCard)}
      </div>
    </div>
  );
}