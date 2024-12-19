// import React, { useState } from 'react';

// const ExplanationDetails = ({ title = "How to use", instructions }) => {
//  const [isOpen, setIsOpen] = useState(false);

//  if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
//    console.warn('ExplanationDetails: Missing or invalid instructions prop');
//    return null;
//  }

//  return (
//    <div style={{
//      display: 'flex',
//      flexDirection: 'column',
//      alignItems: 'center',
//      justifyContent: 'flex-start',
//      alignSelf: 'center',
//      position: 'relative',
//      marginTop: '-10px'
//    }}>
//      <details 
//        open={isOpen}
//        onToggle={(e) => setIsOpen(e.target.open)}
//        style={{
//          backgroundColor: '#fff',
//          padding: '10px 25px',
//          borderRadius: '12px',
//          width: '400px',
//          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//          fontSize: '0.9rem',
//          color: '#333',
//          border: '1px solid #eaeaea',
//          marginTop: '-5px',
//          transition: 'all 0.3s ease',
//          position: 'absolute',
//          top: 0,
//          left: '50%',
//          transform: 'translateX(-50%)',
//          zIndex: '100000'
//        }}>
//        <summary style={{
//          cursor: 'pointer',
//          fontWeight: '600',
//          color: '#2563eb',
//          outline: 'none',
//          listStyle: 'none',
//          display: 'flex',
//          alignItems: 'center',
//          gap: '8px',
//          height: '10px'
//        }}>
//          <span style={{
//            backgroundColor: '#2563eb',
//            color: 'white',
//            width: '22px',
//            height: '22px',
//            borderRadius: '50%',
//            display: 'inline-flex',
//            alignItems: 'center',
//            justifyContent: 'center',
//            fontSize: '16px'
//          }}>?</span>
//          {title}
//          <span style={{
//            marginLeft: 'auto',
//            fontSize: '18px',
//            fontWeight: 'bold',
//            backgroundColor: '#2563eb',
//            color: 'white',
//            width: '22px',
//            height: '22px',
//            borderRadius: '50%',
//            display: 'inline-flex',
//            alignItems: 'center',
//            justifyContent: 'center',
//            lineHeight: '22px',
//            paddingTop: '1px'
//          }}>
//            {isOpen ? '-' : '+'}
//          </span>
//        </summary>
//        <ul style={{
//          listStyle: 'none',
//          margin: '15px 0 0 0',
//          padding: '0 0 0 30px'
//        }}>
//          {instructions.map((instruction, index) => (
//            <li 
//              key={index}
//              style={{
//                marginBottom: index !== instructions.length - 1 ? '8px' : 0,
//                color: '#4b5563',
//                fontWeight: '600',
//                fontSize: '14px'
//              }}
//            >
//              • {instruction}
//            </li>
//          ))}
//        </ul>
//      </details>
//    </div>
//  );
// };

// ExplanationDetails.defaultProps = {
//  title: "How to use",
//  instructions: []
// };

// export default ExplanationDetails;


import React, { useState } from 'react';
import Link from 'next/link';

const ExplanationDetails = ({ title = "How to use", instructions, links, externalLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
    console.warn('ExplanationDetails: Missing or invalid instructions prop');
    return null;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: 'center',
      position: 'relative',
      marginTop: '-10px'
    }}>
      <details 
        open={isOpen}
        onToggle={(e) => setIsOpen(e.target.open)}
        style={{
          backgroundColor: '#fff',
          padding: '10px 25px',
          borderRadius: '12px',
          width: '400px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          fontSize: '0.9rem',
          color: '#333',
          border: '1px solid #eaeaea',
          marginTop: '-5px',
          transition: 'all 0.3s ease',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '100000'
        }}>
        <summary style={{
          cursor: 'pointer',
          fontWeight: '600',
          color: '#2563eb',
          outline: 'none',
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '10px'
        }}>
          <span style={{
            backgroundColor: '#2563eb',
            color: 'white',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}>?</span>
          {title}
          <span style={{
            marginLeft: 'auto',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#2563eb',
            color: 'white',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: '22px',
            paddingTop: '1px'
          }}>
            {isOpen ? '-' : '+'}
          </span>
        </summary>

        {/* Instructions List */}
        <ul style={{
          listStyle: 'none',
          margin: '15px 0 0 0',
          padding: '0 0 0 30px'
        }}>
          {instructions.map((instruction, index) => (
            <li 
              key={index}
              style={{
                marginBottom: index !== instructions.length - 1 ? '8px' : 0,
                color: '#4b5563',
                fontWeight: '600',
                fontSize: '14px'
              }}
            >
              • {instruction}
            </li>
          ))}
        </ul>

        {/* Internal Links Section */}
        {links && links.length > 0 && (
          <div style={{
            backgroundColor: '#f0f9ff',
            padding: '15px',
            borderRadius: '6px',
            marginTop: '15px'
          }}>
            <h4 style={{
              color: '#1a1a1a',
              fontSize: '16px',
              margin: '0 0 12px 0',
              paddingBottom: '8px',
              borderBottom: '1px solid #e2e8f0'
            }}>
              Additional Resources
            </h4>
            {links.map((link, index) => (
              <Link 
                key={index}
                href={link.url}
                style={{
                  display: 'block',
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontSize: '14px',
                  padding: '8px',
                  margin: '4px 0',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0f2fe'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}

        {/* External Links Section */}
        {externalLinks && externalLinks.length > 0 && (
          <div style={{
            backgroundColor: '#f0f9ff',
            padding: '15px',
            borderRadius: '6px',
            marginTop: '15px'
          }}>
            <h4 style={{
              color: '#1a1a1a',
              fontSize: '16px',
              margin: '0 0 12px 0',
              paddingBottom: '8px',
              borderBottom: '1px solid #e2e8f0'
            }}>
              External Links
            </h4>
            {externalLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontSize: '14px',
                  padding: '8px',
                  margin: '4px 0',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0f2fe'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </details>
    </div>
  );
};

ExplanationDetails.defaultProps = {
  title: "How to use",
  instructions: [],
  links: [],
  externalLinks: []
};

export default ExplanationDetails;