const explanations3x3 = {
  "default": "No selection made. Click any cell in the main table to see its joint probability explanation, or click any row in the conditional panels to understand how probabilities change when conditioning on known information.",
  
  // Joint probabilities (9 states)
  "A1B1": "This cell shows the joint probability P(A₁ ∩ B₁), representing the probability that both events A₁ and B₁ occur together. This is calculated as P(A₁) × P(B₁|A₁), combining the marginal probability of A₁ with the conditional probability of B₁ given A₁.",
  
  "A1B2": "This cell shows the joint probability P(A₁ ∩ B₂), representing the probability that both events A₁ and B₂ occur together. This is calculated as P(A₁) × P(B₂|A₁), combining the marginal probability of A₁ with the conditional probability of B₂ given A₁.",
  
  "A1B3": "This cell shows the joint probability P(A₁ ∩ B₃), representing the probability that both events A₁ and B₃ occur together. This is calculated as P(A₁) × P(B₃|A₁), combining the marginal probability of A₁ with the conditional probability of B₃ given A₁.",
  
  "A2B1": "This cell shows the joint probability P(A₂ ∩ B₁), representing the probability that both events A₂ and B₁ occur together. This is calculated as P(A₂) × P(B₁|A₂), combining the marginal probability of A₂ with the conditional probability of B₁ given A₂.",
  
  "A2B2": "This cell shows the joint probability P(A₂ ∩ B₂), representing the probability that both events A₂ and B₂ occur together. This is calculated as P(A₂) × P(B₂|A₂), combining the marginal probability of A₂ with the conditional probability of B₂ given A₂.",
  
  "A2B3": "This cell shows the joint probability P(A₂ ∩ B₃), representing the probability that both events A₂ and B₃ occur together. This is calculated as P(A₂) × P(B₃|A₂), combining the marginal probability of A₂ with the conditional probability of B₃ given A₂.",
  
  "A3B1": "This cell shows the joint probability P(A₃ ∩ B₁), representing the probability that both events A₃ and B₁ occur together. This is calculated as P(A₃) × P(B₁|A₃), combining the marginal probability of A₃ with the conditional probability of B₁ given A₃.",
  
  "A3B2": "This cell shows the joint probability P(A₃ ∩ B₂), representing the probability that both events A₃ and B₂ occur together. This is calculated as P(A₃) × P(B₂|A₃), combining the marginal probability of A₃ with the conditional probability of B₂ given A₃.",
  
  "A3B3": "This cell shows the joint probability P(A₃ ∩ B₃), representing the probability that both events A₃ and B₃ occur together. This is calculated as P(A₃) × P(B₃|A₃), combining the marginal probability of A₃ with the conditional probability of B₃ given A₃.",
  
  // Conditional on A₁ (3 states)
  "A1B1-A1": "This shows P(B₁|A₁), the conditional probability of B₁ given that A₁ has occurred. When we know A₁ happened, this tells us how likely B₁ is within that restricted sample space. It's calculated by dividing the joint probability P(A₁ ∩ B₁) by the marginal probability P(A₁).",
  
  "A1B2-A1": "This shows P(B₂|A₁), the conditional probability of B₂ given that A₁ has occurred. When we know A₁ happened, this tells us how likely B₂ is within that restricted sample space. It's calculated by dividing the joint probability P(A₁ ∩ B₂) by the marginal probability P(A₁).",
  
  "A1B3-A1": "This shows P(B₃|A₁), the conditional probability of B₃ given that A₁ has occurred. When we know A₁ happened, this tells us how likely B₃ is within that restricted sample space. It's calculated by dividing the joint probability P(A₁ ∩ B₃) by the marginal probability P(A₁).",
  
  // Conditional on A₂ (3 states)
  "A2B1-A2": "This shows P(B₁|A₂), the conditional probability of B₁ given that A₂ has occurred. When we know A₂ happened, this tells us how likely B₁ is within that restricted sample space. It's calculated by dividing the joint probability P(A₂ ∩ B₁) by the marginal probability P(A₂).",
  
  "A2B2-A2": "This shows P(B₂|A₂), the conditional probability of B₂ given that A₂ has occurred. When we know A₂ happened, this tells us how likely B₂ is within that restricted sample space. It's calculated by dividing the joint probability P(A₂ ∩ B₂) by the marginal probability P(A₂).",
  
  "A2B3-A2": "This shows P(B₃|A₂), the conditional probability of B₃ given that A₂ has occurred. When we know A₂ happened, this tells us how likely B₃ is within that restricted sample space. It's calculated by dividing the joint probability P(A₂ ∩ B₃) by the marginal probability P(A₂).",
  
  // Conditional on A₃ (3 states)
  "A3B1-A3": "This shows P(B₁|A₃), the conditional probability of B₁ given that A₃ has occurred. When we know A₃ happened, this tells us how likely B₁ is within that restricted sample space. It's calculated by dividing the joint probability P(A₃ ∩ B₁) by the marginal probability P(A₃).",
  
  "A3B2-A3": "This shows P(B₂|A₃), the conditional probability of B₂ given that A₃ has occurred. When we know A₃ happened, this tells us how likely B₂ is within that restricted sample space. It's calculated by dividing the joint probability P(A₃ ∩ B₂) by the marginal probability P(A₃).",
  
  "A3B3-A3": "This shows P(B₃|A₃), the conditional probability of B₃ given that A₃ has occurred. When we know A₃ happened, this tells us how likely B₃ is within that restricted sample space. It's calculated by dividing the joint probability P(A₃ ∩ B₃) by the marginal probability P(A₃).",
  
  // Conditional on B₁ (3 states)
  "A1B1-B1": "This shows P(A₁|B₁), the conditional probability of A₁ given that B₁ has occurred. When we know B₁ happened, this tells us how likely A₁ is within that restricted sample space. It's calculated by dividing the joint probability P(A₁ ∩ B₁) by the marginal probability P(B₁).",
  
  "A2B1-B1": "This shows P(A₂|B₁), the conditional probability of A₂ given that B₁ has occurred. When we know B₁ happened, this tells us how likely A₂ is within that restricted sample space. It's calculated by dividing the joint probability P(A₂ ∩ B₁) by the marginal probability P(B₁).",
  
  "A3B1-B1": "This shows P(A₃|B₁), the conditional probability of A₃ given that B₁ has occurred. When we know B₁ happened, this tells us how likely A₃ is within that restricted sample space. It's calculated by dividing the joint probability P(A₃ ∩ B₁) by the marginal probability P(B₁).",
  
  // Conditional on B₂ (3 states)
  "A1B2-B2": "This shows P(A₁|B₂), the conditional probability of A₁ given that B₂ has occurred. When we know B₂ happened, this tells us how likely A₁ is within that restricted sample space. It's calculated by dividing the joint probability P(A₁ ∩ B₂) by the marginal probability P(B₂).",
  
  "A2B2-B2": "This shows P(A₂|B₂), the conditional probability of A₂ given that B₂ has occurred. When we know B₂ happened, this tells us how likely A₂ is within that restricted sample space. It's calculated by dividing the joint probability P(A₂ ∩ B₂) by the marginal probability P(B₂).",
  
  "A3B2-B2": "This shows P(A₃|B₂), the conditional probability of A₃ given that B₂ has occurred. When we know B₂ happened, this tells us how likely A₃ is within that restricted sample space. It's calculated by dividing the joint probability P(A₃ ∩ B₂) by the marginal probability P(B₂).",
  
  // Conditional on B₃ (3 states)
  "A1B3-B3": "This shows P(A₁|B₃), the conditional probability of A₁ given that B₃ has occurred. When we know B₃ happened, this tells us how likely A₁ is within that restricted sample space. It's calculated by dividing the joint probability P(A₁ ∩ B₃) by the marginal probability P(B₃).",
  
  "A2B3-B3": "This shows P(A₂|B₃), the conditional probability of A₂ given that B₃ has occurred. When we know B₃ happened, this tells us how likely A₂ is within that restricted sample space. It's calculated by dividing the joint probability P(A₂ ∩ B₃) by the marginal probability P(B₃).",
  
  "A3B3-B3": "This shows P(A₃|B₃), the conditional probability of A₃ given that B₃ has occurred. When we know B₃ happened, this tells us how likely A₃ is within that restricted sample space. It's calculated by dividing the joint probability P(A₃ ∩ B₃) by the marginal probability P(B₃)."
};

export default explanations3x3;