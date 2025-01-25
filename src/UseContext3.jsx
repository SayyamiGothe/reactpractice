import React from 'react'
import { useContext } from 'react'//3.import use context in child
import { username } from './UseContext1'// 4.import username from  1

function UseContext3() {
    const data=useContext(username)
  return (
    <>
    <h1>ContextC: My name is :{data.name} and I am a {data.profile}</h1></>
  )
}

export default UseContext3