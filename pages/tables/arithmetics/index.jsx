import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { LogIn, Activity, Binary, TrendingUp,Radical } from 'lucide-react';
import styles from './arithmetics.module.css';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import { capitalizeWords } from '@/app/utils/utils-functions';

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
    name: 'Exponential Table',
    description: 'Table of exponential values, crucial for growth and decay calculations.',
    icon: TrendingUp,
    path: '/tables/arithmetics/exponential-table'
  },

  {
    name: 'Perfect Squares and Roots Table',
    description: 'Explore perfect squares and their roots from 1 to 10000',
    icon: Radical,
    path: '/tables/arithmetics/perfect-squares'
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
      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar 
        side='right'
        topOffset='65px' 
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