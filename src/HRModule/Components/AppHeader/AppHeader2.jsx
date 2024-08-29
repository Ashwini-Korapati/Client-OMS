import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuList from '../Sidebar/MenuList';
import '../AppHeader/AppHeader2.css';

const Header = () => {
  const navigate = useNavigate();
  const [openSubmenus, setOpenSubmenus] = React.useState({});

  const handleMenuClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderMenuItems = (items, isSubmenu = false) => {
    return (
      <ul className={isSubmenu ? 'ashwini-submenu' : 'ashwini-main-menu'}>
        {items.map((item) => (
          <li
            key={item.key}
            className={`ashwini-menu-item ${openSubmenus[item.key] ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicks from propagating and closing menus unexpectedly
              if (item.children) {
                toggleSubmenu(item.key);
              } else {
                handleMenuClick(item.path);
              }
            }}
          >
            <div className="ashwini-menu-item-content">
              {item.icon && <span className="icon">{item.icon}</span>}
              <span className="ashwini-label">{item.label}</span>
              {item.children && (
                <span className={`ashwini-arrow ${openSubmenus[item.key] ? 'open' : ''}`}>›</span>
              )}
            </div>
            {item.children && openSubmenus[item.key] && renderMenuItems(item.children, true)}
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
