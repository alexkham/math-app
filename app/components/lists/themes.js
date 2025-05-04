// themes.js
import { BookOpen, Sparkles, Zap, Shield, Check, Star, ArrowRight, Circle } from 'lucide-react';

export const themes = {
  modern: {
    name: 'Modern Card',
    styles: {
      backgroundColor: '#f8f9fa',
      textColor: '#2d3748',
      iconColor: '#48bb78',
      shadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
  gradient: {
    name: 'Gradient',
    styles: {
      backgroundColor: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
      textColor: '#ffffff',
      iconColor: '#ffd700',
      itemBackground: 'rgba(255,255,255,0.1)',
      itemHoverBackground: 'rgba(255,255,255,0.15)'
    }
  },
  timeline: {
    name: 'Timeline',
    styles: {
      backgroundColor: '#eff6ff',
      textColor: '#1e3a8a',
      iconColor: '#3b82f6',
      borderColor: '#93c5fd',
      itemBackground: '#ffffff'
    }
  },
  floating: {
    name: 'Floating Cards',
    styles: {
      backgroundColor: 'linear-gradient(to right, #14b8a6, #059669)',
      textColor: '#ffffff',
      iconColor: '#14b8a6',
      itemBackground: '#ffffff',
      itemTextColor: '#374151'
    }
  },
  hexagonal: {
    name: 'Hexagonal',
    styles: {
      backgroundColor: '#fefce8',
      textColor: '#713f12',
      iconColor: '#ca8a04',
      itemBackground: '#ffffff',
      borderColor: '#facc15',
      pattern: 'radial-gradient(#000 1px,transparent 1px)'
    }
  },
  glassmorphic: {
    name: 'Glassmorphic Dark',
    styles: {
      backgroundColor: '#111827',
      textColor: '#ffffff',
      iconColor: '#a855f7',
      itemBackground: 'rgba(255,255,255,0.05)',
      itemBorder: 'rgba(255,255,255,0.1)',
      itemHoverBackground: 'rgba(255,255,255,0.08)'
    }
  },
  stacked: {
    name: 'Stacked Cards',
    styles: {
      backgroundColor: 'linear-gradient(135deg, #e0f2fe, #e0e7ff)',
      textColor: '#312e81',
      iconColor: '#6366f1',
      itemBackground: '#ffffff',
      itemShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  neumorphic: {
    name: 'Neumorphic',
    styles: {
      backgroundColor: '#f1f5f9',
      textColor: '#1e293b',
      iconColor: '#475569',
      itemShadow: 'inset -12px -12px 24px #ffffff, inset 12px 12px 24px #d1d1d1'
    }
  },
  // themes.js - Extended with new glassmorphic variants

  glassmorphicDark: {
    name: 'Glassmorphic Dark',
    styles: {
      backgroundColor: '#111827',
      textColor: '#ffffff',
      iconColor: '#a855f7',
      itemBackground: 'rgba(255,255,255,0.05)',
      itemBorder: 'rgba(255,255,255,0.1)',
      itemHoverBackground: 'rgba(255,255,255,0.08)',
      itemShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }
  },
  
  // Glassmorphic Light
  glassmorphicLight: {
    name: 'Glassmorphic Light',
    styles: {
      backgroundColor: '#f0f4f8',
      textColor: '#334155',
      iconColor: '#3b82f6',
      itemBackground: 'rgba(255,255,255,0.7)',
      itemBorder: 'rgba(203,213,225,0.5)',
      itemHoverBackground: 'rgba(255,255,255,0.9)',
      itemShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    }
  },
  
  // Glassmorphic Nature
  glassmorphicNature: {
    name: 'Glassmorphic Nature',
    styles: {
      backgroundColor: '#ecfdf5',
      textColor: '#065f46',
      iconColor: '#10b981',
      itemBackground: 'rgba(209,250,229,0.6)',
      itemBorder: 'rgba(16,185,129,0.2)',
      itemHoverBackground: 'rgba(209,250,229,0.8)',
      itemShadow: '0 4px 6px rgba(6, 95, 70, 0.1)'
    }
  },
  
  // Glassmorphic Sunset
  glassmorphicSunset: {
    name: 'Glassmorphic Sunset',
    styles: {
      backgroundColor: '#fff7ed',
      textColor: '#9a3412',
      iconColor: '#f97316',
      itemBackground: 'rgba(255,237,213,0.7)',
      itemBorder: 'rgba(249,115,22,0.2)',
      itemHoverBackground: 'rgba(255,237,213,0.9)',
      itemShadow: '0 4px 6px rgba(154, 52, 18, 0.1)'
    }
  },
  
  // Glassmorphic Ocean
  glassmorphicOcean: {
    name: 'Glassmorphic Ocean',
    styles: {
      backgroundColor: '#ecfeff',
      textColor: '#155e75',
      iconColor: '#06b6d4',
      itemBackground: 'rgba(207,250,254,0.6)',
      itemBorder: 'rgba(6,182,212,0.2)',
      itemHoverBackground: 'rgba(207,250,254,0.8)',
      itemShadow: '0 4px 6px rgba(21, 94, 117, 0.1)'
    }
  },
  
  // Glassmorphic Pastel
  glassmorphicPastel: {
    name: 'Glassmorphic Pastel',
    styles: {
      backgroundColor: '#fdf4ff',
      textColor: '#86198f',
      iconColor: '#d946ef',
      itemBackground: 'rgba(250,232,255,0.6)',
      itemBorder: 'rgba(217,70,239,0.2)',
      itemHoverBackground: 'rgba(250,232,255,0.8)',
      itemShadow: '0 4px 6px rgba(134, 25, 143, 0.1)'
    }
  },
  // Add these to your themes.js file

// Vibrant Blue
glassmorphicVibrantBlue: {
  name: 'Vibrant Blue',
  styles: {
    backgroundColor: '#0c4a6e',
    textColor: '#ffffff',
    iconColor: '#38bdf8',
    itemBackground: 'rgba(56,189,248,0.15)',
    itemBorder: 'rgba(56,189,248,0.3)',
    itemHoverBackground: 'rgba(56,189,248,0.25)',
    itemShadow: '0 4px 12px rgba(56,189,248,0.3)'
  }
},

// Electric Blue
glassmorphicElectricBlue: {
  name: 'Electric Blue',
  styles: {
    backgroundColor: '#000033',
    textColor: '#ffffff',
    iconColor: '#00eeff',
    itemBackground: 'rgba(0,238,255,0.12)',
    itemBorder: 'rgba(0,238,255,0.25)',
    itemHoverBackground: 'rgba(0,238,255,0.18)',
    itemShadow: '0 4px 15px rgba(0,238,255,0.4)'
  }
},

// Royal Blue
glassmorphicRoyalBlue: {
  name: 'Royal Blue',
  styles: {
    backgroundColor: '#1e3a8a',
    textColor: '#ffffff',
    iconColor: '#60a5fa',
    itemBackground: 'rgba(96,165,250,0.15)',
    itemBorder: 'rgba(96,165,250,0.3)',
    itemHoverBackground: 'rgba(96,165,250,0.25)',
    itemShadow: '0 4px 10px rgba(96,165,250,0.3)'
  }
},

// Crimson
glassmorphicCrimson: {
  name: 'Crimson',
  styles: {
    backgroundColor: '#7f1d1d',
    textColor: '#ffffff',
    iconColor: '#f87171',
    itemBackground: 'rgba(248,113,113,0.15)',
    itemBorder: 'rgba(248,113,113,0.3)',
    itemHoverBackground: 'rgba(248,113,113,0.25)',
    itemShadow: '0 4px 12px rgba(248,113,113,0.3)'
  }
},

// Emerald
glassmorphicEmerald: {
  name: 'Emerald',
  styles: {
    backgroundColor: '#064e3b',
    textColor: '#ffffff',
    iconColor: '#34d399',
    itemBackground: 'rgba(52,211,153,0.15)',
    itemBorder: 'rgba(52,211,153,0.3)',
    itemHoverBackground: 'rgba(52,211,153,0.25)',
    itemShadow: '0 4px 12px rgba(52,211,153,0.3)'
  }
},

// Amethyst
glassmorphicAmethyst: {
  name: 'Amethyst',
  styles: {
    backgroundColor: '#4c1d95',
    textColor: '#ffffff',
    iconColor: '#c084fc',
    itemBackground: 'rgba(192,132,252,0.15)',
    itemBorder: 'rgba(192,132,252,0.3)',
    itemHoverBackground: 'rgba(192,132,252,0.25)',
    itemShadow: '0 4px 12px rgba(192,132,252,0.3)'
  }
},
// Light vibrant glassmorphic themes for your themes.js file
glassmorphicSkyBlue: {
  name: 'Sky Blue',
  styles: {
    backgroundColor: '#bae6fd',
    textColor: '#0369a1',
    iconColor: '#0284c7',
    itemBackground: 'rgba(186,230,253,0.7)',
    itemBorder: 'rgba(2,132,199,0.3)',
    itemHoverBackground: 'rgba(186,230,253,0.9)',
    itemShadow: '0 4px 12px rgba(2,132,199,0.2)'
  }
},

glassmorphicAzure: {
  name: 'Azure',
  styles: {
    backgroundColor: '#c7d2fe',
    textColor: '#4338ca',
    iconColor: '#4f46e5',
    itemBackground: 'rgba(199,210,254,0.7)',
    itemBorder: 'rgba(79,70,229,0.3)',
    itemHoverBackground: 'rgba(199,210,254,0.9)',
    itemShadow: '0 4px 12px rgba(79,70,229,0.2)'
  }
},

glassmorphicTeal: {
  name: 'Teal',
  styles: {
    backgroundColor: '#99f6e4',
    textColor: '#0f766e',
    iconColor: '#14b8a6',
    itemBackground: 'rgba(153,246,228,0.7)',
    itemBorder: 'rgba(20,184,166,0.3)',
    itemHoverBackground: 'rgba(153,246,228,0.9)',
    itemShadow: '0 4px 12px rgba(20,184,166,0.2)'
  }
},

glassmorphicRose: {
  name: 'Rose',
  styles: {
    backgroundColor: '#fecdd3',
    textColor: '#be123c',
    iconColor: '#e11d48',
    itemBackground: 'rgba(254,205,211,0.7)',
    itemBorder: 'rgba(225,29,72,0.3)',
    itemHoverBackground: 'rgba(254,205,211,0.9)',
    itemShadow: '0 4px 12px rgba(225,29,72,0.2)'
  }
},

glassmorphicAmber: {
  name: 'Amber',
  styles: {
    backgroundColor: '#fef3c7',
    textColor: '#b45309',
    iconColor: '#d97706',
    itemBackground: 'rgba(254,243,199,0.7)',
    itemBorder: 'rgba(217,119,6,0.3)',
    itemHoverBackground: 'rgba(254,243,199,0.9)',
    itemShadow: '0 4px 12px rgba(217,119,6,0.2)'
  }
},

glassmorphicLime: {
  name: 'Lime',
  styles: {
    backgroundColor: '#d9f99d',
    textColor: '#3f6212',
    iconColor: '#65a30d',
    itemBackground: 'rgba(217,249,157,0.7)',
    itemBorder: 'rgba(101,163,13,0.3)',
    itemHoverBackground: 'rgba(217,249,157,0.9)',
    itemShadow: '0 4px 12px rgba(101,163,13,0.2)'
  }
},
// Light glassmorphic themes with white/light gray items
glassmorphicSkyBlueLight: {
  name: 'Sky Blue Light',
  styles: {
    backgroundColor: '#bae6fd',
    textColor: '#0369a1',
    iconColor: '#0284c7',
    itemBackground: 'rgba(255,255,255,0.8)',
    itemBorder: 'rgba(2,132,199,0.2)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(2,132,199,0.15)'
  }
},

glassmorphicAzureLight: {
  name: 'Azure Light',
  styles: {
    backgroundColor: '#c7d2fe',
    textColor: '#4338ca',
    iconColor: '#4f46e5',
    itemBackground: 'rgba(255,255,255,0.8)',
    itemBorder: 'rgba(79,70,229,0.2)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(79,70,229,0.15)'
  }
},

glassmorphicTealLight: {
  name: 'Teal Light',
  styles: {
    backgroundColor: '#99f6e4',
    textColor: '#0f766e',
    iconColor: '#14b8a6',
    itemBackground: 'rgba(255,255,255,0.8)',
    itemBorder: 'rgba(20,184,166,0.2)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(20,184,166,0.15)'
  }
},

glassmorphicRoseLight: {
  name: 'Rose Light',
  styles: {
    backgroundColor: '#fecdd3',
    textColor: '#be123c',
    iconColor: '#e11d48',
    itemBackground: 'rgba(255,255,255,0.8)',
    itemBorder: 'rgba(225,29,72,0.2)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(225,29,72,0.15)'
  }
},

glassmorphicAmberLight: {
  name: 'Amber Light',
  styles: {
    backgroundColor: '#fef3c7',
    textColor: '#b45309',
    iconColor: '#d97706',
    itemBackground: 'rgba(255,255,255,0.8)',
    itemBorder: 'rgba(217,119,6,0.2)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(217,119,6,0.15)'
  }
},

glassmorphicLimeLight: {
  name: 'Lime Light',
  styles: {
    backgroundColor: '#d9f99d',
    textColor: '#3f6212',
    iconColor: '#65a30d',
    itemBackground: 'rgba(255,255,255,0.8)',
    itemBorder: 'rgba(101,163,13,0.2)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(101,163,13,0.15)'
  }
},
// Gray-based glassmorphic themes with different border styles
glassmorphicSlate: {
  name: 'Slate Gray',
  styles: {
    backgroundColor: '#e2e8f0',
    textColor: '#334155',
    iconColor: '#64748b',
    itemBackground: 'rgba(255,255,255,0.85)',
    itemBorder: 'rgba(100,116,139,0.3)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(100,116,139,0.15)'
  }
},

glassmorphicCharcoal: {
  name: 'Charcoal',
  styles: {
    backgroundColor: '#475569',
    textColor: '#f8fafc',
    iconColor: '#94a3b8',
    itemBackground: 'rgba(255,255,255,0.9)',
    itemBorder: 'rgba(148,163,184,0.4)',
    itemHoverBackground: 'rgba(248,250,252,0.97)',
    itemShadow: '0 4px 12px rgba(15,23,42,0.2)'
  }
},

glassmorphicDarkGray: {
  name: 'Dark Gray',
  styles: {
    backgroundColor: '#1e293b',
    textColor: '#f1f5f9',
    iconColor: '#cbd5e1',
    itemBackground: 'rgba(255,255,255,0.85)',
    itemBorder: '2px solid rgba(203,213,225,0.4)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(15,23,42,0.3)'
  }
},

glassmorphicSilver: {
  name: 'Silver',
  styles: {
    backgroundColor: '#f1f5f9',
    textColor: '#334155',
    iconColor: '#64748b',
    itemBackground: 'rgba(255,255,255,0.8)',
    itemBorder: '1px solid rgba(100,116,139,0.3)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(100,116,139,0.12)'
  }
},

glassmorphicPlatinum: {
  name: 'Platinum',
  styles: {
    backgroundColor: '#cbd5e1',
    textColor: '#334155',
    iconColor: '#475569',
    itemBackground: 'rgba(255,255,255,0.8)',
    itemBorder: '1px solid rgba(71,85,105,0.3)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(71,85,105,0.15)'
  }
},

glassmorphicGunmetal: {
  name: 'Gunmetal',
  styles: {
    backgroundColor: '#334155',
    textColor: '#f1f5f9',
    iconColor: '#94a3b8',
    itemBackground: 'rgba(255,255,255,0.85)',
    itemBorder: '2px double rgba(148,163,184,0.4)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 15px rgba(15,23,42,0.25)'
  }
},
// Charcoal with darker font
glassmorphicCharcoalDarkFont: {
  name: 'Charcoal (Dark Font)',
  styles: {
    backgroundColor: '#475569',
    textColor: '#1e293b', // Darker font color
    iconColor: '#334155',
    itemBackground: 'rgba(255,255,255,0.9)',
    itemBorder: 'rgba(148,163,184,0.4)',
    itemHoverBackground: 'rgba(248,250,252,0.97)',
    itemShadow: '0 4px 12px rgba(15,23,42,0.2)'
  }
},

// Dark Gray with darker font
glassmorphicDarkGrayDarkFont: {
  name: 'Dark Gray (Dark Font)',
  styles: {
    backgroundColor: '#1e293b',
    textColor: '#334155', // Darker font color
    iconColor: '#475569',
    itemBackground: 'rgba(255,255,255,0.85)',
    itemBorder: '2px solid rgba(203,213,225,0.4)',
    itemHoverBackground: 'rgba(248,250,252,0.95)',
    itemShadow: '0 4px 12px rgba(15,23,42,0.3)'
  }
},
// Charcoal with darker background
glassmorphicCharcoalDarkBg: {
  name: 'Charcoal (Dark Bg)',
  styles: {
    backgroundColor: '#475569',
    textColor: '#f8fafc', // Light font color
    iconColor: '#94a3b8',
    itemBackground: 'rgba(203,213,225,0.5)', // Darker item background
    itemBorder: 'rgba(148,163,184,0.4)',
    itemHoverBackground: 'rgba(226,232,240,0.6)',
    itemShadow: '0 4px 12px rgba(15,23,42,0.2)'
  }
},

// Dark Gray with darker background
glassmorphicDarkGrayDarkBg: {
  name: 'Dark Gray (Dark Bg)',
  styles: {
    backgroundColor: '#1e293b',
    textColor: '#f1f5f9', // Light font color
    iconColor: '#cbd5e1',
    itemBackground: 'rgba(148,163,184,0.3)', // Darker item background
    itemBorder: '2px solid rgba(203,213,225,0.4)',
    itemHoverBackground: 'rgba(203,213,225,0.4)',
    itemShadow: '0 4px 12px rgba(15,23,42,0.3)'
  }
},
// Light gray panel with blue text theme
glassmorphicPanelLight: {
  name: 'Panel Light',
  styles: {
    backgroundColor: '#e5e7eb',
    textColor: '#445566',
    iconColor: '#3366aa',
    itemBackground: 'rgba(255,255,255,0.5)',
    itemBorder: '1px solid rgba(200,205,215,0.5)',
    itemHoverBackground: 'rgba(255,255,255,0.8)',
    itemShadow: '0 2px 6px rgba(0,0,0,0.08)'
  }
},

// A slightly darker variant
glassmorphicPanelMedium: {
  name: 'Panel Medium',
  styles: {
    backgroundColor: '#d1d5db',
    textColor: '#334155',
    iconColor: '#3366aa',
    itemBackground: 'rgba(249,250,251,0.7)',
    itemBorder: '1px solid rgba(180,185,195,0.5)',
    itemHoverBackground: 'rgba(255,255,255,0.9)',
    itemShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }
},
// Themes inspired by the UL cards with depth
glassmorphicOrangeCard: {
  name: 'Orange Card',
  styles: {
    backgroundColor: '#e98843',
    textColor: '#ececec',
    iconColor: '#ffffff',
    itemBackground: 'rgba(233,136,67,0.9)',
    itemBorder: '1px solid rgba(0,0,0,0.2)',
    itemHoverBackground: 'rgba(239,146,77,0.95)',
    itemShadow: '0 4px 10px rgba(0,0,0,0.25)'
  }
},

glassmorphicRedCard: {
  name: 'Red Card',
  styles: {
    backgroundColor: '#c13c28',
    textColor: '#ececec',
    iconColor: '#ffffff',
    itemBackground: 'rgba(193,60,40,0.9)',
    itemBorder: '1px solid rgba(0,0,0,0.2)',
    itemHoverBackground: 'rgba(203,70,50,0.95)',
    itemShadow: '0 4px 10px rgba(0,0,0,0.25)'
  }
},

glassmorphicNavyCard: {
  name: 'Navy Card',
  styles: {
    backgroundColor: '#093a5d',
    textColor: '#ececec',
    iconColor: '#ffffff',
    itemBackground: 'rgba(9,58,93,0.9)',
    itemBorder: '1px solid rgba(0,0,0,0.2)',
    itemHoverBackground: 'rgba(14,63,98,0.95)',
    itemShadow: '0 4px 10px rgba(0,0,0,0.25)'
  }
},

glassmorphicDarkMode: {
  name: 'Dark Mode',
  styles: {
    backgroundColor: '#060606',
    textColor: '#ececec',
    iconColor: '#ffffff',
    itemBackground: 'rgba(30,30,30,0.8)',
    itemBorder: '1px solid rgba(80,80,80,0.3)',
    itemHoverBackground: 'rgba(40,40,40,0.9)',
    itemShadow: '0 4px 15px rgba(0,0,0,0.3)'
  }
},
// Mixed themes based on the card colors
glassmorphicInverseOrange: {
  name: 'Inverse Orange',
  styles: {
    backgroundColor: '#060606',
    textColor: '#ececec',
    iconColor: '#e98843',
    itemBackground: 'rgba(20,20,20,0.8)',
    itemBorder: '1px solid rgba(233,136,67,0.4)',
    itemHoverBackground: 'rgba(30,30,30,0.9)',
    itemShadow: '0 4px 12px rgba(233,136,67,0.3)'
  }
},

glassmorphicBlueRed: {
  name: 'Blue Red Fusion',
  styles: {
    backgroundColor: '#093a5d',
    textColor: '#ececec',
    iconColor: '#c13c28',
    itemBackground: 'rgba(9,58,93,0.7)',
    itemBorder: '1px solid rgba(193,60,40,0.5)',
    itemHoverBackground: 'rgba(15,65,100,0.85)',
    itemShadow: '0 4px 12px rgba(193,60,40,0.25)'
  }
},

glassmorphicRedOrangeGradient: {
  name: 'Red Orange Gradient',
  styles: {
    backgroundColor: '#c13c28',
    textColor: '#ffffff',
    iconColor: '#e98843',
    itemBackground: 'linear-gradient(135deg, rgba(193,60,40,0.8), rgba(233,136,67,0.8))',
    itemBorder: '1px solid rgba(255,255,255,0.2)',
    itemHoverBackground: 'linear-gradient(135deg, rgba(213,80,60,0.9), rgba(243,156,87,0.9))',
    itemShadow: '0 4px 15px rgba(0,0,0,0.25)'
  }
},

glassmorphicDarkContrast: {
  name: 'Dark Contrast',
  styles: {
    backgroundColor: '#060606',
    textColor: '#ececec',
    iconColor: '#c13c28',
    itemBackground: 'rgba(15,15,15,0.8)',
    itemBorder: '2px solid rgba(9,58,93,0.5)',
    itemHoverBackground: 'rgba(25,25,25,0.9)',
    itemShadow: '0 4px 15px rgba(233,136,67,0.2)'
  }
},
// Light gray panel with blue text theme (reversed)
glassmorphicPanelLightReversed: {
  name: 'Panel Light Reversed',
  styles: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    textColor: '#445566',
    iconColor: '#3366aa',
    itemBackground: '#e5e7eb',
    itemBorder: '1px solid rgba(200,205,215,0.5)',
    itemHoverBackground: '#f3f4f6',
    itemShadow: '0 2px 6px rgba(0,0,0,0.08)'
  }
},

// A slightly darker variant (reversed)
glassmorphicPanelMediumReversed: {
  name: 'Panel Medium Reversed',
  styles: {
    backgroundColor: 'rgba(249,250,251,0.7)',
    textColor: '#334155',
    iconColor: '#3366aa',
    itemBackground: '#d1d5db',
    itemBorder: '1px solid rgba(180,185,195,0.5)',
    itemHoverBackground: '#e5e7eb',
    itemShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }
}

  


};

export const defaultTheme = 'modern';