import React from 'react'
import Head from 'next/head';
import MultipleTypeWriter from '@/app/components/keyboards/MultipleTypeWriter';
import '../../app/globals.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';

export default function MultiKeyboard() {
  return (
    <div>
     <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      
      <h1>Mathematical Keyboard </h1>
     
        <MultipleTypeWriter></MultipleTypeWriter>
        
    </div>
  )
}
