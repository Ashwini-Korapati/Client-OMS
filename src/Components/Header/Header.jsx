import React, { useRef } from 'react';
import './Header.css';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Career from '../career/Career';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const homeRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="header-container">
        <header className="header">
          <nav className="nav">
            <ul>
              <li onClick={() => scrollToSection(homeRef)}>Home</li>
              <li onClick={() => scrollToSection(careerRef)}>Career</li>
              <li onClick={() => scrollToSection(contactRef)}>Contact</li>
              <li>About</li>
              <li>Blog</li>
              <NavLink to={'/login'}> <li>Login</li></NavLink>
             
            </ul>
          </nav>
        </header>
      </div>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={careerRef}>
        <Career />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Header;
