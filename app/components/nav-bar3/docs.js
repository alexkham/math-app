/**
 * MyNavbar3 Component Documentation
 * ==================================
 * 
 * A fully-featured, self-contained navigation component with megamenu support,
 * theming, nested accordions, optional icons, and hidden scrollbar.
 * 
 * @component
 * @example
 * // Basic usage with defaults
 * import MyNavbar3 from './MyNavbar3';
 * <MyNavbar3 />
 * 
 * @example
 * // With custom theme
 * <MyNavbar3 themeName="coolBlueGray" />
 * 
 * @example
 * // With custom menu and no search
 * <MyNavbar3 
 *   menuStructure={customMenu}
 *   themeName="dark"
 *   searchComponent={null}
 * />
 */

/**
 * @typedef {Object} Props
 * @property {Array<MenuItem>} [menuStructure=mainMenuStructure] - Menu structure array. Defaults to mainMenuStructure from mainMenu.js
 * @property {string} [themeName='white'] - Theme name. Available: 'white', 'dark', 'lighterDark', 'mediumGray', 'coolBlueGray'
 * @property {React.ReactNode} [searchComponent=<SearchBar2 width="200px" />] - Custom search component. Pass null to hide search
 */

/**
 * @typedef {Object} MenuItem
 * Menu item can be either a simple link or a megamenu
 * 
 * @property {string} id - Unique identifier for the menu item
 * @property {'link'|'megamenu'} type - Type of menu item
 * @property {string} label - Display text for the menu item
 * @property {string} href - Link URL
 * @property {React.ReactNode} [icon] - Optional icon component
 * @property {Array<Column>} [columns] - Required for type='megamenu'. Array of column definitions
 */

/**
 * @typedef {Object} Column
 * Column definition for megamenu
 * 
 * @property {string} [title] - Section title (optional). If omitted, items are displayed as flat list
 * @property {string} [href] - Link URL for section title (optional)
 * @property {React.ReactNode} [icon] - Optional icon for section title
 * @property {Array<ColumnItem>} items - Array of items in this column
 */

/**
 * @typedef {Object} ColumnItem
 * Individual item within a megamenu column
 * 
 * @property {string} label - Display text
 * @property {string} href - Link URL
 * @property {React.ReactNode} [icon] - Optional icon component
 * @property {Array<NestedItem>} [nested] - Optional array of nested items (creates accordion)
 */

/**
 * @typedef {Object} NestedItem
 * Nested item that appears in accordion under parent item
 * 
 * @property {string} label - Display text
 * @property {string} href - Link URL
 * @property {React.ReactNode} [icon] - Optional icon component
 */

/**
 * @typedef {Object} Theme
 * Color theme configuration
 * 
 * @property {string} id - Theme identifier
 * @property {string} name - Theme display name
 * @property {string} panelBackground - Megamenu panel background color
 * @property {string} panelBorder - Panel top border color
 * @property {string} itemBackground - Individual item background color
 * @property {string} itemText - Item text color
 * @property {string} itemHoverBackground - Item background on hover
 * @property {string} itemHoverBorderColor - Left border color on hover
 * @property {string} itemHoverText - Text color on hover
 * @property {string} sectionBorder - Section title border color
 * @property {string} sectionTitleText - Section title text color
 * @property {string} sectionTitleHoverText - Section title text color on hover
 */

/**
 * AVAILABLE THEMES
 * ================
 * 
 * All themes are defined in navThemes.js and imported internally.
 * User only needs to pass the theme name as a string.
 * 
 * 'white' (default)
 * - Clean white background
 * - Best for light backgrounds
 * - Professional appearance
 * 
 * 'coolBlueGray' (recommended)
 * - Cool slate-gray with blue undertones
 * - Cohesive with blue navbar
 * - Modern professional look
 * - Panel: #8a92a6, Items: #b8bfcf
 * 
 * 'dark'
 * - Dark charcoal background
 * - Good for dark mode sites
 * - Panel: #2d3748, Items: #1a202c
 * 
 * 'lighterDark'
 * - Medium-dark theme
 * - Better contrast than 'dark'
 * - Panel: #4a5568, Items: #2d3748
 * 
 * 'mediumGray'
 * - Balanced gray theme
 * - Good contrast
 * - Panel: #8c8c8c, Items: #e8e8e8
 */

