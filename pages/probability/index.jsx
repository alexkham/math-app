import React from 'react'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head';
import { createContentHtml } from '@/app/utils/utils-functions'
import MyList from '@/app/components/page-components/lists/MyList'
import TreeStructure2 from '@/app/components/tree-structure/TreeItem2'
import { probabilityConceptsData } from '@/app/api/db/diagrams/probability/concepts'
import { setsProbabilityData } from '@/app/api/db/diagrams/probability/setsProbability'
import { probabilityFunctionData } from '@/app/api/db/diagrams/probability/probabilityFunction'
import StaticCards from '@/app/components/cards/static-cards/StaticCards'

export async function getStaticProps() {
  const { default: probabilityFormulasList } = await import('@/app/api/db/formulas/probability/probabilityFormulasList')
  const { default: probabilityTermsList } = await import('@/app/api/db/definitions/probability/probabilityDefinitions')
  

  // const probabilityTOCTreeData = {
  //   "Introduction to Probability": {
  //     explanation: "Foundation concepts and historical development of probability theory",
  //     url: "/probability/introduction"
  //   },
  //   "Basic Definitions & Notation": {
  //     "Sample Space": {
  //       explanation: "The set of all possible outcomes of a random experiment",
  //       url: "/probability/sample-space"
  //     },
  //     "Events": {
  //       explanation: "Subsets of the sample space representing outcomes of interest",
  //       url: "/probability/events"
  //     },
  //     "Axioms of Probability": {
  //       explanation: "The fundamental mathematical rules that define probability measures",
  //       url: "/probability/axioms"
  //     }
  //   },
  //   "Probability Rules": {
  //     "Complement Rule": {
  //       explanation: "P(A^c) = 1 - P(A) for any event A",
  //       url: "/probability/complement-rule"
  //     },
  //     "Addition Rule": {
  //       explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
  //       url: "/probability/addition-rule"
  //     },
  //     "Inclusion–Exclusion Principle": {
  //       explanation: "Generalization of addition rule for multiple events",
  //       url: "/probability/inclusion-exclusion"
  //     },
  //     "Monotonicity & Boole's Inequality": {
  //       explanation: "If A ⊆ B, then P(A) ≤ P(B); P(∪Ai) ≤ ΣP(Ai)",
  //       url: "/probability/monotonicity-boole"
  //     },
  //     "Multiplication & Chain Rules": {
  //       explanation: "P(A ∩ B) = P(A|B)P(B) and its generalizations",
  //       url: "/probability/multiplication-chain"
  //     },
  //     "Law of Total Probability": {
  //       explanation: "P(A) = ΣP(A|Bi)P(Bi) for partition {Bi}",
  //       url: "/probability/total-probability"
  //     },
  //     "Bayes' Theorem": {
  //       explanation: "P(A|B) = P(B|A)P(A) / P(B) - updating beliefs with evidence",
  //       url: "/probability/bayes-theorem"
  //     }
  //   },
  //   "Classical / Combinatorial Probability": {
  //     "Equally-likely models (Laplace's rule)": {
  //       explanation: "P(A) = |A| / |S| when all outcomes are equally likely",
  //       url: "/probability/laplace-rule"
  //     },
  //     "Permutations vs. Combinations": {
  //       explanation: "Counting arrangements (order matters) vs selections (order doesn't matter)",
  //       url: "/probability/permutations-combinations"
  //     },
  //     "Ordered vs. Unordered Draws": {
  //       explanation: "Sampling with and without regard to sequence",
  //       url: "/probability/ordered-unordered"
  //     },
  //     "Counting Tools: Factorials & Binomial Coefficients": {
  //       explanation: "n! and C(n,k) = n!/(k!(n-k)!) for combinatorial calculations",
  //       url: "/probability/counting-tools"
  //     }
  //   },
  //   "Discrete Probability Distributions": {
  //     "Uniform": {
  //       explanation: "All outcomes have equal probability: P(X = k) = 1/n",
  //       url: "/probability/discrete-uniform"
  //     },
  //     "Binomial": {
  //       explanation: "Number of successes in n trials: P(X = k) = C(n,k)p^k(1-p)^(n-k)",
  //       url: "/probability/binomial"
  //     },
  //     "Poisson": {
  //       explanation: "Rare events in fixed intervals: P(X = k) = λ^k e^(-λ) / k!",
  //       url: "/probability/poisson"
  //     },
  //     "Geometric": {
  //       explanation: "Number of trials until first success: P(X = k) = (1-p)^(k-1)p",
  //       url: "/probability/geometric"
  //     }
  //   },
  //   "Continuous Probability Distributions": {
  //     "Uniform": {
  //       explanation: "Constant density over interval [a,b]: f(x) = 1/(b-a)",
  //       url: "/probability/continuous-uniform"
  //     },
  //     "Normal (Gaussian)": {
  //       explanation: "Bell curve distribution: f(x) = (1/σ√(2π))e^(-(x-μ)²/(2σ²))",
  //       url: "/probability/normal"
  //     },
  //     "Exponential": {
  //       explanation: "Time between events: f(x) = λe^(-λx) for x ≥ 0",
  //       url: "/probability/exponential"
  //     },
  //     "Gamma & Beta": {
  //       explanation: "Flexible distributions for positive values and proportions",
  //       url: "/probability/gamma-beta"
  //     }
  //   },
  //   "Conditional Probability & Independence": {
  //     "Overview": {
  //       explanation: "P(A|B) = P(A∩B)/P(B) and when P(A|B) = P(A)",
  //       url: "/probability/conditional-independence"
  //     }
  //   },
  //   "Expectation & Variance": {
  //     "Overview": {
  //       explanation: "E[X] = Σx P(X=x) and Var(X) = E[(X-μ)²] - measures of center and spread",
  //       url: "/probability/expectation-variance"
  //     }
  //   },
  //   "Limit Theorems": {
  //     "Law of Large Numbers": {
  //       explanation: "Sample averages converge to expected value as n → ∞",
  //       url: "/probability/law-large-numbers"
  //     },
  //     "Central Limit Theorem": {
  //       explanation: "Sample means approach normal distribution regardless of population distribution",
  //       url: "/probability/central-limit-theorem"
  //     }
  //   },
  //   "Stochastic Processes & Markov Chains": {
  //     "Overview": {
  //       explanation: "Random processes evolving over time, memoryless property",
  //       url: "/probability/stochastic-markov"
  //     }
  //   },
  //   "Applications & Case Studies": {
  //     "Overview": {
  //       explanation: "Real-world problems solved using probability theory",
  //       url: "/probability/applications"
  //     }
  //   },
  //   "Interactive Simulations & Tools": {
  //     "Overview": {
  //       explanation: "Computational tools for exploring probability concepts",
  //       url: "/probability/simulations"
  //     }
  //   },
  //   "Exercises & Assessments": {
  //     "Overview": {
  //       explanation: "Practice problems and evaluation materials",
  //       url: "/probability/exercises"
  //     }
  //   }
  // };

  
  const probabilityRulesTreeData = {
    "Basic Axiomatic Properties": {
      "Non-negativity & Bounds": {
        url: "/probability/rules#basic",
        explanation: "The probability of any event lies between 0 and 1, inclusive."
      },
      "Empty-Set Rule": {
        url: "/probability/rules#basic",
        explanation: "The probability of the empty event (impossible outcome) is zero."
      }
    },
  
    "Set-Operation Rules": {
      "Complement Rule": {
        url: "/probability/rules#set",
        explanation: "The probability of the complement of A equals one minus the probability of A."
      },
      "Difference Rule": {
        url: "/probability/rules#set",
        explanation: "The probability of A without B equals P(A) minus P(A ∩ B)."
      },
      "Subset Absorption": {
        url: "/probability/rules#set",
        explanation: "If B ⊆ A, then A ∩ B has probability P(B) and A ∪ B has probability P(A)."
      },
      "Complement Absorption": {
        url: "/probability/rules#set",
        explanation: "If A ⊆ Bᶜ, then A ∩ Bᶜ has probability P(A) and A ∪ Bᶜ has probability P(Bᶜ)."
      },
      "Mutual Exclusivity": {
        url: "/probability/rules#set",
        explanation: "If A ∩ B = ∅, then P(A ∩ B)=0 and P(A ∪ B)=P(A)+P(B)."
      }
    },
  
    "Additive & Inequality Rules": {
      "Addition Rule": {
        url: "/probability/rules#additive",
        explanation: "P(A ∪ B) equals P(A) + P(B) minus P(A ∩ B)."
      },
      "Inclusion–Exclusion Principle": {
        url: "/probability/rules#additive",
        explanation: "General method for P(⋃Ai) by alternately adding and subtracting intersections."
      },
      "Monotonicity & Boole’s Inequality": {
        url: "/probability/rules#additive",
        explanation: "If A ⊆ B then P(A)≤P(B), and P(⋃Ai)≤∑P(Ai)."
      }
    },
  
    "Multiplicative & Conditional Rules": {
      "Multiplication & Chain Rules": {
        url: "/probability/rules#multy",
        explanation: "Compute joint probabilities via P(A ∩ B)=P(B)P(A|B) and its n-term extension."
      },
      "Law of Total Probability": {
        url: "/probability/rules#multy",
        explanation: "Express P(A) as a weighted sum over a partition: ∑P(A|Bi)P(Bi)."
      },
      "Bayes’ Theorem": {
        url: "/probability/rules#multy",
        explanation: "Relates P(B|A) to P(A|B) and the prior probabilities P(B) and P(A)."
      }
    }
  };
  

  
  

   const sectionContent = {
      formulas: {
        title: 'Probability Formulas',
        description: 'Visit Probability formulas page',
        leftContentHtml: createContentHtml({ 
          description: 'This page presents essential probability formulas organized by categories, ranging from basic principles to advanced distributions. Each formula includes detailed explanations, example calculations, and practical use cases, making it a helpful resource for students and practitioners working with probability theory and statistical analysis.', 
          // link: '/probability/formulas',
          // linkText: 'View All Formulas',
          height:'350px',
          backgroundColor:'#f2f2f2',
          
        }),
        layout: 'horizontal',
      },
      definitions: {
        title: 'Probability Terms and Definitions',
        description: '@academic[theorem:Browse Probability terminology including main concepts and their definitions with examples .A structured guide to probability theory terms and concepts, progressing from foundational definitions through set theory, random variables, and complex distributions. The content covers both theoretical aspects and practical applications, making probability concepts more accessible for study and reference.]@',
        rightContentHtml: createContentHtml({ 
          description: 'Browse Probability terminology including main concepts and their definitions with examples .A structured guide to probability theory terms and concepts, progressing from foundational definitions through set theory, random variables, and complex distributions. The content covers both theoretical aspects and practical applications, making probability concepts more accessible for study and reference.',
          // link: '/probability/definitions',
          // linkText: 'View All Definitions',
          height:'350px',
          backgroundColor:'#f2f2f2',
        }),
        layout: 'horizontal'
      },
      concepts:{
        title:'Main Concepts',
        description:`@academic[theorem: The Sample Space (Ω), is the collection of all different results that the experiment may produce.]@
        The [sample space](!/probability/sample-space) can be **finite** (for example, in the dice‐rolling scenario or coin flipping) or **infinite** (for instance, selecting a real number).
        In addition, we may divide [sample spaces](!/probability/sample-space) by outcome types into  **discrete** or **continuous**.
        Often times, defining or calculating proper [sample space](!/probability/sample-space) for any given case may pose sertious challenge and demands experience and certain analytic skills.
         Although in the case of a dice roll the collection of possible outcomes may seem self‐evident, the sample space plays an important role in conducting more complex experiments. Typically, a researcher will take the sample space and partition it into subsets in order to draw various conclusions.
       In any practical application, accurately defining the sample space is essential to solving probability problems.
        
       In probability theory, the objects to which probabilities are assigned are called [events](!/probability/events).
By definition, an [event](!/probability/events) is any subset of the [sample space](!/probability/sample-space). This includes single outcomes, collections of outcomes, the empty set, and the entire sample space itself.
       @academic[theorem:Probability Event is simply any subset of the sample space.]@
         **Example:**
   In case of dice roll the sample space would be $S = \\{1, 2, 3, 4, 5, 6\\}$
   **Some possible events:**
 Event $A = \\{2, 4, 6\\}$ (rolling an even number)
 Event $B = \\{5\\}$ (rolling exactly 5)
 Event $C = \\{1, 2, 3, 4, 5, 6\\}$ (any outcome - certain event)
 Event $D = \\{\\}$ (impossible event)
 As the definition states and the example shows, [probability event](!/probability/events) may include one or more outcomes.It is a set of results counting as one event.         
 @academic[theorem:Probability is a function that assigns to each event in the sample space a real number in $[0,1]$ where total probability value of the entire sample space $𝑃(𝑆)=1$.]@
 @academic[theorem:This number is calculated as a ratio $P(E) = \\frac{\\text{Number of favorable outcomes for event E}}{\\text{Total number of possible outcomes in the sample space S}}$]@
 Probability function satisfies three basic [axioms](!/probability#axioms) of probability.
 `
         
      },
      set:{
        title:`Set Theory & Event Algebra`,
        content:`
This apparent contradiction reveals why probability theory fundamentally operates with [sets](!/set-theory) rather than isolated points. We don't manipulate individual outcomes; instead, we work with collections or groups of outcomes. An event isn't a single dot—it's a [set](!/set-theory) of possible outcomes that satisfy our condition of interest.

This set-theoretic foundation makes perfect sense: when we ask "what's the probability of rolling an even number on a die," we're really asking about the set $ \\{2, 4, 6\\}$, not about individual outcomes in isolation.

By treating [events](!/probability/events) as sets, we gain access to the full power of [set theory](!/set-theory) and algebra of sets laws for probability calculations. This mathematical framework provides elegant tools for combining and manipulating events—operations like union and intersection become natural ways to express complex probabilistic relationships, while concepts such as subsets and complements offer systematic approaches to analyzing event dependencies and exclusions.
`,
        before:`When we conceptualize probability, we naturally think of [sample spaces](!/probability#concepts) as collections of individual outcomes—dots scattered across our mathematical landscape.`,
        between:`However, this intuitive picture presents a fundamental challenge: if we treat each outcome as a geometric point, it has zero area by definition.
        @academic[example:Consider the classical probability formula:
         $P(E) = \\frac{\\text{Number of favorable outcomes for event E}}{\\text{Total number of possible outcomes in the sample space S}}$.
         If we literally counted individual points (dots), each with zero "probability mass," we'd face the paradox that every single outcome has probability zero, yet their sum must equal one.]@`,
        after:`To visualize these relationships between events-as-sets, we use [Venn diagrams](!/set-theory/venn-generator)—powerful tools that illustrate unions, intersections, complements, and other set operations that form the algebraic backbone of probability theory.`,
        svg:``

      },
      axioms:{
        title:`Basic Axioms of Probability`,
        link:'/probability/axioms',
        description:`The three Kolmogorov axioms provide a minimal yet complete framework for assigning consistent probabilities to events, laying the groundwork for all of probability theory.  From these principles flow essential rules—such as the addition rule for disjoint events, the definition of conditional probability, and Bayes’ theorem—as well as many useful corollaries that drive rigorous problem‐solving in statistics, science, and engineering.
`

      },

      rules:{
        title:`Rules of Probability`,
        link:`/probability/rules`,
        before:`Probability rules translate the [axioms](!/probability#axioms) of probability into practical tools for quantifying uncertainty. By systematically combining events—through complements, unions, intersections, and conditioning—they form the backbone of both classical (combinatorial) analyses and more advanced topics.`,
        after:`With these rules in hand, you’re ready to tackle sections on combinatorial models, discrete and continuous distributions, conditional probability, Bayesian inference, and beyond. Refer back to our overall probability breakdown to see how each subtopic weaves together in your learning journey.`

      },
      combinatorial:{
        title:' Combinatorial Probability',
        link:'',
        before:``,
        after:``,
        description:`**Why Combinatorial Counting Remains Essential**
Even with powerful general tools—[probability distributions](!/probability#distributions), [conditional‐probability](!/probability#conditional) identities, and [set algebra theorems](!/probability#set)—the direct application of [combinatorial](!/combinatorics) principles is often the most effective method:

 **Fundamental Combinatorial Rules**
  Employ the basic counting principle, permutations $P(n,k)$, combinations $\\binom{n}{k}$, and related identities (e.g. the binomial coefficient) to enumerate equally likely outcomes directly.

 **Simplicity**
  When all outcomes share equal likelihood, computing $\\binom{n}{k}$ or $n\\times(n-1)\\times\\cdots$ is more straightforward than constructing full distribution tables or applying Bayes’s theorem.

**Transparency**
  A step-by-step combinatorial argument—through case analysis or symmetry—makes explicit how each arrangement or selection contributes to the overall probability, avoiding opaque algebraic manipulation.

 **Efficiency for Small Sample Spaces**
  In problems involving a modest number of cards, dice, or slots, direct computation of permutations or combinations typically requires fewer conceptual steps than invoking general-purpose formulas.

 **Conceptual Insight**
  Deriving results via combinatorial identities deepens understanding of why certain events are more prevalent, reinforcing intuition that may be obscured by formulaic approaches.

 **Problem-Specific Customization**
  Combinatorics allows tailored strategies—case distinctions, bijective mappings, or the inclusion–exclusion principle—adapted to a problem’s unique constraints, rather than forcing it into a universal template.
`

      },
      distributions:{
        title:`Random Variables and Distributions`,
        before:`As we defined earlier, sample space $𝑆$ is the full list of “all that can happen” in a given experiment.
But are all outcomes equally likely?
**The answer is: it depends.**
 As we know from everyday experience, some experiments—like flipping a fair coin or rolling a fair die—assign the same probability to each outcome, while in others certain outcomes carry more weight.
To capture how those weights are assigned—and how they change when we look at different features of the same experiment—we need the formal notion of a probability distribution.
In many problems, interest centers not on the raw outcomes themselves but on some numerical feature of those outcomes—what we call a [random variable](!/probability/random-variables). 
@academic[theorem:A Random Variable is simply a rule that assigns a number to every elementary outcome in the sample space.]@ 
By doing this, it becomes possible to talk about averages, variances and more, using the full toolbox of arithmetic and calculus.
@academic[theorem:The Probability Distribution of a [random variable](!/probability/random-variables) then tells us how likely each numerical value is to happen.]@
 It does this by gathering together all the elementary outcomes that map to the same number (or fall into the same range) and adding up their probabilities. Even when every outcome in the sample space is equally likely—say, each face of a fair die—different choices of [random variable](!/probability/random-variables) (for example, the face value itself versus “even or odd,” or “number of sixes in two rolls”) will group those outcomes differently. As a result, each of those measurements has its own distinct distribution, reflecting the particular way it “reads” the experiment. 
 At its heart, working with a probability distribution is simply about **deciding how to spread out your “degree of belief”** over every thing that could happen, and then using that spread to answer questions about uncertainty.

• **Assigning weight:** You begin by giving each possible outcome a nonnegative number (its weight), in such a way that all the weights add up to one.
• **Capturing uncertainty:** Those weights encode exactly how confident you are in each outcome, from “almost impossible” to “almost certain.”
• **Calculating what matters:** Once the weights are set, you can systematically compute things like “how much total weight falls in this region of outcomes,” or “what’s the average we’d expect,” or “how wildly outcomes vary.”
• **Guiding decisions:** With those calculations in hand, you can compare different spreads of belief, choose actions that maximize your expected gain, or measure how risky a plan is.
There are many different probability distributions—each with its own characteristic pattern—but they can be broadly classified into two main categories: [discrete distributions](!/probability/distributions/discrete), which assign probabilities to countable outcomes, and [continuous distributions](!/probability/distributions/continuous), which use density functions over intervals of real numbers.
`,
svg:
`
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="822" height="600" style="margin-left:200px;margin-top:-50px;" viewBox="0 140 1044 324" style="margin-left: 200px; margin-top: -100px; fill:none;stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style class="text-font-style fontImports" data-font-family="Roboto">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=block');</style>
<g id="items" style="isolation: isolate">
<g id="blend" style="mix-blend-mode: normal">
<g id="g-root-cp_2_g-2_1cxecuc1hw5k3s-fill" data-item-order="-466118" transform="translate(518, 110)">
<g id="cp_2_g-2_1cxecuc1hw5k3s-fill" stroke="none" fill="#95bdff">
<g><path d="M 490 10L 10 10L 10 124.227C 50.2747 127.291 82 160.941 82 202C 82 243.059 50.2747 276.709 10 279.773L 10 394L 490 394L 490 10Z"></path></g>
</g>
</g>
<g id="g-root-cp_0_g-0_18hkupw1hw5kw2-fill" data-item-order="-466114" transform="translate(446, 236)">
<g id="cp_0_g-0_18hkupw1hw5kw2-fill" stroke="none" fill="#484848">
<g><path d="M 76 142C 112.451 142 142 112.451 142 76C 142 39.5492 112.451 10 76 10C 39.5492 10 10 39.5492 10 76C 10 112.451 39.5492 142 76 142ZM 103.2699 84.8789C 103.5027 85.4801 103.6191 86.159 103.6191 86.9154C 103.6191 87.8658 103.3766 88.7192 102.8917 89.4756C 102.4262 90.2321 101.6989 90.8236 100.7097 91.2503C 99.7399 91.677 98.4986 91.8904 96.9858 91.8904C 95.7444 91.8904 94.6001 91.7643 93.5527 91.5122C 92.5248 91.26 91.6326 90.8527 90.8761 90.2902C 90.1391 89.7278 89.5669 88.9907 89.1596 88.0791C 88.7523 87.1675 88.5487 86.0523 88.5487 84.7334L 79.7915 84.7334C 79.7915 87.1191 80.2861 89.1847 81.2753 90.9303C 82.2645 92.6759 83.5834 94.1112 85.232 95.2361C 86.9 96.3611 88.7523 97.2048 90.7889 97.7673C 92.8254 98.3103 94.891 98.5819 96.9858 98.5819C 99.3132 98.5819 101.4177 98.32 103.299 97.7963C 105.1804 97.2727 106.7999 96.5065 108.1576 95.498C 109.5153 94.4894 110.553 93.2578 111.271 91.8031C 111.988 90.3484 112.347 88.6998 112.347 86.8572C 112.347 85.1116 112.046 83.5503 111.445 82.1732C 110.844 80.7961 109.9517 79.5645 108.7686 78.4783C 107.5855 77.3922 106.1114 76.4127 104.3464 75.5399C 102.6008 74.6671 100.574 73.8816 98.2659 73.1833C 96.8888 72.7566 95.6766 72.3202 94.6292 71.8741C 93.5818 71.428 92.6993 70.9528 91.9817 70.4485C 91.2641 69.9442 90.721 69.4012 90.3525 68.8193C 90.0033 68.2374 89.8288 67.5877 89.8288 66.87C 89.8288 65.9197 90.0809 65.0662 90.5852 64.3098C 91.0895 63.534 91.8459 62.923 92.8545 62.4769C 93.8631 62.0114 95.1238 61.7787 96.6366 61.7787C 98.2077 61.7787 99.5072 62.0502 100.5352 62.5933C 101.5825 63.1364 102.3583 63.8831 102.8626 64.8335C 103.3863 65.7645 103.6482 66.8506 103.6482 68.092L 112.318 68.092C 112.318 65.5705 111.668 63.3303 110.369 61.3714C 109.0886 59.4124 107.2848 57.8705 104.9574 56.7455C 102.6299 55.6206 99.9048 55.0581 96.7821 55.0581C 94.4934 55.0581 92.389 55.3393 90.4688 55.9018C 88.5681 56.4643 86.9194 57.2692 85.5229 58.3166C 84.1265 59.3445 83.0403 60.5859 82.2645 62.0405C 81.4887 63.4758 81.1008 65.0759 81.1008 66.8409C 81.1008 68.6641 81.4693 70.2643 82.2063 71.6414C 82.9627 73.0185 83.9907 74.2307 85.2902 75.278C 86.6091 76.306 88.122 77.2079 89.8288 77.9837C 91.555 78.7595 93.3782 79.4578 95.2983 80.0785C 97.0246 80.6215 98.4307 81.1452 99.5169 81.6495C 100.603 82.1538 101.4468 82.6678 102.048 83.1915C 102.6493 83.6957 103.0566 84.2582 103.2699 84.8789ZM 77.6095 55.64L 67.8923 55.64L 58.2921 87.8835L 48.7198 55.64L 39.0608 55.64L 53.7238 98L 56.4586 98L 62.8592 98L 77.6095 55.64Z"></path></g>
</g>
</g>
<g id="g-root-cp_1_g-1_v6qtfo1hw5jb8-fill" data-item-order="-466110" transform="translate(26, 110)">
<g id="cp_1_g-1_v6qtfo1hw5jb8-fill" stroke="none" fill="#4e88e7">
<g><path d="M 490 10L 10 10L 10 394L 490 394L 490 279.773C 449.725 276.709 418 243.059 418 202C 418 160.941 449.725 127.291 490 124.227L 490 10Z"></path></g>
</g>
</g>
<g id="g-root-tx_discrete_zpoozo1hw6x37-fill" data-item-order="0" transform="translate(266, 248)">
<g id="tx_discrete_zpoozo1hw6x37-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Discrete </tspan><tspan x="12" y="58" dominant-baseline="ideographic">Distributions</tspan></text></g>
</g>
</g>
<g id="g-root-tx_continuo_1hi7nno1hw6ww5-fill" data-item-order="0" transform="translate(638, 248)">
<g id="tx_continuo_1hi7nno1hw6ww5-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="25.18" y="34" dominant-baseline="ideographic">Continuous </tspan><tspan x="12.76" y="58" dominant-baseline="ideographic">Distributions</tspan></text></g>
</g>
</g>
<g id="g-root-tx_usedforc_7r5381hw6xvw-fill" data-item-order="0" transform="translate(266, 308)">
<g id="tx_usedforc_7r5381hw6xvw-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="28" dominant-baseline="ideographic">Used for countable </tspan><tspan x="12" y="46" dominant-baseline="ideographic">data</tspan></text></g>
</g>
</g>
<g id="g-root-tx_usedform_vb451g1hw6z9q-fill" data-item-order="0" transform="translate(614, 308)">
<g id="tx_usedform_vb451g1hw6z9q-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="13.56" y="28" dominant-baseline="ideographic">Used for measurable </tspan><tspan x="122.31" y="46" dominant-baseline="ideographic">data</tspan></text></g>
</g>
</g>
<g id="g-root-ic_poll_1qa3tdw1hw5kp3-stroke" data-item-order="0" transform="translate(50, 206)">
<g id="ic_poll_1qa3tdw1hw5kp3-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="1">
<g><path d="M 62 198C 62 184.745178 51.254833 174 38 174C 24.745167 174 14.000001 184.745178 14.000001 198M 22 150C 22 158.836563 29.163445 166 38 166C 46.836555 166 54 158.836563 54 150C 54 141.163437 46.836555 134 38 134C 29.163445 134 22 141.163437 22 150M 130 198C 130 184.745178 119.254837 174 106 174C 92.745171 174 82 184.745178 82 198M 198 198C 198 184.745178 187.254837 174 174 174C 160.745178 174 150 184.745178 150 198M 90 150C 90 158.836563 97.163445 166 106 166C 114.836555 166 122 158.836563 122 150C 122 141.163437 114.836555 134 106 134C 97.163445 134 90 141.163437 90 150M 158 150C 158 158.836563 165.163437 166 174 166C 182.836563 166 190 158.836563 190 150C 190 141.163437 182.836563 134 174 134C 165.163437 134 158 141.163437 158 150M 22 114L 22 70L 54 70L 54 114M 90 114L 90 14L 122 14L 122 114M 158 114L 158 54L 190 54L 190 114M 14 114L 198 114"></path></g>
</g>
</g>
<g id="g-root-ic_moun_145i7441hw5ix5-stroke" data-item-order="0" transform="translate(782, 206)">
<g id="ic_moun_145i7441hw5ix5-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="1">
<g><path d="M 198 186L 18 186C 15.790861 186 14 184.209137 14 182L 14 26M 112.975998 134.18399C 114.431999 142.184006 116.639999 162 138 162M 34 162C 45.57655 161.984573 55.492233 153.707474 57.576 142.320007L 67.175995 89.751999C 68.376434 83.213867 72.873352 77.761841 79.06369 75.339462C 85.254028 72.917084 92.256943 73.869049 97.576004 77.856003M 74 162C 85.576546 161.984573 95.492233 153.707474 97.576004 142.320007L 107.176003 89.751999C 108.911362 80.708267 116.82328 74.170189 126.032005 74.170189C 135.240723 74.170189 143.152649 80.708267 144.888 89.751999L 154.488007 142.320007C 156.567368 153.683823 166.447601 161.953781 178 162"></path></g>
</g>
</g>
<g id="g-root-cp_2_g-2_1cxecuc1hw5k3s-stroke" data-item-order="-466118" transform="translate(518, 110)">
<g id="cp_2_g-2_1cxecuc1hw5k3s-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="1">
<g><path d="M 490 10L 10 10L 10 124.2273C 50.2747 127.2911 82 160.9406 82 202C 82 243.0594 50.2747 276.7089 10 279.7727L 10 394L 490 394L 490 10Z"></path></g>
</g>
</g>
<g id="g-root-cp_0_g-0_18hkupw1hw5kw2-stroke" data-item-order="-466114" transform="translate(446, 236)">
<g id="cp_0_g-0_18hkupw1hw5kw2-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="1">
<g><path d="M 76 142C 112.4508 142 142 112.4508 142 76C 142 39.5492 112.4508 10 76 10C 39.5492 10 10 39.5492 10 76C 10 112.4508 39.5492 142 76 142ZM 103.2699 84.8789C 103.5027 85.4801 103.6191 86.159 103.6191 86.9154C 103.6191 87.8658 103.3766 88.7192 102.8917 89.4756C 102.4262 90.2321 101.6989 90.8236 100.7097 91.2503C 99.7399 91.677 98.4986 91.8904 96.9858 91.8904C 95.7444 91.8904 94.6001 91.7643 93.5527 91.5122C 92.5248 91.26 91.6326 90.8527 90.8761 90.2902C 90.1391 89.7278 89.5669 88.9907 89.1596 88.0791C 88.7523 87.1676 88.5487 86.0523 88.5487 84.7334L 79.7915 84.7334C 79.7915 87.1191 80.2861 89.1847 81.2753 90.9303C 82.2645 92.6759 83.5834 94.1112 85.232 95.2361C 86.9 96.3611 88.7523 97.2048 90.7889 97.7673C 92.8254 98.3103 94.891 98.5819 96.9858 98.5819C 99.3132 98.5819 101.4177 98.32 103.299 97.7963C 105.1804 97.2727 106.7999 96.5065 108.1576 95.498C 109.5153 94.4894 110.553 93.2578 111.2706 91.8031C 111.9883 90.3484 112.3471 88.6998 112.3471 86.8572C 112.3471 85.1116 112.0465 83.5503 111.4452 82.1732C 110.8439 80.7961 109.9517 79.5645 108.7686 78.4783C 107.5855 77.3922 106.1114 76.4127 104.3464 75.5399C 102.6008 74.6671 100.5739 73.8816 98.2659 73.1833C 96.8888 72.7566 95.6766 72.3202 94.6292 71.8741C 93.5818 71.428 92.6993 70.9528 91.9817 70.4485C 91.2641 69.9442 90.721 69.4012 90.3525 68.8193C 90.0033 68.2374 89.8288 67.5877 89.8288 66.87C 89.8288 65.9197 90.0809 65.0662 90.5852 64.3098C 91.0895 63.534 91.8459 62.923 92.8545 62.4769C 93.8631 62.0114 95.1238 61.7787 96.6366 61.7787C 98.2077 61.7787 99.5072 62.0502 100.5352 62.5933C 101.5825 63.1364 102.3583 63.8831 102.8626 64.8335C 103.3863 65.7645 103.6482 66.8506 103.6482 68.092L 112.318 68.092C 112.318 65.5705 111.6682 63.3303 110.3687 61.3714C 109.0886 59.4124 107.2848 57.8705 104.9574 56.7455C 102.6299 55.6206 99.9048 55.0581 96.7821 55.0581C 94.4934 55.0581 92.389 55.3393 90.4688 55.9018C 88.5681 56.4643 86.9194 57.2692 85.5229 58.3166C 84.1265 59.3445 83.0403 60.5859 82.2645 62.0405C 81.4887 63.4758 81.1008 65.0759 81.1008 66.8409C 81.1008 68.6641 81.4693 70.2643 82.2063 71.6414C 82.9627 73.0184 83.9907 74.2307 85.2902 75.278C 86.6091 76.306 88.122 77.2079 89.8288 77.9837C 91.555 78.7595 93.3782 79.4578 95.2983 80.0785C 97.0246 80.6215 98.4307 81.1452 99.5169 81.6495C 100.603 82.1538 101.4468 82.6678 102.048 83.1915C 102.6493 83.6957 103.0566 84.2582 103.2699 84.8789ZM 77.6095 55.64L 67.8923 55.64L 58.2921 87.8835L 48.7198 55.64L 39.0608 55.64L 53.7238 98L 62.8592 98L 77.6095 55.64Z"></path></g>
</g>
</g>
<g id="g-root-cp_1_g-1_v6qtfo1hw5jb8-stroke" data-item-order="-466110" transform="translate(26, 110)">
<g id="cp_1_g-1_v6qtfo1hw5jb8-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="1">
<g><path d="M 490 10L 10 10L 10 394L 490 394L 490 279.7727C 449.7253 276.7089 418 243.0594 418 202C 418 160.9406 449.7253 127.2911 490 124.2273L 490 10Z"></path></g>
</g>
</g>
</g>
</g>
</svg>
`,
        description:``,
        link:`/probability/distributions`

      },
      conditional:{
        title:`Conditional Probability & Independence`,
        before:`@academic[example:Conditional probability is simply the chance of something happening once you already know something else has happened. It tells you how your outlook on an event shifts when you gain new information about another event's occurence.]@
`,
        after:``,
        link:'/probability/conditional-probability',
        description:`When you learn about [conditional probability](!/probability/conditional-probability), you’re really seeing how knowing that one event happened (B) changes your “bet” on another event (A).  That change (or lack of change) is exactly what we mean by dependence or independence:

 **Dependent events**:
  If knowing that B occurred **does** change your opinion about $A$, then $A$ and $B$ are **dependent**.
    $P(A\\mid B)\\;\\neq\\;P(A).$
  Or in simple words: “Once I see $B$ happen, my chance of $A$ goes up or down compared to what I thought before.”

 **Independent events**:
  If knowing that $B$ occurred **doesn’t** change your opinion about likelihood of $A$, then $A$ and $B$ are [independent](!/probability/independence).
 \t\t\t\t\t\t$P(A\\mid B)\\;=\\;P(A)$
 Equivalently, the fact that $B$ happened gives you zero new information about $A$.

 ** The multiplication rule for independent events is**:
    $P(A\\cap B)\\;=\\;P(A)\\,P(B)$
  **The intuition behind it**:
  If two events don’t influence each other, the probability that both happen is just the product of their individual chances. In other words, to find the chance of A and B occurring together, you multiply P(A) by P(B).

`,

      },
      symbols:{
        title:'Probability Symbols Reference',
        description:`Our [Probability Symbols page](!/math-symbols/probability) delivers a systematic reference for notation used in probability theory and statistics. This collection serves as an essential guide for students and professionals working with statistical concepts.
The reference organizes symbols into practical categories including probability notations (P(A), P(A|B)), random variables and distributions (f_X(x), F_X(x)), and common distribution families (Bin(n,p), N(μ,σ²)). It extends to advanced topics like statistical measures (E(X), Var(X)), hypothesis testing parameters (H₀, α, p-value), and information theory metrics (H(X), I(X;Y)).
Specialized sections cover moment generating functions (M_X(t)), key probability inequalities (Markov's, Chebyshev's), Bayesian methods, and regression analysis notation—all presented with precise LaTeX formatting to support academic writing and research in probability and statistics.`,
link:'/math-symbols/probability'
      },
      function:{
        title:'Probability Function',
        description:`**Almost every probability topic ultimately relies on a single idea:**
A probability function describes how probability is distributed across all possible outcomes of a [random variable](!/probability#distributions).
This rule is called a probability function, and it is the mathematical relation that turns a vague notion of uncertainty into something precise and analyzable.

A [probability function](!/probability/probability-function) specifies how likely each possible value of a [random variable](!/probability#distributions) is.
It determines how probability is distributed across the outcomes and forms the basis on which all familiar probability [distributions](!/probability#distributions) are built. Whether we study simple models like coin tossing or more structured distributions that arise in statistics, the probability function is always the mechanism operating underneath.
`,
after:`Because of its central role, this concept receives its own dedicated [page](!/probability/probability-function), where the idea is developed more formally and connected to the structure of probability distributions.
If you want to understand what a distribution really is, the probability function is the natural place to begin.`,
link:'/probability/probability-function'
      },


       visual:{
      title:`Visual Tools`,
      content:`Visual probability tools transform abstract mathematical concepts into interactive experiences that build intuitive understanding. By manipulating parameters and observing real-time changes in distributions, sample spaces, and probability outcomes, you develop the kind of deep, geometric intuition that makes probability theory truly click—moving beyond memorized formulas to genuine comprehension of how randomness behaves.
      Explore our collection of interactive probability visualizers—each tool designed to make complex concepts tangible through hands-on experimentation:
      `,
      before:``,
      after:``,
      link:'/probability/visual-tools',
      title1:`<h2 style="color:#3497da;text-align:center;">Coin Toss Visualizers</h2>
      <hr style="border-color:#3497da; border-width:1px;" />
      `,
      title2:`<h2 style="color:#3497da;text-align:center;">Dice Roll Visualizers</h2>
      <hr style="border-color:#3497da; border-width:1px;" />
      `,
  
      title3:`<h2 style="color:#3497da;text-align:center;">Venn Diagrams Visualizers</h2>
      <hr style="border-color:#3497da; border-width:1px;" />
      `,
  
      title4:`<h2 style="color:#3497da;text-align:center;">Variance Visualizer</h2>
      <hr style="border-color:#3497da; border-width:1px;" />
      `,
      title5:`<h2 style="color:#3497da;text-align:center;">Expected Value Visualizers</h2>
      <hr style="border-color:#3497da; border-width:1px;" />
      `,
  
      title6:`<h2 style="color:#3497da;text-align:center;">Probability Inequalities Visualizers</h2>
      <hr style="border-color:#3497da; border-width:1px;" />
      `,
  
  
    },
    }
  


  const introContent = {
    id: "intro",
    title: "Introduction to Probability Section",
    content: `**Probability** is a field of mathematics that deals with  **uncertainty** and provides tools to measure and analyze how likely events are to occur. It begins with basic concepts such as outcomes, events, and sample spaces, forming the foundation for calculating likelihoods.
Central to probability is the concept of **probability measures**, which assign values between 0 and 1 to **events**, indicating their **likelihood**. A value of 0 means an event is impossible, while 1 signifies certainty. Key principles include **independence** (events that do not influence each other) and **conditional probability**, which considers the likelihood of an event given that another has occurred.
Probability also introduces **random variables**, which assign numerical values to outcomes. These variables are categorized as either **discrete** (taking specific values, like rolling a dice) or **continuous**(taking any value within a range, like measuring temperature). Important measures such as **expectancy(average value)** and **variance(spread or variability)** are used to summarize the behavior of **random variables**.
Advanced topics include **distributions**, such as the **binomial**, **normal**, and **Poisson distributions**, which model specific types of random phenomena. These tools are essential for understanding patterns in **random processes** and making informed predictions.
Probability is widely applied in science, engineering, finance, and everyday decision-making. It forms the basis for statistics, enabling data-driven insights and predictions, and supports fields like machine learning, risk analysis, and quantum mechanics. By studying probability, students develop skills to reason about uncertainty and draw conclusions from incomplete information.`
  }


  const axiomsData = [
    {
      title: 'Non-negativity axiom',
      text: 'For any event A, 0 ≤ P(A) ≤ 1.'
    },
    {
      title: 'Normalization axiom',
      text: '$P(S) = 1$, meaning the probabilities of all possible outcomes in S sum exactly to 1'
    },
    {
      title: 'Countable additivity axiom',
      text: 'If A₁, A₂, … are disjoint, then P(⋃ᵢ Aᵢ) = ∑ᵢ P(Aᵢ).'
    }
  ];

  const keyWords = [
    'probability',
    'learn probability',
    'probability formulas',
    'probability theory',
    'probability distributions',
    'probability concepts',
    'random variables',
    'probability basics'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/probability'
  const lastModified = new Date().toISOString()
  
 const visualToolsCards=[

  {
    id: 1,
    title: 'Advanced Analytics',
    summary: 'Comprehensive data analysis and visualization tools',
    content: `Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities.
     Track key performance metrics, identify trends, and make data-driven decisions. 
     Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.`,
    icon: '📊', // Can use emoji or image URL like: '/images/analytics.png'
    link: '/analytics',
    linkTitle: 'View Dashboard'
  },
  // {
  //   id: 1,
  //   title: 'Advanced Analytics',
  //   summary: 'Comprehensive data analysis and visualization tools',
  //   content: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.',
  //   icon: '📊', // Can use emoji or image URL like: '/images/analytics.png'
  //   link: '/analytics',
  //   linkTitle: 'View Dashboard'
  // },
  // {
  //   id: 1,
  //   title: 'Advanced Analytics',
  //   summary: 'Comprehensive data analysis and visualization tools',
  //   content: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.',
  //   icon: '📊', // Can use emoji or image URL like: '/images/analytics.png'
  //   link: '/analytics',
  //   linkTitle: 'View Dashboard'
  // },
  // {
  //   id: 1,
  //   title: 'Advanced Analytics',
  //   summary: 'Comprehensive data analysis and visualization tools',
  //   content: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration.',
  //   icon: '📊', // Can use emoji or image URL like: '/images/analytics.png'
  //   link: '/analytics',
  //   linkTitle: 'View Dashboard'
  // },

 ]


 const coinVisualTools= [
  {
    id: 1,
    title: 'Coin Flipper Simulator',
    summary: 'Watch the Law of Large Numbers come alive as coin flips converge to their expected probability in real-time.',
    content: 'This interactive simulator lets you flip a fair or biased coin thousands of times and observe how the actual proportion of heads gravitates toward the theoretical probability. The convergence graph displays your results against confidence bands, showing that while short-term randomness creates wild fluctuations, long-term patterns are remarkably predictable. Track streaks, analyze z-scores, and experiment with different probabilities to build deep intuition about how randomness behaves at scale—transforming abstract statistical concepts like variance and standard deviation into tangible, visual experiences.',
    icon: '🪙',
    link: '/probability/visual-tools/coin-toss',
    linkTitle: 'Launch Simulator'
  },
  {
    id: 2,
    title: 'Coin Sample Space Visualizer',
    summary: 'See every possible outcome when flipping multiple coins and instantly calculate probabilities for any pattern or condition.',
    content: 'This visualizer generates the complete sample space for 1-6 coin flips, displaying all possible outcomes as an interactive grid. Highlight specific events—like "exactly 2 heads," "runs of 3 tails," or "alternating patterns"—and watch as the tool instantly calculates favorable outcomes and probabilities. By making abstract counting principles visual and interactive, you build concrete intuition for how sample spaces work, why we count outcomes the way we do, and how theoretical probabilities emerge from the structure of equally likely events.',
    icon: '🪙🪙',
    link: '/probability/visual-tools/coin-toss',
    linkTitle: 'Launch Visualizer'
  }
];


const diceVisualTools = [
  {
    id: 1,
    title: 'Dice Roll Simulator',
    summary: 'Roll multiple dice thousands of times and watch distributions emerge from randomness as sums converge to their theoretical expected values.',
    content: 'This simulator lets you roll 1-6 standard dice simultaneously, accumulating results to reveal how frequency distributions match theoretical probability patterns. Compare actual histograms against expected distributions, track how average sums converge to 3.5 per die, and analyze variance and z-scores across thousands of rolls. Whether exploring the Central Limit Theorem or understanding why certain sums are more common in board games, this tool transforms abstract dice probability into concrete visual patterns you can manipulate and observe in real-time.',
    icon: '🎲',
    link: '/probability/visual-tools/dice-roll',
    linkTitle: 'Launch Simulator'
  },
  {
    id: 2,
    title: 'Dice Sample Space Explorer',
    summary: 'Visualize every possible dice outcome and filter by complex conditions to calculate exact probabilities for any event you can imagine.',
    content: 'This explorer generates the complete sample space for 1-4 dice rolls, displaying all possible outcomes with interactive dice visuals and letting you highlight events using sophisticated filters—from simple conditions like "sum equals 7" to complex patterns like "all dice in ascending order" or "at least two 6s with an even sum." Watch favorable outcomes light up as you adjust parameters, see probability calculations update instantly, and build intuition for why certain dice combinations are more likely than others. Perfect for understanding conditional probability, combinatorics, and the mathematical structure underlying dice games.',
    icon: '🎲🎲',
    link: '/probability/visual-tools/dice-roll',
    linkTitle: 'Launch Explorer'
  }
];

const vennVisualTools = [
  {
    id: 1,
    title: '2-Set Venn Diagram Solver',
    summary: 'Solve probability problems involving two events by visualizing how marginal probabilities and constraints determine all four regions of a Venn diagram.',
    content: 'This interactive solver takes marginal probabilities for two events and additional constraints (like intersection or complement probabilities) and calculates the exact probability for all four regions of the sample space. Click diagram segments to highlight specific outcomes, view step-by-step calculations showing how each region is derived from the given information, and explore multiple real-world scenarios from student surveys to medical testing. Perfect for understanding how conditional information propagates through a probability space and building intuition for the algebra of events.',
    icon: '⚭',
    link: '/probability/visual-tools/venn-diagrams/two-sets',
    linkTitle: 'Launch Solver'
  },
  {
    id: 2,
    title: '3-Set Venn Diagram Solver',
    summary: 'Tackle complex three-event probability problems by solving systems of equations to find all eight regions where events intersect and complement each other.',
    content: 'This advanced solver handles the full complexity of three-event probability problems, where you must determine eight distinct regions from marginal probabilities and intersection constraints. Watch as the tool works through systems of equations to compute values like P(A∩B∩C) and P(A∩Bᶜ∩C), with detailed calculation steps showing the logical dependency chain from given information to derived probabilities. The interactive Venn diagram lets you click any of the eight segments to see its specific calculation, making the abstract algebra of three-set problems concrete and visual. Essential for mastering advanced probability problems involving multiple overlapping events.',
    icon: '⚛',
    link: '/probability/visual-tools/venn-diagrams/three-sets',
    linkTitle: 'Launch Solver'
  }
];


const varianceVisualTools =[ {
  id: 1,
  title: 'Interactive Variance Calculator',
  summary: 'Drag data points and watch variance update in real-time as deviations from the mean become visually tangible through interactive bars and step-by-step calculations.',
  content: 'This powerful visualizer transforms the abstract concept of variance into something you can literally see and feel. Drag points up or down on the chart to instantly see how each value\'s distance from the mean contributes to overall spread—colored deviation bars grow and shrink dynamically, squared deviations update in the table, and the complete calculation chain unfolds step-by-step on the right. Switch between population (σ²) and sample (s²) variance to understand why we divide by n-1, explore presets that demonstrate low versus high variance datasets, and hover over any element for contextual tooltips. Perfect for building deep intuition about why we square deviations, how outliers disproportionately affect variance, and what standard deviation really measures.',
  icon: '📈',
  link: '/probability/visual-tools/variance',
  linkTitle: 'Launch Calculator'
}

];


const expectedValueVisualTools = [
  {
    id: 1,
    title: 'Weighted Average Expected Value',
    summary: 'See how probabilities literally "pull" the expected value toward them through an intuitive weight-and-force visualization that makes weighted averages tangible.',
    content: 'This unique visualizer uses a physical metaphor to show why expected value is called a weighted average. Each outcome appears as a "weight" on a number line, with circle size and arrow thickness representing probability—high-probability outcomes exert stronger "pull" on the expected value. Watch the blue E(X) marker get tugged toward heavy weights while comparing it to the gray unweighted average that ignores probabilities entirely. Use the animation feature to cycle through preset distributions, or manually select scenarios like "Strong Right Bias" to see how asymmetric probabilities shift expected value dramatically. Perfect for building visceral intuition about why E(X) ≠ simple average and how probability weighting fundamentally changes where the "center" of a distribution lies.',
    icon: '⚖️',
    link: '/probability/visual-tools/expected-value/weighted',
    linkTitle: 'Launch Visualizer'
  },
  {
    id: 2,
    title: 'Discrete Expected Value Calculator',
    summary: 'Adjust probability distributions with sliders and watch the expected value update instantly as bar heights and contributions recalculate in real-time.',
    content: 'This interactive calculator displays discrete probability distributions as bar charts with a distinctive red dashed line marking the expected value position. Drag probability sliders for each outcome and watch automatic normalization ensure probabilities sum to 1.0, while each bar simultaneously displays three key pieces of information: the probability P(X=x), the contribution x·P(X=x), and the visual height representing likelihood. The formula E[X] = Σ x·P(X=x) becomes concrete as you see individual contributions sum to the total expected value, and the red line shifts left or right based on your probability adjustments. Ideal for experimenting with different distributions and understanding how expected value emerges from the weighted sum of outcomes.',
    icon: '📊',
    link: '/probability/visual-tools/expected-value/discrete',
    linkTitle: 'Launch Calculator'
  }
];


const inequalitiesVisualTools = [
  {
    id: 1,
    title: 'Markov Inequality Visualizer',
    summary: 'Watch how Markov\'s inequality bounds tail probabilities using only the expected value—no variance or distribution shape required.',
    content: 'This visualizer demonstrates Markov\'s inequality (P(X ≥ a) ≤ E[X]/a) across nine different distributions, both continuous and discrete. Adjust the expected value and threshold to see the bound in action, with red shaded regions showing the actual tail probability beyond your threshold. The tool highlights a critical insight: when a ≤ E[X], the bound becomes useless (≥1), warning you with red alerts. Watch how the bound gets tighter as the threshold increases relative to the mean, and compare actual probabilities to theoretical bounds across exponential, normal, Poisson, binomial, and other distributions. Perfect for understanding when Markov provides useful information and when it\'s too loose to be practical.',
    icon: '≥',
    link: '/probability/visual-tools/inequalities/markov',
    linkTitle: 'Launch Visualizer'
  },
  {
    id: 2,
    title: 'Chebyshev Inequality Visualizer',
    summary: 'Explore how Chebyshev\'s inequality bounds deviations from the mean using variance, providing guarantees that work for any distribution.',
    content: 'This powerful visualizer shows Chebyshev\'s inequality (P(|X - μ| ≥ a) ≤ σ²/a²) in action, highlighting both tail regions symmetrically around the mean. Unlike Markov, Chebyshev uses variance to provide much tighter bounds on how far values can stray from the mean—regardless of distribution shape. Adjust mean, variance, and deviation threshold independently to see how the bound tightens as you move further from center or as variance decreases. Red shaded regions show both tails combined, demonstrating that at least (1 - σ²/a²) of the probability mass must lie within a standard deviations of the mean. Test with normal, exponential, uniform, Poisson, and other distributions to see this distribution-free bound consistently hold, building intuition for why Chebyshev is fundamental to concentration inequalities.',
    icon: '≶',
    link: '/probability/visual-tools/inequalities/chebyshev',
    linkTitle: 'Launch Visualizer'
  }
];

  return {
    props: {
      sectionContent,
      introContent,
      keyWords,
      canonicalUrl,
      lastModified,
      probabilityFormulasList,
      probabilityTermsList,
      axiomsData,
      probabilityRulesTreeData,
      // probabilityTOCTreeData,
      visualToolsCards,
      coinVisualTools,
      diceVisualTools,
      vennVisualTools,
      varianceVisualTools,
      expectedValueVisualTools,
      inequalitiesVisualTools,
    }
  }
}

export default function ProbabilityPage({ 
  sectionContent, 
  introContent, 
  keyWords,
  canonicalUrl,
  lastModified,
  probabilityFormulasList,
  probabilityTermsList,
  axiomsData,
  probabilityRulesTreeData,
  // probabilityTOCTreeData,
  visualToolsCards,
  coinVisualTools,
  diceVisualTools,
  vennVisualTools,
  varianceVisualTools,
  expectedValueVisualTools,
  inequalitiesVisualTools,

}) {
  // Reconstruct sections with React components
  const probabilitySections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      link:'/probability/formulas',
      content: [
        { 
          content: sectionContent.formulas.leftContentHtml,
          layout: 'horizontal', 
          position: 'left',
          width: 1.5 
        },
        { 
          content: <VerticalScrollingFormulaWidget 
            key="formula-widget"
            formulaData={probabilityFormulasList}
            moreFormulasLink='/probability/formulas'
          />, 
          layout: 'horizontal', 
          position: 'right',
          width: 2 
        }
      ]
    },
    // {
    //   id:'map',
    //   title:'Learning Map',
    //   content:[
    //     <TreeStructure2
    //     key={2}
    //     data={probabilityTOCTreeData}
    //     viewMode="parsed"
    //     expandTopLevel={true} 
    //     />
    //   ]

    // },
    {
      id: 'definitions',
      title: sectionContent.definitions.title,
      link:'/probability/definitions',
      content: [
        { 
          content: <VerticalScrollingFormulaWidget 
            key="definitions-widget"
            formulaData={probabilityTermsList}
            moreFormulasLink='/probability/definitions'
            type='definition'
          />, 
          layout: 'horizontal', 
          position: 'left',
          width: 2
        },
        { 
          content: sectionContent.definitions.rightContentHtml,
          layout: 'horizontal', 
          position: 'right',
          width: 1.5 
        }
      ]
    },
    {
      id: 'concepts',
      title: sectionContent.concepts.title, 
     
      content: sectionContent.concepts.description
    },
    {
      id:'set',
      title:'Set Theory & Event Algebra',
      content:[
        sectionContent.set.before,
        probabilityConceptsData["Sample Space"].svg,
        sectionContent.set.between,
        probabilityConceptsData["Zero Probability Paradox"].svg,
        sectionContent.set.content,
        setsProbabilityData["Events as Sets in Probability"].svg,
        sectionContent.set.after,
      ]

    },
    {
      id: 'axioms',
      title: sectionContent.axioms.title, 
      link:sectionContent.axioms.link,
      content: [
        sectionContent.axioms.description,
        <MyList
        key={1}
        data={axiomsData}
        type="dot"     // • marker
        boxed={true}
        compact={false}
        divided={false}
        color="blue"
        width="600px"
        // math={true}
        article={true}  // <-- treats each item as {title, text}
        centered={false}
       
      />
      
      ]
    },
    {

      id:'rules',
      title:sectionContent.rules.title,
      link:sectionContent.rules.link,
      content:[
        sectionContent.rules.before,
        <TreeStructure2
        key={1}
        data={probabilityRulesTreeData} 
        // expandTopLevel={true} 
        viewMode="parsed" />,
        sectionContent.rules.after
      ]

    },
    {
      id:'combinatorial',
      title:sectionContent.combinatorial.title,
      link:'',
      content:[
        sectionContent.combinatorial.description,
      ]

    },
    {
      id:'distributions',
      title:sectionContent.distributions.title,
      link:sectionContent.distributions.link,
      content:[
        sectionContent.distributions.before,

        // sectionContent.distributions.svg,
         <div key={'dist'} style={{
                    textAlign: 'center',
                    transform: 'scale(0.98)',
                    transformOrigin: 'center',
                    marginTop:'50px',
                    marginLeft:'-150px'
                  }} dangerouslySetInnerHTML={{ 
                    __html:   sectionContent.distributions.svg,
                  }} />
               

        
      ]

    },
    {

      id:'conditional',
      title:sectionContent.conditional.title,
      link:sectionContent.conditional.link,
      content:[
        sectionContent.conditional.before,
        sectionContent.conditional.description,

      ]

    },
    {
      id:'function',
      title:sectionContent.function.title,
      link:sectionContent.function.link,
      content:[
        sectionContent.function.description,
         <div key={'function'} style={{
                    textAlign: 'center',
                    transform: 'scale(0.98)',
                    transformOrigin: 'center',
                    marginTop:'50px',
                    marginLeft:'-150px'
                  }} dangerouslySetInnerHTML={{ 
                    __html:   probabilityFunctionData["Central Role of Probability Function"].svg,
                  }} />,
        sectionContent.function.after,

      ]

    },
    {
      id: 'symbols',
      title: sectionContent.symbols.title, // Give it a proper title
      link: sectionContent.symbols.link, // Optional
      content: [
        {
          content:sectionContent.symbols.description,
          layout: 'horizontal',
          position: 'center', // or 'left' if you prefer
          width: 8 // full width
        }
      ]
    },

     {
        id:'visual-tools',
        title:sectionContent.visual.title,
        link:sectionContent.visual.link,
        content:[
          sectionContent.visual.content,
          // <StaticCards key={'visual-tools'}
          // cards={visualToolsCards}
          // layout='list'
          
          // />,
          sectionContent.visual.title1,
          <StaticCards
          key={'coin'}
          layout='grid'
          cards={coinVisualTools}
          theme='minimal'
          />,
           sectionContent.visual.title2,
            <StaticCards
          key={'dice'}
          layout='grid'
          cards={diceVisualTools}
          theme='minimal'
          />,
           sectionContent.visual.title3,
            <StaticCards
          key={'venn'}
          layout='grid'
          cards={vennVisualTools}
          theme='minimal'
          />,
           sectionContent.visual.title4,
            <StaticCards
          key={'variance'}
          layout='list'
          cards={varianceVisualTools}
          theme='minimal'
          />,
           sectionContent.visual.title5,
            <StaticCards
          key={'expected'}
          layout='grid'
          cards={expectedValueVisualTools}
          theme='minimal'
          />,
           sectionContent.visual.title6,
            <StaticCards
          key={'inequalities'}
          layout='grid'
          cards={inequalitiesVisualTools}
          theme='minimal'
          />,


        ]
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Probability - Learn Mathematics",
    "description": "Comprehensive guide to probability theory including formulas, distributions, and core concepts. Learn about random variables, probability measures, and their applications.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Probability",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Probability - Theory, Formulas & Concepts | Learn Math Class"
  const pageDescription = "Master probability with our comprehensive guide covering probability theory, distributions, random variables, and core concepts. Perfect for students and educators."

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={lastModified} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* <GenericNavbar/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        topOffset='55px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
     
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
          Probability
        </h1>
        <SectionTableOfContents sections={probabilitySections}
         showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
         secondaryNavTitle="More in this Section" />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
        <Sections sections={probabilitySections}/>
        <br/>
        <br/>
        <br/>
        {/* <ScrollUpButton/> */}
      </main>
    </>
  )
}