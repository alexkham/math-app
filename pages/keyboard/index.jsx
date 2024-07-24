import TypeWriter from '@/app/components/keyboards/TypeWriter'
import React from 'react'
import Head from 'next/head';
import MultipleTypeWriter from '@/app/components/keyboards/MultipleTypeWriter';



export default function KeyboardPage() {
  return (
    <div>
         <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>    
        
          <div >
            <br></br>
            <br></br>
          
            
             
              
        <h3 className='title' style={{marginLeft:'20px'}}>Mathematical  Keyboard </h3>
        
        <MultipleTypeWriter></MultipleTypeWriter>
        </div>
    </div>
  )
}
