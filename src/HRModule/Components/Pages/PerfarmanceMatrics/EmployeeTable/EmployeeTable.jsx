import React, { useState } from 'react';
import { Table, Tag } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import '../EmployeeTable/EmployeeTable.css'
 
const employeeData = [
  { key: '1', name: 'Alice Johnson', position: 'Software Engineer', performance: 85, status: 'Completed' },
  { key: '2', name: 'Bob Smith', position: 'Project Manager', performance: 78, status: 'In Progress' },
  { key: '3', name: 'Charlie Brown', position: 'UX/UI Designer', performance: 80, status: 'In Progress' },
  { key: '4', name: 'Diana Prince', position: 'QA Engineer', performance: 79, status: 'Completed' },
  { key: '5', name: 'Ethan Hunt', position: 'DevOps Engineer', performance: 74, status: 'In Progress' },
  { key: '6', name: 'Fiona Gallagher', position: 'Business Analyst', performance: 78, status: 'Completed' },

];
 
const EmployeeTable = () => {
  const [sortedInfo, setSortedInfo] = useState({});
 
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
 
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    {
      title: (
<div>
          Performance{' '}
          {sortedInfo.order === 'ascend' ? <CaretUpOutlined /> : sortedInfo.order === 'descend' ? <CaretDownOutlined /> : null}
</div>
      ),
      dataIndex: 'performance',
      key: 'performance',
      sorter: (a, b) => a.performance - b.performance,
      sortOrder: sortedInfo.columnKey === 'performance' && sortedInfo.order,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
<Tag color={status === 'Completed' ? 'green' : 'volcano'} key={status}>
          {status}
</Tag>
      ),
    },
  ];
 
  return <div className="table-container"><Table columns={columns} dataSource={employeeData} onChange={handleChange} /></div>;
};
 
export default EmployeeTable;