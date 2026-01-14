// // // // // /**
// // // // //  * LandingPage Component
// // // // //  * 
// // // // //  * Full landing page wrapper with sidebar, top navigation, hero section, and content cards
// // // // //  * Hero section dynamically calculates statistics from provided data
// // // // //  * 
// // // // //  * @component
// // // // //  * 
// // // // //  * @example
// // // // //  * // In a Next.js page
// // // // //  * export async function getStaticProps() {
// // // // //  *   return {
// // // // //  *     props: {
// // // // //  *       landingPageData: {
// // // // //  *         sidebarData: {...},
// // // // //  *         topNavData: {...},
// // // // //  *         heroData: {...},
// // // // //  *         contentCardsData: {...}
// // // // //  *       }
// // // // //  *     }
// // // // //  *   };
// // // // //  * }
// // // // //  * 
// // // // //  * export default function Page({ landingPageData }) {
// // // // //  *   return <LandingPage {...landingPageData} />;
// // // // //  * }
// // // // //  * 
// // // // //  * ============================================================================
// // // // //  * PROPS
// // // // //  * ============================================================================
// // // // //  * 
// // // // //  * @prop {Object} sidebarData - Data for SidebarToggle component
// // // // //  *   - brandName {string} - Site/brand name
// // // // //  *   - brandSubtitle {string} - Optional subtitle
// // // // //  *   - categories {Array} - Navigation categories with items
// // // // //  *   - showNewsletter {boolean} - Show newsletter signup
// // // // //  *   - newsletterTitle {string} - Newsletter section title
// // // // //  *   - showFooter {boolean} - Show footer text
// // // // //  *   - footerText {string} - Footer content
// // // // //  * 
// // // // //  * @prop {Object} topNavData - Data for TopNavigation component
// // // // //  *   - cards {Array} - Navigation cards
// // // // //  *   - method {string} - Display method ('miniCards', 'bar', etc.)
// // // // //  *   - sticky {boolean} - Make navigation sticky
// // // // //  * 
// // // // //  * @prop {Object} heroData - Hero section configuration
// // // // //  *   - title {string} - Main hero title
// // // // //  *   - subtitle {string} - Hero subtitle
// // // // //  *   - description {string} - Hero description text
// // // // //  *   - showStats {boolean} - Display calculated statistics (default: true)
// // // // //  *   - customStats {Array} - Optional custom stats to display
// // // // //  *     Each stat: { label: string, value: number|string, icon: string }
// // // // //  * 
// // // // //  * @prop {Object} contentCardsData - Data for CompactStaticCards component
// // // // //  *   - cards {Array} - Content cards
// // // // //  *   - theme {string} - Visual theme
// // // // //  *   - layout {string} - 'grid' or 'list'
// // // // //  *   - sectionTitle {string} - Section heading
// // // // //  * 
// // // // //  * @prop {string} sidebarTheme - Sidebar theme name (default: 'azure')
// // // // //  * @prop {string} backgroundColor - Page background color (default: '#f0f2f5')
// // // // //  */

// // // // // 'use client';

// // // // // import { useMemo } from 'react';
// // // // // import SidebarToggle from '../side-bar/SideBarExpandable';
// // // // // import TopNavigation from '../top-navigation/TopNavigation';
// // // // // import CompactStaticCards from '../../cards/static-cards/CompactStaticCards';

// // // // // export default function LandingPage({
// // // // //   sidebarData,
// // // // //   topNavData,
// // // // //   heroData,
// // // // //   contentCardsData,
// // // // //   sidebarTheme = 'azure',
// // // // //   backgroundColor = '#f0f2f5'
// // // // // }) {
  
// // // // //   // Dynamically calculate statistics from data
// // // // //   const calculatedStats = useMemo(() => {
// // // // //     const stats = [];

// // // // //     // Total Topics from sidebar
// // // // //     if (sidebarData?.categories) {
// // // // //       const totalTopics = sidebarData.categories.reduce((acc, category) => {
// // // // //         return acc + (category.items?.length || 0);
// // // // //       }, 0);
// // // // //       stats.push({
// // // // //         label: 'Total Topics',
// // // // //         value: totalTopics,
// // // // //         icon: '📚'
// // // // //       });
// // // // //     }

// // // // //     // Total Categories from sidebar
// // // // //     if (sidebarData?.categories) {
// // // // //       stats.push({
// // // // //         label: 'Categories',
// // // // //         value: sidebarData.categories.length,
// // // // //         icon: '📂'
// // // // //       });
// // // // //     }

// // // // //     // Quick Access Items from top nav
// // // // //     if (topNavData?.cards) {
// // // // //       const quickAccessCount = topNavData.cards.filter(card => card.title !== null).length;
// // // // //       stats.push({
// // // // //         label: 'Quick Access',
// // // // //         value: quickAccessCount,
// // // // //         icon: '⚡'
// // // // //       });
// // // // //     }

// // // // //     // Content Sections from cards
// // // // //     if (contentCardsData?.cards) {
// // // // //       stats.push({
// // // // //         label: 'Content Sections',
// // // // //         value: contentCardsData.cards.length,
// // // // //         icon: '📄'
// // // // //       });
// // // // //     }

// // // // //     // Nested items count (from sidebar children)
// // // // //     if (sidebarData?.categories) {
// // // // //       const nestedCount = sidebarData.categories.reduce((acc, category) => {
// // // // //         return acc + (category.items || []).reduce((itemAcc, item) => {
// // // // //           return itemAcc + (item.children?.length || 0);
// // // // //         }, 0);
// // // // //       }, 0);
      
// // // // //       if (nestedCount > 0) {
// // // // //         stats.push({
// // // // //           label: 'Subtopics',
// // // // //           value: nestedCount,
// // // // //           icon: '🔗'
// // // // //         });
// // // // //       }
// // // // //     }

// // // // //     return stats;
// // // // //   }, [sidebarData, topNavData, contentCardsData]);

// // // // //   // Use custom stats if provided, otherwise use calculated stats
// // // // //   const displayStats = heroData?.customStats || calculatedStats;
// // // // //   const showStats = heroData?.showStats !== false; // default to true

// // // // //   const styles = {
// // // // //     pageWrapper: {
// // // // //       display: 'flex',
// // // // //       minHeight: '100vh',
// // // // //       width: '100%',
// // // // //       minWidth: '300px',
// // // // //       fontFamily: 'Arial, sans-serif',
// // // // //       backgroundColor: backgroundColor
// // // // //     },
// // // // //     mainContent: {
// // // // //       flex: 1,
// // // // //       padding: '0px',
// // // // //       marginLeft: '30px',
// // // // //       transition: 'margin-left 0.3s ease',
// // // // //       minWidth: 0
// // // // //     },
// // // // //     heroSection: {
// // // // //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // // //       padding: '80px 32px',
// // // // //       color: 'white',
// // // // //       marginBottom: '60px'
// // // // //     },
// // // // //     heroInner: {
// // // // //       maxWidth: '1400px',
// // // // //       margin: '0 auto'
// // // // //     },
// // // // //     heroTitle: {
// // // // //       fontSize: '3.5rem',
// // // // //       fontWeight: '800',
// // // // //       marginBottom: '16px',
// // // // //       lineHeight: '1.1',
// // // // //       letterSpacing: '-0.02em'
// // // // //     },
// // // // //     heroSubtitle: {
// // // // //       fontSize: '1.5rem',
// // // // //       fontWeight: '600',
// // // // //       marginBottom: '12px',
// // // // //       opacity: 0.95
// // // // //     },
// // // // //     heroDescription: {
// // // // //       fontSize: '1.1rem',
// // // // //       lineHeight: '1.6',
// // // // //       marginBottom: '48px',
// // // // //       maxWidth: '800px',
// // // // //       opacity: 0.9
// // // // //     },
// // // // //     statsGrid: {
// // // // //       display: 'grid',
// // // // //       gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
// // // // //       gap: '24px',
// // // // //       marginTop: '48px'
// // // // //     },
// // // // //     statCard: {
// // // // //       background: 'rgba(255, 255, 255, 0.15)',
// // // // //       backdropFilter: 'blur(10px)',
// // // // //       padding: '24px',
// // // // //       borderRadius: '12px',
// // // // //       border: '1px solid rgba(255, 255, 255, 0.2)',
// // // // //       textAlign: 'center',
// // // // //       transition: 'all 0.3s ease'
// // // // //     },
// // // // //     statCardHover: {
// // // // //       background: 'rgba(255, 255, 255, 0.25)',
// // // // //       transform: 'translateY(-4px)',
// // // // //       boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
// // // // //     },
// // // // //     statIcon: {
// // // // //       fontSize: '2.5rem',
// // // // //       marginBottom: '12px',
// // // // //       display: 'block'
// // // // //     },
// // // // //     statValue: {
// // // // //       fontSize: '2.5rem',
// // // // //       fontWeight: '700',
// // // // //       marginBottom: '4px',
// // // // //       lineHeight: '1'
// // // // //     },
// // // // //     statLabel: {
// // // // //       fontSize: '0.95rem',
// // // // //       opacity: 0.9,
// // // // //       fontWeight: '500',
// // // // //       textTransform: 'uppercase',
// // // // //       letterSpacing: '0.05em'
// // // // //     },
// // // // //     contentWrapper: {
// // // // //       marginBottom: '60px'
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.pageWrapper}>
// // // // //       <SidebarToggle 
// // // // //         data={sidebarData} 
// // // // //         theme={sidebarTheme}
// // // // //       />
      
// // // // //       <main style={styles.mainContent}>
// // // // //         {/* Top Navigation */}
// // // // //         {topNavData && (
// // // // //           <TopNavigation 
// // // // //             cards={topNavData.cards}
// // // // //             method={topNavData.method}
// // // // //             sticky={topNavData.sticky}
// // // // //             containerBackground={topNavData.containerBackground}
// // // // //           />
// // // // //         )}

// // // // //         {/* Hero Section with Dynamic Stats */}
// // // // //         {heroData && (
// // // // //           <section style={styles.heroSection}>
// // // // //             <div style={styles.heroInner}>
// // // // //               <h1 style={styles.heroTitle}>
// // // // //                 {heroData.title || 'Welcome to Your Learning Hub'}
// // // // //               </h1>
              
// // // // //               {heroData.subtitle && (
// // // // //                 <h2 style={styles.heroSubtitle}>
// // // // //                   {heroData.subtitle}
// // // // //                 </h2>
// // // // //               )}
              
// // // // //               {heroData.description && (
// // // // //                 <p style={styles.heroDescription}>
// // // // //                   {heroData.description}
// // // // //                 </p>
// // // // //               )}

