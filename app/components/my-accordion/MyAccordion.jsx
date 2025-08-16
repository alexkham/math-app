'use client'
import React, { useState } from 'react';
import './MyAccordion.css'

const MyAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h4>{isOpen ?  '▼   ' :  '▶   '}{title}</h4>
      </div>
       
        <div className={isOpen?"accordion-content":"accordion-content-invisible"}>
          <p>{content}</p>
        </div>
      
    </div>
  );
};

export default MyAccordion;
