import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import '../../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import Head from 'next/head'

import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'


export default function ImplicationsTruthTablesPage({ seoData, keyWords, implicationExplanations, menuItems, sectionsContent, faqQuestions, schemas }) {

    const implicationOperators = {
        'P→Q': { symbol: 'P→Q', func: (a, b) => !a || b },
        'Q→P': { symbol: 'Q→P', func: (a, b) => !b || a },
        '¬P→Q': { symbol: '¬P→Q', func: (a, b) => a || b },
        'P→¬Q': { symbol: 'P→¬Q', func: (a, b) => !a || !b },
        '¬P→¬Q': { symbol: '¬P→¬Q', func: (a, b) => a || !b },
        '¬Q→¬P': { symbol: '¬Q→¬P', func: (a, b) => b || !a }
      };

    const genericSections = [
      {
        id: '1',
        title: sectionsContent.obj1.title,
        link: sectionsContent.obj1.link,
        content: [sectionsContent.obj1.content]
      },
      {
        id: '2',
        title: sectionsContent.obj2.title,
        link: sectionsContent.obj2.link,
        content: [sectionsContent.obj2.content]
      },
      {
        id: '3',
        title: sectionsContent.obj3.title,
        link: sectionsContent.obj3.link,
        content: [sectionsContent.obj3.content]
      },
      {
        id: '4',
        title: sectionsContent.obj4.title,
        link: sectionsContent.obj4.link,
        content: [sectionsContent.obj4.content]
      },
      {
        id: '5',
        title: sectionsContent.obj5.title,
        link: sectionsContent.obj5.link,
        content: [sectionsContent.obj5.content]
      },
      {
        id: '6',
        title: sectionsContent.obj6.title,
        link: sectionsContent.obj6.link,
        content: [sectionsContent.obj6.content]
      },
      {
        id: '7',
        title: sectionsContent.obj7.title,
        link: sectionsContent.obj7.link,
        content: [sectionsContent.obj7.content]
      },
      {
        id: '8',
        title: sectionsContent.obj8.title,
        link: sectionsContent.obj8.link,
        content: [sectionsContent.obj8.content]
      },
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

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
    }}
  />
</Head>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar 
          side='right'
          sidebarWidth='45px'
          panelWidth='300px'
          iconColor='white'
          panelBackgroundColor='#f2f2f2'/> 
      <h1 className='title' style={{marginTop:'-30px', marginBottom:'0px'}}>Implications Truth Tables</h1> 

      <br/>
      <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0px', alignItems: 'start', paddingTop: '30px'}}>
        <div style={{marginTop: '40px'}}>
          <VerticalButtonGroup items={menuItems} width="200px" />
        </div>
        <TruthTable operators={implicationOperators} explanations={implicationExplanations}/>
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
      <Sections sections={genericSections}/>
      <br/> 
      <br/>
    </>
  )
}