// // // // //               {/* Dynamic Statistics Grid */}
// // // // //               {showStats && displayStats.length > 0 && (
// // // // //                 <div style={styles.statsGrid}>
// // // // //                   {displayStats.map((stat, index) => (
// // // // //                     <StatCard key={index} stat={stat} styles={styles} />
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </section>
// // // // //         )}

// // // // //         {/* Main Content Cards */}
// // // // //         {contentCardsData && (
// // // // //           <div style={styles.contentWrapper}>
// // // // //             <CompactStaticCards 
// // // // //               cards={contentCardsData.cards}
// // // // //               theme={contentCardsData.theme}
// // // // //               layout={contentCardsData.layout}
// // // // //               sectionTitle={contentCardsData.sectionTitle}
// // // // //               backgroundColor={contentCardsData.backgroundColor}
// // // // //             />
// // // // //           </div>
// // // // //         )}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // Stat Card Component with Hover Effect
// // // // // function StatCard({ stat, styles }) {
// // // // //   const [isHovered, setIsHovered] = React.useState(false);

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         ...styles.statCard,
// // // // //         ...(isHovered ? styles.statCardHover : {})
// // // // //       }}
// // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // //     >
// // // // //       {stat.icon && (
// // // // //         <span style={styles.statIcon}>{stat.icon}</span>
// // // // //       )}
// // // // //       <div style={styles.statValue}>{stat.value}</div>
// // // // //       <div style={styles.statLabel}>{stat.label}</div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // Fix: Import React for useState
// // // // // import React from 'react';



















// // // // /**
// // // //  * LandingPage Component
// // // //  * 
// // // //  * Full landing page wrapper with sidebar, top navigation, hero section, and content cards
// // // //  * Hero section dynamically calculates statistics from provided data
// // // //  * 
// // // //  * @component
// // // //  * 
// // // //  * @example
// // // //  * // In a Next.js page
// // // //  * export async function getStaticProps() {
// // // //  *   return {
// // // //  *     props: {
// // // //  *       landingPageData: {
// // // //  *         pageTitle: 'My Math Page',
// // // //  *         breadcrumbUrl: '/math/algebra',
// // // //  *         sidebarData: {...},
// // // //  *         topNavData: {...},
// // // //  *         heroData: {...},
// // // //  *         contentCardsData: {...}
// // // //  *       }
// // // //  *     }
// // // //  *   };
// // // //  * }
// // // //  * 
// // // //  * export default function Page({ landingPageData }) {
// // // //  *   return <LandingPage {...landingPageData} />;
// // // //  * }
// // // //  * 
// // // //  * ============================================================================
// // // //  * PROPS
// // // //  * ============================================================================
// // // //  * 
// // // //  * @prop {string} pageTitle - Page title (displays above breadcrumb)
// // // //  * @prop {string} breadcrumbUrl - Current page URL for breadcrumb. If not provided, breadcrumb won't show.
// // // //  * 
// // // //  * @prop {Object} sidebarData - Data for SidebarToggle component
// // // //  *   - brandName {string} - Site/brand name
// // // //  *   - brandSubtitle {string} - Optional subtitle
// // // //  *   - categories {Array} - Navigation categories with items
// // // //  *   - showNewsletter {boolean} - Show newsletter signup
// // // //  *   - newsletterTitle {string} - Newsletter section title
// // // //  *   - showFooter {boolean} - Show footer text
// // // //  *   - footerText {string} - Footer content
// // // //  * 
// // // //  * @prop {Object} topNavData - Data for TopNavigation component
// // // //  *   - cards {Array} - Navigation cards
// // // //  *   - method {string} - Display method ('miniCards', 'bar', etc.)
// // // //  *   - sticky {boolean} - Make navigation sticky
// // // //  * 
// // // //  * @prop {Object} heroData - Hero section configuration
// // // //  *   - title {string} - Main hero title
// // // //  *   - subtitle {string} - Hero subtitle
// // // //  *   - description {string} - Hero description text
// // // //  *   - showStats {boolean} - Display calculated statistics (default: true)
// // // //  *   - customStats {Array} - Optional custom stats to display
// // // //  *     Each stat: { label: string, value: number|string, icon: string }
// // // //  * 
// // // //  * @prop {Object} contentCardsData - Data for CompactStaticCards component
// // // //  *   - cards {Array} - Content cards
// // // //  *   - theme {string} - Visual theme
// // // //  *   - layout {string} - 'grid' or 'list'
// // // //  *   - sectionTitle {string} - Section heading
// // // //  * 
// // // //  * @prop {string} sidebarTheme - Sidebar theme name (default: 'azure')
// // // //  * @prop {string} backgroundColor - Page background color (default: '#f0f2f5')
// // // //  * @prop {boolean} showOperaSidebar - Show right-side OperaSidebar (default: true)
// // // //  * @prop {boolean} showBreadcrumb - Show breadcrumb navigation (default: true)
// // // //  */

// // // // 'use client';

// // // // import { useMemo } from 'react';
// // // // import SidebarToggle from '../side-bar/SideBarExpandable';
// // // // import TopNavigation from '../top-navigation/TopNavigation';
// // // // import CompactStaticCards from '../../cards/static-cards/CompactStaticCards';
// // // // import OperaSidebar from '../../nav-bar/OperaSidebar';
// // // // import Breadcrumb from '../../breadcrumb/Breadcrumb';

// // // // export default function LandingPage({
// // // //   pageTitle,
// // // //   breadcrumbUrl,
// // // //   sidebarData,
// // // //   topNavData,
// // // //   heroData,
// // // //   contentCardsData,
// // // //   sidebarTheme = 'azure',
// // // //   backgroundColor = '#f0f2f5',
// // // //   showOperaSidebar = true
// // // // }) {
  
// // // //   // Dynamically calculate statistics from data
// // // //   const calculatedStats = useMemo(() => {
// // // //     const stats = [];

// // // //     // Total Topics from sidebar
// // // //     if (sidebarData?.categories) {
// // // //       const totalTopics = sidebarData.categories.reduce((acc, category) => {
// // // //         return acc + (category.items?.length || 0);
// // // //       }, 0);
// // // //       stats.push({
// // // //         label: 'Total Topics',
// // // //         value: totalTopics,
// // // //         icon: '📚'
// // // //       });
// // // //     }

// // // //     // Total Categories from sidebar
// // // //     if (sidebarData?.categories) {
// // // //       stats.push({
// // // //         label: 'Categories',
// // // //         value: sidebarData.categories.length,
// // // //         icon: '📂'
// // // //       });
// // // //     }

// // // //     // Quick Access Items from top nav
// // // //     if (topNavData?.cards) {
// // // //       const quickAccessCount = topNavData.cards.filter(card => card.title !== null).length;
// // // //       stats.push({
// // // //         label: 'Quick Access',
// // // //         value: quickAccessCount,
// // // //         icon: '⚡'
// // // //       });
// // // //     }

// // // //     // Content Sections from cards
// // // //     if (contentCardsData?.cards) {
// // // //       stats.push({
// // // //         label: 'Content Sections',
// // // //         value: contentCardsData.cards.length,
// // // //         icon: '📄'
// // // //       });
// // // //     }

// // // //     // Nested items count (from sidebar children)
// // // //     if (sidebarData?.categories) {
// // // //       const nestedCount = sidebarData.categories.reduce((acc, category) => {
// // // //         return acc + (category.items || []).reduce((itemAcc, item) => {
// // // //           return itemAcc + (item.children?.length || 0);
// // // //         }, 0);
// // // //       }, 0);
      
// // // //       if (nestedCount > 0) {
// // // //         stats.push({
// // // //           label: 'Subtopics',
// // // //           value: nestedCount,
// // // //           icon: '🔗'
// // // //         });
// // // //       }
// // // //     }

// // // //     return stats;
// // // //   }, [sidebarData, topNavData, contentCardsData]);

// // // //   // Use custom stats if provided, otherwise use calculated stats
// // // //   const displayStats = heroData?.customStats || calculatedStats;
// // // //   const showStats = heroData?.showStats !== false; // default to true

// // // //   const styles = {
// // // //     pageWrapper: {
// // // //       display: 'flex',
// // // //       minHeight: '100vh',
// // // //       width: '100%',
// // // //       minWidth: '300px',
// // // //       fontFamily: 'Arial, sans-serif',
// // // //       backgroundColor: backgroundColor,
// // // //       position: 'relative'
// // // //     },
// // // //     mainContent: {
// // // //       flex: 1,
// // // //       padding: '0px',
// // // //       marginLeft: '30px',
// // // //       transition: 'margin-left 0.3s ease',
// // // //       minWidth: 0,
// // // //       marginTop:'30px',
     
// // // //     },
// // // //     pageHeader: {
// // // //       padding: '20px 32px 0 32px',
// // // //       maxWidth: '1400px',
// // // //       margin: '0 auto',
// // // //       width: '100%'
// // // //     },
// // // //     pageTitle: {
// // // //       fontSize: '2rem',
// // // //       marginTop: '-10px',
// // // //       marginBottom: '20px',
// // // //       color: '#222',
// // // //       fontWeight: '700',
// // // //       textAlign:'center',
// // // //     },
// // // //     heroSection: {
// // // //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //       padding: '80px 32px',
// // // //       color: 'white',
// // // //       marginBottom: '60px',
// // // //       width:'95%'
// // // //     },
// // // //     heroInner: {
// // // //       maxWidth: '1400px',
// // // //       margin: '0 auto'
// // // //     },
// // // //     heroTitle: {
// // // //       fontSize: '2.5rem',
// // // //       fontWeight: '800',
// // // //       marginBottom: '16px',
// // // //       lineHeight: '1.1',
// // // //       letterSpacing: '-0.02em'
// // // //     },
// // // //     heroSubtitle: {
// // // //       fontSize: '1.5rem',
// // // //       fontWeight: '600',
// // // //       marginBottom: '12px',
// // // //       opacity: 0.95
// // // //     },
// // // //     heroDescription: {
// // // //       fontSize: '1.1rem',
// // // //       lineHeight: '1.6',
// // // //       marginBottom: '48px',
// // // //       maxWidth: '800px',
// // // //       opacity: 0.9
// // // //     },
// // // //     statsGrid: {
// // // //       display: 'grid',
// // // //       gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
// // // //       gap: '24px',
// // // //       marginTop: '48px'
// // // //     },
// // // //     statCard: {
// // // //       background: 'rgba(255, 255, 255, 0.15)',
// // // //       backdropFilter: 'blur(10px)',
// // // //       padding: '24px',
// // // //       borderRadius: '12px',
// // // //       border: '1px solid rgba(255, 255, 255, 0.2)',
// // // //       textAlign: 'center',
// // // //       transition: 'all 0.3s ease'
// // // //     },
// // // //     statCardHover: {
// // // //       background: 'rgba(255, 255, 255, 0.25)',
// // // //       transform: 'translateY(-4px)',
// // // //       boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
// // // //     },
// // // //     statIcon: {
// // // //       fontSize: '2.5rem',
// // // //       marginBottom: '12px',
// // // //       display: 'block'
// // // //     },
// // // //     statValue: {
// // // //       fontSize: '2.5rem',
// // // //       fontWeight: '700',
// // // //       marginBottom: '4px',
// // // //       lineHeight: '1'
// // // //     },
// // // //     statLabel: {
// // // //       fontSize: '0.95rem',
// // // //       opacity: 0.9,
// // // //       fontWeight: '500',
// // // //       textTransform: 'uppercase',
// // // //       letterSpacing: '0.05em'
// // // //     },
// // // //     contentWrapper: {
// // // //       marginBottom: '60px'
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={styles.pageWrapper}>
// // // //       {/* Right Side OperaSidebar */}
// // // //       {showOperaSidebar && (
// // // //         <OperaSidebar 
// // // //           side='right'
// // // //           sidebarWidth='45px'
// // // //           panelWidth='200px'
// // // //           iconColor='white'
// // // //           panelBackgroundColor='#f2f2f2'
// // // //         />
// // // //       )}

