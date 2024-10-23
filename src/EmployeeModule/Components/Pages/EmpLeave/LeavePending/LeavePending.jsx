import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingLeave } from '../../../../../HRModule/Redux/Slices/leavePendingSlice'
import './LeavePending.css';

const LeavePending = () => {
  const [expandedId, setExpandedId] = useState(null);
  const dispatch = useDispatch();
  const { pendingLeaveData, loading, error } = useSelector((state) => state.leavePending);

  useEffect(() => {
    dispatch(fetchPendingLeave());
  }, [dispatch]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log('Pending Leave Data:', pendingLeaveData); // Check the data structure

  // Extract leaveRequests array from pendingLeaveData
  const leaveRequests = pendingLeaveData?.leaveRequests || [];

  return (
    <div className="leavepending-container-custom">
      {leaveRequests.length > 0 ? (
        leaveRequests.map((leave) => (
          <div key={leave.id} className="leavepending-card-custom"> {/* Use unique id */}
            <div className="leavepending-summary-custom" onClick={() => toggleExpand(leave.id)}>
              <div className="leavepending-category-type-custom">
                <span className="leavepending-emp-name-custom">{leave.emp_name || '-'}</span>
                <span className="leavepending-leave-type-custom"> - {leave.leave_type || '-'}</span>
              </div>
              <div className="leavepending-summary-right-custom">
                <span className="leavepending-days-custom">{leave.total_days || '-'} days</span>
                <span className={`leavepending-status-custom ${leave.status?.toLowerCase()}`}>{leave.status || 'PENDING'}</span>
                <span className="leavepending-expand-icon-custom">
                  {expandedId === leave.id ? '▲' : '▼'}
                </span>
              </div>
            </div>
            {expandedId === leave.id && (
              <div className="leavepending-details-custom">
                <div className="leavepending-detail-row-custom">
                  <span className="leavepending-detail-label-custom">Applied on:</span>
                  <span className="leavepending-detail-value-custom">{leave.postedDate || '-'}</span>
                </div>
                <div className="leavepending-detail-row-custom">
                  <span className="leavepending-detail-label-custom">From:</span>
                  <span className="leavepending-detail-value-custom">{leave.fromDate || '-'}</span>
                </div>
                <div className="leavepending-detail-row-custom">
                  <span className="leavepending-detail-label-custom">To:</span>
                  <span className="leavepending-detail-value-custom">{leave.toDate || '-'}</span>
                </div>
                <div className="view-details-custom">View Details</div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No pending leave requests</div>
      )}
    </div>
  );
};

export default LeavePending;
