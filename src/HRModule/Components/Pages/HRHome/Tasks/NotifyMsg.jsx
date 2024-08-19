// // src/components/MyTasks.js

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUnreadNotifications } from '../../../../Redux/Slices/notificationSlice'
// import { useNavigate } from 'react-router-dom';
// import '../Tasks/NotifyMsg.css';

// const MyTasks = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { unreadNotifications, status, error } = useSelector((state) => state.notifications);

//   useEffect(() => {
//     dispatch(fetchUnreadNotifications());
//   }, [dispatch]);

//   // Handle navigation based on notification type
//   const handleNotificationClick = (notification) => {
//     if (notification.leave_id) {
//       // Navigate to Leave Request component if leave_id exists
//       navigate(`/hr-dashboard/leave-report/${notification.leave_id}`);
//     } else if (notification.notification.includes('birthday')) {
//       // Navigate to Birthday component if the notification is about a birthday
//       navigate('/birthday');
//     }
//     // Add more conditions for different notification types if needed
//   };

//   if (status === 'loading') {
//     return <div>Loading notifications...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className='notification-list'>
//       <h3>Unread Notifications</h3>
//       {unreadNotifications.length > 0 ? (
//         unreadNotifications.map((notification) => (
//           <div
//             key={notification.id}
//             className='notification-item'
//             onClick={() => handleNotificationClick(notification)}
//           >
//             <p>{notification.notification}</p>
//           </div>
//         ))
//       ) : (
//         <p>No unread notifications</p>
//       )}
//     </div>
//   );
// };

// export default MyTasks;



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUnreadNotifications, markNotificationAsRead } from '../../../../Redux/Slices/notificationSlice';
import { useNavigate } from 'react-router-dom';
import '../Tasks/NotifyMsg.css';

const MyTasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { unreadNotifications, status, error } = useSelector((state) => state.notifications);

  // useEffect(() => {
  //   dispatch(fetchUnreadNotifications());
  // }, [dispatch]);

  // Handle notification click and mark as read
  const handleNotificationClick = (notification) => {
    // Navigate based on notification type
    if (notification.leave_id) {
      navigate(`/hr-dashboard/leave-report/${notification.leave_id}`);
    } else if (notification.notification.includes('birthday')) {
      navigate('/hr-dashboard/birthday');
    }
    // Mark notification as read
    dispatch(markNotificationAsRead(notification.id));
  };

  if (status === 'loading') {
    return <div>Loading notifications...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='notification-list'>
      <h3>Unread Notifications</h3>
      {unreadNotifications.length > 0 ? (
        unreadNotifications.map((notification) => (
          <div
            key={notification.id}
            className='notification-item'
            onClick={() => handleNotificationClick(notification)}
          >
            <p>{notification.id}: {notification.notification}</p>
          </div>
        ))
      ) : (
        <p>No unread notifications</p>
      )}
    </div>
  );
};

export default MyTasks;
