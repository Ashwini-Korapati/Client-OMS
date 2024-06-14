import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import MenuList from './MenuList';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: 300,
        height: '100vh',
        fontSize: '20px',
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          margin: 15,
          width: '50px',
          height: '50px',
        }}
      >
        {collapsed ? (
          <MenuUnfoldOutlined style={{ fontSize: '10px' }} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: '20px' }} />
        )}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        className="custom-menu"
        style={{
          height: '100%',
          overflow: 'auto',
        }}
      >
        {MenuList.map((item) =>
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

export default Sidebar;
