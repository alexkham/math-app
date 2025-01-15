const CustomSvgIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
  );

  const CustomSearch=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>

  )

  const CustomCalculator=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
  )

  const CustomVisual=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
  )
  
const CustomTable=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
)

const CustomKeyboard=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-keyboard"><path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>
)

const CustomWrench=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
)

const CustomConvert=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-right"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>
)


     export const mainSidebarMenu = [
  { id: 1, icon: CustomVisual, tooltip: 'Visual Tools', 
    content: [
        { text: 'Base Converter', url: '/visual-tools/base-converter' },
        { text: 'Square Root Visualizer', url: '/visual-tools/square-root' },
        { text: 'Determinant Visual Calculator', url: '/visual-tools/determinant-calculator' },
        { text: 'Gauss Elinination Calculator', url: '/visual-tools/gauss-elimination' },
        { text: 'Matrix Multiplication Visualizer', url: '/visual-tools/matrix-multiplication' },
        { text: 'Matric Transposition', url: '/visual-tools/matrix-transposition' },
        { text: 'Permutations Visualizer', url: '/combinatorics/permutations/permutations-visualizer' },
        { text: 'Unit Circle Visualizer', url: '/visual-tools/unit-circle' },
    ] },
  { id: 2, icon: CustomCalculator, tooltip: 'Calculators', content:[
    { text: 'Statistics Calculator', url: '/calculators/statistics-calculator' },
    { text: 'Trigonometry Calculator', url: '/calculators/trigonometry-calculator' },
    { text: 'Quadratic Equations  Calculator', url: '/calculators/quadratic-equations' },
    { text: 'Root Calculator', url: '/calculators/root-calculator' },
    { text: 'Logarithmic Calculator', url: '/calculators/log-calculator' },
    { text: 'Exponent Calculator', url: '/calculators/exponent-calculator' },
    { text: 'Factoring Calculator', url: '/calculators/factoring-calculator' },
    { text: 'Polynomial Calculator', url: '/calculators/polynomial-calculator' },
   
  ]},
  // { id: 3, icon: FileText, tooltip: 'Files', content: 'FilesComponent' },
  // { id: 4, icon: Settings, tooltip: 'Settings', content: 'SettingsComponent' },
  { id: 3, icon: CustomTable, tooltip: 'Tables', 
    content:[ 
        { text: 'Probability Tables', url: '/tables/probability' },
        { text: 'Arithmetics Tables', url: '/tables/arithmetics' },
        { text: 'Mathematical Symbols', url: '/math-symbols' },
        { text: 'Truth Tables', url: '/tables/truth-tables' },
        
    ] },
  { id: 4, icon: CustomKeyboard, tooltip: 'Mathematical Keyboard', 
    content: [
        { text: 'Mathematical Keyboard', url: '/keyboard' },
    ] },
  // { id: 5, icon: Settings, tooltip: 'Settings2', content:  `Settings panel goes here.\n\nEmpty lines are preserved.

  //      Indentation is also kept.` },

  { id: 5, icon: CustomConvert, tooltip: 'Converters', 
    content: [
        { text: 'Angle Converter', url: '/converters/degree-radians' },
       
    ] },
  { id: 6, icon: CustomWrench, tooltip: 'Other Tools', 
    content: [
        { text: 'Truth Tables Generator', url: '/logic/truth-tables' },
        { text: 'Venn Diagrams Generator', url: '/set-theory/venn-generator' },
    ] },
   
];