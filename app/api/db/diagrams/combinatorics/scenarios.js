
export const scenariosData={
    "Permutations (Full)":{
        svg:`<svg width="600" height="270" viewBox="0 0 600 270" style="margin-left:200px;" xmlns="http://www.w3.org/2000/svg">
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
        explanation:`**Here** is the \n[explanation](!/combinatorics)`,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Circular Permutation":{
        svg:`<svg width="900" height="670" style="margin-left:100px;" viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg">
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
    "Permutations with Identical Items":{
        explanation:``,
        svg:`<svg style="margin-top:50px; margin-bottom:0px;margin-left:150px;" width="800" height="370"  viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg">
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
  <rect x="20" y="205" width="560" height="50" fill="#e7f3ff" stroke="#3b82f6" stroke-width="2" rx="8"/>
  <text x="300" y="225" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#1e40af">Permutations with Identical Items</text>
  <text x="300" y="245" text-anchor="middle" font-family="Arial" font-size="14" fill="#374151">Formula: n! / (n₁! × n₂! × ... × nₖ!) where nᵢ = count of each identical type</text>
</svg>`,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Permutation without Repetition (Partial)":{
        svg:`<svg width="800" height="470" style="margin-top:50px;margin-left:100px;" viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" style="background: transparent;">
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
      title:`Simple Combinations Examples`,
        svg:`<svg width="600" height="270" viewBox="0 0 600 270" style="margin-left:100px;" xmlns="http://www.w3.org/2000/svg" style="background: transparent;">
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
    "Permutations of 3 with 2 Identical Items":{
        svg:`<svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="800" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="600" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">
    Permutations: All Different vs. Some Identical Items
  </text>
  
  <!-- Left side: All different items -->
  <text x="300" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c5aa0">
    Case 1: All Different Items
  </text>
  <text x="300" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#666">
    3! = 6 permutations
  </text>
  
  <!-- Initial set for left side -->
  <g transform="translate(200, 120)">
    <text x="100" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">Initial Set:</text>
    <circle cx="50" cy="35" r="15" fill="#e53e3e"/>
    <circle cx="100" cy="35" r="15" fill="#38a169"/>
    <circle cx="150" cy="35" r="15" fill="#3182ce"/>
  </g>
  
  <!-- Right side: Some identical items -->
  <text x="900" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#c53030">
    Case 2: Some Identical Items
  </text>
  <text x="900" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#666">
    3!/2! = 3 permutations
  </text>
  
  <!-- Initial set for right side -->
  <g transform="translate(800, 120)">
    <text x="100" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">Initial Set:</text>
    <circle cx="50" cy="35" r="15" fill="#e53e3e"/>
    <circle cx="100" cy="35" r="15" fill="#e53e3e"/>
    <circle cx="150" cy="35" r="15" fill="#3182ce"/>
  </g>
  
  <!-- Vertical separator line -->
  <line x1="600" y1="170" x2="600" y2="750" stroke="#ddd" stroke-width="2"/>
  
  <!-- Left side permutations (all different) -->
  <!-- Permutation 1: RGB -->
  <g transform="translate(80, 200)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#38a169"/>
    <circle cx="130" cy="30" r="20" fill="#3182ce"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RGB</text>
  </g>
  
  <!-- Permutation 2: RBG -->
  <g transform="translate(80, 270)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#3182ce"/>
    <circle cx="130" cy="30" r="20" fill="#38a169"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RBG</text>
  </g>
  
  <!-- Permutation 3: GRB -->
  <g transform="translate(80, 340)">
    <circle cx="30" cy="30" r="20" fill="#38a169"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#3182ce"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">GRB</text>
  </g>
  
  <!-- Permutation 4: GBR -->
  <g transform="translate(80, 410)">
    <circle cx="30" cy="30" r="20" fill="#38a169"/>
    <circle cx="80" cy="30" r="20" fill="#3182ce"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">GBR</text>
  </g>
  
  <!-- Permutation 5: BRG -->
  <g transform="translate(80, 480)">
    <circle cx="30" cy="30" r="20" fill="#3182ce"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#38a169"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">BRG</text>
  </g>
  
  <!-- Permutation 6: BGR -->
  <g transform="translate(80, 550)">
    <circle cx="30" cy="30" r="20" fill="#3182ce"/>
    <circle cx="80" cy="30" r="20" fill="#38a169"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">BGR</text>
  </g>
  
  <!-- Right side permutations (with identical items) -->
  <!-- Valid Permutation 1: RRB -->
  <g transform="translate(680, 200)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#3182ce"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RRB</text>
  </g>
  
  <!-- Canceled Permutation: RBR (same as RRB) -->
  <g transform="translate(680, 270)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#3182ce"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RBR</text>
    <line x1="30" y1="10" x2="130" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <line x1="130" y1="10" x2="30" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="12" fill="#e53e3e" font-weight="bold">- Canceled</text>
  </g>
  
  <!-- Valid Permutation 2: BRR -->
  <g transform="translate(680, 340)">
    <circle cx="30" cy="30" r="20" fill="#3182ce"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">BRR</text>
  </g>
  
  <!-- Valid Permutation 3: RBR -->
  <g transform="translate(680, 410)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#3182ce"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RBR</text>
  </g>
  
  <!-- Canceled Permutation: BRR (duplicate) -->
  <g transform="translate(680, 480)">
    <circle cx="30" cy="30" r="20" fill="#3182ce"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">BRR</text>
    <line x1="30" y1="10" x2="130" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <line x1="130" y1="10" x2="30" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="12" fill="#e53e3e" font-weight="bold">- Canceled</text>
  </g>
  
  <!-- Canceled Permutation: RRB (duplicate) -->
  <g transform="translate(680, 550)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#3182ce"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RRB</text>
    <line x1="30" y1="10" x2="130" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <line x1="130" y1="10" x2="30" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="12" fill="#e53e3e" font-weight="bold">- Canceled</text>
  </g>
  
  <!-- Explanation boxes -->
  <rect x="50" y="620" width="500" height="120" fill="#e6f3ff" stroke="#3182ce" stroke-width="2" rx="8"/>
  <text x="70" y="645" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c5aa0">
    All Different Items:
  </text>
  <text x="70" y="665" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Each ball is unique (Red, Green, Blue)
  </text>
  <text x="70" y="685" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Every arrangement creates a distinct permutation
  </text>
  <text x="70" y="705" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Formula: n! = 3! = 6 permutations
  </text>
  <text x="70" y="725" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • All 6 arrangements are counted
  </text>
  
  <rect x="650" y="620" width="500" height="120" fill="#fed7d7" stroke="#e53e3e" stroke-width="2" rx="8"/>
  <text x="670" y="645" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#c53030">
    Some Identical Items:
  </text>
  <text x="670" y="665" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Two red balls are identical, one blue ball is unique
  </text>
  <text x="670" y="685" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Swapping identical red balls gives same arrangement
  </text>
  <text x="670" y="705" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Formula: n!/k! = 3!/2! = 3 permutations
  </text>
  <text x="670" y="725" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Red X marks duplicate arrangements
  </text>
  
  <!-- Arrow showing the reduction -->
  <path d="M 550 400 Q 600 370 650 400" stroke="#666" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <text x="600" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">
    Identical items reduce
  </text>
  <text x="600" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">
    total permutations
  </text>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
    </marker>
  </defs>
  
  <!-- Legend -->
  <g transform="translate(50, 760)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">Legend:</text>
    <text x="80" y="0" font-family="Arial, sans-serif" font-size="12" fill="#333">Valid permutation (no marking)</text>
    <line x1="250" y1="-8" x2="280" y2="8" stroke="#e53e3e" stroke-width="2"/>
    <line x1="280" y1="-8" x2="250" y2="8" stroke="#e53e3e" stroke-width="2"/>
    <text x="290" y="0" font-family="Arial, sans-serif" font-size="12" fill="#333">Duplicate arrangement - Canceled</text>
  </g>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Permutations of 3 with 3 Identical Items":{
        svg:`<svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="800" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="600" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">
    Permutations: All Different vs. Some Identical Items
  </text>
  
  <!-- Left side: All different items -->
  <text x="300" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c5aa0">
    Case 1: All Different Items
  </text>
  <text x="300" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#666">
    3! = 6 permutations
  </text>
  
  <!-- Initial set for left side -->
  <g transform="translate(200, 120)">
    <text x="100" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">Initial Set:</text>
    <circle cx="50" cy="35" r="15" fill="#e53e3e"/>
    <circle cx="100" cy="35" r="15" fill="#38a169"/>
    <circle cx="150" cy="35" r="15" fill="#3182ce"/>
  </g>
  
  <!-- Right side: Some identical items -->
  <text x="900" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#c53030">
    Case 2: All Identical Items
  </text>
  <text x="900" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#666">
    3!/3! = 1 permutation
  </text>
  
  <!-- Initial set for right side -->
  <g transform="translate(800, 120)">
    <text x="100" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">Initial Set:</text>
    <circle cx="50" cy="35" r="15" fill="#e53e3e"/>
    <circle cx="100" cy="35" r="15" fill="#e53e3e"/>
    <circle cx="150" cy="35" r="15" fill="#e53e3e"/>
  </g>
  
  <!-- Vertical separator line -->
  <line x1="600" y1="170" x2="600" y2="750" stroke="#ddd" stroke-width="2"/>
  
  <!-- Left side permutations (all different) -->
  <!-- Permutation 1: RGB -->
  <g transform="translate(80, 200)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#38a169"/>
    <circle cx="130" cy="30" r="20" fill="#3182ce"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RGB</text>
  </g>
  
  <!-- Permutation 2: RBG -->
  <g transform="translate(80, 270)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#3182ce"/>
    <circle cx="130" cy="30" r="20" fill="#38a169"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RBG</text>
  </g>
  
  <!-- Permutation 3: GRB -->
  <g transform="translate(80, 340)">
    <circle cx="30" cy="30" r="20" fill="#38a169"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#3182ce"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">GRB</text>
  </g>
  
  <!-- Permutation 4: GBR -->
  <g transform="translate(80, 410)">
    <circle cx="30" cy="30" r="20" fill="#38a169"/>
    <circle cx="80" cy="30" r="20" fill="#3182ce"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">GBR</text>
  </g>
  
  <!-- Permutation 5: BRG -->
  <g transform="translate(80, 480)">
    <circle cx="30" cy="30" r="20" fill="#3182ce"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#38a169"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">BRG</text>
  </g>
  
  <!-- Permutation 6: BGR -->
  <g transform="translate(80, 550)">
    <circle cx="30" cy="30" r="20" fill="#3182ce"/>
    <circle cx="80" cy="30" r="20" fill="#38a169"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">BGR</text>
  </g>
  
  <!-- Right side permutations (with all identical items) -->
  <!-- Valid Permutation: RRR -->
  <g transform="translate(680, 200)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RRR</text>
  </g>
  
  <!-- Canceled Permutation: RRR (same as above) -->
  <g transform="translate(680, 270)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RRR</text>
    <line x1="30" y1="10" x2="130" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <line x1="130" y1="10" x2="30" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="12" fill="#e53e3e" font-weight="bold">- Canceled</text>
  </g>
  
  <!-- Canceled Permutation: RRR (same as above) -->
  <g transform="translate(680, 340)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RRR</text>
    <line x1="30" y1="10" x2="130" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <line x1="130" y1="10" x2="30" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="12" fill="#e53e3e" font-weight="bold">- Canceled</text>
  </g>
  
  <!-- Canceled Permutation: RRR (same as above) -->
  <g transform="translate(680, 410)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RRR</text>
    <line x1="30" y1="10" x2="130" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <line x1="130" y1="10" x2="30" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="12" fill="#e53e3e" font-weight="bold">- Canceled</text>
  </g>
  
  <!-- Canceled Permutation: RRR (same as above) -->
  <g transform="translate(680, 480)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RRR</text>
    <line x1="30" y1="10" x2="130" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <line x1="130" y1="10" x2="30" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="12" fill="#e53e3e" font-weight="bold">- Canceled</text>
  </g>
  
  <!-- Canceled Permutation: RRR (same as above) -->
  <g transform="translate(680, 550)">
    <circle cx="30" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="80" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="130" cy="30" r="20" fill="#e53e3e"/>
    <text x="180" y="35" font-family="Arial, sans-serif" font-size="14" fill="#333">RRR</text>
    <line x1="30" y1="10" x2="130" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <line x1="130" y1="10" x2="30" y2="50" stroke="#e53e3e" stroke-width="3"/>
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="12" fill="#e53e3e" font-weight="bold">- Canceled</text>
  </g>
  
  <!-- Explanation boxes -->
  <rect x="50" y="620" width="500" height="120" fill="#e6f3ff" stroke="#3182ce" stroke-width="2" rx="8"/>
  <text x="70" y="645" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c5aa0">
    All Different Items:
  </text>
  <text x="70" y="665" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Each ball is unique (Red, Green, Blue)
  </text>
  <text x="70" y="685" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Every arrangement creates a distinct permutation
  </text>
  <text x="70" y="705" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Formula: n! = 3! = 6 permutations
  </text>
  <text x="70" y="725" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • All 6 arrangements are counted
  </text>
  
  <rect x="650" y="620" width="500" height="120" fill="#fed7d7" stroke="#e53e3e" stroke-width="2" rx="8"/>
  <text x="670" y="645" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#c53030">
    All Identical Items:
  </text>
  <text x="670" y="665" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • All three red balls are identical
  </text>
  <text x="670" y="685" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Any rearrangement gives the exact same result
  </text>
  <text x="670" y="705" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Formula: n!/n! = 3!/3! = 1 permutation
  </text>
  <text x="670" y="725" font-family="Arial, sans-serif" font-size="14" fill="#333">
    • Only 1 distinct arrangement possible
  </text>
  
  <!-- Arrow showing the reduction -->
  <path d="M 550 400 Q 600 370 650 400" stroke="#666" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <text x="600" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">
    Identical items reduce
  </text>
  <text x="600" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">
    total permutations
  </text>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
    </marker>
  </defs>
  
  <!-- Legend -->
  <g transform="translate(50, 760)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">Legend:</text>
    <text x="80" y="0" font-family="Arial, sans-serif" font-size="12" fill="#333">Valid permutation (no marking)</text>
    <line x1="250" y1="-8" x2="280" y2="8" stroke="#e53e3e" stroke-width="2"/>
    <line x1="280" y1="-8" x2="250" y2="8" stroke="#e53e3e" stroke-width="2"/>
    <text x="290" y="0" font-family="Arial, sans-serif" font-size="12" fill="#333">Duplicate arrangement - Canceled</text>
  </g>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Partial Permutations without Repetition":{
        svg:`<svg viewBox="0 0 1000 1100" style="margin-bottom:-250px;margin-top:50px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="900" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">
    Partial Permutations: P(4,2)
  </text>
  
  <!-- Subtitle -->
  <text x="400" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#666">
    Selecting and arranging 2 items from 4 available items
  </text>
  
  <!-- Formula -->
  <text x="400" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c5aa0">
    P(4,2) = 4!/(4-2)! = 4!/2! = 24/2 = 12 permutations
  </text>
  
  <!-- Available items -->
  <text x="400" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
    Available Items:
  </text>
  <g transform="translate(250, 140)">
    <circle cx="50" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="120" cy="30" r="20" fill="#38a169"/>
    <circle cx="190" cy="30" r="20" fill="#3182ce"/>
    <circle cx="260" cy="30" r="20" fill="#d69e2e"/>
  </g>
  
  <!-- Arrow -->
  <path d="M 400 210 L 400 230" stroke="#666" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <text x="400" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">
    Choose 2 and arrange them
  </text>
  
  <!-- All 12 permutations -->
  <text x="400" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
    All 12 Partial Permutations:
  </text>
  
  <!-- First row: Starting with Red -->
  <g transform="translate(100, 270)">
    <text x="200" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e53e3e">Starting with Red:</text>
    
    <!-- Red-Green -->
    <g transform="translate(50, 25)">
      <circle cx="20" cy="20" r="15" fill="#e53e3e"/>
      <circle cx="50" cy="20" r="15" fill="#38a169"/>
    </g>
    
    <!-- Red-Blue -->
    <g transform="translate(150, 25)">
      <circle cx="20" cy="20" r="15" fill="#e53e3e"/>
      <circle cx="50" cy="20" r="15" fill="#3182ce"/>
    </g>
    
    <!-- Red-Yellow -->
    <g transform="translate(250, 25)">
      <circle cx="20" cy="20" r="15" fill="#e53e3e"/>
      <circle cx="50" cy="20" r="15" fill="#d69e2e"/>
    </g>
  </g>
  
  <!-- Second row: Starting with Green -->
  <g transform="translate(100, 340)">
    <text x="200" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#38a169">Starting with Green:</text>
    
    <!-- Green-Red -->
    <g transform="translate(50, 25)">
      <circle cx="20" cy="20" r="15" fill="#38a169"/>
      <circle cx="50" cy="20" r="15" fill="#e53e3e"/>
    </g>
    
    <!-- Green-Blue -->
    <g transform="translate(150, 25)">
      <circle cx="20" cy="20" r="15" fill="#38a169"/>
      <circle cx="50" cy="20" r="15" fill="#3182ce"/>
    </g>
    
    <!-- Green-Yellow -->
    <g transform="translate(250, 25)">
      <circle cx="20" cy="20" r="15" fill="#38a169"/>
      <circle cx="50" cy="20" r="15" fill="#d69e2e"/>
    </g>
  </g>
  
  <!-- Third row: Starting with Blue -->
  <g transform="translate(100, 410)">
    <text x="200" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3182ce">Starting with Blue:</text>
    
    <!-- Blue-Red -->
    <g transform="translate(50, 25)">
      <circle cx="20" cy="20" r="15" fill="#3182ce"/>
      <circle cx="50" cy="20" r="15" fill="#e53e3e"/>
    </g>
    
    <!-- Blue-Green -->
    <g transform="translate(150, 25)">
      <circle cx="20" cy="20" r="15" fill="#3182ce"/>
      <circle cx="50" cy="20" r="15" fill="#38a169"/>
    </g>
    
    <!-- Blue-Yellow -->
    <g transform="translate(250, 25)">
      <circle cx="20" cy="20" r="15" fill="#3182ce"/>
      <circle cx="50" cy="20" r="15" fill="#d69e2e"/>
    </g>
  </g>
  
  <!-- Fourth row: Starting with Yellow -->
  <g transform="translate(100, 480)">
    <text x="200" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#d69e2e">Starting with Yellow:</text>
    
    <!-- Yellow-Red -->
    <g transform="translate(50, 25)">
      <circle cx="20" cy="20" r="15" fill="#d69e2e"/>
      <circle cx="50" cy="20" r="15" fill="#e53e3e"/>
    </g>
    
    <!-- Yellow-Green -->
    <g transform="translate(150, 25)">
      <circle cx="20" cy="20" r="15" fill="#d69e2e"/>
      <circle cx="50" cy="20" r="15" fill="#38a169"/>
    </g>
    
    <!-- Yellow-Blue -->
    <g transform="translate(250, 25)">
      <circle cx="20" cy="20" r="15" fill="#d69e2e"/>
      <circle cx="50" cy="20" r="15" fill="#3182ce"/>
    </g>
  </g>
  
  <!-- Explanation section -->
  <rect x="50" y="570" width="700" height="150" fill="#e6f3ff" stroke="#3182ce" stroke-width="2" rx="8"/>
  <text x="70" y="595" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c5aa0">
    Partial Permutations Explained:
  </text>
  
  <text x="70" y="620" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Step 1:</tspan> Choose the first position - 4 choices (any of the 4 colored balls)
  </text>
  
  <text x="70" y="640" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Step 2:</tspan> Choose the second position - 3 remaining choices
  </text>
  
  <text x="70" y="660" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Total:</tspan> 4 × 3 = 12 different ordered pairs
  </text>
  
  <text x="70" y="690" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Key point:</tspan> Order matters! Red-Green is different from Green-Red
  </text>
  
  <text x="70" y="710" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Formula:</tspan> P(n,r) = n!/(n-r)! where n=4 items available, r=2 items selected
  </text>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
    </marker>
  </defs>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Permutations with Repetition":{
        svg:`<svg viewBox="0 0 1100 1200" style="margin-top:50px;margin-bottom:-250px;margin-left:150px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="1000" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="450" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">
    Permutations with Repetition
  </text>
  
  <!-- Subtitle -->
  <text x="450" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#666">
    Selecting 2 items from 4 available items (repetition allowed)
  </text>
  
  <!-- Formula -->
  <text x="450" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c5aa0">
    n<tspan baseline-shift="super" font-size="14">r</tspan> = 4<tspan baseline-shift="super" font-size="14">2</tspan> = 16 permutations
  </text>
  
  <!-- Available items -->
  <text x="450" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
    Available Items (can be reused):
  </text>
  <g transform="translate(300, 140)">
    <circle cx="50" cy="30" r="20" fill="#e53e3e"/>
    <circle cx="120" cy="30" r="20" fill="#38a169"/>
    <circle cx="190" cy="30" r="20" fill="#3182ce"/>
    <circle cx="260" cy="30" r="20" fill="#d69e2e"/>
  </g>
  
  <!-- Arrow -->
  <path d="M 450 230 L 450 250" stroke="#666" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <text x="450" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">
    Choose 2 (repetition allowed)
  </text>
  
  <!-- All 16 permutations -->
  <text x="450" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
    All 16 Permutations with Repetition:
  </text>
  
  <!-- First row: Starting with Red -->
  <g transform="translate(50, 300)">
    <text x="400" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e53e3e">Starting with Red:</text>
    
    <!-- RR -->
    <g transform="translate(100, 25)">
      <circle cx="20" cy="20" r="15" fill="#e53e3e"/>
      <circle cx="50" cy="20" r="15" fill="#e53e3e"/>
    </g>
    
    <!-- RG -->
    <g transform="translate(200, 25)">
      <circle cx="20" cy="20" r="15" fill="#e53e3e"/>
      <circle cx="50" cy="20" r="15" fill="#38a169"/>
    </g>
    
    <!-- RB -->
    <g transform="translate(300, 25)">
      <circle cx="20" cy="20" r="15" fill="#e53e3e"/>
      <circle cx="50" cy="20" r="15" fill="#3182ce"/>
    </g>
    
    <!-- RY -->
    <g transform="translate(400, 25)">
      <circle cx="20" cy="20" r="15" fill="#e53e3e"/>
      <circle cx="50" cy="20" r="15" fill="#d69e2e"/>
    </g>
  </g>
  
  <!-- Second row: Starting with Green -->
  <g transform="translate(50, 370)">
    <text x="400" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#38a169">Starting with Green:</text>
    
    <!-- GR -->
    <g transform="translate(100, 25)">
      <circle cx="20" cy="20" r="15" fill="#38a169"/>
      <circle cx="50" cy="20" r="15" fill="#e53e3e"/>
    </g>
    
    <!-- GG -->
    <g transform="translate(200, 25)">
      <circle cx="20" cy="20" r="15" fill="#38a169"/>
      <circle cx="50" cy="20" r="15" fill="#38a169"/>
    </g>
    
    <!-- GB -->
    <g transform="translate(300, 25)">
      <circle cx="20" cy="20" r="15" fill="#38a169"/>
      <circle cx="50" cy="20" r="15" fill="#3182ce"/>
    </g>
    
    <!-- GY -->
    <g transform="translate(400, 25)">
      <circle cx="20" cy="20" r="15" fill="#38a169"/>
      <circle cx="50" cy="20" r="15" fill="#d69e2e"/>
    </g>
  </g>
  
  <!-- Third row: Starting with Blue -->
  <g transform="translate(50, 440)">
    <text x="400" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3182ce">Starting with Blue:</text>
    
    <!-- BR -->
    <g transform="translate(100, 25)">
      <circle cx="20" cy="20" r="15" fill="#3182ce"/>
      <circle cx="50" cy="20" r="15" fill="#e53e3e"/>
    </g>
    
    <!-- BG -->
    <g transform="translate(200, 25)">
      <circle cx="20" cy="20" r="15" fill="#3182ce"/>
      <circle cx="50" cy="20" r="15" fill="#38a169"/>
    </g>
    
    <!-- BB -->
    <g transform="translate(300, 25)">
      <circle cx="20" cy="20" r="15" fill="#3182ce"/>
      <circle cx="50" cy="20" r="15" fill="#3182ce"/>
    </g>
    
    <!-- BY -->
    <g transform="translate(400, 25)">
      <circle cx="20" cy="20" r="15" fill="#3182ce"/>
      <circle cx="50" cy="20" r="15" fill="#d69e2e"/>
    </g>
  </g>
  
  <!-- Fourth row: Starting with Yellow -->
  <g transform="translate(50, 510)">
    <text x="400" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#d69e2e">Starting with Yellow:</text>
    
    <!-- YR -->
    <g transform="translate(100, 25)">
      <circle cx="20" cy="20" r="15" fill="#d69e2e"/>
      <circle cx="50" cy="20" r="15" fill="#e53e3e"/>
    </g>
    
    <!-- YG -->
    <g transform="translate(200, 25)">
      <circle cx="20" cy="20" r="15" fill="#d69e2e"/>
      <circle cx="50" cy="20" r="15" fill="#38a169"/>
    </g>
    
    <!-- YB -->
    <g transform="translate(300, 25)">
      <circle cx="20" cy="20" r="15" fill="#d69e2e"/>
      <circle cx="50" cy="20" r="15" fill="#3182ce"/>
    </g>
    
    <!-- YY -->
    <g transform="translate(400, 25)">
      <circle cx="20" cy="20" r="15" fill="#d69e2e"/>
      <circle cx="50" cy="20" r="15" fill="#d69e2e"/>
    </g>
  </g>
  
  <!-- Explanation section -->
  <rect x="50" y="580" width="800" height="160" fill="#e6f3ff" stroke="#3182ce" stroke-width="2" rx="8"/>
  <text x="70" y="605" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c5aa0">
    Permutations with Repetition Explained:
  </text>
  
  <text x="70" y="630" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Step 1:</tspan> Choose the first position - 4 choices (any color, can be reused)
  </text>
  
  <text x="70" y="650" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Step 2:</tspan> Choose the second position - 4 choices (still all colors available)
  </text>
  
  <text x="70" y="670" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Total:</tspan> 4 × 4 = 16 different ordered pairs
  </text>
  
  <text x="70" y="700" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Formula:</tspan> n<tspan baseline-shift="super" font-size="11">r</tspan> where n=4 items available, r=2 positions to fill
  </text>
  
  <text x="70" y="720" font-family="Arial, sans-serif" font-size="14" fill="#333">
    <tspan font-weight="bold">Note:</tspan> The diagonal (RR, GG, BB, YY) shows repetition is allowed
  </text>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
    </marker>
  </defs>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Circular Permutation 2":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" style="margin-left:150px" viewBox="0 0 1100 750">
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
  <rect x="170" y="225" width="460" height="30" fill="#fffacd" stroke="#ddd" stroke-width="1" rx="5"/>
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
  <rect x="170" y="425" width="460" height="30" fill="#fffacd" stroke="#ddd" stroke-width="1" rx="5"/>
  <text x="400" y="445" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">These three arrangements are identical (just rotated clockwise)</text>
  
  <!-- Final Explanation -->
  <rect x="50" y="475" width="700" height="30" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2" rx="5"/>
  <text x="400" y="495" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">In circular permutations, rotations are considered the same arrangement.</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Circular Permutation 3":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" style="margin-left:150px;" viewBox="0 0 1000 650">
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
  <text x="200" y="410" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">ABC = BCA = CAB</text>
  <text x="600" y="410" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">ACB = CBA = BAC</text>
  
  <!-- Explanation Boxes - Now 80px tall (was 60px) with same text positions -->
  <!-- ABC Group Explanation -->
  <rect x="50" y="430" width="300" height="80" fill="#fffacd" stroke="#333" stroke-width="1" rx="5" ry="5"/>
  <text x="200" y="450" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">These three arrangements are identical</text>
  <text x="200" y="470" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">because in circular permutations,</text>
  <text x="200" y="490" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">only relative order matters</text>
  
  <!-- ACB Group Explanation -->
  <rect x="450" y="430" width="300" height="80" fill="#fffacd" stroke="#333" stroke-width="1" rx="5" ry="5"/>
  <text x="600" y="450" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">These three arrangements are identical</text>
  <text x="600" y="470" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">because rotations of the same</text>
  <text x="600" y="490" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">circular order are equivalent</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Permutations vs Combinations":{
        svg:`<svg width="1000" height="600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
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
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
     "Weak Composition":{
        svg:`<svg width="700" height="750" viewBox="0 0 700 750" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="350" y="25" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#333">Distribute 3 identical coins into 3 labeled boxes</text>
  
  <!-- Original coins -->
  <circle cx="280" cy="60" r="12" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
  <text x="280" y="65" text-anchor="middle" font-family="Arial" font-size="8" fill="white">¢</text>
  
  <circle cx="320" cy="60" r="12" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
  <text x="320" y="65" text-anchor="middle" font-family="Arial" font-size="8" fill="white">¢</text>
  
  <circle cx="360" cy="60" r="12" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
  <text x="360" y="65" text-anchor="middle" font-family="Arial" font-size="8" fill="white">¢</text>
  
  <!-- Way 1: (3,0,0) -->
  <rect x="40" y="100" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="130" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 1: (3,0,0)</text>
  
  <rect x="55" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="77" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <circle cx="67" cy="155" r="6" fill="#f39c12"/>
  <circle cx="77" cy="165" r="6" fill="#f39c12"/>
  <circle cx="87" cy="155" r="6" fill="#f39c12"/>
  
  <rect x="110" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="132" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <text x="132" y="160" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <rect x="165" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="187" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <text x="187" y="160" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <!-- Way 2: (2,1,0) -->
  <rect x="260" y="100" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="350" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 2: (2,1,0)</text>
  
  <rect x="275" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="297" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <circle cx="287" cy="160" r="6" fill="#f39c12"/>
  <circle cx="307" cy="160" r="6" fill="#f39c12"/>
  
  <rect x="330" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="352" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <circle cx="352" cy="160" r="6" fill="#f39c12"/>
  
  <rect x="385" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="407" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <text x="407" y="160" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <!-- Way 3: (2,0,1) -->
  <rect x="480" y="100" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="570" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 3: (2,0,1)</text>
  
  <rect x="495" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="517" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <circle cx="507" cy="160" r="6" fill="#f39c12"/>
  <circle cx="527" cy="160" r="6" fill="#f39c12"/>
  
  <rect x="550" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="572" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <text x="572" y="160" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <rect x="605" y="130" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="627" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <circle cx="627" cy="160" r="6" fill="#f39c12"/>
  
  <!-- Way 4: (1,2,0) -->
  <rect x="40" y="220" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="130" y="240" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 4: (1,2,0)</text>
  
  <rect x="55" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="77" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <circle cx="77" cy="280" r="6" fill="#f39c12"/>
  
  <rect x="110" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="132" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <circle cx="122" cy="280" r="6" fill="#f39c12"/>
  <circle cx="142" cy="280" r="6" fill="#f39c12"/>
  
  <rect x="165" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="187" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <text x="187" y="280" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <!-- Way 5: (1,1,1) -->
  <rect x="260" y="220" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="350" y="240" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 5: (1,1,1)</text>
  
  <rect x="275" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="297" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <circle cx="297" cy="280" r="6" fill="#f39c12"/>
  
  <rect x="330" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="352" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <circle cx="352" cy="280" r="6" fill="#f39c12"/>
  
  <rect x="385" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="407" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <circle cx="407" cy="280" r="6" fill="#f39c12"/>
  
  <!-- Way 6: (1,0,2) -->
  <rect x="480" y="220" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="570" y="240" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 6: (1,0,2)</text>
  
  <rect x="495" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="517" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <circle cx="517" cy="280" r="6" fill="#f39c12"/>
  
  <rect x="550" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="572" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <text x="572" y="280" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <rect x="605" y="250" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="627" y="265" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <circle cx="617" cy="280" r="6" fill="#f39c12"/>
  <circle cx="637" cy="280" r="6" fill="#f39c12"/>
  
  <!-- Way 7: (0,3,0) -->
  <rect x="40" y="340" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="130" y="360" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 7: (0,3,0)</text>
  
  <rect x="55" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="77" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <text x="77" y="400" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <rect x="110" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="132" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <circle cx="122" cy="395" r="6" fill="#f39c12"/>
  <circle cx="132" cy="405" r="6" fill="#f39c12"/>
  <circle cx="142" cy="395" r="6" fill="#f39c12"/>
  
  <rect x="165" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="187" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <text x="187" y="400" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <!-- Way 8: (0,2,1) -->
  <rect x="260" y="340" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="350" y="360" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 8: (0,2,1)</text>
  
  <rect x="275" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="297" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <text x="297" y="400" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <rect x="330" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="352" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <circle cx="342" cy="400" r="6" fill="#f39c12"/>
  <circle cx="362" cy="400" r="6" fill="#f39c12"/>
  
  <rect x="385" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="407" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <circle cx="407" cy="400" r="6" fill="#f39c12"/>
  
  <!-- Way 9: (0,1,2) -->
  <rect x="480" y="340" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="570" y="360" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 9: (0,1,2)</text>
  
  <rect x="495" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="517" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <text x="517" y="400" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <rect x="550" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="572" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <circle cx="572" cy="400" r="6" fill="#f39c12"/>
  
  <rect x="605" y="370" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="627" y="385" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <circle cx="617" cy="400" r="6" fill="#f39c12"/>
  <circle cx="637" cy="400" r="6" fill="#f39c12"/>
  
  <!-- Way 10: (0,0,3) -->
  <rect x="150" y="460" width="180" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="240" y="480" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 10: (0,0,3)</text>
  
  <rect x="165" y="490" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="187" y="505" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 1</text>
  <text x="187" y="520" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <rect x="220" y="490" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="242" y="505" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 2</text>
  <text x="242" y="520" text-anchor="middle" font-family="Arial" font-size="12" fill="#999">empty</text>
  
  <rect x="275" y="490" width="45" height="50" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="297" y="505" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Box 3</text>
  <circle cx="287" cy="515" r="6" fill="#f39c12"/>
  <circle cx="297" cy="525" r="6" fill="#f39c12"/>
  <circle cx="307" cy="515" r="6" fill="#f39c12"/>
  
  <!-- Textbox -->
  <rect x="50" y="580" width="600" height="140" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="8"/>
  
  <text x="350" y="610" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#2c3e50">Weak Composition</text>
  
  <text x="350" y="640" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#e74c3c">Formula: C(n+k-1, k-1) = C(3+3-1, 3-1) = C(5,2) = 10 ways</text>
  
  <text x="80" y="665" text-anchor="start" font-family="Arial" font-size="14" fill="#34495e">• Boxes can be empty</text>
  <text x="80" y="685" text-anchor="start" font-family="Arial" font-size="14" fill="#34495e">• Order of boxes matters</text>
  <text x="80" y="705" text-anchor="start" font-family="Arial" font-size="14" fill="#34495e">• Only counts matter, not which specific coin goes where</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Partition into Groups of Known Sizes":{
        svg:`<svg width="700" height="600" viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="350" y="25" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#333">Divide 4 distinct items into Group 1 (size 2) and Group 2 (size 2)</text>
  
  <!-- Original items -->
  <circle cx="250" cy="60" r="15" fill="#e74c3c"/>
  <text x="250" y="65" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="white">A</text>
  
  <circle cx="300" cy="60" r="15" fill="#3498db"/>
  <text x="300" y="65" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="white">B</text>
  
  <circle cx="350" cy="60" r="15" fill="#2ecc71"/>
  <text x="350" y="65" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="white">C</text>
  
  <circle cx="400" cy="60" r="15" fill="#f39c12"/>
  <text x="400" y="65" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="white">D</text>
  
  <!-- Experiment 1: AB | CD -->
  <rect x="40" y="100" width="180" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="130" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Experiment 1</text>
  
  <rect x="60" y="135" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="90" y="147" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 1</text>
  <circle cx="75" cy="158" r="8" fill="#e74c3c"/>
  <text x="75" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">A</text>
  <circle cx="105" cy="158" r="8" fill="#3498db"/>
  <text x="105" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">B</text>
  
  <rect x="140" y="135" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="170" y="147" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 2</text>
  <circle cx="155" cy="158" r="8" fill="#2ecc71"/>
  <text x="155" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">C</text>
  <circle cx="185" cy="158" r="8" fill="#f39c12"/>
  <text x="185" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">D</text>
  
  <!-- Experiment 2: AC | BD -->
  <rect x="260" y="100" width="180" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="350" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Experiment 2</text>
  
  <rect x="280" y="135" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="310" y="147" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 1</text>
  <circle cx="295" cy="158" r="8" fill="#e74c3c"/>
  <text x="295" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">A</text>
  <circle cx="325" cy="158" r="8" fill="#2ecc71"/>
  <text x="325" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">C</text>
  
  <rect x="360" y="135" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="390" y="147" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 2</text>
  <circle cx="375" cy="158" r="8" fill="#3498db"/>
  <text x="375" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">B</text>
  <circle cx="405" cy="158" r="8" fill="#f39c12"/>
  <text x="405" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">D</text>
  
  <!-- Experiment 3: AD | BC -->
  <rect x="480" y="100" width="180" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="570" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Experiment 3</text>
  
  <rect x="500" y="135" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="530" y="147" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 1</text>
  <circle cx="515" cy="158" r="8" fill="#e74c3c"/>
  <text x="515" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">A</text>
  <circle cx="545" cy="158" r="8" fill="#f39c12"/>
  <text x="545" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">D</text>
  
  <rect x="580" y="135" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="610" y="147" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 2</text>
  <circle cx="595" cy="158" r="8" fill="#3498db"/>
  <text x="595" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">B</text>
  <circle cx="625" cy="158" r="8" fill="#2ecc71"/>
  <text x="625" y="162" text-anchor="middle" font-family="Arial" font-size="8" fill="white">C</text>
  
  <!-- Experiment 4: BC | AD -->
  <rect x="40" y="210" width="180" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="130" y="230" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Experiment 4</text>
  
  <rect x="60" y="245" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="90" y="257" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 1</text>
  <circle cx="75" cy="268" r="8" fill="#3498db"/>
  <text x="75" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">B</text>
  <circle cx="105" cy="268" r="8" fill="#2ecc71"/>
  <text x="105" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">C</text>
  
  <rect x="140" y="245" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="170" y="257" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 2</text>
  <circle cx="155" cy="268" r="8" fill="#e74c3c"/>
  <text x="155" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">A</text>
  <circle cx="185" cy="268" r="8" fill="#f39c12"/>
  <text x="185" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">D</text>
  
  <!-- Experiment 5: BD | AC -->
  <rect x="260" y="210" width="180" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="350" y="230" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Experiment 5</text>
  
  <rect x="280" y="245" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="310" y="257" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 1</text>
  <circle cx="295" cy="268" r="8" fill="#3498db"/>
  <text x="295" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">B</text>
  <circle cx="325" cy="268" r="8" fill="#f39c12"/>
  <text x="325" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">D</text>
  
  <rect x="360" y="245" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="390" y="257" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 2</text>
  <circle cx="375" cy="268" r="8" fill="#e74c3c"/>
  <text x="375" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">A</text>
  <circle cx="405" cy="268" r="8" fill="#2ecc71"/>
  <text x="405" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">C</text>
  
  <!-- Experiment 6: CD | AB -->
  <rect x="480" y="210" width="180" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="570" y="230" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Experiment 6</text>
  
  <rect x="500" y="245" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="530" y="257" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 1</text>
  <circle cx="515" cy="268" r="8" fill="#2ecc71"/>
  <text x="515" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">C</text>
  <circle cx="545" cy="268" r="8" fill="#f39c12"/>
  <text x="545" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">D</text>
  
  <rect x="580" y="245" width="60" height="35" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="610" y="257" text-anchor="middle" font-family="Arial" font-size="10" fill="#666">Group 2</text>
  <circle cx="595" cy="268" r="8" fill="#e74c3c"/>
  <text x="595" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">A</text>
  <circle cx="625" cy="268" r="8" fill="#3498db"/>
  <text x="625" y="272" text-anchor="middle" font-family="Arial" font-size="8" fill="white">B</text>
  
  <!-- Textbox -->
  <rect x="50" y="320" width="600" height="120" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="8"/>
  
  <text x="350" y="350" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#2c3e50">Partition into Groups of Known Sizes</text>
  
  <text x="350" y="380" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#e74c3c">Formula: 4!/(2! × 2!) = 24/4 = 6 ways</text>
  
  <text x="80" y="405" text-anchor="start" font-family="Arial" font-size="14" fill="#34495e">• Choose 2 items for Group 1, remaining 2 automatically go to Group 2</text>
  <text x="80" y="425" text-anchor="start" font-family="Arial" font-size="14" fill="#34495e">• Groups are distinguishable: Group 1 ≠ Group 2</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
      "Strong Composition":{
        svg:`<svg width="750" height="500" viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="375" y="25" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#333">Distribute 5 identical coins into 3 labeled boxes (each box must get at least 1)</text>
  
  <!-- Original coins -->
  <circle cx="280" cy="60" r="10" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
  <text x="280" y="64" text-anchor="middle" font-family="Arial" font-size="7" fill="white">¢</text>
  
  <circle cx="310" cy="60" r="10" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
  <text x="310" y="64" text-anchor="middle" font-family="Arial" font-size="7" fill="white">¢</text>
  
  <circle cx="340" cy="60" r="10" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
  <text x="340" y="64" text-anchor="middle" font-family="Arial" font-size="7" fill="white">¢</text>
  
  <circle cx="370" cy="60" r="10" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
  <text x="370" y="64" text-anchor="middle" font-family="Arial" font-size="7" fill="white">¢</text>
  
  <circle cx="400" cy="60" r="10" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
  <text x="400" y="64" text-anchor="middle" font-family="Arial" font-size="7" fill="white">¢</text>
  
  <!-- Way 1: (3,1,1) -->
  <rect x="50" y="100" width="210" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="155" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 1: (3,1,1)</text>
  
  <rect x="70" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="95" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 1</text>
  <circle cx="85" cy="155" r="5" fill="#f39c12"/>
  <circle cx="95" cy="155" r="5" fill="#f39c12"/>
  <circle cx="105" cy="155" r="5" fill="#f39c12"/>
  
  <rect x="130" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="155" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 2</text>
  <circle cx="155" cy="155" r="5" fill="#f39c12"/>
  
  <rect x="190" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="215" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 3</text>
  <circle cx="215" cy="155" r="5" fill="#f39c12"/>
  
  <!-- Way 2: (2,2,1) -->
  <rect x="280" y="100" width="210" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="385" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 2: (2,2,1)</text>
  
  <rect x="300" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="325" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 1</text>
  <circle cx="315" cy="155" r="5" fill="#f39c12"/>
  <circle cx="335" cy="155" r="5" fill="#f39c12"/>
  
  <rect x="360" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="385" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 2</text>
  <circle cx="375" cy="155" r="5" fill="#f39c12"/>
  <circle cx="395" cy="155" r="5" fill="#f39c12"/>
  
  <rect x="420" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="445" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 3</text>
  <circle cx="445" cy="155" r="5" fill="#f39c12"/>
  
  <!-- Way 3: (1,3,1) -->
  <rect x="510" y="100" width="210" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="615" y="120" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 3: (1,3,1)</text>
  
  <rect x="530" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="555" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 1</text>
  <circle cx="555" cy="155" r="5" fill="#f39c12"/>
  
  <rect x="590" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="615" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 2</text>
  <circle cx="605" cy="155" r="5" fill="#f39c12"/>
  <circle cx="615" cy="155" r="5" fill="#f39c12"/>
  <circle cx="625" cy="155" r="5" fill="#f39c12"/>
  
  <rect x="650" y="130" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="675" y="144" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 3</text>
  <circle cx="675" cy="155" r="5" fill="#f39c12"/>
  
  <!-- Way 4: (1,2,2) -->
  <rect x="50" y="200" width="210" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="155" y="220" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 4: (1,2,2)</text>
  
  <rect x="70" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="95" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 1</text>
  <circle cx="95" cy="255" r="5" fill="#f39c12"/>
  
  <rect x="130" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="155" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 2</text>
  <circle cx="145" cy="255" r="5" fill="#f39c12"/>
  <circle cx="165" cy="255" r="5" fill="#f39c12"/>
  
  <rect x="190" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="215" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 3</text>
  <circle cx="205" cy="255" r="5" fill="#f39c12"/>
  <circle cx="225" cy="255" r="5" fill="#f39c12"/>
  
  <!-- Way 5: (1,1,3) -->
  <rect x="280" y="200" width="210" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="385" y="220" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 5: (1,1,3)</text>
  
  <rect x="300" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="325" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 1</text>
  <circle cx="325" cy="255" r="5" fill="#f39c12"/>
  
  <rect x="360" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="385" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 2</text>
  <circle cx="385" cy="255" r="5" fill="#f39c12"/>
  
  <rect x="420" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="445" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 3</text>
  <circle cx="435" cy="255" r="5" fill="#f39c12"/>
  <circle cx="445" cy="255" r="5" fill="#f39c12"/>
  <circle cx="455" cy="255" r="5" fill="#f39c12"/>
  
  <!-- Way 6: (2,1,2) -->
  <rect x="510" y="200" width="210" height="80" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="5"/>
  <text x="615" y="220" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#666">Way 6: (2,1,2)</text>
  
  <rect x="530" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="555" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 1</text>
  <circle cx="545" cy="255" r="5" fill="#f39c12"/>
  <circle cx="565" cy="255" r="5" fill="#f39c12"/>
  
  <rect x="590" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="615" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 2</text>
  <circle cx="615" cy="255" r="5" fill="#f39c12"/>
  
  <rect x="650" y="230" width="50" height="40" fill="#ecf0f1" stroke="#666" stroke-width="1"/>
  <text x="675" y="244" text-anchor="middle" font-family="Arial" font-size="9" fill="#666">Box 3</text>
  <circle cx="665" cy="255" r="5" fill="#f39c12"/>
  <circle cx="685" cy="255" r="5" fill="#f39c12"/>
  
  <!-- Textbox -->
  <rect x="75" y="300" width="600" height="110" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="8"/>
  
  <text x="375" y="325" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#2c3e50">Strong Composition</text>
  
  <text x="375" y="350" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#e74c3c">Formula: C(n-1, k-1) = C(5-1, 3-1) = C(4,2) = 6 ways</text>
  
  <text x="105" y="375" text-anchor="start" font-family="Arial" font-size="14" fill="#34495e">• No boxes can be empty</text>
  <text x="105" y="395" text-anchor="start" font-family="Arial" font-size="14" fill="#34495e">• Each box must get at least 1 unit</text>
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