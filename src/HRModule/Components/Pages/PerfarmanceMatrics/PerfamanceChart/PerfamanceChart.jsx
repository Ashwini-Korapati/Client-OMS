import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Card } from 'antd';
import '../PerfamanceChart/PerfamanceChart.css'
 
const performanceData = [
  { name: 'Alice Johnson', performance: 85 },
  { name: 'Bob Smith', performance: 78 },
  { name: 'Charlie Brown', performance: 82 },
  { name: 'Diana Prince', performance: 79 },
  { name: 'Ethan Hunt', performance: 74 },
  { name: 'Fiona Gallagher', performance: 78 },
  { name: 'George Martin', performance: 76 },
  { name: 'Hannah Baker', performance: 74 },
];
 
const chartSetting = {
  yAxis: [{ label: 'Performance (%)' }],
  series: [{ dataKey: 'performance', label: 'Employee Performance' }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};
 
const PerformanceChart = () => (
<Card title="Employee Performance Chart" bordered={false}>
<div className="chart-container">
<BarChart
        dataset={performanceData}
        xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
        {...chartSetting}
      />
</div>
</Card>
);
 
export default PerformanceChart;