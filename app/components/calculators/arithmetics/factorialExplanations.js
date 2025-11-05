// factorialExplanations.js
const factorialExplanations = {
  basic: {
    text: "The basic factorial (n!) is the product of all positive integers less than or equal to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. By convention, 0! = 1. Factorials grow extremely rapidly and are fundamental in combinatorics, probability, and algebra.",
    links: [
      { title: "Learn more about Factorials", link: "/factorial" }
    ]
  },
  double: {
    text: "The double factorial (n!!) is the product of all integers from 1 to n that have the same parity (odd or even) as n. For example, 8!! = 8 × 6 × 4 × 2 = 384 and 7!! = 7 × 5 × 3 × 1 = 105. Double factorials appear in combinatorial problems and calculus.",
    links: [
      { title: "Learn more about Double Factorials", link: "/factorial" }
    ]
  },
  sub: {
    text: "The subfactorial (!n) counts the number of derangements of n objects - permutations where no element appears in its original position. For example, !3 = 2 because there are 2 ways to arrange 3 items so none are in their original spots. Subfactorials are used in probability and combinatorics.",
    links: [
      { title: "Learn more about Subfactorials", link: "/factorial" }
    ]
  },
  multi: {
    text: "The multifactorial (n(k)!) is a generalization where you multiply every k-th number. For example, with k=3, 10(3)! = 10 × 7 × 4 × 1 = 280. When k=1 it's a regular factorial, k=2 is double factorial. Multifactorials extend factorial concepts to broader mathematical contexts.",
    links: [
      { title: "Learn more about Multifactorials", link: "/factorial" }
    ]
  },
  primorial: {
    text: "The primorial (n#) is the product of all prime numbers less than or equal to n. For example, 10# = 2 × 3 × 5 × 7 = 210. Primorials are important in number theory, particularly in studying prime number distributions and appear in various mathematical theorems.",
    links: [
      { title: "Learn more about Primorials", link: "/factorial" }
    ]
  }
};

export default factorialExplanations;