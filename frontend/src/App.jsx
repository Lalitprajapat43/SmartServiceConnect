
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

// Pages
import Home from "./Pages/Home"
import Worker from "./Pages/Worker"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

// Components

import Navbar from './Components/Navbar'
import Footer from  "./Components/Footer"
import Sidebar from './Components/Sidebar'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>       
       <div className='flex w-full '>
       <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/worker' element={<Worker/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>

        </Routes>
       </div>
      </BrowserRouter>
    </div>
  )
}
