import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import LCMCalculator from '@/app/components/calculators/algebra/LCMCalculator';
import '../../../../pages/pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ExplanationDetails from '@/app/components/ExplanationDetails';

export async function getStaticProps() {

const navigationGroup=[
  {title:'Arithmetic Calculators',
    items:[
      {title:'Factoring Calculator',link:'/calculators/factoring-calculator'},
      {title:'GCF Calculator',link:'/arithmetic/calculators/gcf-calculator'},
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
  "Select your calculation method (Prime Factorization or GCF Formula)",
  "Enter at least 2 numbers (up to 6 numbers supported)",
  "Click the + button to add more number fields if needed",
  "Click Calculate to find the least common multiple",
  "View the LCM result and use Reset to start over"
];

const keyWords = [
  'lcm calculator',
  'least common multiple calculator',
  'lcm finder',
  'lowest common multiple',
  'common multiple calculator',
  'lcm of two numbers',
  'lcm of multiple numbers',
  'prime factorization lcm',
  'find lcm online',
  'free lcm calculator',
  'least common denominator',
  'lcd calculator',
  'lcm calculator with steps',
  'multiple calculator',
  'common denominator finder'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the LCM Calculator`,
    content: `The LCM calculator finds the least common multiple of two or more numbers—the smallest positive integer that all your numbers divide into evenly. Start by choosing your calculation method: **Prime Factorization** (educational, shows the process) or **GCF Formula** (uses the relationship between LCM and GCF).

Enter your first number in "Number 1" and second number in "Number 2". The calculator accepts any positive integers. Try finding LCM($4$, $6$) = $12$, or LCM($8$, $12$) = $24$. These are common examples used in fraction addition.

To find LCM of more than two numbers, click **+ Add Number**. You can enter up to $6$ numbers total. Each new field appears with a remove button (×) if you want to delete it. For example, find LCM($2$, $3$, $4$) = $12$.

Click the blue **Calculate** button to see your result instantly. The LCM appears in the result box below the inputs. Use **Reset** to clear all fields and try different numbers. The calculator handles large numbers efficiently.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Prime Factorization Method`,
    content: `Select **Prime Factorization** to see how LCM works through prime factors. This method breaks each number into primes, then takes the highest power of each prime that appears. The result is the smallest number containing all prime factors from all inputs.

For LCM($12$, $18$): Break $12 = 2^2 × 3$ and $18 = 2 × 3^2$. Take the highest power of each prime: $2^2$ and $3^2$. Multiply them: LCM = $2^2 × 3^2 = 4 × 9 = 36$. This is the smallest number divisible by both $12$ and $18$.

Try LCM($8$, $12$, $18$): Factor as $8 = 2^3$, $12 = 2^2 × 3$, $18 = 2 × 3^2$. Highest powers: $2^3$, $3^2$. Result: $2^3 × 3^2 = 8 × 9 = 72$. You can verify: $72 ÷ 8 = 9$, $72 ÷ 12 = 6$, $72 ÷ 18 = 4$.

This method visualizes why LCM works and connects to other number theory concepts. It's especially useful for understanding **common denominators** in fraction addition: to add $\\frac{1}{12} + \\frac{1}{18}$, convert to denominator $36$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using GCF Formula Method`,
    content: `Switch to **GCF Formula** to use the mathematical relationship: LCM($a$, $b$) = $\\frac{a × b}{\\text{GCF}(a, b)}$. This formula calculates LCM quickly using the greatest common factor. The calculator computes GCF first, then applies the formula automatically.

For LCM($12$, $18$): Calculate GCF($12$, $18$) = $6$. Then LCM = $\\frac{12 × 18}{6} = \\frac{216}{6} = 36$. This method is computationally faster than prime factorization for large numbers.

The relationship between GCF and LCM is fundamental: GCF finds the largest shared divisor (breaking down), while LCM finds the smallest shared multiple (building up). Notice that GCF($12$, $18$) × LCM($12$, $18$) = $6 × 36 = 216 = 12 × 18$.

For more than two numbers, the calculator applies the formula repeatedly: LCM($a$, $b$, $c$) = LCM(LCM($a$, $b$), $c$). First find LCM of first two numbers, then find LCM of that result with the third number, and so on.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Adding and Removing Number Fields`,
    content: `The calculator starts with two inputs but supports up to $6$ numbers. Click the **+ Add Number** button (dashed border) to add fields. New inputs appear labeled "Number 3", "Number 4", etc. Each has its own input box and tooltip.

Remove any field by clicking its **×** button on the right. You cannot remove fields if only two remain—LCM requires at least two numbers. The calculator automatically adjusts to whatever number of fields you have filled with valid integers.

Finding LCM of multiple numbers is common in **scheduling problems**. If events repeat every $4$, $6$, and $9$ days, they coincide every LCM($4$, $6$, $9$) = $36$ days. Try entering these to verify.

Each additional number potentially increases the LCM. For example, LCM($2$, $3$) = $6$, but LCM($2$, $3$, $4$) = $12$, and LCM($2$, $3$, $4$, $5$) = $60$. The LCM grows because it must contain all prime factors from all inputs.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding the LCM Result`,
    content: `After clicking Calculate, the LCM result shows the smallest positive integer divisible by all your inputs. For LCM($4$, $6$) = $12$, you can verify: $12 ÷ 4 = 3$ and $12 ÷ 6 = 2$. Both divisions give whole numbers with no remainder.

If inputs share many factors, the LCM is relatively small. LCM($6$, $9$) = $18$ because $6$ and $9$ share the factor $3$. If inputs are **coprime** (GCF = $1$), the LCM equals their product. LCM($5$, $7$) = $35 = 5 × 7$ because $5$ and $7$ share no common factors.

Large LCM values indicate numbers with few shared factors. LCM($7$, $11$, $13$) = $1001$ because these are all prime and share nothing. In contrast, LCM($12$, $18$, $24$) = $72$ is smaller relative to the inputs because they share many factors.

The LCM result always appears as a positive integer. Mathematically, LCM is defined only for positive integers, though the underlying principles work with negative numbers (their LCM would be the same as the positive versions).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Error Messages`,
    content: `The calculator validates inputs before computing. If you see **"Error: Enter at least 2 valid integers"** in red, you either left fields empty, entered fewer than two numbers, or typed non-numeric characters.

Each field must contain a positive whole number. The calculator rejects decimals ($4.5$), fractions ($\\frac{1}{2}$), and negative numbers ($-8$). LCM is defined only for positive integers. Try entering $3.14$ and you'll get an error.

Blank fields are ignored during calculation. If you create six fields but only fill four, the calculator computes LCM using those four numbers. For cleaner results, remove unused fields with the × button.

Zero is not accepted because LCM involving $0$ is mathematically undefined or trivial (every number divides $0$, but there's no "least" multiple). Keep all inputs as positive integers greater than zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What is the Least Common Multiple`,
    content: `The least common multiple (LCM), also called lowest common multiple, is the smallest positive integer that is a multiple of two or more numbers. For LCM($4$, $6$) = $12$, the number $12$ is the smallest integer that both $4$ and $6$ divide into evenly.

Think of multiples as numbers you get when counting by a certain value. Multiples of $4$ are $4, 8, 12, 16, 20...$. Multiples of $6$ are $6, 12, 18, 24, 30...$. The **common multiples** are $12, 24, 36...$. The **least** of these is $12$.

LCM is essential for **fraction addition with different denominators**. To add $\\frac{1}{4} + \\frac{1}{6}$, convert both to denominator LCM($4$, $6$) = $12$: $\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$. This is why LCM is also called the least common denominator (LCD).

Finding LCM by listing multiples is inefficient for large numbers. Algorithms using **prime factorization** or the **GCF formula** compute LCM much faster. For LCM($144$, $216$), listing multiples would be tedious, but prime factorization gives $432$ instantly.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Applications of LCM`,
    content: `**Adding Fractions**: Find common denominators for fraction addition. To add $\\frac{1}{6} + \\frac{1}{8}$, use LCM($6$, $8$) = $24$ as denominator: $\\frac{4}{24} + \\frac{3}{24} = \\frac{7}{24}$.

**Scheduling and Cycles**: If two events repeat every $4$ and $6$ days, they coincide every LCM($4$, $6$) = $12$ days. Three buses departing every $10$, $15$, and $20$ minutes all leave together every LCM($10$, $15$, $20$) = $60$ minutes.

**Gear and Rotation Problems**: If gear A has $12$ teeth and gear B has $18$ teeth, after how many teeth rotations do they align again? LCM($12$, $18$) = $36$ teeth. This is $3$ full rotations of A and $2$ full rotations of B.

**Tile and Pattern Design**: When creating repeating patterns with tiles of different sizes, LCM tells you the repeat length. Patterns of width $4$ inches and $6$ inches repeat every LCM($4$, $6$) = $12$ inches.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `LCM vs GCF`,
    content: `LCM (least common multiple) finds the **smallest** number that all inputs divide into. GCF (greatest common factor) finds the **largest** number that divides into all inputs. These are complementary concepts with an inverse relationship.

For LCM($12$, $18$) = $36$ and GCF($12$, $18$) = $6$, notice the product relationship: $36 × 6 = 216 = 12 × 18$. This formula always holds: LCM($a$, $b$) × GCF($a$, $b$) = $a × b$ for any positive integers.

Use LCM when **combining or building up**: adding fractions, finding common multiples, scheduling coinciding events. Use GCF when **dividing or reducing**: simplifying fractions, splitting items into groups, finding common divisors.

Both use prime factorization but differently. For GCF, take the **lowest** power of each common prime. For LCM, take the **highest** power of each prime that appears anywhere. Understanding both concepts together provides deep insight into number structure.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Concepts`,
    content: `**GCF Calculator** - Find the greatest common factor. Essential companion to LCM since LCM($a$, $b$) = $\\frac{a × b}{\\text{GCF}(a, b)}$. Both concepts work together in fraction operations.

**Factoring Calculator** - Break numbers into prime factors. Understanding prime factorization is key to seeing how LCM works and computing it manually.

**Fraction Calculator** - Add, subtract, multiply, and divide fractions with automatic LCM calculation for common denominators. Combines fraction operations with LCM.

**Divisibility Calculator** - Test if the LCM divides evenly into other numbers or verify that your inputs divide evenly into the LCM result.

**Modulo Calculator** - Find remainders when dividing. Related to LCM because LCM is the first number where all inputs give remainder $0$.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is LCM and how does this calculator work?",
    answer: "LCM (Least Common Multiple) is the smallest positive integer that is divisible by two or more numbers. This calculator finds LCM using either Prime Factorization (takes highest power of each prime) or GCF Formula (uses LCM = a×b/GCF). Enter 2-6 numbers, choose your method, and get instant results."
  },
  obj2: {
    question: "What's the difference between Prime Factorization and GCF Formula methods?",
    answer: "Prime Factorization breaks each number into primes and takes the highest power of each prime that appears—it's educational and visual. GCF Formula uses the relationship LCM(a,b) = a×b/GCF(a,b)—it's faster for computation. Both methods give the same correct answer."
  },
  obj3: {
    question: "How do I use LCM to add fractions?",
    answer: "Use LCM as the common denominator. To add 1/4 + 1/6, find LCM(4,6) = 12. Convert: 1/4 = 3/12 and 1/6 = 2/12. Then add: 3/12 + 2/12 = 5/12. The LCM gives you the least common denominator (LCD)."
  },
  obj4: {
    question: "What's the relationship between LCM and GCF?",
    answer: "LCM and GCF are inverse concepts connected by the formula: LCM(a,b) × GCF(a,b) = a × b. For example, LCM(12,18) = 36 and GCF(12,18) = 6, and 36 × 6 = 216 = 12 × 18. This relationship helps compute one from the other."
  },
  obj5: {
    question: "Can I find LCM of more than two numbers?",
    answer: "Yes! Click + Add Number to enter up to 6 numbers. The calculator finds LCM of multiple numbers by applying the algorithm repeatedly: LCM(a,b,c) = LCM(LCM(a,b), c). This works for any quantity from 2 to 6 numbers."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "LCM Calculator - Least Common Multiple",
    "description": "Free online LCM calculator finds the least common multiple of 2-6 numbers using Prime Factorization or GCF Formula. Perfect for adding fractions and solving math problems.",
    "url": "https://www.learnmathclass.com/arithmetic/calculators/lcm-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Find LCM of 2 to 6 numbers simultaneously",
      "Prime Factorization method for visual learning",
      "GCF Formula method for fast calculation",
      "Dynamic add/remove number fields",
      "Instant calculation for any size integers",
      "Perfect for fraction addition and LCD finding",
      "Clear result display with validation"
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
        "name": "LCM Calculator",
        "item": "https://www.learnmathclass.com/arithmetic/calculators/lcm-calculator"
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
      title: "LCM Calculator | Least Common Multiple of 2-6 Numbers",
      description: "Free LCM calculator finds the least common multiple instantly using Prime Factorization or GCF Formula. Perfect for adding fractions and finding common denominators.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/calculators/lcm-calculator",
      name: "LCM Calculator - Least Common Multiple Tool"
    },
  },
  revalidate: 86400
};
}

export default function LCMCalculatorPage({seoData, sectionsContent, navigationGroup, faqQuestions, schemas, detailInstructions}) {

const genericSections = Object.keys(sectionsContent).map((key, index) => ({
  id: `${index + 1}`,
  title: sectionsContent[key].title,
  link: sectionsContent[key].link,
  content: [sectionsContent[key].content]
}));

const explanations = {
  prime: {
    text: "The prime factorization method finds LCM by breaking each number into prime factors, then taking the highest power of each prime that appears. This gives you the smallest number divisible by all inputs."
  },
  formula: {
    text: "The formula method uses LCM(a,b) = (a × b) / GCF(a,b). For multiple numbers, apply this formula repeatedly. This method is efficient and works well for any set of numbers."
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
    
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'0px'}}>LCM Calculator</h1>
    <br/>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use LCM Calculator'
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
          <LCMCalculator explanations={explanations} />
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