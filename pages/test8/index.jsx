import React from 'react';
import MathProofFlow from '@/app/components/examples/MathProofFlow';
import themes from '@/app/components/examples/mathProofThemes';
import FourPanel from '@/app/components/page-components/lists/FourPanel';
import HorizontalCardGroup from '@/app/components/cards/HorizontalCardGroup';
import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup';
import NewCardGroup from '@/app/components/cards/NewCardGroup';


const mockSteps = [
  'Step 1: Define the problem.',
  'Step 2: Analyze the given data.',
  'Step 3: Apply the relevant formulas.',
  'Step 4: Simplify the expressions.',
  'Step 5: Arrive at the solution.',
  'Step 6: Verify the results.'
];

const mockFourPanelData = [
  { title: 'Panel 1', content: 'Content for Panel 1 \n\n\n $x^2$' },
  { title: 'Panel 2', content: 'Content for Panel 2' },
  { title: 'Panel 3', content: 'Content for Panel 3' },
  { title: 'Panel 4', content: 'Content for Panel 4' }
];

const Test8Page = () => {

// mockData.js


const mockData = {
  title: 'Propositional Logic Elements',
  items: [
    {
      title: 'Atomic Formulas',
      description: 'Basic, indivisible statements forming logic\'s foundation.',
      color: '#f1c40f',  // Yellow color
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f1c40f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      //     <circle cx="12" cy="12" r="5"></circle>
      //     <path d="M12 1v2"></path>
      //     <path d="M12 21v2"></path>
      //     <path d="M4.22 4.22l1.42 1.42"></path>
      //     <path d="M18.36 18.36l1.42 1.42"></path>
      //     <path d="M1 12h2"></path>
      //     <path d="M21 12h2"></path>
      //     <path d="M4.22 19.78l1.42-1.42"></path>
      //     <path d="M18.36 5.64l1.42-1.42"></path>
      //   </svg>
      // ),
      titleColor: '#f39c12'
    },
    {
      title: 'Logical Connectives',
      description: 'Operators combining formulas, like AND, OR, NOT.',
      color: '#8bc34a',  // Green color
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8bc34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      //     <path d="M10 3L8 21"></path>
      //     <path d="M16 3l2 18"></path>
      //     <path d="M7 12h10"></path>
      //     <path d="M5 7l4 4-4 4"></path>
      //     <path d="M19 7l-4 4 4 4"></path>
      //   </svg>
      // ),
      titleColor: '#689f38'
    },
    {
      title: 'Well-Formed Formulas',
      description: 'Correctly structured expressions adhering to formation rules.',
      color: '#1abc9c',  // Teal color
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1abc9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      //     <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      //     <line x1="9" y1="9" x2="15" y2="9"></line>
      //     <line x1="9" y1="15" x2="15" y2="15"></line>
      //     <line x1="9" y1="12" x2="15" y2="12"></line>
      //   </svg>
      // ),
      titleColor: '#16a085'
    },
    {
      title: 'Formation Rules',
      description: 'Guidelines defining valid formula construction and syntax.',
      color: '#3498db',  // Blue color
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      //     <line x1="17" y1="7" x2="7" y2="17"></line>
      //     <polyline points="17 17 7 17 7 7"></polyline>
      //   </svg>
      // ),
      titleColor: '#2980b9'
    },
    {
      title: 'Use of Parentheses',
      description: 'Clarifying expression order and preventing ambiguity.',
      color: '#3f51b5',  // Indigo color
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      //     <path d="M8 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
      //     <path d="M15 3v18"></path>
      //   </svg>
      // ),
      titleColor: '#c9cce0'
    },
    {
      title: 'Use of Parentheses',
      description: 'Clarifying expression order and preventing ambiguity.',
      color: '#3f51b5',  // Indigo color
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      //     <path d="M8 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
      //     <path d="M15 3v18"></path>
      //   </svg>
      // ),
      titleColor: '#c9cce0'
    },
    
  ]
};

const mockItems = [
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics dashboard with real-time data visualization and reporting tools.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 2,
    href: "/analytics"
  },
  {
    title: "Team Management",
    description: "Manage your team members, roles, and permissions with our easy-to-use interface.",
    backgroundColor: "#EEF2FF", // Light indigo
    textColor: "#4F46E5",
    ratio: 1,
    href: "/team"
  },
  {
    title: "Product Showcase",
    description: "Display your products with customizable layouts and detailed specifications.",
    image: "/images/product-showcase.jpg",
    backgroundColor: "#F9FAFB", // Light gray
    textColor: "#1F2937",
    ratio: 1,
    href: "/products"
  },
  {
    title: "System Settings",
    description: "Configure your system settings and preferences for optimal performance.",
    backgroundColor: "#1F2937", // Dark gray
    textColor: "#F9FAFB",
    ratio: 2,
    href: "/settings"
  },
  {
    title: "Innovation Lab",
    description: "Explore cutting-edge features and experimental tools in our innovation lab.",
    image: "/images/innovation-lab.jpg",
    backgroundColor: "#FEF3C7", // Light amber
    textColor: "#92400E",
    ratio: 3,
    href: "/innovation"
  },
  {
    title: "Security Center",
    description: "Monitor and manage your security settings, permissions, and access controls.",
    backgroundColor: "#ECFDF5", // Light green
    textColor: "#065F46",
    ratio: 1,
    href: "/security"
  },
  {
    title: "AI Features",
    description: "Leverage our AI-powered tools to automate workflows and gain insights.",
    image: "/images/ai-features.jpg",
    backgroundColor: "#7C3AED", // Purple
    textColor: "#ffffff",
    ratio: 2,
    href: "/ai-features"
  },
  {
    title: "Global Marketplace",
    description: "Connect with partners and customers worldwide through our global marketplace.",
    backgroundColor: "#DBEAFE", // Light blue
    textColor: "#1E40AF",
    ratio: 2,
    href: "/marketplace"
  }
];

