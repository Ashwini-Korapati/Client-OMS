import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUnreadNotifications, markNotificationAsRead } from '../../../../Redux/Slices/notificationSlice';
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import './NotifyMsg.css';

const MyTasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { unreadNotifications, status } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchUnreadNotifications());
  }, [dispatch]);

  const handleMonitorClick = (notification) => {
    if (notification.leave_id) {
      navigate(`/hr-dashboard/leave-report/${notification.leave_id}`);
    } else if (notification.notification.includes('birthday')) {
      navigate('/hr-dashboard/birthday');
    }
    dispatch(markNotificationAsRead(notification.id));
  };

  if (status === 'loading') {
    return <div className="loading-message">Loading your tasks...</div>;
  }

  return (
    <div className="task-notification-container">
      <h3>My Tasks</h3>
      {unreadNotifications.length > 0 ? (
        <div className="task-list">
          {unreadNotifications.map((notification) => {
            let notificationType = '';
            if (notification.leave_id) {
              notificationType = 'Leave Request';
            } else if (notification.notification.includes('birthday')) {
              notificationType = 'Birthday Notification';
            } else {
              notificationType = 'General Notification';
            }

            return (
              <div key={notification.id} className="task-card" onClick={() => handleMonitorClick(notification)}>
                <div className="task-icon">
                  <IoIosNotifications className="notification-bell-icon" />
                </div>
                <div className="task-content">
                  <p className="task-message">
                    <span className="notification-type">{notificationType}: </span>
                    You have a new task to review.
                  </p>
                  <button className="monitor-button">Monitor</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-tasks-message">No tasks to review.</div>
      )}
    </div>
  );
};

export default MyTasks;