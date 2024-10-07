import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { LogIn, Activity, Binary, TrendingUp } from 'lucide-react';
import styles from './arithmetics.module.css';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';

const arithmeticTables = [
  {
    name: 'Logarithms (Base 10)',
    description: 'Standard logarithmic table with explanations and usage guide.',
    icon: LogIn,
    path: '/tables/arithmetics/logarithms'
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
    name: 'Exponential Table',
    description: 'Table of exponential values, crucial for growth and decay calculations.',
    icon: TrendingUp,
    path: '/tables/arithmetics/exponential-table'
  }
];

export default function ArithmeticTables() {
  return (
    <>
      <Head>
        <title>Arithmetic Tables | Learn Math Class</title>
        <meta name="description" content="Explore various arithmetic tables including logarithms, natural logarithms, binary logarithms, and exponential tables." />
        <link rel="canonical" href="https://www.learnmathclass.com/tables/arithmetics" />
      </Head>
      <MyNavbar/>
      <br/>
      <br/>
      <br/>
     
       <div className={styles.container}>
        <Breadcrumb/>
        <h1 className={styles.title}>Arithmetic Tables</h1>
        <div className={styles.grid}>
          {arithmeticTables.map((table) => {
            const Icon = table.icon;
            return (
              <Link href={table.path} key={table.name} className={styles.card}>
                <div className={styles.cardHeader}>
                  <Icon className={styles.icon} />
                  <h2 className={styles.tableTitle}>{table.name}</h2>
                </div>
                <p className={styles.description}>{table.description}</p>
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