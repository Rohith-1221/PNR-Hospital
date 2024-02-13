import './App.css';
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/navbar/Home';
import Contact from './components/navbar/Contact';
import AppointmentForm from './components/appointmentform/AppointmentForm';
import Doctors from './components/cards/Doctors';
import Specialities from './components/specialTreatments/Specialities';
import Treatment from './components/specialTreatments/Treatment';
{/* <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Kalam&display=swap" rel="stylesheet"/> */}

const App = () => {
  
 
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/doctors' element={<Doctors/>}/>
            <Route path='/specialities' element={<Specialities/>}/>
            <Route path='/treatments' element={<Treatment/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/book appointment' element={<AppointmentForm/>}/>
        </Routes>
        </Router>
    </div>
  )
}

export default App
