
import React, { useState } from 'react';
import './Attendancetabs.css';
import { Tabs, Tab, Box } from '@mui/material';
import Attendancecard from '../Attendancecard/Attendancecard';
import MonthlyAttendance from '../Monthlyattendance/Monthlyattendance';

const AttendanceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className="attendance-container">
      <Box className="attendance-tabs">
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Today's Summary" />
          <Tab label="Monthly Attendance" />
        </Tabs>
      </Box>

      <Box className="attendance-content">
        {activeTab === 0 && (
          <Box className="attendance-card-container">
            <Attendancecard />
          </Box>
        )}

        {activeTab === 1 && (
          <Box className="attendance-table-container">
            <MonthlyAttendance /> 
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AttendanceTabs;
