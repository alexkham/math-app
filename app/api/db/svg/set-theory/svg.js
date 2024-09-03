

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
}




]

export default  diagrams;