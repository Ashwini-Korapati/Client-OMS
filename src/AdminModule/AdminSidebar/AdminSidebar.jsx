import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../AdminSidebar/AdminSidebar.css'
import AdminMenuList from '../AdminSidebar/AdminMenu'
 
const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
 
  return (
    <div className={`sidebar ${collapsed ? 'active' : ''}`}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        className="custom-menu"
      >
        <div className="menu-btn" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        {AdminMenuList.map((item) =>
          item.children ? (
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children.map((subItem) => (
                <Menu.Item key={subItem.key}>
                  {subItem.path ? (
                    <Link to={subItem.path}>{subItem.label}</Link>
                  ) : (
                    subItem.label
                  )}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </div>
  );
};
 
export default AdminSidebar;