
export const countingPrinciplesDiagramsData={
    "Multiplication Principle":{
        svg:`<svg width="700" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700">
    {/* <!-- Title --> */}
    <text x="500" y="30" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="black">Multiplication Principle: 3-Letter Words</text>
    
    {/* <!-- First letter choices --> */}
    <circle cx="387" cy="100" r="31" fill="#ff7f7f"/>
    <circle cx="450" cy="100" r="31" fill="#ff7f7f"/>
    <circle cx="513" cy="100" r="31" fill="#ff7f7f"/>
    <text x="387" y="107" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">A</text>
    <text x="450" y="107" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">B</text>
    <text x="513" y="107" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">C</text>
    
    {/* <!-- Second letter choices --> */}
    <circle cx="662" cy="100" r="31" fill="#40e0d0"/>
    <circle cx="738" cy="100" r="31" fill="#40e0d0"/>
    <text x="662" y="107" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">X</text>
    <text x="738" y="107" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">Y</text>
    
    {/* <!-- Third letter choices --> */}
    <circle cx="912" cy="100" r="31" fill="#87ceeb"/>
    <circle cx="988" cy="100" r="31" fill="#87ceeb"/>
    <text x="912" y="107" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">P</text>
    <text x="988" y="107" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">Q</text>
    
    {/* <!-- Tree structure --> */}
    <circle cx="700" cy="250" r="19" fill="black"/>
    
    {/* <!-- First level --> */}
    <line x1="700" y1="269" x2="450" y2="375" stroke="black" stroke-width="2"/>
    <line x1="700" y1="269" x2="700" y2="375" stroke="black" stroke-width="2"/>
    <line x1="700" y1="269" x2="950" y2="375" stroke="black" stroke-width="2"/>
    
    <circle cx="450" cy="375" r="25" fill="#ff7f7f"/>
    <circle cx="700" cy="375" r="25" fill="#ff7f7f"/>
    <circle cx="950" cy="375" r="25" fill="#ff7f7f"/>
    <text x="450" y="381" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    <text x="700" y="381" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    <text x="950" y="381" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    
    {/* <!-- Second level --> */}
    <line x1="450" y1="400" x2="387" y2="475" stroke="black" stroke-width="2"/>
    <line x1="450" y1="400" x2="513" y2="475" stroke="black" stroke-width="2"/>
    <line x1="700" y1="400" x2="637" y2="475" stroke="black" stroke-width="2"/>
    <line x1="700" y1="400" x2="763" y2="475" stroke="black" stroke-width="2"/>
    <line x1="950" y1="400" x2="887" y2="475" stroke="black" stroke-width="2"/>
    <line x1="950" y1="400" x2="1013" y2="475" stroke="black" stroke-width="2"/>
    
    <circle cx="387" cy="475" r="25" fill="#40e0d0"/>
    <circle cx="513" cy="475" r="25" fill="#40e0d0"/>
    <circle cx="637" cy="475" r="25" fill="#40e0d0"/>
    <circle cx="763" cy="475" r="25" fill="#40e0d0"/>
    <circle cx="887" cy="475" r="25" fill="#40e0d0"/>
    <circle cx="1013" cy="475" r="25" fill="#40e0d0"/>
    <text x="387" y="481" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">X</text>
    <text x="513" y="481" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Y</text>
    <text x="637" y="481" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">X</text>
    <text x="763" y="481" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Y</text>
    <text x="887" y="481" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">X</text>
    <text x="1013" y="481" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Y</text>
    
    {/* <!-- Third level --> */}
    <line x1="387" y1="500" x2="356" y2="575" stroke="black" stroke-width="2"/>
    <line x1="387" y1="500" x2="418" y2="575" stroke="black" stroke-width="2"/>
    <line x1="513" y1="500" x2="482" y2="575" stroke="black" stroke-width="2"/>
    <line x1="513" y1="500" x2="544" y2="575" stroke="black" stroke-width="2"/>
    <line x1="637" y1="500" x2="606" y2="575" stroke="black" stroke-width="2"/>
    <line x1="637" y1="500" x2="668" y2="575" stroke="black" stroke-width="2"/>
    <line x1="763" y1="500" x2="732" y2="575" stroke="black" stroke-width="2"/>
    <line x1="763" y1="500" x2="794" y2="575" stroke="black" stroke-width="2"/>
    <line x1="887" y1="500" x2="856" y2="575" stroke="black" stroke-width="2"/>
    <line x1="887" y1="500" x2="918" y2="575" stroke="black" stroke-width="2"/>
    <line x1="1013" y1="500" x2="982" y2="575" stroke="black" stroke-width="2"/>
    <line x1="1013" y1="500" x2="1044" y2="575" stroke="black" stroke-width="2"/>
    
    <circle cx="356" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="418" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="482" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="544" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="606" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="668" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="732" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="794" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="856" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="918" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="982" cy="575" r="25" fill="#87ceeb"/>
    <circle cx="1044" cy="575" r="25" fill="#87ceeb"/>
    <text x="356" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">P</text>
    <text x="418" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Q</text>
    <text x="482" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">P</text>
    <text x="544" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Q</text>
    <text x="606" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">P</text>
    <text x="668" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Q</text>
    <text x="732" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">P</text>
    <text x="794" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Q</text>
    <text x="856" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">P</text>
    <text x="918" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Q</text>
    <text x="982" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">P</text>
    <text x="1044" y="581" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">Q</text>
    
    {/* <!-- Word combinations --> */}
    <text x="356" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">AXP</text>
    <text x="418" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">AXQ</text>
    <text x="482" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">AYP</text>
    <text x="544" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">AYQ</text>
    <text x="606" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">BXP</text>
    <text x="668" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">BXQ</text>
    <text x="732" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">BYP</text>
    <text x="794" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">BYQ</text>
    <text x="856" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">CXP</text>
    <text x="918" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">CXQ</text>
    <text x="982" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">CYP</text>
    <text x="1044" y="625" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">CYQ</text>
{/*     
    <!-- Explanatory text --> */}
    <text x="50" y="375" font-family="Arial, sans-serif" font-size="18" text-anchor="start">3 choices for first letter</text>
    <text x="50" y="400" font-family="Arial, sans-serif" font-size="18" text-anchor="start">×</text>
    <text x="50" y="475" font-family="Arial, sans-serif" font-size="18" text-anchor="start">2 choices for second letter</text>
    <text x="50" y="500" font-family="Arial, sans-serif" font-size="18" text-anchor="start">×</text>
    <text x="50" y="575" font-family="Arial, sans-serif" font-size="18" text-anchor="start">2 choices for third letter</text>
    
    {/* <!-- Total --> */}
    <text x="500" y="675" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" font-weight="bold">Total 3-letter words: 3 × 2 × 2 = 12</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Addition Principle":{
        svg:` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 900">
  <!-- Title -->
  <text x="1200" y="80" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="#333">Addition Principle: Pick ONE Ball</text>
  <!-- Group 1: Red Balls -->
  <circle cx="400" cy="200" r="40" fill="#ff6b6b"/>
  <circle cx="500" cy="200" r="40" fill="#ff6b6b"/>
  <circle cx="600" cy="200" r="40" fill="#ff6b6b"/>
  <text x="400" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">1</text>
  <text x="500" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">2</text>
  <text x="600" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">3</text>
  <text x="500" y="280" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#333">Pick 1 of 3 Red Balls</text>
  <!-- Group 2: Turquoise Balls -->
  <circle cx="1100" cy="200" r="40" fill="#4ecdc4"/>
  <circle cx="1200" cy="200" r="40" fill="#4ecdc4"/>
  <text x="1100" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">1</text>
  <text x="1200" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">2</text>
  <text x="1150" y="280" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#333">1 of 2 Turquoise Balls</text>
  <!-- Group 3: Blue Balls -->
  <circle cx="1700" cy="200" r="40" fill="#45b7d1"/>
  <circle cx="1800" cy="200" r="40" fill="#45b7d1"/>
  <circle cx="1900" cy="200" r="40" fill="#45b7d1"/>
  <circle cx="2000" cy="200" r="40" fill="#45b7d1"/>
  <text x="1700" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">1</text>
  <text x="1800" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">2</text>
  <text x="1900" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">3</text>
  <text x="2000" y="210" font-family="Arial, sans-serif" font-size="28" text-anchor="middle" fill="#fff">4</text>
  <text x="1850" y="280" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#333">4 Blue Balls</text>
  <!-- Addition symbols and "or" labels -->
  <text x="850" y="220" font-family="Arial, sans-serif" font-size="60" text-anchor="middle" fill="#333">+</text>
  <rect x="800" y="250" width="100" height="60" rx="30" fill="#f0f0f0" stroke="#333" stroke-width="4"/>
  <text x="850" y="290" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#333" font-weight="bold">OR</text>
  <text x="1450" y="220" font-family="Arial, sans-serif" font-size="60" text-anchor="middle" fill="#333">+</text>
  <rect x="1400" y="250" width="100" height="60" rx="30" fill="#f0f0f0" stroke="#333" stroke-width="4"/>
  <text x="1450" y="290" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#333" font-weight="bold">OR</text>
  <!-- Result -->
  <text x="1200" y="400" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="#333">=</text>
  <circle cx="1200" cy="500" r="60" fill="#333"/>
  <text x="1200" y="516" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="#fff">9</text>
  <text x="1200" y="600" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#333">Total Possibilities</text>
  <!-- Explanation -->
  <text x="1200" y="700" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#333">Add when choosing one ball from any group</text>
  <text x="1200" y="760" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#333">3 + 2 + 4 = 9 possibilities</text>
  <text x="1200" y="820" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="#333" font-weight="bold">We are picking ONE single ball from all groups</text>
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