import React from 'react';
import { Table } from 'antd';
import './LoanDetails.css';
 
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Trans Type',
    dataIndex: 'transType',
    key: 'transType',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'To Principal',
    dataIndex: 'toPrincipal',
    key: 'toPrincipal',
  },
  {
    title: 'To Interest',
    dataIndex: 'toInterest',
    key: 'toInterest',
  },
  {
    title: 'Actual Principal',
    dataIndex: 'actualPrincipal',
    key: 'actualPrincipal',
  },
  {
    title: 'Actual Interest',
    dataIndex: 'actualInterest',
    key: 'actualInterest',
  },
  {
    title: 'Remarks',
    dataIndex: 'remarks',
    key: 'remarks',
  },
  {
    title: 'Perk Value',
    dataIndex: 'perkValue',
    key: 'perkValue',
  },
  {
    title: 'Perk Amount',
    dataIndex: 'perkAmount',
    key: 'perkAmount',
  },
];
 
const LoanDetails = () => (
  <div className="loan-details-table">
    <Table columns={columns} dataSource={[]} pagination={false} bordered />
  </div>
);
 
export default LoanDetails;