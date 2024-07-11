
import React from 'react';

// import empSidebar from '../empSidebar/empSidebar';

import EmpHeader from '../../HRModule/Components/AppHeader/AppHeader'


import { Outlet } from 'react-router-dom';

import EmpSidebar from '../EmpSidebar/EmpSidebar'
 
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
 