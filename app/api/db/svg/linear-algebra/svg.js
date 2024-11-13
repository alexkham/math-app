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
    {
        "title":"",
        "description":``,
        "svg":`
        `
    },





]

export default diagrams;