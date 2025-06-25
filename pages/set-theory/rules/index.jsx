import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import React from 'react';
import '../../pages.css';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import Sections from '@/app/components/page-components/section/Sections';
import ExpandableTable from '@/app/components/generic-table/ExpandableTable';


export async function getStaticProps(){


    const setAlgebraLawsData = {
        "Idempotent Laws": [
          {
            law: "Idempotent Law for Union",
            formula: "$A \\cup A = A$",
            explanation: "A set unioned with itself remains the same set."
          },
          {
            law: "Idempotent Law for Intersection",
            formula: "$A \\cap A = A$",
            explanation: "A set intersected with itself remains the same set."
          }
        ],
      
        "Associative Laws": [
          {
            law: "Associative Law for Union",
            formula: "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$",
            explanation: "Grouping of sets under union does not affect the result."
          },
          {
            law: "Associative Law for Intersection",
            formula: "$(A \\cap B) \\cap C = A \\cap (B \\cap C)$",
            explanation: "Grouping of sets under intersection does not affect the result."
          }
        ],
      
        "Commutative Laws": [
          {
            law: "Commutative Law for Union",
            formula: "$A \\cup B = B \\cup A$",
            explanation: "The order of sets in a union does not affect the result."
          },
          {
            law: "Commutative Law for Intersection",
            formula: "$A \\cap B = B \\cap A$",
            explanation: "The order of sets in an intersection does not affect the result."
          }
        ],
      
        "Distributive Laws": [
          {
            law: "Distributive Law of Union over Intersection",
            formula: "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
            explanation: "Union distributes over intersection."
          },
          {
            law: "Distributive Law of Intersection over Union",
            formula: "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
            explanation: "Intersection distributes over union."
          }
        ],
      
        "Identity Laws": [
          {
            law: "Identity Law for Union",
            formula: "$A \\cup \\emptyset = A$",
            explanation: "The union of a set with the empty set is the set itself."
          },
          {
            law: "Identity Law for Intersection",
            formula: "$A \\cap U = A$",
            explanation: "The intersection of a set with the universal set is the set itself."
          },
          {
            law: "Annihilation Law for Intersection",
            formula: "$A \\cap \\emptyset = \\emptyset$",
            explanation: "The intersection of a set with the empty set is the empty set."
          },
          {
            law: "Annihilation Law for Union",
            formula: "$A \\cup U = U$",
            explanation: "The union of a set with the universal set is the universal set."
          }
        ],
      
        "Complement Laws": [
          {
            law: "Complement Law for Union",
            formula: "$A \\cup A^c = U$",
            explanation: "A set unioned with its complement gives the universal set."
          },
          {
            law: "Complement Law for Intersection",
            formula: "$A \\cap A^c = \\emptyset$",
            explanation: "A set intersected with its complement gives the empty set."
          },
          {
            law: "Complement of Universal Set",
            formula: "$U^c = \\emptyset$",
            explanation: "The complement of the universal set is the empty set."
          },
          {
            law: "Complement of Empty Set",
            formula: "$\\emptyset^c = U$",
            explanation: "The complement of the empty set is the universal set."
          },
          {
            law: "Double Complement Law (Involution)",
            formula: "$(A^c)^c = A$",
            explanation: "Taking the complement twice returns the original set."
          }
        ],
      
        "De Morgan’s Laws": [
          {
            law: "De Morgan’s Law for Union",
            formula: "$(A \\cup B)^c = A^c \\cap B^c$",
            explanation: "The complement of a union is the intersection of the complements."
          },
          {
            law: "De Morgan’s Law for Intersection",
            formula: "$(A \\cap B)^c = A^c \\cup B^c$",
            explanation: "The complement of an intersection is the union of the complements."
          }
        ]
      };


    
  const sectionsContent={

    idempotent:{
      title:`Idempotent Laws`,
      content:``,
      before:``,
      after:``,
  
  
    },
    associative:{
      title:`Associative Laws`,
      content:``,
      before:``,
      after:``,
  
    },
  
    commutative:{
  
      title:`Commutative Laws`,
      content:``,
      before:``,
      after:``,
  
    },
    distributive:{
      title:`Distributive Laws`,
      content:``,
      before:``,
      after:``,
  
    },


    identity:{
  
      title:`Identity Laws`,
      content:``,
      before:``,
      after:``,
  
    },
    complement:{
  
        title:`Complement Laws`,
        content:``,
        before:``,
        after:``,
    
      },
      de_morgan:{
  
        title:`De Morgan’s Laws`,
        content:``,
        before:``,
        after:``,
    
      }
  
  }

    return {
      props:{
        sectionsContent,
        setAlgebraLawsData,
        
      }
    }
  }
  

