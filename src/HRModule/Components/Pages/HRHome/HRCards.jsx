// import React from 'react';
// import { useSelector } from 'react-redux';
// import '../HRHome/HRCards.css';
// import emp from '../../../Assets/cardsperfamnace.jpg';
// import clients from '../../../Assets/clientshr.png';
// import project from '../../../Assets/projects.png';
// import { selectTotalEmployees, } from '../../../Redux/Reducers/hrCardsSlice'

// const Perfcards = () => {
//   const totalEmployees = useSelector(selectTotalEmployees);


//   return (
//     <div className="card-perfamnce-dashboard">
//       <div className="p-card">
//         <div className="p-content">
//           <h2>{totalEmployees}</h2>
//           <p>Total Employees</p>
//         </div>
//         <div className="p-icon">
//           <img src={emp} alt="Total Employees" />
//         </div>
//       </div>

//       <div className="p-card">
//         <div className="p-content">
//           {/* <h2>{totalProjects}</h2> */}
//           <h2>40</h2>
//           <p>Today Attendance</p>
//         </div>
//         <div className="p-icon">
//           <img src={project} alt="Total Projects" />
//         </div>
//       </div>
//       {/* <div className="p-card">
//         <div className="p-content">
//           {/* <h2>{totalClients}</h2> */}
//           {/* <h2>100</h2>
//           <p>Total Clients</p>
//         </div>
//         <div className="p-icon">
//           <img src={clients} alt="Total Clients" />
//         </div>
//       </div>
   
//       <div className="p-card">
//         <div className="p-content">
//           {/* <h2>{activeProjects}</h2> */}
//           {/* <h2>50</h2>
//           <p>Active Projects</p>
//         </div>
//         <div className="p-icon">
//           <img src={project} alt="Active Projects" />
//         </div>
//       </div>  */}
//     </div>
//   );
// };

// export default Perfcards;


import React from 'react';
import '../HRHome/HRCards.css';
import timesheetIcon from '../HRHome/Images/timesheet.png'
import projectsIcon from  '../HRHome/Images/myprofile.png'
import assignmentsIcon from '../HRHome/Images/myprofile.png'
import profileIcon from '../HRHome/Images/myprofile.png'
import approversIcon from '../HRHome/Images/myprofile.png'
import expenseIcon from '../HRHome/Images/myprofile.png'
import tasksIcon from '../HRHome/Images/myprofile.png'
import chartPlaceholder from '../HRHome/Images/myprofile.png'

const CardLayout = () => {
  return (
    <div className="card-layout">
      <div className="card">
        <h3>Timesheet Compliance</h3>
        <img src={chartPlaceholder} alt="Chart" className="chart" />
        <p>Compliance Percent as of Date</p>
        <p>Data in this graph is refreshed every Monday</p>
      </div>
      <div className="card">
        <h3>Timesheet</h3>
        <img src={timesheetIcon} alt="Timesheet" className="icon" />
      </div>
      <div className="card">
        <h3>Quick Projects-Contract</h3>
        <img src={projectsIcon} alt="Projects" className="icon" />
      </div>
      <div className="card">
        <h3>My Assignments</h3>
        <img src={assignmentsIcon} alt="Assignments" className="icon" />
      </div>
      <div className="card">
        <h3>My Profile</h3>
        <img src={profileIcon} alt="Profile" className="icon" />
      </div>
      <div className="card">
        <h3>My Approvers</h3>
        <img src={approversIcon} alt="Approvers" className="icon" />
      </div>
      <div className="card">
        <h3>Expense Report</h3>
        <img src={expenseIcon} alt="Expense" className="icon" />
      </div>
      <div className="card">
        <h3>Assignment Tasks</h3>
        <img src={tasksIcon} alt="Tasks" className="icon" />
      </div>
    </div>
  );
};

export default CardLayout;
