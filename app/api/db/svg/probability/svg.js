const diagrams=[

{

    "title":"Standard Deviation for Population and Sample",
    "svg":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1800">
  <!-- Background -->
  <rect width="2000" height="1800" fill="#f0f0f0"/>
  
  <!-- Data points and deviation lines -->
  <g id="data-points">
    <circle cx="200" cy="500" r="12" fill="#2080f0"/>
    <line x1="200" y1="500" x2="200" y2="460" stroke="#40a040" stroke-width="4"/>
    <circle cx="400" cy="420" r="12" fill="#2080f0"/>
    <line x1="400" y1="420" x2="400" y2="460" stroke="#40a040" stroke-width="4"/>
    <circle cx="600" cy="540" r="12" fill="#2080f0"/>
    <line x1="600" y1="540" x2="600" y2="460" stroke="#40a040" stroke-width="4"/>
    <circle cx="800" cy="380" r="12" fill="#2080f0"/>
    <line x1="800" y1="380" x2="800" y2="460" stroke="#40a040" stroke-width="4"/>
    <circle cx="1000" cy="480" r="12" fill="#2080f0"/>
    <line x1="1000" y1="480" x2="1000" y2="460" stroke="#40a040" stroke-width="4"/>
    <circle cx="1200" cy="560" r="12" fill="#2080f0"/>
    <line x1="1200" y1="560" x2="1200" y2="460" stroke="#40a040" stroke-width="4"/>
    <circle cx="1400" cy="440" r="12" fill="#2080f0"/>
    <line x1="1400" y1="440" x2="1400" y2="460" stroke="#40a040" stroke-width="4"/>
    <circle cx="1600" cy="520" r="12" fill="#2080f0"/>
    <line x1="1600" y1="520" x2="1600" y2="460" stroke="#40a040" stroke-width="4"/>
  </g>

  <!-- Mean line -->
  <line x1="100" y1="460" x2="1700" y2="460" stroke="#ff4040" stroke-width="4"/>
  <text x="1720" y="468" font-size="36" fill="#ff4040">Mean</text>

  <!-- Calculation steps -->
  <text x="100" y="680" font-size="40">1. Calculate deviations from mean (green lines): (x - μ)</text>
  <text x="140" y="740" font-size="40">Example: If x = 540 and μ (mean) = 460, then (x - μ) = 540 - 460 = 80</text>
  <text x="100" y="820" font-size="40">2. Square each deviation: (x - μ)²</text>
  <text x="100" y="900" font-size="40">3. Sum squared deviations: Σ(x - μ)²</text>
  <text x="100" y="980" font-size="40">4. Divide by n (population) or (n-1) (sample)</text>
  <text x="100" y="1060" font-size="40">5. Take square root for Standard Deviation</text>

  <!-- Population Formulas -->
  <text x="100" y="1180" font-size="48" font-weight="bold">Population:</text>
  <text x="140" y="1260" font-size="44" font-style="italic">Variance: σ² = Σ(x - μ)² / N</text>
  <text x="140" y="1340" font-size="44" font-style="italic">Standard Deviation: σ = √[Σ(x - μ)² / N]</text>

  <!-- Sample Formulas -->
  <text x="100" y="1460" font-size="48" font-weight="bold">Sample:</text>
  <text x="140" y="1540" font-size="44" font-style="italic">Variance: s² = Σ(x - x̄)² / (n - 1)</text>
  <text x="140" y="1620" font-size="44" font-style="italic">Standard Deviation: s = √[Σ(x - x̄)² / (n - 1)]</text>

  <!-- Labels -->
  <text x="1000" y="80" text-anchor="middle" font-size="56" font-weight="bold">Population and Sample Variance and Standard Deviation</text>
  <text x="1000" y="160" text-anchor="middle" font-size="40">N = population size, n = sample size, μ = population mean, x̄ = sample mean</text>
</svg>
    `
},
{

    "title":"Standard Deviation and Variance ",
    "svg":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 700">
  <!-- Background -->
  <rect width="800" height="700" fill="#f0f0f0"/>
  
  <!-- Data points and deviation lines -->
  <g id="data-points">
    <circle cx="100" cy="250" r="5" fill="#2080f0"/>
    <line x1="100" y1="250" x2="100" y2="230" stroke="#40a040" stroke-width="2"/>
    <circle cx="170" cy="210" r="5" fill="#2080f0"/>
    <line x1="170" y1="210" x2="170" y2="230" stroke="#40a040" stroke-width="2"/>
    <circle cx="240" cy="270" r="5" fill="#2080f0"/>
    <line x1="240" y1="270" x2="240" y2="230" stroke="#40a040" stroke-width="2"/>
    <circle cx="310" cy="190" r="5" fill="#2080f0"/>
    <line x1="310" y1="190" x2="310" y2="230" stroke="#40a040" stroke-width="2"/>
    <circle cx="380" cy="240" r="5" fill="#2080f0"/>
    <line x1="380" y1="240" x2="380" y2="230" stroke="#40a040" stroke-width="2"/>
    <circle cx="450" cy="280" r="5" fill="#2080f0"/>
    <line x1="450" y1="280" x2="450" y2="230" stroke="#40a040" stroke-width="2"/>
    <circle cx="520" cy="220" r="5" fill="#2080f0"/>
    <line x1="520" y1="220" x2="520" y2="230" stroke="#40a040" stroke-width="2"/>
    <circle cx="590" cy="260" r="5" fill="#2080f0"/>
    <line x1="590" y1="260" x2="590" y2="230" stroke="#40a040" stroke-width="2"/>
  </g>

  <!-- Mean line -->
  <line x1="50" y1="230" x2="650" y2="230" stroke="#ff4040" stroke-width="2"/>
  <text x="660" y="234" font-size="16" fill="#ff4040">Mean</text>

  <!-- Calculation steps -->
  <text x="50" y="340" font-size="18">1. Calculate deviations from mean (green lines): (x - μ)</text>
  <text x="70" y="370" font-size="18">Example: If x = 270 and μ (mean) = 230, then (x - μ) = 270 - 230 = 40</text>
  <text x="50" y="410" font-size="18">2. Square each deviation: (x - μ)²</text>
  <text x="50" y="450" font-size="18">3. Calculate mean of squared deviations: Σ(x - μ)² / n</text>
  <text x="50" y="490" font-size="20" font-weight="bold" fill="#8b4513">This is the Variance (s² or σ²)</text>
  <text x="50" y="530" font-size="18">4. Take square root of the variance to get Standard Deviation</text>

  <!-- Formulas -->
  <text x="50" y="580" font-size="22" font-style="italic" fill="#8b4513">Variance: s² = Σ(x - μ)² / n</text>
  <text x="50" y="620" font-size="22" font-style="italic">Standard Deviation: s = √s² = √[Σ(x - μ)² / n]</text>

  <!-- Relationship -->
  <text x="50" y="660" font-size="20" font-weight="bold">Relationship: Standard Deviation = √Variance</text>

  <!-- Labels -->
  <text x="400" y="40" text-anchor="middle" font-size="24" font-weight="bold">Standard Deviation and Variance Calculation Process</text>
</svg>
    `
}

]

