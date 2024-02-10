import React, { useEffect, useState } from 'react'
import './style.css'
import data from './data.json'
import { FaAnglesDown } from "react-icons/fa6";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Specialities = () => {
  const [result,setResult]=useState([]);
  useEffect(()=>{
    setResult(data);
  },[])

  return (
    <div className='specialization'>
      <div className='speciality'>
        <h1>SPECIALITIES</h1>
      </div>
      <div className='data'>
        <h2>Some of the specialities that we are offering in the hospital mentioned below</h2>
          {result.map((text, index) => (
            <Accordion key={index} className="accord">
              <AccordionSummary
                expandIcon={<FaAnglesDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="question"
                sx={{backgroundColor: " rgba(0, 0, 0, 0.5)",color:"darkred"}}
              >
                {text.question}
              </AccordionSummary>
              <AccordionDetails className="solution">
                {text.solution}
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </div>
  )
}

export default Specialities
