import {
    SettingOutlined,
    UserOutlined,
    DollarOutlined,
    CalendarOutlined,
    HomeOutlined,
    FormOutlined,
    ClockCircleOutlined,
  } from '@ant-design/icons';
  import { BsGraphUpArrow } from "react-icons/bs";
  import '../AdminSidebar/AdminMenu.css'
   import React from 'react';
  const iconStyle = { fontSize: '20px' };
   
  const MenuList = [
    {
      key: '1',
      path: "/admin-dashboard/adminhome",
      icon: <HomeOutlined style={iconStyle} />,
      label: <span className="menu-item-text">Home</span>,
    },
    // {
    //   key: '2',
    //   path:'/hr-dashboard/EMP-managment',
    //   icon: <UserOutlined style={iconStyle} />,
    //   label: <span className="menu-item-text">Employee Management</span>,
    // },
 
    {
      key: '2',
      label: <span className="menu-item-text">Employee Management</span>,
      icon:  <UserOutlined style={iconStyle}/>,
      children: [
        {
          key: '3',
        //   path:'/hr-dashboard/add-employee',
          label: <span className="menu-item-text">Add Employee</span>,
        },
        {
          key: '4',
          path:'view-employee',
          label: <span className="menu-item-text">View Employee</span>,
        },
      ],
    },
 
    {
      key: '5',
    //   path:'/hr-dashboard/Payroll',
      icon: <DollarOutlined style={iconStyle} />,
      label: <span className="menu-item-text">Payroll</span>,
    },
    {
      key: '6',
    //   path:'/hr-dashboard/attendance',
      icon: <FormOutlined style={iconStyle} />,
      label: <span className="menu-item-text">Attendance</span>,
    },
    {
      key: '7',
    //   path:'/hr-dashboard/perfarmance',
      icon: <BsGraphUpArrow style={iconStyle} />,
      label: <span className="menu-item-text">Performance Metrics</span>,
    },
    {
      key: '8',
      label: <span className="menu-item-text">Leave</span>,
      icon: <CalendarOutlined style={iconStyle} />,
      children: [
        {
          key: '9',
        //   path:'/hr-dashboard/apply-leave',
          label: <span className="menu-item-text">Leave</span>,
        },
        {
          key: '10',
        //   path:'/hr-dashboard/leave-report',
          label: <span className="menu-item-text">Leave Report</span>,
        },
      ],
    },
    {
      label: <span className="menu-item-text">Checkout</span>,
      icon: <ClockCircleOutlined    />,
      className: 'checkout-menu-item',
    },
  ];
   
  export default MenuList;