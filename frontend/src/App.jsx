
import React,{useState} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

// Pages
import Home from "./Pages/Home"
import PlumberPage from './Pages/PlumberPage'
import ElectricianPage from './Pages/ElectricianPage'
import PainterPage from './Pages/PainterPage'
import CarpenterPage from './Pages/CarpenterPage'
import CctvPage from './Pages/CctvPage'
import CleaningPage from './Pages/Cleaning'
import ServicesPage from './Pages/ServicesPage'
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import BookingPage from "./Pages/BookingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegistrationPage";
import BookingHistory from './Pages/YourBooking'



// Components

import Navbar from './Components/Navbar'
import Footer from  "./Components/Footer"
import Sidebar from './Components/Sidebar'
import ChatBot from './Components/ChatBot'

export default function App() {
    const [formData, setFormData] = useState([]);
  return (
    <div>
      <BrowserRouter>
      <Navbar/>       
      
       
        <Routes>
          <Route path='/' element={<Home/>}/>        
          <Route path='/plumber' element={<PlumberPage setFormData={setFormData} formData={formData}/>}/>
          <Route path='/electricien' element={<ElectricianPage/>}/>
          <Route path='/painter' element={<PainterPage/>}/>
          <Route path='/carpainter' element={<CarpenterPage/>}/>
          <Route path='/cleaning' element={<CleaningPage/>}/>
          <Route path='/cctv' element={<CctvPage/>}/>
          <Route path='/service' element={<ServicesPage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path='/booking' element={<BookingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/history' element={<BookingHistory formData={formData}/>}/>

        </Routes>
       <Footer/>
       <ChatBot/>
      </BrowserRouter>
    </div>
  )
}
