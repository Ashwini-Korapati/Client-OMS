// import React, { useState } from 'react';
// import { IoNotificationsSharp } from "react-icons/io5";
// import { Modal } from 'antd';
// import './AppHeader.css';
// import hrmlogo from '../../Assets/hrmimage.png';
// import avatar from '../../Assets/avatar.png';
// import Profile from '../Pages/Profile/Profile'
// import { NavLink } from 'react-router-dom';

// const AppHeader = () => {


 

//   return (
//     <div className="hrm-header">
//       <div>
//         <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
//       </div>
//       <div className="header-right">
//         <IoNotificationsSharp className="header-icon" />
//         <img className='profile-logo' src={avatar} alt="p"/>
    
//       <NavLink>
//       <Modal title="Profile Settings" footer={null}>
//       </Modal>
//       </NavLink>
//     </div>
//     </div>
//   );
// };

// export default AppHeader;


import React from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import './AppHeader.css';
import hrmlogo from '../../Assets/hrmimage.png';
import avatar from '../../Assets/avatar.png';

const AppHeader = () => {
  return (
    <div className="hrm-header">
      <div>
        <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
      </div>
      <div className="header-right">
        <IoNotificationsSharp className="header-icon" />
        <NavLink to="/hr-dashboard/profile">
          <img className='header-profile-logo' src={avatar} alt="Profile" />
        </NavLink>
      </div>
    </div>
  );
};

export default AppHeader;
