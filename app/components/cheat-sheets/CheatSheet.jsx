/**
 * =============================================================================
 * CHEATSHEET COMPONENT - COMPREHENSIVE DOCUMENTATION
 * =============================================================================
 * 
 * This component renders educational cheat sheets in three different styles.
 * All formatting is done through data structure - no manual styling needed.
 * 
 * =============================================================================
 * BASIC USAGE
 * =============================================================================
 * 
 * import CheatSheet from './CheatSheet';
 * 
 * <CheatSheet 
 *   type="compact"          // "compact" | "card" | "print"
 *   title="Your Title"
 *   subtitle="Your Subtitle"
 *   data={dataObject}
 *   showControls={false}    // Optional: show print/download buttons
 *   showFilters={false}     // Optional: show search and section filters
 * />
 * 
 * =============================================================================
 * DATA STRUCTURE BY TYPE
 * =============================================================================
 * 
 * COMPACT uses:   data.columns[].sections[].rules[]
 * CARD uses:      data.categories[].items[] and optional data.unitCircle
 * PRINT uses:     data.columns[].sections[].topics[]
 * 
 * =============================================================================
 * 1. RENDERING PLAIN TEXT
 * =============================================================================
 * 
 * Just use a string:
 * 
 * formula: 'y = mx + b'
 * description: 'This is plain text'
 * 
 * Result: Regular black text
 * 
 * =============================================================================
 * 2. RENDERING BOLD TEXT
 * =============================================================================
 * 
 * Wrap text in <strong> tags using JSX:
 * 
 * description: (
 *   <>
 *     This is <strong>bold text</strong> in a sentence
 *   </>
 * )
 * 
 * Result: The wrapped text appears bold
 * 
 * =============================================================================
 * 3. RENDERING COLORED TEXT (BLUE EMPHASIS)
 * =============================================================================
 * 
 * Use <span> with inline style for colored text:
 * 
 * description: (
 *   <>
 *     Characterized by{' '}
 *     <span style={{ fontWeight: 600, color: '#1e40af' }}>mean (μ)</span>
 *     {' '}and{' '}
 *     <span style={{ fontWeight: 600, color: '#1e40af' }}>standard deviation (σ)</span>
 *   </>
 * )
 * 
 * Result: "mean (μ)" and "standard deviation (σ)" appear in bold blue
 * Note: {' '} adds spaces around the colored text
 * 
 * =============================================================================
 * 4. RENDERING FORMULAS (BORDERED BOX WITH BACKGROUND)
 * =============================================================================
 * 
 * Use the 'formula' property:
 * 
 * formula: 'σ² = Σ(x - μ)² / N'
 * 
 * Result: 
 * - Renders in a box with light background
 * - Has a colored left border (blue)
 * - Uses monospace/serif font depending on style
 * - Automatically styled - no extra work needed
 * 
 * =============================================================================
 * 5. RENDERING EXAMPLES (YELLOW BOX)
 * =============================================================================
 * 
 * Use the 'example' property (PRINT STYLE ONLY):
 * 
 * example: (
 *   <>
 *     Data: 2, 4, 6<br />
 *     Mean = (2+4+6)/3 = 4
 *   </>
 * )
 * 
 * Result:
 * - Yellow background (#fef3c7)
 * - Gold left border (#eab308)
 * - "Example:" label automatically added
 * - Use <br /> for line breaks
 * 
 * =============================================================================
 * 6. RENDERING TABLES (PRINT STYLE ONLY)
 * =============================================================================
 * 
 * Use the 'table' property:
 * 
 * table: {
 *   headers: ['Range', '% of Data'],
 *   rows: [
 *     ['μ ± σ', '~68%'],
 *     ['μ ± 2σ', '~95%'],
 *     ['μ ± 3σ', '~99.7%']
 *   ]
 * }
 * 
 * Result:
 * - Blue header row (#1e40af background, white text)
 * - Bordered cells
 * - Responsive width
 * - Automatically formatted
 * 
 * =============================================================================
 * 7. RENDERING LINE BREAKS
 * =============================================================================
 * 
 * Use <br /> tag in JSX:
 * 
 * description: (
 *   <>
 *     Line 1<br />
 *     Line 2<br />
 *     Line 3
 *   </>
 * )
 * 
 * Result: Text appears on separate lines
 * 
 * =============================================================================
 * 8. RENDERING NOTES (SMALL GRAY ITALIC TEXT)
 * =============================================================================
 * 
 * Use the 'note' property:
 * 
 * note: 'This is important information'
 * 
 * Result:
 * - Small font (12px)
 * - Gray color (#64748b)
 * - Italic style
 * - Appears below the formula
 * 
 * =============================================================================
 * 9. RENDERING GREEK LETTERS AND MATH SYMBOLS
 * =============================================================================
 * 
 * Use Unicode characters directly:
 * 
 * formula: 'μ ± σ²'
 * formula: 'θ (theta), π (pi), α (alpha)'
 * formula: '∑, ∫, √, ≠, ≤, ≥, ×, ÷'
 * 
 * Superscript: x², x³, xⁿ
 * Subscript: x₁, x₂, xₙ
 * 
 * Result: Characters display as-is in the formula boxes
 * 
 * =============================================================================
 * 10. RENDERING SVG DIAGRAMS
 * =============================================================================
 * 
 * Use the 'svg' property with inline SVG:
 * 
 * svg: (
 *   <svg width="200" height="200" viewBox="0 0 200 200">
 *     <circle cx="100" cy="100" r="80" fill="none" stroke="#1e40af" strokeWidth="2"/>
 *     <line x1="100" y1="100" x2="180" y2="100" stroke="#3b82f6" strokeWidth="2"/>
 *     <text x="185" y="105" fill="#1e40af">0°</text>
 *   </svg>
 * )
 * 
 * Result: SVG renders centered in the visual area
 * 
 * =============================================================================
 * 11. RENDERING CANVAS DRAWINGS
 * =============================================================================
 * 
 * Use the 'canvas' property with draw function:
 * 
 * canvas: {
 *   width: 300,
 *   height: 200,
 *   draw: (ctx) => {
 *     ctx.strokeStyle = '#1e40af';
 *     ctx.lineWidth = 2;
 *     ctx.beginPath();
 *     ctx.moveTo(0, 100);
 *     ctx.lineTo(300, 100);
 *     ctx.stroke();
 *   }
 * }
 * 
 * Result: Canvas with your custom drawing, centered
 * 
 * =============================================================================
 * 12. RENDERING RECHARTS GRAPHS
 * =============================================================================
 * 
 * Use the 'graph' property:
 * 
 * graph: {
 *   type: 'line',           // 'line' | 'bar' | 'area'
 *   width: 280,
 *   height: 180,
 *   data: [
 *     { x: 0, y: 0 },
 *     { x: 1, y: 0.84 },
 *     { x: 2, y: 0.91 }
 *   ],
 *   xKey: 'x',              // Key for x-axis data
 *   yKey: 'y',              // Key for y-axis data
 *   color: '#1e40af'        // Line/bar color
 * }
 * 
 * Result:
 * - Recharts LineChart/BarChart/AreaChart
 * - Grid lines included
 * - X and Y axes labeled
 * - Centered in visual area
 * 
 * =============================================================================
 * 13. RENDERING IMAGES
 * =============================================================================
 * 
 * Use the 'image' property:
 * 
 * image: 'https://example.com/diagram.png'
 * // or
 * image: 'data:image/png;base64,iVBORw0KGgo...'
 * 
 * Result: Image displays centered, responsive width
 * 
 * =============================================================================
 * 14. RENDERING CUSTOM REACT COMPONENTS
 * =============================================================================
 * 
 * Use the 'component' property:
 * 
 * component: (
 *   <div style={{
 *     background: '#e0f2fe',
 *     border: '2px solid #0284c7',
 *     borderRadius: '8px',
 *     padding: '12px'
 *   }}>
 *     Any custom JSX here
 *   </div>
 * )
 * 
 * Result: Your custom component renders as-is
 * 
 * =============================================================================
 * 15. RENDERING BULLETED LISTS
 * =============================================================================
 * 
 * Use the 'bullet_list' property:
 * 
 * bullet_list: [
 *   'First item with formula: $x^2$',
 *   'Second item',
 *   'Third item with <strong>bold text</strong>'
 * ]
 * 
 * Result:
 * - Standard bullet points
 * - Proper indentation
 * - Supports LaTeX via processContent
 * - Supports inline JSX formatting
 * 
 * =============================================================================
 * 16. RENDERING ORDERED LISTS
 * =============================================================================
 * 
 * Use the 'ordered_list' property:
 * 
 * ordered_list: [
 *   'Step one: Identify variables',
 *   'Step two: Apply formula $f(x)$',
 *   'Step three: Simplify'
 * ]
 * 
 * Result:
 * - Numbered list (1, 2, 3...)
 * - Proper indentation
 * - Supports LaTeX via processContent
 * - Supports inline JSX formatting
 * 
 * =============================================================================
 * 17. RENDERING CODE BLOCKS
 * =============================================================================
 * 
 * Use the 'code_block' property:
 * 
 * code_block: `function factorial(n) {
 *   if (n <= 1) return 1;
 *   return n * factorial(n - 1);
 * }`
 * 
 * Result:
 * - Dark background (#1e293b)
 * - Light text (#e2e8f0)
 * - Monospace font (Courier New)
 * - Rounded corners
 * - Horizontal scroll if needed
 * 
 * =============================================================================
 * 18. RENDERING DEFINITIONS
 * =============================================================================
 * 
 * Use the 'definition' property:
 * 
 * definition: {
 *   term: 'Derivative',
 *   description: 'The rate of change: $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$'
 * }
 * 
 * Result:
 * - Light background with left border
 * - Bold blue term label
 * - Gray description text
 * - Supports LaTeX in description
 * 
 * =============================================================================
 * 19. RENDERING ALERT BOXES
 * =============================================================================
 * 
 * Use alert properties for different message types:
 * 
 * alert_info: '**Info:** Remember that $e^{i\\pi} + 1 = 0$'
 * alert_warning: '**Warning:** Division by zero is undefined'
 * alert_error: '**Common Error:** $(a+b)^2 \\neq a^2 + b^2$'
 * alert_success: '**Pro Tip:** Substitute $x=0$ to verify'
 * alert_gray: '**Note:** This applies for all real numbers'
 * 
 * Result:
 * - alert_info: Blue background (#dbeafe), blue border
 * - alert_warning: Yellow background (#fef3c7), gold border
 * - alert_error: Red background (#fee2e2), red border
 * - alert_success: Green background (#d1fae5), green border
 * - alert_gray: Gray background (#f1f5f9), gray border
 * - All support LaTeX and inline formatting
 * 
 * =============================================================================
 * 20. RENDERING BLOCKQUOTES
 * =============================================================================
 * 
 * Use the 'blockquote' property:
 * 
 * blockquote: '"Mathematics is the language of the universe." — Galileo'
 * // or
 * blockquote: 'Note: This formula only applies when $x > 0$'
 * 
 * Result:
 * - Gray left border
 * - Gray italic text
 * - Left padding
 * - Good for quotes or important notes
 * 
 * =============================================================================
 * 21. RENDERING KEY-VALUE PAIRS
 * =============================================================================
 * 
 * Use the 'key_value' property:
 * 
 * key_value: [
 *   { key: 'Domain', value: '$(-\\infty, \\infty)$' },
 *   { key: 'Range', value: '$[0, \\infty)$' },
 *   { key: 'Period', value: '$2\\pi$' }
 * ]
 * 
 * Result:
 * - Two-column layout (key | value)
 * - Bold blue keys
 * - Gray values
 * - Bordered rows
 * - Supports LaTeX in both key and value
 * 
 * =============================================================================
 * 22. RENDERING TWO-COLUMN TEXT
 * =============================================================================
 * 
 * Use the 'two_column' property:
 * 
 * two_column: {
 *   left: 'Left column content with $\\sin(x)$',
 *   right: 'Right column content with $\\cos(x)$'
 * }
 * 
 * Result:
 * - Side-by-side columns
 * - Light background boxes
 * - Equal width columns
 * - Supports LaTeX in both columns
 * 
 * =============================================================================
 * 23. RENDERING NUMBERED STEPS
 * =============================================================================
 * 
 * Use the 'steps' property:
 * 
 * steps: [
 *   'Write equation in standard form: $ax^2 + bx + c = 0$',
 *   'Identify coefficients $a$, $b$, and $c$',
 *   'Apply quadratic formula',
 *   'Solve for both roots'
 * ]
 * 
 * Result:
 * - Circular numbered badges (1, 2, 3...)
 * - Blue background on numbers
 * - Steps aligned to the left of numbers
 * - Supports LaTeX in step text
 * 
 * =============================================================================
 * 24. RENDERING COMPARISON BOXES
 * =============================================================================
 * 
 * Use the 'comparison' property:
 * 
 * comparison: {
 *   left: {
 *     title: 'Differentiation',
 *     content: 'Finding rate of change: $f\'(x)$'
 *   },
 *   right: {
 *     title: 'Integration',
 *     content: 'Finding accumulation: $\\int f(x) dx$'
 *   }
 * }
 * 
 * Result:
 * - Side-by-side boxes
 * - Left box: Blue background and border
 * - Right box: Yellow background and border
 * - Bold titles
 * - Supports LaTeX in title and content
 * 
 * =============================================================================
 * 25. RENDERING HIGHLIGHT BOXES
 * =============================================================================
 * 
 * Use the 'highlight' property:
 * 
 * highlight: 'Pythagorean Theorem: $a^2 + b^2 = c^2$'
 * // or
 * highlight: 'Euler\'s Formula: $e^{ix} = \\cos(x) + i\\sin(x)$'
 * 
 * Result:
 * - Gradient blue background
 * - Blue border
 * - Bold centered text
 * - Great for important formulas
 * - Supports LaTeX
 * 
 * =============================================================================
 * COMPLETE EXAMPLE - COMBINING MULTIPLE ELEMENTS
 * =============================================================================
 * 
 * {
 *   columns: [{
 *     sections: [{
 *       title: 'Statistics',
 *       topics: [{
 *         name: 'Mean (Average)',
 *         formula: 'μ = Σx / n',
 *         description: 'Sum of all values divided by count',
 *         bullet_list: [
 *           'Always exists for finite data',
 *           'Sensitive to outliers',
 *           'Used in $\\sigma$ calculations'
 *         ],
 *         example: 'Data: 2, 4, 6\nMean = 4',
 *         key_value: [
 *           { key: 'Symbol', value: '$\\mu$ or $\\bar{x}$' },
 *           { key: 'Type', value: 'Measure of center' }
 *         ],
 *         alert_info: 'The mean is the balance point of data',
 *         graph: {
 *           type: 'line',
 *           width: 280,
 *           height: 180,
 *           data: [...],
 *           xKey: 'x',
 *           yKey: 'y',
 *           color: '#1e40af'
 *         }
 *       }]
 *     }]
 *   }]
 * }
 * 
 * =============================================================================
 * PROPERTY PRIORITY AND RENDERING ORDER
 * =============================================================================
 * 
 * Each item can have multiple properties. They render in this order:
 * 
 * 1. name (title)
 * 2. formula (bordered box)
 * 3. bullet_list
 * 4. ordered_list
 * 5. code_block
 * 6. definition
 * 7. alert_info / alert_warning / alert_error / alert_success / alert_gray
 * 8. blockquote
 * 9. key_value
 * 10. two_column
 * 11. steps
 * 12. comparison
 * 13. highlight
 * 14. graph / component / svg / canvas / image (visual content)
 * 15. note (small gray text)
 * 16. description (print style only)
 * 17. example (print style only)
 * 18. table (print style only)
 * 
 * You can mix and match properties as needed for rich content
 * 
 * =============================================================================
 * STYLING NOTES
 * =============================================================================
 * 
 * AUTOMATIC STYLING:
 * - Section titles: Blue background, white text, uppercase
 * - Rule/topic names: Bold blue text
 * - Formulas: Light background, left border, serif/mono font
 * - Examples: Yellow background, gold left border
 * - Tables: Blue headers, bordered cells
 * - Notes: Small, gray, italic
 * - Code blocks: Dark background, light text, monospace
 * - Alerts: Colored backgrounds matching type
 * - Definitions: Light background, blue border
 * - Steps: Circular blue numbers
 * - Comparisons: Blue and yellow side-by-side boxes
 * - Highlights: Gradient blue background
 * 
 * NO MANUAL STYLING NEEDED for standard elements
 * 
 * CUSTOM STYLING:
 * Use 'component' property with inline styles for full control
 * 
 * =============================================================================
 * FILTERS AND CONTROLS
 * =============================================================================
 * 
 * showFilters={true}
 * - Adds search box (searches name, formula, note, description)
 * - Adds section checkboxes (filter by section)
 * - Adds "Clear Filters" button
 * - Works across all three layout types
 * 
 * showControls={true}
 * - Adds "Print" button (opens browser print dialog)
 * - Adds "Download HTML" button (downloads standalone HTML file)
 * - Buttons hidden when printing (@media print)
 * 
 * =============================================================================
 * CARD STYLE SPECIFIC FEATURES
 * =============================================================================
 * 
 * Card style supports color-coded items:
 * 
 * items: [{
 *   name: 'Topic Name',
 *   formula: '$f(x)$',
 *   color: '#3b82f6'  // Custom left border color
 * }]
 * 
 * Card style also supports unitCircle structure:
 * 
 * unitCircle: {
 *   title: 'Unit Circle Values',
 *   angles: [
 *     {
 *       angle: '0°',
 *       values: ['$\\sin = 0$', '$\\cos = 1$']
 *     }
 *   ]
 * }
 * 
 * =============================================================================
 * LATEX SUPPORT VIA processContent
 * =============================================================================
 * 
 * All text properties support LaTeX when processed by processContent:
 * - Wrap math in $ for inline: $x^2$
 * - Wrap math in $$ for display: $$\\int_0^1 x dx$$
 * - Use \\ for LaTeX commands: $\\frac{a}{b}$
 * 
 * Works in: name, formula, description, note, list items, alerts, 
 * definitions, key-value pairs, steps, comparisons, highlights
 * 
 * =============================================================================
 * IMPORTANT TIPS
 * =============================================================================
 * 
 * 1. Always wrap JSX content in <> </> (fragment)
 * 2. Use {' '} for spaces around inline elements
 * 3. Use <br /> for line breaks (not \n)
 * 4. Unicode works: μ σ π θ α β ∑ ∫ √ ² ³ ⁿ ₁ ₂
 * 5. For complex math, use LaTeX with processContent
 * 6. Test your data in all three types (compact/card/print)
 * 7. Keep visual content (graph/svg/canvas/image) to ONE per item
 * 8. Use appropriate alert types for different message importance
 * 9. Combine properties for rich, educational content
 * 10. Use highlight for the most important formulas/theorems
 * 
 * =============================================================================
 * COMMON PATTERNS
 * =============================================================================
 * 
 * CONCEPT WITH DEFINITION:
 * {
 *   name: 'Concept Name',
 *   definition: { term: 'Definition', description: 'Explanation' },
 *   formula: '$math$',
 *   note: 'Additional context'
 * }
 * 
 * STEP-BY-STEP PROCESS:
 * {
 *   name: 'Process Name',
 *   steps: ['Step 1', 'Step 2', 'Step 3'],
 *   alert_info: 'Important tip'
 * }
 * 
 * FORMULA WITH PROPERTIES:
 * {
 *   name: 'Formula Name',
 *   formula: '$f(x)$',
 *   key_value: [
 *     { key: 'Domain', value: 'R' },
 *     { key: 'Range', value: 'R+' }
 *   ]
 * }
 * 
 * COMPARISON:
 * {
 *   comparison: {
 *     left: { title: 'Method A', content: 'Description' },
 *     right: { title: 'Method B', content: 'Description' }
 *   }
 * }
 * 
 * CODE EXAMPLE:
 * {
 *   name: 'Implementation',
 *   code_block: `function name() {\n  // code\n}`,
 *   alert_gray: 'This is pseudocode'
 * }
 * 
 * =============================================================================
 */



// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// const CheatSheet = ({ 
//   type = 'compact', 
//   title, 
//   subtitle, 
//   data, 
//   showControls = false,
//   showFilters = false 
// }) => {
//   const [rechartsComponents, setRechartsComponents] = useState(null);
//   const contentRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedSections, setSelectedSections] = useState(new Set());
//   const [filteredData, setFilteredData] = useState(data);

//   useEffect(() => {
//     import('recharts').then((recharts) => {
//       setRechartsComponents(recharts);
//     });
//   }, []);

//   useEffect(() => {
//     if (!showFilters) {
//       setFilteredData(data);
//       return;
//     }

//     let filtered = { ...data };

//     if (searchTerm) {
//       const search = searchTerm.toLowerCase();
      
//       if (type === 'compact') {
//         filtered = {
//           ...filtered,
//           columns: data.columns.map(col => ({
//             ...col,
//             sections: col.sections.map(section => ({
//               ...section,
//               rules: section.rules.filter(rule => 
//                 (rule.name && rule.name.toLowerCase().includes(search)) ||
//                 (rule.formula && rule.formula.toLowerCase().includes(search)) ||
//                 (rule.note && rule.note.toLowerCase().includes(search))
//               )
//             })).filter(section => section.rules.length > 0)
//           })).filter(col => col.sections.length > 0)
//         };
//       } else if (type === 'card') {
//         filtered = {
//           ...filtered,
//           categories: data.categories.map(cat => ({
//             ...cat,
//             items: cat.items.filter(item =>
//               (item.name && item.name.toLowerCase().includes(search)) ||
//               (item.formula && item.formula.toLowerCase().includes(search)) ||
//               (item.note && item.note.toLowerCase().includes(search))
//             )
//           })).filter(cat => cat.items.length > 0)
//         };
//       } else if (type === 'print') {
//         filtered = {
//           ...filtered,
//           columns: data.columns.map(col => ({
//             ...col,
//             sections: col.sections.map(section => ({
//               ...section,
//               topics: section.topics.filter(topic =>
//                 (topic.name && topic.name.toLowerCase().includes(search)) ||
//                 (topic.formula && topic.formula.toLowerCase().includes(search)) ||
//                 (topic.description && topic.description.toLowerCase().includes(search))
//               )
//             })).filter(section => section.topics.length > 0)
//           })).filter(col => col.sections.length > 0)
//         };
//       }
//     }

