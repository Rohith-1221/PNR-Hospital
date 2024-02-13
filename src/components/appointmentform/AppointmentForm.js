import React from 'react'
import './appstyle.css'
import { useForm } from 'react-hook-form'


const AppointmentForm = () => {
    const {register,handleSubmit}=useForm();
    const onSubmit=(result)=>console.log(result)
  return (
    <div className='appform'>
      <div className='appointment'>
        <h2>BOOKING AN APPOINTMENT</h2>
        <h4>Please Fill the following details...</h4>
      </div>
        <form onSubmit={handleSubmit(onSubmit)} className='formdata'>
            <h2>Patient Appointment Form</h2>
            <label for='firstname'>Firstname:</label>
            <input {...register('Firstname',{required:true,maxLength:14})} name='firstname'/><br/><br/>
            <label for='lastname'>Last name:</label>
            <input {...register('Lastname',{pattern:/^[A-Za-z]+$/i})} name='lastname'/><br/><br/>
            <label for='problem'>Problem:</label>
            <input {...register('Problem',{pattern:/^[A-Za-z]+$/i})} name='problem'/><br/><br/>
            <label for='mobilenumber'>Mobile Number:</label>
            <input {...register('mobile number',{required:true,maxLength:10})} name='mobilenumber'/><br/><br/>
            <label for='age'>Age :</label>
            <input type='number' {...register('Age',{max:99,min:21})} name='age'/><br/><br/>
            <label for='gender'>Gender:</label>
            <input type='text' {...register('gender',{maxLength:6,required:true})} name='gender'/><br/><br/>
            <button className='formbtn'>Submit</button>
        </form>
    </div>
  )
}

export default AppointmentForm

