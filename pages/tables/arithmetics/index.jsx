import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { LogIn, Activity, Binary, TrendingUp,Radical,SquareRadical } from 'lucide-react';
import styles from './arithmetics.module.css';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import { capitalizeWords } from '@/app/utils/utils-functions';



const BaseConverterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/>
    <circle cx="18" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="18" r="3"/>
    <path d="m9 6 6 0"/>
    <path d="m9 18 6 0"/>
    <path d="m6 9 0 6"/>
    <path d="m18 9 0 6"/>
    <text x="6" y="7" fontSize="4" textAnchor="middle" fill="currentColor">2</text>
    <text x="18" y="7" fontSize="4" textAnchor="middle" fill="currentColor">8</text>
    <text x="6" y="19" fontSize="4" textAnchor="middle" fill="currentColor">10</text>
    <text x="18" y="19" fontSize="4" textAnchor="middle" fill="currentColor">16</text>
  </svg>
)

const MultiplicationIcon=()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-asterisk-icon lucide-square-asterisk"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8.5 14 7-4"/><path d="m8.5 10 7 4"/></svg>
)


const arithmeticTables = [
  {
    name: 'Logarithms (Base 10)',
    description: 'Standard logarithmic table with explanations and usage guide.',
    icon: LogIn,
    path: '/tables/arithmetics/logarithm'
  },
  {
    name: 'Natural Logarithms',
    description: 'Logarithms with base e, fundamental in calculus and natural sciences.',
    icon: Activity,
    path: '/tables/arithmetics/natural-logarithms'
  },
  {
    name: 'Binary Logarithms',
    description: 'Logarithms with base 2, essential in computer science and information theory.',
    icon: Binary,
    path: '/tables/arithmetics/binary-logarithms'
  },
  {
    name: 'Exponential Table for Natural Logarithm (e)',
    description: 'Table of exponential values, crucial for growth and decay calculations.',
    icon: TrendingUp,
    path: '/tables/arithmetics/exponential-table'
  },
  {
    name: 'Powers of Integer Numbers',
    description: 'Explore Exponents Chart for numbers from 1 to 10',
    icon: TrendingUp,
    path: '/tables/arithmetics/powers-table'
  },

  {
    name: 'Perfect Squares and Square Roots Table',
    description: 'Explore perfect squares and their roots from 1 to 10000',
    icon: Radical,
    path: '/tables/arithmetics/perfect-squares'
  },
  {
    name: 'Perfect Cubes and Cube Roots Table',
    description: 'Explore perfect cubes and their roots from 1 to 1000000',
    icon: SquareRadical,
    path: '/tables/arithmetics/perfect-cubes'
  },
  
  {
    name: 'Multiplication Tables',
    description: 'Interactive multiplication table generator for any multiplicand (1-999) with customizable table ranges (1-100), displaying multiplier, equation, and result with pagination and search functionality.',
    icon: MultiplicationIcon,
    path: '/tables/arithmetics/multiplication'
  },
  {
    name: 'Base Conversion Table',
    description: 'Interactive table converting numbers 0-1000 between decimal, binary, octal, hexadecimal, and a custom base (2-36) with search functionality.',
    icon: BaseConverterIcon,
    path: '/tables/arithmetics/base-conversion'
  },
  
];

export default function ArithmeticTables() {
  return (
    <>
      <Head>
        <title>Arithmetic Tables | Learn Math Class</title>
        <meta name="description" content="Explore various arithmetic tables including logarithms, natural logarithms, binary logarithms, and exponential tables." />
        <link rel="canonical" href="https://www.learnmathclass.com/tables/arithmetics" />
      </Head>
      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar 
        side='right'
        // topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='300px'
        
        iconColor='white'
        panelBackgroundColor='#f2f2f2'/> 
       <div className={styles.container}>
       
        <h1 className={styles.title}>Arithmetic Tables</h1>
        <div className={styles.grid}>
          {arithmeticTables.map((table) => {
            const Icon = table.icon;
            return (
              <Link href={table.path} key={table.name} className={styles.card}>
                <div className={styles.cardHeader}>
                  <Icon className={styles.icon} />
                  <h2 className={styles.tableTitle}>{capitalizeWords(table.name)}</h2>
                </div>
                <p className={styles.description}>{capitalizeWords(table.description)}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.viewText}>Explore Table</span>
                </div>
              </Link>
            );
          })}
        </div>
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
        <ScrollUpButton/>
      </div>
    </>
  );
}