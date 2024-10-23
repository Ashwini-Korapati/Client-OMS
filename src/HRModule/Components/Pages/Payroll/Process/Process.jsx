import React, { useState } from 'react';
import { HelpCircle, Search, MessageCircle, Settings, RotateCcw, ChevronDown } from 'lucide-react';
import './Process.css'

const PayrollInterface = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const processLogs = [
    {
      month: 'Sep 2024',
      description: 'Took 12.579 seconds for DEMO [demo01].',
      processInfo: 'Processed on Last Monday at 6:25 PM by admin',
      status: 'COMPLETED',
    },
    {
      month: 'Sep 2024',
      description: 'Took 1.679 seconds for DEMO [demo01].',
      processInfo: 'Processed on Last Monday at 6:25 PM by admin',
      status: 'COMPLETED',
    },
    {
      month: 'Sep 2024',
      description: 'Took 12.083 seconds for DEMO [demo01].',
      processInfo: 'Processed on Last Monday at 6:24 PM by admin',
      status: 'COMPLETED',
    },
  ];

  const checklistItems = [
    'Lock Previous Payroll',
    'Employee Additions',
    'Employee Separations',
    'Employee Confirmations',
    'Employee Data Updates',
  ];

  return (
    <div className='payroll-container1'>
    <div className="payroll-container">
      {/* Header */}
      <div className="payroll-header">
        <h1 className="payroll-title">Payroll Process</h1>
        <div className="payroll-actions">

        </div>
      </div>

      {/* Main Content */}

      <div className="process-buttons">
        <button className="process-button">
          <Settings className="icon" />
          Process Payroll
        </button>
      </div>

      {/* Process Log */}
      <div className="process-log">
        <h2 className="log-title">Last 20 process log</h2>
        <div className="log-table">
          <table>
            <thead className="log-header">
              <tr>
                <th>Payroll</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {processLogs.map((log, index) => (
                <tr key={index}>
                  <td>{log.month}</td>
                  <td>
                    <div>{log.description}</div>
                    <div className="process-info">{log.processInfo}</div>
                  </td>
                  <td>
                    <span className="completed-status">
                      <RotateCcw className="icon" />
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Checklist Section */}
      <div className="checklist-section">
        <div className="checklist">
          <h2 className="checklist-title">Checklist</h2>
          <div className="checklist-items">
            {checklistItems.map((item, index) => (
              <label key={index} className="checklist-item">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCompletedTasks([...completedTasks, item]);
                    } else {
                      setCompletedTasks(completedTasks.filter((task) => task !== item));
                    }
                  }}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="completed-tasks">
          <div className="completed-header">
            <h2 className="completed-title">Completed Tasks</h2>
            <button className="reset-button">Reset</button>
          </div>
          {completedTasks.length === 0 ? (
            <p className="empty-message">Feeling empty. Tick off some items & make my day...</p>
          ) : (
            <ul className="completed-list">
              {completedTasks.map((task, index) => (
                <li key={index} className="completed-item">
                  <span className="completed-check">✓</span> {task}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PayrollInterface;
