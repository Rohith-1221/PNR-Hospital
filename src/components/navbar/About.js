import React from 'react'
import './navstyle.css' 
// import Carousel from 'react-material-ui-carousel'

const About = () => {
  const [image,image1]=['Images/im1.jpg','Images/tmt1.jpg']
  return (
    <>
      {/* <Carousel>
        {data.map((imag,index)=>(
          <img key={index} src={imag} className='cimage' alt='carouselimage'/>
        ))}
        </Carousel> */}
        <div className='about'>
          <div className="imag">
            <div>
                <img src={image} className="image1" alt='aboutimage'/>
            </div>
            <div>
                <img src={image1} className="image2" alt='aboutimage'/>
            </div>
          </div>
          <div className='content'>
            <h1>About us</h1>
            <h5>As we started in the year 2009 and from there we provide the latest technology based treatments to patients.For the need of patients
            we assign experienced staff and providing the intime facilities.Further till date we ranked at 1st position good quality and providing the on time treatments.</h5>
          </div>
        </div>
        </>
  )
}

export default About
