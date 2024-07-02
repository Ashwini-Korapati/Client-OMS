// // // import React, { useState } from 'react';
// // // import { IoNotificationsSharp } from "react-icons/io5";
// // // import { Modal } from 'antd';
// // // import './AppHeader.css';
// // // import hrmlogo from '../../Assets/hrmimage.png';
// // // import avatar from '../../Assets/avatar.png';
// // // import Profile from '../Pages/Profile/Profile'
// // // import { NavLink } from 'react-router-dom';

// // // const AppHeader = () => {


 

// // //   return (
// // //     <div className="hrm-header">
// // //       <div>
// // //         <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
// // //       </div>
// // //       <div className="header-right">
// // //         <IoNotificationsSharp className="header-icon" />
// // //         <img className='profile-logo' src={avatar} alt="p"/>
    
// // //       <NavLink>
// // //       <Modal title="Profile Settings" footer={null}>
// // //       </Modal>
// // //       </NavLink>
// // //     </div>
// // //     </div>
// // //   );
// // // };

// // // export default AppHeader;


// // import React from 'react';
// // import { IoNotificationsSharp } from "react-icons/io5";
// // import { NavLink } from 'react-router-dom';
// // import './AppHeader.css';
// // import hrmlogo from '../../Assets/hrmimage.png';
// // import avatar from '../../Assets/avatar.png';

// // const AppHeader = () => {
// //   return (
// //     <div className="hrm-header">
// //       <div>
// //         <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
// //       </div>
// //       <div className="header-right">
// //         <IoNotificationsSharp className="header-icon" />
// //         <NavLink to="/hr-dashboard/profile">
// //           <img className='header-profile-logo' src={avatar} alt="Profile" />
// //         </NavLink>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AppHeader;
 

// import React, { useState } from 'react';
// import { IoNotificationsSharp } from "react-icons/io5";
// import { Menu, Dropdown, Modal } from 'antd'; // Ensure Modal is imported here
// import { NavLink } from 'react-router-dom';
// import './AppHeader.css';
// import hrmlogo from '../../Assets/hrmimage.png';
// import avatar from '../../Assets/avatar.png';

// const AppHeader = () => {
//   const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

//   const showSettingsModal = () => {
//     setIsSettingsModalVisible(true);
//   };

//   const handleSettingsModalOk = () => {
//     setIsSettingsModalVisible(false);
//   };

//   const handleSettingsModalCancel = () => {
//     setIsSettingsModalVisible(false);
//   };

//   const menu = (
//     <Menu>
//       <Menu.Item key="1">
//         <NavLink to="/hr-dashboard/profile">
//           Profile
//         </NavLink>
//         </Menu.Item>
//         <NavLink  to="/hr-dashboard/settings">
//         <Menu.Item key="2">
//         Settings
//       </Menu.Item>
      
//         </NavLink>
  
  
//     </Menu>
//   );

//   return (
//     <div className="hrm-header">
//       <div>
//         <img className='hrm-logo' src={hrmlogo} alt="hrmimage" />
//       </div>
//       <div className="header-right">
//         <IoNotificationsSharp className="header-icon" />
//         <Dropdown overlay={menu} trigger={['click']}>
//           <img className='header-profile-logo' src={avatar} alt="Profile" />
//         </Dropdown>
//       </div>
      
//       <Modal
//         title="Settings"
//         visible={isSettingsModalVisible}
//         onOk={handleSettingsModalOk}
//         onCancel={handleSettingsModalCancel}
//         footer={null}
//       >
//         {/* Settings content goes here */}
//         <p>Settings</p>
//       </Modal>
//     </div>
//   );
// };

// export default AppHeader;



// import React, { useState } from 'react';
// import { IoNotificationsSharp } from "react-icons/io5";
// import { Menu, Dropdown, Modal } from 'antd';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../../Landingpage/Redux/Actions/userActions'
// import './AppHeader.css';
// import hrmlogo from '../../Assets/hrmimage.png';
// import avatar from '../../Assets/avatar.png';

// const AppHeader = () => {
//   const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
//   const { isAuthenticated, user } = useSelector(state => state.authState);
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

//   // const logoutHandler = () => {
//   //   dispatch(logout());
//   // };

//   const logoutHandler = () => {
//     dispatch(logout());
// };


//   const menu = (
//     <Menu>
//       <Menu.Item key="1">
//         <NavLink to="/hr-dashboard/profile">
//           Profile
//         </NavLink>
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
//         <IoNotificationsSharp className="header-icon" />
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
//     </div>
//   );
// };

// export default AppHeader;

import React, { useState } from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { Menu, Dropdown, Modal } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Landingpage/Redux/Actions/userActions'
import './AppHeader.css';
import hrmlogo from '../../Assets/hrmimage.png';
import avatar from '../../Assets/avatar.png';

const AppHeader = () => {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const { isAuthenticated, user } = useSelector(state => state.authState);
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

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/'); 
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to="/hr-dashboard/profile">
          Profile
        </NavLink>
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
        <IoNotificationsSharp className="header-icon" />
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
    </div>
  );
};

export default AppHeader;
