import React from 'react'

function ListRender() {
 const fruits=['aaple','mango','banana']



  return (
  <>

{
fruits.map((x,index)=><li key={index}>{x}</li>)
}
  </>
  )
}

export default ListRender