// // // //       {/* Left Sidebar */}
// // // //       <SidebarToggle 
// // // //         data={sidebarData} 
// // // //         theme={sidebarTheme}
// // // //       />
      
// // // //       <main style={styles.mainContent}>
// // // //         {/* Page Header with Breadcrumb and Title */}
// // // //         {(breadcrumbUrl || pageTitle) && (
// // // //           <div style={styles.pageHeader}>
// // // //             {breadcrumbUrl && <Breadcrumb />}
// // // //             {pageTitle && (
// // // //               <h1 style={styles.pageTitle}>{pageTitle}</h1>
// // // //             )}
// // // //           </div>
// // // //         )}

// // // //         {/* Top Navigation */}
// // // //         {topNavData && (
// // // //           <TopNavigation 
// // // //             cards={topNavData.cards}
// // // //             method={topNavData.method}
// // // //             sticky={topNavData.sticky}
// // // //             containerBackground={topNavData.containerBackground}
// // // //           />
// // // //         )}

// // // //         {/* Hero Section with Dynamic Stats */}
// // // //         {heroData && (
// // // //           <section style={styles.heroSection}>
// // // //             <div style={styles.heroInner}>
// // // //               <h1 style={styles.heroTitle}>
// // // //                 {heroData.title || 'Welcome to Your Learning Hub'}
// // // //               </h1>
              
// // // //               {heroData.subtitle && (
// // // //                 <h2 style={styles.heroSubtitle}>
// // // //                   {heroData.subtitle}
// // // //                 </h2>
// // // //               )}
              
// // // //               {heroData.description && (
// // // //                 <p style={styles.heroDescription}>
// // // //                   {heroData.description}
// // // //                 </p>
// // // //               )}

// // // //               {/* Dynamic Statistics Grid */}
// // // //               {showStats && displayStats.length > 0 && (
// // // //                 <div style={styles.statsGrid}>
// // // //                   {displayStats.map((stat, index) => (
// // // //                     <StatCard key={index} stat={stat} styles={styles} />
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {/* Main Content Cards */}
// // // //         {contentCardsData && (
// // // //           <div style={styles.contentWrapper}>
// // // //             <CompactStaticCards 
// // // //               cards={contentCardsData.cards}
// // // //               theme={contentCardsData.theme}
// // // //               layout={contentCardsData.layout}
// // // //               sectionTitle={contentCardsData.sectionTitle}
// // // //               backgroundColor={contentCardsData.backgroundColor}
// // // //             />
// // // //           </div>
// // // //         )}
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }

// // // // // Stat Card Component with Hover Effect
// // // // function StatCard({ stat, styles }) {
// // // //   const [isHovered, setIsHovered] = React.useState(false);

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         ...styles.statCard,
// // // //         ...(isHovered ? styles.statCardHover : {})
// // // //       }}
// // // //       onMouseEnter={() => setIsHovered(true)}
// // // //       onMouseLeave={() => setIsHovered(false)}
// // // //     >
// // // //       {stat.icon && (
// // // //         <span style={styles.statIcon}>{stat.icon}</span>
// // // //       )}
// // // //       <div style={styles.statValue}>{stat.value}</div>
// // // //       <div style={styles.statLabel}>{stat.label}</div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // Fix: Import React for useState
// // // // import React from 'react';



















// // // /**
// // //  * LandingPage Component
// // //  * 
// // //  * Full landing page wrapper with sidebar, top navigation, hero section, and content cards
// // //  * Hero section dynamically calculates statistics from provided data
// // //  * 
// // //  * @component
// // //  * 
// // //  * @example
// // //  * // In a Next.js page
// // //  * export async function getStaticProps() {
// // //  *   return {
// // //  *     props: {
// // //  *       landingPageData: {
// // //  *         pageTitle: 'My Math Page',
// // //  *         breadcrumbUrl: '/math/algebra',
// // //  *         sidebarData: {...},
// // //  *         topNavData: {...},
// // //  *         heroData: {...},
// // //  *         contentCardsData: {...}
// // //  *       }
// // //  *     }
// // //  *   };
// // //  * }
// // //  * 
// // //  * export default function Page({ landingPageData }) {
// // //  *   return <LandingPage {...landingPageData} />;
// // //  * }
// // //  * 
// // //  * ============================================================================
// // //  * PROPS
// // //  * ============================================================================
// // //  * 
// // //  * @prop {string} pageTitle - Page title (displays above breadcrumb)
// // //  * @prop {string} breadcrumbUrl - Current page URL for breadcrumb. If not provided, breadcrumb won't show.
// // //  * 
// // //  * @prop {Object} sidebarData - Data for SidebarToggle component
// // //  *   - brandName {string} - Site/brand name
// // //  *   - brandSubtitle {string} - Optional subtitle
// // //  *   - categories {Array} - Navigation categories with items
// // //  *   - showNewsletter {boolean} - Show newsletter signup
// // //  *   - newsletterTitle {string} - Newsletter section title
// // //  *   - showFooter {boolean} - Show footer text
// // //  *   - footerText {string} - Footer content
// // //  * 
// // //  * @prop {Object} topNavData - Data for TopNavigation component
// // //  *   - cards {Array} - Navigation cards
// // //  *   - method {string} - Display method ('miniCards', 'bar', etc.)
// // //  *   - sticky {boolean} - Make navigation sticky
// // //  * 
// // //  * @prop {Object} heroData - Hero section configuration
// // //  *   - title {string} - Main hero title
// // //  *   - subtitle {string} - Hero subtitle
// // //  *   - description {string} - Hero description text
// // //  *   - showStats {boolean} - Display calculated statistics (default: true)
// // //  *   - customStats {Array} - Optional custom stats to display
// // //  *     Each stat: { label: string, value: number|string, icon: string }
// // //  * 
// // //  * @prop {Object} contentCardsData - Data for CompactStaticCards component
// // //  *   - cards {Array} - Content cards
// // //  *   - theme {string} - Visual theme
// // //  *   - layout {string} - 'grid' or 'list'
// // //  *   - sectionTitle {string} - Section heading
// // //  * 
// // //  * @prop {string} sidebarTheme - Sidebar theme name (default: 'azure')
// // //  * @prop {string} backgroundColor - Page background color (default: '#f0f2f5')
// // //  * @prop {boolean} showOperaSidebar - Show right-side OperaSidebar (default: true)
// // //  * @prop {boolean} showBreadcrumb - Show breadcrumb navigation (default: true)
// // //  */




// // // 'use client';



// // // // Fix: Import React for useState
// // // import React from 'react';
// // // import { useMemo } from 'react';
// // // import SidebarToggle from '../side-bar/SideBarExpandable';
// // // import TopNavigation from '../top-navigation/TopNavigation';
// // // import CompactStaticCards from '../../cards/static-cards/CompactStaticCards';
// // // import OperaSidebar from '../../nav-bar/OperaSidebar';
// // // import Breadcrumb from '../../breadcrumb/Breadcrumb';

// // // export default function LandingPage({
// // //   pageTitle,
// // //   breadcrumbUrl,
// // //   sidebarData,
// // //   topNavData,
// // //   heroData,
// // //   contentCardsData,
// // //   sidebarTheme = 'azure',
// // //   backgroundColor = '#f0f2f5',
// // //   showOperaSidebar = true
// // // }) {
  
// // //   // Dynamically calculate statistics from data
// // //   const calculatedStats = useMemo(() => {
// // //     const stats = [];

// // //     // Total Topics from sidebar
// // //     if (sidebarData?.categories) {
// // //       const totalTopics = sidebarData.categories.reduce((acc, category) => {
// // //         return acc + (category.items?.length || 0);
// // //       }, 0);
// // //       stats.push({
// // //         label: 'Total Topics',
// // //         value: totalTopics,
// // //         icon: '📚'
// // //       });
// // //     }

// // //     // Total Categories from sidebar
// // //     if (sidebarData?.categories) {
// // //       stats.push({
// // //         label: 'Categories',
// // //         value: sidebarData.categories.length,
// // //         icon: '📂'
// // //       });
// // //     }

// // //     // Quick Access Items from top nav
// // //     if (topNavData?.cards) {
// // //       const quickAccessCount = topNavData.cards.filter(card => card.title !== null).length;
// // //       stats.push({
// // //         label: 'Quick Access',
// // //         value: quickAccessCount,
// // //         icon: '⚡'
// // //       });
// // //     }

// // //     // Content Sections from cards
// // //     if (contentCardsData?.cards) {
// // //       stats.push({
// // //         label: 'Content Sections',
// // //         value: contentCardsData.cards.length,
// // //         icon: '📄'
// // //       });
// // //     }

// // //     // Nested items count (from sidebar children)
// // //     if (sidebarData?.categories) {
// // //       const nestedCount = sidebarData.categories.reduce((acc, category) => {
// // //         return acc + (category.items || []).reduce((itemAcc, item) => {
// // //           return itemAcc + (item.children?.length || 0);
// // //         }, 0);
// // //       }, 0);
      
// // //       if (nestedCount > 0) {
// // //         stats.push({
// // //           label: 'Subtopics',
// // //           value: nestedCount,
// // //           icon: '🔗'
// // //         });
// // //       }
// // //     }

// // //     return stats;
// // //   }, [sidebarData, topNavData, contentCardsData]);

// // //   // Use custom stats if provided, otherwise use calculated stats
// // //   const displayStats = heroData?.customStats || calculatedStats;
// // //   const showStats = heroData?.showStats !== false; // default to true

