import React, { useEffect, useState } from 'react'
import './ststyle.css'
import data from './data.json'
// import { FaAnglesDown } from "react-icons/fa6";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Specialities = () => {
  // const [result,setResult]=useState([]);
  // useEffect(()=>{
  //   setResult(data);
  // },[])

  const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className='specialization'>
      <div className='speciality'>
        <h1>SPECIALITIES</h1>
      </div>
      <div className='data'>
        <h2>Some of the specialities that we are offering in the hospital mentioned below</h2>
          {/* {result.map((text, index) => (
            <Accordion key={index} className="accord" expanded={expanded === `panel`} onChange={handleChange(`panel`)}>
              <AccordionSummary
                expandIcon={<FaAnglesDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="question"
                sx={{backgroundColor: " rgba(0, 0, 0, 0.1)",color:"black"}}
              >
                {text.question}
              </AccordionSummary>
              <AccordionDetails className="solution">
                {text.solution}
              </AccordionDetails>
            </Accordion>
                     ))} */}
                  <Accordion className="accord"  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ color: 'text.secondary' }}>CARDIAC SURGERY</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Best Cardiac Surgery Hospital in Hyderabad.PNR Hospitals is one of the leading Cardiac sciences hospitals in Hyderabad, India that offers comprehensive surgical treatment for a variety of heart disorders.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="accord"  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ color: 'text.secondary' }}>
                    ENT
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    The ENT department at the PNR Hospitals is one of the best centers that provide comprehensive care and optimum medical facilities. The department offers excellent clinical evaluation and gentle care to patients from anywhere in the world.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="accord"  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ color: 'text.secondary' }}>
                    BRAIN
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    We have top-class medical practitioners to treat people affected by spine and brain conditions and also offer ample guidance to their carers and families. Our aim is to reduce anxiety and uncertainty by offering accurate, concise, clear, and helpful guidance by offering the best services.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="accord"  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ color: 'text.secondary' }}>LUNGS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Lungs are the two spongy organs present in the chest that inhale oxygen and exhale carbon dioxide. The right lung comprises three sections, known as lobes, while the left lung only comprises two lobes. Compared with the right lung, the left lung is smaller in size, as it houses the heart.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="accord"  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography sx={{ color: 'text.secondary' }}>KIDNEY</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Best Kidney Stone Removal Treatment in Hyderabad, India Kidney stones are mineral and acid salt deposits that bind together in concentrated urine. They can be uncomfortable when moving through the urinary tract.                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
 
      </div>
  )
}

export default Specialities


// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function Specialities() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div>
//       <Accordion className="accord"  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>
//             General settings
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//             Aliquam eget maximus est, id dignissim quam.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className="accord"  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             You are currently not an owner
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
//             varius pulvinar diam eros in elit. Pellentesque convallis laoreet
//             laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className="accord"  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3bh-content"
//           id="panel3bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>
//             Advanced settings
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             Filtering has been entirely disabled for whole web server
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
//             amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className="accord"  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4bh-content"
//           id="panel4bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
//             amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }