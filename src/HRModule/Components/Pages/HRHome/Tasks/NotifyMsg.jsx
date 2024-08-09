import React from 'react';
import '../Tasks/NotifyMsg.css'
import taskImage from '../Images/leaveap.png'
import taskimg from '../Images/task.png'


const MyTasks = () => {
  return (
    <div className='task-main-conatiner'>
            <h3 className='mytask'>My Task</h3>

    <div className="my-tasks-container">
      <div>
      </div>
  

      <div className="task-sidebar">
        <div className="task-sidebar-content">
          <div className="task-sidebar-text">
          <img className="task-image1" src={taskimg} alt="Task illustration" />
            <h3>0</h3>
            <p>Things to review</p>
          </div>
          <div className="task-sidebar-text">
            <h3>1</h3>
            <p>Things to monitor</p>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="task-info">
          <div>
            <h2>Leave</h2>
            <p>1 task pending for others' review.</p>
          </div>
          <a href="#" className="monitor-link">Monitor</a>
        </div>
        {/* <img className="task-image" src={taskImage} alt="Task illustration" /> */}
      </div>
    </div>
    </div>
  );
};

export default MyTasks;
