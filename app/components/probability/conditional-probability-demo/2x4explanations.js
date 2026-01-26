const explanations2x4 = {
  "default": "No selection made. Click any cell in the main table to see its joint probability explanation, or click any row in the conditional panels to understand how probabilities change when conditioning on known information.",
  
  // Joint probabilities (8 states)
  "AB1": "This cell shows the joint probability P(A ∩ B₁), representing the probability that both events A and B₁ occur together. This is calculated as P(A) × P(B₁|A), combining the marginal probability of A with the conditional probability of B₁ given A.",
  
  "AB2": "This cell shows the joint probability P(A ∩ B₂), representing the probability that both events A and B₂ occur together. This is calculated as P(A) × P(B₂|A), combining the marginal probability of A with the conditional probability of B₂ given A.",
  
  "AB3": "This cell shows the joint probability P(A ∩ B₃), representing the probability that both events A and B₃ occur together. This is calculated as P(A) × P(B₃|A), combining the marginal probability of A with the conditional probability of B₃ given A.",
  
  "AB4": "This cell shows the joint probability P(A ∩ B₄), representing the probability that both events A and B₄ occur together. This is calculated as P(A) × P(B₄|A), combining the marginal probability of A with the conditional probability of B₄ given A.",
  
  "notAB1": "This cell shows the joint probability P(Aᶜ ∩ B₁), representing the probability that both Aᶜ (not A) and B₁ occur together. This is calculated as P(Aᶜ) × P(B₁|Aᶜ), combining the marginal probability of Aᶜ with the conditional probability of B₁ given Aᶜ.",
  
  "notAB2": "This cell shows the joint probability P(Aᶜ ∩ B₂), representing the probability that both Aᶜ (not A) and B₂ occur together. This is calculated as P(Aᶜ) × P(B₂|Aᶜ), combining the marginal probability of Aᶜ with the conditional probability of B₂ given Aᶜ.",
  
  "notAB3": "This cell shows the joint probability P(Aᶜ ∩ B₃), representing the probability that both Aᶜ (not A) and B₃ occur together. This is calculated as P(Aᶜ) × P(B₃|Aᶜ), combining the marginal probability of Aᶜ with the conditional probability of B₃ given Aᶜ.",
  
  "notAB4": "This cell shows the joint probability P(Aᶜ ∩ B₄), representing the probability that both Aᶜ (not A) and B₄ occur together. This is calculated as P(Aᶜ) × P(B₄|Aᶜ), combining the marginal probability of Aᶜ with the conditional probability of B₄ given Aᶜ.",
  
  // Conditional on A (4 states)
  "AB1-A": "This shows P(B₁|A), the conditional probability of B₁ given that A has occurred. When we know A happened, this tells us how likely B₁ is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₁) by the marginal probability P(A).",
  
  "AB2-A": "This shows P(B₂|A), the conditional probability of B₂ given that A has occurred. When we know A happened, this tells us how likely B₂ is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₂) by the marginal probability P(A).",
  
  "AB3-A": "This shows P(B₃|A), the conditional probability of B₃ given that A has occurred. When we know A happened, this tells us how likely B₃ is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₃) by the marginal probability P(A).",
  
  "AB4-A": "This shows P(B₄|A), the conditional probability of B₄ given that A has occurred. When we know A happened, this tells us how likely B₄ is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₄) by the marginal probability P(A).",
  
  // Conditional on Aᶜ (4 states)
  "notAB1-notA": "This shows P(B₁|Aᶜ), the conditional probability of B₁ given that Aᶜ (not A) has occurred. When we know A didn't happen, this tells us how likely B₁ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₁) by the marginal probability P(Aᶜ).",
  
  "notAB2-notA": "This shows P(B₂|Aᶜ), the conditional probability of B₂ given that Aᶜ (not A) has occurred. When we know A didn't happen, this tells us how likely B₂ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₂) by the marginal probability P(Aᶜ).",
  
  "notAB3-notA": "This shows P(B₃|Aᶜ), the conditional probability of B₃ given that Aᶜ (not A) has occurred. When we know A didn't happen, this tells us how likely B₃ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₃) by the marginal probability P(Aᶜ).",
  
  "notAB4-notA": "This shows P(B₄|Aᶜ), the conditional probability of B₄ given that Aᶜ (not A) has occurred. When we know A didn't happen, this tells us how likely B₄ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₄) by the marginal probability P(Aᶜ).",
  
  // Conditional on B₁ (2 states)
  "AB1-B1": "This shows P(A|B₁), the conditional probability of A given that B₁ has occurred. When we know B₁ happened, this tells us how likely A is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₁) by the marginal probability P(B₁).",
  
  "notAB1-B1": "This shows P(Aᶜ|B₁), the conditional probability of Aᶜ given that B₁ has occurred. When we know B₁ happened, this tells us how likely Aᶜ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₁) by the marginal probability P(B₁).",
  
  // Conditional on B₂ (2 states)
  "AB2-B2": "This shows P(A|B₂), the conditional probability of A given that B₂ has occurred. When we know B₂ happened, this tells us how likely A is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₂) by the marginal probability P(B₂).",
  
  "notAB2-B2": "This shows P(Aᶜ|B₂), the conditional probability of Aᶜ given that B₂ has occurred. When we know B₂ happened, this tells us how likely Aᶜ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₂) by the marginal probability P(B₂).",
  
  // Conditional on B₃ (2 states)
  "AB3-B3": "This shows P(A|B₃), the conditional probability of A given that B₃ has occurred. When we know B₃ happened, this tells us how likely A is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₃) by the marginal probability P(B₃).",
  
  "notAB3-B3": "This shows P(Aᶜ|B₃), the conditional probability of Aᶜ given that B₃ has occurred. When we know B₃ happened, this tells us how likely Aᶜ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₃) by the marginal probability P(B₃).",
  
  // Conditional on B₄ (2 states)
  "AB4-B4": "This shows P(A|B₄), the conditional probability of A given that B₄ has occurred. When we know B₄ happened, this tells us how likely A is within that restricted sample space. It's calculated by dividing the joint probability P(A ∩ B₄) by the marginal probability P(B₄).",
  
  "notAB4-B4": "This shows P(Aᶜ|B₄), the conditional probability of Aᶜ given that B₄ has occurred. When we know B₄ happened, this tells us how likely Aᶜ is within that restricted sample space. It's calculated by dividing the joint probability P(Aᶜ ∩ B₄) by the marginal probability P(B₄)."
};

export default explanations2x4;