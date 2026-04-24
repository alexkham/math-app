import React from 'react'
import '../pages.css'
import Head from 'next/head'
import LandingPage from '@/app/components/page-components/landing-pages/LandingPage'


export async function getStaticProps(){

  const keyWords = [
    "arithmetic",
    "divisibility",
    "fractions",
    "modulo",
    "remainder",
    "factors",
    "multiples",
    "GCD",
    "LCM",
    "prime numbers",
    "divisibility rules",
    "modular arithmetic",
    "fraction operations",
    "number theory basics"
  ]

const landingPageData = {
  pageTitle: 'Arithmetic',
  breadcrumbUrl: '/arithmetic',

  sidebarData: {
    brandName: 'Arithmetic',
    brandSubtitle: 'Number Foundations',
    showNewsletter: false,
    showFooter: true,
    footerText: 'Learn Math Class',
    categories: [
      {
        title: 'Divisibility',
        items: [
          {
            name: 'Divisibility',
            icon: '|',
            href: '/arithmetic/divisibility',
            children: [
              { name: 'Factors & Multiples', href: '/arithmetic/divisibility/factors' },
              { name: 'GCD', href: '/arithmetic/divisibility/gcd' },
              { name: 'LCM', href: '/arithmetic/divisibility/lcm' },
              { name: 'Divisibility Rules', href: '/arithmetic/divisibility/rules' }
            ]
          }
        ]
      },
      {
        title: 'Fractions',
        items: [
          {
            name: 'Fractions',
            icon: '/',
            href: '/arithmetic/fractions',
            children: [
              { name: 'Adding & Subtracting', href: '/arithmetic/fractions/adding-subtracting' },
              { name: 'Multiplying', href: '/arithmetic/fractions/multiplying' },
              { name: 'Dividing', href: '/arithmetic/fractions/dividing' },
              { name: 'Comparing', href: '/arithmetic/fractions/comparing' },
              { name: 'Equivalent Fractions', href: '/arithmetic/fractions/equivalent' },
              { name: 'Mixed Numbers', href: '/arithmetic/fractions/mixed-numbers' },
              { name: 'Complex Fractions', href: '/arithmetic/fractions/complex' }
            ]
          }
        ]
      },
      {
        title: 'Modulo',
        items: [
          {
            name: 'Modulo',
            icon: '%',
            href: '/arithmetic/modulo',
            children: [
              { name: 'Modular Operations', href: '/arithmetic/modulo/operations' },
              { name: 'Negative Numbers', href: '/arithmetic/modulo/negative-numbers' }
            ]
          }
        ]
      },
      {
        title: 'Tools',
        items: [
          {
            name: 'Calculators',
            icon: '=',
            href: '/arithmetic/calculators'
          },
          {
            name: 'Visual Tools',
            icon: '#',
            href: '/arithmetic/visual-tools'
          }
        ]
      }
    ]
  },

  topNavData: {
    method: 'miniCards',
    sticky: true,
    containerBackground: 'white'
  },

  heroData: {
    showStats: true,
    customStats: null
  },

  contentCardsData: {
    sectionTitle: 'Topics',
    theme: 'gradient',
    layout: 'grid',
    cards: [

      // Row 1: [W] Divisibility | [N] Factors
      {
        id: 1,
        htmlId: 'divisibility',
        title: 'Divisibility',
        summary: 'When and why one integer divides another exactly',
        content: `An integer $a$ divides an integer $b$ when $b = a \\cdot k$ for some integer $k$, with no remainder. The notation $a \\mid b$ is a statement — true or false — not an operation. Every nonzero integer divides itself, $1$ divides everything, and every nonzero integer divides $0$. Divisibility is transitive: if $a \\mid b$ and $b \\mid c$, then $a \\mid c$. It distributes over addition and subtraction and scales with multiplication. The division algorithm connects divisibility to remainders — when the remainder vanishes, the division is exact. This section covers factors and multiples, prime numbers and prime factorization, the greatest common divisor, the least common multiple, and the divisibility rules that test these relationships at a glance.`,
        icon: '|',
        cardWidth: 1280,
        cardHeight: 320,
        overflowBehavior: 5,
        link: '/arithmetic/divisibility',
        linkTitle: 'Explore Divisibility'
      },
      {
        id: 2,
        htmlId: 'factors',
        title: 'Factors & Multiples',
        summary: 'The finite set of divisors and the infinite chain of multiples',
        content: `Every divisibility relationship names two roles. When $a \\mid b$, the number $a$ is a factor of $b$, and $b$ is a multiple of $a$. The factors of a number are finite — $24$ has exactly eight: $1, 2, 3, 4, 6, 8, 12, 24$. The multiples are infinite — the multiples of $3$ extend as $3, 6, 9, 12, \\ldots$ without end. Factors come in pairs: if $a$ divides $n$, then $n/a$ also divides $n$. Searching up to $\\sqrt{n}$ is sufficient to find every factor, since each one above the square root is paired with one below it.`,
        icon: '|',
        cardWidth: 600,
        cardHeight: 320,
        overflowBehavior: 5,
        link: '/arithmetic/divisibility/factors',
        linkTitle: 'Factors & Multiples'
      },

      // Row 2: [N] GCD | [W] LCM
      {
        id: 3,
        htmlId: 'gcd',
        title: 'GCD — Greatest Common Divisor',
        summary: 'The largest factor shared by two or more integers',
        content: `The GCD of two integers is the largest number that divides both. For $48$ and $36$, the common divisors are $1, 2, 3, 4, 6, 12$, and the greatest is $12$. Three methods compute it: listing all factors and selecting the largest shared one, extracting GCD from prime factorizations by taking the minimum exponent of each shared prime, and the Euclidean algorithm — which applies modulo repeatedly until the remainder reaches zero. The last nonzero remainder is the GCD. The Euclidean algorithm is the fastest: $\\gcd(252, 105)$ reduces via $252 = 105 \\cdot 2 + 42$, then $105 = 42 \\cdot 2 + 21$, then $42 = 21 \\cdot 2 + 0$, giving $\\gcd = 21$. Two numbers with $\\gcd = 1$ are coprime — they share no prime factors.`,
        icon: '|',
        cardWidth: 600,
        cardHeight: 340,
        overflowBehavior: 5,
        link: '/arithmetic/divisibility/gcd',
        linkTitle: 'GCD in Detail'
      },
      {
        id: 4,
        htmlId: 'lcm',
        title: 'LCM — Least Common Multiple',
        summary: 'The smallest number that both integers divide into',
        content: `The LCM of two integers is the smallest positive integer that both divide into evenly. For $4$ and $6$: multiples of $4$ are $4, 8, 12, 16, \\ldots$; multiples of $6$ are $6, 12, 18, \\ldots$; the first overlap is $12$, so $\\text{lcm}(4,6) = 12$. Computation methods mirror GCD: list multiples, use prime factorizations (take the maximum exponent of each prime), or use the identity $a \\cdot b = \\gcd(a,b) \\cdot \\text{lcm}(a,b)$ to derive LCM from GCD. When two numbers are coprime, their LCM is simply their product. When one divides the other, the LCM is the larger number. LCM extends to three or more numbers by iterating pairwise.`,
        icon: '|',
        cardWidth: 400,
        cardHeight: 340,
        overflowBehavior: 5,
        link: '/arithmetic/divisibility/lcm',
        linkTitle: 'LCM in Detail'
      },

      // Row 3: [W] Divisibility Rules | [N] Fractions
      {
        id: 5,
        htmlId: 'divisibility-rules',
        title: 'Divisibility Rules',
        summary: 'Digit-pattern shortcuts for testing divisibility by 2 through 11',
        content: `Testing whether one number divides another does not always require performing the full division. For certain common divisors, patterns in the decimal digits give instant answers. Divisible by $2$ if the last digit is even. By $3$ if the digit sum is divisible by $3$. By $4$ if the last two digits form a number divisible by $4$. By $5$ if the last digit is $0$ or $5$. By $6$ if divisible by both $2$ and $3$. By $8$ if the last three digits form a number divisible by $8$. By $9$ if the digit sum is divisible by $9$. By $10$ if the last digit is $0$. By $11$ if the alternating sum of digits is divisible by $11$. Each rule exploits the structure of base-$10$ place value and modular arithmetic.`,
        icon: '|',
        cardWidth: 800,
        cardHeight: 300,
        overflowBehavior: 5,
        link: '/arithmetic/divisibility/rules',
        linkTitle: 'All Divisibility Rules'
      },
      {
        id: 6,
        htmlId: 'fractions',
        title: 'Fractions',
        summary: 'Parts of a whole — definition, types, and operations',
        content: `A fraction $\\frac{a}{b}$ expresses a quantity as a ratio of two integers — the numerator $a$ counts parts taken, the denominator $b$ names the size of each part. Fractions are classified as proper (numerator less than denominator, value less than one), improper (numerator greater than or equal to denominator, value one or more), or unit fractions (numerator of exactly one). Every fraction $\\frac{a}{b}$ equals $a$ copies of the unit fraction $\\frac{1}{b}$. Equivalent fractions represent the same value in different forms: $\\frac{1}{2}$, $\\frac{2}{4}$, $\\frac{3}{6}$ are all the same quantity. Operations on fractions — adding, subtracting, multiplying, dividing, and comparing — each follow specific rules covered in the sub-pages below.`,
        icon: '',
        cardWidth: 800,
        cardHeight: 300,
        overflowBehavior: 5,
        link: '/arithmetic/fractions',
        linkTitle: 'Explore Fractions'
      },

      // Row 4: [W] Adding/Subtracting | [N] Multiplying
      {
        id: 7,
        htmlId: 'adding-subtracting',
        title: 'Adding & Subtracting Fractions',
        summary: 'Common denominators, mixed numbers, and whole-number combinations',
        content: `Adding fractions with the same denominator is direct: combine the numerators and keep the denominator. $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$. When denominators differ, each fraction must first be converted to an equivalent fraction with a shared denominator — typically the least common multiple of the two denominators. Adding mixed numbers requires handling the whole-number parts and fractional parts separately, with possible regrouping. Subtraction follows the same rules but may require borrowing from the whole-number part. Common mistakes include adding denominators together or forgetting to simplify the result.`,
        icon: '',
        cardWidth: 400,
        cardHeight: 300,
        overflowBehavior: 5,
        link: '/arithmetic/fractions/adding-subtracting',
        linkTitle: 'Adding & Subtracting'
      },
      {
        id: 8,
        htmlId: 'multiplying',
        title: 'Multiplying Fractions',
        summary: 'Numerator times numerator, denominator times denominator',
        content: `Multiplication follows a direct rule: multiply numerators together and denominators together. $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$. No common denominator is needed. Cross-canceling before multiplying — dividing a numerator and a denominator by their common factor — keeps numbers small and avoids simplifying at the end. Multiplying mixed numbers requires converting to improper fractions first. The word "of" in math often means multiply: $\\frac{2}{3}$ of $15$ means $\\frac{2}{3} \\times 15 = 10$.`,
        icon: '',
        cardWidth: 600,
        cardHeight: 300,
        overflowBehavior: 5,
        link: '/arithmetic/fractions/multiplying',
        linkTitle: 'Multiplying'
      },

      // Row 5: [N] Dividing | [W] Comparing
      {
        id: 9,
        htmlId: 'dividing',
        title: 'Dividing Fractions',
        summary: 'Keep, change, flip — multiply by the reciprocal',
        content: `Dividing by a fraction is equivalent to multiplying by its reciprocal. To compute $\\frac{2}{3} \\div \\frac{4}{5}$, flip the second fraction and multiply: $\\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$. The reciprocal of $\\frac{a}{b}$ is $\\frac{b}{a}$. Dividing a fraction by a whole number means multiplying by $\\frac{1}{n}$. Dividing a whole number by a fraction means multiplying the whole number by the reciprocal. Mixed numbers must be converted to improper fractions before dividing. Cross-canceling applies here just as in multiplication.`,
        icon: '',
        cardWidth: 600,
        cardHeight: 320,
        overflowBehavior: 5,
        link: '/arithmetic/fractions/dividing',
        linkTitle: 'Dividing'
      },
      {
        id: 10,
        htmlId: 'comparing',
        title: 'Comparing Fractions',
        summary: 'Common denominators, cross-multiplication, benchmarks, and decimals',
        content: `Determining which fraction is larger uses several methods. Same-denominator fractions compare directly by numerator. Same-numerator fractions compare inversely by denominator — larger denominator means smaller pieces. The common-denominator method converts both fractions to the same denominator and compares numerators. Cross-multiplication compares $a \\cdot d$ with $b \\cdot c$ for $\\frac{a}{b}$ vs $\\frac{c}{d}$. Benchmark fractions like $\\frac{1}{2}$ provide quick reference points. Decimal conversion gives exact comparison. Mixed numbers compare whole parts first, then fractional parts.`,
        icon: '',
        cardWidth: 800,
        cardHeight: 320,
        overflowBehavior: 5,
        link: '/arithmetic/fractions/comparing',
        linkTitle: 'Comparing'
      },

      // Row 6: [W] Equivalent | [N] Mixed Numbers
      {
        id: 11,
        htmlId: 'equivalent',
        title: 'Equivalent Fractions',
        summary: 'Same value, different numerator and denominator',
        content: `Equivalent fractions represent the same quantity. Multiplying or dividing both numerator and denominator by the same nonzero number produces an equivalent fraction: $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{50}{100}$. Simplifying a fraction means dividing numerator and denominator by their GCD to reach the simplest form. A fraction is in simplest form when the GCD of its numerator and denominator is $1$. Testing equivalence: $\\frac{a}{b} = \\frac{c}{d}$ if and only if $a \\cdot d = b \\cdot c$. Finding common denominators for addition and subtraction is fundamentally about creating equivalent fractions.`,
        icon: '',
        cardWidth: 400,
        cardHeight: 300,
        overflowBehavior: 5,
        link: '/arithmetic/fractions/equivalent',
        linkTitle: 'Equivalent Fractions'
      },
      {
        id: 12,
        htmlId: 'mixed-numbers',
        title: 'Mixed Numbers',
        summary: 'Whole parts combined with fractional parts',
        content: `A mixed number like $2\\frac{3}{4}$ combines a whole number with a proper fraction. Converting to an improper fraction: multiply the whole number by the denominator, add the numerator, place over the original denominator — $2\\frac{3}{4} = \\frac{11}{4}$. Converting back: divide numerator by denominator — quotient becomes the whole part, remainder becomes the new numerator. Mixed numbers are intuitive for expressing measurements and quantities greater than one, while improper fractions are essential for computation.`,
        icon: '',
        cardWidth: 600,
        cardHeight: 300,
        overflowBehavior: 5,
        link: '/arithmetic/fractions/mixed-numbers',
        linkTitle: 'Mixed Numbers'
      },

      // Row 7: [N] Complex | [W] Modulo
      {
        id: 13,
        htmlId: 'complex-fractions',
        title: 'Complex Fractions',
        summary: 'Fractions within fractions — two methods for simplifying',
        content: `A complex fraction contains fractions in its numerator, denominator, or both — like $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$. Two simplification methods exist. Method 1 (division): treat the main fraction bar as division and multiply by the reciprocal of the denominator. Method 2 (LCD): multiply both the numerator and denominator by the LCD of all inner fractions, clearing them in one step. Complex fractions with sums or differences in the numerator or denominator require combining those parts first. Nested complex fractions — fractions within fractions within fractions — simplify from the inside out.`,
        icon: '',
        cardWidth: 600,
        cardHeight: 340,
        overflowBehavior: 5,
        link: '/arithmetic/fractions/complex',
        linkTitle: 'Complex Fractions'
      },
      {
        id: 14,
        htmlId: 'modulo',
        title: 'Modulo',
        summary: 'Remainders, congruence, and cyclic arithmetic',
        content: `The modulo operation takes two integers and returns the remainder of their division. The expression $17 \\bmod 5 = 2$ because $17 = 5 \\cdot 3 + 2$. For a fixed divisor $n$, the remainder is always in $\\{0, 1, \\ldots, n-1\\}$ — modulo compresses the entire number line into a finite set that repeats in cycles. When two integers share the same remainder, they are congruent modulo $n$: $17 \\equiv 5 \\pmod{12}$ because both leave remainder $5$. Congruence is an equivalence relation — reflexive, symmetric, transitive — that partitions the integers into congruence classes. The clock is the most familiar example: $15{:}00$ and $3{:}00$ are the same position because $15 \\equiv 3 \\pmod{12}$.`,
        icon: '%',
        cardWidth: 1280,
        cardHeight: 340,
        overflowBehavior: 5,
        link: '/arithmetic/modulo',
        linkTitle: 'Explore Modulo'
      },

      // Row 8: [W] Modular Ops | [N] Negative Modulo
      {
        id: 15,
        htmlId: 'modular-operations',
        title: 'Modular Arithmetic',
        summary: 'Addition, subtraction, multiplication, and powers under a modulus',
        content: `Modular arithmetic builds a self-contained system where operations stay within a fixed set of remainders. Addition: $(a + b) \\bmod n = ((a \\bmod n) + (b \\bmod n)) \\bmod n$. The same pattern holds for subtraction and multiplication — reduce first, operate, reduce again. Powers use repeated squaring to handle large exponents efficiently. Division is different: it requires modular inverses and does not always exist. Applications include last-digit problems ($n \\bmod 10$), clock arithmetic ($n \\bmod 12$), day-of-week calculations ($n \\bmod 7$), and the modular proofs behind every divisibility rule for $3$, $9$, and $11$.`,
        icon: '%',
        cardWidth: 600,
        cardHeight: 320,
        overflowBehavior: 5,
        link: '/arithmetic/modulo/operations',
        linkTitle: 'Modular Operations'
      },
      {
        id: 16,
        htmlId: 'negative-modulo',
        title: 'Modulo with Negative Numbers',
        summary: 'Two conventions, different answers, language-specific behavior',
        content: `When the dividend is negative, the meaning of "remainder" splits. The expression $(-7) \\bmod 3$ equals $-1$ under truncated division (round quotient toward zero) and $2$ under floored division (round quotient toward $-\\infty$). Both satisfy $a = n \\cdot q + r$; they differ in how $q$ is rounded. C, Java, and JavaScript use truncated division. Python and Ruby use floored division. Neither convention is wrong — they answer slightly different questions. Converting between them: if the truncated remainder is negative, add the modulus to get the floored remainder. From a congruence perspective, $-1$ and $2$ are both valid representatives of the same congruence class modulo $3$.`,
        icon: '%',
        cardWidth: 600,
        cardHeight: 320,
        overflowBehavior: 5,
        link: '/arithmetic/modulo/negative-numbers',
        linkTitle: 'Negative Modulo'
      },
      

      // Row 9: [N] GCF Calc | [W] LCM Calc
      {
        id: 17,
        htmlId: 'gcf-calculator',
        title: 'GCF Calculator',
        summary: 'Find the greatest common factor of 2–6 numbers',
        content: `Calculate GCF using the Euclidean algorithm or prime factorization. Supports up to 6 numbers with step-by-step explanations of how each method arrives at the answer.`,
        icon: '=',
        cardWidth: 400,
        cardHeight: 260,
        overflowBehavior: 3,
        link: '/arithmetic/calculators/gcf-calculator',
        linkTitle: 'Open GCF Calculator'
      },
      {
        id: 18,
        htmlId: 'lcm-calculator',
        title: 'LCM Calculator',
        summary: 'Compute the least common multiple instantly',
        content: `Find the LCM of 2–6 numbers using prime factorization or the GCD formula. Dynamic input fields and visual explanations show the computation process.`,
        icon: '=',
        cardWidth: 800,
        cardHeight: 260,
        overflowBehavior: 3,
        link: '/arithmetic/calculators/lcm-calculator',
        linkTitle: 'Open LCM Calculator'
      },

      // Row 10: [W] Divisibility Calc | [N] Prime Checker
      {
        id: 19,
        htmlId: 'divisibility-calculator',
        title: 'Divisibility Calculator',
        summary: 'Test divisibility rules and check remainders',
        content: `Two modes: single divisor for specific tests, or common divisors to test $2, 3, 4, 5, 6, 8, 9, 10, 12$ at once. Color-coded results show divisibility status, quotients, and remainders.`,
        icon: '=',
        cardWidth: 800,
        cardHeight: 260,
        overflowBehavior: 3,
        link: '/arithmetic/calculators/divisibility-calculator',
        linkTitle: 'Open Divisibility Calculator'
      },
      {
        id: 20,
        htmlId: 'prime-calculator',
        title: 'Prime Number Checker',
        summary: 'Test whether a number is prime or composite',
        content: `Quick check mode for instant primality testing, or detailed mode to view all factors. Efficient algorithm handles numbers up to millions.`,
        icon: '=',
        cardWidth: 400,
        cardHeight: 260,
        overflowBehavior: 3,
        link: '/arithmetic/calculators/prime-calculator',
        linkTitle: 'Open Prime Checker'
      },

      // Row 11: [N] Div Table | [W] Div Tree
      {
        id: 21,
        htmlId: 'divisibility-table',
        title: 'Divisibility Table',
        summary: 'Interactive table showing divisibility relationships',
        content: `Visual grid displaying which numbers divide which, revealing patterns in factor relationships across a range of integers.`,
        icon: '#',
        cardWidth: 600,
        cardHeight: 260,
        overflowBehavior: 3,
        link: '/arithmetic/visual-tools/divisibility-table',
        linkTitle: 'Open Divisibility Table'
      },
      {
        id: 22,
        htmlId: 'divisibility-tree',
        title: 'Divisibility Tree',
        summary: 'Factor tree diagrams for prime factorization',
        content: `Interactive tree visualization that breaks numbers down into their prime factors step by step, showing the branching structure of factorization.`,
        icon: '#',
        cardWidth: 600,
        cardHeight: 260,
        overflowBehavior: 3,
        link: '/arithmetic/visual-tools/divisibility-tree',
        linkTitle: 'Open Divisibility Tree'
      },
      // {
      //    id:23,
      //    content:'',

      // }
    ]
  }
};


   return {
      props:{
        landingPageData,
          seoData: {
        title: "Arithmetic: Divisibility, Fractions & Modulo | Learn Math Class",
        description: "Master arithmetic fundamentals: divisibility, factors, primes, GCD, LCM, fractions, modulo, and modular arithmetic. Interactive calculators and visual tools.",
        keywords: keyWords.join(", "),
        url: "/arithmetic",
        name: "Arithmetic"
      },

       }
    }
   }

export default function ArithmeticPage({seoData, landingPageData}) {

return (
   <>
   <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />

  <meta name="robots" content="index, follow" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head>
   <br/>
   <br/>
   <LandingPage {...landingPageData} />
   </>
  )
}
