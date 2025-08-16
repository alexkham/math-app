import jstat from 'jstat';

// Z-distribution functions
export function cumulativeProbability(z) {
    return jstat.normal.cdf(z, 0, 1);
}

export function complementaryCumulativeProbability(z) {
    return 1 - jstat.normal.cdf(z, 0, 1);
}

// T-distribution functions
export function cumulativeProbabilityT(t, degreesOfFreedom = 30) {
    return jstat.studentt.cdf(t, degreesOfFreedom);
}

export function complementaryCumulativeProbabilityT(t, degreesOfFreedom = 30) {
    return 1 - jstat.studentt.cdf(t, degreesOfFreedom);
}