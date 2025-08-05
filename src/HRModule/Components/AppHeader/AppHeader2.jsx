
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import MenuList from '../Sidebar/MenuList';
// import '../AppHeader/AppHeader2.css';

// const Header = () => {
//   const navigate = useNavigate();
//   const [openSubmenuKey, setOpenSubmenuKey] = React.useState(null);
//   const [openNestedSubmenuKey, setOpenNestedSubmenuKey] = React.useState(null);

//   const handleMenuClick = (path) => {
//     if (path) {
//       navigate(path);
//     }
//     closeAllSubmenus(); // Close all submenus when navigating to a new path
//   };

//   const toggleSubmenu = (key, isNested = false) => {
//     if (isNested) {
//       setOpenNestedSubmenuKey((prevKey) => (prevKey === key ? null : key));
//     } else {
//       setOpenSubmenuKey((prevKey) => (prevKey === key ? null : key));
//       setOpenNestedSubmenuKey(null); // Close nested submenus when a main submenu is toggled
//     }
//   };

//   const closeAllSubmenus = () => {
//     setOpenSubmenuKey(null);
//     setOpenNestedSubmenuKey(null);
//   };

//   const renderMenuItems = (items, isSubmenu = false, isNested = false) => {
//     return (
//       <ul className={isSubmenu ? (isNested ? 'ashwini-nested-submenu' : 'ashwini-submenu') : 'ashwini-main-menu'}>
//         {items.map((item) => (
//           <li
//             key={item.key}
//             className={`ashwini-menu-item ${openSubmenuKey === item.key || openNestedSubmenuKey === item.key ? 'open' : ''}`}
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent clicks from propagating and closing menus unexpectedly
//               if (item.children) {
//                 toggleSubmenu(item.key, isSubmenu); // Determine if it's a nested submenu
//               } else {
//                 handleMenuClick(item.path);
//               }
//             }}
//           >
//             <div className="ashwini-menu-item-content">
//               {item.icon && <span className="icon">{item.icon}</span>}
//               <span className="ashwini-label">{item.label}</span>
//               {item.children && (
//                 <span className={`ashwini-arrow ${openSubmenuKey === item.key || openNestedSubmenuKey === item.key ? 'open' : ''}`}>›</span>
//               )}
//             </div>
//             {item.children && (openSubmenuKey === item.key || openNestedSubmenuKey === item.key) &&
//               renderMenuItems(item.children, true, isSubmenu)
//             }
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <nav className="ashwini-nav">
//       <div className="ashwini-nav-menu">
//         {renderMenuItems(MenuList)}
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminMenuList from '../Sidebar/MenuList';
import EmpMenuList from '../../../EmployeeModule/EmpSidebar/EmpMenu'
import '../AppHeader/AppHeader2.css';
import '../../../EmployeeModule/Components/Pages/Header2/EmpHeader2.css';

const DynamicHeader = () => {
  const navigate = useNavigate();
  const { user, emp } = useSelector(state => state.authState);
  const [openSubmenuKey, setOpenSubmenuKey] = React.useState(null);
  const [openNestedSubmenuKey, setOpenNestedSubmenuKey] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Determine user role and menu list
  const isHR = user?.role === 'hr' || emp?.role === 'hr' || emp?.role === 'admin';
  const menuList = isHR ? AdminMenuList : EmpMenuList;
  const isAdmin = emp?.role === 'admin';

  const handleMenuClick = (path) => {
    if (path) {
      navigate(path);
      setMobileMenuOpen(false);
    }
    closeAllSubmenus();
  };

  const toggleSubmenu = (key, isNested = false) => {
    if (isNested) {
      setOpenNestedSubmenuKey((prevKey) => (prevKey === key ? null : key));
    } else {
      setOpenSubmenuKey((prevKey) => (prevKey === key ? null : key));
      setOpenNestedSubmenuKey(null);
    }
  };

  const closeAllSubmenus = () => {
    setOpenSubmenuKey(null);
    setOpenNestedSubmenuKey(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      closeAllSubmenus();
    }
  };

  const renderMenuItems = (items, isSubmenu = false, isNested = false) => {
    const menuClass = isHR ? 'ashwini' : 'emp';
    return (
      <ul className={
        isSubmenu 
          ? (isNested ? `${menuClass}-nested-submenu` : `${menuClass}-submenu`) 
          : `${menuClass}-main-menu`
      }>
        {items.map((item) => {
          // Hide admin-only items from non-admin users
          if (item.adminOnly && !isAdmin) return null;
          
          return (
            <li
              key={item.key}
              className={`${menuClass}-menu-item ${
                openSubmenuKey === item.key || openNestedSubmenuKey === item.key ? 'open' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (item.children) {
                  toggleSubmenu(item.key, isSubmenu);
                } else {
                  handleMenuClick(item.path);
                }
              }}
            >
              <div className={`${menuClass}-menu-item-content`}>
                {item.icon && <span className={`${menuClass}-icon`}>{item.icon}</span>}
                <span className={`${menuClass}-label`}>{item.label}</span>
                {item.children && (
                  <span className={`${menuClass}-arrow ${
                    openSubmenuKey === item.key || openNestedSubmenuKey === item.key ? 'open' : ''
                  }`}>›</span>
                )}
              </div>
              {item.children && (openSubmenuKey === item.key || openNestedSubmenuKey === item.key) &&
                renderMenuItems(item.children, true, isSubmenu)
              }
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={isHR ? 'ashwini-nav' : 'emp-nav'}>
      {/* Mobile menu toggle button - shown for all roles */}
      <button 
        className={isHR ? 'ashwini-toggle-btn' : 'emp-toggle-btn'} 
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      {/* Main menu content */}
      <div className={`${isHR ? 'ashwini' : 'emp'}-nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {renderMenuItems(menuList)}
        
        {/* User profile info */}
        {/* <div className={`${isHR ? 'ashwini' : 'emp'}-user-profile`}>
          <span>{isHR ? user?.name : emp?.name}</span>
          <span className={`${isHR ? 'ashwini' : 'emp'}-user-role`}>
            {isHR ? (isAdmin ? 'Admin' : 'HR') : 'Employee'}
          </span>
        </div> */}
      </div>
    </nav>
  );
};

export default DynamicHeader;