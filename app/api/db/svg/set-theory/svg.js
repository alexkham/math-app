

 const diagrams=[

{
    "title":"Set Elements",
    "description":"Mathematical Sets may Contain Absolutely Any Type of Objects or Entities.",
    "svg":`
    <svg width="670" height="180"  xmlns="http://www.w3.org/2000/svg">
    <circle cx="385" cy="85" r="68" stroke="black" stroke-width="1.5" fill="none"/>
    <circle cx="357" cy="57" r="11.25" fill="red" />
    <rect x="396" y="45" width="22.5" height="22.5" fill="green" />
    <polygon points="373,95.5 385,73 397,95.5" fill="blue" />
    <polygon points="385,107 387.18,112.5 392.82,112.5 388.31,116.44 390,121.5 385,118.13 380,121.5 381.69,116.44 377.18,112.5 382.82,112.5" fill="yellow" />
    <text x="357" y="112.5" font-family="Arial" font-size="11.25" fill="purple">"A"</text>
    <text x="407" y="85" font-family="Arial" font-size="13.5" fill="brown">1</text>
    </svg>    
    `
   

},

{

  "title":"Set membership",
  "description":"Set Menbership",

  "svg":`
  <svg width="800" height="300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="150" r="100" stroke="black" stroke-width="0.5" fill="none"/>
  <text x="200" y="40" font-family="Arial" font-size="20" text-anchor="middle" fill="black">A</text>
  
  <!-- Elements inside the circle -->
  <text x="180" y="130" font-family="Arial" font-size="20" fill="red" text-anchor="middle">1</text>
  <text x="220" y="170" font-family="Arial" font-size="20" fill="green" text-anchor="middle">B</text>
  <text x="200" y="150" font-family="Arial" font-size="20" fill="blue" text-anchor="middle">C</text>
  
  <!-- Elements outside the circle -->
  <text x="30" y="150" font-family="Arial" font-size="20" fill="orange" text-anchor="middle">3</text>
  <text x="350" y="180" font-family="Arial" font-size="20" fill="grey" text-anchor="middle">D</text>
  
  <!-- Legend -->

  <text x="450" y="130" font-family="Arial" font-size="20" fill="black">1 ∈ A</text>
  
  <text x="450" y="160" font-family="Arial" font-size="20" fill="black">B ∈ A</text>

  <text x="450" y="190" font-family="Arial" font-size="20" fill="black">C ∈ A</text>

  <text x="450" y="220" font-family="Arial" font-size="20" fill="black">3 ∉ A</text>

  <text x="450" y="250" font-family="Arial" font-size="20" fill="black">D ∉ A</text>
  
</svg>
  `
}
,
{

    "title":"Empty Set",
    "description":"Mathematical Sets may Contain no Elements.",
    "svg":`
    <svg width="460" height="260" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="130" r="65" stroke="black" stroke-width="1.3" fill="none" />
    <text x="200" y="234" fontFamily="Arial" font-size="31" textAnchor="middle" fill="black">{...} = &#8709;</text>
  </svg>
  
    `
},
{


    "title":"Finite Set",
    "description":"Finite Sets  Contain countable number of objects.",
    "svg":`
    <svg width="760" height="260" xmlns="http://www.w3.org/2000/svg">
    <circle cx="330" cy="130" r="65" stroke="black" stroke-width="0.5" fill="rgba(255, 206, 86, 0.5)" />
    <circle cx="304" cy="117" r="5.2" fill="black" />
    <circle cx="330" cy="104" r="5.2" fill="red" />
    <circle cx="343" cy="130" r="5.2" fill="green" />
    <circle cx="304" cy="156" r="5.2" fill="blue" />
    <circle cx="356" cy="156" r="5.2" fill="brown" />
    <text x="200" y="234" fontFamily="Arial" font-size="21" textAnchor="middle" fill="black">Finite Sets  Contain countable number of objects.</text>
    </svg>
  
    `
    
},
{

    "title":"Infinite Set",
    "description":"Infinite Mathematical Sets Have uncountable number of elements",
    "svg":`
    <svg width="390" height="390" xmlns="http://www.w3.org/2000/svg">
    <circle cx="230" cy="130" r="65" stroke="black" stroke-width="0.5" fill="rgba(255, 206, 86, 0.5)" />
    <text x="211" y="124" font-family="Arial" font-size="13" fill="black">1</text>
    <text x="243" y="143" font-family="Arial" font-size="13" fill="black">2</text>
    <text x="217" y="156" font-family="Arial" font-size="16" fill="black">3</text>
    <text x="191" y="111" font-family="Arial" font-size="16" fill="black">4</text>
    <text x="250" y="124" font-family="Arial" font-size="16" fill="black">5</text>
    <text x="269" y="137" font-family="Arial" font-size="16" fill="black">6</text>
    <text x="198" y="150" font-family="Arial" font-size="16" fill="black">7</text>
    <text x="263" y="163" font-family="Arial" font-size="16" fill="black">8</text>
    <text x="224" y="169" font-family="Arial" font-size="16" fill="black">9</text>
    <text x="232" y="117" font-family="Arial" font-size="16" fill="black">10</text>
    <text x="237" y="84" font-family="Arial" font-size="16" fill="black">19</text>
    <text x="222" y="134" font-family="Arial" font-size="13" fill="black">101</text>
    <text x="230" y="234" font-family="Arial" font-size="21" text-anchor="middle" fill="black">{1,2,3,...,∞}</text>
  </svg>
    `
},
{
    "title":"Set Intersection",
    "description":"Intersection of Sets as Aa common area on Venn diagram",    
    "svg":`
    <svg width="890" height="260" viewBox="0 0 390 260">
    <circle cx="330" cy="130" r="91" fill='rgba(255, 206, 86, 0.5)' />
    <circle cx="440" cy="130" r="91" fill='rgba(201, 203, 207, 0.5)'  />
    <text x="278" y="130" fill="black" fontSize="16">A</text>
    <text x="462" y="130" fill="black" fontSize="16">B</text>
    <text x="365" y="130" fill="black" fontSize="16">A ∩ B</text>
  </svg>
    `
},
{
    "title":"Sets Union",
    "description":"Union of sets on Venn diagram is seen as all the area the 2 circles occupy together",
"svg":`
<svg width="890" height="260" viewBox="0 0 390 260">
<circle cx="330" cy="130" r="91" fill='rgba(255, 206, 86)' />
<circle cx="440" cy="130" r="91" fill='rgba(255, 206, 86)' />
<text x="240" y="50" fill="black" fontSize="16">A</text>
<text x="530" y="50" fill="black" fontSize="16">B</text>
<text x="365" y="120" fill="black" fontSize="16">A ∪ B</text>
</svg>

`

},
{

  "title":"Intersection of two sets",
  "description":"On Venn diagram intersection i]represented by common area.",
  "svg":`
  <svg width="640" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle A -->
    <circle cx="160" cy="120" r="80" stroke="black" stroke-width="0.6" fill="none"/>
    
    <!-- Circle B -->
    <circle cx="240" cy="120" r="80" stroke="black" stroke-width=".6" fill="none"/>

    <!-- Intersection area using two clip paths for accurate coloring -->
    <defs>
        <clipPath id="clip-A">
            <circle cx="160" cy="120" r="80"/>
        </clipPath>
        <clipPath id="clip-B">
            <circle cx="240" cy="120" r="80"/>
        </clipPath>
    </defs>
    <circle cx="240" cy="120" r="80" fill="blue" clip-path="url(#clip-A)"/>
    <circle cx="160" cy="120" r="80" fill="blue" clip-path="url(#clip-B)"/>

    <!-- Labels for A and B -->
    <text x="120" y="80" font-family="Arial" font-size="16" fill="black">A</text>
    <text x="280" y="80" font-family="Arial" font-size="16" fill="black">B</text>
    
    <!-- Legend -->
    <rect x="400" y="112" width="16" height="19" fill="blue"/>
    <text x="420" y="124" font-family="Arial" font-size="19" fill="black">A∩B</text>
</svg>
  `
},
{

  "title":"union of two sets",
  "description":"Union of two sets on Venn diagram is all the area occupied by set A and set B",
  "svg":`
  <svg width="640" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle A -->
    <circle cx="160" cy="120" r="80" stroke="black" stroke-width=".6" fill="blue"/>
    
    <!-- Circle B -->
    <circle cx="240" cy="120" r="80" stroke="black" stroke-width=".6" fill="blue"/>

    <!-- Labels for A and B -->
    <text x="120" y="80" font-family="Arial" font-size="19" fill="white">A</text>
    <text x="280" y="80" font-family="Arial" font-size="19" fill="white">B</text>
    
    <!-- Legend -->
    <rect x="400" y="112" width="16" height="16" fill="blue"/>
    <text x="420" y="124" font-family="Arial" font-size="16" fill="black">A∪B</text>
</svg>
  `
},
{

  "title":"Difference of sets",
  "description":"The difference of two sets in Venn diagram is represented by area of A that does not belong to B",
"svg":`
<svg width="640" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle A -->
    <circle cx="160" cy="120" r="80" stroke="black" stroke-width="0.5" fill="blue"/>
    
    <!-- Circle B used for clipping and visible with its own stroke -->
    <defs>
        <clipPath id="clip-B">
            <circle cx="240" cy="120" r="80"/>
        </clipPath>
    </defs>
    <!-- White fill circle for A - B -->
    <circle cx="160" cy="120" r="80" fill="white" clip-path="url(#clip-B)"/>
    <!-- Circle B with a visible stroke -->
    <circle cx="240" cy="120" r="80" stroke="black" stroke-width="0.5" fill="none"/>
    
    <!-- Labels for A and B -->
    <text x="120" y="80" font-family="Arial" font-size="19" fill="white">A</text>
    <text x="280" y="80" font-family="Arial" font-size="19" fill="black">B</text>
    
    <!-- Legend -->
    <rect x="400" y="112" width="16" height="16" fill="blue"/>
    <text x="420" y="124" font-family="Arial" font-size="19" fill="black">A - B</text>
</svg>

`

},
{

  "title":"Symmetric difference",
  "description":"Symmnetric difference in Venn diagrams is represented by area that belong only to one of the sets",
  "svg":`
  <svg width="640" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle A -->
    <circle cx="160" cy="120" r="80" stroke="black" stroke-width="0.5" fill="blue"/>
    
    <!-- Circle B -->
    <circle cx="240" cy="120" r="80" stroke="black" stroke-width="0.5" fill="blue"/>

    <!-- Intersection area using two clip paths for clearing the overlap -->
    <defs>
        <clipPath id="clip-A">
            <circle cx="160" cy="120" r="80"/>
        </clipPath>
        <clipPath id="clip-B">
            <circle cx="240" cy="120" r="80"/>
        </clipPath>
    </defs>
    <!-- Clearing overlap from A -->
    <circle cx="240" cy="120" r="80" fill="white" clip-path="url(#clip-A)"/>
    <!-- Clearing overlap from B -->
    <circle cx="160" cy="120" r="80" fill="white" clip-path="url(#clip-B)"/>
    
    <!-- Labels for A and B -->
    <text x="120" y="80" font-family="Arial" font-size="19" fill="white">A</text>
    <text x="280" y="80" font-family="Arial" font-size="19" fill="white">B</text>
    
    <!-- Legend -->
    <rect x="400" y="112" width="16" height="16" fill="blue"/>
    <text x="420" y="124" font-family="Arial" font-size="19" fill="black">A Δ B</text>
</svg>
    
  `
},
{
  "title":"Disjoint Sets",
  "description":"Disjoint sets on Venn diagram have no common area.",
"svg":`

<svg width="740" height="240" xmlns="http://www.w3.org/2000/svg">
<rect x="100" y="0" width="640" height="240" fill="white" stroke="black" stroke-width="0.5"/>
<text x="720" y="20" font-family="Arial" font-size="19" fill="black" text-anchor="end">U</text>
<circle cx="360" cy="120" r="80" stroke="black" stroke-width="0.5" fill="blue"/>
<text x="360" y="120" font-family="Arial" font-size="19" fill="white" text-anchor="middle" dy="0.3em">A</text>
<circle cx="560" cy="120" r="80" stroke="black" stroke-width="0.5" fill="red"/>
<text x="560" y="120" font-family="Arial" font-size="19" fill="white" text-anchor="middle" dy="0.3em">B</text>
</svg>

`

},

{

  "title":"Subsets and Supersets",
  "description":" Set A is a subset of set B and set B is a superset of A .",

"svg":`
<svg width="740" height="240" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="0" width="640" height="240" fill="white" stroke="black" stroke-width="0.5"/>
    <text x="720" y="20" font-family="Arial" font-size="19" fill="black" text-anchor="end">U</text>
    <circle cx="460" cy="120" r="80" stroke="black" stroke-width="0.5" fill="blue"/>
    <text x="460" y="160" font-family="Arial" font-size="19" fill="white" text-anchor="middle">B</text>
    <circle cx="460" cy="100" r="40" stroke="black" stroke-width="0.5" fill="white"/>
    <text x="460" y="120" font-family="Arial" font-size="19" fill="black" text-anchor="middle" dy="0.3em">A</text>
</svg>
`

},

{

  "title":"Addition vs Multiplication C ounting Principles",
  "svg":`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 650">
  <!-- Title -->
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#333">Multiplication vs Addition Principles</text>

  <!-- Multiplication Principle -->
  <text x="400" y="70" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">Multiplication Principle</text>
  
  <!-- Step 1 -->
  <circle cx="200" cy="120" r="30" fill="#ff6b6b"/>
  <text x="200" y="125" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">2</text>
  <text x="200" y="160" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Shirts</text>
  
  <!-- Step 2 -->
  <circle cx="350" cy="120" r="30" fill="#4ecdc4"/>
  <text x="350" y="125" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">3</text>
  <text x="350" y="160" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Pants</text>
  
  <!-- Step 3 -->
  <circle cx="500" cy="120" r="30" fill="#45b7d1"/>
  <text x="500" y="125" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">2</text>
  <text x="500" y="160" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Shoes</text>
  
  <!-- Multiplication symbol and result -->
  <text x="275" y="125" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">×</text>
  <text x="275" y="150" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">and</text>
  <text x="425" y="125" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">×</text>
  <text x="425" y="150" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">and</text>
  <text x="575" y="125" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">=</text>
  <circle cx="650" cy="120" r="30" fill="#333"/>
  <text x="650" y="125" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">12</text>
  <text x="650" y="160" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Outfits</text>

  <!-- Multiplication Explanation -->
  <text x="400" y="200" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Multiply when choosing one from each category</text>

  <!-- Addition Principle -->
  <text x="400" y="260" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">Addition Principle</text>
  
  <!-- Option 1 -->
  <rect x="200" y="300" width="60" height="40" fill="#ff6b6b"/>
  <text x="230" y="325" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">3</text>
  <text x="230" y="360" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Red cars</text>
  
  <!-- Option 2 -->
  <rect x="370" y="300" width="60" height="40" fill="#4ecdc4"/>
  <text x="400" y="325" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">2</text>
  <text x="400" y="360" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Blue cars</text>
  
  <!-- Option 3 -->
  <rect x="540" y="300" width="60" height="40" fill="#45b7d1"/>
  <text x="570" y="325" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">4</text>
  <text x="570" y="360" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Green cars</text>
  
  <!-- Addition symbol and result -->
  <text x="310" y="325" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">+</text>
  <text x="310" y="350" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">or</text>
  <text x="480" y="325" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">+</text>
  <text x="480" y="350" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">or</text>
  <text x="650" y="325" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">=</text>
  <rect x="680" y="300" width="60" height="40" fill="#333"/>
  <text x="710" y="325" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#fff">9</text>
  <text x="710" y="360" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Total cars</text>

  <!-- Addition Explanation -->
  <text x="400" y="420" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">Add when choosing one from any category</text>
</svg>
  `
},
{

  "title":"Addition Counting Principle",
  "svg":`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
  <!-- Title -->
  <text x="400" y="40" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#333">Addition Principle: Pick ONE Ball</text>

  <!-- Group 1: Red Balls -->
  <circle cx="150" cy="100" r="20" fill="#ff6b6b"/>
  <circle cx="200" cy="100" r="20" fill="#ff6b6b"/>
  <circle cx="250" cy="100" r="20" fill="#ff6b6b"/>
  <text x="150" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">1</text>
  <text x="200" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">2</text>
  <text x="250" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">3</text>
  <text x="200" y="140" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333">3 Red Balls</text>

  <!-- Group 2: Turquoise Balls -->
  <circle cx="400" cy="100" r="20" fill="#4ecdc4"/>
  <circle cx="450" cy="100" r="20" fill="#4ecdc4"/>
  <text x="400" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">1</text>
  <text x="450" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">2</text>
  <text x="425" y="140" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333">2 Turquoise Balls</text>

  <!-- Group 3: Blue Balls -->
  <circle cx="600" cy="100" r="20" fill="#45b7d1"/>
  <circle cx="650" cy="100" r="20" fill="#45b7d1"/>
  <circle cx="700" cy="100" r="20" fill="#45b7d1"/>
  <circle cx="750" cy="100" r="20" fill="#45b7d1"/>
  <text x="600" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">1</text>
  <text x="650" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">2</text>
  <text x="700" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">3</text>
  <text x="750" y="105" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#fff">4</text>
  <text x="675" y="140" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333">4 Blue Balls</text>

  <!-- Addition symbols and "or" labels -->
  <text x="325" y="110" font-family="Arial, sans-serif" font-size="30" text-anchor="middle" fill="#333">+</text>
  <text x="325" y="140" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333">or</text>
  <text x="525" y="110" font-family="Arial, sans-serif" font-size="30" text-anchor="middle" fill="#333">+</text>
  <text x="525" y="140" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333">or</text>

  <!-- Result -->
  <text x="400" y="200" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#333">=</text>
  <circle cx="400" cy="250" r="30" fill="#333"/>
  <text x="400" y="258" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#fff">9</text>
  <text x="400" y="300" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333">Total Possibilities</text>

  <!-- Explanation -->
  <text x="400" y="350" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">Add when choosing one ball from any group</text>
  <text x="400" y="380" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333">3 + 2 + 4 = 9 possibilities</text>
  <text x="400" y="410" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333" font-weight="bold">We are picking ONE single ball from all groups</text>
</svg>
  `
}




]

export default  diagrams;