
export const limitsDiagrams={
    Notation_Breakdown:{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <!-- Background -->
  <rect width="1000" height="700" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="500" y="40" text-anchor="middle" font-family="Times New Roman, serif" font-size="28" font-weight="bold" fill="#2c3e50">
    Understanding Limit Notation
  </text>
  
  <!-- Main limit expression in large text -->
  <g id="main-expression">
    <!-- Background box for the expression - moved left by 30px -->
    <rect x="170" y="80" width="600" height="120" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="10"/>
    
    <!-- The limit expression -->
    <text x="500" y="140" text-anchor="middle" font-family="Times New Roman, serif" font-size="48">
      <tspan x="350" dy="0" font-style="italic" fill="#e74c3c">lim</tspan>
      <tspan x="445" dy="0" font-size="24" fill="#333">(</tspan>
      <tspan x="465" dy="0" font-style="italic" fill="#27ae60">f</tspan>
      <tspan x="485" dy="0" font-size="24" fill="#333">(</tspan>
      <tspan x="500" dy="0" font-style="italic" fill="#27ae60">x</tspan>
      <tspan x="520" dy="0" font-size="24" fill="#333">)</tspan>
      <tspan x="540" dy="0" font-size="24" fill="#333">)</tspan>
    </text>
    
    <!-- Subscript - moved right by another 20px -->
    <text x="390" y="165" font-family="Times New Roman, serif" font-size="24" fill="#3498db">
      <tspan x="390" dy="0" font-style="italic">x</tspan>
      <tspan x="405" dy="0">→</tspan>
      <tspan x="425" dy="0" font-style="italic">a</tspan>
    </text>
  </g>
  
  <!-- Arrow and explanation for "lim" -->
  <g id="lim-explanation">
    <path d="M 350 200 Q 250 240 150 280 L 100 310" stroke="#e74c3c" stroke-width="3" fill="none" marker-end="url(#arrowhead-red)"/>
    <rect x="10" y="320" width="280" height="80" fill="#fff5f5" stroke="#e74c3c" stroke-width="2" rx="8"/>
    <text x="150" y="345" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e74c3c">
      "lim" = LIMIT
    </text>
    <text x="150" y="365" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      This tells us we're finding the limit
    </text>
    <text x="150" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      (the value a function approaches)
    </text>
  </g>
  
  <!-- Arrow and explanation for the subscript -->
  <g id="subscript-explanation">
    <path d="M 408 200 Q 408 220 408 240 L 408 260" stroke="#3498db" stroke-width="3" fill="none" marker-end="url(#arrowhead-blue)"/>
    <rect x="293" y="270" width="230" height="100" fill="#f0f8ff" stroke="#3498db" stroke-width="2" rx="8"/>
    <text x="408" y="295" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#3498db">
      x → a
    </text>
    <text x="408" y="315" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      "x approaches a"
    </text>
    <text x="408" y="335" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      This is the INPUT value
    </text>
    <text x="408" y="355" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      that x gets closer and closer to
    </text>
  </g>
  
  <!-- Arrow and explanation for the function -->
  <g id="function-explanation">
    <path d="M 500 200 Q 560 220 620 240 L 680 260" stroke="#27ae60" stroke-width="3" fill="none" marker-end="url(#arrowhead-green)"/>
    <rect x="580" y="270" width="320" height="100" fill="#f0fff0" stroke="#27ae60" stroke-width="2" rx="8"/>
    <text x="740" y="295" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#27ae60">
      f(x)
    </text>
    <text x="740" y="315" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      This is the FUNCTION
    </text>
    <text x="740" y="335" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      We want to know what value this
    </text>
    <text x="740" y="355" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      expression approaches as x → a
    </text>
  </g>
  
  <!-- Complete interpretation -->
  <g id="complete-interpretation">
    <rect x="150" y="420" width="700" height="180" fill="#fff9e6" stroke="#f39c12" stroke-width="3" rx="10"/>
    <text x="500" y="450" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#f39c12">
      Complete Translation:
    </text>
    
    <text x="500" y="485" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#333">
      "What value does f(x) approach as x gets closer and closer to a?"
    </text>
    
    <text x="500" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#666">
      This notation means:
    </text>
    <text x="500" y="545" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#666">
      • We have some function f(x)
    </text>
    <text x="500" y="565" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#666">
      • We want to see what happens as x approaches the value a
    </text>
    <text x="500" y="585" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#666">
      • We're looking for the limit value (if it exists)
    </text>
  </g>
  
  <!-- Answer box -->
  <g id="answer">
    <rect x="350" y="620" width="300" height="60" fill="#e8f5e8" stroke="#27ae60" stroke-width="3" rx="8"/>
    <text x="500" y="645" text-anchor="middle" font-family="Times New Roman, serif" font-size="24" font-weight="bold" fill="#27ae60">
      General Form
    </text>
    <text x="500" y="665" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      This is the standard notation for any limit problem
    </text>
  </g>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
    </marker>
    <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#3498db"/>
    </marker>
    <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#27ae60"/>
    </marker>
  </defs>
  
  <!-- Decorative elements -->
  <circle cx="100" cy="100" r="3" fill="#e74c3c" opacity="0.3"/>
  <circle cx="900" cy="100" r="3" fill="#3498db" opacity="0.3"/>
  <circle cx="100" cy="600" r="3" fill="#27ae60" opacity="0.3"/>
  <circle cx="900" cy="600" r="3" fill="#f39c12" opacity="0.3"/>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    }
}