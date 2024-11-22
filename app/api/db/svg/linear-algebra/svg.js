const diagrams=[

    {
        "title":"Matrix Multiplication Conditions (Black)",
        "description":`
        `,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
    <!-- Matrix A -->
    <text x="100" y="40" font-size="24" font-weight="bold">A</text>
    <text x="120" y="40" font-size="20">(m×n):</text>
    <path d="M50,40 L50,180" stroke="black" stroke-width="2"/>  <!-- Left brace -->
    <path d="M270,40 L270,180" stroke="black" stroke-width="2"/>  <!-- Right brace -->
    <text x="80" y="70" font-size="21">a₁₁</text>
    <text x="130" y="70" font-size="21">a₁₂</text>
    <text x="180" y="70" font-size="21">...</text>
    <text x="230" y="70" font-size="21">a₁ₙ</text>
    <text x="80" y="100" font-size="21">a₂₁</text>
    <text x="130" y="100" font-size="21">a₂₂</text>
    <text x="180" y="100" font-size="21">...</text>
    <text x="230" y="100" font-size="21">a₂ₙ</text>
    <text x="130" y="130" font-size="21">⋮</text>
    <text x="80" y="160" font-size="21">aₘ₁</text>
    <text x="130" y="160" font-size="21">aₘ₂</text>
    <text x="180" y="160" font-size="21">...</text>
    <text x="230" y="160" font-size="21">aₘₙ</text>
    
    <!-- Multiplication symbol -->
    <text x="300" y="100" font-size="24">×</text>
    
    <!-- Matrix B -->
    <text x="380" y="40" font-size="24" font-weight="bold">B</text>
    <text x="400" y="40" font-size="20">(p×q):</text>
    <path d="M330,40 L330,180" stroke="black" stroke-width="2"/>  <!-- Left brace -->
    <path d="M550,40 L550,180" stroke="black" stroke-width="2"/>  <!-- Right brace -->
    <text x="360" y="70" font-size="21">b₁₁</text>
    <text x="410" y="70" font-size="21">b₁₂</text>
    <text x="460" y="70" font-size="21">...</text>
    <text x="510" y="70" font-size="21">b₁q</text>
    <text x="360" y="100" font-size="21">b₂₁</text>
    <text x="410" y="100" font-size="21">b₂₂</text>
    <text x="460" y="100" font-size="21">...</text>
    <text x="510" y="100" font-size="21">b₂q</text>
    <text x="410" y="130" font-size="21">⋮</text>
    <text x="360" y="160" font-size="21">bₚ₁</text>
    <text x="410" y="160" font-size="21">bₚ₂</text>
    <text x="460" y="160" font-size="21">...</text>
    <text x="510" y="160" font-size="21">bₚq</text>

    <!-- Arrows -->
    <path d="M300,190 L150,300" stroke="black" stroke-width="1" fill="none" marker-end="url(#arrowhead)"/>
    <path d="M300,190 L450,300" stroke="black" stroke-width="1" fill="none" marker-end="url(#arrowhead)"/>
    
    <!-- Arrow definition -->
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
        </marker>
    </defs>
    
    <!-- Case 1: Impossible (left branch) -->
    <text x="150" y="330" text-anchor="middle" font-size="20" fill="red">Case 1: n ≠ p</text>
    <text x="150" y="360" text-anchor="middle" font-size="18" fill="red">Multiplication impossible</text>
    
    <!-- Case 2: Possible (right branch) -->
    <text x="450" y="330" text-anchor="middle" font-size="20" fill="darkgreen">Case 2: n = p</text>
    <text x="450" y="360" text-anchor="middle" font-size="18" fill="darkgreen">Multiplication possible</text>
    
    <!-- Result Matrix C -->
    <text x="390" y="400" text-anchor="middle" font-size="24" font-weight="bold">C</text>
    <text x="440" y="400" text-anchor="middle" font-size="20">(m×q):</text>
    <path d="M330,420 L330,560" stroke="black" stroke-width="2"/>  <!-- Left brace -->
    <path d="M550,420 L550,560" stroke="black" stroke-width="2"/>  <!-- Right brace -->
    <text x="360" y="450" font-size="21">c₁₁</text>
    <text x="410" y="450" font-size="21">c₁₂</text>
    <text x="460" y="450" font-size="21">...</text>
    <text x="510" y="450" font-size="21">c₁q</text>
    <text x="360" y="480" font-size="21">c₂₁</text>
    <text x="410" y="480" font-size="21">c₂₂</text>
    <text x="460" y="480" font-size="21">...</text>
    <text x="510" y="480" font-size="21">c₂q</text>
    <text x="410" y="510" font-size="21">⋮</text>
    <text x="360" y="540" font-size="21">cₘ₁</text>
    <text x="410" y="540" font-size="21">cₘ₂</text>
    <text x="460" y="540" font-size="21">...</text>
    <text x="510" y="540" font-size="21">cₘq</text>
    
    <!-- Formula -->
    <text x="450" y="580" text-anchor="middle" font-size="18">Where cᵢⱼ = Σ(aᵢₖ × bₖⱼ) for k from 1 to n</text>
</svg>
        `
    },
    {
        "title":"Matrix Multiplication Conditions (Blue)",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
    <!-- Matrix A -->
    <text x="100" y="40" font-size="24" font-weight="bold" fill="blue">A</text>
    <text x="120" y="40" font-size="20" fill="blue">(m×n):</text>
    <path d="M50,40 L50,180" stroke="blue" stroke-width="2"/>  <!-- Left brace -->
    <path d="M270,40 L270,180" stroke="blue" stroke-width="2"/>  <!-- Right brace -->
    <text x="80" y="70" font-size="21" fill="blue">a₁₁</text>
    <text x="130" y="70" font-size="21" fill="blue">a₁₂</text>
    <text x="180" y="70" font-size="21" fill="blue">...</text>
    <text x="230" y="70" font-size="21" fill="blue">a₁ₙ</text>
    <text x="80" y="100" font-size="21" fill="blue">a₂₁</text>
    <text x="130" y="100" font-size="21" fill="blue">a₂₂</text>
    <text x="180" y="100" font-size="21" fill="blue">...</text>
    <text x="230" y="100" font-size="21" fill="blue">a₂ₙ</text>
    <text x="130" y="130" font-size="21" fill="blue">⋮</text>
    <text x="80" y="160" font-size="21" fill="blue">aₘ₁</text>
    <text x="130" y="160" font-size="21" fill="blue">aₘ₂</text>
    <text x="180" y="160" font-size="21" fill="blue">...</text>
    <text x="230" y="160" font-size="21" fill="blue">aₘₙ</text>
    
    <!-- Multiplication symbol -->
    <text x="300" y="100" font-size="24" fill="blue">×</text>
    
    <!-- Matrix B -->
    <text x="380" y="40" font-size="24" font-weight="bold" fill="blue">B</text>
    <text x="400" y="40" font-size="20" fill="blue">(p×q):</text>
    <path d="M330,40 L330,180" stroke="blue" stroke-width="2"/>  <!-- Left brace -->
    <path d="M550,40 L550,180" stroke="blue" stroke-width="2"/>  <!-- Right brace -->
    <text x="360" y="70" font-size="21" fill="blue">b₁₁</text>
    <text x="410" y="70" font-size="21" fill="blue">b₁₂</text>
    <text x="460" y="70" font-size="21" fill="blue">...</text>
    <text x="510" y="70" font-size="21" fill="blue">b₁q</text>
    <text x="360" y="100" font-size="21" fill="blue">b₂₁</text>
    <text x="410" y="100" font-size="21" fill="blue">b₂₂</text>
    <text x="460" y="100" font-size="21" fill="blue">...</text>
    <text x="510" y="100" font-size="21" fill="blue">b₂q</text>
    <text x="410" y="130" font-size="21" fill="blue">⋮</text>
    <text x="360" y="160" font-size="21" fill="blue">bₚ₁</text>
    <text x="410" y="160" font-size="21" fill="blue">bₚ₂</text>
    <text x="460" y="160" font-size="21" fill="blue">...</text>
    <text x="510" y="160" font-size="21" fill="blue">bₚq</text>

    <!-- Arrows -->
    <path d="M300,190 L150,300" stroke="blue" stroke-width="1" fill="none" marker-end="url(#arrowhead)"/>
    <path d="M300,190 L450,300" stroke="blue" stroke-width="1" fill="none" marker-end="url(#arrowhead)"/>
    
    <!-- Arrow definition -->
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="blue"/>
        </marker>
    </defs>
    
    <!-- Case 1: Impossible (left branch) -->
    <text x="150" y="330" text-anchor="middle" font-size="20" fill="red">Case 1: n ≠ p</text>
    <text x="150" y="360" text-anchor="middle" font-size="18" fill="red">Multiplication impossible</text>
    
    <!-- Case 2: Possible (right branch) -->
    <text x="450" y="330" text-anchor="middle" font-size="20" fill="darkgreen">Case 2: n = p</text>
    <text x="450" y="360" text-anchor="middle" font-size="18" fill="darkgreen">Multiplication possible</text>
    
    <!-- Result Matrix C -->
    <text x="390" y="400" text-anchor="middle" font-size="24" font-weight="bold" fill="blue">C</text>
    <text x="440" y="400" text-anchor="middle" font-size="20" fill="blue">(m×q):</text>
    <path d="M330,420 L330,560" stroke="blue" stroke-width="2"/>  <!-- Left brace -->
    <path d="M550,420 L550,560" stroke="blue" stroke-width="2"/>  <!-- Right brace -->
    <text x="360" y="450" font-size="21" fill="blue">c₁₁</text>
    <text x="410" y="450" font-size="21" fill="blue">c₁₂</text>
    <text x="460" y="450" font-size="21" fill="blue">...</text>
    <text x="510" y="450" font-size="21" fill="blue">c₁q</text>
    <text x="360" y="480" font-size="21" fill="blue">c₂₁</text>
    <text x="410" y="480" font-size="21" fill="blue">c₂₂</text>
    <text x="460" y="480" font-size="21" fill="blue">...</text>
    <text x="510" y="480" font-size="21" fill="blue">c₂q</text>
    <text x="410" y="510" font-size="21" fill="blue">⋮</text>
    <text x="360" y="540" font-size="21" fill="blue">cₘ₁</text>
    <text x="410" y="540" font-size="21" fill="blue">cₘ₂</text>
    <text x="460" y="540" font-size="21" fill="blue">...</text>
    <text x="510" y="540" font-size="21" fill="blue">cₘq</text>
    
    <!-- Formula -->
    <text x="450" y="580" text-anchor="middle" font-size="18" fill="blue">Where cᵢⱼ = Σ(aᵢₖ × bₖⱼ) for k from 1 to n</text>
</svg>
        `
    },
    {
        "title":"Matrix Multiplication by Scalar",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2700 1200">
    <!-- Scalar c -->
    <text x="300" y="300" font-size="72" font-weight="bold" fill="blue">c</text>
    
    <!-- Multiplication symbol -->
    <text x="450" y="300" font-size="72" fill="blue">×</text>
    
    <!-- Matrix A -->
    <text x="690" y="120" font-size="72" font-weight="bold" fill="blue">A</text>
    <text x="750" y="120" font-size="60" fill="blue">(m×n):</text>
    <path d="M600,180 L600,600" stroke="blue" stroke-width="6"/>  <!-- Left brace -->
    <path d="M1260,180 L1260,600" stroke="blue" stroke-width="6"/>  <!-- Right brace -->
    <text x="690" y="240" font-size="63" fill="blue">a₁₁</text>
    <text x="840" y="240" font-size="63" fill="blue">a₁₂</text>
    <text x="990" y="240" font-size="63" fill="blue">...</text>
    <text x="1140" y="240" font-size="63" fill="blue">a₁ₙ</text>
    <text x="690" y="320" font-size="63" fill="blue">a₂₁</text>
    <text x="840" y="320" font-size="63" fill="blue">a₂₂</text>
    <text x="990" y="320" font-size="63" fill="blue">...</text>
    <text x="1140" y="320" font-size="63" fill="blue">a₂ₙ</text>
    <text x="690" y="400" font-size="63" fill="blue">⋮</text>
    <text x="840" y="400" font-size="63" fill="blue">⋮</text>
    <text x="990" y="400" font-size="63" fill="blue">⋱</text>
    <text x="1140" y="400" font-size="63" fill="blue">⋮</text>
    <text x="690" y="520" font-size="63" fill="blue">aₘ₁</text>
    <text x="840" y="520" font-size="63" fill="blue">aₘ₂</text>
    <text x="990" y="520" font-size="63" fill="blue">...</text>
    <text x="1140" y="520" font-size="63" fill="blue">aₘₙ</text>

    <!-- Equals symbol -->
    <text x="1410" y="300" font-size="72" fill="blue">=</text>
    
    <!-- Result Matrix -->
    <text x="1740" y="120" font-size="72" font-weight="bold" fill="blue">B</text>
    <text x="1800" y="120" font-size="60" fill="blue">(m×n):</text>
    <path d="M1650,180 L1650,600" stroke="blue" stroke-width="6"/>  <!-- Left brace -->
    <path d="M2332,180 L2332,600" stroke="blue" stroke-width="6"/>  <!-- Right brace -->
    <text x="1740" y="240" font-size="63" fill="blue">c·a₁₁</text>
    <text x="1890" y="240" font-size="63" fill="blue">c·a₁₂</text>
    <text x="2040" y="240" font-size="63" fill="blue">...</text>
    <text x="2190" y="240" font-size="63" fill="blue">c·a₁ₙ</text>
    <text x="1740" y="320" font-size="63" fill="blue">c·a₂₁</text>
    <text x="1890" y="320" font-size="63" fill="blue">c·a₂₂</text>
    <text x="2040" y="320" font-size="63" fill="blue">...</text>
    <text x="2190" y="320" font-size="63" fill="blue">c·a₂ₙ</text>
    <text x="1740" y="400" font-size="63" fill="blue">⋮</text>
    <text x="1890" y="400" font-size="63" fill="blue">⋮</text>
    <text x="2040" y="400" font-size="63" fill="blue">⋱</text>
    <text x="2190" y="400" font-size="63" fill="blue">⋮</text>
    <text x="1740" y="520" font-size="63" fill="blue">c·aₘ₁</text>
    <text x="1890" y="520" font-size="63" fill="blue">c·aₘ₂</text>
    <text x="2040" y="520" font-size="63" fill="blue">...</text>
    <text x="2190" y="520" font-size="63" fill="blue">c·aₘₙ</text>
    
    <!-- Explanatory text -->
    <text x="1350" y="750" text-anchor="middle" font-size="60" fill="darkgreen">Each element is multiplied by scalar c</text>
    <text x="1350" y="840" text-anchor="middle" font-size="60" fill="blue">Dimensions remain unchanged (m×n)</text>
    
    <!-- Formula -->
    <text x="1350" y="960" text-anchor="middle" font-size="54" fill="blue">Where bᵢⱼ = c × aᵢⱼ for all i,j</text>
</svg>
        `
    },
    {
        "title":"2x2 diagonal matrix",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <!-- Background -->
  <rect width="300" height="300" fill="white"/>
  
  <!-- Left bracket -->
  <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="3"/>
  <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="3"/>
  <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="3"/>
  
  <!-- Right bracket -->
  <line x1="220" y1="80" x2="220" y2="220" stroke="black" stroke-width="3"/>
  <line x1="210" y1="80" x2="220" y2="80" stroke="black" stroke-width="3"/>
  <line x1="210" y1="220" x2="220" y2="220" stroke="black" stroke-width="3"/>
  
  <!-- Diagonal elements -->
  <text x="120" y="130" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
  <text x="170" y="190" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
  
  <!-- Zero elements -->
  <text x="170" y="130" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="120" y="190" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
</svg>
        `
    },
    {
        "title":"3x3 diagonal matrix",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <!-- Background -->
  <rect width="300" height="300" fill="white"/>
  
  <!-- Left bracket -->
  <line x1="40" y1="40" x2="40" y2="260" stroke="black" stroke-width="3"/>
  <line x1="40" y1="40" x2="50" y2="40" stroke="black" stroke-width="3"/>
  <line x1="40" y1="260" x2="50" y2="260" stroke="black" stroke-width="3"/>
  
  <!-- Right bracket -->
  <line x1="260" y1="40" x2="260" y2="260" stroke="black" stroke-width="3"/>
  <line x1="250" y1="40" x2="260" y2="40" stroke="black" stroke-width="3"/>
  <line x1="250" y1="260" x2="260" y2="260" stroke="black" stroke-width="3"/>
  
  <!-- Diagonal elements (a₁₁, a₂₂, a₃₃) -->
  <text x="83" y="95" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
  <text x="150" y="161" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
  <text x="217" y="227" font-family="Arial" font-size="24" fill="#2E86C1">a₃₃</text>
  
  <!-- Zero elements -->
  <text x="150" y="95" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="217" y="95" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="83" y="161" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="217" y="161" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="83" y="227" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="150" y="227" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
</svg>
        `
    },
    {
        "title":"4x4 diagonal matrix",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <!-- Background -->
  <rect width="300" height="300" fill="white"/>
  
  <!-- Left bracket -->
  <line x1="40" y1="40" x2="40" y2="260" stroke="black" stroke-width="3"/>
  <line x1="40" y1="40" x2="50" y2="40" stroke="black" stroke-width="3"/>
  <line x1="40" y1="260" x2="50" y2="260" stroke="black" stroke-width="3"/>
  
  <!-- Right bracket -->
  <line x1="260" y1="40" x2="260" y2="260" stroke="black" stroke-width="3"/>
  <line x1="250" y1="40" x2="260" y2="40" stroke="black" stroke-width="3"/>
  <line x1="250" y1="260" x2="260" y2="260" stroke="black" stroke-width="3"/>
  
  <!-- Diagonal elements -->
  <text x="70" y="80" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
  <text x="120" y="130" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
  <text x="170" y="180" font-family="Arial" font-size="24" fill="#2E86C1">a₃₃</text>
  <text x="220" y="230" font-family="Arial" font-size="24" fill="#2E86C1">a₄₄</text>
  
  <!-- Zero elements -->
  <text x="120" y="80" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="170" y="80" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="220" y="80" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <text x="70" y="130" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="170" y="130" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="220" y="130" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <text x="70" y="180" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="120" y="180" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="220" y="180" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <text x="70" y="230" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="120" y="230" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="170" y="230" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
</svg>
        `
    },
    {
        "title":"5x5 diagonal matrix",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <!-- Background -->
  <rect width="300" height="300" fill="white"/>
  
  <!-- Left bracket -->
  <line x1="40" y1="40" x2="40" y2="260" stroke="black" stroke-width="3"/>
  <line x1="40" y1="40" x2="50" y2="40" stroke="black" stroke-width="3"/>
  <line x1="40" y1="260" x2="50" y2="260" stroke="black" stroke-width="3"/>
  
  <!-- Right bracket (moved 10px right) -->
  <line x1="270" y1="40" x2="270" y2="260" stroke="black" stroke-width="3"/>
  <line x1="260" y1="40" x2="270" y2="40" stroke="black" stroke-width="3"/>
  <line x1="260" y1="260" x2="270" y2="260" stroke="black" stroke-width="3"/>
  
  <!-- Diagonal elements -->
  <text x="60" y="70" font-family="Arial" font-size="20" fill="#2E86C1">a₁₁</text>
  <text x="105" y="115" font-family="Arial" font-size="20" fill="#2E86C1">a₂₂</text>
  <text x="150" y="160" font-family="Arial" font-size="20" fill="#2E86C1">a₃₃</text>
  <text x="195" y="205" font-family="Arial" font-size="20" fill="#2E86C1">a₄₄</text>
  <text x="240" y="250" font-family="Arial" font-size="20" fill="#2E86C1">a₅₅</text>
  
  <!-- Zero elements (row 1) -->
  <text x="105" y="70" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="150" y="70" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="195" y="70" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="240" y="70" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  
  <!-- Zero elements (row 2) -->
  <text x="60" y="115" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="150" y="115" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="195" y="115" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="240" y="115" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  
  <!-- Zero elements (row 3) -->
  <text x="60" y="160" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="105" y="160" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="195" y="160" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="240" y="160" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  
  <!-- Zero elements (row 4) -->
  <text x="60" y="205" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="105" y="205" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="150" y="205" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="240" y="205" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  
  <!-- Zero elements (row 5) -->
  <text x="60" y="250" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="105" y="250" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="150" y="250" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
  <text x="195" y="250" font-family="Arial" font-size="20" fill="#E74C3C">0</text>
</svg>
        `
    },
    {
        "title":"nxn diagonal matrix",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <!-- Background -->
  <rect width="400" height="400" fill="white"/>
  
  <!-- Left bracket -->
  <line x1="80" y1="80" x2="80" y2="320" stroke="black" stroke-width="3"/>
  <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="3"/>
  <line x1="80" y1="320" x2="90" y2="320" stroke="black" stroke-width="3"/>
  
  <!-- Right bracket -->
  <line x1="320" y1="80" x2="320" y2="320" stroke="black" stroke-width="3"/>
  <line x1="310" y1="80" x2="320" y2="80" stroke="black" stroke-width="3"/>
  <line x1="310" y1="320" x2="320" y2="320" stroke="black" stroke-width="3"/>
  
  <!-- Diagonal elements -->
  <text x="120" y="120" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
  <text x="170" y="170" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
  <text x="220" y="220" font-family="Arial" font-size="24" fill="#2E86C1">a₃₃</text>
  
  <!-- Dots for continuation -->
  <text x="255" y="255" font-family="Arial" font-size="24" fill="#2E86C1">⋱</text>
  <text x="280" y="280" font-family="Arial" font-size="24" fill="#2E86C1">aₙₙ</text>
  
  <!-- Zero elements (showing pattern) -->
  <!-- First row zeros -->
  <text x="170" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="220" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="255" y="120" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="280" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <!-- Second row zeros -->
  <text x="120" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="220" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="255" y="170" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="280" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <!-- Third row zeros -->
  <text x="120" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="170" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="255" y="220" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="280" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <!-- Vertical dots -->
  <text x="120" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  <text x="170" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  <text x="220" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  <text x="280" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  
  <!-- Last row zeros -->
  <text x="120" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="170" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="220" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="255" y="280" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
</svg>
        `
    },
    {
        "title":"upper triangular matrix",
        "description":``,
        "svg":`
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <!-- Background -->
  <rect width="400" height="400" fill="white"/>
  
  <!-- Left bracket -->
  <line x1="80" y1="80" x2="80" y2="320" stroke="black" stroke-width="2"/>
  <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
  <line x1="80" y1="320" x2="90" y2="320" stroke="black" stroke-width="2"/>
  
  <!-- Right bracket (moved 5px right) -->
  <line x1="325" y1="80" x2="325" y2="320" stroke="black" stroke-width="2"/>
  <line x1="315" y1="80" x2="325" y2="80" stroke="black" stroke-width="2"/>
  <line x1="315" y1="320" x2="325" y2="320" stroke="black" stroke-width="2"/>
  
  <!-- Diagonal and upper elements -->
  <text x="120" y="120" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
  <text x="170" y="120" font-family="Arial" font-size="24" fill="#2E86C1">a₁₂</text>
  <text x="220" y="120" font-family="Arial" font-size="24" fill="#2E86C1">a₁₃</text>
  <text x="255" y="120" font-family="Arial" font-size="24" fill="#2E86C1">⋯</text>
  <text x="280" y="120" font-family="Arial" font-size="24" fill="#2E86C1">a₁ₙ</text>
  
  <text x="170" y="170" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
  <text x="220" y="170" font-family="Arial" font-size="24" fill="#2E86C1">a₂₃</text>
  <text x="255" y="170" font-family="Arial" font-size="24" fill="#2E86C1">⋯</text>
  <text x="280" y="170" font-family="Arial" font-size="24" fill="#2E86C1">a₂ₙ</text>
  
  <text x="220" y="220" font-family="Arial" font-size="24" fill="#2E86C1">a₃₃</text>
  <text x="255" y="220" font-family="Arial" font-size="24" fill="#2E86C1">⋯</text>
  <text x="280" y="220" font-family="Arial" font-size="24" fill="#2E86C1">a₃ₙ</text>
  
  <!-- Diagonal dots -->
  <text x="255" y="255" font-family="Arial" font-size="24" fill="#2E86C1">⋱</text>
  <text x="280" y="280" font-family="Arial" font-size="24" fill="#2E86C1">aₙₙ</text>
  
  <!-- Zero elements (below diagonal) -->
  <text x="120" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <text x="120" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="170" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <!-- Vertical dots for zeros -->
  <text x="120" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  <text x="170" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  <text x="220" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  
  <!-- Bottom row zeros -->
  <text x="120" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="170" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="220" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="255" y="280" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
</svg>
        `
    },
    {
        "title":"lower triangular matrix",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <!-- Background -->
  <rect width="400" height="400" fill="white"/>
  
  <!-- Left bracket -->
  <line x1="80" y1="80" x2="80" y2="320" stroke="black" stroke-width="2"/>
  <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
  <line x1="80" y1="320" x2="90" y2="320" stroke="black" stroke-width="2"/>
  
  <!-- Right bracket -->
  <line x1="325" y1="80" x2="325" y2="320" stroke="black" stroke-width="2"/>
  <line x1="315" y1="80" x2="325" y2="80" stroke="black" stroke-width="2"/>
  <line x1="315" y1="320" x2="325" y2="320" stroke="black" stroke-width="2"/>
  
  <!-- Diagonal and lower elements -->
  <text x="120" y="120" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
  
  <text x="120" y="170" font-family="Arial" font-size="24" fill="#2E86C1">a₂₁</text>
  <text x="170" y="170" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
  
  <text x="120" y="220" font-family="Arial" font-size="24" fill="#2E86C1">a₃₁</text>
  <text x="170" y="220" font-family="Arial" font-size="24" fill="#2E86C1">a₃₂</text>
  <text x="220" y="220" font-family="Arial" font-size="24" fill="#2E86C1">a₃₃</text>
  
  <!-- Vertical dots -->
  <text x="120" y="255" font-family="Arial" font-size="24" fill="#2E86C1">⋮</text>
  <text x="170" y="255" font-family="Arial" font-size="24" fill="#2E86C1">⋮</text>
  <text x="220" y="255" font-family="Arial" font-size="24" fill="#2E86C1">⋮</text>
  <text x="255" y="255" font-family="Arial" font-size="24" fill="#2E86C1">⋱</text>
  
  <!-- Last row -->
  <text x="120" y="280" font-family="Arial" font-size="24" fill="#2E86C1">aₙ₁</text>
  <text x="170" y="280" font-family="Arial" font-size="24" fill="#2E86C1">aₙ₂</text>
  <text x="220" y="280" font-family="Arial" font-size="24" fill="#2E86C1">aₙ₃</text>
  <text x="255" y="280" font-family="Arial" font-size="24" fill="#2E86C1">⋯</text>
  <text x="280" y="280" font-family="Arial" font-size="24" fill="#2E86C1">aₙₙ</text>
  
  <!-- Zero elements (above diagonal) -->
  <text x="170" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="220" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="255" y="120" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="280" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <text x="220" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  <text x="255" y="170" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="280" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  
  <text x="255" y="220" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="280" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
</svg>
        `
    },
    {
        "title":"zero matrices",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 350">
  <!-- Background -->
  <rect width="900" height="350" fill="white"/>
  
  <!-- Titles -->
  <text x="150" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">2×2 Zero Matrix</text>
  <text x="450" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">3×3 Zero Matrix</text>
  <text x="750" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">4×4 Zero Matrix</text>

  <!-- 2x2 Matrix -->
  <g transform="translate(50,80)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="220" y1="80" x2="220" y2="220" stroke="black" stroke-width="2"/>
    <line x1="210" y1="80" x2="220" y2="80" stroke="black" stroke-width="2"/>
    <line x1="210" y1="220" x2="220" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="120" y="130" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="130" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="120" y="190" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="190" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  </g>

  <!-- 3x3 Matrix -->
  <g transform="translate(350,80)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="220" y1="80" x2="220" y2="220" stroke="black" stroke-width="2"/>
    <line x1="210" y1="80" x2="220" y2="80" stroke="black" stroke-width="2"/>
    <line x1="210" y1="220" x2="220" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="120" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="150" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="180" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="120" y="160" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="150" y="160" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="180" y="160" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="120" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="150" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="180" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  </g>

  <!-- 4x4 Matrix -->
  <g transform="translate(650,80)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="220" y1="80" x2="220" y2="220" stroke="black" stroke-width="2"/>
    <line x1="210" y1="80" x2="220" y2="80" stroke="black" stroke-width="2"/>
    <line x1="210" y1="220" x2="220" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="110" y="110" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="140" y="110" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="110" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="200" y="110" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="110" y="140" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="140" y="140" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="140" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="200" y="140" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="110" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="140" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="200" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="110" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="140" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="200" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
  </g>
</svg>
        `
    },
    {
        "title":"identity matrices",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 350">
  <!-- Background -->
  <rect width="900" height="350" fill="white"/>
  
  <!-- Titles -->
  <text x="150" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">2×2 Identity Matrix</text>
  <text x="450" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">3×3 Identity Matrix</text>
  <text x="750" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">4×4 Identity Matrix</text>

  <!-- 2x2 Matrix -->
  <g transform="translate(50,80)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="220" y1="80" x2="220" y2="220" stroke="black" stroke-width="2"/>
    <line x1="210" y1="80" x2="220" y2="80" stroke="black" stroke-width="2"/>
    <line x1="210" y1="220" x2="220" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="120" y="130" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="170" y="130" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="120" y="190" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="190" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
  </g>

  <!-- 3x3 Matrix -->
  <g transform="translate(350,80)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="220" y1="80" x2="220" y2="220" stroke="black" stroke-width="2"/>
    <line x1="210" y1="80" x2="220" y2="80" stroke="black" stroke-width="2"/>
    <line x1="210" y1="220" x2="220" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="120" y="120" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="150" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="180" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="120" y="160" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="150" y="160" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="180" y="160" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="120" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="150" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="180" y="200" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
  </g>

  <!-- 4x4 Matrix -->
  <g transform="translate(650,80)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="225" y1="80" x2="225" y2="220" stroke="black" stroke-width="2"/>
    <line x1="215" y1="80" x2="225" y2="80" stroke="black" stroke-width="2"/>
    <line x1="215" y1="220" x2="225" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="110" y="110" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="140" y="110" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="110" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="200" y="110" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="110" y="140" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="140" y="140" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="170" y="140" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="200" y="140" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="110" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="140" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="170" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="200" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="110" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="140" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="200" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="200" y="200" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
  </g>
</svg>
        `
    },
    {
        "title":"generic identity matrix",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 350">
  <!-- Background -->
  <rect width="900" height="350" fill="white"/>
  
  <!-- Titles -->
  <text x="450" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">n×n Identity Matrix</text>

  <!-- Generic Identity Matrix -->
  <g transform="translate(250,80)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="320" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="320" x2="90" y2="320" stroke="black" stroke-width="2"/>
    
    <line x1="325" y1="80" x2="325" y2="320" stroke="black" stroke-width="2"/>
    <line x1="315" y1="80" x2="325" y2="80" stroke="black" stroke-width="2"/>
    <line x1="315" y1="320" x2="325" y2="320" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="120" y="120" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="170" y="170" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="220" y="220" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    <text x="255" y="255" font-family="Arial" font-size="24" fill="#2E86C1">⋱</text>
    <text x="280" y="280" font-family="Arial" font-size="24" fill="#2E86C1">1</text>
    
    <!-- Zeros -->
    <text x="170" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="220" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="255" y="120" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
    <text x="280" y="120" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="120" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="220" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="255" y="170" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
    <text x="280" y="170" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <text x="120" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="255" y="220" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
    <text x="280" y="220" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    
    <!-- Vertical dots -->
    <text x="120" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
    <text x="170" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
    <text x="220" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
    <text x="280" y="255" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
    
    <!-- Bottom row -->
    <text x="120" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="170" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="220" y="280" font-family="Arial" font-size="24" fill="#E74C3C">0</text>
    <text x="255" y="280" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  </g>
</svg>
        `
    },
    {
        "title":"symmetric matrices",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 400">
  <!-- Background -->
  <rect width="900" height="400" fill="white"/>
  
  <!-- Titles and Conditions -->
  <text x="150" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">2×2 Symmetric</text>
  <text x="150" y="65" font-family="Arial" font-size="20" text-anchor="middle" fill="black">a₂₁ = a₁₂</text>

  <text x="450" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">3×3 Symmetric</text>
  <text x="450" y="65" font-family="Arial" font-size="20" text-anchor="middle" fill="black">a₂₁ = a₁₂, a₃₁ = a₁₃, a₃₂ = a₂₃</text>

  <text x="750" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">4×4 Symmetric</text>
  <text x="750" y="65" font-family="Arial" font-size="20" text-anchor="middle" fill="black">a₂₁ = a₁₂, a₃₁ = a₁₃, a₄₁ = a₁₄,</text>
  <text x="750" y="90" font-family="Arial" font-size="20" text-anchor="middle" fill="black">a₃₂ = a₂₃, a₄₂ = a₂₄, a₄₃ = a₃₄</text>

  <!-- 2x2 Matrix -->
  <g transform="translate(50,120)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="220" y1="80" x2="220" y2="220" stroke="black" stroke-width="2"/>
    <line x1="210" y1="80" x2="220" y2="80" stroke="black" stroke-width="2"/>
    <line x1="210" y1="220" x2="220" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="120" y="130" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
    <text x="170" y="130" font-family="Arial" font-size="24" fill="#E74C3C">a₁₂</text>
    <text x="120" y="190" font-family="Arial" font-size="24" fill="#E74C3C">a₂₁</text>
    <text x="170" y="190" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
  </g>

  <!-- 3x3 Matrix -->
  <g transform="translate(350,120)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="220" y1="80" x2="220" y2="220" stroke="black" stroke-width="2"/>
    <line x1="210" y1="80" x2="220" y2="80" stroke="black" stroke-width="2"/>
    <line x1="210" y1="220" x2="220" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="120" y="120" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
    <text x="150" y="120" font-family="Arial" font-size="24" fill="#E74C3C">a₁₂</text>
    <text x="180" y="120" font-family="Arial" font-size="24" fill="#E74C3C">a₁₃</text>
    
    <text x="120" y="160" font-family="Arial" font-size="24" fill="#E74C3C">a₂₁</text>
    <text x="150" y="160" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
    <text x="180" y="160" font-family="Arial" font-size="24" fill="#E74C3C">a₂₃</text>
    
    <text x="120" y="200" font-family="Arial" font-size="24" fill="#E74C3C">a₃₁</text>
    <text x="150" y="200" font-family="Arial" font-size="24" fill="#E74C3C">a₃₂</text>
    <text x="180" y="200" font-family="Arial" font-size="24" fill="#2E86C1">a₃₃</text>
  </g>

  <!-- 4x4 Matrix -->
  <g transform="translate(650,120)">
    <!-- Brackets -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="black" stroke-width="2"/>
    <line x1="80" y1="80" x2="90" y2="80" stroke="black" stroke-width="2"/>
    <line x1="80" y1="220" x2="90" y2="220" stroke="black" stroke-width="2"/>
    
    <line x1="230" y1="80" x2="230" y2="220" stroke="black" stroke-width="2"/>
    <line x1="220" y1="80" x2="230" y2="80" stroke="black" stroke-width="2"/>
    <line x1="220" y1="220" x2="230" y2="220" stroke="black" stroke-width="2"/>
    
    <!-- Elements -->
    <text x="110" y="110" font-family="Arial" font-size="20" fill="#2E86C1">a₁₁</text>
    <text x="140" y="110" font-family="Arial" font-size="20" fill="#E74C3C">a₁₂</text>
    <text x="170" y="110" font-family="Arial" font-size="20" fill="#E74C3C">a₁₃</text>
    <text x="200" y="110" font-family="Arial" font-size="20" fill="#E74C3C">a₁₄</text>
    
    <text x="110" y="140" font-family="Arial" font-size="20" fill="#E74C3C">a₂₁</text>
    <text x="140" y="140" font-family="Arial" font-size="20" fill="#2E86C1">a₂₂</text>
    <text x="170" y="140" font-family="Arial" font-size="20" fill="#E74C3C">a₂₃</text>
    <text x="200" y="140" font-family="Arial" font-size="20" fill="#E74C3C">a₂₄</text>
    
    <text x="110" y="170" font-family="Arial" font-size="20" fill="#E74C3C">a₃₁</text>
    <text x="140" y="170" font-family="Arial" font-size="20" fill="#E74C3C">a₃₂</text>
    <text x="170" y="170" font-family="Arial" font-size="20" fill="#2E86C1">a₃₃</text>
    <text x="200" y="170" font-family="Arial" font-size="20" fill="#E74C3C">a₃₄</text>
    
    <text x="110" y="200" font-family="Arial" font-size="20" fill="#E74C3C">a₄₁</text>
    <text x="140" y="200" font-family="Arial" font-size="20" fill="#E74C3C">a₄₂</text>
    <text x="170" y="200" font-family="Arial" font-size="20" fill="#E74C3C">a₄₃</text>
    <text x="200" y="200" font-family="Arial" font-size="20" fill="#2E86C1">a₄₄</text>
  </g>
</svg>
        `
    },
    {
        "title":"generic symmetric matrix",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450">
  <!-- Background -->
  <rect width="400" height="450" fill="white"/>
  
  <!-- Title and Condition -->
  <text x="200" y="40" font-family="Arial" font-size="24" text-anchor="middle" fill="black">n×n Symmetric Matrix</text>
  <text x="200" y="70" font-family="Arial" font-size="20" text-anchor="middle" fill="black">aᵢⱼ = aⱼᵢ for all i,j</text>

  <!-- Matrix -->
  <!-- Brackets -->
  <line x1="80" y1="100" x2="80" y2="340" stroke="black" stroke-width="2"/>
  <line x1="80" y1="100" x2="90" y2="100" stroke="black" stroke-width="2"/>
  <line x1="80" y1="340" x2="90" y2="340" stroke="black" stroke-width="2"/>
  
  <line x1="325" y1="100" x2="325" y2="340" stroke="black" stroke-width="2"/>
  <line x1="315" y1="100" x2="325" y2="100" stroke="black" stroke-width="2"/>
  <line x1="315" y1="340" x2="325" y2="340" stroke="black" stroke-width="2"/>
  
  <!-- Elements -->
  <text x="120" y="140" font-family="Arial" font-size="24" fill="#2E86C1">a₁₁</text>
  <text x="170" y="140" font-family="Arial" font-size="24" fill="#E74C3C">a₁₂</text>
  <text x="220" y="140" font-family="Arial" font-size="24" fill="#E74C3C">a₁₃</text>
  <text x="255" y="140" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="290" y="140" font-family="Arial" font-size="24" fill="#E74C3C">a₁ₙ</text>
  
  <text x="120" y="190" font-family="Arial" font-size="24" fill="#E74C3C">a₂₁</text>
  <text x="170" y="190" font-family="Arial" font-size="24" fill="#2E86C1">a₂₂</text>
  <text x="220" y="190" font-family="Arial" font-size="24" fill="#E74C3C">a₂₃</text>
  <text x="255" y="190" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="290" y="190" font-family="Arial" font-size="24" fill="#E74C3C">a₂ₙ</text>
  
  <text x="120" y="240" font-family="Arial" font-size="24" fill="#E74C3C">a₃₁</text>
  <text x="170" y="240" font-family="Arial" font-size="24" fill="#E74C3C">a₃₂</text>
  <text x="220" y="240" font-family="Arial" font-size="24" fill="#2E86C1">a₃₃</text>
  <text x="255" y="240" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="290" y="240" font-family="Arial" font-size="24" fill="#E74C3C">a₃ₙ</text>
  
  <!-- Vertical dots -->
  <text x="120" y="275" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  <text x="170" y="275" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  <text x="220" y="275" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  <text x="255" y="275" font-family="Arial" font-size="24" fill="#2E86C1">⋱</text>
  <text x="290" y="275" font-family="Arial" font-size="24" fill="#E74C3C">⋮</text>
  
  <!-- Bottom row -->
  <text x="120" y="310" font-family="Arial" font-size="24" fill="#E74C3C">aₙ₁</text>
  <text x="170" y="310" font-family="Arial" font-size="24" fill="#E74C3C">aₙ₂</text>
  <text x="220" y="310" font-family="Arial" font-size="24" fill="#E74C3C">aₙ₃</text>
  <text x="255" y="310" font-family="Arial" font-size="24" fill="#E74C3C">⋯</text>
  <text x="290" y="310" font-family="Arial" font-size="24" fill="#2E86C1">aₙₙ</text>
</svg>
        `
    },
    {
        "title":"2-D vector ",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <!-- Background -->
  <rect width="400" height="400" fill="white"/>
  
  <!-- Grid lines - light gray -->
  <defs>
    <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#eee" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="400" height="400" fill="url(#smallGrid)"/>
  
  <!-- Axes -->
  <line x1="40" y1="360" x2="360" y2="360" stroke="black" stroke-width="2"/>
  <line x1="40" y1="40" x2="40" y2="360" stroke="black" stroke-width="2"/>
  
  <!-- Axes arrows -->
  <path d="M 360,360 L 355,355 L 355,365 Z" fill="black"/>
  <path d="M 40,40 L 35,45 L 45,45 Z" fill="black"/>
  
  <!-- Axes labels -->
  <text x="370" y="365" font-family="Arial" font-size="20">x</text>
  <text x="35" y="35" font-family="Arial" font-size="20">y</text>
  
  <!-- Vector -->
  <line x1="40" y1="360" x2="200" y2="200" stroke="#2E86C1" stroke-width="2.5" marker-end="url(#arrowhead)"/>
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
    refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#2E86C1"/>
    </marker>
  </defs>
  
  <!-- Projection lines (dashed) -->
  <line x1="40" y1="200" x2="200" y2="200" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="5,5"/>
  <line x1="200" y1="360" x2="200" y2="200" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="5,5"/>
  
  <!-- Component labels -->
  <text x="110" y="195" font-family="Arial" font-size="16" fill="#E74C3C">x₁</text>
  <text x="205" y="280" font-family="Arial" font-size="16" fill="#E74C3C">x₂</text>
  
  <!-- Vector label -->
  <text x="180" y="180" font-family="Arial" font-size="20" fill="#2E86C1">x = (x₁,x₂)</text>
  
  <!-- Coordinates of origin -->
  <text x="30" y="380" font-family="Arial" font-size="16">0</text>

</svg>
        `
    },
    {
        "title":"2-D vector 2",
        "description":``,
        "svg":`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <!-- Background -->
  <rect width="400" height="400" fill="white"/>
  
  <!-- Grid lines - light gray -->
  <defs>
    <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#eee" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="400" height="400" fill="url(#smallGrid)"/>
  
  <!-- Axes -->
  <line x1="80" y1="320" x2="320" y2="320" stroke="black" stroke-width="1"/>
  <line x1="80" y1="80" x2="80" y2="320" stroke="black" stroke-width="1"/>
  
  <!-- Axes arrows -->
  <path d="M 320,320 L 315,315 L 315,325 Z" fill="black"/>
  <path d="M 80,80 L 75,85 L 85,85 Z" fill="black"/>
  
  <!-- Axes labels -->
  <text x="330" y="325" font-family="Arial" font-size="20">x</text>
  <text x="75" y="75" font-family="Arial" font-size="20">y</text>
  
  <!-- Vector -->
  <line x1="80" y1="320" x2="240" y2="160" stroke="#2E86C1" stroke-width="2.5" marker-end="url(#arrowhead)"/>
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
    refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#2E86C1"/>
    </marker>
  </defs>
  
  <!-- Projection lines (dashed) -->
  <line x1="80" y1="160" x2="240" y2="160" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="5,5"/>
  <line x1="240" y1="320" x2="240" y2="160" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="5,5"/>
  
  <!-- Component labels -->
  <text x="150" y="155" font-family="Arial" font-size="16" fill="#E74C3C">x</text>
  <text x="245" y="240" font-family="Arial" font-size="16" fill="#E74C3C">y</text>
  
  <!-- Vector label -->
  <text x="220" y="140" font-family="Arial" font-size="20" fill="#2E86C1">v = (x,y)</text>
  
  <!-- Coordinates of origin -->
  <text x="70" y="335" font-family="Arial" font-size="16">0</text>

</svg>
        `
    },
    {
        "title":"",
        "description":``,
        "svg":`
        `
    },
    {
        "title":"",
        "description":``,
        "svg":`
        `
    },
    {
        "title":"",
        "description":``,
        "svg":`
        `
    },





]

export default diagrams;