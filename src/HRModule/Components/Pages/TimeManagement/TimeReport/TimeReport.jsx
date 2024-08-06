// import React from 'react';
// import { Table } from 'antd';
// import './TimeReport.css';

// const columns = [
//   {
//     title: 'Project Name',
//     dataIndex: 'projectName',
//     key: 'projectName',
//   },
//   {
//     title: 'Onsite/Offshore',
//     dataIndex: 'onsiteOffshore',
//     key: 'onsiteOffshore',
//   },
//   {
//     title: 'Billing Action',
//     dataIndex: 'billingAction',
//     key: 'billingAction',
//   },
//   {
//     title: 'Billing Location',
//     dataIndex: 'billingLocation',
//     key: 'billingLocation',
//   },
//   {
//     title: '22 SAT',
//     dataIndex: 'sat',
//     key: 'sat',
//   },
//   {
//     title: '23 SUN',
//     dataIndex: 'sun',
//     key: 'sun',
//   },
//   {
//     title: '24 MON',
//     dataIndex: 'mon',
//     key: 'mon',
//   },
//   {
//     title: '25 TUE',
//     dataIndex: 'tue',
//     key: 'tue',
//   },
//   {
//     title: '26 WED',
//     dataIndex: 'wed',
//     key: 'wed',
//   },
//   {
//     title: '27 THU',
//     dataIndex: 'thu',
//     key: 'thu',
//   },
//   {
//     title: '28 FRI',
//     dataIndex: 'fri',
//     key: 'fri',
//   },
//   {
//     title: 'Total Hours',
//     dataIndex: 'totalHours',
//     key: 'totalHours',
//   },
// ];

// const data = [
//   {
//     key: '1',
//     projectID: '1000420159',
//     projectName: 'Google xWS - OB & Vendor Mgmt',
//     taskActivityID: '00000000000007',
//     taskActivityDescription: 'Transaction Processing',
//     onsiteOffshore: 'ON',
//     billingAction: 'Billable',
//     billingLocation: 'DFLT',
//     sat: '',
//     sun: '',
//     mon: '9.00',
//     tue: '9.00',
//     wed: '9.00',
//     thu: '',
//     fri: '',
//     totalHours: '27.00',
//   },
//   {
//     key: '2',
//     projectID: '',
//     projectName: '',
//     taskActivityID: '',
//     taskActivityDescription: 'Swipe in hours',
//     onsiteOffshore: '',
//     billingAction: '',
//     billingLocation: '',
//     sat: '',
//     sun: '',
//     mon: '',
//     tue: '',
//     wed: '',
//     thu: '',
//     fri: '',
//     totalHours: '0.00',
//   },
//   {
//     key: '3',
//     projectID: '',
//     projectName: '',
//     taskActivityID: '',
//     taskActivityDescription: 'Top up hours',
//     onsiteOffshore: '',
//     billingAction: '',
//     billingLocation: '',
//     sat: '',
//     sun: '',
//     mon: '',
//     tue: '',
//     wed: '',
//     thu: '',
//     fri: '',
//     totalHours: '0.00',
//   },
//   {
//     key: '4',
//     projectID: '',
//     projectName: '',
//     taskActivityID: '',
//     taskActivityDescription: 'Holiday (Public/National)',
//     onsiteOffshore: '',
//     billingAction: '',
//     billingLocation: '',
//     sat: '',
//     sun: '',
//     mon: '',
//     tue: '',
//     wed: '9.00',
//     thu: '9.00',
//     fri: '',
//     totalHours: '18.00',
//   },
//   {
//     key: '5',
//     projectID: '',
//     projectName: '',
//     taskActivityID: '',
//     taskActivityDescription: 'Time Off',
//     onsiteOffshore: '',
//     billingAction: '',
//     billingLocation: '',
//     sat: '',
//     sun: '',
//     mon: '',
//     tue: '',
//     wed: '',
//     thu: '',
//     fri: '',
//     totalHours: '0.00',
//   },
// ];

// const TimeReport = () => (
//   <div className="time-report">
//     <div className="header">
//       <h1>Time Report Summary</h1>
//       <div className="header-info">
//         <p className="info">John Lawrence</p>
//         <p className="info">Period End Date: 06/28/2024</p>
//         <p className="info">Status: Submitted for Approval</p>
//         <p className="info">Time Report ID: 0146174956</p>
//       </div>
//     </div>
//     <Table
//       columns={columns}
//       dataSource={data}
//       pagination={false}
//       bordered
//     />
//     <div className="footer">
//       <p>TruTime Hours: 0.00</p>
//       <p>Grand Total: 45.00</p>
//     </div>
//   </div>
// );

// export default TimeReport;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './TimeReport.css';

const TimeReport = () => {
  const location = useLocation();
  const week = location.state ? location.state.week : null;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const filteredData = week && week.data ? week.data.filter((entry) => {
    const matchesSearchTerm = entry.projectName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = selectedMonth ? new Date(entry.date).getMonth() + 1 === parseInt(selectedMonth) : true;
    return matchesSearchTerm && matchesMonth;
  }) : [];

  return (
    <div className="time-report-container">
      <div className="time-report-header">
        <h1>Time Report Summary</h1>
        {week && (
          <div className="time-report-header-info">
            <p>John Lawrence</p>
            <p>Period End Date: {week.dateRange.split(' ')[2]}</p>
            <p>Status: {week.status}</p>
            <p>Time Report ID: 0146174956</p>
          </div>
        )}
      </div>
      <div className="time-report-filters">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">All Months</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <table className="time-report-table">
        <thead>
          <tr>
            <th>Onsite/Offshore</th>
            <th>Billing Action</th>
            <th>Billing Location</th>
            <th>22 SAT</th>
            <th>23 SUN</th>
            <th>24 MON</th>
            <th>25 TUE</th>
            <th>26 WED</th>
            <th>27 THU</th>
            <th>28 FRI</th>
            <th>Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.onsiteOffshore}</td>
              <td>{entry.billingAction}</td>
              <td>{entry.billingLocation}</td>
              <td>{entry.sat}</td>
              <td>{entry.sun}</td>
              <td>{entry.mon}</td>
              <td>{entry.tue}</td>
              <td>{entry.wed}</td>
              <td>{entry.thu}</td>
              <td>{entry.fri}</td>
              <td>{entry.totalHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {week && (
        <div className="time-report-footer">
          <p>TruTime Hours: {week.truTime}</p>
          <p>Grand Total: {week.billable + week.nonBillable + week.timeOff}</p>
        </div>
      )}
    </div>
  );
};

export default TimeReport;
