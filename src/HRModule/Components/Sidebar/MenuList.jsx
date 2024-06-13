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
    icon: <FormOutlined style={iconStyle} />,
    label: 'Attendance',
  },
  {
    key: '5',
    icon: <BsGraphUpArrow style={iconStyle} />,
    label: 'Perfarmance Matrics',
  },
  
  {
    key: 'sub1',
    label: 'Leave Metrics',
    icon: <CalendarOutlined style={iconStyle} />,
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Settings',
    icon: <SettingOutlined style={iconStyle} />,
  },
];

export default MenuList;
