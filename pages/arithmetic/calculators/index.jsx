import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import StaticCards from '@/app/components/cards/static-cards/StaticCards';
import '../../pages.css';

export async function getStaticProps() {
  const calculatorCards = [
    {
      id: 1,
      title: 'GCF Calculator',
      summary: 'Find the greatest common factor of 2-6 numbers',
      content: 'Calculate GCF using Euclidean Algorithm or Prime Factorization methods. Perfect for simplifying fractions, finding common divisors, and solving number theory problems. Supports up to 6 numbers with instant results.',
      icon: '🔢',
      link: '/arithmetic/calculators/gcf-calculator',
      linkTitle: 'Open GCF Calculator'
    },
    {
      id: 2,
      title: 'LCM Calculator',
      summary: 'Calculate the least common multiple instantly',
      content: 'Find LCM of 2-6 numbers using Prime Factorization or GCF Formula. Essential for adding fractions with different denominators, finding common multiples, and scheduling problems. Dynamic input fields and visual explanations.',
      icon: '📐',
      link: '/arithmetic/calculators/lcm-calculator',
      linkTitle: 'Open LCM Calculator'
    },
    {
      id: 3,
      title: 'Divisibility Calculator',
      summary: 'Test divisibility rules and check remainders',
      content: 'Check if numbers divide evenly with two modes: Single Divisor for specific tests or Common Divisors to test 2,3,4,5,6,8,9,10,12 at once. Color-coded results show divisibility status, quotients, and remainders instantly.',
      icon: '➗',
      link: '/arithmetic/calculators/divisibility-calculator',
      linkTitle: 'Open Divisibility Calculator'
    },
    {
      id: 4,
      title: 'Prime Number Checker',
      summary: 'Verify if numbers are prime or composite',
      content: 'Test primality instantly with Quick Check mode or view all factors in detailed mode. Efficient algorithm works for numbers up to millions. Perfect for learning number theory, cryptography, and mathematical problem-solving.',
      icon: '🔍',
      link: '/arithmetic/calculators/prime-calculator',
      linkTitle: 'Open Prime Checker'
    }
  ];

  return {
    props: {
      calculatorCards,
      seoData: {
        title: "Arithmetic Calculators | GCF, LCM, Divisibility & Prime Checker",
        description: "Free arithmetic calculators for number theory: GCF, LCM, divisibility testing, and prime number checking. Instant results with detailed explanations.",
        keywords: "arithmetic calculators, gcf calculator, lcm calculator, divisibility calculator, prime number checker, number theory tools",
        url: "/arithmetic/calculators"
      }
    },
    revalidate: 86400
  };
}

export default function ArithmeticCalculatorsPage({ calculatorCards, seoData }) {
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
        
        <meta name="robots" content="index, follow" />
      </Head>

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
      
      <h1 className='title' style={{marginTop:'-20px', marginBottom:'20px'}}>
        Arithmetic Calculators
      </h1>
      
      <p style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 60px auto',
        fontSize: '18px',
        color: '#4a5568',
        lineHeight: '1.6'
      }}>
        Powerful number theory tools for GCF, LCM, divisibility, and prime testing. 
        Perfect for students, teachers, and mathematicians.
      </p>

      <StaticCards 
        cards={calculatorCards} 
        theme="elegant"
        layout="grid"
      />
      
      <br/>
      <br/>
      <br/>
    </>
  );
}