// // //   const styles = {
// // //     pageWrapper: {
// // //       display: 'flex',
// // //       minHeight: '100vh',
// // //       width: '100%',
// // //       minWidth: '300px',
// // //       fontFamily: 'Arial, sans-serif',
// // //       backgroundColor: backgroundColor,
// // //       position: 'relative'
// // //     },
// // //     mainContent: {
// // //       flex: 1,
// // //       padding: '0px',
// // //       marginLeft: '30px',
// // //       transition: 'margin-left 0.3s ease',
// // //       minWidth: 0,
// // //       marginTop:'30px',
     
// // //     },
// // //     pageHeader: {
// // //       padding: '20px 32px 0 32px',
// // //       maxWidth: '1400px',
// // //       margin: '0 auto',
// // //       width: '100%'
// // //     },
// // //     pageTitle: {
// // //       fontSize: '2rem',
// // //       marginTop: '-10px',
// // //       marginBottom: '20px',
// // //       color: '#222',
// // //       fontWeight: '700',
// // //       textAlign:'center',
// // //     },
// // //     contentContainer: {
// // //       maxWidth: '1600px',
// // //       margin: '0 auto',
// // //       width: '100%'
// // //     },
// // //     heroSection: {
// // //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // //       padding: '80px 32px',
// // //       color: 'white',
// // //       marginBottom: '60px',
// // //       width:'95%'
// // //     },
// // //     heroInner: {
// // //       maxWidth: '1400px',
// // //       margin: '0 auto'
// // //     },
// // //     heroTitle: {
// // //       fontSize: '2.5rem',
// // //       fontWeight: '800',
// // //       marginBottom: '16px',
// // //       lineHeight: '1.1',
// // //       letterSpacing: '-0.02em'
// // //     },
// // //     heroSubtitle: {
// // //       fontSize: '1.5rem',
// // //       fontWeight: '600',
// // //       marginBottom: '12px',
// // //       opacity: 0.95
// // //     },
// // //     heroDescription: {
// // //       fontSize: '1.1rem',
// // //       lineHeight: '1.6',
// // //       marginBottom: '48px',
// // //       maxWidth: '800px',
// // //       opacity: 0.9
// // //     },
// // //     statsGrid: {
// // //       display: 'grid',
// // //       gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
// // //       gap: '24px',
// // //       marginTop: '48px'
// // //     },
// // //     statCard: {
// // //       background: 'rgba(255, 255, 255, 0.15)',
// // //       backdropFilter: 'blur(10px)',
// // //       padding: '24px',
// // //       borderRadius: '12px',
// // //       border: '1px solid rgba(255, 255, 255, 0.2)',
// // //       textAlign: 'center',
// // //       transition: 'all 0.3s ease'
// // //     },
// // //     statCardHover: {
// // //       background: 'rgba(255, 255, 255, 0.25)',
// // //       transform: 'translateY(-4px)',
// // //       boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
// // //     },
// // //     statIcon: {
// // //       fontSize: '2.5rem',
// // //       marginBottom: '12px',
// // //       display: 'block'
// // //     },
// // //     statValue: {
// // //       fontSize: '2.5rem',
// // //       fontWeight: '700',
// // //       marginBottom: '4px',
// // //       lineHeight: '1'
// // //     },
// // //     statLabel: {
// // //       fontSize: '0.95rem',
// // //       opacity: 0.9,
// // //       fontWeight: '500',
// // //       textTransform: 'uppercase',
// // //       letterSpacing: '0.05em'
// // //     },
// // //     contentWrapper: {
// // //       marginBottom: '60px'
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.pageWrapper}>
// // //       {/* Right Side OperaSidebar */}
// // //       {showOperaSidebar && (
// // //         <OperaSidebar 
// // //           side='right'
// // //           sidebarWidth='45px'
// // //           panelWidth='200px'
// // //           iconColor='white'
// // //           panelBackgroundColor='#f2f2f2'
// // //         />
// // //       )}

// // //       {/* Left Sidebar */}
// // //       <SidebarToggle 
// // //         data={sidebarData} 
// // //         theme={sidebarTheme}
// // //       />
      
// // //       <main style={styles.mainContent}>
// // //         {/* Page Header with Breadcrumb and Title */}
// // //         {(breadcrumbUrl || pageTitle) && (
// // //           <div style={styles.pageHeader}>
// // //             {breadcrumbUrl && <Breadcrumb />}
// // //             {pageTitle && (
// // //               <h1 style={styles.pageTitle}>{pageTitle}</h1>
// // //             )}
// // //           </div>
// // //         )}
         


// // //           {topNavData && (
// // //             <TopNavigation 
// // //               cards={topNavData.cards}
// // //               method={topNavData.method}
// // //               sticky={topNavData.sticky}
// // //               containerBackground={topNavData.containerBackground}
// // //             />
// // //           )}
// // //         {/* Content Container for TopNav and Hero */}
// // //         <div style={styles.contentContainer}>
// // //           {/* Top Navigation */}
// // //           {/* {topNavData && (
// // //             <TopNavigation 
// // //               cards={topNavData.cards}
// // //               method={topNavData.method}
// // //               sticky={topNavData.sticky}
// // //               containerBackground={topNavData.containerBackground}
// // //             />
// // //           )} */}

// // //           {/* Hero Section with Dynamic Stats */}
// // //           {heroData && (
// // //             <section style={styles.heroSection}>
// // //               <div style={styles.heroInner}>
// // //                 <h1 style={styles.heroTitle}>
// // //                   {heroData.title || 'Welcome to Your Learning Hub'}
// // //                 </h1>
                
// // //                 {heroData.subtitle && (
// // //                   <h2 style={styles.heroSubtitle}>
// // //                     {heroData.subtitle}
// // //                   </h2>
// // //                 )}
                
// // //                 {heroData.description && (
// // //                   <p style={styles.heroDescription}>
// // //                     {heroData.description}
// // //                   </p>
// // //                 )}

// // //                 {/* Dynamic Statistics Grid */}
// // //                 {showStats && displayStats.length > 0 && (
// // //                   <div style={styles.statsGrid}>
// // //                     {displayStats.map((stat, index) => (
// // //                       <StatCard key={index} stat={stat} styles={styles} />
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </section>
// // //           )}
// // //         </div>

// // //         {/* Main Content Cards */}
// // //         {contentCardsData && (
// // //           <div style={styles.contentWrapper}>
// // //             <CompactStaticCards 
// // //               cards={contentCardsData.cards}
// // //               theme={contentCardsData.theme}
// // //               layout={contentCardsData.layout}
// // //               sectionTitle={contentCardsData.sectionTitle}
// // //               backgroundColor={contentCardsData.backgroundColor}
// // //             />
// // //           </div>
// // //         )}
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // // Stat Card Component with Hover Effect
// // // function StatCard({ stat, styles }) {
// // //   const [isHovered, setIsHovered] = React.useState(false);

// // //   return (
// // //     <div
// // //       style={{
// // //         ...styles.statCard,
// // //         ...(isHovered ? styles.statCardHover : {})
// // //       }}
// // //       onMouseEnter={() => setIsHovered(true)}
// // //       onMouseLeave={() => setIsHovered(false)}
// // //     >
// // //       {stat.icon && (
// // //         <span style={styles.statIcon}>{stat.icon}</span>
// // //       )}
// // //       <div style={styles.statValue}>{stat.value}</div>
// // //       <div style={styles.statLabel}>{stat.label}</div>
// // //     </div>
// // //   );
// // // }



// // /**
// //  * LandingPage Component
// //  * 
// //  * Full landing page wrapper with sidebar, top navigation, hero section, and content cards
// //  * Hero section dynamically calculates statistics from provided data
// //  * 
// //  * @component
// //  * 
// //  * @example
// //  * // In a Next.js page
// //  * export async function getStaticProps() {
// //  *   return {
// //  *     props: {
// //  *       landingPageData: {
// //  *         pageTitle: 'My Math Page',
// //  *         breadcrumbUrl: '/math/algebra',
// //  *         sidebarData: {...},
// //  *         topNavData: {...},
// //  *         heroData: {...},
// //  *         contentCardsData: {...}
// //  *       }
// //  *     }
// //  *   };
// //  * }
// //  * 
// //  * export default function Page({ landingPageData }) {
// //  *   return <LandingPage {...landingPageData} />;
// //  * }
// //  * 
// //  * ============================================================================
// //  * PROPS
// //  * ============================================================================
// //  * 
// //  * @prop {string} pageTitle - Page title (displays above breadcrumb)
// //  * @prop {string} breadcrumbUrl - Current page URL for breadcrumb. If not provided, breadcrumb won't show.
// //  * 
// //  * @prop {Object} sidebarData - Data for SidebarToggle component
// //  *   - brandName {string} - Site/brand name
// //  *   - brandSubtitle {string} - Optional subtitle
// //  *   - categories {Array} - Navigation categories with items
// //  *   - showNewsletter {boolean} - Show newsletter signup
// //  *   - newsletterTitle {string} - Newsletter section title
// //  *   - showFooter {boolean} - Show footer text
// //  *   - footerText {string} - Footer content
// //  * 
// //  * @prop {Object} topNavData - Data for TopNavigation component
// //  *   - cards {Array} - Navigation cards
// //  *   - method {string} - Display method ('miniCards', 'bar', etc.)
// //  *   - sticky {boolean} - Make navigation sticky
// //  * 
// //  * @prop {Object} heroData - Hero section configuration
// //  *   - title {string} - Main hero title
// //  *   - subtitle {string} - Hero subtitle
// //  *   - description {string} - Hero description text
// //  *   - showStats {boolean} - Display calculated statistics (default: true)
// //  *   - customStats {Array} - Optional custom stats to display
// //  *     Each stat: { label: string, value: number|string, icon: string }
// //  * 
// //  * @prop {Object} contentCardsData - Data for CompactStaticCards component
// //  *   - cards {Array} - Content cards
// //  *   - theme {string} - Visual theme
// //  *   - layout {string} - 'grid' or 'list'
// //  *   - sectionTitle {string} - Section heading
// //  * 
// //  * @prop {string} sidebarTheme - Sidebar theme name (default: 'azure')
// //  * @prop {string} backgroundColor - Page background color (default: '#f0f2f5')
// //  * @prop {boolean} showOperaSidebar - Show right-side OperaSidebar (default: true)
// //  * @prop {boolean} showBreadcrumb - Show breadcrumb navigation (default: true)
// //  */

// // 'use client';



// // // Fix: Import React for useState
// // import React from 'react';
// // import { useMemo } from 'react';
// // import SidebarToggle from '../side-bar/SideBarExpandable';
// // import TopNavigation from '../top-navigation/TopNavigation';
// // import CompactStaticCards from '../../cards/static-cards/CompactStaticCards';
// // import OperaSidebar from '../../nav-bar/OperaSidebar';
// // import Breadcrumb from '../../breadcrumb/Breadcrumb';

