import './navstyle.css';
import Doctors from "../cards/Doctors";
import AppointmentForm from "../appointmentform/AppointmentForm";
import Specialities from "../specialTreatments/Specialities";
import Treatment from "../specialTreatments/Treatment";
import Contact from "./Contact";
import About from "./About";
import './navstyle.css'

const Home=()=> {
  return (
    <>
        <About/>
        <Doctors/>
        <Specialities/>
        <Treatment/>
        <AppointmentForm/>
        <Contact/>
    </>
  );
}

export default Home;