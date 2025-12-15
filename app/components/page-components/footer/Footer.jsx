import React from 'react';
import Link from 'next/link';
import { footerThemes } from './footerThemes';
import { mainMenuStructure } from '../../nav-bar3/mainMenu';

function Footer({ themeName = 'darkGray' }) {
  const theme = footerThemes[themeName] || footerThemes.darkGray;

  // Extract navigation sections from mainMenuStructure
  const getFooterSections = () => {
    const sections = {
      topics: [],
      tools: [],
      about: []
    };

    mainMenuStructure.forEach(item => {
      if (item.type === 'megamenu') {
        if (item.id === 'featured-topics') {
          // Get topic links from first level columns
          item.columns.forEach(column => {
            if (column.href) {
              sections.topics.push({
                label: column.title,
                href: column.href
              });
            }
          });
        } else if (item.id === 'resources') {
          // Get tool links from first level columns
          item.columns.forEach(column => {
            if (column.href) {
              sections.tools.push({
                label: column.title,
                href: column.href
              });
            }
          });
        }
      }
    });

    // Add static About links
    sections.about = [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' }
    ];

    return sections;
  };

  const footerSections = getFooterSections();

  return (
    <footer style={{
      background: theme.background,
      color: theme.textColor,
      padding: '50px 40px 30px',
      boxShadow: theme.boxShadow || 'none',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '60px',
        maxWidth: '1200px',
        margin: '0 auto 30px',
      }}>
        {/* Brand Section */}
        <div style={{
          paddingRight: '40px',
          paddingLeft:'100px'
        }}>
          <h2 style={{
            color: theme.brandTitle,
            fontSize: '24px',
            margin: '0 0 15px 0',
          }}>
            Learn Math Class
          </h2>
          <p style={{
            color: theme.brandText,
            fontSize: '14px',
            lineHeight: '1.6',
            margin: 0,
          }}>
            Your comprehensive online resource for mathematics education. Interactive calculators, visual tools, and detailed explanations for algebra, calculus, probability, and more.
          </p>
        </div>

        {/* Link Columns !!!*/}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
        }}>
          {/* Topics Column */}
          <div>
            <h3 style={{
              color: theme.sectionTitle,
              fontSize: '14px',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}>
              Topics
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {footerSections.topics.map((link, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: theme.linkColor,
                      textDecoration: 'none',
                      fontSize: '13px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.linkHoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.linkColor;
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h3 style={{
              color: theme.sectionTitle,
              fontSize: '14px',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}>
              Tools
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {footerSections.tools.slice(0, 6).map((link, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: theme.linkColor,
                      textDecoration: 'none',
                      fontSize: '13px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.linkHoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.linkColor;
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          {/* <div>
            <h3 style={{
              color: theme.sectionTitle,
              fontSize: '14px',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}>
              About
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {footerSections.about.map((link, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: theme.linkColor,
                      textDecoration: 'none',
                      fontSize: '13px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.linkHoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.linkColor;
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div style={{
        borderTop: `1px solid ${theme.borderColor}`,
        paddingTop: '20px',
        textAlign: 'center',
        color: theme.copyrightColor,
        fontSize: '13px',
      }}>
        © 2025 Learn Math Class. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;