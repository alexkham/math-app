// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//  const keyWords = [
//   "arithmetic properties",
//   "commutative property",
//   "associative property",
//   "distributive property",
//   "additive identity",
//   "multiplicative identity",
//   "additive inverse",
//   "multiplicative inverse",
//   "zero property of multiplication",
//   "sign rules",
//   "subtraction as inverse addition",
//   "division as inverse multiplication",
//   "properties of addition",
//   "properties of multiplication",
//   "arithmetic operations",
// ]

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//  const sectionsContent = {
 
//   obj0: {
//     title: `Key Terms`,
//     content: `
// ## Properties (umbrella entities)
 
// - [Properties of Addition](!/arithmetic/definitions#properties_of_addition) — the structural rules governing addition
// - [Properties of Multiplication](!/arithmetic/definitions#properties_of_multiplication) — the structural rules governing multiplication
 
// ## Related Terms
 
// - [Reciprocal](!/arithmetic/definitions#reciprocal) — multiplicative inverse, $\\frac{1}{a}$ where $a \\neq 0$
// - [Fraction](!/arithmetic/definitions#fraction) — used implicitly in the definition of division
// - [Modulus](!/arithmetic/definitions#modulus) — these properties extend to modular arithmetic with one important exception
// `,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@
// `,
//     link: '',
//   },
 
 
//   obj1: {
//     title: `What Are Properties of Operations?`,
//     content: `A property of an operation is a statement that holds for every choice of inputs. The expression $3 + 5$ equals $5 + 3$, and so does $-12 + 0.7$, and so does $\\frac{2}{9} + \\sqrt{11}$. The pattern — that the order of two addends does not affect the sum — is universal. That universality is what makes it a property.
 
// Properties differ from definitions and from procedural rules. A definition introduces an object: what a [fraction](!/arithmetic/fractions) is, what a [prime number](!/arithmetic/divisibility#7) is. A procedural rule prescribes a method: how to add fractions, how to test [divisibility by 9](!/arithmetic/divisibility/rules). A property states a fact that the operation itself satisfies, independently of any specific computation.
 
// Properties are also distinct from conventions. The order of operations — multiply before add, evaluate parentheses first — is a convention agreed upon to disambiguate notation. The commutative property of addition is not a convention. It would remain true under any notational system, because it describes how addition behaves, not how it is written.
 
// The properties on this page are the foundation of arithmetic and algebra. Every manipulation in algebra — combining like terms, factoring, solving equations — relies on them. They are usually applied without being named, but they are always present.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj2: {
//     title: `Two Main Operations: Addition and Multiplication`,
//     content: `Most of the properties on this page come in pairs. There is a commutative property of addition and a commutative property of multiplication. There is an associative property of addition and an associative property of multiplication. There is an additive identity and a multiplicative identity, an additive inverse and a multiplicative inverse. The pattern is consistent and intentional.
 
// The reason is that addition and multiplication are the two fundamental binary operations of arithmetic. Every other operation reduces to one of them. Subtraction is not a separate operation but a special case of addition: $a - b$ is shorthand for $a + (-b)$, treated in detail under [subtraction as inverse addition](!/arithmetic/properties#10). Division is similarly a special case of multiplication: $\\frac{a}{b}$ is shorthand for $a \\cdot \\frac{1}{b}$, treated under [division as inverse multiplication](!/arithmetic/properties#11). Once subtraction and division are recognized as derived operations, only addition and multiplication remain as the primitive ones.
 
// This is why the properties below appear in dual form. Each section presents the addition version and the multiplication version side by side, reflecting the symmetry of the two operations and the structural pattern that runs through arithmetic.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj3: {
//     title: `Commutative Property`,
//     content: `The commutative property states that the order of operands does not change the result.
 
// ## For Addition
 
// $$a + b = b + a$$
 
// The expressions $7 + 4$ and $4 + 7$ both equal $11$. The order of the two addends is irrelevant.
 
// ## For Multiplication
 
// $$a \\cdot b = b \\cdot a$$
 
// The expressions $7 \\cdot 4$ and $4 \\cdot 7$ both equal $28$. Reversing the factors does not affect the product.
 
// ## Subtraction and Division Are Not Commutative
 
// Neither subtraction nor division shares this property. The expressions $7 - 4$ and $4 - 7$ are different ($3$ and $-3$). The expressions $7 \\div 4$ and $4 \\div 7$ are different ($1.75$ and approximately $0.571$). The commutative pattern stops at addition and multiplication — for the reasons developed in [subtraction as inverse addition](!/arithmetic/properties#10) and [division as inverse multiplication](!/arithmetic/properties#11).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj4: {
//     title: `Associative Property`,
//     content: `The associative property states that the grouping of operands does not change the result.
 
// ## For Addition
 
// $$(a + b) + c = a + (b + c)$$
 
// To compute $2 + 3 + 5$, the order in which the additions are performed makes no difference. Adding $2 + 3$ first and then adding $5$ gives $10$. Adding $3 + 5$ first and then adding $2$ gives the same. The parentheses can be moved without consequence.
 
// ## For Multiplication
 
// $$(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$$
 
// To compute $2 \\cdot 3 \\cdot 5$, the grouping $(2 \\cdot 3) \\cdot 5 = 6 \\cdot 5 = 30$ matches $2 \\cdot (3 \\cdot 5) = 2 \\cdot 15 = 30$.
 
// ## Subtraction and Division Are Not Associative
 
// Subtraction fails: $(8 - 3) - 2 = 3$, but $8 - (3 - 2) = 7$. Division fails: $(12 \\div 6) \\div 2 = 1$, but $12 \\div (6 \\div 2) = 4$. Without associativity, parentheses are mandatory for these operations.
 
// ## Generalization
 
// The associative property extends to any number of terms or factors. A sum like $a + b + c + d + e$ can be evaluated in any grouping order and yields the same result. This is why such expressions are written without parentheses — none are needed.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj5: {
//     title: `Distributive Property`,
//     content: `The distributive property connects addition and multiplication. It states that multiplying a sum by a number gives the same result as multiplying each addend separately and then adding.
 
// $$a(b + c) = ab + ac$$
 
// For $3(4 + 5)$: applying the formula gives $3 \\cdot 4 + 3 \\cdot 5 = 12 + 15 = 27$. Computing directly gives $3 \\cdot 9 = 27$. The two routes agree.
 
// The right form mirrors the left:
 
// $$(b + c)a = ba + ca$$
 
// The property also distributes over subtraction:
 
// $$a(b - c) = ab - ac$$
 
// This works because subtraction is a special case of addition — see [subtraction as inverse addition](!/arithmetic/properties#10).
 
// ## Factoring Reverses Distribution
 
// Reading the equation right to left gives the basis for factoring: $ab + ac = a(b + c)$. Pulling a common factor out of a sum is the inverse direction of distribution. The two operations — distributing and factoring — are the same property applied in opposite directions.
 
