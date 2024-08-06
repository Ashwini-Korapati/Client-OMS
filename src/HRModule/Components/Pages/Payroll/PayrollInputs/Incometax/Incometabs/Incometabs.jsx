import React from 'react';
import { Tabs } from 'antd';
import Income from '../Income/Income';
import Previousemployer from '../Previousemployer/Previousemployer';
import Exemptions from '../Exemptions/Exemptions';
import Perquisite from '../Perquisite/Perquisite';
import Deductions from '../Deductions/Deductions';
import Otherincome from '../Otherincome/Otherincome';
import Houseproperty from '../Houseproperty/Houseproperty';
import Regime from '../Regime/Regime';
import Result from '../Result/Result';
 
const onChange = (key) => {
  console.log(key);
};
 
const items = [
  {
    key: '1',
    label: 'Income',
    children: <Income />,
  },
  {
    key: '2',
    label: 'Income From Previous Employer',
    children: <Previousemployer/>,
  },
  {
    key: '3',
    label: 'Exemptions',
    children: <Exemptions/>,
  },
  {
    key: '4',
    label: 'Perquisite',
    children: <Perquisite/>,
  },
  {
    key: '5',
    label: 'Deductions',
    children: <Deductions/>,
  },
  {
    key: '6',
    label: 'Other Income',
    children: <Otherincome/>,
  },
  {
    key: '7',
    label: 'House Property Income',
    children: <Houseproperty/>,
  },
  {
    key: '8',
    label: 'Regime',
    children: <Regime/>,
  },
  {
    key: '9',
    label: 'Result',
    children: <Result/>,
  }
];
 
const Incometabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
 
export default Incometabs;