// Mock data for NewCardGroup
const newMockData = [
  {
    name: "web development",
    description: "build responsive websites with modern frameworks and tools",
    path: "/categories/web-development",
    backgroundColor: "#3b82f6",
    textColor: "#ffffff",
    footerColor: "#2563eb"
  },
  {
    name: "mobile apps",
    description: "create native and cross-platform mobile applications",
    path: "/categories/mobile-apps",
    backgroundColor: "#10b981",
    textColor: "#ffffff",
    footerColor: "#059669"
  },
  {
    name: "data science",
    description: "analyze and visualize complex data sets",
    path: "/categories/data-science",
    backgroundColor: "#8b5cf6",
    textColor: "#ffffff",
    footerColor: "#7c3aed"
  },
  {
    name: "cloud computing",
    description: "deploy and manage applications in the cloud",
    path: "/categories/cloud-computing",
    backgroundColor: "#f59e0b",
    textColor: "#ffffff",
    footerColor: "#d97706"
  },
  {
    name: "cybersecurity",
    description: "protect systems and networks from digital attacks",
    path: "/categories/cybersecurity",
    backgroundColor: "#ef4444",
    textColor: "#ffffff",
    footerColor: "#dc2626"
  },
  {
    name: "artificial intelligence",
    description: "implement machine learning and ai algorithms",
    path: "/categories/ai",
    backgroundColor: "#6366f1",
    textColor: "#ffffff",
    footerColor: "#4f46e5"
  },
  {
    name: "devops",
    description: "streamline development and operations workflows",
    path: "/categories/devops",
    backgroundColor: "#ec4899",
    textColor: "#ffffff",
    footerColor: "#db2777"
  },
  // {
  //   name: "blockchain",
  //   description: "build decentralized applications and smart contracts",
  //   path: "/categories/blockchain",
  //   backgroundColor: "#14b8a6",
  //   textColor: "#ffffff",
  //   footerColor: "#0d9488"
  // }
];


const proofSteps = [
  ` Write the sequence at the top of the page.
  
  `,
  " If the sequence is atomic (a simple proposition), mark it as a valid elementary sentence.",
  "If the sequence starts with a negation (¬), extract the sub-sequence without the negation and analyze it.",
  " If the sequence is enclosed in parentheses, check whether it’s a compound sentence with a binary connective. Remove the outer parentheses and split the sequence into left and right parts.",
  " Recursively repeat steps 2–4 for each sub-sequence. If any sub-sequence fails the rules, the whole expression is invalid. Otherwise, it’s a well-formed formula."
];



  return (
    <div>
      <h1>Welcome to Test8 Page</h1>
      <p>This is a placeholder for the Test8 page content.</p>

      <h2>Ocean Theme</h2>
      <FourPanel data={mockFourPanelData} theme="ocean" />

      <h2>Sunset Theme</h2>
      <FourPanel data={mockFourPanelData} theme="sunset" />

      <h2>Night Sky Theme</h2>
      <FourPanel data={mockFourPanelData} theme="nightsky" />

      <h2>Default Theme</h2>
      <MathProofFlow steps={mockSteps} title="Default Theme" theme="default" />

      <h2>Modern Theme</h2>
      <MathProofFlow steps={mockSteps} title="Modern Theme" theme="modern" />

      <h2>Elegant Theme</h2>
      <MathProofFlow steps={mockSteps} title="Elegant Theme" theme="elegant" />

      <h2>Tech Theme</h2>
      <MathProofFlow steps={mockSteps} title="Tech Theme" theme="tech" />

      <h2>Academic Theme</h2>
      <MathProofFlow steps={mockSteps} title="Academic Theme" theme="academic" />

      <h2>Dark Theme</h2>
      <MathProofFlow steps={mockSteps} title="Dark Theme" theme="dark" />

      <h2>Minimal Theme</h2>
      <MathProofFlow steps={mockSteps} title="Minimal Theme" theme="minimal" />

      <h2>Colorful Theme</h2>
      <MathProofFlow steps={mockSteps} title="Colorful Theme" theme="colorful" />

      <h2>Paper Theme</h2>
      <MathProofFlow steps={mockSteps} title="Paper Theme" theme="paper" />

      <h2>Gradient Blue Theme</h2>
      <MathProofFlow steps={mockSteps} title="Gradient Blue Theme" theme="gradientBlue" />

      <h2>Chalkboard Theme</h2>
      <MathProofFlow steps={mockSteps} title="Chalkboard Theme" theme="chalkboard" />

      <h2>Blueprint Theme</h2>
      <MathProofFlow steps={mockSteps} title="Blueprint Theme" theme="blueprint" />

      <h2>Neon Night Theme</h2>
      <MathProofFlow steps={mockSteps} title="Neon Night Theme" theme="neonNight" />

      <h2>Vintage Theme</h2>
      <MathProofFlow steps={mockSteps} title="Vintage Theme" theme="vintage" />

   <div style={{width:'80%',marginLeft:'200px'}}>
      <HorizontalCardGroup data={mockData}/>
      </div>
      <br/>
      <br/>
      <br/>
      <ModernCardsGroup items={mockItems}/>
      <br/>
      <br/>
      <br/>
      <NewCardGroup cards={newMockData}
      linkTitle='Explore'/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{width:'1000px'}}>
      <MathProofFlow steps={proofSteps} title="Syntax Tree" theme='tailwind_alert_reversed' />
      </div>
      <br/>
      <br/>
    </div>


  );
};

export default Test8Page;