export default function SetTheoryRulesPage({sectionsContent,setAlgebraLawsData}) {


    
  const setTheoryRulesSections=[
    {
        id:' idempotent',
        title:sectionsContent.idempotent.title,
        link:'',
        content:[
            // <ExpandableTable/>
            <div key={1} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.idempotent.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'associative',
        title:sectionsContent.associative.title,
        link:'',
        content:[
            <div key={2} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.associative.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'commutative',
        title:sectionsContent.commutative.title,
        link:'',
        content:[
            <div key={3} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.commutative.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'distributive',
        title:sectionsContent.distributive.title,
        link:'',
        content:[
            <div key={4} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.distributive.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'identity',
        title:sectionsContent.identity.title,
        link:'',
        content:[
            <div key={5} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.identity.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'complement',
        title:sectionsContent.complement.title,
        link:'',
        content:[
            <div key={6} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.complement.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    },
    {
        id:'de_morgan',
        title:sectionsContent.de_morgan.title,
        link:'',
        content:[
            <div key={7} style={{marginLeft:'50px',marginRight:'50px'}}>
            <ExpandableTable key={12}
            data={setAlgebraLawsData[sectionsContent.de_morgan.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
        ]
    }
]


    // const setAlgebraLawsData = {
    //     "Idempotent Laws": [
    //       {
    //         law: "Idempotent Law for Union",
    //         formula: "$A \\cup A = A$",
    //         explanation: "A set unioned with itself remains the same set."
    //       },
    //       {
    //         law: "Idempotent Law for Intersection",
    //         formula: "$A \\cap A = A$",
    //         explanation: "A set intersected with itself remains the same set."
    //       }
    //     ],
      
    //     "Associative Laws": [
    //       {
    //         law: "Associative Law for Union",
    //         formula: "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$",
    //         explanation: "Grouping of sets under union does not affect the result."
    //       },
    //       {
    //         law: "Associative Law for Intersection",
    //         formula: "$(A \\cap B) \\cap C = A \\cap (B \\cap C)$",
    //         explanation: "Grouping of sets under intersection does not affect the result."
    //       }
    //     ],
      
    //     "Commutative Laws": [
    //       {
    //         law: "Commutative Law for Union",
    //         formula: "$A \\cup B = B \\cup A$",
    //         explanation: "The order of sets in a union does not affect the result."
    //       },
    //       {
    //         law: "Commutative Law for Intersection",
    //         formula: "$A \\cap B = B \\cap A$",
    //         explanation: "The order of sets in an intersection does not affect the result."
    //       }
    //     ],
      
    //     "Distributive Laws": [
    //       {
    //         law: "Distributive Law of Union over Intersection",
    //         formula: "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
    //         explanation: "Union distributes over intersection."
    //       },
    //       {
    //         law: "Distributive Law of Intersection over Union",
    //         formula: "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
    //         explanation: "Intersection distributes over union."
    //       }
    //     ],
      
    //     "Identity Laws": [
    //       {
    //         law: "Identity Law for Union",
    //         formula: "$A \\cup \\emptyset = A$",
    //         explanation: "The union of a set with the empty set is the set itself."
    //       },
    //       {
    //         law: "Identity Law for Intersection",
    //         formula: "$A \\cap U = A$",
    //         explanation: "The intersection of a set with the universal set is the set itself."
    //       },
    //       {
    //         law: "Annihilation Law for Intersection",
    //         formula: "$A \\cap \\emptyset = \\emptyset$",
    //         explanation: "The intersection of a set with the empty set is the empty set."
    //       },
    //       {
    //         law: "Annihilation Law for Union",
    //         formula: "$A \\cup U = U$",
    //         explanation: "The union of a set with the universal set is the universal set."
    //       }
    //     ],
      
    //     "Complement Laws": [
    //       {
    //         law: "Complement Law for Union",
    //         formula: "$A \\cup A^c = U$",
    //         explanation: "A set unioned with its complement gives the universal set."
    //       },
    //       {
    //         law: "Complement Law for Intersection",
    //         formula: "$A \\cap A^c = \\emptyset$",
    //         explanation: "A set intersected with its complement gives the empty set."
    //       },
    //       {
    //         law: "Complement of Universal Set",
    //         formula: "$U^c = \\emptyset$",
    //         explanation: "The complement of the universal set is the empty set."
    //       },
    //       {
    //         law: "Complement of Empty Set",
    //         formula: "$\\emptyset^c = U$",
    //         explanation: "The complement of the empty set is the universal set."
    //       },
    //       {
    //         law: "Double Complement Law (Involution)",
    //         formula: "$(A^c)^c = A$",
    //         explanation: "Taking the complement twice returns the original set."
    //       }
    //     ],
      
    //     "De Morgan’s Laws": [
    //       {
    //         law: "De Morgan’s Law for Union",
    //         formula: "$(A \\cup B)^c = A^c \\cap B^c$",
    //         explanation: "The complement of a union is the intersection of the complements."
    //       },
    //       {
    //         law: "De Morgan’s Law for Intersection",
    //         formula: "$(A \\cap B)^c = A^c \\cup B^c$",
    //         explanation: "The complement of an intersection is the union of the complements."
    //       }
    //     ]
    //   };

      
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
   <OperaSidebar
           side='right'
           // topOffset='55px'
           sidebarWidth='35px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-30px', marginBottom:'10px'}}>Set Theory Rules</h1>
    <br/>
    <SectionTableOfContents sections={setTheoryRulesSections}/>
    <br/>
    <IntroSection/>
    <br/>
    <Sections sections={setTheoryRulesSections}/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
