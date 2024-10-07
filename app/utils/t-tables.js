function tDistributionCDF(t, df) {
    const x = df / (t * t + df);
    const a = df / 2;
    const b = 0.5;
    return 1 - incompleteBeta(x, a, b) / 2;
}

function incompleteBeta(x, a, b) {
    let sum = 0;
    let term = 1;
    for (let i = 0; i < 100; i++) {
        term *= (a + i) * x / (a + b + i);
        sum += term / (a + i);
        if (term < 1e-10) break;
    }
    return sum * Math.pow(x, a) / a;
}

export function cumulativeProbabilityT(t, degreesOfFreedom = 30) {
    if (t < 0) {
        return 1 - tDistributionCDF(-t, degreesOfFreedom);
    }
    return tDistributionCDF(t, degreesOfFreedom);
}

export function complementaryCumulativeProbabilityT(t, degreesOfFreedom = 30) {
    return 1 - cumulativeProbabilityT(t, degreesOfFreedom);
}