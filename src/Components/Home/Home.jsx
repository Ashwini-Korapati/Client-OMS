import React, { useState, useEffect } from 'react';
import './Home.css';
import image1 from '../../images/image5.jpeg';
import image2 from '../../images/image2.jpeg';
import image3 from '../../images/image3.jpeg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div>
    <div className="navbar-container">
      <div className="navbar-content">
        <h1 className="navbar-h1">Transforming Potential <br /> into Excellence</h1>
        <p className="paragraph">
          Your Comprehensive Solution for Cloud Services and <br />Infrastructure Management.<br />
        </p>
        <button className="button">Learn More</button>
      </div>
      <div className="image-slider">
        <button className="nav-button" onClick={prevImage}>❮</button>
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="slider-image" />
        <button className="nav-button" onClick={nextImage}>❯</button>
      </div>
    </div>
    
    </div>
  );
};

export default Home;
