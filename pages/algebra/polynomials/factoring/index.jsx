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
  title: `What is Factoring?`,
  content: `To factor a polynomial means to write it as a product of two or more polynomials of lower degree. The original polynomial and its factored form are equivalent expressions — they produce the same value for every input — but the factored form reveals structure that the expanded form conceals.

Consider $x^2 + 5x + 6$. Written this way, the polynomial is a sum of three terms. Factored as $(x + 2)(x + 3)$, the same expression becomes a product of two linear factors, making it immediately clear that the polynomial equals zero when $x = -2$ or $x = -3$. This connection between factors and [roots](!/algebra/polynomials/roots) is one of the main reasons factoring matters.

A polynomial is fully factored when none of its factors can be broken down further. The expression $2x(x^2 - 9)$ is not fully factored because $x^2 - 9$ splits into $(x + 3)(x - 3)$. The complete factorization is $2x(x + 3)(x - 3)$.

What counts as "fully factored" depends on the number system in play. Over the integers, $x^2 + 1$ cannot be factored — no pair of integer-coefficient linear factors multiplies to give $x^2 + 1$. Over the reals, it remains irreducible for the same reason. Over the [complex numbers](!/complex-numbers), however, $x^2 + 1 = (x + i)(x - i)$, and every polynomial of degree $n$ factors into exactly $n$ linear factors.`,
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
  title: `Greatest Common Factor (GCF)`,
  content: `The first step in any factoring problem is to check whether all terms share a common factor. The greatest common factor is the largest expression — including both numerical and variable parts — that divides evenly into every term of the polynomial.

For $6x^3 + 9x^2 - 3x$, each term is divisible by $3x$. Factoring it out gives $3x(2x^2 + 3x - 1)$. The original three-term polynomial now appears as a product of a monomial and a simpler trinomial.

When variables carry different exponents, the GCF takes the lowest power present across all terms. In $4x^2y + 8xy^2$, the numerical GCF is $4$, the lowest power of $x$ is $x^1$, and the lowest power of $y$ is $y^1$, so the GCF is $4xy$. Factoring yields $4xy(x + 2y)$.

Extracting the GCF should become automatic — it simplifies the remaining expression and often makes subsequent factoring steps far more manageable. A polynomial like $2x^3 + 8x^2 + 8x$ looks like a difficult cubic until the GCF of $2x$ is removed, leaving $2x(x^2 + 4x + 4)$, which is a recognizable perfect square trinomial: $2x(x + 2)^2$.`,
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
  title: `Factoring by Grouping`,
  content: `When a polynomial has four or more terms and no single GCF spans all of them, grouping offers a path forward. The idea is to split the polynomial into pairs of terms, factor each pair separately, and then look for a common binomial factor across the groups.

Take $x^3 + 2x^2 + 3x + 6$. Grouping the first two terms and the last two gives $(x^3 + 2x^2) + (3x + 6)$. Factoring each group produces $x^2(x + 2) + 3(x + 2)$. The binomial $(x + 2)$ now appears in both pieces, so it factors out: $(x^2 + 3)(x + 2)$.

The method depends on the right grouping — and the original order of terms does not always produce one that works. Rearranging may be necessary. For $ax + by + ay + bx$, the natural left-to-right pairing yields $(ax + by) + (ay + bx)$, which leads nowhere useful. Rearranging to $ax + bx + ay + by$ and grouping as $(ax + bx) + (ay + by)$ gives $x(a + b) + y(a + b) = (x + y)(a + b)$.

Grouping also plays a role inside other techniques. The AC method for factoring trinomials with a leading coefficient other than $1$ rewrites the middle term as two terms, creating a four-term polynomial that is then factored by grouping.`,
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
  title: `Factoring Trinomials — Simple Case`,
  content: `A trinomial of the form $x^2 + bx + c$ has a leading coefficient of $1$, which makes the factoring process straightforward. The goal is to find two numbers $m$ and $n$ such that $m \\cdot n = c$ and $m + n = b$. If such a pair exists, the trinomial factors as $(x + m)(x + n)$.

For $x^2 + 7x + 12$, the task is to find two numbers that multiply to $12$ and add to $7$. The pair $3$ and $4$ satisfies both conditions: $3 \\cdot 4 = 12$ and $3 + 4 = 7$. So $x^2 + 7x + 12 = (x + 3)(x + 4)$.

The signs of $b$ and $c$ guide the search. When $c$ is positive and $b$ is positive, both numbers are positive. When $c$ is positive and $b$ is negative, both numbers are negative — for instance, $x^2 - 9x + 20 = (x - 4)(x - 5)$ since $(-4)(-5) = 20$ and $(-4) + (-5) = -9$. When $c$ is negative, the two numbers have opposite signs: $x^2 + 2x - 15 = (x + 5)(x - 3)$ because $5 \\cdot (-3) = -15$ and $5 + (-3) = 2$.

Not every trinomial of this form factors over the integers. The polynomial $x^2 + x + 1$ requires two integers that multiply to $1$ and add to $1$ — no such pair exists. The discriminant $b^2 - 4c$ determines factorability: when it is a perfect square, the trinomial factors over the integers.`,
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
  title: `Factoring Trinomials — General Case`,
  content: `When the leading coefficient is not $1$, the trinomial takes the form $ax^2 + bx + c$ and requires a more systematic approach. The AC method handles this by converting the problem into a grouping problem.

Multiply $a$ and $c$ to get the product $ac$. Then find two numbers $m$ and $n$ such that $m \\cdot n = ac$ and $m + n = b$. Use these numbers to split the middle term into two terms, creating a four-term polynomial that can be factored by grouping.

For $6x^2 + 11x + 4$, compute $ac = 6 \\cdot 4 = 24$. The pair $3$ and $8$ satisfies $3 \\cdot 8 = 24$ and $3 + 8 = 11$. Rewrite the middle term: $6x^2 + 3x + 8x + 4$. Group and factor: $3x(2x + 1) + 4(2x + 1) = (3x + 4)(2x + 1)$.

The order in which the split terms are written does not affect the final result. Writing $6x^2 + 8x + 3x + 4$ instead leads to $2x(3x + 4) + 1(3x + 4) = (2x + 1)(3x + 4)$ — the same factors in a different order.

As with the simple case, the discriminant $b^2 - 4ac$ determines whether the trinomial factors over the integers. When $b^2 - 4ac$ is negative, the polynomial has no real [roots](!/algebra/polynomials/roots) and is irreducible over the reals.`,
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
  title: `Difference of Squares`,
  content: `The identity $a^2 - b^2 = (a + b)(a - b)$ is one of the most frequently used factoring patterns. It applies whenever a polynomial consists of two perfect square terms separated by subtraction.

Recognizing perfect squares is the key skill. The term $9x^2$ is $(3x)^2$, the term $16$ is $4^2$, and the term $x^4$ is $(x^2)^2$. So $9x^2 - 16 = (3x + 4)(3x - 4)$, and $x^4 - 1 = (x^2 + 1)(x^2 - 1) = (x^2 + 1)(x + 1)(x - 1)$ after factoring the second factor further.

The pattern extends to less obvious cases. The expression $x^2 - 5$ is a difference of squares if reals are permitted: $x^2 - (\\sqrt{5})^2 = (x + \\sqrt{5})(x - \\sqrt{5})$. Over the integers alone, $x^2 - 5$ does not factor.

The sum of squares $a^2 + b^2$ has no factorization over the real numbers. No real values of $m$ and $n$ satisfy $(a + m)(a + n) = a^2 + b^2$. Over the [complex numbers](!/complex-numbers), however, the factorization exists: $a^2 + b^2 = (a + bi)(a - bi)$, using the fact that $i^2 = -1$.`,
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
  title: `Perfect Square Trinomials`,
  content: `Two closely related patterns arise when a binomial is squared:

$$a^2 + 2ab + b^2 = (a + b)^2$$

$$a^2 - 2ab + b^2 = (a - b)^2$$

The test for a perfect square trinomial has three parts: the first term must be a perfect square, the last term must be a perfect square, and the middle term must equal twice the product of their square roots. If all three conditions hold, the trinomial is the square of a binomial.

For $x^2 + 10x + 25$, the first term is $x^2$, the last is $5^2$, and the middle term $10x = 2 \\cdot x \\cdot 5$. All conditions are met, so $x^2 + 10x + 25 = (x + 5)^2$.

For $4x^2 - 12x + 9$, the first term is $(2x)^2$, the last is $3^2$, and the middle term $12x = 2 \\cdot 2x \\cdot 3$. The subtraction sign carries through: $4x^2 - 12x + 9 = (2x - 3)^2$.

A common error is assuming any trinomial with perfect square first and last terms must be a perfect square trinomial. The expression $x^2 + 7x + 9$ has $x^2$ and $3^2$ at the ends, but the middle term $7x$ does not equal $2 \\cdot x \\cdot 3 = 6x$. This trinomial is not a perfect square.`,
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
  title: `Sum and Difference of Cubes`,
  content: `Two factoring identities handle cubic terms:

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

Each factors a two-term cubic into a linear factor and a quadratic factor. The linear factor shares the same sign as the original expression. The quadratic factor follows the pattern: square the first term, take the opposite sign for the product term, then square the last term. The mnemonic SOAP — Same, Opposite, Always Positive — captures the sign sequence.

For $x^3 + 8$, recognize $8 = 2^3$. The sum of cubes formula gives $x^3 + 2^3 = (x + 2)(x^2 - 2x + 4)$. The linear factor $(x + 2)$ takes the same sign as the original sum. The quadratic factor has a negative middle term (opposite) and a positive constant (always positive).

For $27x^3 - 1$, recognize $27x^3 = (3x)^3$ and $1 = 1^3$. The difference of cubes formula gives $(3x - 1)(9x^2 + 3x + 1)$. The linear factor takes the minus sign (same as the original difference), the middle term is positive (opposite), and the constant remains positive.

The quadratic factors $a^2 - ab + b^2$ and $a^2 + ab + b^2$ that arise from these formulas are irreducible over the reals. Their discriminants are $-3b^2$ and $-3b^2$ respectively — both negative — so neither factors further into real linear terms.`,
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
  title: `Factoring Higher-Degree Polynomials`,
  content: `Polynomials of degree four and above often yield to the same techniques used on quadratics and cubics, provided the right structure is recognized.

A common pattern is the quadratic in disguise. The polynomial $x^4 + 5x^2 + 6$ contains only even powers of $x$, which means substituting $u = x^2$ transforms it into $u^2 + 5u + 6$. This factors as $(u + 2)(u + 3)$, and substituting back gives $(x^2 + 2)(x^2 + 3)$. Neither quadratic factor has real [roots](!/algebra/polynomials/roots), so the factorization is complete over the reals.

Repeated application of earlier techniques handles layered structures. The polynomial $x^4 - 16$ is a difference of squares: $(x^2 + 4)(x^2 - 4)$. The second factor is itself a difference of squares: $(x^2 + 4)(x + 2)(x - 2)$. The first factor $x^2 + 4$ is irreducible over the reals, so the process stops here.

Known roots provide another entry point. If $r$ is a root of a polynomial $P(x)$, then $(x - r)$ is a factor, and polynomial [division](!/algebra/polynomials/operations) produces the remaining quotient. For instance, if direct substitution shows that $P(2) = 0$, then $(x - 2)$ divides $P(x)$ evenly, and the quotient can be factored further using any applicable technique.

The [Fundamental Theorem of Algebra](!/complex-numbers/equations-and-polynomials) guarantees that every polynomial of degree $n$ has exactly $n$ roots over the [complex numbers](!/complex-numbers), counted with multiplicity. This means complete factorization into linear factors is always possible in that setting.`,
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
  title: `Factoring Strategy`,
  content: `With multiple techniques available, a systematic approach prevents wasted effort and missed factors.

The first move is always to extract the greatest common factor. Even when a GCF seems small — a single factor of $2$ or a lone $x$ — removing it simplifies everything that follows. Skipping this step is the most common source of incomplete factorizations.

Next, count the terms. A two-term polynomial calls for checking special patterns: difference of squares, sum or difference of cubes. A three-term polynomial is a candidate for trinomial factoring — simple case if the leading coefficient is $1$, the AC method otherwise. A polynomial with four or more terms suggests grouping.

After each factoring step, examine every factor to determine whether it can be broken down further. The expression $x^4 - 81$ factors as $(x^2 + 9)(x^2 - 9)$, but stopping here misses the difference of squares hiding in the second factor: $(x^2 + 9)(x + 3)(x - 3)$.

The final check is verification. Multiplying the factors back together must reproduce the original polynomial. This catches sign errors, arithmetic mistakes, and overlooked terms. If the product does not match, at least one factoring step contains an error.

Not every polynomial factors neatly over the integers. When no technique produces integer-coefficient factors, the polynomial may be irreducible over the integers — or it may factor over the reals or complex numbers using roots found through the quadratic formula or numerical methods.`,
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
  title: `Irreducible Polynomials`,
  content: `A polynomial is irreducible over a given number system when it cannot be written as a product of lower-degree polynomials with coefficients in that system. Irreducibility is not an absolute property — it depends entirely on what numbers are allowed.

The polynomial $x^2 - 2$ is irreducible over the integers because no pair of integer-coefficient linear factors produces it. Over the reals, it factors as $(x + \\sqrt{2})(x - \\sqrt{2})$. The polynomial $x^2 + 1$ goes further: it is irreducible over both the integers and the reals, since its roots $\\pm i$ are not real numbers. Over the [complex numbers](!/complex-numbers), it factors as $(x + i)(x - i)$.

The [Fundamental Theorem of Algebra](!/complex-numbers/equations-and-polynomials) settles the question at the deepest level: every polynomial of degree $n \\geq 1$ with complex coefficients factors completely into $n$ linear factors over the complex numbers. This means the only irreducible polynomials over the complex numbers are linear — degree $1$.

Over the reals, the irreducible building blocks are linear polynomials and quadratic polynomials with negative discriminant ($b^2 - 4ac < 0$). Every real polynomial factors into a product of such pieces. Over the integers, identifying irreducibility is harder and no single test covers all cases, though the discriminant and the rational root theorem from the [rules](!/algebra/polynomials/rules) page offer useful starting points.`,
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
  title: `Common Mistakes`,
  content: `Certain errors appear repeatedly in factoring work, and awareness of them is the simplest way to avoid them.

Skipping the GCF check is the most frequent. The polynomial $3x^3 - 12x$ looks like it might require advanced techniques, but extracting $3x$ first gives $3x(x^2 - 4) = 3x(x + 2)(x - 2)$. Without that initial step, the factorization becomes unnecessarily difficult or incomplete.

Sign errors plague trinomial factoring. In $x^2 - 5x + 6$, both numbers must be negative: $(-2)(-3) = 6$ and $(-2) + (-3) = -5$. Writing $(x + 2)(x - 3)$ instead of $(x - 2)(x - 3)$ gives a middle term of $-x$, not $-5x$. Verification by expanding catches this immediately.

Confusing the sum and difference of squares is another trap. The difference $a^2 - b^2$ factors as $(a + b)(a - b)$. The sum $a^2 + b^2$ does not factor over the reals — attempting to write it as $(a + b)(a - b)$ produces $a^2 - b^2$, not $a^2 + b^2$.

With cube formulas, the most common error is mishandling signs in the quadratic factor. For $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, the middle term of the quadratic factor is $-ab$, not $+ab$. Mixing this up produces an incorrect factorization that fails verification.

Stopping too early leaves factors on the table. After obtaining $(x^2 + 4)(x^2 - 4)$ from $x^4 - 16$, the second factor is itself a difference of squares. Every factor must be inspected for further decomposition before the factorization is considered complete.`,
  before: ``,
  after: ``,
  link: '',
},
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
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
  title: "From Product to Pieces",
  content: `Multiplying $(x + 2)(x + 3)$ to get $x^2 + 5x + 6$ is a mechanical process — distribute, combine, done. But going the other direction — starting with $x^2 + 5x + 6$ and recovering the factors that built it — requires pattern recognition, strategy, and a toolkit of techniques that grows with the complexity of the polynomial.

That reverse process is factoring, and it underpins much of algebra. Solving [polynomial equations](!/algebra/polynomials/roots), simplifying rational expressions, and analyzing how polynomials behave all depend on the ability to decompose a polynomial into simpler multiplicative pieces. The sections that follow develop the methods for doing so, from extracting common factors through recognizing special patterns to handling polynomials of any degree.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Factoring Polynomials | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/algebra/polynomials/factoring",
         name: "name"
      },
        
       }
    }
   }

export default function FactoringPage({seoData,sectionsContent , introContent}) {

    
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
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Factoring Polynomials</h1>
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
