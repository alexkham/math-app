const diagrams={

   "svg_1":{

    "title":"3 Permutation Illustration",
    "explanation":"",
    
    "svg":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 650">
  <!-- Background -->
  <rect width="800" height="650" fill="#f0f0f0"/>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#333">Permutations of ABC: Step-by-Step</text>
  
  <!-- Initial elements -->
  <circle cx="400" cy="80" r="30" fill="#ff6b6b"/>
  <circle cx="500" cy="80" r="30" fill="#4ecdc4"/>
  <circle cx="600" cy="80" r="30" fill="#45b7d1"/>
  
  <text x="400" y="88" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#fff">A</text>
  <text x="500" y="88" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#fff">B</text>
  <text x="600" y="88" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#fff">C</text>
  
  <!-- First choice -->
  <text x="50" y="180" font-family="Arial, sans-serif" font-size="20" fill="#333">First choice:</text>
  
  <line x1="400" y1="110" x2="300" y2="180" stroke="#ff6b6b" stroke-width="2"/>
  <line x1="500" y1="110" x2="500" y2="180" stroke="#4ecdc4" stroke-width="2"/>
  <line x1="600" y1="110" x2="700" y2="180" stroke="#45b7d1" stroke-width="2"/>
  
  <circle cx="300" cy="200" r="25" fill="#ff6b6b"/>
  <circle cx="500" cy="200" r="25" fill="#4ecdc4"/>
  <circle cx="700" cy="200" r="25" fill="#45b7d1"/>
  
  <text x="300" y="207" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="500" y="207" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="700" y="207" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  
  <text x="500" y="250" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">3 options to choose first ball</text>
  
  <!-- Second choice -->
  <text x="50" y="300" font-family="Arial, sans-serif" font-size="20" fill="#333">Second choice:</text>
  
  <line x1="300" y1="225" x2="250" y2="300" stroke="#4ecdc4" stroke-width="2"/>
  <line x1="300" y1="225" x2="350" y2="300" stroke="#45b7d1" stroke-width="2"/>
  
  <line x1="500" y1="225" x2="450" y2="300" stroke="#ff6b6b" stroke-width="2"/>
  <line x1="500" y1="225" x2="550" y2="300" stroke="#45b7d1" stroke-width="2"/>
  
  <line x1="700" y1="225" x2="650" y2="300" stroke="#ff6b6b" stroke-width="2"/>
  <line x1="700" y1="225" x2="750" y2="300" stroke="#4ecdc4" stroke-width="2"/>
  
  <circle cx="250" cy="320" r="20" fill="#4ecdc4"/>
  <circle cx="350" cy="320" r="20" fill="#45b7d1"/>
  <circle cx="450" cy="320" r="20" fill="#ff6b6b"/>
  <circle cx="550" cy="320" r="20" fill="#45b7d1"/>
  <circle cx="650" cy="320" r="20" fill="#ff6b6b"/>
  <circle cx="750" cy="320" r="20" fill="#4ecdc4"/>
  
  <text x="250" y="326" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">B</text>
  <text x="350" y="326" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">C</text>
  <text x="450" y="326" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">A</text>
  <text x="550" y="326" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">C</text>
  <text x="650" y="326" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">A</text>
  <text x="750" y="326" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">B</text>
  
  <text x="500" y="370" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">2 options to choose second ball</text>
  
  <!-- Third choice -->
  <text x="50" y="420" font-family="Arial, sans-serif" font-size="20" fill="#333">Third choice:</text>
  
  <line x1="250" y1="340" x2="250" y2="420" stroke="#45b7d1" stroke-width="2"/>
  <line x1="350" y1="340" x2="350" y2="420" stroke="#4ecdc4" stroke-width="2"/>
  <line x1="450" y1="340" x2="450" y2="420" stroke="#45b7d1" stroke-width="2"/>
  <line x1="550" y1="340" x2="550" y2="420" stroke="#ff6b6b" stroke-width="2"/>
  <line x1="650" y1="340" x2="650" y2="420" stroke="#4ecdc4" stroke-width="2"/>
  <line x1="750" y1="340" x2="750" y2="420" stroke="#ff6b6b" stroke-width="2"/>
  
  <circle cx="250" cy="440" r="15" fill="#45b7d1"/>
  <circle cx="350" cy="440" r="15" fill="#4ecdc4"/>
  <circle cx="450" cy="440" r="15" fill="#45b7d1"/>
  <circle cx="550" cy="440" r="15" fill="#ff6b6b"/>
  <circle cx="650" cy="440" r="15" fill="#4ecdc4"/>
  <circle cx="750" cy="440" r="15" fill="#ff6b6b"/>
  
  <text x="250" y="445" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#fff">C</text>
  <text x="350" y="445" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#fff">B</text>
  <text x="450" y="445" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#fff">C</text>
  <text x="550" y="445" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#fff">A</text>
  <text x="650" y="445" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#fff">B</text>
  <text x="750" y="445" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#fff">A</text>
  
  <text x="500" y="490" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">1 option left for the last ball</text>
  
  <!-- Final permutations -->
  <text x="50" y="540" font-family="Arial, sans-serif" font-size="20" fill="#333">Final permutations:</text>
  
  <text x="250" y="540" font-family="Arial, sans-serif" font-size="16" fill="#333">ABC</text>
  <text x="350" y="540" font-family="Arial, sans-serif" font-size="16" fill="#333">ACB</text>
  <text x="450" y="540" font-family="Arial, sans-serif" font-size="16" fill="#333">BAC</text>
  <text x="550" y="540" font-family="Arial, sans-serif" font-size="16" fill="#333">BCA</text>
  <text x="650" y="540" font-family="Arial, sans-serif" font-size="16" fill="#333">CAB</text>
  <text x="750" y="540" font-family="Arial, sans-serif" font-size="16" fill="#333">CBA</text>
  
  <!-- Formula -->
  <text x="400" y="590" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">3! = 3 × 2 × 1 = 6 total permutations</text>
</svg>
    `

},


"svg_2":{
   "title":"Circular Permutation Illustration",
   "description":"Description for Circular Permutation",

    "svg":`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <!-- Title -->
  <text x="400" y="40" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#333">Circular Permutations of ABC with Connected Balls</text>
  
  <!-- ABC Group -->
  <text x="100" y="90" font-family="Arial, sans-serif" font-size="20" text-anchor="start" fill="#333">ABC group:</text>
  
  <!-- ABC arrangement 1 -->
  <line x1="150" y1="150" x2="210" y2="150" stroke="#333" stroke-width="2"/>
  <line x1="210" y1="150" x2="180" y2="200" stroke="#333" stroke-width="2"/>
  <line x1="180" y1="200" x2="150" y2="150" stroke="#333" stroke-width="2"/>
  <circle cx="150" cy="150" r="25" fill="#ff6b6b"/>
  <circle cx="210" cy="150" r="25" fill="#4ecdc4"/>
  <circle cx="180" cy="200" r="25" fill="#45b7d1"/>
  <text x="150" y="157" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="210" y="157" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="180" y="207" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  
  <!-- ABC arrangement 2 -->
  <line x1="350" y1="150" x2="410" y2="150" stroke="#333" stroke-width="2"/>
  <line x1="410" y1="150" x2="380" y2="200" stroke="#333" stroke-width="2"/>
  <line x1="380" y1="200" x2="350" y2="150" stroke="#333" stroke-width="2"/>
  <circle cx="350" cy="150" r="25" fill="#4ecdc4"/>
  <circle cx="410" cy="150" r="25" fill="#45b7d1"/>
  <circle cx="380" cy="200" r="25" fill="#ff6b6b"/>
  <text x="350" y="157" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="410" y="157" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  <text x="380" y="207" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  
  <!-- ABC arrangement 3 -->
  <line x1="550" y1="150" x2="610" y2="150" stroke="#333" stroke-width="2"/>
  <line x1="610" y1="150" x2="580" y2="200" stroke="#333" stroke-width="2"/>
  <line x1="580" y1="200" x2="550" y2="150" stroke="#333" stroke-width="2"/>
  <circle cx="550" cy="150" r="25" fill="#45b7d1"/>
  <circle cx="610" cy="150" r="25" fill="#ff6b6b"/>
  <circle cx="580" cy="200" r="25" fill="#4ecdc4"/>
  <text x="550" y="157" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  <text x="610" y="157" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="580" y="207" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  
  <!-- ABC Group Explanation -->
  <rect x="200" y="225" width="400" height="30" fill="#fffacd" stroke="#ddd" stroke-width="1" rx="5"/>
  <text x="400" y="245" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">These three arrangements are identical (just rotated clockwise)</text>
  
  <!-- ACB Group -->
  <text x="100" y="290" font-family="Arial, sans-serif" font-size="20" text-anchor="start" fill="#333">ACB group:</text>
  
  <!-- ACB arrangement 1 -->
  <line x1="150" y1="350" x2="210" y2="350" stroke="#333" stroke-width="2"/>
  <line x1="210" y1="350" x2="180" y2="400" stroke="#333" stroke-width="2"/>
  <line x1="180" y1="400" x2="150" y2="350" stroke="#333" stroke-width="2"/>
  <circle cx="150" cy="350" r="25" fill="#ff6b6b"/>
  <circle cx="210" cy="350" r="25" fill="#45b7d1"/>
  <circle cx="180" cy="400" r="25" fill="#4ecdc4"/>
  <text x="150" y="357" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="210" y="357" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  <text x="180" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  
  <!-- ACB arrangement 2 -->
  <line x1="350" y1="350" x2="410" y2="350" stroke="#333" stroke-width="2"/>
  <line x1="410" y1="350" x2="380" y2="400" stroke="#333" stroke-width="2"/>
  <line x1="380" y1="400" x2="350" y2="350" stroke="#333" stroke-width="2"/>
  <circle cx="350" cy="350" r="25" fill="#45b7d1"/>
  <circle cx="410" cy="350" r="25" fill="#4ecdc4"/>
  <circle cx="380" cy="400" r="25" fill="#ff6b6b"/>
  <text x="350" y="357" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  <text x="410" y="357" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="380" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  
  <!-- ACB arrangement 3 -->
  <line x1="550" y1="350" x2="610" y2="350" stroke="#333" stroke-width="2"/>
  <line x1="610" y1="350" x2="580" y2="400" stroke="#333" stroke-width="2"/>
  <line x1="580" y1="400" x2="550" y2="350" stroke="#333" stroke-width="2"/>
  <circle cx="550" cy="350" r="25" fill="#4ecdc4"/>
  <circle cx="610" cy="350" r="25" fill="#ff6b6b"/>
  <circle cx="580" cy="400" r="25" fill="#45b7d1"/>
  <text x="550" y="357" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="610" y="357" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="580" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  
  <!-- ACB Group Explanation -->
  <rect x="200" y="425" width="400" height="30" fill="#fffacd" stroke="#ddd" stroke-width="1" rx="5"/>
  <text x="400" y="445" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">These three arrangements are identical (just rotated clockwise)</text>
  
  <!-- Final Explanation -->
  <rect x="220" y="455" width="360" height="30" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2" rx="5"/>
  <text x="400" y="475" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">In circular permutations, rotations are considered the same arrangement.</text>
</svg>
    `,
    "before":`Before Content`,
    "after":`After Conyent`
},
"svg_3":{

    "title":"The Notion of Permutation",
    "description":"",
    "svg":`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
  <!-- Box with A, B, C balls -->
  <rect x="320" y="20" width="160" height="80" fill="#f0f0f0" stroke="#333" stroke-width="2" rx="15" ry="15"/>
  <circle cx="360" cy="60" r="20" fill="#ff6b6b"/>
  <circle cx="400" cy="60" r="20" fill="#4ecdc4"/>
  <circle cx="440" cy="60" r="20" fill="#45b7d1"/>
  <text x="360" y="67" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#fff">A</text>
  <text x="400" y="67" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#fff">B</text>
  <text x="440" y="67" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#fff">C</text>
  
  <!-- Arrows -->
  <path d="M340 100 Q 220 200 130 300" fill="none" stroke="#333" stroke-width="1"/>
  <path d="M360 100 Q 290 200 230 300" fill="none" stroke="#333" stroke-width="1"/>
  <path d="M380 100 Q 360 200 350 300" fill="none" stroke="#333" stroke-width="1"/>
  <path d="M420 100 Q 440 200 470 300" fill="none" stroke="#333" stroke-width="1"/>
  <path d="M440 100 Q 510 200 590 300" fill="none" stroke="#333" stroke-width="1"/>
  <path d="M460 100 Q 580 200 710 300" fill="none" stroke="#333" stroke-width="1"/>

  <!-- Permutations -->
  <!-- ABC -->
  <circle cx="100" cy="320" r="15" fill="#ff6b6b"/>
  <circle cx="130" cy="320" r="15" fill="#4ecdc4"/>
  <circle cx="160" cy="320" r="15" fill="#45b7d1"/>
  <text x="100" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">A</text>
  <text x="130" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">B</text>
  <text x="160" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">C</text>

  <!-- ACB -->
  <circle cx="220" cy="320" r="15" fill="#ff6b6b"/>
  <circle cx="250" cy="320" r="15" fill="#45b7d1"/>
  <circle cx="280" cy="320" r="15" fill="#4ecdc4"/>
  <text x="220" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">A</text>
  <text x="250" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">C</text>
  <text x="280" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">B</text>

  <!-- BAC -->
  <circle cx="340" cy="320" r="15" fill="#4ecdc4"/>
  <circle cx="370" cy="320" r="15" fill="#ff6b6b"/>
  <circle cx="400" cy="320" r="15" fill="#45b7d1"/>
  <text x="340" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">B</text>
  <text x="370" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">A</text>
  <text x="400" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">C</text>

  <!-- BCA -->
  <circle cx="460" cy="320" r="15" fill="#4ecdc4"/>
  <circle cx="490" cy="320" r="15" fill="#45b7d1"/>
  <circle cx="520" cy="320" r="15" fill="#ff6b6b"/>
  <text x="460" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">B</text>
  <text x="490" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">C</text>
  <text x="520" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">A</text>

  <!-- CAB -->
  <circle cx="580" cy="320" r="15" fill="#45b7d1"/>
  <circle cx="610" cy="320" r="15" fill="#ff6b6b"/>
  <circle cx="640" cy="320" r="15" fill="#4ecdc4"/>
  <text x="580" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">C</text>
  <text x="610" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">A</text>
  <text x="640" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">B</text>

  <!-- CBA -->
  <circle cx="700" cy="320" r="15" fill="#45b7d1"/>
  <circle cx="730" cy="320" r="15" fill="#4ecdc4"/>
  <circle cx="760" cy="320" r="15" fill="#ff6b6b"/>
  <text x="700" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">C</text>
  <text x="730" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">B</text>
  <text x="760" y="325" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">A</text>
</svg>
`
},

"svg_4":{

    "title":"Circular Permutation Notion",
    "description":"",
"svg":`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
  <!-- Box with A, B, C balls -->
  <rect x="320" y="20" width="160" height="80" fill="#f0f0f0" stroke="#333" stroke-width="2" rx="15" ry="15"/>
  <circle cx="360" cy="60" r="20" fill="#ff6b6b"/>
  <circle cx="400" cy="60" r="20" fill="#4ecdc4"/>
  <circle cx="440" cy="60" r="20" fill="#45b7d1"/>
  <text x="360" y="67" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#fff">A</text>
  <text x="400" y="67" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#fff">B</text>
  <text x="440" y="67" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#fff">C</text>
  
  <!-- Arrows -->
  <line x1="360" y1="100" x2="210" y2="260" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
  <line x1="440" y1="100" x2="590" y2="260" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>

  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
    refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
    </marker>
  </defs>

  <!-- Circular Permutations -->
  <!-- ABC group -->
  <circle cx="200" cy="320" r="50" fill="none" stroke="#333" stroke-width="2"/>
  <circle cx="200" cy="270" r="15" fill="#ff6b6b"/>
  <circle cx="243" cy="345" r="15" fill="#4ecdc4"/>
  <circle cx="157" cy="345" r="15" fill="#45b7d1"/>
  <text x="200" y="275" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">A</text>
  <text x="243" y="350" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">B</text>
  <text x="157" y="350" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">C</text>

  <!-- ACB group -->
  <circle cx="600" cy="320" r="50" fill="none" stroke="#333" stroke-width="2"/>
  <circle cx="600" cy="270" r="15" fill="#ff6b6b"/>
  <circle cx="643" cy="345" r="15" fill="#45b7d1"/>
  <circle cx="557" cy="345" r="15" fill="#4ecdc4"/>
  <text x="600" y="275" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">A</text>
  <text x="643" y="350" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">C</text>
  <text x="557" y="350" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">B</text>

  <!-- Labels -->
  <text x="200" y="390" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">ABC = BCA = CAB</text>
  <text x="600" y="390" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">ACB = CBA = BAC</text>
</svg>
`
},
"svg_5":{   

    "title":"Multiplication Counting Principle",

    "svg":`
      <svg width="900" height="500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700">
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
</svg>
    
    `
},
"svg_6":{

    "title":"Permutations vs Combinations",

    "svg":`
    <svg width="1000" height="600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
    <!-- Title -->
    <text x="500" y="30" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="black">Permutations (4P2) vs Combinations (4C2)</text>
    
    <!-- Initial balls -->
    <circle cx="350" cy="80" r="30" fill="#ff7f7f"/>
    <circle cx="450" cy="80" r="30" fill="#4ecdc4"/>
    <circle cx="550" cy="80" r="30" fill="#45b7d1"/>
    <circle cx="650" cy="80" r="30" fill="#ffd700"/>
    <text x="350" y="87" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">A</text>
    <text x="450" y="87" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">B</text>
    <text x="550" y="87" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">C</text>
    <text x="650" y="87" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white">D</text>
    
    <!-- Arrows -->
    <line x1="425" y1="120" x2="250" y2="160" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"/>
    <line x1="575" y1="120" x2="750" y2="160" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"/>
    
    <!-- Arrow marker definition -->
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
        refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
        </marker>
    </defs>
    
    <!-- Permutations (4P2) -->
    <text x="250" y="180" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="black">Permutations (4P2)</text>
    
    <circle cx="100" cy="220" r="25" fill="#ff7f7f"/>
    <circle cx="150" cy="220" r="25" fill="#4ecdc4"/>
    <text x="100" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    <text x="150" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    
    <circle cx="220" cy="220" r="25" fill="#ff7f7f"/>
    <circle cx="270" cy="220" r="25" fill="#45b7d1"/>
    <text x="220" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    <text x="270" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    
    <circle cx="340" cy="220" r="25" fill="#ff7f7f"/>
    <circle cx="390" cy="220" r="25" fill="#ffd700"/>
    <text x="340" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    <text x="390" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    
    <circle cx="100" cy="280" r="25" fill="#4ecdc4"/>
    <circle cx="150" cy="280" r="25" fill="#ff7f7f"/>
    <text x="100" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    <text x="150" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    
    <circle cx="220" cy="280" r="25" fill="#4ecdc4"/>
    <circle cx="270" cy="280" r="25" fill="#45b7d1"/>
    <text x="220" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    <text x="270" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    
    <circle cx="340" cy="280" r="25" fill="#4ecdc4"/>
    <circle cx="390" cy="280" r="25" fill="#ffd700"/>
    <text x="340" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    <text x="390" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    
    <circle cx="100" cy="340" r="25" fill="#45b7d1"/>
    <circle cx="150" cy="340" r="25" fill="#ff7f7f"/>
    <text x="100" y="347" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    <text x="150" y="347" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    
    <circle cx="220" cy="340" r="25" fill="#45b7d1"/>
    <circle cx="270" cy="340" r="25" fill="#4ecdc4"/>
    <text x="220" y="347" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    <text x="270" y="347" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    
    <circle cx="340" cy="340" r="25" fill="#45b7d1"/>
    <circle cx="390" cy="340" r="25" fill="#ffd700"/>
    <text x="340" y="347" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    <text x="390" y="347" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    
    <circle cx="100" cy="400" r="25" fill="#ffd700"/>
    <circle cx="150" cy="400" r="25" fill="#ff7f7f"/>
    <text x="100" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    <text x="150" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    
    <circle cx="220" cy="400" r="25" fill="#ffd700"/>
    <circle cx="270" cy="400" r="25" fill="#4ecdc4"/>
    <text x="220" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    <text x="270" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    
    <circle cx="340" cy="400" r="25" fill="#ffd700"/>
    <circle cx="390" cy="400" r="25" fill="#45b7d1"/>
    <text x="340" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    <text x="390" y="407" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    
    <!-- Combinations (4C2) -->
    <text x="750" y="180" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="black">Combinations (4C2)</text>
    
    <circle cx="650" cy="220" r="25" fill="#ff7f7f"/>
    <circle cx="700" cy="220" r="25" fill="#4ecdc4"/>
    <text x="650" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    <text x="700" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    
    <circle cx="770" cy="220" r="25" fill="#ff7f7f"/>
    <circle cx="820" cy="220" r="25" fill="#45b7d1"/>
    <text x="770" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    <text x="820" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    
    <circle cx="890" cy="220" r="25" fill="#ff7f7f"/>
    <circle cx="940" cy="220" r="25" fill="#ffd700"/>
    <text x="890" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">A</text>
    <text x="940" y="227" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    
    <circle cx="650" cy="280" r="25" fill="#4ecdc4"/>
    <circle cx="700" cy="280" r="25" fill="#45b7d1"/>
    <text x="650" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    <text x="700" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    
    <circle cx="770" cy="280" r="25" fill="#4ecdc4"/>
    <circle cx="820" cy="280" r="25" fill="#ffd700"/>
    <text x="770" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">B</text>
    <text x="820" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    
    <circle cx="890" cy="280" r="25" fill="#45b7d1"/>
    <circle cx="940" cy="280" r="25" fill="#ffd700"/>
    <text x="890" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">C</text>
    <text x="940" y="287" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">D</text>
    
    <!-- Explanations -->
    <text x="250" y="460" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="black">Order matters</text>
    <text x="250" y="485" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="black">AB and BA are different</text>
    
    <text x="750" y="340" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="black">Order doesn't matter</text>
    <text x="750" y="365" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="black">AB and BA are the same</text>
    
    <!-- Total counts -->
    <text x="250" y="520" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="black">Total: 4P2 = 4 × 3 = 12</text>
    <text x="750" y="400" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="black">Total: 4C2 = 4!/(2!(4-2)!) = 6</text>
    
    <!-- Final note -->
    <text x="500" y="570" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="black" font-weight="bold">Permutations consider order, Combinations don't</text>
</svg>
    `
},
 "svg_last":{  

    "title":"Addition Principle",
    "svg":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 900">
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
</svg>
    `
},

 
"svg_7":{
  "svg":`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
  <rect width="900" height="700" fill="#f5f5f5"/>
  
  <!-- Top section -->
  <g transform="translate(300, 30)">
    <circle cx="50" cy="25" r="20" fill="#ff6b6b"/>
    <text x="50" y="25" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
    <circle cx="150" cy="25" r="20" fill="#4ecdc4"/>
    <text x="150" y="25" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
    <circle cx="250" cy="25" r="20" fill="#45b7d1"/>
    <text x="250" y="25" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
  </g>
  
  <g transform="translate(300, 100)">
    <rect width="120" height="60" rx="10" fill="#ffffff" stroke="#333333" stroke-width="2"/>
    <rect x="140" width="120" height="60" rx="10" fill="#ffffff" stroke="#333333" stroke-width="2"/>
    <text x="60" y="80" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
    <text x="200" y="80" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
  </g>
  
  <text x="450" y="200" font-family="Arial" font-size="18" fill="#333333" text-anchor="middle">Distribute 3 distinct items into 2 cells</text>
  
  <!-- Distribution grids -->
  <g transform="translate(50, 220)">
    <!-- Distribution 1: (3,0) -->
    <g transform="translate(0,0)">
      <rect width="380" height="100" rx="10" fill="none" stroke="#333333" stroke-width="2"/>
      <rect x="10" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <rect x="200" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <circle cx="50" cy="50" r="15" fill="#ff6b6b"/>
      <text x="50" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
      <circle cx="95" cy="50" r="15" fill="#4ecdc4"/>
      <text x="95" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
      <circle cx="140" cy="50" r="15" fill="#45b7d1"/>
      <text x="140" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
      <text x="95" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
      <text x="285" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
    </g>

    <!-- Distribution 2: (2,1) -->
    <g transform="translate(420,0)">
      <rect width="380" height="100" rx="10" fill="none" stroke="#333333" stroke-width="2"/>
      <rect x="10" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <rect x="200" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <circle cx="50" cy="50" r="15" fill="#ff6b6b"/>
      <text x="50" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
      <circle cx="95" cy="50" r="15" fill="#4ecdc4"/>
      <text x="95" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
      <circle cx="285" cy="50" r="15" fill="#45b7d1"/>
      <text x="285" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
      <text x="95" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
      <text x="285" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
    </g>

    <!-- Distribution 3: (2,1) different arrangement -->
    <g transform="translate(0,120)">
      <rect width="380" height="100" rx="10" fill="none" stroke="#333333" stroke-width="2"/>
      <rect x="10" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <rect x="200" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <circle cx="50" cy="50" r="15" fill="#ff6b6b"/>
      <text x="50" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
      <circle cx="95" cy="50" r="15" fill="#45b7d1"/>
      <text x="95" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
      <circle cx="285" cy="50" r="15" fill="#4ecdc4"/>
      <text x="285" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
      <text x="95" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
      <text x="285" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
    </g>

    <!-- Distribution 4: (2,1) another arrangement -->
    <g transform="translate(420,120)">
      <rect width="380" height="100" rx="10" fill="none" stroke="#333333" stroke-width="2"/>
      <rect x="10" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <rect x="200" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <circle cx="50" cy="50" r="15" fill="#4ecdc4"/>
      <text x="50" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
      <circle cx="95" cy="50" r="15" fill="#45b7d1"/>
      <text x="95" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
      <circle cx="285" cy="50" r="15" fill="#ff6b6b"/>
      <text x="285" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
      <text x="95" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
      <text x="285" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
    </g>

    <!-- Distribution 5: (1,2) -->
    <g transform="translate(0,240)">
      <rect width="380" height="100" rx="10" fill="none" stroke="#333333" stroke-width="2"/>
      <rect x="10" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <rect x="200" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <circle cx="95" cy="50" r="15" fill="#ff6b6b"/>
      <text x="95" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
      <circle cx="240" cy="50" r="15" fill="#4ecdc4"/>
      <text x="240" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
      <circle cx="330" cy="50" r="15" fill="#45b7d1"/>
      <text x="330" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
      <text x="95" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
      <text x="285" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
    </g>

    <!-- Distribution 6: (1,2) different arrangement -->
    <g transform="translate(420,240)">
      <rect width="380" height="100" rx="10" fill="none" stroke="#333333" stroke-width="2"/>
      <rect x="10" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <rect x="200" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <circle cx="95" cy="50" r="15" fill="#4ecdc4"/>
      <text x="95" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
      <circle cx="240" cy="50" r="15" fill="#ff6b6b"/>
      <text x="240" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
      <circle cx="330" cy="50" r="15" fill="#45b7d1"/>
      <text x="330" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
      <text x="95" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
      <text x="285" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
    </g>

    <!-- Distribution 7: (1,2) another arrangement -->
    <g transform="translate(0,360)">
      <rect width="380" height="100" rx="10" fill="none" stroke="#333333" stroke-width="2"/>
      <rect x="10" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <rect x="200" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <circle cx="95" cy="50" r="15" fill="#45b7d1"/>
      <text x="95" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
      <circle cx="240" cy="50" r="15" fill="#ff6b6b"/>
      <text x="240" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
      <circle cx="330" cy="50" r="15" fill="#4ecdc4"/>
      <text x="330" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
      <text x="95" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
      <text x="285" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
    </g>

    <!-- Distribution 8: (0,3) -->
    <g transform="translate(420,360)">
      <rect width="380" height="100" rx="10" fill="none" stroke="#333333" stroke-width="2"/>
      <rect x="10" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <rect x="200" y="10" width="170" height="80" rx="5" fill="#ffffff" stroke="#333333" stroke-width="1"/>
      <circle cx="240" cy="50" r="15" fill="#ff6b6b"/>
      <text x="240" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">A</text>
      <circle cx="285" cy="50" r="15" fill="#4ecdc4"/>
      <text x="285" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">B</text>
      <circle cx="330" cy="50" r="15" fill="#45b7d1"/>
      <text x="330" y="50" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
      <text x="95" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 1</text>
      <text x="285" y="85" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">Cell 2</text>
    </g>
  </g>
</svg>
  `
}



}

export default diagrams;