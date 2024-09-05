import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../app/globals.css'
import fs from 'fs';
import path from 'path';
import SequenceTable from '@/app/components/sequences/SequenceTable';
import contentMap from '../../app/api/db/content';


// const article =`
// Prime numbers are the building blocks of the integers, 
// fascinating mathematicians for their unique properties and the pivotal 
// role they play in various mathematical fields.  
 
// Below is a structured overview \n 
 


// focusing on definitions, methods, and special types of primes, supplemented with examples.

// This is a paragraph with a [link](https://google.com).




// **This is bold text**
// ## What Are Prime Numbers?

// - **Definition**: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// - **Examples**: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...

// ## Identifying Prime Numbers

// - **Small Numbers**: Check divisibility by integers up to the square root of the number.
//   - *Example*: To check if 29 is prime, we only need to test divisibility by numbers up to √29 (which is about 5.4). Since 29 is not divisible by 2, 3, or 5, it is prime.
// - **Sieve of Eratosthenes**:
//   1. List numbers from 2 to your limit.
//   2. Mark multiples of 2, then 3, 5, and so on up to the square root of the limit.
//   3. Unmarked numbers are primes.
//   - *Example*: Finding primes up to 10, we mark multiples of 2 (4, 6, 8, 10), then 3 (6, 9), leaving 2, 3, 5, 7 as primes.
// - **Miller-Rabin Test** (probabilistic):
//   - Useful for large numbers, providing a high probability that a number is prime.
//   - *Example*: Not easily illustrated due to its complexity but is exceptionally efficient for large numbers.

// ## Prime Number Theorem

// - Describes the asymptotic distribution of primes, showing that primes become less frequent as numbers increase but there are infinitely many.
// - **Formula**: The number of primes less than $$\(n\)$$ is approximately $$\\frac{n}{\ln(n)}\.$$

// ## Special Types of Prime Numbers

// - **Mersenne Primes**: Of the form $$\(2^p - 1\).$$
//   - *Example*: $\(2^3 - 1 = 7\).$
// - **Fermat Primes**: Of the form $\(2^{2^n} + 1\).$
//   - *Example*: $$\(2^{2^2} + 1 = 17\).$$
// - **Twin Primes**: Pairs of primes that are two units apart.
//   - *Examples*: (3, 5), (11, 13), (17, 19).

// ## Applications of Prime Numbers

// - **Cryptography**: RSA encryption relies on the difficulty of factoring large primes.
// - **Number Theory**: The Fundamental Theorem of Arithmetic, stating every integer greater than 1 is either a prime or a product of primes in a unique way.

// ## Open Questions and Conjectures

// - **Riemann Hypothesis**: Relates the distribution of prime numbers to the zeros of the Riemann zeta function.
// - **Twin Prime Conjecture**: Suggests there are infinitely many pairs of twin primes.

// ## Conclusion

// Prime numbers are a central topic in mathematics, offering a rich field of study from basic arithmetic to advanced number theory and cryptography. Through examples and structured explanations, we gain insight into their properties, methods of identification, special cases, and their indispensable role in mathematics and beyond. As we explore primes, we not only delve into the heart of mathematical inquiry but also encounter the beauty and mystery that fuel the pursuit of knowledge in this ancient and ever-evolving discipline.

// `

// export async function getStaticProps({ params }) {
//     // Access the dynamic part of the URL
//     const sequenceUrl= params.sequence;
//     console.log(sequenceUrl)
//     const sequenceName=sequenceUrl.split('-')[0];
//     console.log(sequenceName);



//     const sequencesDirPath = path.join(process.cwd(), 'app', 'api', 'db', 'sequences');
//     const sequenceFilePath = path.join(sequencesDirPath, `${sequenceName}.json`);
//     const sequenceData = JSON.parse(fs.readFileSync(sequenceFilePath, 'utf8'));
    
//     return {
//       props: {
        
//         sequenceName,
//         sequenceData,
//         article
//       },
//     };
//   };


export async function getStaticProps({ params }) {
  const sequenceUrl = params.sequence;
  const sequenceName = sequenceUrl.split('-')[0];

  const sequencesDirPath = path.join(process.cwd(), 'app', 'api', 'db', 'sequences');
 // const contentDirPath = path.join(process.cwd(), 'app', 'api', 'db', 'content');

  const sequenceFilePath = path.join(sequencesDirPath, `${sequenceName}.json`);
  const sequenceData = JSON.parse(fs.readFileSync(sequenceFilePath, 'utf8'));

  // Dynamically import the JS file containing the markdown
  // let article = '';
  // try {
  //     const markdownModule = await import(`${contentDirPath}/${sequenceName}.js`);
  //     article = markdownModule.default;
  // } catch (err) {
  //     console.error(`Failed to import the content file for ${sequenceName}:`, err.message);
  //     // Handle the error, possibly by setting article to a default error message
  // }

  const article = contentMap[sequenceName] || ' ';

  return {
      props: {
          sequenceName,
          sequenceData,
          article,
      },
  };
};

export async function getStaticPaths() {
  const paths = [
    { params: { sequence: 'prime-numbers' } },
    { params: { sequence: 'fibonacci-numbers' } }
  ];

  return {
    paths,
    fallback: 'blocking' // or false if you want to 404 for non-existent paths
  };
}
  // export async function getStaticPaths() {
  //   // Since you don't have a predefined list of categories and tables,
  //   // you can use fallback: 'blocking' to generate them on-demand
  //   return {
  //     paths: [], // No predefined paths
  //     fallback: 'blocking' // Generate paths on-demand
  //   };
  // }

export default function Sequence({sequenceName,sequenceData,article}) {
  return (
    <div className='outer-container'>
    <MyNavbar></MyNavbar>
     
   {sequenceData&& <SequenceTable 
   sequenceData={sequenceData} 
   sequenceTitle={sequenceName}
   article={article}></SequenceTable>}
    <br></br>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ScrollUpButton></ScrollUpButton>
    </div>
  )
}
