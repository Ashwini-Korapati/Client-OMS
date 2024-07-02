import React from 'react';
import { Table, Select } from 'antd';
import './LeaveReport.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMonth, setEmployee } from '../../../Redux/Reducers/LeaveReportSlice';

const { Option } = Select;

const LeaveReport = () => {
  const dispatch = useDispatch();
  const { leaveData = [], selectedMonth = '', selectedEmployee = '' } = useSelector((state) => state.leave || {});

  const handleMonthChange = (value) => {
    dispatch(setMonth(value));
  };

  const handleEmployeeChange = (value) => {
    dispatch(setEmployee(value));
  };

  const columns = [
    { title: 'EmpID', dataIndex: 'empID', key: 'empID', width: 100 },
    { title: 'Name', dataIndex: 'name', key: 'name', width: 150 },
    { title: 'Type', dataIndex: 'type', key: 'type', width: 150 },
    { title: 'Date', dataIndex: 'date', key: 'date', width: 150 },
    { title: 'Days', dataIndex: 'days', key: 'days', width: 100 },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      render: (text) => (
        <span className={`leave-report-status ${text.toLowerCase()}`}>{text}</span>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Select value={selectedMonth} onChange={handleMonthChange} style={{ width: 150, marginRight: 10 }}>
          <Option value=""><em>Select Month</em></Option>
          <Option value="01/2024">January</Option>
          <Option value="02/2024">February</Option>
          <Option value="03/2024">March</Option>
          <Option value="04/2024">April</Option>
          <Option value="05/2024">May</Option>
          <Option value="06/2024">June</Option>
          <Option value="07/2024">July</Option>
          <Option value="08/2024">August</Option>
          <Option value="09/2024">September</Option>
          <Option value="10/2024">October</Option>
          <Option value="11/2024">November</Option>
          <Option value="12/2024">December</Option>
        </Select>
        <Select value={selectedEmployee} onChange={handleEmployeeChange} style={{ width: 200 }}>
          <Option value=""><em>Select Employee</em></Option>
          {leaveData.map((item) => (
            <Option key={item.id} value={item.name}>{item.name}</Option>
          ))}
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={leaveData}
        pagination={{ pageSize: 5 }}
        rowClassName={(record, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
      />
    </>
  );
};

export default LeaveReport;
