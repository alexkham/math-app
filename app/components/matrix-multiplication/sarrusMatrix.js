export const getSarrusSVG = (step) => {
    const baseWidth = 400;
    const baseHeight = 200;
    const baseSVG = `<svg width="${baseWidth}" height="${baseHeight}" xmlns="http://www.w3.org/2000/svg">
      <path d="M 20,40 L 20,160 L 20.5,160 L 20.5,40 Z" stroke="black" fill="black" stroke-width="0.5"/>
      <path d="M 294,40 L 294,160 L 294.5,160 L 294.5,40 Z" stroke="black" fill="black" stroke-width="0.5"/>
      <text x="40" y="50" font-family="Arial" font-size="18" font-weight="bold">a</text>
      <text x="100" y="50" font-family="Arial" font-size="18" font-weight="bold">b</text>
      <text x="160" y="50" font-family="Arial" font-size="18" font-weight="bold">c</text>
      <text x="220" y="50" font-family="Arial" font-size="18" font-weight="bold">a</text>
      <text x="280" y="50" font-family="Arial" font-size="18" font-weight="bold">b</text>
      <text x="40" y="100" font-family="Arial" font-size="18" font-weight="bold">d</text>
      <text x="100" y="100" font-family="Arial" font-size="18" font-weight="bold">e</text>
      <text x="160" y="100" font-family="Arial" font-size="18" font-weight="bold">f</text>
      <text x="220" y="100" font-family="Arial" font-size="18" font-weight="bold">d</text>
      <text x="280" y="100" font-family="Arial" font-size="18" font-weight="bold">e</text>
      <text x="40" y="150" font-family="Arial" font-size="18" font-weight="bold">g</text>
      <text x="100" y="150" font-family="Arial" font-size="18" font-weight="bold">h</text>
      <text x="160" y="150" font-family="Arial" font-size="18" font-weight="bold">i</text>
      <text x="220" y="150" font-family="Arial" font-size="18" font-weight="bold">g</text>
      <text x="280" y="150" font-family="Arial" font-size="18" font-weight="bold">h</text>`;
  
    const redLines = [
      '<line x1="40" y1="40" x2="180" y2="160" stroke="red" stroke-width="2"/>',
      '<line x1="100" y1="40" x2="240" y2="160" stroke="red" stroke-width="2"/>',
      '<line x1="160" y1="40" x2="300" y2="160" stroke="red" stroke-width="2"/>'
    ];
  
    const blueLines = [
      '<line x1="30" y1="160" x2="170" y2="40" stroke="blue" stroke-width="2" stroke-dasharray="7,5"/>',
      '<line x1="90" y1="160" x2="230" y2="40" stroke="blue" stroke-width="2" stroke-dasharray="7,5"/>',
      '<line x1="150" y1="160" x2="290" y2="40" stroke="blue" stroke-width="2" stroke-dasharray="7,5"/>'
    ];
  
    let svg = baseSVG;
  
    if (step >= 2) {
      svg += redLines.slice(0, step - 1).join('');
    }
    if (step >= 5) {
      svg += blueLines.slice(0, step - 4).join('');
    }
  
    svg += '</svg>';
    return svg;
  };