import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import Head from 'next/head'
import MyList from '@/app/components/page-components/lists/MyList'


export async function getStaticProps(){


const linearEquationFormsData = [
 {
   item: '###  **Standard Form**',
   math: '$$ax + b = 0$$',
   after: '* $a \\neq 0$, $b$ can be any real number.\n* Most general and flexible form.'
 },
 {
   item: '###  **Simplified Form (Isolated Variable)**',
   math: '$$x = c$$',
   after: '* Comes from solving the standard form.\n* Represents the solution explicitly.'
 },
 {
   item: '###  **Multiplicative Form**',
   math: '$$ax = c$$',
   after: '* No constant term on the left.\n* Occurs when $b = 0$ in the standard form.'
 },
 {
   item: '###  **Equality of Two Linear Expressions**',
   math: '$$ax + b = cx + d$$',
   after: '* Linear terms and constants on both sides.\n* Needs rearrangement to solve.\n* Generalized form encompassing most cases.'
 },
 {
   item: '###  **Factored Form**',
   math: '$$a(x - r) = 0$$',
   after: '* Clearly shows the root $x = r$.\n* Arises from factoring the standard form.'
 },
 {
   item: '###  **Proportional Form**',
   math: '$$\\frac{ax + b}{c} = d$$',
   after: '* Equation contains linear expression in a fraction.\n* Can be cleared by multiplying both sides by $c$.'
 },
 {
   item: '###  **Linear Combination Form**',
   math: '$$a_1x + a_2x + \\dots + a_nx + b = 0$$',
   after: '* Multiple like terms; still linear.\n* Simplified to $ax + b = 0$'
 },
 {
   item: '###  **Implicit Linear Form**',
   math: '$$f(x) = 0, \\quad \\text{where } f(x) = ax + b$$',
   after: '* Function notation, but still an algebraic linear equation.'
 }
];


const elementaryOperationsData = [
{
  item: '### **Addition of the Same Value to Both Sides of the Equation**',
  math: '',
  after: '* **Goal**: Eliminate negative constants or move negative terms.\n* **Example 1**:\n  $x - 5 = 3 \\Rightarrow$\n$x - 5 + 5 = 3 + 5 \\Rightarrow$\n$ x = 8$\n* **Example 2**:\n  $2x - 7 = 11 \\Rightarrow 2x - 7 + 7 = 11 + 7 \\Rightarrow 2x = 18$'
},
{
  item: '### **Subtraction of the Same Value from Both Sides of the Equation(Transposing)**',
  math: '',
  after: '* **Goal**: Eliminate positive constants or move positive terms.\n* **Example 1**:\n  $x + 3 = 7 \\Rightarrow x + 3 - 3 = 7 - 3 \\Rightarrow x = 4$\n* **Example 2**:\n  $5x + 12 = 27 \\Rightarrow 5x + 12 - 12 = 27 - 12 \\Rightarrow 5x = 15$\n* **Example 3**:\n  $3x + 8 = x + 14 \\Rightarrow 3x + 8 - 8 = x + 14 - 8 \\Rightarrow 3x = x + 6$'
},
{
 item: '### **Multiplication by a Nonzero Constant (both sides)**',
 math: '',
 after: '* **Goal**: Eliminate fractions or decimal coefficients.\n* **Example 1**:\n  $\\frac{x}{3} = 4 \\Rightarrow 3 \\cdot \\frac{x}{3} = 3 \\cdot 4 \\Rightarrow x = 12$\n* **Example 2**:\n  $0.5x = 6 \\Rightarrow 2 \\cdot 0.5x = 2 \\cdot 6 \\Rightarrow x = 12$'
},
{
 item: '### **Division by a Nonzero Constant (both sides)**',
 math: '',
 after: '* **Goal**: Eliminate coefficients of the variable.\n* **Example 1**:\n  $4x = 12 \\Rightarrow \\frac{4x}{4} = \\frac{12}{4} \\Rightarrow x = 3$\n* **Example 2**:\n  $-6x = 18 \\Rightarrow \\frac{-6x}{-6} = \\frac{18}{-6} \\Rightarrow x = -3$'
},
{
 item: '### **Combining Like Terms**',
 math: '',
 after: '* **Goal**: Simplify expressions on one or both sides.\n* **Example 1**:\n  $2x + 3x = 10 \\Rightarrow 5x = 10$\n* **Example 2**:\n  $7x - 2x + 4 = 19 \\Rightarrow 5x + 4 = 19$\n* **Example 3**:\n  $3x + 5 = x + 11 \\Rightarrow 3x - x = 11 - 5 \\Rightarrow 2x = 6$'
},
{
  item: '### **Distributive Property (Expanding)**',
  math: '',
  after: '* **Goal**: Remove parentheses from expressions.\n* **Example 1**:\n  $2(x + 3) = 10 \\Rightarrow 2x + 6 = 10$\n* **Example 2**:\n  $-3(2x - 4) = 18 \\Rightarrow -6x + 12 = 18$'
},
{
  item: '### **Factoring**',
  math: '',
  after: '* **Goal**: Factor out common terms from expressions.\n* **Example 1**:\n  $3x + 6 = 0 \\Rightarrow 3(x + 2) = 0$\n* **Example 2**:\n  $4x - 8 = 12 \\Rightarrow 4(x - 2) = 12$'
}
//  {
//    item: '###  **Transposing Terms**',
//    math: '',
//    after: '* **Goal**: Move terms from one side to the other (usually via addition/subtraction).\n* **Example**:\n  $x + 5 = 8 \\Rightarrow x = 8 - 5 = 3$'
//  }
];


const keyWords=['linear equations','equations','math equations','algebra equations',
    'solving equations','mathematical equations','linear equations examples',
    'solving equations with variables on both sides',]

    
  const sectionsContent={

    definition:{
      title:`What is Linear equation?`,
      content:``,
      before:`In algebra we define as a linear equation in one variable any mathematical expression that can be reduced to the form

\t\t\t\t\t\t\t\t$ax + b = 0$

where $a \\neq 0$.
While this canonical form is often taken as the standard, it is important to understand that a linear equation does not always appear this way at first glance. It might involve parentheses, fractions, terms spread across both sides of the equals sign, or even look quite unlike a typical 
$ax + b = 0$ equation — and yet still be linear.

Being able to [recognize different forms](!/algebra/equations/linear#forms) of linear equations and knowing how to **transform them into simpler or more familiar ones** is a fundamental skill in solving them. This process relies on a small set of [elementary operations](!/algebra/equations/linear#operations) — things like adding or subtracting the same quantity from both sides, multiplying or dividing by nonzero numbers, or simplifying expressions. These operations don’t change the solution of the equation, but they let us manipulate its form freely, making it easier to solve. Understanding both the variety of forms and how to move between them is essential groundwork before tackling the solution itself.
`,
      after:``,
  
  
    },
    forms:{
      title:`Different forms of linear equations`,
      content:``,
      before:`
      Linear equations can appear in various algebraic forms, each serving different purposes in mathematical analysis and problem-solving. While the standard (canonical) form $ax + b = 0$ provides the most recognizable pattern, linear equations frequently present themselves in other configurations that may initially seem unrelated. Understanding these different forms is crucial because the same mathematical relationship can be expressed in multiple ways depending on the context or the stage of solution. 
      Recognizing these variations allows you to identify linear equations regardless of their appearance and choose the most appropriate form for solving or analyzing a given problem.
      We may as well modify the forms transforming them one to another using [elementary operations](!/algebra/equations/linear#operations). This process of tranformation may itself lead to a solution.
      
      `,
      after:`

      In practice, linear equations rarely appear in their pure, isolated forms. Real-world problems often present equations that combine multiple forms simultaneously - you might encounter an equation with fractions, parentheses, and terms distributed across both sides, requiring you to recognize and work with several forms at once.
      For instance, an equation like $\\frac{2(x-3)}{4}+ 5 = 3x - 7$ incorporates fractional, factored, and two-sided linear expression forms together. This complexity means that successful problem-solving requires not just recognizing individual forms, but understanding how to systematically transform mixed expressions into simpler, more manageable structures. 
     
      `,
  
    },
  
    operations:{
  
      title:`Elementary Operations`,
      content:``,
      before:`Solving linear equations requires a systematic approach to simplification, achieved through a set of fundamental techniques called elementary operations. These operations serve as the mathematical tools that allow us to transform complex equations into simpler, more manageable forms without altering the equation's solution. Just as elementary row operations in linear algebra preserve the solution set of a system while simplifying its structure, these algebraic operations maintain the truthfulness of the equation while reducing its complexity. Each operation—whether adding the same value to both sides, multiplying by a constant, or combining like terms—follows the principle of balance: whatever is done to one side must be done to the other. This ensures that the equality relationship remains intact throughout the solution process. Understanding and mastering these operations is essential because they form the foundation for solving almost any linear equation, regardless of its initial complexity or form.
      
      
      `,
      after:`
      
      While linear equations are mathematically straightforward, solving them is rarely a single-step process. Most problems require combining several techniques in strategic sequences—you might need to distribute terms, clear fractions, and combine like terms before isolating the variable. The path from problem to solution often involves multiple steps that aren't immediately obvious, requiring you to think ahead and choose the most efficient approach. This complexity reminds us that even "simple" mathematical concepts can demand sophisticated problem-solving skills and careful planning to reach the final answer.
      `,
  
    },
    function:{
      title:`Linear Equation vs Linear Function`,
      content:`
      Essentially, both concepts (**Linear Equations** and **Linear Functions**)describe the **same underlying relationship** — but viewed from different perspectives:

A **linear equation** in one variable (e.g., $ax + b = 0$) is primarily about finding **a specific value** of $x$ that makes the statement true — it’s **static** in that sense, focused on solving.

A **linear function** (e.g., $f(x) = ax + b$) is about describing how $y$ (or $f(x)$) **changes with** $x$ — it is a **dynamic rule** for generating outputs from inputs.

### Key Idea :

@academic[example:A linear equation becomes a linear function when we stop asking ‘What value of $x$ makes this true?’ and instead ask ‘What value comes out when I plug $x$ in?’]@

### How to Form the Link:

* Take the linear equation $ax + b = 0$
* Rearranged, it becomes $y = ax + b$ — now it defines a **linear function**.
* The **solution** to the original equation corresponds to the **x-intercept** of the function: the point where $f(x) = 0$.

      `,
      before:`While linear equations focus on solving for a specific value that satisfies a condition, the same expression — once interpreted as a rule assigning outputs to inputs — becomes a linear function. In this way, $ax + b = 0$ and $f(x) = ax + b$ are two sides of the same coin: one algebraic, one functional. Understanding this connection deepens insight into both algebra and graphing.
      `,
      after:``,
  
    },


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  
const introContent = {
  id: "intro",
  title: "",
  content: `Linear equations form the foundation of algebraic problem-solving and represent one of the most fundamental concepts in mathematics. These equations, characterized by variables raised only to the first power, appear in countless real-world applications from calculating distances and rates to modeling economic relationships and scientific phenomena.
This comprehensive guide explores linear equations through four essential perspectives. We begin by establishing a clear [definition](!/algebra/equations/linear#definition) of what constitutes a linear equation, moving beyond the simple $ax+b=0$
form to understand the broader concept. Next, we examine the various [forms](!/algebra/equations/linear#forms) that linear equations can take - from standard form to factored expressions - helping you recognize linear relationships regardless of their initial appearance.
The [elementary operations](!/algebra/equations/linear#operations) section provides the toolkit needed to manipulate and solve these equations, covering addition, subtraction, multiplication, division, and algebraic techniques like distribution and factoring. We then transition to the visual representation of linear equations through graphing, showing how these algebraic expressions translate into straight lines on the coordinate plane.
Finally, we tackle solution methods, presenting systematic approaches to finding the values that satisfy linear equations, whether they appear in simple or complex forms.
By mastering these interconnected concepts, you'll develop both the theoretical understanding and practical skills needed to confidently work with linear equations in any context.`
}


    return {
      props:{
         seoData: {
      title: "Linear Equations - Complete Guide & Examples | Learn Math Class",
      description: "Master linear equations with comprehensive examples, solving methods, and step-by-step explanations. Learn algebra equations and mathematical problem-solving techniques.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/linear",
      name: "Linear Equations"
    },
        sectionsContent,
        introContent,
        keyWords,
        linearEquationFormsData,
        elementaryOperationsData

        
      }
    }
  }

export default function LinearEquationsPage({ 
  seoData,
  sectionsContent,
  introContent,
  keyWords,
  linearEquationFormsData,
  elementaryOperationsData,
}) {

    
  const linearEquationsSections=[
    {
        id:'definition',
        title:sectionsContent.definition.title,
        link:'',
        content:[
          sectionsContent.definition.before,
        ]
    },
    {
        id:'forms',
        title:sectionsContent.forms.title,
        link:'',
        content:[

          sectionsContent.forms.before,
          <div style={{width:'90%',margin:'auto'}}>
          <MyList
            key={'forms'}
            data={linearEquationFormsData}
            type="number"
            math={true}
            boxed={true}
            color="blue"
            mathTheme="grayCool"
            mathProps={{
            display: true,
            
            additionalStyles: { textAlign: "center" ,fontSize: "1.2rem",
              maxWidth:"400px",margin:"auto",maxHeight:"100px"}
            }}
          />
         </div>,
          sectionsContent.forms.after,
          // <div style={{width:'60%',margin:'auto'}}>
          // <MyList 
          // key={'forms'}
          // data={linearEquationFormsData}
          // type="number"
          // math={true}
          // boxed={true}
          // color="gray"
          // // centered={true}
          // mathTheme="royalBlue"
          // mathProps={{
          // display: true,
          // fontSize: "1.9rem", 
          // textAlign: "center"
                  
          //   }}
          // />
          // </div>
        ]
    },
    {
        id:'operations',
        title:sectionsContent.operations.title,
        link:'',
        content:[
          sectionsContent.operations.before,
           <div style={{width:'60%',margin:'auto'}}>
          <MyList
            key={'forms'}
            data={elementaryOperationsData}
            type="number"
            math={true}
            boxed={true}
            color="gray"
            mathTheme="royalBlue"
            mathProps={{
            display: true,
            
            additionalStyles: { textAlign: "center" ,fontSize: "1.2rem",
              maxWidth:"600px",margin:"auto",maxHeight:"100px"}
            }}
          />
         </div>,
         sectionsContent.operations.after,
        ]
    },
     {
        id:'simplification',
        title:'',
        link:'',
        content:''
    },
     {
        id:'function',
        title:sectionsContent.function.title,
        link:'',
        content:[

          sectionsContent.function.before,
          sectionsContent.function.content,
        ]
    },
     {
        id:'solution',
        title:'',
        link:'',
        content:''
    }

     // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // }

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
     <GenericNavbar/>
     <br/>
     <br/>
     <br/>
     <br/>
     <OperaSidebar 
                 side='right'
                 topOffset='55px' 
                 sidebarWidth='45px'
                 panelWidth='200px'
                 iconColor='white'
                 panelBackgroundColor='#f2f2f2'
               /> 
     <Breadcrumb/>
     <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Linear Equations</h1>
     <br/>
     <SectionTableOfContents sections={linearEquationsSections}/>
     <br/>
     <br/>
     <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
     <br/>
     <br/>
     <br/>
     <Sections sections={linearEquationsSections}/>
     <br/>
     <ScrollUpButton/>
     
     </>
  )
}