//     if (selectedSections.size > 0) {
//       if (type === 'compact' || type === 'print') {
//         filtered = {
//           ...filtered,
//           columns: filtered.columns.map(col => ({
//             ...col,
//             sections: col.sections.filter(section => selectedSections.has(section.title))
//           })).filter(col => col.sections.length > 0)
//         };
//       } else if (type === 'card') {
//         filtered = {
//           ...filtered,
//           categories: filtered.categories.filter(cat => selectedSections.has(cat.title))
//         };
//       }
//     }

//     setFilteredData(filtered);
//   }, [searchTerm, selectedSections, data, type, showFilters]);

//   const getAllSections = () => {
//     if (type === 'card') {
//       return data.categories?.map(cat => cat.title) || [];
//     }
//     const sections = new Set();
//     data.columns?.forEach(col => {
//       col.sections?.forEach(section => {
//         sections.add(section.title);
//       });
//     });
//     return Array.from(sections);
//   };

//   const toggleSection = (sectionTitle) => {
//     const newSelected = new Set(selectedSections);
//     if (newSelected.has(sectionTitle)) {
//       newSelected.delete(sectionTitle);
//     } else {
//       newSelected.add(sectionTitle);
//     }
//     setSelectedSections(newSelected);
//   };

//   const clearFilters = () => {
//     setSearchTerm('');
//     setSelectedSections(new Set());
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownload = () => {
//     const element = contentRef.current;
//     const htmlContent = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="UTF-8">
//           <title>${title || 'Cheat Sheet'}</title>
//           <style>
//             body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
//             @media print {
//               body { margin: 0; padding: 0; }
//             }
//           </style>
//         </head>
//         <body>
//           ${element.innerHTML}
//         </body>
//       </html>
//     `;
    
//     const blob = new Blob([htmlContent], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${(title || 'cheat-sheet').replace(/\s+/g, '-').toLowerCase()}.html`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   const CanvasRenderer = ({ width, height, draw }) => {
//     const canvasRef = useRef(null);
    
//     useEffect(() => {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       draw(ctx);
//     }, [draw]);
    
//     return <canvas ref={canvasRef} width={width} height={height} />;
//   };

//   const GraphRenderer = ({ type: graphType, width, height, data: graphData, xKey, yKey, color }) => {
//     if (!rechartsComponents) return null;

//     const { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, AreaChart, Area } = rechartsComponents;
//     const chartProps = { width, height, data: graphData };
    
//     if (graphType === 'line') {
//       return (
//         <LineChart {...chartProps}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey={xKey} />
//           <YAxis />
//           <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} dot={false} />
//         </LineChart>
//       );
//     }
    
//     if (graphType === 'bar') {
//       return (
//         <BarChart {...chartProps}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey={xKey} />
//           <YAxis />
//           <Bar dataKey={yKey} fill={color} />
//         </BarChart>
//       );
//     }
    
//     if (graphType === 'area') {
//       return (
//         <AreaChart {...chartProps}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey={xKey} />
//           <YAxis />
//           <Area type="monotone" dataKey={yKey} stroke={color} fill={color} fillOpacity={0.3} />
//         </AreaChart>
//       );
//     }
    
//     return null;
//   };

//   const renderContentBlock = (item, styleSet) => {
//     return (
//       <>
//         {item.name && (
//           <div style={styleSet.itemName}>{processContent(item.name)}</div>
//         )}
//         {item.formula && (
//           <div style={styleSet.formula}>{processContent(item.formula)}</div>
//         )}
//         {item.bullet_list && (
//           <ul style={styleSet.bulletList}>
//             {item.bullet_list.map((listItem, idx) => (
//               <li key={idx}>{processContent(listItem)}</li>
//             ))}
//           </ul>
//         )}
//         {item.ordered_list && (
//           <ol style={styleSet.orderedList}>
//             {item.ordered_list.map((listItem, idx) => (
//               <li key={idx}>{processContent(listItem)}</li>
//             ))}
//           </ol>
//         )}
//         {item.code_block && (
//           <div style={styleSet.codeBlock}>
//             <pre style={styleSet.codePre}>{item.code_block}</pre>
//           </div>
//         )}
//         {item.definition && (
//           <dl style={styleSet.definition}>
//             <dt style={styleSet.definitionTerm}>{processContent(item.definition.term)}</dt>
//             <dd style={styleSet.definitionDesc}>{processContent(item.definition.description)}</dd>
//           </dl>
//         )}
//         {item.alert_info && (
//           <div style={styleSet.alertInfo}>{processContent(item.alert_info)}</div>
//         )}
//         {item.alert_warning && (
//           <div style={styleSet.alertWarning}>{processContent(item.alert_warning)}</div>
//         )}
//         {item.alert_error && (
//           <div style={styleSet.alertError}>{processContent(item.alert_error)}</div>
//         )}
//         {item.alert_success && (
//           <div style={styleSet.alertSuccess}>{processContent(item.alert_success)}</div>
//         )}
//         {item.alert_gray && (
//           <div style={styleSet.alertGray}>{processContent(item.alert_gray)}</div>
//         )}
//         {item.blockquote && (
//           <div style={styleSet.blockquote}>{processContent(item.blockquote)}</div>
//         )}
//         {item.key_value && (
//           <div style={styleSet.keyValue}>
//             {item.key_value.map((kv, idx) => (
//               <div key={idx} style={styleSet.keyValueRow}>
//                 <div style={styleSet.keyValueKey}>{processContent(kv.key)}</div>
//                 <div style={styleSet.keyValueValue}>{processContent(kv.value)}</div>
//               </div>
//             ))}
//           </div>
//         )}
//         {item.two_column && (
//           <div style={styleSet.twoColumn}>
//             <div style={styleSet.column}>{processContent(item.two_column.left)}</div>
//             <div style={styleSet.column}>{processContent(item.two_column.right)}</div>
//           </div>
//         )}
//         {item.steps && (
//           <div style={styleSet.steps}>
//             {item.steps.map((step, idx) => (
//               <div key={idx} style={styleSet.step}>
//                 <div style={styleSet.stepNumber}>{idx + 1}</div>
//                 <div style={styleSet.stepContent}>{processContent(step)}</div>
//               </div>
//             ))}
//           </div>
//         )}
//         {item.comparison && (
//           <div style={styleSet.comparison}>
//             <div style={styleSet.comparisonLeft}>
//               <div style={styleSet.comparisonTitle}>{processContent(item.comparison.left.title)}</div>
//               {processContent(item.comparison.left.content)}
//             </div>
//             <div style={styleSet.comparisonRight}>
//               <div style={styleSet.comparisonTitle}>{processContent(item.comparison.right.title)}</div>
//               {processContent(item.comparison.right.content)}
//             </div>
//           </div>
//         )}
//         {item.highlight && (
//           <div style={styleSet.highlight}>{processContent(item.highlight)}</div>
//         )}
//         {item.graph && (
//           <div style={styleSet.visual}>
//             <GraphRenderer {...item.graph} />
//           </div>
//         )}
//         {item.component && (
//           <div style={styleSet.visual}>{item.component}</div>
//         )}
//         {item.svg && (
//           <div style={styleSet.visual}>{item.svg}</div>
//         )}
//         {item.canvas && (
//           <div style={styleSet.visual}>
//             <CanvasRenderer {...item.canvas} />
//           </div>
//         )}
//         {item.image && (
//           <div style={styleSet.visual}>
//             <img src={item.image} alt={item.name || ''} style={styleSet.image} />
//           </div>
//         )}
//         {item.note && (
//           <div style={styleSet.note}>{processContent(item.note)}</div>
//         )}
//       </>
//     );
//   };

//   const renderCompactStyle = () => {
//     return (
//       <div style={styles.compact.container}>
//         <header style={styles.compact.header}>
//           <h1 style={styles.compact.headerTitle}>{processContent(title)}</h1>
//           <p style={styles.compact.headerSubtitle}>{processContent(subtitle)}</p>
//         </header>
        
//         <div style={styles.compact.columns}>
//           {filteredData.columns?.map((column, colIndex) => (
//             <div key={colIndex} style={styles.compact.column}>
//               {column.sections.map((section, secIndex) => (
//                 <div key={secIndex} style={styles.compact.section}>
//                   <div style={styles.compact.sectionTitle}>{processContent(section.title)}</div>
//                   {section.rules.map((rule, ruleIndex) => (
//                     <div key={ruleIndex} style={styles.compact.rule}>
//                       {renderContentBlock(rule, styles.compact)}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderCardStyle = () => {
//     return (
//       <div style={styles.card.container}>
//         <header style={styles.card.header}>
//           <h1 style={styles.card.headerTitle}>{processContent(title)}</h1>
//           <p style={styles.card.headerSubtitle}>{processContent(subtitle)}</p>
//         </header>
        
//         {filteredData.categories?.map((category, catIndex) => (
//           <div key={catIndex} style={styles.card.category}>
//             <div style={styles.card.categoryHeader}>{processContent(category.title)}</div>
//             <div style={styles.card.cards}>
//               {category.items.map((item, itemIndex) => (
//                 <div 
//                   key={itemIndex} 
//                   style={{
//                     ...styles.card.cardBase,
//                     borderLeft: `4px solid ${item.color || '#3b82f6'}`
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = '#3b82f6';
//                     e.currentTarget.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.15)';
//                     e.currentTarget.style.transform = 'translateY(-2px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor = '#e5e7eb';
//                     e.currentTarget.style.boxShadow = 'none';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   <div style={styles.card.cardTitle}>{processContent(item.name)}</div>
//                   {renderContentBlock(item, styles.card)}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {filteredData.unitCircle && (
//           <div style={styles.card.unitCircle}>
//             <div style={styles.card.unitCircleTitle}>{processContent(filteredData.unitCircle.title)}</div>
//             <div style={styles.card.angleValues}>
//               {filteredData.unitCircle.angles.map((angle, angleIndex) => (
//                 <div key={angleIndex} style={styles.card.angleBox}>
//                   <div style={styles.card.angleBoxAngle}>{processContent(angle.angle)}</div>
//                   <div style={styles.card.angleBoxValues}>
//                     {angle.values.map((value, valIndex) => (
//                       <div key={valIndex}>{processContent(value)}</div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const renderPrintStyle = () => {
//     return (
//       <div style={styles.print.container}>
//         <header style={styles.print.header}>
//           <h1 style={styles.print.headerTitle}>{processContent(title)}</h1>
//           <p style={styles.print.headerSubtitle}>{processContent(subtitle)}</p>
//         </header>
        
//         <div style={styles.print.twoColumns}>
//           {filteredData.columns?.map((column, colIndex) => (
//             <div key={colIndex}>
//               {column.sections.map((section, secIndex) => (
//                 <div key={secIndex} style={styles.print.section}>
//                   <div style={styles.print.sectionTitle}>{processContent(section.title)}</div>
//                   {section.topics.map((topic, topicIndex) => (
//                     <div key={topicIndex} style={styles.print.topic}>
//                       <div style={styles.print.topicName}>{processContent(topic.name)}</div>
//                       {renderContentBlock(topic, styles.print)}
//                       {topic.description && (
//                         <div style={styles.print.description}>{processContent(topic.description)}</div>
//                       )}
//                       {topic.example && (
//                         <div style={styles.print.example}>
//                           <div style={styles.print.exampleLabel}>Example:</div>
//                           {processContent(topic.example)}
//                         </div>
//                       )}
//                       {topic.table && (
//                         <table style={styles.print.table}>
//                           <thead>
//                             <tr>
//                               {topic.table.headers.map((header, hIndex) => (
//                                 <th key={hIndex} style={styles.print.tableHeader}>
//                                   {processContent(header)}
//                                 </th>
//                               ))}
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {topic.table.rows.map((row, rIndex) => (
//                               <tr key={rIndex}>
//                                 {row.map((cell, cIndex) => (
//                                   <td key={cIndex} style={styles.print.tableCell}>
//                                     {processContent(cell)}
//                                   </td>
//                                 ))}
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderContent = () => {
//     switch(type) {
//       case 'compact':
//         return renderCompactStyle();
//       case 'card':
//         return renderCardStyle();
//       case 'print':
//         return renderPrintStyle();
//       default:
//         return renderCompactStyle();
//     }
//   };

//   const sections = getAllSections();

//   return (
//     <div style={styles.wrapper}>
//       {(showControls || showFilters) && (
//         <div style={styles.controlsWrapper} className="no-print">
//           {showFilters && (
//             <div style={styles.filters}>
//               <div style={styles.filterSection}>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   style={styles.searchInput}
//                 />
//               </div>
              
//               <div style={styles.filterSection}>
//                 <div style={styles.filterLabel}>Sections:</div>
//                 <div style={styles.checkboxGroup}>
//                   {sections.map((section, idx) => (
//                     <label key={idx} style={styles.checkboxLabel}>
//                       <input
//                         type="checkbox"
//                         checked={selectedSections.has(section)}
//                         onChange={() => toggleSection(section)}
//                         style={styles.checkbox}
//                       />
//                       <span style={styles.checkboxText}>{section}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {(searchTerm || selectedSections.size > 0) && (
//                 <button onClick={clearFilters} style={styles.clearButton}>
//                   Clear Filters
//                 </button>
//               )}
//             </div>
//           )}

//           {showControls && (
//             <div style={styles.controls}>
//               <button onClick={handlePrint} style={styles.button}>
//                 🖨️ Print
//               </button>
//               <button onClick={handleDownload} style={styles.button}>
//                 📥 Download HTML
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       <div ref={contentRef}>
//         {renderContent()}
//       </div>

//       <style jsx global>{`
//         @media print {
//           .no-print {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     fontFamily: 'Arial, sans-serif',
//     background: 'white',
//   },
//   controlsWrapper: {
//     maxWidth: '1200px',
//     margin: '0 auto 20px',
//     padding: '10px',
//   },
//   controls: {
//     display: 'flex',
//     gap: '10px',
//     justifyContent: 'flex-end',
//     marginTop: '10px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '14px',
//     fontWeight: 600,
//     background: '#1e40af',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
//   filters: {
//     background: 'white',
//     border: '2px solid #e5e7eb',
//     borderRadius: '8px',
//     padding: '20px',
//     marginBottom: '10px',
//   },
//   filterSection: {
//     marginBottom: '15px',
//   },
//   filterLabel: {
//     fontWeight: 600,
//     color: '#1e40af',
//     marginBottom: '8px',
//     fontSize: '14px',
//   },
//   searchInput: {
//     width: '100%',
//     padding: '10px 15px',
//     fontSize: '14px',
//     border: '2px solid #e5e7eb',
//     borderRadius: '6px',
//     outline: 'none',
//   },
//   checkboxGroup: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '12px',
//   },
//   checkboxLabel: {
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
//   checkbox: {
//     marginRight: '6px',
//     cursor: 'pointer',
//   },
//   checkboxText: {
//     color: '#475569',
//   },
//   clearButton: {
//     padding: '8px 16px',
//     fontSize: '13px',
//     fontWeight: 600,
//     background: '#ef4444',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
  
//   compact: {
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//       border: '2px solid #1e40af',
//     },
//     header: {
//       background: '#1e40af',
//       color: 'white',
//       padding: '20px 30px',
//       textAlign: 'center',
//     },
//     headerTitle: {
//       fontSize: '32px',
//       marginBottom: '8px',
//       margin: 0,
//     },
//     headerSubtitle: {
//       fontSize: '16px',
//       opacity: 0.95,
//       margin: 0,
//     },
//     columns: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: 0,
//     },
//     column: {
//       padding: '25px',
//       borderRight: '1px solid #e5e7eb',
//     },
//     section: {
//       marginBottom: '25px',
//     },
//     sectionTitle: {
//       background: '#3b82f6',
//       color: 'white',
//       padding: '8px 12px',
//       fontSize: '14px',
//       fontWeight: 600,
//       marginBottom: '15px',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//     },
//     rule: {
//       marginBottom: '18px',
//       paddingBottom: '15px',
//       borderBottom: '1px dashed #e5e7eb',
//     },
//     itemName: {
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '13px',
//       marginBottom: '6px',
//     },
//     formula: {
//       fontFamily: 'Times New Roman, serif',
//       fontSize: '16px',
//       margin: '6px 0',
//       padding: '8px 12px',
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//     },
//     bulletList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     orderedList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     codeBlock: {
//       background: '#1e293b',
//       color: '#e2e8f0',
//       padding: '10px',
//       borderRadius: '4px',
//       margin: '8px 0',
//       fontSize: '12px',
//       overflowX: 'auto',
//     },
//     codePre: {
//       margin: 0,
//       fontFamily: 'Courier New, monospace',
//     },
//     definition: {
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//       padding: '10px',
//       margin: '8px 0',
//     },
//     definitionTerm: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '4px',
//       fontSize: '13px',
//     },
//     definitionDesc: {
//       margin: 0,
//       color: '#475569',
//       fontSize: '12px',
//       lineHeight: 1.5,
//     },
//     alertInfo: {
//       background: '#dbeafe',
//       borderLeft: '3px solid #3b82f6',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertWarning: {
//       background: '#fef3c7',
//       borderLeft: '3px solid #eab308',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertError: {
//       background: '#fee2e2',
//       borderLeft: '3px solid #ef4444',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertSuccess: {
//       background: '#d1fae5',
//       borderLeft: '3px solid #10b981',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertGray: {
//       background: '#f1f5f9',
//       borderLeft: '3px solid #64748b',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     blockquote: {
//       borderLeft: '3px solid #cbd5e1',
//       paddingLeft: '15px',
//       margin: '8px 0',
//       color: '#64748b',
//       fontStyle: 'italic',
//       fontSize: '12px',
//     },
//     keyValue: {
//       margin: '10px 0',
//     },
//     keyValueRow: {
//       display: 'flex',
//       padding: '6px 0',
//       borderBottom: '1px solid #e5e7eb',
//       fontSize: '12px',
//     },
//     keyValueKey: {
//       fontWeight: 600,
//       color: '#1e40af',
//       minWidth: '100px',
//     },
//     keyValueValue: {
//       color: '#475569',
//       flex: 1,
//     },
//     twoColumn: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       margin: '10px 0',
//     },
//     column: {
//       padding: '10px',
//       background: '#f8fafc',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     steps: {
//       margin: '10px 0',
//     },
//     step: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       marginBottom: '10px',
//     },
//     stepNumber: {
//       background: '#3b82f6',
//       color: 'white',
//       width: '24px',
//       height: '24px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 600,
//       fontSize: '12px',
//       marginRight: '10px',
//       flexShrink: 0,
//     },
//     stepContent: {
//       color: '#1e293b',
//       fontSize: '12px',
//       lineHeight: 1.5,
//     },
//     comparison: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       margin: '10px 0',
//     },
//     comparisonLeft: {
//       padding: '10px',
//       background: '#dbeafe',
//       border: '2px solid #3b82f6',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     comparisonRight: {
//       padding: '10px',
//       background: '#fef3c7',
//       border: '2px solid #eab308',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     comparisonTitle: {
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     highlight: {
//       background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
//       border: '2px solid #3b82f6',
//       padding: '12px',
//       borderRadius: '6px',
//       margin: '10px 0',
//       textAlign: 'center',
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '13px',
//     },
//     note: {
//       fontSize: '12px',
//       color: '#64748b',
//       fontStyle: 'italic',
//       marginTop: '5px',
//     },
//     visual: {
//       margin: '10px 0',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     image: {
//       maxWidth: '100%',
//       height: 'auto',
//     },
//   },
  
//   card: {
//     container: {
//       maxWidth: '1100px',
//       margin: '0 auto',
//       background: '#f0f4f8',
//       padding: '25px',
//     },
//     header: {
//       textAlign: 'center',
//       marginBottom: '30px',
//     },
//     headerTitle: {
//       fontSize: '36px',
//       color: '#1e40af',
//       marginBottom: '8px',
//       margin: 0,
//     },
//     headerSubtitle: {
//       color: '#64748b',
//       fontSize: '16px',
//       margin: 0,
//     },
//     category: {
//       marginBottom: '30px',
//     },
//     categoryHeader: {
//       background: '#1e40af',
//       color: 'white',
//       padding: '10px 20px',
//       fontSize: '18px',
//       fontWeight: 600,
//       borderRadius: '8px 8px 0 0',
//     },
//     cards: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '15px',
//       background: 'white',
//       padding: '20px',
//       borderRadius: '0 0 8px 8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
//     },
//     cardBase: {
//       background: 'white',
//       border: '2px solid #e5e7eb',
//       borderRadius: '8px',
//       padding: '15px',
//       transition: 'all 0.2s',
//       cursor: 'pointer',
//     },
//     cardTitle: {
//       fontWeight: 600,
//       color: '#1e293b',
//       marginBottom: '10px',
//       fontSize: '14px',
//     },
//     itemName: {
//       fontWeight: 600,
//       color: '#1e293b',
//       marginBottom: '10px',
//       fontSize: '14px',
//     },
//     formula: {
//       fontFamily: 'Times New Roman, serif',
//       fontSize: '18px',
//       textAlign: 'center',
//       padding: '12px',
//       background: '#f8fafc',
//       borderRadius: '6px',
//       marginBottom: '8px',
//       color: '#1e40af',
//     },
//     bulletList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     orderedList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     codeBlock: {
//       background: '#1e293b',
//       color: '#e2e8f0',
//       padding: '12px',
//       borderRadius: '6px',
//       margin: '10px 0',
//       fontSize: '12px',
//       overflowX: 'auto',
//     },
//     codePre: {
//       margin: 0,
//       fontFamily: 'Courier New, monospace',
//     },
//     definition: {
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//       padding: '12px',
//       margin: '10px 0',
//       borderRadius: '4px',
//     },
//     definitionTerm: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '5px',
//       fontSize: '13px',
//     },
//     definitionDesc: {
//       margin: 0,
//       color: '#475569',
//       fontSize: '13px',
//       lineHeight: 1.5,
//     },
//     alertInfo: {
//       background: '#dbeafe',
//       borderLeft: '3px solid #3b82f6',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     alertWarning: {
//       background: '#fef3c7',
//       borderLeft: '3px solid #eab308',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     alertError: {
//       background: '#fee2e2',
//       borderLeft: '3px solid #ef4444',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     alertSuccess: {
//       background: '#d1fae5',
//       borderLeft: '3px solid #10b981',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     alertGray: {
//       background: '#f1f5f9',
//       borderLeft: '3px solid #64748b',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     blockquote: {
//       borderLeft: '3px solid #cbd5e1',
//       paddingLeft: '15px',
//       margin: '10px 0',
//       color: '#64748b',
//       fontStyle: 'italic',
//       fontSize: '13px',
//     },
//     keyValue: {
//       margin: '10px 0',
//     },
//     keyValueRow: {
//       display: 'flex',
//       padding: '8px 0',
//       borderBottom: '1px solid #e5e7eb',
//       fontSize: '13px',
//     },
//     keyValueKey: {
//       fontWeight: 600,
//       color: '#1e40af',
//       minWidth: '120px',
//     },
//     keyValueValue: {
//       color: '#475569',
//       flex: 1,
//     },
//     twoColumn: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '12px',
//       margin: '10px 0',
//     },
//     column: {
//       padding: '12px',
//       background: '#f8fafc',
//       borderRadius: '6px',
//       fontSize: '13px',
//     },
//     steps: {
//       margin: '10px 0',
//     },
//     step: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       marginBottom: '12px',
//     },
//     stepNumber: {
//       background: '#3b82f6',
//       color: 'white',
//       width: '28px',
//       height: '28px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 600,
//       fontSize: '13px',
//       marginRight: '12px',
//       flexShrink: 0,
//     },
//     stepContent: {
//       color: '#1e293b',
//       fontSize: '13px',
//       lineHeight: 1.6,
//     },
//     comparison: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '12px',
//       margin: '10px 0',
//     },
//     comparisonLeft: {
//       padding: '12px',
//       background: '#dbeafe',
//       border: '2px solid #3b82f6',
//       borderRadius: '6px',
//       fontSize: '13px',
//     },
//     comparisonRight: {
//       padding: '12px',
//       background: '#fef3c7',
//       border: '2px solid #eab308',
//       borderRadius: '6px',
//       fontSize: '13px',
//     },
//     comparisonTitle: {
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     highlight: {
//       background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
//       border: '2px solid #3b82f6',
//       padding: '15px',
//       borderRadius: '8px',
//       margin: '10px 0',
//       textAlign: 'center',
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '14px',
//     },
//     note: {
//       fontSize: '12px',
//       color: '#64748b',
//       textAlign: 'center',
//     },
//     visual: {
//       margin: '10px 0',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     image: {
//       maxWidth: '100%',
//       height: 'auto',
//     },
//     unitCircle: {
//       background: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
//       marginTop: '20px',
//     },
//     unitCircleTitle: {
//       color: '#1e40af',
//       fontSize: '20px',
//       fontWeight: 600,
//       marginBottom: '15px',
//       textAlign: 'center',
//     },
//     angleValues: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(4, 1fr)',
//       gap: '12px',
//     },
//     angleBox: {
//       background: '#f8fafc',
//       border: '1px solid #e5e7eb',
//       borderRadius: '6px',
//       padding: '12px',
//       textAlign: 'center',
//     },
//     angleBoxAngle: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '6px',
//       fontSize: '14px',
//     },
//     angleBoxValues: {
//       fontSize: '12px',
//       color: '#475569',
//       lineHeight: 1.6,
//     },
//   },
  
//   print: {
//     container: {
//       maxWidth: '900px',
//       margin: '0 auto',
//       background: 'white',
//       padding: '30px 40px',
//     },
//     header: {
//       textAlign: 'center',
//       borderBottom: '3px solid #1e40af',
//       paddingBottom: '20px',
//       marginBottom: '30px',
//     },
//     headerTitle: {
//       fontSize: '32px',
//       color: '#1e40af',
//       marginBottom: '5px',
//       fontWeight: 700,
//       margin: 0,
//     },
//     headerSubtitle: {
//       color: '#64748b',
//       fontSize: '14px',
//       fontStyle: 'italic',
//       margin: 0,
//     },
//     twoColumns: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '30px',
//     },
//     section: {
//       marginBottom: '25px',
//     },
//     sectionTitle: {
//       color: '#1e40af',
//       fontSize: '18px',
//       fontWeight: 700,
//       borderBottom: '2px solid #3b82f6',
//       paddingBottom: '5px',
//       marginBottom: '12px',
//     },
//     topic: {
//       marginBottom: '15px',
//       padding: '10px',
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//     },
//     topicName: {
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '14px',
//       marginBottom: '6px',
//     },
//     itemName: {
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '14px',
//       marginBottom: '6px',
//     },
//     formula: {
//       fontFamily: 'Courier New, monospace',
//       background: 'white',
//       border: '1px solid #cbd5e1',
//       padding: '8px 12px',
//       margin: '8px 0',
//       fontSize: '14px',
//       textAlign: 'center',
//     },
//     bulletList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     orderedList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     codeBlock: {
//       background: '#1e293b',
//       color: '#e2e8f0',
//       padding: '10px',
//       borderRadius: '4px',
//       margin: '8px 0',
//       fontSize: '12px',
//       overflowX: 'auto',
//     },
//     codePre: {
//       margin: 0,
//       fontFamily: 'Courier New, monospace',
//     },
//     definition: {
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//       padding: '10px',
//       margin: '8px 0',
//     },
//     definitionTerm: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '4px',
//       fontSize: '13px',
//     },
//     definitionDesc: {
//       margin: 0,
//       color: '#475569',
//       fontSize: '12px',
//       lineHeight: 1.5,
//     },
//     alertInfo: {
//       background: '#dbeafe',
//       borderLeft: '3px solid #3b82f6',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertWarning: {
//       background: '#fef3c7',
//       borderLeft: '3px solid #eab308',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertError: {
//       background: '#fee2e2',
//       borderLeft: '3px solid #ef4444',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertSuccess: {
//       background: '#d1fae5',
//       borderLeft: '3px solid #10b981',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertGray: {
//       background: '#f1f5f9',
//       borderLeft: '3px solid #64748b',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     blockquote: {
//       borderLeft: '3px solid #cbd5e1',
//       paddingLeft: '15px',
//       margin: '8px 0',
//       color: '#64748b',
//       fontStyle: 'italic',
//       fontSize: '12px',
//     },
//     keyValue: {
//       margin: '10px 0',
//     },
//     keyValueRow: {
//       display: 'flex',
//       padding: '6px 0',
//       borderBottom: '1px solid #e5e7eb',
//       fontSize: '12px',
//     },
//     keyValueKey: {
//       fontWeight: 600,
//       color: '#1e40af',
//       minWidth: '100px',
//     },
//     keyValueValue: {
//       color: '#475569',
//       flex: 1,
//     },
//     twoColumn: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       margin: '10px 0',
//     },
//     column: {
//       padding: '10px',
//       background: '#f8fafc',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     steps: {
//       margin: '10px 0',
//     },
//     step: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       marginBottom: '10px',
//     },
//     stepNumber: {
//       background: '#3b82f6',
//       color: 'white',
//       width: '24px',
//       height: '24px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 600,
//       fontSize: '12px',
//       marginRight: '10px',
//       flexShrink: 0,
//     },
//     stepContent: {
//       color: '#1e293b',
//       fontSize: '12px',
//       lineHeight: 1.5,
//     },
//     comparison: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       margin: '10px 0',
//     },
//     comparisonLeft: {
//       padding: '10px',
//       background: '#dbeafe',
//       border: '2px solid #3b82f6',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     comparisonRight: {
//       padding: '10px',
//       background: '#fef3c7',
//       border: '2px solid #eab308',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     comparisonTitle: {
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     highlight: {
//       background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
//       border: '2px solid #3b82f6',
//       padding: '12px',
//       borderRadius: '6px',
//       margin: '10px 0',
//       textAlign: 'center',
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '13px',
//     },
//     description: {
//       fontSize: '13px',
//       color: '#475569',
//       marginTop: '5px',
//       lineHeight: 1.5,
//     },
//     example: {
//       background: '#fef3c7',
//       borderLeft: '3px solid #eab308',
//       padding: '8px 10px',
//       marginTop: '8px',
//       fontSize: '12px',
//       color: '#1e40af',
//     },
//     exampleLabel: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '3px',
//     },
//     visual: {
//       margin: '10px 0',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     image: {
//       maxWidth: '100%',
//       height: 'auto',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       margin: '10px 0',
//       fontSize: '12px',
//     },
//     tableHeader: {
//       background: '#1e40af',
//       color: 'white',
//       padding: '6px',
//       textAlign: 'left',
//     },
//     tableCell: {
//       border: '1px solid #cbd5e1',
//       padding: '6px',
//     },
//     note: {
//       fontSize: '12px',
//       color: '#64748b',
//       fontStyle: 'italic',
//       marginTop: '5px',
//     },
//   },
// };

// export default CheatSheet;

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { processContent } from '@/app/utils/contentProcessor';

const CheatSheet = ({ 
  type = 'compact', 
  title, 
  subtitle, 
  data, 
  showControls = false,
  showFilters = false 
}) => {
  const [rechartsComponents, setRechartsComponents] = useState(null);
  const contentRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSections, setSelectedSections] = useState(new Set());
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    import('recharts').then((recharts) => {
      setRechartsComponents(recharts);
    });
  }, []);

  useEffect(() => {
    if (!showFilters) {
      setFilteredData(data);
      return;
    }

    let filtered = { ...data };

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      
      if (type === 'compact') {
        filtered = {
          ...filtered,
          columns: data.columns.map(col => ({
            ...col,
            sections: col.sections.map(section => ({
              ...section,
              rules: section.rules.filter(rule => 
                (rule.name && rule.name.toLowerCase().includes(search)) ||
                (rule.formula && rule.formula.toLowerCase().includes(search)) ||
                (rule.note && rule.note.toLowerCase().includes(search))
              )
            })).filter(section => section.rules.length > 0)
          })).filter(col => col.sections.length > 0)
        };
      } else if (type === 'card') {
        filtered = {
          ...filtered,
          categories: data.categories.map(cat => ({
            ...cat,
            items: cat.items.filter(item =>
              (item.name && item.name.toLowerCase().includes(search)) ||
              (item.formula && item.formula.toLowerCase().includes(search)) ||
              (item.note && item.note.toLowerCase().includes(search))
            )
          })).filter(cat => cat.items.length > 0)
        };
      } else if (type === 'print') {
        filtered = {
          ...filtered,
          columns: data.columns.map(col => ({
            ...col,
            sections: col.sections.map(section => ({
              ...section,
              topics: section.topics.filter(topic =>
                (topic.name && topic.name.toLowerCase().includes(search)) ||
                (topic.formula && topic.formula.toLowerCase().includes(search)) ||
                (topic.description && topic.description.toLowerCase().includes(search))
              )
            })).filter(section => section.topics.length > 0)
          })).filter(col => col.sections.length > 0)
        };
      }
    }

    if (selectedSections.size > 0) {
      if (type === 'compact' || type === 'print') {
        filtered = {
          ...filtered,
          columns: filtered.columns.map(col => ({
            ...col,
            sections: col.sections.filter(section => selectedSections.has(section.title))
          })).filter(col => col.sections.length > 0)
        };
      } else if (type === 'card') {
        filtered = {
          ...filtered,
          categories: filtered.categories.filter(cat => selectedSections.has(cat.title))
        };
      }
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedSections, data, type, showFilters]);

  const getAllSections = () => {
    if (type === 'card') {
      return data.categories?.map(cat => cat.title) || [];
    }
    const sections = new Set();
    data.columns?.forEach(col => {
      col.sections?.forEach(section => {
        sections.add(section.title);
      });
    });
    return Array.from(sections);
  };

  const toggleSection = (sectionTitle) => {
    const newSelected = new Set(selectedSections);
    if (newSelected.has(sectionTitle)) {
      newSelected.delete(sectionTitle);
    } else {
      newSelected.add(sectionTitle);
    }
    setSelectedSections(newSelected);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSections(new Set());
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = contentRef.current;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${title || 'Cheat Sheet'}</title>
          <style>
            body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
            @media print {
              body { margin: 0; padding: 0; }
            }
          </style>
        </head>
        <body>
          ${element.innerHTML}
        </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(title || 'cheat-sheet').replace(/\s+/g, '-').toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const CanvasRenderer = ({ width, height, draw }) => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      draw(ctx);
    }, [draw]);
    
    return <canvas ref={canvasRef} width={width} height={height} />;
  };

  const GraphRenderer = ({ type: graphType, width, height, data: graphData, xKey, yKey, color }) => {
    if (!rechartsComponents) return null;

    const { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, AreaChart, Area } = rechartsComponents;
    const chartProps = { width, height, data: graphData };
    
    if (graphType === 'line') {
      return (
        <LineChart {...chartProps}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      );
    }
    
    if (graphType === 'bar') {
      return (
        <BarChart {...chartProps}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Bar dataKey={yKey} fill={color} />
        </BarChart>
      );
    }
    
    if (graphType === 'area') {
      return (
        <AreaChart {...chartProps}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Area type="monotone" dataKey={yKey} stroke={color} fill={color} fillOpacity={0.3} />
        </AreaChart>
      );
    }
    
    return null;
  };

  const renderContentBlock = (item, styleSet) => {
    return (
      <>
        {item.name && (
          <div style={styleSet.itemName}>{processContent(item.name)}</div>
        )}
        {item.formula && (
          <div style={styleSet.formula}>{processContent(item.formula)}</div>
        )}
        {item.bullet_list && (
          <ul style={styleSet.bulletList}>
            {item.bullet_list.map((listItem, idx) => (
              <li key={idx}>{processContent(listItem)}</li>
            ))}
          </ul>
        )}
        {item.ordered_list && (
          <ol style={styleSet.orderedList}>
            {item.ordered_list.map((listItem, idx) => (
              <li key={idx}>{processContent(listItem)}</li>
            ))}
          </ol>
        )}
        {item.code_block && (
          <div style={styleSet.codeBlock}>
            <pre style={styleSet.codePre}>{item.code_block}</pre>
          </div>
        )}
        {item.definition && (
          <dl style={styleSet.definition}>
            <dt style={styleSet.definitionTerm}>{processContent(item.definition.term)}</dt>
            <dd style={styleSet.definitionDesc}>{processContent(item.definition.description)}</dd>
          </dl>
        )}
        {item.alert_info && (
          <div style={styleSet.alertInfo}>{processContent(item.alert_info)}</div>
        )}
        {item.alert_warning && (
          <div style={styleSet.alertWarning}>{processContent(item.alert_warning)}</div>
        )}
        {item.alert_error && (
          <div style={styleSet.alertError}>{processContent(item.alert_error)}</div>
        )}
        {item.alert_success && (
          <div style={styleSet.alertSuccess}>{processContent(item.alert_success)}</div>
        )}
        {item.alert_gray && (
          <div style={styleSet.alertGray}>{processContent(item.alert_gray)}</div>
        )}
        {item.blockquote && (
          <div style={styleSet.blockquote}>{processContent(item.blockquote)}</div>
        )}
        {item.key_value && (
          <div style={styleSet.keyValue}>
            {item.key_value.map((kv, idx) => (
              <div key={idx} style={styleSet.keyValueRow}>
                <div style={styleSet.keyValueKey}>{processContent(kv.key)}</div>
                <div style={styleSet.keyValueValue}>{processContent(kv.value)}</div>
              </div>
            ))}
          </div>
        )}
        {item.two_column && (
          <div style={styleSet.twoColumn}>
            <div style={styleSet.column}>{processContent(item.two_column.left)}</div>
            <div style={styleSet.column}>{processContent(item.two_column.right)}</div>
          </div>
        )}
        {item.steps && (
          <div style={styleSet.steps}>
            {item.steps.map((step, idx) => (
              <div key={idx} style={styleSet.step}>
                <div style={styleSet.stepNumber}>{idx + 1}</div>
                <div style={styleSet.stepContent}>{processContent(step)}</div>
              </div>
            ))}
          </div>
        )}
        {item.comparison && (
          <div style={styleSet.comparison}>
            <div style={styleSet.comparisonLeft}>
              <div style={styleSet.comparisonTitle}>{processContent(item.comparison.left.title)}</div>
              {processContent(item.comparison.left.content)}
            </div>
            <div style={styleSet.comparisonRight}>
              <div style={styleSet.comparisonTitle}>{processContent(item.comparison.right.title)}</div>
              {processContent(item.comparison.right.content)}
            </div>
          </div>
        )}
        {item.highlight && (
          <div style={styleSet.highlight}>{processContent(item.highlight)}</div>
        )}
        {item.graph && (
          <div style={styleSet.visual}>
            <GraphRenderer {...item.graph} />
          </div>
        )}
        {item.component && (
          <div style={styleSet.visual}>{item.component}</div>
        )}
        {item.svg && (
          <div style={styleSet.visual}>{item.svg}</div>
        )}
        {item.canvas && (
          <div style={styleSet.visual}>
            <CanvasRenderer {...item.canvas} />
          </div>
        )}
        {item.image && (
          <div style={styleSet.visual}>
            <Image 
              src={item.image} 
              alt={item.name || ''} 
              width={item.imageWidth || 600}
              height={item.imageHeight || 400}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        )}
        {item.note && (
          <div style={styleSet.note}>{processContent(item.note)}</div>
        )}
      </>
    );
  };

  const renderCompactStyle = () => {
    return (
      <div style={styles.compact.container}>
        <header style={styles.compact.header}>
          <h1 style={styles.compact.headerTitle}>{processContent(title)}</h1>
          <p style={styles.compact.headerSubtitle}>{processContent(subtitle)}</p>
        </header>
        
        <div style={styles.compact.columns}>
          {filteredData.columns?.map((column, colIndex) => (
            <div key={colIndex} style={styles.compact.column}>
              {column.sections.map((section, secIndex) => (
                <div key={secIndex} style={styles.compact.section}>
                  <div style={styles.compact.sectionTitle}>{processContent(section.title)}</div>
                  {section.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} style={styles.compact.rule}>
                      {renderContentBlock(rule, styles.compact)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCardStyle = () => {
    return (
      <div style={styles.card.container}>
        <header style={styles.card.header}>
          <h1 style={styles.card.headerTitle}>{processContent(title)}</h1>
          <p style={styles.card.headerSubtitle}>{processContent(subtitle)}</p>
        </header>
        
        {filteredData.categories?.map((category, catIndex) => (
          <div key={catIndex} style={styles.card.category}>
            <div style={styles.card.categoryHeader}>{processContent(category.title)}</div>
            <div style={styles.card.cards}>
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  style={{
                    ...styles.card.cardBase,
                    borderLeft: `4px solid ${item.color || '#3b82f6'}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#3b82f6';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={styles.card.cardTitle}>{processContent(item.name)}</div>
                  {renderContentBlock(item, styles.card)}
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredData.unitCircle && (
          <div style={styles.card.unitCircle}>
            <div style={styles.card.unitCircleTitle}>{processContent(filteredData.unitCircle.title)}</div>
            <div style={styles.card.angleValues}>
              {filteredData.unitCircle.angles.map((angle, angleIndex) => (
                <div key={angleIndex} style={styles.card.angleBox}>
                  <div style={styles.card.angleBoxAngle}>{processContent(angle.angle)}</div>
                  <div style={styles.card.angleBoxValues}>
                    {angle.values.map((value, valIndex) => (
                      <div key={valIndex}>{processContent(value)}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPrintStyle = () => {
    return (
      <div style={styles.print.container}>
        <header style={styles.print.header}>
          <h1 style={styles.print.headerTitle}>{processContent(title)}</h1>
          <p style={styles.print.headerSubtitle}>{processContent(subtitle)}</p>
        </header>
        
        <div style={styles.print.twoColumns}>
          {filteredData.columns?.map((column, colIndex) => (
            <div key={colIndex}>
              {column.sections.map((section, secIndex) => (
                <div key={secIndex} style={styles.print.section}>
                  <div style={styles.print.sectionTitle}>{processContent(section.title)}</div>
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} style={styles.print.topic}>
                      <div style={styles.print.topicName}>{processContent(topic.name)}</div>
                      {renderContentBlock(topic, styles.print)}
                      {topic.description && (
                        <div style={styles.print.description}>{processContent(topic.description)}</div>
                      )}
                      {topic.example && (
                        <div style={styles.print.example}>
                          <div style={styles.print.exampleLabel}>Example:</div>
                          {processContent(topic.example)}
                        </div>
                      )}
                      {topic.table && (
                        <table style={styles.print.table}>
                          <thead>
                            <tr>
                              {topic.table.headers.map((header, hIndex) => (
                                <th key={hIndex} style={styles.print.tableHeader}>
                                  {processContent(header)}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {topic.table.rows.map((row, rIndex) => (
                              <tr key={rIndex}>
                                {row.map((cell, cIndex) => (
                                  <td key={cIndex} style={styles.print.tableCell}>
                                    {processContent(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch(type) {
      case 'compact':
        return renderCompactStyle();
      case 'card':
        return renderCardStyle();
      case 'print':
        return renderPrintStyle();
      default:
        return renderCompactStyle();
    }
  };

  const sections = getAllSections();

  return (
    <div style={styles.wrapper}>
      {(showControls || showFilters) && (
        <div style={styles.controlsWrapper} className="no-print">
          {showFilters && (
            <div style={styles.filters}>
              <div style={styles.filterSection}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={styles.searchInput}
                />
              </div>
              
              <div style={styles.filterSection}>
                <div style={styles.filterLabel}>Sections:</div>
                <div style={styles.checkboxGroup}>
                  {sections.map((section, idx) => (
                    <label key={idx} style={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedSections.has(section)}
                        onChange={() => toggleSection(section)}
                        style={styles.checkbox}
                      />
                      <span style={styles.checkboxText}>{section}</span>
                    </label>
                  ))}
                </div>
              </div>

              {(searchTerm || selectedSections.size > 0) && (
                <button onClick={clearFilters} style={styles.clearButton}>
                  Clear Filters
                </button>
              )}
            </div>
          )}

          {showControls && (
            <div style={styles.controls}>
              <button onClick={handlePrint} style={styles.button}>
                🖨️ Print
              </button>
              <button onClick={handleDownload} style={styles.button}>
                📥 Download HTML
              </button>
            </div>
          )}
        </div>
      )}

      <div ref={contentRef}>
        {renderContent()}
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: 'Arial, sans-serif',
    background: 'white',
  },
  controlsWrapper: {
    maxWidth: '1200px',
    margin: '0 auto 20px',
    padding: '10px',
  },
  controls: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
    marginTop: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 600,
    background: '#1e40af',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  filters: {
    background: 'white',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '10px',
  },
  filterSection: {
    marginBottom: '15px',
  },
  filterLabel: {
    fontWeight: 600,
    color: '#1e40af',
    marginBottom: '8px',
    fontSize: '14px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 15px',
    fontSize: '14px',
    border: '2px solid #e5e7eb',
    borderRadius: '6px',
    outline: 'none',
  },
  checkboxGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
  },
  checkbox: {
    marginRight: '6px',
    cursor: 'pointer',
  },
  checkboxText: {
    color: '#475569',
  },
  clearButton: {
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: 600,
    background: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  
  compact: {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      border: '2px solid #1e40af',
    },
    header: {
      background: '#1e40af',
      color: 'white',
      padding: '20px 30px',
      textAlign: 'center',
    },
    headerTitle: {
      fontSize: '32px',
      marginBottom: '8px',
      margin: 0,
    },
    headerSubtitle: {
      fontSize: '16px',
      opacity: 0.95,
      margin: 0,
    },
    columns: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 0,
    },
    column: {
      padding: '25px',
      borderRight: '1px solid #e5e7eb',
    },
    section: {
      marginBottom: '25px',
    },
    sectionTitle: {
      background: '#3b82f6',
      color: 'white',
      padding: '8px 12px',
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    rule: {
      marginBottom: '18px',
      paddingBottom: '15px',
      borderBottom: '1px dashed #e5e7eb',
    },
    itemName: {
      fontWeight: 600,
      color: '#1e40af',
      fontSize: '13px',
      marginBottom: '6px',
    },
    formula: {
      fontFamily: 'Times New Roman, serif',
      fontSize: '16px',
      margin: '6px 0',
      padding: '8px 12px',
      background: '#f8fafc',
      borderLeft: '3px solid #3b82f6',
    },
    bulletList: {
      margin: '10px 0',
      paddingLeft: '20px',
      fontSize: '13px',
      color: '#1e293b',
      lineHeight: 1.6,
    },
    orderedList: {
      margin: '10px 0',
      paddingLeft: '20px',
      fontSize: '13px',
      color: '#1e293b',
      lineHeight: 1.6,
    },
    codeBlock: {
      background: '#1e293b',
      color: '#e2e8f0',
      padding: '10px',
      borderRadius: '4px',
      margin: '8px 0',
      fontSize: '12px',
      overflowX: 'auto',
    },
    codePre: {
      margin: 0,
      fontFamily: 'Courier New, monospace',
    },
    definition: {
      background: '#f8fafc',
      borderLeft: '3px solid #3b82f6',
      padding: '10px',
      margin: '8px 0',
    },
    definitionTerm: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: '4px',
      fontSize: '13px',
    },
    definitionDesc: {
      margin: 0,
      color: '#475569',
      fontSize: '12px',
      lineHeight: 1.5,
    },
    alertInfo: {
      background: '#dbeafe',
      borderLeft: '3px solid #3b82f6',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    alertWarning: {
      background: '#fef3c7',
      borderLeft: '3px solid #eab308',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    alertError: {
      background: '#fee2e2',
      borderLeft: '3px solid #ef4444',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    alertSuccess: {
      background: '#d1fae5',
      borderLeft: '3px solid #10b981',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    alertGray: {
      background: '#f1f5f9',
      borderLeft: '3px solid #64748b',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    blockquote: {
      borderLeft: '3px solid #cbd5e1',
      paddingLeft: '15px',
      margin: '8px 0',
      color: '#64748b',
      fontStyle: 'italic',
      fontSize: '12px',
    },
    keyValue: {
      margin: '10px 0',
    },
    keyValueRow: {
      display: 'flex',
      padding: '6px 0',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '12px',
    },
    keyValueKey: {
      fontWeight: 600,
      color: '#1e40af',
      minWidth: '100px',
    },
    keyValueValue: {
      color: '#475569',
      flex: 1,
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      margin: '10px 0',
    },
    column: {
      padding: '10px',
      background: '#f8fafc',
      borderRadius: '4px',
      fontSize: '12px',
    },
    steps: {
      margin: '10px 0',
    },
    step: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '10px',
    },
    stepNumber: {
      background: '#3b82f6',
      color: 'white',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: '12px',
      marginRight: '10px',
      flexShrink: 0,
    },
    stepContent: {
      color: '#1e293b',
      fontSize: '12px',
      lineHeight: 1.5,
    },
    comparison: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      margin: '10px 0',
    },
    comparisonLeft: {
      padding: '10px',
      background: '#dbeafe',
      border: '2px solid #3b82f6',
      borderRadius: '4px',
      fontSize: '12px',
    },
    comparisonRight: {
      padding: '10px',
      background: '#fef3c7',
      border: '2px solid #eab308',
      borderRadius: '4px',
      fontSize: '12px',
    },
    comparisonTitle: {
      fontWeight: 600,
      marginBottom: '6px',
    },
    highlight: {
      background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
      border: '2px solid #3b82f6',
      padding: '12px',
      borderRadius: '6px',
      margin: '10px 0',
      textAlign: 'center',
      fontWeight: 600,
      color: '#1e40af',
      fontSize: '13px',
    },
    note: {
      fontSize: '12px',
      color: '#64748b',
      fontStyle: 'italic',
      marginTop: '5px',
    },
    visual: {
      margin: '10px 0',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  
  card: {
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      background: '#f0f4f8',
      padding: '25px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    headerTitle: {
      fontSize: '36px',
      color: '#1e40af',
      marginBottom: '8px',
      margin: 0,
    },
    headerSubtitle: {
      color: '#64748b',
      fontSize: '16px',
      margin: 0,
    },
    category: {
      marginBottom: '30px',
    },
    categoryHeader: {
      background: '#1e40af',
      color: 'white',
      padding: '10px 20px',
      fontSize: '18px',
      fontWeight: 600,
      borderRadius: '8px 8px 0 0',
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '15px',
      background: 'white',
      padding: '20px',
      borderRadius: '0 0 8px 8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    },
    cardBase: {
      background: 'white',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      padding: '15px',
      transition: 'all 0.2s',
      cursor: 'pointer',
    },
    cardTitle: {
      fontWeight: 600,
      color: '#1e293b',
      marginBottom: '10px',
      fontSize: '14px',
    },
    itemName: {
      fontWeight: 600,
      color: '#1e293b',
      marginBottom: '10px',
      fontSize: '14px',
    },
    formula: {
      fontFamily: 'Times New Roman, serif',
      fontSize: '18px',
      textAlign: 'center',
      padding: '12px',
      background: '#f8fafc',
      borderRadius: '6px',
      marginBottom: '8px',
      color: '#1e40af',
    },
    bulletList: {
      margin: '10px 0',
      paddingLeft: '20px',
      fontSize: '13px',
      color: '#1e293b',
      lineHeight: 1.6,
    },
    orderedList: {
      margin: '10px 0',
      paddingLeft: '20px',
      fontSize: '13px',
      color: '#1e293b',
      lineHeight: 1.6,
    },
    codeBlock: {
      background: '#1e293b',
      color: '#e2e8f0',
      padding: '12px',
      borderRadius: '6px',
      margin: '10px 0',
      fontSize: '12px',
      overflowX: 'auto',
    },
    codePre: {
      margin: 0,
      fontFamily: 'Courier New, monospace',
    },
    definition: {
      background: '#f8fafc',
      borderLeft: '3px solid #3b82f6',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '4px',
    },
    definitionTerm: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: '5px',
      fontSize: '13px',
    },
    definitionDesc: {
      margin: 0,
      color: '#475569',
      fontSize: '13px',
      lineHeight: 1.5,
    },
    alertInfo: {
      background: '#dbeafe',
      borderLeft: '3px solid #3b82f6',
      padding: '12px',
      margin: '10px 0',
      fontSize: '13px',
      borderRadius: '6px',
    },
    alertWarning: {
      background: '#fef3c7',
      borderLeft: '3px solid #eab308',
      padding: '12px',
      margin: '10px 0',
      fontSize: '13px',
      borderRadius: '6px',
    },
    alertError: {
      background: '#fee2e2',
      borderLeft: '3px solid #ef4444',
      padding: '12px',
      margin: '10px 0',
      fontSize: '13px',
      borderRadius: '6px',
    },
    alertSuccess: {
      background: '#d1fae5',
      borderLeft: '3px solid #10b981',
      padding: '12px',
      margin: '10px 0',
      fontSize: '13px',
      borderRadius: '6px',
    },
    alertGray: {
      background: '#f1f5f9',
      borderLeft: '3px solid #64748b',
      padding: '12px',
      margin: '10px 0',
      fontSize: '13px',
      borderRadius: '6px',
    },
    blockquote: {
      borderLeft: '3px solid #cbd5e1',
      paddingLeft: '15px',
      margin: '10px 0',
      color: '#64748b',
      fontStyle: 'italic',
      fontSize: '13px',
    },
    keyValue: {
      margin: '10px 0',
    },
    keyValueRow: {
      display: 'flex',
      padding: '8px 0',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '13px',
    },
    keyValueKey: {
      fontWeight: 600,
      color: '#1e40af',
      minWidth: '120px',
    },
    keyValueValue: {
      color: '#475569',
      flex: 1,
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      margin: '10px 0',
    },
    column: {
      padding: '12px',
      background: '#f8fafc',
      borderRadius: '6px',
      fontSize: '13px',
    },
    steps: {
      margin: '10px 0',
    },
    step: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '12px',
    },
    stepNumber: {
      background: '#3b82f6',
      color: 'white',
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: '13px',
      marginRight: '12px',
      flexShrink: 0,
    },
    stepContent: {
      color: '#1e293b',
      fontSize: '13px',
      lineHeight: 1.6,
    },
    comparison: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      margin: '10px 0',
    },
    comparisonLeft: {
      padding: '12px',
      background: '#dbeafe',
      border: '2px solid #3b82f6',
      borderRadius: '6px',
      fontSize: '13px',
    },
    comparisonRight: {
      padding: '12px',
      background: '#fef3c7',
      border: '2px solid #eab308',
      borderRadius: '6px',
      fontSize: '13px',
    },
    comparisonTitle: {
      fontWeight: 600,
      marginBottom: '6px',
    },
    highlight: {
      background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
      border: '2px solid #3b82f6',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px 0',
      textAlign: 'center',
      fontWeight: 600,
      color: '#1e40af',
      fontSize: '14px',
    },
    note: {
      fontSize: '12px',
      color: '#64748b',
      textAlign: 'center',
    },
    visual: {
      margin: '10px 0',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
    unitCircle: {
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
      marginTop: '20px',
    },
    unitCircleTitle: {
      color: '#1e40af',
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '15px',
      textAlign: 'center',
    },
    angleValues: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px',
    },
    angleBox: {
      background: '#f8fafc',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      padding: '12px',
      textAlign: 'center',
    },
    angleBoxAngle: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: '6px',
      fontSize: '14px',
    },
    angleBoxValues: {
      fontSize: '12px',
      color: '#475569',
      lineHeight: 1.6,
    },
  },
  
  print: {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      background: 'white',
      padding: '30px 40px',
    },
    header: {
      textAlign: 'center',
      borderBottom: '3px solid #1e40af',
      paddingBottom: '20px',
      marginBottom: '30px',
    },
    headerTitle: {
      fontSize: '32px',
      color: '#1e40af',
      marginBottom: '5px',
      fontWeight: 700,
      margin: 0,
    },
    headerSubtitle: {
      color: '#64748b',
      fontSize: '14px',
      fontStyle: 'italic',
      margin: 0,
    },
    twoColumns: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
    },
    section: {
      marginBottom: '25px',
    },
    sectionTitle: {
      color: '#1e40af',
      fontSize: '18px',
      fontWeight: 700,
      borderBottom: '2px solid #3b82f6',
      paddingBottom: '5px',
      marginBottom: '12px',
    },
    topic: {
      marginBottom: '15px',
      padding: '10px',
      background: '#f8fafc',
      borderLeft: '3px solid #3b82f6',
    },
    topicName: {
      fontWeight: 600,
      color: '#1e40af',
      fontSize: '14px',
      marginBottom: '6px',
    },
    itemName: {
      fontWeight: 600,
      color: '#1e40af',
      fontSize: '14px',
      marginBottom: '6px',
    },
    formula: {
      fontFamily: 'Courier New, monospace',
      background: 'white',
      border: '1px solid #cbd5e1',
      padding: '8px 12px',
      margin: '8px 0',
      fontSize: '14px',
      textAlign: 'center',
    },
    bulletList: {
      margin: '10px 0',
      paddingLeft: '20px',
      fontSize: '13px',
      color: '#1e293b',
      lineHeight: 1.6,
    },
    orderedList: {
      margin: '10px 0',
      paddingLeft: '20px',
      fontSize: '13px',
      color: '#1e293b',
      lineHeight: 1.6,
    },
    codeBlock: {
      background: '#1e293b',
      color: '#e2e8f0',
      padding: '10px',
      borderRadius: '4px',
      margin: '8px 0',
      fontSize: '12px',
      overflowX: 'auto',
    },
    codePre: {
      margin: 0,
      fontFamily: 'Courier New, monospace',
    },
    definition: {
      background: '#f8fafc',
      borderLeft: '3px solid #3b82f6',
      padding: '10px',
      margin: '8px 0',
    },
    definitionTerm: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: '4px',
      fontSize: '13px',
    },
    definitionDesc: {
      margin: 0,
      color: '#475569',
      fontSize: '12px',
      lineHeight: 1.5,
    },
    alertInfo: {
      background: '#dbeafe',
      borderLeft: '3px solid #3b82f6',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    alertWarning: {
      background: '#fef3c7',
      borderLeft: '3px solid #eab308',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    alertError: {
      background: '#fee2e2',
      borderLeft: '3px solid #ef4444',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    alertSuccess: {
      background: '#d1fae5',
      borderLeft: '3px solid #10b981',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    alertGray: {
      background: '#f1f5f9',
      borderLeft: '3px solid #64748b',
      padding: '10px',
      margin: '8px 0',
      fontSize: '12px',
      borderRadius: '4px',
    },
    blockquote: {
      borderLeft: '3px solid #cbd5e1',
      paddingLeft: '15px',
      margin: '8px 0',
      color: '#64748b',
      fontStyle: 'italic',
      fontSize: '12px',
    },
    keyValue: {
      margin: '10px 0',
    },
    keyValueRow: {
      display: 'flex',
      padding: '6px 0',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '12px',
    },
    keyValueKey: {
      fontWeight: 600,
      color: '#1e40af',
      minWidth: '100px',
    },
    keyValueValue: {
      color: '#475569',
      flex: 1,
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      margin: '10px 0',
    },
    column: {
      padding: '10px',
      background: '#f8fafc',
      borderRadius: '4px',
      fontSize: '12px',
    },
    steps: {
      margin: '10px 0',
    },
    step: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '10px',
    },
    stepNumber: {
      background: '#3b82f6',
      color: 'white',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: '12px',
      marginRight: '10px',
      flexShrink: 0,
    },
    stepContent: {
      color: '#1e293b',
      fontSize: '12px',
      lineHeight: 1.5,
    },
    comparison: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      margin: '10px 0',
    },
    comparisonLeft: {
      padding: '10px',
      background: '#dbeafe',
      border: '2px solid #3b82f6',
      borderRadius: '4px',
      fontSize: '12px',
    },
    comparisonRight: {
      padding: '10px',
      background: '#fef3c7',
      border: '2px solid #eab308',
      borderRadius: '4px',
      fontSize: '12px',
    },
    comparisonTitle: {
      fontWeight: 600,
      marginBottom: '6px',
    },
    highlight: {
      background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
      border: '2px solid #3b82f6',
      padding: '12px',
      borderRadius: '6px',
      margin: '10px 0',
      textAlign: 'center',
      fontWeight: 600,
      color: '#1e40af',
      fontSize: '13px',
    },
    description: {
      fontSize: '13px',
      color: '#475569',
      marginTop: '5px',
      lineHeight: 1.5,
    },
    example: {
      background: '#fef3c7',
      borderLeft: '3px solid #eab308',
      padding: '8px 10px',
      marginTop: '8px',
      fontSize: '12px',
      color: '#1e40af',
    },
    exampleLabel: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: '3px',
    },
    visual: {
      margin: '10px 0',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '10px 0',
      fontSize: '12px',
    },
    tableHeader: {
      background: '#1e40af',
      color: 'white',
      padding: '6px',
      textAlign: 'left',
    },
    tableCell: {
      border: '1px solid #cbd5e1',
      padding: '6px',
    },
    note: {
      fontSize: '12px',
      color: '#64748b',
      fontStyle: 'italic',
      marginTop: '5px',
    },
  },
};

export default CheatSheet;