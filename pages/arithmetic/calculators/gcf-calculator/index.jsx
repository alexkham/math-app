import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import GCFCalculator from '@/app/components/calculators/algebra/GCFCalculator';
import '../../../../pages/pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ExplanationDetails from '@/app/components/ExplanationDetails';

export async function getStaticProps() {

const navigationGroup=[
  {title:'Arithmetic Calculators',
    items:[
      {title:'Factoring Calculator',link:'/calculators/factoring-calculator'},
      {title:'LCM Calculator',link:'/arithmetic/calculators/lcm-calculator'},
      {title:'Divisibility Calculator',link:'/arithmetic/calculators/divisibility-calculator'},
      {title:'Prime Number Checker',link:'/arithmetic/calculators/prime-checker'},
    ]
  },
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fraction Calculator',link:'/calculators/fraction-calculator'},
    ]
  }
]

const detailInstructions = [
  "Select your calculation method (Euclidean Algorithm or Prime Factorization)",
  "Enter at least 2 numbers (up to 6 numbers supported)",
  "Click the + button to add more number fields if needed",
  "Click Calculate to find the greatest common factor",
  "View the GCF result and use Reset to start over"
];

const keyWords = [
  'gcf calculator',
  'greatest common factor calculator',
  'gcd calculator',
  'greatest common divisor',
  'gcf finder',
  'common factor calculator',
  'hcf calculator',
  'highest common factor',
  'euclidean algorithm calculator',
  'find gcf online',
  'gcf of two numbers',
  'gcf of multiple numbers',
  'prime factorization gcf',
  'free gcf calculator',
  'greatest common factor tool'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the GCF Calculator`,
    content: `The GCF calculator helps you find the greatest common factor of two or more numbers. Start by choosing your calculation method using the radio buttons at the top: **Euclidean Algorithm** (faster for large numbers) or **Prime Factorization** (shows how it works).

Enter your first number in the "Number 1" field and your second number in the "Number 2" field. The calculator accepts positive integers of any size. Try simple examples like finding the GCF of $12$ and $18$, or larger numbers like $144$ and $96$.

To find the GCF of more than two numbers, click the **+ Add Number** button below the input fields. You can add up to $6$ numbers total. Each additional field will appear with its own input box and a remove button (×) if you want to delete it later.

After entering your numbers, click the blue **Calculate** button. The GCF result appears in the result box below the inputs. The calculator works instantly, even with large numbers. Use **Reset** to clear all fields and start fresh with new numbers.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using the Euclidean Algorithm Method`,
    content: `Select **Euclidean Algorithm** as your calculation method for the fastest GCF computation. This ancient method uses division and remainders to find the GCF efficiently without breaking numbers into prime factors. It works especially well for large numbers.

The algorithm repeatedly divides the larger number by the smaller number, then replaces the larger number with the smaller and the smaller with the remainder. This continues until the remainder is $0$. Try finding GCF($48$, $18$): divide $48 ÷ 18 = 2$ remainder $12$, then $18 ÷ 12 = 1$ remainder $6$, then $12 ÷ 6 = 2$ remainder $0$. The GCF is $6$.

For more than two numbers, the calculator applies this method repeatedly. It finds GCF(first, second), then finds GCF(result, third), and so on. Enter $12$, $18$, and $24$ to see this in action—the GCF is $6$ because it divides evenly into all three numbers.

This method is mathematically proven to always find the correct GCF. It's faster than prime factorization for numbers with hundreds or thousands of digits, making it the preferred method for computational efficiency in computer science and cryptography.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using the Prime Factorization Method`,
    content: `Switch to **Prime Factorization** mode to see how GCF works through prime factors. This method breaks each number into its prime building blocks, then multiplies the common primes together. It's more visual and helps you understand why the GCF is what it is.

For example, to find GCF($12$, $18$): Break $12 = 2 × 2 × 3$ and $18 = 2 × 3 × 3$. The common prime factors are one $2$ and one $3$, so GCF = $2 × 3 = 6$. The calculator performs this factorization automatically for any numbers you enter.

This method clearly shows which prime factors the numbers share. Try GCF($24$, $36$): $24 = 2 × 2 × 2 × 3$ and $36 = 2 × 2 × 3 × 3$. Common factors are $2 × 2 × 3 = 12$. You take the lowest power of each common prime.

Prime factorization is excellent for learning and understanding GCF conceptually. It connects to other number theory topics like **LCM** (least common multiple), **simplifying fractions**, and **finding common denominators**. The method works perfectly for small to medium-sized numbers.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Adding and Removing Number Fields`,
    content: `The calculator starts with two input fields, but you can find the GCF of up to $6$ numbers. Click the **+ Add Number** button (with dashed border) below your current inputs to add another field. A new input box appears labeled "Number 3", "Number 4", etc.

Each additional field includes a small **×** button on the right side. Click this red × button to remove that specific number field. You cannot remove fields if you only have two remaining—the calculator always requires at least two numbers to compute a GCF.

Adding multiple numbers is useful for real-world problems. For instance, if you're arranging $12$, $18$, $24$, and $30$ items into equal groups, the GCF tells you the largest possible group size: $6$ items per group. Try entering these numbers to verify.

The calculator processes all numbers simultaneously using the Euclidean algorithm repeatedly. GCF($a$, $b$, $c$) = GCF(GCF($a$, $b$), $c$). This means finding the GCF of three numbers is just finding the GCF of two numbers, then finding the GCF of that result with the third number.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding the GCF Result`,
    content: `After clicking Calculate, the GCF result appears in the white result box. The number shown is the largest integer that divides evenly into all your input numbers. For GCF($12$, $18$) = $6$, this means $6$ is the biggest number that goes into both $12$ and $18$ with no remainder.

If you get GCF = $1$, your numbers are **relatively prime** or **coprime**. They share no common factors except $1$. Try GCF($7$, $15$) = $1$, or GCF($8$, $9$) = $1$. These pairs have no common divisors, making them useful in fraction simplification and cryptography.

Large GCF values indicate numbers with many shared factors. GCF($24$, $36$) = $12$ shows these numbers are highly related—they're both multiples of $12$. In contrast, GCF($25$, $36$) = $1$ shows these numbers share nothing except $1$.

The GCF result is always positive, even if you could enter negative numbers (though this calculator requires positive integers). Mathematically, GCF($-12$, $18$) = GCF($12$, $18$) = $6$ because divisibility properties are the same for negative numbers.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Error Messages`,
    content: `The calculator validates your input before computing. If you see **"Error: Enter at least 2 valid integers"** in red text, you either left a field empty, entered fewer than two numbers, or typed non-numeric characters like letters or symbols.

Make sure each number field contains a positive whole number. The calculator accepts integers only—no decimals, fractions, or negative numbers. Try entering $12.5$ and you'll get an error because GCF is defined only for integers.

If a number field is blank when you click Calculate, the calculator ignores that field. This means if you have six fields but only filled three, it computes GCF using just those three numbers. Remove unnecessary blank fields with the × button for cleaner results.

Zero is not accepted as a valid input because GCF($0$, $n$) is mathematically undefined in standard usage. Every number divides $0$, so there's no "greatest" common factor. Keep all inputs as positive integers greater than zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What is the Greatest Common Factor`,
    content: `The greatest common factor (GCF), also called greatest common divisor (GCD) or highest common factor (HCF), is the largest positive integer that divides evenly into two or more numbers. For GCF($12$, $18$) = $6$, the number $6$ is the biggest integer that goes into both $12$ and $18$ with zero remainder.

Think of GCF as finding the biggest building block shared by multiple numbers. The numbers $12$ and $18$ can both be built from groups of $6$: $12 = 6 × 2$ and $18 = 6 × 3$. You cannot use groups of $7$ or larger because those won't divide both numbers evenly.

GCF is fundamental to **fraction simplification**. To reduce $\\frac{12}{18}$, divide numerator and denominator by GCF($12$, $18$) = $6$ to get $\\frac{2}{3}$. This is why GCF is essential in elementary arithmetic and algebra.

Common factors are the divisors shared by all numbers. For $12$ and $18$, the common factors are $1, 2, 3, 6$. The **greatest** of these common factors is $6$. Finding the GCF efficiently requires algorithms like Euclid's or prime factorization rather than listing all factors.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Applications of GCF`,
    content: `**Simplifying Fractions**: Reduce fractions to lowest terms by dividing numerator and denominator by their GCF. The fraction $\\frac{24}{36}$ simplifies to $\\frac{2}{3}$ because GCF($24$, $36$) = $12$, and $\\frac{24÷12}{36÷12} = \\frac{2}{3}$.

**Dividing Items into Groups**: If you have $12$ apples and $18$ oranges and want to make identical fruit baskets, GCF($12$, $18$) = $6$ tells you the maximum number of baskets: $6$ baskets with $2$ apples and $3$ oranges each.

**Finding Common Denominators**: When adding fractions like $\\frac{1}{12} + \\frac{1}{18}$, you need the least common multiple (LCM), which connects to GCF through the formula: LCM($a$, $b$) × GCF($a$, $b$) = $a × b$.

**Tiling and Design**: If you're tiling a $24$ inch by $36$ inch rectangle with square tiles, GCF($24$, $36$) = $12$ tells you the largest square tile size that fits perfectly: $12$ inch × $12$ inch tiles with no cutting or waste.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `GCF vs LCM`,
    content: `GCF (greatest common factor) finds the **largest** number that divides into all inputs. LCM (least common multiple) finds the **smallest** number that all inputs divide into. These are inverse concepts that work together in number theory.

For GCF($12$, $18$) = $6$ and LCM($12$, $18$) = $36$, notice that $6 × 36 = 216 = 12 × 18$. This relationship always holds: GCF($a$, $b$) × LCM($a$, $b$) = $a × b$ for any two positive integers $a$ and $b$.

Use GCF when **dividing or reducing**: simplifying fractions, splitting items into equal groups, finding common factors. Use LCM when **combining or building up**: adding fractions with different denominators, finding common multiples, scheduling repeating events.

Think of GCF as "breaking down" to find shared divisors, while LCM is "building up" to find common multiples. For $4$ and $6$: GCF = $2$ (largest shared divisor), LCM = $12$ (smallest shared multiple). Both concepts use the same prime factorization but apply it differently.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Concepts`,
    content: `**LCM Calculator** - Find the least common multiple of two or more numbers. Perfect companion to GCF for fraction operations and finding common multiples. Uses the relationship LCM($a$, $b$) = $\\frac{a × b}{\\text{GCF}(a, b)}$.

**Factoring Calculator** - Break numbers into prime factors or find all factors. Essential for understanding why GCF works and seeing the prime factorization method step-by-step.

**Divisibility Calculator** - Test if numbers divide evenly into each other. Helps verify GCF results and understand divisibility relationships between numbers.

**Prime Number Checker** - Verify if numbers are prime. Prime numbers have GCF = $1$ with any number not divisible by them, making them useful for understanding coprime relationships.

**Fraction Calculator** - Simplify fractions automatically using GCF. Combines fraction operations with automatic reduction to lowest terms.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is GCF and how does this calculator work?",
    answer: "GCF (Greatest Common Factor) is the largest positive integer that divides evenly into two or more numbers. This calculator finds the GCF using either the Euclidean Algorithm (fast, efficient method) or Prime Factorization (visual, educational method). Enter 2-6 numbers, choose your method, and click Calculate to see the result instantly."
  },
  obj2: {
    question: "What's the difference between Euclidean Algorithm and Prime Factorization methods?",
    answer: "The Euclidean Algorithm uses repeated division and remainders—it's faster and works well for large numbers. Prime Factorization breaks each number into prime factors and multiplies the common ones—it's more visual and helps you understand why the GCF is what it is. Both methods always give the same correct answer."
  },
  obj3: {
    question: "Can I find the GCF of more than two numbers?",
    answer: "Yes! Click the + Add Number button to add up to 6 number fields total. The calculator finds GCF of multiple numbers by repeatedly applying the algorithm: GCF(a,b,c) = GCF(GCF(a,b), c). This works for any quantity of numbers from 2 to 6."
  },
  obj4: {
    question: "What does it mean if the GCF is 1?",
    answer: "When GCF = 1, the numbers are relatively prime (or coprime)—they share no common factors except 1. For example, GCF(8,9) = 1 and GCF(7,15) = 1. These number pairs are useful in fraction simplification and cryptography because they have no common divisors."
  },
  obj5: {
    question: "How do I use GCF to simplify fractions?",
    answer: "To simplify a fraction, divide both numerator and denominator by their GCF. For 24/36: find GCF(24,36) = 12, then divide both by 12 to get 2/3. This reduces the fraction to lowest terms because 2 and 3 have GCF = 1 (they're coprime)."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GCF Calculator - Greatest Common Factor",
    "description": "Free online GCF calculator finds the greatest common factor of 2-6 numbers using Euclidean Algorithm or Prime Factorization. Simplify fractions and solve math problems instantly.",
    "url": "https://www.learnmathclass.com/arithmetic/calculators/gcf-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Find GCF of 2 to 6 numbers simultaneously",
      "Euclidean Algorithm method for fast calculation",
      "Prime Factorization method for educational visualization",
      "Dynamic add/remove number fields",
      "Instant calculation for any size integers",
      "Clear result display with error validation",
      "Perfect for fraction simplification"
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
    "educationalLevel": "Elementary School, Middle School, High School",
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
        "name": "Arithmetic Calculators",
        "item": "https://www.learnmathclass.com/arithmetic/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "GCF Calculator",
        "item": "https://www.learnmathclass.com/arithmetic/calculators/gcf-calculator"
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
};

