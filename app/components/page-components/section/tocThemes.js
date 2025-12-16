// tocThemes.js - Theme configurations for Table of Contents component

export const tocThemes = {
  classicAcademic: {
    name: 'Classic Academic',
    fonts: {
      primary: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif",
      secondary: "'Merriweather', Georgia, serif"
    },
    colors: {
      primary: '#1e3a8a',
      primaryHover: '#1e40af',
      text: '#176eca',
      textSecondary: '#4b5563',
      background: '#ffffff',
      backgroundHover: '#f9fafb',
      border: '#d1d5db',
      borderLight: '#e5e7eb',
      topBorder: '#176eca',
      icon: '#dbeafe',
      subsectionText: '#4b5563',
      subsectionHover: '#1e3a8a',
      subsectionBg: '#f9fafb',
      subsectionBgHover: '#f3f4f6',
      arrow: '#6b7280',
      arrowExpanded: '#1e3a8a'
    },
    spacing: {
      containerPadding: '0',
      itemPadding: '12px 20px',
      itemPaddingSticky: '8px 14px',
      subsectionPadding: '8px 20px 8px 52px',
      subsectionPaddingSticky: '6px 14px 6px 40px',
      gap: '0'
    },
    sizes: {
      fontSize: '15px',
      fontSizeSticky: '13px',
      subsectionFontSize: '14px',
      subsectionFontSizeSticky: '12px',
      iconSize: '20px',
      iconSizeSticky: '16px',
      arrowSize: '20px',
      arrowSizeSticky: '16px',
      maxWidth: '900px',
      stickyWidth: '280px',
      borderWidth: '1px',
      topBorderWidth: '3px'
    },
    effects: {
      borderRadius: '2px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      boxShadowSticky: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: '0.15s ease',
      hoverTransform: 'none'
    },
    styles: {
      listStyle: true, // vertical list layout
      showTopBorder: true,
      showIcons: true,
      showArrows: true,
      subsectionIndicator: '→',
      itemHoverIndent: false
    }
  },

  numberedAcademic: {
    name: 'Numbered Academic',
    fonts: {
      primary: "'Crimson Text', Georgia, serif",
      secondary: "'Source Sans Pro', sans-serif"
    },
    colors: {
      primary: '#334155',
      primaryHover: '#1e293b',
      text: '#1e293b',
      textSecondary: '#475569',
      background: '#ffffff',
      backgroundHover: '#f8fafc',
      border: '#334155',
      borderLight: '#e2e8f0',
      topBorder: '#334155',
      headerBg: '#334155',
      headerText: '#ffffff',
      icon: 'transparent',
      numberColor: '#64748b',
      subsectionText: '#475569',
      subsectionHover: '#1e293b',
      subsectionBg: '#f8fafc',
      subsectionBgHover: '#f1f5f9',
      arrow: '#64748b',
      arrowExpanded: '#334155'
    },
    spacing: {
      containerPadding: '0',
      itemPadding: '14px 24px 14px 50px',
      itemPaddingSticky: '10px 16px 10px 40px',
      subsectionPadding: '8px 24px 8px 60px',
      subsectionPaddingSticky: '6px 16px 6px 48px',
      gap: '0',
      headerPadding: '16px 24px'
    },
    sizes: {
      fontSize: '16px',
      fontSizeSticky: '14px',
      subsectionFontSize: '15px',
      subsectionFontSizeSticky: '13px',
      iconSize: '0px',
      iconSizeSticky: '0px',
      arrowSize: '20px',
      arrowSizeSticky: '16px',
      maxWidth: '900px',
      stickyWidth: '280px',
      borderWidth: '2px',
      topBorderWidth: '0px',
      headerFontSize: '18px'
    },
    effects: {
      borderRadius: '0px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
      boxShadowSticky: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: '0.2s ease',
      hoverTransform: 'none'
    },
    styles: {
      listStyle: true,
      showTopBorder: false,
      showHeader: true,
      headerText: 'Contents',
      showIcons: false,
      showArrows: true,
      showNumbers: true,
      subsectionIndicator: '→',
      itemHoverIndent: false
    }
  },

  compactSidebar: {
    name: 'Compact Sidebar',
    fonts: {
      primary: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif",
      secondary: "'Inter', sans-serif"
    },
    colors: {
      primary: '#2d3748',
      primaryHover: '#1a202c',
      text: '#2d3748',
      textSecondary: '#4a5568',
      background: '#ffffff',
      backgroundHover: '#f7fafc',
      border: '#cbd5e0',
      borderLight: '#e2e8f0',
      topBorder: '#2d3748',
      icon: '#bee3f8',
      subsectionText: '#4a5568',
      subsectionHover: '#2d3748',
      subsectionBg: '#f7fafc',
      subsectionBgHover: '#edf2f7',
      arrow: '#a0aec0',
      arrowExpanded: '#2d3748'
    },
    spacing: {
      containerPadding: '0',
      itemPadding: '10px 16px',
      itemPaddingSticky: '8px 14px',
      subsectionPadding: '8px 16px 8px 44px',
      subsectionPaddingSticky: '6px 14px 6px 38px',
      gap: '0'
    },
    sizes: {
      fontSize: '14px',
      fontSizeSticky: '13px',
      subsectionFontSize: '13px',
      subsectionFontSizeSticky: '12px',
      iconSize: '18px',
      iconSizeSticky: '16px',
      arrowSize: '18px',
      arrowSizeSticky: '16px',
      maxWidth: '900px',
      stickyWidth: '260px',
      borderWidth: '1px',
      topBorderWidth: '2px'
    },
    effects: {
      borderRadius: '0px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      boxShadowSticky: '0 2px 8px rgba(0,0,0,0.1)',
      transition: '0.15s ease',
      hoverTransform: 'none',
      hoverIndent: '4px'
    },
    styles: {
      listStyle: true,
      showTopBorder: true,
      showIcons: true,
      showArrows: true,
      subsectionIndicator: '→',
      itemHoverIndent: true
    }
  },

  minimalist: {
    name: 'Minimalist',
    fonts: {
      primary: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif",
      secondary: "'Inter', sans-serif"
    },
    colors: {
      primary: '#1e3a8a',
      primaryHover: '#1e40af',
      text: '#374151',
      textSecondary: '#6b7280',
      background: '#fafafa',
      backgroundHover: '#ffffff',
      border: 'transparent',
      borderLight: 'transparent',
      topBorder: 'transparent',
      leftBorder: '#1e3a8a',
      icon: 'transparent',
      subsectionText: '#6b7280',
      subsectionHover: '#374151',
      subsectionBg: '#ffffff',
      subsectionBgHover: '#f9fafb',
      arrow: '#9ca3af',
      arrowExpanded: '#1e3a8a'
    },
    spacing: {
      containerPadding: '20px 0',
      itemPadding: '10px 30px',
      itemPaddingSticky: '8px 20px',
      subsectionPadding: '8px 30px 8px 50px',
      subsectionPaddingSticky: '6px 20px 6px 40px',
      gap: '0'
    },
    sizes: {
      fontSize: '15px',
      fontSizeSticky: '13px',
      subsectionFontSize: '14px',
      subsectionFontSizeSticky: '12px',
      iconSize: '0px',
      iconSizeSticky: '0px',
      arrowSize: '20px',
      arrowSizeSticky: '16px',
      maxWidth: '900px',
      stickyWidth: '260px',
      borderWidth: '0px',
      topBorderWidth: '0px',
      leftBorderWidth: '4px'
    },
    effects: {
      borderRadius: '0px',
      boxShadow: 'none',
      boxShadowSticky: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: '0.2s ease',
      hoverTransform: 'none',
      showLeftIndicator: true,
      leftIndicatorHeight: '100%'
    },
    styles: {
      listStyle: true,
      showTopBorder: false,
      showIcons: false,
      showArrows: true,
      showLeftBorder: true,
      subsectionIndicator: '→',
      itemHoverIndent: false
    }
  }
};

export default tocThemes;