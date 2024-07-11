import {
    SettingOutlined,
    UserOutlined,
    DollarOutlined,
    CalendarOutlined,
    HomeOutlined,
    FormOutlined,
  } from '@ant-design/icons';
  import { BsGraphUpArrow } from "react-icons/bs";
  import '../EmpSidebar/EmpMenu.css'
   
  const iconStyle = { fontSize: '20px' };
   
  const EmpList = [
    {
      key: '1',
      path: "/emp-dashboard/emphome",
      icon: <HomeOutlined style={iconStyle} />,
      label: <span className="menu-item-text">Home</span>,
    },
   
    {
      key: '2',
      path:'/emp-dashboard/attendance',
      icon: <FormOutlined style={iconStyle} />,
      label: <span className="menu-item-text">Attendance</span>,
    },
   
    {
        key: '3',
        path:'/emp-dashboard/leave',
        icon: <CalendarOutlined style={iconStyle} />,
        label: <span className="menu-item-text">Leave</span>,
      },
 
    {
      key: '4',
      path:'/emp-dashboard/checkout',
      label: <span className="menu-item-text">Checkout</span>,
      icon: <SettingOutlined style={iconStyle} />,
    },
  ];
   
  export default EmpList;