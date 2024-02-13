import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

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
            <Card sx={{display: 'flex', flexDirection: 'column' }} >
                <CardActionArea className='contactcard'>
                <CardContent className='coe'>
              <Typography  variant='h5'>Centres of Excellence:</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>Cardiac Sciences</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>Neurosciences</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>Orthopaedics</Typography> <br/>
              <Typography sx={{fontSize:'20px'}}>Transplants</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>Vascular & Endovascular Surgery</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>Woman & Child Institute</Typography>
              </CardContent>
                </CardActionArea>
              </Card>  
                        
              <Card sx={{display: 'flex', flexDirection: 'column' }} className='contactcard'>
                <CardActionArea>
                <CardContent className='address'>
              <Typography variant='h5'>Address:</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>PNR Hospitals</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>PVR colony,Banjara Hills</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>Hyderabad,Telangana.</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>+91 8887885445</Typography><br/>
              <Typography sx={{fontSize:'20px'}}>Doctor Enquiry:+91-408579612</Typography>
              </CardContent>
                </CardActionArea>
              </Card>  
            
              <Card sx={{display: 'flex', flexDirection: 'column' }} className='contactcard'>
                <CardActionArea>
                <CardContent className='feedback'>
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
                </CardContent>
                </CardActionArea>
              </Card>  
        </div>
        <div className='cright'>
          copyrights@ pnr hospitals#2024...
        </div>
    </div>
  )
}

export default Contact
