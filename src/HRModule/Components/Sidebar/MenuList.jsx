// import {
//   SettingOutlined,
//   UserOutlined,
//   DollarOutlined,
//   CalendarOutlined,
//   HomeOutlined,
//   FormOutlined,
// } from '@ant-design/icons';
// import { BsGraphUpArrow } from "react-icons/bs";

// const iconStyle = { fontSize: '20px' };

// const MenuList = [
//   {
//     key: '1',
//     path: "/hr-dashboard/hr-home", 
//     icon: <HomeOutlined style={iconStyle} />,
//     label: 'Home',
//   },
//   {
//     key: '2',
//     path:'/hr-dashboard/EMP-managment',
//     icon: <UserOutlined style={iconStyle} />,
//     label: 'Employee Management',
//   },
//   {
//     key: '3',
//     path:'/hr-dashboard/Payroll',
//     icon: <DollarOutlined style={iconStyle} />,
//     label: 'Payroll',
//   },
//   {
//     key: '4',
//     path:'/hr-dashboard/attendance',
//     icon: <FormOutlined style={iconStyle} />,
//     label: 'Attendance',
//   },
//   {
//     key: '5',
//     path:'/hr-dashboard/perfarmance',
//     icon: <BsGraphUpArrow style={iconStyle} />,
//     label: 'Performance Metrics',
//   },
//   {
//     key: 's',
//     label: 'Leave',
//     icon: <CalendarOutlined style={iconStyle} />,
//     children: [
//       {
//         key: '6',
//         path:'/hr-dashboard/leavemetrics',
//         label: 'Leave Metrics',
//       },
//       {
//         key: '8',
//         label: 'Option 6',
//       },
//     ],
//   },
//   {
//     key: '9',
//     path:'/hr-dashboard/settings',
//     label: 'Settings',
//     icon: <SettingOutlined style={iconStyle} />,
//   },
// ];

// export default MenuList;



 
import {
  SettingOutlined,
  UserOutlined,
  DollarOutlined,
  CalendarOutlined,
  HomeOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { BsGraphUpArrow } from "react-icons/bs";
import './MenuList.css'; // Import the CSS file
 
const iconStyle = { fontSize: '20px' };
 
const MenuList = [
  {
    key: '1',
    path: "/hr-dashboard/hr-home",
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
        path:'/hr-dashboard/edit-employee',
        label: <span className="menu-item-text">Add Employee</span>,
      },
      {
        key: '4',
        path:'/view-employee',
        label: <span className="menu-item-text">View Employee</span>,
      },
    ],
  },

  {
    key: '5',
    path:'/hr-dashboard/Payroll',
    icon: <DollarOutlined style={iconStyle} />,
    label: <span className="menu-item-text">Payroll</span>,
  },
  {
    key: '6',
    path:'/hr-dashboard/attendance',
    icon: <FormOutlined style={iconStyle} />,
    label: <span className="menu-item-text">Attendance</span>,
  },
  {
    key: '7',
    path:'/hr-dashboard/perfarmance',
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
        path:'/hr-dashboard/leavemetrics',
        label: <span className="menu-item-text">Leave</span>,
      },
      {
        key: '10',
        label: <span className="menu-item-text">Leave Metrics</span>,
      },
    ],
  },
  {
    key: '11',
    path:'/hr-dashboard/settings',
    label: <span className="menu-item-text">Settings</span>,
    icon: <SettingOutlined style={iconStyle} />,
  },
];
 
export default MenuList;
 