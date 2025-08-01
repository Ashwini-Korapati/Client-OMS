
import React from 'react';
import {
  FaHome, FaUser, FaDollarSign, FaClipboardList, FaChartLine, FaCalendarAlt
} from 'react-icons/fa';
import {
  BsFillPersonPlusFill, BsPeopleFill, BsFileEarmarkText, BsInfoCircle, BsCashStack, BsPersonBoundingBox,
  BsCheckCircle, BsXCircle, BsEnvelopeOpenFill, BsPersonCheckFill, BsArrowRightCircle, BsGearFill
} from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import './MenuList.css'; 

const iconStyle = { fontSize: '20px' };

const MenuList = [
  {
    key: '1',
    path: "/hr-dashboard/hr-home",
    icon: <FaHome style={iconStyle} />,
    label: "Home",
  },
  {
    key: '2',
    label: "Employee Mgmt",
    icon: <FaUser style={iconStyle} />,
    children: [
      {
        key: '3',
        path: '/hr-dashboard/add-employee',
        icon: <BsFillPersonPlusFill style={iconStyle} />,
        label: "Add Employee",
      },
      {
        key: '4',
        path: '/hr-dashboard/view-employee',
        icon: <BsPeopleFill style={iconStyle} />,
        label: "View Employee",
      },
    ],
  },{
    key: '5',
    label: "Payroll",
    icon: <FaDollarSign style={iconStyle} />,
    children: [
      {
        key: '6',
        label: "Main",
        path: '/hr-dashboard/main',
        children: [
          {
            key: '24',
            path: '/hr-dashboard/overview',
            label: "Overview",
          },
        ],
      },
      // {
      //   key: '7',
      //   path: '/hr-dashboard/information',
      //   label: "Information",
      // },
      {
        key: '8',
        label: "Payroll Inputs",
        path: '/hr-dashboard/payroll-inputs',
        children: [
          {
            key: '9',
            path: '/hr-dashboard/salary',
            label: "Salary",
          },
          {
            key: '10',
            path: '/hr-dashboard/loan',
            label: "Loan",
          },
          {
            key: '11',
            path: '/hr-dashboard/salaryrevisions',
            label: "Salary Revisions",
          },
          {
            key: '12',
            path: '/hr-dashboard/income-tax',
            label: "Income Tax",
          },
          {
            key: '33',
            path: '/hr-dashboard/lop',
            label: "Employee LOP",
          },
          {
            key: '34',
            path: '/hr-dashboard/finalsettlementmain',
            label: "Final Settlement",
          },
        ],
      },
      {
        key: '41',
        path: '/hr-dashboard/process',
        label: "Process",
        children:[
          {
            key: '40',
            path: '/hr-dashboard/payroll-process',
            label: "Payroll Process",
          },
        ]
      },
      {
        key: '13',
        label: "Verify",
        children: [
          {
            key: '9',
            path: '/hr-dashboard/verify',
            label: "Payroll Statement",
          },
        ]
        
      },
      {
        key: '14',
        path: '/hr-dashboard/payout',
        label: "Payout",
        children: [
          {
            key: '9',
            path: '/hr-dashboard/release-payslips',
            label: "Payslips",
          },
        ]

      },
      {
        key: '15',
        path: '/hr-dashboard/published-info',
        label: "Published Info",
      },
      {
        key: '16',
        path: '/hr-dashboard/admin-payroll',
        label: "Admin",
      },
      {
        key: '17',
        path: '/hr-dashboard/setup',
        label: "Setup",
      },
    ],
  },
  {
    key: '18',
    label: "Attendance",
    icon: <FaClipboardList style={iconStyle} />,
    children: [
      {
        key: '26',
        label: "View Attendance",
        path: '/hr-dashboard/attendancetabs',
       
      },
      // {
      //   key: '27',
      //   label: "Apply Attendance",
      //   path: '/hr-dashboard/attendance',
      // },
    ]
    },
  {
    key: '19',
    label: "Time Mgmt",
    icon: <FaClipboardList style={iconStyle} />,
    children: [
      {
        key: '30',
        path: '/hr-dashboard/time-sheet',
        label: "Time Sheet Summary",
      },
      {
        key: '28',
        path: '/hr-dashboard/time-report',
        label: "Time Report Summary",
      },
      {
        key: '31',
        path: '/hr-dashboard/myapprovers',
        label: "My Approver",
      },
    ],
  },
  {
    key: '20',
    path: '/hr-dashboard/performance',
    icon: <FaChartLine style={iconStyle} />,
    label: "Performance Mgmt",
  },
  {
    key: '21',
    label: "Leave",
    icon: <FaCalendarAlt style={iconStyle} />,
    children: [
      {
        key: '22',
        path: '/hr-dashboard/apply-leave',
        label: "Apply Leave",
      },
      {
        key: '23',
        path: '/hr-dashboard/leave-report',
        label: "Leave Report",
      },
      {
        key: '24',
        path: '/hr-dashboard/leave-calender',
        label: "Leave Calendar",
      },
    ],
  },
];

export default MenuList;
