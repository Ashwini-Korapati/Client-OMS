

// import React, { useState } from 'react';
// import { IoNotificationsSharp } from "react-icons/io5";
// import { Menu, Dropdown, Modal, Drawer } from 'antd';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../../Landingpage/Redux/Actions/userActions';
// import './AppHeader.css';
// import hrmlogo from '../../Assets/hrmimage.png';
// import avatar from "../../Assets/avatar.png"
// import { getProfile } from '../../Redux/Reducers/ProfileSlice';

// const AppHeader = () => {
//   const { emp }  = useSelector(state => state.authState);
//   console.log(emp)
//   console.log(emp.avatar)

//   const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false);
//   const { isAuthenticatedemployee, user } = useSelector(state => state.authState);
//   const { status, success, employee } = useSelector(state => state.profile);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const showSettingsModal = () => {
//     setIsSettingsModalVisible(true);
//   };

//   const handleSettingsModalOk = () => {
//     setIsSettingsModalVisible(false);
//   };

//   const handleSettingsModalCancel = () => {
//     setIsSettingsModalVisible(false);
//   };

//   const showDrawer = () => {
//     setIsDrawerVisible(true);
//   };

//   const onCloseDrawer = () => {
//     setIsDrawerVisible(false);
//   };

//   const logoutHandler = () => {
//     dispatch(logout());
//     navigate('/');
//   };

//   const handleClick = async () => {
//     const result = await dispatch(getProfile()).unwrap();
//     if (result) {
//       navigate("/hr-dashboard/profile");
//       // dispatch(resetSuccess());
//     }
//     console.log(user.avatar)
//   };

//   const menu = (
//     <Menu>
//       <Menu.Item key="1">
//         <button  onClick={handleClick}>
//           Profile
//         </button>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <NavLink to="/hr-dashboard/settings">
//           Settings
//         </NavLink>
//       </Menu.Item>

//       <Menu.Item key="3">
//         <NavLink to="/hr-dashboard/changepassword">
//           Change password
//         </NavLink>
//       </Menu.Item>
//       <Menu.Item key="4" onClick={logoutHandler}>
//         Logout
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className="hrm-header">
//       <div>
//         <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
//       </div>
//       <div className="header-right">
//         <IoNotificationsSharp className="header-icon" onClick={showDrawer} />
//         <Dropdown overlay={menu} trigger={['click']}>
//           <img className='header-profile-logo' src={ emp.avatar??avatar} alt="Profile" />
//         </Dropdown>
//       </div>

//       <Modal
//         title="Settings"
//         visible={isSettingsModalVisible}
//         onOk={handleSettingsModalOk}
//         onCancel={handleSettingsModalCancel}
//         footer={null}
//       >
//         <p>Settings</p>
//       </Modal>

//       <Drawer title="Notifications" onClose={onCloseDrawer} visible={isDrawerVisible}>
//         <p>YOU'RE FIRED</p>
//         <p>YOU have a hike</p>
//       </Drawer>
//     </div>
//   );
// };

// export default AppHeader;



import React, { useState, useEffect } from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { Menu, Dropdown, Modal, Drawer } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Landingpage/Redux/Actions/userActions';
import './AppHeader.css';
import hrmlogo from '../../Assets/hrmimage.png';
import avatar from "../../Assets/avatar.png";

const AppHeader = () => {
  const { emp } = useSelector(state => state.authState);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const { isAuthenticatedemployee, user } = useSelector(state => state.authState);
  const { status, success, employee } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleClick = async () => {
      navigate("/hr-dashboard/profile");
    
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <button onClick={handleClick}>
          Profile
        </button>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/hr-dashboard/settings">
          Settings
        </NavLink>
      </Menu.Item>

      <Menu.Item key="3">
        <NavLink to="/hr-dashboard/changepassword">
          Change password
        </NavLink>
      </Menu.Item>
      <Menu.Item key="4" onClick={logoutHandler}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="hrm-header">
      <div>
        <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
      </div>
      <div className="header-right">
        <span className="current-date">{formatDate(currentDate)}</span>
        <IoNotificationsSharp className="header-icon" onClick={showDrawer} />
        <Dropdown overlay={menu} trigger={['click']}>
          <img className='header-profile-logo' src={emp?.avatar ?? avatar} alt="Profile" />
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

export default AppHeader;
