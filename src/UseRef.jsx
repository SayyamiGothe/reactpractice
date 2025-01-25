import React, { useRef, useState } from 'react'


function UseRef() {


    console.log("UI re-rendered")
    
    const[count,setCount] = useState(0)
    let user = useRef(0)


    const increaseValue=()=>{
        setCount(count+1)
        
        user.current = user.current+1
        console.log(user)
    }


  return (
    <>
        <h1>Count : {count}</h1>
        <h1>Click= {user.current}</h1>
        <button onClick={increaseValue}>Increase</button>
    </>
  )
}


export default UseRef

