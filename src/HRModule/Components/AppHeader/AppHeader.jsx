

// // import React, { useState } from 'react';
// // import { IoNotificationsSharp } from "react-icons/io5";
// // import { Menu, Dropdown, Modal } from 'antd';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { logout } from '../../../Landingpage/Redux/Actions/userActions'
// // import './AppHeader.css';
// // import hrmlogo from '../../Assets/logo.png';
// // import avatar from '../../Assets/avatar.png';


// // const AppHeader = () => {
// //   const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
// //   const { isAuthenticatedemployee, emp } = useSelector(state => state.authState);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   // const { emp }  = useSelector(state => state.authState);
// //   const [profileImage, setProfileImage] = useState(avatar);



// //   const showSettingsModal = () => {
// //     setIsSettingsModalVisible(true);
// //   };

// //   const handleSettingsModalOk = () => {
// //     setIsSettingsModalVisible(false);
// //   };

// //   const handleSettingsModalCancel = () => {
// //     setIsSettingsModalVisible(false);
// //   };

// //   const logoutHandler = () => {
// //     dispatch(logout());
// //     navigate('/'); 
// //   };

// //   const menu = (
// //     <Menu>
// //       <Menu.Item key="1">
// //         <NavLink to="/hr-dashboard/profile">
// //           Profile
// //         </NavLink>
// //       </Menu.Item>
// //       <Menu.Item key="2">
// //         <NavLink to="/hr-dashboard/settings">
// //           Settings
// //         </NavLink>
// //       </Menu.Item>
// //       <Menu.Item key="3" onClick={logoutHandler}>
// //         Logout
// //       </Menu.Item>
// //     </Menu>
// //   );

// //   return (
// //     <div className="hrm-header">
// //       <div>
// //         <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
// //       </div>
// //       <div className="header-right">
// //         <IoNotificationsSharp className="header-icon" />
// //         <Dropdown overlay={menu} trigger={['click']}>
// //           {/* <img className='header-profile-logo' src={user?.avatar ?? avatar} alt="Profile" /> */}
// //           <img className="profile-logo1 " src={avatar} alt="Profile" />

// //         </Dropdown>
// //       </div>
      
// //       <Modal
// //         title="Settings"
// //         visible={isSettingsModalVisible}
// //         onOk={handleSettingsModalOk}
// //         onCancel={handleSettingsModalCancel}
// //         footer={null}
// //       >
// //         <p>Settings</p>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default AppHeader;



// import React, { useState,useEffect } from 'react';
// import { IoNotificationsSharp } from "react-icons/io5";
// import { Menu, Dropdown, Modal, Drawer } from 'antd';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../../Landingpage/Redux/Actions/userActions'
// import './AppHeader.css';
// import hrmlogo from '../../Assets/hrmimage.png';
// import avatar from '../../Assets/avatar.png';
// import { getProfile } from '../../Redux/Reducers/ProfileSlice';
 
// const AppHeader = () => {
//   const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false);
//   const { isAuthenticated, user } = useSelector(state => state.authState);
//   const {status , success , employee} = useSelector(state=> state.profile)
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

//   const handleClick=()=>{
  
//     dispatch(getProfile())
//   }

//   useEffect(()=>{
//     if(success){
//       navigate("/hr-dashboard/profile")
//     }
//     },[success] ,navigate )
//     // else{
//     //   navigate("/hr-dashboard/dashboard")
//     // }
      
//   // },[success , navigate])



  
 
//   const menu = (
//     <Menu>
//       <Menu.Item key="1">
//         {/* <NavLink to="/hr-dashboard/profile"> */}
//         <button type='submit' onClick={handleClick}>
//         Profile
//         </button>
        
//         {/* </NavLink> */}
//       </Menu.Item>
//       <Menu.Item key="2">
//         <NavLink to="/hr-dashboard/settings">
//           Settings
//         </NavLink>
//       </Menu.Item>
//       <Menu.Item key="3" onClick={logoutHandler}>
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
//           <img className='header-profile-logo' src={user?.avatar ?? avatar} alt="Profile" />
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

import React, { useState } from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { Menu, Dropdown, Modal, Drawer } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Landingpage/Redux/Actions/userActions';
import './AppHeader.css';
import hrmlogo from '../../Assets/hrmimage.png';
import avatar from '../../Assets/avatar.png';
import { getProfile } from '../../Redux/Reducers/ProfileSlice';

const AppHeader = () => {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const { isAuthenticated, user } = useSelector(state => state.authState);
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

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleClick = async () => {
    const result = await dispatch(getProfile()).unwrap();
    if (result) {
      navigate("/hr-dashboard/profile");
      // dispatch(resetSuccess());
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <button  onClick={handleClick}>
          Profile
        </button>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/hr-dashboard/settings">
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
          <img className='header-profile-logo' src={user?.avatar ?? avatar} alt="Profile" />
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
