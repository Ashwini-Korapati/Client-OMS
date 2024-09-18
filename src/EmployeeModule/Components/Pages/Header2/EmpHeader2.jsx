import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuList from '../../../EmpSidebar/EmpMenu';
import '../../../Components/Pages/Header2/EmpHeader2.css'
export default function Header() {
  const navigate = useNavigate();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenu(prevKey => prevKey === key ? null : key);
  };

  const renderMenuItems = (items, isSubmenu = false) => {
    return (
      <ul className={isSubmenu ? 'emp-submenu' : 'emp-main-menu'}>
        {items.map((item) => (
          <li
            key={item.key}
            className={`emp-menu-item ${openSubmenu === item.key ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (item.children) {
                toggleSubmenu(item.key);
              } else {
                handleMenuClick(item.path);
                setOpenSubmenu(null); // Close all submenus when a leaf item is clicked
              }
            }}
          >
            <div className="emp-menu-item-content">
              {item.icon && <span className="icon">{item.icon}</span>}
              <span className="emp-label">{item.label}</span>
              {item.children && (
                <span className={`emp-arrow ${openSubmenu === item.key ? 'open' : ''}`}>›</span>
              )}
            </div>
            {item.children && openSubmenu === item.key && renderMenuItems(item.children, true)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="emp-nav">
      <div className="emp-nav-menu">
        {renderMenuItems(MenuList)}
      </div>
    </nav>
  );
}