/**
 * MENU STRUCTURE
 * ==============
 * 
 * The menuStructure prop accepts an array of menu items. Each item can be:
 * 1. Simple link - Regular navigation link
 * 2. Megamenu - Dropdown with columns and sections
 * 
 * Simple Link Example:
 * --------------------
 * {
 *   id: 'home',
 *   type: 'link',
 *   label: 'Home',
 *   href: '/',
 *   icon: <HomeIcon />  // Optional
 * }
 * 
 * Megamenu Example (Featured Topics style - no section titles):
 * -------------------------------------------------------------
 * {
 *   id: 'topics',
 *   type: 'megamenu',
 *   label: 'Featured Topics',
 *   href: '',
 *   columns: [
 *     {
 *       items: [
 *         { label: 'Algebra', href: '/algebra' },
 *         { label: 'Calculus', href: '/calculus' },
 *         { 
 *           label: 'Geometry', 
 *           href: '/geometry',
 *           nested: [  // Optional nested items
 *             { label: 'Euclidean', href: '/geometry/euclidean' },
 *             { label: 'Non-Euclidean', href: '/geometry/non-euclidean' }
 *           ]
 *         }
 *       ]
 *     }
 *   ]
 * }
 * 
 * Megamenu Example (Resources style - with section titles):
 * ---------------------------------------------------------
 * {
 *   id: 'resources',
 *   type: 'megamenu',
 *   label: 'Resources',
 *   href: '',
 *   columns: [
 *     {
 *       title: 'Visual Tools',           // Section title
 *       href: '/visual-tools',            // Optional link for title
 *       icon: <ToolsIcon />,              // Optional icon
 *       items: [
 *         { label: 'Calculator', href: '/calculator' },
 *         { 
 *           label: 'Matrix Tools',
 *           href: '/matrix',
 *           nested: [  // Nested items create accordion
 *             { label: 'Multiplication', href: '/matrix/mult' },
 *             { label: 'Determinant', href: '/matrix/det' }
 *           ]
 *         }
 *       ]
 *     },
 *     {
 *       title: 'Calculators',
 *       href: '/calculators',
 *       items: [
 *         { label: 'Statistics', href: '/stats' },
 *         { label: 'Probability', href: '/prob' }
 *       ]
 *     }
 *   ]
 * }
 */

/**
 * NESTED ITEMS (ACCORDION)
 * ========================
 * 
 * Any menu item can have nested sub-items that create an accordion.
 * When user clicks the parent item, nested items expand below it.
 * 
 * @example
 * // Item with nested accordion
 * {
 *   label: 'Algebra',
 *   href: '/algebra',
 *   icon: <AlgebraIcon />,  // Optional
 *   nested: [
 *     { 
 *       label: 'Linear Equations', 
 *       href: '/algebra/linear',
 *       icon: <EquationIcon />  // Optional
 *     },
 *     { label: 'Quadratic', href: '/algebra/quadratic' },
 *     { label: 'Polynomials', href: '/algebra/polynomials' }
 *   ]
 * }
 * 
 * Features:
 * - Click parent item to expand/collapse
 * - Chevron icon rotates on expand
 * - Smooth animation
 * - Nested items are indented with left border
 * - Works in both Featured Topics and Resources menus
 */

/**
 * ICONS
 * =====
 * 
 * Icons are optional and can be added to:
 * 1. Top-level menu items
 * 2. Section titles (in Resources-style menus)
 * 3. Individual menu items
 * 4. Nested items
 * 
 * Icons can be:
 * - React components (recommended)
 * - SVG elements
 * - Icon library components (Font Awesome, React Icons, etc.)
 * - Any React node
 * 
 * @example
 * // Using React Icons
 * import { FaHome, FaCalculator, FaCog } from 'react-icons/fa';
 * 
 * const menuWithIcons = [
 *   {
 *     id: 'home',
 *     type: 'link',
 *     label: 'Home',
 *     href: '/',
 *     icon: <FaHome />
 *   },
 *   {
 *     id: 'tools',
 *     type: 'megamenu',
 *     label: 'Tools',
 *     href: '',
 *     icon: <FaCog />,
 *     columns: [
 *       {
 *         title: 'Calculators',
 *         icon: <FaCalculator />,
 *         items: [
 *           { 
 *             label: 'Basic', 
 *             href: '/calc/basic',
 *             icon: <FaCalculator />
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * ];
 * 
 * <MyNavbar3 menuStructure={menuWithIcons} />
 * 
 * @example
 * // Using custom SVG
 * const CustomIcon = () => (
 *   <svg width="16" height="16" viewBox="0 0 16 16">
 *     <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
 *   </svg>
 * );
 * 
 * {
 *   label: 'Special',
 *   href: '/special',
 *   icon: <CustomIcon />
 * }
 * 
 * Note: Icons are automatically aligned and sized. They appear to the left of text.
 */

/**
 * SEARCH COMPONENT
 * ================
 * 
 * The navbar includes a search component by default (SearchBar2).
 * You can customize or remove it.
 * 
 * @example
 * // Use default search (SearchBar2)
 * <MyNavbar3 />
 * 
 * @example
 * // Hide search completely
 * <MyNavbar3 searchComponent={null} />
 * 
 * @example
 * // Use custom search component
 * const CustomSearch = () => (
 *   <input type="search" placeholder="Search..." />
 * );
 * 
 * <MyNavbar3 searchComponent={<CustomSearch />} />
 * 
 * The search component appears at the right end of the navbar.
 */

/**
 * RESPONSIVE BEHAVIOR
 * ===================
 * 
 * Megamenu Panel:
 * - Opens on hover (desktop)
 * - Full-width panel below navbar
 * - Height: calc(100vh - 90px) - maximizes visible content
 * - Scrolls only if content exceeds viewport
 * - Hidden scrollbar (scrollable with mouse wheel/trackpad)
 * - Smooth animations
 * 
 * Navbar:
 * - Fixed position at top
 * - Blue background (#4d4dff)
 * - 60px height
 * - Becomes active on scroll (adds shadow)
 * - Mobile: Shows hamburger menu (implementation pending)
 */

