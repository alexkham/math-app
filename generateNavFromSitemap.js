/**
 * generateNavFromSitemap.js
 * Put this file in your project ROOT (same level as package.json)
 * 
 * It reads: public/sitemap.xml
 * It writes: nav-bar3/mainMenu.js
 */

const fs = require('fs');
const path = require('path');

// Configuration for YOUR project
const CONFIG = {
  sitemapPath: path.join(__dirname, 'public/sitemap.xml'),
  outputPath: path.join(__dirname, 'app/components/nav-bar3/mainMenu.js'),
  baseUrl: 'https://www.learnmathclass.com',
  
  // Featured Topics categories
  featuredTopics: [
    { path: '/algebra', label: 'Algebra' },
    { path: '/calculus', label: 'Calculus' },
    { path: '/trigonometry', label: 'Trigonometry' },
    { path: '/combinatorics', label: 'Combinatorics' },
    { path: '/linear-algebra', label: 'Linear Algebra' },
    { path: '/probability', label: 'Probability' },
    { path: '/logic', label: 'Mathematical Logic' },
    { path: '/set-theory', label: 'Set Theory' },
    { path: '/sequences', label: 'Sequences' }
  ],
  
  // Resources sections
  resourceSections: {
    'Visual Tools': {
      href: '/visual-tools',
      pathPatterns: [
        '/visual-tools/',
        '/combinatorics/permutations/permutations-visualizer',
        '/trigonometry/quadrants',
        '/logic/propositional-logic/syntax/tree-builder',
        '/probability/distributions/discrete/visualizer',
        '/probability/distributions/continuous/visualizer',
        '/probability/visual-tools/'
      ]
    },
    'Calculators': {
      href: '/calculators',
      pathPatterns: [
        '/calculators/',
        '/combinatorics/calculator',
        '/probability/calculators/'
      ]
    },
    'Solvers': {
      pathPatterns: [
        '/algebra/equations/linear/solver',
        '/logic/propositional-logic/semantics/equivalence-validator',
        'quadratic-equations'
      ]
    },
    'Generators': {
      pathPatterns: [
        '/set-theory/venn-generator',
        '/logic/truth-tables'
      ],
      exclude: ['/tables/truth-tables']
    },
    'Converters': {
      href: '/converters',
      pathPatterns: [
        '/converters/',
        '/logic/propositional-logic/syntax/normal-forms'
      ]
    },
    'Tables': {
      href: '/tables',
      pathPatterns: [
        '/tables/',
        '/math-symbols'
      ],
      exclude: ['/tables/truth-tables']
    },
    'Other Tools': {
      pathPatterns: ['/keyboard']
    }
  }
};

// Convert path to label (e.g., "/algebra/definitions" -> "Definitions")
function pathToLabel(path) {
  return path
    .split('/')
    .pop()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Extract URLs from sitemap.xml
function extractUrlsFromSitemap(sitemapContent) {
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(sitemapContent)) !== null) {
    const url = match[1].replace(CONFIG.baseUrl, '');
    if (url && url !== '/') {
      urls.push(url);
    }
  }
  
  return urls;
}

// Get immediate children (one level down)
function getImmediateChildren(basePath, allPaths) {
  const baseDepth = basePath.split('/').filter(Boolean).length;
  
  return allPaths
    .filter(path => {
      if (!path.startsWith(basePath + '/')) return false;
      const pathDepth = path.split('/').filter(Boolean).length;
      return pathDepth === baseDepth + 1;
    })
    .sort();
}

// Check if path matches pattern
function matchesPattern(path, patterns, excludes = []) {
  if (excludes.some(exclude => path === exclude || path.startsWith(exclude))) {
    return false;
  }
  
  return patterns.some(pattern => {
    if (pattern.endsWith('/')) {
      return path.startsWith(pattern);
    }
    return path === pattern || path.includes(pattern);
  });
}

// Generate Featured Topics
function generateFeaturedTopics(allPaths) {
  const columns = CONFIG.featuredTopics.map(topic => {
    const children = getImmediateChildren(topic.path, allPaths);
    
    return {
      title: topic.label,
      href: topic.path,
      items: children.map(path => ({
        label: pathToLabel(path),
        href: path
      }))
    };
  });
  
  return {
    id: 'featured-topics',
    type: 'megamenu',
    label: 'Featured Topics',
    href: '',
    columns
  };
}

// Generate Resources
function generateResourcesSection(allPaths) {
  const columns = Object.entries(CONFIG.resourceSections).map(([title, config]) => {
    const matchingPaths = allPaths.filter(path => 
      matchesPattern(path, config.pathPatterns, config.exclude || [])
    );
    
    const items = matchingPaths.map(path => {
      let label = pathToLabel(path);
      
      if (path.includes('conditional-probability/')) {
        const method = pathToLabel(path);
        label = `Conditional Probability - ${method}`;
      } else if (path.includes('venn-diagrams/')) {
        const type = pathToLabel(path);
        label = `Venn Diagrams - ${type}`;
      } else if (path === '/visual-tools' || path === '/calculators' || 
                 path === '/converters' || path === '/tables') {
        label = `All ${title}`;
      }
      
      return { label, href: path };
    });
    
    items.sort((a, b) => {
      if (a.label.startsWith('All ')) return -1;
      if (b.label.startsWith('All ')) return 1;
      return a.label.localeCompare(b.label);
    });
    
    const column = { title, items };
    if (config.href) {
      column.href = config.href;
    }
    
    return column;
  });
  
  return {
    id: 'resources',
    type: 'megamenu',
    label: 'Resources',
    href: '',
    columns
  };
}

// MAIN FUNCTION
function generateNavStructure() {
  console.log('🚀 Generating navigation from sitemap...\n');
  
  // Read sitemap
  if (!fs.existsSync(CONFIG.sitemapPath)) {
    console.error(`❌ Sitemap not found at: ${CONFIG.sitemapPath}`);
    process.exit(1);
  }
  
  const sitemapContent = fs.readFileSync(CONFIG.sitemapPath, 'utf-8');
  const allPaths = extractUrlsFromSitemap(sitemapContent);
  
  console.log(`📄 Found ${allPaths.length} URLs in sitemap`);
  
  // Generate structure
  const navStructure = [
    {
      id: 'home',
      type: 'link',
      label: 'Home',
      href: '/'
    },
    generateFeaturedTopics(allPaths),
    generateResourcesSection(allPaths)
  ];
  
  // Generate output file
  const outputContent = `/**
 * Auto-generated from sitemap.xml
 * Generated: ${new Date().toISOString()}
 * Total pages: ${allPaths.length}
 * 
 * To regenerate: node generateNavFromSitemap.js
 */

export const mainMenuStructure = ${JSON.stringify(navStructure, null, 2)};
`;
  
  // Ensure directory exists
  const outputDir = path.dirname(CONFIG.outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(CONFIG.outputPath, outputContent, 'utf-8');
  
  console.log(`\n✅ Generated: ${CONFIG.outputPath}`);
  
  // Summary
  const featuredTopics = navStructure[1];
  const resources = navStructure[2];
  
  console.log('\n📊 Summary:');
  console.log(`   Featured Topics: ${featuredTopics.columns.length} categories`);
  featuredTopics.columns.forEach(col => {
    console.log(`      - ${col.title}: ${col.items.length} items`);
  });
  
  console.log(`\n   Resources: ${resources.columns.length} sections`);
  resources.columns.forEach(col => {
    console.log(`      - ${col.title}: ${col.items.length} items`);
  });
}

// Run
if (require.main === module) {
  try {
    generateNavStructure();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

module.exports = { generateNavStructure };