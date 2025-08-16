export const scenarios = {
  medical: {
    label: 'Medical Test',
    conditionName: 'Disease',
    outcomeName: 'Test+',
    cell11: 95,
    cell10: 5,
    cell01: 495,
    cell00: 9405,
    interpretation: 'Even with a 95% accurate test, a positive result only gives 16.1% chance of actually having the disease. This is because the disease is rare (1% prevalence), so most positive tests are false positives.'
  },
  spam: {
    label: 'Email Spam',
    conditionName: 'Spam',
    outcomeName: 'Contains "ASAP"',
    cell11: 50,
    cell10: 10,
    cell01: 200,
    cell00: 740,
    interpretation: 'If an email contains "ASAP", there\'s an 83.3% chance it\'s spam. However, if an email is spam, there\'s only a 20% chance it contains "ASAP".'
  },
  weather: {
    label: 'Weather Prediction',
    conditionName: 'Cloudy',
    outcomeName: 'Rain',
    cell11: 120,
    cell10: 30,
    cell01: 80,
    cell00: 135,
    interpretation: 'When it\'s cloudy, there\'s an 80% chance of rain. When it\'s not cloudy, there\'s only a 37% chance of rain. Clouds are a strong predictor of rain.'
  },
  marketing: {
    label: 'Marketing Response',
    conditionName: 'Clicked Ad',
    outcomeName: 'Made Purchase',
    cell11: 120,
    cell10: 380,
    cell01: 80,
    cell00: 9420,
    interpretation: 'If someone clicks the ad, there\'s a 24% chance they\'ll purchase. If they don\'t click, there\'s only a 0.8% chance they\'ll purchase. Clicks are strong purchase indicators.'
  }
};