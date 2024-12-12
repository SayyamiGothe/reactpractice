import React from 'react'
import { useState } from 'react'
function Usestate() {

const [A, setA] = useState(0)

  return (
    
    <>
    
    <h1>The NUMBER IS BELONG TO  {A}</h1>

    <button onClick={()=>setA(A+1)}>INCREASE</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={()=>setA(A-1)}>DECREASE</button>
    </>
  )
}

export default Usestate