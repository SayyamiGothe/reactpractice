import React, { useState } from 'react'

function DynamicList() {
const [colors, setcolors] = useState(['GREEN'])

function Addcolors() {
    let newcolors=document.getElementById('inp').value
    if(newcolors!='')
    {
        setcolors([...colors,newcolors])
    }else
    {
        alert("enter the colors please")
    }
}


function Deletecolor()
{
    setcolors(colors.slice(0,-1))
}
  return (
<>
<center>


    <br></br>

    <input type='text' id='inp'></input>
<br>
</br>

{colors.map(x=><li>{x}</li>)}
<button onClick={Addcolors}>ADD THE COLORS</button>
<br>
</br>

<button onClick={Deletecolor}>DELETE THE COLOR </button>
</center>

</>
  )
}

export default DynamicList