import React from 'react';
import { BellOutlined, LogoutOutlined } from '@ant-design/icons';
import './AppHeader.css';
import hrmlogo from '../../Assets/hrmimage.png'
import { IoNotificationsSharp } from "react-icons/io5";

import avatar from '../../Assets/avatar.png'
 
const AppHeader = () => {
  return (
    <div className="hrm-header">
      <div>
        <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
      </div>
      <div className="header-right">
      <IoNotificationsSharp className="header-icon" />

      <img className='profile-logo' src={avatar} alt="p" />
        {/* <FaPowerOff className="header-icon" /> */}
      </div>
    </div>
  );
};
 
export default AppHeader;

