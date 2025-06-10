
export const identitiesData={
    "Trinomial Multiplication":{
        svg:`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    (a + b + c)(d + e + f) = ad + ae + af + bd + be + bf + cd + ce + cf
  </text>
  
  <!-- Rectangle Grid Visualization -->
  <g transform="translate(50, 100)">
    <text x="150" y="-40" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Rectangle Grid Visualization
    </text>
    
    <!-- Top labels (d + e + f) -->
    <text x="85" y="0" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">d</text>
    <text x="155" y="0" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">e</text>
    <text x="220" y="0" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">f</text>
    
    <!-- Side labels (a + b + c) -->
    <text x="-20" y="50" text-anchor="middle" font-size="14" fill="#3498db" font-weight="bold">a</text>
    <text x="-20" y="110" text-anchor="middle" font-size="14" fill="#3498db" font-weight="bold">b</text>
    <text x="-20" y="175" text-anchor="middle" font-size="14" fill="#3498db" font-weight="bold">c</text>
    
    <!-- Define patterns -->
    <defs>
      <pattern id="stripes" patternUnits="userSpaceOnUse" width="8" height="8">
        <rect width="8" height="8" fill="#ecf0f1"/>
        <path d="M0,8 L8,0" stroke="#bdc3c7" stroke-width="1"/>
      </pattern>
      <pattern id="dots" patternUnits="userSpaceOnUse" width="12" height="12">
        <rect width="12" height="12" fill="#d5dbdb"/>
        <circle cx="6" cy="6" r="2" fill="#95a5a6"/>
      </pattern>
      <pattern id="cross" patternUnits="userSpaceOnUse" width="10" height="10">
        <rect width="10" height="10" fill="#e8f4f8"/>
        <path d="M0,5 L10,5 M5,0 L5,10" stroke="#7fb3d3" stroke-width="1"/>
      </pattern>
    </defs>
    
    <!-- Grid rectangles with products -->
    <!-- Row 1 (a) - height 60 -->
    <rect x="25" y="15" width="120" height="60" fill="url(#stripes)" stroke="#34495e" stroke-width="2"/>
    <text x="85" y="50" text-anchor="middle" font-size="14" font-weight="bold">ad</text>
    
    <rect x="145" y="15" width="40" height="60" fill="url(#stripes)" stroke="#34495e" stroke-width="2"/>
    <text x="165" y="50" text-anchor="middle" font-size="14" font-weight="bold">ae</text>
    
    <rect x="185" y="15" width="70" height="60" fill="url(#stripes)" stroke="#34495e" stroke-width="2"/>
    <text x="220" y="50" text-anchor="middle" font-size="14" font-weight="bold">af</text>
    
    <!-- Row 2 (b) - height 40 -->
    <rect x="25" y="75" width="120" height="40" fill="url(#dots)" stroke="#34495e" stroke-width="2"/>
    <text x="85" y="98" text-anchor="middle" font-size="14" font-weight="bold">bd</text>
    
    <rect x="145" y="75" width="40" height="40" fill="url(#dots)" stroke="#34495e" stroke-width="2"/>
    <text x="165" y="98" text-anchor="middle" font-size="14" font-weight="bold">be</text>
    
    <rect x="185" y="75" width="70" height="40" fill="url(#dots)" stroke="#34495e" stroke-width="2"/>
    <text x="220" y="98" text-anchor="middle" font-size="14" font-weight="bold">bf</text>
    
    <!-- Row 3 (c) - height 80 -->
    <rect x="25" y="115" width="120" height="80" fill="url(#cross)" stroke="#34495e" stroke-width="2"/>
    <text x="85" y="160" text-anchor="middle" font-size="14" font-weight="bold">cd</text>
    
    <rect x="145" y="115" width="40" height="80" fill="url(#cross)" stroke="#34495e" stroke-width="2"/>
    <text x="165" y="160" text-anchor="middle" font-size="14" font-weight="bold">ce</text>
    
    <rect x="185" y="115" width="70" height="80" fill="url(#cross)" stroke="#34495e" stroke-width="2"/>
    <text x="220" y="160" text-anchor="middle" font-size="14" font-weight="bold">cf</text>
    
    <!-- Outer border -->
    <rect x="25" y="15" width="230" height="180" fill="none" stroke="#2c3e50" stroke-width="3"/>
  </g>
  
  <!-- Table Visualization -->
  <g transform="translate(400, 100)">
    <text x="150" y="-10" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Multiplication Table
    </text>
    
    <!-- Table header -->
    <rect x="0" y="0" width="60" height="40" fill="#34495e" stroke="#2c3e50" stroke-width="1"/>
    <text x="30" y="25" text-anchor="middle" font-size="14" fill="white" font-weight="bold">×</text>
    
    <rect x="60" y="0" width="60" height="40" fill="#e74c3c" stroke="#2c3e50" stroke-width="1"/>
    <text x="90" y="25" text-anchor="middle" font-size="14" fill="white" font-weight="bold">d</text>
    
    <rect x="120" y="0" width="60" height="40" fill="#e74c3c" stroke="#2c3e50" stroke-width="1"/>
    <text x="150" y="25" text-anchor="middle" font-size="14" fill="white" font-weight="bold">e</text>
    
    <rect x="180" y="0" width="60" height="40" fill="#e74c3c" stroke="#2c3e50" stroke-width="1"/>
    <text x="210" y="25" text-anchor="middle" font-size="14" fill="white" font-weight="bold">f</text>
    
    <!-- Row 1 (a) -->
    <rect x="0" y="40" width="60" height="40" fill="#3498db" stroke="#2c3e50" stroke-width="1"/>
    <text x="30" y="65" text-anchor="middle" font-size="14" fill="white" font-weight="bold">a</text>
    
    <rect x="60" y="40" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="90" y="65" text-anchor="middle" font-size="14" font-weight="bold">ad</text>
    
    <rect x="120" y="40" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="150" y="65" text-anchor="middle" font-size="14" font-weight="bold">ae</text>
    
    <rect x="180" y="40" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="210" y="65" text-anchor="middle" font-size="14" font-weight="bold">af</text>
    
    <!-- Row 2 (b) -->
    <rect x="0" y="80" width="60" height="40" fill="#3498db" stroke="#2c3e50" stroke-width="1"/>
    <text x="30" y="105" text-anchor="middle" font-size="14" fill="white" font-weight="bold">b</text>
    
    <rect x="60" y="80" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="90" y="105" text-anchor="middle" font-size="14" font-weight="bold">bd</text>
    
    <rect x="120" y="80" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="150" y="105" text-anchor="middle" font-size="14" font-weight="bold">be</text>
    
    <rect x="180" y="80" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="210" y="105" text-anchor="middle" font-size="14" font-weight="bold">bf</text>
    
    <!-- Row 3 (c) -->
    <rect x="0" y="120" width="60" height="40" fill="#3498db" stroke="#2c3e50" stroke-width="1"/>
    <text x="30" y="145" text-anchor="middle" font-size="14" fill="white" font-weight="bold">c</text>
    
    <rect x="60" y="120" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="90" y="145" text-anchor="middle" font-size="14" font-weight="bold">cd</text>
    
    <rect x="120" y="120" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="150" y="145" text-anchor="middle" font-size="14" font-weight="bold">ce</text>
    
    <rect x="180" y="120" width="60" height="40" fill="#f8f9fa" stroke="#2c3e50" stroke-width="1"/>
    <text x="210" y="145" text-anchor="middle" font-size="14" font-weight="bold">cf</text>
  </g>
  
  <!-- Explanation -->
  <g transform="translate(50, 370)">
    <text x="350" y="0" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Distributive Property Visualization
    </text>
    
    <text x="0" y="30" font-size="14" fill="#2c3e50">
      • Each term in the first trinomial (a, b, c) multiplies with each term in the second trinomial (d, e, f)
    </text>
    
    <text x="0" y="50" font-size="14" fill="#2c3e50">
      • The rectangle grid shows how areas represent products: width × height = product
    </text>
    
    <text x="0" y="70" font-size="14" fill="#2c3e50">
      • Different patterns distinguish rows: striped (a), dotted (b), cross-hatched (c)
    </text>
    
    <text x="0" y="90" font-size="14" fill="#2c3e50">
      • Total result: ad + ae + af + bd + be + bf + cd + ce + cf (9 terms)
    </text>
    
    <text x="0" y="120" font-size="14" fill="#e74c3c" font-weight="bold">
      Pattern: 3 terms × 3 terms = 9 product terms
    </text>
  </g>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Binomial Multiplication":{
        svg:`<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    (a + b)(c + d) = ac + ad + bc + bd
  </text>
  
  <!-- Rectangle Grid Visualization -->
  <g transform="translate(80, 100)">
    <text x="120" y="-30" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Rectangle Grid Visualization
    </text>
    
    <!-- Top labels (c + d) -->
    <text x="75" y="0" text-anchor="middle" font-size="14" fill="#e67e22" font-weight="bold">c</text>
    <text x="165" y="0" text-anchor="middle" font-size="14" fill="#e67e22" font-weight="bold">d</text>
    
    <!-- Side labels (a + b) -->
    <text x="-20" y="45" text-anchor="middle" font-size="14" fill="#8e44ad" font-weight="bold">a</text>
    <text x="-20" y="110" text-anchor="middle" font-size="14" fill="#8e44ad" font-weight="bold">b</text>
    
    <!-- Define patterns -->
    <defs>
      <pattern id="vertical" patternUnits="userSpaceOnUse" width="10" height="10">
        <rect width="10" height="10" fill="#f8c471"/>
        <path d="M5,0 L5,10" stroke="#d68910" stroke-width="2"/>
      </pattern>
      <pattern id="horizontal" patternUnits="userSpaceOnUse" width="10" height="10">
        <rect width="10" height="10" fill="#d7bde2"/>
        <path d="M0,5 L10,5" stroke="#8e44ad" stroke-width="2"/>
      </pattern>
      <pattern id="diagonal1" patternUnits="userSpaceOnUse" width="12" height="12">
        <rect width="12" height="12" fill="#aed6f1"/>
        <path d="M0,12 L12,0" stroke="#3498db" stroke-width="2"/>
      </pattern>
      <pattern id="diagonal2" patternUnits="userSpaceOnUse" width="12" height="12">
        <rect width="12" height="12" fill="#a9dfbf"/>
        <path d="M0,0 L12,12" stroke="#27ae60" stroke-width="2"/>
      </pattern>
    </defs>
    
    <!-- Grid rectangles with products -->
    <!-- Row 1 (a) - height 70 -->
    <rect x="25" y="15" width="100" height="70" fill="url(#vertical)" stroke="#34495e" stroke-width="2"/>
    <text x="75" y="55" text-anchor="middle" font-size="16" font-weight="bold">ac</text>
    
    <rect x="125" y="15" width="80" height="70" fill="url(#diagonal1)" stroke="#34495e" stroke-width="2"/>
    <text x="165" y="55" text-anchor="middle" font-size="16" font-weight="bold">ad</text>
    
    <!-- Row 2 (b) - height 50 -->
    <rect x="25" y="85" width="100" height="50" fill="url(#horizontal)" stroke="#34495e" stroke-width="2"/>
    <text x="75" y="115" text-anchor="middle" font-size="16" font-weight="bold">bc</text>
    
    <rect x="125" y="85" width="80" height="50" fill="url(#diagonal2)" stroke="#34495e" stroke-width="2"/>
    <text x="165" y="115" text-anchor="middle" font-size="16" font-weight="bold">bd</text>
    
    <!-- Outer border -->
    <rect x="25" y="15" width="180" height="120" fill="none" stroke="#2c3e50" stroke-width="3"/>
  </g>
  
  <!-- Table Visualization -->
  <g transform="translate(420, 100)">
    <text x="100" y="-30" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Multiplication Table
    </text>
    
    <!-- Table header -->
    <rect x="0" y="0" width="50" height="35" fill="#34495e" stroke="#2c3e50" stroke-width="1"/>
    <text x="25" y="22" text-anchor="middle" font-size="14" fill="white" font-weight="bold">×</text>
    
    <rect x="50" y="0" width="70" height="35" fill="#e67e22" stroke="#2c3e50" stroke-width="1"/>
    <text x="85" y="22" text-anchor="middle" font-size="14" fill="white" font-weight="bold">c</text>
    
    <rect x="120" y="0" width="70" height="35" fill="#e67e22" stroke="#2c3e50" stroke-width="1"/>
    <text x="155" y="22" text-anchor="middle" font-size="14" fill="white" font-weight="bold">d</text>
    
    <!-- Row 1 (a) -->
    <rect x="0" y="35" width="50" height="45" fill="#8e44ad" stroke="#2c3e50" stroke-width="1"/>
    <text x="25" y="62" text-anchor="middle" font-size="14" fill="white" font-weight="bold">a</text>
    
    <rect x="50" y="35" width="70" height="45" fill="#f8c471" stroke="#2c3e50" stroke-width="1"/>
    <text x="85" y="62" text-anchor="middle" font-size="16" font-weight="bold">ac</text>
    
    <rect x="120" y="35" width="70" height="45" fill="#aed6f1" stroke="#2c3e50" stroke-width="1"/>
    <text x="155" y="62" text-anchor="middle" font-size="16" font-weight="bold">ad</text>
    
    <!-- Row 2 (b) -->
    <rect x="0" y="80" width="50" height="40" fill="#8e44ad" stroke="#2c3e50" stroke-width="1"/>
    <text x="25" y="105" text-anchor="middle" font-size="14" fill="white" font-weight="bold">b</text>
    
    <rect x="50" y="80" width="70" height="40" fill="#d7bde2" stroke="#2c3e50" stroke-width="1"/>
    <text x="85" y="105" text-anchor="middle" font-size="16" font-weight="bold">bc</text>
    
    <rect x="120" y="80" width="70" height="40" fill="#a9dfbf" stroke="#2c3e50" stroke-width="1"/>
    <text x="155" y="105" text-anchor="middle" font-size="16" font-weight="bold">bd</text>
  </g>
  
  <!-- Explanation -->
  <g transform="translate(50, 280)">
    <text x="350" y="0" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      FOIL Method Visualization (First, Outer, Inner, Last)
    </text>
    
    <text x="0" y="30" font-size="14" fill="#2c3e50">
      • Each term in the first binomial (a, b) multiplies with each term in the second binomial (c, d)
    </text>
    
    <text x="0" y="50" font-size="14" fill="#2c3e50">
      • Rectangle areas show the distributive property: (width a × height c) + (width a × height d) + etc.
    </text>
    
    <text x="0" y="70" font-size="14" fill="#2c3e50">
      • Different patterns and colors distinguish each product: ac (vertical), ad (diagonal ↗), bc (horizontal), bd (diagonal ↘)
    </text>
    
    <text x="0" y="90" font-size="14" fill="#2c3e50">
      • Total result: ac + ad + bc + bd (4 terms)
    </text>
    
    <text x="0" y="120" font-size="14" fill="#e67e22" font-weight="bold">
      Pattern: 2 terms × 2 terms = 4 product terms
    </text>
  </g>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Distributive Property":{
        svg:`<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    a(b + c) = ab + ac
  </text>
  
  <!-- Rectangle Grid Visualization -->
  <g transform="translate(100, 100)">
    <text x="90" y="-30" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Rectangle Grid Visualization
    </text>
    
    <!-- Top labels (b + c) -->
    <text x="60" y="0" text-anchor="middle" font-size="14" fill="#c0392b" font-weight="bold">b</text>
    <text x="140" y="0" text-anchor="middle" font-size="14" fill="#c0392b" font-weight="bold">c</text>
    
    <!-- Side label (a) -->
    <text x="-20" y="60" text-anchor="middle" font-size="14" fill="#16a085" font-weight="bold">a</text>
    
    <!-- Define patterns -->
    <defs>
      <pattern id="waves" patternUnits="userSpaceOnUse" width="16" height="8">
        <rect width="16" height="8" fill="#f39c12"/>
        <path d="M0,4 Q4,0 8,4 T16,4" stroke="#d68910" stroke-width="1.5" fill="none"/>
      </pattern>
      <pattern id="zigzag" patternUnits="userSpaceOnUse" width="12" height="12">
        <rect width="12" height="12" fill="#9b59b6"/>
        <path d="M0,6 L3,3 L6,6 L9,3 L12,6 L9,9 L6,6 L3,9 Z" stroke="#8e44ad" stroke-width="1.5" fill="none"/>
      </pattern>
    </defs>
    
    <!-- Grid rectangles with products -->
    <!-- Single row (a) with two columns -->
    <rect x="25" y="15" width="70" height="90" fill="url(#waves)" stroke="#34495e" stroke-width="3"/>
    <text x="60" y="65" text-anchor="middle" font-size="18" font-weight="bold">ab</text>
    
    <rect x="95" y="15" width="90" height="90" fill="url(#zigzag)" stroke="#34495e" stroke-width="3"/>
    <text x="140" y="65" text-anchor="middle" font-size="18" font-weight="bold">ac</text>
    
    <!-- Outer border -->
    <rect x="25" y="15" width="160" height="90" fill="none" stroke="#2c3e50" stroke-width="4"/>
    
    <!-- Brace showing total width -->
    <path d="M25,120 L25,125 L185,125 L185,120" stroke="#2c3e50" stroke-width="2" fill="none"/>
    <text x="105" y="140" text-anchor="middle" font-size="14" fill="#2c3e50" font-weight="bold">(b + c)</text>
    
    <!-- Brace showing height -->
    <path d="M10,15 L5,15 L5,105 L10,105" stroke="#2c3e50" stroke-width="2" fill="none"/>
    <text x="-5" y="65" text-anchor="middle" font-size="14" fill="#2c3e50" font-weight="bold" transform="rotate(-90, -5, 65)">a</text>
  </g>
  
  <!-- Table Visualization -->
  <g transform="translate(450, 100)">
    <text x="80" y="-30" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Multiplication Table
    </text>
    
    <!-- Table header -->
    <rect x="0" y="0" width="50" height="35" fill="#34495e" stroke="#2c3e50" stroke-width="1"/>
    <text x="25" y="22" text-anchor="middle" font-size="14" fill="white" font-weight="bold">×</text>
    
    <rect x="50" y="0" width="60" height="35" fill="#c0392b" stroke="#2c3e50" stroke-width="1"/>
    <text x="80" y="22" text-anchor="middle" font-size="14" fill="white" font-weight="bold">b</text>
    
    <rect x="110" y="0" width="60" height="35" fill="#c0392b" stroke="#2c3e50" stroke-width="1"/>
    <text x="140" y="22" text-anchor="middle" font-size="14" fill="white" font-weight="bold">c</text>
    
    <!-- Row (a) -->
    <rect x="0" y="35" width="50" height="50" fill="#16a085" stroke="#2c3e50" stroke-width="1"/>
    <text x="25" y="65" text-anchor="middle" font-size="14" fill="white" font-weight="bold">a</text>
    
    <rect x="50" y="35" width="60" height="50" fill="#f39c12" stroke="#2c3e50" stroke-width="1"/>
    <text x="80" y="65" text-anchor="middle" font-size="18" font-weight="bold">ab</text>
    
    <rect x="110" y="35" width="60" height="50" fill="#9b59b6" stroke="#2c3e50" stroke-width="1"/>
    <text x="140" y="65" text-anchor="middle" font-size="18" font-weight="bold">ac</text>
  </g>
  
  <!-- Mathematical Steps -->
  <g transform="translate(100, 240)">
    <text x="250" y="0" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Step-by-Step Distribution
    </text>
    
    <text x="0" y="30" font-size="16" fill="#2c3e50" font-weight="bold">
      a(b + c) = a·b + a·c = ab + ac
    </text>
    
    <text x="0" y="60" font-size="14" fill="#16a085" font-weight="bold">
      Term 'a' distributes to both 'b' and 'c'
    </text>
    
    <!-- Arrows showing distribution -->
    <path d="M20,75 Q40,90 60,75" stroke="#e74c3c" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
    <path d="M20,75 Q40,60 100,75" stroke="#e74c3c" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
      </marker>
    </defs>
    
    <text x="60" y="95" text-anchor="middle" font-size="12" fill="#e74c3c" font-weight="bold">ab</text>
    <text x="100" y="95" text-anchor="middle" font-size="12" fill="#e74c3c" font-weight="bold">ac</text>
  </g>
  
  <!-- Explanation -->
  <g transform="translate(50, 320)">
    <text x="350" y="0" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
      Fundamental Distributive Property
    </text>
    
    <text x="0" y="30" font-size="14" fill="#2c3e50">
      • The single term 'a' multiplies each term inside the parentheses (b and c)
    </text>
    
    <text x="0" y="50" font-size="14" fill="#2c3e50">
      • Rectangle shows: Total area = a × (b + c) = area of left rectangle + area of right rectangle
    </text>
    
    <text x="0" y="70" font-size="14" fill="#2c3e50">
      • This is the most basic form of distribution: one term to a sum of two terms
    </text>
    
    <text x="0" y="90" font-size="14" fill="#c0392b" font-weight="bold">
      Foundation principle: 1 term × 2 terms = 2 product terms
    </text>
  </g>
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
    }
}