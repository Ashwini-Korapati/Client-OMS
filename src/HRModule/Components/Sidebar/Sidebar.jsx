// import React, { useState } from 'react';
// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';
// import MenuList from './MenuList';
 
// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };
 
//   return (
//     <div className={`sidebar ${collapsed ? 'active' : ''}`}>
//       <Menu
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         theme="light"
//         inlineCollapsed={collapsed}
//         className="custom-menu"
//       >
//         <div className="menu-btn" onClick={toggleCollapsed}>
//           {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//         </div>
//         {MenuList.map((item) =>
//           item.children ? (
//             <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
//               {item.children.map((subItem) => (
//                 <Menu.Item key={subItem.key}>
//                   {subItem.path ? (
//                     <Link to={subItem.path}>{subItem.label}</Link>
//                   ) : (
//                     subItem.label
//                   )}
//                 </Menu.Item>
//               ))}
//             </Menu.SubMenu>
//           ) : (
//             <Menu.Item key={item.key} icon={item.icon}>
//               <Link to={item.path}>{item.label}</Link>
//             </Menu.Item>
//           )
//         )}
//       </Menu>
//     </div>
//   );
// };
 
// export default Sidebar;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuList from './MenuList';
import { FaBars, FaTimes } from 'react-icons/fa'; 
 
import './Sidebar.css';
 
const Sidebar = () => {
  const navigate = useNavigate();
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
 
  const handleMenuClick = (path) => {
    if (path) {
      navigate(path);
    }
  };
 
  const toggleSubmenu = (key) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
 
    // Close all other submenus except the one toggled
    MenuList.forEach(item => {
      if (item.children && item.key !== key) {
        setOpenSubmenus(prev => ({
          ...prev,
          [item.key]: false
        }));
      }
    });
  };
 
 
  const toggleSidebar = () => {
    if (sidebarOpen) {
      setOpenSubmenus({});
    }
    setSidebarOpen(!sidebarOpen);
  };
 
  const renderMenuItems = (items, isSubmenu = false) => {
    return (
      <ul className={isSubmenu ? 'submenu' : ''}>
        {items.map(item => (
          <li
            key={item.key}
            className={`${openSubmenus[item.key] ? 'open' : ''}`}
            onClick={() => item.children ? toggleSubmenu(item.key) : handleMenuClick(item.path)}
          >
            <div className="menu-item">
              {item.icon && <span className="icon">{item.icon}</span>}
              <span className="label">{item.label}</span>
              {item.children && <span className={`arrow ${openSubmenus[item.key] ? 'open' : ''}`}>›</span>}
            </div>
            {item.children && openSubmenus[item.key] && renderMenuItems(item.children, true)}
          </li>
        ))}
      </ul>
    );
  };
 
  return (
    <div className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <span className="sidebar-title"></span>
      </div>
      {renderMenuItems(MenuList)}
    </div>
  );
};
 
export default Sidebar;