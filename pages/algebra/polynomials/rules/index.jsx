import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },

    obj1: {
  title: `The Remainder Theorem`,
  content: `When a polynomial $P(x)$ is divided by a linear binomial $(x - c)$, the remainder is a constant — and that constant equals $P(c)$, the value of the polynomial evaluated at $x = c$.

This means the remainder can be found without performing any division at all. To find the remainder when $P(x) = x^3 - 4x + 2$ is divided by $(x - 3)$, simply compute $P(3) = 27 - 12 + 2 = 17$. The remainder is $17$.

The theorem applies to any polynomial and any value of $c$. If $P(x) = 2x^4 - x^2 + 5$ and the divisor is $(x + 1)$, read $(x + 1)$ as $(x - (-1))$ and evaluate $P(-1) = 2(1) - 1 + 5 = 6$. The remainder is $6$, confirmed instantly without setting up [long division or synthetic division](!/algebra/polynomials/operations).`,
  before: ``,
  after: ``,
  link: '',
},
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj2: {
  title: `Why the Remainder Theorem Works`,
  content: `The proof follows directly from the division algorithm. Dividing $P(x)$ by $(x - c)$ produces a quotient $Q(x)$ and a remainder $R$:

$$P(x) = (x - c) \\cdot Q(x) + R$$

Because the divisor $(x - c)$ has degree $1$, the remainder $R$ must have degree less than $1$ — meaning $R$ is a constant, independent of $x$.

Now substitute $x = c$ into both sides:

$$P(c) = (c - c) \\cdot Q(c) + R = 0 \\cdot Q(c) + R = R$$

The factor $(c - c)$ annihilates the quotient term, leaving $P(c) = R$. Evaluation and division are not separate operations — evaluating $P$ at $c$ is equivalent to extracting the remainder of division by $(x - c)$.`,
  before: ``,
  after: ``,
  link: '',
},
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj3: {
  title: `The Factor Theorem`,
  content: `The Factor Theorem is a direct consequence of the Remainder Theorem: $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.

The logic is immediate. If the remainder when dividing by $(x - c)$ is zero, then $P(x) = (x - c) \\cdot Q(x)$ with no leftover term — so $(x - c)$ divides $P(x)$ exactly. Conversely, if $(x - c)$ is a factor, then $P(c) = (c - c) \\cdot Q(c) = 0$.

This creates a bridge between [roots](!/algebra/polynomials/roots) and [factors](!/algebra/polynomials/factoring). The value $c$ is a root of $P(x)$ precisely when $(x - c)$ is a factor of $P(x)$. Finding one gives the other automatically.

To test whether $(x - 2)$ is a factor of $x^3 - 6x^2 + 11x - 6$, evaluate $P(2) = 8 - 24 + 22 - 6 = 0$. Since the result is zero, $(x - 2)$ is indeed a factor, and $2$ is a root.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj4: {
  title: `Using the Factor Theorem`,
  content: `The Factor Theorem works in both directions — it can verify suspected factors and it can build polynomials from known roots.

To test potential roots, substitute each candidate into $P(x)$ and check for zero. For $P(x) = x^3 - 7x + 6$, testing $x = 1$ gives $P(1) = 1 - 7 + 6 = 0$, confirming that $(x - 1)$ is a factor. Dividing out this factor via [synthetic division](!/algebra/polynomials/operations) yields the quotient $x^2 + x - 6$, which factors further as $(x + 3)(x - 2)$. The complete factorization is $(x - 1)(x + 3)(x - 2)$.

To construct a polynomial from its roots, reverse the process. If a cubic polynomial has roots $1$, $-2$, and $4$, the Factor Theorem guarantees that $(x - 1)$, $(x + 2)$, and $(x - 4)$ are all factors. Their product gives:

$$(x - 1)(x + 2)(x - 4) = x^3 - 3x^2 - 6x + 8$$

Any nonzero scalar multiple $a(x - 1)(x + 2)(x - 4)$ shares the same roots, so the polynomial is determined up to a constant factor unless additional information — such as a specific function value — pins it down.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj5: {
  title: `The Rational Root Theorem`,
  content: `For polynomials with integer coefficients, the Rational Root Theorem restricts which rational numbers can possibly be roots. If $P(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$ has integer coefficients and $\\frac{p}{q}$ is a rational root expressed in lowest terms, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$.

This transforms an infinite search into a finite one. Instead of testing every rational number, only the fractions formed by divisors of $a_0$ over divisors of $a_n$ need to be checked.

For $P(x) = 2x^3 + x^2 - 13x + 6$, the constant term is $6$ with divisors $\\pm 1, \\pm 2, \\pm 3, \\pm 6$, and the leading coefficient is $2$ with divisors $\\pm 1, \\pm 2$. The candidate list is:

$$\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$$

Twelve candidates replace infinitely many possibilities. Each can be tested by substitution or synthetic division until all rational roots are found or the list is exhausted.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj6: {
  title: `Applying the Rational Root Theorem`,
  content: `The theorem produces a candidate list, but the actual work lies in testing each candidate efficiently. A systematic approach avoids redundant effort.

Start by listing all divisors of the constant term $a_0$ — these are the possible values of $p$. Then list all divisors of the leading coefficient $a_n$ — these are the possible values of $q$. Form every fraction $\\pm \\frac{p}{q}$ and reduce to lowest terms to eliminate duplicates.

For $2x^3 + x^2 - 13x + 6$, begin testing with the simplest candidates. $P(1) = 2 + 1 - 13 + 6 = -4$, so $1$ is not a root. $P(2) = 16 + 4 - 26 + 6 = 0$, so $2$ is a root. By the Factor Theorem, $(x - 2)$ is a factor. Synthetic division gives a quotient of $2x^2 + 5x - 3$, which factors as $(2x - 1)(x + 3)$.

The complete factorization is $(x - 2)(2x - 1)(x + 3)$, giving roots $2$, $\\frac{1}{2}$, and $-3$ — all members of the candidate list.

Testing via synthetic division is often more efficient than direct substitution, since each test simultaneously produces the quotient polynomial if the candidate turns out to be a root.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj7: {
  title: `Limitations of the Rational Root Theorem`,
  content: `The Rational Root Theorem identifies only rational roots. Irrational roots and [complex roots](!/complex-numbers/equations-and-polynomials) lie entirely outside its reach.

The polynomial $x^2 - 2$ illustrates this clearly. Its constant term is $-2$ and its leading coefficient is $1$, producing candidates $\\pm 1, \\pm 2$. Testing each: $P(1) = -1$, $P(-1) = -1$, $P(2) = 2$, $P(-2) = 2$. None equals zero. The actual roots are $\\pm\\sqrt{2}$, both irrational — invisible to the theorem.

A polynomial may have no rational roots at all. The polynomial $x^4 + x^3 + x^2 + x + 1$ has integer coefficients and candidates $\\pm 1$, but neither works. All four of its roots are complex, and no amount of rational testing will find them.

The theorem is best understood as a first filter, not a complete solution. When it finds roots, synthetic division reduces the polynomial's degree, potentially making the remaining roots accessible through the quadratic formula or other methods. When it finds none, it confirms that the roots are irrational or complex and signals the need for different tools.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj8: {
  title: `The Integer Root Theorem`,
  content: `When the leading coefficient of a polynomial is $1$ — a monic polynomial — the Rational Root Theorem simplifies considerably. Every rational root $\\frac{p}{q}$ has $q$ dividing $1$, which forces $q = \\pm 1$, which means $\\frac{p}{q}$ is an integer. So all rational roots of a monic polynomial are integers, and they must divide the constant term.

For $x^3 - 6x^2 + 11x - 6$, the only candidates are the divisors of $-6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. No fractions need to be considered.

Testing: $P(1) = 1 - 6 + 11 - 6 = 0$, so $1$ is a root. Dividing out $(x - 1)$ leaves $x^2 - 5x + 6 = (x - 2)(x - 3)$. All three roots — $1$, $2$, $3$ — are integers dividing $6$, exactly as the theorem predicts.

This simplification makes monic polynomials particularly approachable. The candidate list is shorter, the candidates are easier to test, and the search is faster. Recognizing that a polynomial is monic before beginning the root search saves unnecessary work with fractions.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj9: {
  title: `Descartes' Rule of Signs`,
  content: `Descartes' Rule of Signs estimates the number of positive and negative real roots of a polynomial by counting sign changes in its coefficients.

To count positive real roots, write $P(x)$ in standard form and count how many times the sign of the coefficients changes from one term to the next. For $P(x) = x^3 - 2x^2 - x + 2$, the coefficient signs are $+, -, -, +$. The sign changes twice: from $+$ to $-$ and from $-$ to $+$. The polynomial has either $2$ or $0$ positive real roots — the actual count equals the number of sign changes or less by an even number.

To count negative real roots, apply the same procedure to $P(-x)$. Substituting $-x$ gives $P(-x) = -x^3 - 2x^2 + x + 2$, with signs $-, -, +, +$. One sign change occurs, so the polynomial has exactly $1$ negative real root.

The rule does not identify the roots or specify which of the possible counts is correct. For $P(x) = x^3 - 2x^2 - x + 2$, the actual roots are $1$, $2$, and $-1$ — two positive and one negative, consistent with the prediction. But the rule alone cannot distinguish between $2$ positive roots and $0$ positive roots without further analysis.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj10: {
  title: `Upper and Lower Bounds`,
  content: `Synthetic division provides a way to establish bounds on the real roots of a polynomial, narrowing the interval where roots can exist.

The upper bound test works as follows: divide $P(x)$ by $(x - c)$ where $c > 0$ using synthetic division. If every entry in the bottom row is non-negative (positive or zero), then $c$ is an upper bound — no real root of $P(x)$ exceeds $c$.

The lower bound test is similar but uses a negative value of $c$. Divide $P(x)$ by $(x - c)$ where $c < 0$. If the entries in the bottom row alternate in sign (with zeros counting as either sign), then $c$ is a lower bound — no real root is less than $c$.

For $P(x) = x^3 - 4x^2 + x + 6$, synthetic division by $(x - 5)$ produces the row $1, 1, 6, 36$ — all non-negative, so $5$ is an upper bound. Synthetic division by $(x + 2)$, meaning $c = -2$, produces $1, -6, 13, -20$ — the signs alternate, so $-2$ is a lower bound. All real roots of this polynomial lie in the interval $[-2, 5]$.

These bounds are especially useful when combined with the Rational Root Theorem, eliminating candidates that fall outside the established range before any testing begins.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj11:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj11: {
  title: `The Fundamental Theorem of Algebra`,
  content: `The Fundamental Theorem of Algebra makes a sweeping guarantee: every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in the [complex numbers](!/complex-numbers), counted with multiplicity.

A quadratic has $2$ roots. A cubic has $3$. A degree-$10$ polynomial has $10$. No polynomial of positive degree can avoid having roots — the theorem eliminates the possibility of a polynomial that simply never equals zero.

Some roots may repeat. The polynomial $x^3 - 3x^2 + 3x - 1 = (x - 1)^3$ has degree $3$ but only one distinct root, $x = 1$, appearing with multiplicity $3$. The count of $n$ roots includes these repetitions.

For polynomials with real coefficients, an additional constraint applies: complex roots come in conjugate pairs. If $a + bi$ is a root, then $a - bi$ is also a root. This means a real polynomial of odd degree must have at least one real root — an odd number of roots cannot be paired off entirely into conjugate pairs.

The theorem guarantees existence but offers no method for finding roots. For degree $5$ and above, no general formula in radicals exists — a result proven by Abel and Galois. Numerical methods, the Rational Root Theorem, and other tools from this page fill the gap between knowing roots exist and actually computing them.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj12:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj12: {
  title: `Vieta's Formulas`,
  content: `Vieta's formulas express symmetric relationships between the roots of a polynomial and its coefficients, without requiring the roots to be known individually.

For a monic quadratic $x^2 + bx + c$ with roots $r_1$ and $r_2$:

$$r_1 + r_2 = -b \\qquad r_1 \\cdot r_2 = c$$

The sum of the roots equals the negative of the linear coefficient, and the product equals the constant term.

For a monic cubic $x^3 + bx^2 + cx + d$ with roots $r_1$, $r_2$, $r_3$:

$$r_1 + r_2 + r_3 = -b$$

$$r_1r_2 + r_1r_3 + r_2r_3 = c$$

$$r_1 \\cdot r_2 \\cdot r_3 = -d$$

The pattern extends to any degree: the $k$-th elementary symmetric polynomial of the roots equals $(-1)^k$ times the coefficient of $x^{n-k}$ in a monic degree-$n$ polynomial.

These relationships are useful for verifying [factorizations](!/algebra/polynomials/factoring). After finding roots $1$, $2$, and $3$ for $x^3 - 6x^2 + 11x - 6$, Vieta's formulas confirm: $1 + 2 + 3 = 6 = -(-6)$, $1 \\cdot 2 + 1 \\cdot 3 + 2 \\cdot 3 = 11$, and $1 \\cdot 2 \\cdot 3 = 6 = -(-6)$. All three match the coefficients. They also allow solving problems where individual roots are not needed — for instance, finding the sum of the squares of the roots using $(r_1 + r_2 + r_3)^2 - 2(r_1r_2 + r_1r_3 + r_2r_3) = 36 - 22 = 14$.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj13:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
    //   link:'',
  
    // },

    obj13: {
  title: `Common Mistakes`,
  content: `The theorems on this page are closely related, and confusing their roles or misapplying their details produces errors that are easy to make and sometimes hard to spot.

The Remainder Theorem and the Factor Theorem are frequently conflated. The Remainder Theorem says dividing $P(x)$ by $(x - c)$ leaves a remainder of $P(c)$. The Factor Theorem adds one specific condition: if that remainder is zero, then $(x - c)$ is a factor. Applying the Factor Theorem when $P(c) \\neq 0$ — concluding that $(x - c)$ is somehow a partial factor — reflects a misunderstanding of what the theorem actually states.

With the Rational Root Theorem, two errors dominate. The first is forgetting negative candidates — the divisors of $a_0$ and $a_n$ include both positive and negative values. The second is omitting fractional candidates when the leading coefficient is not $1$. For $2x^3 + x - 6$, candidates include $\\pm\\frac{1}{2}$ and $\\pm\\frac{3}{2}$, not just integers.

In Descartes' Rule of Signs, the most common error occurs when computing $P(-x)$. Every odd-powered term changes sign while even-powered terms stay the same. Writing $P(-x)$ incorrectly — changing the wrong terms or missing one — corrupts the sign-change count.

With Vieta's formulas, sign errors are persistent. The sum of roots for $x^2 + bx + c$ is $-b$, not $b$. The product of roots for a cubic $x^3 + bx^2 + cx + d$ is $-d$, not $d$. The alternating sign pattern $(-1)^k$ is easy to lose track of, especially at higher degrees.`,
  before: ``,
  after: ``,
  link: '',
},
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "The Theorems Behind the Toolkit",
  content: `Working with polynomials involves a great deal of computation — dividing, testing values, searching for [roots](!/algebra/polynomials/roots). But underneath that work sits a collection of theorems that explain why certain shortcuts are valid, why certain searches are guaranteed to terminate, and why the structure of a polynomial's coefficients reveals information about its solutions before a single calculation is performed.

These results connect seemingly separate tasks. Evaluating a polynomial at a point turns out to be the same as finding a division remainder. Knowing one root immediately produces a [factor](!/algebra/polynomials/factoring). The coefficients of a polynomial place strict limits on which rational numbers could possibly be roots. Each theorem removes guesswork and replaces it with structure.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Polynomial Rules | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/algebra/polynomials/rules",
         name: "name"
      },
        
       }
    }
   }

export default function RulesPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
]

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
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Polynomial Rules</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
