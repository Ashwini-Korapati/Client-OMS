// import React, { useRef } from 'react';
// import './Header.css';
// import Home from '../Home/Home';
// import Contact from '../Contact/Contact';
// import Career from '../career/Career';
// import { NavLink } from 'react-router-dom';
// import About from '../About/About';
// import Blogs from '../Blogs/Blogs';
// import Footer from '../Footer/Footer';

// const Header = () => {
//   const homeRef = useRef(null);
//   const careerRef = useRef(null);
//   const contactRef = useRef(null);
//   const aboutRef = useRef(null);
//   const blogRef = useRef(null);



//   const scrollToSection = (ref) => {
//     window.scrollTo({
//       top: ref.current.offsetTop,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div>
//       <div className="header-container">
//         <header className="header">
//           <nav className="nav">
//             <ul>
//               <li onClick={() => scrollToSection(homeRef)}>Home</li>
//               <li onClick={() => scrollToSection(aboutRef)}>About</li>
//               {/* <li onClick={() => scrollToSection(careerRef)}>Career</li> */}
             
//               <li onClick={() => scrollToSection(blogRef)}>Services</li>
//               <li onClick={() => scrollToSection(contactRef)}>Contact</li>


//               <NavLink to={'/login'}> <li>Login</li></NavLink>
             
//             </ul>
//           </nav>
//         </header>
//       </div>
//       <div ref={homeRef}>
//         <Home />
//       </div>
//       <div ref={aboutRef}>
//         <About />
//       </div>

//       <div ref={careerRef}>
//         <Career />
//       </div>
   


//       <div ref={blogRef}>
//         <Blogs />
//       </div>

//       <div ref={contactRef}>
//         <Contact />
//       </div>
//       <div>
//         <Footer/>
//         </div>
//     </div>
//   );
// };

// export default Header;


import React, { useRef } from 'react';
import './Header.css';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Career from '../career/Career';
import { NavLink } from 'react-router-dom';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';

const Header = () => {
  const homeRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="mainheader-container">
        <header className="mainheader1">
          <nav className="ash-nav">
            <ul className="ash-nav-list">
              <li className="ash-nav-item" onClick={() => scrollToSection(homeRef)}>Home</li>
              <li className="ash-nav-item" onClick={() => scrollToSection(aboutRef)}>About</li>
              {/* <li className="ash-nav-item" onClick={() => scrollToSection(careerRef)}>Career</li> */}
              <li className="ash-nav-item" onClick={() => scrollToSection(blogRef)}>Services</li>
              <li className="ash-nav-item" onClick={() => scrollToSection(contactRef)}>Contact</li>
              <NavLink to={'/login'}>
                <li className="ash-nav-item">Login</li>
              </NavLink>
            </ul>
          </nav>
        </header>
      </div>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={careerRef}>
        <Career />
      </div>
      <div ref={blogRef}>
        <Blogs />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Header;
