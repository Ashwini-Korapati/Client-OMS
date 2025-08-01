
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuList from '../Sidebar/MenuList';
import '../AppHeader/AppHeader2.css';

const Header = () => {
  const navigate = useNavigate();
  const [openSubmenuKey, setOpenSubmenuKey] = React.useState(null);
  const [openNestedSubmenuKey, setOpenNestedSubmenuKey] = React.useState(null);

  const handleMenuClick = (path) => {
    if (path) {
      navigate(path);
    }
    closeAllSubmenus(); // Close all submenus when navigating to a new path
  };

  const toggleSubmenu = (key, isNested = false) => {
    if (isNested) {
      setOpenNestedSubmenuKey((prevKey) => (prevKey === key ? null : key));
    } else {
      setOpenSubmenuKey((prevKey) => (prevKey === key ? null : key));
      setOpenNestedSubmenuKey(null); // Close nested submenus when a main submenu is toggled
    }
  };

  const closeAllSubmenus = () => {
    setOpenSubmenuKey(null);
    setOpenNestedSubmenuKey(null);
  };

  const renderMenuItems = (items, isSubmenu = false, isNested = false) => {
    return (
      <ul className={isSubmenu ? (isNested ? 'ashwini-nested-submenu' : 'ashwini-submenu') : 'ashwini-main-menu'}>
        {items.map((item) => (
          <li
            key={item.key}
            className={`ashwini-menu-item ${openSubmenuKey === item.key || openNestedSubmenuKey === item.key ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicks from propagating and closing menus unexpectedly
              if (item.children) {
                toggleSubmenu(item.key, isSubmenu); // Determine if it's a nested submenu
              } else {
                handleMenuClick(item.path);
              }
            }}
          >
            <div className="ashwini-menu-item-content">
              {item.icon && <span className="icon">{item.icon}</span>}
              <span className="ashwini-label">{item.label}</span>
              {item.children && (
                <span className={`ashwini-arrow ${openSubmenuKey === item.key || openNestedSubmenuKey === item.key ? 'open' : ''}`}>›</span>
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
    <nav className="ashwini-nav">
      <div className="ashwini-nav-menu">
        {renderMenuItems(MenuList)}
      </div>
    </nav>
  );
};

export default Header;