// // export default function LandingPage({
// //   pageTitle,
// //   breadcrumbUrl,
// //   sidebarData,
// //   topNavData,
// //   heroData,
// //   contentCardsData,
// //   sidebarTheme = 'azure',
// //   backgroundColor = '#f0f2f5',
// //   showOperaSidebar = true
// // }) {
  
// //   // Dynamically calculate statistics from data
// //   const calculatedStats = useMemo(() => {
// //     const stats = [];

// //     // Total Topics from sidebar
// //     if (sidebarData?.categories) {
// //       const totalTopics = sidebarData.categories.reduce((acc, category) => {
// //         return acc + (category.items?.length || 0);
// //       }, 0);
// //       stats.push({
// //         label: 'Total Topics',
// //         value: totalTopics,
// //         icon: '📚'
// //       });
// //     }

// //     // Total Categories from sidebar
// //     if (sidebarData?.categories) {
// //       stats.push({
// //         label: 'Categories',
// //         value: sidebarData.categories.length,
// //         icon: '📂'
// //       });
// //     }

// //     // Quick Access Items from top nav
// //     if (topNavData?.cards) {
// //       const quickAccessCount = topNavData.cards.filter(card => card.title !== null).length;
// //       stats.push({
// //         label: 'Quick Access',
// //         value: quickAccessCount,
// //         icon: '⚡'
// //       });
// //     }

// //     // Content Sections from cards
// //     if (contentCardsData?.cards) {
// //       stats.push({
// //         label: 'Content Sections',
// //         value: contentCardsData.cards.length,
// //         icon: '📄'
// //       });
// //     }

// //     // Nested items count (from sidebar children)
// //     if (sidebarData?.categories) {
// //       const nestedCount = sidebarData.categories.reduce((acc, category) => {
// //         return acc + (category.items || []).reduce((itemAcc, item) => {
// //           return itemAcc + (item.children?.length || 0);
// //         }, 0);
// //       }, 0);
      
// //       if (nestedCount > 0) {
// //         stats.push({
// //           label: 'Subtopics',
// //           value: nestedCount,
// //           icon: '🔗'
// //         });
// //       }
// //     }

// //     return stats;
// //   }, [sidebarData, topNavData, contentCardsData]);

// //   // Use custom stats if provided, otherwise use calculated stats
// //   const displayStats = heroData?.customStats || calculatedStats;
// //   const showStats = heroData?.showStats !== false; // default to true

// //   const styles = {
// //     pageWrapper: {
// //       display: 'flex',
// //       minHeight: '100vh',
// //       width: '100%',
// //       minWidth: '300px',
// //       fontFamily: 'Arial, sans-serif',
// //       backgroundColor: backgroundColor,
// //       position: 'relative'
// //     },
// //     mainContent: {
// //       flex: 1,
// //       padding: '0px',
// //       marginLeft: '30px',
// //       transition: 'margin-left 0.3s ease',
// //       minWidth: 0,
// //       marginTop:'30px',
     
// //     },
// //     pageHeader: {
// //       padding: '20px 32px 0 32px',
// //       maxWidth: '1400px',
// //       margin: '0 auto',
// //       width: '100%'
// //     },
// //     pageTitle: {
// //       fontSize: '2rem',
// //       marginTop: '-10px',
// //       marginBottom: '20px',
// //       color: '#222',
// //       fontWeight: '700',
// //       textAlign:'center',
// //     },
// //     contentContainer: {
// //       maxWidth: '1600px',
// //       margin: '0 auto',
// //       width: '100%'
// //     },
// //     heroSection: {
// //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //       padding: '20px 32px',
// //       color: 'white',
// //       marginBottom: '20px',
// //       width:'95%',
// //     },
// //     heroInner: {
// //       maxWidth: '1400px',
// //       margin: '0 auto'
// //     },
// //     heroTitle: {
// //       fontSize: '2.5rem',
// //       fontWeight: '800',
// //       marginBottom: '16px',
// //       lineHeight: '1.1',
// //       letterSpacing: '-0.02em'
// //     },
// //     heroSubtitle: {
// //       fontSize: '1.5rem',
// //       fontWeight: '600',
// //       marginBottom: '12px',
// //       opacity: 0.95
// //     },
// //     heroDescription: {
// //       fontSize: '1.1rem',
// //       lineHeight: '1.6',
// //       marginBottom: '48px',
// //       maxWidth: '800px',
// //       opacity: 0.9
// //     },
// //     statsGrid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
// //       gap: '24px',
// //       marginTop: '48px'
// //     },
// //     statCard: {
// //       background: 'rgba(255, 255, 255, 0.15)',
// //       backdropFilter: 'blur(10px)',
// //       padding: '14px',
// //       borderRadius: '12px',
// //       border: '1px solid rgba(255, 255, 255, 0.2)',
// //       textAlign: 'center',
// //       transition: 'all 0.3s ease'
// //     },
// //     statCardHover: {
// //       background: 'rgba(255, 255, 255, 0.25)',
// //       transform: 'translateY(-4px)',
// //       boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
// //     },
// //     statIcon: {
// //       fontSize: '1.5rem',
// //       marginBottom: '10px',
// //       display: 'block'
// //     },
// //     statValue: {
// //       fontSize: '1.5rem',
// //       fontWeight: '700',
// //       marginBottom: '4px',
// //       lineHeight: '1'
// //     },
// //     statLabel: {
// //       fontSize: '0.95rem',
// //       opacity: 0.9,
// //       fontWeight: '500',
// //       textTransform: 'uppercase',
// //       letterSpacing: '0.05em'
// //     },
// //     contentWrapper: {
// //       marginBottom: '60px'
// //     }
// //   };

// //   return (
// //     <div style={styles.pageWrapper}>
// //       {/* Right Side OperaSidebar */}
// //       {showOperaSidebar && (
// //         <OperaSidebar 
// //           side='right'
// //           sidebarWidth='45px'
// //           panelWidth='200px'
// //           iconColor='white'
// //           panelBackgroundColor='#f2f2f2'
// //         />
// //       )}

// //       {/* Left Sidebar */}
// //       <SidebarToggle 
// //         data={sidebarData} 
// //         theme={sidebarTheme}
// //       />
      
// //       <main style={styles.mainContent}>
// //         {/* Page Header with Breadcrumb and Title */}
// //         {(breadcrumbUrl || pageTitle) && (
// //           <div style={styles.pageHeader}>
// //             {breadcrumbUrl && <Breadcrumb />}
// //             {pageTitle && (
// //               <h1 style={styles.pageTitle}>{pageTitle}</h1>
// //             )}
// //           </div>
// //         )}

// //         {/* Content Container for TopNav and Hero */}
// //         <div style={styles.contentContainer}>
// //           {/* Top Navigation */}
// //           {topNavData && (
// //             <div style={{background: topNavData.containerBackground || 'white', marginBottom: '0',maxWidth:'95%',marginBottom:'10px'}}>
// //               <TopNavigation 
// //                 cards={topNavData.cards}
// //                 method={topNavData.method}
// //                 sticky={topNavData.sticky}
// //                 containerBackground="transparent"
// //               />
// //             </div>
// //           )}

// //           {/* Hero Section with Dynamic Stats */}
// //           {heroData && (
// //             <section style={styles.heroSection}>
// //               <div style={styles.heroInner}>
// //                 {/* <h1 style={styles.heroTitle}>
// //                   {heroData.title || 'Welcome to Your Learning Hub'}
// //                 </h1> */}
                
// //                 {/* {heroData.subtitle && (
// //                   <h2 style={styles.heroSubtitle}>
// //                     {heroData.subtitle}
// //                   </h2>
// //                 )} */}
                
// //                 {/* {heroData.description && (
// //                   <p style={styles.heroDescription}>
// //                     {heroData.description}
// //                   </p>
// //                 )} */}

// //                 {/* Dynamic Statistics Grid */}
// //                 {showStats && displayStats.length > 0 && (
// //                   <div style={styles.statsGrid}>
// //                     {displayStats.map((stat, index) => (
// //                       <StatCard key={index} stat={stat} styles={styles} />
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             </section>
// //           )}
// //         </div>

// //         {/* Main Content Cards */}
// //         {contentCardsData && (
// //           <div style={styles.contentWrapper}>
// //             <CompactStaticCards 
// //               cards={contentCardsData.cards}
// //               theme={contentCardsData.theme}
// //               layout={contentCardsData.layout}
// //               sectionTitle={contentCardsData.sectionTitle}
// //               backgroundColor={contentCardsData.backgroundColor}
// //             />
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   );
// // }

// // // Stat Card Component with Hover Effect
// // function StatCard({ stat, styles }) {
// //   const [isHovered, setIsHovered] = React.useState(false);

// //   return (
// //     <div
// //       style={{
// //         ...styles.statCard,
// //         ...(isHovered ? styles.statCardHover : {})
// //       }}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       {stat.icon && (
// //         <span style={styles.statIcon}>{stat.icon}</span>
// //       )}
// //       <div style={styles.statValue}>{stat.value}</div>
// //       <div style={styles.statLabel}>{stat.label}</div>
// //     </div>
// //   );
// // }



// // /**
// //  * LandingPage Component
// //  * 
// //  * Full landing page wrapper with sidebar, top navigation, hero section, and content cards
// //  * Hero section dynamically calculates statistics from provided data
// //  * 
// //  * @component
// //  * 
// //  * @example
// //  * // In a Next.js page
// //  * export async function getStaticProps() {
// //  *   return {
// //  *     props: {
// //  *       landingPageData: {
// //  *         pageTitle: 'My Math Page',
// //  *         breadcrumbUrl: '/math/algebra',
// //  *         sidebarData: {...},
// //  *         topNavData: {...},
// //  *         heroData: {...},
// //  *         contentCardsData: {...}
// //  *       }
// //  *     }
// //  *   };
// //  * }
// //  * 
// //  * export default function Page({ landingPageData }) {
// //  *   return <LandingPage {...landingPageData} />;
// //  * }
// //  * 
// //  * ============================================================================
// //  * PROPS
// //  * ============================================================================
// //  * 
// //  * @prop {string} pageTitle - Page title (displays above breadcrumb)
// //  * @prop {string} breadcrumbUrl - Current page URL for breadcrumb. If not provided, breadcrumb won't show.
// //  * 
// //  * @prop {Object} sidebarData - Data for SidebarToggle component
// //  *   - brandName {string} - Site/brand name
// //  *   - brandSubtitle {string} - Optional subtitle
// //  *   - categories {Array} - Navigation categories with items
// //  *   - showNewsletter {boolean} - Show newsletter signup
// //  *   - newsletterTitle {string} - Newsletter section title
// //  *   - showFooter {boolean} - Show footer text
// //  *   - footerText {string} - Footer content
// //  * 
// //  * @prop {Object} topNavData - Data for TopNavigation component
// //  *   - cards {Array} - Navigation cards
// //  *   - method {string} - Display method ('miniCards', 'bar', etc.)
// //  *   - sticky {boolean} - Make navigation sticky
// //  * 
// //  * @prop {Object} heroData - Hero section configuration
// //  *   - title {string} - Main hero title
// //  *   - subtitle {string} - Hero subtitle
// //  *   - description {string} - Hero description text
// //  *   - showStats {boolean} - Display calculated statistics (default: true)
// //  *   - customStats {Array} - Optional custom stats to display
// //  *     Each stat: { label: string, value: number|string, icon: string }
// //  * 
// //  * @prop {Object} contentCardsData - Data for CompactStaticCards component
// //  *   - cards {Array} - Content cards
// //  *   - theme {string} - Visual theme
// //  *   - layout {string} - 'grid' or 'list'
// //  *   - sectionTitle {string} - Section heading
// //  * 
// //  * @prop {string} sidebarTheme - Sidebar theme name (default: 'azure')
// //  * @prop {string} backgroundColor - Page background color (default: '#f0f2f5')
// //  * @prop {boolean} showOperaSidebar - Show right-side OperaSidebar (default: true)
// //  * @prop {boolean} showBreadcrumb - Show breadcrumb navigation (default: true)
// //  */

