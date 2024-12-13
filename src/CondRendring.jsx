import React from 'react'
import LoginBtn from './LoginBtn'
import { useState } from 'react'
import LogoutBtn from './LogoutBtn'
function CondRendring() {

    const [isLoggedIn, setisLoggedIn] = useState(true)

    //if else statement
    // if(isLoggedIn)
    // {
    //     return(
    //         <LoginBtn/>
    //     )
    // }
    // else
    // {
    //     return(
    //         <LogoutBtn/>)
    // }


    //TERNANRY OPERATOR
    // return (
    //     <>
    //         {isLoggedIn ? <LoginBtn /> : <LogoutBtn />}
    //     </>
    // )



//logical && operator

// return(
//     <div>
//         {isLoggedIn && <LoginBtn />}
//     </div>
// )


//EARLY RETURN

if(!isLoggedIn)
{
    return(
        <LoginBtn/>
    )
}

return(
    <div>
        {isLoggedIn && <LogoutBtn/>}
    </div>
)


}

export default CondRendring