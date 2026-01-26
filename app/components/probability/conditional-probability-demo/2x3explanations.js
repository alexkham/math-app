const explanations2x3 = {
  "default": "No selection made. Click any cell in the main table to see its joint probability explanation, or click any row in the conditional panels to understand how probabilities change when conditioning on known information.",
  
  "AB1": "This cell shows the joint probability P(A ∩ B₁), representing the probability that both events A and B₁ occur together. This is calculated as P(A) × P(B₁|A), combining the marginal probability of A with the conditional probability of B₁ given A.",
  
  "AB2": "This cell shows the joint probability P(A ∩ B₂), representing the probability that both events A and B₂ occur together. This is calculated as P(A) × P(B₂|A), combining the marginal probability of A with the conditional probability of B₂ given A.",
  
  "AB3": "This cell shows the joint probability P(A ∩ B₃), representing the probability that both events A and B₃ occur together. This is calculated as P(A) × P(B₃|A), combining the marginal probability of A with the conditional probability of B₃ given A.",
  
  "notAB1": "This cell shows the joint probability P(Aᶜ ∩ B₁), representing the probability that both Aᶜ (not A) and B₁ occur together. This is calculated as P(Aᶜ) × P(B₁|Aᶜ), combining the marginal probability of Aᶜ with the conditional probability of B₁ given Aᶜ.",
  
  "notAB2": "This cell shows the joint probability P(Aᶜ ∩ B₂), representing the probability that both Aᶜ (not A) and B₂ occur together. This is calculated as P(Aᶜ) × P(B₂|Aᶜ), combining the marginal probability of Aᶜ with the conditional probability of B₂ given Aᶜ.",
  
  "notAB3": "This cell shows the joint probability P(Aᶜ ∩ B₃), representing the probability that both Aᶜ (not A) and B₃ occur together. This is calculated as P(Aᶜ) × P(B₃|Aᶜ), combining the marginal probability of Aᶜ with the conditional probability of B₃ given Aᶜ.",
  
  "AB1-A": "This shows P(B₁|A), the conditional probability of B₁ given that A has occurred. When we know A happened, this tells us how likely B₁ is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₁) by the marginal probability P(A).",
  
  "AB2-A": "This shows P(B₂|A), the conditional probability of B₂ given that A has occurred. When we know A happened, this tells us how likely B₂ is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₂) by the marginal probability P(A).",
  
  "AB3-A": "This shows P(B₃|A), the conditional probability of B₃ given that A has occurred. When we know A happened, this tells us how likely B₃ is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₃) by the marginal probability P(A).",
  
  "notAB1-notA": "This shows P(B₁|Aᶜ), the conditional probability of B₁ given that Aᶜ (not A) has occurred. When we know A didn't happen, this tells us how likely B₁ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₁) by the marginal probability P(Aᶜ).",
  
  "notAB2-notA": "This shows P(B₂|Aᶜ), the conditional probability of B₂ given that Aᶜ (not A) has occurred. When we know A didn't happen, this tells us how likely B₂ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₂) by the marginal probability P(Aᶜ).",
  
  "notAB3-notA": "This shows P(B₃|Aᶜ), the conditional probability of B₃ given that Aᶜ (not A) has occurred. When we know A didn't happen, this tells us how likely B₃ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₃) by the marginal probability P(Aᶜ).",
  
  "AB1-B1": "This shows P(A|B₁), the conditional probability of A given that B₁ has occurred. When we know B₁ happened, this tells us how likely A is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₁) by the marginal probability P(B₁).",
  
  "notAB1-B1": "This shows P(Aᶜ|B₁), the conditional probability of Aᶜ given that B₁ has occurred. When we know B₁ happened, this tells us how likely Aᶜ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₁) by the marginal probability P(B₁).",
  
  "AB2-B2": "This shows P(A|B₂), the conditional probability of A given that B₂ has occurred. When we know B₂ happened, this tells us how likely A is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₂) by the marginal probability P(B₂).",
  
  "notAB2-B2": "This shows P(Aᶜ|B₂), the conditional probability of Aᶜ given that B₂ has occurred. When we know B₂ happened, this tells us how likely Aᶜ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₂) by the marginal probability P(B₂).",
  
  "AB3-B3": "This shows P(A|B₃), the conditional probability of A given that B₃ has occurred. When we know B₃ happened, this tells us how likely A is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₃) by the marginal probability P(B₃).",
  
  "notAB3-B3": "This shows P(Aᶜ|B₃), the conditional probability of Aᶜ given that B₃ has occurred. When we know B₃ happened, this tells us how likely Aᶜ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₃) by the marginal probability P(B₃)."
};

export default explanations2x3;