import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppo,updateAppo,deleteAppo } from './AppointmentSlice';
import { useForm } from 'react-hook-form';
import './appstyle.css'

const Appointment = () => {
    const {register}=useForm();
    const dispatch=useDispatch();
    const appointments=useSelector((state)=>state.appointments);
    const [formData,setFormData]=useState({
        firstname:' ',
        lastname:' ',
        problem:' ',
        number:' ',
        appodate:' ',
        age:' ',
        gender:' '
    });
    const handleInputChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleAddPost=()=>{
        dispatch(addAppo(formData));
        setFormData({
            firstname:' ',
            lastname:' ',
            problem:' ',
            number:' ',
            appodate:' ',
            age:' ',
            gender:' '
        });
    };

    const handleUpdatePost = (id) => {
        const updatedData = {
            ...formData,
            id,
        };
        dispatch(updateAppo(updatedData));
        setFormData({
            firstname:'',
            lastname:' ',
            problem:'',
            number:' ',
            appodate:' ',
            age:' ',
            gender:' '
        })
    };

    const handleDeletePost=(id)=>{
        dispatch(deleteAppo({id}));
    };

  return (
    <div className='appform'>
        <div className='formdata'>
            <h2>Book Appointments</h2>
            <label>FIRSTNAME:</label>
            <input 
            type='text'
            {...register('Firstname',{required:true,maxLength:14})}
            name ='firstname'
            placeholder='firstname'
            value={formData.title}
            onChange={handleInputChange}/><br/><br/>

            <label>LASTNAME:</label>
            <input
            type='text'
            name='lastname'
            placeholder='lastname'
            value={formData.content}
            onChange={handleInputChange}/><br/><br/>

            <label>AGE:</label>
            <input 
            type='text'
            name ='age'
            placeholder='age'
            value={formData.age}
            onChange={handleInputChange}/><br/><br/>

            <label>GENDER:</label>
            <input 
            type='text'
            name ='gender'
            placeholder='gender'
            value={formData.gender}
            onChange={handleInputChange}/><br/><br/>
            
            <label>MOBILE NUMBER:</label>
            <input 
            type='text'
            name ='number'
            placeholder='mobile number'
            value={formData.number}
            onChange={handleInputChange}/><br/><br/>
            
            <label>PROBLEM:</label>
            <input 
            type='text'
            name ='problem'
            placeholder='problem'
            value={formData.problem}
            onChange={handleInputChange}/><br/><br/>

            <label>DATE and TIME:</label>
            <input 
            type='datetime-local'
            name ='appodate'
            placeholder='appodate'
            value={formData.appodate}
            onChange={handleInputChange}/><br/><br/>

    
            <button onClick={handleAddPost} className='formbtn'>Book Appointment</button>
        </div>
        <div className='postview'>
            <ul className='list-view'>
                {appointments.map((post)=>(
                    <li key={post.id} className='listdisplay'>
                        <h2>Appointments</h2>
                        <p>FirstName:{post.firstname}</p>
                        <p>LastName:{post.lastname}</p>
                        <p>Age:{post.age}</p>
                        <p>Gender:{post.gender}</p>
                        <p>Mobile number:{post.number}</p>
                        <p>Problem:{post.problem}</p>
                        <p>Date and Time:{post.appodate}</p>
                        <button onClick={()=>handleUpdatePost(post.id)} className='formbtn'>Update</button>
                        <button onClick={()=>handleDeletePost(post.id)} className='formbtn'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Appointment
