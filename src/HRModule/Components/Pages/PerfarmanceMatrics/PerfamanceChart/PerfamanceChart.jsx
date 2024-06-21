import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
 
const data = [
  { id: 0, value: 60, label: 'Full-time' },    
  { id: 1, value: 25, label: 'Part-time' },    
  { id: 2, value: 15, label: 'Interns' },      
];
 
const EmployeeTypePieChart = () => {
  return (
    <div className='pie-chart-container' style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={300}  
      />
    </div>
  );
}
 
export default EmployeeTypePieChart;