import React from 'react';
import './Navbar.css'; // Import your CSS file
import image from '../../images/image1.jpg'; // Import your image

const Navbar = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <ul>
            <li>Career</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Login</li>
          </ul>
        </nav>

        <div className="content">
          <h1 className="h1">Transforming Potential into Excellence</h1>
          <p className="paragraph">
            Your Comprehensive Solution for Cloud Services and Infrastructure Management.<br/>  Organizing leadership and empowering your team to achieve shared goals in uncertain times.
          </p>
          <button className="button">Learn More</button>
        </div>

        <img src={image} alt="Descriptive image alt text" className="right-image" />
      </header>
    </div>
  );
};

export default Navbar;
