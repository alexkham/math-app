const explanations = {
    sampleSize: "The number of data points in the dataset. It's often denoted as 'n' in statistical formulas.",
    
    sum: "The total of all values in the dataset. Formula: Σ x, where x represents each value in the dataset.",
    
    mean: "The arithmetic average of all values in the dataset. It's calculated by dividing the sum of all values by the number of values. Formula: x̄ = (Σ x) / n, where x̄ is the mean, Σ x is the sum of all values, and n is the sample size.",
    
    median: "The middle value when the dataset is ordered from least to greatest. For an odd number of values, it's the middle number. For an even number, it's the average of the two middle numbers.",
    
    mode: "The most frequently occurring value in the dataset. A dataset can have no mode, one mode, or multiple modes.",
    
    min: "The smallest value in the dataset.",
    
    max: "The largest value in the dataset.",
    
    range: "The difference between the largest and smallest values in the dataset. Formula: Range = Max - Min",
    
    variance: "A measure of variability that quantifies how far a set of numbers are spread out from their average value. Formula: s² = Σ(x - x̄)² / (n - 1) for sample variance, or σ² = Σ(x - μ)² / N for population variance, where x is each value, x̄ is the sample mean, μ is the population mean, n is the sample size, and N is the population size.",
    
    standardDeviation: "The square root of the variance, indicating the average distance from the mean. It's in the same units as the original data. Formula: s = √s² for sample standard deviation, or σ = √σ² for population standard deviation.",
    
    q1: "The first quartile, or 25th percentile of the dataset. It's the median of the lower half of the dataset.",
    
    q3: "The third quartile, or 75th percentile of the dataset. It's the median of the upper half of the dataset.",
    
    iqr: "The interquartile range, calculated as Q3 - Q1. It represents the middle 50% of the data and is a measure of statistical dispersion.",
    
    skewness: "A measure of the asymmetry of the probability distribution. Positive skewness indicates a longer tail on the right side, while negative skewness indicates a longer tail on the left. Formula: Skewness = [n / (n-1)(n-2)] * Σ[(x - x̄)³ / s³], where n is the sample size, x is each value, x̄ is the mean, and s is the standard deviation.",
    
    kurtosis: "A measure of the 'tailedness' of the probability distribution. Higher kurtosis means more of the variance is due to infrequent extreme deviations, as opposed to frequent modestly-sized deviations. Formula: Kurtosis = [n(n+1) / (n-1)(n-2)(n-3)] * [Σ(x - x̄)⁴ / s⁴] - [3(n-1)² / (n-2)(n-3)], where n is the sample size, x is each value, x̄ is the mean, and s is the standard deviation.",
    
    coefficientOfVariation: "The ratio of the standard deviation to the mean, expressed as a percentage. It shows the extent of variability in relation to the mean. Formula: CV = (s / x̄) * 100, where s is the standard deviation and x̄ is the mean.",
    
    geometricMean: "The nth root of the product of n numbers. It's often used for calculating the average of percentages and is less affected by extreme values than the arithmetic mean. Formula: GM = (x₁ * x₂ * ... * xn)^(1/n), where x₁, x₂, etc. are the individual values and n is the number of values.",
    
    harmonicMean: "The reciprocal of the arithmetic mean of the reciprocals of the given set of numbers. It's often used for calculating the average of rates. Formula: HM = n / (1/x₁ + 1/x₂ + ... + 1/xn), where x₁, x₂, etc. are the individual values and n is the number of values.",
    
    rootMeanSquare: "The square root of the arithmetic mean of the squares of a set of numbers. It's particularly useful when variates are positive and negative, as in sinusoidal functions. Formula: RMS = √[(x₁² + x₂² + ... + xn²) / n], where x₁, x₂, etc. are the individual values and n is the number of values."
  };
  
  export default explanations;