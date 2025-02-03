import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
     
        <ul className='flex justify-evenly'>
            <li>
                <Link to="/">
                <img src="https://www.adobe.com/uk/creativecloud/design/discover/media_1eeac4f414fef7a2538f45d131ecae95e859923d9.png?width=750&format=png&optimize=medium" width="100"/>
                </Link>

            </li>

    <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/contact">CoNTACT</Link>
    </li>
    
    </ul>
    </>
  )
}

export default Navbar;