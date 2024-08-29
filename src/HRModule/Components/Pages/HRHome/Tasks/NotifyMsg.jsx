


// // import React, { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { fetchUnreadNotifications, markNotificationAsRead } from '../../../../Redux/Slices/notificationSlice';
// // import { useNavigate } from 'react-router-dom';
// // import '../Tasks/NotifyMsg.css';

// // const MyTasks = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { unreadNotifications, status, error } = useSelector((state) => state.notifications);

// //   useEffect(() => {
// //     dispatch(fetchUnreadNotifications());
// //   }, [dispatch]);

// //   // Handle notification click and mark as read
// //   const handleNotificationClick = (notification) => {
// //     // Navigate based on notification type
// //     if (notification.leave_id) {
// //       navigate(`/hr-dashboard/leave-report/${notification.leave_id}`);
// //     } else if (notification.notification.includes('birthday')) {
// //       navigate('/hr-dashboard/birthday');
// //     }
// //     // Mark notification as read
// //     dispatch(markNotificationAsRead(notification.id));
// //   };

// //   if (status === 'loading') {
// //     return <div>Loading notifications...</div>;
// //   }

// //   if (status === 'failed') {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className='notification-list'>
// //       <h3>Unread Notifications</h3>
// //       {unreadNotifications.length > 0 ? (
// //         unreadNotifications.map((notification) => (
// //           <div
// //             key={notification.id}
// //             className='notification-item'
// //             onClick={() => handleNotificationClick(notification)}
// //           >
// //             <p>{notification.id}: {notification.notification}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No unread notifications</p>
// //       )}
// //     </div>
 
// //   );
// // };

// // export default MyTasks;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUnreadNotifications, markNotificationAsRead } from '../../../../Redux/Slices/notificationSlice';
// import { useNavigate } from 'react-router-dom';
// import { IoIosNotifications } from 'react-icons/io';
// import './NotifyMsg.css';

// const MyTasks = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { unreadNotifications, status } = useSelector((state) => state.notifications);

//   useEffect(() => {
//     dispatch(fetchUnreadNotifications());
//   }, [dispatch]);

//   const handleMonitorClick = () => {
//     if (unreadNotifications.length > 0) {
//       // Get the first notification (for simplicity)
//       const notification = unreadNotifications[0];

//       // Navigate based on the notification type
//       if (notification.leave_id) {
//         navigate(`/hr-dashboard/leave-report/${notification.leave_id}`);
//       } else if (notification.notification.includes('birthday')) {
//         navigate('/hr-dashboard/birthday');
//       }
//       dispatch(markNotificationAsRead(notification.id)); // Mark the notification as read
//     }
//   };

//   if (status === 'loading') {
//     return <div>Loading your tasks...</div>;
//   }

//   if (unreadNotifications.length === 0) {
//     return <div className="task-notification-container">No tasks to review.</div>;
//   }

//   const notification = unreadNotifications[0]; // Assume we're only showing the first notification for simplicity

//   // Determine notification type (e.g., Leave Request, Birthday, etc.)
//   let notificationType = '';
//   if (notification.leave_id) {
//     notificationType = 'Leave Request';
//   } else if (notification.notification.includes('birthday')) {
//     notificationType = 'Birthday Notification';
//   } else {
//     notificationType = 'General Notification';
//   }

//   return (
//     <div className="task-notification-container">
//       <h3>MY Task</h3>
//       <div className="task-card">
//         <div className="task-icon">
//           <IoIosNotifications className="notification-bell-icon" />
//         </div>
//         <div className="task-content">
//           <p className="task-message">
//             <span className="notification-type">{notificationType}: </span>
//             You have 1 task to review
//           </p>
//           <button className="monitor-button" onClick={handleMonitorClick}>
//             Monitor
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyTasks;
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
    // Navigate based on the notification type
    if (notification.leave_id) {
      navigate(`/hr-dashboard/leave-report/${notification.leave_id}`);
    } else if (notification.notification.includes('birthday')) {
      navigate('/hr-dashboard/birthday');
    }
    dispatch(markNotificationAsRead(notification.id)); // Mark the notification as read
  };

  if (status === 'loading') {
    return <div>Loading your tasks...</div>;
  }

  if (unreadNotifications.length === 0) {
    return <div className="task-notification-container">No tasks to review.</div>;
  }

  return (
    <div className="task-notification-container">
      <h3>MY Tasks</h3>
      {unreadNotifications.map((notification) => {
        // Determine notification type (e.g., Leave Request, Birthday, etc.)
        let notificationType = '';
        if (notification.leave_id) {
          notificationType = 'Leave Request';
        } else if (notification.notification.includes('birthday')) {
          notificationType = 'Birthday Notification';
        } else {
          notificationType = 'General Notification';
        }

        return (
          <div key={notification.id} className="task-card">
            <div className="task-icon">
              <IoIosNotifications className="notification-bell-icon" />
            </div>
            <div className="task-content">
              <p className="task-message">
                <span className="notification-type">{notificationType}: </span>
                You have  task to review
              </p>
              <button className="monitor-button" onClick={() => handleMonitorClick(notification)}>
                Monitor
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyTasks;
