// export const sidebarMockData = {
//   brandName: 'Flash',
//   brandSubtitle: null,
//   menuItems: [
//     {
//       name: 'Home',
//       href: '#home',
//       icon: '🏠',
//     },
//     {
//       name: 'About',
//       href: '#about',
//       icon: '👤',
//     },
//     {
//       name: 'Portfolio',
//       href: '#portfolio',
//       icon: '💼',
//     },
//     {
//       name: 'Blog',
//       href: '#blog',
//       icon: '📝',
//     },
//     {
//       name: 'Contact',
//       href: '#contact',
//       icon: '✉️',
//     },
//   ],
//   showNewsletter: true,
//   newsletterTitle: 'Subscribe for newsletter',
//   showFooter: true,
//   footerText: 'Copyright ©2026 All rights reserved | This template is made with by',
// };

// export const portfolioMockData = {
//   brandName: 'Portfolio',
//   brandSubtitle: 'Portfolio Agency',
//   menuItems: [
//     {
//       name: 'Home',
//       href: '#home',
//       icon: '🏠',
//     },
//     {
//       name: 'About',
//       href: '#about',
//       icon: '👤',
//     },
//     {
//       name: 'Works',
//       href: '#works',
//       icon: '💼',
//     },
//     {
//       name: 'Blog',
//       href: '#blog',
//       icon: '📝',
//     },
//     {
//       name: 'Gallery',
//       href: '#gallery',
//       icon: '🖼️',
//     },
//     {
//       name: 'Services',
//       href: '#services',
//       icon: '⚙️',
//     },
//     {
//       name: 'Contacts',
//       href: '#contacts',
//       icon: '✉️',
//     },
//   ],
//   showNewsletter: true,
//   newsletterTitle: 'Subscribe for newsletter',
//   showFooter: true,
//   footerText: 'Copyright ©2026 All rights reserved | This template is made with by',
// };



export const sidebarMockData = {
  brandName: 'Flash',
  brandSubtitle: null,
  categories: [
    {
      title: 'BASICS',
      items: [
        {
          name: 'Probability Basics',
          href: '#basics',
          icon: '📊',
        },
        {
          name: 'Formulas',
          href: '#formulas',
          icon: '∑',
          children: [
            { name: 'Addition Rule', href: '#addition' },
            { name: 'Multiplication Rule', href: '#multiplication' },
            { name: 'Bayes Theorem', href: '#bayes' },
          ],
        },
        {
          name: 'Definitions',
          href: '#definitions',
          icon: '📖',
        },
        {
          name: 'Axioms',
          href: '#axioms',
          icon: '⚡',
        },
      ],
    },
    {
      title: 'DISTRIBUTIONS',
      items: [
        {
          name: 'Normal',
          href: '#normal',
          icon: '📈',
        },
        {
          name: 'Binomial',
          href: '#binomial',
          icon: '🎲',
        },
        {
          name: 'Poisson',
          href: '#poisson',
          icon: '⏱️',
        },
        {
          name: 'Exponential',
          href: '#exponential',
          icon: '📉',
        },
      ],
    },
    {
      title: 'RANDOM VARIABLES',
      items: [
        {
          name: 'Expected Value',
          href: '#expected',
          icon: 'E',
        },
        {
          name: 'Variance',
          href: '#variance',
          icon: 'σ²',
        },
        {
          name: 'Covariance',
          href: '#covariance',
          icon: 'Cov',
        },
      ],
    },
  ],
  showNewsletter: true,
  newsletterTitle: 'Subscribe for newsletter',
  showFooter: true,
  footerText: 'Copyright ©2026 All rights reserved | This template is made with by',
};

export const portfolioMockData = {
  brandName: 'Portfolio',
  brandSubtitle: 'Portfolio Agency',
  categories: [
    {
      title: 'MAIN',
      items: [
        {
          name: 'Home',
          href: '#home',
          icon: '🏠',
        },
        {
          name: 'About',
          href: '#about',
          icon: '👤',
        },
        {
          name: 'Works',
          href: '#works',
          icon: '💼',
          children: [
            { name: 'Web Design', href: '#web-design' },
            { name: 'Mobile Apps', href: '#mobile' },
            { name: 'Branding', href: '#branding' },
          ],
        },
      ],
    },
    {
      title: 'CONTENT',
      items: [
        {
          name: 'Blog',
          href: '#blog',
          icon: '📝',
        },
        {
          name: 'Gallery',
          href: '#gallery',
          icon: '🖼️',
        },
      ],
    },
    {
      title: 'SERVICES',
      items: [
        {
          name: 'Services',
          href: '#services',
          icon: '⚙️',
        },
        {
          name: 'Contacts',
          href: '#contacts',
          icon: '✉️',
        },
      ],
    },
  ],
  showNewsletter: true,
  newsletterTitle: 'Subscribe for newsletter',
  showFooter: true,
  footerText: 'Copyright ©2026 All rights reserved | This template is made with by',
};