// ## Why It Matters
 
// Distribution is the only property linking the two main operations. Without it, addition and multiplication would be entirely independent. The distributive property is what allows expressions like $3x + 12$ to be rewritten as $3(x + 4)$, and what makes algebraic manipulation possible.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj6: {
//     title: `Identity Elements`,
//     content: `An identity element for an operation is a value that leaves any input unchanged. Each of the two main operations has its own.
 
// ## Additive Identity
 
// $$a + 0 = a$$
 
// Zero is the additive identity. Adding it to any number returns that number unchanged. The property holds in both directions: $0 + a = a$ as well.
 
// ## Multiplicative Identity
 
// $$a \\cdot 1 = a$$
 
// One is the multiplicative identity. Multiplying any number by $1$ returns that number unchanged. Like the additive case, this works in both directions: $1 \\cdot a = a$.
 
// ## Why Identities Matter
 
// Identity elements are not interchangeable. Adding $1$ does not leave a number unchanged, and multiplying by $0$ does not either. Each operation has exactly one identity, and that uniqueness is structural — it follows from the definition of the operation, not from convention.
 
// Identities are essential for defining inverses. The next section explains how every real number has an additive inverse summing to $0$, and how every nonzero real number has a multiplicative inverse multiplying to $1$ — relationships that require the identity elements as their target.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj7: {
//     title: `Inverse Elements`,
//     content: `An inverse element undoes an operation. For each of the two main operations, every element has an inverse, with one exception.
 
// ## Additive Inverse
 
// $$a + (-a) = 0$$
 
// For every real number $a$, the value $-a$ is its additive inverse. The two combine to produce the [additive identity](!/arithmetic/properties#6). Every real number has exactly one additive inverse.
 
// ## Multiplicative Inverse
 
// $$a \\cdot \\frac{1}{a} = 1, \\quad a \\neq 0$$
 
// For every nonzero real number $a$, the value $\\frac{1}{a}$ — also called its [reciprocal](!/arithmetic/fractions/dividing#1) — is its multiplicative inverse. The two combine to produce the [multiplicative identity](!/arithmetic/properties#6).
 
// ## Why Zero Has No Multiplicative Inverse
 
// The number $0$ is the only real number without a multiplicative inverse. The equation $0 \\cdot x = 1$ has no solution because, by the [zero property of multiplication](!/arithmetic/properties#8), $0 \\cdot x = 0$ for every $x$. There is no number that, when multiplied by $0$, gives $1$. This is the formal reason division by zero is undefined: $\\frac{1}{0}$ would be the multiplicative inverse of $0$, and that inverse does not exist.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj8: {
//     title: `Zero Property of Multiplication`,
//     content: `$$a \\cdot 0 = 0$$
 
// Multiplying any number by zero gives zero. The property holds in both directions: $0 \\cdot a = 0$ as well.
 
// This is sometimes treated as a separate axiom, but it is actually a consequence of the [distributive property](!/arithmetic/properties#5). Starting from $a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0$, subtracting $a \\cdot 0$ from both sides leaves $0 = a \\cdot 0$. The result follows from the structure of arithmetic itself, not from a separate definition.
 
// The zero property is what prevents zero from having a multiplicative inverse, as discussed in [inverse elements](!/arithmetic/properties#7). It is also why the product of any list of numbers is zero whenever even one of the factors is zero — a fact that underlies factoring techniques in algebra.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj9: {
//     title: `Sign Rules`,
//     content: `Three rules govern signs in multiplication.
 
// $$(-a)(-b) = ab$$
 
// The product of two negatives is positive. Multiplying $-3$ by $-4$ gives $12$, not $-12$.
 
// $$(-a)(b) = -(ab)$$
 
// The product of a negative and a positive is negative. Multiplying $-3$ by $4$ gives $-12$.
 
// $$-(-a) = a$$
 
// The negative of a negative is the original number. The expression $-(-5)$ equals $5$.
 
// These rules are not independent axioms — they follow from the [distributive property](!/arithmetic/properties#5) combined with the definition of additive inverses. Starting from $(-a)(b) + ab = (-a + a)(b) = 0 \\cdot b = 0$, the value $(-a)(b)$ must equal $-(ab)$. A similar derivation produces the other two rules.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj10: {
//     title: `Subtraction as Inverse Addition`,
//     content: `$$a - b = a + (-b)$$
 
// Subtraction is defined as the addition of an additive inverse. The expression $7 - 3$ is shorthand for $7 + (-3)$. There is no separate "subtraction" operation in formal arithmetic — only addition combined with negation.
 
// This definition has consequences. Because subtraction reduces to addition, certain properties of addition transfer to subtraction in a controlled way. The [distributive property](!/arithmetic/properties#5) distributes over subtraction: $a(b - c) = ab - ac$, since $a(b + (-c)) = ab + a(-c) = ab - ac$.
 
// The [commutative](!/arithmetic/properties#3) and [associative](!/arithmetic/properties#4) properties, however, do not transfer cleanly. The expression $a - b$ does not equal $b - a$, and $(a - b) - c$ does not equal $a - (b - c)$. The reason is that subtraction is shorthand for an asymmetric operation — $a + (-b)$ treats $a$ and $b$ differently — so the symmetry that addition enjoys is lost in the abbreviation.
 
// Recognizing subtraction as inverse addition simplifies algebraic manipulation. Once $a - b$ is rewritten as $a + (-b)$, the addition properties apply directly, and many apparent quirks of subtraction dissolve.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj11: {
//     title: `Division as Inverse Multiplication`,
//     content: `$$\\frac{a}{b} = a \\cdot \\frac{1}{b}, \\quad b \\neq 0$$
 
// Division is defined as multiplication by a multiplicative inverse. The expression $\\frac{12}{4}$ is shorthand for $12 \\cdot \\frac{1}{4}$. There is no separate "division" operation in formal arithmetic — only multiplication combined with reciprocation.
 
// The structural parallel with subtraction is exact. Subtraction is addition of an additive inverse; division is multiplication by a multiplicative inverse. Both are derived operations built on top of their primary counterparts.
 
// The condition $b \\neq 0$ is unavoidable. Since $0$ has no multiplicative inverse (see [inverse elements](!/arithmetic/properties#7)), the expression $\\frac{a}{0}$ has no meaning. This is the formal reason division by zero is undefined.
 
// Like subtraction, division does not inherit the [commutative](!/arithmetic/properties#3) or [associative](!/arithmetic/properties#4) properties of multiplication. The expression $\\frac{a}{b}$ does not equal $\\frac{b}{a}$, and $\\frac{a/b}{c}$ does not equal $\\frac{a}{b/c}$. Rewriting $\\frac{a}{b}$ as $a \\cdot \\frac{1}{b}$ — moving from division to multiplication-by-reciprocal — is the standard technique for applying multiplication properties to expressions that involve division.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj12: {
//     title: `Why These Properties Matter`,
//     content: `The properties on this page are the rules that make algebra possible. Every standard manipulation — combining like terms, factoring, expanding products, [solving equations](!/algebra/equations) — depends on them.
 
