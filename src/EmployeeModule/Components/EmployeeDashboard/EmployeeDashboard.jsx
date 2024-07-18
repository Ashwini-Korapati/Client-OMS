
import React from 'react';
import '../EmployeeDashboard/EmployeeDashboard.css'

// import empSidebar from '../empSidebar/empSidebar';

import EmpHeader from '../../EmpAppHeader/EmpAppHeader'


import { Outlet } from 'react-router-dom';

import EmpSidebar from '../../EmpSidebar/EmpSidebar'
 
const Dashboard = () => {

  return (

    <div className="dashboard">

      <EmpHeader />

      <div className="dashboard-body">

        <EmpSidebar />

        <div className="dashboard-content">

          <Outlet />

        </div>

      </div>

    </div>

  );

};
 
export default Dashboard;
 