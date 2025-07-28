
export const scenariosData={
    "Permutations (Full)":{
        svg:`<svg width="600" height="270" viewBox="0 0 500 170" style="margin-left:200px;" xmlns="http://www.w3.org/2000/svg">
  <!-- LEFT SIDE: 2 items permutation -->
  <!-- Original 2 balls at top left -->
  <circle cx="30" cy="8" r="8" fill="#ff6b6b"/>
  <circle cx="50" cy="8" r="8" fill="#4ecdc4"/>
  
  <!-- Label for original set -->
  <text x="40" y="25" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">Original set</text>
  
  <!-- All 2! = 2 arrangements -->
  <!-- AB -->
  <circle cx="30" cy="45" r="8" fill="#ff6b6b"/>
  <circle cx="50" cy="45" r="8" fill="#4ecdc4"/>
  
  <!-- BA -->
  <circle cx="30" cy="65" r="8" fill="#4ecdc4"/>
  <circle cx="50" cy="65" r="8" fill="#ff6b6b"/>
  
  <!-- Label -->
  <text x="50" y="90" text-anchor="middle" font-family="Arial" font-size="18" fill="#333">2! = 2 ways</text>
  <text x="50" y="105" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">All possible arrangements</text>
  
  <!-- Vertical separator -->
  <line x1="140" y1="0" x2="140" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- RIGHT SIDE: 3 items permutation (original) -->
  <!-- Original 3 balls at top right -->
  <circle cx="212" cy="8" r="8" fill="#ff6b6b"/>
  <circle cx="230" cy="8" r="8" fill="#4ecdc4"/>
  <circle cx="248" cy="8" r="8" fill="#45b7d1"/>
  
  <!-- Label for original set -->
  <text x="230" y="25" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">Original set</text>
  
  <!-- First 2 rows: Red first (ABC, ACB) -->
  <circle cx="212" cy="38" r="8" fill="#ff6b6b"/>
  <circle cx="230" cy="38" r="8" fill="#4ecdc4"/>
  <circle cx="248" cy="38" r="8" fill="#45b7d1"/>
  
  <circle cx="212" cy="56" r="8" fill="#ff6b6b"/>
  <circle cx="230" cy="56" r="8" fill="#45b7d1"/>
  <circle cx="248" cy="56" r="8" fill="#4ecdc4"/>
  
  <!-- Next 2 rows: Green first (BAC, BCA) -->
  <circle cx="212" cy="74" r="8" fill="#4ecdc4"/>
  <circle cx="230" cy="74" r="8" fill="#ff6b6b"/>
  <circle cx="248" cy="74" r="8" fill="#45b7d1"/>
  
  <!-- Row 4: CAB (was row 5) -->
  <circle cx="212" cy="92" r="8" fill="#45b7d1"/>
  <circle cx="230" cy="92" r="8" fill="#ff6b6b"/>
  <circle cx="248" cy="92" r="8" fill="#4ecdc4"/>
  
  <!-- Row 5: BCA (was row 4) -->
  <circle cx="212" cy="110" r="8" fill="#4ecdc4"/>
  <circle cx="230" cy="110" r="8" fill="#45b7d1"/>
  <circle cx="248" cy="110" r="8" fill="#ff6b6b"/>
  
  <circle cx="212" cy="128" r="8" fill="#45b7d1"/>
  <circle cx="230" cy="128" r="8" fill="#4ecdc4"/>
  <circle cx="248" cy="128" r="8" fill="#ff6b6b"/>
  
  <!-- Label -->
  <text x="230" y="150" text-anchor="middle" font-family="Arial" font-size="18" fill="#333">3! = 6 ways</text>
  <text x="230" y="165" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">All possible arrangements</text>
  
  <!-- Second vertical separator -->
  <line x1="320" y1="0" x2="320" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- FAR RIGHT: 4 items permutation -->
  <!-- Original 4 balls at top -->
  <circle cx="360" cy="8" r="8" fill="#ff6b6b"/>
  <circle cx="380" cy="8" r="8" fill="#4ecdc4"/>
  <circle cx="400" cy="8" r="8" fill="#45b7d1"/>
  <circle cx="420" cy="8" r="8" fill="#96ceb4"/>
  
  <!-- Label for original set -->
  <text x="390" y="25" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">Original set</text>
  
  <!-- LEFT COLUMN (12 arrangements) -->
  <!-- Red first (6 arrangements) -->
  <circle cx="350" cy="35" r="4" fill="#ff6b6b"/>
  <circle cx="360" cy="35" r="4" fill="#4ecdc4"/>
  <circle cx="370" cy="35" r="4" fill="#45b7d1"/>
  <circle cx="380" cy="35" r="4" fill="#96ceb4"/>
  
  <circle cx="350" cy="45" r="4" fill="#ff6b6b"/>
  <circle cx="360" cy="45" r="4" fill="#4ecdc4"/>
  <circle cx="370" cy="45" r="4" fill="#96ceb4"/>
  <circle cx="380" cy="45" r="4" fill="#45b7d1"/>
  
  <circle cx="350" cy="55" r="4" fill="#ff6b6b"/>
  <circle cx="360" cy="55" r="4" fill="#45b7d1"/>
  <circle cx="370" cy="55" r="4" fill="#4ecdc4"/>
  <circle cx="380" cy="55" r="4" fill="#96ceb4"/>
  
  <circle cx="350" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="360" cy="65" r="4" fill="#45b7d1"/>
  <circle cx="370" cy="65" r="4" fill="#96ceb4"/>
  <circle cx="380" cy="65" r="4" fill="#4ecdc4"/>
  
  <circle cx="350" cy="75" r="4" fill="#ff6b6b"/>
  <circle cx="360" cy="75" r="4" fill="#96ceb4"/>
  <circle cx="370" cy="75" r="4" fill="#4ecdc4"/>
  <circle cx="380" cy="75" r="4" fill="#45b7d1"/>
  
  <circle cx="350" cy="85" r="4" fill="#ff6b6b"/>
  <circle cx="360" cy="85" r="4" fill="#96ceb4"/>
  <circle cx="370" cy="85" r="4" fill="#45b7d1"/>
  <circle cx="380" cy="85" r="4" fill="#4ecdc4"/>
  
  <!-- Red second (6 arrangements) -->
  <circle cx="350" cy="95" r="4" fill="#4ecdc4"/>
  <circle cx="360" cy="95" r="4" fill="#ff6b6b"/>
  <circle cx="370" cy="95" r="4" fill="#45b7d1"/>
  <circle cx="380" cy="95" r="4" fill="#96ceb4"/>
  
  <circle cx="350" cy="105" r="4" fill="#4ecdc4"/>
  <circle cx="360" cy="105" r="4" fill="#ff6b6b"/>
  <circle cx="370" cy="105" r="4" fill="#96ceb4"/>
  <circle cx="380" cy="105" r="4" fill="#45b7d1"/>
  
  <circle cx="350" cy="115" r="4" fill="#45b7d1"/>
  <circle cx="360" cy="115" r="4" fill="#ff6b6b"/>
  <circle cx="370" cy="115" r="4" fill="#4ecdc4"/>
  <circle cx="380" cy="115" r="4" fill="#96ceb4"/>
  
  <circle cx="350" cy="125" r="4" fill="#45b7d1"/>
  <circle cx="360" cy="125" r="4" fill="#ff6b6b"/>
  <circle cx="370" cy="125" r="4" fill="#96ceb4"/>
  <circle cx="380" cy="125" r="4" fill="#4ecdc4"/>
  
  <circle cx="350" cy="135" r="4" fill="#96ceb4"/>
  <circle cx="360" cy="135" r="4" fill="#ff6b6b"/>
  <circle cx="370" cy="135" r="4" fill="#4ecdc4"/>
  <circle cx="380" cy="135" r="4" fill="#45b7d1"/>
  
  <circle cx="350" cy="145" r="4" fill="#96ceb4"/>
  <circle cx="360" cy="145" r="4" fill="#ff6b6b"/>
  <circle cx="370" cy="145" r="4" fill="#45b7d1"/>
  <circle cx="380" cy="145" r="4" fill="#4ecdc4"/>
  
  <!-- RIGHT COLUMN (12 arrangements) -->
  <!-- Red third (6 arrangements) -->
  <circle cx="410" cy="35" r="4" fill="#4ecdc4"/>
  <circle cx="420" cy="35" r="4" fill="#45b7d1"/>
  <circle cx="430" cy="35" r="4" fill="#ff6b6b"/>
  <circle cx="440" cy="35" r="4" fill="#96ceb4"/>
  
  <circle cx="410" cy="45" r="4" fill="#4ecdc4"/>
  <circle cx="420" cy="45" r="4" fill="#96ceb4"/>
  <circle cx="430" cy="45" r="4" fill="#ff6b6b"/>
  <circle cx="440" cy="45" r="4" fill="#45b7d1"/>
  
  <circle cx="410" cy="55" r="4" fill="#45b7d1"/>
  <circle cx="420" cy="55" r="4" fill="#4ecdc4"/>
  <circle cx="430" cy="55" r="4" fill="#ff6b6b"/>
  <circle cx="440" cy="55" r="4" fill="#96ceb4"/>
  
  <circle cx="410" cy="65" r="4" fill="#45b7d1"/>
  <circle cx="420" cy="65" r="4" fill="#96ceb4"/>
  <circle cx="430" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="440" cy="65" r="4" fill="#4ecdc4"/>
  
  <circle cx="410" cy="75" r="4" fill="#96ceb4"/>
  <circle cx="420" cy="75" r="4" fill="#4ecdc4"/>
  <circle cx="430" cy="75" r="4" fill="#ff6b6b"/>
  <circle cx="440" cy="75" r="4" fill="#45b7d1"/>
  
  <circle cx="410" cy="85" r="4" fill="#96ceb4"/>
  <circle cx="420" cy="85" r="4" fill="#45b7d1"/>
  <circle cx="430" cy="85" r="4" fill="#ff6b6b"/>
  <circle cx="440" cy="85" r="4" fill="#4ecdc4"/>
  
  <!-- Red fourth (6 arrangements) -->
  <circle cx="410" cy="95" r="4" fill="#4ecdc4"/>
  <circle cx="420" cy="95" r="4" fill="#45b7d1"/>
  <circle cx="430" cy="95" r="4" fill="#96ceb4"/>
  <circle cx="440" cy="95" r="4" fill="#ff6b6b"/>
  
  <circle cx="410" cy="105" r="4" fill="#4ecdc4"/>
  <circle cx="420" cy="105" r="4" fill="#96ceb4"/>
  <circle cx="430" cy="105" r="4" fill="#45b7d1"/>
  <circle cx="440" cy="105" r="4" fill="#ff6b6b"/>
  
  <circle cx="410" cy="115" r="4" fill="#45b7d1"/>
  <circle cx="420" cy="115" r="4" fill="#4ecdc4"/>
  <circle cx="430" cy="115" r="4" fill="#96ceb4"/>
  <circle cx="440" cy="115" r="4" fill="#ff6b6b"/>
  
  <circle cx="410" cy="125" r="4" fill="#45b7d1"/>
  <circle cx="420" cy="125" r="4" fill="#96ceb4"/>
  <circle cx="430" cy="125" r="4" fill="#4ecdc4"/>
  <circle cx="440" cy="125" r="4" fill="#ff6b6b"/>
  
  <circle cx="410" cy="135" r="4" fill="#96ceb4"/>
  <circle cx="420" cy="135" r="4" fill="#4ecdc4"/>
  <circle cx="430" cy="135" r="4" fill="#45b7d1"/>
  <circle cx="440" cy="135" r="4" fill="#ff6b6b"/>
  
  <circle cx="410" cy="145" r="4" fill="#96ceb4"/>
  <circle cx="420" cy="145" r="4" fill="#45b7d1"/>
  <circle cx="430" cy="145" r="4" fill="#4ecdc4"/>
  <circle cx="440" cy="145" r="4" fill="#ff6b6b"/>
  
  <!-- Label -->
  <text x="390" y="170" text-anchor="middle" font-family="Arial" font-size="18" fill="#333">4! = 24 ways</text>
  <text x="390" y="185" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">All possible arrangements</text>
  
  <!-- Bottom explanation box -->
  <rect x="20" y="205" width="560" height="50" fill="#e8f4fd" stroke="#2563eb" stroke-width="2" rx="8"/>
  <text x="300" y="225" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#1e40af">Permutation: Arrange ALL items, order matters</text>
  <text x="300" y="245" text-anchor="middle" font-family="Arial" font-size="14" fill="#374151">Take n distinct items → arrange them in every possible order → get n! arrangements</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Circular Permutation":{
        svg:`<svg width="600" height="270" viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg">
  <!-- LEFT SIDE: 2 items circular permutation -->
  <!-- Original 2 balls at top left -->
  <circle cx="50" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="70" cy="15" r="6" fill="#4ecdc4"/>
  
  <!-- Label for original set -->
  <text x="60" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">Original set</text>
  
  <!-- Circular arrangement (only 1 unique way) -->
  <circle cx="60" cy="70" r="25" fill="none" stroke="#ddd" stroke-width="2"/>
  <circle cx="60" cy="50" r="4" fill="#ff6b6b"/>
  <circle cx="60" cy="90" r="4" fill="#4ecdc4"/>
  
  <!-- Label -->
  <text x="60" y="115" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">(2-1)! = 1 way</text>
  <text x="60" y="130" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Rotations are same</text>
  
  <!-- Vertical separator -->
  <line x1="140" y1="0" x2="140" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- MIDDLE: 3 items circular permutation -->
  <!-- Original 3 balls at top -->
  <circle cx="190" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="210" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="230" cy="15" r="6" fill="#45b7d1"/>
  
  <!-- Label for original set -->
  <text x="210" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">Original set</text>
  
  <!-- Two unique circular arrangements -->
  <!-- First arrangement: Red-Green-Blue clockwise -->
  <circle cx="180" cy="70" r="20" fill="none" stroke="#ddd" stroke-width="2"/>
  <circle cx="180" cy="52" r="4" fill="#ff6b6b"/>
  <circle cx="197" cy="75" r="4" fill="#4ecdc4"/>
  <circle cx="163" cy="75" r="4" fill="#45b7d1"/>
  
  <!-- Second arrangement: Red-Blue-Green clockwise -->
  <circle cx="240" cy="70" r="20" fill="none" stroke="#ddd" stroke-width="2"/>
  <circle cx="240" cy="52" r="4" fill="#ff6b6b"/>
  <circle cx="257" cy="75" r="4" fill="#45b7d1"/>
  <circle cx="223" cy="75" r="4" fill="#4ecdc4"/>
  
  <!-- Label -->
  <text x="210" y="115" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">(3-1)! = 2 ways</text>
  <text x="210" y="130" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Fix one position</text>
  
  <!-- Second vertical separator -->
  <line x1="280" y1="0" x2="280" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- RIGHT SIDE: 4 items circular permutation -->
  <!-- Original 4 balls at top -->
  <circle cx="320" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="340" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="360" cy="15" r="6" fill="#45b7d1"/>
  <circle cx="380" cy="15" r="6" fill="#96ceb4"/>
  
  <!-- Label for original set -->
  <text x="350" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">Original set</text>
  
  <!-- Six unique circular arrangements in 2 rows -->
  <!-- Row 1: 3 arrangements -->
  <circle cx="320" cy="65" r="15" fill="none" stroke="#ddd" stroke-width="1"/>
  <circle cx="320" cy="52" r="3" fill="#ff6b6b"/>
  <circle cx="333" cy="65" r="3" fill="#4ecdc4"/>
  <circle cx="320" cy="78" r="3" fill="#45b7d1"/>
  <circle cx="307" cy="65" r="3" fill="#96ceb4"/>
  
  <circle cx="360" cy="65" r="15" fill="none" stroke="#ddd" stroke-width="1"/>
  <circle cx="360" cy="52" r="3" fill="#ff6b6b"/>
  <circle cx="373" cy="65" r="3" fill="#45b7d1"/>
  <circle cx="360" cy="78" r="3" fill="#4ecdc4"/>
  <circle cx="347" cy="65" r="3" fill="#96ceb4"/>
  
  <circle cx="400" cy="65" r="15" fill="none" stroke="#ddd" stroke-width="1"/>
  <circle cx="400" cy="52" r="3" fill="#ff6b6b"/>
  <circle cx="413" cy="65" r="3" fill="#96ceb4"/>
  <circle cx="400" cy="78" r="3" fill="#4ecdc4"/>
  <circle cx="387" cy="65" r="3" fill="#45b7d1"/>
  
  <!-- Row 2: 3 arrangements -->
  <circle cx="320" cy="105" r="15" fill="none" stroke="#ddd" stroke-width="1"/>
  <circle cx="320" cy="92" r="3" fill="#ff6b6b"/>
  <circle cx="333" cy="105" r="3" fill="#45b7d1"/>
  <circle cx="320" cy="118" r="3" fill="#96ceb4"/>
  <circle cx="307" cy="105" r="3" fill="#4ecdc4"/>
  
  <circle cx="360" cy="105" r="15" fill="none" stroke="#ddd" stroke-width="1"/>
  <circle cx="360" cy="92" r="3" fill="#ff6b6b"/>
  <circle cx="373" cy="105" r="3" fill="#96ceb4"/>
  <circle cx="360" cy="118" r="3" fill="#45b7d1"/>
  <circle cx="347" cy="105" r="3" fill="#4ecdc4"/>
  
  <circle cx="400" cy="105" r="15" fill="none" stroke="#ddd" stroke-width="1"/>
  <circle cx="400" cy="92" r="3" fill="#ff6b6b"/>
  <circle cx="413" cy="105" r="3" fill="#4ecdc4"/>
  <circle cx="400" cy="118" r="3" fill="#96ceb4"/>
  <circle cx="387" cy="105" r="3" fill="#45b7d1"/>
  
  <!-- Label -->
  <text x="360" y="145" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">(4-1)! = 6 ways</text>
  <text x="360" y="160" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Red fixed at top</text>
  
  <!-- Bottom explanation box -->
  <rect x="20" y="205" width="560" height="50" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="8"/>
  <text x="300" y="225" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#92400e">Circular Permutation: Arrange in circle, rotations are identical</text>
  <text x="300" y="245" text-anchor="middle" font-family="Arial" font-size="14" fill="#374151">Fix one item's position → arrange remaining (n-1) items → get (n-1)! arrangements</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Permutations with Repetition":{
        svg:``,
        explanation:`<svg width="600" height="270" viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg">
  <!-- LEFT SIDE: 3 items with 2 identical -->
  <!-- Original 3 balls at top left (2 red, 1 blue) -->
  <circle cx="40" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="60" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="80" cy="15" r="6" fill="#45b7d1"/>
  
  <!-- Label for original set -->
  <text x="60" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">2 red, 1 blue</text>
  
  <!-- All unique arrangements -->
  <!-- RRB -->
  <circle cx="30" cy="50" r="4" fill="#ff6b6b"/>
  <circle cx="40" cy="50" r="4" fill="#ff6b6b"/>
  <circle cx="50" cy="50" r="4" fill="#45b7d1"/>
  
  <!-- RBR -->
  <circle cx="30" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="40" cy="65" r="4" fill="#45b7d1"/>
  <circle cx="50" cy="65" r="4" fill="#ff6b6b"/>
  
  <!-- BRR -->
  <circle cx="30" cy="80" r="4" fill="#45b7d1"/>
  <circle cx="40" cy="80" r="4" fill="#ff6b6b"/>
  <circle cx="50" cy="80" r="4" fill="#ff6b6b"/>
  
  <!-- Label -->
  <text x="60" y="105" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">3!/(2!×1!) = 3</text>
  <text x="60" y="120" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Identical items reduce count</text>
  
  <!-- Vertical separator -->
  <line x1="140" y1="0" x2="140" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- MIDDLE: 4 items with 2+2 identical -->
  <!-- Original 4 balls at top (2 red, 2 blue) -->
  <circle cx="180" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="200" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="220" cy="15" r="6" fill="#45b7d1"/>
  <circle cx="240" cy="15" r="6" fill="#45b7d1"/>
  
  <!-- Label for original set -->
  <text x="210" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">2 red, 2 blue</text>
  
  <!-- All 6 unique arrangements -->
  <!-- RRBB -->
  <circle cx="170" cy="50" r="4" fill="#ff6b6b"/>
  <circle cx="180" cy="50" r="4" fill="#ff6b6b"/>
  <circle cx="190" cy="50" r="4" fill="#45b7d1"/>
  <circle cx="200" cy="50" r="4" fill="#45b7d1"/>
  
  <!-- RBRB -->
  <circle cx="170" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="180" cy="65" r="4" fill="#45b7d1"/>
  <circle cx="190" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="200" cy="65" r="4" fill="#45b7d1"/>
  
  <!-- RBBR -->
  <circle cx="170" cy="80" r="4" fill="#ff6b6b"/>
  <circle cx="180" cy="80" r="4" fill="#45b7d1"/>
  <circle cx="190" cy="80" r="4" fill="#45b7d1"/>
  <circle cx="200" cy="80" r="4" fill="#ff6b6b"/>
  
  <!-- BRRB -->
  <circle cx="220" cy="50" r="4" fill="#45b7d1"/>
  <circle cx="230" cy="50" r="4" fill="#ff6b6b"/>
  <circle cx="240" cy="50" r="4" fill="#ff6b6b"/>
  <circle cx="250" cy="50" r="4" fill="#45b7d1"/>
  
  <!-- BRBR -->
  <circle cx="220" cy="65" r="4" fill="#45b7d1"/>
  <circle cx="230" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="240" cy="65" r="4" fill="#45b7d1"/>
  <circle cx="250" cy="65" r="4" fill="#ff6b6b"/>
  
  <!-- BBRR -->
  <circle cx="220" cy="80" r="4" fill="#45b7d1"/>
  <circle cx="230" cy="80" r="4" fill="#45b7d1"/>
  <circle cx="240" cy="80" r="4" fill="#ff6b6b"/>
  <circle cx="250" cy="80" r="4" fill="#ff6b6b"/>
  
  <!-- Label -->
  <text x="210" y="105" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">4!/(2!×2!) = 6</text>
  <text x="210" y="120" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Two types of repetition</text>
  
  <!-- Second vertical separator -->
  <line x1="280" y1="0" x2="280" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- RIGHT SIDE: 5 items with 3+1+1 identical -->
  <!-- Original 5 balls at top (3 red, 1 blue, 1 green) -->
  <circle cx="320" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="340" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="360" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="380" cy="15" r="6" fill="#45b7d1"/>
  <circle cx="400" cy="15" r="6" fill="#4ecdc4"/>
  
  <!-- Label for original set -->
  <text x="360" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">3 red, 1 blue, 1 green</text>
  
  <!-- Show first 10 arrangements in 2 columns -->
  <!-- Left column -->
  <circle cx="320" cy="50" r="3" fill="#ff6b6b"/>
  <circle cx="330" cy="50" r="3" fill="#ff6b6b"/>
  <circle cx="340" cy="50" r="3" fill="#ff6b6b"/>
  <circle cx="350" cy="50" r="3" fill="#45b7d1"/>
  <circle cx="360" cy="50" r="3" fill="#4ecdc4"/>
  
  <circle cx="320" cy="60" r="3" fill="#ff6b6b"/>
  <circle cx="330" cy="60" r="3" fill="#ff6b6b"/>
  <circle cx="340" cy="60" r="3" fill="#ff6b6b"/>
  <circle cx="350" cy="60" r="3" fill="#4ecdc4"/>
  <circle cx="360" cy="60" r="3" fill="#45b7d1"/>
  
  <circle cx="320" cy="70" r="3" fill="#ff6b6b"/>
  <circle cx="330" cy="70" r="3" fill="#ff6b6b"/>
  <circle cx="340" cy="70" r="3" fill="#45b7d1"/>
  <circle cx="350" cy="70" r="3" fill="#ff6b6b"/>
  <circle cx="360" cy="70" r="3" fill="#4ecdc4"/>
  
  <circle cx="320" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="330" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="340" cy="80" r="3" fill="#4ecdc4"/>
  <circle cx="350" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="360" cy="80" r="3" fill="#45b7d1"/>
  
  <circle cx="320" cy="90" r="3" fill="#ff6b6b"/>
  <circle cx="330" cy="90" r="3" fill="#45b7d1"/>
  <circle cx="340" cy="90" r="3" fill="#ff6b6b"/>
  <circle cx="350" cy="90" r="3" fill="#ff6b6b"/>
  <circle cx="360" cy="90" r="3" fill="#4ecdc4"/>
  
  <!-- Right column -->
  <circle cx="400" cy="50" r="3" fill="#ff6b6b"/>
  <circle cx="410" cy="50" r="3" fill="#4ecdc4"/>
  <circle cx="420" cy="50" r="3" fill="#ff6b6b"/>
  <circle cx="430" cy="50" r="3" fill="#ff6b6b"/>
  <circle cx="440" cy="50" r="3" fill="#45b7d1"/>
  
  <circle cx="400" cy="60" r="3" fill="#45b7d1"/>
  <circle cx="410" cy="60" r="3" fill="#ff6b6b"/>
  <circle cx="420" cy="60" r="3" fill="#ff6b6b"/>
  <circle cx="430" cy="60" r="3" fill="#ff6b6b"/>
  <circle cx="440" cy="60" r="3" fill="#4ecdc4"/>
  
  <circle cx="400" cy="70" r="3" fill="#45b7d1"/>
  <circle cx="410" cy="70" r="3" fill="#ff6b6b"/>
  <circle cx="420" cy="70" r="3" fill="#ff6b6b"/>
  <circle cx="430" cy="70" r="3" fill="#4ecdc4"/>
  <circle cx="440" cy="70" r="3" fill="#ff6b6b"/>
  
  <circle cx="400" cy="80" r="3" fill="#4ecdc4"/>
  <circle cx="410" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="420" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="430" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="440" cy="80" r="3" fill="#45b7d1"/>
  
  <circle cx="400" cy="90" r="3" fill="#4ecdc4"/>
  <circle cx="410" cy="90" r="3" fill="#ff6b6b"/>
  <circle cx="420" cy="90" r="3" fill="#ff6b6b"/>
  <circle cx="430" cy="90" r="3" fill="#45b7d1"/>
  <circle cx="440" cy="90" r="3" fill="#ff6b6b"/>
  
  <!-- Dots indicating more -->
  <text x="380" y="110" text-anchor="middle" font-family="Arial" font-size="12" fill="#333">⋮</text>
  
  <!-- Label -->
  <text x="380" y="130" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">5!/(3!×1!×1!) = 20</text>
  <text x="380" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Only 10 shown above</text>
  
  <!-- Bottom explanation box -->
  <rect x="20" y="205" width="560" height="50" fill="#fef2f2" stroke="#ef4444" stroke-width="2" rx="8"/>
  <text x="300" y="225" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#991b1b">Permutation with Repetition: Some items are identical</text>
  <text x="300" y="245" text-anchor="middle" font-family="Arial" font-size="14" fill="#374151">Formula: n! / (n₁! × n₂! × ... × nₖ!) where nᵢ = count of each identical type</text>
</svg>`,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Permutation without Repetition (Partial)":{
        svg:`<svg width="600" height="270" viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" style="background: transparent;">
  <!-- LEFT SIDE: Select 2 from 3 items -->
  <!-- Original 3 balls at top left -->
  <circle cx="30" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="50" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="70" cy="15" r="6" fill="#45b7d1"/>
  
  <!-- Label for original set -->
  <text x="50" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">n = 3 items</text>
  <text x="50" y="48" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">choose r = 2</text>
  
  <!-- All P(3,2) = 6 arrangements -->
  <!-- Red first -->
  <circle cx="25" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="37" cy="65" r="4" fill="#4ecdc4"/>
  
  <circle cx="25" cy="78" r="4" fill="#ff6b6b"/>
  <circle cx="37" cy="78" r="4" fill="#45b7d1"/>
  
  <!-- Green first -->
  <circle cx="55" cy="65" r="4" fill="#4ecdc4"/>
  <circle cx="67" cy="65" r="4" fill="#ff6b6b"/>
  
  <circle cx="55" cy="78" r="4" fill="#4ecdc4"/>
  <circle cx="67" cy="78" r="4" fill="#45b7d1"/>
  
  <!-- Blue first -->
  <circle cx="25" cy="91" r="4" fill="#45b7d1"/>
  <circle cx="37" cy="91" r="4" fill="#ff6b6b"/>
  
  <circle cx="55" cy="91" r="4" fill="#45b7d1"/>
  <circle cx="67" cy="91" r="4" fill="#4ecdc4"/>
  
  <!-- Label -->
  <text x="50" y="120" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">P(3,2) = 6</text>
  <text x="50" y="135" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">3!/(3-2)! = 6</text>
  
  <!-- Vertical separator -->
  <line x1="120" y1="0" x2="120" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- MIDDLE: Select 2 from 4 items -->
  <!-- Original 4 balls at top -->
  <circle cx="150" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="170" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="190" cy="15" r="6" fill="#45b7d1"/>
  <circle cx="210" cy="15" r="6" fill="#96ceb4"/>
  
  <!-- Label for original set -->
  <text x="180" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">n = 4 items</text>
  <text x="180" y="48" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">choose r = 2</text>
  
  <!-- MIDDLE: Select 2 from 4 items -->
  <!-- Original 4 balls at top -->
  <circle cx="150" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="170" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="190" cy="15" r="6" fill="#45b7d1"/>
  <circle cx="210" cy="15" r="6" fill="#96ceb4"/>
  
  <!-- Label for original set -->
  <text x="180" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">n = 4 items</text>
  <text x="180" y="48" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">choose r = 2</text>
  
  <!-- All P(4,2) = 12 arrangements in 4 groups of 3 each -->
  <!-- Red first (3 arrangements) -->
  <circle cx="140" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="152" cy="65" r="4" fill="#4ecdc4"/>
  
  <circle cx="140" cy="78" r="4" fill="#ff6b6b"/>
  <circle cx="152" cy="78" r="4" fill="#45b7d1"/>
  
  <circle cx="140" cy="91" r="4" fill="#ff6b6b"/>
  <circle cx="152" cy="91" r="4" fill="#96ceb4"/>
  
  <!-- Green first (3 arrangements) -->
  <circle cx="170" cy="65" r="4" fill="#4ecdc4"/>
  <circle cx="182" cy="65" r="4" fill="#ff6b6b"/>
  
  <circle cx="170" cy="78" r="4" fill="#4ecdc4"/>
  <circle cx="182" cy="78" r="4" fill="#45b7d1"/>
  
  <circle cx="170" cy="91" r="4" fill="#4ecdc4"/>
  <circle cx="182" cy="91" r="4" fill="#96ceb4"/>
  
  <!-- Blue first (3 arrangements) -->
  <circle cx="200" cy="65" r="4" fill="#45b7d1"/>
  <circle cx="212" cy="65" r="4" fill="#ff6b6b"/>
  
  <circle cx="200" cy="78" r="4" fill="#45b7d1"/>
  <circle cx="212" cy="78" r="4" fill="#4ecdc4"/>
  
  <circle cx="200" cy="91" r="4" fill="#45b7d1"/>
  <circle cx="212" cy="91" r="4" fill="#96ceb4"/>
  
  <!-- Yellow first (3 arrangements) -->
  <circle cx="230" cy="65" r="4" fill="#96ceb4"/>
  <circle cx="242" cy="65" r="4" fill="#ff6b6b"/>
  
  <circle cx="230" cy="78" r="4" fill="#96ceb4"/>
  <circle cx="242" cy="78" r="4" fill="#4ecdc4"/>
  
  <circle cx="230" cy="91" r="4" fill="#96ceb4"/>
  <circle cx="242" cy="91" r="4" fill="#45b7d1"/>
  
  <!-- Label -->
  <text x="180" y="115" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">P(4,2) = 12</text>
  <text x="180" y="130" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">4!/(4-2)! = 12</text>
  
  <!-- Second vertical separator -->
  <line x1="250" y1="0" x2="250" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- RIGHT SIDE: Select 2 from 5 items -->
  <!-- Original 5 balls at top -->
  <circle cx="300" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="320" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="340" cy="15" r="6" fill="#45b7d1"/>
  <circle cx="360" cy="15" r="6" fill="#96ceb4"/>
  <circle cx="380" cy="15" r="6" fill="#ffa726"/>
  
  <!-- Label for original set -->
  <text x="340" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">n = 5 items</text>
  <text x="340" y="48" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">choose r = 2</text>
  
  <!-- All P(5,2) = 20 arrangements in 5 groups of 4 each -->
  <!-- Red first (4 arrangements) -->
  <circle cx="280" cy="65" r="4" fill="#ff6b6b"/>
  <circle cx="292" cy="65" r="4" fill="#4ecdc4"/>
  
  <circle cx="280" cy="78" r="4" fill="#ff6b6b"/>
  <circle cx="292" cy="78" r="4" fill="#45b7d1"/>
  
  <circle cx="280" cy="91" r="4" fill="#ff6b6b"/>
  <circle cx="292" cy="91" r="4" fill="#96ceb4"/>
  
  <circle cx="280" cy="104" r="4" fill="#ff6b6b"/>
  <circle cx="292" cy="104" r="4" fill="#ffa726"/>
  
  <!-- Green first (4 arrangements) -->
  <circle cx="310" cy="65" r="4" fill="#4ecdc4"/>
  <circle cx="322" cy="65" r="4" fill="#ff6b6b"/>
  
  <circle cx="310" cy="78" r="4" fill="#4ecdc4"/>
  <circle cx="322" cy="78" r="4" fill="#45b7d1"/>
  
  <circle cx="310" cy="91" r="4" fill="#4ecdc4"/>
  <circle cx="322" cy="91" r="4" fill="#96ceb4"/>
  
  <circle cx="310" cy="104" r="4" fill="#4ecdc4"/>
  <circle cx="322" cy="104" r="4" fill="#ffa726"/>
  
  <!-- Blue first (4 arrangements) -->
  <circle cx="340" cy="65" r="4" fill="#45b7d1"/>
  <circle cx="352" cy="65" r="4" fill="#ff6b6b"/>
  
  <circle cx="340" cy="78" r="4" fill="#45b7d1"/>
  <circle cx="352" cy="78" r="4" fill="#4ecdc4"/>
  
  <circle cx="340" cy="91" r="4" fill="#45b7d1"/>
  <circle cx="352" cy="91" r="4" fill="#96ceb4"/>
  
  <circle cx="340" cy="104" r="4" fill="#45b7d1"/>
  <circle cx="352" cy="104" r="4" fill="#ffa726"/>
  
  <!-- Yellow first (4 arrangements) -->
  <circle cx="370" cy="65" r="4" fill="#96ceb4"/>
  <circle cx="382" cy="65" r="4" fill="#ff6b6b"/>
  
  <circle cx="370" cy="78" r="4" fill="#96ceb4"/>
  <circle cx="382" cy="78" r="4" fill="#4ecdc4"/>
  
  <circle cx="370" cy="91" r="4" fill="#96ceb4"/>
  <circle cx="382" cy="91" r="4" fill="#45b7d1"/>
  
  <circle cx="370" cy="104" r="4" fill="#96ceb4"/>
  <circle cx="382" cy="104" r="4" fill="#ffa726"/>
  
  <!-- Orange first (4 arrangements) -->
  <circle cx="400" cy="65" r="4" fill="#ffa726"/>
  <circle cx="412" cy="65" r="4" fill="#ff6b6b"/>
  
  <circle cx="400" cy="78" r="4" fill="#ffa726"/>
  <circle cx="412" cy="78" r="4" fill="#4ecdc4"/>
  
  <circle cx="400" cy="91" r="4" fill="#ffa726"/>
  <circle cx="412" cy="91" r="4" fill="#45b7d1"/>
  
  <circle cx="400" cy="104" r="4" fill="#ffa726"/>
  <circle cx="412" cy="104" r="4" fill="#96ceb4"/>
  
  <!-- Label -->
  <text x="345" y="125" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">P(5,2) = 20</text>
  <text x="345" y="140" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">5!/(5-2)! = 20</text>
  
  <!-- Bottom explanation box -->
  <rect x="20" y="205" width="560" height="50" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="2" rx="8"/>
  <text x="300" y="225" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#0c4a6e">Permutation without Repetition: Select r from n, order matters</text>
  <text x="300" y="245" text-anchor="middle" font-family="Arial" font-size="14" fill="#374151">Formula: P(n,r) = n!/(n-r)! - Choose r items from n, arrange them in order</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Combinations":{
        svg:`<svg width="600" height="270" viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" style="background: transparent;">
  <!-- LEFT SIDE: Choose 2 from 3 items -->
  <!-- Original 3 balls at top left -->
  <circle cx="30" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="50" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="70" cy="15" r="6" fill="#45b7d1"/>
  
  <!-- Label for original set -->
  <text x="50" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">n = 3 items</text>
  <text x="50" y="48" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">choose r = 2</text>
  
  <!-- All C(3,2) = 3 combinations -->
  <!-- {Red, Green} -->
  <circle cx="30" cy="70" r="4" fill="#ff6b6b"/>
  <circle cx="42" cy="70" r="4" fill="#4ecdc4"/>
  
  <!-- {Red, Blue} -->
  <circle cx="30" cy="85" r="4" fill="#ff6b6b"/>
  <circle cx="42" cy="85" r="4" fill="#45b7d1"/>
  
  <!-- {Green, Blue} -->
  <circle cx="30" cy="100" r="4" fill="#4ecdc4"/>
  <circle cx="42" cy="100" r="4" fill="#45b7d1"/>
  
  <!-- Label -->
  <text x="50" y="125" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">C(3,2) = 3</text>
  <text x="50" y="140" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">3!/(2!×1!) = 3</text>
  
  <!-- Vertical separator -->
  <line x1="120" y1="0" x2="120" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- MIDDLE: Choose 2 from 4 items -->
  <!-- Original 4 balls at top -->
  <circle cx="150" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="170" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="190" cy="15" r="6" fill="#45b7d1"/>
  <circle cx="210" cy="15" r="6" fill="#96ceb4"/>
  
  <!-- Label for original set -->
  <text x="180" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">n = 4 items</text>
  <text x="180" y="48" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">choose r = 2</text>
  
  <!-- All C(4,2) = 6 combinations -->
  <!-- {Red, Green} -->
  <circle cx="140" cy="70" r="4" fill="#ff6b6b"/>
  <circle cx="152" cy="70" r="4" fill="#4ecdc4"/>
  
  <!-- {Red, Blue} -->
  <circle cx="140" cy="85" r="4" fill="#ff6b6b"/>
  <circle cx="152" cy="85" r="4" fill="#45b7d1"/>
  
  <!-- {Red, Yellow} -->
  <circle cx="140" cy="100" r="4" fill="#ff6b6b"/>
  <circle cx="152" cy="100" r="4" fill="#96ceb4"/>
  
  <!-- {Green, Blue} -->
  <circle cx="190" cy="70" r="4" fill="#4ecdc4"/>
  <circle cx="202" cy="70" r="4" fill="#45b7d1"/>
  
  <!-- {Green, Yellow} -->
  <circle cx="190" cy="85" r="4" fill="#4ecdc4"/>
  <circle cx="202" cy="85" r="4" fill="#96ceb4"/>
  
  <!-- {Blue, Yellow} -->
  <circle cx="190" cy="100" r="4" fill="#45b7d1"/>
  <circle cx="202" cy="100" r="4" fill="#96ceb4"/>
  
  <!-- Label -->
  <text x="180" y="125" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">C(4,2) = 6</text>
  <text x="180" y="140" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">4!/(2!×2!) = 6</text>
  
  <!-- Second vertical separator -->
  <line x1="250" y1="0" x2="250" y2="200" stroke="#ccc" stroke-width="2"/>
  
  <!-- RIGHT SIDE: Choose 3 from 5 items -->
  <!-- Original 5 balls at top -->
  <circle cx="280" cy="15" r="6" fill="#ff6b6b"/>
  <circle cx="300" cy="15" r="6" fill="#4ecdc4"/>
  <circle cx="320" cy="15" r="6" fill="#45b7d1"/>
  <circle cx="340" cy="15" r="6" fill="#96ceb4"/>
  <circle cx="360" cy="15" r="6" fill="#ffa726"/>
  
  <!-- Label for original set -->
  <text x="320" y="35" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">n = 5 items</text>
  <text x="320" y="48" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">choose r = 3</text>
  
  <!-- All C(5,3) = 10 combinations -->
  <!-- First row -->
  <circle cx="270" cy="65" r="3" fill="#ff6b6b"/>
  <circle cx="280" cy="65" r="3" fill="#4ecdc4"/>
  <circle cx="290" cy="65" r="3" fill="#45b7d1"/>
  
  <circle cx="305" cy="65" r="3" fill="#ff6b6b"/>
  <circle cx="315" cy="65" r="3" fill="#4ecdc4"/>
  <circle cx="325" cy="65" r="3" fill="#96ceb4"/>
  
  <circle cx="340" cy="65" r="3" fill="#ff6b6b"/>
  <circle cx="350" cy="65" r="3" fill="#4ecdc4"/>
  <circle cx="360" cy="65" r="3" fill="#ffa726"/>
  
  <!-- Second row -->
  <circle cx="270" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="280" cy="80" r="3" fill="#45b7d1"/>
  <circle cx="290" cy="80" r="3" fill="#96ceb4"/>
  
  <circle cx="305" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="315" cy="80" r="3" fill="#45b7d1"/>
  <circle cx="325" cy="80" r="3" fill="#ffa726"/>
  
  <circle cx="340" cy="80" r="3" fill="#ff6b6b"/>
  <circle cx="350" cy="80" r="3" fill="#96ceb4"/>
  <circle cx="360" cy="80" r="3" fill="#ffa726"/>
  
  <!-- Third row -->
  <circle cx="270" cy="95" r="3" fill="#4ecdc4"/>
  <circle cx="280" cy="95" r="3" fill="#45b7d1"/>
  <circle cx="290" cy="95" r="3" fill="#96ceb4"/>
  
  <circle cx="305" cy="95" r="3" fill="#4ecdc4"/>
  <circle cx="315" cy="95" r="3" fill="#45b7d1"/>
  <circle cx="325" cy="95" r="3" fill="#ffa726"/>
  
  <circle cx="340" cy="95" r="3" fill="#4ecdc4"/>
  <circle cx="350" cy="95" r="3" fill="#96ceb4"/>
  <circle cx="360" cy="95" r="3" fill="#ffa726"/>
  
  <!-- Fourth row (last combination) -->
  <circle cx="305" cy="110" r="3" fill="#45b7d1"/>
  <circle cx="315" cy="110" r="3" fill="#96ceb4"/>
  <circle cx="325" cy="110" r="3" fill="#ffa726"/>
  
  <!-- Label -->
  <text x="320" y="135" text-anchor="middle" font-family="Arial" font-size="16" fill="#333">C(5,3) = 10</text>
  <text x="320" y="150" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">5!/(3!×2!) = 10</text>
  
  <!-- Bottom explanation box -->
  <rect x="20" y="205" width="560" height="50" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" rx="8"/>
  <text x="300" y="225" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#166534">Combination: Select r from n, order doesn't matter</text>
  <text x="300" y="245" text-anchor="middle" font-family="Arial" font-size="14" fill="#374151">Formula: C(n,r) = n!/(r!×(n-r)!) - Choose items, {A,B} = {B,A}</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Distributing Different Items into Numbered Cells":{
        svg:`<svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
  <!-- Drawer with r cells -->
  <g transform="translate(50, 200)">
    <!-- Drawer frame -->
    <rect x="0" y="0" width="100" height="295" fill="#bdc3c7" stroke="#34495e" stroke-width="3"/>
    
    <!-- Cell 1 -->
    <rect x="10" y="10" width="80" height="40" fill="#ecf0f1" stroke="#34495e" stroke-width="2"/>
    <text x="50" y="33" text-anchor="middle" font-family="Arial" font-size="12" fill="#333">1</text>
    
    <!-- Cell 2 -->
    <rect x="10" y="60" width="80" height="40" fill="#ecf0f1" stroke="#34495e" stroke-width="2"/>
    <text x="50" y="83" text-anchor="middle" font-family="Arial" font-size="12" fill="#333">2</text>
    
    <!-- Cell 3 -->
    <rect x="10" y="110" width="80" height="40" fill="#ecf0f1" stroke="#34495e" stroke-width="2"/>
    <text x="50" y="133" text-anchor="middle" font-family="Arial" font-size="12" fill="#333">3</text>
    
    <!-- Cell 4 -->
    <rect x="10" y="160" width="80" height="40" fill="#ecf0f1" stroke="#34495e" stroke-width="2"/>
    <text x="50" y="183" text-anchor="middle" font-family="Arial" font-size="12" fill="#333">4</text>
    
    <!-- Dots to indicate more cells -->
    <circle cx="50" cy="215" r="3" fill="#7f8c8d"/>
    <circle cx="50" cy="225" r="3" fill="#7f8c8d"/>
    <circle cx="50" cy="235" r="3" fill="#7f8c8d"/>
    
    <!-- Cell r -->
    <rect x="10" y="245" width="80" height="40" fill="#ecf0f1" stroke="#34495e" stroke-width="2"/>
    <text x="50" y="268" text-anchor="middle" font-family="Arial" font-size="12" fill="#333">r</text>
    
    <!-- Label -->
    <text x="50" y="310" text-anchor="middle" font-family="Arial" font-size="14" fill="#333">r cells</text>
  </g>
  
  <!-- Colored balls in a row -->
  <g transform="translate(250, 50)">
    <!-- Ball 1 - Red -->
    <circle cx="0" cy="0" r="12" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
    
    <!-- Ball 2 - Blue -->
    <circle cx="60" cy="0" r="12" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
    
    <!-- Ball 3 - Green -->
    <circle cx="120" cy="0" r="12" fill="#2ecc71" stroke="#27ae60" stroke-width="2"/>
    
    <!-- Dots to indicate continuation -->
    <circle cx="200" cy="0" r="3" fill="#7f8c8d"/>
    <circle cx="220" cy="0" r="3" fill="#7f8c8d"/>
    <circle cx="240" cy="0" r="3" fill="#7f8c8d"/>
    
    <!-- Ball n-1 - Orange -->
    <circle cx="320" cy="0" r="12" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
    
    <!-- Ball n - Purple -->
    <circle cx="380" cy="0" r="12" fill="#9b59b6" stroke="#8e44ad" stroke-width="2"/>
    
    <!-- Label -->
    <text x="190" y="40" text-anchor="middle" font-family="Arial" font-size="14" fill="#333">n items</text>
    
    <!-- Step label -->
    <text x="0" y="90" text-anchor="start" font-family="Arial" font-size="18" font-weight="bold" fill="#333">Step 1: Placing first (red) ball</text>
    
    <!-- Step 1 explanation box -->
    <rect x="0" y="100" width="400" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
    
    <!-- Red ball in explanation -->
    <circle cx="20" cy="130" r="12" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
    
    <!-- Explanation text -->
    <text x="45" y="125" text-anchor="start" font-family="Arial" font-size="14" fill="#333">The red ball can be placed in any of the r cells.</text>
    <text x="45" y="145" text-anchor="start" font-family="Arial" font-size="14" fill="#333">Therefore, there are r ways to place the red ball.</text>
    <text x="45" y="165" text-anchor="start" font-family="Arial" font-size="14" font-weight="bold" fill="#e74c3c">Total ways for Step 1: r</text>
    
    <!-- AND -->
    <text x="200" y="210" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#333">AND</text>
    
    <!-- Step 2 label -->
    <text x="0" y="240" text-anchor="start" font-family="Arial" font-size="18" font-weight="bold" fill="#333">Step 2: Placing second (blue) ball</text>
    
    <!-- Step 2 explanation box -->
    <rect x="0" y="250" width="400" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
    
    <!-- Blue ball in explanation -->
    <circle cx="20" cy="280" r="12" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
    
    <!-- Explanation text -->
    <text x="45" y="275" text-anchor="start" font-family="Arial" font-size="14" fill="#333">The blue ball can be placed in any of the r cells.</text>
    <text x="45" y="295" text-anchor="start" font-family="Arial" font-size="14" fill="#333">Therefore, there are r ways to place the blue ball.</text>
    <text x="45" y="315" text-anchor="start" font-family="Arial" font-size="14" font-weight="bold" fill="#3498db">Total ways for Step 2: r</text>
    
    <!-- AND -->
    <text x="200" y="360" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#333">AND</text>
    
    <!-- Dots to indicate more steps -->
    <text x="200" y="380" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#7f8c8d">...</text>
    
    <!-- AND -->
    <text x="200" y="415" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#333">AND</text>
    
    <!-- Step n label -->
    <text x="0" y="450" text-anchor="start" font-family="Arial" font-size="18" font-weight="bold" fill="#333">Step n: Placing nth (purple) ball</text>
    
    <!-- Step n explanation box -->
    <rect x="0" y="460" width="400" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
    
    <!-- Purple ball in explanation -->
    <circle cx="20" cy="490" r="12" fill="#9b59b6" stroke="#8e44ad" stroke-width="2"/>
    
    <!-- Explanation text -->
    <text x="45" y="485" text-anchor="start" font-family="Arial" font-size="14" fill="#333">The purple ball can be placed in any of the r cells.</text>
    <text x="45" y="505" text-anchor="start" font-family="Arial" font-size="14" fill="#333">Therefore, there are r ways to place the purple ball.</text>
    <text x="45" y="525" text-anchor="start" font-family="Arial" font-size="14" font-weight="bold" fill="#9b59b6">Total ways for Step n: r</text>
    
    <!-- Overall conclusion box -->
    <rect x="-150" y="560" width="850" height="100" fill="#f8f9fa" stroke="#34495e" stroke-width="3" rx="8"/>
    
    <!-- Conclusion text -->
    <text x="-30" y="590" text-anchor="start" font-family="Arial" font-size="18" fill="#333">Since all steps are independent experiments and each step has r ways,</text>
    <text x="-30" y="615" text-anchor="start" font-family="Arial" font-size="18" fill="#333">the total number of ways to distribute n items into r cells is:</text>
    
    <!-- Formula -->
    <text x="400" y="645" text-anchor="middle" font-family="Arial" font-size="32" font-weight="bold" fill="#e74c3c">r<tspan font-size="24" dy="-12">n</tspan></text>
  </g>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Permutations of ABC: STEP-by-Step":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" style="margin-left:200px;margin-bottom:-150px;">
  <!-- Background -->
  <rect width="800" height="650" fill="none"/>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#333">Permutations of ABC: Step-by-Step</text>
  
  <!-- Initial elements -->
  <circle cx="400" cy="80" r="25" fill="#ff6b6b"/>
  <circle cx="500" cy="80" r="25" fill="#4ecdc4"/>
  <circle cx="600" cy="80" r="25" fill="#45b7d1"/>
  
  <text x="400" y="88" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="500" y="88" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="600" y="88" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  
  <!-- First choice -->
  <text x="50" y="180" font-family="Arial, sans-serif" font-size="20" fill="#333">First choice:</text>
  
  <line x1="400" y1="105" x2="300" y2="175" stroke="#ff6b6b" stroke-width="2"/>
  <line x1="500" y1="105" x2="500" y2="175" stroke="#4ecdc4" stroke-width="2"/>
  <line x1="600" y1="105" x2="700" y2="175" stroke="#45b7d1" stroke-width="2"/>
  
  <circle cx="300" cy="200" r="25" fill="#ff6b6b"/>
  <circle cx="500" cy="200" r="25" fill="#4ecdc4"/>
  <circle cx="700" cy="200" r="25" fill="#45b7d1"/>
  
  <text x="300" y="208" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="500" y="208" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="700" y="208" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  
  <text x="500" y="250" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">3 options to choose first ball</text>
  
  <!-- Second choice -->
  <text x="50" y="300" font-family="Arial, sans-serif" font-size="20" fill="#333">Second choice:</text>
  
  <line x1="300" y1="225" x2="250" y2="295" stroke="#4ecdc4" stroke-width="2"/>
  <line x1="300" y1="225" x2="350" y2="295" stroke="#45b7d1" stroke-width="2"/>
  
  <line x1="500" y1="225" x2="450" y2="295" stroke="#ff6b6b" stroke-width="2"/>
  <line x1="500" y1="225" x2="550" y2="295" stroke="#45b7d1" stroke-width="2"/>
  
  <line x1="700" y1="225" x2="650" y2="295" stroke="#ff6b6b" stroke-width="2"/>
  <line x1="700" y1="225" x2="750" y2="295" stroke="#4ecdc4" stroke-width="2"/>
  
  <circle cx="250" cy="320" r="25" fill="#4ecdc4"/>
  <circle cx="350" cy="320" r="25" fill="#45b7d1"/>
  <circle cx="450" cy="320" r="25" fill="#ff6b6b"/>
  <circle cx="550" cy="320" r="25" fill="#45b7d1"/>
  <circle cx="650" cy="320" r="25" fill="#ff6b6b"/>
  <circle cx="750" cy="320" r="25" fill="#4ecdc4"/>
  
  <text x="250" y="328" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="350" y="328" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  <text x="450" y="328" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="550" y="328" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  <text x="650" y="328" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="750" y="328" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  
  <text x="500" y="370" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">2 options to choose second ball</text>
  
  <!-- Third choice -->
  <text x="50" y="420" font-family="Arial, sans-serif" font-size="20" fill="#333">Third choice:</text>
  
  <line x1="250" y1="345" x2="250" y2="415" stroke="#45b7d1" stroke-width="2"/>
  <line x1="350" y1="345" x2="350" y2="415" stroke="#4ecdc4" stroke-width="2"/>
  <line x1="450" y1="345" x2="450" y2="415" stroke="#45b7d1" stroke-width="2"/>
  <line x1="550" y1="345" x2="550" y2="415" stroke="#ff6b6b" stroke-width="2"/>
  <line x1="650" y1="345" x2="650" y2="415" stroke="#4ecdc4" stroke-width="2"/>
  <line x1="750" y1="345" x2="750" y2="415" stroke="#ff6b6b" stroke-width="2"/>
  
  <circle cx="250" cy="440" r="25" fill="#45b7d1"/>
  <circle cx="350" cy="440" r="25" fill="#4ecdc4"/>
  <circle cx="450" cy="440" r="25" fill="#45b7d1"/>
  <circle cx="550" cy="440" r="25" fill="#ff6b6b"/>
  <circle cx="650" cy="440" r="25" fill="#4ecdc4"/>
  <circle cx="750" cy="440" r="25" fill="#ff6b6b"/>
  
  <text x="250" y="448" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  <text x="350" y="448" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="450" y="448" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">C</text>
  <text x="550" y="448" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  <text x="650" y="448" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">B</text>
  <text x="750" y="448" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#fff">A</text>
  
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