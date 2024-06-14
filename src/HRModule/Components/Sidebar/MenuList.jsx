import {
  SettingOutlined,
  UserOutlined,
  DollarOutlined,
  CalendarOutlined,
  HomeOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { BsGraphUpArrow } from "react-icons/bs";

const iconStyle = { fontSize: '20px' };

const MenuList = [
  {
    key: '1',
    path: "/hr-dashboard/hr-home", 
    icon: <HomeOutlined style={iconStyle} />,
    label: 'Home',
  },
  {
    key: '2',
    path:'/hr-dashboard/EMP-managment',
    icon: <UserOutlined style={iconStyle} />,
    label: 'Employee Management',
  },
  {
    key: '3',
    path:'/hr-dashboard/Payroll',
    icon: <DollarOutlined style={iconStyle} />,
    label: 'Payroll',
  },
  {
    key: '4',
    path:'/hr-dashboard/attendance',
    icon: <FormOutlined style={iconStyle} />,
    label: 'Attendance',
  },
  {
    key: '5',
    path:'/hr-dashboard/perfarmance',
    icon: <BsGraphUpArrow style={iconStyle} />,
    label: 'Performance Metrics',
  },
  {
    key: 's',
    label: 'Leave',
    icon: <CalendarOutlined style={iconStyle} />,
    children: [
      {
        key: '6',
        path:'/hr-dashboard/leavemetrics',
        label: 'Leave Metrics',
      },
      {
        key: '8',
        label: 'Option 6',
      },
    ],
  },
  {
    key: '9',
    path:'/hr-dashboard/settings',
    label: 'Settings',
    icon: <SettingOutlined style={iconStyle} />,
  },
];

export default MenuList;
