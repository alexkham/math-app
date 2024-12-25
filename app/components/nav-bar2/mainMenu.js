
export const mainMenuStructure = [
    {
      id: 'home',
      type: 'link',
      label: 'Home',
      href: '/'
    },
    {
      id: 'placeholder',
      type: 'link',
      label: '',
      href: ''
    }
    ,
    {
      id: 'sections',
      type: 'megamenu',
      label: 'Featured Topics',
      href: '',
      columns: [
        {
          items: [
            { label: 'Algebra', href: '/algebra' },
            { label: 'Calculus', href: '/calculus' },
            { label: 'Trigonometry', href: '/trigonometry' },
            { label: 'Combinatorics', href: '/combinatorics' },
            { label: 'Set Theory', href: '/set-theory' },
            { label: 'Sequences', href: '/sequences' },
            { label: 'Linear Algebra', href: '/linear-algebra' },
            { label: 'Probability', href: '/probability' },
            { label: 'Mathematical Logic', href: '/logic' }
          ]
        }
      ]
    },
    {
      id: 'placeholder',
      type: 'link',
      label: '',
      href: ''
    },
   
    {
      id: 'resources',
      type: 'megamenu',
      label: 'Resources',
      href: '',
      columns: [
        {
          title: 'Visual Tools',
          href: '/visual-tools',
          items: [
            { label: 'Base Converter', href: '/visual-tools/base-converter' },
            { label: 'Square Root Visualizer', href: '/visual-tools/square-root' },
            { label: 'Determinant Visual Calculator', href: '/visual-tools/determinant-calculator' },
            { label: 'Gauss Elimination Calculator', href: '/visual-tools/gauss-elimination' },
            { label: 'Matrix Multiplication Visualizer', href: '/visual-tools/matrix-multiplication' },
            { label: 'Matrix Transposition', href: '/visual-tools/matrix-transposition' },
            { label: 'Permutations Visualizer', href: '/combinatorics/permutations/permutations-visualizer' },
            { label: 'Unit Circle Visualizer', href: '/visual-tools/unit-circle' }
          ]
        },
        {
          title: 'Calculators',
          href: '/calculators',
          items: [
            { label: 'Statistics Calculator', href: '/calculators/statistics-calculator' },
            { label: 'Trigonometry Calculator', href: '/calculators/trigonometry-calculator' },
            { label: 'Quadratic Equations Calculator', href: '/calculators/quadratic-equations' },
            { label: 'Root Calculator', href: '/calculators/root-calculator' },
            { label: 'Logarithmic Calculator', href: '/calculators/log-calculator' },
            { label: 'Exponent Calculator', href: '/calculators/exponent-calculator' },
            { label: 'Factoring Calculator', href: '/calculators/factoring-calculator' },
            { label: 'Polynomial Calculator', href: '/calculators/polynomial-calculator' },
            
          ]
        },
        {
            title: 'Generators',
            href: '',
            items: [
              { label: 'Venn Diagrams Generator', href: '/set-theory/venn-generator' },
              { label: 'Truth Tables Generator', href: '/logic/truth-tables' },
              
            ]
          },
          {
            title: 'Converters',
            href: '/converters',
            items: [
              { label: 'Angle Converter', href: '/converters/degree-radians' },
              
              
            ]
          },
       
        {
          title: 'Tables',
          href: '/tables',
          items: [
            { label: 'Basic Math', href: '/tables/arithmetics' },
            { label: 'Probability', href: '/tables/probability' },
            { label: 'Mathematical Symbols', href: '/math-symbols' },
           
          ]
        },
        {
          title: 'Other Tools',
          href: '',
          items: [
            { label: 'Mathematical Keyboard', href: '/keyboard' },
            
          ]
        }
      ]
    },
   
    
    {
      id: 'placeholder',
      type: 'link',
      label: '',
      href: ''
    },
  ];
  