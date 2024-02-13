import React from 'react'
import './appstyle.css'
import Appointment from './Appointment';


const AppointmentForm = () => {
  return (
    <div className='appform'>
      <div className='appointment'>
        <h2>BOOKING AN APPOINTMENT</h2>
        <h4>Please Fill the following details...</h4>
      </div>
        <Appointment/>
    </div>
  )
}

export default AppointmentForm

