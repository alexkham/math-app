
// 'use client';

// import { useState } from 'react';
// import { cardThemes } from './cardThemes';
// import { processContent } from '@/app/utils/contentProcessor';

// const defaultCards = [
//   {
//     id: 1,
//     htmlId: 'advanced-analytics',
//     title: 'Advanced Analytics',
//     summary: 'Comprehensive data analysis and visualization tools',
//     content: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.',
//     icon: '📊',
//     link: '/analytics',
//     linkTitle: 'View Dashboard'
//   },
//   {
//     id: 2,
//     htmlId: 'seamless-integration',
//     title: 'Seamless Integration',
//     summary: 'Connect with all your favorite tools and platforms',
//     content: 'Integrate effortlessly with over 100+ third-party applications and services. Our API-first approach ensures smooth data flow between platforms with minimal configuration. Support for webhooks, REST APIs, GraphQL, and native integrations with popular business tools.',
//     icon: '🔗',
//     link: '/integrations',
//     linkTitle: 'Browse Integrations'
//   },
//   {
//     id: 3,
//     htmlId: 'enterprise-security',
//     title: 'Enterprise Security',
//     summary: 'Bank-level encryption and comprehensive protection',
//     content: 'Your data security is our top priority. We employ military-grade AES-256 encryption, multi-factor authentication, and regular third-party security audits. Fully compliant with GDPR, HIPAA, SOC 2 Type II, and ISO 27001 standards.',
//     icon: '🔒'
//   },
//   {
//     id: 4,
//     htmlId: 'expert-support',
//     title: '24/7 Expert Support',
//     summary: 'Get help whenever you need it from our dedicated team',
//     content: 'Access our dedicated support team around the clock via live chat, email, or phone. Our expert team averages a 2-minute response time with 95% first-contact resolution rate. Every plan includes onboarding assistance and training resources.',
//     icon: '💬',
//     link: '/support',
//     linkTitle: 'Contact Support'
//   }
// ];

// export default function StaticCards({ 
//   cards = defaultCards, 
//   theme = 'gradient', 
//   layout = 'grid',
//   sectionTitle,
//   backgroundColor
// }) {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const [hoveredTopLink, setHoveredTopLink] = useState(null);

//   const currentTheme = cardThemes[theme] || cardThemes.gradient;
//   const currentLayout = layout === 'list' ? currentTheme.listLayout : currentTheme.gridLayout;

