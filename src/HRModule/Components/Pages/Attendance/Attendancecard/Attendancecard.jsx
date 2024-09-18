import React, { useEffect } from 'react';
import './Attendancecard.css';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayAttendance } from '../../../../Redux/Slices/todayattendanceSlice';

const Attendancecard = () => {
  const dispatch = useDispatch();

  const { office, workFromHome, leave, totalPresent, loading, error } = useSelector(
    (state) => state.todayattendance
  );

  useEffect(() => {
    dispatch(fetchTodayAttendance());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Card className="attendance-card-container">
      <CardContent className="attendance-card-content">
        <Typography variant="h5" className="attendance-card-title">
          Today's Attendance
        </Typography>
        <Typography variant="body1" className="attendance-card-detail present">
          Employees Present: <span>{totalPresent}</span>
        </Typography>
        <Typography variant="body1" className="attendance-card-detail leave">
          Employees on Leave: <span>{leave}</span>
        </Typography>
        <Typography variant="body1" className="attendance-card-detail work-from-home">
          Employees Working from Home: <span>{workFromHome}</span>
        </Typography>
        <Typography variant="body1" className="attendance-card-detail office">
          Employees in Office: <span>{office}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Attendancecard;
