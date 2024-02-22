import React from 'react'
import Head from 'next/head';
import MultipleTypeWriter from '@/app/components/keyboards/MultipleTypeWriter';
import '../../app/globals.css'

export default function MultiKeyboard() {
  return (
    <div>
     <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <h3>Mathematical Keyboard</h3>
        <MultipleTypeWriter></MultipleTypeWriter>
        
    </div>
  )
}
