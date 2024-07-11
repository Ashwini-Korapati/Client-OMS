import React from 'react';
import AppHeader from '../HRModule/Components/AppHeader/AppHeader';
import '../HRModule/Components/Dashboard/Dashboard.css';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../AdminModule/AdminSidebar/AdminSidebar'
 
const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <AppHeader />
      <div className="dashboard-body">
        <AdminSidebar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
 
export default AdminDashboard;