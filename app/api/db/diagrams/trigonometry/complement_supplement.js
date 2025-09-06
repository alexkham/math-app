
export const complementData={
    "Complementary Angles":{
        svg:`<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#ffffff"/>
  
  <!-- Define center -->
  <defs>
    <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#e74c3c"/>
    </marker>
  </defs>
  
  <!-- Grid lines -->
  <g stroke="#e0e0e0" stroke-width="1" opacity="0.5">
    <!-- Vertical grid lines -->
    <line x1="150" y1="50" x2="150" y2="550"/>
    <line x1="200" y1="50" x2="200" y2="550"/>
    <line x1="250" y1="50" x2="250" y2="550"/>
    <line x1="350" y1="50" x2="350" y2="550"/>
    <line x1="400" y1="50" x2="400" y2="550"/>
    <line x1="450" y1="50" x2="450" y2="550"/>
    <!-- Horizontal grid lines -->
    <line x1="50" y1="150" x2="550" y2="150"/>
    <line x1="50" y1="200" x2="550" y2="200"/>
    <line x1="50" y1="250" x2="550" y2="250"/>
    <line x1="50" y1="350" x2="550" y2="350"/>
    <line x1="50" y1="400" x2="550" y2="400"/>
    <line x1="50" y1="450" x2="550" y2="450"/>
  </g>
  
  <!-- Axes -->
  <line x1="50" y1="300" x2="550" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
  <line x1="300" y1="550" x2="300" y2="50" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Axis labels -->
  <text x="540" y="295" font-family="Arial, sans-serif" font-size="16" font-weight="bold">x</text>
  <text x="305" y="65" font-family="Arial, sans-serif" font-size="16" font-weight="bold">y</text>
  
  <!-- Unit circle -->
  <circle cx="300" cy="300" r="200" fill="none" stroke="#2c3e50" stroke-width="1"/>
  
  <!-- Hand (radius vector) pointing at 45 degrees -->
  <line x1="300" y1="300" x2="441.4" y2="158.6" stroke="#e74c3c" stroke-width="3" marker-end="url(#arrowhead)"/>
  
  <!-- Angle arc -->
  <path d="M 350 300 A 50 50 0 0 0 335.4 264.6" fill="none" stroke="#3498db" stroke-width="2"/>
  
  <!-- Complement angle arc (from hand to 90 degrees) -->
  <path d="M 335.4 264.6 A 50 50 0 0 0 300 250" fill="none" stroke="#27ae60" stroke-width="2"/>
  
  <!-- Angle label -->
  <text x="350" y="285" font-family="Arial, sans-serif" font-size="14" fill="#3498db">θ</text>
  
  <!-- Complement angle label -->
  <text x="315" y="250" font-family="Arial, sans-serif" font-size="14" fill="#27ae60">90°-θ</text>
  
  <!-- Radius = 1 label on the hand -->
  <text x="360" y="215" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e74c3c" transform="rotate(-45 360 215)">r = 1</text>
  
  <!-- Center point -->
  <circle cx="300" cy="300" r="3" fill="#e74c3c"/>
  
  <!-- 0° (1, 0) -->
  <circle cx="500" cy="300" r="4" fill="#e74c3c"/>
  <text x="510" y="295" font-family="Arial, sans-serif" font-size="14" font-weight="bold">0° (0)</text>
  <text x="510" y="310" font-family="Arial, sans-serif" font-size="12">(1, 0)</text>
  
  <!-- 90° (0, 1) -->
  <circle cx="300" cy="100" r="4" fill="#e74c3c"/>
  <text x="305" y="85" font-family="Arial, sans-serif" font-size="14" font-weight="bold">90° (π/2)</text>
  <text x="310" y="95" font-family="Arial, sans-serif" font-size="12">(0, 1)</text>
  
  <!-- 180° (-1, 0) -->
  <circle cx="100" cy="300" r="4" fill="#e74c3c"/>
  <text x="30" y="285" font-family="Arial, sans-serif" font-size="14" font-weight="bold">180° (π)</text>
  <text x="55" y="315" font-family="Arial, sans-serif" font-size="12">(-1, 0)</text>
  
  <!-- 270° (0, -1) -->
  <circle cx="300" cy="500" r="4" fill="#e74c3c"/>
  <text x="305" y="525" font-family="Arial, sans-serif" font-size="14" font-weight="bold">270° (3π/2)</text>
  <text x="310" y="535" font-family="Arial, sans-serif" font-size="12">(0, -1)</text>
  
  <!-- Scale marks on axes -->
  <!-- X-axis marks -->
  <line x1="400" y1="295" x2="400" y2="305" stroke="#333" stroke-width="2"/>
  <text x="395" y="320" font-family="Arial, sans-serif" font-size="12">0.5</text>
  <line x1="500" y1="295" x2="500" y2="305" stroke="#333" stroke-width="2"/>
  <text x="498" y="320" font-family="Arial, sans-serif" font-size="12">1</text>
  <line x1="200" y1="295" x2="200" y2="305" stroke="#333" stroke-width="2"/>
  <text x="190" y="320" font-family="Arial, sans-serif" font-size="12">-0.5</text>
  <line x1="100" y1="295" x2="100" y2="305" stroke="#333" stroke-width="2"/>
  <text x="95" y="320" font-family="Arial, sans-serif" font-size="12">-1</text>
  
  <!-- Y-axis marks -->
  <line x1="295" y1="200" x2="305" y2="200" stroke="#333" stroke-width="2"/>
  <text x="310" y="205" font-family="Arial, sans-serif" font-size="12">0.5</text>
  <line x1="295" y1="100" x2="305" y2="100" stroke="#333" stroke-width="2"/>
  <text x="310" y="105" font-family="Arial, sans-serif" font-size="12">1</text>
  <line x1="295" y1="400" x2="305" y2="400" stroke="#333" stroke-width="2"/>
  <text x="310" y="405" font-family="Arial, sans-serif" font-size="12">-0.5</text>
  <line x1="295" y1="500" x2="305" y2="500" stroke="#333" stroke-width="2"/>
  <text x="310" y="505" font-family="Arial, sans-serif" font-size="12">-1</text>
</svg>`,
        explanation:`**Complementary Angles in the Unit Circle**

This diagram shows an acute angle θ (theta) and its complement (90° - θ) in the unit circle. The blue arc represents the angle θ measured from the positive x-axis, while the green arc shows its complement, which is the remaining angle needed to reach 90°.

**Key Points:**
 The two angles are **complementary** because they add up to 90°: θ + (90° - θ) = 90°
 For an angle to have a complement, it must be **acute** (between 0° and 90°)
 The red vector has length r = 1 (unit radius)
Together, these complementary angles form a right angle (90°)

**Why Acute Only?**
An angle can only have a complement if both the angle and its complement are positive. If θ ≥ 90°, then (90° - θ) ≤ 0°, which is not a valid positive angle. This is why complements are only defined for acute angles.

This relationship is fundamental in trigonometry, especially when working with right triangles where the two acute angles are always complementary.
        `,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Supplementary Angles":{
        svg:`<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="600" fill="#ffffff"/>
  
  <!-- Define center -->
  <defs>
    <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#e74c3c"/>
    </marker>
  </defs>
  
  <!-- Grid lines -->
  <g stroke="#e0e0e0" stroke-width="1" opacity="0.5">
    <!-- Vertical grid lines -->
    <line x1="150" y1="50" x2="150" y2="550"/>
    <line x1="200" y1="50" x2="200" y2="550"/>
    <line x1="250" y1="50" x2="250" y2="550"/>
    <line x1="350" y1="50" x2="350" y2="550"/>
    <line x1="400" y1="50" x2="400" y2="550"/>
    <line x1="450" y1="50" x2="450" y2="550"/>
    <!-- Horizontal grid lines -->
    <line x1="50" y1="150" x2="550" y2="150"/>
    <line x1="50" y1="200" x2="550" y2="200"/>
    <line x1="50" y1="250" x2="550" y2="250"/>
    <line x1="50" y1="350" x2="550" y2="350"/>
    <line x1="50" y1="400" x2="550" y2="400"/>
    <line x1="50" y1="450" x2="550" y2="450"/>
  </g>
  
  <!-- Axes -->
  <line x1="50" y1="300" x2="550" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
  <line x1="300" y1="550" x2="300" y2="50" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Axis labels -->
  <text x="540" y="295" font-family="Arial, sans-serif" font-size="16" font-weight="bold">x</text>
  <text x="305" y="65" font-family="Arial, sans-serif" font-size="16" font-weight="bold">y</text>
  
  <!-- Unit circle -->
  <circle cx="300" cy="300" r="200" fill="none" stroke="#2c3e50" stroke-width="1"/>
  
  <!-- Hand (radius vector) pointing at 30 degrees -->
  <line x1="300" y1="300" x2="473.2" y2="200" stroke="#e74c3c" stroke-width="3" marker-end="url(#arrowhead)"/>
  
  <!-- Angle arc -->
  <path d="M 350 300 A 50 50 0 0 0 343.3 274" fill="none" stroke="#3498db" stroke-width="2"/>
  
  <!-- Supplement angle arc (from hand to 180 degrees) -->
  <path d="M 343.3 274 A 60 60 0 0 0 240 300" fill="none" stroke="#27ae60" stroke-width="2"/>
  
  <!-- Angle label -->
  <text x="360" y="290" font-family="Arial, sans-serif" font-size="14" fill="#3498db">θ</text>
  
  <!-- Supplement angle label -->
  <text x="240" y="230" font-family="Arial, sans-serif" font-size="14" fill="#27ae60">180°-θ</text>
  
  <!-- Radius = 1 label on the hand -->
  <text x="380" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e74c3c" transform="rotate(-30 380 240)">r = 1</text>
  
  <!-- Center point -->
  <circle cx="300" cy="300" r="3" fill="#e74c3c"/>
  
  <!-- 0° (1, 0) -->
  <circle cx="500" cy="300" r="4" fill="#e74c3c"/>
  <text x="510" y="295" font-family="Arial, sans-serif" font-size="14" font-weight="bold">0° (0)</text>
  <text x="510" y="310" font-family="Arial, sans-serif" font-size="12">(1, 0)</text>
  
  <!-- 90° (0, 1) -->
  <circle cx="300" cy="100" r="4" fill="#e74c3c"/>
  <text x="305" y="85" font-family="Arial, sans-serif" font-size="14" font-weight="bold">90° (π/2)</text>
  <text x="310" y="95" font-family="Arial, sans-serif" font-size="12">(0, 1)</text>
  
  <!-- 180° (-1, 0) -->
  <circle cx="100" cy="300" r="4" fill="#e74c3c"/>
  <text x="30" y="285" font-family="Arial, sans-serif" font-size="14" font-weight="bold">180° (π)</text>
  <text x="55" y="315" font-family="Arial, sans-serif" font-size="12">(-1, 0)</text>
  
  <!-- 270° (0, -1) -->
  <circle cx="300" cy="500" r="4" fill="#e74c3c"/>
  <text x="305" y="525" font-family="Arial, sans-serif" font-size="14" font-weight="bold">270° (3π/2)</text>
  <text x="310" y="535" font-family="Arial, sans-serif" font-size="12">(0, -1)</text>
  
  <!-- Scale marks on axes -->
  <!-- X-axis marks -->
  <line x1="400" y1="295" x2="400" y2="305" stroke="#333" stroke-width="2"/>
  <text x="395" y="320" font-family="Arial, sans-serif" font-size="12">0.5</text>
  <line x1="500" y1="295" x2="500" y2="305" stroke="#333" stroke-width="2"/>
  <text x="498" y="320" font-family="Arial, sans-serif" font-size="12">1</text>
  <line x1="200" y1="295" x2="200" y2="305" stroke="#333" stroke-width="2"/>
  <text x="190" y="320" font-family="Arial, sans-serif" font-size="12">-0.5</text>
  <line x1="100" y1="295" x2="100" y2="305" stroke="#333" stroke-width="2"/>
  <text x="95" y="320" font-family="Arial, sans-serif" font-size="12">-1</text>
  
  <!-- Y-axis marks -->
  <line x1="295" y1="200" x2="305" y2="200" stroke="#333" stroke-width="2"/>
  <text x="275" y="205" font-family="Arial, sans-serif" font-size="12">0.5</text>
  <line x1="295" y1="100" x2="305" y2="100" stroke="#333" stroke-width="2"/>
  <text x="275" y="105" font-family="Arial, sans-serif" font-size="12">1</text>
  <line x1="295" y1="400" x2="305" y2="400" stroke="#333" stroke-width="2"/>
  <text x="265" y="405" font-family="Arial, sans-serif" font-size="12">-0.5</text>
  <line x1="295" y1="500" x2="305" y2="500" stroke="#333" stroke-width="2"/>
  <text x="270" y="505" font-family="Arial, sans-serif" font-size="12">-1</text>
</svg>`,
        explanation:`**Supplementary Angles in the Unit Circle**

This diagram shows an angle θ (theta) and its supplement (180° - θ) in the unit circle. The blue arc represents the angle θ measured from the positive x-axis, while the green arc shows its supplement, which is the remaining angle needed to reach 180°.

**Key Points:**
- The two angles are **supplementary** because they add up to 180°: θ + (180° - θ) = 180°
- Unlike complements, supplements can exist for any angle (not just acute angles)
- The red vector has length r = 1 (unit radius)
- Together, these supplementary angles form a straight line (180°)

**Supplementary vs Complementary:**
While complementary angles add to 90° and are restricted to acute angles, supplementary angles add to 180° and can include obtuse angles. For example, if θ = 120°, then its supplement is 180° - 120° = 60°.

This relationship is fundamental in geometry, especially when working with linear pairs and angles on a straight line, where adjacent angles are always supplementary.`,
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