// // 'use client';

// // import React from 'react';
// // import { useMemo } from 'react';
// // import SidebarToggle from '../side-bar/SideBarExpandable';
// // import TopNavigation from '../top-navigation/TopNavigation';
// // import CompactStaticCards from '../../cards/static-cards/CompactStaticCards';
// // import OperaSidebar from '../../nav-bar/OperaSidebar';
// // import Breadcrumb from '../../breadcrumb/Breadcrumb';

// // export default function LandingPage({
// //   pageTitle,
// //   breadcrumbUrl,
// //   sidebarData,
// //   topNavData,
// //   heroData,
// //   contentCardsData,
// //   sidebarTheme = 'azure',
// //   backgroundColor = '#f0f2f5',
// //   showOperaSidebar = true
// // }) {
  
// //   // Dynamically calculate statistics from data
// //   const calculatedStats = useMemo(() => {
// //     const stats = [];

// //     // Total Topics from sidebar
// //     if (sidebarData?.categories) {
// //       const totalTopics = sidebarData.categories.reduce((acc, category) => {
// //         return acc + (category.items?.length || 0);
// //       }, 0);
// //       stats.push({
// //         label: 'Total Topics',
// //         value: totalTopics,
// //         icon: '📚'
// //       });
// //     }

// //     // Total Categories from sidebar
// //     if (sidebarData?.categories) {
// //       stats.push({
// //         label: 'Categories',
// //         value: sidebarData.categories.length,
// //         icon: '📂'
// //       });
// //     }

// //     // Quick Access Items from top nav
// //     if (topNavData?.cards) {
// //       const quickAccessCount = topNavData.cards.filter(card => card.title !== null).length;
// //       stats.push({
// //         label: 'Quick Access',
// //         value: quickAccessCount,
// //         icon: '⚡'
// //       });
// //     }

// //     // Content Sections from cards
// //     if (contentCardsData?.cards) {
// //       stats.push({
// //         label: 'Content Sections',
// //         value: contentCardsData.cards.length,
// //         icon: '📄'
// //       });
// //     }

// //     // Nested items count (from sidebar children)
// //     if (sidebarData?.categories) {
// //       const nestedCount = sidebarData.categories.reduce((acc, category) => {
// //         return acc + (category.items || []).reduce((itemAcc, item) => {
// //           return itemAcc + (item.children?.length || 0);
// //         }, 0);
// //       }, 0);
      
// //       if (nestedCount > 0) {
// //         stats.push({
// //           label: 'Subtopics',
// //           value: nestedCount,
// //           icon: '🔗'
// //         });
// //       }
// //     }

// //     return stats;
// //   }, [sidebarData, topNavData, contentCardsData]);

// //   // Use custom stats if provided, otherwise use calculated stats
// //   const displayStats = heroData?.customStats || calculatedStats;
// //   const showStats = heroData?.showStats !== false; // default to true

// //   const styles = {
// //     pageWrapper: {
// //       display: 'flex',
// //       minHeight: '100vh',
// //       width: '100%',
// //       minWidth: '300px',
// //       fontFamily: 'Arial, sans-serif',
// //       backgroundColor: backgroundColor,
// //       position: 'relative'
// //     },
// //     mainContent: {
// //       flex: 1,
// //       padding: '0px',
// //       marginLeft: '30px',
// //       transition: 'margin-left 0.3s ease',
// //       minWidth: 0,
// //       marginTop:'30px',
     
// //     },
// //     pageHeader: {
// //       padding: '20px 32px 0 32px',
// //       maxWidth: '1400px',
// //       margin: '0 auto',
// //       width: '100%'
// //     },
// //     pageTitle: {
// //       fontSize: '2rem',
// //       marginTop: '-10px',
// //       marginBottom: '20px',
// //       color: '#222',
// //       fontWeight: '700',
// //       textAlign:'center',
// //     },
// //     contentContainer: {
// //       maxWidth: '1600px',
// //       margin: '0 auto',
// //       width: '100%'
// //     },
// //     heroSection: {
// //       // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //       padding: '10px 32px',
      
// //       color: 'black',
// //       marginBottom: '10px',
// //       width:'95%',
// //       border:'1px gray solid',
// //     },
// //     heroInner: {
// //       maxWidth: '1400px',
// //       margin: '0 auto'
// //     },
// //     heroTitle: {
// //       fontSize: '2.5rem',
// //       fontWeight: '800',
// //       marginBottom: '16px',
// //       lineHeight: '1.1',
// //       letterSpacing: '-0.02em'
// //     },
// //     heroSubtitle: {
// //       fontSize: '1.5rem',
// //       fontWeight: '600',
// //       marginBottom: '12px',
// //       opacity: 0.95
// //     },
// //     heroDescription: {
// //       fontSize: '1.1rem',
// //       lineHeight: '1.6',
// //       marginBottom: '48px',
// //       maxWidth: '800px',
// //       opacity: 0.9
// //     },
// //     statsContainer: {
// //       display: 'flex',
// //       flexWrap: 'wrap',
// //       gap: '24px',
// //       marginTop: '24px',
// //       alignItems: 'center'
// //     },
// //     statItem: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '8px',
// //       fontSize: '1.1rem',
// //       fontWeight: '600',
// //       opacity: 0.95
// //     },
// //     statIcon: {
// //       fontSize: '1.3rem'
// //     },
// //     statValue: {
// //       fontWeight: '700',
// //       fontSize: '1.2rem'
// //     },


// // contentWrapper: {
// //   width: '100%',
// //   maxWidth: '1600px',
// //   margin: '0 auto 60px auto'
// // }
// //   };

// //   return (
// //     <div style={styles.pageWrapper}>
// //       {/* Right Side OperaSidebar */}
// //       {showOperaSidebar && (
// //         <OperaSidebar 
// //           side='right'
// //           sidebarWidth='45px'
// //           panelWidth='200px'
// //           iconColor='white'
// //           panelBackgroundColor='#f2f2f2'
// //         />
// //       )}

// //       {/* Left Sidebar */}
// //       <SidebarToggle 
// //         data={sidebarData} 
// //         theme={sidebarTheme}
// //       />
      
// //       <main style={styles.mainContent}>
// //         {/* Page Header with Breadcrumb and Title */}
// //         {(breadcrumbUrl || pageTitle) && (
// //           <div style={styles.pageHeader}>
// //             {breadcrumbUrl && <Breadcrumb />}
// //             {pageTitle && (
// //               <h1 style={styles.pageTitle}>{pageTitle}</h1>
// //             )}
// //           </div>
// //         )}

// //         {/* Content Container for TopNav and Hero */}
// //         <div style={styles.contentContainer}>
// //           {/* Top Navigation */}
// //           {topNavData && (
// //             <div style={{background: topNavData.containerBackground || 'white', marginBottom: '0',maxWidth:'95%',marginBottom:'10px'}}>
// //               <TopNavigation 
// //                 cards={topNavData.cards}
// //                 method={topNavData.method}
// //                 sticky={topNavData.sticky}
// //                 containerBackground="transparent"
// //               />
// //             </div>
// //           )}

// //           {/* Hero Section with Flat Stats */}
// //           {heroData && (
// //             <section style={styles.heroSection}>
// //               <div style={styles.heroInner}>
// //                 {/* Dynamic Statistics - Flat Display */}
// //                 {showStats && displayStats.length > 0 && (
// //                   <div style={styles.statsContainer}>
// //                     {displayStats.map((stat, index) => (
// //                       <div key={index} style={styles.statItem}>
// //                         {stat.icon && (
// //                           <span style={styles.statIcon}>{stat.icon}</span>
// //                         )}
// //                         <span style={styles.statValue}>{stat.value}</span>
// //                         <span>{stat.label}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             </section>
// //           )}
// //         </div>

// //         {/* Main Content Cards */}
// //         {contentCardsData && (
// //           <div style={styles.contentWrapper}>
// //             <CompactStaticCards 
// //               cards={contentCardsData.cards}
// //               theme={contentCardsData.theme}
// //               layout={contentCardsData.layout}
// //               sectionTitle={contentCardsData.sectionTitle}
// //               backgroundColor={contentCardsData.backgroundColor}
// //             />
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   );
// // }