/**
 * FEATURES
 * ========
 * 
 * ✅ Self-contained - No external imports needed on page
 * ✅ 5 built-in color themes
 * ✅ Megamenu with multiple columns
 * ✅ Nested accordion items
 * ✅ Optional icons everywhere
 * ✅ Hidden scrollbar
 * ✅ Smooth animations
 * ✅ Hover-based dropdowns
 * ✅ Keyboard navigation support
 * ✅ ARIA attributes for accessibility
 * ✅ Full-width responsive panels
 * ✅ Customizable search component
 * ✅ "Go Back" button built-in
 */

/**
 * USAGE EXAMPLES
 * ==============
 */

/**
 * Example 1: Minimal usage (all defaults)
 * ----------------------------------------
 * @example
 * import MyNavbar3 from './MyNavbar3';
 * 
 * export default function Page() {
 *   return <MyNavbar3 />;
 * }
 * 
 * This uses:
 * - mainMenuStructure from mainMenu.js
 * - 'white' theme
 * - SearchBar2 component
 */

/**
 * Example 2: Custom theme
 * -----------------------
 * @example
 * <MyNavbar3 themeName="coolBlueGray" />
 */

/**
 * Example 3: Custom menu structure
 * ---------------------------------
 * @example
 * const myMenu = [
 *   {
 *     id: 'home',
 *     type: 'link',
 *     label: 'Home',
 *     href: '/'
 *   },
 *   {
 *     id: 'products',
 *     type: 'megamenu',
 *     label: 'Products',
 *     href: '',
 *     columns: [
 *       {
 *         title: 'Categories',
 *         items: [
 *           { label: 'Electronics', href: '/electronics' },
 *           { label: 'Books', href: '/books' }
 *         ]
 *       }
 *     ]
 *   }
 * ];
 * 
 * <MyNavbar3 menuStructure={myMenu} themeName="dark" />
 */

/**
 * Example 4: With nested items and icons
 * ---------------------------------------
 * @example
 * import { FaBook, FaCalculator, FaFlask } from 'react-icons/fa';
 * 
 * const scienceMenu = [
 *   {
 *     id: 'subjects',
 *     type: 'megamenu',
 *     label: 'Subjects',
 *     href: '',
 *     columns: [
 *       {
 *         title: 'Mathematics',
 *         icon: <FaCalculator />,
 *         items: [
 *           {
 *             label: 'Algebra',
 *             href: '/algebra',
 *             icon: <FaBook />,
 *             nested: [
 *               { label: 'Linear', href: '/algebra/linear' },
 *               { label: 'Abstract', href: '/algebra/abstract' }
 *             ]
 *           },
 *           { label: 'Calculus', href: '/calculus' }
 *         ]
 *       },
 *       {
 *         title: 'Chemistry',
 *         icon: <FaFlask />,
 *         items: [
 *           { label: 'Organic', href: '/organic' },
 *           { label: 'Inorganic', href: '/inorganic' }
 *         ]
 *       }
 *     ]
 *   }
 * ];
 * 
 * <MyNavbar3 menuStructure={scienceMenu} themeName="coolBlueGray" />
 */

/**
 * Example 5: No search component
 * -------------------------------
 * @example
 * <MyNavbar3 
 *   themeName="dark" 
 *   searchComponent={null} 
 * />
 */

/**
 * Example 6: Complete custom setup
 * ---------------------------------
 * @example
 * import MyNavbar3 from './MyNavbar3';
 * import MyCustomSearch from './MyCustomSearch';
 * import { customMenuData } from './menuData';
 * 
 * export default function Layout() {
 *   return (
 *     <MyNavbar3
 *       menuStructure={customMenuData}
 *       themeName="coolBlueGray"
 *       searchComponent={<MyCustomSearch />}
 *     />
 *   );
 * }
 */

/**
 * TROUBLESHOOTING
 * ===============
 * 
 * Issue: Megamenu not appearing
 * Solution: Make sure parent has type: 'megamenu' and columns array is defined
 * 
 * Issue: Icons not showing
 * Solution: Ensure icon is a React element, e.g., <Icon /> not Icon
 * 
 * Issue: Nested items not expanding
 * Solution: Check that nested items are in 'nested' array property
 * 
 * Issue: Theme not applying
 * Solution: Use theme NAME as string, not theme object. E.g., themeName="dark"
 * 
 * Issue: Search component not showing
 * Solution: SearchBar2 must be in same directory. Check import path.
 * 
 * Issue: Menu data not loading
 * Solution: Check mainMenu.js exports mainMenuStructure correctly
 */

/**
 * FILE DEPENDENCIES
 * =================
 * 
 * Required files:
 * - MyNavbar3.jsx (this component)
 * - navThemes.js (theme definitions)
 * - mainMenu.js (default menu structure, must export mainMenuStructure)
 * - SearchBar2.jsx (default search component)
 * 
 * All imports are internal - user doesn't need to import anything except MyNavbar3
 */