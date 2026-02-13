import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "polynomials",
  "polynomial definition",
  "polynomial degree",
  "polynomial terms",
  "polynomial standard form",
  "leading coefficient",
  "constant term polynomial",
  "monomial binomial trinomial",
  "evaluate polynomial",
  "polynomial vocabulary",
  "linear quadratic cubic polynomial",
  "polynomial classification",
  "polynomial expression",
  "what is a polynomial",
  "polynomial algebra"
]
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

//     const sectionsContent={

//     // obj1:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
  
//     // },

//     obj1: {
//   title: `What is a Polynomial?`,
//   content: `A polynomial in the variable $x$ is an expression of the form:

// $$a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_2x^2 + a_1x + a_0$$

// The components are straightforward. The variable $x$ represents an unknown quantity. The coefficients $a_0, a_1, \\ldots, a_n$ are fixed numbers — typically real numbers, though complex coefficients appear in advanced contexts. The exponents on $x$ must be non-negative integers: $0, 1, 2, 3$, and so on.

// The expression $3x^4 - 2x^2 + 5x - 7$ is a polynomial. So is $x^2 + 1$. So is the constant $5$, which can be written as $5x^0$. The simplest polynomial is just a number; the most complex have no upper limit on degree or number of terms.

// Certain expressions fail to qualify. The expression $x^{-2} + 3$ contains a negative exponent and is not a polynomial. The expression $\\sqrt{x} + 1$ involves a fractional exponent ($x^{1/2}$) and is not a polynomial. The expression $\\frac{1}{x} + 4$ places the variable in a denominator, equivalent to $x^{-1}$, and is not a polynomial. The expression $2^x$ has the variable in the exponent rather than the base and is not a polynomial. Each of these violates the requirement that exponents be non-negative integers.

// Polynomials are closed under addition, subtraction, and multiplication — combining two polynomials through these operations always produces another polynomial. Division, however, can break the pattern: $\\frac{x^2 + 1}{x}$ is not a polynomial.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
//     // obj2:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj2: {
//   title: `Vocabulary`,
//   content: `Working with polynomials requires precise language. Each piece has a name, and these names appear constantly in algebra.

// A term is a single unit within a polynomial — a coefficient multiplied by a power of the variable. In $4x^3 - 2x + 7$, the terms are $4x^3$, $-2x$, and $7$. Each term stands alone; the polynomial is their sum.

// The coefficient of a term is its numerical factor. In $4x^3$, the coefficient is $4$. In $-2x$, the coefficient is $-2$. A term like $x^2$ has coefficient $1$, even when unwritten. A term like $-x$ has coefficient $-1$.

// The leading term is the term with the highest exponent. In $4x^3 - 2x + 7$, the leading term is $4x^3$. The leading coefficient is the coefficient of the leading term — here, $4$. These determine the polynomial's dominant behavior for large values of $x$.

// The constant term is the term with no variable — the term where $x^0 = 1$ contributes only the coefficient. In $4x^3 - 2x + 7$, the constant term is $7$. Some polynomials, like $x^2 - 3x$, have no constant term, or equivalently, a constant term of zero.

// Polynomials are also classified by number of terms. A monomial has one term: $5x^2$. A binomial has two terms: $x + 3$. A trinomial has three terms: $x^2 - 4x + 4$. Beyond three, no special names exist — we simply say "polynomial with four terms" or describe it by degree.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
  
