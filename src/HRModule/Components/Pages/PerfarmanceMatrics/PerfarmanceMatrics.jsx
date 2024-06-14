// import React from 'react'
// import Perfcards from '../PerfarmanceMatrics/PerfamanceCards/Perfcards'

// const PerfarmanceMatrics = () => {
//   return (
//     <div>
//         <Perfcards/>
//     </div>
//   )
// }

// export default PerfarmanceMatrics


import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import PerformanceChart from '../PerfarmanceMatrics/PerfamanceChart/PerfamanceChart'
import EmployeeTable from '../PerfarmanceMatrics/EmployeeTable/EmployeeTable'
import AttendanceChart from '../PerfarmanceMatrics/AttendanceChart/AttendanceChart'
import Perfcards from '../PerfarmanceMatrics/PerfamanceCards/Perfcards'
import './PerfarmanceMatrics.css';
 
const { Content } = Layout;
const { Title } = Typography;
 
const PerformanceMetrics = () => (
  <Layout>
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      <div style={{ padding: 24, minHeight: 360 }}>
        <Title level={2} style={{ marginBottom: 24 }}>Performance Metrics</Title>
        <Row  gutter={[30, 30]}>
        <Col span={24}>
            <Perfcards />
          </Col>
          <div className='Second-container'>
          <Col span={24}>
            <PerformanceChart />
          </Col>
          <Col span={24}>
            <EmployeeTable />
          </Col>
      
          </div>
          <Col span={24}>
            <AttendanceChart />
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
);
 
export default PerformanceMetrics;