//   const containerStyle = {
//     ...currentTheme.container,
//     ...(backgroundColor && { backgroundColor })
//   };

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const topLinkStyle = {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '6px',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     color: '#64748b',
//     textDecoration: 'none',
//     padding: '8px 14px',
//     borderRadius: '8px',
//     border: '1px solid #e2e8f0',
//     backgroundColor: '#f8fafc',
//     transition: 'all 0.2s ease',
//     cursor: 'pointer',
//     position: 'absolute',
//     bottom: '0',
//     right: '0'
//   };

//   const topLinkHoverStyle = {
//     color: '#3b82f6',
//     backgroundColor: '#eff6ff',
//     borderColor: '#bfdbfe',
//     transform: 'translateY(-2px)'
//   };

//   const renderGradientCard = (card) => (
//     <div 
//       key={card.id}
//       id={card.htmlId}
//       style={{
//         ...currentTheme.card,
//         ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
//         scrollMarginTop: '100px'
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
//             {card.icon.startsWith('http') || card.icon.startsWith('/') ? (
//               <img src={card.icon} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
//             ) : (
//               <span style={currentTheme.icon}>{card.icon}</span>
//             )}
//           </div>
//         )}
//         <h3 style={currentTheme.title}>{card.title}</h3>
//         <p style={currentTheme.summary}>{card.summary}</p>
//       </div>
//       <div style={currentTheme.body}>
//         <p style={currentTheme.content}>{card.content}</p>
//         <div style={{ position: 'relative', minHeight: '50px' }}>
//           {card.link && card.linkTitle && (
//             <a 
//               href={card.link} 
//               style={{
//                 ...currentTheme.link,
//                 ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//               }}
//               onMouseEnter={() => setHoveredLink(card.id)}
//               onMouseLeave={() => setHoveredLink(null)}
//             >
//               {card.linkTitle}
//               <span style={currentTheme.linkArrow}>→</span>
//             </a>
//           )}
//           <a 
//             onClick={handleScrollToTop}
//             style={{
//               ...topLinkStyle,
//               ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
//             }}
//             onMouseEnter={() => setHoveredTopLink(card.id)}
//             onMouseLeave={() => setHoveredTopLink(null)}
//           >
//             <span style={{ fontSize: '1rem' }}>↑</span>
//             Back to Top
//           </a>
//         </div>
//       </div>
//     </div>
//   );

//   const renderMinimalCard = (card) => (
//     <div 
//       key={card.id}
//       id={card.htmlId}
//       style={{
//         ...currentTheme.card,
//         ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
//         scrollMarginTop: '100px'
//       }}
//       onMouseEnter={() => setHoveredCard(card.id)}
//       onMouseLeave={() => setHoveredCard(null)}
//     >
//       <div style={currentTheme.header}>
//         <div style={currentTheme.headerTop}>
//           {card.icon && (
//             card.icon.startsWith('http') || card.icon.startsWith('/') ? (
//               <img src={card.icon} alt="" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '10px'}} />
//             ) : (
//               <span style={currentTheme.icon}>{card.icon}</span>
//             )
//           )}
//           <h3 style={currentTheme.title}>{card.title}</h3>
//         </div>
//         <p style={currentTheme.summary}>{card.summary}</p>
//       </div>
//       <div style={currentTheme.body}>
//         <p style={currentTheme.content}>{card.content}</p>
//         <div style={{ position: 'relative', minHeight: '50px' }}>
//           {card.link && card.linkTitle && (
//             <a 
//               href={card.link} 
//               style={{
//                 ...currentTheme.link,
//                 ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//               }}
//               onMouseEnter={() => setHoveredLink(card.id)}
//               onMouseLeave={() => setHoveredLink(null)}
//             >
//               {card.linkTitle}
//               <span style={currentTheme.linkArrow}>→</span>
//             </a>
//           )}
//           <a 
//             onClick={handleScrollToTop}
//             style={{
//               ...topLinkStyle,
//               ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
//             }}
//             onMouseEnter={() => setHoveredTopLink(card.id)}
//             onMouseLeave={() => setHoveredTopLink(null)}
//           >
//             <span style={{ fontSize: '1rem' }}>↑</span>
//             Back to Top
//           </a>
//         </div>
//       </div>
//     </div>
//   );

//   const renderBoldCard = (card) => (
//     <div 
//       key={card.id}
//       id={card.htmlId}
//       style={{
//         ...currentTheme.card,
//         ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
//         scrollMarginTop: '100px'
//       }}
//       onMouseEnter={() => setHoveredCard(card.id)}
//       onMouseLeave={() => setHoveredCard(null)}
//     >
//       <div style={currentTheme.header}>
//         <div style={currentTheme.headerAccent}></div>
//         <div style={currentTheme.iconTitle}>
//           {card.icon && (
//             card.icon.startsWith('http') || card.icon.startsWith('/') ? (
//               <img src={card.icon} alt="" style={{width: '64px', height: '64px', objectFit: 'cover', borderRadius: '12px', border: '3px solid #93c5fd'}} />
//             ) : (
//               <span style={currentTheme.icon}>{card.icon}</span>
//             )
//           )}
//           <h3 style={currentTheme.title}>{card.title}</h3>
//         </div>
//         <p style={currentTheme.summary}>{card.summary}</p>
//       </div>
//       <div style={currentTheme.body}>
//         <p style={currentTheme.content}>{card.content}</p>
//         <div style={{ position: 'relative', minHeight: '50px' }}>
//           {card.link && card.linkTitle && (
//             <a 
//               href={card.link} 
//               style={{
//                 ...currentTheme.link,
//                 ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//               }}
//               onMouseEnter={() => setHoveredLink(card.id)}
//               onMouseLeave={() => setHoveredLink(null)}
//             >
//               {card.linkTitle}
//               <span style={currentTheme.linkArrow}>→</span>
//             </a>
//           )}
//           <a 
//             onClick={handleScrollToTop}
//             style={{
//               ...topLinkStyle,
//               ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
//             }}
//             onMouseEnter={() => setHoveredTopLink(card.id)}
//             onMouseLeave={() => setHoveredTopLink(null)}
//           >
//             <span style={{ fontSize: '1rem' }}>↑</span>
//             Back to Top
//           </a>
//         </div>
//       </div>
//     </div>
//   );

//   const renderElegantCard = (card) => (
//     <div 
//       key={card.id}
//       id={card.htmlId}
//       style={{
//         ...currentTheme.card,
//         ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
//         scrollMarginTop: '100px'
//       }}
//       onMouseEnter={() => setHoveredCard(card.id)}
//       onMouseLeave={() => setHoveredCard(null)}
//     >
//       <div style={currentTheme.accent}></div>
//       <div style={currentTheme.header}>
//         {card.icon && (
//           card.icon.startsWith('http') || card.icon.startsWith('/') ? (
//             <img src={card.icon} alt="" style={{width: '52px', height: '52px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px', display: 'block'}} />
//           ) : (
//             <span style={currentTheme.icon}>{card.icon}</span>
//           )
//         )}
//         <h3 style={currentTheme.title}>{processContent(card.title)}</h3>
//         <p style={currentTheme.summary}>{processContent(card.summary)}</p>
//       </div>
//       <div style={currentTheme.divider}></div>
//       <div style={currentTheme.body}>
//         <p style={currentTheme.content}>{processContent(card.content)}</p>
//         <div style={{ position: 'relative', minHeight: '50px' }}>
//           {card.link && card.linkTitle && (
//             <a 
//               href={card.link} 
//               style={{
//                 ...currentTheme.link,
//                 ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//               }}
//               onMouseEnter={() => setHoveredLink(card.id)}
//               onMouseLeave={() => setHoveredLink(null)}
//             >
//               {card.linkTitle}
//               <span style={currentTheme.linkArrow}>→</span>
//             </a>
//           )}
//           <a 
//             onClick={handleScrollToTop}
//             style={{
//               ...topLinkStyle,
//               ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
//             }}
//             onMouseEnter={() => setHoveredTopLink(card.id)}
//             onMouseLeave={() => setHoveredTopLink(null)}
//           >
//             <span style={{ fontSize: '1rem' }}>↑</span>
//             Back to Top
//           </a>
//         </div>
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
//     <div style={containerStyle}>
//       {sectionTitle && (
//         <div style={{ marginBottom: '40px' }}>
//           <h1 style={{ 
//             fontSize: '2.5rem', 
//             fontWeight: 'bold', 
//             marginBottom: '12px',
//             color: '#1a202c'
//           }}>
//             {sectionTitle}
//           </h1>
//           <hr style={{ borderColor: '#3498db', borderWidth: '1px' }} />
//         </div>
//       )}
//       <div style={currentLayout}>
//         {cards.map(renderCard)}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cardThemes } from './cardThemes';
import { processContent } from '@/app/utils/contentProcessor';

const defaultCards = [
  {
    id: 1,
    htmlId: 'advanced-analytics',
    title: 'Advanced Analytics',
    summary: 'Comprehensive data analysis and visualization tools',
    content: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.',
    icon: '📊',
    link: '/analytics',
    linkTitle: 'View Dashboard'
  },
  {
    id: 2,
    htmlId: 'seamless-integration',
    title: 'Seamless Integration',
    summary: 'Connect with all your favorite tools and platforms',
    content: 'Integrate effortlessly with over 100+ third-party applications and services. Our API-first approach ensures smooth data flow between platforms with minimal configuration. Support for webhooks, REST APIs, GraphQL, and native integrations with popular business tools.',
    icon: '🔗',
    link: '/integrations',
    linkTitle: 'Browse Integrations'
  },
  {
    id: 3,
    htmlId: 'enterprise-security',
    title: 'Enterprise Security',
    summary: 'Bank-level encryption and comprehensive protection',
    content: 'Your data security is our top priority. We employ military-grade AES-256 encryption, multi-factor authentication, and regular third-party security audits. Fully compliant with GDPR, HIPAA, SOC 2 Type II, and ISO 27001 standards.',
    icon: '🔒'
  },
  {
    id: 4,
    htmlId: 'expert-support',
    title: '24/7 Expert Support',
    summary: 'Get help whenever you need it from our dedicated team',
    content: 'Access our dedicated support team around the clock via live chat, email, or phone. Our expert team averages a 2-minute response time with 95% first-contact resolution rate. Every plan includes onboarding assistance and training resources.',
    icon: '💬',
    link: '/support',
    linkTitle: 'Contact Support'
  }
];

export default function StaticCards({ 
  cards = defaultCards, 
  theme = 'gradient', 
  layout = 'grid',
  sectionTitle,
  backgroundColor
}) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredTopLink, setHoveredTopLink] = useState(null);

  const currentTheme = cardThemes[theme] || cardThemes.gradient;
  const currentLayout = layout === 'list' ? currentTheme.listLayout : currentTheme.gridLayout;

  const containerStyle = {
    ...currentTheme.container,
    ...(backgroundColor && { backgroundColor })
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#64748b',
    textDecoration: 'none',
    padding: '8px 14px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '0',
    right: '0'
  };

  const topLinkHoverStyle = {
    color: '#3b82f6',
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
    transform: 'translateY(-2px)'
  };

  const renderGradientCard = (card) => (
    <div 
      key={card.id}
      id={card.htmlId}
      style={{
        ...currentTheme.card,
        ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
        scrollMarginTop: '100px'
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
          <div style={{
            ...currentTheme.iconWrapper,
            position: 'relative'
          }}>
            {card.icon.startsWith('http') || card.icon.startsWith('/') ? (
              <Image 
                src={card.icon} 
                alt="" 
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
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
        <div style={{ position: 'relative', minHeight: '50px' }}>
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
          <a 
            onClick={handleScrollToTop}
            style={{
              ...topLinkStyle,
              ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
            }}
            onMouseEnter={() => setHoveredTopLink(card.id)}
            onMouseLeave={() => setHoveredTopLink(null)}
          >
            <span style={{ fontSize: '1rem' }}>↑</span>
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );

  const renderMinimalCard = (card) => (
    <div 
      key={card.id}
      id={card.htmlId}
      style={{
        ...currentTheme.card,
        ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
        scrollMarginTop: '100px'
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={currentTheme.header}>
        <div style={currentTheme.headerTop}>
          {card.icon && (
            card.icon.startsWith('http') || card.icon.startsWith('/') ? (
              <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                <Image 
                  src={card.icon} 
                  alt="" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
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
        <div style={{ position: 'relative', minHeight: '50px' }}>
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
          <a 
            onClick={handleScrollToTop}
            style={{
              ...topLinkStyle,
              ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
            }}
            onMouseEnter={() => setHoveredTopLink(card.id)}
            onMouseLeave={() => setHoveredTopLink(null)}
          >
            <span style={{ fontSize: '1rem' }}>↑</span>
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );

  const renderBoldCard = (card) => (
    <div 
      key={card.id}
      id={card.htmlId}
      style={{
        ...currentTheme.card,
        ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
        scrollMarginTop: '100px'
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={currentTheme.header}>
        <div style={currentTheme.headerAccent}></div>
        <div style={currentTheme.iconTitle}>
          {card.icon && (
            card.icon.startsWith('http') || card.icon.startsWith('/') ? (
              <div style={{ position: 'relative', width: '64px', height: '64px' }}>
                <Image 
                  src={card.icon} 
                  alt="" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px', border: '3px solid #93c5fd' }}
                />
              </div>
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
        <div style={{ position: 'relative', minHeight: '50px' }}>
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
          <a 
            onClick={handleScrollToTop}
            style={{
              ...topLinkStyle,
              ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
            }}
            onMouseEnter={() => setHoveredTopLink(card.id)}
            onMouseLeave={() => setHoveredTopLink(null)}
          >
            <span style={{ fontSize: '1rem' }}>↑</span>
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );

  const renderElegantCard = (card) => (
    <div 
      key={card.id}
      id={card.htmlId}
      style={{
        ...currentTheme.card,
        ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
        scrollMarginTop: '100px'
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={currentTheme.accent}></div>
      <div style={currentTheme.header}>
        {card.icon && (
          card.icon.startsWith('http') || card.icon.startsWith('/') ? (
            <div style={{ position: 'relative', width: '52px', height: '52px', marginBottom: '20px' }}>
              <Image 
                src={card.icon} 
                alt="" 
                fill
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
          ) : (
            <span style={currentTheme.icon}>{card.icon}</span>
          )
        )}
        <h3 style={currentTheme.title}>{processContent(card.title)}</h3>
        <p style={currentTheme.summary}>{processContent(card.summary)}</p>
      </div>
      <div style={currentTheme.divider}></div>
      <div style={currentTheme.body}>
        <p style={currentTheme.content}>{processContent(card.content)}</p>
        <div style={{ position: 'relative', minHeight: '50px' }}>
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
          <a 
            onClick={handleScrollToTop}
            style={{
              ...topLinkStyle,
              ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
            }}
            onMouseEnter={() => setHoveredTopLink(card.id)}
            onMouseLeave={() => setHoveredTopLink(null)}
          >
            <span style={{ fontSize: '1rem' }}>↑</span>
            Back to Top
          </a>
        </div>
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
    <div style={containerStyle}>
      {sectionTitle && (
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '12px',
            color: '#1a202c'
          }}>
            {sectionTitle}
          </h1>
          <hr style={{ borderColor: '#3498db', borderWidth: '1px' }} />
        </div>
      )}
      <div style={currentLayout}>
        {cards.map(renderCard)}
      </div>
    </div>
  );
}