//     // obj3:{
  
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj3: {
//   title: `Degree`,
//   content: `The degree of a polynomial measures its highest power and determines much of its behavior.

// The degree of a single term is the exponent on its variable. The term $5x^3$ has degree $3$. The term $-2x$ has degree $1$, since $x = x^1$. A constant term like $7$ has degree $0$, since $7 = 7x^0$.

// The degree of a polynomial is the highest degree among all its terms. In $4x^3 - 2x + 7$, the degrees of the individual terms are $3$, $1$, and $0$. The highest is $3$, so the polynomial has degree $3$. In $x^5 - x^2 + x$, the degree is $5$. In $2x - 9$, the degree is $1$.

// A nonzero constant like $5$ is a polynomial of degree $0$. It has one term, $5x^0$, with exponent zero. Constants are the simplest polynomials — they assign the same value regardless of $x$.

// The zero polynomial presents a special case. The expression $0$ has no nonzero terms, so no "highest degree" exists. Conventions vary: some texts leave the degree undefined, others assign $-\\infty$. This technicality rarely affects practical work, but it explains why some theorems explicitly exclude the zero polynomial.

// Degree predicts behavior. It limits the number of roots a polynomial can have, bounds the number of turning points in its graph, and determines how the polynomial grows as $x$ becomes large. A degree $5$ polynomial behaves fundamentally differently from a degree $2$ polynomial, regardless of their specific coefficients.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     // obj4:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj4: {
//   title: `Classification by Degree`,
//   content: `Polynomials receive names based on their degree. These names appear throughout mathematics and provide immediate information about a polynomial's structure.

// A constant polynomial has degree $0$. Examples include $5$, $-3$, and $\\frac{1}{2}$. The graph is a horizontal line, and the polynomial has no roots unless it equals zero.

// A linear polynomial has degree $1$. The general form is $ax + b$ with $a \\neq 0$. Examples include $2x + 3$, $-x + 1$, and $7x$. The graph is a straight line with slope $a$, crossing the x-axis exactly once.

// A quadratic polynomial has degree $2$. The general form is $ax^2 + bx + c$ with $a \\neq 0$. Examples include $x^2 - 4$, $3x^2 + 2x - 1$, and $-x^2 + 5$. The graph is a parabola, opening upward when $a > 0$ and downward when $a < 0$.

// A cubic polynomial has degree $3$. The general form is $ax^3 + bx^2 + cx + d$ with $a \\neq 0$. Examples include $x^3 - 1$, $2x^3 - x^2 + 4$, and $-x^3 + 2x$. The graph has an S-shaped curve with at most two turning points.

// A quartic polynomial has degree $4$, and a quintic has degree $5$. Beyond degree five, standard names become rare — we simply refer to "a degree $6$ polynomial" or "a degree $10$ polynomial." The pattern of naming by Latin or Greek roots exists but sees little use in practice.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
//     // obj5:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj5: {
//   title: `Standard Form`,
//   content: `A polynomial is in standard form when its terms are arranged in descending order of degree, from highest to lowest.

// The polynomial $2x^2 - x + 3$ is in standard form. The degrees decrease from left to right: $2$, then $1$, then $0$. The polynomial $3 + 2x^2 - x$ contains the same terms but is not in standard form. Rewriting it as $2x^2 - x + 3$ puts it in standard form.

// Standard form offers several advantages. The leading term appears first, making the degree immediately visible. The leading coefficient is the first number you see, simplifying analysis of end behavior. Comparing two polynomials becomes easier when both follow the same ordering convention.

// When a term is missing, standard form reveals the gap. The polynomial $x^3 + 5x - 2$ skips degree $2$ — there is no $x^2$ term. In standard form, this absence is clear. Some contexts require writing missing terms explicitly with zero coefficients: $x^3 + 0x^2 + 5x - 2$. This expanded form proves useful in polynomial long division and synthetic division, where alignment by degree matters.

// Converting to standard form is mechanical. Identify the degree of each term, then reorder from highest to lowest. For $7 - 3x^2 + x^4 + x$, the terms have degrees $0$, $2$, $4$, and $1$. Sorted descending: $x^4 - 3x^2 + x + 7$. The polynomial is now in standard form.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
//     // obj6:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

// obj6: {
//   title: `Evaluating Polynomials`,
//   content: `Evaluating a polynomial means substituting a specific value for the variable and computing the result.

// For a polynomial $P(x)$, the notation $P(a)$ represents the value obtained by replacing every $x$ with $a$. If $P(x) = 2x^2 - 3x + 1$, then $P(4)$ means substituting $4$ for $x$:

// $$P(4) = 2(4)^2 - 3(4) + 1 = 2(16) - 12 + 1 = 32 - 12 + 1 = 21$$

// The polynomial evaluates to $21$ when $x = 4$.

// Negative values require careful attention to signs. For the same polynomial, $P(-2)$ gives:

// $$P(-2) = 2(-2)^2 - 3(-2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15$$

// The squared term produces a positive result, and subtracting a negative becomes addition.

// Evaluation connects algebra to geometry. Each input-output pair $(a, P(a))$ defines a point on the polynomial's graph. Evaluating $P(x)$ at many values traces out the curve. The point $(4, 21)$ lies on the graph of $P(x) = 2x^2 - 3x + 1$, as does $(-2, 15)$.

// Evaluation also detects roots. If $P(a) = 0$, then $a$ is a root of the polynomial. Testing whether a value is a root requires only evaluation — substitute and check whether the result is zero.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
    
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


const sectionsContent = {

  obj1: {
    title: `What is a Polynomial?`,
    content: `A polynomial in the variable $x$ is an expression of the form:

$$a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_2x^2 + a_1x + a_0$$

The components are straightforward. The variable $x$ represents an unknown quantity. The coefficients $a_0, a_1, \\ldots, a_n$ are fixed numbers — typically real numbers, though complex coefficients appear in advanced contexts. The exponents on $x$ must be non-negative integers: $0, 1, 2, 3$, and so on.

The expression $3x^4 - 2x^2 + 5x - 7$ is a polynomial. So is $x^2 + 1$. So is the constant $5$, which can be written as $5x^0$. The simplest polynomial is just a number; the most complex have no upper limit on degree or number of terms.

Certain expressions fail to qualify. The expression $x^{-2} + 3$ contains a negative exponent and is not a polynomial. The expression $\\sqrt{x} + 1$ involves a fractional exponent ($x^{1/2}$) and is not a polynomial. The expression $\\frac{1}{x} + 4$ places the variable in a denominator, equivalent to $x^{-1}$, and is not a polynomial. The expression $2^x$ has the variable in the exponent rather than the base and is not a polynomial. Each of these violates the requirement that exponents be non-negative integers.

Polynomials are closed under addition, subtraction, and multiplication — combining two polynomials through these [operations](!/algebra/polynomials/operations) always produces another polynomial. Division, however, can break the pattern: $\\frac{x^2 + 1}{x}$ is not a polynomial.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Vocabulary`,
    content: `Working with polynomials requires precise language. Each piece has a name, and these names appear constantly in algebra.

A term is a single unit within a polynomial — a coefficient multiplied by a power of the variable. In $4x^3 - 2x + 7$, the terms are $4x^3$, $-2x$, and $7$. Each term stands alone; the polynomial is their sum.

The coefficient of a term is its numerical factor. In $4x^3$, the coefficient is $4$. In $-2x$, the coefficient is $-2$. A term like $x^2$ has coefficient $1$, even when unwritten. A term like $-x$ has coefficient $-1$.

The leading term is the term with the highest exponent. In $4x^3 - 2x + 7$, the leading term is $4x^3$. The leading coefficient is the coefficient of the leading term — here, $4$. These determine the polynomial's dominant behavior for large values of $x$.

The constant term is the term with no variable — the term where $x^0 = 1$ contributes only the coefficient. In $4x^3 - 2x + 7$, the constant term is $7$. Some polynomials, like $x^2 - 3x$, have no constant term, or equivalently, a constant term of zero.

Polynomials are also classified by number of terms. A monomial has one term: $5x^2$. A binomial has two terms: $x + 3$. A trinomial has three terms: $x^2 - 4x + 4$. Beyond three, no special names exist — we simply say "polynomial with four terms" or describe it by degree.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Degree`,
    content: `The degree of a polynomial measures its highest power and determines much of its behavior.

The degree of a single term is the exponent on its variable. The term $5x^3$ has degree $3$. The term $-2x$ has degree $1$, since $x = x^1$. A constant term like $7$ has degree $0$, since $7 = 7x^0$.

The degree of a polynomial is the highest degree among all its terms. In $4x^3 - 2x + 7$, the degrees of the individual terms are $3$, $1$, and $0$. The highest is $3$, so the polynomial has degree $3$. In $x^5 - x^2 + x$, the degree is $5$. In $2x - 9$, the degree is $1$.

A nonzero constant like $5$ is a polynomial of degree $0$. It has one term, $5x^0$, with exponent zero. Constants are the simplest polynomials — they assign the same value regardless of $x$.

The zero polynomial presents a special case. The expression $0$ has no nonzero terms, so no "highest degree" exists. Conventions vary: some texts leave the degree undefined, others assign $-\\infty$. This technicality rarely affects practical work, but it explains why some theorems explicitly exclude the zero polynomial.

Degree predicts behavior. It limits the number of [roots](!/algebra/polynomials/roots) a polynomial can have, bounds the number of turning points in its [graph](!/algebra/polynomials/graphing), and determines how the polynomial grows as $x$ becomes large. A degree $5$ polynomial behaves fundamentally differently from a degree $2$ polynomial, regardless of their specific coefficients.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Classification by Degree`,
    content: `Polynomials receive names based on their degree. These names appear throughout mathematics and provide immediate information about a polynomial's structure.

A constant polynomial has degree $0$. Examples include $5$, $-3$, and $\\frac{1}{2}$. The [graph](!/algebra/polynomials/graphing) is a horizontal line, and the polynomial has no [roots](!/algebra/polynomials/roots) unless it equals zero.

A linear polynomial has degree $1$. The general form is $ax + b$ with $a \\neq 0$. Examples include $2x + 3$, $-x + 1$, and $7x$. The graph is a straight line with slope $a$, crossing the x-axis exactly once.

A quadratic polynomial has degree $2$. The general form is $ax^2 + bx + c$ with $a \\neq 0$. Examples include $x^2 - 4$, $3x^2 + 2x - 1$, and $-x^2 + 5$. The graph is a parabola, opening upward when $a > 0$ and downward when $a < 0$.

A cubic polynomial has degree $3$. The general form is $ax^3 + bx^2 + cx + d$ with $a \\neq 0$. Examples include $x^3 - 1$, $2x^3 - x^2 + 4$, and $-x^3 + 2x$. The graph has an S-shaped curve with at most two turning points.

A quartic polynomial has degree $4$, and a quintic has degree $5$. Beyond degree five, standard names become rare — we simply refer to "a degree $6$ polynomial" or "a degree $10$ polynomial." The pattern of naming by Latin or Greek roots exists but sees little use in practice.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Standard Form`,
    content: `A polynomial is in standard form when its terms are arranged in descending order of degree, from highest to lowest.

The polynomial $2x^2 - x + 3$ is in standard form. The degrees decrease from left to right: $2$, then $1$, then $0$. The polynomial $3 + 2x^2 - x$ contains the same terms but is not in standard form. Rewriting it as $2x^2 - x + 3$ puts it in standard form.

Standard form offers several advantages. The leading term appears first, making the degree immediately visible. The leading coefficient is the first number you see, simplifying analysis of end behavior. Comparing two polynomials becomes easier when both follow the same ordering convention.

When a term is missing, standard form reveals the gap. The polynomial $x^3 + 5x - 2$ skips degree $2$ — there is no $x^2$ term. In standard form, this absence is clear. Some contexts require writing missing terms explicitly with zero coefficients: $x^3 + 0x^2 + 5x - 2$. This expanded form proves useful in [long division and synthetic division](!/algebra/polynomials/operations), where alignment by degree matters.

Converting to standard form is mechanical. Identify the degree of each term, then reorder from highest to lowest. For $7 - 3x^2 + x^4 + x$, the terms have degrees $0$, $2$, $4$, and $1$. Sorted descending: $x^4 - 3x^2 + x + 7$. The polynomial is now in standard form.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Evaluating Polynomials`,
    content: `Evaluating a polynomial means substituting a specific value for the variable and computing the result.

For a polynomial $P(x)$, the notation $P(a)$ represents the value obtained by replacing every $x$ with $a$. If $P(x) = 2x^2 - 3x + 1$, then $P(4)$ means substituting $4$ for $x$:

$$P(4) = 2(4)^2 - 3(4) + 1 = 2(16) - 12 + 1 = 32 - 12 + 1 = 21$$

The polynomial evaluates to $21$ when $x = 4$.

Negative values require careful attention to signs. For the same polynomial, $P(-2)$ gives:

$$P(-2) = 2(-2)^2 - 3(-2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15$$

The squared term produces a positive result, and subtracting a negative becomes addition.

Evaluation connects algebra to geometry. Each input-output pair $(a, P(a))$ defines a point on the polynomial's [graph](!/algebra/polynomials/graphing). Evaluating $P(x)$ at many values traces out the curve. The point $(4, 21)$ lies on the graph of $P(x) = 2x^2 - 3x + 1$, as does $(-2, 15)$.

Evaluation also detects [roots](!/algebra/polynomials/roots). If $P(a) = 0$, then $a$ is a root of the polynomial. Testing whether a value is a root requires only evaluation — substitute and check whether the result is zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  // obj7: {
  //   title: ``,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },


  obj7: {
  title: `Operations on Polynomials`,
  content: `Polynomials combine through four arithmetic operations: addition, subtraction, multiplication, and division. Each operation follows rules that emerge naturally from the algebra of terms.

Adding polynomials means collecting like terms — terms that share the same power of $x$. The sum of $3x^2 + 2x - 1$ and $x^2 - 5x + 4$ groups the $x^2$ terms, the $x$ terms, and the constants:

$$(3x^2 + 2x - 1) + (x^2 - 5x + 4) = 4x^2 - 3x + 3$$

Subtraction works the same way, with signs distributed across the second polynomial. Multiplying polynomials requires the distributive property — each term of one polynomial multiplies every term of the other, and the results are combined. For two binomials:

$$(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$$

Division introduces more complexity. Unlike the other three operations, dividing one polynomial by another does not always yield a polynomial. When it does not divide evenly, the result includes a quotient and a remainder, much like integer division. Techniques such as long division and synthetic division handle this process systematically.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Polynomial Operations](!/algebra/polynomials/operations) →@`,
  link: '',
},


  // obj8: {
  //   title: ``,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj8: {
  title: `Factoring Polynomials`,
  content: `Factoring reverses multiplication. Where multiplication combines factors into a product, factoring breaks a polynomial apart into simpler pieces whose product equals the original.

The polynomial $x^2 - 5x + 6$ factors as $(x - 2)(x - 3)$. Multiplying the factors back confirms the result. Factoring transforms a single expression into a product of lower-degree polynomials, revealing structure that the expanded form hides.

Why factor at all? Because products are easier to analyze than sums. A polynomial in factored form exposes its [roots](!/algebra/polynomials/roots) directly — each factor $(x - r)$ identifies a root at $x = r$. Factored form also simplifies solving equations, canceling rational expressions, and understanding a polynomial's [graph](!/algebra/polynomials/graphing).

Several techniques exist. Extracting a greatest common factor applies to nearly every polynomial. Grouping handles four-term expressions by pairing terms strategically. Special patterns — the difference of squares, perfect square trinomials, and sum or difference of cubes — allow instant recognition and factoring. Trinomials of the form $ax^2 + bx + c$ require methods tailored to finding two binomial factors.

Not every polynomial factors neatly over the integers. The expression $x^2 + 1$ has no real factors. Determining when a polynomial is irreducible — when no further factoring is possible — is itself an important skill.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Factoring Techniques](!/algebra/polynomials/factoring) →@`,
  link: '',
},

  // obj9: {
  //   title: ``,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj9: {
  title: `Roots and Zeros`,
  content: `A [root](!/algebra/polynomials/roots) of a polynomial $P(x)$ is a value $r$ such that $P(r) = 0$. The terms "root" and "zero" are interchangeable — both refer to inputs that make the polynomial vanish.

The polynomial $P(x) = x^2 - 4$ has two roots: $x = 2$ and $x = -2$. Substituting either value produces zero. These roots correspond to the points where the polynomial's [graph](!/algebra/polynomials/graphing) crosses the x-axis.

Roots and [factors](!/algebra/polynomials/factoring) are two faces of the same relationship. If $r$ is a root of $P(x)$, then $(x - r)$ is a factor of $P(x)$. Conversely, if $(x - r)$ divides $P(x)$ evenly, then $r$ is a root. The polynomial $x^2 - 4$ factors as $(x - 2)(x + 2)$, and the roots $2$ and $-2$ appear directly in the factors.

A polynomial of degree $n$ has at most $n$ roots. A quadratic has at most two, a cubic at most three, and so on. Some roots may be repeated — the polynomial $(x - 1)^3$ has root $x = 1$ with multiplicity three. Multiplicity affects how the graph behaves at that root, whether it crosses the x-axis or merely touches it.

Not all roots are real numbers. The polynomial $x^2 + 1$ has no real roots, but it has two complex roots: $x = i$ and $x = -i$. The Fundamental Theorem of Algebra guarantees that every polynomial of degree $n \\geq 1$ has exactly $n$ roots when counted with multiplicity over the complex numbers.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Finding Roots](!/algebra/polynomials/roots) →@`,
  link: '/algebra/polynomials/roots',
},

  // obj10: {
  //   title: ``,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },


  obj10: {
  title: `Graphing Polynomials`,
  content: `The graph of a polynomial $P(x)$ is the set of all points $(x, P(x))$ plotted in the coordinate plane. Every polynomial produces a smooth, continuous curve — no breaks, no sharp corners, no jumps.

The shape of the curve depends on the polynomial's degree. Linear polynomials produce straight lines. Quadratics produce parabolas. Higher-degree polynomials develop additional bends called turning points. A polynomial of degree $n$ has at most $n - 1$ turning points, so a cubic can bend at most twice and a quartic at most three times.

End behavior describes what happens as $x$ moves toward $\\infty$ or $-\\infty$. The leading term controls this — for large values of $x$, all other terms become negligible. A polynomial with a positive leading coefficient and even degree rises on both ends. An odd-degree polynomial with a positive leading coefficient falls to the left and rises to the right. The leading coefficient and degree together determine all four possible end behavior patterns.

The x-intercepts of the graph are precisely the [roots](!/algebra/polynomials/roots) of the polynomial. A root with odd multiplicity corresponds to a crossing — the graph passes through the x-axis. A root with even multiplicity corresponds to a touch — the graph meets the axis and turns back. The y-intercept is simply the constant term, the value $P(0)$.

Combining end behavior, intercepts, turning points, and a few evaluated points produces an accurate sketch without plotting every value.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Graphing Polynomials](!/algebra/polynomials/graphing) →@`,
  link: '',
},
  // obj11: {
  //   title: ``,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },


  obj11: {
  title: `Key Theorems`,
  content: `Several foundational theorems govern polynomial behavior. These results connect evaluation, division, [factoring](!/algebra/polynomials/factoring), and [roots](!/algebra/polynomials/roots) into a unified framework.

