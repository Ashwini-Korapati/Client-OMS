

import React, { useState } from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { Menu, Dropdown, Modal, Drawer } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emplogout } from '../../Landingpage/Redux/Actions/userActions'
import './EmpAppHeader.css'
import hrmlogo from '../../HRModule/Assets/hrmimage.png'
import avatar from '../../HRModule/Assets/avatar.png'
import { getProfile } from '../../HRModule/Redux/Reducers/ProfileSlice'
const EmpAppHeader = () => {
  const { emp } = useSelector(state => state.authState);
  console.log(emp);

  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const { isAuthenticatedemployee, user } = useSelector(state => state.authState);
  const { status, success, employee } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showSettingsModal = () => {
    setIsSettingsModalVisible(true);
  };

  const handleSettingsModalOk = () => {
    setIsSettingsModalVisible(false);
  };

  const handleSettingsModalCancel = () => {
    setIsSettingsModalVisible(false);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  // const logoutHandler = () => {
  //   dispatch(emplogout());
  //   navigate('/');
  // };

  const logoutHandler = () => {
    console.log("Before dispatching logout, token:", localStorage.getItem('token')); // Check token before logout
    dispatch(emplogout());

    // Clear the token from localStorage
    localStorage.removeItem('token'); 
    console.log("After removing token, token:", localStorage.getItem('token')); // Check if token is removed

    navigate('/');
};

  const handleClick = async () => {
    const result = await dispatch(getProfile()).unwrap();
    if (result) {
      navigate("/emp-dashboard/profile");
      dispatch(resetSuccess());
    }
    console.log(user?.avatar); // Check if user.avatar exists
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <button onClick={handleClick}>
          Profile
        </button>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/emp-dashboard/settings">
          Settings
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3" onClick={logoutHandler}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="hrm-header">
      <div>
        <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
      </div>
      <div className="header-right">
        <IoNotificationsSharp className="header-icon" onClick={showDrawer} />
        <Dropdown overlay={menu} trigger={['click']}>
          {/* Ensure emp and emp.avatar are valid */}
          <img className='header-profile-logo' src={emp?.avatar || avatar} alt="Profile" />
        </Dropdown>
      </div>

      <Modal
        title="Settings"
        visible={isSettingsModalVisible}
        onOk={handleSettingsModalOk}
        onCancel={handleSettingsModalCancel}
        footer={null}
      >
        <p>Settings</p>
      </Modal>

      <Drawer title="Notifications" onClose={onCloseDrawer} visible={isDrawerVisible}>
        <p>YOU'RE FIRED</p>
        <p>YOU have a hike</p>
      </Drawer>
    </div>
  );
};

export default EmpAppHeader;