export async function getStaticProps() {
  const keyWords = [
    'implication truth table',
    'logical implication',
    'material conditional',
    'P implies Q',
    'contrapositive logic',
    'converse implication',
    'inverse implication',
    'negated antecedent',
    'negated consequent',
    'if then logic',
    'propositional logic implication',
    'implication equivalence',
    'conditional statement truth table',
    'contrapositive proof'
  ]

  const menuItems = [
    {
      title: "Basic Propositions",
      link: "/logic/truth-tables"
    },
    {
      title: "Biconditionals",
      link: "/logic/truth-tables/biconditionals"
    },
    {
      title: "Tautologies",
      link: "/logic/truth-tables/tautologies"
    },
    {
      title: "Contradictions",
      link: "/logic/truth-tables/contradictions"
    },
  ]
  
  const implicationExplanations = {
    'P→Q': {
      text: "Material [implication](!/logic/propositional-logic/semantics/implication) P→Q (if P then Q) is defined as ¬P∨Q in propositional logic. Truth table follows from this definition: [implication](!/logic/propositional-logic/semantics/implication) is false only when antecedent P is true and consequent Q is false. This reflects logical consequence - when premise holds, conclusion must follow. In terms of truth values: T→F = F, while all other combinations yield T. Formula: P→Q ≡ ¬P∨Q demonstrates equivalence between [implication](!/logic/propositional-logic/semantics/implication) and disjunction with negated antecedent.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/implications#3" }
      ]
    },
    'Q→P': {
      text: "Converse [implication](!/logic/propositional-logic/semantics/implication) Q→P (if Q then P) reverses antecedent and consequent. While P→Q means &quot;if P then Q&quot;, Q→P expresses &quot;if Q then P&quot;. These are not logically equivalent as shown by different truth tables. The converse demonstrates [implication](!/logic/propositional-logic/semantics/implication)&apos;s asymmetry - a key principle in propositional logic. Formula: Q→P ≡ ¬Q∨P. Understanding converse helps identify logical fallacies in argumentation.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/implications#4" }
      ]
    },
    '¬P→Q': {
      text: "Negated antecedent [implication](!/logic/propositional-logic/semantics/implication) ¬P→Q means 'if not P then Q'. This form shows how negating premise affects logical relationship. Formula: ¬P→Q ≡ P∨Q (by material [implication](!/logic/propositional-logic/semantics/implication) definition and double negation). Truth table reveals: when P is false (¬P is true), Q must be true for valid [implication](!/logic/propositional-logic/semantics/implication). Common in proof by contradiction where we assume negation of premise.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/implications#5" }
      ]
    },
    'P→¬Q': {
      text: "Negated consequent [implication](!/logic/propositional-logic/semantics/implication) P→¬Q means &quot;if P then not Q&quot;. Formula: P→¬Q ≡ ¬P∨¬Q. Truth table shows this form&apos;s use in expressing negative conclusions from positive premises. Critical in exclusive relationships where one condition precludes another. Common in mathematical proofs showing mutual exclusivity.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/implications#6" }
      ]
    },
    '¬P→¬Q': {
      text: "Double negation [implication](!/logic/propositional-logic/semantics/implication) ¬P→¬Q means &quot;if not P then not Q&quot;. Formula: ¬P→¬Q ≡ P∨¬Q. Not equivalent to original P→Q, demonstrating how negation placement fundamentally alters logical relationships. Truth table shows distinct behavior from basic [implication](!/logic/propositional-logic/semantics/implication). Important in contrapositive reasoning and proof strategies.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/implications#7" }
      ]
    },
    '¬Q→¬P': {
      text: "Contrapositive ¬Q→¬P is logically equivalent to original [implication](!/logic/propositional-logic/semantics/implication) P→Q. Formula: ¬Q→¬P ≡ Q∨¬P ≡ ¬P∨Q ≡ P→Q. Truth table proves this equivalence. Fundamental theorem in propositional logic: statement is logically equivalent to its contrapositive. Essential in proof techniques where proving contrapositive is easier than direct proof.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/implications#8" }
      ]
    }
  };

  const sectionsContent = {
    obj1: {
      title: `What Is a Logical Implication?`,
      content: `A logical [implication](!/logic/propositional-logic/semantics/implication) is a compound proposition of the form P → Q, read "if P then Q." The proposition P is the antecedent (or hypothesis) and Q is the consequent (or conclusion). The implication asserts that whenever P is true, Q must also be true.

The material conditional is false in exactly one case: when the antecedent is true and the consequent is false. In every other case — including when the antecedent is false — the implication is true. This is the defining property of material implication in classical logic, and it is equivalent to the disjunction ¬P ∨ Q.

The "vacuous truth" cases — where P is false and the implication is true regardless of Q — are often counterintuitive at first but are essential for consistency in formal logic. A false hypothesis cannot invalidate a conditional statement.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj2: {
      title: `Related Forms: Converse, Inverse, and Contrapositive`,
      content: `Every implication P → Q gives rise to three related conditionals:

• **Converse**: Q → P — reverses the direction. Not logically equivalent to P → Q.

• **Inverse**: ¬P → ¬Q — negates both antecedent and consequent. Not logically equivalent to P → Q.

• **Contrapositive**: ¬Q → ¬P — reverses and negates. Logically equivalent to P → Q.

The contrapositive equivalence (P → Q ≡ ¬Q → ¬P) is one of the most important results in propositional logic. It is the basis of proof by contrapositive: to prove "if P then Q," it suffices to prove "if not Q then not P." The converse and inverse, while related to each other (each is the contrapositive of the other), are independent of the original implication.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj3: {
      title: `P → Q: Material Implication`,
      content: `The material [implication](!/logic/propositional-logic/semantics/implication) P → Q is the foundational conditional in propositional logic. It is defined by the equivalence P → Q ≡ ¬P ∨ Q: the implication is true whenever P is false or Q is true (or both).

The only falsifying assignment is P = T, Q = F. This single false row captures the core idea of logical consequence — a true premise cannot lead to a false conclusion.

Material implication is used throughout mathematics to express theorems, definitions, and inference rules. Every mathematical theorem of the form "if hypothesis then conclusion" is a material conditional. The [truth table](!/logic/truth-tables) for P → Q has three true rows and one false row.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj4: {
      title: `Q → P: The Converse`,
      content: `The converse Q → P reverses the roles of antecedent and consequent. If the original [implication](!/logic/propositional-logic/semantics/implication) says "if it rains then the ground is wet," the converse says "if the ground is wet then it rained."

The converse is not logically equivalent to the original: P → Q and Q → P have different truth tables. The converse is false when Q is true and P is false — the opposite falsifying case from the original.

A common logical error is affirming the consequent: assuming that because P → Q is true, Q → P must also be true. The truth tables on this page show precisely why this reasoning fails. However, when both P → Q and Q → P hold, the result is the [biconditional](!/logic/propositional-logic/semantics/biconditional) P ↔ Q.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj5: {
      title: `¬P → Q: Negated Antecedent`,
      content: `The [implication](!/logic/propositional-logic/semantics/implication) ¬P → Q reads "if not P then Q." By material implication, ¬P → Q ≡ ¬(¬P) ∨ Q ≡ P ∨ Q. So the negated-antecedent implication is equivalent to a simple disjunction.

This form appears in reasoning where the absence of one condition guarantees another. For example, "if I don&apos;t take the bus, I walk" expresses ¬P → Q where P = "take the bus" and Q = "walk."

The equivalence ¬P → Q ≡ P ∨ Q is useful in simplifying logical expressions and in converting between implicational and disjunctive normal forms.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj6: {
      title: `P → ¬Q: Negated Consequent`,
      content: `The [implication](!/logic/propositional-logic/semantics/implication) P → ¬Q reads "if P then not Q." By material implication, P → ¬Q ≡ ¬P ∨ ¬Q. This is the [negation](!/logic/propositional-logic/syntax/negation) of the conjunction P ∧ Q by De Morgan&apos;s law: asserting P → ¬Q is the same as denying that P and Q are both true.

This form expresses mutual exclusivity under a condition: if P holds, then Q cannot. It appears in mathematical proofs where establishing one property rules out another.

The truth table shows that P → ¬Q is false only when both P and Q are true — exactly the case the formula is designed to exclude.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj7: {
      title: `¬P → ¬Q: The Inverse`,
      content: `The inverse ¬P → ¬Q reads "if not P then not Q." By material implication, ¬P → ¬Q ≡ P ∨ ¬Q. The inverse is not logically equivalent to the original [implication](!/logic/propositional-logic/semantics/implication) P → Q.

However, the inverse is logically equivalent to the converse Q → P. This follows from the contrapositive relationship: the contrapositive of Q → P is ¬P → ¬Q, and contrapositives are always equivalent.

The inverse is false when P is false and Q is true. Confusing the inverse with the original implication is a common logical error called denying the antecedent: "P → Q is true and P is false, therefore Q is false" — this does not follow.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj8: {
      title: `¬Q → ¬P: The Contrapositive`,
      content: `The contrapositive ¬Q → ¬P is logically equivalent to P → Q. Their truth tables are identical: both are false only when P is true and Q is false (equivalently, when ¬Q is true and ¬P is false).

The equivalence P → Q ≡ ¬Q → ¬P is one of the most used results in mathematical proof. Proof by contrapositive works by proving ¬Q → ¬P instead of P → Q directly, which is often easier when the negated forms are simpler to work with.

For example, to prove "if n² is even then n is even," it is simpler to prove the contrapositive: "if n is odd then n² is odd." The [truth table](!/logic/truth-tables) confirms that these two statements are logically identical.`,
      before: ``,
      after: ``,
      link: ``,
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a logical implication?",
      answer: "A logical implication P → Q (if P then Q) is a compound proposition that is false only when the antecedent P is true and the consequent Q is false. In all other cases — including when P is false — the implication is true. It is equivalent to ¬P ∨ Q."
    },
    obj2: {
      question: "What is the difference between an implication and its converse?",
      answer: "The implication P → Q and its converse Q → P are not logically equivalent. P → Q is false when P is true and Q is false; Q → P is false when Q is true and P is false. Assuming the converse from the original is the fallacy of affirming the consequent."
    },
    obj3: {
      question: "What is the contrapositive and why is it equivalent to the original?",
      answer: "The contrapositive of P → Q is ¬Q → ¬P. They are logically equivalent — their truth tables are identical. This equivalence is the basis of proof by contrapositive, where proving ¬Q → ¬P establishes P → Q."
    },
    obj4: {
      question: "Why is an implication true when the antecedent is false?",
      answer: "When P is false, P → Q is vacuously true regardless of Q. A false hypothesis cannot violate a conditional — there is no case where the premise held and the conclusion failed. This convention ensures consistency in formal logic and mathematics."
    },
    obj5: {
      question: "What is the inverse of an implication?",
      answer: "The inverse of P → Q is ¬P → ¬Q. It is not equivalent to the original implication but is equivalent to the converse Q → P. Confusing the inverse with the original is the fallacy of denying the antecedent."
    },
    obj6: {
      question: "How is P → ¬Q related to mutual exclusivity?",
      answer: "P → ¬Q is equivalent to ¬P ∨ ¬Q, which by De Morgan's law equals ¬(P ∧ Q). It asserts that P and Q cannot both be true — if P holds, Q must be false. This expresses mutual exclusivity under the assumption of P."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Implications Truth Tables",
      "description": "Interactive truth tables for logical implications: material conditional P→Q, converse, inverse, contrapositive, and negated forms. Learn equivalences, fallacies, and proof strategies.",
      "url": "https://www.learnmathclass.com/logic/truth-tables/implications",
      "inLanguage": "en-US",
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Logical Implication Truth Tables"
      },
      "teaches": [
        "Material implication P → Q and its truth table",
        "Converse, inverse, and contrapositive relationships",
        "Contrapositive equivalence and proof by contrapositive",
        "Negated antecedent and negated consequent forms",
        "Common logical fallacies: affirming the consequent, denying the antecedent",
        "Equivalences between implications and disjunctions"
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
          "name": "Logic",
          "item": "https://www.learnmathclass.com/logic"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Truth Tables",
          "item": "https://www.learnmathclass.com/logic/truth-tables"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Implications Truth Tables",
          "item": "https://www.learnmathclass.com/logic/truth-tables/implications"
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

  return {
    props: {
      keyWords,
      implicationExplanations,
      menuItems,
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Implication Truth Tables: P→Q & Forms | Learn Math Class",
        description: "Interactive truth tables for logical implications: material conditional P→Q, converse, inverse, contrapositive, and negated forms. Learn equivalences, fallacies, and proof strategies.",
        keywords: keyWords.join(", "),
        url: "/logic/truth-tables/implications",
        name: "Implications Truth Tables"
      },
    }
  }
}