// /**
//  * LandingPage Component - Refactored with Data Orchestration
//  * 
//  * Full landing page wrapper with sidebar, top navigation, hero section, and content cards
//  * Hero section dynamically calculates statistics from provided data
//  * TopNavigation cards are auto-generated from contentCardsData.cards (single source of truth)
//  * 
//  * @component
//  * 
//  * @example
//  * // In a Next.js page
//  * export async function getStaticProps() {
//  *   return {
//  *     props: {
//  *       landingPageData: {
//  *         pageTitle: 'My Math Page',
//  *         breadcrumbUrl: '/math/algebra',
//  *         sidebarData: {...},
//  *         topNavData: {
//  *           method: 'miniCards',
//  *           sticky: true,
//  *           containerBackground: 'white'
//  *           // NO cards array - auto-generated from contentCardsData!
//  *         },
//  *         heroData: {...},
//  *         contentCardsData: {
//  *           cards: [
//  *             {
//  *               id: 1,
//  *               htmlId: 'topic-id',
//  *               title: 'Topic Name',
//  *               icon: '🎲',
//  *               badge: '120+',  // Optional - displays in top nav
//  *               summary: '...',
//  *               content: '...',
//  *               // ... rest of card data
//  *             }
//  *           ]
//  *         }
//  *       }
//  *     }
//  *   };
//  * }
//  * 
//  * export default function Page({ landingPageData }) {
//  *   return <LandingPage {...landingPageData} />;
//  * }
//  * 
//  * ============================================================================
//  * PROPS
//  * ============================================================================
//  * 
//  * @prop {string} pageTitle - Page title (displays above breadcrumb)
//  * @prop {string} breadcrumbUrl - Current page URL for breadcrumb. If not provided, breadcrumb won't show.
//  * 
//  * @prop {Object} sidebarData - Data for SidebarToggle component
//  *   - brandName {string} - Site/brand name
//  *   - brandSubtitle {string} - Optional subtitle
//  *   - categories {Array} - Navigation categories with items
//  *   - showNewsletter {boolean} - Show newsletter signup
//  *   - newsletterTitle {string} - Newsletter section title
//  *   - showFooter {boolean} - Show footer text
//  *   - footerText {string} - Footer content
//  * 
//  * @prop {Object} topNavData - TopNavigation configuration (NO cards array)
//  *   - method {string} - Display method ('miniCards', 'bar', etc.)
//  *   - sticky {boolean} - Make navigation sticky
//  *   - containerBackground {string} - Background color
//  *   NOTE: cards are auto-generated from contentCardsData.cards
//  * 
//  * @prop {Object} heroData - Hero section configuration
//  *   - title {string} - Main hero title
//  *   - subtitle {string} - Hero subtitle
//  *   - description {string} - Hero description text
//  *   - showStats {boolean} - Display calculated statistics (default: true)
//  *   - customStats {Array} - Optional custom stats to display
//  *     Each stat: { label: string, value: number|string, icon: string }
//  * 
//  * @prop {Object} contentCardsData - Data for CompactStaticCards component (MASTER DATA SOURCE)
//  *   - cards {Array} - Content cards (also used to generate TopNavigation cards)
//  *     Each card should have:
//  *       - id {number} - Unique identifier
//  *       - htmlId {string} - HTML anchor ID
//  *       - title {string} - Card title
//  *       - icon {string} - Icon/emoji
//  *       - badge {string} - Optional badge for top nav display
//  *       - summary {string} - Short summary
//  *       - content {string} - Full content
//  *       - cardWidth, cardHeight, overflowBehavior, link, linkTitle, etc.
//  *   - theme {string} - Visual theme
//  *   - layout {string} - 'grid' or 'list'
//  *   - sectionTitle {string} - Section heading
//  * 
//  * @prop {string} sidebarTheme - Sidebar theme name (default: 'azure')
//  * @prop {string} backgroundColor - Page background color (default: '#f0f2f5')
//  * @prop {boolean} showOperaSidebar - Show right-side OperaSidebar (default: true)
//  * @prop {boolean} showBreadcrumb - Show breadcrumb navigation (default: true)
//  */

// 'use client';

// import React from 'react';
// import { useMemo } from 'react';
// import SidebarToggle from '../side-bar/SideBarExpandable';
// import TopNavigation from '../top-navigation/TopNavigation';
// import CompactStaticCards from '../../cards/static-cards/CompactStaticCards';
// import OperaSidebar from '../../nav-bar/OperaSidebar';
// import Breadcrumb from '../../breadcrumb/Breadcrumb';

// export default function LandingPage({
//   pageTitle,
//   breadcrumbUrl,
//   sidebarData,
//   topNavData,
//   heroData,
//   contentCardsData,
//   sidebarTheme = 'azure',
//   backgroundColor = '#f0f2f5',
//   showOperaSidebar = true
// }) {
  
//   // Auto-generate TopNavigation cards from contentCardsData.cards
//   // This is the orchestration - single source of truth
//   const generatedNavCards = useMemo(() => {
//     if (!contentCardsData?.cards) return [];
    
//     return contentCardsData.cards.map(card => ({
//       id: card.id,
//       htmlId: card.htmlId,
//       title: card.title,
//       icon: card.icon,
//       badge: card.badge || null  // Use badge if provided, otherwise null
//     }));
//   }, [contentCardsData]);

//   // Dynamically calculate statistics from data
//   const calculatedStats = useMemo(() => {
//     const stats = [];

//     // Total Topics from sidebar
//     if (sidebarData?.categories) {
//       const totalTopics = sidebarData.categories.reduce((acc, category) => {
//         return acc + (category.items?.length || 0);
//       }, 0);
//       stats.push({
//         label: 'Total Topics',
//         value: totalTopics,
//         icon: '📚'
//       });
//     }

//     // Total Categories from sidebar
//     if (sidebarData?.categories) {
//       stats.push({
//         label: 'Categories',
//         value: sidebarData.categories.length,
//         icon: '📂'
//       });
//     }

//     // Quick Access Items from generated nav cards
//     if (generatedNavCards.length > 0) {
//       const quickAccessCount = generatedNavCards.filter(card => card.title !== null).length;
//       stats.push({
//         label: 'Quick Access',
//         value: quickAccessCount,
//         icon: '⚡'
//       });
//     }

//     // Content Sections from cards
//     if (contentCardsData?.cards) {
//       stats.push({
//         label: 'Content Sections',
//         value: contentCardsData.cards.length,
//         icon: '📄'
//       });
//     }

//     // Nested items count (from sidebar children)
//     if (sidebarData?.categories) {
//       const nestedCount = sidebarData.categories.reduce((acc, category) => {
//         return acc + (category.items || []).reduce((itemAcc, item) => {
//           return itemAcc + (item.children?.length || 0);
//         }, 0);
//       }, 0);
      
//       if (nestedCount > 0) {
//         stats.push({
//           label: 'Subtopics',
//           value: nestedCount,
//           icon: '🔗'
//         });
//       }
//     }

//     return stats;
//   }, [sidebarData, generatedNavCards, contentCardsData]);

//   // Use custom stats if provided, otherwise use calculated stats
//   const displayStats = heroData?.customStats || calculatedStats;
//   const showStats = heroData?.showStats !== false; // default to true

//   const styles = {
//     pageWrapper: {
//       display: 'flex',
//       minHeight: '100vh',
//       width: '100%',
//       minWidth: '300px',
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: backgroundColor,
//       position: 'relative'
//     },
//     mainContent: {
//       flex: 1,
//       padding: '0px',
//       marginLeft: '30px',
//       transition: 'margin-left 0.3s ease',
//       minWidth: 0,
//       marginTop:'30px',
     
//     },
//     pageHeader: {
//       padding: '20px 32px 0 32px',
//       maxWidth: '1400px',
//       margin: '0 auto',
//       width: '100%'
//     },
//     pageTitle: {
//       fontSize: '2rem',
//       marginTop: '-10px',
//       marginBottom: '20px',
//       color: '#222',
//       fontWeight: '700',
//       textAlign:'center',
//     },
//     contentContainer: {
//       maxWidth: '1600px',
//       margin: '0 auto',
//       width: '100%'
//     },
//     heroSection: {
//       padding: '10px 32px',
//       color: 'black',
//       marginBottom: '10px',
//       width:'95%',
//       border:'1px gray solid',
//     },
//     heroInner: {
//       maxWidth: '1400px',
//       margin: '0 auto'
//     },
//     heroTitle: {
//       fontSize: '2.5rem',
//       fontWeight: '800',
//       marginBottom: '16px',
//       lineHeight: '1.1',
//       letterSpacing: '-0.02em'
//     },
//     heroSubtitle: {
//       fontSize: '1.5rem',
//       fontWeight: '600',
//       marginBottom: '12px',
//       opacity: 0.95
//     },
//     heroDescription: {
//       fontSize: '1.1rem',
//       lineHeight: '1.6',
//       marginBottom: '48px',
//       maxWidth: '800px',
//       opacity: 0.9
//     },
//     statsContainer: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '24px',
//       marginTop: '24px',
//       alignItems: 'center'
//     },
//     statItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px',
//       fontSize: '1.1rem',
//       fontWeight: '600',
//       opacity: 0.95
//     },
//     statIcon: {
//       fontSize: '1.3rem'
//     },
//     statValue: {
//       fontWeight: '700',
//       fontSize: '1.2rem'
//     },
//     contentWrapper: {
//       width: '100%',
//       maxWidth: '1600px',
//       margin: '0 auto 60px auto'
//     }
//   };

//   return (
//     <div style={styles.pageWrapper}>
//       {/* Right Side OperaSidebar */}
//       {showOperaSidebar && (
//         <OperaSidebar 
//           side='right'
//           sidebarWidth='45px'
//           panelWidth='200px'
//           iconColor='white'
//           panelBackgroundColor='#f2f2f2'
//         />
//       )}

//       {/* Left Sidebar */}
//       <SidebarToggle 
//         data={sidebarData} 
//         theme={sidebarTheme}
//       />
      
//       <main style={styles.mainContent}>
//         {/* Page Header with Breadcrumb and Title */}
//         {(breadcrumbUrl || pageTitle) && (
//           <div style={styles.pageHeader}>
//             {breadcrumbUrl && <Breadcrumb />}
//             {pageTitle && (
//               <h1 style={styles.pageTitle}>{pageTitle}</h1>
//             )}
//           </div>
//         )}

//         {/* Content Container for TopNav and Hero */}
//         <div style={styles.contentContainer}>
//           {/* Top Navigation - Using Auto-Generated Cards */}
//           {topNavData && generatedNavCards.length > 0 && (
//             <div style={{
//               background: topNavData.containerBackground || 'white', 
//               marginBottom: '0',
//               maxWidth:'95%',
//               marginBottom:'10px'
//             }}>
//               <TopNavigation 
//                 cards={generatedNavCards}  /* ← Auto-generated from contentCardsData */
//                 method={topNavData.method}
//                 sticky={topNavData.sticky}
//                 containerBackground="transparent"
//               />
//             </div>
//           )}

//           {/* Hero Section with Flat Stats */}
//           {heroData && (
//             <section style={styles.heroSection}>
//               <div style={styles.heroInner}>
//                 {/* Dynamic Statistics - Flat Display */}
//                 {showStats && displayStats.length > 0 && (
//                   <div style={styles.statsContainer}>
//                     {displayStats.map((stat, index) => (
//                       <div key={index} style={styles.statItem}>
//                         {stat.icon && (
//                           <span style={styles.statIcon}>{stat.icon}</span>
//                         )}
//                         <span style={styles.statValue}>{stat.value}</span>
//                         <span>{stat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </section>
//           )}
//         </div>

//         {/* Main Content Cards */}
//         {contentCardsData && (
//           <div style={styles.contentWrapper}>
//             <CompactStaticCards 
//               cards={contentCardsData.cards}
//               theme={contentCardsData.theme}
//               layout={contentCardsData.layout}
//               sectionTitle={contentCardsData.sectionTitle}
//               backgroundColor={contentCardsData.backgroundColor}
//             />
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }



