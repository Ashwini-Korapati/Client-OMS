import { useState } from 'react';
import './Monthlyattendance.css';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Button, Box, CircularProgress, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeAttendanceByMonth } from '../../../../Redux/Slices/monthlyattendanceSlice';

const monthOptions = [
  { name: 'January', value: 1 },
  { name: 'February', value: 2 },
  { name: 'March', value: 3 },
  { name: 'April', value: 4 },
  { name: 'May', value: 5 },
  { name: 'June', value: 6 },
  { name: 'July', value: 7 },
  { name: 'August', value: 8 },
  { name: 'September', value: 9 },
  { name: 'October', value: 10 },
  { name: 'November', value: 11 },
  { name: 'December', value: 12 },
];

const MonthlyAttendance = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const dispatch = useDispatch();
  const { attendanceData, loading, error, employeeName, employeeDesignation } = useSelector((state) => state.monthlyattendance);

  const handleSearchAttendance = () => {
    if (employeeId && month && year) {
      dispatch(fetchEmployeeAttendanceByMonth({ emp_id: employeeId, month, year }));
    }
  };

  
  return (
    <>
        {employeeName && employeeDesignation && (
          <Typography variant="h6" className="employee-info">
           Name :- {employeeName}
           <br/> 
           Designation :- {employeeDesignation}
          </Typography>
        )}
        <br/>
    <Box className="monthly-attendance-container">
      <Box className="attendance-input-container">
    
        <TextField
          label="Enter Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          variant="outlined"
          className="attendance-input"
        />
        <FormControl variant="outlined" className="attendance-input">
          <InputLabel>Select Month</InputLabel>
          <Select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            label="Select Month"
          >
            {monthOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          variant="outlined"
          className="attendance-input"
          type="number"
        />
        <Button onClick={handleSearchAttendance} className="custom-button">
          View Attendance
        </Button>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Table className="attendance-table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Check-In Time</TableCell>
              <TableCell>Check-Out Time</TableCell>
              <TableCell>Total Worked Hours</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {attendanceData.length > 0 ? (
              attendanceData.map((attendance, index) => (
                <TableRow key={index}>
                  <TableCell>{attendance.date}</TableCell>
                  <TableCell>{attendance.check_in || 'N/A'}</TableCell>
                  <TableCell>{attendance.check_out || 'N/A'}</TableCell>
                  <TableCell>{attendance.total_hours || 'N/A'}</TableCell>
                  <TableCell>{attendance.location || 'N/A'}</TableCell>
                  <TableCell>{attendance.attdence_status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No Attendance Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody> */}

<TableBody>
  {attendanceData.length > 0 ? (
    attendanceData.map((attendance, index) => {
      const formatTime = (time) => {
        if (!time) return 'N/A';
        const timeParts = time.split(':');
        return `${timeParts[0]}:${timeParts[1]}:${timeParts[2].split('.')[0]}`; // Splits and removes milliseconds
      };

      return (
        <TableRow key={index}>
          <TableCell>{attendance.date}</TableCell>
          <TableCell>{formatTime(attendance.check_in)}</TableCell>
          <TableCell>{formatTime(attendance.check_out)}</TableCell>
          <TableCell>{attendance.total_hours || 'N/A'}</TableCell>
          <TableCell>{attendance.location || 'N/A'}</TableCell>
          <TableCell>{attendance.attdence_status}</TableCell>
        </TableRow>
      );
    })
  ) : (
    <TableRow>
      <TableCell colSpan={6} align="center">
        No Attendance Data Found
      </TableCell>
    </TableRow>
  )}
</TableBody>

        </Table>
      )}
    </Box>
    </>
  );
};

export default MonthlyAttendance;
