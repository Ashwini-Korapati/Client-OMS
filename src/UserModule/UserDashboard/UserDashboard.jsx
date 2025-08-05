import React from 'react';
import { FiHome, FiInfo, FiSettings, FiLogOut } from 'react-icons/fi';
import { MdOutlineDashboard, MdPeopleAlt, MdAccessTime, MdPayments } from 'react-icons/md';
import { BsGraphUp, BsFillLightningFill, BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './UserDashboard.css';

const UserDashboard = () => {
  // Demo data
  const features = [
    {
      icon: <MdPeopleAlt className="feature-icon" />,
      title: "HR Management",
      desc: "Streamline employee records, onboarding, and organizational structure",
      color: "#4361ee"
    },
    {
      icon: <MdAccessTime className="feature-icon" />,
      title: "Attendance System",
      desc: "Fixed Hope Prediction team", // Matching your reference text
      color: "#3a0ca3"
    },
    {
      icon: <MdPayments className="feature-icon" />,
      title: "Payroll Processing",
      desc: "Automated salary calculations with tax compliance",
      color: "#4cc9f0"
    },
    {
      icon: <BsGraphUp className="feature-icon" />,
      title: "Analytics",
      desc: "Powerful insights with customizable reports",
      color: "#f72585"
    }
  ];

  const testimonials = [
    {
      quote: "This HRMS reduced admin work by 60%",
      company: "TechCorp Inc."
    },
    {
      quote: "The payroll automatic saved us countless hours", // Matching your reference text
      company: "Finance Solutions"
    }
  ];

  return (
    <div className="user-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">HRMS</div>
        <nav>
          <a href="#" className="active"><MdOutlineDashboard /> Dashboard</a>
          <a href="#"><FiInfo /> Features</a>
          <a href="#"><FiSettings /> Demo</a>
          <a href="#"><FiLogOut /> Exit</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Experience Next-Gen HR</h1>
            <p>Explore our comprehensive HRMS solution designed to simplify your workforce management</p>
          </div>
          <div className="hero-image">
            <img src="https://illustrations.popsy.co/amber/digital-nomad.svg" alt="HRMS Illustration" />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index} style={{ borderTopColor: feature.color }}>
                <div className="feature-header">
                  <div className="icon-container" style={{ backgroundColor: `${feature.color}20` }}>
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.desc}</p>
                <button className="demo-btn" style={{ color: feature.color }}>See Demo</button>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="demo-section">
          <h2 className="section-title">Interactive Preview</h2>
          <div className="demo-container">
            <div className="demo-nav">
              <button className="active">HR Module</button>
              <button>Attendance</button>
              <button>Payroll</button>
              <button>Reports</button>
            </div>
            <div className="demo-content">
              <div className="demo-screen">
                <img 
                  src="https://placehold.co/800x500/e5e7eb/9ca3af?text=HRMS+Demo+Screen" 
                  alt="HRMS Demo Interface" 
                />
                {/* Highlight Points */}
                <div className="highlight" style={{ top: '30%', left: '20%' }}>
                  <div className="pulse"><BsFillLightningFill /></div>
                  <div className="highlight-text">Employee Database</div>
                </div>
                <div className="highlight" style={{ top: '50%', left: '65%' }}>
                  <div className="pulse"><BsFillLightningFill /></div>
                  <div className="highlight-text">Analytics Dashboard</div>
                </div>
              </div>
              <div className="demo-controls">
                <button><BsArrowLeft /> Previous</button>
                <div className="steps">1 of 4</div>
                <button>Next <BsArrowRight /></button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2 className="section-title">Trusted by Le. Organizatio</h2> {/* Matching your reference text */}
          <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="quote">"{testimonial.quote}"</div>
                <div className="company">— {testimonial.company}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;