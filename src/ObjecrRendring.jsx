import React from 'react'

function ObjecrRendring() {


    const obj1=[{
        name:"sayyami",
        age:23,
        loaction:"hyedrarbad"
    },

{
        name:"sassud",
        age:23,
        loaction:"punree"
    }


]
  return (
  <>

  {obj1.map((x,index)=><li key={index}>my name is {x.name}i am from {x.loaction}</li>)}
  </>
  )
}

export default ObjecrRendring