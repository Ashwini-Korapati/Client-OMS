import React from 'react';
import { useSelector } from 'react-redux';
import '../HRHome/HRCards.css';
import emp from '../../../Assets/cardsperfamnace.jpg';
import clients from '../../../Assets/clientshr.png';
import project from '../../../Assets/projects.png';
import { selectTotalEmployees, } from '../../../Redux/Reducers/hrCardsSlice'

const Perfcards = () => {
  const totalEmployees = useSelector(selectTotalEmployees);
  // const totalClients = useSelector(selectTotalClients);
  // const totalProjects = useSelector(selectTotalProjects);
  // const activeProjects = useSelector(selectActiveProjects);

  return (
    <div className="card-perfamnce-dashboard">
      <div className="p-card">
        <div className="p-content">
          <h2>{totalEmployees}</h2>
          <p>Total Employees</p>
        </div>
        <div className="p-icon">
          <img src={emp} alt="Total Employees" />
        </div>
      </div>

      <div className="p-card">
        <div className="p-content">
          {/* <h2>{totalProjects}</h2> */}
          <h2>40</h2>
          <p>Today Attendance</p>
        </div>
        <div className="p-icon">
          <img src={project} alt="Total Projects" />
        </div>
      </div>
      <div className="p-card">
        <div className="p-content">
          {/* <h2>{totalClients}</h2> */}
          <h2>100</h2>
          <p>Total Clients</p>
        </div>
        <div className="p-icon">
          <img src={clients} alt="Total Clients" />
        </div>
      </div>
   
      <div className="p-card">
        <div className="p-content">
          {/* <h2>{activeProjects}</h2> */}
          <h2>50</h2>
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
