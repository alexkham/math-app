import React from 'react'
import tableData from '../../api/db/tables/trigonometry_tables_extended.json'
import Link from 'next/link'

// export async function getServerSideProps(context) {
//   const something = decodeURI(context.params.page || '');

//   return { props: { something } };
// }


export default function page({params}) {
  const something=encodeURI(params.some)
  
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div>Dynamic Page</div>
    <div>{something}</div>
    {tableData.map((item,index)=>{
      return (
        <h2 key={index}>{item.tableTitle}</h2>
      )
    })}
    <Link href={`/some/${something}`}>
    <button >GO</button>
    </Link>
    </>
  )
}
