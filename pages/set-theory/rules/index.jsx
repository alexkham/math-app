import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import React from 'react'
import '../../pages.css'

export default function SetTheoryRulesPage() {

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
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
