// // import {
// //   SettingOutlined,
// //   UserOutlined,
// //   DollarOutlined,
// //   CalendarOutlined,
// //   HomeOutlined,
// //   FormOutlined,
// // } from '@ant-design/icons';
// // import { BsGraphUpArrow } from "react-icons/bs";

// // const iconStyle = { fontSize: '20px' };

// // const MenuList = [
// //   {
// //     key: '1',
// //     path: "/hr-dashboard/hr-home", 
// //     icon: <HomeOutlined style={iconStyle} />,
// //     label: 'Home',
// //   },
// //   {
// //     key: '2',
// //     path:'/hr-dashboard/EMP-managment',
// //     icon: <UserOutlined style={iconStyle} />,
// //     label: 'Employee Management',
// //   },
// //   {
// //     key: '3',
// //     path:'/hr-dashboard/Payroll',
// //     icon: <DollarOutlined style={iconStyle} />,
// //     label: 'Payroll',
// //   },
// //   {
// //     key: '4',
// //     path:'/hr-dashboard/attendance',
// //     icon: <FormOutlined style={iconStyle} />,
// //     label: 'Attendance',
// //   },
// //   {
// //     key: '5',
// //     path:'/hr-dashboard/perfarmance',
// //     icon: <BsGraphUpArrow style={iconStyle} />,
// //     label: 'Performance Metrics',
// //   },
// //   {
// //     key: 's',
// //     label: 'Leave',
// //     icon: <CalendarOutlined style={iconStyle} />,
// //     children: [
// //       {
// //         key: '6',
// //         path:'/hr-dashboard/leavemetrics',
// //         label: 'Leave Metrics',
// //       },
// //       {
// //         key: '8',
// //         label: 'Option 6',
// //       },
// //     ],
// //   },
// //   {
// //     key: '9',
// //     path:'/hr-dashboard/settings',
// //     label: 'Settings',
// //     icon: <SettingOutlined style={iconStyle} />,
// //   },
// // ];

// // export default MenuList;



 
// import {
//   SettingOutlined,
//   UserOutlined,
//   DollarOutlined,
//   CalendarOutlined,
//   HomeOutlined,
//   FormOutlined,
//   ClockCircleOutlined,
// } from '@ant-design/icons';
// import { BsGraphUpArrow } from "react-icons/bs";
// import './MenuList.css'; // Import the CSS file
 
// const iconStyle = { fontSize: '20px' };
 
// const MenuList = [
//   {
//     key: '1',
//     path: "/hr-dashboard/hr-home",
//     icon: <HomeOutlined style={iconStyle} />,
//     label: <span className="menu-item-text">Home</span>,
//   },
//   // {
//   //   key: '2',
//   //   path:'/hr-dashboard/EMP-managment',
//   //   icon: <UserOutlined style={iconStyle} />,
//   //   label: <span className="menu-item-text">Employee Management</span>,
//   // },

//   {
//     key: '2',
//     label: <span className="menu-item-text">Employee Management</span>,
//     icon:  <UserOutlined style={iconStyle}/>,
//     children: [
//       {
//         key: '3',
//         path:'/hr-dashboard/add-employee',
//         label: <span className="menu-item-text">Add Employee</span>,
//       },
//       {
//         key: '4',
//         path:'view-employee',
//         label: <span className="menu-item-text">View Employee</span>,
//       },
//     ],
//   },

//   {
//     key: '5',
//     path:'/hr-dashboard/Payroll',
//     icon: <DollarOutlined style={iconStyle} />,
//     label: <span className="menu-item-text">Payroll</span>,
//   },
//   {
//     key: '6',
//     path:'/hr-dashboard/attendance',
//     icon: <FormOutlined style={iconStyle} />,
//     label: <span className="menu-item-text">Attendance</span>,
//   },
//   // {
//   //   key: '7',
//   //   path:'/hr-dashboard/perfarmance',
//   //   icon: <BsGraphUpArrow style={iconStyle} />,
//   //   label: <span className="menu-item-text">Performance Metrics</span>,
//   // },
//   {
//     key: '8',
//     label: <span className="menu-item-text">Leave</span>,
//     icon: <CalendarOutlined style={iconStyle} />,
//     children: [
//       {
//         key: '9',
//         path:'/hr-dashboard/apply-leave',
//         label: <span className="menu-item-text">Leave</span>,
//       },
//       {
//         key: '10',
//         path:'/hr-dashboard/leave-report',
//         label: <span className="menu-item-text">Leave Report</span>,
//       },
//     ],
//   },

// ];
 
// export default MenuList;
 