return {
  props: {
    sectionsContent,
    navigationGroup,
    faqQuestions,
    schemas,
    detailInstructions,
    seoData: {
      title: "GCF Calculator | Greatest Common Factor of 2-6 Numbers",
      description: "Free GCF calculator finds the greatest common factor instantly using Euclidean Algorithm or Prime Factorization. Perfect for simplifying fractions and solving math problems.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/calculators/gcf-calculator",
      name: "GCF Calculator - Greatest Common Factor Tool"
    },
  },
  revalidate: 86400
};
}

export default function GCFCalculatorPage({seoData, sectionsContent, navigationGroup, faqQuestions, schemas, detailInstructions}) {

const genericSections = Object.keys(sectionsContent).map((key, index) => ({
  id: `${index + 1}`,
  title: sectionsContent[key].title,
  link: sectionsContent[key].link,
  content: [sectionsContent[key].content]
}));

const explanations = {
  euclidean: {
    text: "The Euclidean algorithm finds the GCF by repeatedly dividing and taking remainders. It's the most efficient method for finding the greatest common factor of two or more numbers."
  },
  prime: {
    text: "The prime factorization method finds GCF by breaking each number into prime factors, then multiplying the common prime factors. This method clearly shows why the GCF works."
  }
};

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
      />
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />
    </Head>

    <style jsx>{`
      @media (max-width: 1024px) {
        .layout-container > div:first-child,
        .layout-container > div:first-child *,
        :global([class*="vertical"]),
        :global([class*="vertical"]) * {
          position: static !important;
        }
      }
      
      .layout-container {
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 20px;
        width: 100%;
      }
      
      @media (max-width: 1024px) {
        .layout-container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <OperaSidebar
      side='right'
      sidebarWidth='45px'
      panelWidth='300px'
      iconColor='white'
      panelBackgroundColor='#f2f2f2'
    />
    
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'0px'}}>GCF Calculator</h1>
    <br/>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use GCF Calculator'
      />
    </div>
    
    <div className="layout-container"> 
      <div style={{marginTop:'30px',marginLeft:'5px'}}>
        <br/>
        <VerticalButtonGroup 
          items={navigationGroup}
          width="250px"       
          theme='lightBlue'
          isSticky={true}
          verticalOffset='150px'
        />
      </div>

      <div>
        <div style={{width:'100%', maxWidth:'900px',marginLeft:'100px'}}>
          <GCFCalculator explanations={explanations} />
          <br/>
        </div>
      </div>
    </div>
    
    <br/>
    <br/>
    <SectionTableOfContents sections={genericSections}/>
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
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Sections sections={genericSections}/>
    <br/>
    <br/>
    <br/>
  </>
);
}