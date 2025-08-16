import React from 'react';

export default function ProbabilityTree() {
  return (
    <svg width="600" height="600" viewBox="0 0 600 600">
      {/* Edges and labels first - thinner lines */}
      {/* Level 1 - blue */}
      <g>
        <line x1="300" y1="50" x2="200" y2="150" stroke="#2c64ba" strokeWidth="1" />
        <text x="220" y="90" fill="#2c64ba" dominantBaseline="middle">P(A)</text>
      </g>
      
      <g>
        <line x1="300" y1="50" x2="400" y2="150" stroke="#2c64ba" strokeWidth="1" />
        <text x="380" y="90" fill="#2c64ba" dominantBaseline="middle">P(Ā)</text>
      </g>

      {/* Level 2 - red */}
      <g>
        <line x1="200" y1="150" x2="150" y2="250" stroke="#ba2c64" strokeWidth="1" />
        <text x="140" y="190" fill="#ba2c64" dominantBaseline="middle">P(B|A)</text>
      </g>

      <g>
        <line x1="200" y1="150" x2="250" y2="250" stroke="#ba2c64" strokeWidth="1" />
        <text x="240" y="190" fill="#ba2c64" dominantBaseline="middle">P(B̄|A)</text>
      </g>

      <g>
        <line x1="400" y1="150" x2="350" y2="250" stroke="#ba2c64" strokeWidth="1" />
        <text x="340" y="190" fill="#ba2c64" dominantBaseline="middle">P(B|Ā)</text>
      </g>

      <g>
        <line x1="400" y1="150" x2="450" y2="250" stroke="#ba2c64" strokeWidth="1" />
        <text x="440" y="190" fill="#ba2c64" dominantBaseline="middle">P(B̄|Ā)</text>
      </g>

      {/* Nodes with thinner borders */}
      {/* Root */}
      <g>
        <circle cx="300" cy="50" r="20" fill="white" stroke="black" strokeWidth="1"/>
        <text x="300" y="55" textAnchor="middle" dominantBaseline="middle">Ω</text>
      </g>

      {/* Level 1 - blue stroke */}
      <g>
        <circle cx="200" cy="150" r="20" fill="white" stroke="#2c64ba" strokeWidth="1"/>
        <text x="200" y="155" textAnchor="middle" dominantBaseline="middle">A</text>
      </g>
      
      <g>
        <circle cx="400" cy="150" r="20" fill="white" stroke="#2c64ba" strokeWidth="1"/>
        <text x="400" y="155" textAnchor="middle" dominantBaseline="middle">Ā</text>
      </g>

      {/* Level 2 - red stroke */}
      <g>
        <circle cx="150" cy="250" r="25" fill="white" stroke="#ba2c64" strokeWidth="1"/>
        <text x="150" y="255" textAnchor="middle" dominantBaseline="middle">A∩B</text>
      </g>

      <g>
        <circle cx="250" cy="250" r="25" fill="white" stroke="#ba2c64" strokeWidth="1"/>
        <text x="250" y="255" textAnchor="middle" dominantBaseline="middle">A∩B̄</text>
      </g>

      <g>
        <circle cx="350" cy="250" r="25" fill="white" stroke="#ba2c64" strokeWidth="1"/>
        <text x="350" y="255" textAnchor="middle" dominantBaseline="middle">Ā∩B</text>
      </g>

      <g>
        <circle cx="450" cy="250" r="25" fill="white" stroke="#ba2c64" strokeWidth="1"/>
        <text x="450" y="255" textAnchor="middle" dominantBaseline="middle">Ā∩B̄</text>
      </g>
    </svg>
  );
}