import Carousel from "react-material-ui-carousel";
// import Carousel from 'react-bootstrap/Carousel';
import './navstyle.css';
import Doctors from "../cards/Doctors";
import AppointmentForm from "../appointmentform/AppointmentForm";
import Specialities from "../specialTreatments/Specialities";
import Treatment from "../specialTreatments/Treatment";
import Contact from "./Contact";

function Home({data}) {
  return (
    <>
        <Carousel>
        {data.map((imag,index)=>(
          <img key={index} src={imag} className='cimage' alt='carouselimage'/>
        ))}
        </Carousel>
        
        <Doctors/>
        <Specialities/>
        <Treatment/>
        <AppointmentForm/>
        <Contact/>
    </>
  );
}

export default Home;

