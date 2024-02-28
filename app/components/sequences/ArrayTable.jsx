import React from 'react'

function ArrayTable({data,titles,tableStyle}) {
  return (
   <>
   <table className={tableStyle}>
            <thead>
                <tr>
                    
                    {titles.map((title,index)=>{
                        return(
                            <th key={index}>{title}</th>
                        )
                    })}
                </tr>
            </thead>
           
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.index}</td> {/* Adjusted to access object properties */}
                    <td>{item.prime}</td> {/* Adjusted to access object properties */}
                    </tr>
                ))}
                </tbody>
        </table>
   </>
  )
}

export default ArrayTable