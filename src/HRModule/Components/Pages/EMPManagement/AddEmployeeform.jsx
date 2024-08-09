import React from 'react';
import '../Tasks/NotifyMsg.css'
import { FaTasks } from 'react-icons/fa';

const NotifyMsg = () => {
  return (
    <div className="my-tasks-container">
      <div className="sidebar">
        <FaTasks size={50} />
        <h3>0</h3>
        <p>Things to review</p>
        <h3>1</h3>
        <p>Things to monitor</p>
      </div>
      <div className="main-content">
        <div className="task-info">
          <div>
            <h2>Leave</h2>
            <p>1 task pending for others' review.</p>
          </div>
          <a href="#" className="monitor-link">Monitor</a>
        </div>
        <img className="task-image" src="path_to_your_image.png" alt="Task illustration" />
      </div>
    </div>
  );
};

export default NotifyMsg;