/**
 * LandingPage Component - With Empty Card Support
 * 
 * Full landing page wrapper with sidebar, top navigation, hero section, and content cards
 * Hero section dynamically calculates statistics from provided data
 * TopNavigation cards are auto-generated from contentCardsData.cards (single source of truth)
 * 
 * EMPTY CARD HANDLING:
 * - Cards with title: null are passed to TopNavigation as empty cards
 * - Empty cards are filtered out before passing to CompactStaticCards
 * 
 * @component
 * 
 * @example
 * // Empty card usage
 * const landingPageData = {
 *   contentCardsData: {
 *     cards: [
 *       { id: 1, htmlId: 'topic1', title: 'Topic 1', icon: '🎲', content: '...' },
 *       { id: 2, title: null },  // ← Empty card - shows in TopNav, hidden in content
 *       { id: 3, htmlId: 'topic2', title: 'Topic 2', icon: '📊', content: '...' }
 *     ]
 *   }
 * };
 * 
 * ============================================================================
 * PROPS
 * ============================================================================
 * 
 * @prop {string} pageTitle - Page title (displays above breadcrumb)
 * @prop {string} breadcrumbUrl - Current page URL for breadcrumb. If not provided, breadcrumb won't show.
 * 
 * @prop {Object} sidebarData - Data for SidebarToggle component
 *   - brandName {string} - Site/brand name
 *   - brandSubtitle {string} - Optional subtitle
 *   - categories {Array} - Navigation categories with items
 *   - showNewsletter {boolean} - Show newsletter signup
 *   - newsletterTitle {string} - Newsletter section title
 *   - showFooter {boolean} - Show footer text
 *   - footerText {string} - Footer content
 * 
 * @prop {Object} topNavData - TopNavigation configuration (NO cards array)
 *   - method {string} - Display method ('miniCards', 'bar', etc.)
 *   - sticky {boolean} - Make navigation sticky
 *   - containerBackground {string} - Background color
 *   NOTE: cards are auto-generated from contentCardsData.cards
 * 
 * @prop {Object} heroData - Hero section configuration
 *   - title {string} - Main hero title
 *   - subtitle {string} - Hero subtitle
 *   - description {string} - Hero description text
 *   - showStats {boolean} - Display calculated statistics (default: true)
 *   - customStats {Array} - Optional custom stats to display
 *     Each stat: { label: string, value: number|string, icon: string }
 * 
 * @prop {Object} contentCardsData - Data for CompactStaticCards component (MASTER DATA SOURCE)
 *   - cards {Array} - Content cards (also used to generate TopNavigation cards)
 *     Regular card:
 *       - id {number} - Unique identifier
 *       - htmlId {string} - HTML anchor ID
 *       - title {string} - Card title
 *       - icon {string} - Icon/emoji
 *       - badge {string} - Optional badge for top nav display
 *       - summary {string} - Short summary
 *       - content {string} - Full content
 *       - cardWidth, cardHeight, overflowBehavior, link, linkTitle, etc.
 *     Empty card (for TopNavigation spacing):
 *       - id {number} - Unique identifier
 *       - title {null} - Null indicates empty card (rendered in TopNav, filtered from content)
 *   - theme {string} - Visual theme
 *   - layout {string} - 'grid' or 'list'
 *   - sectionTitle {string} - Section heading
 * 
 * @prop {string} sidebarTheme - Sidebar theme name (default: 'azure')
 * @prop {string} backgroundColor - Page background color (default: '#f0f2f5')
 * @prop {boolean} showOperaSidebar - Show right-side OperaSidebar (default: true)
 * @prop {boolean} showBreadcrumb - Show breadcrumb navigation (default: true)
 */

'use client';

import React from 'react';
import { useMemo } from 'react';
import SidebarToggle from '../side-bar/SideBarExpandable';
import TopNavigation from '../top-navigation/TopNavigation';
import CompactStaticCards from '../../cards/static-cards/CompactStaticCards';
import OperaSidebar from '../../nav-bar/OperaSidebar';
import Breadcrumb from '../../breadcrumb/Breadcrumb';

export default function LandingPage({
  pageTitle,
  breadcrumbUrl,
  sidebarData,
  topNavData,
  heroData,
  contentCardsData,
  sidebarTheme = 'portfolio',
  backgroundColor = '#f0f2f5',
  showOperaSidebar = true
}) {
  
  // Auto-generate TopNavigation cards from contentCardsData.cards
  // Preserves empty cards (title: null) for TopNavigation spacing
  const generatedNavCards = useMemo(() => {
    if (!contentCardsData?.cards) return [];
    
    return contentCardsData.cards.map(card => ({
      id: card.id,
      htmlId: card.htmlId,
      title: card.title,  // Can be null for empty cards
      icon: card.icon,
      badge: card.badge || null
    }));
  }, [contentCardsData]);

  // Filter out empty cards for CompactStaticCards
  // CompactStaticCards doesn't have empty card logic, so we remove them
  const filteredContentCards = useMemo(() => {
    if (!contentCardsData?.cards) return [];
    
    return contentCardsData.cards.filter(card => card.title !== null);
  }, [contentCardsData]);

  // Dynamically calculate statistics from data
  const calculatedStats = useMemo(() => {
    const stats = [];

    // Total Topics from sidebar
    if (sidebarData?.categories) {
      const totalTopics = sidebarData.categories.reduce((acc, category) => {
        return acc + (category.items?.length || 0);
      }, 0);
      stats.push({
        label: 'Total Topics',
        value: totalTopics,
        icon: '📚'
      });
    }

    // Total Categories from sidebar
    if (sidebarData?.categories) {
      stats.push({
        label: 'Categories',
        value: sidebarData.categories.length,
        icon: '📂'
      });
    }

    // Quick Access Items from generated nav cards (excluding empty cards)
    if (generatedNavCards.length > 0) {
      const quickAccessCount = generatedNavCards.filter(card => card.title !== null).length;
      stats.push({
        label: 'Quick Access',
        value: quickAccessCount,
        icon: '⚡'
      });
    }

    // Content Sections from filtered content cards (excluding empty cards)
    if (filteredContentCards.length > 0) {
      stats.push({
        label: 'Content Sections',
        value: filteredContentCards.length,
        icon: '📄'
      });
    }

    // Nested items count (from sidebar children)
    if (sidebarData?.categories) {
      const nestedCount = sidebarData.categories.reduce((acc, category) => {
        return acc + (category.items || []).reduce((itemAcc, item) => {
          return itemAcc + (item.children?.length || 0);
        }, 0);
      }, 0);
      
      if (nestedCount > 0) {
        stats.push({
          label: 'Subtopics',
          value: nestedCount,
          icon: '🔗'
        });
      }
    }

    return stats;
  }, [sidebarData, generatedNavCards, filteredContentCards]);

  // Use custom stats if provided, otherwise use calculated stats
  const displayStats = heroData?.customStats || calculatedStats;
  const showStats = heroData?.showStats !== false; // default to true

  const styles = {
    pageWrapper: {
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      minWidth: '300px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: backgroundColor,
      position: 'relative'
    },
    mainContent: {
      flex: 1,
      padding: '0px',
      marginLeft: '30px',
      transition: 'margin-left 0.3s ease',
      minWidth: 0,
      marginTop:'30px',
     
    },
    pageHeader: {
      padding: '20px 32px 0 32px',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%'
    },
    pageTitle: {
      fontSize: '2rem',
      marginTop: '-10px',
      marginBottom: '20px',
      color: '#222',
      fontWeight: '700',
      textAlign:'center',
    },
    contentContainer: {
      maxWidth: '1600px',
      margin: '0 auto',
      width: '100%'
    },
    heroSection: {
      padding: '10px 32px',
      color: 'black',
      marginBottom: '10px',
      width:'95%',
      border:'1px gray solid',
    },
    heroInner: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '16px',
      lineHeight: '1.1',
      letterSpacing: '-0.02em'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '12px',
      opacity: 0.95
    },
    heroDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '48px',
      maxWidth: '800px',
      opacity: 0.9
    },
    statsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      marginTop: '24px',
      alignItems: 'center'
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      opacity: 0.95
    },
    statIcon: {
      fontSize: '1.3rem'
    },
    statValue: {
      fontWeight: '700',
      fontSize: '1.2rem'
    },
    contentWrapper: {
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto 60px auto'
    }
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Right Side OperaSidebar */}
      {showOperaSidebar && (
        <OperaSidebar 
          side='right'
          sidebarWidth='45px'
          panelWidth='200px'
          iconColor='white'
          panelBackgroundColor='#f2f2f2'
        />
      )}

      {/* Left Sidebar */}
      <SidebarToggle 
        data={sidebarData} 
        theme={sidebarTheme}
      />
      
      <main style={styles.mainContent}>
        {/* Page Header with Breadcrumb and Title */}
        {(breadcrumbUrl || pageTitle) && (
          <div style={styles.pageHeader}>
            {breadcrumbUrl && <Breadcrumb />}
            {pageTitle && (
              <h1 style={styles.pageTitle}>{pageTitle}</h1>
            )}
          </div>
        )}

        {/* Content Container for TopNav and Hero */}
        <div style={styles.contentContainer}>
          {/* Top Navigation - Using Auto-Generated Cards (includes empty cards) */}
          {topNavData && generatedNavCards.length > 0 && (
            <div style={{
              background: topNavData.containerBackground || 'white', 
              marginBottom: '0',
              maxWidth:'95%',
              marginBottom:'10px'
            }}>
              <TopNavigation 
                cards={generatedNavCards}  /* ← Includes empty cards (title: null) */
                method={topNavData.method}
                sticky={topNavData.sticky}
                containerBackground="transparent"
              />
            </div>
          )}

          {/* Hero Section with Flat Stats */}
          {heroData && (
            <section style={styles.heroSection}>
              <div style={styles.heroInner}>
                {/* Dynamic Statistics - Flat Display */}
                {showStats && displayStats.length > 0 && (
                  <div style={styles.statsContainer}>
                    {displayStats.map((stat, index) => (
                      <div key={index} style={styles.statItem}>
                        {stat.icon && (
                          <span style={styles.statIcon}>{stat.icon}</span>
                        )}
                        <span style={styles.statValue}>{stat.value}</span>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Main Content Cards - Empty cards filtered out */}
        {contentCardsData && filteredContentCards.length > 0 && (
          <div style={styles.contentWrapper}>
            <CompactStaticCards 
              cards={filteredContentCards}  /* ← Empty cards removed */
              theme={contentCardsData.theme}
              layout={contentCardsData.layout}
              sectionTitle={contentCardsData.sectionTitle}
              backgroundColor={contentCardsData.backgroundColor}
            />
          </div>
        )}
      </main>
    </div>
  );
}