The Remainder Theorem states that when a polynomial $P(x)$ is divided by $(x - a)$, the remainder equals $P(a)$. No long division is needed — a single evaluation determines the remainder. If $P(x) = x^3 - 2x + 4$, the remainder upon dividing by $(x - 3)$ is $P(3) = 27 - 6 + 4 = 25$.

The Factor Theorem follows immediately. Since the remainder of dividing $P(x)$ by $(x - a)$ is $P(a)$, the remainder is zero exactly when $P(a) = 0$. In other words, $(x - a)$ is a factor of $P(x)$ if and only if $a$ is a root. This bridges the gap between division and root-finding.

The Rational Root Theorem narrows the search for roots when a polynomial has integer coefficients. If $\\frac{p}{q}$ is a rational root of $a_nx^n + \\cdots + a_0$ (in lowest terms), then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$. This produces a finite list of candidates to test, transforming root-finding from guesswork into systematic elimination.

Together, these theorems provide a strategy: use the Rational Root Theorem to generate candidates, the Remainder Theorem to test them efficiently, and the Factor Theorem to extract confirmed factors.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Polynomial Theorems](!/algebra/polynomials/rules) →@`,
  link: '',
},
  obj12: {
    title: ``,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: ``,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: ``,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: ``,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },

}

  const introContent = {
  id: "intro",
  title: "Expressions Built from Powers",
  content: `A polynomial is an algebraic expression constructed from variables, coefficients, and non-negative integer exponents, combined through addition, subtraction, and multiplication. These expressions appear throughout mathematics — from simple linear equations to complex models in physics and engineering. Understanding polynomials means understanding the building blocks of algebra itself.`
}
const faqQuestions = {
  obj1: {
    question: "What is a polynomial?",
    answer: "A polynomial is an algebraic expression of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, where the coefficients are numbers and the exponents are non-negative integers. Examples include 3x² - 2x + 5 and x⁴ - 1. Expressions with negative or fractional exponents are not polynomials."
  },
  obj2: {
    question: "What is the degree of a polynomial?",
    answer: "The degree of a polynomial is the highest exponent that appears on the variable. For 4x³ - 2x + 7, the degree is 3. For x⁵ - x² + x, the degree is 5. A nonzero constant has degree 0. The degree determines much of the polynomial's behavior, including maximum number of roots."
  },
  obj3: {
    question: "What is the leading coefficient?",
    answer: "The leading coefficient is the coefficient of the term with the highest degree. In 4x³ - 2x + 7, the leading term is 4x³ and the leading coefficient is 4. The leading coefficient determines the polynomial's end behavior and appears first when written in standard form."
  },
  obj4: {
    question: "What is the difference between monomial, binomial, and trinomial?",
    answer: "A monomial has one term (like 5x²), a binomial has two terms (like x + 3), and a trinomial has three terms (like x² - 4x + 4). These names classify polynomials by their number of terms. Beyond three terms, we simply say 'polynomial with n terms.'"
  },
  obj5: {
    question: "What is standard form for a polynomial?",
    answer: "Standard form arranges terms in descending order of degree, from highest to lowest. The polynomial 3 + 2x² - x becomes 2x² - x + 3 in standard form. This makes the degree and leading coefficient immediately visible and simplifies comparison between polynomials."
  },
  obj6: {
    question: "How do you evaluate a polynomial?",
    answer: "To evaluate P(x) at x = a, substitute a for every x and compute. For P(x) = 2x² - 3x + 1, evaluating P(4) gives 2(16) - 12 + 1 = 21. Evaluation finds points on the graph and tests whether a value is a root (where P(a) = 0)."
  },
  obj7: {
    question: "What is a root or zero of a polynomial?",
    answer: "A root (or zero) of polynomial P(x) is a value r where P(r) = 0. For x² - 4, the roots are 2 and -2. Roots correspond to x-intercepts on the graph. If r is a root, then (x - r) is a factor. A degree n polynomial has at most n roots."
  },
  obj8: {
    question: "What operations can you perform on polynomials?",
    answer: "Polynomials can be added, subtracted, multiplied, and divided. Addition and subtraction combine like terms. Multiplication uses the distributive property. Division may produce a quotient and remainder. Polynomials are closed under addition, subtraction, and multiplication."
  },
  obj9: {
    question: "What is the constant term of a polynomial?",
    answer: "The constant term is the term with no variable — the coefficient of x⁰. In 4x³ - 2x + 7, the constant term is 7. Some polynomials like x² - 3x have no constant term (equivalently, a constant term of zero). The constant term equals P(0)."
  },
  obj10: {
    question: "Why is x⁻² + 3 not a polynomial?",
    answer: "The expression x⁻² + 3 contains a negative exponent, which violates the definition requiring non-negative integer exponents. Similarly, √x + 1 (fractional exponent), 1/x + 4 (variable in denominator), and 2ˣ (variable in exponent) are not polynomials."
  },
  obj11: {
    question: "What are linear, quadratic, cubic, and quartic polynomials?",
    answer: "These names indicate degree. Linear polynomials have degree 1 (ax + b). Quadratic polynomials have degree 2 (ax² + bx + c). Cubic polynomials have degree 3. Quartic polynomials have degree 4, and quintic have degree 5. Beyond degree 5, we typically say 'degree n polynomial.'"
  },
  obj12: {
    question: "What is the Remainder Theorem?",
    answer: "The Remainder Theorem states that when P(x) is divided by (x - a), the remainder equals P(a). No long division needed — just evaluate. If P(3) = 25, then dividing P(x) by (x - 3) leaves remainder 25. When the remainder is 0, (x - a) is a factor."
  },
  obj13: {
    question: "What is the Factor Theorem?",
    answer: "The Factor Theorem says (x - a) is a factor of P(x) if and only if P(a) = 0. This connects roots and factors directly: finding a root immediately gives a factor, and each factor reveals a root. It follows from the Remainder Theorem when the remainder is zero."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Polynomials",
    "description": "Master polynomials: definition, degree, terms, standard form, evaluation, operations, factoring, roots, graphing, and key theorems including Remainder and Factor Theorems.",
    "url": "https://www.learnmathclass.com/algebra/polynomials",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Polynomials"
    },
    "teaches": [
      "Definition of polynomials and non-examples",
      "Vocabulary: terms, coefficients, leading term, constant term",
      "Degree and classification by degree",
      "Standard form and evaluation",
      "Operations: addition, subtraction, multiplication, division",
      "Factoring and roots",
      "Graphing polynomials and key theorems"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Algebra",
        "item": "https://www.learnmathclass.com/algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Polynomials",
        "item": "https://www.learnmathclass.com/algebra/polynomials"
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
}


  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Polynomials | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/algebra/polynomials",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Polynomials: Definition, Degree & Operations | Learn Math Class",
      description: "Master polynomials: definition, degree, terms, standard form, evaluation, operations, factoring, roots, graphing, and key theorems including Remainder and Factor Theorems.",
      keywords: keyWords.join(", "),
      url: "/algebra/polynomials",
      name: "Polynomials"
    },
  }
}
   }

// export default function PolynomialsPage({seoData,sectionsContent , introContent}) {


export default function PolynomialsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
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
   {/* <Head>
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
</Head> */}

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
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Polynomials</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
   secondaryNavMode="children"
   secondaryNavTitle="More in this Section" 
   
   />
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
