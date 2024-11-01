import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Bell, TrendingUp } from 'lucide-react';
import styles from './probability.module.css';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';

const probabilityTables = [
  {
    name: 'Normal Distribution (Z)',
    description: 'Standard normal distribution tables for various Z-scores and probabilities.',
    icon: Bell,
    path: '/tables/probability/normal-distribution'
  },
  {
    name: 'T-Distribution',
    description: 'T-distribution tables for various degrees of freedom and probabilities.',
    icon: TrendingUp,
    path: '/tables/probability/t-distribution'
  },
  
];

export default function ProbabilityTables() {
  return (
    <>
      <Head>
        <title>Probability Tables | Learn Math Class</title>
        <meta name="description" content="Explore probability tables including normal distribution (Z) and T-distribution tables." />
        <link rel="canonical" href="https://www.learnmathclass.com/tables/probability" />
      </Head>
     <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        topOffset='60px' 
        sidebarWidth='45px'
        panelWidth='200px'
        
        iconColor='white'
        panelBackgroundColor='#f2f2f2'/> 
      <div className={styles.container}>
        <Breadcrumb/>
        <h1 className={styles.title}>Probability Tables</h1>
       
        <div className={styles.grid} style={{transform:'scale(0.9)'}}>
          {probabilityTables.map((table) => {
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