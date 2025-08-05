
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuList from '../EmpSidebar/EmpMenu';
import '../EmpAppHeader/EmpHeader2.css';

const EmpHeader2 = () => {
  const navigate = useNavigate();
  const [openSubmenuKey, setOpenSubmenuKey] = React.useState(null);
  const [openNestedSubmenuKey, setOpenNestedSubmenuKey] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
    return (
      <ul className={isSubmenu ? (isNested ? 'emp-nested-submenu' : 'emp-submenu') : 'emp-main-menu'}>
        {items.map((item) => (
          <li
            key={item.key}
            className={`emp-menu-item ${openSubmenuKey === item.key || openNestedSubmenuKey === item.key ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (item.children) {
                toggleSubmenu(item.key, isSubmenu);
              } else {
                handleMenuClick(item.path);
              }
            }}
          >
            <div className="emp-menu-item-content">
              {item.icon && <span className="emp-icon">{item.icon}</span>}
              <span className="emp-label">{item.label}</span>
              {item.children && (
                <span className={`emp-arrow ${openSubmenuKey === item.key || openNestedSubmenuKey === item.key ? 'open' : ''}`}>›</span>
              )}
            </div>
            {item.children && (openSubmenuKey === item.key || openNestedSubmenuKey === item.key) &&
              renderMenuItems(item.children, true, isSubmenu)
            }
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="emp-nav">
      <button className="emp-toggle-btn" onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={`emp-nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {renderMenuItems(MenuList)}
      </div>
    </nav>
  );
};

export default EmpHeader2;