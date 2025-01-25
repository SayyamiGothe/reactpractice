import React, { createContext, useState } from 'react'
import UseContext2 from './UseContext2';

//1.create a global create context
const username=createContext();
function UseContext1() {
    //give the values
    const [name, setname] = useState({name:'SAYYAMI',profile:'FULLSTACK DEVELOPER'})
  return (
    <>
<h1>context1</h1>
     {/* 2.//wrap the child component */}
      <username.Provider value={name}>
            <UseContext2 />
        </username.Provider>
    
    
    
</>
  )
}

export default UseContext1
export {username}