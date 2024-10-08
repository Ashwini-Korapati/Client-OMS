import {
    SettingOutlined,
    UserOutlined,
    DollarOutlined,
    CalendarOutlined,
    HomeOutlined,
    
    FormOutlined,
  } from '@ant-design/icons';
  import { FcMoneyTransfer } from "react-icons/fc";
  import { SlCalender } from "react-icons/sl";
  import React from 'react';
  import { FaPeopleRoof } from "react-icons/fa6";

  import {
   FaDollarSign,FaCalendarAlt
  } from 'react-icons/fa';
  import { BsGraphUpArrow,BsArrowRightCircle } from "react-icons/bs";
  import '../EmpSidebar/EmpMenu.css'
   
  const iconStyle = { fontSize: '20px' };
   
  const EmpList = [
    {
      key: '1',
      path: "/emp-dashboard/emphome",
      icon: <HomeOutlined style={iconStyle} />,
      label: <span className="menu-item-text">Home</span>,
    },
   
    // {
    //   key: '2',
    //   path:'/emp-dashboard/emp-payslip',
    //   icon: <FaDollarSign style={iconStyle} />,
    //   label: <span className="menu-item-text">Salary</span>,
    // },
    {
      key: '2',
      label: <span className="menu-item-text">Salary</span>,
      icon: <FaDollarSign style={iconStyle} />,
      children: [
        {
          key: '3',
          path:'/emp-dashboard/emp-payslip',
          icon: <FaDollarSign style={iconStyle} />,
          label: <span className="menu-item-text">Payslip</span>,
        },

        {
          key: '4',
          
          path:'/emp-dashboard/emp-ITstatement',
          icon: <FcMoneyTransfer style={iconStyle} />,
          label: <span className="menu-item-text">IT Statement</span>,
        },
        {
          key: '9',
          path:'/emp-dashboard/emp-ITDeclaration',
          icon: <FcMoneyTransfer style={iconStyle} />,
          label: <span className="menu-item-text">IT Declaration</span>,
        },
      
      ]},
   
    // {
    //   key: '4',
    //   path:'/emp-dashboard/checkout',
    //   label: <span className="menu-item-text">Checkout</span>,
    //   icon: <SettingOutlined style={iconStyle} />,
    // },
    {
      key: '5',
      path:'/emp-dashboard/onboarding',
      icon: <FaPeopleRoof style={iconStyle} />,
      label: <span className="menu-item-text">Onboarding </span>,
    },

    {
      key: '6',
      label: <span className="menu-item-text">Leave</span>,
      icon: <FaCalendarAlt style={iconStyle} />,
      children: [
        {
          key: '7',
          path:'/emp-dashboard/leave-apply',
          icon: <BsArrowRightCircle style={iconStyle} />,
          label: <span className="menu-item-text">Apply Leave</span>,
        },

        {
          key: '8',
          path:'/emp-dashboard/leave-calender',
          icon: <SlCalender  style={iconStyle} />,
          label: <span className="menu-item-text">Leave Calender</span>,
        },
      
      ]}
  ];
   
  export default EmpList;