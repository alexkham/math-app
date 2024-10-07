import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Book, Calculator, PieChart, Sigma, Percent } from 'lucide-react';
import styles from './tables.module.css';

const categoryIcons = {
  'Algebra': Book,
  'Calculus': Sigma,
  'Trigonometry': PieChart,
  'Probability': Percent,
  'Arithmetics': Calculator
};

export default function Tables({ categories }) {
  return (
    <>
      <Head>
        <title>Mathematical Tables | Learn Math Class</title>
        <meta name="description" content="Explore our comprehensive collection of mathematical tables including algebra, calculus, trigonometry, probability, and arithmetics." />
        <link rel="canonical" href="https://www.learnmathclass.com/tables" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Mathematical Tables</h1>
        <div className={styles.grid}>
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <Link href={`/tables/${category.toLowerCase()}`} key={category} className={styles.link}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <Icon className={styles.icon} />
                    <h2 className={styles.categoryTitle}>{category}</h2>
                    <p className={styles.description}>Explore {category.toLowerCase()} tables and functions</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.viewText}>View Tables →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const categories = 
  [
    // 'Algebra', 
    // 'Calculus', 
    // 'Trigonometry',
     'Probability',
      'Arithmetics'];
  return { props: { categories } };
}