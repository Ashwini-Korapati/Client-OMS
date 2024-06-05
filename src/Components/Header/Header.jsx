import React from 'react';
import './Header.css'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Career from '../career/Career'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <div className="container">
      <header className="header">
        <nav className="nav">
          <ul>
            <li>Career</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <NavLink to={'/login'}>
            <li>Login</li>
            </NavLink>
          
          </ul>
        </nav>
      </header>
    </div>
    <Home/>
    <Career/>
    <Contact/>
    </div>
  );
};

export default Header;
