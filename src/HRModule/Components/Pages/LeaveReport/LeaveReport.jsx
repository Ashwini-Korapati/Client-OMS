

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveData, setMonth, setEmployee, updateLeaveStatus } from '../../../Redux/Reducers/LeaveReportSlice';
import './LeaveReport.css';

const LeaveReport = () => {
  const dispatch = useDispatch();
  const { leaveData, selectedMonth, selectedEmployee, loading, error } = useSelector((state) => state.leavereport);

  useEffect(() => {
    dispatch(fetchLeaveData());
  }, [dispatch]);

  const handleMonthChange = (event) => {
    dispatch(setMonth(event.target.value));
  };

  const handleEmployeeChange = (event) => {
    dispatch(setEmployee(event.target.value));
  };

  const handleStatusChange = async (leaveId, status) => {
    const updatedLeaveData = leaveData.map(item => 
      item.id === leaveId ? { ...item, status } : item
    );

    dispatch({
      type: 'leavereport/setLeaveData',
      payload: updatedLeaveData,
    });

    await dispatch(updateLeaveStatus({ leaveId, status }));

    dispatch(fetchLeaveData());
  };

  return (
    <div className="leave-report-container">
      <div className="leave-report-filters">
        <select value={selectedMonth} onChange={handleMonthChange} style={{ width: 150, marginRight: 10 }}>
          <option value=""><em>Select Month</em></option>
          <option value="01/2024">January</option>
          <option value="02/2024">February</option>
          <option value="03/2024">March</option>
          <option value="04/2024">April</option>
          <option value="05/2024">May</option>
          <option value="06/2024">June</option>
          <option value="07/2024">July</option>
          <option value="08/2024">August</option>
          <option value="09/2024">September</option>
          <option value="10/2024">October</option>
          <option value="11/2024">November</option>
          <option value="12/2024">December</option>
        </select>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="error-message">Error: {error}</div>}
      <table className="leave-report-table">
        <thead>
          <tr>
            <th>Leave_ID</th>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Days</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.length > 0 ? (
            leaveData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.emp_id}</td>
                <td>{item.emp_name}</td>
                <td>{item.designation}</td>
                <td>{item.leave_type}</td>
                <td>{new Date(item.start_date).toLocaleDateString()}</td>
                <td>{new Date(item.end_date).toLocaleDateString()}</td>
                <td>{item.total_days}</td>
                <td>{item.reason}</td>
                <td>
                  {item.status === 'pending' ? (
                    <select
                      value={item.status}
                      className='status--select'
                      onChange={(e) => handleStatusChange(item.id, e.target.value)}
                      style={{ color: item.status === 'rejected' ? 'Red' : item.status === 'approved' ? 'green' : 'blue' }}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  ) : (
                    <span style={{ color: item.status === 'rejected' ? 'Red' : item.status === 'approved' ? 'green' : 'blue' }}>
                      {item.status}
                    </span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="no-data-message">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveReport;



