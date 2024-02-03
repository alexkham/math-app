
    export const cumulativeProbability=(z)=> {
      const p = 0.2316419;
      const b1 = 0.319381530;
      const b2 = -0.356563782;
      const b3 = 1.781477937;
      const b4 = -1.821255978;
      const b5 = 1.330274429;
      const t = 1 / (1 + p * Math.abs(z));
      const tSeries = b1 * t + b2 * Math.pow(t, 2) + b3 * Math.pow(t, 3) + b4 * Math.pow(t, 4) + b5 * Math.pow(t, 5);
      const sigma = 1 - (1 / (Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * Math.pow(z, 2))) * tSeries;
      return z < 0 ? 1 - sigma : sigma;
    }
  
    export const complementaryCumulativeProbability=(z)=> {
      return 1 - cumulativeProbability(z);
  }

  export const  probabilityBetweenZScores=(z1, z2)=> {
    return cumulativeProbability(z2) - cumulativeProbability(z1);
  }
  
  export const twoTailedZScore=(z)=> {
    return 2 * (1 - cumulativeProbability(Math.abs(z)));
  }
  