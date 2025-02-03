import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
function RouterReact() {
  return (
  <BrowserRouter>
  
  <Navbar/>
  <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About name="Shivu"/>}/>
 <Route path='/contact' element={<Contact />}/>


  </Routes>
  
  </BrowserRouter>
  )
}

export default RouterReact