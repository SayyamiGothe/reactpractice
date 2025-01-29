import React, { useState, useEffect } from 'react'

function CurrenciApiFetch() {
    const [Currencies, setCurrencies] = useState([])

    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
        .then((response)=>response.json())
        .then((data)=>{
            setCurrencies(data)
        })
    },[])
  return (
   
    <>
     <div className='w-96 h-32  bg-blue-700 flex p-4 item-center'>
            <select className='bg-white'>
              {Object.entries(Currencies).map(([code , name])=> 
              <option key={code} value={code}>
                {name}
              </option>)}
            </select>  

            <h1>TO</h1>
      <div className='w-96 h-32  bg-blue-700 flex p-4 item-center'>
            <select className='bg-white'>
              {Object.entries(Currencies).map(([code , name])=> 
              <option key={code} value={code}>
                {name}
              </option>)}
            </select>  
</div>




            </div>
    
    
    </>
  )
}

export default CurrenciApiFetch