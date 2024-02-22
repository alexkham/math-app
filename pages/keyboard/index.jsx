import TypeWriter from '@/app/components/keyboards/TypeWriter'
import React from 'react'
import Head from 'next/head';


export default function () {
  return (
    <div>
         <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

        <h3>Keyboard</h3>

        <TypeWriter></TypeWriter>
    </div>
  )
}
