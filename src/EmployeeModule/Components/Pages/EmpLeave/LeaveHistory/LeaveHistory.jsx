import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveStatus, updateLeaveStatus, clearUpdateStatus } from '../../../../../HRModule/Redux/Slices/leaveHistorySlice'
import './LeaveHistory.css';

const LeaveHistory = () => {
  const [expandedId, setExpandedId] = useState(null);
  const dispatch = useDispatch();
  
  // Get state from Redux store
  const { leaveData = [], loading, error, updateStatusSuccess } = useSelector((state) => state.leaveHistory);

  // Fetch leave data on component mount
  useEffect(() => {
    dispatch(fetchLeaveStatus());
  }, [dispatch]);

  // Clear success message after some time
  useEffect(() => {
    if (updateStatusSuccess) {
      setTimeout(() => {
        dispatch(clearUpdateStatus());
      }, 3000);
    }
  }, [updateStatusSuccess, dispatch]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleStatusUpdate = (leaveId, status) => {
    dispatch(updateLeaveStatus({ leaveId, status }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="leave-history-container-custom">
      {updateStatusSuccess && <div className="update-success">{updateStatusSuccess}</div>}

      {leaveData.map((leave) => (
        <div key={leave.emp_id + leave.postedDate} className="leave-card-custom"> {/* Use a unique key */}
          <div className="leave-summary-custom" onClick={() => toggleExpand(leave.emp_id + leave.postedDate)}>
            <div className="leave-category-type">
              <span className="category-custom">{leave.leave_type}</span> - 
              <span className="leave-type-custom">{leave.leave_type}</span>
            </div>
            <div className="leave-summary-right-custom">
              <span className="days-custom">{leave.total_days} days</span>
              <span className={`status-custom ${leave.status?.toLowerCase()}`}>{leave.status}</span>

              <span className="expand-icon-custom">
                {expandedId === leave.emp_id + leave.postedDate ? '▲' : '▼'}
              </span>
            </div>
          </div>
          {expandedId === leave.emp_id + leave.postedDate && (
            <div className="leave-details-custom">
              {leave.total_days && (
                <div className="leave-detail-row">
                  <span className="detail-label">Total Days:</span>
                  <span className="detail-value">{leave.total_days}</span>
                </div>
              )}
              <div className="leave-detail-row">
                <span className="detail-label">Posted on:</span>
                <span className="detail-value">{leave.postedDate}</span>
              </div>
              <div className="leave-detail-row">
                <span className="detail-label">From:</span>
                <span className="detail-value">{leave.fromDate}</span>
              </div>
              <div className="leave-detail-row">
                <span className="detail-label">To:</span>
                <span className="detail-value">{leave.toDate}</span>
              </div>
              <div className="view-details-custom">View Details</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeaveHistory;
