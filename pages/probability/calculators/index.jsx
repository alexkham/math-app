
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import MiniCardGroup from '@/app/components/page-components/MiniCardsGroup'
import StaticCards from '@/app/components/cards/static-cards/StaticCards'
import {Cone } from 'lucide-react'

const uniformSVG=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-half-icon lucide-shield-half"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 22V2"/></svg>
)

const normalSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20 C4 20, 5 15, 7 10 C9 5, 10 2, 12 2 C14 2, 15 5, 17 10 C19 15, 20 20, 22 20"/>
    <line x1="12" y1="2" x2="12" y2="20"/>
  </svg>
)


const exponentialSVG = () => (
  // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //   <path d="M4 4 C4 4, 6 8, 8 12 C10 16, 12 18, 14 19 C16 20, 18 20.5, 20 21"/>
  // </svg>

  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="blue" d="m15.38 3l2.39 5.75c-.22.93-.5 1.57-.77 1.95c-.33.48-.56.55-.81.55v1.5c.75 0 1.55-.4 2.05-1.19C19.87 8.94 22 3 22 3h-1.62l-1.69 4.05L17 3h-1.62M3.42 8.59L2 10l4.79 4.79L2 19.59L3.41 21l4.8-4.79L13 21l1.41-1.41l-4.79-4.8L14.41 10L13 8.59l-4.79 4.79l-4.8-4.79h.01Z"/></svg>
)


const twoEventsSVG=()=>(
  // <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#000000" d="M64 160c0 3.2.16 6.37.47 9.49a80 80 0 1 1 105-105c-3.12-.31-6.29-.47-9.49-.47A96.11 96.11 0 0 0 64 160Zm112-64a79.22 79.22 0 0 0-1.37-14.63A79.22 79.22 0 0 0 160 80a80.09 80.09 0 0 0-80 80a79.22 79.22 0 0 0 1.37 14.63A79.22 79.22 0 0 0 96 176a80.09 80.09 0 0 0 80-80Zm15.53-9.49c.31 3.12.47 6.29.47 9.49a96.11 96.11 0 0 1-96 96c-3.2 0-6.37-.16-9.49-.47a80 80 0 1 0 105-105Z"/></svg>

  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z"/><path d="M15 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/></g></svg>
)



const lambdaSVG=()=>(
  

<svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#1e3a8a"><path fill="#000000" d="M7.983 8.37c-.053.073-.098.133-.141.194L5.775 11.5c-.64.91-1.282 1.82-1.924 2.73a.128.128 0 01-.092.051c-.906-.007-1.813-.017-2.719-.028-.01 0-.02-.003-.04-.006a.455.455 0 01.025-.053 13977.496 13977.496 0 015.446-8.146c.092-.138.188-.273.275-.413a.165.165 0 00.018-.124c-.167-.515-.338-1.03-.508-1.543-.073-.22-.15-.44-.218-.66-.022-.072-.059-.094-.134-.093-.57.002-1.136.001-1.704.001-.108 0-.108 0-.108-.103 0-.674 0-1.347-.002-2.021 0-.075.026-.092.099-.092 1.143.002 2.286.002 3.43 0a.113.113 0 01.076.017.107.107 0 01.045.061 18266.184 18266.184 0 003.92 9.51c.218.53.438 1.059.654 1.59.026.064.053.076.12.056.6-.178 1.2-.352 1.8-.531.075-.023.102-.008.126.064.204.62.412 1.239.62 1.858l.02.073c-.043.015-.083.032-.124.043l-4.085 1.25c-.065.02-.085 0-.106-.054l-1.25-3.048-1.226-2.984-.183-.449c-.01-.026-.023-.048-.043-.087z"/></svg>
)

const iconMap = {
  'cone': Cone,
  'uniform':uniformSVG,
  'normal':normalSVG,
  'exp':exponentialSVG,
  'two':twoEventsSVG,
  'lambda':lambdaSVG,
  // 'chart': Chart,
  // 'users': Users,
  // Add all the icons you need
};

