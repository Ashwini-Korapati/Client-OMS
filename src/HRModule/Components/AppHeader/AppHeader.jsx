import React, { useState } from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { Modal } from 'antd';
import './AppHeader.css';
import hrmlogo from '../../Assets/hrmimage.png';
import avatar from '../../Assets/avatar.png';
import Profile from '../Pages/Profile/Profile'

const AppHeader = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="hrm-header">
      <div>
        <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
      </div>
      <div className="header-right">
        <IoNotificationsSharp className="header-icon" />
        <img className='profile-logo' src={avatar} alt="p" onClick={showModal} />
      </div>
      <Modal title="Profile Settings" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Profile />
      </Modal>
    </div>
  );
};

export default AppHeader;
