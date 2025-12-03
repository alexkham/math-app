
export const probabilityFunctionData={
    "Central Role of Probability Function":{
        svg:`<svg width="800" height="670" viewBox="0 0 800 670" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid #e0e0e0; border-radius: 8px; background: #fafafa;">
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#2563eb" />
    </marker>
    <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#059669" />
    </marker>
    <linearGradient id="centerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color: #3b82f6; stop-opacity: 0.2;" />
      <stop offset="100%" style="stop-color: #2563eb; stop-opacity: 0.3;" />
    </linearGradient>
  </defs>

  <!-- Title -->
  <text x="400" y="30" font-size="20" font-weight="bold" fill="#1e293b" text-anchor="middle" font-family="Arial, sans-serif">
    The Central Role of the Probability Function
  </text>

  <!-- Top: Random Experiment -->
  <rect x="300" y="60" width="200" height="60" fill="#f1f5f9" stroke="#64748b" stroke-width="2" rx="8" />
  <text x="400" y="85" font-size="14" font-weight="600" fill="#334155" text-anchor="middle" font-family="Arial, sans-serif">
    Random Experiment
  </text>
  <text x="400" y="105" font-size="12" fill="#64748b" text-anchor="middle" font-family="Arial, sans-serif">
    (vague uncertainty)
  </text>

  <!-- Arrow down to probability function -->
  <line x1="400" y1="120" x2="400" y2="200" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead)" />
  <text x="420" y="150" font-size="11" fill="#64748b" font-family="Arial, sans-serif">
    "How likely?"
  </text>

  <!-- Center: Probability Function (Main concept) -->
  <ellipse cx="400" cy="300" rx="180" ry="80" fill="url(#centerGrad)" stroke="#2563eb" stroke-width="3" />
  <text x="400" y="285" font-size="16" font-weight="bold" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">
    Probability Function
  </text>
  <text x="400" y="305" font-size="13" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">
    P(X = x)
  </text>
  <text x="400" y="325" font-size="11" fill="#475569" text-anchor="middle" font-style="italic" font-family="Arial, sans-serif">
    The mathematical rule that
  </text>
  <text x="400" y="340" font-size="11" fill="#475569" text-anchor="middle" font-style="italic" font-family="Arial, sans-serif">
    assigns probabilities to outcomes
  </text>

  <!-- Three arrows going down to outcomes -->
  <line x1="280" y1="380" x2="150" y2="440" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead)" />
  <line x1="400" y1="380" x2="400" y2="440" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead)" />
  <line x1="520" y1="380" x2="650" y2="440" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead)" />

  <!-- Outcomes with probabilities -->
  <circle cx="150" cy="470" r="25" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="150" y="465" font-size="12" font-weight="600" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">
    x₁
  </text>
  <text x="150" y="480" font-size="10" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">
    P(x₁)
  </text>

  <circle cx="400" cy="470" r="25" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="400" y="465" font-size="12" font-weight="600" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">
    x₂
  </text>
  <text x="400" y="480" font-size="10" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">
    P(x₂)
  </text>

  <circle cx="650" cy="470" r="25" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="650" y="465" font-size="12" font-weight="600" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">
    xₙ
  </text>
  <text x="650" y="480" font-size="10" fill="#1e40af" text-anchor="middle" font-family="Arial, sans-serif">
    P(xₙ)
  </text>

  <text x="150" y="515" font-size="10" fill="#64748b" text-anchor="middle" font-family="Arial, sans-serif">
    Outcome 1
  </text>
  <text x="400" y="515" font-size="10" fill="#64748b" text-anchor="middle" font-family="Arial, sans-serif">
    Outcome 2
  </text>
  <text x="650" y="515" font-size="10" fill="#64748b" text-anchor="middle" font-family="Arial, sans-serif">
    Outcome n
  </text>

  <!-- Dots between outcomes -->
  <circle cx="275" cy="470" r="3" fill="#94a3b8" />
  <circle cx="300" cy="470" r="3" fill="#94a3b8" />
  <circle cx="325" cy="470" r="3" fill="#94a3b8" />

  <circle cx="475" cy="470" r="3" fill="#94a3b8" />
  <circle cx="500" cy="470" r="3" fill="#94a3b8" />
  <circle cx="525" cy="470" r="3" fill="#94a3b8" />

  <!-- Arrow down to distributions -->
  <line x1="400" y1="530" x2="400" y2="570" stroke="#059669" stroke-width="2" marker-end="url(#arrowhead-green)" />
  <text x="480" y="555" font-size="11" fill="#059669" font-style="italic" font-family="Arial, sans-serif">
    Forms the basis of...
  </text>

  <!-- Bottom: Probability Distributions -->
  <rect x="250" y="580" width="300" height="60" fill="#f0fdf4" stroke="#059669" stroke-width="2" rx="8" />
  <text x="400" y="605" font-size="14" font-weight="600" fill="#047857" text-anchor="middle" font-family="Arial, sans-serif">
    Probability Distributions
  </text>
  <text x="400" y="625" font-size="11" fill="#059669" text-anchor="middle" font-family="Arial, sans-serif">
    Binomial, Poisson, Normal, etc.
  </text>

  <!-- Left side annotation -->
  <rect x="20" y="270" width="180" height="80" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" rx="6" opacity="0.9" />
  <text x="110" y="290" font-size="11" font-weight="600" fill="#92400e" text-anchor="middle" font-family="Arial, sans-serif">
    Key Properties:
  </text>
  <text x="110" y="308" font-size="10" fill="#92400e" text-anchor="middle" font-family="Arial, sans-serif">
    • 0 ≤ P(x) ≤ 1
  </text>
  <text x="110" y="324" font-size="10" fill="#92400e" text-anchor="middle" font-family="Arial, sans-serif">
    • ΣP(x) = 1
  </text>
  <text x="110" y="340" font-size="10" fill="#92400e" text-anchor="middle" font-family="Arial, sans-serif">
    • Precise & analyzable
  </text>

  <!-- Right side annotation -->
  <rect x="600" y="270" width="180" height="80" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" rx="6" opacity="0.9" />
  <text x="690" y="290" font-size="11" font-weight="600" fill="#92400e" text-anchor="middle" font-family="Arial, sans-serif">
    Transforms:
  </text>
  <text x="690" y="308" font-size="10" fill="#92400e" text-anchor="middle" font-family="Arial, sans-serif">
    Vague uncertainty
  </text>
  <text x="690" y="324" font-size="10" fill="#92400e" text-anchor="middle" font-family="Arial, sans-serif">
    ↓
  </text>
  <text x="690" y="340" font-size="10" fill="#92400e" text-anchor="middle" font-family="Arial, sans-serif">
    Mathematical precision
  </text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Probability Function:General Concept":{
        svg:`<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
  <defs>
    <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#2563eb" />
    </marker>
  </defs>

  <!-- Title -->
  <text x="400" y="30" font-size="20" font-weight="bold" fill="#000000" text-anchor="middle" font-family="Arial, sans-serif">
    Probability Function: The General Concept
  </text>

  <!-- Main concept: Probability Function -->
  <ellipse cx="400" cy="110" rx="200" ry="60" fill="#ffffff" stroke="#2563eb" stroke-width="3" />
  <text x="400" y="100" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle" font-family="Arial, sans-serif">
    Probability Function
  </text>
  <text x="400" y="120" font-size="12" fill="#333333" text-anchor="middle" font-style="italic" font-family="Arial, sans-serif">
    Mathematical rule that assigns probabilities
  </text>

  <!-- Dividing line and label -->
  <line x1="250" y1="200" x2="550" y2="200" stroke="#999999" stroke-width="1" stroke-dasharray="5,5" />
  <text x="400" y="195" font-size="11" fill="#666666" text-anchor="middle" font-family="Arial, sans-serif">
    Specific implementations based on variable type
  </text>

  <!-- Arrow to PMF with label -->
  <line x1="320" y1="170" x2="220" y2="250" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead-blue)" />
  <text x="240" y="210" font-size="11" fill="#2563eb" font-weight="600" font-family="Arial, sans-serif">
    For discrete
  </text>
  <text x="240" y="225" font-size="11" fill="#2563eb" font-weight="600" font-family="Arial, sans-serif">
    variables
  </text>
  
  <!-- Arrow to PDF with label -->
  <line x1="480" y1="170" x2="580" y2="250" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead-blue)" />
  <text x="560" y="210" font-size="11" fill="#2563eb" font-weight="600" font-family="Arial, sans-serif">
    For continuous
  </text>
  <text x="560" y="225" font-size="11" fill="#2563eb" font-weight="600" font-family="Arial, sans-serif">
    variables
  </text>

  <!-- PMF Box (Left) -->
  <rect x="70" y="260" width="300" height="200" fill="#ffffff" stroke="#2563eb" stroke-width="3" rx="10" />
  
  <text x="220" y="290" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle" font-family="Arial, sans-serif">
    PMF
  </text>
  <text x="220" y="310" font-size="13" fill="#2563eb" text-anchor="middle" font-family="Arial, sans-serif">
    Probability Mass Function
  </text>
  
  <text x="220" y="340" font-size="12" fill="#000000" text-anchor="middle" font-family="Arial, sans-serif">
    For Discrete Random Variables
  </text>
  
  <text x="220" y="370" font-size="14" fill="#2563eb" text-anchor="middle" font-family="Arial, sans-serif" font-weight="600">
    P(X = x)
  </text>
  
  <text x="220" y="395" font-size="11" fill="#333333" text-anchor="middle" font-family="Arial, sans-serif">
    Gives exact probability for each
  </text>
  <text x="220" y="410" font-size="11" fill="#333333" text-anchor="middle" font-family="Arial, sans-serif">
    specific outcome value
  </text>
  
  <text x="220" y="435" font-size="10" fill="#666666" text-anchor="middle" font-family="Arial, sans-serif" font-style="italic">
    Examples: coin flips, dice rolls, binomial
  </text>

  <!-- PDF Box (Right) -->
  <rect x="430" y="260" width="300" height="200" fill="#ffffff" stroke="#2563eb" stroke-width="3" rx="10" />
  
  <text x="580" y="290" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle" font-family="Arial, sans-serif">
    PDF
  </text>
  <text x="580" y="310" font-size="13" fill="#2563eb" text-anchor="middle" font-family="Arial, sans-serif">
    Probability Density Function
  </text>
  
  <text x="580" y="340" font-size="12" fill="#000000" text-anchor="middle" font-family="Arial, sans-serif">
    For Continuous Random Variables
  </text>
  
  <text x="580" y="370" font-size="14" fill="#2563eb" text-anchor="middle" font-family="Arial, sans-serif" font-weight="600">
    f(x)
  </text>
  
  <text x="580" y="395" font-size="11" fill="#333333" text-anchor="middle" font-family="Arial, sans-serif">
    Gives probability density; integrate
  </text>
  <text x="580" y="410" font-size="11" fill="#333333" text-anchor="middle" font-family="Arial, sans-serif">
    over intervals for probabilities
  </text>
  
  <text x="580" y="435" font-size="10" fill="#666666" text-anchor="middle" font-family="Arial, sans-serif" font-style="italic">
    Examples: heights, temperatures, normal
  </text>

  <!-- Bottom note -->
  <rect x="200" y="475" width="400" height="15" fill="#ffffcc" stroke="#cccc00" stroke-width="1" rx="4" />
  <text x="400" y="486" font-size="10" fill="#000000" text-anchor="middle" font-family="Arial, sans-serif" font-weight="600">
    Both are specific forms of the general probability function concept
  </text>
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
    }
}