import React from 'react';
import {
  FaHome, FaUser, FaDollarSign, FaClipboardList, FaChartLine, FaCalendarAlt
} from 'react-icons/fa';
import { BsFillPersonPlusFill, BsPeopleFill, BsFileEarmarkText, BsInfoCircle, BsCashStack, BsPersonBoundingBox, BsCheckCircle, BsXCircle, BsEnvelopeOpenFill, BsPersonCheckFill, BsArrowRightCircle, BsGearFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
 
const iconStyle = { fontSize: '20px' };
 
const MenuList = [
  {
    key: '1',
    path: "/hr-dashboard/hr-home",
    icon: <FaHome style={iconStyle} />,
    label: <span className="menu-item-text">Home</span>,
  },
  {
    key: '2',
    label: <span className="menu-item-text">EmployeeManagement</span>,
    icon: <FaUser style={iconStyle} />,
    children: [
      {
        key: '3',
        path:'/hr-dashboard/add-employee',
        icon: <BsFillPersonPlusFill style={iconStyle} />,
        label: <span className="menu-item-text">Add Employee</span>,
      },
      {
        key: '4',
        path:'/hr-dashboard/view-employee',
        icon: <BsPeopleFill style={iconStyle} />,
        label: <span className="menu-item-text">View Employee</span>,
      },
    ],
  },
  {
    key: '5',
    path:'/hr-dashboard/Payroll',
    icon: <FaDollarSign style={iconStyle} />,
    label: <span className="menu-item-text">Payroll</span>,
    children: [
      {
        key: '6',
        path:'/hr-dashboard/main',
        icon: <BsFileEarmarkText style={iconStyle} />,
        label: <span className="menu-item-text">Main</span>,
      },
      {
        key: '7',
        path:'/hr-dashboard/information',
        icon: <BsInfoCircle style={iconStyle} />,
        label: <span className="menu-item-text">Information</span>,
      },
      {
        key: '8',
        path:'/hr-dashboard/payroll-inputs',
        icon: <BsCashStack style={iconStyle} />,
        label: <span className="menu-item-text">Payroll Inputs</span>,
        children: [
          {
            key: '9',
            path:'/hr-dashboard/salary',
            label: <span className="menu-item-text">Salary</span>,
          },
          {
            key: '10',
            path:'/hr-dashboard/loan',
            label: <span className="menu-item-text">Loan</span>,
          },
          {
            key: '11',
            path:'/hr-dashboard/salary-revisions',
            label: <span className="menu-item-text">Salary Revisions</span>,
          },
         
        ]
      },
      {
        key: '12',
        path:'/hr-dashboard/process',
        icon: <BsPersonBoundingBox style={iconStyle} />,
        label: <span className="menu-item-text">Process</span>,
      },
      {
        key: '13',
        path:'/hr-dashboard/verify',
        icon: <BsCheckCircle style={iconStyle} />,
        label: <span className="menu-item-text">Verify</span>,
      },
      {
        key: '14',
        path:'/hr-dashboard/payout',
        icon: <BsXCircle style={iconStyle} />,
        label: <span className="menu-item-text">Payout</span>,
      },
      {
        key: '15',
        path:'/hr-dashboard/published-info',
        icon: <BsEnvelopeOpenFill style={iconStyle} />,
        label: <span className="menu-item-text">Published Info</span>,
      },
      {
        key: '16',
        path:'/hr-dashboard/admin-payroll',
        icon: <BsPersonCheckFill style={iconStyle} />,
        label: <span className="menu-item-text">Admin</span>,
      },
      {
        key: '17',
        path:'/hr-dashboard/setup',
        icon: <BsGearFill style={iconStyle} />,
        label: <span className="menu-item-text">Setup</span>,
      },
    ]
  },
  {
    key: '18',
    path:'/hr-dashboard/attendance',
    icon: <FaClipboardList style={iconStyle} />,
    label: <span className="menu-item-text">Attendance</span>,
  },
  // {
  //   key: '19',
  //   path:'/hr-dashboard/performance',
  //   icon: <FaChartLine style={iconStyle} />,
  //   label: <span className="menu-item-text">Performance Metrics</span>,
  // },
  {
    key: '20',
    label: <span className="menu-item-text">Leave</span>,
    icon: <FaCalendarAlt style={iconStyle} />,
    children: [
      {
        key: '21',
        path:'/hr-dashboard/apply-leave',
        icon: <BsArrowRightCircle style={iconStyle} />,
        label: <span className="menu-item-text">Apply Leave</span>,
      },
      {
        key: '22',
        path:'/hr-dashboard/leave-report',
        icon: <BsFileEarmarkText style={iconStyle} />,
        label: <span className="menu-item-text">Leave Report</span>,
      },
      {
        key: '23',
        path:'/hr-dashboard/leave-calender',
        icon: <SlCalender  style={iconStyle} />,
        label: <span className="menu-item-text">Leave Calender</span>,
      },
    ],
  },
];
 
export default MenuList;