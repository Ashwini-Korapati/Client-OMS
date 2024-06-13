// Dashboard.jsx
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppHeader from '../AppHeader/AppHeader';
import './Dashboard.css';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <AppHeader />
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
