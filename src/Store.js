import { configureStore } from '@reduxjs/toolkit'
import appointmentReducer from './components/appointmentform/AppointmentSlice'

const store = configureStore({
    reducer:{
        appointments:appointmentReducer,
    },
})

export default store