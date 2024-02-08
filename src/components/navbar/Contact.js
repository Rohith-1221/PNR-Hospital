import React from 'react'

const Contact = () => {
  
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
            <div className='address'>
              <h2>Address:</h2>
              <p>PNR Hospitals</p>
              <p>14,PVR colony</p>
              <p>Banjara Hills</p>
              <p>Hyderabad,Telangana.</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