// Combining $3x + 5x$ into $8x$ is an application of the [distributive property](!/arithmetic/properties#5): $3x + 5x = (3 + 5)x = 8x$. Rewriting $a^2 - b^2$ as $(a - b)(a + b)$ uses distributive expansion in reverse. Solving $2x + 5 = 11$ by subtracting $5$ from both sides relies on the additive inverse and the principle that adding the same quantity to both sides of an equation preserves equality.
 
// Mental arithmetic also relies on these properties. Computing $25 \\cdot 4 \\cdot 7$ as $100 \\cdot 7 = 700$ uses [associativity](!/arithmetic/properties#4) to regroup the factors. Computing $8 \\cdot 17$ as $8(20 - 3) = 160 - 24 = 136$ uses distributivity to break a hard multiplication into easier pieces.
 
// The properties are usually applied without being named. The point of stating them explicitly is to clarify why standard techniques work and to provide a foundation that generalizes — the same properties hold for the rational numbers, the real numbers, and many algebraic structures encountered later in mathematics.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
 
//   obj13: {
//     title: `Related Concepts`,
//     content: `The properties on this page connect to several adjacent topics on the site.
 
// [Fractions](!/arithmetic/fractions) inherit every property of multiplication and addition. The [reciprocal](!/arithmetic/fractions/dividing#1) of a fraction is its multiplicative inverse, and adding fractions with a common denominator uses the same commutative and associative rules as adding integers.
 
// [Modular arithmetic](!/arithmetic/modulo) extends these properties to a finite cyclic system. Addition and multiplication remain commutative, associative, and distributive within any modulus, but inverses behave differently — not every element has a multiplicative inverse modulo $n$ unless it is [coprime](!/arithmetic/divisibility/gcd#7) to $n$.
 
// [Algebraic equations](!/algebra/equations) are solved by applying these properties step by step. Equivalent equations are produced by adding the same quantity to both sides (additive inverse), multiplying both sides by a nonzero constant (multiplicative inverse), or distributing across parentheses. The solving methods catalogued under linear, quadratic, and polynomial equations all rest on the rules listed here.
 
// [Powers and exponents](!/algebra/powers) extend multiplication into repeated multiplication, and the [exponent rules](!/algebra/powers/exponent-rules) — $a^m \\cdot a^n = a^{m+n}$, $(ab)^n = a^n b^n$ — are direct consequences of the associativity and commutativity of multiplication.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
// }

// const introContent = {
//   id: 'intro',
//   title: `The Rules That Make Arithmetic Work`,
//   content: `A property of an operation is a statement that holds for every input. The order of two addends never affects the sum; the grouping of three factors never changes the product. These facts are not coincidences — they are the structural rules of arithmetic, and every algebraic manipulation rests on them. This page collects the core properties of addition and multiplication, the bridge between the two, and the smaller derived rules that follow.`,
// }
 
// const faqQuestions = {
//   obj1: {
//     question: "What are properties of arithmetic operations?",
//     answer: "A property of an arithmetic operation is a statement that holds for every choice of inputs. For example, the commutative property of addition states that a + b equals b + a for any numbers. These properties form the structural rules that all arithmetic and algebra rely on, independent of any specific computation."
//   },
//   obj2: {
//     question: "What are the main properties of addition and multiplication?",
//     answer: "The main properties are commutative (order does not matter), associative (grouping does not matter), and distributive (linking addition and multiplication). Each operation also has an identity element: 0 for addition and 1 for multiplication. Every real number has an additive inverse, and every nonzero real number has a multiplicative inverse."
//   },
//   obj3: {
//     question: "What is the distributive property?",
//     answer: "The distributive property states that a(b + c) equals ab + ac. It connects addition and multiplication, allowing a sum to be multiplied term by term. Reading the equation in reverse gives the basis for factoring, where a common factor is pulled out of a sum: ab + ac equals a(b + c)."
//   },
//   obj4: {
//     question: "Why does zero have no multiplicative inverse?",
//     answer: "The number 0 is the only real number without a multiplicative inverse. The equation 0 times x equals 1 has no solution because, by the zero property of multiplication, 0 times any number equals 0. This is the formal reason division by zero is undefined."
//   },
//   obj5: {
//     question: "How are subtraction and division related to addition and multiplication?",
//     answer: "Subtraction is defined as addition of an additive inverse: a minus b is shorthand for a plus negative b. Division is defined as multiplication by a multiplicative inverse: a divided by b is shorthand for a times 1/b. Both are derived operations built on top of addition and multiplication, not primitive operations of their own."
//   },
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Properties of Arithmetic Operations",
//     "description": "Learn the properties of arithmetic operations: commutative, associative, distributive, identity, inverse, sign rules, and zero property explained with examples.",
//     "url": "https://www.learnmathclass.com/arithmetic/properties",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "Middle School, High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Properties of Arithmetic Operations"
//     },
//     "teaches": [
//       "Commutative property of addition and multiplication",
//       "Associative property of addition and multiplication",
//       "Distributive property connecting addition and multiplication",
//       "Identity elements: zero for addition and one for multiplication",
//       "Inverse elements and why zero has no multiplicative inverse",
//       "Sign rules, the zero property of multiplication, and how subtraction and division derive from their primary operations"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Arithmetic",
//         "item": "https://www.learnmathclass.com/arithmetic"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Properties of Arithmetic Operations",
//         "item": "https://www.learnmathclass.com/arithmetic/properties"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }



//   return {
//   props:{
//      sectionsContent,
//      introContent,
//      faqQuestions,
//      schemas,
//      seoData: {
//        title: "Properties of Arithmetic Operations | Learn Math Class",
//        description: "Learn the properties of arithmetic operations: commutative, associative, distributive, identity, inverse, sign rules, and zero property explained with examples.",
//        keywords: keyWords.join(", "),
//        url: "/arithmetic/properties",
//        name: "Properties of Arithmetic Operations"
//      },
//    }
// }
//    }

// export default function ArithmeticProperties({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//  <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Arithmetic Properties</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//     <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-26 | 4 tables (obj5 aggregation, obj9 aggregation, obj12 aggregation, obj14 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){

 const keyWords = [
  "arithmetic properties",
  "commutative property",
  "associative property",
  "distributive property",
  "additive identity",
  "multiplicative identity",
  "additive inverse",
  "multiplicative inverse",
  "zero property of multiplication",
  "sign rules",
  "subtraction as inverse addition",
  "division as inverse multiplication",
  "properties of addition",
  "properties of multiplication",
  "arithmetic operations",
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

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj5 — aggregation: forms of the distributive property
  const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Form</th>
      <th style="${tableHeaders.aggregation}">Statement</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Left distribution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a(b + c) = ab + ac</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3(4 + 5) = 12 + 15 = 27</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Right distribution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(b + c)a = ba + ca</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(4 + 5)·3 = 12 + 15 = 27</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Over subtraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a(b − c) = ab − ac</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3(7 − 2) = 21 − 6 = 15</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Factoring (reverse direction)</td>
      <td style="padding: 12px 15px; color: #34495e;">ab + ac = a(b + c)</td>
      <td style="padding: 12px 15px; color: #34495e;">3x + 12 = 3(x + 4)</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation: sign rules in multiplication
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Rule</th>
      <th style="${tableHeaders.aggregation}">Statement</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative × negative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−a)(−b) = ab — product of two negatives is positive</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−3)(−4) = 12</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative × positive</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−a)(b) = −(ab) — opposite signs yield a negative product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−3)(4) = −12</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Double negative</td>
      <td style="padding: 12px 15px; color: #34495e;">−(−a) = a — negating a negative returns the original</td>
      <td style="padding: 12px 15px; color: #34495e;">−(−5) = 5</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — aggregation: algebra/mental-math techniques and which property they use
  const obj12Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Technique</th>
      <th style="${tableHeaders.aggregation}">Example</th>
      <th style="${tableHeaders.aggregation}">Property used</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Combining like terms</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3x + 5x = (3 + 5)x = 8x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distributive (reverse)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Factoring</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a² − b² = (a − b)(a + b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distributive (reverse)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Solving by inverse</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2x + 5 = 11 → subtract 5 from both sides → 2x = 6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">additive inverse</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Regrouping for mental math</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">25 · 4 · 7 = (25 · 4) · 7 = 100 · 7 = 700</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">associative</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Breaking a product</td>
      <td style="padding: 12px 15px; color: #34495e;">8 · 17 = 8(20 − 3) = 160 − 24 = 136</td>
      <td style="padding: 12px 15px; color: #34495e;">distributive (over subtraction)</td>
    </tr>
  </tbody>
</table>
`

  // obj14 — summary capstone: paired properties across the +/× duality
  const capstoneTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Property</th>
      <th style="${tableHeaders.summary}">For addition</th>
      <th style="${tableHeaders.summary}">For multiplication</th>
      <th style="${tableHeaders.summary} text-align: center;">Inherits to sub / div?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Commutative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a + b = b + a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a·b = b·a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Associative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b) + c = a + (b + c)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a·b)·c = a·(b·c)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Identity element</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a + 0 = a (identity is 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a · 1 = a (identity is 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">via inverse form</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse element</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a + (−a) = 0 for every a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a · (1⁄a) = 1 for every a ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">defines sub, div</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Distributive (bridge)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;" colspan="2">a(b + c) = ab + ac — the only property linking the two operations; distributes over subtraction too</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Zero property</td>
      <td style="padding: 12px 15px; color: #34495e;">— (no analog)</td>
      <td style="padding: 12px 15px; color: #34495e;">a · 0 = 0; consequence of distributivity; reason 0 has no multiplicative inverse</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">n/a</td>
    </tr>
  </tbody>
</table>
`


 const sectionsContent = {
 
  obj0: {
    title: `Key Terms`,
    content: `
## Properties (umbrella entities)
 
- [Properties of Addition](!/arithmetic/definitions#properties_of_addition) — the structural rules governing addition
- [Properties of Multiplication](!/arithmetic/definitions#properties_of_multiplication) — the structural rules governing multiplication
 
## Related Terms
 
- [Reciprocal](!/arithmetic/definitions#reciprocal) — multiplicative inverse, $\\frac{1}{a}$ where $a \\neq 0$
- [Fraction](!/arithmetic/definitions#fraction) — used implicitly in the definition of division
- [Modulus](!/arithmetic/definitions#modulus) — these properties extend to modular arithmetic with one important exception
`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@
`,
    link: '',
  },
 
 
  obj1: {
    title: `What Are Properties of Operations?`,
    content: `A property of an operation is a statement that holds for every choice of inputs. The expression $3 + 5$ equals $5 + 3$, and so does $-12 + 0.7$, and so does $\\frac{2}{9} + \\sqrt{11}$. The pattern — that the order of two addends does not affect the sum — is universal. That universality is what makes it a property.
 
Properties differ from definitions and from procedural rules. A definition introduces an object: what a [fraction](!/arithmetic/fractions) is, what a [prime number](!/arithmetic/divisibility#7) is. A procedural rule prescribes a method: how to add fractions, how to test [divisibility by 9](!/arithmetic/divisibility/rules). A property states a fact that the operation itself satisfies, independently of any specific computation.
 
Properties are also distinct from conventions. The order of operations — multiply before add, evaluate parentheses first — is a convention agreed upon to disambiguate notation. The commutative property of addition is not a convention. It would remain true under any notational system, because it describes how addition behaves, not how it is written.
 
The properties on this page are the foundation of arithmetic and algebra. Every manipulation in algebra — combining like terms, factoring, solving equations — relies on them. They are usually applied without being named, but they are always present.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj2: {
    title: `Two Main Operations: Addition and Multiplication`,
    content: `Most of the properties on this page come in pairs. There is a commutative property of addition and a commutative property of multiplication. There is an associative property of addition and an associative property of multiplication. There is an additive identity and a multiplicative identity, an additive inverse and a multiplicative inverse. The pattern is consistent and intentional.
 
The reason is that addition and multiplication are the two fundamental binary operations of arithmetic. Every other operation reduces to one of them. Subtraction is not a separate operation but a special case of addition: $a - b$ is shorthand for $a + (-b)$, treated in detail under [subtraction as inverse addition](!/arithmetic/properties#10). Division is similarly a special case of multiplication: $\\frac{a}{b}$ is shorthand for $a \\cdot \\frac{1}{b}$, treated under [division as inverse multiplication](!/arithmetic/properties#11). Once subtraction and division are recognized as derived operations, only addition and multiplication remain as the primitive ones.
 
This is why the properties below appear in dual form. Each section presents the addition version and the multiplication version side by side, reflecting the symmetry of the two operations and the structural pattern that runs through arithmetic.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj3: {
    title: `Commutative Property`,
    content: `The commutative property states that the order of operands does not change the result.
 
## For Addition
 
@academic[formula_callout:Commutative Property
$$a + b = b + a$$]@
 
The expressions $7 + 4$ and $4 + 7$ both equal $11$. The order of the two addends is irrelevant.
 
## For Multiplication
 
@academic[formula_callout:Commutative Property
$$a \\cdot b = b \\cdot a$$]@
 
The expressions $7 \\cdot 4$ and $4 \\cdot 7$ both equal $28$. Reversing the factors does not affect the product. The dot $\\cdot$, the cross $\\times$, and plain juxtaposition ($ab$) all denote the same multiplication — the three forms are listed among the [arithmetic symbols](!/math-symbols/arithmetic).
 
## Subtraction and Division Are Not Commutative
 
Neither subtraction nor division shares this property. The expressions $7 - 4$ and $4 - 7$ are different ($3$ and $-3$). The expressions $7 \\div 4$ and $4 \\div 7$ are different ($1.75$ and approximately $0.571$). The commutative pattern stops at addition and multiplication — for the reasons developed in [subtraction as inverse addition](!/arithmetic/properties#10) and [division as inverse multiplication](!/arithmetic/properties#11).`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj4: {
    title: `Associative Property`,
    content: `The associative property states that the grouping of operands does not change the result.
 
## For Addition
 
@academic[formula_callout:Associative Property
$$(a + b) + c = a + (b + c)$$]@
 
To compute $2 + 3 + 5$, the order in which the additions are performed makes no difference. Adding $2 + 3$ first and then adding $5$ gives $10$. Adding $3 + 5$ first and then adding $2$ gives the same. The parentheses can be moved without consequence.
 
## For Multiplication
 
@academic[formula_callout:Associative Property
$$(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$$]@
 
To compute $2 \\cdot 3 \\cdot 5$, the grouping $(2 \\cdot 3) \\cdot 5 = 6 \\cdot 5 = 30$ matches $2 \\cdot (3 \\cdot 5) = 2 \\cdot 15 = 30$.
 
## Subtraction and Division Are Not Associative
 
Subtraction fails: $(8 - 3) - 2 = 3$, but $8 - (3 - 2) = 7$. Division fails: $(12 \\div 6) \\div 2 = 1$, but $12 \\div (6 \\div 2) = 4$. Without associativity, parentheses are mandatory for these operations.
 
## Generalization
 
The associative property extends to any number of terms or factors. A sum like $a + b + c + d + e$ can be evaluated in any grouping order and yields the same result. This is why such expressions are written without parentheses — none are needed.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj5: {
    title: `Distributive Property`,
    content: `The distributive property connects addition and multiplication. It states that multiplying a sum by a number gives the same result as multiplying each addend separately and then adding.
 
@academic[formula_callout:Distributive Property
$$a(b + c) = ab + ac$$]@
 
For $3(4 + 5)$: applying the formula gives $3 \\cdot 4 + 3 \\cdot 5 = 12 + 15 = 27$. Computing directly gives $3 \\cdot 9 = 27$. The two routes agree.

@academic[pitfall,aside:true,width:35%:Distributing only to the first term
Multiplying only the first addend gives $3(4 + 5) = 3 \\cdot 4 + 5 = 17$. The factor multiplies both addends: $3 \\cdot 4 + 3 \\cdot 5 = 27$, the same as $3 \\cdot 9$.
[Read more](!#pitfalls)]@

The factor in front of the parentheses multiplies the entire sum. With more addends inside, the pattern extends term by term: $2(x + y + 3) = 2x + 2y + 6$, one product for each addend. The number of products always matches the number of addends inside the parentheses.
 
The right form mirrors the left:
 
@academic[formula_callout:Distributive Property
$$(b + c)a = ba + ca$$]@
 
The property also distributes over subtraction:
 
@academic[formula_callout:Distributive Property
$$a(b - c) = ab - ac$$]@
 
This works because subtraction is a special case of addition — see [subtraction as inverse addition](!/arithmetic/properties#10).
 
## Factoring Reverses Distribution
 
Reading the equation right to left gives the basis for factoring: $ab + ac = a(b + c)$. Pulling a common factor out of a sum is the inverse direction of distribution. The two operations — distributing and factoring — are the same property applied in opposite directions.
 
## Why It Matters
 
Distribution is the only property linking the two main operations. Without it, addition and multiplication would be entirely independent. The distributive property is what allows expressions like $3x + 12$ to be rewritten as $3(x + 4)$, and what makes algebraic manipulation possible.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj6: {
    title: `Identity Elements`,
    content: `An identity element for an operation is a value that leaves any input unchanged. Each of the two main operations has its own.
 
## Additive Identity
 
@academic[formula_callout:Identity Elements
$$a + 0 = a$$]@
 
Zero is the additive identity. Adding it to any number returns that number unchanged. The property holds in both directions: $0 + a = a$ as well.
 
## Multiplicative Identity
 
@academic[formula_callout:Identity Elements
$$a \\cdot 1 = a$$]@
 
One is the multiplicative identity. Multiplying any number by $1$ returns that number unchanged. Like the additive case, this works in both directions: $1 \\cdot a = a$.
 
## Why Identities Matter
 
Identity elements are not interchangeable. Adding $1$ does not leave a number unchanged, and multiplying by $0$ does not either. Each operation has exactly one identity, and that uniqueness is structural — it follows from the definition of the operation, not from convention.
 
Identities are essential for defining inverses. The next section explains how every real number has an additive inverse summing to $0$, and how every nonzero real number has a multiplicative inverse multiplying to $1$ — relationships that require the identity elements as their target.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj7: {
    title: `Inverse Elements`,
    content: `An inverse element undoes an operation. For each of the two main operations, every element has an inverse, with one exception.
 
## Additive Inverse
 
@academic[formula_callout:Inverse Elements
$$a + (-a) = 0$$]@
 
For every real number $a$, the value $-a$ is its additive inverse. The two combine to produce the [additive identity](!/arithmetic/properties#6). Every real number has exactly one additive inverse.
 
## Multiplicative Inverse
 
@academic[formula_callout:Inverse Elements
$$a \\cdot \\frac{1}{a} = 1, \\quad a \\neq 0$$]@
 
For every nonzero real number $a$, the value $\\frac{1}{a}$ — also called its [reciprocal](!/arithmetic/fractions/dividing#1) — is its multiplicative inverse. The two combine to produce the [multiplicative identity](!/arithmetic/properties#6).
 
## Why Zero Has No Multiplicative Inverse
 
The number $0$ is the only real number without a multiplicative inverse. The equation $0 \\cdot x = 1$ has no solution because, by the [zero property of multiplication](!/arithmetic/properties#8), $0 \\cdot x = 0$ for every $x$. There is no number that, when multiplied by $0$, gives $1$. This is the formal reason division by zero is undefined: $\\frac{1}{0}$ would be the multiplicative inverse of $0$, and that inverse does not exist.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj8: {
    title: `Zero Property of Multiplication`,
    content: `$$a \\cdot 0 = 0$$
 
@academic[rule:Zero Property of Multiplication
Multiplying any number by zero gives zero.]@

The property holds in both directions: $0 \\cdot a = 0$ as well.
 
This is sometimes treated as a separate axiom, but it is actually a consequence of the [distributive property](!/arithmetic/properties#5). Starting from $a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0$, subtracting $a \\cdot 0$ from both sides leaves $0 = a \\cdot 0$. The result follows from the structure of arithmetic itself, not from a separate definition.
 
The zero property is what prevents zero from having a multiplicative inverse, as discussed in [inverse elements](!/arithmetic/properties#7). It is also why the product of any list of numbers is zero whenever even one of the factors is zero — a fact that underlies factoring techniques in algebra.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj9: {
    title: `Sign Rules`,
    content: `Three rules govern signs in multiplication.
 
@academic[formula_callout:Sign Rules
$$(-a)(-b) = ab$$]@
 
The product of two negatives is positive. Multiplying $-3$ by $-4$ gives $12$, not $-12$.
 
@academic[formula_callout:Sign Rules
$$(-a)(b) = -(ab)$$]@
 
The product of a negative and a positive is negative. Multiplying $-3$ by $4$ gives $-12$.
 
@academic[formula_callout:Sign Rules
$$-(-a) = a$$]@
 
The negative of a negative is the original number. The expression $-(-5)$ equals $5$.

@academic[pitfall,aside:true,width:35%:Using the product sign rule for sums
Applying "two negatives make a positive" to a sum gives $(-3) + (-4) = 7$. The rule is about products, $(-3)(-4) = 12$; adding two negatives goes further below zero, $(-3) + (-4) = -7$.
[Read more](!#pitfalls)]@
 
These rules are not independent axioms — they follow from the [distributive property](!/arithmetic/properties#5) combined with the definition of additive inverses. Starting from $(-a)(b) + ab = (-a + a)(b) = 0 \\cdot b = 0$, the value $(-a)(b)$ must equal $-(ab)$. A similar derivation produces the other two rules.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj10: {
    title: `Subtraction as Inverse Addition`,
    content: `$$a - b = a + (-b)$$
 
Subtraction is defined as the addition of an additive inverse. The expression $7 - 3$ is shorthand for $7 + (-3)$. There is no separate "subtraction" operation in formal arithmetic — only addition combined with negation.
 
This definition has consequences. Because subtraction reduces to addition, certain properties of addition transfer to subtraction in a controlled way. The [distributive property](!/arithmetic/properties#5) distributes over subtraction: $a(b - c) = ab - ac$, since $a(b + (-c)) = ab + a(-c) = ab - ac$.

@academic[pitfall,aside:true,width:35%:Grouping the terms after a minus sign
Reading $10 - 4 + 3$ as $10 - (4 + 3)$ gives $3$. The operations go left to right, $(10 - 4) + 3 = 9$, which is also $10 + (-4) + 3 = 9$.
[Read more](!#pitfalls)]@
 
The [commutative](!/arithmetic/properties#3) and [associative](!/arithmetic/properties#4) properties, however, do not transfer cleanly. The expression $a - b$ does not equal $b - a$, and $(a - b) - c$ does not equal $a - (b - c)$. The reason is that subtraction is shorthand for an asymmetric operation — $a + (-b)$ treats $a$ and $b$ differently — so the symmetry that addition enjoys is lost in the abbreviation.
 
Recognizing subtraction as inverse addition simplifies algebraic manipulation. Once $a - b$ is rewritten as $a + (-b)$, the addition properties apply directly, and many apparent quirks of subtraction dissolve.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj11: {
    title: `Division as Inverse Multiplication`,
    content: `$$\\frac{a}{b} = a \\cdot \\frac{1}{b}, \\quad b \\neq 0$$
 
Division is defined as multiplication by a multiplicative inverse. The expression $\\frac{12}{4}$ is shorthand for $12 \\cdot \\frac{1}{4}$. There is no separate "division" operation in formal arithmetic — only multiplication combined with reciprocation.
 
The structural parallel with subtraction is exact. Subtraction is addition of an additive inverse; division is multiplication by a multiplicative inverse. Both are derived operations built on top of their primary counterparts.

@academic[pitfall,aside:true,width:35%:Taking division by zero as zero
Giving $5 \\div 0$ the value $0$, like $0 \\div 5 = 0$, fails the check $0 \\cdot 0 = 0 \\neq 5$. No number times $0$ gives $5$, so $5 \\div 0$ is undefined, while $0 \\div 5 = 0$ because $0 \\cdot 5 = 0$.
[Read more](!#pitfalls)]@
 
The condition $b \\neq 0$ is unavoidable. Since $0$ has no multiplicative inverse (see [inverse elements](!/arithmetic/properties#7)), the expression $\\frac{a}{0}$ has no meaning. This is the formal reason division by zero is undefined.
 
Like subtraction, division does not inherit the [commutative](!/arithmetic/properties#3) or [associative](!/arithmetic/properties#4) properties of multiplication. The expression $\\frac{a}{b}$ does not equal $\\frac{b}{a}$, and $\\frac{a/b}{c}$ does not equal $\\frac{a}{b/c}$. Rewriting $\\frac{a}{b}$ as $a \\cdot \\frac{1}{b}$ — moving from division to multiplication-by-reciprocal — is the standard technique for applying multiplication properties to expressions that involve division.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj12: {
    title: `Why These Properties Matter`,
    content: `The properties on this page are the rules that make algebra possible. Every standard manipulation — combining like terms, factoring, expanding products, [solving equations](!/algebra/equations) — depends on them.
 
Combining $3x + 5x$ into $8x$ is an application of the [distributive property](!/arithmetic/properties#5): $3x + 5x = (3 + 5)x = 8x$. Rewriting $a^2 - b^2$ as $(a - b)(a + b)$ uses distributive expansion in reverse. Solving $2x + 5 = 11$ by subtracting $5$ from both sides relies on the additive inverse and the principle that adding the same quantity to both sides of an equation preserves equality.
 
Mental arithmetic also relies on these properties. Computing $25 \\cdot 4 \\cdot 7$ as $100 \\cdot 7 = 700$ uses [associativity](!/arithmetic/properties#4) to regroup the factors. Computing $8 \\cdot 17$ as $8(20 - 3) = 160 - 24 = 136$ uses distributivity to break a hard multiplication into easier pieces.
 
The properties are usually applied without being named. The point of stating them explicitly is to clarify why standard techniques work and to provide a foundation that generalizes — the same properties hold for the rational numbers, the real numbers, and many algebraic structures encountered later in mathematics.`,
    before: ``,
    after: ``,
    link: '',
  },
 
 
  obj13: {
    title: `Related Concepts`,
    content: `The properties on this page connect to several adjacent topics on the site.
 
[Fractions](!/arithmetic/fractions) inherit every property of multiplication and addition. The [reciprocal](!/arithmetic/fractions/dividing#1) of a fraction is its multiplicative inverse, and adding fractions with a common denominator uses the same commutative and associative rules as adding integers.
 
[Modular arithmetic](!/arithmetic/modulo) extends these properties to a finite cyclic system. Addition and multiplication remain commutative, associative, and distributive within any modulus, but inverses behave differently — not every element has a multiplicative inverse modulo $n$ unless it is [coprime](!/arithmetic/divisibility/gcd#7) to $n$.
 
[Algebraic equations](!/algebra/equations) are solved by applying these properties step by step. Equivalent equations are produced by adding the same quantity to both sides (additive inverse), multiplying both sides by a nonzero constant (multiplicative inverse), or distributing across parentheses. The solving methods catalogued under linear, quadratic, and polynomial equations all rest on the rules listed here.
 
[Powers and exponents](!/algebra/powers) extend multiplication into repeated multiplication, and the [exponent rules](!/algebra/powers/exponent-rules) — $a^m \\cdot a^n = a^{m+n}$, $(ab)^n = a^n b^n$ — are direct consequences of the associativity and commutativity of multiplication.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Properties at a Glance`,
    content: `The properties of arithmetic come in matched pairs — one version for addition, one for multiplication — with the distributive property bridging the two and the zero property breaking the symmetry on the multiplication side. The table below presents the duality in one view, alongside whether each property carries over to subtraction or division (which are themselves derived from the two primary operations).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Common Pitfalls`,
    content: `Five mistakes account for many of the wrong answers when these properties are used. Four are marked where they happen in the sections above; mixing up the two identities is the one the identity section already points out. Here each is worked through in full, with the wrong and the right working side by side.

**Distributing only to the first term**

A factor in front of parentheses is multiplied into the first addend only, and the rest of the sum is copied unchanged.

Wrong working: $3(4 + 5) = 3 \\cdot 4 + 5 = 12 + 5 = 17$. In algebra the same slip turns $2(x + 3)$ into $2x + 3$.

Right working: the factor multiplies every addend, so $3(4 + 5) = 3 \\cdot 4 + 3 \\cdot 5 = 12 + 15 = 27$ and $2(x + 3) = 2x + 6$.

Why it happens: the factor stands right next to the first addend and seems to belong to it alone, while the parentheses that extend it to the whole sum are easy to overlook.

How to check: when the parentheses hold numbers, add them first: $3(4 + 5) = 3 \\cdot 9 = 27$, not $17$. With a variable, substitute a value: for $x = 1$, $2(1 + 3) = 8$, while $2 \\cdot 1 + 3 = 5$.

**Mixing up the two identities**

The identity of addition is used for multiplication, so multiplying by $0$ is taken to leave a number unchanged, just as adding $0$ does.

Wrong working: $7 + 0 = 7$, so $7 \\cdot 0 = 7$ as well.

Right working: $0$ leaves a number unchanged only under addition, $7 + 0 = 7$. The identity of multiplication is $1$, so $7 \\cdot 1 = 7$, and by the zero property $7 \\cdot 0 = 0$.

Why it happens: adding nothing changes nothing, and multiplying by zero feels like the same kind of "doing nothing" to the number.

How to check: read the product as repeated addition. $7 \\cdot 1$ is one seven, which is $7$; $7 \\cdot 0$ is no sevens at all, which is $0$.

**Using the product sign rule for sums**

The rule that two negatives give a positive is applied to addition, so the sum of two negative numbers comes out positive.

Wrong working: two negatives make a positive, so $(-3) + (-4) = 7$.

Right working: adding a negative number moves down the number line. Starting at $-3$ and moving $4$ further down gives $(-3) + (-4) = -7$. The positive result belongs to the product: $(-3)(-4) = 12$.

Why it happens: the rule is often memorized as a short slogan without the word "multiplying", and the slogan is then used on any expression with two minus signs.

How to check: the sum of two numbers below zero is also below zero. A debt of $3$ plus a debt of $4$ is a debt of $7$, never a gain.

**Grouping the terms after a minus sign**

In a chain of subtractions and additions, the terms after a minus sign are added together first and their total is subtracted, as if the minus applied to everything that follows it.

Wrong working: $10 - 4 + 3 = 10 - (4 + 3) = 10 - 7 = 3$.

Right working: the operations go left to right, $(10 - 4) + 3 = 6 + 3 = 9$. Rewriting the subtraction as an addition gives the same: $10 + (-4) + 3 = 9$, and now the terms may be grouped in any way, for example $10 + (-4 + 3) = 10 + (-1) = 9$.

Why it happens: sums can be regrouped freely, and the same freedom is used on an expression that contains a minus sign, where the associative property does not hold.

How to check: rewrite every subtraction as adding the opposite before regrouping. Each minus sign then stays attached to the number right after it: $10 + (-4) + 3$ has the terms $10$, $-4$ and $3$, which add to $9$.

**Taking division by zero as zero**

A number divided by zero is given the value $0$, by analogy with zero divided by a number.

Wrong working: $0 \\div 5 = 0$, so $5 \\div 0 = 0$ as well.

Right working: a quotient $q = a \\div b$ must satisfy $q \\cdot b = a$. For $0 \\div 5$, the value $q = 0$ works, since $0 \\cdot 5 = 0$. For $5 \\div 0$, the quotient would need $q \\cdot 0 = 5$, but $q \\cdot 0 = 0$ for every $q$ by the zero property, so no value works and $5 \\div 0$ is undefined. In the terms of this page, $\\frac{5}{0} = 5 \\cdot \\frac{1}{0}$ would need the multiplicative inverse of $0$, which does not exist.

Why it happens: both expressions contain the same two numbers and one of them really is $0$. Division is not commutative, so swapping the two numbers changes the question.

How to check: multiply back. The quotient times the divisor must give the dividend, and $0 \\cdot 0 = 0$, not $5$.`,
    before: ``,
    after: ``,
    link: '',
  },
 
}

const introContent = {
  id: 'intro',
  title: `The Rules That Make Arithmetic Work`,
  content: `A property of an operation is a statement that holds for every input. The order of two addends never affects the sum; the grouping of three factors never changes the product. These facts are not coincidences — they are the structural rules of arithmetic, and every algebraic manipulation rests on them. This page collects the core properties of addition and multiplication, the bridge between the two, and the smaller derived rules that follow.`,
}
 
// FAQ pass: cut three case-A questions — the definition, the survey of main
// properties, and the distributive property all have h2s stating the answer.
// Kept the zero-inverse question (buried under an h3 inside Inverse Elements)
// and the derived-operations question; invented the two "why" questions whose
// mechanisms sit in final paragraphs under headings that state only the rule.
// The zero-inverse answer is deliberately the formal angle — the intuitive
// version belongs to /arithmetic/fractions ("Why can't the denominator be zero?").
const faqQuestions = {
  obj1: {
    question: "Why is a negative times a negative a positive?",
    answer: "It follows from the distributive property rather than being a separate rule. Start from (−a)(b) + ab, which factors as (−a + a)(b) = 0 · b = 0, forcing (−a)(b) to equal −(ab). Applying the same argument again to (−a)(−b) forces it to equal ab. So (−3)(−4) = 12: the result is fixed by the structure of arithmetic, not chosen by convention.",
    sectionId: "9"
  },
  obj2: {
    question: "Why does any number times zero equal zero?",
    answer: "It is a consequence of the distributive property, not a separate axiom. Since 0 = 0 + 0, we get a · 0 = a · (0 + 0) = a · 0 + a · 0. Subtracting a · 0 from both sides leaves 0 = a · 0. This result is also what prevents zero from having a reciprocal, and it underlies factoring: a product is zero whenever any factor is zero.",
    sectionId: "8"
  },
  obj3: {
    question: "Why does zero have no multiplicative inverse?",
    answer: "The number 0 is the only real number without a multiplicative inverse. The equation 0 · x = 1 has no solution because, by the zero property of multiplication, 0 times any number equals 0. There is no value that turns 0 into 1. This is the formal reason division by zero is undefined: 1/0 would name an inverse that does not exist.",
    sectionId: "7"
  },
  obj4: {
    question: "How are subtraction and division related to addition and multiplication?",
    answer: "Subtraction is defined as addition of an additive inverse: a − b is shorthand for a + (−b). Division is defined as multiplication by a multiplicative inverse: a ÷ b is shorthand for a · (1/b). Both are derived operations rather than primitive ones, which is why neither inherits commutativity or associativity — a − b is not b − a.",
    sectionId: "10"
  },
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Arithmetic Operations",
    "description": "Learn the properties of arithmetic operations: commutative, associative, distributive, identity, inverse, sign rules, and zero property explained with examples.",
    "url": "https://www.learnmathclass.com/arithmetic/properties",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "Middle School, High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Properties of Arithmetic Operations"
    },
    "teaches": [
      "Commutative property of addition and multiplication",
      "Associative property of addition and multiplication",
      "Distributive property connecting addition and multiplication",
      "Identity elements: zero for addition and one for multiplication",
      "Inverse elements and why zero has no multiplicative inverse",
      "Sign rules, the zero property of multiplication, and how subtraction and division derive from their primary operations"
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
        "name": "Arithmetic",
        "item": "https://www.learnmathclass.com/arithmetic"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Properties of Arithmetic Operations",
        "item": "https://www.learnmathclass.com/arithmetic/properties"
      }
    ]
  }
}



  const prDots = [];
  for (let r = 1; r <= 3; r++) for (let c = 1; c <= 9; c++) prDots.push({ fn: () => r, from: c, to: c, ends: ['closed', 'closed'], color: c <= 4 ? 'f' : 'r' });
  const fpDistribArray = { kind: 'pieces', svgTitle: 'A 3 by 9 array of dots split after the fourth column: 3 times 9 = 27 equals 3 times 4 = 12 plus 3 times 5 = 15', xRange: [0.3, 10], yRange: [0.3, 5], xStep: 20, yStep: 20, xLetter: ' ', yLetter: ' ',
    pieces: prDots,
    vlines: [{ x: 4.5, label: '' }],
    notes: [{ x: 2.5, y: 3.6, text: '3 · 4 = 12', pos: 'n', color: 'f' }, { x: 7, y: 3.6, text: '3 · 5 = 15', pos: 'n', color: 'r' }, { x: 5, y: 4.5, text: 'together: 3 · (4 + 5) = 27', pos: 'e' }],
    caption: 'Split the columns, count each part, add' };
  const demoUnits = {
    distribArray: demoUnitFrame({
      svg: renderFunctionPlotV4(fpDistribArray),
      caption: 'The distributive property as an array',
      text: 'Three rows of nine dots make 3 &#183; 9 = 3 &#183; (4 + 5) = 27. A line after the fourth column splits every row into 4 blue dots and 5 amber dots. Counting the parts separately gives 3 &#183; 4 = 12 blue and 3 &#183; 5 = 15 amber, and 12 + 15 = 27: the same dots counted two ways, which is exactly 3(4 + 5) = 3 &#183; 4 + 3 &#183; 5.',
    }),
  };

  const arithPropOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Properties in matched pairs',
    preface: 'The properties of arithmetic come in matched pairs for addition and multiplication, with the distributive property bridging the two.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'One property breaks the symmetry',
    conclusion: 'The zero property, $a \\cdot 0 = 0$, has no counterpart for addition.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Properties of operations', children: [
        { id: 'add', name: 'Addition', children: [
          { id: 'ac', name: 'Commutative', example: 'a + b = b + a' },
          { id: 'aa', name: 'Associative', example: '(a + b) + c = a + (b + c)' },
          { id: 'ai', name: 'Identity', example: '0' },
          { id: 'ainv', name: 'Inverse', example: '−a' },
        ] },
        { id: 'mul', name: 'Multiplication', children: [
          { id: 'mc', name: 'Commutative', example: 'a · b = b · a' },
          { id: 'ma', name: 'Associative', example: '(ab)c = a(bc)' },
          { id: 'mi', name: 'Identity', example: '1' },
          { id: 'minv', name: 'Inverse', def: 'requires a ≠ 0', example: '1/a' },
          { id: 'zero', name: 'Zero property', def: 'no additive analog', example: 'a · 0 = 0', flag: true },
        ] },
        { id: 'bridge', name: 'Bridge', children: [
          { id: 'dist', name: 'Distributive', example: 'a(b + c) = ab + ac' },
        ] },
      ] },
    ],
  };

  return {
  props:{
    arithPropOutline,
     sectionsContent,
     introContent,
     obj5Table,
     obj9Table,
     obj12Table,
     capstoneTable,
     faqQuestions,
     schemas,
     demoUnits,
     seoData: {
       title: "Properties of Arithmetic Operations | Learn Math Class",
       description: "Learn the properties of arithmetic operations: commutative, associative, distributive, identity, inverse, sign rules, and zero property explained with examples.",
       keywords: keyWords.join(", "),
       url: "/arithmetic/properties",
       name: "Properties of Arithmetic Operations"
     },
   }
}
   }

export default function ArithmeticProperties({arithPropOutline, seoData, sectionsContent, introContent, obj5Table, obj9Table, obj12Table, capstoneTable, faqQuestions, schemas, demoUnits}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
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
          <div key={'obj5-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj5Table }} />,
                  <div key={'unit-distribArray'} dangerouslySetInnerHTML={{ __html: demoUnits.distribArray }} />,
            `Read right to left, the same picture is factoring: 12 + 15 = 3 · (4 + 5).`,
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
          <div key={'obj9-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj9Table }} />,
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
          <div key={'obj12-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj12Table }} />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
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
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key={'capstone-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: capstoneTable }} />,
          <DiagramFrame
            key={'obj14-diagram'}
            id="arithmetic-properties-outline"
            title="Properties of operations"
            source="/arithmetic/properties"
          >
            <TaxonomyOutline data={arithPropOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Arithmetic Properties FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },
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
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Arithmetic Properties</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
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
    <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}