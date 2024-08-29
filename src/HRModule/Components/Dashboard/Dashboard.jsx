// Dashboard.jsx
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppHeader from '../AppHeader/AppHeader';
import AppHeader2 from '../AppHeader/AppHeader2';
import './Dashboard.css';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

  
  return (
    <div className="dashboard">
      <AppHeader />
      <AppHeader2/>
      <div className="dashboard-body">
        {/* <Sidebar /> */}
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
