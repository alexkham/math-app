const trigonometryFormulaList = [

    {
        name: "Sine Function (sin)",
        formula: "$\\sin \\theta = \\frac{\\text{Opposite Side}}{\\text{Hypotenuse}}$",
        fields: {
          "Explanation": `In a right-angled triangle, the sine of an angle $\\theta$ is defined as the ratio of the length of the side opposite the angle to the length of the hypotenuse. It's a fundamental trigonometric function used to relate angles to side lengths.
          <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <!-- Triangle -->
                <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Right angle marker -->
                <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Labels -->
                <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
                <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
                <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
                <!-- Angle Theta -->
                <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
                <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
            </svg>`,
          "$\\sin \\theta$": "Sine of angle $\\theta$",
          "Opposite Side": "Side opposite to angle $\\theta$",
          "Hypotenuse": "The longest side opposite the right angle",
          "Example": "If the opposite side is 3 units and the hypotenuse is 5 units, then $\\sin \\theta = \\frac{3}{5} = 0.6$",
          "Use Cases": "Calculating heights, distances, and in wave functions.",
         
        },
        category: "Definitions"
      },
      {
        name: "Cosine Function (cos)",
        formula: "$\\cos \\theta = \\frac{\\text{Adjacent Side}}{\\text{Hypotenuse}}$",
        fields: {
          "Explanation": `In a right-angled triangle, the cosine of an angle $\\theta$ is the ratio of the length of the adjacent side to the angle to the length of the hypotenuse. It's essential for relating side lengths to angles.
           <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <!-- Triangle -->
                <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Right angle marker -->
                <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Labels -->
                <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
                <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
                <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
                <!-- Angle Theta -->
                <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
                <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
            </svg>`,
          "$\\cos \\theta$": "Cosine of angle $\\theta$",
          "Adjacent Side": "Side adjacent to angle $\\theta$",
          "Hypotenuse": "The longest side opposite the right angle",
          "Example": "If the adjacent side is 4 units and the hypotenuse is 5 units, then $\\cos \\theta = \\frac{4}{5} = 0.8$",
          "Use Cases": "Determining horizontal distances and in harmonic motion.",
          
        },
        category: "Definitions"
      },
      {
        name: "Tangent Function (tan)",
        formula: "$\\tan \\theta = \\frac{\\text{Opposite Side}}{\\text{Adjacent Side}}$",
        fields: {
          "Explanation": `In a right-angled triangle, the tangent of angle $\\theta$ is the ratio of the length of the opposite side to the length of the adjacent side. It relates the two sides that form the right angle.
           <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <!-- Triangle -->
                <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Right angle marker -->
                <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Labels -->
                <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
                <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
                <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
                <!-- Angle Theta -->
                <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
                <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
            </svg>`,
          "$\\tan \\theta$": "Tangent of angle $\\theta$",
          "Opposite Side": "Side opposite to angle $\\theta$",
          "Adjacent Side": "Side adjacent to angle $\\theta$",
          "Example": "If the opposite side is 3 units and the adjacent side is 4 units, then $\\tan \\theta = \\frac{3}{4} = 0.75$",
          "Use Cases": "Calculating slopes, angles of elevation or depression.",
         
        },
        category: "Definitions"
      },
      {
        name: "Cosecant Function (csc)",
        formula: "$\\csc \\theta = \\frac{\\text{Hypotenuse}}{\\text{Opposite Side}} = \\frac{1}{\\sin \\theta}$",
        fields: {
          "Explanation": `The cosecant function is the reciprocal of the sine function. It relates the hypotenuse to the opposite side.
           <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <!-- Triangle -->
                <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Right angle marker -->
                <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Labels -->
                <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
                <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
                <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
                <!-- Angle Theta -->
                <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
                <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
            </svg>
            <svg width="400" height="300" viewBox="-150 -150 300 300">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
            </defs>
            
            <!-- Grid -->
            <g stroke="lightgray" strokeWidth="0.5">
                <line x1="-100" y1="-100" x2="-100" y2="100" />
                <line x1="100" y1="-100" x2="100" y2="100" />
                <line x1="-100" y1="-100" x2="100" y2="-100" />
                <line x1="-100" y1="100" x2="100" y2="100" />
                <line x1="-50" y1="-100" x2="-50" y2="100" />
                <line x1="50" y1="-100" x2="50" y2="100" />
                <line x1="-100" y1="-50" x2="100" y2="-50" />
                <line x1="-100" y1="50" x2="100" y2="50" />
            </g>
            
            <!-- Unit Circle -->
            <circle cx="0" cy="0" r="100" stroke="black" fill="none" />
            
            <!-- Coordinate Axes -->
            <line x1="-150" y1="0" x2="200" y2="0" stroke="black" markerEnd="url(#arrowhead)" />
            <line x1="0" y1="-150" x2="0" y2="150" stroke="black" />
            
            <!-- Reference line y = 1 -->
            <line x1="-200" y1="-100" x2="200" y2="-100" stroke="blue" strokeWidth="1.5" />
            
            <!-- Point P on unit circle and connected lines -->
            <line x1="0" y1="0" x2="86.6" y2="-50" stroke="green" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <!-- Cosecant line - extending through the y=1 line -->
            <line x1="0" y1="0" x2="86.6" y2="-50" stroke="red" strokeWidth="1.5" />
            <line x1="86.6" y1="-50" x2="173.2" y2="-100" stroke="red" strokeDasharray="3,3" />
            
            <!-- Vertical lines showing sin and csc -->
            <line x1="86.6" y1="-50" x2="86.6" y2="0" stroke="purple" strokeWidth="1.5" />
            <line x1="173.2" y1="-100" x2="173.2" y2="0" stroke="purple" strokeWidth="1.5" />
            
            <!-- Points -->
            <circle cx="86.6" cy="-50" r="3" fill="green" />
            <circle cx="173.2" cy="-100" r="3" fill="red" />
            
            <!-- Angle arc -->
            <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="green" />
            
            <!-- Labels -->
            <text x="25" y="-8" fontSize="14">θ</text>
            <text x="160" y="-85" fontSize="14">csc θ</text>
            <text x="-120" y="-105 fontSize="14">y = 1</text>
            <text x="70" y="-25" fontSize="14">sin θ</text>
            
            <!-- Unit labels -->
            <text x="102" y="15" fontSize="12">1</text>
            <text x="-110" y="15" fontSize="12">-1</text>
            <text x="5" y="-102" fontSize="12">1</text>
            <text x="5" y="110" fontSize="12">-1</text>
        </svg>`,
          "$\\csc \\theta$": "Cosecant of angle $\\theta$",
          "Hypotenuse": "The longest side opposite the right angle",
          "Opposite Side": "Side opposite to angle $\\theta$",
          "Example": "If the hypotenuse is 5 units and the opposite side is 3 units, then $\\csc \\theta = \\frac{5}{3} \\approx 1.6667$",
          "Use Cases": "Used when the sine value is small and its reciprocal is needed.",
          
        },
        category: "Definitions"
      },
      {
        name: "Secant Function (sec)",
        formula: "$\\sec \\theta = \\frac{\\text{Hypotenuse}}{\\text{Adjacent Side}} = \\frac{1}{\\cos \\theta}$",
        fields: {
          "Explanation": `The secant function is the reciprocal of the cosine function. It relates the hypotenuse to the adjacent side.
           <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <!-- Triangle -->
                <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Right angle marker -->
                <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Labels -->
                <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
                <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
                <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
                <!-- Angle Theta -->
                <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
                <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
            </svg>
            <svg width="300" height="300" viewBox="-150 -150 300 300">
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
            refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
    </defs>
    
    <!-- Grid -->
    <g stroke="lightgray" strokeWidth="0.5">
        <line x1="-100" y1="-100" x2="-100" y2="100" />
        <line x1="100" y1="-100" x2="100" y2="100" />
        <line x1="-100" y1="-100" x2="100" y2="-100" />
        <line x1="-100" y1="100" x2="100" y2="100" />
        <line x1="-50" y1="-100" x2="-50" y2="100" />
        <line x1="50" y1="-100" x2="50" y2="100" />
        <line x1="-100" y1="-50" x2="100" y2="-50" />
        <line x1="-100" y1="50" x2="100" y2="50" />
    </g>
    
    <!-- Unit Circle -->
    <circle cx="0" cy="0" r="100" stroke="black" fill="none" />
    
    <!-- Coordinate Axes -->
    <line x1="-150" y1="0" x2="200" y2="0" stroke="black" markerEnd="url(#arrowhead)" />
    <line x1="0" y1="-150" x2="0" y2="150" stroke="black" />
    
    <!-- Reference line x = 1 -->
    <line x1="100" y1="-200" x2="100" y2="200" stroke="blue" strokeWidth="1.5" />
    
    <!-- Point P on unit circle and connected lines -->
    <line x1="0" y1="0" x2="86.6" y2="-50" stroke="green" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    <!-- Secant line - extending through the x=1 line -->
    <line x1="0" y1="0" x2="86.6" y2="-50" stroke="red" strokeWidth="1.5" />
    <line x1="86.6" y1="-50" x2="100" y2="-57.7" stroke="red" strokeDasharray="3,3" />
    
    <!-- Horizontal lines showing cos and sec -->
    <line x1="86.6" y1="-50" x2="100" y2="-50" stroke="purple" strokeWidth="1.5" />
    <line x1="0" y1="-57.7" x2="100" y2="-57.7" stroke="purple" strokeWidth="1.5" />
    
    <!-- Points -->
    <circle cx="86.6" cy="-50" r="3" fill="green" />
    <circle cx="100" cy="-57.7" r="3" fill="red" />
    
    <!-- Angle arc -->
    <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="green" />
    
    <!-- Labels -->
    <text x="25" y="-8" fontSize="14">θ</text>
    <text x="110" y="-57.7" fontSize="14">sec θ</text>
    <text x="105" y="15" fontSize="14">x = 1</text>
    <text x="90" y="-35" fontSize="14">cos θ</text>
    
    <!-- Unit labels -->
    <text x="102" y="15" fontSize="12">1</text>
    <text x="-110" y="15" fontSize="12">-1</text>
    <text x="5" y="-102" fontSize="12">1</text>
    <text x="5" y="110" fontSize="12">-1</text>
</svg>`,
          "$\\sec \\theta$": "Secant of angle $\\theta$",
          "Hypotenuse": "The longest side opposite the right angle",
          "Adjacent Side": "Side adjacent to angle $\\theta$",
          "Example": "If the hypotenuse is 5 units and the adjacent side is 4 units, then $\\sec \\theta = \\frac{5}{4} = 1.25$",
          "Use Cases": "Useful in scenarios where the cosine value is small.",
          
        },
        category: "Definitions"
      },
      {
        name: "Cotangent Function (cot)",
        formula: "$\\cot \\theta = \\frac{\\text{Adjacent Side}}{\\text{Opposite Side}} = \\frac{1}{\\tan \\theta}$",
        fields: {
          "Explanation": `The cotangent function is the reciprocal of the tangent function. It relates the adjacent side to the opposite side.
           <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <!-- Triangle -->
                <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Right angle marker -->
                <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
                <!-- Labels -->
                <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
                <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
                <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
                <!-- Angle Theta -->
                <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
                <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
            </svg>`,
          "$\\cot \\theta$": "Cotangent of angle $\\theta$",
          "Adjacent Side": "Side adjacent to angle $\\theta$",
          "Opposite Side": "Side opposite to angle $\\theta$",
          "Example": "If the adjacent side is 4 units and the opposite side is 3 units, then $\\cot \\theta = \\frac{4}{3} \\approx 1.3333$",
          "Use Cases": "Applied in trigonometric calculations where the tangent value is large.",
          
        },
        category: "Definitions"
      },
      {
        name: "Secant Reciprocal Identity",
        formula: "$\\sec \\theta = \\frac{1}{\\cos \\theta}$",
        fields: {
          "Explanation": `The secant function is the reciprocal of the cosine function. Geometrically, on a unit circle, it represents the distance from the center to where a line from the origin at angle θ intersects the secant line (vertical line at x = 1). This relationship is fundamental in calculus and trigonometric substitutions.`,
          "Derivation": "$$\\sec \\theta = \\frac{1}{\\cos \\theta} = \\frac{\\text{hypotenuse}}{\\text{adjacent}}$$",
          "Applications": "Used in calculus, especially in integration involving trigonometric functions",
          "Related": "The Pythagorean identity $\\sec^2 \\theta = 1 + \\tan^2 \\theta$ can be derived using this"
        },
        category: "Reciprocal Identities"
      },
      {
        name: "Cosecant Reciprocal Identity",
        formula: "$\\csc \\theta = \\frac{1}{\\sin \\theta}$",
        fields: {
          "Explanation": `The cosecant function is the reciprocal of the sine function. On a unit circle, it represents the distance from the origin to where a line at angle θ intersects the cosecant line (horizontal line at y = 1). This relationship mirrors the secant identity but works with the perpendicular component.`,
          "Derivation": "$$\\csc \\theta = \\frac{1}{\\sin \\theta} = \\frac{\\text{hypotenuse}}{\\text{opposite}}$$",
          "Applications": "Essential in integration techniques and solving differential equations",
          "Related": "Used to derive the Pythagorean identity $\\csc^2 \\theta = 1 + \\cot^2 \\theta$"
        },
        category: "Reciprocal Identities"
      },
      {
        name: "Cotangent Reciprocal Identity",
        formula: "$\\cot \\theta = \\frac{1}{\\tan \\theta} = \\frac{\\cos \\theta}{\\sin \\theta}$",
        fields: {
          "Explanation": `The cotangent function is both the reciprocal of tangent and the ratio of cosine to sine. This dual nature makes it particularly useful in simplifying expressions. Unlike secant and cosecant which reference the hypotenuse, cotangent relates the two legs of the right triangle directly.`,
          "Derivation": `$$\\cot \\theta = \\frac{1}{\\tan \\theta} = \\frac{1}{\\frac{\\sin \\theta}{\\cos \\theta}} = \\frac{\\cos \\theta}{\\sin \\theta}$$`,
          "Applications": "Useful in solving trigonometric equations and in calculus integration",
          "Related": "Can be used to convert between tangent and cotangent expressions"
        },
        category: "Reciprocal Identities"
      }

      ,
      {
        name: "Primary Pythagorean Identity",
        formula: "$\\sin^2 \\theta + \\cos^2 \\theta = 1$",
        fields: {
          "Explanation": `This fundamental identity comes directly from the Pythagorean theorem applied to the unit circle. When you place a point P on a unit circle, its coordinates $(\\cos \\theta, \\sin \\theta)$ form a right triangle. Since the radius (hypotenuse) is 1, the squares of sine and cosine must sum to 1. This becomes the foundation for deriving most other trigonometric identities.`,
          "Visualization": `
          <svg width="300" height="300" viewBox="-150 -150 300 300">
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
            refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
    </defs>
    
    <!-- Grid -->
    <g stroke="lightgray" strokeWidth="0.5">
        {[-100, -50, 50, 100].map(coord => (
            <line x1={coord} y1="-100" x2={coord} y2="100" />
            <line y1={coord} x1="-100" y2={coord} x2="100" />
        ))}
    </g>
    
    <!-- Unit Circle -->
    <circle cx="0" cy="0" r="100" stroke="black" fill="none" />
    
    <!-- Coordinate Axes -->
    <line x1="-150" y1="0" x2="150" y2="0" stroke="black" />
    <line x1="0" y1="-150" x2="0" y2="150" stroke="black" />
    
    <!-- Point P and connected lines (at 30 degrees) -->
    <line x1="0" y1="0" x2="86.6" y2="-50" stroke="green" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    <line x1="86.6" y1="0" x2="86.6" y2="-50" stroke="blue" strokeWidth="1.5" />
    <line x1="0" y1="0" x2="86.6" y2="0" stroke="red" strokeWidth="1.5" />
    <circle cx="86.6" cy="-50" r="3" fill="red" />
    
    <!-- Right angle marker -->
    <path d="M 81.6 0 L 81.6 -5 L 86.6 -5" fill="none" stroke="black" />
    
    <!-- Labels -->
    <text x="91.6" y="-25" fontSize="14">sin θ</text>
    <text x="40" y="15" fontSize="14">cos θ</text>
    <text x="40" y="-30" fontSize="14">1</text>
    
    <!-- Angle arc -->
    <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="green" />
    <text x="25" y="-8" fontSize="14">θ</text>
    
    <!-- Unit labels -->
    <text x="102" y="15" fontSize="12">1</text>
    <text x="-110" y="15" fontSize="12">-1</text>
    <text x="5" y="-102" fontSize="12">1</text>
    <text x="5" y="110" fontSize="12">-1</text>
</svg>
          `,
          "Derivation": "From Pythagorean theorem: $x^2 + y^2 = r^2$ on unit circle where $r=1$",
          "Applications": "Fundamental in calculus, physics, and simplifying complex trig expressions",
          "Related": "All other trig identities can be derived from this one"
        },
        category: "Pythagorean Identities"
      },
      {
        name: "Tangent Pythagorean Identity",
        formula: "$1 + \\tan^2 \\theta = \\sec^2 \\theta$",
        fields: {
          "Explanation": `This identity emerges when you divide the primary identity by $\\cos^2 \\theta$. Since $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$ and $\\sec \\theta = \\frac{1}{\\cos \\theta}$, dividing $\\sin^2 \\theta + \\cos^2 \\theta = 1$ by $\\cos^2 \\theta$ gives us this relationship.`,
          "Derivation": "$$\\frac{\\sin^2 \\theta + \\cos^2 \\theta}{\\cos^2 \\theta} = \\frac{1}{\\cos^2 \\theta}$$ $$\\frac{\\sin^2 \\theta}{\\cos^2 \\theta} + 1 = \\sec^2 \\theta$$ $$\\tan^2 \\theta + 1 = \\sec^2 \\theta$$",
          "Applications": "Useful in calculus, especially when working with tangent derivatives",
          "Related": "Can be used to simplify expressions involving tangent and secant"
        },
        category: "Pythagorean Identities"
      },
      {
        name: "Cotangent Pythagorean Identity",
        formula: "$1 + \\cot^2 \\theta = \\csc^2 \\theta$",
        fields: {
          "Explanation": `This identity is obtained by dividing the primary identity by $\\sin^2 \\theta$. Since $\\cot \\theta = \\frac{\\cos \\theta}{\\sin \\theta}$ and $\\csc \\theta = \\frac{1}{\\sin \\theta}$, we get this complementary relationship to the tangent identity.`,
          "Derivation": "$$\\frac{\\sin^2 \\theta + \\cos^2 \\theta}{\\sin^2 \\theta} = \\frac{1}{\\sin^2 \\theta}$$ $$1 + \\frac{\\cos^2 \\theta}{\\sin^2 \\theta} = \\csc^2 \\theta$$ $$1 + \\cot^2 \\theta = \\csc^2 \\theta$$",
          "Applications": "Particularly useful when working with inverse trigonometric functions",
          "Related": "Mirrors the tangent identity but uses reciprocal functions"
        },
        category: "Pythagorean Identities"
      },
      {
        name: "Sine-Cosine Co-Function Identity",
        formula: "$\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos \\theta$",
        fields: {
          "Explanation": `This identity shows that sine of a complementary angle (π/2 - θ) equals the cosine of the original angle θ. Geometrically, this represents the relationship between vertical and horizontal components when an angle is rotated to its complement. When you take π/2 (90°) and subtract θ, you get the complementary angle, and its sine equals the original angle's cosine.`,
          "Visualization": `<svg width="300" height="300" viewBox="-150 -150 300 300">
              <!-- Same SVG structure as before but showing complementary angles -->
              <!-- Would you like me to create the full visualization? -->
          </svg>`,
          "Applications": "Used in solving trigonometric equations and simplifying expressions involving complementary angles",
          "Related": "This forms the basis for other co-function identities"
        },
        category: "Co-Function Identities"
      },
      {
        name: "Cosine-Sine Co-Function Identity",
        formula: "$\\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin \\theta$",
        fields: {
          "Explanation": `The complement of the cosine relationship: cosine of a complementary angle equals the sine of the original angle. This is essentially the same relationship as sine-cosine co-function but from the other perspective. It demonstrates the symmetric nature of complementary angles.`,
          "Applications": "Helpful in problems involving right triangles and complementary angles",
          "Related": "Direct complement to the sine co-function identity"
        },
        category: "Co-Function Identities"
      },
      {
        name: "Tangent-Cotangent Co-Function Identity",
        formula: "$\\tan\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cot \\theta$",
        fields: {
          "Explanation": `This identity relates the tangent of a complementary angle to the cotangent of the original angle. Since tangent is sine/cosine and cotangent is cosine/sine, this relationship follows naturally from how sine and cosine swap roles in complementary angles.`,
          "Applications": "Useful in calculus and advanced trigonometric manipulations",
          "Related": "Connected to the reciprocal relationship between tangent and cotangent"
        },
        category: "Co-Function Identities"
      },
      {
        name: "Cotangent-Tangent Co-Function Identity",
        formula: "$\\cot\\left(\\frac{\\pi}{2} - \\theta\\right) = \\tan \\theta$",
        fields: {
          "Explanation": `The complement of the tangent-cotangent relationship. Shows that the cotangent of a complementary angle equals the tangent of the original angle. This follows from the reciprocal nature of these functions and their behavior with complementary angles.`,
          "Applications": "Used in solving trigonometric equations involving complementary angles",
          "Related": "Mirror of the tangent co-function identity"
        },
        category: "Co-Function Identities"
      },
      {
        name: "Secant-Cosecant Co-Function Identity",
        formula: "$\\sec\\left(\\frac{\\pi}{2} - \\theta\\right) = \\csc \\theta$",
        fields: {
          "Explanation": `The secant of a complementary angle equals the cosecant of the original angle. Since secant and cosecant are reciprocals of cosine and sine respectively, this relationship mirrors the fundamental sine-cosine co-function identity.`,
          "Applications": "Important in advanced trigonometric calculations and proofs",
          "Related": "Follows from the basic sine-cosine relationship combined with reciprocal identities"
        },
        category: "Co-Function Identities"
      },
      {
        name: "Cosecant-Secant Co-Function Identity",
        formula: "$\\csc\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sec \\theta$",
        fields: {
          "Explanation": `Completes the set of co-function identities by showing that the cosecant of a complementary angle equals the secant of the original angle. This relationship is the natural consequence of how reciprocal functions behave with complementary angles.
         <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background Rectangle -->
    <rect x="270" y="50" width="270" height="120" fill="#f8f9fa" rx="10" stroke="#dee2e6" stroke-width="1"/>
    
    <!-- Triangle -->
    <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1.5"/>
    
    <!-- Right angle marker -->
    <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1.5"/>
    
    <!-- Angle Theta -->
    <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1.5"/>
    <text x="95" y="145" text-anchor="middle" font-size="14">θ</text>
    
    <!-- Complementary Angle -->
    <g transform="translate(0,-32)">
        <path d="M250,115 A35,35 0 0,1 235,90" fill="none" stroke="green" stroke-width="1.5"/>
        <text x="220" y="125" text-anchor="middle" font-size="14">π/2 - θ</text>
    </g>
    
    <!-- Right Angle Label -->
    <text x="225" y="135" text-anchor="start" font-size="14">90°</text>

    <!-- Explanation -->
    <text x="280" y="70" font-family="Arial, sans-serif" style="font-weight: bold;" font-size="13" fill="#2c3e50">
        <tspan x="280" dy="0">In any triangle, angles sum to 180°</tspan>
        <tspan x="280" dy="20" style="font-weight: normal;">We have:</tspan>
        <tspan x="295" dy="20" style="font-weight: normal;">• One right angle (90°)</tspan>
        <tspan x="295" dy="20" style="font-weight: normal;">• One angle θ</tspan>
        <tspan x="295" dy="20" style="font-weight: normal;">• Third is π/2 - θ (complementary)</tspan>
    </text>
</svg>`,
          "Applications": "Used in complex trigonometric proofs and calculations",
          "Related": "Final piece of the co-function identity set"
        },
        category: "Co-Function Identities"
      },
      {
        name: "Cosine Even Identity",
        formula: "$\\cos(-\\theta) = \\cos \\theta$",
        fields: {
          "Explanation": `Cosine is an even function - reflecting angle around y-axis gives same value.
          <svg width="550" height="300" viewBox="-150 -150 550 300">
    <!-- Background Rectangle for explanation -->
    <rect x="240" y="-50" width="270" height="120" fill="#f8f9fa" rx="10" stroke="#dee2e6" stroke-width="1"/>
    
    <!-- Grid -->
    <g stroke="lightgray" strokeWidth="0.5">
        <line x1="-100" y1="-100" x2="-100" y2="100" />
        <line x1="100" y1="-100" x2="100" y2="100" />
        <line x1="-100" y1="-100" x2="100" y2="-100" />
        <line x1="-100" y1="100" x2="100" y2="100" />
        <line x1="-50" y1="-100" x2="-50" y2="100" />
        <line x1="50" y1="-100" x2="50" y2="100" />
        <line x1="-100" y1="-50" x2="100" y2="-50" />
        <line x1="-100" y1="50" x2="100" y2="50" />
    </g>
    
    <!-- Unit Circle -->
    <circle cx="0" cy="0" r="100" stroke="black" fill="none"/>
    
    <!-- Axes -->
    <line x1="-150" y1="0" x2="150" y2="0" stroke="black"/>
    <line x1="0" y1="-150" x2="0" y2="150" stroke="black"/>
    
    <!-- +θ angle vector -->
    <line x1="0" y1="0" x2="86.6" y2="-50" stroke="red" strokeWidth="1.5"/>
    
    <!-- -θ angle vector -->
    <line x1="0" y1="0" x2="86.6" y2="50" stroke="blue" strokeWidth="1.5"/>
    
    <!-- Cosine projections -->
    <line x1="86.6" y1="-50" x2="86.6" y2="0" stroke="red" strokeDasharray="4"/>
    <line x1="86.6" y1="50" x2="86.6" y2="0" stroke="blue" strokeDasharray="4"/>
    
    <!-- Angles arcs -->
    <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="red"/>
    <path d="M 30 0 A 30 30 0 0 1 26 15" fill="none" stroke="blue"/>
    
    <!-- Labels -->
    <text x="40" y="-10" fill="red">θ</text>
    <text x="40" y="20" fill="blue">-θ</text>
    <text x="45" y="-5" fill="black">cos θ</text>

    <!-- Explanation -->
    <text x="250" y="-30" font-family="Arial, sans-serif" style="font-weight: bold;" font-size="13" fill="#2c3e50">
        <tspan x="250" dy="0">Even Function: cos(-θ) = cos(θ)</tspan>
        <tspan x="250" dy="20" style="font-weight: normal;">When we reflect angle θ across x-axis:</tspan>
        <tspan x="265" dy="20" style="font-weight: normal;">• x-coordinate stays the same</tspan>
        <tspan x="265" dy="20" style="font-weight: normal;">• Both angles have same cosine value</tspan>
        <tspan x="265" dy="20" style="font-weight: normal;">• Only y-coordinate changes sign</tspan>
    </text>
</svg>`,
          "Use Cases": "Simplifying expressions with negative angles",
          "Remember": "Even functions have no sign change with negative input"
        },
        category: "Even Functions"
      },
      {
        name: "Secant Even Identity",
        formula: "$\\sec(-\\theta) = \\sec \\theta$",
        fields: {
          "Explanation": "Secant is even because it's reciprocal of cosine",
          "Use Cases": "Working with negative angles in secant expressions",
          "Remember": "Inherits evenness from cosine function"
        },
        category: "Even Functions"
      },
      {
        name: "Sine Odd Identity",
        formula: "$\\sin(-\\theta) = -\\sin \\theta$",
        fields: {
          "Explanation": "Sine is an odd function - reflecting angle around origin gives opposite value",
          "Use Cases": "Wave functions, oscillations with negative angles",
          "Remember": "Odd functions change sign with negative input"
        },
        category: "Odd Functions"
      },
      {
        name: "Tangent Odd Identity",
        formula: "$\\tan(-\\theta) = -\\tan \\theta$",
        fields: {
          "Explanation": "Tangent is odd as it's sine (odd) divided by cosine (even)",
          "Use Cases": "Simplifying tangent expressions with negative angles",
          "Remember": "Sign changes when angle becomes negative"
        },
        category: "Odd Functions"
      },
      {
        name: "Cosecant Odd Identity",
        formula: "$\\csc(-\\theta) = -\\csc \\theta$",
        fields: {
          "Explanation": "Cosecant is odd because it's reciprocal of sine",
          "Use Cases": "Working with negative angles in cosecant expressions",
          "Remember": "Inherits oddness from sine function"
        },
        category: "Odd Functions"
      },
      {
        name: "Cotangent Odd Identity",
        formula: "$\\cot(-\\theta) = -\\cot \\theta$",
        fields: {
          "Explanation": "Cotangent is odd as it's cosine (even) divided by sine (odd)",
          "Use Cases": "Working with negative angles in cotangent expressions",
          "Remember": "Sign changes when angle becomes negative"
        },
        category: "Odd Functions"
      }
    
  ];
  
  export default trigonometryFormulaList;
  