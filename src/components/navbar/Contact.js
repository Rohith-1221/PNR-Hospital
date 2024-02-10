import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Contact = () => {

      const [star,setStar]=React.useState(0);
      const [star1,setStar1]=React.useState(0);
      const [star2,setStar2]=React.useState(0);
      const [star3,setStar3]=React.useState(0); 
    const Star=(event,newValue) => {
      setStar(newValue);
    }
    const Star1=(event,newValue) => {
      setStar1(newValue);
    }
    const Star2=(event,newValue) => {
      setStar2(newValue);
    }
    const Star3=(event,newValue) => {
      setStar3(newValue);
    }
  
  return (
    <div className='contact'>
        <div className='ctext'>
            <h1>CONTACT AND DIRECTIONS</h1>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86121.71693625694!2d78.32236820264339!3d17.455974281937248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96d55d5dcdfd%3A0x1250eead5d22be78!2sPNR!5e0!3m2!1sen!2sin!4v1707411835520!5m2!1sen!2sin" className='maps'  title="maps" loading="lazy" ></iframe>

        <div className='footer'>
            <div className='coe'>
              <h2>Centres of Excellence:</h2>
              <p>Cardiac Sciences</p>
              <p>Neurosciences</p>
              <p>Orthopaedics</p>
              <p>Transplants</p>
              <p>Vascular & Endovascular Surgery</p>
              <p>Woman & Child Institute</p>
            </div>
            <div className='address'>
              <h2>Address:</h2>
              <p>PNR Hospitals</p>
              <p>PVR colony,Banjara Hills</p>
              <p>Hyderabad,Telangana.</p>
              <p>+91 8887885445</p>
              <p>Doctor Enquiry:+91-408579612</p>
            </div>
            <div className='feedback'>
                <h2 sx={{fontSize:'25px'}}>Share your Feedback</h2>
                <Box sx={{'& > legend': { mt: 2 }}} className='ratingitems'>
                <Typography component="legend" sx={{fontSize:'20px'}}>Hospital Maintainance:</Typography>
                <Rating
                    value={star}
                    onChange={Star} className="starcard"/>
                <Typography component="legend" sx={{fontSize:'20px'}}>Doctors alertness and knowledge:</Typography>
                <Rating
                    value={star1}
                    onChange={Star1} className="starcard"/>
                <Typography component="legend" sx={{fontSize:'20px'}}>Use of latest technology:</Typography>
                <Rating
                    value={star2}
                    onChange={Star2} className="starcard"/>
                <Typography component="legend" sx={{fontSize:'20px'}}>Parking facility and security:</Typography>
                <Rating
                    value={star3}
                    onChange={Star3} className="starcard"/>
                </Box>
            </div>
        </div>
        <div className='cright'>
          copyrights@ pnr hospitals#2024...
        </div>
    </div>
  )
}

export default Contact
