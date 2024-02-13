import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppo,updateAppo,deleteAppo } from './AppointmentSlice';
import { useForm } from 'react-hook-form';

const Appointment = () => {
    const {register}=useForm();
    const dispatch=useDispatch();
    const appointments=useSelector((state)=>state.appointments);
    const [formData,setFormData]=useState({
        firstname:' ',
        lastname:' ',
        problem:' '
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
            problem:' '
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
            problem:''
        })
    };

    const handleDeletePost=(id)=>{
        dispatch(deleteAppo({id}));
    };

  return (
    <div className='blogs'>
        <div className='add-data'>
            <h2>Add Appointments</h2>
            <label>FirstName:</label>
            <input 
            type='text'
            {...register('Firstname',{required:true,maxLength:14})}
            name ='firstname'
            placeholder='firstname'
            value={formData.title}
            onChange={handleInputChange}/><br/><br/>

            <label>LastName:</label>
            <input
            type='text'
            name='lastname'
            placeholder='lastname'
            value={formData.content}
            onChange={handleInputChange}/><br/><br/>

            <label>Problem:</label>
            <input 
            type='text'
            name ='problem'
            placeholder='problem'
            value={formData.problem}
            onChange={handleInputChange}/><br/><br/>
            
            {/* <label>FirstName:</label>
            <input 
            type='text'
            name ='firstname'
            placeholder='firstname'
            value={formData.title}
            onChange={handleInputChange}/><br/><br/>
            
            <label>FirstName:</label>
            <input 
            type='text'
            name ='firstname'
            placeholder='firstname'
            value={formData.title}
            onChange={handleInputChange}/><br/><br/> */}
    
            <button onClick={handleAddPost} className='btn'>Add Post</button>
        </div>
        <div className='postview'>
            <h2>Appointments</h2>
            <ul className='list-view'>
                {appointments.map((post)=>(
                    <li key={post.id} className='listdisplay'>
                        <p>FirstName:{post.firstname}</p>
                        <p>LastName:{post.lastname}</p>
                        <p>Problem:{post.problem}</p>
                        <button onClick={()=>handleUpdatePost(post.id)} className='btn'>Update</button>
                        <button onClick={()=>handleDeletePost(post.id)} className='btn'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Appointment