export async function getStaticProps(){

  const keyWords = [
    'probability calculator',
    'calculate probability online',
    'probability calculator with steps',
    'free probability calculator',
    'interactive probability tools',
    'conditional probability calculator',
    'joint probability calculator',
    'Bayes theorem calculator',
    'probability distribution calculator',
    'expected value calculator',
    'discrete probability calculator',
    'continuous probability calculator',
    'multiple events probability',
    'probability formula calculator',
    'statistical probability tool'
  ]




 
const miniCards = [
  // Basic Calculators Section - individual cards
  { 
    label: 'Single Event', 
    href: '#basic-calculators', 
    icon: '', 
    size: 'medium'
  },
  { 
    label: 'Two Independent Events', 
    href: '#basic-calculators', 
    icon: '', 
    size: 'medium'
  },

  
  // Discrete Distributions - grouped
  {
    type: 'group',
    title: 'Discrete Distributions Calculators',
    size:'700px',
    icon: '',
    cards: [
      { label: 'Binomial', href: '#binomial', icon: '', size: 'small' },
      { label: 'Poisson', href: '#poisson', icon: 'lambda', size: 'small' },
      { label: 'Geometric', href: '#geometric', icon: 'cone', size: 'small' },
      { label: 'Negative Binomial', href: '#negative-binomial', icon: '', size: 'small' },
      { label: 'Hypergeometric', href: '#hypergeometric', icon: '', size: 'small' },
      { label: 'Discrete Uniform', href: '#discrete-uniform', icon: 'uniform', size: 'small' }
    ]
  },
  
  // Two/Three Events Section - individual cards
  { 
    label: 'Two Events', 
    href: '#two-three-events', 
    icon: 'two', 
    size: 'large' 
  },
  { 
    label: 'Three Events', 
    href: '#two-three-events', 
    icon: '', 
    size: 'medium' 
  },
  
  
  // Continuous Distributions - grouped
  {
    type: 'group',
    title: 'Continuous Distributions Calculators',
    icon: '',
    cards: [
      { label: 'Continuous Uniform', href: '#continuous-uniform', icon: '', size: 'small' },
      { label: 'Normal', href: '#normal', icon: 'normal', size: 'small' },
      { label: 'Exponential', href: '#exponential', icon: 'exp', size: 'small' }
    ]
  },
  
  // Conditional/Joint Section - individual cards
  { 
    label: 'Joint Probability', 
    href: '#conditional-joint', 
    icon: '', 
    size: 'medium' 
  },
  { 
    label: 'Conditional', 
    href: '#conditional-joint', 
    icon: '', 
    size: 'medium' 
  },
  
  // Bayes Theorem Section - individual card
  { 
    label: 'Bayes Theorem', 
    href: '#bayes-theorem', 
    icon: '', 
    size: 'large',
    description: 'Update probabilities'
  },

  
  // Expected Value - Continuous Distributions - grouped
  {
    type: 'group',
    title: 'Expected Value Calculators - Continuous Distributions',
    size:'700px',
    icon: '',
    cards: [
      { label: 'Continuous Uniform EV', href: '#expected-value', icon: '', size: '30%' },
      { label: 'Exponential EV', href: '#expected-value', icon: '', size: '30%' },
      { label: 'Normal EV', href: '#expected-value', icon: '', size: '33%' }
    ]
  },


   { 
    label: 'Single Event', 
    href: '#basic-calculators', 
    icon: '', 
    size: 'medium'
  },
  
  
  // Expected Value - Discrete Distributions - grouped
  {
    type: 'group',
    title: 'Expected Value Calculators - Discrete Distributions',
    icon: '',
    cards: [
      { label: 'Direct Data EV', href: '#expected-value', icon: '', size: 'small' },
      { label: 'Raw Data EV', href: '#expected-value', icon: '', size: 'small' },
      { label: 'Grouped Data EV', href: '#expected-value', icon: '', size: 'small' },
      { label: 'Discrete Uniform EV', href: '#expected-value', icon: '', size: 'small' },
      { label: 'Binomial EV', href: '#expected-value', icon: '', size: 'small' },
      { label: 'Geometric EV', href: '#expected-value', icon: '', size: 'small' },
      { label: 'Negative Binomial EV', href: '#expected-value', icon: '', size: 'small' },
      { label: 'Hypergeometric EV', href: '#expected-value', icon: '', size: 'small' },
      { label: 'Poisson EV', href: '#expected-value', icon: '', size: 'small' }
    ]
  },
  
]
  
  // StaticCards data - each section with link to actual calculator page
  const staticCardsData = {
    basicCalculators: [{
      id: 1,
      title: 'Basic Probability Calculators',
      summary: 'Master fundamental probability concepts with simple, intuitive calculators',
      content: 'Start your probability journey with our basic calculators designed for beginners. Calculate single event probabilities using favorable and total outcomes, or explore two independent events with automatic computation of AND, OR, and XOR probabilities. Perfect for students learning dice rolls, coin flips, card draws, and other foundational probability scenarios. Features visual pie charts, odds calculations, and step-by-step explanations.',
      icon: '🎲',
      link: '/probability/calculators/basic',
      linkTitle: 'Try Basic Calculators'
    }],
    
    twoEvents: [{
      id: 2,
      title: 'Two Events Probability Calculator',
      summary: 'Comprehensive tool for all two-event scenarios with multiple calculation modes',
      content: 'Our advanced two-events calculator handles independent events, conditional probability, mutually exclusive events, and more. Choose from five calculation modes: independent (P(A) × P(B)), conditional (given P(A|B) or P(B|A)), intersection (given P(A ∩ B)), union (given P(A ∪ B)), or mutually exclusive. Includes visual Venn diagrams for each probability, step-by-step calculations, and automatic checking of probability axioms. Ideal for complex probability problems involving dependent or related events.',
      icon: '⚡',
      link: '/probability/calculators/two-events',
      linkTitle: 'Open Two Events Calculator'
    }],
    
    threeEvents: [{
      id: 3,
      title: 'Three Events Calculator',
      summary: 'Analyze complex scenarios involving three simultaneous or sequential events',
      content: 'Extend your probability analysis to three events with our specialized calculator. Compute probabilities for all possible combinations: all three events occurring, at least one, exactly one, exactly two, none occurring, and more. Handles both independent and dependent events. Visualize relationships between events A, B, and C with interactive diagrams. Perfect for advanced probability problems in statistics courses, quality control scenarios with multiple stages, or complex decision trees.',
      icon: '🔀',
      link: '/probability/calculators/three-events',
      linkTitle: 'Calculate Three Events'
    }],
    
    distributions: [{
      id: 4,
      title: 'Distribution Calculators',
      summary: 'Discrete and continuous probability distributions with instant computations',
      content: 'Work with probability distributions using our comprehensive calculators. Discrete distributions include binomial (fixed trials with success/failure), Poisson (events in intervals), geometric (trials until first success), and hypergeometric (sampling without replacement). Continuous distributions cover normal/Gaussian (bell curve), exponential (time between events), and uniform (equal likelihood). Each calculator provides probabilities, cumulative distribution functions, percentiles, and distribution parameters. Essential for statistical analysis and hypothesis testing.',
      icon: '📊',
      link: '/probability/calculators/discrete-distributions',
      linkTitle: 'Explore Distributions'
    }],
    
    conditional: [{
      id: 5,
      title: 'Conditional Probability Calculator',
      summary: 'Calculate P(A|B) and understand probabilities given prior conditions',
      content: 'Master conditional probability with our intuitive calculator that computes P(A|B)—the probability of event A occurring given that B has already occurred. Essential for understanding dependent events, Bayesian reasoning, and real-world scenarios where information updates probabilities. Applications include medical test interpretation (probability of disease given positive test), quality control (defect probability given production line), and sequential decision-making. Includes visual representations and detailed formula breakdowns.',
      icon: '🔗',
      link: '/probability/calculators/conditional-probability',
      linkTitle: 'Calculate Conditional Probability'
    }],
    
    jointProbability: [{
      id: 6,
      title: 'Joint Probability Calculator',
      summary: 'Compute P(A ∩ B) for events occurring together in probability space',
      content: 'Calculate joint probabilities for events occurring simultaneously or in combination. Our joint probability calculator handles both independent events (P(A ∩ B) = P(A) × P(B)) and dependent events using conditional probabilities. Visualize joint probability distributions with tables and diagrams. Critical for multivariate analysis, understanding event relationships, and computing marginal probabilities. Use for survey data analysis, market research with multiple attributes, or any scenario involving overlapping event spaces.',
      icon: '∩',
      link: '/probability/calculators/joint-probability',
      linkTitle: 'Try Joint Probability'
    }],
    
    bayesTheorem: [{
      id: 7,
      title: "Bayes' Theorem Calculator",
      summary: 'Update probabilities with new evidence using Bayesian inference',
      content: "Apply Bayes' theorem to revise probability estimates when new information becomes available. Calculate P(A|B) using P(B|A), P(A), and P(B) with our step-by-step calculator. Essential for machine learning, diagnostic testing, spam filtering, and decision-making under uncertainty. Includes visual representations of prior probabilities, likelihood, and posterior probabilities. Perfect for understanding how evidence updates beliefs in medical diagnosis, legal reasoning, and scientific inference. Features examples from real-world applications.",
      icon: '🎯',
      link: '/probability/calculators/bayes-calculator',
      linkTitle: 'Apply Bayes Theorem'
    }],
    
    expectedValue: [{
      id: 8,
      title: 'Expected Value Calculator',
      summary: 'Calculate average outcomes weighted by probabilities for decision-making',
      content: 'Determine expected value (E(X)) for probability distributions and random scenarios. Our calculator multiplies each outcome by its probability and sums the results to find the long-run average. Essential for gambling analysis (fair game determination), investment decisions (expected returns), insurance pricing, and risk assessment. Includes variance and standard deviation calculations for understanding outcome variability. Use for comparing alternatives, evaluating lotteries, or any decision involving uncertain outcomes with known probabilities.',
      icon: '💰',
      link: '/probability/calculators/expected-value',
      linkTitle: 'Calculate Expected Value'
    }],
    
    whyUse: [{
      id: 9,
      title: 'Why Use Our Probability Calculators?',
      summary: 'Accurate, educational, and designed for learners at all levels',
      content: 'Our calculator suite provides instant, accurate results with educational value at every step. Each calculator includes visual representations (Venn diagrams, pie charts, distributions), step-by-step explanations showing formulas and logic, and automatic validation to catch input errors. Free to use with no registration required. Perfect for students verifying homework, educators demonstrating concepts, professionals making data-driven decisions, or anyone learning probability theory. All calculations follow standard probability axioms and mathematical conventions.',
      icon: '✅',
      link: '',
      linkTitle: ''
    }],
    
    relatedResources: [{
      id: 10,
      title: 'Related Probability Resources',
      summary: 'Expand your understanding with visual tools and comprehensive guides',
      content: 'Beyond calculators, explore our complete probability learning ecosystem. **Visual probability tools** include interactive tree diagrams, Venn diagrams, waffle charts, and probability distributions with dynamic parameters. **Theory guides** cover fundamental concepts, probability rules, distribution properties, and advanced topics. **Practice problems** with worked solutions help reinforce calculator results. **Formula references** provide quick access to all probability equations. Together, these resources support both computational needs and conceptual understanding of probability theory.',
      icon: '📚',
      link: '',
      linkTitle: ''
    }]
  }


  const basicCardsData = [
  {
    id: 1,
    title: 'Single Event Probability Calculator',
    summary: 'Calculate probability for one event using favorable and total outcomes',
    content: 'The single event calculator computes P(A) = favorable outcomes / total outcomes. Input whole numbers for favorable and total outcomes to get probability as a fraction, decimal, and percentage. Features include complement probability P(A\'), odds in favor and against, simplified fraction display, and an interactive pie chart visualization. Perfect for dice rolls, coin flips, card draws, and any scenario with one event. Includes explanations tab covering probability fundamentals, formulas, and worked examples.',
    icon: '',
    link: '/probability/calculators/basic?calc=single-event',
    linkTitle: 'Try Single Event Calculator'
  },
  {
    id: 2,
    title: 'Two Independent Events Calculator',
    summary: 'Compute probabilities for two events that don\'t affect each other',
    content: 'Calculate all probability combinations for two independent events A and B. Input P(A) and P(B) as decimal values (0 to 1) to instantly compute: P(A∩B) both occurring, P(A∪B) either occurring, P(A∆B) exactly one occurring, P((A∪B)\') neither occurring, plus complements and individual exclusions. Each result includes a visual Venn diagram showing the probability region. Results display as decimals with percentages. Ideal for scenarios where events don\'t influence each other: two dice rolls, multiple coin flips, or independent quality checks.',
    icon: '',
    link: '/probability/calculators/basic?calc=two-independent-events',
    linkTitle: 'Try Two Independent Events Calculator'
  }
]

const twoThreeEventsCardsData = [
  {
    id: 1,
    title: 'Two Events Probability Calculator',
    summary: 'Comprehensive calculator for all two-event probability scenarios with five modes',
    content: 'Advanced calculator supporting five calculation modes for events A and B: Independent (P(A) × P(B)), Conditional (using P(A|B) or P(B|A)), Intersection (given P(A∩B)), Union (given P(A∪B)), and Mutually Exclusive (P(A∩B)=0). Computes all probability combinations including P(A∩B), P(A∪B), P(A∩B\'), P(B∩A\'), P(A\'∩B\'), P(A|B), P(B|A), and complements. Each result displays with a unique Venn diagram visualization. Features automatic probability axiom validation, step-by-step calculation breakdown, and property checking for independence and mutual exclusivity. Handles dependent events, conditional relationships, and complex probability scenarios beyond simple independence.',
    icon: '',
    link: '/probability/calculators/two-events',
    linkTitle: 'Calculate Two Events Probability'
  },
  {
    id: 2,
    title: 'Three Events Probability Calculator',
    summary: 'Analyze complex probability scenarios involving three events with all combinations',
    content: 'Calculate probabilities for three events A, B, and C with comprehensive output covering all possible combinations. Computes: all three occurring P(A∩B∩C), at least one occurring, exactly one, exactly two, various pairwise intersections, unions, and complements. Supports both independent and dependent event scenarios. Visualizes three-way relationships with extended Venn diagrams. Perfect for advanced probability problems in statistics courses, multi-stage quality control processes, complex decision trees, or any scenario requiring analysis of three simultaneous or sequential events. Results include detailed breakdowns and formulas for each computed probability.',
    icon: '',
    link: '/probability/calculators/three-events',
    linkTitle: 'Calculate Three Events Probability'
  }
]


const discreteDistributionsCardsData = [
  {
    id: 1,
    title: 'Binomial Distribution Calculator',
    htmlId: 'binomial',
    summary: 'Fixed trials with success/failure outcomes and constant probability',
    content: 'Calculate binomial probabilities for n independent trials with constant success probability p. Input the number of trials, success probability, and choose probability type: P(X=k) for exact successes, P(X≤k) for at most k, or P(X≥k) for at least k successes. Displays complete probability mass function, mean μ=np, variance σ²=np(1-p), and distribution chart. Perfect for coin flips, quality control with fixed sample sizes, yes/no surveys, or any scenario with repeated independent trials and binary outcomes. Shows all probabilities from 0 to n successes when viewing full distribution.',
    icon: '',
    link: '/probability/calculators/discrete-distributions',
    linkTitle: 'Calculate Binomial'
  },
  {
    id: 2,
    title: 'Poisson Distribution Calculator',
    htmlId: 'poisson',
    summary: 'Model event counts occurring in fixed time or space intervals',
    content: 'Compute Poisson probabilities given average rate λ (lambda). Ideal for modeling rare events: customer arrivals per hour, defects per unit, emails per day, or radioactive decay counts. Input lambda (average rate) and target number of events k. Calculator provides P(X=k) and cumulative probabilities, plus mean μ=λ, variance σ²=λ (equal to mean), and standard deviation. Displays probability mass function chart showing distribution shape. Use when events occur independently at constant average rate with no upper limit on count.',
    icon: '⏱',
    link: '/probability/calculators/discrete-distributions',
    linkTitle: 'Calculate Poisson'
  },
  {
    id: 3,
    title: 'Geometric Distribution Calculator',
    htmlId: 'geometric',
    summary: 'Number of trials until first success in repeated Bernoulli trials',
    content: 'Calculate geometric probabilities for trials-until-success scenarios. Input success probability p to find the probability of first success occurring on trial k. Shows PMF P(X=k)=(1-p)^(k-1)×p, mean μ=1/p (expected trials until success), variance σ²=(1-p)/p², and distribution visualization. Classic applications include: quality control (items inspected until finding defect), sales (calls until first sale), or games (attempts until winning). Memoryless property means past failures don\'t affect future probability. Perfect for "how long until" questions with constant success probability.',
    icon: '',
    link: '/probability/calculators/discrete-distributions',
    linkTitle: 'Calculate Geometric'
  },
  {
    id: 4,
    title: 'Negative Binomial Calculator',
    summary: 'Trials needed to achieve r successes with failures counted',
    htmlId: 'negative-binomial',
    content: 'Generalization of geometric distribution for r successes instead of just one. Input r (target successes), p (success probability per trial), and k (number of failures before achieving r successes). Calculates probability of exactly k failures before r-th success using PMF with binomial coefficient. Shows mean μ=r(1-p)/p, variance σ²=r(1-p)/p², complete probability distribution, and chart. Applications include reliability testing (failures before r components work), customer acquisition (trials to get r conversions), or manufacturing (defects before producing r good units). More flexible than geometric for real-world scenarios requiring multiple successes.',
    icon: '',
    link: '/probability/calculators/discrete-distributions',
    linkTitle: 'Calculate Negative Binomial'
  },
  {
    id: 5,
    title: 'Hypergeometric Calculator',
    htmlId: 'hypergeometric',
    summary: 'Sampling without replacement from finite population with two types',
    content: 'Calculate probabilities when sampling without replacement—unlike binomial which assumes replacement. Input N (total population), K (success items in population), n (sample size drawn), and k (successes in sample). Uses hypergeometric PMF with three binomial coefficients. Shows mean μ=nK/N, variance (accounting for finite population correction), and full distribution. Essential for: card games (drawing specific cards from deck), quality control (selecting from finite batch), lottery probabilities, or survey sampling from small populations. Key difference from binomial: probability changes with each draw since items aren\'t replaced.',
    icon: '',
    link: '/probability/calculators/discrete-distributions',
    linkTitle: 'Calculate Hypergeometric'
  },
  {
    id: 6,
    title: 'Discrete Uniform Calculator',
    htmlId: 'discrete-uniform',
    summary: 'All integer values between minimum and maximum equally likely',
    content: 'Simplest discrete distribution where every outcome has equal probability. Input minimum value a and maximum value b to calculate uniform probabilities. Each value k in range [a,b] has probability P(X=k)=1/(b-a+1). Shows mean μ=(a+b)/2 (midpoint), variance σ²=((b-a+1)²-1)/12, and bar chart with equal-height bars. Classic example is fair die: a=1, b=6, each outcome probability=1/6. Use for lottery numbers, random selection scenarios, or any situation where all discrete outcomes are equally probable. Foundation for understanding more complex distributions.',
    icon: '',
    link: '/probability/calculators/discrete-distributions',
    linkTitle: 'Calculate Uniform'
  }
]


const continuousDistributionsCardsData = [
  {
    id: 1,
    title: 'Continuous Uniform Distribution Calculator',
     htmlId: 'continuous-uniform',
    summary: 'Equal probability density across a continuous interval with flat distribution',
    content: 'Calculate probabilities for continuous uniform distribution where every value between minimum a and maximum b has equal probability density. Input bounds a and b, then choose probability type: P(X<x), P(X>x), or P(x₁<X<x₂) for range probabilities. Shows PDF f(x)=1/(b-a) which is constant across the interval, mean μ=(a+b)/2 at the midpoint, and variance σ²=(b-a)²/12. Displays rectangular distribution chart with highlighted probability regions. Perfect for random number generation, modeling situations with no prior information where all values in range are equally likely, or when outcomes are truly random within bounds. Classic example: randomly selecting a point on a line segment.',
    icon: '',
    link: '/probability/calculators/continuous-distributions',
    linkTitle: 'Calculate Continuous Uniform'
  },
  {
    id: 2,
    title: 'Normal Distribution Calculator',
     htmlId: 'normal',
    summary: 'Bell curve distribution with mean and standard deviation parameters',
    content: 'Most important continuous distribution modeling natural phenomena and measurement errors. Input mean μ (center) and standard deviation σ (spread) to calculate probabilities for any value or range. Computes P(X<x), P(X>x), or P(x₁<X<x₂) with automatic Z-score calculation showing standardized values. Displays classic bell-shaped curve with mean marked and probability regions shaded. Shows 68-95-99.7 rule: 68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ. Essential for statistical inference, hypothesis testing, confidence intervals, and Central Limit Theorem applications. Use when data clusters symmetrically around mean with most values near center and fewer at extremes. Ubiquitous in: heights, test scores, measurement errors, and aggregated random variables.',
    icon: '',
    link: '/probability/calculators/continuous-distributions',
    linkTitle: 'Calculate Normal'
  },
  {
    id: 3,
    title: 'Exponential Distribution Calculator',
     htmlId: 'exponential',
    summary: 'Models waiting times and time between events in Poisson processes',
    content: 'Calculate probabilities for time until next event occurs given constant average rate λ. Input rate parameter λ (events per time unit) and query value x to find P(X<x), P(X>x), or range probabilities. Shows PDF f(x)=λe^(-λx) with characteristic decreasing exponential curve, mean μ=1/λ (average wait time), and variance σ²=1/λ². Key feature: memoryless property where P(X>s+t|X>s)=P(X>t)—past waiting doesn\'t affect future probability. Perfect for: time until next customer arrival, component failure times, radioactive decay intervals, time between earthquakes, or service completion times. Complement to Poisson distribution: if events follow Poisson process with rate λ, time between events follows exponential with same λ.',
    icon: '',
    link: '/probability/calculators/continuous-distributions',
    linkTitle: 'Calculate Exponential'
  }
]




  const faqQuestions = {
    obj1: {
      question: "Which probability calculator should I use for my problem?",
      answer: "Start by identifying your scenario type. Use the Basic Calculators for single outcomes or two independent events. Use Two/Three Events Calculators when analyzing multiple events with potential dependencies. Choose Distribution Calculators when working with specific probability distributions (binomial, normal, etc.). Use Conditional Probability for 'given that' scenarios, and Bayes' Theorem when updating probabilities with new evidence."
    },
    obj2: {
      question: "What's the difference between discrete and continuous probability calculators?",
      answer: "Discrete calculators work with countable outcomes (number of successes, number of events) and use distributions like binomial or Poisson. Continuous calculators handle measurable quantities that can take any value in a range (time, weight, height) and use distributions like normal or exponential. If you can count your outcomes, use discrete; if you're measuring something, use continuous."
    },
    obj3: {
      question: "When do I need conditional probability versus joint probability?",
      answer: "Use conditional probability when one event has already occurred and you want the probability of another event given that information (P(A|B) - 'A given B'). Use joint probability when you need the probability of both events occurring together, without assuming one has already happened (P(A ∩ B) - 'A and B together')."
    },
    obj4: {
      question: "Can these calculators help me learn probability or are they just for computing answers?",
      answer: "These calculators serve both purposes. They provide accurate computations for homework and real-world problems, but many also show step-by-step explanations of the formulas and logic. Use them to verify your manual calculations, explore how probability changes with different inputs, and build intuition about probability relationships through interactive experimentation."
    },
    obj5: {
      question: "What is expected value and when should I calculate it?",
      answer: "Expected value is the long-run average outcome of a probability scenario. Calculate it when making decisions involving uncertain outcomes, such as evaluating gambling games, comparing investment options, pricing insurance, or any situation where you need to know the average result across many repetitions of a random process."
    }
  }


  const jointConditionalCardsData = [
  {
    id: 1,
    title: 'Joint Probability Calculator',
    summary: 'Calculate probability of two or more events occurring together simultaneously',
    content: 'Compute joint probabilities P(A∩B) representing both events A and B happening together. Input marginal probabilities P(A) and P(B), then specify relationship: independent events where P(A∩B)=P(A)×P(B), or provide direct joint probability for dependent events. Calculator shows all combinations: P(A∩B) both occurring, P(A∩B\') only A occurring, P(A\'∩B) only B occurring, P(A\'∩B\') neither occurring. Displays 2×2 contingency table with joint probabilities in cells and marginal totals in rows/columns. Automatically calculates conditional probabilities P(A|B) and P(B|A) from joint values. Verifies probability axioms: all values non-negative, total sums to 1. Essential for understanding event relationships, building probability tables, analyzing survey data with multiple categories, or working with bivariate distributions. Foundation for more complex multivariate probability problems.',
    icon: '',
    link: '/probability/calculators/joint-probability',
    linkTitle: 'Calculate Joint Probability'
  },
  {
    id: 2,
    title: 'Conditional Probability Calculator',
    summary: 'Find probability of event A occurring given that event B has already occurred',
    content: 'Calculate conditional probability P(A|B) using the fundamental formula P(A|B)=P(A∩B)/P(B). Multiple input modes: (1) provide P(A∩B) and P(B) directly for immediate calculation, (2) input P(A), P(B), and specify independence for P(A|B)=P(A), or (3) enter P(A), P(B|A) to work backward finding P(A|B) via Bayes\' theorem. Shows step-by-step calculations with formula breakdowns. Displays both P(A|B) and P(B|A) to illustrate asymmetry—conditioning on different events yields different probabilities. Includes Venn diagram visualization showing restricted sample space: when given B occurred, only consider outcomes within B, find what fraction also includes A. Critical for: medical test interpretation (probability of disease given positive test), quality control (defect probability given supplier), risk assessment, and any scenario where new information changes probability estimates. Foundation for Bayesian inference.',
    icon: '',
    link: '/probability/calculators/conditional-probability',
    linkTitle: 'Calculate Conditional Probability'
  }
]


const multipleEventsCardsData = [
  {
    id: 1,
    title: 'Two Events Probability Calculator',
    summary: 'Comprehensive calculator for all two-event probability scenarios with five modes',
    content: 'Advanced calculator supporting five calculation modes for events A and B: Independent (P(A)×P(B)), Conditional (using P(A|B) or P(B|A)), Intersection (given P(A∩B)), Union (given P(A∪B)), and Mutually Exclusive (P(A∩B)=0). Computes all probability combinations including P(A∩B), P(A∪B), P(A∩B\'), P(B∩A\'), P(A\'∩B\'), P(A|B), P(B|A), and complements. Each result displays with unique Venn diagram visualization showing probability regions. Features automatic probability axiom validation ensuring results satisfy 0≤P≤1 and sum rules. Provides step-by-step calculation breakdown showing formulas used. Checks independence property: P(A∩B)=P(A)×P(B) and mutual exclusivity: P(A∩B)=0. Handles dependent events, conditional relationships, and complex probability scenarios beyond simple independence. Essential for advanced probability problems, statistical inference, and real-world applications involving event interactions.',
    icon: '',
    link: '/probability/calculators/two-events',
    linkTitle: 'Calculate Two Events'
  },
  {
    id: 2,
    title: 'Three Events Probability Calculator',
    summary: 'Analyze complex probability scenarios involving three events with all combinations',
    content: 'Calculate probabilities for three events A, B, and C with comprehensive output covering all possible combinations. Computes: all three occurring P(A∩B∩C), at least one occurring P(A∪B∪C), exactly one event, exactly two events, various pairwise intersections P(A∩B), P(A∩C), P(B∩C), two-way unions, three-way unions, and all complement combinations. Supports both independent event scenarios where P(A∩B∩C)=P(A)×P(B)×P(C) and dependent relationships requiring additional conditional probabilities. Visualizes three-way relationships with extended Venn diagrams showing seven distinct regions plus exterior. Displays complete probability table with marginal, joint, and conditional probabilities. Perfect for advanced probability problems in statistics courses, multi-stage quality control processes analyzing multiple inspection points, complex decision trees with three decision factors, or any scenario requiring analysis of three simultaneous or sequential events. Results include detailed breakdowns and formulas for each computed probability.',
    icon: '',
    link: '/probability/calculators/three-events',
    linkTitle: 'Calculate Three Events'
  }
]


const bayesCalculatorCardsData = [
  {
    id: 1,
    title: 'Bayes\' Theorem Calculator',
    summary: 'Update probabilities with new evidence using Bayesian inference framework',
    content: 'Calculate posterior probability P(A|B) using Bayes\' theorem: P(A|B)=P(B|A)×P(A)/P(B). Input prior probability P(A) representing initial belief before evidence, likelihood P(B|A) showing probability of evidence given hypothesis is true, and evidence probability P(B) or alternative form with P(B|A\') for complement. Calculator automatically computes posterior probability showing updated belief after observing evidence. Displays complete Bayes formula breakdown with numerator P(B|A)×P(A) and denominator P(B)=P(B|A)×P(A)+P(B|A\')×P(A\'). Shows sensitivity analysis: how posterior changes as prior or likelihood varies. Includes visualization tree diagram illustrating probability flow from prior through likelihood to posterior. Essential for: medical diagnosis (disease probability given test result), spam filtering (spam probability given word presence), quality control (defect source probability given inspection result), machine learning classification, and any problem requiring belief updating with new information. Foundation of Bayesian statistics and probabilistic reasoning.',
    icon: '',
    link: '/probability/calculators/bayes-calculator',
    linkTitle: 'Calculate Bayes\' Theorem'
  }
]


const expectedValueCardsData = [
  {
    id: 1,
    title: 'Direct Data Expected Value Calculator',
    summary: 'Work with probability distribution tables where each outcome has its known probability',
    content: 'This calculator handles the classic probability table format: you have distinct values and know exactly how likely each one is. Enter your value-probability pairs to get the weighted average by multiplying each outcome by its probability and summing everything. Shows complete breakdown with each term displayed, automatic verification that probabilities sum to 1, and step-by-step formula application. Perfect for dice games, lottery analysis, risk assessments, or any discrete scenario where outcomes and chances are clearly defined. Includes bar chart visualization marking where expected value falls within your distribution.',
    icon: '',
    link: '/probability/calculators/expected-value/direct-data',
    linkTitle: 'Calculate Direct Data'
  },
  {
    id: 2,
    title: 'Raw Data Expected Value Calculator',
    summary: 'Find the mean from actual observed data points without any preprocessing',
    content: 'Paste your list of numbers from experiments, surveys, or measurements. Calculator automatically tallies values and divides by count for the arithmetic mean. Accepts comma-separated or line-break format. Displays sample size n, sum, calculated mean, sorted data view, and auto-generated frequency table showing which values appeared most. Works with ungrouped raw observations: test scores, sensor readings, response times, individual data points rather than pre-summarized statistics. Includes histogram visualization and descriptive stats like median, mode, and range.',
    icon: '',
    link: '/probability/calculators/expected-value/raw-data',
    linkTitle: 'Calculate Raw Data'
  },
  {
    id: 3,
    title: 'Grouped Data Expected Value Calculator',
    summary: 'Handle frequency distributions organized into class intervals with counts per bin',
    content: 'For data pre-organized into ranges like income brackets, age groups, or score intervals, this finds the mean using class midpoints. Provide boundaries for each interval and observation counts per bin. Tool determines midpoints, multiplies by frequencies, sums products, divides by total count. Detailed table shows intervals, midpoints, frequencies, and products driving the calculation. Essential for large datasets already binned or published statistics in grouped form. Assumes uniform distribution within intervals, approximating true mean. Includes cumulative and relative frequency displays.',
    icon: '',
    link: '/probability/calculators/expected-value/grouped-data',
    linkTitle: 'Calculate Grouped Data'
  },
  {
    id: 4,
    title: 'Discrete Uniform Expected Value Calculator',
    summary: 'All integer outcomes between minimum and maximum share equal probability',
    content: 'Simplest discrete distribution where every integer from a to b is equally likely. Enter minimum and maximum for expected value at their midpoint using formula E[X]=(a+b)/2. With n equally likely outcomes each having probability 1/n, average sits right in middle. Shows instant midpoint formula and verification by summing all values divided by count. Used for fair die rolls, random integer selection in range, lottery draws from consecutive numbers. Perfect symmetry: expected value always lands exactly halfway between bounds. Includes flat probability mass function visualization.',
    icon: '',
    link: '/probability/calculators/expected-value/discrete-uniform',
    linkTitle: 'Calculate Discrete Uniform'
  },
  {
    id: 5,
    title: 'Binomial Expected Value Calculator',
    summary: 'Fixed independent trials with constant success probability yield E[X]=np',
    content: 'For n independent trials each with success probability p, expected successes equal n×p. Enter trial count and probability for instant result. Underlying math summing k×P(X=k) over all k collapses through binomial theorem to np. Intuitive interpretation: run n trials where each succeeds with probability p, expect p proportion to succeed giving np total. Applications include quality control for expected defects, surveys for expected positive responses, coin flip experiments, repeated success-failure scenarios. Display includes variance np(1-p) and standard deviation for complete distribution characterization.',
    icon: '',
    link: '/probability/calculators/expected-value/binomial',
    linkTitle: 'Calculate Binomial'
  },
  {
    id: 6,
    title: 'Geometric Expected Value Calculator',
    summary: 'Average trials until first success equals 1/p in memoryless process',
    content: 'Performing independent trials until first success? Geometric distribution gives expected wait as E[X]=1/p where p is success probability per trial. If p=0.2, expect 5 trials on average. Infinite series telescopes to this simple reciprocal form. Classic cases: attempts until first sale, trials until equipment breaks, plays until winning game, waiting for rare events. Unique memoryless property for discrete processes where past failures do not influence remaining expected wait. Shows variance (1-p)/p², exponentially decreasing probability mass function, and extension to negative binomial for multiple successes.',
    icon: '',
    link: '/probability/calculators/expected-value/geometric',
    linkTitle: 'Calculate Geometric'
  },
  {
    id: 7,
    title: 'Negative Binomial Expected Value Calculator',
    summary: 'Expected failures before achieving r successes using r(1-p)/p formula',
    content: 'Extends geometric thinking to multiple successes: collecting r successes while counting expected failures along the way. Enter target success count r and probability p for E[X]=r(1-p)/p showing average failures accumulated. Definition counts failures before r-th success, not total trials. When r=1, reduces to geometric case. Expectation scales linearly with r: doubling success target doubles expected failures. Applications in reliability testing needing r working components, sales requiring r conversions, quality control producing r acceptable units. Includes variance r(1-p)/p² and comparison with binomial approach.',
    icon: '',
    link: '/probability/calculators/expected-value/negative-binomial',
    linkTitle: 'Calculate Negative Binomial'
  },
  {
    id: 8,
    title: 'Hypergeometric Expected Value Calculator',
    summary: 'Sampling without replacement gives E[X]=n(K/N) for expected successes',
    content: 'Drawing items from finite population without replacement changes individual probabilities each draw, yet expected value formula stays simple: E[X]=n×(K/N) where n is sample size, K is success items in population N. Just sample size times success proportion. If K/N of population are successes, expect same fraction in sample regardless of replacement method. When N is large relative to n or sampling with replacement, hypergeometric approaches binomial with p=K/N. Essential for card probabilities, quality inspection of batch samples, ecological recapture studies. Variance includes finite population correction factor with probability mass function for specific parameters.',
    icon: '',
    link: '/probability/calculators/expected-value/hypergeometric',
    linkTitle: 'Calculate Hypergeometric'
  },
  {
    id: 9,
    title: 'Poisson Expected Value Calculator',
    summary: 'Rate parameter λ equals both mean and variance in this distribution',
    content: 'Special Poisson property: expected value equals defining parameter λ. Enter rate λ for events per interval and E[X]=λ. Parameter determining distribution is also its mean. Unique feature: variance also equals λ, making mean and variance identical. Derivation sums k×P(X=k) from k=0 to infinity yielding λ through exponential series. Models rare event counts: customer arrivals per hour, defects per unit, emails per day, radioactive decays per second. Parameter λ represents both average rate and expected count for fixed intervals. Related to exponential distribution where time between Poisson events follows exponential with same λ.',
    icon: '',
    link: '/probability/calculators/expected-value/poisson',
    linkTitle: 'Calculate Poisson'
  },
  {
    id: 10,
    title: 'Continuous Uniform Expected Value Calculator',
    summary: 'Flat probability density across interval means expected value at midpoint',
    content: 'Continuous uniform distribution on [a,b] with constant density gives expected value at midpoint E[X]=(a+b)/2. Enter bounds to see this symmetry. Integral of x×f(x) from a to b with f(x)=1/(b-a) yields midpoint through standard integration. Uniform density giving equal weight everywhere means expected value balances at center. Models complete uncertainty within bounds: random points on line segments, unknown arrival times within windows, measurement errors within tolerance ranges. Same midpoint formula applies to both discrete integer ranges and continuous intervals. Rectangular density visualization shows uniformity with variance (b-a)²/12.',
    icon: '',
    link: '/probability/calculators/expected-value/continuous-uniform',
    linkTitle: 'Calculate Continuous Uniform'
  },
  {
    id: 11,
    title: 'Exponential Expected Value Calculator',
    summary: 'Average waiting time until next event equals 1/λ reciprocal of rate',
    content: 'Exponential distribution models continuous waiting times with expected value E[X]=1/λ where λ is rate parameter. If λ=2 events per hour, expect 0.5 hours between events. Integral of x×λe^(-λx) from 0 to infinity yields 1/λ through integration by parts. Duality with Poisson: if Poisson has rate λ events per hour, exponential gives hours per event as 1/λ. Memoryless property unique to continuous distributions where past waiting does not affect remaining expected wait. Models customer arrival times, component lifetimes, earthquake intervals, radioactive decay times. Variance 1/λ² gives standard deviation equal to mean.',
    icon: '',
    link: '/probability/calculators/expected-value/exponential',
    linkTitle: 'Calculate Exponential'
  },
  {
    id: 12,
    title: 'Normal Distribution Expected Value Calculator',
    summary: 'Expected value equals mean parameter μ defining distribution center',
    content: 'Normal distribution expected value trivially equals mean parameter: E[X]=μ. Enter mean μ to see expected value as center parameter defining distribution location. Normal defined by two parameters μ for mean and σ for standard deviation, with expected value being first defining characteristic. Bell curve symmetric around μ means expected value at center point. Integral verification through symmetry and substitution confirms E[X]=μ. Most important continuous distribution via Central Limit Theorem where sample means approach normal with expected value equal to population mean. Applications in heights, test scores, measurement errors. Visualization shows bell curve centered at μ with standard deviation markers.',
    icon: '',
    link: '/probability/calculators/expected-value/normal',
    linkTitle: 'Calculate Normal'
  }
]

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Probability Calculator Suite",
      "description": "Comprehensive collection of 10 interactive probability calculators for single events, multiple events, distributions, conditional probability, Bayes' theorem, and expected value.",
      "url": "https://www.learnmathclass.com/probability/calculators",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Single event probability calculator with visual representations",
        "Two and three independent events calculators with Venn diagrams",
        "Discrete probability distributions (binomial, Poisson, geometric, hypergeometric)",
        "Continuous probability distributions (normal, exponential, uniform)",
        "Conditional probability calculator for dependent events P(A|B)",
        "Joint probability calculator for simultaneous events P(A ∩ B)",
        "Bayes' theorem calculator for probability updating with evidence",
        "Expected value calculator with variance and standard deviation",
        "Step-by-step solutions with formula explanations",
        "Interactive parameter adjustment with real-time visual updates"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College, University",
      "keywords": keyWords.join(", ")
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Probability",
          "item": "https://www.learnmathclass.com/probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Probability Calculators",
          "item": "https://www.learnmathclass.com/probability/calculators"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }

  return {
    props: {
      miniCards,
      staticCardsData,
      faqQuestions,
      schemas,
      basicCardsData,
      twoThreeEventsCardsData,
      discreteDistributionsCardsData,
      continuousDistributionsCardsData,
      jointConditionalCardsData,
      multipleEventsCardsData,
      bayesCalculatorCardsData,
      expectedValueCardsData,
      seoData: {
        title: "Probability Calculators - 10 Free Interactive Tools | Learn Math Class",
        description: "Calculate probabilities instantly with 10 specialized calculators: single events, multiple events, distributions, conditional probability, Bayes' theorem, and expected value.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators",
        name: "Probability Calculator Suite"
      }
    }
  }
}

