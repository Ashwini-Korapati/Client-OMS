import React from 'react';
import './Perfcards.css'
import emp from '../../../../Assets/cardsperfamnace.jpg'
import clients from '../../../../Assets/clientshr.png'
import project from '../../../../Assets/projects.png'

const Perfcards = () => {
  return (
    <div className="perfamnce-dashboard">
      <div className="p-card">
        <div className="p-content">
          <h2>150</h2>
          <p>Total Employees</p>
        </div>
        <div className="p-icon">
          <img src={emp} alt="Total Employees" />
        </div>
      </div>
      <div className="p-card">
        <div className="p-content">
          <h2>17</h2>
          <p>Total Clients</p>
        </div>
        <div className="p-icon">
          <img src={clients} alt="Total Clients" />
        </div>
      </div>
      <div className="p-card">
        <div className="p-content">
          <h2>12</h2>
          <p>Total Projects</p>
        </div>
        <div className="p-icon">
          <img src={project} alt="Total Projects" />
        </div>
      </div>
      <div className="p-card">
        <div className="p-content">
          <h2>8</h2>
          <p>Active Projects</p>
        </div>
        <div className="p-icon">
          <img src={project} alt="Active Projects" />
        </div>
      </div>
    </div>
  );
};

export default Perfcards;
