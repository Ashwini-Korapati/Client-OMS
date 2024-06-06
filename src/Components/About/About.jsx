import React, { useEffect } from 'react';
import './About.css';
import image5 from '../../images/image5.jpeg';
import bupa from '../../images/bupa.png'
import albilad from '../../images/albilad.png'
import finmet from '../../images/finmet.webp';
import indianBank from '../../images/indianBank.png';
import nse from '../../images/nse.jpg';
import santander from '../../images/santander.png';
 
const About = () => {
  useEffect(() => {
    const imageLine = document.querySelector('.image-line');
    const images = imageLine.innerHTML;
    imageLine.innerHTML += images; 
  }, []);
 
  return (
    <div>
      <div className='about-section'>
        <div className='about-container'>
          <div className='about-content-section'>
            <div className='about-title'>
              <h1>About Us</h1>
            </div>
            <div className='about-para-content'>
              <h3>Expand Your Business and Grow with Us</h3>
              <p>
                We're a technology firm specializing in IT and HR solutions, dedicated to transforming business processes. Our expert team ensures efficiency and productivity enhancements, fostering partnerships based on integrity and customer satisfaction. By staying ahead of industry trends, we deliver tailored support to streamline operations and propel businesses towards their goals. Whether you're a startup or a corporate entity, our innovative platforms are designed to meet your specific needs and drive success.
              </p>
              <div className='about-button'>
                <a href=''>Read More</a>
              </div>
            </div>
          </div>
          <div className='about-image-section'>
            <img src={image5} alt='about' />
          </div>
        </div>
      </div>
      <div className='image-container'>
        <div className='image-line'>
          <img src={bupa} alt='bupaimage' />
          <img src={albilad} alt='albiladimage' />
          <img src={finmet} alt='finmetimage' />
          <img src={indianBank} alt='indianbankimage' />
          <img src={nse} alt='nseimage' />
          <img src={santander} alt='santanderimage' />
        </div>
      </div>
    </div>
  );
};
 
export default About;