export default function ProbabilityCalculatorsHub({seoData, miniCards, staticCardsData, faqQuestions, schemas,
  basicCardsData,twoThreeEventsCardsData,discreteDistributionsCardsData,continuousDistributionsCardsData,
  jointConditionalCardsData,multipleEventsCardsData,bayesCalculatorCardsData,expectedValueCardsData,
}) {


  

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.webApplication)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.breadcrumb)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.faq)
          }}
        />
      </Head>

      <br/>
      <br/>
      <br/>
      <br/>
      
      <OperaSidebar 
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      
      <Breadcrumb/>
      <br/>
      <br/>
      
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'40px'}}>Probability Calculators</h1>
      
      {/* MiniCards Navigation - Anchor links to sections below */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <MiniCardGroup cards={miniCards}  iconMap={iconMap}/>
      </div>

      <br/>
      <br/>
      <br/>

      {/* StaticCards Content - Each section with anchor ID */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        
        <div id="basic-calculators" style={{scrollMarginTop: '100px'}}>
          <StaticCards cards={basicCardsData} theme="elegant" layout="grid" />
        </div>
        <br/>
        
        <div id="two-three-events" style={{scrollMarginTop: '100px'}}>
          <StaticCards cards={twoThreeEventsCardsData} theme="elegant" layout="grid" />
        </div>
        <br/>
        
        <div id="three-events" style={{scrollMarginTop: '100px'}}>
          <StaticCards cards={discreteDistributionsCardsData} theme="elegant" layout="grid"  />
        </div>
        <br/>
        
        <div id="distributions" style={{scrollMarginTop: '100px'}}>
          <StaticCards cards={continuousDistributionsCardsData} theme="elegant" layout="list" />
        </div>
        <br/>
        
        <div id="conditional-joint" style={{scrollMarginTop: '100px'}}>
          <StaticCards cards={jointConditionalCardsData} theme="elegant" layout="grid" />
        </div>
        <br/>
        
        <div id="joint-probability" style={{scrollMarginTop: '100px'}}>
          <StaticCards cards={multipleEventsCardsData} theme="elegant" layout="grid" />
        </div>
        <br/>
        
        <div id="bayes-theorem" style={{scrollMarginTop: '100px'}}>
          <StaticCards cards={bayesCalculatorCardsData} theme="elegant" layout="list" />
        </div>
        <br/>
        
        <div id="expected-value" style={{scrollMarginTop: '100px'}}>
          <StaticCards cards={expectedValueCardsData} theme="elegant" layout="grid" />
        </div>
        <br/>
        <br/>
        
        {/* <StaticCards cards={staticCardsData.whyUse} theme="elegant" layout="grid" />
        <br/>
        
        <StaticCards cards={staticCardsData.relatedResources} theme="elegant" layout="grid" /> */}
        
      </div>

      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}