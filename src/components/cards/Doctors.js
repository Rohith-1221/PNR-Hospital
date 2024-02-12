import  './cardstyle.css'
import React, { useEffect, useState } from 'react'
import result from './data.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

const Doctors= () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        setData(result)
    },[])

    const navigate=useNavigate();

    const goApp=()=>{
        navigate('/book appointment')
    }

  return (
    <div className='doctorcard'>
        <div className='finddoctor'>
          <h2>FIND A DOCTOR</h2>
        </div>
        <div className='cardapi'>
        {data.map((value,index)=>(
                <Card sx={{display: 'flex', flexDirection: 'column' }} key={index} className='fullcard'>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={value.image}
                    alt="green iguana"
                  />
                  <CardContent className='carddata'>
                    <Typography gutterBottom variant="h5" >
                      {value.name}
                    </Typography>
                    <Typography variant="body2">
                        Specialization:{value.category}<br/>
                        Experience:{value.years}years<br/>
                        Contact:{value.contact}<br/>
                    </Typography>
                    <button onClick={goApp} className='cardbtn'>Book an Appointment</button>
                  </CardContent>
                </CardActionArea>
              </Card>
        ))}
    </div>
    </div>
  )
}

export default Doctors