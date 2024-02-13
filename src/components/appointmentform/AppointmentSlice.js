import { createSlice } from '@reduxjs/toolkit'

const AppointmentSlice = createSlice({
    name:'appointments',
    initialState:[],
    reducers:{
        addAppo:(state,action)=>{
            const newPost={
                id:Date.now(),
                firstname:action.payload.firstname,
                lastname:action.payload.lastname,                
                problem:action.payload.problem,
            }
            state.push(newPost);
        },
        updateAppo:(state,action)=>{
            const appo=state.find((post)=>post.id===action.payload.id);
            if(appo){
                appo.firstname=action.payload.firstname;
                appo.lastname=action.payload.lastname;
                appo.problem=action.payload.problem;
            }
        },
        deleteAppo:(state,action)=>{
            return state.filter((post)=>post.id!==action.payload.id)
        },
    }

})

export const {addAppo,updateAppo,deleteAppo}=AppointmentSlice.actions;
export default AppointmentSlice.reducer;
