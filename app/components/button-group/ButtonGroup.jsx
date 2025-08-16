import React from 'react'
// import titlesData from '../api/db/calculations/binary_calc.json'
import { capitalizeWords } from '../../utils/utils-functions';
import './ButtonGroup.css'
import Link from 'next/link';




const buttonStyle = {
    backgroundColor: '#1d6bd8', // Default background color (you can change it)
    color: 'white',
    fontWeight: '400',
    padding: '0.5rem 1rem',
    borderRadius: '3px',
    cursor: 'pointer',
    margin :'10px',
    border:'solid 1px gray'
  
    
  };



function ButtonGroup({data,buttonClass,containerClass,groupTitle,group_id}) {
   
  return (
    < >
    <h2>{groupTitle}</h2>
     <div className={containerClass}>
     {data.map((item,index)=>{
        return (
         <div  key={index}>
         
        <Link  key={index} href={`/${group_id}/${item.key_word}`}>
        <button
         className={buttonClass} 
          key={index}>{capitalizeWords(item.title)}</button>
        </Link>
        </div>
        )}
        
     )}
     </div>
      
    </>
  )
}

export default ButtonGroup