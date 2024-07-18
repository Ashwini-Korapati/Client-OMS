
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