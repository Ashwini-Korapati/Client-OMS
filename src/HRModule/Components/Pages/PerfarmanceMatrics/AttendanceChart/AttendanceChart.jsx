import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Card, Select } from 'antd';
import '../AttendanceChart/AttendaceChart.css'
 
const { Option } = Select;
 
const generateAttendanceData = () => {
  return [
    { month: 'January', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'February', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'March', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'April', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'May', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'June', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'July', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'August', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'September', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'October', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'November', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
    { month: 'December', employees: Math.floor(Math.random() * (85 - 70 + 1) + 70) },
  ];
};
 
const chartSetting = {
  yAxis: [{ label: 'Number of Employees' }],
  series: [{ dataKey: 'employees', label: 'Attendance' }],
  height: 400,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};
 
const AttendanceChart = () => {
  const [selectedYear, setSelectedYear] = useState('2023');
  const [attendanceData, setAttendanceData] = useState(generateAttendanceData());
 
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setAttendanceData(generateAttendanceData());
  };
 
  return (
    <Card className='Attendance' title="Attendance" bordered={false}>
      <Select
        defaultValue="2023"
        style={{ width: 120, marginBottom: 16 }}
        onChange={handleYearChange}
      >
        <Option value="2023">2023</Option>
        <Option value="2022">2022</Option>
        <Option value="2021">2021</Option>
        <Option value="2020">2020</Option>
      </Select>
      <div style={{ width: '90%' }}>
        <BarChart
          dataset={attendanceData}
          xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          {...chartSetting}
        />
      </div>
    </Card>
  );
};
 
export default AttendanceChart;