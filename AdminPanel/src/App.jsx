import React from 'react'
// import {BrowerserRouter, Route, Routes} from "react-router-dom"
// import {BrowerserRouter,Routes,Route} from "react-router-dom" 
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'

export default function () {
  return (
    <div>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
