import './style.css'
import value from './data1.json'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

const Treatment = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    setData(value);
  },[])

  return (
    <div>
      <div className='treat'>
        <h1>Treatments and Surgery</h1>
      </div>
      <div className='cardapi'>
        {data.map((value,index)=>(
                <Card  key={index} className='fullcard'>
                <CardActionArea className='display'>
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
                        Category:{value.category}<br/>
                        {value.content}<br/>
                    </Typography>
                  </CardContent>                    
                </CardActionArea>
              </Card>
        ))}
      </div>
    </div>
  )
}

export default Treatment
 