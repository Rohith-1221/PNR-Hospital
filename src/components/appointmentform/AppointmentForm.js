import React from 'react'
import './appstyle.css'
import { useForm } from 'react-hook-form'
import { Label } from '@mui/icons-material'


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
            <Label htmlFor='firstname'>Firstname:</Label>
            <input {...register('Firstname',{required:true,maxLength:14})} name='firstname'/><br/><br/>
            <Label htmlFor='lastname'>Last name:</Label>
            <input {...register('Lastname',{pattern:/^[A-Za-z]+$/i})} name='lastname'/><br/><br/>
            <Label htmlFor='problem'>Problem:</Label>
            <input {...register('Problem',{pattern:/^[A-Za-z]+$/i})} name='problem'/><br/><br/>
            <Label htmlFor='mobilenumber'>Mobile Number:</Label>
            <input {...register('mobile number',{required:true,maxLength:10})} name='mobilenumber'/><br/><br/>
            <Label htmlFor='age'>Age:</Label>
            <input type='number' {...register('Age',{max:99,min:21})} name='age'/><br/><br/>
            <Label htmlFor='gender'>Gender:</Label>
            <input type='text' {...register('gender',{maxLength:6,required:true})} name='gender'/><br/><br/>
            <button className='formbtn'>Submit</button>
        </form>
    </div>
  )
}

export default AppointmentForm

